import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { FleetDataCopyInputDTO } from '../../../../../shared/types/api-input-types/fleet-management/fleet-data-copy-input-dto.interface';
import { BidoEquipmentOVSOutputDTO } from '../../../../../shared/types/api-output-types/fleet-management/bido-equipment-ovs-output-dto';
import { FleetDataCopyOutputDTO } from '../../../../../shared/types/api-output-types/fleet-management/fleet-data-copy-output-dto';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireEvolutionDTO } from '../../../../../shared/types/api-types/bire-evolution-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { FleetDataCopySearchService } from '../../fleet-data-copy-search.service';

interface FleetDataCopy {
  sourceAssetCode?: string;
  maintenancePlan?: boolean;
  lifeLimits?: boolean;
  usage?: boolean;
  attributes?: boolean;
  evolutionAssetCode?: string;
  applicationDate?: Date;
  isPartiallyApplied?: boolean;
}

interface AssetsTable {
  equipmentCode?: string;
  pnCode?: string;
  sn?: string;
  equipmentDesignation?: string;
  ownerCustomerCode?: string;
  report?: boolean;
  copyOutput?: FleetDataCopyOutputDTO;
  reportMessage?: string;
}

@Component({
  selector: 'aw-fleet-data-copy-popup',
  templateUrl: './fleet-data-copy-popup.component.html'
})
export class FleetDataCopyPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public assets: BidoEquipmentDTO[];
  public types: SelectItem[];
  public selectedType: string;
  public dataToCopy: FleetDataCopy;
  public resultsTableCols: TableColumn[];
  public resultsTable: AssetsTable[];
  public selectedAssets: AssetsTable[];
  public showReport: boolean;
  public showReportPopup: boolean;
  public showAssetPopup: boolean;
  public showEvolutionPopup: boolean;
  public reportText: string;
  public selectedEvolutionDTO: BireEvolutionDTO;
  public maxDate: Date;

  public constructor(
    public sessionService: SessionService,
    public messageService: MessageService,
    private readonly fleetDataCopySearchService: FleetDataCopySearchService
  ) {
    super(ComponentOpenMode.Read, 'FleetDataCopyPopupComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.types = [{ label: 'Asset', value: 'asset' }, { label: 'Evolution', value: 'evolution' }];
    this.selectedType = 'asset';
    this.dataToCopy = {};
    this.resultsTableCols = [
      { field: 'pnCode', alignment: 'left' },
      { field: 'sn', alignment: 'left' },
      { field: 'equipmentDesignation', alignment: 'left' },
      { field: 'ownerCustomerCode', alignment: 'left' }
    ];
    this.selectedAssets = [];
    this.showReport = false;
    this.showAssetPopup = false;
    this.showReportPopup = false;
    this.showEvolutionPopup = false;
    this.reportText = '';
    this.maxDate = new Date();
  }

  public ngOnInit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);

    if (!this.assets) {
      this.resultsTable = [];
    } else {
      this.resultsTable = this.assets.map((asset) => {
        const obj: AssetsTable = {
          equipmentCode: asset.equipmentCode,
          equipmentDesignation: asset.equipmentDesignation,
          ownerCustomerCode: asset.ownerCustomerCode,
          pnCode: asset.pnCode,
          sn: asset.sn
        };

        return obj;
      });
    }
  }

  public validate(): void {
    const list: string[] = [];
    this.assets.forEach((asset) => {
      if (!!asset.equipmentCode) {
        list.push(asset.equipmentCode);
      } else {
        super.throwUnboundLocalError('validate', 'asset.equipmentCode');
      }
    });
    const fleetDataCopyInputDTO: FleetDataCopyInputDTO = {
      assetFleetDataCopyInputDTO: {
        sourceAssetCode: this.dataToCopy.sourceAssetCode,
        targetAssetCodeList: list,
        fleetDTOCopyOptions: {
          lifeLimitsCopy: this.dataToCopy.lifeLimits,
          usageCopy: this.dataToCopy.usage,
          attributesCopy: this.dataToCopy.attributes,
          maintenancePlanCopy: this.dataToCopy.maintenancePlan,
          counterCodeList: []
        }
      },
      evolutionFleetDataCopyInputDTO: {
        dateApply: this.dataToCopy.applicationDate,
        isPartiallyApplied: this.dataToCopy.isPartiallyApplied,
        equipmentCodeList: list,
        bidoEvolutionDTO: this.selectedEvolutionDTO
      },
      isEvolutionSelected: this.selectedType === 'evolution',
      withCounters: false
    };

    this.fleetDataCopySearchService.copyFleetData(fleetDataCopyInputDTO).subscribe((results) => {
      if (results && results.length > 0) {
        this.showReport = true;
        this.resultsTableCols.splice(0, 0, { field: 'report', alignment: 'left' });
        this.resultsTable.forEach((asset) => {
          const objCopiedData = results.filter((obj) => {
            return obj.targetCode === asset.equipmentCode;
          })[0];
          asset.report = objCopiedData && objCopiedData.isCopied;
          asset.copyOutput = objCopiedData;
          asset.reportMessage = objCopiedData && objCopiedData.exceptionMessage;
          this.reportText = asset.copyOutput
            ? asset.copyOutput.reportText !== null && asset.copyOutput.reportText !== ''
              ? `${this.reportText}\n${asset.copyOutput.reportText}`
              : ''
            : '';
        });
        this.messageService.showSuccessMessage(this.getTranslateKey('successMessage'));
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('errorMessage'));
      }
    });
  }

  public report(): void {
    this.showReportPopup = this.reportText !== null && this.reportText !== '';
  }

  public openAssetPopup(): void {
    this.showAssetPopup = true;
  }

  public setSelectedAsset(event: BidoEquipmentOVSOutputDTO): void {
    this.dataToCopy.sourceAssetCode = event.equipmentCode;
  }

  public openEvolutionPopup(): void {
    this.showEvolutionPopup = true;
  }

  public setSelectedCode(event: BireEvolutionDTO): void {
    this.dataToCopy.evolutionAssetCode = event.evolutionNumber;
    this.selectedEvolutionDTO = event;
  }

  public setType(): void {
    this.dataToCopy = {};
  }
}
