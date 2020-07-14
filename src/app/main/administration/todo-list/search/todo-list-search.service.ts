import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { TodoListCriteriaInput } from '../../../../shared/types/api-input-types/administration-todo-list/todo-list-criteria-input.interface';
import { TodoItemOutput } from '../../../../shared/types/api-output-types/administration-todo-list/todo-item-output.interface';
import { BidtScenarioApi } from '../../../../shared/types/api-types/bidt-scenario.api';

@Injectable()
export class TodoListSearchService extends AbstractAwHttpService {
  private static readonly _todoList = new BehaviorSubject<TodoItemOutput[] | undefined>(undefined);
  public static readonly todoList$ = TodoListSearchService._todoList.asObservable();

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtScenarioApi: BidtScenarioApi
  ) {
    super(http, appConfigService);
  }

  public refreshWholeTodoList() {
    if (TodoListSearchService._todoList.getValue()) {
      TodoListSearchService._todoList.next(undefined);
    }
    this.getTodoList({}).subscribe((result) => TodoListSearchService._todoList.next(result));
  }

  public getTodoList(todoListCriteriaInput: TodoListCriteriaInput): Observable<TodoItemOutput[]> {
    return super.post<TodoListCriteriaInput, TodoItemOutput[]>(this.bidtScenarioApi.getTodoList, todoListCriteriaInput);
  }
}
