import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { LabelValueHelper } from '../../../../../../modules/purchase-contract/utils/label-value-helper';
import { PageTocService } from '../../../../../../shared/components/component-sidebar/page-toc.service';
import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { BidoNotificationTypeConstants } from '../../../../../../shared/constants/bido-notification-type-constants';
import { ComponentConstants } from '../../../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SerializationService } from '../../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { TabService } from '../../../../../../shared/services/tab.service';
import { GetOperationalConfigurationSetupInputDTO } from '../../../../../../shared/types/api-input-types/operational-configuration-setup/get-operational-configuration-setup-input-dto.interface';
import { UpdateOperationalConfigurationSetupInputDTO } from '../../../../../../shared/types/api-input-types/operational-configuration-setup/update-operational-configuration-setup-input-dto.interface';
import { BidmProjectDTO } from '../../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { WoAssetManagementDTO } from '../../../../../../shared/types/api-types/wo-asset-management-dto.interface';
import { FormPageComponent } from '../../../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { WorkPackageFormService } from '../../../../../maintenance/work-package/form/work-package-form.service';
import { WorkPackageSearchService } from '../../../../../maintenance/work-package/search/work-package-search.service';
import { FlightFormService } from '../../flight/flight-form.service';

import { OperationalConfigurationSetupService } from './operational-configuration-setup.service';

interface OperationalConfigurationSetupRow {
  decision?: string;
  reason?: string;
  sn?: string;
  snDisabled: boolean;
  equipmentCode?: string;
  pn?: string;
  pnDisabled: boolean;
  designation?: string;
  functionalLocation?: string;
  pnList?: LabelValue<string>[];
  snList?: LabelValue<string>[];
  superiorAssetPn?: string;
  superiorAssetSn?: string;
  superiorAssetDesignation?: string;
  superiorAssetOperationalStatus?: string;
  newOperationalStatusDisabled: boolean;
  control: boolean;
  editing: boolean;
  woAssetManagementDTO: WoAssetManagementDTO;
}

@Component({
  selector: 'aw-operational-configuration-settling',
  styleUrls: ['./operational-configuration-settling.component.scss'],
  templateUrl: './operational-configuration-settling.component.html'
})
export class OperationalConfigurationSettlingComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public getOperationalConfigurationSetupInputDTO: GetOperationalConfigurationSetupInputDTO;

  public componentContext: string;
  public wpNumber: string;
  public operationalConfigurationSetupColumns: TableColumn[];
  public operationalConfigurationSetupTable: OperationalConfigurationSetupRow[];
  public operationalConfigurationSetupSelection: OperationalConfigurationSetupRow[];
  public operationalStatusList: LabelValue<string>[];
  public decisionList: LabelValue<string>[];

  public project: BidmProjectDTO;
  public projectAssetRepresentation?: string;
  public repairCenterLabel?: string;
  public employeeWarehouseId?: number;
  public employeeWarehouseName?: string;

  public showSaveSpinner: boolean;
  public showExecuteSpinner: boolean;
  public canExecute: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly confirmationService: ConfirmationService,
    private readonly operationalConfigurationSetupService: OperationalConfigurationSetupService,
    private readonly flightFormService: FlightFormService,
    private readonly workPackageFormService: WorkPackageFormService,
    private readonly workPackageSearchService: WorkPackageSearchService,
    private readonly propertiesService: PropertiesService,
    public sessionService: SessionService
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
    this.getOperationalConfigurationSetupInputDTO = {};
    this.operationalStatusList = [];
    this.operationalConfigurationSetupSelection = [];
    this.project = {};
    this.showSaveSpinner = false;
    this.canExecute = false;

    this.initOperationalConfigurationSetupColumns();
  }
  public getComponentName(): string {
    return ComponentConstants.FLI_OPERATIONAL_CONFIGURATION_SETTLING;
  }

  /**************************************************************************
   * Initialisation
   *************************************************************************/

  public ngOnInit(): void {
    super.ngOnInit();

    this.loadEquipmentOperationalStatusList();
    this.loadDecisionList();

    if (this.componentData.objectId) {
      this.getOperationalConfigurationSetupInputDTO = this.serializationService.deserialize(
        this.componentData.objectId
      );
      this.loadOperationConfigurationSetup();
    }

    this.displayComponentContext('global.search', true);
  }

  private loadEquipmentOperationalStatusList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP).subscribe((results) => {
      this.operationalStatusList = results;
      this.setTableOperationalStatus();
    });
  }

  private setTableOperationalStatus(): void {
    if (this.operationalConfigurationSetupTable && this.operationalStatusList) {
      this.operationalConfigurationSetupTable.forEach((row) => {
        this.setRowOperationalStatus(row);
      });
    }
  }

  private setRowOperationalStatus(row: OperationalConfigurationSetupRow) {
    if (
      row.woAssetManagementDTO.selectedSuperiorBidoEquipmentDTO &&
      row.woAssetManagementDTO.selectedSuperiorBidoEquipmentDTO.operationalStatus
    ) {
      row.superiorAssetOperationalStatus = LabelValueHelper.getLabelByValue(
        this.operationalStatusList,
        row.woAssetManagementDTO.selectedSuperiorBidoEquipmentDTO.operationalStatus
      );
    }
  }

  private loadDecisionList(): void {
    this.flightFormService
      .findAllBidoNotificationTypesByTypeCategory(AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY)
      .subscribe((results) => {
        this.decisionList = results.map((type) => ({
          value: type.typeCode || '',
          label: type.typeDescription || ''
        }));
        this.setTableDecision();
      });
  }

  private setTableDecision(): void {
    if (this.operationalConfigurationSetupTable && this.decisionList) {
      this.operationalConfigurationSetupTable.forEach((row) => {
        this.setRowDecision(row);
      });
    }
  }

  private setRowDecision(row: OperationalConfigurationSetupRow) {
    if (row.woAssetManagementDTO.notificationType) {
      row.decision = LabelValueHelper.getLabelByValue(this.decisionList, row.woAssetManagementDTO.notificationType);
    }
  }

  private loadOperationConfigurationSetup(): void {
    this.operationalConfigurationSetupService
      .getOperationalConfigurationSetup(this.getOperationalConfigurationSetupInputDTO)
      .subscribe((results) => {
        if (results.woAssetManagementDTOList) {
          this.operationalConfigurationSetupTable = results.woAssetManagementDTOList.map((woAssetManagementDTO) => {
            const row = this.createOperationConfigurationRow(woAssetManagementDTO);
            this.initStatus(row);

            return row;
          });
        }
        this.project = results.bidmProjectDTO || {};
        this.projectAssetRepresentation = results.projectAssetRepresentation;
        this.repairCenterLabel = results.repairCenterLabel;
        this.employeeWarehouseId = results.employeeWarehouseId;
        this.employeeWarehouseName = results.employeeWarehouseName;
      });
  }

  private initStatus(row: OperationalConfigurationSetupRow): void {
    if (row.woAssetManagementDTO.notificationType === BidoNotificationTypeConstants.DISASSEMBLY_TYPE_CODE) {
      row.woAssetManagementDTO.selectedStatus = AWPropertiesConstants.OPERATIONAL_STATUS_SPARE_KEY;
    } else {
      row.woAssetManagementDTO.selectedStatus = AWPropertiesConstants.OPERATIONAL_STATUS_IN_OPERATION_KEY;
    }
  }

  private createOperationConfigurationRow(
    woAssetManagementDTO: WoAssetManagementDTO
  ): OperationalConfigurationSetupRow {
    const isRemoval = woAssetManagementDTO.notificationType === BidoNotificationTypeConstants.DISASSEMBLY_TYPE_CODE;
    const operationalConfigurationSetupRow: OperationalConfigurationSetupRow = {
      pn: woAssetManagementDTO.selectedPn,
      pnDisabled:
        isRemoval ||
        (!!woAssetManagementDTO.availablePNDTOList && woAssetManagementDTO.availablePNDTOList.length === 1),
      snDisabled: isRemoval,
      functionalLocation: woAssetManagementDTO.selectedFlCode,
      control: this.isControlOk(woAssetManagementDTO),
      editing: true,
      newOperationalStatusDisabled: !isRemoval,
      woAssetManagementDTO
    };
    const superiorAsset = woAssetManagementDTO.selectedSuperiorBidoEquipmentDTO;
    if (superiorAsset) {
      // Mapping of superior asset data
      operationalConfigurationSetupRow.superiorAssetPn = superiorAsset.pnCode;
      operationalConfigurationSetupRow.superiorAssetSn = superiorAsset.sn;
      operationalConfigurationSetupRow.superiorAssetDesignation = superiorAsset.equipmentDesignation;
      operationalConfigurationSetupRow.superiorAssetOperationalStatus = superiorAsset.operationalStatus;
    }

    // Converts Pn list into LabelValue
    const pnList = woAssetManagementDTO.availablePNDTOList;
    if (pnList) {
      operationalConfigurationSetupRow.pnList = pnList.map((pn) => ({
        label: pn.pnCode || '',
        value: pn.pnCode || ''
      }));
    }

    const snList = woAssetManagementDTO.availableBidoEquipmentList;
    if (snList) {
      operationalConfigurationSetupRow.snList = snList.map((sn) => ({
        label: sn.sn || '',
        value: sn.equipmentCode || ''
      }));
    }

    this.applySelectedEquipementOnRow(operationalConfigurationSetupRow);
    this.setRowDecision(operationalConfigurationSetupRow);
    this.setRowOperationalStatus(operationalConfigurationSetupRow);

    return operationalConfigurationSetupRow;
  }

  private isControlOk(woAssetManagementDTO: WoAssetManagementDTO): boolean {
    return !woAssetManagementDTO.alertIcon || woAssetManagementDTO.alertIcon === '0';
  }

  private applySelectedEquipementOnRow(operationalConfigurationSetupRow: OperationalConfigurationSetupRow) {
    const equipement = operationalConfigurationSetupRow.woAssetManagementDTO.selectedBidoEquipmentDTO;
    if (equipement) {
      operationalConfigurationSetupRow.equipmentCode = equipement.equipmentCode;
      operationalConfigurationSetupRow.sn = equipement.sn;
      operationalConfigurationSetupRow.designation = equipement.equipmentDesignation;
    }
  }

  private initOperationalConfigurationSetupColumns(): void {
    this.operationalConfigurationSetupColumns = [
      { field: 'decision', alignment: 'left', width: '7%' },
      { field: 'pn', alignment: 'left', width: '10%' },
      { field: 'sn', alignment: 'left', width: '10%' },
      { field: 'designation', alignment: 'left', width: '10%' },
      { field: 'functionalLocation', alignment: 'left', width: '8%' },
      { field: 'superiorAssetPn', alignment: 'left', width: '8%' },
      { field: 'superiorAssetSn', alignment: 'left', width: '8%' },
      { field: 'superiorAssetDesignation', alignment: 'left', width: '8%' },
      { field: 'superiorAssetOperationalStatus', alignment: 'left', width: '8%' },
      { field: 'date', alignment: 'left', width: '8%' },
      { field: 'newOperationalStatus', alignment: 'left', width: '10%' },
      { field: 'control', alignment: 'center', width: '7%' }
    ];
  }

  /**************************************************************************
   * User interactions
   *************************************************************************/
  public onCancel(): void {
    if (this.project.projectId) {
      const projectId = this.project.projectId;
      this.confirmationService.confirmDelete({
        messageKey: this.getTranslateKey('confirmProjectDeletion'),
        accept: () => {
          this.workPackageSearchService.removeBidmProject({ projectId }).subscribe(() => {
            this.closeComponent();
          });
        }
      });
    }
  }

  public onSave(): void {
    this.project.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED;
    this.showSaveSpinner = true;
    this.workPackageFormService
      .updateBidmProject(this.project)
      .pipe(
        finalize(() => {
          this.showSaveSpinner = false;
        })
      )
      .subscribe(() => {
        this.canExecute = true;
        this.messageService.showSuccessMessage('global.successOnSave');
      });
  }

  public onPnSelected(pnCode: string, currentRow: OperationalConfigurationSetupRow) {
    currentRow.woAssetManagementDTO.selectedPn = pnCode;
    this.operationalConfigurationSetupService
      .updateWOAssetManagementPn(this.initUpdateInput(currentRow))
      .subscribe((result) => {
        if (result) {
          this.replaceCurrentRow(currentRow, result);
        }
      });
  }

  public onSnSelected(equipmentCode: string, currentRow: OperationalConfigurationSetupRow) {
    const currentWo = currentRow.woAssetManagementDTO;
    if (currentWo.availableBidoEquipmentList) {
      currentWo.selectedBidoEquipmentDTO = currentWo.availableBidoEquipmentList.find(
        (equ) => equ.equipmentCode === equipmentCode
      );
      this.applySelectedEquipementOnRow(currentRow);

      this.operationalConfigurationSetupService
        .updateWOAssetManagementSelectedEquipment(this.initUpdateInput(currentRow))
        .subscribe((result) => {
          if (result) {
            this.replaceCurrentRow(currentRow, result);
          }
        });
    }
  }

  public onStatusSelected(statusSelected: string, currentRow: OperationalConfigurationSetupRow) {
    currentRow.woAssetManagementDTO.selectedStatus = statusSelected;
    this.operationalConfigurationSetupService
      .controlWOAssetManagement(this.initUpdateInput(currentRow))
      .subscribe((result) => {
        if (result) {
          this.replaceCurrentRow(currentRow, result);
        }
      });
  }

  private replaceCurrentRow(currentRow: OperationalConfigurationSetupRow, woAssetManagementDTO: WoAssetManagementDTO) {
    const position = this.operationalConfigurationSetupTable.indexOf(currentRow);
    if (position >= 0) {
      const newRow = this.createOperationConfigurationRow(woAssetManagementDTO);
      this.operationalConfigurationSetupTable.splice(position, 1, newRow);

      const positionSelection = this.operationalConfigurationSetupSelection.indexOf(currentRow);
      if (positionSelection >= 0) {
        this.operationalConfigurationSetupSelection.splice(positionSelection, 1, newRow);
      }
    }
  }

  private initUpdateInput(
    operationalConfigurationSetupRow: OperationalConfigurationSetupRow
  ): UpdateOperationalConfigurationSetupInputDTO {
    return {
      woAssetManagementDTO: operationalConfigurationSetupRow.woAssetManagementDTO,
      woAssetManagementDTOList: this.operationalConfigurationSetupTable.map((row) => row.woAssetManagementDTO)
    };
  }

  public executeSelection(): void {
    if (this.operationalConfigurationSetupSelection.length > 0 && this.validateExecutionSelection()) {
      const selectedWoAssetManagements = this.operationalConfigurationSetupSelection.map(
        (row) => row.woAssetManagementDTO
      );
      this.showExecuteSpinner = true;
      this.operationalConfigurationSetupService
        .executeWOAssetManagementDecision(selectedWoAssetManagements)
        .pipe(
          finalize(() => {
            this.showExecuteSpinner = false;
          })
        )
        .subscribe((results) => {
          if (results) {
            results.forEach((result) => {
              this.replaceRowByWorkOrderId(result);
            });
            this.operationalConfigurationSetupSelection = [];
          }
          this.messageService.showSuccessMessage(this.getTranslateKey('executeSuccess'));
        });
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('executeInvalid'));
    }
  }

  private validateExecutionSelection() {
    return this.operationalConfigurationSetupSelection.every((row) => {
      const woam = row.woAssetManagementDTO;

      return !!woam.selectedBidoEquipmentDTO && !!woam.selectedStatus && this.isControlOk(woam);
    });
  }

  private replaceRowByWorkOrderId(result: WoAssetManagementDTO) {
    const rowIndex = this.operationalConfigurationSetupTable.findIndex(
      (row) =>
        !!row.woAssetManagementDTO.bidmWorkOrderDTOId &&
        !!result.bidmWorkOrderDTOId &&
        row.woAssetManagementDTO.bidmWorkOrderDTOId.woId === result.bidmWorkOrderDTOId.woId
    );
    if (rowIndex >= 0) {
      this.operationalConfigurationSetupTable.splice(rowIndex, 1, this.createOperationConfigurationRow(result));
    }
  }

  /**************************************************************************
   * Opening other form
   *************************************************************************/

  public openProject(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize({ wpId: this.project.projectId })
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openProjectAsset(): void {
    const equipmentCode = this.project.assetCode;

    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_AIRCRAFT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
