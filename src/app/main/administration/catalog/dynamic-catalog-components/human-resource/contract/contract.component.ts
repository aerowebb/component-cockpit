import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidtContractDTO } from '../../../../../../shared/types/api-types/bidt-contract-dto.interface';
import { SelectItemUtils } from '../../../../../../shared/utils/select-item-utils';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { ContractService } from './contract.service';

@Component({
  selector: 'aw-contract',
  templateUrl: './contract.component.html'
})
export class ContractComponent extends DynamicCatalog implements OnInit {
  public contractTableDataSource: TableDataSource<BidtContractDTO>;
  public selectedContractDialogData: BidtContractDTO;

  public contractDialogOpenMode: ComponentOpenMode;
  public showContractDialog: boolean;

  private bidtContractDTOAddOrUpdateList: BidtContractDTO[];

  private selectedMaintenanceCodeEdit: string | undefined;
  private contractType: SelectItem[];

  public constructor(
    private readonly contractService: ContractService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    private readonly confirmationService: ConfirmationService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);
    this.contractDialogOpenMode = ComponentOpenMode.Read;

    // Table column
    this.contractTableDataSource = new TableDataSource({
      columns: [
        { field: 'contractName', translateKey: this.getTranslateKey('contractName') },
        { field: 'contractType', translateKey: this.getTranslateKey('contractType') },
        {
          field: 'contractDescription',
          translateKey: this.getTranslateKey('contractDescription')
        }
      ],
      data: []
    });
    this.showContractDialog = false;
    this.bidtContractDTOAddOrUpdateList = [];
  }

  public ngOnInit() {
    this.loadContractTableData();
    this.filldropdown();
  }

  public getComponentName(): string {
    return 'ContractComponent';
  }

  /**
   * Render dropdown
   */
  private filldropdown(): void {
    this.propertiesService.getValue('getHrContractTypeMap').subscribe((results) => {
      this.contractType = !!results ? SelectItemUtils.fromLabelValues(results) : [];
      this.contractType.unshift({
        label: '',
        value: undefined
      });
    });
  }

  /**
   * Load Contract table
   */
  private loadContractTableData() {
    this.contractTableDataSource.setData([]);
    this.contractService.findByCriteriaContractList().subscribe((results) => {
      this.contractTableDataSource.addData(results.list);
      // Load added entries if any on refresh
      if (this.bidtContractDTOAddOrUpdateList) {
        this.bidtContractDTOAddOrUpdateList.forEach((entry) => {
          // If ID not avaialable, it signifies its a new entry
          if (!entry.id) {
            this.contractTableDataSource.addData([entry]);
          }
        });
      }

      // TO reenter modified entry in table
      if (this.bidtContractDTOAddOrUpdateList) {
        this.contractTableDataSource.dataSrc.forEach((res) => {
          this.bidtContractDTOAddOrUpdateList.forEach((entry) => {
            if (entry.id && res.contractName === entry.contractName) {
              this.contractTableDataSource.replaceData(res, entry);
            }
          });
        });
      }
    });
  }

  /**
   * On Add button click
   */
  public addContract() {
    this.selectedContractDialogData = {};
    this.contractDialogOpenMode = ComponentOpenMode.Create;
    this.showContractDialog = true;
  }

  /**
   * On add table row
   */
  public onAddContract(ev: BidtContractDTO) {
    const tableObj = { ...ev };
    tableObj.contractType = this.contractList('label', tableObj.contractType);
    this.contractTableDataSource.addData([tableObj]);
    this.bidtContractDTOAddOrUpdateList.push(ev);
  }

  /**
   * Delete selected Maintenance
   */
  public deleteContract() {
    const partialMessageKey =
      this.contractTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedContracts'
        : 'confirmDeleteSelectedContract';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const idArray: Number[] = [];
        this.contractTableDataSource.dataSelection.forEach((res) => {
          if (res.id !== null && res.id !== undefined) {
            idArray.push(res.id);
            this.contractService.deleteContract(idArray).subscribe((_results) => {
              // Removing entry from added list if added
              this.bidtContractDTOAddOrUpdateList.forEach((entry, index) => {
                this.contractTableDataSource.dataSelection.forEach((en) => {
                  if (entry.contractName === en.contractName) {
                    this.bidtContractDTOAddOrUpdateList.splice(index, 1);
                  }
                });
              });
              this.refresh();
            });
          } else {
            this.bidtContractDTOAddOrUpdateList = this.bidtContractDTOAddOrUpdateList.filter(
              (contract) => contract.contractName !== res.contractName
            );
            this.contractTableDataSource.deleteDataSelection();
          }
        });
      }
    });
  }

  /**
   * Edit Selected Contract
   */
  public editContract() {
    this.selectedMaintenanceCodeEdit = undefined;
    this.contractDialogOpenMode = ComponentOpenMode.Write;
    const cloneObj = { ...this.contractTableDataSource.dataSelection[0] };
    this.selectedContractDialogData = cloneObj;
    this.contractType.filter((res) => {
      if (res.label === cloneObj.contractType) {
        cloneObj.contractType = res.value;
      }
    });
    this.showContractDialog = true;
    this.selectedMaintenanceCodeEdit = cloneObj.contractName;
  }

  private contractList(filterType, val): string {
    let value = '';
    if (filterType === 'label') {
      this.contractType.filter((ev) => {
        if (!!ev.value && !!ev.label && ev.value === val) {
          value = ev.value === val ? ev.label : '';
        }
      });
    } else {
      this.contractType.filter((ev) => {
        if (ev.label === val) {
          value = ev.label === val ? ev.value : '';
        }
      });
    }

    return value;
  }

  /**
   * On update table row
   */
  public onUpdateContract(ev: BidtContractDTO) {
    this.contractTableDataSource.dataSrc.forEach((res) => {
      if (res.contractName === this.selectedMaintenanceCodeEdit) {
        const tableObj = { ...ev };
        tableObj.contractType = this.contractList('label', tableObj.contractType);
        this.contractTableDataSource.replaceData(res, tableObj);
      }
    });

    this.bidtContractDTOAddOrUpdateList.forEach((res, index) => {
      if (res.contractName === ev.contractName) {
        this.bidtContractDTOAddOrUpdateList.splice(index, 1);
      }
    });
    this.bidtContractDTOAddOrUpdateList.push(ev);
    this.contractTableDataSource.dataSelection = [];
  }

  /**
   * Saving Maintenance Data
   */
  public save() {
    if (this.isSaveValid(this.bidtContractDTOAddOrUpdateList)) {
      const saveCatalogInput: SaveCatalogInput = {
        bidtContractDTOAddOrUpdateList: this.bidtContractDTOAddOrUpdateList
      };

      this.contractService.saveCatalog(saveCatalogInput).subscribe(() => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));

        // Clearing Added and updated List
        this.bidtContractDTOAddOrUpdateList = [];
        this.contractTableDataSource.dataSelection = [];
      });
    }
  }

  private isSaveValid(dtoAdd): boolean {
    // if (dtoAdd.length === 0) {
    //   return false;
    // }

    return true;
  }

  /**
   * Refresh the table data
   */
  public refresh() {
    this.bidtContractDTOAddOrUpdateList = [];
    this.loadContractTableData();
  }
}
