import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireMaintenanceEnvironmentDTO } from '../../../../../../shared/types/api-output-types/administration-catalog/bire-maintenance-environment-dto.interface';
import { BireMaintenanceEnvironmentDTOId } from '../../../../../../shared/types/api-types/bire-maintenance-environment-dto-id.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { MaintenanceTypeService } from './maintenance-type.service';

@Component({
  selector: 'aw-maintenance-type',
  templateUrl: './maintenance-type.component.html'
})
export class MaintenanceTypeComponent extends DynamicCatalog implements OnInit {
  public maintenanceTypeTableDataSource: TableDataSource<BireMaintenanceEnvironmentDTO>;

  public selectedMaintenanceTypeTableDialogData: BireMaintenanceEnvironmentDTO;

  public maintenanceTypeDialogOpenMode: ComponentOpenMode;
  public showMaintenanceTypeDialog: boolean;

  private bireMaintenanceEnvironmentDTOAddedList: BireMaintenanceEnvironmentDTO[];
  private bireMaintenanceEnvironmentDTOUpdatedList: BireMaintenanceEnvironmentDTO[];

  private selectedMaintenanceCodeEdit: string | undefined;

  public constructor(
    private readonly maintenanceTypeService: MaintenanceTypeService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);

    this.maintenanceTypeDialogOpenMode = ComponentOpenMode.Read;
    this.maintenanceTypeTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'environmentCode',
          translateKey: this.getTranslateKey('environmentCode')
        },
        {
          field: 'environmentType',
          translateKey: this.getTranslateKey('environmentType')
        }
      ],
      data: []
    });
    this.showMaintenanceTypeDialog = false;
    this.bireMaintenanceEnvironmentDTOUpdatedList = [];
    this.bireMaintenanceEnvironmentDTOAddedList = [];
  }

  public ngOnInit() {
    this.loadMaintenanceTypeTableData();
  }

  public getComponentName(): string {
    return 'MaintenanceTypeComponent';
  }

  /**
   * Load Maintenance Type table
   */
  private loadMaintenanceTypeTableData(isfromRefresh?: boolean) {
    const flag = isfromRefresh ? true : false;
    this.maintenanceTypeTableDataSource.setData([]);
    this.maintenanceTypeService.findAllBireMaintenanceEnvironments().subscribe((results) => {
      this.maintenanceTypeTableDataSource.addData(results.list);
      if (!flag) {
        if (this.bireMaintenanceEnvironmentDTOAddedList) {
          this.bireMaintenanceEnvironmentDTOAddedList.forEach((entry) => {
            this.maintenanceTypeTableDataSource.addData([entry]);
          });
        }

        // TO reenter modified entry in table
        if (this.bireMaintenanceEnvironmentDTOUpdatedList) {
          this.maintenanceTypeTableDataSource.dataSrc.forEach((res) => {
            this.bireMaintenanceEnvironmentDTOUpdatedList.forEach((entry) => {
              if (res.environmentCode === entry.environmentCode) {
                this.maintenanceTypeTableDataSource.replaceData(res, entry);
              }
            });
          });
        }
      }
    });
  }

  /**
   * On Add button click
   */
  public addMaintenance() {
    this.selectedMaintenanceTypeTableDialogData = {};
    this.maintenanceTypeDialogOpenMode = ComponentOpenMode.Create;
    this.showMaintenanceTypeDialog = true;
  }

  /**
   * On add table row
   */
  public onAddMaintenance(ev) {
    this.maintenanceTypeTableDataSource.addData([ev]);
    this.bireMaintenanceEnvironmentDTOAddedList.push(ev);
  }

  /**
   * Delete selected Maintenance
   */
  public deleteMaintenance() {
    const partialMessageKey =
      this.maintenanceTypeTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedMaintenances'
        : 'confirmDeleteSelectedMaintenance';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const bireMaintenanceEnvironmentDTOId: BireMaintenanceEnvironmentDTOId[] = [];
        this.maintenanceTypeTableDataSource.dataSelection.forEach((res) => {
          if (!!res.environmentCode) {
            bireMaintenanceEnvironmentDTOId.push({ environmentCode: res.environmentCode });
          } else {
            super.throwUnboundLocalError('deleteMaintenance', 'res.environmentCode');
          }
        });

        this.maintenanceTypeService
          .removeBireMaintenanceEnvironment(bireMaintenanceEnvironmentDTOId)
          .subscribe((_results) => {
            this.refresh();
          });
      }
    });
  }

  /**
   * Edit Selected Maintenance
   */
  public editMaintenance() {
    this.selectedMaintenanceCodeEdit = undefined;
    this.selectedMaintenanceTypeTableDialogData = this.maintenanceTypeTableDataSource.dataSelection[0];
    this.maintenanceTypeDialogOpenMode = ComponentOpenMode.Write;
    this.showMaintenanceTypeDialog = true;
    this.selectedMaintenanceCodeEdit = this.maintenanceTypeTableDataSource.dataSelection[0].environmentCode;
  }

  /**
   * On update table row
   */
  public onUpdateMaintenance(ev: BireMaintenanceEnvironmentDTO) {
    this.maintenanceTypeTableDataSource.dataSrc.forEach((res, index) => {
      if (res.environmentCode === this.selectedMaintenanceCodeEdit) {
        this.maintenanceTypeTableDataSource.replaceData(res, ev);
      }
    });
    this.maintenanceTypeTableDataSource.setData(this.maintenanceTypeTableDataSource.dataSrc);
    // Check if new entry is edited
    let isNew = false;
    this.bireMaintenanceEnvironmentDTOAddedList.forEach((res, index) => {
      if (res.environmentCode === ev.environmentCode) {
        isNew = true;
        this.bireMaintenanceEnvironmentDTOAddedList.splice(index, 1);
      }
    });

    // Check if edited item is again edited
    if (!isNew) {
      this.bireMaintenanceEnvironmentDTOUpdatedList.forEach((res, index) => {
        if (res.environmentCode === ev.environmentCode) {
          this.bireMaintenanceEnvironmentDTOUpdatedList.splice(index, 1);
        }
      });
      this.bireMaintenanceEnvironmentDTOUpdatedList.push(ev);
    } else {
      this.bireMaintenanceEnvironmentDTOAddedList.push(ev);
    }
    this.maintenanceTypeTableDataSource.dataSelection = [];
  }

  /**
   * Saving Maintenance Data
   */
  public save() {
    if (this.isSaveValid(this.bireMaintenanceEnvironmentDTOAddedList, this.bireMaintenanceEnvironmentDTOUpdatedList)) {
      const saveCatalogInput: SaveCatalogInput = {
        bireMaintenanceEnvironmentDTOAddedList: this.bireMaintenanceEnvironmentDTOAddedList,
        bireMaintenanceEnvironmentDTOUpdatedList: this.bireMaintenanceEnvironmentDTOUpdatedList
      };

      this.maintenanceTypeService.saveCatalog(saveCatalogInput).subscribe(
        () => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));
          this.refresh();
        },
        () => {
          this.messageService.showSuccessMessage(this.getTranslateKey('errorOnSaveMaintenanceType'));
        }
      );
    }
  }

  private isSaveValid(dtoAdd, dtoUpdate): boolean {
    return true;
  }

  /**
   * Refresh the table data
   */
  public refresh() {
    this.maintenanceTypeTableDataSource.dataSelection = [];
    this.bireMaintenanceEnvironmentDTOAddedList = [];
    this.bireMaintenanceEnvironmentDTOUpdatedList = [];
    this.loadMaintenanceTypeTableData(true);
  }
}
