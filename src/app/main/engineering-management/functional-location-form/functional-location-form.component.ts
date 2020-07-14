import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TreeNode } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { FlVariantInput } from '../../..//shared/types/api-input-types/fleet-management/fl-variant-input.interface';
import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { FormatSelectOptionPipe } from '../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { DateService } from '../../../shared/services/date.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { InputValidationService } from '../../../shared/services/input-validation.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { SaveFunctionalLocationInput } from '../../../shared/types/api-input-types/fleet-management/save-functional-location-input.interface';
import { FunctionalLocationStructureTreeNodeOutput } from '../../../shared/types/api-output-types/fleet-management/functional-location-structure-tree-node-output';
import { BidoDocumentationDTOId } from '../../../shared/types/api-types/bido-documentation-dto-id.interface';
import { BidoDocumentationDTO } from '../../../shared/types/api-types/bido-documentation-dto.interface';
import { BidoFlDTOId } from '../../../shared/types/api-types/bido-fl-dto-id.interface';
import { BidoFlDTO } from '../../../shared/types/api-types/bido-fl-dto.interface';
import { BidoFlEquipmentDTO } from '../../../shared/types/api-types/bido-fl-equipment-dto.interface';
import { BidoFlModelDTOId } from '../../../shared/types/api-types/bido-fl-model-dto-id.interface';
import { BidoFlModelDTO } from '../../../shared/types/api-types/bido-fl-model-dto.interface';
import { BidoFlVariantDTOId } from '../../../shared/types/api-types/bido-fl-variant-dto-id.interface';
import { BidoFlVariantDTO } from '../../../shared/types/api-types/bido-fl-variant-dto.interface';
import { BireItemDTO } from '../../../shared/types/api-types/bire-item-dto.interface';
import { FindBidoFlVariantsByFlCodeDTO } from '../../../shared/types/api-types/find-bido-fl-variants-by-fl-code-dto.interface';
import { FindBireVariantVersionsByFamilyFunctionAlternativeDTO } from '../../../shared/types/api-types/find-bire-variant-versions-by-family-function-alternative-dto.interface';
import { FlModelsTableDTO } from '../../../shared/types/api-types/fl-models-table-dto.interface';
import { FormPageComponent } from '../../../shared/types/form-page-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { FileUtils } from '../../../shared/utils/file-utils';
import { StringUtils } from '../../../shared/utils/string-utils';
import { ObjectStatusComponent } from '../../object-status/object-status.component';
import { OverlayService } from '../../overlay/overlay.service';
import { FunctionalLocationSearchComponent } from '../functional-location-search/functional-location-search.component';
import { FunctionalLocationSearchService } from '../functional-location-search/functional-location-search.service';

import { FunctionalLocationFormService } from './functional-location-form.service';

@Component({
  selector: 'aw-functional-location-form',
  styleUrls: ['./functional-location-form.component.scss'],
  templateUrl: './functional-location-form.component.html'
})
export class FunctionalLocationFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public currentTabId: string;
  public readonly tabGeneralId: string;
  public readonly tabStructureId: string;
  public readonly tabDocumentationId: string;
  public readonly tabModelId: string;
  public readonly tabAssetsId: string;
  public readonly propertyValueId = 1092;
  public isUpdate: boolean;

  public readonly aWPropertiesConstants: typeof AWPropertiesConstants;

  public showOpenFamilyVariantPopup: boolean;
  public showFamilyVariantPopup: boolean;

  public subTitle: string;

  public selectedFunctionalLocationComponent: BidoFlDTO;

  public flFunctions: LabelValue<string>[];
  public statusList: LabelValue<string>[];
  public findBireVariantVersion: FindBireVariantVersionsByFamilyFunctionAlternativeDTO[];

  /* family-variant table */
  public currentFamilyVariant: FindBidoFlVariantsByFlCodeDTO | undefined;
  public dataFamilyVariant: PopupEntry<FindBidoFlVariantsByFlCodeDTO>;
  public isNewFunctionalLocation: boolean;
  public currentFamilyVariantIndex: number;
  public bidoFlVariantDTOAddedList: BidoFlVariantDTO[];
  public bidoFlVariantDTORemovedList: BidoFlVariantDTOId[];
  public flVariantInputAddedList: FlVariantInput[];
  public isReadOnlyFamilyVariantDialog: boolean;
  public familyVariantTableDataSource: TableDataSource<FindBidoFlVariantsByFlCodeDTO>;
  public familyVariant: string[];

  /* asset table */
  public displayStatusPopup: boolean;
  public currentAsset: BidoFlEquipmentDTO;
  public currentAssetId: string;
  public assetTableDataSource: TableDataSource<BidoFlEquipmentDTO>;

  /* model table */
  public currentModel: FlModelsTableDTO | undefined;
  public showModelDialog: boolean;
  public engineType: boolean;
  public isHardpointOrLoadFamily: boolean;
  public flIsMelChecked: boolean;
  public isNewModel: boolean;
  public currentModelIndex: number | undefined;
  public flModelAddedList: BidoFlModelDTO[];
  public flModelRemovedList: BidoFlModelDTOId[];
  public isReadOnlyModelDialog: boolean;
  public modelTableDataSource: TableDataSource<FlModelsTableDTO>;

  /* structure table */
  public structureTableCols: TableColumn[];
  public structureTableColsHardpoint: TableColumn[];
  public bireStructureDisplayed: TreeNode[];
  public bireStructureNodesStore: TreeNode[];

  public structureTable: BidoFlDTO[];
  public structureTableAddedList: BidoFlDTO[];
  public selectedStructure: TreeNode[];
  public currentStructure: BidoFlDTO | undefined;
  public isNewStructure: boolean;
  public showFlCodeTableDialog: boolean;

  public currentConcernedStructureIndex: number;

  /* document table*/
  public documents: BidoDocumentationDTO[];
  public document: BidoDocumentationDTO;
  public docName: string | undefined;
  public docFile: Uint8Array | undefined;
  private documentsAdded: BidoDocumentationDTO | undefined;
  private documentsRemoved: BidoDocumentationDTOId | undefined;
  public delayCategories: LabelValue<string>[];

  public showStatusUpdatesPopup: boolean;
  public statusDTO: BidoFlDTO;
  public statusTitle: string;
  public documentExists: boolean;

  public showSaveSpinner: boolean;

  /* Loaders */
  public familyVariantPanelLoading: boolean;
  public bireStructurePanelLoading: boolean;
  public modelPanelLoading: boolean;
  public assetPanelLoading: boolean;
  public bidoFlCodeInStructure: BidoFlDTO[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly dateService: DateService,
    public inputValidationService: InputValidationService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly functionalLocationSearchService: FunctionalLocationSearchService,
    private readonly functionalLocationFormService: FunctionalLocationFormService,
    private readonly propertiesService: PropertiesService,
    private readonly _overlayService: OverlayService,
    private readonly _formatSelectOption: FormatSelectOptionPipe
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.aWPropertiesConstants = AWPropertiesConstants;

    this.isUpdate = false;
    this.showFamilyVariantPopup = false;
    this.showOpenFamilyVariantPopup = false;

    this.displayStatusPopup = false;

    this.subTitle = '';
    this.selectedFunctionalLocationComponent = {};

    // Tab Id's
    this.tabGeneralId = 'general';
    this.tabStructureId = 'structure';
    this.tabDocumentationId = 'documentation';
    this.tabModelId = 'models';
    this.tabAssetsId = 'assets';

    this.currentTabId = this.tabGeneralId;

    // General Tab
    this.flFunctions = [];
    this.loadFlFunction();
    this.loadStatusList();
    this.loadfamilyVariant();
    this.loadDelayCategory();
    this.initFamilyVariantTableDataSource();

    this.bidoFlVariantDTOAddedList = [];
    this.bidoFlVariantDTORemovedList = [];
    this.flVariantInputAddedList = [];
    this.flModelAddedList = [];
    this.flModelRemovedList = [];

    this.initAssetTableDataSource();

    this.initModelTableDataSource();

    this.modelTableDataSource.dataSelection = [];
    this.engineType = false;

    // Structure Tab
    this.structureTableCols = [
      { field: 'flCode', alignment: 'left', width: '15%' },
      { field: 'flDescription', alignment: 'left', width: '30%' },
      { field: 'flFunction', alignment: 'left', width: '20%' },
      { field: 'flIsMel', alignment: 'left', width: '15%' },
      { field: 'flNominalQuantity', alignment: 'left', width: '10%' },
      { field: 'flRequiredQuantity', alignment: 'left', width: '10%' }
    ];

    this.structureTableColsHardpoint = [
      { field: 'flCode', alignment: 'left', width: '25%' },
      { field: 'flDescription', alignment: 'left', width: '50%' },
      { field: 'flFunction', alignment: 'left', width: '25%' }
    ];

    this.bireStructureDisplayed = [];
    this.bireStructureNodesStore = [];
    this.structureTable = [];
    this.selectedStructure = [];
    this.structureTableAddedList = [];

    // Document Tab

    this.flIsMelChecked = false;
    this.documents = [];
    this.document = {};
    this.documentsAdded = undefined;
    this.documentsRemoved = undefined;
    this.docFile = undefined;
    this.documentExists = false;

    this.showStatusUpdatesPopup = false;
    this.statusDTO = {};

    this.assetTableDataSource.dataSelection = [];
  }

  public getComponentName(): string {
    return 'FunctionalLocationFormComponent';
  }

  public ngOnInit() {
    super.ngOnInit();

    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (this.componentData.objectId && this.componentData.objectId.length > 0) {
        this.getFunctionalLocationComponentData(this.componentData.objectId);
        this.onInit();
      }
    }
    if (this.isCreateOpenMode) {
      this.statusDTO.statusState = AWPropertiesConstants.OBJECT_STATUS_UPDATED_KEY;
    }
  }

  private onInit(): void {
    this.isUpdate = true;
    this.loadTreeTableStructure();
    this.loadDocuments();
    this.findModelByFlCode();
    this.setSubTitle();
    this.selectedStructure = [];
    this.modelTableDataSource.dataSelection = [];
    this.assetTableDataSource.dataSelection = [];
  }

  private initFamilyVariantTableDataSource(): void {
    this.familyVariantTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'familyVariantCode',
          translateKey: this.getTranslateKey('familyVariantCode')
        },
        {
          field: 'item',
          translateKey: this.getTranslateKey('item')
        }
      ],
      data: []
    });
  }

  private initAssetTableDataSource(): void {
    this.assetTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      enableSelection: false,
      columns: [
        {
          field: 'equipmentCode',
          translateKey: this.getTranslateKey('equipmentCode')
        },
        {
          field: 'pnCode',
          translateKey: this.getTranslateKey('pnCode')
        },
        {
          field: 'sn',
          translateKey: this.getTranslateKey('sn')
        },
        {
          field: 'appliedDateStr',
          translateKey: this.getTranslateKey('appliedDateStr')
        },
        {
          field: 'removedDateStr',
          translateKey: this.getTranslateKey('removedDateStr')
        }
      ],
      data: []
    });
  }

  private initModelTableDataSource(): void {
    this.modelTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'modelCode',
          translateKey: this.getTranslateKey('modelCode')
        },
        {
          field: 'modelName',
          translateKey: this.getTranslateKey('modelName')
        },
        {
          field: 'ratingCode',
          translateKey: this.getTranslateKey('ratingCode')
        },
        {
          field: 'ratingName',
          translateKey: this.getTranslateKey('ratingName')
        }
      ],
      data: []
    });
  }

  public refresh(): void {
    this.onInit();
  }

  public cancel(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.onInit();
  }

  public maxLengthCheck(event, value) {
    const min = -21474836;
    const max = 214748364;
    if (value < min || value > max) {
      event.preventDefault();
    }
  }

  public maxLengthCheckRequired(event, value) {
    const min = -21474836;
    const max = 214748364;
    if (value < min || value > max) {
      event.preventDefault();
    }
  }

  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public save(): void {
    if (
      !StringUtils.isNullOrEmpty(this.selectedFunctionalLocationComponent.flDescription) &&
      !StringUtils.isNullOrEmpty(this.selectedFunctionalLocationComponent.flCode)
    ) {
      if (!this.validateHarpointAndLoadProperties()) {
        return;
      }
      if (this.validateQuantity()) {
        if (!!this.docName || !!this.document.docDescription) {
          this.documentsAdded = {
            docCode: this.document.docCode,
            docDescription: this.document.docDescription,
            docName: this.docName,
            docFile: this.docFile,
            docVersion: this.selectedFunctionalLocationComponent.flIsMel ? this.document.docVersion : undefined,
            docPublicationDate: this.selectedFunctionalLocationComponent.flIsMel
              ? this.document.docPublicationDate
              : undefined
          };
        }
        this.familyVariantTableDataSource.dataSrc.forEach((item) => {
          const bidoFlVariant: BidoFlVariantDTO = {
            familyVariantCode: item.familyVariantCode
          };
          const flVariantInput: FlVariantInput = {
            bidoFlVariantDTO: bidoFlVariant,
            bireItemDTOId: item.item === '----' ? undefined : item.bireItemDTOId
          };
          if (item.isAdded) {
            this.flVariantInputAddedList.push(flVariantInput);
          }
        });
        this.selectedFunctionalLocationComponent.flDelayCategory = this.selectedFunctionalLocationComponent.flIsMel
          ? this.selectedFunctionalLocationComponent.flDelayCategory
          : undefined;
        this.selectedFunctionalLocationComponent.flComments = this.selectedFunctionalLocationComponent.flIsMel
          ? this.selectedFunctionalLocationComponent.flComments
          : undefined;
        const saveFunctionalLocationInput: SaveFunctionalLocationInput = {
          isUpdate: this.isUpdate,
          bidoFlDTO: this.selectedFunctionalLocationComponent,
          flVariantInputAddedList: this.flVariantInputAddedList,
          flTreeList: this.bidoFlCodeInStructure,
          bidoFlVariantDTORemovedList: this.bidoFlVariantDTORemovedList,
          bidoDocumentationAdded: this.documentsAdded,
          bidoDocumentationRemoved: this.documentsRemoved,
          flModelAddedList:
            this.selectedFunctionalLocationComponent.flFunction === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY
              ? this.flModelAddedList
              : [],
          flModelRemovedList:
            this.selectedFunctionalLocationComponent.flFunction === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY
              ? this.flModelRemovedList
              : []
        };

        this.showSaveSpinner = true;
        this.functionalLocationFormService.saveFlData(saveFunctionalLocationInput).subscribe(
          (result) => {
            this.messageService.showSuccessMessage('global.successOnSave');
            this.selectedFunctionalLocationComponent.flCode = result.flCode;
            this.document.docCode = result.docCode;
            this.onInit();
            this.updateOpenMode(ComponentOpenMode.Read);
            this.flVariantInputAddedList = [];
            this.bidoFlVariantDTORemovedList = [];
            this.flModelAddedList = [];
            this.flModelRemovedList = [];
            this.documentsAdded = undefined;
            this.documentsRemoved = undefined;
            if (!!this.componentData && !this.componentData.objectId) {
              this.componentData.objectId = result.flCode;
            }

            this.showSaveSpinner = false;
          },
          (err) => {
            const errorCode = 500;
            if (err.error.errorCode === errorCode) {
              this.messageService.showErrorMessage(this.getComponentName() + '.pkBidoFl');
            } else {
              this.messageService.showErrorMessage('global.errorOnSave');
            }
            this.showSaveSpinner = false;
          }
        );
      }
    } else {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }
  }
  private validateHarpointAndLoadProperties() {
    let isValid = true;
    const regexAllExcludingZero = /^-?[1-9][0-9]*$/;
    if (
      this.selectedFunctionalLocationComponent.flOrderNumber &&
      !regexAllExcludingZero.test(`${this.selectedFunctionalLocationComponent.flOrderNumber}`)
    ) {
      this.selectedFunctionalLocationComponent.flOrderNumber = undefined;
      this.messageService.showWarningMessage(this.getComponentName() + '.warnIncorrectOrderNumber');
    }
    const regexOnlyPositiveInteger = /^[0-9]*$/;
    if (
      this.selectedFunctionalLocationComponent.flPositionX &&
      !regexOnlyPositiveInteger.test(`${this.selectedFunctionalLocationComponent.flPositionX}`)
    ) {
      this.messageService.showErrorMessage(this.getComponentName() + '.incorrectTypeOfXPosition');
      isValid = false;
    }
    if (
      this.selectedFunctionalLocationComponent.flPositionY &&
      !regexOnlyPositiveInteger.test(`${this.selectedFunctionalLocationComponent.flPositionY}`)
    ) {
      this.messageService.showErrorMessage(this.getComponentName() + '.incorrectTypeOfYPosition');
      isValid = false;
    }

    return isValid;
  }

  private validateQuantity(): boolean {
    if (
      !!this.selectedFunctionalLocationComponent &&
      !!this.selectedFunctionalLocationComponent.flNominalQuantity &&
      !!this.selectedFunctionalLocationComponent.flRequiredQuantity
    ) {
      if (
        this.selectedFunctionalLocationComponent.flNominalQuantity <
        this.selectedFunctionalLocationComponent.flRequiredQuantity
      ) {
        this.messageService.showErrorMessage(this.getComponentName() + '.reqQuantitySuperiorThanNominal');

        return false;
      }
    }

    return true;
  }

  // To fill the functional location data in the popup
  private getFunctionalLocationComponentData(objectId): void {
    if (this.componentData) {
      if (this.componentData.objectId && this.componentData.objectId.length > 0) {
        this.selectedFunctionalLocationComponent = this.serializationService.deserialize(this.componentData.objectId);
        this.flIsMelChecked = !!this.selectedFunctionalLocationComponent.flIsMel;
        this.selectedFunctionalLocationComponent.flFunction === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY
          ? (this.engineType = true)
          : (this.engineType = false);
        this.isHardpointOrLoadFamily =
          this.selectedFunctionalLocationComponent.flFunction ===
            this.aWPropertiesConstants.ITEM_FAMILY_CODE_HARDPOINT_KEY ||
          this.selectedFunctionalLocationComponent.flFunction === this.aWPropertiesConstants.ITEM_FAMILY_CODE_LOAD_KEY;
      }
    }
  }

  private setSubTitle(): void {
    this.subTitle =
      StringUtils.orEmpty(this.selectedFunctionalLocationComponent.flCode) +
      StringUtils.orEmpty(this.selectedFunctionalLocationComponent.flDescription);
    this.displayComponentContext(this.subTitle, false);
  }

  // Model tab binding
  private findModelByFlCode(): void {
    this.modelTableDataSource.setData([]);
    this.modelTableDataSource.update();
    if (!!this.selectedFunctionalLocationComponent.flCode) {
      this.modelPanelLoading = true;
      this.functionalLocationFormService
        .findModelsByFlCode(this.selectedFunctionalLocationComponent.flCode)
        .pipe(
          finalize(() => {
            this.modelPanelLoading = false;
          })
        )
        .subscribe(
          (results) => {
            this.modelTableDataSource.setData(results);
            this.modelTableDataSource.update();
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindModelsByFlCode'));
          }
        );
    } else {
      super.throwUnboundLocalError('findModelByFlCode', 'this.selectedFunctionalLocationComponent.flCode');
    }
  }

  // Asset table binding by flCode
  private findAssetsByFlCode(): void {
    this.assetTableDataSource.setData([]);
    this.assetTableDataSource.update();
    if (!!this.selectedFunctionalLocationComponent.flCode) {
      const bidoFlDTOId: BidoFlDTOId = {
        flCode: this.selectedFunctionalLocationComponent.flCode
      };
      this.assetPanelLoading = true;
      this.functionalLocationFormService
        .findAssetsByFlCode(bidoFlDTOId)
        .pipe(
          finalize(() => {
            this.assetPanelLoading = false;
          })
        )
        .subscribe(
          (results) => {
            this.assetTableDataSource.setData(results);
            this.assetTableDataSource.update();
            this.assetTableDataSource.dataSrc.forEach((asset) => {
              asset.appliedDateStr = this.dateService.dateToString(asset.appliedDate);
              asset.removedDateStr = this.dateService.dateToString(asset.removedDate);
            });
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAssetsByFlCode'));
          }
        );
    } else {
      super.throwUnboundLocalError('findAssetByFlCode', 'this.selectedFunctionalLocationComponent.flCode');
    }
    this.assetTableDataSource.setData(this.assetTableDataSource.dataSrc);
    this.assetTableDataSource.update();
  }

  public displayStatusForAsset(): void {
    if (!!this.assetTableDataSource.dataSelection && this.assetTableDataSource.dataSelectionCount === 1) {
      this.currentAsset = { ...this.assetTableDataSource.dataSelection[0] };
      this.currentAssetId = !!this.selectedFunctionalLocationComponent
        ? `Asset ${this.selectedFunctionalLocationComponent.flCode} - ${this.currentAsset.equipmentCode}`
        : '';
      this.displayStatusPopup = true;
    }
  }

  public openStatusPopup(bidoFlEquipmentDTO: BidoFlEquipmentDTO): void {
    this.currentAsset = { ...bidoFlEquipmentDTO };
    this.currentAssetId = !!this.selectedFunctionalLocationComponent
      ? `Asset ${this.selectedFunctionalLocationComponent.flCode} - ${this.currentAsset.equipmentCode}`
      : '';
    this.displayStatusPopup = true;
  }

  // To bind dropdown function
  private loadFlFunction(): void {
    forkJoin({
      flFunctions: this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP),
      authorizedFunctions: this.functionalLocationSearchService.fetchPropertyValuesTableData(
        FunctionalLocationSearchComponent.PROPERTY_ID
      )
    }).subscribe((results) => {
      const flFunctions = results.flFunctions || [];
      const authorizedFunctions = results.authorizedFunctions.find(
        (cpt) => `${cpt.enPropertiesValueId}` === `${this.propertyValueId}`
      );
      this.flFunctions = flFunctions.filter(
        (fl) =>
          authorizedFunctions &&
          authorizedFunctions.propertiesValue &&
          authorizedFunctions.propertiesValue.split(';').find((s) => s === fl.value)
      );
    });
  }
  private loadStatusList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.OBJECT_STATUS_MAP).subscribe((results) => {
      this.statusList = results || [];
    });
  }

  // To bind dropdown delay category
  private loadDelayCategory(): void {
    this.functionalLocationFormService.findFlDelayCategory().subscribe((results) => {
      this.delayCategories = results || [];
    });
  }

  public onFlFunctionsSelected(functions) {
    functions.value === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY
      ? (this.engineType = true)
      : (this.engineType = false);
    if (this.isCreateOpenMode) {
      if (functions.value === AWPropertiesConstants.ITEM_FAMILY_CODE_HARDPOINT_KEY) {
        this.functionalLocationSearchService
          .findBireVariantVersionsByFamilyFunctionAlternative()
          .subscribe((familyVariants) => {
            return familyVariants.map((familyVariant) => {
              this.onSaveFamilyVariant({
                familyVariantCode: familyVariant.labelValue.value,
                bireItemDTOId: undefined
              });
            });
          });
      } else {
        this.familyVariantTableDataSource.setData([]);
      }
    }
    this.selectedFunctionalLocationComponent.flOrderNumber = undefined;
    this.selectedFunctionalLocationComponent.flIsInConfSheet = false;
  }

  public onHandleFlIsMel(flIsMel) {
    flIsMel === true ? (this.flIsMelChecked = true) : (this.flIsMelChecked = false);
  }

  public openItemForm(item: FindBidoFlVariantsByFlCodeDTO): void {
    // open item screen
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_ITEM_FORM,
      openMode: ComponentOpenMode.Read
    };
    if (!!item && item.bireItemDTOId) {
      const itemFormId: BireItemDTO = {
        familyCode: item.bireItemDTOId.familyCode,
        chapter: item.bireItemDTOId.chapter,
        section: item.bireItemDTOId.section,
        sheet: item.bireItemDTOId.sheet,
        marks: item.bireItemDTOId.marks,
        subject: item.bireItemDTOId.subject,
        structureType: item.bireItemDTOId.structureType,
        variantCode: item.bireItemDTOId.variantCode
      };
      data.objectId = this.serializationService.serialize(itemFormId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  // Family-variant table binding by flCode
  private findBidoFlVariantsByFlCode(): void {
    this.familyVariantTableDataSource.setData([]);
    this.familyVariantTableDataSource.update();
    this.familyVariantTableDataSource.dataSelection = [];
    if (!!this.selectedFunctionalLocationComponent.flCode) {
      const bidoFlDTOId: BidoFlDTOId = {
        flCode: this.selectedFunctionalLocationComponent.flCode
      };
      this.familyVariantPanelLoading = true;
      this.functionalLocationFormService
        .findFamilyVariantByFlCode(bidoFlDTOId)
        .pipe(
          finalize(() => {
            this.familyVariantPanelLoading = false;
          })
        )
        .subscribe(
          (results) => {
            if (results) {
              results.forEach((item: FindBidoFlVariantsByFlCodeDTO) => {
                item.isAdded = false;
              });
            }
            this.familyVariantTableDataSource.setData(results);
            this.familyVariantTableDataSource.update();
            this.computeFamilyVariantCodes();
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindBidoFlVariantsByFlCode'));
          }
        );
    } else {
      super.throwUnboundLocalError('findBidoFlVariantsByFlCode', 'this.selectedFunctionalLocationComponent.flCode');
    }
  }
  private computeFamilyVariantCodes() {
    this.familyVariant = this.familyVariantTableDataSource.dataSrc
      .map((fv) => fv.familyVariantCode)
      .filter((fv) => !!fv) as string[];
  }

  public createFamilyVariant(): void {
    this.currentFamilyVariant = {
      bireItemDTOId: undefined,
      flFunction: this.selectedFunctionalLocationComponent.flFunction
    };
    this.isNewFunctionalLocation = true;
    this.isReadOnlyFamilyVariantDialog = false;
    this.showFamilyVariantPopup = true;

    this.dataFamilyVariant = {
      componentId: 'FunctionalLocationFormComponent',
      selectedRow: undefined,
      object: this.currentFamilyVariant,
      openMode: ComponentOpenMode.Create
    };
  }

  public editFamilyVariant(): void {
    if (this.familyVariantTableDataSource.dataSelection && this.familyVariantTableDataSource.hasDataSelection) {
      this.isNewFunctionalLocation = false;
      this.isReadOnlyFamilyVariantDialog = false;
      // Copy all the selectedfamilyVariant[0] field into currentFamilyVariant one by one
      this.currentFamilyVariant = { ...this.familyVariantTableDataSource.dataSelection[0] };
      this.currentFamilyVariantIndex = this.familyVariantTableDataSource.dataSrc.indexOf(
        this.familyVariantTableDataSource.dataSelection[0]
      );
      this.showFamilyVariantPopup = true;
      this.dataFamilyVariant = {
        componentId: 'FunctionalLocationFormComponent',
        selectedRow: undefined,
        object: this.currentFamilyVariant,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public deleteSelectedFamilyVariant(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.deleteConfirmationMsg',
      accept: () => {
        this.deleteSelectedFamilyVariants();
      }
    });
  }

  private deleteSelectedFamilyVariants() {
    this.familyVariantTableDataSource.dataSelection.forEach((element) => {
      if (!!element.familyVariantCode && !!this.selectedFunctionalLocationComponent.flCode) {
        const interdepId: BidoFlVariantDTOId = {
          familyVariantCode: element.familyVariantCode,
          flCode: this.selectedFunctionalLocationComponent.flCode
        };

        this.bidoFlVariantDTORemovedList.push(interdepId);
        const indexInDisplayedList = this.familyVariantTableDataSource.dataSrc.indexOf(element);
        this.familyVariantTableDataSource.dataSrc.splice(indexInDisplayedList, 1);
      }
    });
    this.familyVariantTableDataSource.dataSelection = [];
    this.familyVariantTableDataSource.setData(this.familyVariantTableDataSource.dataSrc);
    this.familyVariantTableDataSource.update();
    this.computeFamilyVariantCodes();
  }

  public openFamilyVariant(): void {
    this.isReadOnlyFamilyVariantDialog = true;
    if (this.familyVariantTableDataSource.dataSelection && this.familyVariantTableDataSource.hasDataSelection) {
      this.currentFamilyVariant = { ...this.familyVariantTableDataSource.dataSelection[0] };
      this.showOpenFamilyVariantPopup = true;
      this.dataFamilyVariant = {
        componentId: 'FunctionalLocationFormComponent',
        selectedRow: undefined,
        object: this.currentFamilyVariant,
        openMode: ComponentOpenMode.Read
      };
    }
  }
  public onValidate(item: BireItemDTO) {
    const bidoFlVariant = this.computeSelectedItemToFindBidoFlVariantsByFlCodeDTO(item);
    if (this.isNewFunctionalLocation) {
      this.onSaveFamilyVariant(bidoFlVariant);
    } else {
      this.updateConcernedFunctionalLocation(bidoFlVariant);
    }
  }

  private computeSelectedItemToFindBidoFlVariantsByFlCodeDTO(item: BireItemDTO): FindBidoFlVariantsByFlCodeDTO {
    if (
      !!item &&
      !!item.chapter &&
      !!item.section &&
      !!item.subject &&
      !!item.sheet &&
      !!item.marks &&
      !!item.structureType
    ) {
      const familyVariantCode = `${item.familyCode}-${item.variantCode}`;
      const bireItemDTO = {
        familyCode: item.familyCode,
        variantCode: item.variantCode,
        chapter: item.chapter,
        section: item.section,
        subject: item.subject,
        sheet: item.sheet,
        marks: item.marks,
        structureType: item.structureType as string
      };

      const selectedVariantCode = this.findBireVariantVersion.filter(
        (x) => !!familyVariantCode && x.labelValue.value.includes(familyVariantCode)
      )[0];

      return {
        bireItemDTOId: bireItemDTO,
        item:
          bireItemDTO.chapter +
          '-' +
          bireItemDTO.section +
          '-' +
          bireItemDTO.subject +
          '-' +
          bireItemDTO.sheet +
          '-' +
          bireItemDTO.marks,
        familyVariantCode: selectedVariantCode.labelValue.value
      };
    } else {
      super.throwUnboundLocalError('onSelectedItem', 'item && this.structureType');

      return {
        bireItemDTOId: {
          chapter: '',
          marks: '',
          section: '',
          sheet: '',
          structureType: '',
          subject: ''
        }
      };
    }
  }

  private loadfamilyVariant(): void {
    this.functionalLocationSearchService.findBireVariantVersionsByFamilyFunctionAlternative().subscribe((results) => {
      this.findBireVariantVersion = results;
      const list: LabelValue<string>[] = [];
      results.forEach((element) => {
        list.push(element.labelValue);
      });
    });
  }

  // To re-bind family variant, on addition of new family-variant
  public onSaveFamilyVariant(familyvariantItems: FindBidoFlVariantsByFlCodeDTO): void {
    familyvariantItems.isAdded = true;
    const searchInDisplayedList = this.familyVariantTableDataSource.dataSrc.find((value) =>
      this.isConcernedFunctionalLocationTheSame(value, familyvariantItems)
    );
    if (!searchInDisplayedList) {
      this.familyVariantTableDataSource.addData([familyvariantItems]);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyConcernedFunctionalLocationExist'));
    }
    this.familyVariantTableDataSource.setData(this.familyVariantTableDataSource.dataSrc);
    this.familyVariantTableDataSource.update();
    this.computeFamilyVariantCodes();
  }

  public updateConcernedFunctionalLocation(familyvariantItems: FindBidoFlVariantsByFlCodeDTO) {
    if (!this.familyVariantTableDataSource.data[this.currentFamilyVariantIndex].isAdded) {
      if (
        !!this.familyVariantTableDataSource.data[this.currentFamilyVariantIndex].familyVariantCode &&
        !!this.selectedFunctionalLocationComponent.flCode
      ) {
        const interdepId: BidoFlVariantDTOId = {
          familyVariantCode:
            this.familyVariantTableDataSource.data[this.currentFamilyVariantIndex].familyVariantCode || '',
          flCode: this.selectedFunctionalLocationComponent.flCode
        };
        this.bidoFlVariantDTORemovedList.push(interdepId);
      }
    }
    familyvariantItems.isAdded = true;
    this.familyVariantTableDataSource.replaceData(
      this.familyVariantTableDataSource.data[this.currentFamilyVariantIndex],
      familyvariantItems
    );
    this.familyVariantTableDataSource.setData(this.familyVariantTableDataSource.dataSrc);
    this.familyVariantTableDataSource.dataSelection = [];
    this.familyVariantTableDataSource.update();
    this.computeFamilyVariantCodes();
  }

  // To check for the duplicate entry in the table
  private isConcernedFunctionalLocationTheSame(
    familyvariantItems1: FindBidoFlVariantsByFlCodeDTO,
    familyvariantItems2: FindBidoFlVariantsByFlCodeDTO
  ): boolean {
    if (familyvariantItems1.familyVariantCode === familyvariantItems2.familyVariantCode) {
      return true;
    } else {
      return false;
    }
  }

  // Tab - Model Starts
  public createModel(): void {
    this.currentModel = undefined;
    this.isReadOnlyModelDialog = false;
    this.showModelDialog = true;
  }

  public openModel(): void {
    if (this.modelTableDataSource.dataSelectionCount === 1) {
      this.currentModel = this.modelTableDataSource.dataSelection[0];
      this.currentModelIndex = undefined;
      this.isReadOnlyModelDialog = true;
      this.showModelDialog = true;
    }
  }

  public onAddModel(modelData: FlModelsTableDTO): void {
    if (!!modelData) {
      if (this.validateEntry(this.modelTableDataSource, modelData)) {
        this.modelTableDataSource.setData([...this.modelTableDataSource.dataSrc, modelData]);
        this.modelTableDataSource.update();
        const bidoFlModelDTO: BidoFlModelDTO = {
          flCode: this.selectedFunctionalLocationComponent.flCode,
          modelCode: modelData.bireModelDTO.modelCode,
          familyCode: modelData.bireModelDTO.familyCode,
          variantCode: modelData.bireModelDTO.variantCode
        };
        this.flModelAddedList.push(bidoFlModelDTO);
      } else {
        this.messageService.showErrorMessage('global.duplicate');
      }
    }
    this.modelTableDataSource.setData(this.modelTableDataSource.dataSrc);
    this.modelTableDataSource.update();
  }

  // Validate for duplicacy
  private validateEntry(modelTableDataSource, modelData) {
    let isFound = false;
    this.modelTableDataSource.dataSrc.forEach((result) => {
      if (
        result.bireModelDTO.familyCode === modelData.bireModelDTO.familyCode &&
        result.bireModelDTO.modelCode === modelData.bireModelDTO.modelCode &&
        result.bireModelDTO.modelName === modelData.bireModelDTO.modelName &&
        result.bireModelDTO.ratingCode === modelData.bireModelDTO.ratingCode &&
        result.bireModelDTO.structureType === modelData.bireModelDTO.structureType &&
        result.bireModelDTO.variantCode === modelData.bireModelDTO.variantCode
      ) {
        isFound = true;
      }
    });

    return isFound ? false : true;
  }

  public deleteSelectedModel(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.deleteConfirmationMsg',
      accept: () => {
        this.deleteSelectedModels();
      }
    });
  }

  private deleteSelectedModels() {
    this.modelTableDataSource.dataSelection.forEach((element) => {
      if (!!element.bireModelDTO.familyCode && !!element.bireModelDTO.modelCode && !!element.bireModelDTO.variantCode) {
        const bidoFlModelDTOId: BidoFlModelDTOId = {
          familyCode: element.bireModelDTO.familyCode,
          modelCode: element.bireModelDTO.modelCode,
          variantCode: element.bireModelDTO.variantCode,
          flCode: !!this.selectedFunctionalLocationComponent.flCode
            ? this.selectedFunctionalLocationComponent.flCode
            : ''
        };

        this.flModelRemovedList.push(bidoFlModelDTOId);
        const indexInDisplayedList = this.modelTableDataSource.dataSrc.indexOf(element);
        this.modelTableDataSource.dataSrc.splice(indexInDisplayedList, 1);
      }
    });
    this.modelTableDataSource.dataSelection = [];
    this.modelTableDataSource.setData(this.modelTableDataSource.dataSrc);
    this.modelTableDataSource.update();
  }
  // Tab - Structure starts

  // Structure table

  public onRowSelected(node: TreeNode): void {
    this.deactivePartialSelection(node);
    this.bireStructureNodesStore.push(node);
    this.selectedStructure = [...this.bireStructureNodesStore];
    this.bireStructureDisplayed = [...this.bireStructureDisplayed];
    this.selectedStructure = [...this.selectedStructure];
  }

  public onRowUnSelected(node: TreeNode): void {
    this.deactivePartialSelection(node);
    this.bireStructureNodesStore = this.bireStructureNodesStore.filter((value) => value !== node);
    this.selectedStructure = [...this.bireStructureNodesStore];
    this.bireStructureDisplayed = [...this.bireStructureDisplayed];
    this.selectedStructure = [...this.selectedStructure];
  }

  private deactivePartialSelection(node: TreeNode): void {
    // not to remove the null check
    if (node.parent !== null && node.parent !== undefined) {
      node.parent.partialSelected = false;
      this.deactivePartialSelection(node.parent);
    }
  }

  public loadTreeTableStructure(): void {
    if (!!this.selectedFunctionalLocationComponent.flCode) {
      const bidoFlDTOId: BidoFlDTOId = {
        flCode: this.selectedFunctionalLocationComponent.flCode
      };

      if (bidoFlDTOId.flCode) {
        this.bireStructurePanelLoading = true;
        this.functionalLocationFormService
          .findStructureByFlCode(bidoFlDTOId.flCode)
          .pipe(
            finalize(() => {
              this.bireStructurePanelLoading = false;
            })
          )
          .subscribe(
            (results) => {
              if (!!results.data && !!results.children) {
                this.statusDTO = results.data;
                this.statusTitle = `${this.statusDTO.flCode} - ${this.statusDTO.flDescription}`;
                const treeTable: TreeNode[] = [
                  {
                    data: results.data,
                    children: this.getChildren(results.children),
                    leaf: results.children.length === 0,
                    expanded: true
                  }
                ];

                this.loadFunctionalLocationScreen(treeTable[0].data);
                // this.updateFunctionalLocation(treeTable);
                this.bireStructureDisplayed = treeTable;
                this.fetchFlCodePresentInStructure();
                this.findBidoFlVariantsByFlCode();
                this.findAssetsByFlCode();
              }
            },
            () => {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetStructure'));
            }
          );
      }
    } else {
      super.throwUnboundLocalError('loadTreeTableStructure', 'this.selectedFunctionalLocationComponent.flCode');
    }
  }
  private fetchFlCodePresentInStructure() {
    this.bidoFlCodeInStructure = [];
    this.fetchFlCodePresentInStructureRecursively(this.bireStructureDisplayed);
  }

  private fetchFlCodePresentInStructureRecursively(trees: TreeNode[]) {
    trees.forEach((tree) => {
      this.bidoFlCodeInStructure.push(tree.data as BidoFlDTO);
      if (tree.children && tree.children.length > 0) {
        this.fetchFlCodePresentInStructureRecursively(tree.children);
      }
    });
  }

  public getFlFunctionLabel(row): string {
    let toReturn = '';
    if (row.flFunction) {
      this.flFunctions.forEach((elem: LabelValue<string>) => {
        if (row.flFunction === elem.value) {
          toReturn = elem.label;
        }
      });
    }

    return toReturn;
  }

  private loadFunctionalLocationScreen(data): void {
    this.selectedFunctionalLocationComponent.flDescription = data.flDescription;
    this.selectedFunctionalLocationComponent.flFunction = data.flFunction;
    this.selectedFunctionalLocationComponent.flOrderNumber = data.flOrderNumber;
    this.selectedFunctionalLocationComponent.flIsMel = data.flIsMel;
    this.selectedFunctionalLocationComponent.flNominalQuantity = data.flNominalQuantity;
    this.selectedFunctionalLocationComponent.flRequiredQuantity = data.flRequiredQuantity;
    this.selectedFunctionalLocationComponent.flFlCode = data.flFlCode;
    this.selectedFunctionalLocationComponent.flItems = data.flItems;
    this.selectedFunctionalLocationComponent.flIsOpeConf = data.flIsOpeConf;
    this.selectedFunctionalLocationComponent.flPositionX = data.flPositionX;
    this.selectedFunctionalLocationComponent.flPositionY = data.flPositionY;
    this.selectedFunctionalLocationComponent.flIsInConfSheet = data.flIsInConfSheet;
  }

  // Function to update functional location
  private updateFunctionalLocation(treeTable) {
    const table = treeTable;

    /* table.map((result) => {
      if (
        result.data.flFunction &&
        this.flFunctions.filter((flFunctions) => flFunctions.value === result.data.flFunction)[0]
      ) {
        result.data.flFunction = this.flFunctions.filter(
          (flFunctions) => flFunctions.value === result.data.flFunction
        )[0].label;
      }

      if (result.children) {
        this.updateFunctionalLocation(result.children);
      }
    }); */

    return table;
  }

  private getChildren(results: FunctionalLocationStructureTreeNodeOutput[]): TreeNode[] {
    const childTreeNode: TreeNode[] = [];
    if (results) {
      results.sort((a, b) => {
        if (!!a.data && !!a.data.flCode && !!b.data && !!b.data.flCode) {
          const nameA = a.data.flCode.toLowerCase();
          const nameB = b.data.flCode.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        }

        return 0;
      });
      results.forEach((child) => {
        const childTree: TreeNode = {
          data: child.data,
          leaf: !!child.children && child.children.length === 0,
          expanded: true
        };
        childTree.children = child.children && child.children.length > 0 ? child.children : [];
        childTreeNode.push(childTree);
        if (childTree.children && childTree.children.length > 0) {
          this.getChildren(childTree.children);
        }
      });
    }

    return childTreeNode;
  }

  public createStructure(): void {
    this.isNewStructure = true;
    this.showFlCodeTableDialog = true;
  }

  public editStructure(): void {
    if (this.selectedStructure.length === 1) {
      this.isNewStructure = false;
      this.currentStructure = this.selectedStructure[0].data;
      this.showFlCodeTableDialog = true;
    }
  }

  public openStructure(): void {
    this.currentTabId = this.tabStructureId;
  }

  public addOrUpdateStructure(concernedStructure: BidoFlDTO) {
    if (this.isNewStructure) {
      this.addNewStructure(concernedStructure);
    } else {
      this.updateConcernedStructure(concernedStructure);
    }
  }

  public addNewStructure(concernedStructure: BidoFlDTO) {
    if (this.selectedStructure[0] && this.selectedStructure[0].data.flCode && concernedStructure.flCode) {
      this.functionalLocationFormService.findStructureByFlCode(concernedStructure.flCode).subscribe(
        (flTrees) => {
          const tempTree: TreeNode = {};
          tempTree.data = flTrees.data;
          tempTree.children = flTrees.children;
          tempTree.data.flFlCode = this.selectedStructure[0].data.flCode;

          const searchInStructureTableChildren = this.findTreeFlCodeInStructure(flTrees);
          if (!searchInStructureTableChildren) {
            const selectedStructureChild = this.selectedStructure[0].children;
            if (selectedStructureChild) {
              selectedStructureChild.push(tempTree);

              this.bireStructureDisplayed = [...this.updateFunctionalLocation(this.bireStructureDisplayed)];
              this.fetchFlCodePresentInStructure();
            }
          } else {
            this.messageService.showErrorMessage(
              // Change it to, create a master entry or something
              this.getTranslateKey('errorAlreadyConcernedStructureExist'),
              `(${searchInStructureTableChildren.join(', ')})`
            );
          }

          this.selectedStructure = [];
          this.bireStructureNodesStore = [];
        },
        (err) => {
          this.selectedStructure = [];
          this.bireStructureNodesStore = [];
        }
      );
    } else if (!this.selectedStructure[0] && this.bireStructureDisplayed.length > 0) {
      // If none selected, add entry to root FL Code
      this.selectedStructure[0] = this.bireStructureDisplayed[0];
      this.addNewStructure(concernedStructure);
    }
  }
  private findTreeFlCodeInStructure(
    flTrees: FunctionalLocationStructureTreeNodeOutput,
    result: { bidoFl: string[] | undefined } = { bidoFl: undefined }
  ) {
    if (
      flTrees.data &&
      this.bidoFlCodeInStructure.find((value) => value.flCode === (flTrees.data as BidoFlDTO).flCode)
    ) {
      if ((flTrees.data as BidoFlDTO).flCode) {
        if (!result.bidoFl) {
          result.bidoFl = [] as string[];
        }
        result.bidoFl.push((flTrees.data as BidoFlDTO).flCode as string);
      }
    }
    if (flTrees.children && flTrees.children.length > 0) {
      flTrees.children.forEach((treeNode) => {
        this.findTreeFlCodeInStructure(treeNode, result);
      });
    }

    return result.bidoFl;
  }

  public updateConcernedStructure(concernedStructure: BidoFlDTO) {
    this.selectedStructure[0].data = {
      flCode: concernedStructure.flCode,
      flDescription: concernedStructure.flDescription,
      flFunction: concernedStructure.flFunction,
      flFlCode: this.selectedStructure[0].data.flFlCode,
      flIsMel: concernedStructure.flIsMel,
      flIsOpeConf: concernedStructure.flIsOpeConf,
      flNominalQuantity: concernedStructure.flNominalQuantity,
      flRequiredQuantity: concernedStructure.flRequiredQuantity
    };
    if (this.selectedStructure[0].children) {
      this.selectedStructure[0].children.forEach((fl) => {
        fl.data.flFlCode = concernedStructure.flCode;
      });
    }

    this.bireStructureDisplayed = [...this.updateFunctionalLocation(this.bireStructureDisplayed)];
    this.fetchFlCodePresentInStructure();
    this.selectedStructure = [];
    this.bireStructureNodesStore = [];
  }

  public detachSelectedStructure(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.detachConfirmationMsg',
      accept: () => {
        this.selectedStructure.forEach((element) => {
          element.data.flFlCode = undefined;
          if (!!element.parent && !!element.parent.children) {
            element.parent.children = [
              ...element.parent.children.filter((child) => child.data.flCode !== element.data.flCode)
            ];
          }
          this.bireStructureDisplayed = [...this.bireStructureDisplayed];
          this.fetchFlCodePresentInStructure();
        });
        this.selectedStructure = [];
        this.bireStructureNodesStore = [];
      }
    });
  }

  /* Tab structure Ends */

  /* Tab Documentation Starts*/
  private loadDocuments(): void {
    if (!!this.selectedFunctionalLocationComponent.flCode) {
      this.functionalLocationFormService
        .findBidoDocumentationsByFleetCode(this.selectedFunctionalLocationComponent.flCode)
        .subscribe((results) => {
          this.documents = results || [];
          const docName = !!this.documents[0] ? this.documents[0].docName : undefined;
          if (results.length > 0) {
            this.documentExists = !!this.documents[0].docFile ? true : false;
            this.docName = docName;
            this.document.docDescription = this.documents[0].docDescription;
            this.document.docCode = this.documents[0].docCode;
            this.docFile = this.documents[0].docFile;
            const pubDate = this.documents[0].docPublicationDate;
            if (!!pubDate) {
              this.document.docPublicationDate = new Date(pubDate);
            }
            this.document.docVersion = this.documents[0].docVersion;
          }
        });
    }
  }

  public uploadDocument(event, fileUploader): void {
    if (event.files) {
      const file = event.files[0];

      // Check if the file already exists
      const fileExists = this.documents.some((document) => {
        if (document.docFile) {
          return true;
        } else {
          return false;
        }
      });
      if (fileExists) {
        this.messageService.showWarningMessage(this.getTranslateKey('warningOnFileExists'));
      } else {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          if (fileContent) {
            this.documentExists = true;
            const document: BidoDocumentationDTO = {
              docFile: fileContent,
              docName: file.name,
              docPublicationDate: new Date()
            };

            this.documents = [...this.documents, document];
            this.documentsAdded = document;
            if (!!document.docName) {
              this.docName = document.docName;
            }
            this.docFile = document.docFile;
          }
        });
      }

      fileUploader.clear();
    }
  }

  public downloadFiles(): void {
    FileUtils.downloadFile(this.docFile, this.docName);
  }

  public deleteDocuments(): void {
    const partialMessageKey = 'confirmDeleteSelectedDocuments';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        let docCode: string;
        if (this.documents.length > 0) {
          const temp = this.documents[0].docCode;
          if (!!temp) {
            docCode = temp;
            if (!!docCode) {
              this.documentsRemoved = {
                docCode
              };
            }
          }
        }
        docCode = '';
        this.documents = [];
        this.docName = '';
        this.docFile = undefined;
        this.selectedFunctionalLocationComponent.flComments = '';
        if (!!this.document) {
          this.document.docPublicationDate = undefined;
          this.document.docDescription = '';
          this.document.docCode = undefined;
          this.document.docVersion = '';
        }

        this.documentExists = false;
      }
    });
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: ObjectStatusComponent,
      data: {
        currentAuthor: this.statusDTO.statusUser,
        currentDate: this.statusDTO.statusDate,
        currentStatus: {
          label: this._formatSelectOption.transform(this.statusDTO.statusState, this.statusList),
          value: this.statusDTO.statusState
        },
        nextStatuses: this.statusList
      }
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          this.selectedFunctionalLocationComponent.statusState = event.data;
          this.save();
        }
      }
    });
  }

  /*Tab Documentation Ends*/

  public openGeneralTab(): void {
    this.currentTabId = this.tabGeneralId;
  }

  public openStructureTab(): void {
    this.currentTabId = this.tabStructureId;
  }

  public openDocumentationTab(): void {
    this.currentTabId = this.tabDocumentationId;
  }

  public openModelsTab(): void {
    this.currentTabId = this.tabModelId;
  }

  public openStatusUpdatesPopup() {
    this.showStatusUpdatesPopup = true;
  }

  public openAssetsTab(): void {
    this.currentTabId = this.tabAssetsId;
  }

  public isDisplayableOrderNumber() {
    if (this.selectedFunctionalLocationComponent) {
      return (
        this.sessionService.isSpecificDassault &&
        this.selectedFunctionalLocationComponent.flFunction === this.aWPropertiesConstants.FAMILY_FUNCTION_OME_KEY
      );
    }

    return false;
  }

  public showConfigurationSheet() {
    if (this.selectedFunctionalLocationComponent) {
      return (
        this.selectedFunctionalLocationComponent.flFunction === AWPropertiesConstants.FAMILY_FUNCTION_OME_KEY ||
        this.selectedFunctionalLocationComponent.flFunction === AWPropertiesConstants.FAMILY_FUNCTION_OME_COMPONENT_KEY
      );
    }
  }
}
