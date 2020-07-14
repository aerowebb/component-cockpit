import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TreeNode } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LabelValueHelper } from '../../../../modules/purchase-contract/utils/label-value-helper';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FormatSelectOptionPipe } from '../../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { InputValidationService } from '../../../../shared/services/input-validation.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FlVariantInput } from '../../../../shared/types/api-input-types/fleet-management/fl-variant-input.interface';
import { SaveFunctionalLocationInput } from '../../../../shared/types/api-input-types/fleet-management/save-functional-location-input.interface';
import { FunctionalLocationStructureTreeNodeOutput } from '../../../../shared/types/api-output-types/fleet-management/functional-location-structure-tree-node-output';
import { BidoFlDTOId } from '../../../../shared/types/api-types/bido-fl-dto-id.interface';
import { BidoFlDTO } from '../../../../shared/types/api-types/bido-fl-dto.interface';
import { BidoFlEquipmentDTO } from '../../../../shared/types/api-types/bido-fl-equipment-dto.interface';
import { BidoFlVariantDTOId } from '../../../../shared/types/api-types/bido-fl-variant-dto-id.interface';
import { BidoOpeConfFlDTO } from '../../../../shared/types/api-types/bido-ope-conf-fl-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { FunctionalLocationFormService } from '../../../engineering-management/functional-location-form/functional-location-form.service';
import { FunctionalLocationSearchService } from '../../../engineering-management/functional-location-search/functional-location-search.service';
import { ObjectStatusComponent } from '../../../object-status/object-status.component';
import { OverlayService } from '../../../overlay/overlay.service';

import { OperationalConfigurationFormService } from './operational-configuration-form.service';

@Component({
  selector: 'aw-operational-configuration-form',
  styleUrls: ['./operational-configuration-form.component.scss'],
  templateUrl: './operational-configuration-form.component.html'
})
export class OperationalConfigurationFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public currentTabId: string;
  public readonly tabGeneralId: string;
  public readonly tabStructureId: string;
  public readonly tabAssetsId: string;
  public readonly propertyValueId = 1087;
  public isUpdate: boolean;

  public showFamilyVariantPopup: boolean;

  public subTitle: string;

  public selectedFunctionalLocationComponent: BidoFlDTO;
  public currentFlStatusState?: string;

  public initialFamilyVariantCode?: string;
  public familyVariantCode?: string;
  public familyVariants: LabelValue<string>[];

  public flFunctions: LabelValue<string>[];
  public flStatusList: LabelValue<string>[];

  /* asset table */
  public displayStatusPopup: boolean;
  public currentAsset: BidoFlEquipmentDTO;
  public currentAssetId: string;
  public assetTableDataSource: TableDataSource<BidoFlEquipmentDTO>;

  /* structure table */
  public structureTableCols: TableColumn[];
  public bireStructureDisplayed: TreeNode[];
  public bireStructureNodesStore: TreeNode[];

  public structureTable: BidoFlDTO[];
  public structureTableAddedList: BidoFlDTO[];
  public selectedStructure: TreeNode[];
  public currentStructure: BidoFlDTO | undefined;
  public isNewStructure: boolean;
  public currentConcernedStructureIndex: number;

  public bidoOpeConfFlStructure: BidoOpeConfFlDTO[];

  /* document table*/

  public showStatusUpdatesPopup: boolean;
  public showFlCodeTableDialog: boolean;
  public statusDTO: BidoFlDTO;
  public statusTitle: string;

  public showSaveSpinner: boolean;

  /* Loaders */
  public bireStructurePanelLoading: boolean;
  public assetPanelLoading: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public inputValidationService: InputValidationService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly operationalConfigurationFormService: OperationalConfigurationFormService,
    private readonly functionalLocationFormService: FunctionalLocationFormService,
    private readonly functionalLocationSearchService: FunctionalLocationSearchService,
    private readonly propertiesService: PropertiesService,
    private readonly overlayService: OverlayService,
    private readonly formatSelectOption: FormatSelectOptionPipe
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.isUpdate = false;
    this.showFamilyVariantPopup = false;

    this.displayStatusPopup = false;

    this.subTitle = '';
    this.selectedFunctionalLocationComponent = {};

    // Tab Id's
    this.tabGeneralId = 'general';
    this.tabStructureId = 'structure';
    this.tabAssetsId = 'assets';

    this.currentTabId = this.tabGeneralId;

    // General Tab
    this.flFunctions = [];
    this.loadFlFunction();
    this.loadFlStatusList();
    this.loadFamilyVariants();

    this.initAssetTableDataSource();
    // Structure Tab
    this.structureTableCols = [
      { field: 'flCode', alignment: 'left' },
      { field: 'flDescription', alignment: 'left' },
      { field: 'flFunction', alignment: 'left' }
    ];

    this.bireStructureDisplayed = [];
    this.bireStructureNodesStore = [];
    this.structureTable = [];
    this.selectedStructure = [];
    this.structureTableAddedList = [];

    this.showStatusUpdatesPopup = false;
    this.statusDTO = {};
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_OPERATIONAL_CONFIGURATION_FORM;
  }

  public ngOnInit() {
    super.ngOnInit();

    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (this.componentData.objectId && this.componentData.objectId.length > 0) {
        this.getFunctionalLocationComponentData();
        this.onInit();
      } else {
        this.selectedFunctionalLocationComponent = {
          flFunction: AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY,
          statusState: AWPropertiesConstants.FLOC_STATUS_DRAFT_KEY
        };
        this.updateCurrentFlStatusState();
      }
    }
  }

  private onInit(): void {
    this.isUpdate = true;
    const savedFamilyVariantCode = this.familyVariantCode;
    this.findBidoFlVariantsByFlCode();
    this.findAssetsByFlCode();
    this.loadTreeTableStructure(savedFamilyVariantCode);
    this.setSubTitle();
    this.selectedStructure = [];
    this.assetTableDataSource.dataSelection = [];
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

  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public save(): void {
    if (
      !StringUtils.isNullOrEmpty(this.selectedFunctionalLocationComponent.flCode) &&
      !StringUtils.isNullOrEmpty(this.selectedFunctionalLocationComponent.flDescription) &&
      !StringUtils.isNullOrEmpty(this.familyVariantCode) &&
      !StringUtils.isNullOrEmpty(this.selectedFunctionalLocationComponent.statusState)
    ) {
      this.selectedFunctionalLocationComponent.flIsOpeConf = true;
      // Handling family variant
      const flVariantInputAddedList: FlVariantInput[] = [];
      const bidoFlVariantDTORemovedList: BidoFlVariantDTOId[] = [];
      if (this.initialFamilyVariantCode !== this.familyVariantCode) {
        const flVariantInput: FlVariantInput = {
          bidoFlVariantDTO: {
            familyVariantCode: this.familyVariantCode
          }
        };
        flVariantInputAddedList.push(flVariantInput);

        if (this.initialFamilyVariantCode && this.selectedFunctionalLocationComponent.flCode) {
          const deleteVariant: BidoFlVariantDTOId = {
            flCode: this.selectedFunctionalLocationComponent.flCode,
            familyVariantCode: this.initialFamilyVariantCode
          };
          bidoFlVariantDTORemovedList.push(deleteVariant);
        }
      }

      const saveFunctionalLocationInput: SaveFunctionalLocationInput = {
        isUpdate: this.isUpdate,
        bidoFlDTO: this.selectedFunctionalLocationComponent,
        flVariantInputAddedList,
        bidoFlVariantDTORemovedList,
        flModelAddedList: [],
        flModelRemovedList: []
      };

      this.showSaveSpinner = true;
      this.functionalLocationFormService.saveFlData(saveFunctionalLocationInput).subscribe(
        (result) => {
          if (!this.isCreateOpenMode) {
            this.operationalConfigurationFormService.updateBidoOpeConfFls(this.bidoOpeConfFlStructure).subscribe(
              () => {
                this.messageService.showSuccessMessage('global.successOnSave');
                this.selectedFunctionalLocationComponent.flCode = result.flCode;
                this.onInit();
                if (!!this.componentData && !this.componentData.objectId) {
                  this.componentData.objectId = result.flCode;
                }
              },
              (error) => {
                this.messageService.showErrorMessage('global.errorOnSave');
                this.showSaveSpinner = false;
              }
            );
          } else {
            this.messageService.showSuccessMessage('global.successOnSave');
            this.selectedFunctionalLocationComponent.flCode = result.flCode;
            this.onInit();
            if (!!this.componentData && !this.componentData.objectId) {
              this.componentData.objectId = result.flCode;
            }
          }
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
    } else {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }
  }

  // To fill the functional location data in the popup
  private getFunctionalLocationComponentData(): void {
    if (this.componentData) {
      if (this.componentData.objectId && this.componentData.objectId.length > 0) {
        this.selectedFunctionalLocationComponent = this.serializationService.deserialize(this.componentData.objectId);
      }
    }
  }

  private setSubTitle(): void {
    this.subTitle = StringUtils.orEmpty(this.selectedFunctionalLocationComponent.flDescription);
    this.displayComponentContext(this.subTitle, false);
  }

  public onFlStatusChanged(event: { originalEvent: Event; value?: string }): void {
    if (
      event.value === AWPropertiesConstants.FLOC_STATUS_CANCEL_KEY ||
      event.value === AWPropertiesConstants.FLOC_STATUS_VALIDATED_KEY
    ) {
      this.confirmationService.confirm({
        messageKey: this.getTranslateKey(`statusChangeConfirmationMsg.${event.value}`),
        accept: () => {
          this.updateCurrentFlStatusState();
        },
        reject: () => {
          this.selectedFunctionalLocationComponent.statusState = this.currentFlStatusState;
        }
      });
    }
  }

  private updateCurrentFlStatusState(): void {
    this.currentFlStatusState = this.selectedFunctionalLocationComponent.statusState;
  }

  // Asset table binding by flCode
  private findAssetsByFlCode(): void {
    this.assetTableDataSource.setData([]);
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
    this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP).subscribe((results) => {
      this.flFunctions = results || [];
    });
  }

  private loadFlStatusList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FLOC_STATUS_MAP).subscribe((results) => {
      this.flStatusList = results || [];
    });
  }

  private loadFamilyVariants(): void {
    this.familyVariants = [];
    this.functionalLocationSearchService.findBireVariantVersionsByFamilyFunctionAlternative().subscribe((results) => {
      this.familyVariants = results.map((element) => element.labelValue);
    });
  }

  // Family-variant table binding by flCode
  private findBidoFlVariantsByFlCode(): void {
    this.familyVariantCode = undefined;
    this.initialFamilyVariantCode = undefined;
    if (!!this.selectedFunctionalLocationComponent.flCode) {
      const bidoFlDTOId: BidoFlDTOId = {
        flCode: this.selectedFunctionalLocationComponent.flCode
      };
      this.functionalLocationFormService.findFamilyVariantByFlCode(bidoFlDTOId).subscribe(
        (results) => {
          if (results) {
            this.familyVariantCode = results[0] ? results[0].familyVariantCode : undefined;
            this.initialFamilyVariantCode = this.familyVariantCode;
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindBidoFlVariantsByFlCode'));
        }
      );
    } else {
      super.throwUnboundLocalError('findBidoFlVariantsByFlCode', 'this.selectedFunctionalLocationComponent.flCode');
    }
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

  public loadTreeTableStructure(familyVariantCode: string | undefined): void {
    if (!!this.selectedFunctionalLocationComponent.flCode) {
      this.bireStructurePanelLoading = true;
      const bidoFlDTOId: BidoFlDTOId = {
        flCode: this.selectedFunctionalLocationComponent.flCode
      };
      if (this.isCreateOpenMode) {
        this.findAndFetchStructureByFlCode(familyVariantCode);
      } else {
        forkJoin({
          tree: this.operationalConfigurationFormService.findOpeConfFlTreeNode(bidoFlDTOId),
          structure: this.operationalConfigurationFormService.findBidoOpeConfByOpeConf(bidoFlDTOId)
        }).subscribe((results) => {
          if (!!results.tree) {
            this.displayFlStructureTree(results.tree);
          }
          this.bidoOpeConfFlStructure = results.structure;
        });
      }
    } else {
      super.throwUnboundLocalError('loadTreeTableStructure', 'this.selectedFunctionalLocationComponent.flCode');
    }
  }
  private findAndFetchStructureByFlCode(familyVariantCode: string | undefined) {
    const bidoFlDTOId: BidoFlDTOId = {
      flCode: this.selectedFunctionalLocationComponent.flCode as string
    };
    this.operationalConfigurationFormService.findOpeConfFlTreeNode(bidoFlDTOId).subscribe(
      (results) => {
        if (!!results.data) {
          this.bireStructureDisplayed = [this.fetchTreeTable(results)];
          this.findFlsTreeNodeByFamilyVariant(familyVariantCode);
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetStructure'));
        this.showSaveSpinner = false;
      }
    );
  }
  private displayFlStructureTree(results: FunctionalLocationStructureTreeNodeOutput) {
    const treeTable: TreeNode[] = [this.fetchTreeTable(results)];
    this.statusDTO = results.data as BidoFlDTO;
    this.statusTitle = `${this.statusDTO.flCode} - ${this.statusDTO.flDescription}`;

    this.loadFunctionalLocationScreen(treeTable[0].data);

    this.updateFunctionalLocation(treeTable);
    this.bireStructureDisplayed = treeTable;
    this.bireStructurePanelLoading = false;
    this.updateOpenModeAfterSave();
  }

  private fetchOpeConfFl(flTrees: FunctionalLocationStructureTreeNodeOutput[]): BidoOpeConfFlDTO[] {
    const results: BidoOpeConfFlDTO[] = [];
    const parentOpeConf: BidoOpeConfFlDTO = {};
    parentOpeConf.opeConfFlCode = this.bireStructureDisplayed[0].data.flCode;
    parentOpeConf.flCode = this.bireStructureDisplayed[0].data.flCode;
    results.push(parentOpeConf);

    flTrees.forEach((tree) => {
      if (tree.data) {
        const treeNode = this.getFlTreeFromBidoFlDTO(tree.data);
        treeNode.data.flFlCode = this.bireStructureDisplayed[0].data.flCode;
        if (
          (treeNode.children && treeNode.children.length > 0) ||
          tree.data.flFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_HARDPOINT_KEY
        ) {
          const opeConfFl: BidoOpeConfFlDTO = {};
          opeConfFl.opeConfFlCode = treeNode.data.flFlCode;
          opeConfFl.flCode = treeNode.data.flCode;
          opeConfFl.superiorFlCode = treeNode.data.flFlCode;
          results.push(opeConfFl);
          this.fetchOpeConfFlChild(results, treeNode.data.flCode, tree.children);
        }
      }
    });

    return this.cleanDuplicates(results);
  }
  private cleanDuplicates(results: BidoOpeConfFlDTO[]): BidoOpeConfFlDTO[] {
    const res: BidoOpeConfFlDTO[] = [];
    results.forEach((bidoOpeConfFl) => {
      const _bidoOpeConfFl = results.find(
        (_opeConfFl) =>
          _opeConfFl.flCode === bidoOpeConfFl.flCode && _opeConfFl.superiorFlCode !== bidoOpeConfFl.superiorFlCode
      );
      if (_bidoOpeConfFl) {
        if (this.opeConfFLHasMoreParentThan(bidoOpeConfFl, _bidoOpeConfFl, results, 0)) {
          res.push(bidoOpeConfFl);
        }
      } else {
        if (!res.find((opeConf) => opeConf.flCode === bidoOpeConfFl.flCode)) {
          res.push(bidoOpeConfFl);
        }
      }
    });

    return res;
  }
  private opeConfFLHasMoreParentThan(
    bidoOpeConfFl: BidoOpeConfFlDTO,
    _bidoOpeConfFl: BidoOpeConfFlDTO,
    results: BidoOpeConfFlDTO[],
    counter: number
  ) {
    if (
      bidoOpeConfFl &&
      _bidoOpeConfFl &&
      bidoOpeConfFl.superiorFlCode &&
      _bidoOpeConfFl.superiorFlCode &&
      counter < results.length
    ) {
      return this.opeConfFLHasMoreParentThan(
        results.find((opeConf) => opeConf.flCode === bidoOpeConfFl.superiorFlCode) as BidoOpeConfFlDTO,
        results.find((opeConf) => opeConf.flCode === _bidoOpeConfFl.superiorFlCode) as BidoOpeConfFlDTO,
        results,
        counter + 1
      );
    } else if (bidoOpeConfFl && _bidoOpeConfFl && bidoOpeConfFl.superiorFlCode) {
      return true;
    } else {
      return false;
    }
  }

  private fetchOpeConfFlChild(
    results: BidoOpeConfFlDTO[],
    parentFlCode: string,
    children?: FunctionalLocationStructureTreeNodeOutput[]
  ) {
    if (children) {
      children.forEach((treeNode) => {
        if (treeNode.data && treeNode.data.flFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_HARDPOINT_KEY) {
          if (treeNode.data.flCode) {
            const opeConfFl: BidoOpeConfFlDTO = {};
            opeConfFl.opeConfFlCode = this.bireStructureDisplayed[0].data.flCode;
            opeConfFl.flCode = treeNode.data.flCode;
            opeConfFl.superiorFlCode = parentFlCode;
            results.push(opeConfFl);
            this.fetchOpeConfFlChild(results, treeNode.data.flCode, treeNode.children);
          }
        } else {
          this.fetchOpeConfFlChild(results, parentFlCode, treeNode.children);
        }
      });
    }
  }

  private findFlsTreeNodeByFamilyVariant(familyVariantCode: string | undefined) {
    if (familyVariantCode) {
      this.operationalConfigurationFormService
        .findFlsTreeNodeByFamilyVariant(familyVariantCode)
        .subscribe((flTrees) => {
          this.computeOpeConfFl(flTrees);
        });
    } else {
      this.updateOpenModeAfterSave();
    }
  }
  private computeOpeConfFl(flTrees: FunctionalLocationStructureTreeNodeOutput[]) {
    const opeConfFl = this.fetchOpeConfFl(flTrees);
    this.bidoOpeConfFlStructure = opeConfFl;
    if (!!opeConfFl && opeConfFl.length > 0) {
      //  TODO affichage du tableau point d'emport pas encore définis fonctionnellement
      // this.structureTableCols = [
      //   { field: 'hardpoint', alignment: 'left' },
      //   { field: 'load', alignment: 'left' }
      // ];
      this.operationalConfigurationFormService.createAllBidoOpeConfFl(opeConfFl).subscribe(() => {
        if (this.selectedFunctionalLocationComponent.flCode) {
          const bidoFlDTOId: BidoFlDTOId = {
            flCode: this.selectedFunctionalLocationComponent.flCode
          };
          this.operationalConfigurationFormService.findOpeConfFlTreeNode(bidoFlDTOId).subscribe((opeConfTree) => {
            if (!!opeConfTree) {
              this.displayFlStructureTree(opeConfTree);
            }
          });
        }
      });
    }
  }

  private updateOpenModeAfterSave() {
    if (this.isCreateOpenMode) {
      this.updateOpenMode(ComponentOpenMode.Write);
    } else {
      this.updateOpenMode(ComponentOpenMode.Read);
    }
    this.showSaveSpinner = false;
  }

  private fetchTreeTable(results: FunctionalLocationStructureTreeNodeOutput) {
    if (!!results.data) {
      return {
        data: results.data,
        children: results.children ? this.getChildren(results.children) : [],
        leaf: results.children ? results.children.length === 0 : true,
        expanded: results.children ? results.children.length !== 0 : false
      };
    }

    return {};
  }

  private loadFunctionalLocationScreen(data): void {
    this.selectedFunctionalLocationComponent = { ...data };
    this.updateCurrentFlStatusState();
  }

  // Function to update functional location
  private updateFunctionalLocation(treeTable) {
    const table = treeTable;

    table.map((result) => {
      if (result.data.flFunction) {
        result.data.flFunction =
          LabelValueHelper.getLabelByValue(this.flFunctions, result.data.flFunction) || result.data.flFunction;
      }

      if (result.children) {
        this.updateFunctionalLocation(result.children);
      }
    });

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
          leaf: !child.children || child.children.length === 0,
          expanded: !!child.children && child.children.length !== 0
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
    if (this.selectedStructure.length === 1) {
      const labelKey = 'transaction.FunctionalLocationFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'FunctionalLocationFormComponent',
        objectId: this.serializationService.serialize(this.selectedStructure[0].data),
        openMode: ComponentOpenMode.Read
      };

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public addOrUpdateStructure(concernedStructure: BidoFlDTO) {
    if (this.isNewStructure) {
      this.addNewStructure(concernedStructure);
    } else {
      this.updateConcernedStructure(concernedStructure);
    }
  }

  private addNewStructure(concernedStructure: BidoFlDTO) {
    if (this.selectedStructure[0] && this.selectedStructure[0].data.flCode) {
      if (concernedStructure.flCode) {
        this.functionalLocationFormService.findStructureByFlCode(concernedStructure.flCode).subscribe((flTree) => {
          if (flTree.data) {
            flTree.data.flFlCode = this.selectedStructure[0].data.flCode;
            this.addTreeNodeToStructure(flTree);
            this.selectedStructure = [];
            this.bireStructureNodesStore = [];
          }
        });
      }
    } else {
      if (!this.selectedStructure[0] && this.bireStructureDisplayed.length > 0) {
        // If none selected, add entry to root FL Code
        this.selectedStructure[0] = this.bireStructureDisplayed[0];
        this.addNewStructure(concernedStructure);
      }
    }
  }
  private addTreeNodeToStructure(tempTree: TreeNode) {
    const bireStructureChild = this.bireStructureDisplayed[0].children;
    if (!!bireStructureChild) {
      const searchInStructureTableChildren = this.searchRecursively(tempTree);
      if (!searchInStructureTableChildren) {
        const selectedStructureChild = this.selectedStructure[0].children;
        this.addAllBidoOpeConfFlFromTree(tempTree, this.selectedStructure[0].data.flCode);
        if (selectedStructureChild) {
          selectedStructureChild.push(tempTree);
          this.bireStructureDisplayed = [...this.updateFunctionalLocation(this.bireStructureDisplayed)];
        }
      } else {
        this.messageService.showErrorMessage(
          // Change it to, create a master entry or something
          this.getTranslateKey('errorAlreadyConcernedStructureExist'),
          `(${searchInStructureTableChildren.join(', ')})`
        );
      }
    }
  }
  private addAllBidoOpeConfFlFromTree(tempTree: TreeNode, flCode: string) {
    this.bidoOpeConfFlStructure.push({
      flCode: tempTree.data.flCode,
      opeConfFlCode: this.bireStructureDisplayed[0].data.flCode,
      superiorFlCode: flCode
    });
    if (tempTree.children && tempTree.children.length > 0) {
      tempTree.children.forEach((childTmpTree) => this.addAllBidoOpeConfFlFromTree(childTmpTree, tempTree.data.flCode));
    }
  }
  private searchRecursively(
    tempTree: TreeNode,
    result: { isPresent: undefined | string[] } = { isPresent: undefined }
  ): string[] | undefined {
    if (!!this.bidoOpeConfFlStructure.find((value) => value.flCode === tempTree.data.flCode)) {
      if (!result.isPresent) {
        result.isPresent = [] as string[];
      }
      result.isPresent.push(tempTree.data.flCode);
    } else if (tempTree.children && tempTree.children.length > 0) {
      tempTree.children.forEach((childTempTree) => {
        this.searchRecursively(childTempTree, result);
      });
    }

    return result.isPresent;
  }
  private getFlTreeFromBidoFlDTO(concernedStructure: BidoFlDTO): TreeNode {
    const tempTree: TreeNode = {};
    tempTree.data = concernedStructure;
    tempTree.children = [];

    return tempTree;
  }

  private updateConcernedStructure(concernedStructure: BidoFlDTO) {
    const searchInStructureTableChildren = this.bidoOpeConfFlStructure.find(
      (value) => value.flCode === concernedStructure.flCode
    );
    if (!searchInStructureTableChildren) {
      const opeConfToUpdate = this.bidoOpeConfFlStructure.find(
        (value) => value.flCode === this.selectedStructure[0].data.flCode
      );
      if (opeConfToUpdate) {
        this.bidoOpeConfFlStructure
          .filter((opeConf) => opeConf.superiorFlCode === opeConfToUpdate.flCode)
          .forEach((opeConf) => {
            opeConf.superiorFlCode = concernedStructure.flCode;
          });
        opeConfToUpdate.flCode = concernedStructure.flCode;
      }

      this.selectedStructure[0].data = concernedStructure;
      this.bireStructureDisplayed = [...this.updateFunctionalLocation(this.bireStructureDisplayed)];
      this.selectedStructure = [];
      this.bireStructureNodesStore = [];
    } else {
      this.messageService.showErrorMessage(
        // Change it to, create a master entry or something
        this.getTranslateKey('errorAlreadyConcernedStructureExist')
      );
    }
  }

  public detachSelectedStructure(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.detachConfirmationMsg',
      accept: () => {
        this.selectedStructure.forEach((element) => {
          this.deleteCascadeOpeConf(
            this.bidoOpeConfFlStructure.find((opeConf) => opeConf.flCode === element.data.flCode)
          );

          if (!!element.parent && !!element.parent.children) {
            element.parent.children = [
              ...element.parent.children.filter((child) => child.data.flCode !== element.data.flCode)
            ];
          }
          this.bireStructureDisplayed = [...this.bireStructureDisplayed];
        });
        this.selectedStructure = [];
        this.bireStructureNodesStore = [];
      }
    });
  }
  private deleteCascadeOpeConf(flCode: BidoOpeConfFlDTO | undefined) {
    if (flCode) {
      const listOfFlCodeToDelete: BidoOpeConfFlDTO[] = [flCode];
      this.fetchListOfFlCodeToDelete(listOfFlCodeToDelete, flCode);
      this.bidoOpeConfFlStructure = this.bidoOpeConfFlStructure.filter(
        (opeConf) => !listOfFlCodeToDelete.find((opeConfToDelete) => opeConf.flCode === opeConfToDelete.flCode)
      );
    }
  }

  private fetchListOfFlCodeToDelete(listOfFlCodeToDelete: BidoOpeConfFlDTO[], flCode: BidoOpeConfFlDTO, counter = 0) {
    const childToDelete = this.bidoOpeConfFlStructure.filter((confOpe) => confOpe.superiorFlCode === flCode.flCode);
    if (childToDelete.length > 0 && counter < this.bidoOpeConfFlStructure.length) {
      listOfFlCodeToDelete.push(...childToDelete);
      childToDelete.forEach((opeConf) => {
        this.fetchListOfFlCodeToDelete(listOfFlCodeToDelete, opeConf, counter + 1);
      });
    }
  }

  /* Tab structure Ends */
  public showStatus(): void {
    const overlayRef = this.overlayService.openWithPositionCenter<string | undefined>({
      content: ObjectStatusComponent,
      data: {
        currentAuthor: this.statusDTO.statusUser,
        currentDate: this.statusDTO.statusDate,
        currentStatus: {
          label: this.formatSelectOption.transform(
            this.selectedFunctionalLocationComponent.statusState,
            this.flStatusList
          ),
          value: this.selectedFunctionalLocationComponent.statusState
        },
        nextStatuses: this.flStatusList
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

  public openGeneralTab(): void {
    this.currentTabId = this.tabGeneralId;
  }

  public openStructureTab(): void {
    this.currentTabId = this.tabStructureId;
  }
  public openStatusUpdatesPopup() {
    this.showStatusUpdatesPopup = true;
  }

  public openAssetsTab(): void {
    this.currentTabId = this.tabAssetsId;
  }
}
