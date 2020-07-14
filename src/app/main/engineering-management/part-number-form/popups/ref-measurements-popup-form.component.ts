import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { InputValidationService } from '../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SessionService } from '../../../../shared/services/session.service';
import { FindBireRatingsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-ratings-by-search-criteria-input.interface';
import { BireFamilyDTO } from '../../../../shared/types/api-types/bire-family-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BirePnMeasureDTO } from '../../../../shared/types/api-types/bire-pn-measure-dto.interface';
import { BireRatingDTO } from '../../../../shared/types/api-types/bire-rating-dto.interface';
import { BireSbDTOId } from '../../../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireSbDTO } from '../../../../shared/types/api-types/bire-sb-dto.interface';
import { BireVariantDTO } from '../../../../shared/types/api-types/bire-variant-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';

import { ReferenceMeasurementsPopupFormService } from './ref-measurements-popup-form.service';

@Component({
  selector: 'aw-ref-measurements-popup-form',
  templateUrl: './ref-measurements-popup-form.component.html'
})
export class ReferenceMeasurementsPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BirePnMeasureDTO> | null;

  @Input()
  public isNewRef: boolean;

  @Input()
  public openMode: ComponentOpenMode;

  @Output()
  public onCreate: EventEmitter<BirePnMeasureDTO>;

  @Output()
  public onUpdate: EventEmitter<BirePnMeasureDTO>;

  public displayDialog: boolean;
  public newRef: boolean;
  public isEditable: boolean;
  public contentTable: BirePnMeasureDTO[];
  public currentRef: BirePnMeasureDTO;
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;
  public familyCode: string;
  public pnFamilyCode?: string;
  public optionLimit: string;
  public ratingName: string | undefined;
  public interventionOption: string;
  public isUpdatable: boolean;
  public isRatingRequired: boolean;

  public dialogTableDataFamilyCode: DialogTableData<BireFamilyDTO>;
  public showFamilyCodeDialog: boolean;

  public dialogTableDataCounterCode: DialogTableData<BireMeasureReferenceDTO>;
  public showCounterCodeDialog: boolean;

  public dialogTableDataRatingsCode: DialogTableData<BireRatingDTO>;
  public showRatingsCodeDialog: boolean;

  public dialogTableDataServiceBulletin: DialogTableData<BireSbDTO>;
  public showServiceBulletinDialog: boolean;

  public findBireRatingsBySearchCriteriaInput: FindBireRatingsBySearchCriteriaInput;

  public constructor(
    public refMeasurementsPopupFormService: ReferenceMeasurementsPopupFormService,
    public sessionService: SessionService,
    private readonly messageService: MessageService,
    public inputValidationService: InputValidationService
  ) {
    super(ComponentOpenMode.Write, 'ReferenceMeasurementsPopupDialog');

    this.onCreate = new EventEmitter<BirePnMeasureDTO>();
    this.onUpdate = new EventEmitter<BirePnMeasureDTO>();

    this.displayDialog = false;
    this.showFamilyCodeDialog = false;
    this.showCounterCodeDialog = false;
    this.showRatingsCodeDialog = false;
    this.showServiceBulletinDialog = false;
    this.isRatingRequired = false;
    this.newRef = false;
    this.familyCode = '';
    this.pnFamilyCode = undefined;
    this.optionLimit = 'limitValue';
    this.ratingName = '';
    this.interventionOption = '';
    this.isUpdatable = false;

    this.contentTable = [];
    this.currentRef = {};
    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('familyFunction', this.refMeasurementsPopupFormService.getFamilyFunctionMap());
    this.keyMap.set('evolutionType', this.refMeasurementsPopupFormService.getEvolutionTypeMap());
    this.keyMap.set('evolutionCompliance', this.refMeasurementsPopupFormService.getComplianceMap());
    this.keyMap.set('evolutionLevel', this.refMeasurementsPopupFormService.getEvolutionLevelMap());
    this.keyMap.set('structureType', this.refMeasurementsPopupFormService.getStructureTypeMap());
    this.keyMap.set('mrCategory', this.refMeasurementsPopupFormService.getRefMeasureCategoryMap());

    this.searchFamilyCode();
    this.searchCounterCode();
    this.searchRatingsCode();
    this.searchServiceBulletin();
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
      this.currentRef = this.componentData.object as BirePnMeasureDTO;
      if (!!this.componentData.object) {
        this.pnFamilyCode = this.componentData.object.familyCode;
      }
      const selRow = this.componentData.selectedRow;
      if (!!selRow && !!selRow[0]) {
        const interventionOption = selRow[0].interventionOptions;
        const isUpdatable = selRow[0].valueResettable;
        if (!!interventionOption) {
          this.interventionOption = interventionOption;
        }
        if (!!isUpdatable) {
          this.isUpdatable = isUpdatable;
        }
      }
      if (!!this.componentData.selectedRow && this.componentData.selectedRow.length === 0) {
        this.isEditable = true;
      } else {
        this.isEditable = false;
        this.loadPopup();
      }

      this.setFindBireRatingsBySearchCriteriaInput();
    }
  }

  public loadPopup() {
    this.familyCode = `${this.currentRef.familyCode}-${this.currentRef.structureType}`;
    if (this.currentRef.pnPotentialLimitDate) {
      this.optionLimit = 'limitDate';
      this.currentRef.pnPotentialLimitDate = new Date(this.currentRef.pnPotentialLimitDate);
    } else {
      this.optionLimit = 'limitValue';
    }

    const bireRatingDTO: BireRatingDTO = {
      familyCode: this.pnFamilyCode,
      ratingCode: this.currentRef && this.currentRef.ratingCode,
      ratingName: undefined,
      structureType: this.currentRef && this.currentRef.structureType
    };
    const findBireRatingsBySearchCriteriaInput: FindBireRatingsBySearchCriteriaInput = {
      pnCode: this.currentRef.pnCode,
      variantCode: undefined,
      useCaseCode: BidoFunctionTypeConstants.UC_MCH_BOM,
      bireRatingDTOCriteria: bireRatingDTO
    };
    this.refMeasurementsPopupFormService
      .findBireRatingsBySearchCriteria(findBireRatingsBySearchCriteriaInput)
      .subscribe(
        (result) => {
          if (result.list.length > 0) {
            this.ratingName = result.list[0].ratingName;
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetRatings'));
        }
      );
  }

  public onShow() {
    this.displayDialog = true;
  }

  public onHide(): void {
    this.newRef = false;
    this.currentRef = {};
    this.display = false;
  }

  public onValidate(): void {
    this.currentRef.interventionOptions =
      (this.interventionOption != undefined ? this.interventionOption : '') + ';' + String(this.isUpdatable);
    if (
      !!this.currentRef &&
      this.currentRef.familyCode &&
      this.currentRef.structureType &&
      this.currentRef.counterCode
    ) {
      if ((this.currentRef.limitIsUpdatable && this.currentRef.limitDescription) || !this.currentRef.limitIsUpdatable) {
        this.currentRef.ratingCode = this.currentRef.ratingCode ? this.currentRef.ratingCode : '_';
        if (this.isNewRef) {
          this.onCreate.emit(this.currentRef);
          this.display = false;
        } else {
          this.onUpdate.emit(this.currentRef);
          this.display = false;
        }
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('descriptionLimitMissing'));
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('missingFields'));
    }
  }

  public searchFamilyCode() {
    const test: TableColumn[] = [
      { field: 'familyCode', width: '180px', filterMode: TableColumnFilterMode.Input },
      { field: 'familyName', width: '180px', filterMode: TableColumnFilterMode.Input },
      { field: 'structureType', width: '180px', filterMode: TableColumnFilterMode.Input },
      { field: 'familyFunction', width: '180px', filterMode: TableColumnFilterMode.Input }
    ];
    this.dialogTableDataFamilyCode = {
      componentId: 'FamilyCodePopup',
      tableCols: test,
      tableRows: this.refMeasurementsPopupFormService.findAllBireFamilys(),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public searchCounterCode() {
    const counterTable: TableColumn[] = [
      { field: 'counterCode', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'unitCode', width: '100px', filterMode: TableColumnFilterMode.Input },
      { field: 'mrCategory', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'counterRemarks', width: '250px', filterMode: TableColumnFilterMode.Input },
      { field: 'minRemainPercent', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'isCounter', width: '70px', filterMode: TableColumnFilterMode.Tricheckbox, alignment: 'center' },
      { field: 'propagationAllowed', width: '70px', filterMode: TableColumnFilterMode.Tricheckbox, alignment: 'center' }
    ];
    const bireMeasureReferenceDTO: BireMeasureReferenceDTO = {};
    this.dialogTableDataCounterCode = {
      componentId: 'CounterCodePopup',
      tableCols: counterTable,
      tableRows: this.refMeasurementsPopupFormService
        .findBireMeasureReferencesBySearchCriteria(bireMeasureReferenceDTO)
        .pipe(
          map((results) => ({
            list: results,
            moreResults: false
          }))
        ),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public searchRatingsCode() {
    if (this.isCreateOpenMode) {
      this.showRatingsCodeDialog = true;
    } else {
      this.showRatingsCodeDialog = false;
    }
    const ratingTable: TableColumn[] = [
      { field: 'ratingCode', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'ratingName', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'familyCode', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'structureType', width: '150px', filterMode: TableColumnFilterMode.Input }
    ];
    this.setFindBireRatingsBySearchCriteriaInput();
    this.dialogTableDataRatingsCode = {
      componentId: 'RatingCodePopup',
      tableCols: ratingTable,
      tableRows: this.refMeasurementsPopupFormService.findBireRatingsBySearchCriteria(
        this.findBireRatingsBySearchCriteriaInput
      ),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public searchServiceBulletin() {
    const sbTable: TableColumn[] = [
      { field: 'sbNumber', width: '10%', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'sbRevisionNumber', width: '8%', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'sbTitle', width: '20%', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'statusState', width: '10%', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'sbType', width: '10%', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'sbCompliance', width: '10%', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'sbPublicationDate', width: '16%', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'sbEffectiveDate', width: '16%', filterMode: TableColumnFilterMode.Input, alignment: 'left' }
    ];
    this.dialogTableDataServiceBulletin = {
      componentId: 'ServiceBulletinPopup',
      tableCols: sbTable,
      tableRows: this.refMeasurementsPopupFormService.findBireSbsBySbCriteria(),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  private setFindBireRatingsBySearchCriteriaInput() {
    const bireRatingDTO: BireRatingDTO = {
      familyCode: this.currentRef && this.currentRef.familyCode,
      ratingCode: undefined,
      ratingName: undefined,
      structureType: this.currentRef && this.currentRef.structureType
    };
    this.findBireRatingsBySearchCriteriaInput = {
      pnCode: this.currentRef.pnCode,
      variantCode: undefined,
      useCaseCode: BidoFunctionTypeConstants.UC_MCH_BOM,
      bireRatingDTOCriteria: bireRatingDTO
    };
    this.refMeasurementsPopupFormService
      .findBireRatingsBySearchCriteria(this.findBireRatingsBySearchCriteriaInput)
      .subscribe((result) => {
        this.isRatingRequired = result && result.list.length > 0;
      });
  }

  public showFamilyCode() {
    if (this.isCreateOpenMode) {
      this.showFamilyCodeDialog = true;
    } else {
      this.showFamilyCodeDialog = false;
    }
  }

  public showSbNumber() {
    if (this.isReadOpenMode) {
      this.showServiceBulletinDialog = false;
    } else {
      this.showServiceBulletinDialog = true;
    }
  }

  public showCounterCode() {
    if (this.isCreateOpenMode) {
      this.showCounterCodeDialog = true;
    } else {
      this.showCounterCodeDialog = false;
    }
  }

  public setSelectedFamilyCode(selectedObject: BireVariantDTO) {
    if (!!selectedObject) {
      this.currentRef.familyCode = selectedObject.familyCode;
      this.currentRef.structureType = selectedObject.structureType;
      this.familyCode = `${selectedObject.familyCode}-${selectedObject.structureType}`;
    }
    this.setFindBireRatingsBySearchCriteriaInput();
    this.showFamilyCodeDialog = false;
    this.ratingName = '';
    this.currentRef.ratingCode = '';
  }

  public setSelectedCounterCode(selectedObject: BireMeasureReferenceDTO) {
    if (selectedObject) {
      this.currentRef.counterCode = selectedObject.counterCode;
    }
    this.showCounterCodeDialog = false;
  }

  public setSelectedRatingsCode(selectedObject: BireRatingDTO) {
    if (selectedObject) {
      this.currentRef.ratingCode = selectedObject.ratingCode;
      if (!!selectedObject.ratingName) {
        this.ratingName = selectedObject.ratingName;
      }
    }
    this.showCounterCodeDialog = false;
  }

  public setSelectedServiceBulletin(selectedObject: BireSbDTOId) {
    if (selectedObject) {
      this.currentRef.sb = `${selectedObject.sbNumber}:${selectedObject.sbRevisionNumber}`;
    }
    this.showServiceBulletinDialog = false;
  }

  public changeLimitDate() {
    this.currentRef.pnPotentialReferenceValue = '';
  }

  public changeLimitValue() {
    this.currentRef.pnPotentialLimitDate = undefined;
  }

  public checkLimitUpdatable() {
    this.optionLimit = 'limitValue';
    this.currentRef.pnPotentialReferenceValue = '0';
    this.currentRef.pnPotentialLimitDate = undefined;
  }
}
