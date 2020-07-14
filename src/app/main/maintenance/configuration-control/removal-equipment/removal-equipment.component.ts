import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { finalize } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SessionService } from '../../../../shared/services/session.service';
import { DismantleOneEquipmentInput } from '../../../../shared/types/api-input-types/fleet-business/dismantle-one-equipment-input.interface';
import { GetFunctionLocationListToInstallEquipmentInput } from '../../../../shared/types/api-input-types/fleet-business/get-function-location-list-to-install-equipment-input.interface';
import { GetItemListToInstallEquipmentInput } from '../../../../shared/types/api-input-types/fleet-business/get-item-list-to-install-equipment-input.interface';
import { ControlConfigurationOutput } from '../../../../shared/types/api-output-types/fleet-business/control-configuration-output.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoFlDTO } from '../../../../shared/types/api-types/bido-fl-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { GenericComponent } from '../../../../shared/types/generic-component';
import { BidoEquipmentUtils } from '../../../../shared/utils/bido-equipment-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { ConfigurationControlService } from '../configuration-control.service';

@Component({
  selector: 'aw-removal-equipment',
  templateUrl: './removal-equipment.component.html'
})
export class RemovalEquipmentComponent extends GenericComponent implements OnInit {
  @Input()
  public equipmentCode: string;

  @Input()
  public familyVariantCode: string;

  @Input()
  public workPackage: BidmProjectDTO;

  @Input()
  public isGroundEquipment: boolean;

  @Input()
  public get assetStructureSelection(): ControlConfigurationOutput {
    return this._assetStructureSelection;
  }
  public set assetStructureSelection(value: ControlConfigurationOutput) {
    if (ObjectUtils.isDefined(value)) {
      this._assetStructureSelection = value;

      this.onBeforeLoad();

      this.stockMvt = this.assetStructureSelection.removedStockMvtData as BidtStockMvtDTO;

      this.onLoad();
    }
  }

  public functionLocationList: SelectItem[];
  public itemList: SelectItem[];
  public operationalStatusList: SelectItem[];
  public removalDate: Date | undefined;
  public removalFunctionLocation: BidoFlDTO | undefined;
  public removalFunctionLocationName: string;
  public removalItem: BireItemDTO | undefined;
  public removalNewOperationalStatus: string | undefined;
  public removalReason: string | undefined;
  public removalReasonList: SelectItem[];
  public removalSuperiorAsset: BidoEquipmentDTO | undefined;
  public removalWarehouseName: string;
  public stockMvt: BidtStockMvtDTO;
  public superiorAssetList: SelectItem[];
  public workOrderCode: string;
  public workOrderDescription: string;
  public saving: boolean;

  private removalWarehouse: BidtWarehouseDTO | undefined;
  private workOrder: BidmWorkOrderDTO | undefined;
  private _assetStructureSelection: ControlConfigurationOutput;

  public constructor(
    public messageService: MessageService,
    public sessionService: SessionService,
    private readonly configurationControlService: ConfigurationControlService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write);
  }

  public getComponentName(): string {
    return 'RemovalEquipmentComponent'; // TODO: use a constant
  }

  public ngOnInit(): void {
    this.onLoad();
  }

  public onBeforeLoad(): void {
    this.functionLocationList = [];
    this.itemList = [];
    this.operationalStatusList = [];
    this.removalDate = new Date();
    this.removalFunctionLocation = undefined;
    this.removalFunctionLocationName = '';
    this.removalItem = undefined;
    this.removalNewOperationalStatus = undefined;
    this.removalReason = undefined;
    this.removalReasonList = [];
    this.removalSuperiorAsset = undefined;
    this.removalWarehouse = undefined;
    this.removalWarehouseName = '';
    this.stockMvt = {};
    this.superiorAssetList = [];
    this.workOrder = undefined;
    this.workOrderCode = '';
    this.workOrderDescription = '';
    this.saving = false;
  }

  public onLoad(): void {
    this.setComponentOpenMode();

    this.loadFunctionLocationFromNotification();
    this.loadNotification();

    this.loadOperationalStatusList();
    this.loadRemovalReasonList();
    this.loadWarehouse();
    this.loadWorkOrder();

    this.loadSuperiorAsset(
      this.assetStructureSelection.bidoEquipment && this.assetStructureSelection.bidoEquipment.equEquipmentCode
        ? this.assetStructureSelection.bidoEquipment.equEquipmentCode
        : this.equipmentCode
    );
  }

  // //////////////////////////////////////////////////////////////////////////

  public onChangeFunctionLocation(): void {
    if (ObjectUtils.isDefined(this.removalFunctionLocation)) {
      this.loadItemList();
    } else {
      this.removalItem = undefined;
    }
  }

  public onChangeItem(): void {
    if (ObjectUtils.isDefined(this.removalItem)) {
      this.loadFunctionLocationList();
    } else {
      this.removalFunctionLocation = undefined;
    }
  }

  public onChangeSuperiorAsset(): void {
    if (ObjectUtils.isDefined(this.removalSuperiorAsset)) {
      this.loadItemList();
    } else {
      this.functionLocationList = [];
      this.removalItem = undefined;
      this.removalFunctionLocation = undefined;
      this.itemList = [];
    }
  }

  public openEvent() {
    this.configurationControlService.openEvent(this.stockMvt.bidoNotificationNotificationCode);
  }

  public openWorkOrder(): void {
    this.configurationControlService.openWorkOrder(this.workOrder);
  }

  public validate(): void {
    this.saving = true;

    const input: DismantleOneEquipmentInput = {
      date: this.removalDate,
      newOperationalStatus: this.removalNewOperationalStatus,
      removalReason: this.removalReason,
      stockMvt: this.stockMvt,
      warehouseCode: this.removalWarehouse ? this.removalWarehouse.wareHouseId : undefined,
      workOrderCode: this.assetStructureSelection.workOrderId,
      workPackageCode: this.workPackage.projectId
    };
    this.configurationControlService
      .dismantleEquipment(input)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe((updatedStockMvt) => {
        this.stockMvt = updatedStockMvt;
        this.assetStructureSelection.removedStockMvtData = this.stockMvt;

        this.loadFunctionLocationFromNotification();
        this.setComponentOpenMode();
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnDismantleEquipment'));
      });
  }

  private loadFunctionLocationFromNotification(): void {
    if (this.stockMvt.bidoNotificationNotificationCode) {
      this.configurationControlService
        .getFunctionLocationAtDate(this.equipmentCode, this.stockMvt.bidoNotificationNotificationCode)
        .subscribe((flAtDate) => {
          this.removalFunctionLocationName = StringUtils.orEmpty(flAtDate);
        });
    }
  }

  private loadFunctionLocationList(): void {
    if (
      this.assetStructureSelection.bidoEquipment &&
      this.removalSuperiorAsset &&
      this.removalSuperiorAsset.equipmentCode &&
      this.stockMvt.bidmWorkOrderWoId
    ) {
      const bireItemId = this.removalItem
        ? {
            chapter: this.removalItem.chapter as string,
            familyCode: this.removalItem.familyCode,
            marks: this.removalItem.marks as string,
            section: this.removalItem.section as string,
            sheet: this.removalItem.sheet as string,
            structureType: this.removalItem.structureType as string,
            subject: this.removalItem.subject as string,
            variantCode: this.removalItem.variantCode
          }
        : undefined;
      const input: GetFunctionLocationListToInstallEquipmentInput = {
        date: this.removalDate,
        selectedItem: bireItemId,
        superiorAssetCode: this.removalSuperiorAsset.equipmentCode,
        workOrderCode: this.stockMvt.bidmWorkOrderWoId,
        workPackageCode: this.workPackage.projectId
      };
      this.configurationControlService.getFunctionLocationListToInstallEquipment(input).subscribe((list) => {
        this.functionLocationList = list;

        if (list.length === 1) {
          this.removalFunctionLocation = list[0].value;
        }
      });
    }
  }

  private loadItemList(): void {
    if (
      this.assetStructureSelection.bidoEquipment &&
      this.assetStructureSelection.bidoEquipment.equipmentCode &&
      this.removalSuperiorAsset &&
      this.removalSuperiorAsset.equipmentCode
    ) {
      const input: GetItemListToInstallEquipmentInput = {
        equipmentCode: this.assetStructureSelection.bidoEquipment.equipmentCode,
        superiorAssetCode: this.removalSuperiorAsset.equipmentCode
      };
      this.configurationControlService.getItemListToInstallEquipment(input).subscribe((list) => {
        this.itemList = list;

        if (list.length === 1) {
          this.removalItem = list[0].value;

          this.loadFunctionLocationList();
        }
      });
    }
  }

  private loadNotification(): void {
    if (this.stockMvt.bidoNotificationNotificationCode) {
      this.configurationControlService
        .findBidoNotification({ notificationCode: this.stockMvt.bidoNotificationNotificationCode })
        .subscribe((notification) => {
          if (notification) {
            const matchingReason = this.removalReasonList.find((elt) => elt.value === notification.eventReason);
            this.removalReason = matchingReason ? (matchingReason.value as string) : undefined;
          }
        });
    }
  }

  private loadOperationalStatusFromNotification(): void {
    if (this.stockMvt.bidoNotificationNotificationCode) {
      this.configurationControlService
        .getAssetAtDate(this.equipmentCode, this.stockMvt.bidoNotificationNotificationCode)
        .subscribe((assetAtDate) => {
          if (assetAtDate) {
            const matchingStatus = this.operationalStatusList.find(
              (elt) => elt.value === assetAtDate.operationalStatus
            );
            this.removalNewOperationalStatus = matchingStatus ? (matchingStatus.value as string) : undefined;
          }
        });
    }
  }

  private loadOperationalStatusList(): void {
    const observable = this.isGroundEquipment
      ? this.propertiesService.getValue(GenericPropertyConstants.GROUND_EQUIPMENT_STATUS_MAP)
      : this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP);
    observable.subscribe((list) => {
      this.operationalStatusList = ListUtils.orEmpty(list)
        .filter((elt) => elt.value !== AWPropertiesConstants.OPERATIONAL_STATUS_IN_OPERATION_KEY)
        .sort((elt1, elt2) => elt1.label.localeCompare(elt2.label));

      this.loadOperationalStatusFromNotification();
    });
  }

  private loadRemovalReasonList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.REMOVAL_REASON_MAP).subscribe((list) => {
      this.removalReasonList = ListUtils.orEmpty(list).sort((e1, e2) => e1.label.localeCompare(e2.label));
    });
  }

  private loadSuperiorAsset(equipmentCode: string): void {
    this.configurationControlService
      .findBidoEquipment({
        equipmentCode
      })
      .subscribe((asset) => {
        this.superiorAssetList = [{ label: BidoEquipmentUtils.toString(asset), value: asset }];
        this.removalSuperiorAsset = asset;

        this.loadItemList();
      });
  }

  private loadWarehouse(): void {
    if (this.stockMvt.bidtWarehouseId) {
      this.configurationControlService.getById(this.stockMvt.bidtWarehouseId).subscribe((warehouse) => {
        this.removalWarehouse = warehouse;

        if (this.removalWarehouse) {
          this.removalWarehouseName = StringUtils.orEmpty(this.removalWarehouse.whName);

          if (!this.stockMvt.bidoNotificationNotificationCode) {
            if (!ObjectUtils.isDefined(this.removalWarehouse.whType)) {
              this.removalNewOperationalStatus = AWPropertiesConstants.OPERATIONAL_STATUS_SPARE_KEY;
            } else if (this.removalWarehouse.whType === AWPropertiesConstants.MM_WAREHOUSE_TYPE_REPAIR_KEY) {
              this.removalNewOperationalStatus = AWPropertiesConstants.OPERATIONAL_STATUS_MAINTENANCE_KEY;
            } else if (this.removalWarehouse.whType === AWPropertiesConstants.MM_WAREHOUSE_TYPE_UNSERVICEABLE_KEY) {
              this.removalNewOperationalStatus = AWPropertiesConstants.OPERATIONAL_STATUS_IN_STOCK_KEY;
            } else if (this.removalWarehouse.whType === AWPropertiesConstants.MM_WAREHOUSE_TYPE_SCRAP_KEY) {
              this.removalNewOperationalStatus = AWPropertiesConstants.OPERATIONAL_STATUS_SCRAPPED_KEY;
            } else if (this.removalWarehouse.whType === AWPropertiesConstants.MM_WAREHOUSE_TYPE_USED_KEY) {
              this.removalNewOperationalStatus = AWPropertiesConstants.OPERATIONAL_STATUS_SPARE_KEY;
            } else if (this.removalWarehouse.whType === AWPropertiesConstants.MM_WAREHOUSE_TYPE_NEW_KEY) {
              this.removalNewOperationalStatus = AWPropertiesConstants.OPERATIONAL_STATUS_SPARE_KEY;
            }
          }
        }
      });
    }
  }

  private loadWorkOrder() {
    if (this.workPackage.projectId && this.stockMvt.bidmWorkOrderWoId) {
      const input: BidmWorkOrderDTOId = {
        projectId: this.workPackage.projectId,
        woId: this.stockMvt.bidmWorkOrderWoId
      };
      this.configurationControlService.findWorkOrder(input).subscribe((workOrder) => {
        this.workOrder = workOrder;
        this.workOrderCode = StringUtils.orEmpty(this.workOrder.woCode);
        this.workOrderDescription = StringUtils.orEmpty(this.workOrder.woDescription);
      });
    }
  }

  private setComponentOpenMode(): void {
    this.updateOpenMode(
      this.stockMvt.bidoNotificationNotificationCode ? ComponentOpenMode.Read : ComponentOpenMode.Write
    );
  }
}
