import { Component, Input, OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { FleetDataAssestTransferInputDTO } from '../../../../../shared/types/api-input-types/fleet-management/fleet-data-asset-transfer-input-dto.interface';
import { FleetDataTransferInput } from '../../../../../shared/types/api-input-types/fleet-management/fleet-data-transfer-input.interface';
import { FleetDataTransferReportDTO } from '../../../../../shared/types/api-output-types/fleet-management/fleet-data-transfer-report-dto.interface';
import { BidoCustomerDTO } from '../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { FleetDataTransferSearchService } from '../../fleet-data-transfer-search.service';


interface FleetDataTransfer {
  equipmentCode?: string;
  pnCode?: string;
  sn?: string;
  equipmentDesignation?: string;
  ownerCustomerCode?: string;
  registration?: string;
  ownerName?: string;
}

interface AssetsTable {
  equipmentCode?: string;
  pnCode?: string;
  sn?: string;
  newSn?: string;
  equipmentDesignation?: string;
  ownerAtDate?: string;
  operatorAtDate?: string;
  report?: boolean;
  transferOutput?: FleetDataTransferReportDTO;
  alerts?: boolean;
  exceptionMessage?: string;
  registration?: string;
}
@Component({
  selector: 'aw-fleet-data-transfer-owner-dialog',
  templateUrl: './fleet-data-transfer-owner-dialog.component.html',
  styleUrls: ['./fleet-data-transfer-owner-dialog.component.scss']
})
export class FleetDataTransferOwnerDialogComponent extends DialogComponent implements OnInit {
  @Input() public assets: string[];
  @Input() public airCraftSelected: boolean;
  @Input() public ownerSelected: boolean;
  @Input() public operatorSelected: boolean;

  public assetDataAtDate: BidoEquipmentDTO[];
  public dataToTransfer: FleetDataTransfer;
  public editflag: Boolean;
  public fleetDataAssestTransferInput: FleetDataAssestTransferInputDTO;
  public fleetDataTransferInput: FleetDataTransferInput;
  public isAlert: Boolean;
  public isLoading: boolean;
  public isReadOnlyForm: boolean;
  public iscustomerOperator: boolean;
  public iscustomerOwner: boolean;
  public maxDate: Date;
  public reasonList: LabelValue<string>[];
  public registrationFieldFlag: boolean;
  public reportText: string;
  public resultsTable: AssetsTable[];
  public resultsTableCols: TableColumn[];
  public searchObject: BidoCustomerDTO;
  public showCustomerPopup: boolean;
  public showReport: boolean;
  public showReportPopup: boolean;

  public constructor(
    public sessionService: SessionService,
    public messageService: MessageService,
    private readonly fleetDataTransferSearchService: FleetDataTransferSearchService
  ) {
    super(ComponentOpenMode.Read, 'FleetDataTransferOwnerDialogComponent');
    this.fleetDataTransferInput = {
      eventInformationsDTO: {},
      bidoEquipmentDTOList: []
    };
    this.fleetDataAssestTransferInput = {
      equipmentCodeList: []
    };
    this.showReport = false;
    this.isAlert = false;
    this.showReportPopup = false;
    this.isReadOnlyForm = true;
    this.isLoading = false;
    this.resultsTableCols = [];
    this.resultsTable = [];
    this.showCustomerPopup = false;
    this.fleetDataTransferInput.forcePropagation = true;
    this.iscustomerOwner = false;
    this.iscustomerOperator = false;
    this.editflag = false;
    this.dataToTransfer = {};
    this.reportText = '';
    this.maxDate = new Date();
    this.resultsTableCols = [
      { field: 'pnCode', alignment: 'left' },
      { field: 'equipmentDesignation', alignment: 'left' },
      { field: 'alerts', alignment: 'left' }
    ];
  }

  public ngOnInit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
    this.getReasonList();
    this.loadDate();
    this.getAssetsDetails();
  }

  public getAssetsDetails() {
    this.isLoading = true;
    const idx = 3;
    const rdx = 1;
    if (
      this.airCraftSelected &&
      this.resultsTableCols[rdx].field !== 'registration' &&
      this.resultsTableCols[1].field !== 'newSn'
    ) {
      this.resultsTableCols.splice(rdx, 0, { field: 'registration', alignment: 'left' });
      this.resultsTableCols.splice(1, 0, { field: 'newSn', alignment: 'left' });
    }
    if (!this.airCraftSelected && this.resultsTableCols[1].field !== 'sn') {
      this.resultsTableCols.splice(1, 0, { field: 'sn', alignment: 'left' });
    }
    if (this.ownerSelected && this.resultsTableCols[this.airCraftSelected ? idx + 1 : idx].field !== 'ownerAtDate') {
      this.resultsTableCols.splice(this.airCraftSelected ? idx + 1 : idx, 0, {
        field: 'ownerAtDate',
        alignment: 'left'
      });
    }
    if (
      this.operatorSelected &&
      this.resultsTableCols[this.airCraftSelected ? idx + 1 : idx].field !== 'operatorAtDate'
    ) {
      this.resultsTableCols.splice(this.airCraftSelected ? idx + 1 : idx, 0, {
        field: 'operatorAtDate',
        alignment: 'left'
      });
    }

    if (!!this.fleetDataTransferInput.eventInformationsDTO && !!this.fleetDataAssestTransferInput.equipmentCodeList) {
      if (this.operatorSelected) {
        this.fleetDataAssestTransferInput = {
          equipmentCodeList: this.assets,
          date: this.fleetDataTransferInput.eventInformationsDTO.eventDate,
          transferType: 'OPERATOR'
        };
      }
      if (this.ownerSelected) {
        this.fleetDataAssestTransferInput = {
          equipmentCodeList: this.assets,
          date: this.fleetDataTransferInput.eventInformationsDTO.eventDate,
          transferType: 'OWNER'
        };
      }
      this.fleetDataTransferSearchService.findTranferDatails(this.fleetDataAssestTransferInput).subscribe((results) => {
        this.isLoading = false;
        if (!results) {
          this.resultsTable = [];
        } else {
          const temp: AssetsTable[] = [];
          results.forEach((asset) => {
            if (this.operatorSelected && !!asset.bidoEquipmentDTO) {
              const obj: AssetsTable = {
                equipmentCode: asset.bidoEquipmentDTO.equipmentCode,
                equipmentDesignation: asset.bidoEquipmentDTO.equipmentDesignation,
                operatorAtDate: asset.ownerAtDate,
                pnCode: asset.bidoEquipmentDTO.pnCode,
                sn: asset.bidoEquipmentDTO.sn,
                newSn: asset.bidoEquipmentDTO.sn,
                registration: asset.bidoEquipmentDTO.registration
              };
              temp.push(obj);
              this.resultsTable = temp;
            }
            if (this.ownerSelected && !!asset.bidoEquipmentDTO) {
              const obj: AssetsTable = {
                equipmentCode: asset.bidoEquipmentDTO.equipmentCode,
                equipmentDesignation: asset.bidoEquipmentDTO.equipmentDesignation,
                ownerAtDate: asset.ownerAtDate,
                pnCode: asset.bidoEquipmentDTO.pnCode,
                sn: asset.bidoEquipmentDTO.sn,
                newSn: asset.bidoEquipmentDTO.sn,
                registration: asset.bidoEquipmentDTO.registration
              };
              temp.push(obj);
              this.resultsTable = temp;
            }

            if (this.dataToTransfer.ownerCustomerCode) {
              this.alertCheck();
            }
          });
        }
      });
    } else {
      super.throwUnboundLocalError('getAssetsDetails', 'this.fleetDataTransferInput.eventInformationsDTO ');
    }
  }

  public getlabelkey(key: string): string {
    return `${this.getComponentName()}.${key}`;
  }

  public getReasonList() {
    this.reasonList = [];
    this.fleetDataTransferSearchService.getReasonList().subscribe((results) => {
      this.reasonList = results;
    });
  }

  public loadDate() {
    const date = new Date();
    if (!!this.fleetDataTransferInput.eventInformationsDTO) {
      this.fleetDataTransferInput.eventInformationsDTO.eventDate = date;
    } else {
      super.throwUnboundLocalError('loadDate', 'this.fleetDataTransferInput.eventInformationsDTO');
    }
  }

  public checkList(): boolean {
    if (!Array.isArray(this.resultsTable) || !this.resultsTable.length) {
      return true;
    }

    return false;
  }

  public validate() {
    const assetList = this.resultsTable.map((asset) => {
      const obj: FleetDataTransfer = {
        equipmentCode: asset.equipmentCode,
        ownerCustomerCode: this.dataToTransfer.ownerCustomerCode,
        pnCode: asset.pnCode,
        sn: this.airCraftSelected ? asset.newSn : asset.sn,
        equipmentDesignation: asset.equipmentDesignation,
        registration: asset.registration
      };

      return obj;
    });
    this.fleetDataTransferInput.bidoEquipmentDTOList = assetList;
    if (this.operatorSelected) {
      this.fleetDataTransferInput.transferType = 'OPERATOR';
    }
    if (this.ownerSelected) {
      this.fleetDataTransferInput.transferType = 'OWNER';
    }
    this.fleetDataTransferSearchService.transferFleetData(this.fleetDataTransferInput).subscribe(
      (results) => {
        if (results) {
          this.showReport = true;
          if (this.resultsTableCols[0].field !== 'report') {
            this.resultsTableCols.splice(0, 0, { field: 'report', alignment: 'left' });
          }
          this.resultsTable.forEach((asset) => {
            const objTransferData = results.filter((obj) => {
              return obj.code === asset.equipmentCode;
            })[0];
            asset.report = objTransferData && objTransferData.isTransfered;
            if (!asset.report) {
              asset.exceptionMessage = objTransferData.exceptionMessage;
            }
            asset.transferOutput = objTransferData;
            this.reportText = asset.transferOutput
              ? asset.transferOutput.reportText !== null && asset.transferOutput.reportText !== ''
                ? `${this.reportText}\n${asset.transferOutput.reportText}`
                : ''
              : '';
          });
        }
        this.messageService.showSuccessMessage(this.getTranslateKey('successMessage'));
      },
      (error) => {
        this.messageService.showErrorMessage(this.getTranslateKey('dataTransferError'));
      }
    );
  }

  public generateReport() {
    this.showReportPopup = this.reportText !== null && this.reportText !== '';
  }

  public reloadProperty() {
    if (
      !!this.fleetDataTransferInput &&
      !!this.fleetDataTransferInput.eventInformationsDTO &&
      !!this.fleetDataTransferInput.eventInformationsDTO.eventDate
    ) {
      this.getAssetsDetails();
    } else {
      this.resultsTable = [];
    }
  }

  public openOwnerPopup() {
    this.iscustomerOwner = true;
    this.showCustomerPopup = true;
  }

  public openOperatorPopup() {
    this.iscustomerOperator = true;
    this.showCustomerPopup = true;
  }

  public setSelectedCode(customerInfo: BidoCustomerDTO) {
    this.dataToTransfer.ownerCustomerCode = customerInfo.customerCode;
    this.dataToTransfer.ownerName = customerInfo.customerName;
    this.alertCheck();
  }

  public alertCheck() {
    if (this.ownerSelected) {
      this.resultsTable.forEach((row) => {
        row.alerts = row.ownerAtDate === this.dataToTransfer.ownerName ? true : false;
      });
    }
    if (this.operatorSelected) {
      this.resultsTable.forEach((row) => {
        row.alerts = row.operatorAtDate === this.dataToTransfer.ownerName ? true : false;
      });
    }
  }
}
