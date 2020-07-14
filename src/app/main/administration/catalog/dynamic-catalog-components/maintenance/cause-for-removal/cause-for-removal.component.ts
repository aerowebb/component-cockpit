import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireReturnReasonDTO } from '../../../../../../shared/types/api-output-types/administration-catalog/bire-return-reason-dto.interface';
import { BireReturnReasonDTOId } from '../../../../../../shared/types/api-types/bire-return-reason-dto-id.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { CauseForRemovalService } from './cause-for-removal.service';

@Component({
  selector: 'aw-cause-for-removal',
  templateUrl: './cause-for-removal.component.html'
})
export class CauseForRemovalComponent extends DynamicCatalog implements OnInit {
  public returnReasonTableDataSource: TableDataSource<BireReturnReasonDTO>;
  public selectedReasonTableDialogData: BireReturnReasonDTO;

  public reasonRemovalDialogOpenMode: ComponentOpenMode;
  public showReasonRemovalDialog: boolean;

  private bireReturnReasonAddedList: BireReturnReasonDTO[];
  private bireReturnReasonUpdatedList: BireReturnReasonDTO[];

  private readonly causeTypeList: SelectItem[];
  private selectedReasonCodeToEdit: string;

  public constructor(
    private readonly causeForRemovalService: CauseForRemovalService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);

    this.reasonRemovalDialogOpenMode = ComponentOpenMode.Read;
    this.returnReasonTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'returnReasonCode',
          translateKey: this.getTranslateKey('returnReasonCode')
        },
        {
          field: 'returnReasonName',
          translateKey: this.getTranslateKey('returnReasonName')
        },
        {
          field: 'returnReasonDescription',
          translateKey: this.getTranslateKey('returnReasonDescription')
        },
        {
          field: 'causeType',
          translateKey: this.getTranslateKey('causeType')
        }
      ],
      data: []
    });
    // Cause Dropdown
    this.causeTypeList = [
      { label: '', value: undefined },
      { label: 'General', value: AWPropertiesConstants.CAUSE_TYPE_GENERAL_KEY },
      { label: 'Systematic ', value: AWPropertiesConstants.CAUSE_TYPE_SYSTEMATIC_KEY },
      { label: 'Temporary Directive', value: AWPropertiesConstants.CAUSE_TYPE_TEMPORARY_DIRECTIVE_KEY }
    ];

    this.showReasonRemovalDialog = false;
    this.bireReturnReasonUpdatedList = [];
    this.bireReturnReasonAddedList = [];
  }

  public ngOnInit() {
    this.loadReturnReasonTableData();
  }

  public getComponentName(): string {
    return 'CauseForRemovalComponent';
  }

  public refresh() {
    this.bireReturnReasonAddedList = [];
    this.bireReturnReasonUpdatedList = [];
    this.returnReasonTableDataSource.dataSelection = [];
    this.loadReturnReasonTableData(true);
  }

  public save() {
    if (this.isSaveValid(this.bireReturnReasonAddedList, this.bireReturnReasonUpdatedList)) {
      const saveCatalogInput: SaveCatalogInput = {
        bireReturnReasonAddedList: this.bireReturnReasonAddedList,
        bireReturnReasonUpdatedList: this.bireReturnReasonUpdatedList
      };

      this.causeForRemovalService.saveCatalog(saveCatalogInput).subscribe(() => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));

        // Clearing Added and updated List
        this.bireReturnReasonAddedList = [];
        this.bireReturnReasonUpdatedList = [];
      });
    }
  }

  private causeList(filterType, val): string {
    let value = '';
    if (filterType === 'label') {
      this.causeTypeList.filter((ev) => {
        if (!!ev.value && !!ev.label && ev.value === val) {
          value = ev.value === val ? ev.label : '';
        }
      });
    } else {
      this.causeTypeList.filter((ev) => {
        if (ev.label === val) {
          value = ev.label === val ? ev.value : '';
        }
      });
    }

    return value;
  }

  /**
   * Loading reason removal table data
   */
  private loadReturnReasonTableData(isFromRefresh?: boolean) {
    this.returnReasonTableDataSource.setData([]);
    const flag = isFromRefresh ? true : false;
    this.causeForRemovalService.findBireReturnReasonsByCriteria().subscribe((results) => {
      results.forEach((res) => {
        res.causeType = this.causeList('label', res.causeType);
      });

      this.returnReasonTableDataSource.addData(results);

      if (!flag) {
        // Adding added entry in table
        if (this.bireReturnReasonAddedList) {
          this.bireReturnReasonAddedList.forEach((entry) => {
            this.returnReasonTableDataSource.addData([entry]);
          });
        }

        // TO reenter modified entry in table
        if (this.bireReturnReasonUpdatedList) {
          this.returnReasonTableDataSource.dataSrc.forEach((res) => {
            this.bireReturnReasonUpdatedList.forEach((entry) => {
              if (res.returnReasonCode === entry.returnReasonCode) {
                this.returnReasonTableDataSource.replaceData(res, entry);
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
  public addReturnReason() {
    this.selectedReasonTableDialogData = {};
    this.reasonRemovalDialogOpenMode = ComponentOpenMode.Create;
    this.showReasonRemovalDialog = true;
  }

  /**
   * On add table row
   */
  public onAddReasonReturn(ev) {
    const event = { ...ev };
    event.causeType = this.causeList('label', event.causeType);
    this.returnReasonTableDataSource.addData([event]);
    this.bireReturnReasonAddedList.push(ev);
  }

  /**
   * Delete selected reasons
   */
  public deleteSelectedReturnReason() {
    const partialMessageKey =
      this.returnReasonTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedReasons'
        : 'confirmDeleteSelectedReason';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const bireReturnReasonDTOId: BireReturnReasonDTOId[] = [];
        this.returnReasonTableDataSource.dataSelection.forEach((res) => {
          if (!!res.returnReasonCode) {
            bireReturnReasonDTOId.push({ returnReasonCode: res.returnReasonCode });
          } else {
            super.throwUnboundLocalError('deleteSelectedReturnReason', 'res.returnReasonCode');
          }

          const inAddedList = this.bireReturnReasonAddedList.filter((element, index) => {
            return res.returnReasonCode === element.returnReasonCode;
          });

          // removing from added
          if (inAddedList) {
            let foundAddedIndex = -1;
            this.bireReturnReasonAddedList.forEach((entry, index) => {
              if (entry.returnReasonCode === res.returnReasonCode) {
                foundAddedIndex = index;
              }
            });
            this.bireReturnReasonAddedList.splice(foundAddedIndex, 1);
          }

          const inUpdatedList = this.bireReturnReasonUpdatedList.filter((element, index) => {
            return res.returnReasonCode === element.returnReasonCode;
          });

          // removing from updated
          if (inUpdatedList) {
            let foundUpdatedIndex = -1;
            this.bireReturnReasonUpdatedList.forEach((entry, index) => {
              if (entry.returnReasonCode === res.returnReasonCode) {
                foundUpdatedIndex = index;
              }
            });
            this.bireReturnReasonUpdatedList.splice(foundUpdatedIndex, 1);
          }

          // Removing from table
          this.returnReasonTableDataSource.deleteDataSelection();
        });

        this.causeForRemovalService.removeBireReturnReasons(bireReturnReasonDTOId).subscribe((results) => {
          this.returnReasonTableDataSource.dataSelection = [];
        });
      }
    });
  }

  /**
   * Edit Selected Reason
   */
  public editSelectedReturnReason() {
    this.selectedReasonCodeToEdit = '';
    const cloneSelection = [this.returnReasonTableDataSource.dataSelection[0]];
    const causeTypeCopy = this.causeList('value', cloneSelection[0].causeType);
    this.selectedReasonTableDialogData = { ...cloneSelection[0] };
    this.selectedReasonTableDialogData.causeType = causeTypeCopy;
    this.reasonRemovalDialogOpenMode = ComponentOpenMode.Write;
    this.showReasonRemovalDialog = true;
    const code = cloneSelection[0].returnReasonCode;
    if (!!code) {
      this.selectedReasonCodeToEdit = code;
    } else {
      super.throwUnboundLocalError('editSelectedReturnReason', 'code');
    }
  }

  /**
   * On update table row
   */
  public updateReturnReason(ev: BireReturnReasonDTO) {
    this.returnReasonTableDataSource.dataSrc.forEach((res) => {
      if (res.returnReasonCode === this.selectedReasonCodeToEdit) {
        const evt = { ...ev };
        evt.causeType = this.causeList('label', evt.causeType);
        this.returnReasonTableDataSource.replaceData(res, evt);
      }
    });
    // CHeck if updated entry was a new entry or not
    let isNew = false;
    this.bireReturnReasonAddedList.forEach((res, index) => {
      if (res.returnReasonCode === ev.returnReasonCode) {
        isNew = true;
        this.bireReturnReasonAddedList.splice(index, 1);
      }
    });

    if (!isNew) {
      this.bireReturnReasonUpdatedList.forEach((res, index) => {
        if (res.returnReasonCode === ev.returnReasonCode) {
          this.bireReturnReasonUpdatedList.splice(index, 1);
        }
      });
      this.bireReturnReasonUpdatedList.push(ev);
    } else {
      this.bireReturnReasonAddedList.push(ev);
    }
    this.returnReasonTableDataSource.dataSelection = [];
  }

  private isSaveValid(dtoAdd, dtoUpdate): boolean {
    // if (dtoAdd.length === 0 && dtoUpdate.length === 0) {
    //   return false;
    // }

    return true;
  }
}
