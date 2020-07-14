import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { ChangeRecordMaintenancePlanCodeDTO } from '../../../../shared/types/api-types/change-record-maintenance-plancode-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';

import { ChangeRecordFormService } from './change-record-form.service';

@Component({
  selector: 'aw-change-record-form',
  templateUrl: './change-record-form.component.html'
})
export class ChangeRecordFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public changeRecordTableDataSource: TableDataSource<ChangeRecordMaintenancePlanCodeDTO>;
  public planCode: string;
  public isLoading: boolean;
  public task: BireTaskDTO;
  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly changeRecordFormService: ChangeRecordFormService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.initChangeRecordTableDataSource();
    this.isLoading = true;
    this.task = {};
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_CHANGE_RECORD_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.init();
  }

  private init() {
    if (!!this.componentData.objectId) {
      this.planCode = this.serializationService.deserialize(this.componentData.objectId);
      this.loadChangeRecordTable();
    }
  }

  private loadChangeRecordTable() {
    const updatedTask: ChangeRecordMaintenancePlanCodeDTO[] = [];
    this.changeRecordFormService.changeRecordByPlanCode(this.planCode).subscribe((result) => {
      if (!!result) {
        result.forEach((element) => {
          const changeRecordRow: ChangeRecordMaintenancePlanCodeDTO = {
            taskDesignation: element.taskDesignation,
            changedReason: element.changedReason,
            taskReference: element.taskReference,
            updatedTask: element.updatedTask,
            nilTask: element.nilTask
          };
          updatedTask.push(changeRecordRow);
        });
        this.changeRecordTableDataSource.setData(updatedTask);
        this.isLoading = false;
      }
    });
  }

  private initChangeRecordTableDataSource(): void {
    this.changeRecordTableDataSource = new TableDataSource({
      enableSelection: false,
      columns: [
        {
          field: 'taskDesignation',
          translateKey: this.getTranslateKey('taskDesignation'),
          width: '35%'
        },
        {
          field: 'changedReason',
          translateKey: this.getTranslateKey('reasons'),
          width: '35%'
        },
        {
          field: 'taskReference',
          translateKey: this.getTranslateKey('taskReference'),
          width: '20%'
        },
        {
          field: 'updatedTask',
          translateKey: this.getTranslateKey('update'),
          width: '5%'
        },
        {
          field: 'nilTask',
          translateKey: this.getTranslateKey('nil'),
          width: '5%'
        }
      ],
      data: []
    });
  }

  public openTaskForm(object: ChangeRecordMaintenancePlanCodeDTO, openMode: ComponentOpenMode): void {
    if (!!object.taskReference) {
      const taskId = object.taskReference.split(':');
      if (!!taskId) {
        this.task = {
          taskCode: taskId[0],
          taskVersion: taskId[1]
        };
      }
    }
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_TASK_FORM,
      objectId: this.serializationService.serialize(this.task),
      openMode
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
