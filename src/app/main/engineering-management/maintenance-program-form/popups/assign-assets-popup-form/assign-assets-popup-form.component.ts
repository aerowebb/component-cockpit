import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { TableDataSource } from '../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { AssetAssignmentMPSaveInput } from '../../../../../shared/types/api-input-types/airworthiness-management/asset-assignment-mp-save-input.interface';
import { MaintenanceProgramReports } from '../../../../../shared/types/api-output-types/task-business/maintenance-program-reports.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireMaintenancePlanDTO } from '../../../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { MaintenancePlanDTO } from '../../../../../shared/types/api-types/maintenance-plan-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';
import { MaintenanceProgramFormService } from '../../maintenance-program-form.service';

interface AssignTableRow {
  asset?: string;
  familyVariantCode?: string;
  function?: string;
  designation?: string;
  status?: string;
  isAssigned?: boolean;
  bidoEquipmentDTO?: BidoEquipmentDTO;
  maintenanceProgram?: string;
}

@Component({
  selector: 'aw-assign-assets-popup-form',
  templateUrl: './assign-assets-popup-form.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class AssignAssetsPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public get display() {
    return this.displayValue;
  }

  public set display(displayValue) {
    this.displayValue = displayValue;
    this.displayChange.emit(this.displayValue);
  }

  @Input()
  public isReadOnlyForm: boolean;
  @Output()
  public displayChange: EventEmitter<boolean>;
  @Input('component-data')
  public componentData: PopupEntry<BireMaintenancePlanDTO>;
  @Output()
  public onAssociated: EventEmitter<boolean>;

  public displayValue: boolean;
  public isEditable: boolean;
  public assetsTableDataSource: TableDataSource<AssignTableRow>;
  public bireMaintenancePlanDTO: BireMaintenancePlanDTO;
  public maintenancePlanDTOsAssignedList: MaintenancePlanDTO[];
  public maintenancePlanDTOsUnAssignedList: MaintenancePlanDTO[];
  public reportText: MaintenanceProgramReports;
  public showReportPopup: boolean;
  public isLoading: boolean;
  public isValidating: boolean;

  public constructor(
    public messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService,
    public maintenanceProgramFormService: MaintenanceProgramFormService
  ) {
    super(ComponentOpenMode.Read, 'AssignAssetsPopupFormComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onAssociated = new EventEmitter<boolean>();
    this.showReportPopup = false;
    this.maintenancePlanDTOsAssignedList = [];
    this.maintenancePlanDTOsUnAssignedList = [];
    this.initAssetsTableDataSource();
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.componentId && !!this.componentData.object) {
      this.bireMaintenancePlanDTO = this.componentData.object;
      this.loadAssets();
    }
  }

  public getTypeName(): string {
    return 'AssignAssetsPopupFormComponent';
  }

  public associate(): void {
    this.isValidating = true;
    this.maintenancePlanDTOsAssignedList = [];
    this.maintenancePlanDTOsUnAssignedList = [];
    this.assetsTableDataSource.dataSrc.forEach((element) => {
      const maintenancePlan: MaintenancePlanDTO = {
        planCode: element.maintenanceProgram,
        equipmentCode: element.bidoEquipmentDTO && element.bidoEquipmentDTO.equipmentCode
      };

      const selectedAsset = this.assetsTableDataSource.dataSelection.filter((asset) => {
        return asset.asset === element.asset && asset.familyVariantCode === element.familyVariantCode;
      });
      // if asset was assigned previously and unassigned
      if (element.isAssigned) {
        if (selectedAsset.length === 0) {
          this.maintenancePlanDTOsUnAssignedList.push(maintenancePlan);
        }
      } else {
        if (selectedAsset.length > 0) {
          this.maintenancePlanDTOsAssignedList.push(maintenancePlan);
        }
      }
    });
    const inputObj: AssetAssignmentMPSaveInput = {
      planCode: this.bireMaintenancePlanDTO.planCode,
      maintenancePlanDTOsAssignedList: this.maintenancePlanDTOsAssignedList,
      maintenancePlanDTOsUnAssignedList: this.maintenancePlanDTOsUnAssignedList
    };
    this.maintenanceProgramFormService
      .saveAssetAssignedToMaintenancePlan(inputObj)
      .pipe(
        finalize(() => {
          this.isValidating = false;
        })
      )
      .subscribe((result) => {
        this.loadAssets();
        this.reportText = result;
        this.showReportPopup = true;
        this.onAssociated.emit(true);
      });
  }

  public cancel(): void {
    this.display = false;
  }

  private loadAssets(): void {
    this.isLoading = true;
    this.maintenanceProgramFormService
      .findBidoEquipmentsEligibleToMaintenancePlan(this.bireMaintenancePlanDTO)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((results) => {
        this.isLoading = false;
        const assetsTable: AssignTableRow[] = results.map((element) => ({
          asset: element.assetText,
          bidoEquipmentDTO: element.bidoEquipmentDTO,
          designation: element.bidoEquipmentDTO && element.bidoEquipmentDTO.equipmentDesignation,
          familyVariantCode: element.bidoEquipmentDTO && element.bidoEquipmentDTO.familyVariantCode,
          function: element.bidoEquipmentDTO && element.bidoEquipmentDTO.equipmentFunction,
          isAssigned: element.isAssigned,
          maintenanceProgram: element.planCode,
          status: element.bidoEquipmentDTO && element.bidoEquipmentDTO.operationalStatus
        }));
        assetsTable.sort((a: AssignTableRow, b: AssignTableRow) => {
          if (a.isAssigned === b.isAssigned) {
            if (a.asset === b.asset) {
              return 0;
            } else if (a.asset) {
              return b.asset ? a.asset.localeCompare(b.asset) : 1;
            } else {
              return -1;
            }
          } else {
            return a.isAssigned ? -1 : 1;
          }
        });

        this.assetsTableDataSource.setData(assetsTable);
        this.assetsTableDataSource.dataSelection = this.assetsTableDataSource.dataSrc.filter((element) => {
          element._checked = element.isAssigned ? true : false;

          return element.isAssigned;
        });
      });
  }

  private initAssetsTableDataSource(): void {
    this.assetsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'asset',
          translateKey: this.getTranslateKey('asset'),
          width: '30%'
        },
        {
          field: 'familyVariantCode',
          translateKey: this.getTranslateKey('familyVariantCode'),
          width: '10%'
        },
        {
          field: 'designation',
          translateKey: this.getTranslateKey('designation'),
          width: '15%'
        },
        {
          field: 'function',
          translateKey: this.getTranslateKey('function'),
          width: '10%'
        },
        {
          field: 'status',
          translateKey: this.getTranslateKey('status'),
          width: '15%'
        },
        {
          field: 'maintenanceProgram',
          translateKey: this.getTranslateKey('maintenanceProgram'),
          width: '20%'
        }
      ],
      data: []
    });
  }
}
