import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';

import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import {
  FunctionObjectConfiguration,
  FunctionObjectConstants
} from '../../../../shared/constants/function-object-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { TodoItemOutput } from '../../../../shared/types/api-output-types/administration-todo-list/todo-item-output.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import {
  LabelValueKey,
  WorkflowManagementFormService
} from '../../workflow-management/form/workflow-management-form.service';

import { TodoListSearchService } from './todo-list-search.service';

interface TodoRow {
  id?: string;
  funcObjectLabel?: string;
  isUrgent?: boolean;
  statusLabel?: string;
  statusDate?: Date;
  statusUser?: string;
  obj: TodoItemOutput;
}

@Component({
  selector: 'aw-todo-list-search',
  templateUrl: './todo-list-search.component.html'
})
export class TodoListSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly TODO_LIST_TABLE_EXPORT_NAME: string = 'TodoList';

  public todoListTableDataSource: TableDataSource<TodoRow>;
  public functionObjectList: LabelValueKey<string>[];

  private functionObjectMap: { [key: string]: FunctionObjectConfiguration };

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public readonly translateService: TranslateService,
    private readonly exportService: ExportService,
    private readonly todoListSearchService: TodoListSearchService,
    private readonly workflowManagementFormService: WorkflowManagementFormService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.initTodoListTableDataSource();
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_TODO_LIST_SEARCH;
  }

  private initTodoListTableDataSource(): void {
    this.todoListTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'isUrgent', translateKey: this.getTranslateKey('isUrgent'), width: '5%' },
        { field: 'funcObjectLabel', translateKey: this.getTranslateKey('funcObjectLabel'), width: '20%' },
        { field: 'id', translateKey: this.getTranslateKey('id'), width: '20%' },
        { field: 'statusLabel', translateKey: this.getTranslateKey('statusLabel'), width: '20%' },
        { field: 'statusDate', translateKey: this.getTranslateKey('statusDate'), width: '15%' },
        { field: 'statusUser', translateKey: this.getTranslateKey('statusUser'), width: '20%' }
      ],
      data: []
    });
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.functionObjectMap = FunctionObjectConstants.getFunctionObjectConfigurationMapByKey();
    this.loadReferences();
  }

  private loadReferences(): void {
    this.workflowManagementFormService.getInternationalizedFuncObject().subscribe((response) => {
      this.functionObjectList = response;
      // Loading todo list only after references loading
      TodoListSearchService.todoList$.pipe(takeUntil(this.unsubscribe)).subscribe((result) => {
        if (result) {
          const todoRowList: TodoRow[] = result.map((item) => ({
            obj: item,
            id: item.functionalIdentifier || '_',
            isUrgent: item.isUrgent,
            funcObjectLabel: this.getLabelByKey(this.functionObjectList, item.funcObject && item.funcObject.objectKey),
            statusLabel: item.statusLabel,
            statusUser: item.statusUser,
            statusDate: item.statusDate
          }));
          this.todoListTableDataSource.setData(todoRowList);
          this.todoListTableDataSource.isLoading = false;
        } else {
          this.loadTodoList();
        }
      });
    });
  }

  public reload(): void {
    this.loadTodoList();
  }

  public loadTodoList(): void {
    this.todoListTableDataSource.setData([]);
    this.todoListTableDataSource.isLoading = true;

    this.todoListSearchService.refreshWholeTodoList();
  }

  private getLabelByKey(references: LabelValueKey<string>[], key: string | undefined) {
    const keyValue = references && references.find((lv) => lv.key === key);

    return keyValue ? keyValue.label : undefined;
  }

  private getTodoItemConfiguration(item: TodoItemOutput): FunctionObjectConfiguration | undefined {
    return item.funcObject && item.funcObject.objectKey ? this.functionObjectMap[item.funcObject.objectKey] : undefined;
  }

  public openTodoRow(row: TodoRow): void {
    const configuration = this.getTodoItemConfiguration(row.obj);
    if (configuration) {
      const component = configuration.componentNames[0];
      const labelKey = `transaction.${component}`;

      const pageId = configuration.getPageId ? configuration.getPageId(row.obj.id) : row.obj.id;
      let objectId: string;
      if (typeof pageId === 'string') {
        objectId = pageId as string;
      } else {
        objectId = this.serializationService.serialize(pageId);
      }

      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: component,
        objectId,
        openMode: ComponentOpenMode.Read
      };

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openTodoRows(): void {
    this.todoListTableDataSource.dataSelection.forEach((row) => this.openTodoRow(row));
  }

  public exportTodoTable(): void {
    this.exportService.toExcel(
      this.todoListTableDataSource.sanitizedData.map((data) => {
        const objLess = { ...data };
        delete objLess.obj;

        return objLess;
      }),
      TodoListSearchComponent.TODO_LIST_TABLE_EXPORT_NAME,
      this.componentData.componentId
    );
  }
}
