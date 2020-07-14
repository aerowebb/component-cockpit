import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { SelectItem, TreeNode } from 'primeng/api';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, takeUntil } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidmAttributeConstants } from '../../../../shared/constants/bidm-attribute-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { DialogRecordReportInput } from '../../../../shared/types/api-input-types/fleet-management/dialog-record-report-input.interface';
import { RecordReportOutput } from '../../../../shared/types/api-output-types/fleet-management/record-report-output.interface';
import { WorkOrderStructureOutput } from '../../../../shared/types/api-output-types/work-order-structure-output.interface';
import { BidmProjectAttributeDTO } from '../../../../shared/types/api-types/bidm-project-attribute-dto.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { ReportMessage } from '../../../../shared/types/api-types/report-message.interface';
import { WoLogbookUpdateDTO } from '../../../../shared/types/api-types/wo-logbook-update-dto.interface';
import { WoLogbookUpdateLineDTO } from '../../../../shared/types/api-types/wo-logbook-update-line-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { UpdateLogbookFormService } from './update-logbook-form.service';

interface SummaryRow {
  logbookUpdate: string;
  ok?: number;
  nok?: number;
}

@Component({
  selector: 'aw-update-logbook-form',
  styleUrls: ['./update-logbook-form.component.scss'],
  templateUrl: './update-logbook-form.component.html'
})
export class UpdateLogbookFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly ELEMENT_OK: string = 'OK';
  public readonly ELEMENT_NOK: string = 'NOK';

  public readonly TYPE_KEY_TASK: string = 'TA';
  public readonly TYPE_KEY_EVOLUTION: string = 'EA';
  public readonly TYPE_KEY_ASSEMBLY: string = 'AS';
  public readonly TYPE_KEY_DISASSEMBLY: string = 'DI';

  public workPackage: BidmProjectDTO;
  public workOrderList: WoLogbookUpdateDTO[];
  public selectedWorkOrder: WoLogbookUpdateDTO | undefined;
  public workOrderListCols: TableColumn[];

  public tableData: WoLogbookUpdateLineDTO[];
  public selectedTableData: WoLogbookUpdateLineDTO[];
  public tableDataCols: TableColumn[];

  public summaryData: SummaryRow[];
  public summaryDataCols: TableColumn[];

  private projectId: string;
  private assetCode: string;
  public bidoEquipmentDTO: BidoEquipmentDTO;

  public wpStatusList: SelectItem[];
  public woStatusList: SelectItem[];

  public isLoadingWorkOrderTable: boolean = false;
  public isSummaryTableLoading: boolean = false;
  public warningCount: number;
  public searchControlList: SelectItem[];
  public showValidationModal: boolean;
  public subtitleAsset: string;
  public selectedControlList: string[];
  public searchWorkOrderStructureGlobalFilter: string;
  public searchWorkOrderStructureGlobalFilterChanged: Subject<string>;
  public workOrderStructureSrc: TreeNode[];
  public workOrderStructure: TreeNode[];
  public workOrderFiltersVisible: boolean;
  public workOrderStructureSelection: TreeNode | undefined;
  public selectedWorkOrderStructure: WorkOrderStructureOutput | undefined;
  public mroCenterList: SelectItem[];
  public userList: SelectItem[];
  public typeList: SelectItem[];
  public recordDate: Date = new Date();
  public isEventCreatedLoading: boolean = false;
  public taskAppliedLabel: string;
  public evolutionAppliedLabel: string;
  public dialogRecordReportInput: DialogRecordReportInput;
  public showRecordReport: boolean;
  public recordEvent: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly updateLogbookFormService: UpdateLogbookFormService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.workOrderStructure = [];
    this.workOrderStructureSrc = [];
    this.workOrderFiltersVisible = false;
    this.workOrderStructureSelection = undefined;
    this.selectedWorkOrderStructure = undefined;
    this.searchWorkOrderStructureGlobalFilter = '';
    this.setSearchControlList();
    this.setWorkOrderStructureGlobalFilter();
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_UPDATE_LOGBOOK_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    if (this.componentData.objectId) {
      const objectId = this.serializationService.deserialize(this.componentData.objectId);
      this.projectId = objectId.wpId;
      this.assetCode = objectId.assetCode;
    }

    this.initData();
    this.initTables();
    this.updateLogbookFormService.loadMROCenterList().subscribe((result) => {
      this.mroCenterList = result;
      this.updateLogbookFormService.loadUserList().subscribe((res) => {
        this.userList = res;
        this.updateLogbookFormService.loadGenProps(GenericPropertyConstants.WORK_PACKAGE_TYPE_MAP).subscribe((r) => {
          this.typeList = r;
          this.init();
          this.setDefaultSearchControlList();
        });
      });
    });
  }

  // init screen
  private init(): void {
    this.getWpStatusList();
    this.getWoStatusList();
    this.getWorkPackage();
  }

  // init data
  private initData(): void {
    this.workPackage = {};
    this.workOrderList = [];
    this.selectedWorkOrder = undefined;

    this.tableData = [];
    this.selectedTableData = [];
    this.tableDataCols = [];

    this.summaryData = [];
    this.summaryDataCols = [];

    this.wpStatusList = [];
    this.woStatusList = [];

    this.bidoEquipmentDTO = {};
    this.dialogRecordReportInput = { messages: [] };
    this.showRecordReport = false;
    this.recordEvent = false;

    this.showValidationModal = false;

    const taskAppliedKey = this.getTranslateKey('taskApplied');
    const evolutionAppliedKey = this.getTranslateKey('evolutionApplied');

    this.translateService.get([taskAppliedKey, evolutionAppliedKey]).subscribe((results) => {
      this.taskAppliedLabel = !!results ? results[taskAppliedKey] : 'Task Applied';
      this.evolutionAppliedLabel = !!results ? results[evolutionAppliedKey] : 'Evolution Applied';
    });
  }

  // init tables
  private initTables(): void {
    this.tableDataCols = [
      { field: 'control', width: '5rem', alignment: 'center' },
      { field: 'typeLabel', alignment: 'left', width: '8rem' },
      { field: 'id', alignment: 'left', width: '8rem' },
      { field: 'description', alignment: 'left', width: '18rem' },
      { field: 'eventKey', alignment: 'left', width: '8rem' },
      { field: 'eventDate', alignment: 'left' }
    ];

    this.summaryDataCols = [
      { field: 'logbookUpdate', alignment: 'left' },
      { field: 'ok', alignment: 'center' },
      { field: 'nok', alignment: 'center' }
    ];

    this.workOrderListCols = [
      { field: 'woControl', width: '5rem', alignment: 'center' },
      { field: 'woCode', alignment: 'left' }
    ];
  }

  // get data from server
  private getWpStatusList(): void {
    this.updateLogbookFormService.loadWorkPackageStatusList().subscribe((res) => (this.wpStatusList = res));
  }

  // get data from server
  private getWoStatusList(): void {
    this.updateLogbookFormService.loadWorkOrderStatusList().subscribe((res) => (this.woStatusList = res));
  }

  // get data from server
  private getWorkPackage() {
    this.updateLogbookFormService.findBidmProjectWithAttributesId(this.projectId).subscribe((result) => {
      if (result === null) {
        this.messageService.showErrorMessage(this.getTranslateKey('notFound'));
      } else {
        this.displayComponentContext(NumberUtils.toString(result.projectNumber), false);
        this.workPackage = result;
        this.workPackage.bireRepairCenterCode = SelectItemUtils.formatSelectItem(
          result.bireRepairCenterCode,
          this.mroCenterList
        );
        this.workPackage.receivingAssignedTo = SelectItemUtils.formatSelectItem(
          result.receivingAssignedTo,
          this.userList
        );
        this.loadAsset();
        this.getWorkOrders();
      }
    });
  }

  // confirm logbook
  public onClickConfirm(): void {
    const bidmProjectAttributeDTO: BidmProjectAttributeDTO = {
      projectId: this.workPackage.projectId,
      attributeValue: 'true',
      attributeName: BidmAttributeConstants.IS_MAINTENANCE_PLAN_UPDATED
    };
    this.updateLogbookFormService
      .createBidmProjectAttribute(bidmProjectAttributeDTO)
      .subscribe((data: BidmProjectAttributeDTO) => {
        if (!!data) {
          this.workPackage.maintenancePlanUpdatedAttributeId = data.id;
        }
      });
  }

  // revert logbook
  public onClickRevert(): void {
    if (!this.workPackage.maintenancePlanUpdatedAttributeId) {
      return;
    }
    this.updateLogbookFormService
      .removeBidmProjectAttribute(this.workPackage.maintenancePlanUpdatedAttributeId)
      .subscribe(() => {
        this.workPackage.maintenancePlanUpdatedAttributeId = undefined;
      });
  }

  public selectWorkOrderStructureNode(): void {
    if (this.workOrderStructureSelection) {
      this.selectedTableData = [];
      this.tableData = [];
      this.selectedWorkOrder = this.workOrderStructureSelection.data as WorkOrderStructureOutput;
      this.tableData = [...this.selectedWorkOrder.woLogbookUpdateLineDTOs];
    }
  }

  private loadWorkOrderStructure(): void {
    this.isLoadingWorkOrderTable = true;
    this.updateLogbookFormService.getWorkOrdersForLogbookUpdate(this.projectId).subscribe((result) => {
      if (result) {
        this.getTreeStructure(result);
        this.workOrderStructure = _cloneDeep(this.workOrderStructureSrc);
        this.showFirstWorkOrderStructureNode();
        this.loadSummary();
        this.isLoadingWorkOrderTable = false;
      }
    });
  }

  private getTreeStructure(data: WorkOrderStructureOutput[]): void {
    data.forEach((element) => {
      this.workOrderStructureSrc.push(this.createWorkOrderStructureTreeNode(element));
    });
  }

  private createWorkOrderStructureTreeNode(data: WorkOrderStructureOutput): TreeNode {
    const output: TreeNode = {};
    output.data = {
      woCode: data.woCode,
      control: data.control,
      description: data.description,
      woId: data.woId,
      status: data.status,
      closedDate: data.closedDate,
      closedBy: data.closedBy,
      woLogbookUpdateLineDTOs: data.woLogbookUpdateLineDTOs
    };
    output.children = [];
    if (!!data.children && data.children.length > 0) {
      data.children.forEach((asset) => {
        if (!!asset && !!output.children) {
          output.children.push(this.createWorkOrderStructureTreeNode(asset));
        }
      });
    }

    return output;
  }

  private showFirstWorkOrderStructureNode(): void {
    if (!ListUtils.isEmpty(this.workOrderStructure)) {
      this.workOrderStructure[0].expanded = true;
      this.workOrderStructureSelection = this.workOrderStructure[0];
      this.selectedWorkOrder = this.workOrderStructureSelection.data as WorkOrderStructureOutput;
      this.tableData = this.selectedWorkOrder.woLogbookUpdateLineDTOs;
    }
  }

  // get data from server
  private getWorkOrders() {
    this.loadWorkOrderStructure();
  }

  private setWorkOrderStructureGlobalFilter(): void {
    this.searchWorkOrderStructureGlobalFilterChanged = new Subject<string>();
    this.searchWorkOrderStructureGlobalFilterChanged
      .pipe(
        // tslint:disable-next-line: no-magic-numbers
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe)
      )
      .subscribe((searchTextValue) => {
        this.filterWorkOrderStructure(searchTextValue);
      });
  }

  public filterWorkOrderStructureWithGlobalFilter(searchTextValue: string): void {
    this.searchWorkOrderStructureGlobalFilterChanged.next(searchTextValue);
  }

  // load data on screen
  private loadSummary(): void {
    let taskOk = 0;
    let taskNok = 0;
    this.warningCount = 0;
    this.workOrderStructure.forEach((wo: TreeNode) => {
      if (!!wo) {
        if (!!wo.data && Object.keys(wo.data).length > 0) {
          if (wo.data.control === 'NOK') {
            this.warningCount = this.warningCount + 1;
          }
          const logbookData: WoLogbookUpdateLineDTO[] = wo.data.woLogbookUpdateLineDTOs;
          if (logbookData) {
            logbookData.forEach((subWo: WoLogbookUpdateLineDTO) => {
              if (subWo.typeKey === this.TYPE_KEY_TASK) {
                subWo.typeLabel = this.taskAppliedLabel;
                if (subWo.control === this.ELEMENT_OK) {
                  taskOk++;
                } else {
                  taskNok++;
                }
              }
            });
          }

          const childrens = wo.children;
          if (!!childrens && childrens.length > 0) {
            childrens.forEach((child) => {
              const bookData: WoLogbookUpdateLineDTO[] = child.data.woLogbookUpdateLineDTOs;
              if (bookData) {
                bookData.forEach((subWo: WoLogbookUpdateLineDTO) => {
                  if (subWo.typeKey === this.TYPE_KEY_TASK) {
                    subWo.typeLabel = this.taskAppliedLabel;
                    if (subWo.control === this.ELEMENT_OK) {
                      taskOk++;
                    } else {
                      taskNok++;
                    }
                  }
                });
              }
            });
          }
        }
      }
    });

    let evoOk = 0;
    let evoNok = 0;
    this.workOrderStructure.forEach((wo: TreeNode) => {
      if (!!wo && !!wo.data && Object.keys(wo.data).length > 0) {
        if (wo.data.control === 'NOK') {
          this.warningCount = this.warningCount + 1;
        }
        const logbookData: WoLogbookUpdateLineDTO[] = wo.data.woLogbookUpdateLineDTOs;
        if (logbookData) {
          logbookData.forEach((subWo: WoLogbookUpdateLineDTO) => {
            if (subWo.typeKey === this.TYPE_KEY_EVOLUTION) {
              subWo.typeLabel = this.evolutionAppliedLabel;
              if (subWo.control === this.ELEMENT_OK) {
                evoOk++;
              } else {
                evoNok++;
              }
            }
          });
        }

        const childrens = wo.children as TreeNode[];
        if (!!childrens && childrens.length > 0) {
          childrens.forEach((child) => {
            const bookData: WoLogbookUpdateLineDTO[] = child.data.woLogbookUpdateLineDTOs;
            if (bookData) {
              bookData.forEach((subWo: WoLogbookUpdateLineDTO) => {
                if (subWo.typeKey === this.TYPE_KEY_EVOLUTION) {
                  subWo.typeLabel = this.evolutionAppliedLabel;
                  if (subWo.control === this.ELEMENT_OK) {
                    evoOk++;
                  } else {
                    evoNok++;
                  }
                }
              });
            }
          });
        }
      }
    });

    let asOk = 0;
    let asNok = 0;
    this.workOrderStructure.forEach((wo: TreeNode) => {
      if (!!wo.data && Object.keys(wo.data).length > 0) {
        if (wo.data.control === 'NOK') {
          this.warningCount = this.warningCount + 1;
        }
        const logbookData: WoLogbookUpdateLineDTO[] = wo.data.woLogbookUpdateLineDTOs;
        if (logbookData) {
          logbookData.forEach((subWo: WoLogbookUpdateLineDTO) => {
            if (subWo.typeKey === this.TYPE_KEY_ASSEMBLY) {
              subWo.typeLabel = 'Assembly';
              if (subWo.control === this.ELEMENT_OK) {
                asOk++;
              } else {
                asNok++;
              }
            }
          });
        }

        const childrens = wo.children;
        if (!!childrens && childrens.length > 0) {
          childrens.forEach((child) => {
            const bookData: WoLogbookUpdateLineDTO[] = child.data.woLogbookUpdateLineDTOs;
            if (bookData) {
              bookData.forEach((subWo: WoLogbookUpdateLineDTO) => {
                if (subWo.typeKey === this.TYPE_KEY_ASSEMBLY) {
                  subWo.typeLabel = 'Assembly';
                  if (subWo.control === this.ELEMENT_OK) {
                    asOk++;
                  } else {
                    asNok++;
                  }
                }
              });
            }
          });
        }
      }
    });

    let diOk = 0;
    let diNok = 0;
    this.workOrderStructure.forEach((wo: TreeNode) => {
      if (!!wo.data && Object.keys(wo.data).length > 0) {
        if (wo.data.control === 'NOK') {
          this.warningCount = this.warningCount + 1;
        }
        const logbookData: WoLogbookUpdateLineDTO[] = wo.data.woLogbookUpdateLineDTOs;
        if (logbookData) {
          logbookData.forEach((subWo: WoLogbookUpdateLineDTO) => {
            if (subWo.typeKey === this.TYPE_KEY_DISASSEMBLY) {
              subWo.typeLabel = 'Disassembly';
              if (subWo.control === this.ELEMENT_OK) {
                diOk++;
              } else {
                diNok++;
              }
            }
          });
        }

        const childrens = wo.children as TreeNode[];
        if (!!childrens && childrens.length > 0) {
          childrens.forEach((child) => {
            const bookData: WoLogbookUpdateLineDTO[] = child.data.woLogbookUpdateLineDTOs;
            if (bookData) {
              bookData.forEach((subWo: WoLogbookUpdateLineDTO) => {
                if (subWo.typeKey === this.TYPE_KEY_DISASSEMBLY) {
                  subWo.typeLabel = 'Disassembly';
                  if (subWo.control === this.ELEMENT_OK) {
                    diOk++;
                  } else {
                    diNok++;
                  }
                }
              });
            }
          });
        }
      }
    });

    this.warningCount = this.warningCount + taskNok + evoNok;

    this.summaryData = [
      { logbookUpdate: this.taskAppliedLabel, ok: taskOk, nok: taskNok },
      { logbookUpdate: this.evolutionAppliedLabel, ok: evoOk, nok: evoNok }
    ];
  }

  // load data on screen
  private loadWorkOrder(wo: WoLogbookUpdateDTO): void {
    this.tableData = wo.woLogbookUpdateLineDTOs;
  }

  // process event
  public onClickRefresh(): void {
    this.workOrderStructureSrc = [];
    this.workOrderStructure = [];
    this.getWorkPackage();
  }

  // process event
  public onSelectWorkOrder(): void {
    if (!!this.selectedWorkOrder) {
      this.loadWorkOrder(this.selectedWorkOrder);
    }
  }

  // process event
  public onClickRecordEvent(): void {
    if (!this.selectedTableData) {
      return;
    }

    if (!!this.selectedWorkOrder) {
      if (!this.recordDate) {
        this.messageService.showErrorMessage(this.getTranslateKey('recordDateEmpty'));
      } else {
        const proj: BidmWorkOrderDTO = {
          projectId: this.projectId,
          woId: (this.selectedWorkOrder.woId as number).toString(),
          woScheduledEndDate: this.recordDate
        };
        this.isEventCreatedLoading = true;
        this.updateLogbookFormService.updateMaintenancePlanFromWorkOrder(proj).subscribe(
          (data: ReportMessage[]) => {
            this.isEventCreatedLoading = false;
            this.dialogRecordReportInput.workPackageNumber = this.workPackage.projectNumber;
            const recordReportOutput: RecordReportOutput = {
              listMessages: data
            };
            const recordReportOutputList: RecordReportOutput[] = [];
            recordReportOutputList.push(recordReportOutput);
            this.dialogRecordReportInput.messages = recordReportOutputList;

            this.recordEvent = true;
            this.selectedTableData = [];
            this.onClickRefresh();
          },
          (err) => {
            this.isEventCreatedLoading = false;
          }
        );
      }
    }
  }

  // process event
  public onClickEventKey(woLine: WoLogbookUpdateLineDTO): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_EVENT_CREATE,
      openMode: ComponentOpenMode.Read
    };
    const dto: BidoNotificationDTO = {
      notificationCode: woLine.eventKey,
      bidoNotificationTypeDTO: {}
    };
    if (!!dto) {
      data.objectId = this.serializationService.serialize(dto);
    }
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public filterWorkOrderStructureWithCriteria(): void {
    this.filterWorkOrderStructure();
  }

  public resetWorkOrderStructureCriteria(): void {
    this.setDefaultSearchControlList();
  }

  // process enable
  public enableSelect(rowData: WoLogbookUpdateLineDTO): boolean {
    return rowData.control === this.ELEMENT_NOK;
  }

  // modal return
  public validationFinished(): void {
    this.showValidationModal = false;
    // TODO
  }

  public openLogbookAsset() {
    if (!!this.bidoEquipmentDTO && !!this.bidoEquipmentDTO.equipmentFunction) {
      this.openAssetUC(this.workPackage.assetCode, ComponentOpenMode.Read, this.bidoEquipmentDTO.equipmentFunction);
    }
  }

  public openAssetUC(objectId: string | undefined, openMode: ComponentOpenMode, functionNm: string): void {
    let labelNm;
    let componentName;
    if (!functionNm || functionNm === AWPropertiesConstants.FAMILY_FUNCTION_MAJOR_EQUIPMENT_KEY) {
      labelNm = 'transaction.EquipmentFormComponent';
      componentName = 'EquipmentFormComponent';
    } else {
      if (functionNm === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY) {
        labelNm = 'transaction.EngineFormComponent';
        componentName = 'EngineFormComponent';
      } else if (functionNm === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY) {
        labelNm = 'transaction.AircraftFormComponent';
        componentName = 'AircraftFormComponent';
      }
    }

    const labelKey: string = labelNm;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: componentName as string,
      openMode
    };
    if (!!objectId) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: objectId
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private loadAsset(): void {
    const input: BidoEquipmentDTOId = {
      equipmentCode: this.assetCode
    };
    this.updateLogbookFormService.findBidoEquipment(input).subscribe((result) => {
      this.bidoEquipmentDTO = result;
      if (
        this.bidoEquipmentDTO.equipmentFunction !== AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY &&
        this.bidoEquipmentDTO.equipmentFunction !== AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY
      ) {
        this.subtitleAsset = '';
        if (!!this.bidoEquipmentDTO.pnCode && !!this.bidoEquipmentDTO.sn) {
          this.subtitleAsset = `${this.bidoEquipmentDTO.pnCode} / ${this.bidoEquipmentDTO.sn}`;
        }

        if (!!this.bidoEquipmentDTO.pnCode && !this.bidoEquipmentDTO.sn) {
          this.subtitleAsset = `${this.bidoEquipmentDTO.pnCode}`;
        }

        if (!this.bidoEquipmentDTO.pnCode && !!this.bidoEquipmentDTO.sn) {
          this.subtitleAsset = `${this.bidoEquipmentDTO.sn}`;
        }

        if (!!this.bidoEquipmentDTO.equipmentDesignation) {
          this.subtitleAsset = `${this.subtitleAsset} (${this.bidoEquipmentDTO.equipmentDesignation})`;
        }
      } else if (this.bidoEquipmentDTO.equipmentFunction === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY) {
        if (!!this.workPackage.aircraftMsn) {
          this.subtitleAsset = `${this.workPackage.aircraftMsn}`;
        }
      } else if (this.bidoEquipmentDTO.equipmentFunction === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY) {
        if (!!this.bidoEquipmentDTO.sn) {
          this.subtitleAsset = `${this.bidoEquipmentDTO.sn}`;
        }
        if (!!this.bidoEquipmentDTO.equipmentDesignation) {
          this.subtitleAsset = `${this.subtitleAsset} (${this.bidoEquipmentDTO.equipmentDesignation})`;
        }
      }
    });
  }

  private matchAssetStructureNode(node: TreeNode, searchText: string | undefined): boolean {
    if (!ListUtils.isNullOrEmpty(node.children)) {
      node.children = (node.children as TreeNode[]).filter((child) => this.matchAssetStructureNode(child, searchText));
    }

    const nodeData = node.data as WorkOrderStructureOutput;

    // Asset
    const asset = StringUtils.orEmpty(nodeData.woCode).toLowerCase();
    const assetMatch = StringUtils.isNullOrEmpty(searchText) || asset.includes(searchText as string);

    // Control
    let controlMatch = true;
    if (!ListUtils.isNullOrEmpty(this.selectedControlList)) {
      const nodeControl = nodeData.control === 'OK' ? '9' : nodeData.control === 'NOK' ? '10' : '11';
      controlMatch = ObjectUtils.isDefined(nodeControl) && this.selectedControlList.includes(nodeControl as string);
    }

    // Description
    const name = StringUtils.orEmpty(nodeData.description).toLowerCase();
    const nameMatch = StringUtils.isNullOrEmpty(searchText) || name.includes(searchText as string);

    return ListUtils.orEmpty(node.children).length > 0 || ((assetMatch || nameMatch) && controlMatch);
  }

  private setSearchControlList(): void {
    const alertNokKey = this.getTranslateKey('filterNok');
    const alertOkKey = this.getTranslateKey('filterOk');
    this.translateService.get([alertNokKey, alertOkKey]).subscribe((results) => {
      const alertNokLabel = results ? results[alertNokKey] : 'NOK';
      const alertOkLabel = results ? results[alertOkKey] : 'OK';

      this.searchControlList = [
        {
          label: alertOkLabel,
          value: ControlConfigConstants.ICON_GREEN
        },
        {
          label: alertNokLabel,
          value: ControlConfigConstants.ICON_RED
        }
      ];
    });
  }

  private setDefaultSearchControlList(): void {
    this.selectedControlList = [
      ControlConfigConstants.ICON_GREEN,
      ControlConfigConstants.ICON_YELLOW,
      ControlConfigConstants.ICON_RED
    ];
  }

  private filterWorkOrderStructure(searchTextValue?: string): void {
    this.workOrderStructureSelection = undefined;

    this.workOrderStructure = _cloneDeep(this.workOrderStructureSrc);
    this.workOrderStructure = this.workOrderStructure.filter((elt) =>
      this.matchAssetStructureNode(elt, !!searchTextValue ? searchTextValue.toLowerCase() : undefined)
    );

    this.showFirstWorkOrderStructureNode();
  }

  public onClickRecordAllEvent() {
    this.isEventCreatedLoading = true;
    if (!this.recordDate) {
      this.messageService.showErrorMessage(this.getTranslateKey('recordDateEmpty'));
    } else {
      const workOrderArr: BidmWorkOrderDTO[] = [];
      this.workOrderStructure.forEach((node) => {
        if (!!node && !!node.data && !!node.data.woId && !!node.data.woCode) {
          const workOrderDTO: BidmWorkOrderDTO = {
            projectId: this.projectId,
            bidWoId: (node.data.woId as number).toString(),
            woScheduledEndDate: this.recordDate,
            woCode: node.data.woCode
          };
          workOrderArr.push(workOrderDTO);
        }
      });
      this.updateLogbookFormService
        .recordAllEvents(workOrderArr)
        .pipe(
          finalize(() => {
            this.isEventCreatedLoading = false;
          })
        )
        .subscribe((data: RecordReportOutput[]) => {
          this.selectedTableData = [];
          this.onClickRefresh();
          this.dialogRecordReportInput.workPackageNumber = this.workPackage.projectNumber;
          this.dialogRecordReportInput.messages = data;
          this.recordEvent = true;
        });
    }
  }

  public report() {
    this.showRecordReport = true;
  }
}
