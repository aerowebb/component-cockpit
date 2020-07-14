import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoEvolutionConstants } from '../../../../shared/constants/bido-evolution-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants as gpc } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { FileService } from '../../../../shared/services/file.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AssetWorkOrderOriginInput } from '../../../../shared/types/api-input-types/airworthiness-management/asset-work-order-origin-input.inteface';
import { CalculateWorkOrderImput } from '../../../../shared/types/api-input-types/work-order/calculate-work-order-input.interface';
import { ADSBModRowDTO } from '../../../../shared/types/api-output-types/airworthiness-management/adsb-mod-row-dto.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDataDTO } from '../../../../shared/types/api-types/bidm-work-order-data-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoUserDTOId } from '../../../../shared/types/api-types/bido-user-dto-id.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireModificationDTOId } from '../../../../shared/types/api-types/bire-modification-dto-id.interface';
import { BireSbDTOId } from '../../../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { WorkOrderStatusDetailDTO } from '../../../../shared/types/api-types/work-order-status-detail-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../../shared/utils/bido-equipment-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { MyJobsCardsTableCriteria } from '../types/my-jobs-cards-table-criteria.interface';

import { MyJobsCardsFormService } from './my-jobs-cards-form.service';

interface JobsCardsRow {
  workOrderDTO: BidmWorkOrderDTO;
  workOrderStatusDetailDTO?: WorkOrderStatusDetailDTO;
  originText?: string;
  evolutionType?: string;
  projectDTO?: BidmProjectDTO;
  wpEquipementDTO?: BidoEquipmentDTO;
  woEquipementDTO?: BidoEquipmentDTO;
  progressStatus?: string;
  bidmWorkOrderDataDTO?: BidmWorkOrderDataDTO;
  materialIllustration?: SafeResourceUrl;
  itemDTO?: BireItemDTO;
  isIllustrationFounded?: boolean;
  assignedTo?: string;
  woCodeNumber: number;
}

@Component({
  selector: 'aw-my-jobs-cards-form',
  styleUrls: ['./my-jobs-cards-form.component.scss'],
  templateUrl: './my-jobs-cards-form.component.html'
})
export class MyJobsCardsFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly awPropertiesConstants: typeof AWPropertiesConstants;
  public myJobsCardsCols: TableColumn[];
  public userConnectedId: BidoUserDTOId;
  public jobCardTable: JobsCardsRow[];
  public jobCardTableResult: JobsCardsRow[];
  public context: string;
  public showSaveSpinner: boolean = false;

  // Filters
  public searchStatusList: SelectItem[];
  public criteriaStatusList: string[];
  public searchTypeList: SelectItem[];
  public criteriaTypeList: string[];
  public searchWOAssetList: SelectItem[];
  public searchWPAssetList: SelectItem[];
  public searchWOCodeList: SelectItem[];
  public searchUserList: SelectItem[];
  public userList: SelectItem[];
  public searchCriteria: MyJobsCardsTableCriteria;
  public filtersVisible: boolean;
  public hasQualityCheckAuthorization: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly myJobsCardsFormService: MyJobsCardsFormService,
    private readonly sessionService: SessionService,
    private readonly fileService: FileService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.awPropertiesConstants = AWPropertiesConstants;
    this.init();
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_MY_JOBS_CARDS_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.getWorkOrders();
  }

  private init(): void {
    this.jobCardTable = [];
    this.jobCardTableResult = [];
    this.searchStatusList = [];
    this.searchTypeList = [];
    this.searchWOAssetList = [];
    this.searchWPAssetList = [];
    this.searchWOCodeList = [];
    this.searchUserList = [];
    this.criteriaStatusList = [];
    this.criteriaTypeList = [];
    this.myJobsCardsFormService
      .loadGenProps(gpc.AIRM_WORK_ORDER_TYPES_MAP)
      .subscribe((result) => (this.searchTypeList = result));
    this.myJobsCardsFormService
      .loadGenProps(gpc.AIRM_OPERATION_STATUS_MAP)
      .subscribe((result) => (this.searchStatusList = result));
    this.initializeFilters();
  }

  private getWorkOrders(): void {
    if (this.sessionService.loggedUser) {
      this.hasQualityCheckAuthorization = this.sessionService.hasUserRightByUseCase(
        BidoFunctionTypeConstants.UC_AIRM_QUALITY_CHECK,
        BidoFunctionTypeConstants.DEGREE_MANAGE
      );
      if (this.hasQualityCheckAuthorization) {
        this.criteriaStatusList.push(AWPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED);
      }

      this.myJobsCardsFormService.findBidoUserByLogin(this.sessionService.loggedUser.login).subscribe((user) => {
        if (user.userId) {
          this.context = `${user.firstname} ${user.lastname}`;
          this.displayComponentContext(this.context, true);
          this.userConnectedId = {
            userId: user.userId
          };
          this.myJobsCardsFormService.loadUserList().subscribe((result) => {
            this.userList = result;
            this.myJobsCardsFormService
              .findBidmWorkOrdersByAssignedTo(this.userConnectedId)
              .subscribe((workOrderList) => {
                this.setWorkOrdersRows(workOrderList);
              });
          });
        }
      });
    }
  }

  private setWorkOrdersRows(workOrderList: BidmWorkOrderDTO[]): void {
    this.jobCardTable = [];
    workOrderList.forEach((workOrder) => {
      if (workOrder.woCode) {
        const jobCardRow: JobsCardsRow = {
          workOrderDTO: workOrder,
          woCodeNumber: Number(workOrder.woCode.slice(2))
        };
        const woItemDTO: BireItemDTO = {
          familyCode: jobCardRow.workOrderDTO.bireItemFamilyCode,
          variantCode: jobCardRow.workOrderDTO.bireItemVariantCode,
          chapter: jobCardRow.workOrderDTO.bireItemChapter,
          section: jobCardRow.workOrderDTO.bireItemSection,
          subject: jobCardRow.workOrderDTO.bireItemSubject,
          sheet: jobCardRow.workOrderDTO.bireItemSheet,
          marks: jobCardRow.workOrderDTO.bireItemMarks,
          structureType: AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY
        };

        const workOrderDetailInput: CalculateWorkOrderImput = {
          workOrderData: jobCardRow.workOrderDTO,
          workPackageAssetCode: undefined,
          fromLineMaintenance: false
        };
        this.myJobsCardsFormService.calculateWorkOrderStatus(workOrderDetailInput).subscribe((statusOutput) => {
          if (
            statusOutput.workOrderDetail.status !== AWPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&
            jobCardRow.workOrderDTO.projectId
          ) {
            this.myJobsCardsFormService.findBidmProjectById(jobCardRow.workOrderDTO.projectId).subscribe((project) => {
              if (project.assetCode) {
                const bidoEquipementId: BidoEquipmentDTOId = {
                  equipmentCode: project.assetCode
                };

                this.myJobsCardsFormService.findBidoEquipmentById(bidoEquipementId).subscribe((wpEquipement) => {
                  const bidoEquipement: BidoEquipmentDTO = {
                    sn: jobCardRow.workOrderDTO.assetSn,
                    pnCode: jobCardRow.workOrderDTO.assetPn
                  };
                  this.myJobsCardsFormService
                    .findFirstBidoEquipmentsByPnAndSnCodes(bidoEquipement)
                    .subscribe((woEquipement) => {
                      if (jobCardRow.workOrderDTO.projectId && jobCardRow.workOrderDTO.woId) {
                        const wordOrderId: BidmWorkOrderDTOId = {
                          woId: jobCardRow.workOrderDTO.woId,
                          projectId: jobCardRow.workOrderDTO.projectId
                        };

                        this.myJobsCardsFormService
                          .getBidmWorkOrdersStructureByProject(wordOrderId)
                          .subscribe((workOrderData) => {
                            workOrderData.forEach((woData) => {
                              if (
                                woData.woAssignedTo === jobCardRow.workOrderDTO.woAssignedTo &&
                                woData.bidmWorkOrder.woCode === jobCardRow.workOrderDTO.woCode
                              ) {
                                if (statusOutput.workOrderDetail.status) {
                                  jobCardRow.workOrderStatusDetailDTO = statusOutput.workOrderDetail;
                                  jobCardRow.projectDTO = project;
                                  jobCardRow.wpEquipementDTO = wpEquipement;
                                  jobCardRow.woEquipementDTO = woEquipement;
                                  jobCardRow.progressStatus = statusOutput.workOrderDetail.status.slice(2);
                                  jobCardRow.assignedTo = SelectItemUtils.formatSelectItem(
                                    woData.woAssignedTo,
                                    this.userList
                                  );
                                  jobCardRow.bidmWorkOrderDataDTO = woData;
                                  jobCardRow.isIllustrationFounded = false;
                                  jobCardRow.materialIllustration = undefined;
                                  jobCardRow.itemDTO = woItemDTO;
                                  jobCardRow.originText = statusOutput.originText;
                                  jobCardRow.evolutionType = statusOutput.evolutionType;
                                  this.loadIllustrations(jobCardRow);
                                  this.jobCardTableResult.push(jobCardRow);
                                  this.initializeSearchCriteria(jobCardRow);
                                  if (this.jobCardRowMatchFilters(jobCardRow)) {
                                    this.jobCardTable.push(jobCardRow);
                                  }
                                  if (this.jobCardTable.length > 1) {
                                    this.jobCardTable.sort((a, b) => a.woCodeNumber - b.woCodeNumber);
                                  }
                                }
                              }
                            });
                          });
                      }
                    });
                });
              }
            });
          }
        });
      }
    });
  }

  private loadIllustrations(jobCardRow: JobsCardsRow): void {
    if (jobCardRow.itemDTO && jobCardRow.woEquipementDTO) {
      if (
        !!jobCardRow.itemDTO.chapter &&
        !!jobCardRow.itemDTO.section &&
        !!jobCardRow.itemDTO.subject &&
        !!jobCardRow.itemDTO.sheet &&
        !!jobCardRow.itemDTO.marks &&
        !!jobCardRow.itemDTO.structureType
      ) {
        const bireItemDtoId: BireItemDTOId = {
          familyCode: jobCardRow.itemDTO.familyCode,
          variantCode: jobCardRow.itemDTO.variantCode,
          chapter: jobCardRow.itemDTO.chapter,
          section: jobCardRow.itemDTO.section,
          subject: jobCardRow.itemDTO.subject,
          sheet: jobCardRow.itemDTO.sheet,
          marks: jobCardRow.itemDTO.marks,
          structureType: jobCardRow.itemDTO.structureType
        };
        if (jobCardRow.woEquipementDTO.equipmentCode) {
          this.fileService
            .findIllustration(bireItemDtoId, jobCardRow.woEquipementDTO)
            .subscribe((illustrationDocument) => {
              if (illustrationDocument) {
                jobCardRow.materialIllustration = this.fileService.sanitizeAndGetBase64Prefix(illustrationDocument);
                jobCardRow.isIllustrationFounded = true;
              }
            });
        }
      }
    }
  }

  public printAllJobsCards(): void {
    this.showSaveSpinner = true;
    const jobcardIdList: BidmWorkOrderDTOId[] = [];
    this.jobCardTable.forEach((row) => {
      if (row.workOrderDTO.woId && row.workOrderDTO.projectId) {
        const jobCardId: BidmWorkOrderDTOId = {
          woId: row.workOrderDTO.woId,
          projectId: row.workOrderDTO.projectId
        };
        jobcardIdList.push(jobCardId);
      }
    });
    this.myJobsCardsFormService.generateJobcards(jobcardIdList).subscribe({
      next: (jobcard) => {
        FileUtils.downloadFile(jobcard.fileContent, jobcard.fileName);
        this.showSaveSpinner = false;
      }
    });
  }

  public openSnLink(code: string): void {
    if (code) {
      this.openEquipment(code, ComponentOpenMode.Read);
    }
  }

  public openEquipment(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.AircraftFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AircraftFormComponent',
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

  public openPartNumberLink(pnCode: string): void {
    this.openPN(pnCode, ComponentOpenMode.Read);
  }

  private openPN(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.PartNumberFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'PartNumberFormComponent',
      objectId,
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openWorkPackageLink(wpId: string) {
    this.openWorkPackage(wpId, ComponentOpenMode.Read);
  }

  public openWorkPackage(id: string | undefined, openModeWanted: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
      openMode: openModeWanted,
      objectId: this.serializationService.serialize({ wpId: id })
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openWorkOrderLink(workOrder: BidmWorkOrderDTO): void {
    if (workOrder.woId && workOrder.projectId) {
      const workOrderId: BidmWorkOrderDTOId = {
        woId: workOrder.woId,
        projectId: workOrder.projectId
      };
      this.openWorkOrder(workOrderId, ComponentOpenMode.Read);
    }
  }

  public openWorkOrder(wo: BidmWorkOrderDTOId, openModeWanted: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
      openMode: openModeWanted,
      objectId: this.serializationService.serialize(wo)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openItemLink(item: BireItemDTO): void {
    if (!!item) {
      this.openItem(item, ComponentOpenMode.Read);
    }
  }

  private openItem(objectId: BireItemDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_ITEM_FORM,
      openMode
    };
    if (!!objectId) {
      const itemFormId: BireItemDTO = {
        familyCode: objectId.familyCode,
        chapter: objectId.chapter,
        section: objectId.section,
        sheet: objectId.sheet,
        marks: objectId.marks,
        subject: objectId.subject,
        structureType: objectId.structureType,
        variantCode: objectId.variantCode
      };
      data.objectId = this.serializationService.serialize(itemFormId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openTask(bireTaskDTO: BireTaskDTO): void {
    const labelKey = 'transaction.TaskFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'TaskFormComponent',
      objectId: this.serializationService.serialize(bireTaskDTO),
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openEvolution(row: ADSBModRowDTO): void {
    const bireEvolutionDTOId: BireEvolutionDTOId = row.adSbModDTOId as BireEvolutionDTOId;
    const labelKey = 'transaction.EvolutionFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EvolutionFormComponent',
      objectId: this.serializationService.serialize(bireEvolutionDTOId),
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openSB(row: ADSBModRowDTO): void {
    const bireSBDTOId: BireSbDTOId = row.adSbModDTOId as BireSbDTOId;
    const labelKey = 'transaction.SbadFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'SbadFormComponent',
      objectId: this.serializationService.serialize(bireSBDTOId),
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openModification(row: ADSBModRowDTO): void {
    const bireModificationDTOId: BireModificationDTOId = row.adSbModDTOId as BireModificationDTOId;
    const labelKey = 'transaction.ModificationFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_MODIFICATION_FORM,
      objectId: bireModificationDTOId ? this.serializationService.serialize(bireModificationDTOId) : undefined,
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openAD(row: ADSBModRowDTO): void {
    const bireSBDTOId: BireSbDTOId = row.adSbModDTOId as BireSbDTOId;
    const labelKey = 'transaction.AirworthinessDirectiveFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AirworthinessDirectiveFormComponent',
      objectId: this.serializationService.serialize(bireSBDTOId),
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openEvent(defectId: BidoNotificationDTOId): void {
    if (defectId) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.FLE_DEFECT_FORM,
        objectId: this.serializationService.serialize(defectId),
        openMode: ComponentOpenMode.Read
      };

      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  private goToAircraft(aircraftCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.AircraftFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AircraftFormComponent',
      openMode
    };
    if (!!aircraftCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: aircraftCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToEngine(engineCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EngineFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EngineFormComponent',
      openMode
    };
    if (!!engineCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: engineCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToEquipment(equipmentCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EquipmentFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EquipmentFormComponent',
      openMode
    };
    if (!!equipmentCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public onReload(): void {
    this.init();
    this.getWorkOrders();
  }

  public consultWorkOrderOrigin(row: JobsCardsRow) {
    if (!!row.originText && row.woEquipementDTO) {
      const bidmWorkOrderDTO = row.workOrderDTO;
      const assetWorkOrderOriginInput: AssetWorkOrderOriginInput = {
        woType: bidmWorkOrderDTO.woType,
        woSource: bidmWorkOrderDTO.woSource,
        evolutionType: row.evolutionType,
        familyVariantCode: row.woEquipementDTO.familyVariantCode
      };
      this.myJobsCardsFormService.findWorkOrderOriginDetails(assetWorkOrderOriginInput).subscribe((result) => {
        if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_TASK === bidmWorkOrderDTO.woType) {
          if (!!result.bireTaskDTOId) {
            // open task form
            const bireTaskDTO: BireTaskDTO = result.bireTaskDTOId as BireTaskDTO;
            this.openTask(bireTaskDTO);
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_EVOLUTION === bidmWorkOrderDTO.woType) {
          if (BidoEvolutionConstants.CODE_EVOLUTION === row.evolutionType) {
            if (!!result.bireEvolutionDTOId) {
              // open evolution form
              const bireEvolutionDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireEvolutionDTOId
              };
              this.openEvolution(bireEvolutionDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_AD === row.evolutionType) {
            if (!!result.bireSbDTOId) {
              // open Airworthiness Directive form
              const bireSBDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireSbDTOId
              };
              this.openAD(bireSBDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_SB === row.evolutionType) {
            if (!!result.bireSbDTOId) {
              // open Service Bulletin form
              const bireSbDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireSbDTOId
              };
              this.openSB(bireSbDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_MODIFICATION === row.evolutionType) {
            if (!!result.bireModificationDTOId) {
              // open modification form
              const bireModificationDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireModificationDTOId
              };
              this.openModification(bireModificationDTOId);
            }
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_DEFECT === bidmWorkOrderDTO.woType) {
          if (!!result.bidoNotificationDTOId) {
            // open event form
            const bidoNotificationDTOId: BidoNotificationDTOId = result.bidoNotificationDTOId;
            this.openEvent(bidoNotificationDTOId);
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_SN_CHANGE === bidmWorkOrderDTO.woType) {
          if (!!result.bidoEquipmentDTO) {
            if (AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY === result.bidoEquipmentDTO.equipmentFunction) {
              // open aircraft
              this.goToAircraft(result.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read);
            } else if (
              AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY === result.bidoEquipmentDTO.equipmentFunction
            ) {
              // open engine
              this.goToEngine(result.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read);
            } else {
              // open equipment
              this.goToEquipment(result.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read);
            }
          }
        }
      });
    }
  }

  public filterWithCriteria(): void {
    this.jobCardTable = [];
    this.jobCardTableResult.forEach((jobCardRow) => {
      if (this.jobCardRowMatchFilters(jobCardRow)) {
        this.jobCardTable.push(jobCardRow);
      }
    });
  }

  private initializeSearchCriteria(jobCardRow: JobsCardsRow): void {
    if (!this.hasQualityCheckAuthorization) {
      if (
        jobCardRow.workOrderStatusDetailDTO &&
        jobCardRow.workOrderStatusDetailDTO.status &&
        !this.criteriaStatusList.includes(jobCardRow.workOrderStatusDetailDTO.status)
      ) {
        this.criteriaStatusList.push(jobCardRow.workOrderStatusDetailDTO.status);
      }
    }

    if (jobCardRow.workOrderDTO.woType && !this.criteriaTypeList.includes(jobCardRow.workOrderDTO.woType)) {
      this.criteriaTypeList.push(jobCardRow.workOrderDTO.woType);
    }
    if (jobCardRow.wpEquipementDTO) {
      if (
        this.searchWPAssetList.filter(
          (item) => jobCardRow.wpEquipementDTO && item.value === jobCardRow.wpEquipementDTO.equipmentCode
        ).length === 0
      ) {
        this.searchWPAssetList.push({
          label: BidoEquipmentUtils.toString(jobCardRow.wpEquipementDTO),
          value: jobCardRow.wpEquipementDTO.equipmentCode
        });
      }
      this.searchWPAssetList.sort(SelectItemUtils.labelSorter);
    }
    if (jobCardRow.woEquipementDTO) {
      if (
        this.searchWOAssetList.filter(
          (item) => jobCardRow.woEquipementDTO && item.value === jobCardRow.woEquipementDTO.equipmentCode
        ).length === 0
      ) {
        this.searchWOAssetList.push({
          label: BidoEquipmentUtils.toString(jobCardRow.woEquipementDTO),
          value: jobCardRow.woEquipementDTO.equipmentCode
        });

        this.searchWOAssetList.sort(SelectItemUtils.labelSorter);
      }
    }
    if (
      this.searchWOCodeList.filter(
        (item) => jobCardRow.woEquipementDTO && item.value === jobCardRow.workOrderDTO.woCode
      ).length === 0
    ) {
      this.searchWOCodeList.push({
        label: jobCardRow.workOrderDTO.woCode,
        value: jobCardRow.workOrderDTO.woCode
      });

      this.searchWOCodeList.sort(SelectItemUtils.labelSorter);
    }
    if (
      this.searchUserList.filter(
        (item) => !!jobCardRow.workOrderDTO.woAssignedTo && item.value === jobCardRow.workOrderDTO.woAssignedTo
      ).length === 0
    ) {
      this.searchUserList.push({
        label: SelectItemUtils.formatSelectItem(jobCardRow.workOrderDTO.woAssignedTo, this.userList),
        value: jobCardRow.workOrderDTO.woAssignedTo
      });
      this.searchUserList.sort(SelectItemUtils.labelSorter);
    }
  }

  public jobCardRowMatchFilters(jobCardRow: JobsCardsRow): boolean {
    let statusMatch = true;
    let typeMatch = true;
    let wpAssetMatch = true;
    let woAssetMatch = true;
    let nextDayMatch = true;
    let assignedToMatch = true;
    let woCodeMatch = true;
    let scheduledStartDateMatch = true;
    let scheduledEndDateMatch = true;
    let executionStartDateMatch = true;
    let executionEndDateMatch = true;
    if (
      !ListUtils.isNullOrEmpty(this.searchCriteria.statusList) &&
      jobCardRow.workOrderStatusDetailDTO &&
      jobCardRow.workOrderStatusDetailDTO.status
    ) {
      statusMatch = this.searchCriteria.statusList.includes(jobCardRow.workOrderStatusDetailDTO.status);
    }
    if (!ListUtils.isNullOrEmpty(this.searchCriteria.typeList) && jobCardRow.workOrderDTO.woType) {
      typeMatch = this.searchCriteria.typeList.includes(jobCardRow.workOrderDTO.woType);
    }
    if (this.searchCriteria.woAsset) {
      if (jobCardRow.woEquipementDTO && jobCardRow.woEquipementDTO.equipmentCode === this.searchCriteria.woAsset) {
        woAssetMatch = true;
      } else {
        woAssetMatch = false;
      }
    }
    if (this.searchCriteria.wpAsset) {
      if (jobCardRow.wpEquipementDTO && jobCardRow.wpEquipementDTO.equipmentCode === this.searchCriteria.wpAsset) {
        wpAssetMatch = true;
      } else {
        wpAssetMatch = false;
      }
    }

    if (this.searchCriteria.nextDays) {
      if (
        jobCardRow.projectDTO &&
        jobCardRow.workOrderDTO.woScheduledStartDate &&
        moment(jobCardRow.workOrderDTO.woScheduledStartDate).isAfter(new Date()) &&
        moment(jobCardRow.workOrderDTO.woScheduledStartDate).isBefore(
          moment(new Date()).add(this.searchCriteria.nextDays, 'days')
        )
      ) {
        nextDayMatch = true;
      } else {
        nextDayMatch = false;
      }
    }

    if (this.searchCriteria.assignedTo && this.searchCriteria.assignedTo !== jobCardRow.workOrderDTO.woAssignedTo) {
      assignedToMatch = false;
    }

    if (this.searchCriteria.woCode && this.searchCriteria.woCode !== jobCardRow.workOrderDTO.woCode) {
      woCodeMatch = false;
    }

    if (
      this.searchCriteria.scheduledStartDate &&
      !moment(this.searchCriteria.scheduledStartDate).isSame(jobCardRow.workOrderDTO.woScheduledStartDate, 'day')
    ) {
      scheduledStartDateMatch = false;
    }

    if (
      this.searchCriteria.scheduledEndDate &&
      !moment(this.searchCriteria.scheduledEndDate).isSame(jobCardRow.workOrderDTO.woScheduledEndDate, 'day')
    ) {
      scheduledEndDateMatch = false;
    }

    if (
      this.searchCriteria.executionStartDate &&
      jobCardRow.workOrderStatusDetailDTO &&
      !moment(this.searchCriteria.executionStartDate).isSame(jobCardRow.workOrderStatusDetailDTO.startDate, 'day')
    ) {
      executionStartDateMatch = false;
    }

    if (
      this.searchCriteria.executionEndDate &&
      jobCardRow.workOrderStatusDetailDTO &&
      !moment(this.searchCriteria.executionEndDate).isSame(jobCardRow.workOrderStatusDetailDTO.endDate, 'day')
    ) {
      executionEndDateMatch = false;
    }

    return (
      statusMatch &&
      typeMatch &&
      wpAssetMatch &&
      woAssetMatch &&
      nextDayMatch &&
      assignedToMatch &&
      woCodeMatch &&
      executionEndDateMatch &&
      executionStartDateMatch &&
      scheduledStartDateMatch &&
      scheduledEndDateMatch
    );
  }

  public initializeFilters(): void {
    this.searchCriteria = {
      statusList: this.criteriaStatusList,
      typeList: this.criteriaTypeList,
      assignedTo: '',
      woAsset: '',
      wpAsset: '',
      woCode: ''
    };
  }

  public resetTableFilters(): void {
    this.initializeFilters();
    this.filterWithCriteria();
  }
}
