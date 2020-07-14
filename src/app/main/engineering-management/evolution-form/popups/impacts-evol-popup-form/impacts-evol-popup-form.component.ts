import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { FindBireItemVersionByItemAndPnInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-item-versions-by-item-and-pn-code-input.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { FindBirePnsBySearchCriteriaPSMInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-pns-by-search-criteria-input.interface';
import { PartsSearchInput } from '../../../../../shared/types/api-input-types/task-management/parts-search-input.interface';
import { PartsAssociatedTableDTO } from '../../../../../shared/types/api-output-types/task-management/parts-associated-table-dto.interface';
import { BireAlternativePnAndItemPnDTO } from '../../../../../shared/types/api-types/bire-alternative-pn-and-item-pn-dto.interface';
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

import { ImpactsEvolPopupFormService } from './impacts-evol-popup-form.service';

@Component({
  selector: 'aw-impacts-evol-popup-form',
  templateUrl: './impacts-evol-popup-form.component.html'
})
export class ImpactsEvolPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireAlternativePnAndItemPnDTO> | null;

  @Input()
  public isNewImpactsEvol: boolean;

  @Input()
  public isReadOnlyForm: boolean;

  @Output()
  public onCreate: EventEmitter<BireAlternativePnAndItemPnDTO>;

  @Output()
  public onUpdate: EventEmitter<BireAlternativePnAndItemPnDTO>;

  public newEvol: BireAlternativePnAndItemPnDTO;
  public displayDialog: boolean;
  public bireItemDTO: BireItemDTO;
  public itemSelectedAfterPNChoice: string;
  public bireItemDTOList: BireItemDTO[];
  public isEditable: boolean;

  public optionExisting: string;
  public optionExistingImpacts: string;
  public pnCode: string | undefined;
  public variant: LabelValue<string>[];
  public item: LabelValue<string>[];
  public isn: LabelValue<string>[];
  public selectedIsn: string | undefined;
  public pnAfter: LabelValue<string>[];
  public pnBefore: LabelValue<string>[];
  public interchangeability: LabelValue<string>[];
  public actionType: LabelValue<string>[];
  public actionInterchangeability: boolean;
  public selectedInterchangeability: string;
  public selectedItem: string | undefined;
  public selectedPnBeforeDdl: string;
  public selectedPnBefore: string | undefined;
  public selectedPnAfter: string;
  public versions: LabelValue<string>[];

  public pnBeforeTable: BirePnDTO[];
  public selectedPnBeforeTable: BirePnDTO[];
  public pnBeforeTableTableCols: TableColumn[];
  public pnBeforeTableFilteredRowsNb: number;

  public pnAfterTable: BirePnDTO[];
  public selectedPnAfterTable: BirePnDTO[];
  public pnAfterTableTableCols: TableColumn[];
  public pnAfterTableFilteredRowsNb: number;

  public dialogTableDataPnBefore: DialogTableData<BirePnDTO>;
  public dialogTableDataPnAfter: DialogTableData<BirePnDTO>;
  public dialogTableDataApplicability: DialogTableData<BireModelDTO>;
  public showPnBeforeDialog: boolean;
  public showPnAfterDialog: boolean;
  public showApplicabilityDialog: boolean;
  public showPnApplicabilityDialog: boolean;
  public familyVariantMap: Map<LabelValue<string>, FamilyVariantDTO>;
  public variantCode: string;
  public pnPnCodeInput: string | undefined;
  public pnPnCodeDdl: string;
  public pnPnCode: string | undefined;
  public pnApplicability: string | undefined;

  public showItemTableDialog: boolean;
  public partsSearch: PartsSearchInput;

  public constructor(
    public impactsEvolPopupFormService: ImpactsEvolPopupFormService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'ImpactsEvolPopupDialog');

    this.onCreate = new EventEmitter<BireAlternativePnAndItemPnDTO>();
    this.onUpdate = new EventEmitter<BireAlternativePnAndItemPnDTO>();

    this.displayDialog = false;
    this.actionInterchangeability = false;
    this.selectedPnBefore = undefined;
    this.pnCode = undefined;
    this.versions = [];

    this.bireItemDTOList = [];
    this.newEvol = {};
    this.isEditable = true;
    this.familyVariantMap = new Map<LabelValue<string>, FamilyVariantDTO>();
    this.partsSearch = {};
    this.bireItemDTO = {};
    this.showItemTableDialog = false;
    this.showApplicabilityDialog = false;
    this.showPnApplicabilityDialog = false;

    this.loadDdl();
  }

  public openItemTableDialog(): void {
    if (!this.isReadOnlyForm) {
      this.showItemTableDialog = true;
    }
  }

  public onSelectedItem(item: BireItemDTO): void {
    if (!item) {
      return;
    }

    let familyVariantDTO: FamilyVariantDTO = {};
    this.familyVariantMap.forEach((variantElement) => {
      if (!!variantElement.labelValueDTO && variantElement.labelValueDTO.value === this.variantCode) {
        familyVariantDTO = variantElement;
      }
    });

    this.selectedItem = `${item.chapter}-${item.section}-${item.subject}-${item.sheet}-${item.marks}`;

    const itemTab: string[] = this.selectedItem.split('-');
    const subjectPos = 2;
    const sheetPos = 3;
    const marksPos = 4;
    const itemNumberPosStart = 5;
    const itemNumberPosEnd = 6;
    let itemNumber = '';

    if (this.selectedItem.indexOf('(') !== -1) {
      itemNumber = this.selectedItem.split('(')[1].substr(0, itemTab[1].indexOf(')'));
    }

    let name = '';
    if (itemTab[itemNumberPosStart] && itemTab[itemNumberPosEnd]) {
      name = itemTab[itemNumberPosStart].trim() + itemTab[itemNumberPosEnd].split('(')[0];
    }
    this.newEvol.chapter = itemTab[0].trim();
    this.newEvol.section = itemTab[1].trim();
    this.newEvol.subject = itemTab[subjectPos].trim();
    this.newEvol.sheet = itemTab[sheetPos].trim();
    this.newEvol.marks = itemTab[marksPos].trim();
    this.newEvol.familyCode = item.familyCode;
    this.newEvol.variantCode = item.variantCode;
    this.newEvol.structureType = item.structureType;

    this.bireItemDTO = {
      variantCode: this.newEvol.variantCode,
      familyCode: this.newEvol.familyCode,
      structureType: this.newEvol.structureType,
      chapter: this.newEvol.chapter,
      section: this.newEvol.section,
      subject: this.newEvol.subject,
      sheet: this.newEvol.sheet,
      marks: this.newEvol.marks,
      name,
      itemNumber
    };
    this.loadVersionAndISN();
    this.searchPnCodeLabelValue(false);
    this.variantCode = item.variantCode as string;

    this.showItemTableDialog = false;
  }

  private fillPopup() {
    this.variantCode = `${this.newEvol.familyCode}-${this.newEvol.structureType}-${this.newEvol.variantCode}`;
    this.bireItemDTO = {
      variantCode: this.newEvol.variantCode,
      familyCode: this.newEvol.familyCode,
      structureType: this.newEvol.structureType,
      chapter: this.newEvol.chapter,
      sheet: this.newEvol.sheet,
      section: this.newEvol.section,
      marks: this.newEvol.marks,
      subject: this.newEvol.subject
    };

    const searchCriteria: FindBireItemsBySearchCriteriaInput = {
      bireItemDTOCriteria: this.bireItemDTO,
      attribute: undefined,
      pnCode: undefined
    };
    this.loadBireItems(searchCriteria);
    this.impactsEvolPopupFormService.FindBireItemsBySearchCriteria(searchCriteria).subscribe(
      (results) => {
        this.bireItemDTOList = results.list;
        this.bireItemDTO = this.bireItemDTOList.filter(
          (item) =>
            item.structureType === this.newEvol.structureType &&
            item.variantCode === this.newEvol.variantCode &&
            item.familyCode === this.newEvol.familyCode &&
            item.chapter === this.newEvol.chapter &&
            item.sheet === this.newEvol.sheet &&
            item.subject === this.newEvol.subject &&
            item.marks === this.newEvol.marks
        )[0];

        this.selectedItem = `${this.newEvol.chapter}
          -
          ${this.newEvol.section}
          -
          ${this.newEvol.subject}
          -
          ${this.newEvol.sheet}
          -
          ${this.newEvol.marks}`;

        if (this.bireItemDTO.name != undefined) {
          this.selectedItem = `${this.selectedItem} - ${this.bireItemDTO.name}`;
        }
        if (this.bireItemDTO.itemNumber != undefined) {
          this.selectedItem = `{this.selectedItem} (${this.bireItemDTO.itemNumber})`;
        }
        this.searchPnCodeLabelValue(true);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetItem'));
      }
    );
    if (!!this.newEvol.interchangeability) {
      this.selectedInterchangeability = this.newEvol.interchangeability;
    }

    this.loadVersionAndISN();
  }

  public ngOnInit() {
    if (
      this.componentData &&
      this.componentData.componentId &&
      this.componentData.object &&
      this.componentData.componentId.length > 0
    ) {
      this.newEvol = this.componentData.object;

      if (!!this.componentData.selectedRow && this.componentData.selectedRow.length === 0) {
        this.isEditable = true;
      } else {
        this.isEditable = false;

        this.fillPopup();
        this.pnCode = this.newEvol.pnCode;
        this.onSelectedActionType();
        this.selectedIsn = '_';
      }
    }
    this.optionExisting = 'existing';
  }

  public onShow() {
    this.displayDialog = true;
  }

  public onHide(): void {
    this.newEvol = {};
    this.display = false;
  }

  public onValidate(): void {
    // this.newEvol.interchangeability = this.selectedInterchangeability;
    if (this.newEvol.versionNumber === null) {
      if (!!this.bireItemDTO && !!this.newEvol.pnPnCode) {
        const findBireItemVersionByItemAndPnInput: FindBireItemVersionByItemAndPnInput = {
          bireItemDTO: this.bireItemDTO,
          pnCode: this.newEvol.pnPnCode
        };
        this.impactsEvolPopupFormService
          .findBireItemVersionsByItemAndPnCode(findBireItemVersionByItemAndPnInput)
          .subscribe(
            (results) => {
              this.newEvol.versionNumber = results[0].versionNumber;
            },
            () => {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetVersion'));
            }
          );
      } else {
        super.throwUnboundLocalError('onValidate', 'this.bireItemDTO && this.newEvol.pnPnCode');
      }
    }
    if (
      this.newEvol.familyCode &&
      this.newEvol.actionTypeCode &&
      this.newEvol.chapter &&
      this.newEvol.pnCode &&
      this.newEvol.pnPnCode &&
      ((this.optionExisting === 'new' && this.newEvol.versionNumber) || this.optionExisting === 'existing')
    ) {
      if (this.isNewImpactsEvol) {
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

  // Load Variant, Interchangeability and Action Type
  private loadDdl(): void {
    this.impactsEvolPopupFormService.findAllBireVariantVersions().subscribe(
      (results) => {
        const list: LabelValue<string>[] = [];
        results.forEach((variantElement) => {
          if (!!variantElement.labelValueDTO) {
            variantElement.labelValueDTO.label = `${variantElement.familyCode}-
              ${variantElement.labelValueDTO.label.substring(0, variantElement.labelValueDTO.label.lastIndexOf('-'))}/${
              variantElement.variantCode
            }-
              ${variantElement.labelValueDTO.label.substring(
                variantElement.labelValueDTO.label.lastIndexOf('-') + 1,
                variantElement.labelValueDTO.label.length
              )}`;

            list.push(variantElement.labelValueDTO);
            this.familyVariantMap.set(variantElement.labelValueDTO, variantElement);
          } else {
            super.throwUnboundLocalError('loadDdl', 'variantElement.labelValueDTO');
          }
        });
        this.variant = list;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetVariant'));
      }
    );
    this.impactsEvolPopupFormService.getPnInterchangeabilityMap().subscribe(
      (results) => {
        this.interchangeability = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetInterchangeability'));
      }
    );
    this.impactsEvolPopupFormService.findBireActionTypesByActionTypeCode().subscribe(
      (results) => {
        this.actionType = results.sort(ArrayUtils.compareValues('label'));
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetActionType'));
      }
    );
  }

  public onChangeVariant() {
    this.pnCode = undefined;
    this.selectedPnBefore = undefined;
    this.selectedItem = undefined;
    if (!!this.variantCode) {
      let familyVariantDTO: FamilyVariantDTO = {};
      this.familyVariantMap.forEach((variantElement) => {
        if (!!variantElement.labelValueDTO && variantElement.labelValueDTO.value === this.variantCode) {
          familyVariantDTO = variantElement;
        }
      });
      if (!!familyVariantDTO) {
        this.newEvol.familyCode = familyVariantDTO.familyCode;
        this.newEvol.variantCode = familyVariantDTO.variantCode;
        this.newEvol.structureType = familyVariantDTO.structureType;
        this.bireItemDTO = {
          variantCode: familyVariantDTO.variantCode,
          familyCode: familyVariantDTO.familyCode,
          structureType: familyVariantDTO.structureType
        };
      }

      let pnCodeSelected;
      if (this.selectedPnBefore) {
        pnCodeSelected = this.selectedPnBefore;
      }
      const searchCriteria: FindBireItemsBySearchCriteriaInput = {
        bireItemDTOCriteria: this.bireItemDTO,
        attribute: undefined,
        pnCode: pnCodeSelected
      };
      this.loadBireItems(searchCriteria);
    }
  }

  private loadBireItems(searchCriteria: FindBireItemsBySearchCriteriaInput) {
    this.impactsEvolPopupFormService.FindBireItemsBySearchCriteriaToLVD(searchCriteria).subscribe(
      (results) => {
        this.item = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetItem'));
      }
    );
  }

  public onChangeItem() {
    if (this.selectedItem) {
      let familyVariantDTO: FamilyVariantDTO = {};
      this.familyVariantMap.forEach((variantElement) => {
        if (!!variantElement.labelValueDTO && variantElement.labelValueDTO.value === this.variantCode) {
          familyVariantDTO = variantElement;
        }
      });
      const itemTab: string[] = this.selectedItem.split('-');
      const subjectPos = 2;
      const sheetPos = 3;
      const marksPos = 4;
      const itemNumberPosStart = 5;
      const itemNumberPosEnd = 6;
      let itemNumber = '';

      if (this.selectedItem.indexOf('(') !== -1) {
        itemNumber = this.selectedItem.split('(')[1].substr(0, itemTab[1].indexOf(')'));
      }

      let name = '';
      if (itemTab[itemNumberPosStart] && itemTab[itemNumberPosEnd]) {
        name = itemTab[itemNumberPosStart].trim() + itemTab[itemNumberPosEnd].split('(')[0];
      }
      this.newEvol.chapter = itemTab[0].trim();
      this.newEvol.section = itemTab[1].trim();
      this.newEvol.subject = itemTab[subjectPos].trim();
      this.newEvol.sheet = itemTab[sheetPos].trim();
      this.newEvol.marks = itemTab[marksPos].trim();

      this.bireItemDTO = {
        variantCode: familyVariantDTO.variantCode,
        familyCode: familyVariantDTO.familyCode,
        structureType: familyVariantDTO.structureType,
        chapter: this.newEvol.chapter,
        section: this.newEvol.section,
        subject: this.newEvol.subject,
        sheet: this.newEvol.sheet,
        marks: this.newEvol.marks,
        name,
        itemNumber
      };
      this.loadVersionAndISN();
      this.searchPnCodeLabelValue(false);
    }
  }

  public loadVersionAndISN() {
    this.impactsEvolPopupFormService.findEvolutionItemVersion(this.bireItemDTO).subscribe(
      (results) => {
        this.versions = results;
        this.newEvol.versionNumber = this.versions[0].label;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetVersion'));
      }
    );

    this.impactsEvolPopupFormService.findAllIsnAtasAsStrings().subscribe(
      (results) => {
        this.isn = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetISN'));
      }
    );
  }

  public onSelectedActionType() {
    this.actionInterchangeability = this.newEvol.actionTypeCode === 'B2' || this.newEvol.actionTypeCode === 'B3';
  }

  public searchPnCodeBefore() {
    if (!!this.variantCode) {
      this.showPnBeforeDialog = true;
      const pnCodeInput = this.selectedPnBefore === undefined ? undefined : this.selectedPnBefore + '%';
      const birePnDTOCriteria: BirePnDTO = {
        pnCode: pnCodeInput,
        pnType: undefined
      };
      const findBirePnsBySearchCriteriaInput: FindBirePnsBySearchCriteriaPSMInput = {
        birePnDTOCriteria,
        familyCode: this.bireItemDTO.familyCode,
        structureType: this.bireItemDTO.structureType,
        variantCode: this.bireItemDTO.variantCode
      };
      this.dialogTableDataPnBefore = {
        componentId: 'ImpactsEvolPopupDialog',
        tableRows: this.impactsEvolPopupFormService.findBirePnsBySearchCriteria(findBirePnsBySearchCriteriaInput),
        tableCols: [
          { field: 'pnCode', width: '200px', filterMode: TableColumnFilterMode.Input },
          { field: 'articleDesignation', width: '200px', filterMode: TableColumnFilterMode.Input },
          { field: 'manufacturerOtanCode', width: '250px', filterMode: TableColumnFilterMode.Input },
          { field: 'otanPnReference', width: '200px', filterMode: TableColumnFilterMode.Input },
          { field: 'quantityUnit', width: '200px', filterMode: TableColumnFilterMode.Input }
        ],
        exportExcel: true,
        globalFilter: true,
        dataKey: undefined,
        selectionMode: TableSelectionMode.Single
      };
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
    this.impactsEvolPopupFormService.findBirePnsBySearchCriteriaToLVD(findBirePnsBySearchCriteriaInput).subscribe(
      (results) => {
        const bireItemDTO: BireItemDTO = {
          familyCode: this.bireItemDTO.familyCode,
          structureType: this.bireItemDTO.structureType,
          variantCode: this.bireItemDTO.variantCode,
          chapter: this.bireItemDTO.chapter,
          section: this.bireItemDTO.section,
          sheet: this.bireItemDTO.sheet,
          subject: this.bireItemDTO.subject,
          marks: this.bireItemDTO.marks
        };

        results.forEach((res) => {
          this.impactsEvolPopupFormService.findBireVersionPnsByItem(bireItemDTO).subscribe((result) => {
            result.forEach((r) => {
              if (r.pnCode === res.value) {
                const num = !r.rf ? ` (${r.versionNumber})` : '';
                res.label = `${r.isnAta} - ${r.pnCode}${num}`;
              }
            });
          });
        });

        this.pnAfter = [...results];
        this.pnBefore = [...results];
        if (!!initData && !!this.newEvol.pnPnCode) {
          if (!this.pnAfter.find((value) => this.newEvol.pnPnCode === value.label)) {
            this.optionExisting = 'new';
            this.pnPnCodeInput = this.newEvol.pnPnCode;
          } else {
            this.optionExisting = 'existing';
            this.pnPnCode = this.newEvol.pnPnCode;
          }
        }

        this.pnAfter = [...this.pnAfter];
        this.pnBefore = [...this.pnBefore];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetPN'));
      }
    );
  }

  public searchPnCodeAfter() {
    if (this.optionExisting === 'new') {
      this.partsSearch = {
        pn: !!this.pnPnCodeInput ? this.pnPnCodeInput : undefined
      };

      this.showPnAfterDialog = true;
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('fillPnAfter'));
    }
  }

  public setSelectedPnBefore(selectedObject: BirePnDTO) {
    if (selectedObject) {
      this.selectedPnBefore = selectedObject.pnCode;
      this.pnCode = this.selectedPnBefore;
      this.newEvol.pnCode = this.selectedPnBefore;
      this.selectedPn();
    }
    this.searchPnCodeLabelValue(false);
    this.loadVersionAndISN();
    this.showPnBeforeDialog = false;
  }

  public selectedPn() {
    const searchCriteria: FindBireItemsBySearchCriteriaInput = {
      bireItemDTOCriteria: this.bireItemDTO,
      attribute: undefined,
      pnCode: this.selectedPnBefore
    };
    this.impactsEvolPopupFormService.FindBireItemsBySearchCriteriaToLVD(searchCriteria).subscribe(
      (result) => {
        this.selectedItem = result[0].label;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetItem'));
      }
    );
    this.impactsEvolPopupFormService.FindBireItemsBySearchCriteria(searchCriteria).subscribe(
      (result) => {
        this.newEvol.chapter = result.list[0].chapter;
        this.newEvol.section = result.list[0].section;
        this.newEvol.subject = result.list[0].subject;
        this.newEvol.sheet = result.list[0].sheet;
        this.newEvol.marks = result.list[0].marks;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetItem'));
      }
    );
    if (!!this.selectedPnBefore) {
      this.selectedPnBeforeDdl = this.selectedPnBefore;
    }
  }

  public setSelectedPnAfter(selectedObject: PartsAssociatedTableDTO) {
    if (!!selectedObject && !!selectedObject.birePnDTO) {
      this.pnPnCodeInput = selectedObject.birePnDTO.pnCode;
      this.newEvol.pnPnCode = this.pnPnCodeInput;
    }
    this.showPnAfterDialog = false;
  }

  public onChangePnPnCode() {
    this.newEvol.pnPnCode = this.pnPnCode;
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
          componentId: 'ImpactsEvolPopupDialog',
          tableRows: this.impactsEvolPopupFormService.findBireModelsByVariantPK(bireVariantVersionDTOId),
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
        super.throwUnboundLocalError('searchApplicability', 'this.bireItemDTO');
      }
    }
  }

  public isValidateEnabled() {
    if (!this.variantCode || !this.selectedItem || !this.newEvol.pnCode || !this.newEvol.actionTypeCode) {
      return false;
    }
    if (this.optionExisting === 'existing' && !this.pnPnCode) {
      return false;
    } else if (this.optionExisting === 'new') {
      if (!this.pnPnCodeInput || !this.newEvol.versionNumber) {
        return false;
      }
    }

    return true;
  }

  public onChangeRadio() {
    this.pnPnCode = undefined;
    this.pnPnCodeInput = undefined;
    // this.newEvol.versionNumber = undefined;
    this.selectedIsn = undefined;
    this.pnApplicability = undefined;
  }

  public setPnSelectedApplicability(event: BireModelDTO) {
    this.pnApplicability = event.modelCode;
    this.showPnApplicabilityDialog = false;
  }

  public setSelectedApplicability(event: BireModelDTO) {
    this.newEvol.applicability = event.modelCode;
    this.showApplicabilityDialog = false;
  }
}
