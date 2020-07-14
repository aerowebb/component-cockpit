import { Component, OnInit } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireTaskGroupDTOId } from '../../../../../../shared/types/api-types/bire-task-group-dto-id.interface';
import { BireTaskGroupDTO } from '../../../../../../shared/types/api-types/bire-task-group-dto.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { TaskGroupService } from './task-group.service';

@Component({
  selector: 'aw-task-group',
  templateUrl: './task-group.component.html'
})
export class TaskGroupComponent extends DynamicCatalog implements OnInit {
  public taskGroupTableDataSource: TableDataSource<BireTaskGroupDTO>;

  public selectedTaskGroupTableDialogData: BireTaskGroupDTO;

  public taskGroupDialogOpenMode: ComponentOpenMode;
  public showTaskGroupDialog: boolean;

  private bireTaskGroupAddedList: BireTaskGroupDTO[];
  private bireTaskGroupUpdatedList: BireTaskGroupDTO[];

  private selectedTaskCodeToEdit: string;

  public constructor(
    private readonly taskGroupService: TaskGroupService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);

    this.taskGroupDialogOpenMode = ComponentOpenMode.Read;

    this.taskGroupTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'groupCode', translateKey: this.getTranslateKey('groupCode'), alignment: ColumnAlignment.CENTER },
        {
          field: 'groupName',
          translateKey: this.getTranslateKey('groupName'),
          alignment: ColumnAlignment.CENTER
        }
      ],
      data: []
    });

    this.showTaskGroupDialog = false;
    this.bireTaskGroupUpdatedList = [];
    this.bireTaskGroupAddedList = [];
  }

  public ngOnInit() {
    this.loadTaskGroupTableata();
  }

  public getComponentName(): string {
    return 'TaskGroupComponent';
  }

  /**
   * Loading Task table data
   */
  private loadTaskGroupTableata(isfromRefresh?: boolean) {
    const flag = isfromRefresh ? true : false;
    this.taskGroupTableDataSource.setData([]);
    this.taskGroupService.findAllBireTaskGroupsCatalog().subscribe((results) => {
      this.taskGroupTableDataSource.addData(results);
      if (!flag) {
        if (this.bireTaskGroupAddedList) {
          this.bireTaskGroupAddedList.forEach((entry) => {
            this.taskGroupTableDataSource.addData([entry]);
          });
        }

        // TO reenter modified entry in table
        if (this.bireTaskGroupUpdatedList) {
          this.taskGroupTableDataSource.dataSrc.forEach((res) => {
            this.bireTaskGroupUpdatedList.forEach((entry) => {
              if (res.groupCode === entry.groupCode) {
                this.taskGroupTableDataSource.replaceData(res, entry);
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
  public addTask() {
    this.selectedTaskGroupTableDialogData = {};
    this.taskGroupDialogOpenMode = ComponentOpenMode.Create;
    this.showTaskGroupDialog = true;
  }

  /**
   * On add table row
   */
  public onAddTask(ev) {
    this.taskGroupTableDataSource.addData([ev]);
    this.bireTaskGroupAddedList.push(ev);
  }

  /**
   * Delete selected Row
   */
  public deleteSelectedTask() {
    const partialMessageKey =
      this.taskGroupTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedTasks'
        : 'confirmDeleteSelectedTasks';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const bireTaskGroupDTOId: BireTaskGroupDTOId[] = [];
        this.taskGroupTableDataSource.dataSelection.forEach((res) => {
          if (!!res.groupCode) {
            bireTaskGroupDTOId.push({ groupCode: res.groupCode });
          } else {
            super.throwUnboundLocalError('deleteSelectedTask', 'res.groupCode');
          }

          const inAddedList = this.bireTaskGroupAddedList.filter((element, index) => {
            return res.groupCode === element.groupCode;
          });

          // removing from added
          if (inAddedList) {
            let foundAddedIndex = -1;
            this.bireTaskGroupAddedList.forEach((entry, index) => {
              if (entry.groupCode === res.groupCode) {
                foundAddedIndex = index;
              }
            });
            this.bireTaskGroupAddedList.splice(foundAddedIndex, 1);
          }

          const inUpdatedList = this.bireTaskGroupUpdatedList.filter((element, index) => {
            return res.groupCode === element.groupCode;
          });

          // removing from updated
          if (inUpdatedList) {
            let foundUpdatedIndex = -1;
            this.bireTaskGroupUpdatedList.forEach((entry, index) => {
              if (entry.groupCode === res.groupCode) {
                foundUpdatedIndex = index;
              }
            });
            this.bireTaskGroupUpdatedList.splice(foundUpdatedIndex, 1);
          }

          // Removing from table
          this.taskGroupTableDataSource.deleteDataSelection();
        });

        this.taskGroupService.removeBireTaskGroup(bireTaskGroupDTOId).subscribe((_results) => {
          this.taskGroupTableDataSource.dataSelection = [];
        });
      }
    });
  }

  /**
   * Edit Selected Row
   */
  public editSelectedTask() {
    this.selectedTaskCodeToEdit = '';
    this.selectedTaskGroupTableDialogData = this.taskGroupTableDataSource.dataSelection[0];
    this.taskGroupDialogOpenMode = ComponentOpenMode.Write;
    this.showTaskGroupDialog = true;
    const selTaskGroupCode = this.taskGroupTableDataSource.dataSelection[0].groupCode;
    if (!!selTaskGroupCode) {
      this.selectedTaskCodeToEdit = selTaskGroupCode;
    } else {
      super.throwUnboundLocalError('editSelectedTask', 'selTaskGroupCode');
    }
  }

  /**
   * On update table row
   */
  public updateTask(ev: BireTaskGroupDTO) {
    this.taskGroupTableDataSource.dataSrc.forEach((res) => {
      if (res.groupCode === this.selectedTaskCodeToEdit) {
        this.taskGroupTableDataSource.replaceData(res, ev);
      }
    });
    this.taskGroupTableDataSource.setData(this.taskGroupTableDataSource.dataSrc);
    let isNew = false;
    this.bireTaskGroupAddedList.forEach((res, index) => {
      if (res.groupCode === ev.groupCode) {
        isNew = true;
        this.bireTaskGroupAddedList.splice(index, 1);
      }
    });

    if (!isNew) {
      this.bireTaskGroupUpdatedList.forEach((res, index) => {
        if (res.groupCode === ev.groupCode) {
          this.bireTaskGroupUpdatedList.splice(index, 1);
        }
      });
      this.bireTaskGroupUpdatedList.push(ev);
    } else {
      this.bireTaskGroupAddedList.push(ev);
    }
    this.taskGroupTableDataSource.dataSelection = [];
  }

  /**
   * Saving Data
   */
  public save() {
    if (this.isSaveValid(this.bireTaskGroupAddedList, this.bireTaskGroupUpdatedList)) {
      const saveCatalogInput: SaveCatalogInput = {
        bireTaskGroupAddedList: this.bireTaskGroupAddedList,
        bireTaskGroupUpdatedList: this.bireTaskGroupUpdatedList
      };

      this.taskGroupService.saveCatalog(saveCatalogInput).subscribe(() => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));

        // Clearing Added and updated List
        this.bireTaskGroupAddedList = [];
        this.bireTaskGroupUpdatedList = [];
      });
    }
  }

  private isSaveValid(dtoAdd, dtoUpdate): boolean {
    // if (dtoAdd.length === 0 && dtoUpdate.length === 0) {
    //   return false;
    // }

    return true;
  }

  public refresh() {
    this.taskGroupTableDataSource.dataSelection = [];
    this.bireTaskGroupAddedList = [];
    this.bireTaskGroupUpdatedList = [];
    this.loadTaskGroupTableata(true);
  }
}
