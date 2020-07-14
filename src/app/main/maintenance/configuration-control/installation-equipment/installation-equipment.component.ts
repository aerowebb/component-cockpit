import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';
import { finalize } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SessionService } from '../../../../shared/services/session.service';
import { GetFunctionLocationListToInstallEquipmentInput } from '../../../../shared/types/api-input-types/fleet-business/get-function-location-list-to-install-equipment-input.interface';
import { GetItemListToInstallEquipmentInput } from '../../../../shared/types/api-input-types/fleet-business/get-item-list-to-install-equipment-input.interface';
import { InstallOneEquipmentInput } from '../../../../shared/types/api-input-types/fleet-business/install-one-equipment-input.interface';
import { FindBidoEquipmentSuperiorAssetInput } from '../../../../shared/types/api-input-types/fleet-management/find-bido-equipment-superior-asset-input';
import { ControlConfigurationOutput } from '../../../../shared/types/api-output-types/fleet-business/control-configuration-output.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoFlDTO } from '../../../../shared/types/api-types/bido-fl-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { GenericComponent } from '../../../../shared/types/generic-component';
import { BidoEquipmentUtils } from '../../../../shared/utils/bido-equipment-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { ConfigurationControlService } from '../configuration-control.service';

@Component({
  selector: 'aw-installation-equipment',
  templateUrl: './installation-equipment.component.html'
})
export class InstallationEquipmentComponent extends GenericComponent implements OnInit {
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
    if (value) {
      this._assetStructureSelection = value;

      this.onBeforeLoad();

      this.stockMvt = this.assetStructureSelection.installedStockMvtData as BidtStockMvtDTO;

      this.onLoad();
    }
  }

  public functionLocationList: SelectItem[];
  public installationDate: Date | undefined;
  public installationFunctionLocation: BidoFlDTO | undefined;
  public installationFunctionLocationName: string;
  public installationItem: BireItemDTO | undefined;
  public installationNewOperationalStatus: string | undefined;
  public installationSuperiorAsset: BidoEquipmentDTO | undefined;
  public installationWarehouseName: string;
  public itemList: SelectItem[];
  public operationalStatusList: SelectItem[];
  public stockMvt: BidtStockMvtDTO;
  public superiorAssetList: SelectItem[];
  public workOrderCode: string;
  public workOrderDescription: string;
  public saving: boolean;

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
    return 'InstallationEquipmentComponent'; // TODO: use a constant
  }

  public ngOnInit(): void {
    this.onLoad();
  }

  public onBeforeLoad(): void {
    this.functionLocationList = [];
    this.installationDate = undefined;
    this.installationFunctionLocation = undefined;
    this.installationFunctionLocationName = '';
    this.installationItem = undefined;
    this.installationNewOperationalStatus = undefined;
    this.installationSuperiorAsset = undefined;
    this.installationWarehouseName = '';
    this.itemList = [];
    this.operationalStatusList = [];
    this.stockMvt = {};
    this.superiorAssetList = [];
    this.workOrder = undefined;
    this.workOrderCode = '';
    this.workOrderDescription = '';
    this.saving = false;
  }

  public onLoad(): void {
    this.setComponentOpenMode();

    this.loadOperationalStatusList();
    this.loadWarehouse();
    this.loadWorkOrder();

    if (this.stockMvt.bidoNotificationNotificationCode) {
      this.installationDate = this.stockMvt.stockMvtDate;

      this.loadFunctionLocationFromNotification();
      this.loadSuperiorAsset();
    } else {
      this.installationDate = new Date();

      this.loadSuperiorAssetList();
    }
  }

  // //////////////////////////////////////////////////////////////////////////

  public onChangeFunctionLocation(): void {
    if (ObjectUtils.isDefined(this.installationFunctionLocation)) {
      this.loadItemList();
    } else {
      this.installationItem = undefined;
    }
  }

  public onChangeItem(): void {
    if (ObjectUtils.isDefined(this.installationItem)) {
      this.loadFunctionLocationList();
    } else {
      this.installationFunctionLocation = undefined;
    }
  }

  public onChangeSuperiorAsset(): void {
    if (ObjectUtils.isDefined(this.installationSuperiorAsset)) {
      this.loadItemList();
    } else {
      this.functionLocationList = [];
      this.installationItem = undefined;
      this.installationFunctionLocation = undefined;
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
    if (this.installationDate && moment(this.installationDate).isBefore(moment(this.workPackage.projectStartDate))) {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnSelectedDateAfterWpStartDate'));
    } else {
      this.saving = true;

      const input: InstallOneEquipmentInput = {
        date: this.installationDate,
        hasFunctionCode: this.functionLocationList.length > 0,
        newOperationalStatus: this.installationNewOperationalStatus,
        selectedFl: this.installationFunctionLocation,
        selectedItem: this.installationItem,
        stockMvt: this.stockMvt,
        superiorAssetCode: (this.installationSuperiorAsset as BidoEquipmentDTO).equipmentCode,
        workOrderCode: this.assetStructureSelection.workOrderId,
        workPackageCode: this.workPackage.projectId
      };
      this.configurationControlService
        .installEquipment(input)
        .pipe(
          finalize(() => {
            this.saving = false;
          })
        )
        .subscribe((updatedStockMvt) => {
          this.stockMvt = updatedStockMvt;
          this.assetStructureSelection.installedStockMvtData = this.stockMvt;

          this.loadFunctionLocationFromNotification();
          this.setComponentOpenMode();
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnInstallEquipment'));
        });
    }
  }

  private loadFunctionLocationFromNotification(): void {
    if (this.stockMvt.bidoNotificationNotificationCode) {
      this.configurationControlService
        .getFunctionLocationAtDate(
          this.assetStructureSelection.bidoEquipment
            ? (this.assetStructureSelection.bidoEquipment.equipmentCode as string)
            : '',
          this.stockMvt.bidoNotificationNotificationCode
        )
        .subscribe((flAtDate) => {
          this.installationFunctionLocationName = StringUtils.orEmpty(flAtDate);
        });
    }
  }

  private loadFunctionLocationList(): void {
    if (
      this.assetStructureSelection.bidoEquipment &&
      this.installationSuperiorAsset &&
      this.installationSuperiorAsset.equipmentCode &&
      this.stockMvt.bidmWorkOrderWoId
    ) {
      const bireItemId = this.installationItem
        ? {
            chapter: this.installationItem.chapter as string,
            familyCode: this.installationItem.familyCode,
            marks: this.installationItem.marks as string,
            section: this.installationItem.section as string,
            sheet: this.installationItem.sheet as string,
            structureType: this.installationItem.structureType as string,
            subject: this.installationItem.subject as string,
            variantCode: this.installationItem.variantCode
          }
        : undefined;
      const input: GetFunctionLocationListToInstallEquipmentInput = {
        date: this.installationDate,
        selectedItem: bireItemId,
        superiorAssetCode: this.installationSuperiorAsset.equipmentCode,
        workOrderCode: this.stockMvt.bidmWorkOrderWoId,
        workPackageCode: this.workPackage.projectId
      };
      this.configurationControlService.getFunctionLocationListToInstallEquipment(input).subscribe((list) => {
        this.functionLocationList = list;

        if (list.length === 1) {
          this.installationFunctionLocation = list[0].value;
        }
      });
    }
  }

  private loadItemList(): void {
    if (
      this.assetStructureSelection.bidoEquipment &&
      this.assetStructureSelection.bidoEquipment.equipmentCode &&
      this.installationSuperiorAsset &&
      this.installationSuperiorAsset.equipmentCode
    ) {
      const input: GetItemListToInstallEquipmentInput = {
        equipmentCode: this.assetStructureSelection.bidoEquipment.equipmentCode,
        flItems: this.installationFunctionLocation ? this.installationFunctionLocation.flItems : undefined,
        superiorAssetCode: this.installationSuperiorAsset.equipmentCode
      };
      this.configurationControlService.getItemListToInstallEquipment(input).subscribe((list) => {
        this.itemList = list;

        if (list.length === 1) {
          this.installationItem = list[0].value;

          this.loadFunctionLocationList();
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
            this.installationNewOperationalStatus = matchingStatus ? (matchingStatus.value as string) : undefined;
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
        .filter(
          (elt) =>
            elt.value !== AWPropertiesConstants.OPERATIONAL_STATUS_SPARE_KEY &&
            elt.value !== AWPropertiesConstants.OPERATIONAL_STATUS_SCRAPPED_KEY
        )
        .sort((elt1, elt2) => elt1.label.localeCompare(elt2.label));

      this.loadOperationalStatusFromNotification();
    });
  }

  private loadSuperiorAsset(): void {
    if (this.assetStructureSelection.bidoEquipment && this.assetStructureSelection.bidoEquipment.equEquipmentCode) {
      this.configurationControlService
        .findBidoEquipment({
          equipmentCode: this.assetStructureSelection.bidoEquipment.equEquipmentCode
        })
        .subscribe((asset) => {
          this.superiorAssetList = [{ label: BidoEquipmentUtils.toString(asset), value: asset }];
          this.installationSuperiorAsset = asset;

          this.loadItemList();
        });
    }
  }

  private loadSuperiorAssetList(): void {
    if (
      this.assetStructureSelection.bidoEquipment &&
      this.assetStructureSelection.bidoEquipment.pnCode &&
      this.equipmentCode &&
      this.familyVariantCode
    ) {
      const input: FindBidoEquipmentSuperiorAssetInput = {
        equipmentCode: this.equipmentCode,
        fatherFamilyVariantCode: this.familyVariantCode,
        pnCode: this.assetStructureSelection.bidoEquipment.pnCode
      };
      this.configurationControlService.findBidoEquipmentSuperiorAsset(input).subscribe((list) => {
        this.superiorAssetList = list;

        if (list.length === 1) {
          this.installationSuperiorAsset = list[0].value;

          this.loadItemList();
        }
      });
    }
  }

  private loadWarehouse(): void {
    if (this.stockMvt.bidtWarehouseId) {
      this.configurationControlService.getById(this.stockMvt.bidtWarehouseId).subscribe((warehouse) => {
        this.installationWarehouseName = warehouse ? StringUtils.orEmpty(warehouse.whName) : '';
      });
    }
  }

  private loadWorkOrder() {
    if (this.stockMvt.bidmWorkOrderWoId) {
      const input: BidmWorkOrderDTOId = {
        projectId: this.workPackage.projectId as string,
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
