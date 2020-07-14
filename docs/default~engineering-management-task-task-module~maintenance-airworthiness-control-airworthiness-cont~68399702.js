(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~engineering-management-task-task-module~maintenance-airworthiness-control-airworthiness-cont~68399702'],
  {
    /***/ './src/app/shared/components/dialog-search-operation/dialog-search-operation.component.html':
      /*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-operation/dialog-search-operation.component.html ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="60">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section">\r\n        <h4 class="section-title">{{ "global.search" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="column">\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".opeCode" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input type="text" class="aw-input" [(ngModel)]="searchObject.opeCode" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".opeVersion" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input type="text" class="aw-input" [(ngModel)]="searchObject.opeVersion" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".opeDesignation" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input type="text" class="aw-input" [(ngModel)]="searchObject.opeDesignation" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".rangeCode" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input type="text" class="aw-input" [(ngModel)]="searchObject.rangeCode" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row search-criteria-footer">\r\n              <div class="search-actions">\r\n                <button type="button" color="primary" mat-raised-button (click)="search()">\r\n                  {{ "global.toSearch" | translate }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section">\r\n        <h4 class="section-title">\r\n          {{ "global.results" | translate }}\r\n          ({{ table.list ? table.list.length : 0 }}{{ table.moreResults ? "+" : "" }})\r\n        </h4>\r\n\r\n        <div class="section-content">\r\n          <p-table\r\n            [resizableColumns]="true"\r\n            #ptableOperation\r\n            class="aw-table2"\r\n            [columns]="tableColList"\r\n            [value]="table.list"\r\n            [(selection)]="tableSelection"\r\n            selectionMode="single"\r\n            [scrollable]="true"\r\n          >\r\n            <ng-template pTemplate="emptymessage">\r\n              <span *ngIf="!tableLoading"> &nbsp;</span>\r\n\r\n              <div *ngIf="tableLoading" class="aw-table-loading-indicator">\r\n                <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                <div class="lds-hourglass"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="caption">\r\n              <div class="aw-table-header">\r\n                <div class="aw-table-global-filter">\r\n                  <label class="aw-table-global-filter-label">\r\n                    <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    class="aw-table-global-filter-input"\r\n                    type="text"\r\n                    placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                    (input)="ptableOperation.filterGlobal($event.target.value, \'contains\')"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="colgroup" let-columns>\r\n              <colgroup>\r\n                <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="header" let-columns>\r\n              <tr>\r\n                <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                  {{ getComponentName() + "." + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                  {{ rowData[col.field] }}\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="cancel()">\r\n      {{ "dialog.cancel" | translate }}\r\n    </button>\r\n\r\n    <button type="button" color="primary" mat-raised-button (click)="validate()" [disabled]="!tableSelection">\r\n      {{ "dialog.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-operation/dialog-search-operation.component.ts':
      /*!************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-operation/dialog-search-operation.component.ts ***!
  \************************************************************************************************/
      /*! exports provided: DialogSearchOperationComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchOperationComponent',
          function() {
            return DialogSearchOperationComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _utils_list_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _dialog_search_operation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./dialog-search-operation.service */ './src/app/shared/components/dialog-search-operation/dialog-search-operation.service.ts'
        );
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var extendStatics = function(d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
            };
          })();
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var DialogSearchOperationComponent = /** @class */ (function(_super) {
          __extends(DialogSearchOperationComponent, _super);
          function DialogSearchOperationComponent(dialogSearchOperationService, messageService) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogSearchOperationComponent'
              ) || this;
            _this.dialogSearchOperationService = dialogSearchOperationService;
            _this.messageService = messageService;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.init();
            _this.setTableColList();
            return _this;
          }
          DialogSearchOperationComponent.prototype.ngOnInit = function() {
            this.searchObject = this.searchObject || {};
          };
          DialogSearchOperationComponent.prototype.search = function() {
            var _this = this;
            this.tableLoading = true;
            this.clearTableData();
            this.dialogSearchOperationService
              .findAllBireOperationByCriteria(this.searchObject)
              .subscribe(function(result) {
                _this.table.moreResults = result.moreResults;
                _this.table.list = _utils_list_utils__WEBPACK_IMPORTED_MODULE_4__['ListUtils']
                  .orEmpty(result.list)
                  .map(function(elt) {
                    return _this.createOperationRow(elt);
                  });
                _this.tableLoading = false;
              });
          };
          DialogSearchOperationComponent.prototype.cancel = function() {
            _super.prototype.closeDialog.call(this);
          };
          DialogSearchOperationComponent.prototype.validate = function() {
            if (!this.tableSelection) {
              this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelection'));
            } else {
              this.onValidated.emit(this.tableSelection._obj);
              _super.prototype.closeDialog.call(this);
            }
          };
          DialogSearchOperationComponent.prototype.clearTableData = function() {
            this.table = { list: [], moreResults: false };
            this.tableSelection = undefined;
          };
          DialogSearchOperationComponent.prototype.createOperationRow = function(obj) {
            var operationRow = {
              opeCode: _utils_string_utils__WEBPACK_IMPORTED_MODULE_5__['StringUtils'].orEmpty(obj.opeCode),
              opeDesignation: _utils_string_utils__WEBPACK_IMPORTED_MODULE_5__['StringUtils'].orEmpty(
                obj.opeDesignation
              ),
              opeVersion: _utils_string_utils__WEBPACK_IMPORTED_MODULE_5__['StringUtils'].orEmpty(obj.opeVersion),
              rangeCode: _utils_string_utils__WEBPACK_IMPORTED_MODULE_5__['StringUtils'].orEmpty(obj.rangeCode),
              _obj: obj
            };
            return operationRow;
          };
          DialogSearchOperationComponent.prototype.init = function() {
            this.clearTableData();
            this.tableLoading = false;
          };
          DialogSearchOperationComponent.prototype.setTableColList = function() {
            this.tableColList = [
              { field: 'opeCode', alignment: 'left', width: '20%' },
              { field: 'opeVersion', alignment: 'right', width: '7.5%' },
              { field: 'opeDesignation', alignment: 'left', width: '60%' },
              { field: 'rangeCode', alignment: 'left', width: '12.5%' }
            ];
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogSearchOperationComponent.prototype,
            'searchObject',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(), __metadata('design:type', Object)],
            DialogSearchOperationComponent.prototype,
            'onValidated',
            void 0
          );
          DialogSearchOperationComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-search-operation',
                template: __webpack_require__(
                  /*! ./dialog-search-operation.component.html */ './src/app/shared/components/dialog-search-operation/dialog-search-operation.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _dialog_search_operation_service__WEBPACK_IMPORTED_MODULE_6__['DialogSearchOperationService'],
                _services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService']
              ])
            ],
            DialogSearchOperationComponent
          );
          return DialogSearchOperationComponent;
        })(_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-operation/dialog-search-operation.module.ts':
      /*!*********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-operation/dialog-search-operation.module.ts ***!
  \*********************************************************************************************/
      /*! exports provided: DialogSearchOperationModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchOperationModule',
          function() {
            return DialogSearchOperationModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dialog_search_operation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./dialog-search-operation.component */ './src/app/shared/components/dialog-search-operation/dialog-search-operation.component.ts'
        );
        /* harmony import */ var _dialog_search_operation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./dialog-search-operation.service */ './src/app/shared/components/dialog-search-operation/dialog-search-operation.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __read =
          (undefined && undefined.__read) ||
          function(o, n) {
            var m = typeof Symbol === 'function' && o[Symbol.iterator];
            if (!m) return o;
            var i = m.call(o),
              r,
              ar = [],
              e;
            try {
              while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
            } catch (error) {
              e = { error: error };
            } finally {
              try {
                if (r && !r.done && (m = i['return'])) m.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
            return ar;
          };
        var __spread =
          (undefined && undefined.__spread) ||
          function() {
            for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
            return ar;
          };

        /******************************************************************************
         * Modules
         *************************************************************************** */
        var EXTERNAL_MODULES = [primeng_table__WEBPACK_IMPORTED_MODULE_1__['TableModule']];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_5__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _dialog_search_operation_component__WEBPACK_IMPORTED_MODULE_6__['DialogSearchOperationComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_dialog_search_operation_service__WEBPACK_IMPORTED_MODULE_7__['DialogSearchOperationService']];
        var DialogSearchOperationModule = /** @class */ (function() {
          function DialogSearchOperationModule() {}
          DialogSearchOperationModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS),
                imports: __spread(
                  [
                    _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__['AngularCommonSharedModule'],
                    _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__['AppCommonSharedModule']
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            DialogSearchOperationModule
          );
          return DialogSearchOperationModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-operation/dialog-search-operation.service.ts':
      /*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-operation/dialog-search-operation.service.ts ***!
  \**********************************************************************************************/
      /*! exports provided: DialogSearchOperationService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchOperationService',
          function() {
            return DialogSearchOperationService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _api_task_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../api/task-management.api */ './src/app/shared/api/task-management.api.ts'
        );
        /* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var extendStatics = function(d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
            };
          })();
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var DialogSearchOperationService = /** @class */ (function(_super) {
          __extends(DialogSearchOperationService, _super);
          function DialogSearchOperationService(http, appConfigService, taskManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.taskManagementApi = taskManagementApi;
            return _this;
          }
          DialogSearchOperationService.prototype.findAllBireOperationByCriteria = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findBireOperationsBySearchCriteria,
              criteria
            );
          };
          DialogSearchOperationService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _api_task_management_api__WEBPACK_IMPORTED_MODULE_2__['TaskManagementApi']
              ])
            ],
            DialogSearchOperationService
          );
          return DialogSearchOperationService;
        })(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=default~engineering-management-task-task-module~maintenance-airworthiness-control-airworthiness-cont~68399702.js.map
