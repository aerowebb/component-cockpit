(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administration-todo-list-todo-list-module~main-main-module"],{

/***/ "./src/app/main/administration/todo-list/search/todo-list-search.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/administration/todo-list/search/todo-list-search.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"reload()\">\r\n      {{ \"global.refresh\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"results\" | translate }} ({{ todoListTableDataSource.dataCount }})</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <a-table [dataSource]=\"todoListTableDataSource\">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"exportTodoTable()\"\r\n                    *ngIf=\"todoListTableDataSource.hasData && !todoListTableDataSource.hasDataSelection\"\r\n                  >\r\n                    {{ \"global.export\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"openTodoRows()\"\r\n                    *ngIf=\"todoListTableDataSource.hasDataSelection\"\r\n                  >\r\n                    {{ \"global.open\" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef=\"isUrgent\" let-rowData=\"rowData\">\r\n                  <i *ngIf=\"rowData.isUrgent\" class=\"fa fa-fw fa-check\" aria-hidden=\"true\"></i>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef=\"id\" let-rowData=\"rowData\">\r\n                  <a (click)=\"openTodoRow(rowData)\">{{ rowData.id }}</a>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef=\"statusDate\" let-rowData=\"rowData\">\r\n                  {{ rowData.statusDate | date: \"yyyy/MM/dd HH:mm\":\"\":translateService.currentLang }}\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/administration/todo-list/search/todo-list-search.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/administration/todo-list/search/todo-list-search.component.ts ***!
  \************************************************************************************/
/*! exports provided: TodoListSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListSearchComponent", function() { return TodoListSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_function_object_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/function-object-constants */ "./src/app/shared/constants/function-object-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/export.service */ "./src/app/shared/services/export.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _workflow_management_form_workflow_management_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../workflow-management/form/workflow-management-form.service */ "./src/app/main/administration/workflow-management/form/workflow-management-form.service.ts");
/* harmony import */ var _todo_list_search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./todo-list-search.service */ "./src/app/main/administration/todo-list/search/todo-list-search.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var TodoListSearchComponent = /** @class */ (function (_super) {
    __extends(TodoListSearchComponent, _super);
    function TodoListSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, translateService, exportService, todoListSearchService, workflowManagementFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.translateService = translateService;
        _this.exportService = exportService;
        _this.todoListSearchService = todoListSearchService;
        _this.workflowManagementFormService = workflowManagementFormService;
        _this.initTodoListTableDataSource();
        return _this;
    }
    TodoListSearchComponent_1 = TodoListSearchComponent;
    TodoListSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].ADM_TODO_LIST_SEARCH;
    };
    TodoListSearchComponent.prototype.initTodoListTableDataSource = function () {
        this.todoListTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"]({
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
    };
    TodoListSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.functionObjectMap = _shared_constants_function_object_constants__WEBPACK_IMPORTED_MODULE_5__["FunctionObjectConstants"].getFunctionObjectConfigurationMapByKey();
        this.loadReferences();
    };
    TodoListSearchComponent.prototype.loadReferences = function () {
        var _this = this;
        this.workflowManagementFormService.getInternationalizedFuncObject().subscribe(function (response) {
            _this.functionObjectList = response;
            // Loading todo list only after references loading
            _todo_list_search_service__WEBPACK_IMPORTED_MODULE_15__["TodoListSearchService"].todoList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.unsubscribe)).subscribe(function (result) {
                if (result) {
                    var todoRowList = result.map(function (item) { return ({
                        obj: item,
                        id: item.functionalIdentifier || '_',
                        isUrgent: item.isUrgent,
                        funcObjectLabel: _this.getLabelByKey(_this.functionObjectList, item.funcObject && item.funcObject.objectKey),
                        statusLabel: item.statusLabel,
                        statusUser: item.statusUser,
                        statusDate: item.statusDate
                    }); });
                    _this.todoListTableDataSource.setData(todoRowList);
                    _this.todoListTableDataSource.isLoading = false;
                }
                else {
                    _this.loadTodoList();
                }
            });
        });
    };
    TodoListSearchComponent.prototype.reload = function () {
        this.loadTodoList();
    };
    TodoListSearchComponent.prototype.loadTodoList = function () {
        this.todoListTableDataSource.setData([]);
        this.todoListTableDataSource.isLoading = true;
        this.todoListSearchService.refreshWholeTodoList();
    };
    TodoListSearchComponent.prototype.getLabelByKey = function (references, key) {
        var keyValue = references && references.find(function (lv) { return lv.key === key; });
        return keyValue ? keyValue.label : undefined;
    };
    TodoListSearchComponent.prototype.getTodoItemConfiguration = function (item) {
        return item.funcObject && item.funcObject.objectKey ? this.functionObjectMap[item.funcObject.objectKey] : undefined;
    };
    TodoListSearchComponent.prototype.openTodoRow = function (row) {
        var configuration = this.getTodoItemConfiguration(row.obj);
        if (configuration) {
            var component = configuration.componentNames[0];
            var labelKey = "transaction." + component;
            var pageId = configuration.getPageId ? configuration.getPageId(row.obj.id) : row.obj.id;
            var objectId = void 0;
            if (typeof pageId === 'string') {
                objectId = pageId;
            }
            else {
                objectId = this.serializationService.serialize(pageId);
            }
            var data = {
                id: this.tabService.generateId(),
                componentId: component,
                objectId: objectId,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    TodoListSearchComponent.prototype.openTodoRows = function () {
        var _this = this;
        this.todoListTableDataSource.dataSelection.forEach(function (row) { return _this.openTodoRow(row); });
    };
    TodoListSearchComponent.prototype.exportTodoTable = function () {
        this.exportService.toExcel(this.todoListTableDataSource.sanitizedData.map(function (data) {
            var objLess = __assign({}, data);
            delete objLess.obj;
            return objLess;
        }), TodoListSearchComponent_1.TODO_LIST_TABLE_EXPORT_NAME, this.componentData.componentId);
    };
    var TodoListSearchComponent_1;
    TodoListSearchComponent.TODO_LIST_TABLE_EXPORT_NAME = 'TodoList';
    TodoListSearchComponent = TodoListSearchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-todo-list-search',
            template: __webpack_require__(/*! ./todo-list-search.component.html */ "./src/app/main/administration/todo-list/search/todo-list-search.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__["TabService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_export_service__WEBPACK_IMPORTED_MODULE_7__["ExportService"],
            _todo_list_search_service__WEBPACK_IMPORTED_MODULE_15__["TodoListSearchService"],
            _workflow_management_form_workflow_management_form_service__WEBPACK_IMPORTED_MODULE_14__["WorkflowManagementFormService"]])
    ], TodoListSearchComponent);
    return TodoListSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_13__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/administration/todo-list/search/todo-list-search.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/administration/todo-list/search/todo-list-search.service.ts ***!
  \**********************************************************************************/
/*! exports provided: TodoListSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListSearchService", function() { return TodoListSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_types_api_types_bidt_scenario_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/types/api-types/bidt-scenario.api */ "./src/app/shared/types/api-types/bidt-scenario.api.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodoListSearchService = /** @class */ (function (_super) {
    __extends(TodoListSearchService, _super);
    function TodoListSearchService(http, appConfigService, bidtScenarioApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtScenarioApi = bidtScenarioApi;
        return _this;
    }
    TodoListSearchService_1 = TodoListSearchService;
    TodoListSearchService.prototype.refreshWholeTodoList = function () {
        if (TodoListSearchService_1._todoList.getValue()) {
            TodoListSearchService_1._todoList.next(undefined);
        }
        this.getTodoList({}).subscribe(function (result) { return TodoListSearchService_1._todoList.next(result); });
    };
    TodoListSearchService.prototype.getTodoList = function (todoListCriteriaInput) {
        return _super.prototype.post.call(this, this.bidtScenarioApi.getTodoList, todoListCriteriaInput);
    };
    var TodoListSearchService_1;
    TodoListSearchService._todoList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
    TodoListSearchService.todoList$ = TodoListSearchService_1._todoList.asObservable();
    TodoListSearchService = TodoListSearchService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_types_api_types_bidt_scenario_api__WEBPACK_IMPORTED_MODULE_5__["BidtScenarioApi"]])
    ], TodoListSearchService);
    return TodoListSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/administration/todo-list/todo-list.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/administration/todo-list/todo-list.module.ts ***!
  \*******************************************************************/
/*! exports provided: TodoListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListModule", function() { return TodoListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _shared_types_api_types_bidt_scenario_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/types/api-types/bidt-scenario.api */ "./src/app/shared/types/api-types/bidt-scenario.api.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _workflow_management_workflow_management_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../workflow-management/workflow-management.module */ "./src/app/main/administration/workflow-management/workflow-management.module.ts");
/* harmony import */ var _search_todo_list_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/todo-list-search.component */ "./src/app/main/administration/todo-list/search/todo-list-search.component.ts");
/* harmony import */ var _search_todo_list_search_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/todo-list-search.service */ "./src/app/main/administration/todo-list/search/todo-list-search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};











/******************************************************************************
 * Modules
 *************************************************************************** */
var EXTERNAL_MODULES = [primeng_tooltip__WEBPACK_IMPORTED_MODULE_1__["TooltipModule"]];
var INTERNAL_MODULES = [_shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_5__["TableModule"], _workflow_management_workflow_management_module__WEBPACK_IMPORTED_MODULE_8__["WorkflowManagementModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [_search_todo_list_search_component__WEBPACK_IMPORTED_MODULE_9__["TodoListSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_search_todo_list_search_service__WEBPACK_IMPORTED_MODULE_10__["TodoListSearchService"]];
var APIS = [_shared_types_api_types_bidt_scenario_api__WEBPACK_IMPORTED_MODULE_6__["BidtScenarioApi"]];
var TodoListModule = /** @class */ (function () {
    function TodoListModule() {
    }
    TodoListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_7__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES, APIS)
        })
    ], TodoListModule);
    return TodoListModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~administration-todo-list-todo-list-module~main-main-module.js.map