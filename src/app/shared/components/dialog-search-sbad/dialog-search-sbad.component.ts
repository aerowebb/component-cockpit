import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';

import { AWPropertiesConstants } from '../../constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../constants/bido-function-type-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { DateService } from '../../services/date.service';
import { MessageService } from '../../services/message.service';
import { PropertiesService } from '../../services/properties.service';
import { FindBireSbsBySbCriteriaInput } from '../../types/api-input-types/product-structure-management/find-bire-sbs-by-sb-criteria-input.interface';
import { FindFamilyVariantInput } from '../../types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BireSbDTO } from '../../types/api-types/bire-sb-dto.interface';
import { FamilyVariantDTO } from '../../types/api-types/family-variant-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../types/dialog-component';
import { LabelValue } from '../../types/label-value.interface';
import { TableColumn } from '../../types/table-column.interface';
import { LabelValueUtils } from '../../utils/label-value-utils';

import { DialogSearchSbAdService } from './dialog-search-sbad.service';

interface ResultTableRow {
  sbNumber: string;
  sbRevisionNumber: string;
  statusState: string | undefined;
  sbType: string | undefined;
  sbCompliance: string | undefined;
  sbClass: string | undefined;
  sbPublicationDate: string | undefined;
  sbEffectiveDate: string | undefined;
  sbDocumentUrl: string | undefined;
  sbTitle: string | undefined;
  _obj: BireSbDTO;
  expand: boolean;
  dataKey: string;
}

@Component({
  selector: 'aw-dialog-search-sbad',
  templateUrl: 'dialog-search-sbad.component.html',
  styleUrls: ['./dialog-search-sbad.component.scss']
})
export class DialogSearchSbAdComponent extends DialogComponent implements OnInit {
  @Input()
  public revisionNumber: string | undefined;
  @Input()
  public dialogType: string | undefined;

  @Output()
  public onValidated = new EventEmitter<BireSbDTO>();

  public searchObject: BireSbDTO;
  public resultsTable: SearchResultsDTO<ResultTableRow>;
  public tableColList: TableColumn[];
  public isLoading: boolean;
  public selectedRow: ResultTableRow | undefined;
  public familyVariant: string | undefined;

  public familyVariantDTOList: FamilyVariantDTO[];
  public propertyType: LabelValue<string>[];
  public propertyStatus: LabelValue<string>[];
  public propertyVariant: LabelValue<string>[];
  public propertyCompliance: LabelValue<string>[];

  public constructor(
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    private readonly dialogSearchSbAdService: DialogSearchSbAdService,
    public dateService: DateService
  ) {
    super(ComponentOpenMode.Write, 'DialogSearchSbAdComponent');
    this.propertyVariant = [];
    this.propertyStatus = [];
    this.propertyCompliance = [];
    this.familyVariantDTOList = [];

    this.resetControls();
    this.setTableColList();
  }

  private resetControls(): void {
    this.selectedRow = undefined;
    this.searchObject = {};
    this.resultsTable = { list: [], moreResults: false };
    this.familyVariant = undefined;
  }

  public ngOnInit(): void {
    this.loadDropDownList();
    if (!!this.revisionNumber) {
      this.searchObject.sbNumber = this.revisionNumber;
    }
    if (this.dialogType === 'AD') {
      this.searchObject.sbType = AWPropertiesConstants.SB_TYPE_AD_KEY;
    }
  }

  public search(): void {
    this.isLoading = true;
    let familyCode: string | undefined;
    let structureType: string | undefined;
    let variantCode: string | undefined;

    if (this.familyVariantDTOList) {
      const familyVariantObject = this.familyVariantDTOList.find(
        (family) => !!family.labelValueDTO && family.labelValueDTO.label === this.familyVariant
      );
      if (familyVariantObject) {
        familyCode = familyVariantObject.familyCode || undefined;
        structureType = familyVariantObject.structureType || undefined;
        variantCode = familyVariantObject.variantCode || undefined;
      } else {
        familyCode = undefined;
        structureType = undefined;
        variantCode = undefined;
      }
    } else {
      familyCode = undefined;
      structureType = undefined;
      variantCode = undefined;
    }
    const findBireSbsBySbCriteriaInput: FindBireSbsBySbCriteriaInput = {
      bireSbDTO: this.searchObject,
      familyCode,
      structureType,
      variantCode
    };

    this.dialogSearchSbAdService.findBireSbsBySbCriteria(findBireSbsBySbCriteriaInput).subscribe((results) => {
      if (results) {
        this.resultsTable.moreResults = results.moreResults;
        this.resultsTable.list = results.list.map((obj) => {
          const row: ResultTableRow = {
            _obj: obj,
            sbNumber: obj.sbNumber || '',
            sbRevisionNumber: obj.sbRevisionNumber || '',
            statusState: obj.statusState,
            sbType: obj.sbType,
            sbCompliance: obj.sbCompliance,
            sbClass: obj.sbClass,
            sbPublicationDate: this.dateService.dateToString(obj.sbPublicationDate),
            sbEffectiveDate: this.dateService.dateToString(obj.sbEffectiveDate),
            sbDocumentUrl: obj.sbDocumentUrl,
            sbTitle: obj.sbTitle,
            expand: false,
            dataKey: `${obj.sbNumber} ${obj.sbRevisionNumber}`
          };

          return row;
        });

        this.resultsTable.list.forEach((element) => {
          LabelValueUtils.stringValueToLabel<ResultTableRow>(element, 'statusState', this.propertyStatus);
          LabelValueUtils.stringValueToLabel<ResultTableRow>(element, 'sbCompliance', this.propertyCompliance);
          LabelValueUtils.stringValueToLabel<ResultTableRow>(element, 'sbType', this.propertyType);
        });
      }

      this.isLoading = false;
    });
  }

  public toggleRowDetailsVisibility(row: ResultTableRow): void {
    row.expand = !row.expand;
  }

  public cancel(): void {
    super.closeDialog();
  }

  public validate(): void {
    if (!this.selectedRow) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelection'));
    } else {
      this.onValidated.emit(this.selectedRow._obj);
      super.closeDialog();
    }
  }

  private loadDropDownList(): void {
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: BidoFunctionTypeConstants.UC_MCH_BOM,
      module: BidoFunctionTypeConstants.MODULE_FAMILY
    };
    const familyVariantlist$ = this.dialogSearchSbAdService.getFamilyVariants(familyVariantInput);
    const statusList$ = this.propertiesService.getObjectStatusList(true, false, false, '3-loa', false); // this.propertiesService.getValue('getFuncObjectStatusMap'); //
    const typeList$ = this.propertiesService.getValue('getSbTypeMap');
    const compilanceList$ = this.propertiesService.getValue('getComplianceMap');

    forkJoin({
      familyVariant: familyVariantlist$,
      statusList: statusList$,
      typeList: typeList$,
      compilanceList: compilanceList$
    }).subscribe(({ familyVariant, statusList, typeList, compilanceList }) => {
      if (familyVariant) {
        const list: LabelValue<string>[] = [];
        familyVariant.forEach((element) => {
          if (!!element.labelValueDTO) {
            list.push(element.labelValueDTO);
          } else {
            super.throwUnboundLocalError('loadFamilyVariants', 'element.labelValueDTO');
          }
        });
        this.propertyVariant = list;
        this.familyVariantDTOList = familyVariant;
      }

      if (statusList) {
        statusList.forEach((element) => {
          if (this.propertyStatus.filter((status) => status.value === element.value).length === 0) {
            this.propertyStatus.push(element);
          }
        });
        this.propertyStatus = [...this.propertyStatus];
      }

      if (typeList) {
        if (this.dialogType === 'SB') {
          this.propertyType = typeList.filter((obj) => {
            return obj.value !== AWPropertiesConstants.SB_TYPE_AD_KEY;
          });
        } else {
          this.propertyType = typeList;
        }
      }

      if (compilanceList) {
        this.propertyCompliance = compilanceList;
      }
    });
  }

  private setTableColList(): void {
    this.tableColList = [
      { field: 'sbNumber', alignment: 'left', width: '12%' },
      { field: 'sbRevisionNumber', alignment: 'left', width: '10%' },
      { field: 'sbTitle', alignment: 'left', width: '28%' },
      { field: 'statusState', alignment: 'left', width: '10%' },
      { field: 'sbType', alignment: 'left', width: '10%' },
      { field: 'sbCompliance', alignment: 'left', width: '10%' },
      { field: 'sbPublicationDate', alignment: 'left', width: '10%' },
      { field: 'sbEffectiveDate', alignment: 'left', width: '10%' }
    ];
  }
}
