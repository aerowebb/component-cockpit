import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { SaveBireConfigurationAndPacksInput } from '../../../../shared/types/api-input-types/product-structure-management/save-bire-configuration-and-packs-input-dto.interface';
import { SaveItemVersionPnInput } from '../../../../shared/types/api-input-types/product-structure-management/save-item-version-pn-input.interface';
import { PartsSearchInput } from '../../../../shared/types/api-input-types/task-management/parts-search-input.interface';
import { PartsAssociatedTableDTO } from '../../../../shared/types/api-output-types/task-management/parts-associated-table-dto.interface';
import { BireAlternativePnDTO } from '../../../../shared/types/api-types/bire-alternative-pn-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireConfigurationDTOId } from '../../../../shared/types/api-types/bire-configuration-dto-id.interface';
import { BireConfigurationDTO } from '../../../../shared/types/api-types/bire-configuration-dto.interface';
import { BireConfigurationPackDTO } from '../../../../shared/types/api-types/bire-configuration-pack-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireItemVersionDTOId } from '../../../../shared/types/api-types/bire-item-version-dto-id.interface';
import { BireItemVersionDTO } from '../../../../shared/types/api-types/bire-item-version-dto.interface';
import { BireModelDTO } from '../../../../shared/types/api-types/bire-model-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireVariantVersionDTOId } from '../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { BireVersionPnDTOId } from '../../../../shared/types/api-types/bire-version-pn-dto-id.interface';
import { BireVersionPnDTO } from '../../../../shared/types/api-types/bire-version-pn-dto.interface';
import { BireVpAttributeDTO } from '../../../../shared/types/api-types/bire-vp-attribute-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { LabelValueUtils } from '../../../../shared/utils/label-value-utils';

import { ItemPartNumberService } from './item-part-number.service';

interface AssociatedPackDTO {
  packName: string;
  associatedList: string[];
}

@Component({
  selector: 'aw-item-part-number',
  templateUrl: './item-part-number.component.html',
  styleUrls: ['./item-part-number.component.scss']
})
export class ItemPartNumberComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly MAIN_ANCHOR_ID: string = 'mainAnchor';
  public static readonly RULES_ANCHOR_ID: string = 'rulesAnchor';
  public static readonly ALTERNATIVES_ANCHOR_ID: string = 'alternativesAnchor';
  public static readonly GENERAL_ANCHOR_ID: string = 'generalAnchor';
  public static readonly CONFIGURATION_ANCHOR_ID: string = 'configurtaionAnchor';

  public readonly component: typeof ItemPartNumberComponent;

  // Main information
  public pageData: BireVersionPnDTO;
  public item: string;
  public familyVariant: string;
  public isnATA: string;
  public hasVersionPnExist: boolean;
  public isnAecma: string;
  public repairabilityOptions: LabelValue<string>[];
  public alternativeTypeOptions: LabelValue<string>[];
  public isnOptions: LabelValue<string>[];
  public configurationRulePropertyOptions: LabelValue<string>[];
  public usedWithPropertyOptions: LabelValue<string>[];
  public alternativePnOptions: LabelValue<string>[];
  public interchangeabilityOptions: LabelValue<string>[];
  public attributesForItemPartNumber: BireAttributeDTO[];
  public itemPartNumberAttributes: BireVpAttributeDTO[];
  public dynamicAttributesForItemPartNumber: DynamicAttributes[];
  public designation: string;
  public bireItemDTO: BireItemDTO;

  // Boolean to hide repairability field for now
  public repairabilityEnabled: boolean;

  // Popups
  public pnSearchObject?: PartsSearchInput;
  public selectedPnType?: string;
  public showAddConfigurationRulePopup: boolean;
  public showAddUsedWithRulePopup: boolean;
  public showAlternativePnPopup: boolean;
  public showPnPopup: boolean;
  public showApplicabilityPopup: boolean;
  public showStatusUpdatesPopup: boolean;

  public pnTableData: DialogTableData<BirePnDTO>;
  public applicabilityTableData: DialogTableData<BireModelDTO>;

  public applicabilityInput: BireVariantVersionDTOId;

  public itemId: string;

  // Alternatives
  public alternativesListDataSource: TableDataSource<BireAlternativePnDTO>;
  public currentAlternative: BireAlternativePnDTO;
  public currentAlternativeIndex: number;
  public isNewAlternative?: boolean;
  private alternativesListFromDB: BireAlternativePnDTO[];
  private removedAlternatives: BireAlternativePnDTO[];

  // Configuration packs
  public configPackListDataSource: TableDataSource<BireConfigurationDTO>;
  public showAddConfigurationPackPopup: boolean;
  public showConfigurationPackCompatibilityPopup: boolean;
  public showPacksPopup: boolean;
  public dataConfPack: PopupEntry<BireConfigurationDTO>;
  private createBireConfigurationDTO: BireConfigurationDTO[];
  private updateBireConfigurationDTO: BireConfigurationDTO[];
  private removeBireConfigurationDTOId: BireConfigurationDTOId[];
  private createBireConfigurationPackDTOList: BireConfigurationPackDTO[];
  private associatedPackDTO: AssociatedPackDTO[];

  private readonly vintageConfigDateStr = 'vintageConfigDateStr';

  // Table of content

  @ViewChild(ItemPartNumberComponent.MAIN_ANCHOR_ID)
  public mainEltRef: ElementRef;

  @ViewChild(ItemPartNumberComponent.RULES_ANCHOR_ID)
  public rulesEltRef: ElementRef;

  @ViewChild(ItemPartNumberComponent.ALTERNATIVES_ANCHOR_ID)
  public alternativesEltRef: ElementRef;

  @ViewChild(ItemPartNumberComponent.GENERAL_ANCHOR_ID)
  public generalEltRef: ElementRef;

  @ViewChild(ItemPartNumberComponent.CONFIGURATION_ANCHOR_ID)
  public configEltRef: ElementRef;

  public toc: PageTocEntry[];

  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly itemPartNumberService: ItemPartNumberService,
    private readonly propertiesService: PropertiesService,
    private readonly dynamicAttributesService: DynamicAttributesService,
    private readonly translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService
  ) {
    super(
      ComponentOpenMode.Read,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );

    this.component = ItemPartNumberComponent;
    this.hasVersionPnExist = false;

    this.configPackListDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'configurationCode', translateKey: this.getTranslateKey('configurationCode') },
        {
          field: 'configurationName',
          translateKey: this.getTranslateKey('configurationName')
        },
        {
          field: this.vintageConfigDateStr,
          translateKey: this.getTranslateKey(this.vintageConfigDateStr)
        }
      ],
      data: []
    });

    this.init();
    this.setAlternativesListCols();
    this.loadDropdowns();

    this.registerPageTocEntryObservable();

    // Lang change events
    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      this.attributesForItemPartNumber = [];
      this.itemPartNumberAttributes = [];
      this.getAttributesForItemPartNumber();
    });
  }

  public ngOnInit() {
    super.ngOnInit();

    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      if (!!this.componentData.objectId) {
        this.setTableOfContent();
        const pageData = this.serializationService.deserialize(this.componentData.objectId) as BireVersionPnDTO;

        if (this.isCreateOpenMode) {
          this.pageData = pageData;
          if (!!this.pageData.isnAta) {
            this.isnATA = this.isnOptions.filter((isn) => isn.value === this.pageData.isnAta)[0].label;
          }
          this.onInitPageData();
        } else {
          const input: BireVersionPnDTOId = {
            chapter: pageData.chapter || '',
            familyCode: pageData.familyCode || '',
            isnAta: pageData.isnAta || '',
            marks: pageData.marks || '',
            pnCode: pageData.pnCode || '',
            section: pageData.section || '',
            sheet: pageData.sheet || '',
            structureType: pageData.structureType || '',
            subject: pageData.subject || '',
            variantCode: pageData.variantCode || '',
            versionNumber: pageData.versionNumber || ''
          };
          this.itemPartNumberService.findBireVersionPn(input).subscribe((result) => {
            this.hasVersionPnExist = true;
            this.pageData = result;
            if (!!this.pageData.isnAta) {
              const isn = this.isnOptions.filter((isnOption) => isnOption.value === this.pageData.isnAta)[0];
              if (!!isn) {
                this.isnATA = isn.label;
              }
            }
            this.onInitPageData();
          });
        }
      }
    }
  }

  private setTableOfContent(): void {
    const mainKey = this.getTranslateKey('main');
    const rulesKey = this.getTranslateKey('rules');
    const alternativesKey = this.getTranslateKey('alternatives');
    const generalKey = this.getTranslateKey('general');
    const configPackKey = this.getTranslateKey('configPack');

    this.translateService.get([mainKey, rulesKey, alternativesKey, generalKey, configPackKey]).subscribe((results) => {
      const mainLabel: string = !!results ? results[mainKey] : 'Main Information';
      const rulesLabel: string = !!results ? results[rulesKey] : 'Rules';
      const alternativesLabel: string = !!results ? results[alternativesKey] : 'Alternatives';
      const generalLabel: string = !!results ? results[generalKey] : 'General';
      const configLabel: string = !!results ? results[configPackKey] : 'Configuration';

      this.toc = [
        {
          id: 'mainAnchor',
          anchor: this.mainEltRef,
          label: mainLabel
        },
        {
          id: 'rulesAnchor',
          anchor: this.rulesEltRef,
          label: rulesLabel
        },
        {
          id: 'alternativesAnchor',
          anchor: this.alternativesEltRef,
          label: alternativesLabel
        },
        {
          id: 'generalAnchor',
          anchor: this.generalEltRef,
          label: generalLabel
        },
        {
          id: 'configurtaionAnchor',
          anchor: this.configEltRef,
          label: configLabel
        }
      ];
    });
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_ITEM_PART_NUMBER_FORM;
  }

  public openStatusUpdatesPopup(): void {
    this.showStatusUpdatesPopup = true;
  }

  public reloadItemPN(): void {
    this.init();
    this.setAlternativesListCols();
    this.loadDropdowns();

    this.ngOnInit();
  }

  public editItemPN(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public cancel(): void {
    if (this.isCreateOpenMode) {
      this.init();
    } else {
      this.reloadItemPN();
      this.updateOpenMode(ComponentOpenMode.Read);
    }
  }

  public saveItemPN(): void {
    if (!this.pageData.pnCode || !this.pageData.isnAta) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      const alternativeTable: BireAlternativePnDTO[] = [];
      this.alternativesListDataSource.dataSrc.forEach((alt) => {
        const row = JSON.parse(JSON.stringify(alt)) as BireAlternativePnDTO;
        LabelValueUtils.labelToStringValue(row, 'interchangeability', this.interchangeabilityOptions);
        alternativeTable.push(row);
      });
      const attributesInput: BireVpAttributeDTO[] = [];
      this.dynamicAttributesForItemPartNumber.forEach((attributes) => {
        attributes.attributes.forEach((attr) => {
          const row: BireVpAttributeDTO = {
            attributeId: attr.id,
            attributeValue: this.dynamicAttributesService.attributeValueToString(attr),
            pnCode: this.pageData.pnCode,
            versionNumber: this.pageData.versionNumber,
            section: this.pageData.section,
            marks: this.pageData.marks,
            chapter: this.pageData.chapter,
            variantCode: this.pageData.variantCode,
            familyCode: this.pageData.familyCode,
            subject: this.pageData.subject,
            sheet: this.pageData.sheet,
            structureType: this.pageData.structureType,
            isnAta: this.pageData.isnAta,
            statusState: this.pageData.statusState,
            statusUser: this.pageData.statusUser,
            statusDate: this.pageData.statusDate
          };
          attributesInput.push(row);
        });
      });
      const saveInput: SaveItemVersionPnInput = {
        bireItemVersionDTOId: this.pageData as BireItemVersionDTOId,
        bireAlternativePnDTOAddedList: alternativeTable,
        bireVpAttributeInput: {
          bireVersionPnDTOId: this.pageData as BireVersionPnDTOId,
          bireVpAttributeDataList: attributesInput
        }
      };
      if (this.isCreateOpenMode) {
        saveInput.createBireVersionPnDTO = this.pageData;
      } else {
        saveInput.updateBireVersionPnDTO = this.pageData;
      }
      this.save(saveInput);
    }
  }

  public openPNSearchPopup(): void {
    this.selectedPnType = AWPropertiesConstants.PN_TYPE_PART_KEY;
    let isToolSearch = false;
    if (!!this.bireItemDTO && !!this.bireItemDTO.itemFamilyCode) {
      if (AWPropertiesConstants.ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY === this.bireItemDTO.itemFamilyCode) {
        this.selectedPnType = AWPropertiesConstants.PN_TYPE_GROUND_SUPPORT_EQUIPMENT_KEY;
      } else if (AWPropertiesConstants.ITEM_FAMILY_CODE_PILOT_EQUIPMENT_KEY === this.bireItemDTO.itemFamilyCode) {
        this.selectedPnType = AWPropertiesConstants.PN_TYPE_PILOT_EQUIPMENT_KEY;
      } else if (AWPropertiesConstants.ITEM_FAMILY_CODE_TOOL_KEY === this.bireItemDTO.itemFamilyCode) {
        isToolSearch = true;
      }
    }

    this.pnSearchObject = {
      pn: this.pageData.pnCode,
      type: this.selectedPnType,
      toolSearch: isToolSearch
    };

    this.showPnPopup = true;
  }

  public onChangeQtyAsRequired(): void {
    this.pageData.rf = !this.pageData.ar;
  }

  public onChangeQtyToRefer(): void {
    this.pageData.ar = !this.pageData.rf;
  }

  public openApplicabilityDialog(): void {
    this.showApplicabilityPopup = true;
  }

  public onChangeATA(): void {
    if (!!this.componentData.objectId) {
      if (this.isCreateOpenMode) {
        this.isnATA = !!this.pageData.isnAta
          ? this.isnOptions.filter((isn) => isn.value === this.pageData.isnAta)[0].label
          : '';
      }
    }
  }

  public onChangeAecma(): void {
    this.isnAecma = !!this.pageData.isnAecma
      ? this.isnOptions.filter((isn) => isn.value === this.pageData.isnAecma)[0].label
      : '';
  }

  public addConfigurationRule(): void {
    this.showAddConfigurationRulePopup = true;
  }

  public addUsedWithRule(): void {
    this.showAddUsedWithRulePopup = true;
  }

  public onConfigurationRuleValidate(event: string): void {
    this.pageData.configurationRule =
      this.pageData.configurationRule === null || this.pageData.configurationRule === undefined
        ? `${event}`
        : `${this.pageData.configurationRule}\n${event}`;
  }

  public onUsedWithRuleValidate(event: string): void {
    this.pageData.usedWith =
      this.pageData.usedWith === null || this.pageData.usedWith === undefined
        ? `${event}`
        : `${this.pageData.usedWith}\n${event}`;
  }

  public deleteSelectedAlternatives(): void {
    this.alternativesListDataSource.dataSelection.forEach((alt) => {
      const inDB = this.alternativesListFromDB.some((alternative) => alternative.pnPnCode === alt.pnPnCode);
      if (inDB) {
        this.removedAlternatives.push(alt);
      }
      this.alternativesListDataSource.deleteDataSelection();
    });
  }

  public createAlternative(): void {
    this.currentAlternative = {};
    this.isNewAlternative = true;
    this.showAlternativePnPopup = true;
    this.alternativesListDataSource.dataSelection = [];
  }

  public editAlternative(): void {
    const currAlternative = { ...this.alternativesListDataSource.dataSelection[0] };
    LabelValueUtils.labelToStringValue(currAlternative, 'interchangeability', this.interchangeabilityOptions);
    this.currentAlternative = currAlternative;
    this.currentAlternativeIndex = this.alternativesListDataSource.dataSrc.findIndex(
      (alternative) => alternative.pnPnCode === this.currentAlternative.pnPnCode
    );

    this.isNewAlternative = false;
    this.showAlternativePnPopup = true;
    this.alternativesListDataSource.dataSelection = [];
  }

  public onCreateAlternative(event: BireAlternativePnDTO): void {
    const pnPnCodeExists = this.alternativesListDataSource.dataSrc.some((alt) => alt.pnPnCode === event.pnPnCode);
    if (!pnPnCodeExists) {
      const alternative: BireAlternativePnDTO = {
        pnPnCode: event.pnPnCode,
        interchangeability: event.interchangeability || '',
        pnCode: this.pageData.pnCode,
        chapter: this.pageData.chapter,
        familyCode: this.pageData.familyCode,
        marks: this.pageData.marks,
        section: this.pageData.section,
        sheet: this.pageData.sheet,
        structureType: this.pageData.structureType,
        subject: this.pageData.subject,
        variantCode: this.pageData.variantCode,
        versionNumber: this.pageData.versionNumber
      };
      LabelValueUtils.stringValueToLabel(alternative, 'interchangeability', this.interchangeabilityOptions);
      this.alternativesListDataSource.addData([alternative]);
    }
  }

  public onUpdateAlternative(event: BireAlternativePnDTO): void {
    if (event.interchangeability === null || event.interchangeability === undefined) {
      event.interchangeability = '';
    }
    LabelValueUtils.stringValueToLabel(event, 'interchangeability', this.interchangeabilityOptions);

    this.alternativesListDataSource.replaceData(
      this.alternativesListDataSource.dataSrc[this.currentAlternativeIndex],
      event
    );
    this.currentAlternativeIndex = -1;
  }

  public setSelectedApplicability(event: BireModelDTO[]): void {
    this.pageData.applicability =
      this.pageData.applicability === null || this.pageData.applicability === undefined
        ? this.generateApplicabilityString(event)
        : `${this.pageData.applicability}/${this.generateApplicabilityString(event)}`;
  }

  public setSelectedPn(event: PartsAssociatedTableDTO): void {
    this.pageData.pnCode = !!event.birePnDTO ? event.birePnDTO.pnCode : undefined;
  }

  // tslint:disable-next-line:no-any
  public navigateToSelectedSectionFromSummary(anchorId: string, elementRef: ElementRef, event: any): void {
    super.selectPageTocEntry(anchorId);
    super.scrollToAnchorAndStopPropagation(elementRef, event);
  }

  private onInitPageData(): void {
    this.item =
      `${this.pageData.chapter}` +
      '-' +
      `${this.pageData.section}` +
      '-' +
      `${this.pageData.subject}` +
      '-' +
      `${this.pageData.sheet}` +
      '-' +
      `${this.pageData.marks}`;

    this.itemId =
      `${this.pageData.familyCode}-${this.pageData.variantCode}` +
      '/' +
      `${this.item}` +
      '/' +
      `${this.pageData.pnCode}` +
      '/' +
      `${this.pageData.isnAta}`;

    this.familyVariant = `${this.pageData.familyCode}-${this.pageData.variantCode}`;

    this.loadAlternativePnDropdown();
    this.loadPropertyDropdown();
    this.loadInterchangeabilityDropdown();

    this.initApplicabilityData();
    this.initConfigurationPackData();
    this.initPnData();
    this.initItemData();
  }

  private initItemData(): void {
    const bireItemDTOId: BireItemDTOId = this.pageData as BireItemDTOId;
    this.itemPartNumberService.findBireItem(bireItemDTOId).subscribe((results) => {
      this.bireItemDTO = results;
    });
  }

  private init(): void {
    this.repairabilityEnabled = false;
    this.pageData = {};
    this.item = '';
    this.familyVariant = '';
    this.isnATA = '';
    this.isnAecma = '';
    this.repairabilityOptions = [];
    this.alternativeTypeOptions = [];
    this.isnOptions = [];
    this.configurationRulePropertyOptions = [];
    this.usedWithPropertyOptions = [];
    this.alternativePnOptions = [];
    this.interchangeabilityOptions = [];
    this.showAddConfigurationRulePopup = false;
    this.showAddUsedWithRulePopup = false;
    this.showAlternativePnPopup = false;
    this.showPnPopup = false;
    this.showApplicabilityPopup = false;
    this.isNewAlternative = undefined;
    this.attributesForItemPartNumber = [];
    this.dynamicAttributesForItemPartNumber = [];
    this.itemPartNumberAttributes = [];
    this.designation = '';
    this.itemId = '';
    this.alternativesListFromDB = [];
    this.removedAlternatives = [];
    this.createBireConfigurationDTO = [];
    this.updateBireConfigurationDTO = [];
    this.removeBireConfigurationDTOId = [];
    this.createBireConfigurationPackDTOList = [];
    this.associatedPackDTO = [];
    this.hasVersionPnExist = false;
    this.getAttributesForItemPartNumber();
  }

  private initPnData(): void {
    const pnTableCols: TableColumn[] = [
      { field: 'pnCode', alignment: 'left' },
      { field: 'articleDesignation', alignment: 'left' },
      { field: 'manufacturerOtanCode', alignment: 'left' },
      { field: 'otanPnReference', alignment: 'left' },
      { field: 'quantityUnit', alignment: 'left' }
    ];

    this.pnTableData = {
      componentId: 'DialogPn',
      tableCols: pnTableCols,
      tableRows: this.itemPartNumberService.findBirePnsBySearchCriteria({}, '', '', ''),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  private initApplicabilityData(): void {
    const applicabilityTableCols: TableColumn[] = [
      { field: 'modelCode', alignment: 'left' },
      { field: 'modelName', alignment: 'left' }
    ];

    this.applicabilityInput = {
      familyCode: this.pageData.familyCode || '',
      structureType: this.pageData.structureType || '',
      variantCode: this.pageData.variantCode || ''
    };

    this.applicabilityTableData = {
      componentId: 'DialogApplicability',
      tableCols: applicabilityTableCols,
      tableRows: this.itemPartNumberService.findBireModelsByVariantPk(this.applicabilityInput),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Multiple,
      globalFilter: true
    };
  }

  private setAlternativesListCols(): void {
    this.alternativesListDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'pnPnCode', translateKey: this.getTranslateKey('pnPnCode') },
        {
          field: 'interchangeability',
          translateKey: this.getTranslateKey('interchangeability')
        }
      ],
      data: []
    });
  }

  private getAttributesForItemPartNumber(): void {
    this.itemPartNumberService
      .findBireAttributesByCategory(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_ALL_KEY)
      .subscribe(
        (results) => {
          this.attributesForItemPartNumber.push(...results);
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByCategory'));
        }
      );
    this.itemPartNumberService
      .findBireAttributesByCategory(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_ITEM_PN_KEY)
      .subscribe(
        (results) => {
          this.attributesForItemPartNumber.push(...results);
          this.dynamicAttributesForItemPartNumber = this.dynamicAttributesService.from(
            this.attributesForItemPartNumber
          );
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByCategory'));
        }
      );
  }

  private loadAttributesAndAlternativesTableData(): void {
    const input: BireVersionPnDTOId = this.pageData as BireVersionPnDTOId;
    this.alternativesListDataSource.setData([]);
    this.itemPartNumberService.getItemPartNumberDetails(input).subscribe((results) => {
      if (!!results) {
        this.alternativesListFromDB = results.bireAlternativePnDTO;
        this.itemPartNumberAttributes = results.attributeDTO;
        results.bireAlternativePnDTO.forEach((result) => {
          const interchangeability = this.interchangeabilityOptions.filter(
            (option) => option.value === result.interchangeability
          )[0];
          if (!!interchangeability) {
            result.interchangeability = interchangeability.label;
          }
        });
        this.alternativesListDataSource.addData(results.bireAlternativePnDTO);
        this.dynamicAttributesService.setValues(this.dynamicAttributesForItemPartNumber, this.itemPartNumberAttributes);
      }
    });
  }

  private loadDropdowns(): void {
    this.loadRepairabilityDropdown();
    this.loadAlternativeTypeDropdown();
    this.loadISNDropdown();
  }

  private loadRepairabilityDropdown(): void {
    this.propertiesService.getValue(GenericPropertyConstants.REPAIRABILITY_MAP).subscribe((results) => {
      this.repairabilityOptions = results;
    });
  }

  private loadAlternativeTypeDropdown(): void {
    this.propertiesService.getValue(GenericPropertyConstants.ALTERNATIVE_TYPE_MAP).subscribe((results) => {
      this.alternativeTypeOptions = results;
    });
  }

  private loadISNDropdown(): void {
    this.itemPartNumberService.getISNOptions().subscribe((results) => {
      this.isnOptions = results;
      if (!!this.pageData.isnAta) {
        this.isnATA = this.isnOptions.filter((isn) => isn.value === this.pageData.isnAta)[0].label;
      }
      if (!!this.pageData.isnAecma) {
        this.isnATA = this.isnOptions.filter((isn) => isn.value === this.pageData.isnAecma)[0].label;
      }
    });
  }

  private loadPropertyDropdown(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PN_PROPERTY_MAP).subscribe((results) => {
      results.forEach((property) => {
        if (property.value === '4' || property.value === '5') {
          this.usedWithPropertyOptions.push(property);
        } else {
          this.configurationRulePropertyOptions.push(property);
        }
      });
    });
  }

  private loadAlternativePnDropdown(): void {
    const input: BireItemDTOId = this.pageData as BireItemDTOId;
    this.itemPartNumberService.getPartNumberStructure(input).subscribe((results) => {
      results.forEach((result) => {
        if (!!result.pn) {
          const option: LabelValue<string> = {
            label: result.pn,
            value: result.pn
          };
          this.alternativePnOptions.push(option);
        }
      });
      this.alternativePnOptions = this.alternativePnOptions.filter((pn) => pn.label !== this.pageData.pnCode);
      if (results.length > 0) {
        this.designation = results[0].description || '';
      }

      const context =
        !!this.componentData.objectId && !!this.serializationService.deserialize(this.componentData.objectId).pnCode
          ? !!this.designation
            ? `${this.serializationService.deserialize(this.componentData.objectId).pnCode} (${this.designation})`
            : `${this.serializationService.deserialize(this.componentData.objectId).pnCode}`
          : 'tab.createMode';

      this.displayComponentContext(context, this.isCreateOpenMode);
    });
  }

  private loadInterchangeabilityDropdown(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PN_INTERCHANGEABILITY_MAP).subscribe((results) => {
      this.interchangeabilityOptions = results;
      this.loadAttributesAndAlternativesTableData();
    });
  }

  private generateApplicabilityString(event: BireModelDTO[]): string {
    let result = '';
    if (event.length === 0) {
      result = '';
    } else if (event.length === 1) {
      result = `${event[0].modelCode}`;
    } else if (event.length > 1) {
      result = `${event[0].modelCode}`;
      for (let i = 1; i < event.length; i++) {
        result = `${result}/${event[i].modelCode}`;
      }
    }

    return result;
  }

  private save(input: SaveItemVersionPnInput): void {
    this.showSaveSpinner = true;
    const observables = [
      this.itemPartNumberService.saveItemPartNumber(input),
      this.itemPartNumberService.removeBireAlternativePnList(this.removedAlternatives),
      this.itemPartNumberService.saveBireConfigurationAndPacks(this.saveConfigurationPacks())
    ];
    forkJoin(observables)
      .pipe(
        finalize(() => {
          this.showSaveSpinner = false;
        })
      )
      .subscribe(() => {
        const messageKey = this.isCreateOpenMode ? 'successOnSaveItemPN' : 'successOnUpdateItemPN';
        this.messageService.showSuccessMessage(this.getTranslateKey(messageKey));
        const context = `${this.pageData.pnCode} (${this.designation})`;
        this.displayComponentContext(context, this.isCreateOpenMode);
        this.updateOpenMode(ComponentOpenMode.Write);
        this.componentData.openMode = 1;
        this.componentData.objectId = this.serializationService.serialize(this.pageData);
        this.reloadItemPN();
      });
  }

  /**
   * Configuraiton packs operations
   */

  public initConfigurationPackData() {
    const bireItemVersionDTO: BireItemVersionDTO = {
      chapter: this.pageData.chapter,
      familyCode: this.pageData.familyCode,
      marks: this.pageData.marks,
      section: this.pageData.section,
      sheet: this.pageData.sheet,
      statusDate: this.pageData.statusDate,
      statusState: this.pageData.statusState,
      statusUser: this.pageData.statusUser,
      structureType: this.pageData.structureType,
      subject: this.pageData.subject,
      variantCode: this.pageData.variantCode,
      versionNumber: this.pageData.versionNumber
    };
    this.configPackListDataSource.setData([]);
    this.itemPartNumberService
      .findBireConfigurationsByItemVersion(bireItemVersionDTO)
      .subscribe((res: BireConfigurationDTO[]) => {
        res.forEach((data) => {
          data[this.vintageConfigDateStr] = this.dateService.dateToString(data.vintageConfigDate);
          this.configPackListDataSource.addData([data]);
        });
      });
  }

  public openConfigPackDialog() {
    this.dataConfPack = {
      componentId: 'AddConfigPackComponent',
      openMode: ComponentOpenMode.Read,
      object: this.configPackListDataSource.dataSelection[0],
      selectedRow: undefined
    };
    this.showAddConfigurationPackPopup = true;
  }

  public addConfigPacksDialog() {
    this.dataConfPack = {
      componentId: 'AddConfigPackComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };
    this.showAddConfigurationPackPopup = true;
  }

  public editConfigPack() {
    this.dataConfPack = {
      componentId: 'AddConfigPackComponent',
      openMode: ComponentOpenMode.Write,
      object: this.configPackListDataSource.dataSelection[0],
      selectedRow: undefined
    };
    this.showAddConfigurationPackPopup = true;
  }

  public onConfigurationPackAdd(ev: BireConfigurationDTO) {
    const searchInDisplayedList = this.configPackListDataSource.dataSrc.find(
      (value) => value.configurationCode === ev.configurationCode
    );

    if (!searchInDisplayedList) {
      if (!!ev) {
        const bireConfigurationDTO: BireConfigurationDTO = {
          chapter: this.pageData.chapter,
          familyCode: this.pageData.familyCode,
          marks: this.pageData.marks,
          section: this.pageData.section,
          sheet: this.pageData.sheet,
          statusDate: this.pageData.statusDate,
          statusState: this.pageData.statusState,
          statusUser: this.pageData.statusUser,
          structureType: this.pageData.structureType,
          subject: this.pageData.subject,
          variantCode: this.pageData.variantCode,
          versionNumber: this.pageData.versionNumber,
          configurationCode: ev.configurationCode,
          configurationName: ev.configurationName,
          vintageConfigDate: ev.vintageConfigDate
        };

        this.createBireConfigurationDTO.push(bireConfigurationDTO);
        bireConfigurationDTO[this.vintageConfigDateStr] = this.dateService.dateToString(
          bireConfigurationDTO.vintageConfigDate
        );
        this.configPackListDataSource.addData([bireConfigurationDTO]);
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyConfCodeExisting'));
    }
  }

  public onConfigurationPackEdit(ev: BireConfigurationDTO) {
    this.configPackListDataSource.dataSrc.filter((res, index) => {
      if (ev.configurationCode === res.configurationCode) {
        this.configPackListDataSource.dataSrc[index][this.vintageConfigDateStr] = this.dateService.dateToString(
          ev.vintageConfigDate
        );
        this.configPackListDataSource.replaceData(res, ev);
        // Check if its in create
        let isInCreate = false;
        let indexCreate = -1;
        this.createBireConfigurationDTO.filter((resp, indexC) => {
          if (resp.configurationCode === ev.configurationCode) {
            isInCreate = true;
            indexCreate = indexC;
          }
        });

        if (isInCreate) {
          this.createBireConfigurationDTO[indexCreate] = ev;
        } else {
          // this.updateBireConfigurationDTO.filter((data, indexU) => {
          //   if (data.configurationCode === ev.configurationCode) {
          //     this.updateBireConfigurationDTO[indexU] = ev;
          //   }
          // });
          this.updateBireConfigurationDTO.push(ev);
        }
      }
    });
    this.configPackListDataSource.dataSelection = [];
  }

  public verifyPacksCompatibiltiyDialog() {
    this.showConfigurationPackCompatibilityPopup = true;
  }

  public showPacksDialog() {
    this.showPacksPopup = true;
  }

  public onAddAssociatedPacks(ev: BireConfigurationPackDTO[]) {
    let confCodeStr =
      `${this.pageData.familyCode}${this.pageData.variantCode}` +
      `${this.pageData.chapter}` +
      `${this.pageData.section}` +
      `${this.pageData.subject}` +
      `${this.pageData.sheet}` +
      `${this.pageData.marks}` +
      `${this.pageData.versionNumber}`;
    ev.forEach((code) => {
      confCodeStr = confCodeStr.concat(code.packBaseOptionCode as string);
    });

    const searchInDisplayedList = this.configPackListDataSource.dataSrc.find(
      (value) => value.configurationCode === confCodeStr
    );

    if (!searchInDisplayedList) {
      const preCode = this.configPackListDataSource.dataSelection[0].configurationCode;
      this.configPackListDataSource.dataSelection[0].configurationCode = confCodeStr;

      // Check if its in create
      let isInCreate = false;
      let indexCreate = -1;
      this.createBireConfigurationDTO.filter((resp, indexC) => {
        if (resp.configurationCode === this.configPackListDataSource.dataSelection[0].configurationCode) {
          isInCreate = true;
          indexCreate = indexC;
        }
      });

      if (isInCreate) {
        this.createBireConfigurationDTO.splice(indexCreate, 1);
      } else {
        this.removeBireConfigurationDTOId.push({
          configurationCode: preCode as string
        });
      }

      let isFound = false;
      let index = -1;
      this.createBireConfigurationPackDTOList.filter((res, i) => {
        if (res.configurationCode === preCode) {
          isFound = true;
          index = i;
        }
      });

      if (isFound) {
        // this.createBireConfigurationPackDTOList.splice(index, 1);
        this.createBireConfigurationPackDTOList[
          index
        ].configurationCode = this.configPackListDataSource.dataSelection[0].configurationCode;
      }

      ev.forEach((code) => {
        code.configurationCode = this.configPackListDataSource.dataSelection[0].configurationCode;
        let isAvailable = false;
        this.createBireConfigurationPackDTOList.filter((res) => {
          if (res.configurationCode === code.configurationCode && res.packBaseOptionCode === code.packBaseOptionCode) {
            isAvailable = true;
          }
        });
        if (!isAvailable) {
          const dto: BireConfigurationPackDTO = {
            configurationCode: code.configurationCode,
            familyCode: this.pageData.familyCode,
            structureType: this.pageData.structureType,
            variantCode: this.pageData.variantCode,
            chapter: this.pageData.chapter,
            section: this.pageData.section,
            subject: this.pageData.subject,
            sheet: this.pageData.sheet,
            marks: this.pageData.marks,
            packBaseOptionCode: code.packBaseOptionCode
          };
          this.createBireConfigurationPackDTOList.push(dto);
        }
        this.addToAssociateMap(code.configurationCode as string, code.packBaseOptionCode as string);
      });

      this.createBireConfigurationDTO.push(this.configPackListDataSource.dataSelection[0]);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyConfCodeExisting'));
    }

    this.configPackListDataSource.dataSelection = [];
  }

  private addToAssociateMap(code: string, packCode: string) {
    let isFound = false;
    let codeIndex = -1;
    this.associatedPackDTO.filter((dto, index) => {
      if (dto.packName === code) {
        isFound = true;
        codeIndex = index;
      }
    });

    if (!isFound) {
      this.associatedPackDTO.push({
        packName: code,
        associatedList: [packCode]
      });
    } else {
      this.associatedPackDTO[codeIndex].associatedList.push(packCode);
    }
  }

  public deleteSelectedPacks() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedPacks'),
      accept: () => {
        this.configPackListDataSource.dataSelection.forEach((element) => {
          const searchInAddedList = this.removeBireConfigurationDTOId.find(
            (value) => value.configurationCode === element.configurationCode
          );

          if (searchInAddedList) {
            const indexInAddedList = this.removeBireConfigurationDTOId.indexOf(searchInAddedList);
            this.removeBireConfigurationDTOId.splice(indexInAddedList, 1);
          } else {
            const bireItemMaintenanceDTOId: BireConfigurationDTOId = {
              configurationCode: element.configurationCode as string
            };

            const clone = { ...bireItemMaintenanceDTOId };
            this.removeBireConfigurationDTOId.push(clone);
          }

          this.configPackListDataSource.deleteDataSelection();
        });
      }
    });
  }

  public saveConfigurationPacks(): SaveBireConfigurationAndPacksInput {
    const saveBireConfigurationAndPacksInput: SaveBireConfigurationAndPacksInput = {
      bireItemDTO: this.pageData as BireItemDTO,
      createBireConfigurationDTO: this.createBireConfigurationDTO,
      updateBireConfigurationDTO: this.updateBireConfigurationDTO,
      removeBireConfigurationDTOId: this.removeBireConfigurationDTOId,
      createBireConfigurationPackDTOList: this.createBireConfigurationPackDTOList
    };

    return saveBireConfigurationAndPacksInput;
  }
}
