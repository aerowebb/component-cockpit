import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { ProductStructureHistoryApi } from '../../../shared/api/product-structure-history.api';
import { UpdateHistoricApi } from '../../../shared/api/update-historic.api';
import { DialogTableData } from '../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../shared/enums/table-selection-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { UpdateHistoricService } from '../../../shared/services/update-historic.service';
import { BireAttributeDTO } from '../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireConcernedAssetDTO } from '../../../shared/types/api-types/bire-concerned-asset-dto.interface';
import { BireFamilyDTO } from '../../../shared/types/api-types/bire-family-dto.interface';
import { BireModificationAttributeDTOId } from '../../../shared/types/api-types/bire-modification-attribute-dto-id.interface';
import { BireModificationAttributeDTO } from '../../../shared/types/api-types/bire-modification-attribute-dto.interface';
import { BireModificationDTOId } from '../../../shared/types/api-types/bire-modification-dto-id.interface';
import { BireModificationDTO } from '../../../shared/types/api-types/bire-modification-dto.interface';
import { HBireModificationAttributeDTO } from '../../../shared/types/api-types/h-bire-modification-attribute-dto.interface';
import { HBireModificationDTO } from '../../../shared/types/api-types/h-bire-modification-dto.interface';
import { FormPageComponent } from '../../../shared/types/form-page-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ModificationAssetsPopupFormService } from '../modification-form/popups/modification-assets-popup-form.service';

import { ModificationFormService } from './modification-form.service';

@Component({
  selector: 'aw-modification-form',
  styleUrls: ['./modification-form.component.scss'],
  templateUrl: './modification-form.component.html'
})
export class ModificationFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly tabGeneralId: string;
  public readonly tabAssetsId: string;
  public readonly tabAttributesId: string;
  public filteredRowsNb: number;
  public isLoading: boolean = false;

  // For object status/updates popup
  public showStatusUpdatesPopup: boolean;
  public tableStatusUpdatesData: DialogTableData<HBireModificationDTO>;
  public deleteApi: string;
  public updatesKeyMap: Map<string, Observable<LabelValue<string>[]>>;
  public isStatusEditable: boolean;

  // For dynamic attributes historic
  public showDynamicAttributesHistoric: boolean;
  public dynamicAttributesHistoric: Observable<HBireModificationAttributeDTO[]>;

  // Show popup boolean
  public showAssetPopup: boolean;

  public selectedModification: BireModificationDTO;

  public assetActionTypeList: LabelValue<string>[];
  public subTitle: string;

  public currentTabId: string;

  public showFamilyCodeDialog: boolean;

  // Test DynamicAttributes Algo
  public bireAttributes: BireAttributeDTO[];
  public bireModificationAttribute: BireModificationAttributeDTO[];
  public dynamicAttributesModification: DynamicAttributes[];
  public dialogTableDataFamilyList: DialogTableData<BireFamilyDTO>;

  /* Assets tab */
  public dataAssets: PopupEntry<BireConcernedAssetDTO>;
  public isReadOnlyAssetDialog: boolean;
  public currentAsset: BireConcernedAssetDTO | undefined;
  public currentAssetIndex: number | undefined;
  public isNewAsset: boolean;

  public keyMap: Map<string, Observable<LabelValue<string>[]>>;
  private isUpgradeValid: boolean;
  public showSaveSpinner: boolean;

  public assetTableDataSource: TableDataSource<BireConcernedAssetDTO>;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public modificationAssetsPopupFormService: ModificationAssetsPopupFormService,
    private readonly propertiesService: PropertiesService,
    private readonly dynamicAttributesService: DynamicAttributesService,
    private readonly modificationFormService: ModificationFormService,
    private readonly updateHistoricService: UpdateHistoricService,
    private readonly updateHistoricApi: UpdateHistoricApi,
    private readonly confirmationService: ConfirmationService,
    public productStructureHistoryApi: ProductStructureHistoryApi
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    // For status/updates popup
    this.showStatusUpdatesPopup = false;
    this.deleteApi = this.updateHistoricApi.removeBireModificationHistory;
    this.updatesKeyMap = new Map<string, Observable<LabelValue<string>[]>>();

    // For dynamic attributes historic
    this.showDynamicAttributesHistoric = false;

    this.showAssetPopup = false;

    this.tabAttributesId = 'attributes';
    this.tabAssetsId = 'assets';
    this.tabGeneralId = 'general';

    this.currentTabId = this.tabGeneralId;
    this.selectedModification = {};

    this.currentAsset = undefined;
    this.currentAssetIndex = undefined;
    this.subTitle = '';
    this.bireAttributes = [];
    this.bireModificationAttribute = [];
    this.dynamicAttributesModification = [];

    this.loadDropdonwList();
    this.showFamilyCodeDialog = false;
    this.getFamilyList();

    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('structureType', this.propertiesService.getValue('getStructureTypeMap'));
    this.keyMap.set('familyFunction', this.propertiesService.getValue('getFamilyFunctionMap'));
    this.isUpgradeValid = false;

    this.initAssetTableDataSource();
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_MODIFICATION_FORM;
  }

  public ngOnInit() {
    super.ngOnInit();
    this.updateOpenMode(this.componentData.openMode);
    if (this.componentData.objectId && this.componentData.objectId.length > 0) {
      this.isUpgradeValid = true;
      this.getModification();
      this.onInit();
      this.setSubTitle();
    }
    const context = !!this.componentData.objectId
      ? `${this.serializationService.deserialize(this.componentData.objectId).modificationType}-${
          this.serializationService.deserialize(this.componentData.objectId).modificationNumber
        }-${this.serializationService.deserialize(this.componentData.objectId).modificationRevisionNumber}`
      : 'tab.createMode';
    this.displayComponentContext(context, this.isCreateOpenMode);
    this.getBireAttributesForModification();
  }

  private onInit(): void {
    this.getSelectedModification();
    this.findBireConcernedAssetsByModification();
  }

  private getFamilyList() {
    const tableColumns: TableColumn[] = [
      { field: 'familyCode', width: '25%', filterMode: TableColumnFilterMode.Input },
      { field: 'familyName', width: '25%', filterMode: TableColumnFilterMode.Input },
      { field: 'structureType', width: '25%', filterMode: TableColumnFilterMode.Input },
      { field: 'familyFunction', width: '25%', filterMode: TableColumnFilterMode.Input }
    ];
    this.dialogTableDataFamilyList = {
      componentId: ComponentConstants.ENG_MODIFICATION_FORM,
      tableCols: tableColumns,
      tableRows: this.modificationFormService.findAllBireFamilys(),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  private getModification(): void {
    if (this.componentData) {
      if (this.componentData.objectId && this.componentData.objectId.length > 0) {
        this.selectedModification = this.serializationService.deserialize(this.componentData.objectId);
      }
    }
  }

  private setSubTitle(): void {
    let subTitle = `${this.selectedModification.modificationType}`;
    subTitle += `-${this.selectedModification.modificationNumber}`;
    subTitle += `-${this.selectedModification.modificationRevisionNumber}`;
    this.subTitle = subTitle;
    this.displayComponentContext(this.subTitle, this.isCreateOpenMode);
  }

  private getSelectedModification(): void {
    const bireModificationDTOId: BireModificationDTOId = {
      modificationType: this.selectedModification.modificationType,
      modificationNumber: this.selectedModification.modificationNumber,
      modificationRevisionNumber: this.selectedModification.modificationRevisionNumber,
      familyCode: this.selectedModification.familyCode,
      structureType: this.selectedModification.structureType
    };
    this.modificationFormService.findBireModification(bireModificationDTOId).subscribe(
      (data) => {
        this.selectedModification = data;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetModification'));
      }
    );
  }

  private loadDropdonwList(): void {
    this.propertiesService.getValue('getAssetActionTypeMap').subscribe(
      (results) => {
        this.assetActionTypeList = results;
      },
      () => {
        this.messageService.showErrorMessage('global.errorOnGet');
      }
    );
  }

  public setSelectedObject(selectedObject: BireFamilyDTO) {
    if (selectedObject) {
      this.selectedModification.familyCode = selectedObject.familyCode;
      this.selectedModification.structureType = selectedObject.structureType;
    }
    this.showFamilyCodeDialog = false;
  }

  private findBireConcernedAssetsByModification(): void {
    this.isLoading = true;
    this.modificationFormService.findBireConcernedAssetsByModification(this.selectedModification).subscribe(
      (results) => {
        this.isLoading = false;
        results.forEach((element) => {
          if (element.assetActionType) {
            element.assetActionType = this.assetActionTypeList.filter(
              (actionType) => actionType.value === element.assetActionType
            )[0].label;
          }
        });
        this.assetTableDataSource.setData(results);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindBireConcernedAsseetsByModification'));
      }
    );
  }

  public createAsset(): void {
    this.currentAsset = {};
    this.showAssetPopup = true;
    this.dataAssets = {
      componentId: ComponentConstants.ENG_MODIFICATION_FORM,
      selectedRow: undefined,
      object: this.currentAsset,
      openMode: ComponentOpenMode.Create
    };
  }

  public editAsset(): void {
    if (this.assetTableDataSource && this.assetTableDataSource.hasDataSelection) {
      // Copy all the selectedAssets[0] field into currentAsset one by one
      this.currentAsset = { ...this.assetTableDataSource.dataSelection[0] };
      if (this.currentAsset.assetActionType != undefined) {
        this.currentAsset.assetActionType = this.assetActionTypeList.filter(
          (actionType) => !!this.currentAsset && actionType.label === this.currentAsset.assetActionType
        )[0].value;
      }
      this.currentAssetIndex = this.assetTableDataSource.data.indexOf(this.assetTableDataSource.dataSelection[0]);
      this.showAssetPopup = true;
      this.dataAssets = {
        componentId: ComponentConstants.ENG_MODIFICATION_FORM,
        selectedRow: undefined,
        object: this.currentAsset,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public deleteSelectedConcernedAssets() {
    const partialMessageKey = 'confirmDeleteSelectedConcernedAssets';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.assetTableDataSource.deleteData(this.assetTableDataSource.dataSelection);
        this.assetTableDataSource.dataSelection = [];
      }
    });
  }

  public openAsset(): void {
    if (this.assetTableDataSource && this.assetTableDataSource.hasDataSelection) {
      // Copy all the selectedAssets[0] field into currentAsset one by one
      this.currentAsset = { ...this.assetTableDataSource.dataSelection[0] };
      if (this.currentAsset.assetActionType != undefined) {
        this.currentAsset.assetActionType = this.assetActionTypeList.filter(
          (actionType) => !!this.currentAsset && actionType.label === this.currentAsset.assetActionType
        )[0].value;
      }
      this.currentAssetIndex = this.assetTableDataSource.data.indexOf(this.assetTableDataSource.dataSelection[0]);
      this.showAssetPopup = true;
      this.dataAssets = {
        componentId: ComponentConstants.ENG_MODIFICATION_FORM,
        selectedRow: undefined,
        object: this.currentAsset,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public onSaveAssets(assetModification: BireConcernedAssetDTO): void {
    if (assetModification) {
      if (assetModification.assetActionType != undefined) {
        assetModification.assetActionType = this.assetActionTypeList.filter(
          (actionType) => actionType.value === assetModification.assetActionType
        )[0].label;
      }
      if (this.currentAssetIndex != undefined) {
        this.assetTableDataSource.replaceData(
          this.assetTableDataSource.data[this.currentAssetIndex],
          assetModification
        );
      } else {
        this.assetTableDataSource.addData([assetModification]);
      }
    }

    this.currentAssetIndex = undefined;
    this.assetTableDataSource.dataSelection = [];
    this.showAssetPopup = false;
  }

  public refresh(): void {
    this.onInit();
  }

  public upgradeModification(): void {
    if (this.isUpgradeValid) {
      let nextRivisionNumber;
      if (!!this.selectedModification && !!this.selectedModification.modificationRevisionNumber) {
        if (!isNaN(Number(this.selectedModification.modificationRevisionNumber))) {
          this.modificationFormService
            .checkAndReturnNewRevisionNumberByModification(this.selectedModification)
            .subscribe((revisionNumber) => {
              if (revisionNumber) {
                nextRivisionNumber = (
                  parseInt(this.selectedModification.modificationRevisionNumber as string, 10) + 1
                ).toString();
                const partialMessageKey = 'confirmUpgradeModification';
                this.confirmationService.confirm({
                  interpolateParams: { 0: this.selectedModification.modificationNumber, 1: nextRivisionNumber },
                  messageKey: this.getTranslateKey(partialMessageKey),
                  accept: () => {
                    this.modificationFormService
                      .validateDocumentUrl(this.selectedModification.modificationDocumentUrl)
                      .subscribe((isValidUrl) => {
                        if (isValidUrl) {
                          this.modificationFormService
                            .upgradeBireModification(this.selectedModification, nextRivisionNumber)
                            .subscribe((result) => {
                              this.selectedModification = result;
                              this.setSubTitle();
                              this.onInit();
                              this.messageService.showSuccessMessage(
                                this.getTranslateKey('successOnUpgradeModification')
                              );
                            });
                        } else {
                          this.messageService.showErrorMessage(this.getTranslateKey('invalidDocumentUrl'));
                        }
                      });
                  }
                });
              } else {
                this.messageService.showErrorMessage(this.getTranslateKey('modificationNotLastVersion'));
              }
            });
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('revisionNumberNotNumeric'));
        }
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('msgUpgradNotPossibe'));
      }
    }
  }

  public editModification(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public save(): void {
    if (this.isValidPage()) {
      this.saveModificationFormData();
    } else {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }
  }

  private saveModificationFormData(): void {
    const assetsData = [...this.assetTableDataSource.data];
    assetsData.forEach((element) => {
      if (element.assetActionType) {
        element.assetActionType = this.assetActionTypeList.filter(
          (actionType) => actionType.label === element.assetActionType
        )[0].value;
      }
    });
    this.bireModificationAttribute = this.dynamicAttributesService.toBireModificationAttribute(
      this.selectedModification,
      this.dynamicAttributesModification
    );

    this.modificationFormService
      .validateDocumentUrl(this.selectedModification.modificationDocumentUrl)
      .subscribe((isValidUrl) => {
        if (isValidUrl) {
          this.showSaveSpinner = true;
          this.modificationFormService
            .saveModification(
              this.selectedModification,
              assetsData,
              this.bireModificationAttribute,
              this.isCreateOpenMode
            )
            .subscribe(
              (result) => {
                this.isUpgradeValid = true;
                this.onInit();
                if (this.isCreateOpenMode) {
                  const bireModificationDTOId: BireModificationDTOId = {
                    familyCode: this.selectedModification.familyCode,
                    structureType: this.selectedModification.structureType,
                    modificationType: this.selectedModification.modificationType,
                    modificationNumber: this.selectedModification.modificationNumber,
                    modificationRevisionNumber: this.selectedModification.modificationRevisionNumber
                  };
                  this.componentData.objectId = this.serializationService.serialize(bireModificationDTOId);
                  this.updateOpenMode(ComponentOpenMode.Write);
                  this.setSubTitle();
                  this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveModification'));
                } else {
                  this.messageService.showSuccessMessage(this.getTranslateKey('successOnUpdateModification'));
                }
                this.showSaveSpinner = false;
              },
              () => {
                this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveModification'));
                this.showSaveSpinner = false;
              }
            );
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('invalidDocumentUrl'));
          this.showSaveSpinner = false;
        }
      });
  }

  private isValidPage(): boolean {
    return (
      this.selectedModification.familyCode != undefined &&
      this.selectedModification.structureType != undefined &&
      this.selectedModification.modificationNumber != undefined &&
      this.selectedModification.modificationNumber.trim().length > 0 &&
      this.selectedModification.modificationRevisionNumber != undefined &&
      this.selectedModification.modificationRevisionNumber.trim().length > 0 &&
      this.selectedModification.modificationType != undefined &&
      this.selectedModification.modificationType.trim().length > 0
    );
  }

  // Get differents attributes list for this object
  public getBireAttributesForModification(): void {
    this.bireAttributes = [];
    forkJoin({
      allCategoryList: this.modificationFormService.findBireAttributesByCategory(
        AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_ALL_KEY
      ),
      modificationCategoryList: this.modificationFormService.findBireAttributesByCategory(
        AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_MODIFICATION_KEY
      )
    }).subscribe(
      (result) => {
        this.bireAttributes.push(...result.allCategoryList);
        this.bireAttributes.push(...result.modificationCategoryList);
        setTimeout(() => {
          this.dynamicAttributesModification = this.dynamicAttributesService.from(this.bireAttributes);
          this.getBireModificationAttributes();
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByCategory'));
      }
    );
  }

  private getBireModificationAttributes(): void {
    this.modificationFormService.findBireModificationAttributesByItem(this.selectedModification).subscribe(
      (results) => {
        this.bireModificationAttribute = results;
        this.dynamicAttributesService.setValues(this.dynamicAttributesModification, this.bireModificationAttribute);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesForModification'));
      }
    );
  }

  public resetFamilyCode(): void {
    this.selectedModification.familyCode = undefined;
    this.selectedModification.structureType = undefined;
  }

  public cancel(): void {
    if (this.isCreateOpenMode) {
      this.selectedModification = {};
      this.initAttributeValue();
    } else {
      this.refresh();
      this.getBireAttributesForModification();
      this.updateOpenMode(ComponentOpenMode.Read);
    }
  }

  private initAttributeValue(): void {
    const leafs = this.dynamicAttributesService.getLeafs(this.dynamicAttributesModification);

    leafs.forEach((attribute) => {
      attribute.value = undefined;
    });
  }

  public openAssetsTab(): void {
    this.currentTabId = this.tabAssetsId;
  }

  public openFamilyPopup(): void {
    this.showFamilyCodeDialog = this.isCreateOpenMode ? true : false;
  }

  public openGeneralTab(): void {
    this.currentTabId = this.tabGeneralId;
  }

  public openAttributesTab(): void {
    this.currentTabId = this.tabAttributesId;
  }

  public openHistoricAttributes(): void {
    this.showDynamicAttributesHistoric = true;
    let attributeIds: BireModificationAttributeDTOId[];
    if (
      !!this.selectedModification &&
      !!this.selectedModification.modificationNumber &&
      !!this.selectedModification.modificationRevisionNumber &&
      !!this.selectedModification.modificationType &&
      !!this.selectedModification.familyCode &&
      !!this.selectedModification.structureType &&
      !!this.dynamicAttributesModification
    ) {
      attributeIds = this.dynamicAttributesService.toBireModificationAttributeId(
        this.selectedModification.modificationNumber,
        this.selectedModification.modificationRevisionNumber,
        this.selectedModification.modificationType,
        this.selectedModification.familyCode,
        this.selectedModification.structureType,
        this.dynamicAttributesModification
      );
      this.getHistoricAttributes(attributeIds);
    } else {
      attributeIds = [];
      this.getHistoricAttributes(attributeIds);
    }
  }

  private getHistoricAttributes(attributeIds: BireModificationAttributeDTOId[]) {
    this.dynamicAttributesHistoric = this.modificationFormService.findHBireModificationAttributesByAttributeId(
      attributeIds
    );
  }

  public openStatusUpdatesPopup() {
    this.showStatusUpdatesPopup = true;
    this.isStatusEditable = true;
    const modificationId: BireModificationDTOId = this.selectedModification;
    const columns: TableColumn[] = [
      { field: 'timestamp', width: '200px', filterMode: TableColumnFilterMode.Input, isDate: true },
      { field: 'statusUser', width: '200px', filterMode: TableColumnFilterMode.Input },
      { field: 'action', width: '200px', filterMode: TableColumnFilterMode.Input },
      { field: 'statusState', width: '250px', filterMode: TableColumnFilterMode.Input },
      { field: 'familyCode', alignment: 'left', width: '6.25rem' },
      { field: 'structureType', alignment: 'left', width: '6.25rem' },
      { field: 'modificationType', alignment: 'left', width: '6.25rem' },
      { field: 'modificationNumber', alignment: 'left', width: '6.25rem' },
      { field: 'modificationRevisionNumber', alignment: 'left', width: '6.25rem' },
      { field: 'modificationDocumentUrl', alignment: 'left', width: '6.25rem' },
      { field: 'modificationTitle', alignment: 'left', width: '6.25rem' }
    ];
    this.updatesKeyMap.set('statusState', this.propertiesService.getValue('getFuncObjectStatusMap'));
    this.tableStatusUpdatesData = {
      componentId: 'ModificationFormComponent.historicPopup',
      tableCols: columns,
      tableRows: this.updateHistoricService.findBireModificationHistoric(modificationId),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Multiple,
      globalFilter: false
    };
  }

  private initAssetTableDataSource(): void {
    this.assetTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'assetPn', translateKey: this.getTranslateKey('assetPn') },
        { field: 'assetSn', translateKey: this.getTranslateKey('assetSn') },
        { field: 'assetActionType', translateKey: this.getTranslateKey('assetActionType') }
      ],
      data: []
    });
  }
}
