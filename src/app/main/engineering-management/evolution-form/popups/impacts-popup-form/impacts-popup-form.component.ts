import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { FindBireItemsBySearchCriteriaInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { FindBirePnsBySearchCriteriaPSMInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-pns-by-search-criteria-input.interface';
import { PartsSearchInput } from '../../../../../shared/types/api-input-types/task-management/parts-search-input.interface';
import { PartsAssociatedTableDTO } from '../../../../../shared/types/api-output-types/task-management/parts-associated-table-dto.interface';
import { BireEvolutionPnDTO } from '../../../../../shared/types/api-types/bire-evolution-pn-dto.interface';
import { BireItemDTO } from '../../../../../shared/types/api-types/bire-item-dto.interface';
import { BireModelDTO } from '../../../../../shared/types/api-types/bire-model-dto.interface';
import { BirePnDTO } from '../../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireVariantVersionDTOId } from '../../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { FamilyVariantDTO } from '../../../../../shared/types/api-types/family-variant-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { ArrayUtils } from '../../../../../shared/utils/array-utils';
import { ImpactsItemPopupFormService } from '../impacts-item-popup-form/impacts-item-popup-form.service';

import { ImpactsPopupFormService } from './impacts-popup-form.service';

@Component({
  selector: 'aw-impacts-popup-form',
  templateUrl: './impacts-popup-form.component.html'
})
export class ImpactsPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireEvolutionPnDTO> | null;

  @Input()
  public isNewImpacts: boolean;

  @Input()
  public isReadOnlyForm: boolean;

  @Output()
  public onCreate: EventEmitter<BireEvolutionPnDTO>;

  @Output()
  public onUpdate: EventEmitter<BireEvolutionPnDTO>;

  public newEvol: BireEvolutionPnDTO;
  public displayDialog: boolean;
  public selectedEvolutions: BireEvolutionPnDTO[];

  public optionExisting: string;
  public variant: SelectItem[];
  public pn: SelectItem[];
  public actionType: SelectItem[];
  public item: LabelValue<string>[];
  public versions: LabelValue<string>[];
  public isn: LabelValue<string>[];
  public actionTypeCode: string;
  public pnCode: string;
  public applicability: string;
  public evolutionRemarks: string;

  public pnTable: BirePnDTO[];
  public selectedPnTable: BirePnDTO[];
  public pnTableTableCols: TableColumn[];
  public pnTableFilteredRowsNb: number;
  public familyVariantMap: Map<LabelValue<string>, FamilyVariantDTO>;

  public variantCode: string;
  public bireItemDTO: BireItemDTO;
  public selectedItem: string;
  public pnCodeInput: string | undefined;
  public pnCodeDdl: string | undefined;
  public itemNumber: string | undefined;
  public selectedIsn: string | undefined;
  public selectedVersion: string | undefined;
  public pnAfter: LabelValue<string>[];
  public duplicate: boolean;

  // POPUP
  public dialogTableData: DialogTableData<BirePnDTO>;
  public dialogTableDataPn: DialogTableData<BirePnDTO>;
  public dialogTableDataApplicability: DialogTableData<BireModelDTO>;
  public dialogTableDataItems: DialogTableData<BireItemDTO>;
  public showItemsDialog: boolean;
  public showApplicabilityDialog: boolean;
  public showPnDialog: boolean;
  public isEditable: boolean;

  public pnApplicability: string | undefined;
  public showPnApplicabilityDialog: boolean = false;
  public partsSearch: PartsSearchInput;
  public constructor(
    public impactsPopupFormService: ImpactsPopupFormService,
    public impactsItemPopupFormService: ImpactsItemPopupFormService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'ImpactsPopupDialog');

    this.onCreate = new EventEmitter<BireEvolutionPnDTO>();
    this.onUpdate = new EventEmitter<BireEvolutionPnDTO>();

    this.displayDialog = false;
    this.selectedEvolutions = [];
    this.optionExisting = 'existing';
    this.newEvol = {};
    this.familyVariantMap = new Map<LabelValue<string>, FamilyVariantDTO>();
    this.partsSearch = {};
    this.loadItems();
  }

  public ngOnInit() {
    if (
      this.componentData &&
      this.componentData.componentId &&
      this.componentData.object &&
      this.componentData.componentId.length > 0
    ) {
      this.newEvol = this.componentData.object;
      this.pnCodeDdl = this.componentData.object.pnCode;
      if (!!this.componentData.selectedRow) {
        this.selectedEvolutions = this.componentData.selectedRow;
      }

      this.duplicate = false;

      if (!!this.componentData.selectedRow && this.componentData.selectedRow.length === 0) {
        this.isEditable = true;
      } else {
        this.isEditable = false;

        this.fillPopup();
      }
    }
  }

  private fillPopup() {
    this.variantCode = `${this.newEvol.familyCode}-${this.newEvol.structureType}-${this.newEvol.variantCode}`;
    this.bireItemDTO = {
      variantCode: this.newEvol.variantCode,
      familyCode: this.newEvol.familyCode,
      structureType: this.newEvol.structureType,
      chapter: this.newEvol.chapter,
      subject: this.newEvol.subject,
      sheet: this.newEvol.sheet,
      marks: this.newEvol.marks,
      section: this.newEvol.section
    };

    const criteria: FindBireItemsBySearchCriteriaInput = {
      bireItemDTOCriteria: this.bireItemDTO
    };
    this.impactsItemPopupFormService.findBireItemsBySearchCriteria(criteria).subscribe((results) => {
      this.itemNumber = results.list[0].itemNumber;
    });

    this.searchPnCodeLabelValue(true);
    this.loadVersionAndISN();
    this.selectedIsn = '_';
    this.selectedVersion = '1';
  }

  public onShow() {
    this.displayDialog = true;
  }

  public onHide(): void {
    this.newEvol = {};
    this.display = false;
  }

  public onValidate(): void {
    this.newEvol.pnCode = this.pnCodeInput === null || !this.pnCodeInput ? this.pnCodeDdl : this.pnCodeInput;
    if (
      this.newEvol.variantCode &&
      this.newEvol.actionTypeCode &&
      this.newEvol.chapter &&
      this.newEvol.section &&
      this.newEvol.sheet &&
      this.newEvol.marks &&
      this.newEvol.subject &&
      this.newEvol.pnCode
    ) {
      if (this.optionExisting === 'new') {
        this.newEvol.newPn = true;
        this.newEvol.duplicateFields = this.duplicate;
        this.newEvol.isn = this.selectedIsn;
        if (!!this.selectedVersion) {
          this.newEvol.itemVersion = this.selectedVersion;
        }
      } else {
        this.newEvol.newPn = false;
      }

      if (this.isNewImpacts) {
        this.onCreate.emit(this.newEvol);
        this.display = false;
      } else {
        this.onUpdate.emit(this.newEvol);
        this.display = false;
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('missingFields'));
    }
  }

  private loadItems(): void {
    this.impactsPopupFormService.findAllBireVariantVersions().subscribe(
      (results) => {
        const list = new Array<LabelValue<string>>();
        results.forEach((element) => {
          if (!!element.labelValueDTO) {
            list.push(element.labelValueDTO);
            this.familyVariantMap.set(element.labelValueDTO, element);
          } else {
            super.throwUnboundLocalError('loadItems', 'element.labelValueDTO');
          }
        });
        this.variant = list;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetVariant'));
      }
    );
    this.impactsPopupFormService.findBireActionTypesByActionTypeCode().subscribe(
      (results) => {
        this.actionType = results.sort(ArrayUtils.compareValues('label'));
      },
      () => {
        this.messageService.showErrorMessage('global.errorOnGetActionType');
      }
    );
  }

  public onChangeVariant() {
    this.newEvol = {};
    this.itemNumber = undefined;
    this.optionExisting = 'existing';
    this.onChangeRadio();
    if (this.variantCode != undefined) {
      let familyVariantDTO: FamilyVariantDTO = {};
      this.familyVariantMap.forEach((element) => {
        if (!!element.labelValueDTO && element.labelValueDTO.value === this.variantCode) {
          familyVariantDTO = element;
        }
      });
      this.bireItemDTO = {
        variantCode: familyVariantDTO.variantCode,
        familyCode: familyVariantDTO.familyCode,
        structureType: familyVariantDTO.structureType
      };
      this.newEvol.familyCode = familyVariantDTO.familyCode;
      this.newEvol.variantCode = familyVariantDTO.variantCode;
      this.newEvol.structureType = familyVariantDTO.structureType;
      const pnCode = this.pnCodeInput ? this.pnCodeInput : undefined;
      const searchCriteria: FindBireItemsBySearchCriteriaInput = {
        bireItemDTOCriteria: this.bireItemDTO,
        attribute: undefined,
        pnCode
      };
      this.impactsPopupFormService.findBireItemsBySearchCriteriaToLVD(searchCriteria).subscribe(
        (results) => {
          this.item = results;
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetItem'));
        }
      );
    }
  }

  public onChangeRadio() {
    this.pnCodeDdl = undefined;
    this.pnCodeInput = undefined;
    this.selectedVersion = undefined;
    this.selectedIsn = undefined;
  }

  public searchItems() {
    if (!this.isReadOnlyForm) {
      this.showItemsDialog = true;
    }
  }

  public searchPnCode() {
    if (!this.isReadOnlyForm && this.isEditable) {
      if (this.optionExisting === 'new') {
        this.partsSearch = {
          pn: !!this.pnCodeInput ? this.pnCodeInput : undefined
        };
        this.showPnDialog = true;
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSearchPN'));
      }
    }
  }

  public searchPnCodeLabelValue(initData: boolean) {
    const birePnDTOCriteria: BirePnDTO = {
      pnCode: undefined
    };
    const findBirePnsBySearchCriteriaInput: FindBirePnsBySearchCriteriaPSMInput = {
      birePnDTOCriteria,
      familyCode: this.bireItemDTO.familyCode,
      structureType: this.bireItemDTO.structureType,
      variantCode: this.bireItemDTO.variantCode,
      chapter: this.bireItemDTO.chapter,
      mark: this.bireItemDTO.marks,
      section: this.bireItemDTO.section,
      sheet: this.bireItemDTO.sheet,
      subject: this.bireItemDTO.subject
    };
    this.impactsPopupFormService.findBirePnsBySearchCriteriaToLVD(findBirePnsBySearchCriteriaInput).subscribe(
      (results) => {
        this.pnAfter = results;

        if (!!initData && !!this.newEvol.pnCode) {
          if (!this.pnAfter.find((value) => this.newEvol.pnCode === value.label)) {
            this.optionExisting = 'new';
            this.pnCodeInput = this.newEvol.pnCode;
          } else {
            this.optionExisting = 'existing';
            this.pnCodeDdl = this.newEvol.pnCode;
          }
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetPN'));
      }
    );
  }

  public setSelectedItems(selectedObject: BireItemDTO) {
    if (selectedObject) {
      this.newEvol.chapter = selectedObject.chapter;
      this.newEvol.section = selectedObject.section;
      this.newEvol.subject = selectedObject.subject;
      this.newEvol.sheet = selectedObject.sheet;
      this.newEvol.marks = selectedObject.marks;
      this.newEvol.statusDate = selectedObject.statusDate;
      this.newEvol.statusUser = selectedObject.statusUser;
      this.newEvol.statusState = selectedObject.statusState;
      this.newEvol.variantCode = selectedObject.variantCode;
      this.newEvol.familyCode = selectedObject.familyCode;
      this.newEvol.structureType = selectedObject.structureType;
      this.itemNumber = selectedObject.itemNumber;
      this.variantCode = selectedObject.variantCode as string;
      this.bireItemDTO = selectedObject;
      this.loadVersionAndISN();
      this.searchPnCodeLabelValue(false);
    }
    this.showItemsDialog = false;
  }

  public loadVersionAndISN() {
    this.impactsPopupFormService.findEvolutionItemVersion(this.bireItemDTO).subscribe(
      (results) => {
        this.versions = results;
        this.selectedVersion = results[0].value;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetVersion'));
      }
    );

    this.impactsPopupFormService.findAllIsnAtasAsStrings().subscribe(
      (results) => {
        this.isn = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetISN'));
      }
    );
  }

  public searchApplicability(val: boolean) {
    if (!this.isReadOnlyForm && !!this.variantCode) {
      if (!!this.bireItemDTO.familyCode && !!this.bireItemDTO.structureType && !!this.bireItemDTO.variantCode) {
        const bireVariantVersionDTOId: BireVariantVersionDTOId = {
          familyCode: this.bireItemDTO.familyCode,
          structureType: this.bireItemDTO.structureType,
          variantCode: this.bireItemDTO.variantCode
        };
        val ? (this.showPnApplicabilityDialog = true) : (this.showApplicabilityDialog = true);
        this.dialogTableDataApplicability = {
          componentId: 'ImpactsPopupDialog',
          tableRows: this.impactsPopupFormService.findBireModelsByVariantPK(bireVariantVersionDTOId),
          tableCols: [
            { field: 'modelCode', width: '200px', filterMode: TableColumnFilterMode.Input },
            { field: 'modelName', width: '200px', filterMode: TableColumnFilterMode.Input }
          ],
          exportExcel: false,
          globalFilter: true,
          dataKey: undefined,
          selectionMode: TableSelectionMode.Single
        };
      } else {
        super.throwUnboundLocalError('searchAvailability', 'this.bireItemDTO');
      }
    }
  }

  public setSelectedPn(selectedObject: PartsAssociatedTableDTO) {
    if (!!selectedObject && !!selectedObject.birePnDTO) {
      this.pnCodeInput = selectedObject.birePnDTO.pnCode;
    }
    this.loadVersionAndISN();
    this.showPnDialog = false;
  }

  public setPnSelectedApplicability(event: BireModelDTO) {
    this.pnApplicability = event.modelCode;
    this.showPnApplicabilityDialog = false;
  }

  public setSelectedApplicability(event: BireModelDTO) {
    this.newEvol.applicability = event.modelCode;
    this.showApplicabilityDialog = false;
  }

  public isValidateEnabled() {
    if (
      !this.variantCode ||
      (!this.newEvol.chapter &&
        !this.newEvol.section &&
        !this.newEvol.subject &&
        !this.newEvol.sheet &&
        !this.newEvol.marks) ||
      !this.newEvol.actionTypeCode
    ) {
      return false;
    }
    if (this.optionExisting === 'existing' && !this.pnCodeDdl) {
      return false;
    } else if (this.optionExisting === 'new') {
      if (!this.pnCodeInput || !this.selectedVersion || !this.selectedIsn) {
        return false;
      }
    }

    return true;
  }
}
