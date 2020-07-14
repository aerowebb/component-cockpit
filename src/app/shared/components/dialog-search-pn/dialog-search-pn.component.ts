import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { AWPropertiesConstants } from '../../constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../constants/bido-function-type-constants';
import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { ConfirmationService } from '../../services/confirmation.service';
import { MessageService } from '../../services/message.service';
import { PropertiesService } from '../../services/properties.service';
import { FindFamilyVariantInput } from '../../types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BirePnDTO } from '../../types/api-types/bire-pn-dto.interface';
import { FamilyVariantDTO } from '../../types/api-types/family-variant-dto.interface';
import { LabelValue } from '../../types/label-value.interface';
import { ListUtils } from '../../utils/list-utils';
import { ObjectUtils } from '../../utils/object-utils';

import { DialogSearchPnService } from './dialog-search-pn.service';

@Component({
  selector: 'aw-dialog-search-pn',
  templateUrl: 'dialog-search-pn.component.html'
})
export class DialogSearchPnComponent extends DialogComponent implements OnInit {
  public selectedPn: BirePnDTO | undefined;
  public resultsTable: SearchResultsDTO<BirePnDTO>;
  public resultsTableCols: TableColumn[];
  public searchObject: BirePnDTO;
  public familyVariantMap: Map<LabelValue<string>, FamilyVariantDTO>;
  public pnTypes: LabelValue<string>[];
  public propertyStatus: LabelValue<string>[];
  public statusDictionary: { [value: string]: string };
  public statusState: string;
  public propertyVariant: LabelValue<string>[];
  public isLoading: boolean;
  public sparePartClasses: LabelValue<string>[];

  public pnAlternativesDialogVisible: boolean;

  @Input()
  public familyVariant: string | undefined;

  @Input()
  public pnType: string;

  @Input()
  public toolSearch: boolean;

  @Input()
  public showPartTypeSelection: boolean;

  @Input()
  public showFamilyVariantSelection: boolean;

  @Input()
  public checkContainer?: boolean;

  @Output()
  public onSelected = new EventEmitter<BirePnDTO>();

  @Input()
  public withAllTypes?: boolean;

  @Input()
  public withSparePartClass?: boolean;

  @Input()
  public isSparePartClassPredefined?: boolean;

  public constructor(
    public dialogSearchPnService: DialogSearchPnService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'DialogSearchPnComponent');

    this.resultsTable = { list: [], moreResults: false };
    this.searchObject = {};
    this.selectedPn = undefined;
    this.showFamilyVariantSelection = true;
    this.sparePartClasses = [];

    this.familyVariantMap = new Map<LabelValue<string>, FamilyVariantDTO>();
    this.propertyVariant = [];
    this.isLoading = false;

    this.resultsTableCols = [
      { field: 'pnCode', width: '20%', alignment: 'left' },
      { field: 'articleDesignation', width: '32%', alignment: 'left' },
      { field: 'manufacturerOtanCode', width: '18%', alignment: 'left' },
      { field: 'otanPnReference', width: '15%', alignment: 'left' },
      { field: 'statusState', width: '15%', alignment: 'left' }
    ];
  }

  public ngOnInit(): void {
    if (!this.pnType && (!ObjectUtils.isDefined(this.withAllTypes) || !this.withAllTypes)) {
      this.pnType = AWPropertiesConstants.PN_TYPE_PART_KEY;
    }

    this.loadDropDownLists();

    if (this.withSparePartClass) {
      this.loadSparePartClasses();
    }
  }

  private loadDropDownLists(): void {
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: BidoFunctionTypeConstants.UC_MCH_BOM,
      module: BidoFunctionTypeConstants.MODULE_FAMILY
    };
    this.statusDictionary = {};
    this.dialogSearchPnService.getFamilyVariant(familyVariantInput).subscribe(
      (results) => {
        const list = new Array<LabelValue<string>>();
        results.forEach((variantElement) => {
          if (!!variantElement.labelValueDTO) {
            list.push(variantElement.labelValueDTO);
            this.familyVariantMap.set(variantElement.labelValueDTO, variantElement);
          }
        });
        this.propertyVariant = list;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );

    if (this.withAllTypes) {
      this.propertiesService.getValue(GenericPropertyConstants.PN_TYPE_MAP).subscribe((results) => {
        this.pnTypes = results.sort((x, y) => x.label.localeCompare(y.label));
      });
    } else {
      this.propertiesService.getValue(GenericPropertyConstants.ENGINEERING_PN_TYPES_MAP).subscribe((results) => {
        this.pnTypes = results.sort((x, y) => x.label.localeCompare(y.label));
      });
    }

    this.propertiesService.getValue(GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP).subscribe(
      (results) => {
        this.propertyStatus = results;
        this.fillStatusDictionary(results);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );

    this.propertiesService.getValue(GenericPropertyConstants.OBJECT_STATUS_MAP).subscribe(
      (results) => {
        this.fillStatusDictionary(results);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );
  }

  public search(): void {
    this.resultsTable.list = [];
    this.resultsTable.moreResults = false;
    this.selectedPn = undefined;

    let familyCode;
    let structureType;
    let variantCode;
    this.isLoading = true;
    if (this.familyVariant) {
      let familyVariantDTO: FamilyVariantDTO = {};
      this.familyVariantMap.forEach((variantElement) => {
        if (!!variantElement.labelValueDTO && variantElement.labelValueDTO.value === this.familyVariant) {
          familyVariantDTO = variantElement;
        }
      });
      familyCode = familyVariantDTO.familyCode;
      structureType = familyVariantDTO.structureType;
      variantCode = familyVariantDTO.variantCode;
    }

    this.searchObject.pnType = this.pnType;

    this.dialogSearchPnService
      .findBirePnsBySearchCriteria(this.searchObject, familyCode, structureType, variantCode, this.toolSearch)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((results) => {
        this.resultsTable = results;
      });
  }

  private fillStatusDictionary(references: LabelValue<string>[]) {
    references.forEach((lv) => (this.statusDictionary[lv.value] = lv.label));
  }

  public onValidate(): void {
    if (this.selectedPn) {
      if (this.checkContainer && this.selectedPn.pnCode) {
        this.dialogSearchPnService.isPartWithContainer(this.selectedPn.pnCode).subscribe({
          next: (isPartWithContainer) => {
            if (isPartWithContainer) {
              this.confirmationService.confirm({
                messageKey: this.getTranslateKey('pnWithContainer'),
                contextKeys: [this.getTranslateKey('confirmContinue')],
                accept: () => {
                  this.validate();
                }
              });
            } else {
              this.validate();
            }
          }
        });
      } else {
        this.validate();
      }
    }
  }

  private validate(): void {
    this.onSelected.emit(this.selectedPn);

    this.closeDialog();
  }

  // Clean the selectedObject object if the row is unselect
  public onRowUnselect(): void {
    this.selectedPn = undefined;
  }

  public onCancel(): void {
    this.resultsTable = {
      list: [],
      moreResults: false
    };

    this.closeDialog();
  }

  public showPnAlternativesDialog(): void {
    this.pnAlternativesDialogVisible = true;
  }

  public onSelectPnAlternative(event: BirePnDTO): void {
    this.onSelected.emit(event);

    this.closeDialog();
  }

  private loadSparePartClasses(): void {
    this.propertiesService.getValue(GenericPropertyConstants.SPARE_PART_CLASS_CODE).subscribe({
      next: (sparePartClasses) => {
        this.sparePartClasses = ListUtils.orEmpty(sparePartClasses).sort((x, y) => x.label.localeCompare(y.label));
        if (this.isSparePartClassPredefined) {
          this.searchObject.sparePartClassCode = AWPropertiesConstants.SPC_REPAIRABLE_KEY;
        }
      }
    });
  }
}
