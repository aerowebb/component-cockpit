import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { SelectItem, TreeNode } from 'primeng/api';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { LabelValueHelper } from '../../../modules/purchase-contract/utils/label-value-helper';
import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ControlConfigConstants } from '../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../shared/services/date.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { FindBidoFlsBySearchCriteriaInput } from '../../../shared/types/api-input-types/fleet-management/find-bido-fls-by-search-criteria-input.interface';
import { SaveBidoFlEquipmentStructureInput } from '../../../shared/types/api-input-types/fleet-management/save-bido-fl-equipment-structure-input-dto.interface';
import { BaseMpRowInput } from '../../../shared/types/api-input-types/maintenance-plan/base-mp-row-input.interface';
import { FLAssignTreeNode } from '../../../shared/types/api-output-types/fleet-business/fl-assign-tree-node-dto.interface.';
import { FunctionalLocationAssignmentOrphanListOutput } from '../../../shared/types/api-output-types/fleet-business/functional-location-assignment-orphan-list-output-dto.interface';
import { FuntionalLocationAssignmentStructureOutput } from '../../../shared/types/api-output-types/fleet-business/funtional-location-assignment-structure-output-dto.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoFlEquipmentDTO } from '../../../shared/types/api-types/bido-fl-equipment-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { SummaryRow } from '../../../shared/types/summary-row.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ListUtils } from '../../../shared/utils/list-utils';
import { StringUtils } from '../../../shared/utils/string-utils';

import { FunctionalLocationAssignmentService } from './functional-location-assignment.service';

interface FlEquipmentRow {
  flLevel?: string;
  function?: string;
  requiredQuantity?: number;
  nominalQuantity?: number;
  equipment?: string;
  dropDownList?: LabelValue<string>[];
  assignmentControl?: string;
  complianceControl?: string;
  assignmentControlToolTip?: string;
  complianceControlToolTip?: string;
  assetCode?: string;
  flCode?: string;
  alertToolTip?: string;
  hide?: boolean;
  _obj: FLAssignTreeNode;
}

interface FlOrphanEquipmentRow {
  fl?: string;
  equipment?: string;
  applicationDate?: string;
  function?: string;
}

interface AssetCodeMapValue {
  assetCode: string;
  assetName: string;
  bidoEquipmentDTO: BidoEquipmentDTO;
  children: FLAssignTreeNode[];
}

@Component({
  selector: 'aw-functional-location-assignment',
  templateUrl: './functional-location-assignment.component.html',
  styleUrls: ['./functional-location-assignment.component.scss']
})
export class FunctionalLocationAssignmentComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly SUMMARY_TABLE_ASSIGN_LABEL: string = 'assignmentControl';
  public static readonly SUMMARY_TABLE_COMPLIANCE_LABEL: string = 'complianceControl';
  public static readonly SUMMARY_TABLE_GLOBAL_LABEL: string = 'global';
  private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;

  public selectedAnchor: string | undefined;
  public toc;
  public filtersVisible: boolean;
  public searchControlList: SelectItem[];
  public searchItemStructureGlobalFilterChanged: Subject<ControlConfigConstants[]>;
  public searchGlobalFilter: string;

  @ViewChild('aircraftAnchor')
  public aircraftAnchor: ElementRef;

  @ViewChild('upcomingEventsSummaryAnchor')
  public upcomingEventsSummaryAnchor: ElementRef;

  @ViewChild('assignmentDetailsAnchor')
  public assignmentDetailsAnchor: ElementRef;

  @ViewChild('generalAnchor')
  public generalAnchor: ElementRef;

  @ViewChild('unAssignmentDetailsAnchor')
  public unAssignmentDetailsAnchor: ElementRef;

  public readonly tabGeneralId: string;
  public readonly tabTaskId: string;
  public readonly tabVisitId: string;
  public readonly tabAttributesId: string;

  public assignTableCols: TableColumn[];
  public unAssignTableCols: TableColumn[];
  public unAssignEquipmentList: FlOrphanEquipmentRow[];
  public functionalLocationList: LabelValue<string>[];
  public functionalLocationMap: Map<string, string>;
  public selectedBaseMpRowInput: BaseMpRowInput;
  public searchCriteriaInput: FindBidoFlsBySearchCriteriaInput;
  public applicationDate: Date;
  public flApplicationDate: Date;
  public bidoEquipmentDto: BidoEquipmentDTO;
  public isFlToAssignReadOnly: boolean;
  public bidoFlEquipmentDTO: BidoFlEquipmentDTO;
  private updatedFlList: BidoFlEquipmentDTO[];
  public isSaved: boolean;
  public isAssetLoading: boolean;
  public showSaveSpinner: boolean;
  public flTreeNodes: TreeNode[];
  public treeRecordCount: number;
  public summaryTableColList: TableColumn[];
  public summaryTable: SummaryRow[];
  public componentContext: string;
  private tableDataOnLoad: FLAssignTreeNode;
  private assetMapData: Map<string, AssetCodeMapValue>;
  public controlList: ControlConfigConstants[];
  public readonly controlConfigConstants: typeof ControlConfigConstants;
  public equipmentOperationalStatusLabel?: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly functionalLocationAssignmentService: FunctionalLocationAssignmentService,
    public dateService: DateService,
    public propertiesService: PropertiesService,
    pageTocService: PageTocService,
    private readonly translateService: TranslateService
  ) {
    super(
      ComponentOpenMode.Write,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );
    this.controlConfigConstants = ControlConfigConstants;
    this.setControlGlobalFilter();
    this.registerPageTocEntrySelectedObservable();
    this.functionalLocationMap = new Map<string, string>();
    this.setTableCols();
    this.setSearchControlList();
  }

  private registerPageTocEntrySelectedObservable(): void {
    this.pageTocService.pageTocEntrySelected$.pipe(takeUntil(this.unsubscribe)).subscribe((pageTocEntrySelected) => {
      this.selectedAnchor = pageTocEntrySelected;
    });
  }

  public getComponentName(): string {
    return 'FunctionalLocationAssignmentComponent';
  }

  private setTableCols(): void {
    this.assignTableCols = [
      { field: 'flLevel', alignment: 'left', width: '30%' },
      { field: 'function', alignment: 'left', width: '10%' },
      { field: 'requiredQuantity', alignment: 'left', width: '10%' },
      { field: 'nominalQuantity', alignment: 'left', width: '10%' },
      { field: 'equipment', alignment: 'left', width: '20%' },
      { field: 'assignmentControl', alignment: 'center', width: '10%' },
      { field: 'complianceControl', alignment: 'center', width: '10%' }
    ];

    this.unAssignTableCols = [
      { field: 'fl', alignment: 'left', width: '30%' },
      { field: 'equipment', alignment: 'left', width: '30%' },
      { field: 'function', alignment: 'left', width: '20%' },
      { field: 'applicationDate', alignment: 'left', width: '20%' }
    ];

    this.summaryTableColList = [
      { field: 'category', alignment: 'left', width: '40%' },
      { field: 'ok', alignment: 'center', width: '20%' },
      { field: 'warning', alignment: 'center', width: '20%' },
      { field: 'nok', alignment: 'center', width: '20%' }
    ];
  }

  private init(): void {
    this.isFlToAssignReadOnly = false;
    this.unAssignEquipmentList = [];
    this.bidoFlEquipmentDTO = {};
    this.bidoEquipmentDto = {};
    this.searchCriteriaInput = {
      bidoFlDTOCriteria: {}
    };
    this.updatedFlList = [];
    this.isSaved = false;
    this.isAssetLoading = false;
    this.flTreeNodes = [];
    this.treeRecordCount = 0;
    this.summaryTable = [
      {
        category: FunctionalLocationAssignmentComponent.SUMMARY_TABLE_GLOBAL_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: FunctionalLocationAssignmentComponent.SUMMARY_TABLE_ASSIGN_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: FunctionalLocationAssignmentComponent.SUMMARY_TABLE_COMPLIANCE_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      }
    ];
  }

  public ngOnInit(): void {
    super.ngOnInit();

    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      this.loadOnInit();
    }
  }

  private loadOnInit() {
    this.init();
    if (!!this.componentData.objectId) {
      this.bidoEquipmentDto = this.serializationService.deserialize(this.componentData.objectId);
      this.loadOperationalStatus();
      this.loadFlEquipment();
      this.setComponentContextForAsset();
    }
  }

  public loadOperationalStatus() {
    this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP).subscribe((results) => {
      this.equipmentOperationalStatusLabel = LabelValueHelper.getLabelByValue(
        results,
        this.bidoEquipmentDto.operationalStatus
      );
    });
  }

  private setComponentContextForAsset(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FAMILY_FUNCTION_MAP).subscribe((result) => {
      if (this.bidoEquipmentDto) {
        if (this.isAssetAircraft) {
          const selectedFunction = ListUtils.orEmpty(result).find(
            (elt) => elt.value === (this.bidoEquipmentDto as BidoEquipmentDTO).equipmentFunction
          );
          const aircraftLabel = selectedFunction ? selectedFunction.label : 'Aircraft';
          this.componentContext = `${aircraftLabel} ${this.bidoEquipmentDto.registration}`;
        } else {
          this.componentContext = `${this.bidoEquipmentDto.equipmentDesignation} / ${this.bidoEquipmentDto.sn}`;
        }

        this.displayComponentContext(this.componentContext, this.isCreateOpenMode);
      }
    });
  }

  private loadFlEquipment() {
    if (this.bidoEquipmentDto.equipmentCode) {
      this.functionalLocationAssignmentService
        .findBidoFlEquipmentCurrentlyAppliedByEquipmentCode(this.bidoEquipmentDto.equipmentCode)
        .subscribe((results) => {
          if (results !== null && results !== undefined) {
            this.bidoFlEquipmentDTO = results;
            if (this.bidoFlEquipmentDTO && this.bidoFlEquipmentDTO.appliedDate && !this.applicationDate) {
              this.applicationDate = this.bidoFlEquipmentDTO.appliedDate;
              this.flApplicationDate = this.bidoFlEquipmentDTO.appliedDate;
            }
          }

          const searchCriteriaInputforDropDown: FindBidoFlsBySearchCriteriaInput = {
            bidoFlDTOCriteria: {
              flFunction: this.bidoEquipmentDto.equipmentFunction
            },
            familyVariantCode: this.bidoEquipmentDto.familyVariantCode
              ? [this.bidoEquipmentDto.familyVariantCode]
              : undefined,
            modelCode: this.bidoEquipmentDto.modelCode,
            bidoEquipmentDTO: this.bidoEquipmentDto,
            applicationDate: this.applicationDate
          };
          this.loadFunctionalLocation(searchCriteriaInputforDropDown);
        });
    }
  }

  public loadFunctionalLocation(findBidoFlsBySearchCriteriaInput: FindBidoFlsBySearchCriteriaInput) {
    this.functionalLocationAssignmentService
      .findBidoFlsBySearchCriteriaFunctionalLocationAssignment(findBidoFlsBySearchCriteriaInput)
      .subscribe((results) => {
        this.functionalLocationList = results;
        results.forEach((element) => {
          this.functionalLocationMap.set(element.value, element.label);
        });
        // make dropdown read only
        if (this.bidoEquipmentDto.equEquipmentCode) {
          this.isFlToAssignReadOnly = true;
        }
        this.loadFunctionalLocationEquipmentData();
      });
  }

  public loadFunctionalLocationEquipmentData() {
    this.assetMapData = new Map<string, AssetCodeMapValue>();
    // set search criteria for fl
    this.searchCriteriaInput = {
      bidoFlDTOCriteria: {
        flCode: this.bidoFlEquipmentDTO.flCode || undefined
      },
      familyVariantCode: this.bidoEquipmentDto.familyVariantCode
        ? [this.bidoEquipmentDto.familyVariantCode]
        : undefined,
      modelCode: this.bidoEquipmentDto.modelCode,
      bidoEquipmentDTO: this.bidoEquipmentDto,
      applicationDate: this.applicationDate
    };
    this.isAssetLoading = true;
    this.functionalLocationAssignmentService.getFlStructure(this.searchCriteriaInput).subscribe((results) => {
      this.generateTreeData(results, true);
      this.isAssetLoading = false;
    });
  }

  private generateTreeData(results: FLAssignTreeNode, setContentToc: boolean) {
    this.flTreeNodes = [];
    this.treeRecordCount = 0;
    if (results && results.data) {
      this.flTreeNodes = [results].map((obj) => this.createTreeNode(obj));
    }
    this.updateSummaryTable();
    this.loadOrphanList(results);
    this.tableDataOnLoad = results;
    this.createContentTable(setContentToc);
  }

  private createTreeNode(baseElement: FLAssignTreeNode): TreeNode {
    this.treeRecordCount++;
    let node: TreeNode = {};
    if (baseElement.data) {
      const tempData = _cloneDeep(baseElement);
      // set map data on load
      if (
        tempData.data &&
        tempData.data.assetCode &&
        tempData.data.assetName &&
        tempData.data.bidoEquipmentDTO &&
        tempData.data.flCode &&
        !this.assetMapData.get(tempData.data.flCode)
      ) {
        const temp: AssetCodeMapValue = {
          assetCode: tempData.data.assetCode,
          assetName: tempData.data.assetName,
          bidoEquipmentDTO: tempData.data.bidoEquipmentDTO,
          children: tempData.children || []
        };
        this.assetMapData.set(tempData.data.flCode, temp);
      }

      node = {
        data: this.convertTableDTOToRow(baseElement, baseElement.data, baseElement.hide),
        expanded: true,
        children: ListUtils.orEmpty(baseElement.children).map((childElement) => this.createTreeNode(childElement))
      };
    }

    return node;
  }

  public loadOrphanList(baseElement: FLAssignTreeNode) {
    // set search criteria for fl
    this.unAssignEquipmentList = [];
    if (baseElement.orphanList) {
      baseElement.orphanList.forEach((element) => {
        this.unAssignEquipmentList.push(this.convertOrphanTableDTOToRow(element));
      });
    }
  }

  public refresh(): void {
    this.loadOnInit();
  }

  private convertTableDTOToRow(
    baseElement: FLAssignTreeNode,
    node: FuntionalLocationAssignmentStructureOutput,
    hide?: boolean
  ): FlEquipmentRow {
    const itemObj: FlEquipmentRow = {
      flLevel: node.levelName,
      equipment: node.assetName,
      function: node.flFunctionValue,
      nominalQuantity: node.nominalQuantity,
      requiredQuantity: node.requiredQuantity,
      dropDownList: node.dropDownList || [],
      assignmentControl: node.assignmentControl,
      complianceControl: node.alertIcon,
      assignmentControlToolTip: '',
      complianceControlToolTip: '',
      assetCode: node.assetCode,
      flCode: node.flCode,
      alertToolTip: node.alertToolTip,
      hide,
      _obj: baseElement
    };

    return itemObj;
  }

  private convertOrphanTableDTOToRow(element: FunctionalLocationAssignmentOrphanListOutput): FlOrphanEquipmentRow {
    const itemObj: FlOrphanEquipmentRow = {
      applicationDate: this.dateService.dateToString(element.applicationDate),
      equipment: element.assetName,
      function: element.flFunctionValue,
      fl: element.flName
    };

    return itemObj;
  }

  private flattenTreeData(element: TreeNode, initList: FlEquipmentRow[]) {
    if (element && element.data) {
      initList.push(element.data as FlEquipmentRow);
    }
    if (element && element.children) {
      element.children.forEach((obj) => {
        this.flattenTreeData(obj, initList);
      });
    }
  }

  public save() {
    if (!this.applicationDate) {
      this.messageService.showErrorMessage(this.getTranslateKey('missingApplicationDate'));

      return;
    } else if (this.applicationDate && this.flApplicationDate && this.applicationDate < this.flApplicationDate) {
      this.translateService.get(this.getTranslateKey('earlierApplicationDate')).subscribe((value: string) => {
        this.messageService.showErrorMessage(
          `${value} ${this.dateService.dateWitCustomFormatToString(this.flApplicationDate, 'YYYY/MM/DD')}.`
        );
      });

      return;
    }

    const initArr: FlEquipmentRow[] = [];
    this.flattenTreeData(this.flTreeNodes[0], initArr);

    let checkDuplicate = false;
    initArr.forEach((obj) => {
      const filteredRows = initArr.filter((row) => {
        return row.assetCode && row.assetCode === obj.assetCode;
      });

      if (filteredRows.length > 1) {
        checkDuplicate = true;

        return;
      }
    });

    if (checkDuplicate) {
      this.messageService.showErrorMessage(this.getTranslateKey('duplicateAssignment'));

      return;
    }
    this.updatedFlList = [];
    const saveBidoFlEquipmentStructureInput: SaveBidoFlEquipmentStructureInput = {
      topEquipmentCode: this.bidoEquipmentDto.equipmentCode,
      bidoFlEquipmentDataList: this.updatedFlList,
      applicationDate: this.applicationDate || new Date().toISOString()
    };

    // Assign applied equipments
    initArr.forEach((obj) => {
      if (!!obj.assetCode) {
        const flDto: BidoFlEquipmentDTO = {
          appliedDate: this.applicationDate || new Date().toISOString(),
          equipmentCode: obj.assetCode,
          flCode: obj.flCode
        };
        this.updatedFlList.push(flDto);
      }
    });

    this.showSaveSpinner = true;
    this.functionalLocationAssignmentService
      .updateBidoFlEquipmentStructure(saveBidoFlEquipmentStructureInput)
      .subscribe(
        (results) => {
          this.loadFlEquipment();
          this.isSaved = true;
          this.messageService.showSuccessMessage(this.getTranslateKey('onSaveSuccess'));
          this.showSaveSpinner = false;
        },
        (error) => {
          this.showSaveSpinner = false;
        }
      );
  }

  public get isAssetAircraft(): boolean {
    return (
      !!this.bidoEquipmentDto &&
      !!this.bidoEquipmentDto.equipmentFunction &&
      this.bidoEquipmentDto.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY
    );
  }

  public get isAssetEngine(): boolean {
    return (
      !!this.bidoEquipmentDto &&
      !!this.bidoEquipmentDto.equipmentFunction &&
      this.bidoEquipmentDto.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY
    );
  }

  public get isAssetEquipment(): boolean {
    return !!this.bidoEquipmentDto && !this.isAssetAircraft && !this.isAssetEngine;
  }

  private updateSummaryTableRow(): void {
    const initArr: FlEquipmentRow[] = [];
    this.flattenTreeData(this.flTreeNodes[0], initArr);

    if (this.summaryTable) {
      this.summaryTable.slice(1).forEach((obj, index) => {
        // Fill with new values
        if (index === 0) {
          obj.nok = initArr.filter((row) => row.assignmentControl === ControlConfigConstants.ICON_RED).length;
          obj.ok = initArr.filter((row) => row.assignmentControl === ControlConfigConstants.ICON_GREEN).length;
          obj.warning = initArr.filter((row) => row.assignmentControl === ControlConfigConstants.ICON_YELLOW).length;
        }
        if (index === 1) {
          obj.nok = initArr.filter((row) => row.complianceControl === ControlConfigConstants.ICON_RED).length;
          obj.ok = initArr.filter((row) => row.complianceControl === ControlConfigConstants.ICON_GREEN).length;
          obj.warning = initArr.filter((row) => row.complianceControl === ControlConfigConstants.ICON_YELLOW).length;
        }
      });
    }
  }

  private updateSummaryTable(): void {
    if (this.summaryTable) {
      this.updateSummaryTableRow();
      this.updateSummaryTableGlobal();

      this.summaryTable = _cloneDeep(this.summaryTable);
    }
  }

  private updateSummaryTableGlobal(): void {
    const index = 0;

    this.summaryTable[index].nok = this.summaryTable
      .slice(1)
      .map((row) => row.nok)
      .reduce((a, b) => a + b, 0);

    this.summaryTable[index].ok = this.summaryTable
      .slice(1)
      .map((row) => row.ok)
      .reduce((a, b) => a + b, 0);

    this.summaryTable[index].warning = this.summaryTable
      .slice(1)
      .map((row) => row.warning)
      .reduce((a, b) => a + b, 0);
  }

  public checkDataValidity(row: FlEquipmentRow) {
    if (row) {
      const rowData = row._obj;
      if (!row.assetCode) {
        this.clearChildAssetRecursively(rowData);
      } else if (rowData.data && rowData.data.flCode) {
        const mapValue = this.assetMapData.get(rowData.data.flCode);
        // set asset code of parent
        rowData.data.assetCode = row.assetCode;
        rowData.data.assetName = this.getAssetName(rowData, rowData.data.assetCode);
        // set equipment dto
        if (rowData.data.assetCode && this.tableDataOnLoad.bidoEquipmentMap) {
          rowData.data.bidoEquipmentDTO = this.tableDataOnLoad.bidoEquipmentMap[rowData.data.assetCode];
        }

        if (mapValue && row.assetCode === mapValue.assetCode) {
          this.setChildAssetRecursively(rowData);
        } else {
          if (rowData.children && rowData.children.length > 0) {
            rowData.children.forEach((obj) => {
              this.clearChildAssetRecursively(obj);
            });
          }
        }
      }
      this.tableDataOnLoad = _cloneDeep(this.tableDataOnLoad);
      this.functionalLocationAssignmentService.getFlDropDownChange(this.tableDataOnLoad).subscribe((result) => {
        this.tableDataOnLoad = result;
        this.filterWithCriteria();
      });
    }
  }

  public clearChildAssetRecursively(rowData: FLAssignTreeNode) {
    if (rowData.data) {
      const rowAsset = rowData.data;
      rowAsset.assetName = undefined;
      rowAsset.assetCode = undefined;
      rowAsset.bidoEquipmentDTO = undefined;
      if (rowData.children && rowData.children.length > 0) {
        rowData.children.forEach((obj) => {
          this.clearChildAssetRecursively(obj);
        });
      }
    }
  }

  public setChildAssetRecursively(rowData: FLAssignTreeNode) {
    if (rowData.data && rowData.data.flCode) {
      const mapValue = this.assetMapData.get(rowData.data.flCode);
      // set all children
      rowData.children = mapValue ? mapValue.children || [] : [];
      // if asset code is passed, set it other wise set asset from map
      let assetCode;
      if (rowData.data && rowData.data.assetCode) {
        assetCode = rowData.data.assetCode;
      } else if (mapValue) {
        assetCode = mapValue.assetCode;
      }

      rowData.data.assetCode = assetCode;
      rowData.data.assetName = this.getAssetName(rowData, assetCode);
      // set equipment dto
      if (
        mapValue &&
        mapValue.bidoEquipmentDTO &&
        this.tableDataOnLoad.bidoEquipmentMap &&
        mapValue.bidoEquipmentDTO &&
        mapValue.bidoEquipmentDTO.equipmentCode &&
        rowData.data.assetCode
      ) {
        rowData.data.bidoEquipmentDTO = this.tableDataOnLoad.bidoEquipmentMap[rowData.data.assetCode];
      }

      if (rowData.children && rowData.children.length > 0) {
        rowData.children.forEach((obj) => {
          this.setChildAssetRecursively(obj);
        });
      }
    }
  }

  private getAssetName(rowData: FLAssignTreeNode, assetCode: string) {
    let assetName;
    if (rowData.data && rowData.data.dropDownList && assetCode) {
      const assetObj = rowData.data.dropDownList.filter((obj) => {
        return obj.value === assetCode;
      })[0];

      assetName = assetObj && assetObj.label;
    }

    return assetName;
  }

  private createContentTable(setContentToc: boolean): void {
    this.toc = [];
    if (this.isAssetAircraft) {
      this.toc.push({
        id: 'aircraftAnchor',
        anchor: this.aircraftAnchor,
        label: 'Aircraft'
      });
    } else if (this.isAssetEngine) {
      this.toc.push({
        id: 'aircraftAnchor',
        anchor: this.aircraftAnchor,
        label: 'Engine'
      });
    } else if (this.isAssetEquipment) {
      this.toc.push({
        id: 'aircraftAnchor',
        anchor: this.aircraftAnchor,
        label: 'Equipment'
      });
    }

    this.toc.push({
      id: 'upcomingEventsSummaryAnchor',
      anchor: this.upcomingEventsSummaryAnchor,
      label: 'Control Summary'
    });

    this.toc.push({
      id: 'assignmentDetailsAnchor',
      anchor: this.assignmentDetailsAnchor,
      label: 'Assignment Details'
    });

    if (this.unAssignEquipmentList.length > 0) {
      this.toc.push({
        id: 'unAssignmentDetailsAnchor',
        anchor: this.unAssignmentDetailsAnchor,
        label: 'Unassignment Details'
      });
    }
    if (setContentToc) {
      this.setSelectedAnchor('aircraftAnchor');
    }
  }

  public isSelectedAnchor(anchorId: string): boolean {
    return anchorId === this.selectedAnchor;
  }

  public setSelectedAnchor(anchorId: string): void {
    this.pageTocService.setAnchorSelected(anchorId);

    this.selectedAnchor = anchorId;
  }

  private setSearchControlList(): void {
    const alertNokKey = this.getTranslateKey('alertNok', 'global');
    const alertOkKey = this.getTranslateKey('alertOk', 'global');
    const alertWarningKey = this.getTranslateKey('alertWarning', 'global');
    this.translateService.get([alertNokKey, alertOkKey, alertWarningKey]).subscribe((results) => {
      const alertNokLabel = results ? results[alertNokKey] : 'NOK';
      const alertOkLabel = results ? results[alertOkKey] : 'OK';
      const alertWarningLabel = results ? results[alertWarningKey] : 'WARNING';

      this.searchControlList = [
        {
          label: alertOkLabel,
          value: ControlConfigConstants.ICON_GREEN
        },
        {
          label: alertWarningLabel,
          value: ControlConfigConstants.ICON_YELLOW
        },
        {
          label: alertNokLabel,
          value: ControlConfigConstants.ICON_RED
        }
      ];
    });
  }

  private setDefaultSearchControlList(): void {
    this.controlList = [
      ControlConfigConstants.ICON_GREEN,
      ControlConfigConstants.ICON_YELLOW,
      ControlConfigConstants.ICON_RED
    ];
  }

  public resetTableFilters(): void {
    this.searchGlobalFilter = '';
    this.setDefaultSearchControlList();
    if (this.tableDataOnLoad) {
      this.generateTreeData(this.tableDataOnLoad, false);
    }
  }

  public filterWithCriteria(): void {
    this.searchGlobalFilter = '';
    if (this.controlList.length === 0) {
      this.generateTreeData(this.tableDataOnLoad, false);
    } else {
      this.searchItemStructureGlobalFilterChanged.next(this.controlList);
    }
  }

  public filterTextWithCriteria(): void {
    this.searchItemStructureGlobalFilterChanged.next(this.controlList);
  }

  private setControlGlobalFilter(): void {
    this.resetTableFilters();
    this.searchItemStructureGlobalFilterChanged = new Subject<ControlConfigConstants[]>();
    this.searchItemStructureGlobalFilterChanged
      .pipe(debounceTime(FunctionalLocationAssignmentComponent.SEARCH_TEXT_DEBOUNCE_TIME), takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.updateTreeDisplayed();
      });
  }

  private updateTreeDisplayed(): void {
    const tableData = _cloneDeep([this.tableDataOnLoad]);
    tableData.forEach((elt) => {
      elt.hide = !this.treeNodeMatchFilters(elt, this.controlList);
    });
    if (tableData && tableData.length > 0) {
      this.generateTreeData(tableData[0], false);
    }
  }

  private treeNodeMatchFilters(node: FLAssignTreeNode, searchList: ControlConfigConstants[]): boolean {
    if (!ListUtils.isNullOrEmpty(node.children)) {
      (node.children as FLAssignTreeNode[]).forEach((child) => {
        child.hide = !this.treeNodeMatchFilters(child, searchList);
      });
    }

    const nodeData = node.data as FuntionalLocationAssignmentStructureOutput;

    const asignmentMatch = searchList.indexOf(nodeData.assignmentControl as ControlConfigConstants) > -1;
    const complianceMatch = searchList.indexOf(nodeData.alertIcon as ControlConfigConstants) > -1;

    const flLevel = nodeData.levelName ? nodeData.levelName.toLowerCase() : '';
    const flLevelMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && flLevel.includes(this.searchGlobalFilter.toLowerCase());

    const function1 = nodeData.flFunctionValue ? nodeData.flFunctionValue.toLowerCase() : '';
    const functionMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && function1.includes(this.searchGlobalFilter.toLowerCase());

    const requiredQuantity = nodeData.requiredQuantity ? nodeData.requiredQuantity.toString() : '';
    const flLevelrequiredQuantity =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && requiredQuantity.includes(this.searchGlobalFilter);

    const nominalQuantity = nodeData.nominalQuantity ? nodeData.nominalQuantity.toString() : '';
    const nominalQuantityMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && nominalQuantity.includes(this.searchGlobalFilter);

    const equipment = nodeData.assetName ? nodeData.assetName.toLowerCase() : '';
    const equipmentMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && equipment.includes(this.searchGlobalFilter.toLowerCase());

    const children = node.children as FLAssignTreeNode[];
    let filteredChildren: FLAssignTreeNode[] = [];
    filteredChildren = children.filter((child) => {
      return !child.hide;
    });

    if (StringUtils.isNullOrEmpty(this.searchGlobalFilter)) {
      return filteredChildren.length > 0 || asignmentMatch || complianceMatch;
    } else {
      return (
        filteredChildren.length > 0 ||
        flLevelMatch ||
        functionMatch ||
        flLevelrequiredQuantity ||
        nominalQuantityMatch ||
        equipmentMatch
      );
    }
  }
}
