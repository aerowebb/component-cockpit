(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~administration-attributes-attributes-module~administration-business-partner-business-partner~1045786c'],
  {
    /***/ './src/app/shared/components/dynamic-attributes-history/dynamic-attributes-history.component.html':
      /*!********************************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-attributes-history/dynamic-attributes-history.component.html ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal dynamic-attributes-history" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section search-critetia-section">\r\n        <div class="section-content">\r\n          <div class="column">\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label">{{ getComponentName() + ".attribute" | translate }}</label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="attributes"\r\n                    (onChange)="handleAttributeSelected($event.value)"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class="form-group"></div>\r\n              <div class="form-group"></div>\r\n              <div class="form-group"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="section">\r\n        <p-table\r\n          [resizableColumns]="true"\r\n          #ptable\r\n          class="aw-table2"\r\n          [columns]="tableCols"\r\n          [value]="formattedTableRows"\r\n          [(selection)]="selectedRows"\r\n          dataKey="attributeId"\r\n          [scrollable]="true"\r\n        >\r\n          <ng-template pTemplate="caption">\r\n            <div class="aw-table-header">\r\n              <div class="aw-table-actions">\r\n                <button\r\n                  type="button"\r\n                  mat-raised-button\r\n                  color="warn"\r\n                  [disabled]="selectedRows.length === 0"\r\n                  pTooltip="{{ \'global.delete\' | translate }}"\r\n                  tooltipPosition="top"\r\n                  (click)="deleteSelectedHistory()"\r\n                  *ngIf="!isReadOpenMode && selectedRows.length > 0 && showDelete"\r\n                >\r\n                  {{ "global.delete" | translate }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="colgroup" let-columns>\r\n            <colgroup>\r\n              <col *ngIf="getComponentName().selectionMode === Multiple" class="aw-table-checkbox-wrapper" />\r\n              <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n            </colgroup>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="header" let-columns>\r\n            <tr>\r\n              <th *ngIf="getComponentName().selectionMode === Multiple" class="aw-table-checkbox-wrapper">\r\n                <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n              </th>\r\n\r\n              <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                {{ getComponentName() + "." + col.field | translate }}\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n            <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n              <td *ngIf="getComponentName().selectionMode === Multiple" class="aw-table-checkbox-wrapper">\r\n                <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n              </td>\r\n\r\n              <td *ngFor="let col of columns" [ngSwitch]="col.filterMode" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </p-table>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dynamic-attributes-history/dynamic-attributes-history.component.ts':
      /*!******************************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-attributes-history/dynamic-attributes-history.component.ts ***!
  \******************************************************************************************************/
      /*! exports provided: DynamicAttributesHistoryComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DynamicAttributesHistoryComponent',
          function() {
            return DynamicAttributesHistoryComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../dynamic-attributes/dynamic-attributes.service */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.service.ts'
        );
        /* harmony import */ var _dynamic_attributes_history_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./dynamic-attributes-history.service */ './src/app/shared/components/dynamic-attributes-history/dynamic-attributes-history.service.ts'
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

        var DynamicAttributesHistoryComponent = /** @class */ (function(_super) {
          __extends(DynamicAttributesHistoryComponent, _super);
          function DynamicAttributesHistoryComponent(
            translateService,
            confirmationService,
            dateService,
            dynamicAttributesHistoryService,
            dynamicAttributesService,
            loaderService
          ) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write,
                'DynamicAttributesHistoryComponent'
              ) || this;
            _this.translateService = translateService;
            _this.confirmationService = confirmationService;
            _this.dateService = dateService;
            _this.dynamicAttributesHistoryService = dynamicAttributesHistoryService;
            _this.dynamicAttributesService = dynamicAttributesService;
            _this.loaderService = loaderService;
            _this.attributeMap = new Map();
            _this.attributes = [];
            _this.selectedAttribute = undefined;
            _this.selectedRows = [];
            _this.formattedTableRows = [];
            _this.showDelete = false;
            _this.setTableCols();
            return _this;
          }
          DynamicAttributesHistoryComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.loaderService.hideLoadingBar();
            this.historyObservable.subscribe(function(results) {
              _this.attributesHistory = !!results ? results : [];
            });
            this.attributes = this.dynamicAttributesService
              .getLeafs(this.dynamicAttributes)
              .map(function(dynamicAttribute) {
                var attribute = {
                  label: dynamicAttribute.label,
                  value: dynamicAttribute.id
                };
                return attribute;
              });
          };
          DynamicAttributesHistoryComponent.prototype.deleteSelectedHistory = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'dynamicAttributesHistory.confirmDeleteSelectedHistory',
              accept: function() {
                _this.selectedRows.forEach(function(selectedRow) {
                  var attribute = _this.attributeMap.get(selectedRow.attributeId);
                  if (!!attribute) {
                    _this.dynamicAttributesHistoryService
                      .removeAttributeHistory(_this.deleteApi, attribute)
                      .subscribe(function(_) {
                        _this.formattedTableRows = _this.formattedTableRows.filter(function(row) {
                          return row.attributeId !== selectedRow.attributeId;
                        });
                        _this.attributesHistory = _this.attributesHistory.filter(function(attributeHistory) {
                          return attributeHistory.attributeId !== selectedRow.attributeId;
                        });
                      });
                  }
                });
                _this.selectedRows = [];
              }
            });
          };
          DynamicAttributesHistoryComponent.prototype.handleAttributeSelected = function(value) {
            var _this = this;
            if (!!value) {
              var selection = this.attributesHistory.filter(function(attributeHistoric) {
                return attributeHistoric.attributeId === value;
              });
              if (!!selection) {
                this.formattedTableRows = selection.map(function(obj) {
                  var formattedObject = {
                    attributeId: obj.attributeId,
                    attributeValue: _utils_string_utils__WEBPACK_IMPORTED_MODULE_8__['StringUtils'].orEmpty(
                      obj.attributeValue
                    ),
                    statusDate: _this.dateService.dateWithHourMinSecToString(obj.statusDate),
                    statusState: _utils_string_utils__WEBPACK_IMPORTED_MODULE_8__['StringUtils'].orEmpty(
                      obj.statusState
                    ),
                    statusUser: _utils_string_utils__WEBPACK_IMPORTED_MODULE_8__['StringUtils'].orEmpty(obj.statusUser),
                    timestamp: _this.dateService.dateWithHourMinSecToString(obj.timestamp)
                  };
                  _this.attributeMap.set(formattedObject.attributeId, obj);
                  return formattedObject;
                });
              } else {
                this.formattedTableRows = [];
              }
            }
          };
          DynamicAttributesHistoryComponent.prototype.setTableCols = function() {
            this.tableCols = [
              { field: 'statusUser', alignment: 'left' },
              { field: 'statusState', alignment: 'left' },
              { field: 'attributeValue', alignment: 'left' },
              { field: 'statusDate', alignment: 'left' },
              { field: 'timestamp', alignment: 'left' }
            ];
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DynamicAttributesHistoryComponent.prototype,
            'deleteApi',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('attributes'),
              __metadata('design:type', Array)
            ],
            DynamicAttributesHistoryComponent.prototype,
            'dynamicAttributes',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('history'),
              __metadata('design:type', rxjs__WEBPACK_IMPORTED_MODULE_2__['Observable'])
            ],
            DynamicAttributesHistoryComponent.prototype,
            'historyObservable',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DynamicAttributesHistoryComponent.prototype,
            'showDelete',
            void 0
          );
          DynamicAttributesHistoryComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dynamic-attributes-history',
                template: __webpack_require__(
                  /*! ./dynamic-attributes-history.component.html */ './src/app/shared/components/dynamic-attributes-history/dynamic-attributes-history.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__['ConfirmationService'],
                _services_date_service__WEBPACK_IMPORTED_MODULE_6__['DateService'],
                _dynamic_attributes_history_service__WEBPACK_IMPORTED_MODULE_10__['DynamicAttributesHistoryService'],
                _dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_9__['DynamicAttributesService'],
                _services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService']
              ])
            ],
            DynamicAttributesHistoryComponent
          );
          return DynamicAttributesHistoryComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dynamic-attributes-history/dynamic-attributes-history.module.ts':
      /*!***************************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-attributes-history/dynamic-attributes-history.module.ts ***!
  \***************************************************************************************************/
      /*! exports provided: DynamicAttributesHistoryModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DynamicAttributesHistoryModule',
          function() {
            return DynamicAttributesHistoryModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dynamic_attributes_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./dynamic-attributes-history.component */ './src/app/shared/components/dynamic-attributes-history/dynamic-attributes-history.component.ts'
        );
        /* harmony import */ var _dynamic_attributes_history_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./dynamic-attributes-history.service */ './src/app/shared/components/dynamic-attributes-history/dynamic-attributes-history.service.ts'
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
        var EXTERNAL_MODULES = [
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__['DropdownModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_2__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_3__['TooltipModule']
        ];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _dynamic_attributes_history_component__WEBPACK_IMPORTED_MODULE_8__['DynamicAttributesHistoryComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _dynamic_attributes_history_service__WEBPACK_IMPORTED_MODULE_9__['DynamicAttributesHistoryService']
        ];
        var DynamicAttributesHistoryModule = /** @class */ (function() {
          function DynamicAttributesHistoryModule() {}
          DynamicAttributesHistoryModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS),
                imports: __spread(
                  [
                    _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_4__['AngularCommonSharedModule'],
                    _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_5__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _app_common_shared_module__WEBPACK_IMPORTED_MODULE_6__['AppCommonSharedModule']
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            DynamicAttributesHistoryModule
          );
          return DynamicAttributesHistoryModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dynamic-attributes-history/dynamic-attributes-history.service.ts':
      /*!****************************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-attributes-history/dynamic-attributes-history.service.ts ***!
  \****************************************************************************************************/
      /*! exports provided: DynamicAttributesHistoryService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DynamicAttributesHistoryService',
          function() {
            return DynamicAttributesHistoryService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

        var DynamicAttributesHistoryService = /** @class */ (function(_super) {
          __extends(DynamicAttributesHistoryService, _super);
          function DynamicAttributesHistoryService(http, appConfigService) {
            return _super.call(this, http, appConfigService) || this;
          }
          DynamicAttributesHistoryService.prototype.removeAttributeHistory = function(api, attributeHistory) {
            return _super.prototype.post.call(this, api, attributeHistory);
          };
          DynamicAttributesHistoryService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _services_app_config_service__WEBPACK_IMPORTED_MODULE_3__['AppConfigService']
              ])
            ],
            DynamicAttributesHistoryService
          );
          return DynamicAttributesHistoryService;
        })(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/components/dynamic-attributes/dynamic-attribute/dynamic-attribute.component.html':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-attributes/dynamic-attribute/dynamic-attribute.component.html ***!
  \*********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<!-- ********************************************************************** -->\r\n<!-- Calendar                                                               -->\r\n<!-- ********************************************************************** -->\r\n<div\r\n  [attr.id]="workflowControl && workflowControl.itemIdentifier"\r\n  [attr.required]="isRequired()"\r\n  *ngIf="isCalendarAttribute(attribute)"\r\n  class="form-group"\r\n>\r\n  <label class="form-label">\r\n    {{ attribute.label }}\r\n  </label>\r\n\r\n  <div class="form-control">\r\n    <p-calendar\r\n      showButtonBar="true"\r\n      [monthNavigator]="true"\r\n      [yearNavigator]="true"\r\n      [yearRange]="sessionService.calendarYearRange"\r\n      class="aw-calendar"\r\n      [(ngModel)]="attribute.value"\r\n      [dateFormat]="sessionService.dateFormatPrimeNG"\r\n      [locale]="sessionService.calendarFormat"\r\n      [disabled]="isDisabled()"\r\n    ></p-calendar>\r\n  </div>\r\n</div>\r\n\r\n<!-- ********************************************************************** -->\r\n<!-- Checkbox                                                               -->\r\n<!-- ********************************************************************** -->\r\n<div\r\n  [attr.id]="workflowControl && workflowControl.itemIdentifier"\r\n  [attr.required]="isRequired()"\r\n  *ngIf="isCheckboxAttribute(attribute)"\r\n  class="form-group"\r\n>\r\n  <label class="form-label">\r\n    {{ attribute.label }}\r\n  </label>\r\n\r\n  <div class="form-control">\r\n    <p-checkbox binary="true" class="aw-checkbox" [(ngModel)]="attribute.value" [disabled]="isDisabled()"></p-checkbox>\r\n  </div>\r\n</div>\r\n\r\n<!-- ********************************************************************** -->\r\n<!-- Dropdown                                                               -->\r\n<!-- ********************************************************************** -->\r\n<div\r\n  [attr.id]="workflowControl && workflowControl.itemIdentifier"\r\n  [attr.required]="isRequired()"\r\n  *ngIf="isDropdownAttribute(attribute)"\r\n  class="form-group"\r\n>\r\n  <label class="form-label">\r\n    {{ attribute.label }}\r\n  </label>\r\n\r\n  <div class="form-control">\r\n    <p-dropdown\r\n      class="aw-dropdown"\r\n      [(ngModel)]="attribute.value"\r\n      [options]="attribute.listOptions"\r\n      placeholder="&nbsp;"\r\n      [disabled]="isDisabled()"\r\n      [appendTo]="\'body\'"\r\n      [showClear]="true"\r\n    ></p-dropdown>\r\n  </div>\r\n</div>\r\n\r\n<!-- ********************************************************************** -->\r\n<!-- Input                                                                  -->\r\n<!-- ********************************************************************** -->\r\n<div\r\n  [attr.id]="workflowControl && workflowControl.itemIdentifier"\r\n  [attr.required]="isRequired()"\r\n  *ngIf="isInputAttribute(attribute)"\r\n  class="form-group"\r\n>\r\n  <label class="form-label">\r\n    {{ attribute.label }}\r\n  </label>\r\n\r\n  <div class="form-control">\r\n    <input type="text" class="aw-input" [(ngModel)]="attribute.value" [disabled]="isDisabled()" />\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dynamic-attributes/dynamic-attribute/dynamic-attribute.component.ts':
      /*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-attributes/dynamic-attribute/dynamic-attribute.component.ts ***!
  \*******************************************************************************************************/
      /*! exports provided: DynamicAttributeComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DynamicAttributeComponent',
          function() {
            return DynamicAttributeComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../enums/dynamic-attribute-type.enum */ './src/app/shared/components/dynamic-attributes/enums/dynamic-attribute-type.enum.ts'
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
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var DynamicAttributeComponent = /** @class */ (function() {
          function DynamicAttributeComponent(sessionService) {
            this.sessionService = sessionService;
          }
          DynamicAttributeComponent.prototype.isCalendarAttribute = function(attribute) {
            return (
              attribute.type ===
              _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_2__['DynamicAttributeType'].Date
            );
          };
          DynamicAttributeComponent.prototype.isCheckboxAttribute = function(attribute) {
            return (
              attribute.type ===
              _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_2__['DynamicAttributeType'].Boolean
            );
          };
          DynamicAttributeComponent.prototype.isDropdownAttribute = function(attribute) {
            return (
              attribute.type ===
              _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_2__['DynamicAttributeType'].List
            );
          };
          DynamicAttributeComponent.prototype.isInputAttribute = function(attribute) {
            return (
              attribute.type ===
              _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_2__['DynamicAttributeType'].Text
            );
          };
          DynamicAttributeComponent.prototype.isRequired = function() {
            return this.workflowControl && this.workflowControl.isMandatory ? true : undefined;
          };
          DynamicAttributeComponent.prototype.isDisabled = function() {
            return this.isReadOpenMode || (!!this.workflowControl && !!this.workflowControl.isReadOnly);
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DynamicAttributeComponent.prototype,
            'workflowControl',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DynamicAttributeComponent.prototype,
            'attribute',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DynamicAttributeComponent.prototype,
            'isReadOpenMode',
            void 0
          );
          DynamicAttributeComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dynamic-attribute',
                template: __webpack_require__(
                  /*! ./dynamic-attribute.component.html */ './src/app/shared/components/dynamic-attributes/dynamic-attribute/dynamic-attribute.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _services_session_service__WEBPACK_IMPORTED_MODULE_1__['SessionService']
              ])
            ],
            DynamicAttributeComponent
          );
          return DynamicAttributeComponent;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dynamic-attributes/dynamic-attributes.component.html':
      /*!****************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-attributes/dynamic-attributes.component.html ***!
  \****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div *ngFor="let attributesNode of attributesNodes" class="section">\r\n  <div *ngIf="attributesNode.label" class="section-title">\r\n    <h4>\r\n      <b>{{ attributesNode.label }}</b>\r\n    </h4>\r\n    <!-- <i\r\n      *ngIf="showHistory"\r\n      class="fa fa-fw fa-history aw-icon aw-icon-with-border"\r\n      aria-hidden="true"\r\n      pTooltip="{{ \'global.historic\' | translate }}"\r\n      tooltipPosition="top"\r\n      (click)="openHistoricAttributes()"\r\n    ></i> -->\r\n  </div>\r\n  <div *ngIf="!attributesNode.label" class="section-title">\r\n    <h4>\r\n      <b>{{ "global.attributes" | translate }}</b>\r\n    </h4>\r\n    <i\r\n      *ngIf="showHistory"\r\n      class="fa fa-fw fa-history aw-icon aw-icon-with-border"\r\n      aria-hidden="true"\r\n      pTooltip="{{ \'global.historic\' | translate }}"\r\n      tooltipPosition="top"\r\n      (click)="openHistoricAttributes()"\r\n    ></i>\r\n  </div>\r\n\r\n  <div *ngIf="attributesNode.attributes" class="section-content">\r\n    <div class="row">\r\n      <aw-dynamic-attribute\r\n        *ngFor="let attribute of attributesNode.attributes"\r\n        [attribute]="attribute"\r\n        [workflowControl]="controlByAttributeId[attribute.id]"\r\n        [isReadOpenMode]="isReadOpenMode"\r\n        class="attributes-column-width-{{ columnWidth }}"\r\n      ></aw-dynamic-attribute>\r\n    </div>\r\n\r\n    <div *ngFor="let attributesChildNode of attributesNode.children" class="sub-section">\r\n      <div *ngIf="attributesChildNode.label" class="section-title">\r\n        <h4>{{ attributesChildNode.label }}</h4>\r\n      </div>\r\n      <div class="row">\r\n        <aw-dynamic-attribute\r\n          *ngFor="let attribute of attributesChildNode.attributes"\r\n          [attribute]="attribute"\r\n          [workflowControl]="controlByAttributeId[attribute.id]"\r\n          [isReadOpenMode]="isReadOpenMode"\r\n          class="attributes-column-width-{{ columnWidth }}"\r\n        ></aw-dynamic-attribute>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dynamic-attributes-history\r\n    *ngIf="showDynamicAttributesHistoric"\r\n    [attributes]="attributesNodes"\r\n    [history]="historyObservable"\r\n    [deleteApi]="deleteApi"\r\n    showDelete="true"\r\n    [(display)]="showDynamicAttributesHistoric"\r\n  ></aw-dynamic-attributes-history>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dynamic-attributes/dynamic-attributes.component.ts':
      /*!**************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-attributes/dynamic-attributes.component.ts ***!
  \**************************************************************************************/
      /*! exports provided: DynamicAttributesComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DynamicAttributesComponent',
          function() {
            return DynamicAttributesComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _utils_workflow_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../utils/workflow-utils */ './src/app/shared/utils/workflow-utils.ts'
        );
        /* harmony import */ var _dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./dynamic-attributes.service */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.service.ts'
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
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var DynamicAttributesComponent = /** @class */ (function() {
          function DynamicAttributesComponent(dynamicAttributesService) {
            this.dynamicAttributesService = dynamicAttributesService;
            this.defaultColumnWidth = 4;
            this._attributesNodes = [];
            this.showDynamicAttributesHistoric = false;
            this.showHistory = false;
            this._columnWidth = this.defaultColumnWidth;
            this.controlByAttributeId = {};
          }
          Object.defineProperty(DynamicAttributesComponent.prototype, 'workflowControls', {
            get: function() {
              return this._workflowControls;
            },
            set: function(workflowControls) {
              var _this = this;
              this._workflowControls = workflowControls;
              this.controlByAttributeId = {};
              if (this._workflowControls) {
                this._workflowControls.forEach(function(control) {
                  var attributeId = _utils_workflow_utils__WEBPACK_IMPORTED_MODULE_2__['WorkflowUtils'].getAttributeId(
                    control
                  );
                  if (attributeId) {
                    _this.controlByAttributeId[attributeId] = control;
                  }
                });
              }
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(DynamicAttributesComponent.prototype, 'attributesNodes', {
            get: function() {
              return this._attributesNodes;
            },
            set: function(value) {
              if (!!value) {
                this._attributesNodes = value;
                this.dynamicAttributesService.sort(this.attributesNodes);
              }
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(DynamicAttributesComponent.prototype, 'columnWidth', {
            get: function() {
              return this._columnWidth;
            },
            set: function(columnWidth) {
              if (!!columnWidth) {
                this._columnWidth = columnWidth;
              }
            },
            enumerable: true,
            configurable: true
          });
          DynamicAttributesComponent.prototype.openHistoricAttributes = function() {
            this.showDynamicAttributesHistoric = true;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('history'),
              __metadata('design:type', rxjs__WEBPACK_IMPORTED_MODULE_1__['Observable'])
            ],
            DynamicAttributesComponent.prototype,
            'historyObservable',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DynamicAttributesComponent.prototype,
            'deleteApi',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DynamicAttributesComponent.prototype,
            'isReadOpenMode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DynamicAttributesComponent.prototype,
            'showHistory',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('workflowControls'),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            DynamicAttributesComponent.prototype,
            'workflowControls',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('attributes'),
              __metadata('design:type', Array),
              __metadata('design:paramtypes', [Array])
            ],
            DynamicAttributesComponent.prototype,
            'attributesNodes',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('columnWidth'),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            DynamicAttributesComponent.prototype,
            'columnWidth',
            null
          );
          DynamicAttributesComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dynamic-attributes',
                template: __webpack_require__(
                  /*! ./dynamic-attributes.component.html */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_3__['DynamicAttributesService']
              ])
            ],
            DynamicAttributesComponent
          );
          return DynamicAttributesComponent;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts':
      /*!***********************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts ***!
  \***********************************************************************************/
      /*! exports provided: DynamicAttributesModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DynamicAttributesModule',
          function() {
            return DynamicAttributesModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! primeng/calendar */ './node_modules/primeng/calendar.js'
        );
        /* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/checkbox */ './node_modules/primeng/checkbox.js'
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _dynamic_attributes_history_dynamic_attributes_history_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../dynamic-attributes-history/dynamic-attributes-history.module */ './src/app/shared/components/dynamic-attributes-history/dynamic-attributes-history.module.ts'
        );
        /* harmony import */ var _dynamic_attribute_dynamic_attribute_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./dynamic-attribute/dynamic-attribute.component */ './src/app/shared/components/dynamic-attributes/dynamic-attribute/dynamic-attribute.component.ts'
        );
        /* harmony import */ var _dynamic_attributes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./dynamic-attributes.component */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.component.ts'
        );
        /* harmony import */ var _dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./dynamic-attributes.service */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.service.ts'
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
        var EXTERNAL_MODULES = [
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__['CheckboxModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__['DropdownModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__['TooltipModule']
        ];
        var INTERNAL_MODULES = [
          _dynamic_attributes_history_dynamic_attributes_history_module__WEBPACK_IMPORTED_MODULE_8__[
            'DynamicAttributesHistoryModule'
          ]
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _dynamic_attribute_dynamic_attribute_component__WEBPACK_IMPORTED_MODULE_9__['DynamicAttributeComponent']
        ];
        var EXPORTED_COMPONENTS = [
          _dynamic_attributes_component__WEBPACK_IMPORTED_MODULE_10__['DynamicAttributesComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_11__['DynamicAttributesService']];
        var DynamicAttributesModule = /** @class */ (function() {
          function DynamicAttributesModule() {}
          DynamicAttributesModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, EXPORTED_COMPONENTS),
                exports: __spread(EXPORTED_COMPONENTS),
                imports: __spread(
                  [
                    _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_5__['AngularCommonSharedModule'],
                    _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_6__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _app_common_shared_module__WEBPACK_IMPORTED_MODULE_7__['AppCommonSharedModule']
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            DynamicAttributesModule
          );
          return DynamicAttributesModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dynamic-attributes/dynamic-attributes.service.ts':
      /*!************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-attributes/dynamic-attributes.service.ts ***!
  \************************************************************************************/
      /*! exports provided: DynamicAttributesService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DynamicAttributesService',
          function() {
            return DynamicAttributesService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! moment */ './node_modules/moment/moment.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants/bido-attribute-constants */ './src/app/shared/constants/bido-attribute-constants.ts'
        );
        /* harmony import */ var _constants_lang_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../constants/lang-constants */ './src/app/shared/constants/lang-constants.ts'
        );
        /* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _utils_list_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./enums/dynamic-attribute-type.enum */ './src/app/shared/components/dynamic-attributes/enums/dynamic-attribute-type.enum.ts'
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

        var DynamicAttributesService = /** @class */ (function(_super) {
          __extends(DynamicAttributesService, _super);
          function DynamicAttributesService(http, appConfigService, translateService) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.translateService = translateService;
            return _this;
          }
          DynamicAttributesService_1 = DynamicAttributesService;
          DynamicAttributesService.prototype.attributeValueToString = function(attribute) {
            if (
              attribute.value &&
              attribute.type ===
                _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_10__['DynamicAttributeType'].Date
            ) {
              return moment__WEBPACK_IMPORTED_MODULE_3__(attribute.value).format(
                DynamicAttributesService_1.DATE_FORMAT
              );
            }
            return !!attribute.value ? attribute.value.toString() : '';
          };
          DynamicAttributesService.prototype.from = function(attributes) {
            var _this = this;
            var dynamicAttributesMap = new Map();
            var rootDynamicAttributes = [];
            attributes.forEach(function(attribute) {
              var path = _this.getAttributeLabel(attribute).split('.');
              var childAttributeType = _this.getAttributeType(attribute);
              var child = {
                id: attribute.attributeId,
                label: path[path.length - 1],
                type: childAttributeType,
                value: _this.computeDefaultAttributeValue(childAttributeType),
                listOptions: _this.computeListOptions(attribute)
              };
              var createDynamicAttributes = function(label, key) {
                var dynamicAttributes = {
                  label: label,
                  attributes: [],
                  children: []
                };
                dynamicAttributesMap.set(!!key ? key : label, dynamicAttributes);
                return dynamicAttributes;
              };
              var computeNodeKey = function(index) {
                return path.slice(0, index).join('.');
              };
              if (path.length === 1) {
                if (!dynamicAttributesMap.has('')) {
                  var emptyRoot = createDynamicAttributes('');
                  rootDynamicAttributes = __spread(rootDynamicAttributes, [emptyRoot]);
                }
                var emptyKeyValue = dynamicAttributesMap.get('');
                if (!!emptyKeyValue) {
                  emptyKeyValue.attributes.push(child);
                }
              } else {
                if (!dynamicAttributesMap.has(path[0])) {
                  var root = createDynamicAttributes(path[0]);
                  rootDynamicAttributes = __spread(rootDynamicAttributes, [root]);
                }
                for (var i = 1; i < path.length - 1; i++) {
                  var key = computeNodeKey(i + 1);
                  if (!dynamicAttributesMap.has(key)) {
                    var node = createDynamicAttributes(path[i], key);
                    var nodeKeyValue = dynamicAttributesMap.get(computeNodeKey(i));
                    if (!!nodeKeyValue) {
                      nodeKeyValue.children.push(node);
                    }
                  }
                }
                var lastNodeKeyValue = dynamicAttributesMap.get(computeNodeKey(path.length - 1));
                if (!!lastNodeKeyValue) {
                  lastNodeKeyValue.attributes.push(child);
                }
              }
            });
            return rootDynamicAttributes;
          };
          DynamicAttributesService.prototype.getLeafs = function(attributes) {
            var queue = [].concat(attributes);
            var result = [];
            while (!_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils'].isEmpty(queue)) {
              var first = queue.shift();
              if (!!first) {
                result = __spread(result, first.attributes);
                queue = __spread(queue, first.children);
              }
            }
            return result;
          };
          DynamicAttributesService.prototype.setValues = function(nodes, attributes) {
            var _this = this;
            var leafs = this.getLeafs(nodes);
            attributes.forEach(function(attribute) {
              var matchingLeaf = leafs.find(function(leaf) {
                return leaf.id === attribute.attributeId;
              });
              if (matchingLeaf) {
                matchingLeaf.value = _this.computeAttributeValue(matchingLeaf.type, attribute.attributeValue);
              }
            });
          };
          DynamicAttributesService.prototype.sort = function(attributes) {
            return attributes.sort(function(attr1, attr2) {
              if (_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__['StringUtils'].isNullOrEmpty(attr1.label)) {
                return 1;
              }
              if (_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__['StringUtils'].isNullOrEmpty(attr2.label)) {
                return 1;
              }
              return attr1.label.localeCompare(attr2.label);
            });
          };
          DynamicAttributesService.prototype.toBidoCustomerAttribute = function(customerCode, attributes) {
            var _this = this;
            return this.getLeafs(attributes).map(function(attribute) {
              var bidoCustomerAttribute = {
                attributeId: attribute.id,
                attributeValue: _this.attributeValueToString(attribute),
                customerCode: customerCode
              };
              return bidoCustomerAttribute;
            });
          };
          DynamicAttributesService.prototype.toBidoEquipmentAttribute = function(equipmentCode, attributes) {
            var _this = this;
            return this.getLeafs(attributes).map(function(attribute) {
              var bidoEquipmentAttribute = {
                attributeId: attribute.id,
                attributeValue: _this.attributeValueToString(attribute),
                equipmentCode: equipmentCode
              };
              return bidoEquipmentAttribute;
            });
          };
          // public toBireOperationAttribute(
          //   opeCode: string,
          //   opeVersion: string,
          //   rangeCode: string,
          //   attributes: DynamicAttributes[],
          //   statusState: string,
          //   statusUser: string,
          //   statusDate: Date
          // ): BireOperationAttributeDTO[] {
          //   return this.getLeafs(attributes).map((attribute) => {
          //     const bireOperationAttributeDTO: BireOperationAttributeDTO = {
          //       rangeCode,
          //       opeCode,
          //       opeVersion,
          //       attributeId: attribute.id,
          //       attributeValue: this.attributeValueToString(attribute),
          //       statusState,
          //       statusUser,
          //       statusDate
          //     };
          //     return bireOperationAttributeDTO;
          //   });
          // }
          DynamicAttributesService.prototype.toBireEvolutionAttribute = function(
            evolutionNumber,
            evolutionRevisionNumber,
            attributes
          ) {
            var _this = this;
            return this.getLeafs(attributes).map(function(attribute) {
              var bireEvolutionAttribute = {
                attributeId: attribute.id,
                attributeValue: _this.attributeValueToString(attribute),
                evolutionRevisionNumber: evolutionRevisionNumber,
                evolutionNumber: evolutionNumber
              };
              return bireEvolutionAttribute;
            });
          };
          DynamicAttributesService.prototype.toBireVariantAttribute = function(
            familyCode,
            variantCode,
            structureType,
            attributes
          ) {
            var _this = this;
            return this.getLeafs(attributes).map(function(attribute) {
              var bireVariantAttributeDTO = {
                attributeId: attribute.id,
                attributeValue: _this.attributeValueToString(attribute),
                familyCode: familyCode,
                variantCode: variantCode,
                structureType: structureType
              };
              return bireVariantAttributeDTO;
            });
          };
          DynamicAttributesService.prototype.toBireItemAttribute = function(
            familyCode,
            variantCode,
            structureType,
            chapter,
            marks,
            section,
            sheet,
            subject,
            attributes
          ) {
            var _this = this;
            return this.getLeafs(attributes).map(function(attribute) {
              var bireItemAttributeDTO = {
                attributeId: attribute.id,
                attributeValue: _this.attributeValueToString(attribute),
                familyCode: familyCode,
                variantCode: variantCode,
                structureType: structureType,
                chapter: chapter,
                marks: marks,
                section: section,
                sheet: sheet,
                subject: subject
              };
              return bireItemAttributeDTO;
            });
          };
          DynamicAttributesService.prototype.toBireEventAttributeId = function(notificationCode, attributes) {
            var _this = this;
            return this.getLeafs(attributes).map(function(attribute) {
              var bireEvolutionAttributeId = {
                attributeId: attribute.id,
                attributeValue: _this.attributeValueToString(attribute),
                notificationCode: notificationCode
              };
              return bireEvolutionAttributeId;
            });
          };
          DynamicAttributesService.prototype.toBireOperationAttributeId = function(
            opeCode,
            rangeCode,
            opeVersion,
            attributes
          ) {
            var _this = this;
            return this.getLeafs(attributes).map(function(attribute) {
              var bireEvolutionAttributeId = {
                attributeId: attribute.id,
                attributeValue: _this.attributeValueToString(attribute),
                opeCode: opeCode,
                rangeCode: rangeCode,
                opeVersion: opeVersion
              };
              return bireEvolutionAttributeId;
            });
          };
          DynamicAttributesService.prototype.toBireEvolutionAttributeId = function(
            evolutionNumber,
            evolutionRevisionNumber,
            attributes
          ) {
            return this.getLeafs(attributes).map(function(attribute) {
              var bireEvolutionAttributeId = {
                attributeId: attribute.id,
                evolutionRevisionNumber: evolutionRevisionNumber,
                evolutionNumber: evolutionNumber
              };
              return bireEvolutionAttributeId;
            });
          };
          DynamicAttributesService.prototype.toBireEquipmentAttributeId = function(equipmentCode, attributes) {
            return this.getLeafs(attributes).map(function(attribute) {
              var bireEquipmentAttributeId = {
                attributeId: attribute.id,
                equipmentCode: equipmentCode
              };
              return bireEquipmentAttributeId;
            });
          };
          DynamicAttributesService.prototype.toBireModificationAttributeId = function(
            modificationNumber,
            modificationRevisionNumber,
            modificationType,
            familyCode,
            structureType,
            attributes
          ) {
            return this.getLeafs(attributes).map(function(attribute) {
              var bireEvolutionAttributeId = {
                attributeId: attribute.id,
                modificationNumber: modificationNumber,
                modificationRevisionNumber: modificationRevisionNumber,
                modificationType: modificationType,
                familyCode: familyCode,
                structureType: structureType
              };
              return bireEvolutionAttributeId;
            });
          };
          DynamicAttributesService.prototype.toBireSbAttribute = function(sbNumber, sbRevisionNumber, attributes) {
            var _this = this;
            return this.getLeafs(attributes).map(function(attribute) {
              var bireSbAttribute = {
                attributeId: attribute.id,
                attributeValue: _this.attributeValueToString(attribute),
                sbNumber: sbNumber,
                sbRevisionNumber: sbRevisionNumber
              };
              return bireSbAttribute;
            });
          };
          DynamicAttributesService.prototype.toBireTaskAttribute = function(taskCode, taskVersion, attributes) {
            var _this = this;
            return this.getLeafs(attributes).map(function(attribute) {
              var bireTaskAttribute = {
                taskCode: taskCode,
                taskVersion: taskVersion,
                attributeId: attribute.id,
                attributeValue: _this.attributeValueToString(attribute)
              };
              return bireTaskAttribute;
            });
          };
          DynamicAttributesService.prototype.toBireTaskAttributeId = function(taskCode, taskVersion, attributes) {
            return this.getLeafs(attributes).map(function(attribute) {
              var bireTaskAttributeId = {
                attributeId: attribute.id,
                taskCode: taskCode,
                taskVersion: taskVersion
              };
              return bireTaskAttributeId;
            });
          };
          DynamicAttributesService.prototype.toBireNotificationAttributeId = function(notificationCode, attributes) {
            return this.getLeafs(attributes).map(function(attribute) {
              var bidoNotificationAttributeDTOId = {
                attributeId: attribute.id,
                notificationCode: notificationCode
              };
              return bidoNotificationAttributeDTOId;
            });
          };
          DynamicAttributesService.prototype.toBirePnAttribute = function(pnCode, attributes) {
            var _this = this;
            return this.getLeafs(attributes).map(function(attribute) {
              var birePnAttribute = {
                pnCode: pnCode,
                attributeId: attribute.id,
                attributeValue: _this.attributeValueToString(attribute)
              };
              return birePnAttribute;
            });
          };
          DynamicAttributesService.prototype.toBireModificationAttribute = function(bireModificationDTO, attributes) {
            var _this = this;
            return this.getLeafs(attributes).map(function(attribute) {
              var bireModificationAttributeDTO = {
                attributeId: attribute.id,
                attributeValue: _this.attributeValueToString(attribute),
                modificationType: bireModificationDTO.modificationType,
                modificationNumber: bireModificationDTO.modificationNumber,
                modificationRevisionNumber: bireModificationDTO.modificationRevisionNumber,
                familyCode: bireModificationDTO.familyCode,
                structureType: bireModificationDTO.structureType
              };
              return bireModificationAttributeDTO;
            });
          };
          DynamicAttributesService.prototype.toBirePlanAttribute = function(planCode, attributes) {
            var _this = this;
            return this.getLeafs(attributes).map(function(attribute) {
              var birePlanAttribute = {
                planCode: planCode,
                attributeId: attribute.id,
                attributeValue: _this.attributeValueToString(attribute)
              };
              return birePlanAttribute;
            });
          };
          DynamicAttributesService.prototype.computeAttributeValue = function(type, value) {
            if (!!value) {
              if (
                type ===
                _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_10__['DynamicAttributeType'].Boolean
              ) {
                return value === 'true';
              } else if (
                type === _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_10__['DynamicAttributeType'].Date
              ) {
                return new Date(value);
              } else {
                return value;
              }
            } else {
              return undefined;
            }
          };
          DynamicAttributesService.prototype.computeDefaultAttributeValue = function(type) {
            if (
              type === _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_10__['DynamicAttributeType'].Boolean
            ) {
              return false;
            } else if (
              type === _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_10__['DynamicAttributeType'].Text
            ) {
              return '';
            } else {
              return undefined;
            }
          };
          DynamicAttributesService.prototype.computeListOptions = function(attribute) {
            var _this = this;
            var list = [];
            if (this.isBidoAttribute(attribute)) {
              var bidoAttribute = attribute;
              if (!!bidoAttribute.bidoAttributeValueDatas) {
                list = bidoAttribute.bidoAttributeValueDatas;
              }
            } else if (this.isBireAttribute(attribute)) {
              var bireAttribute = attribute;
              if (!!bireAttribute.bireAttributeValueDatas) {
                list = bireAttribute.bireAttributeValueDatas;
              }
            }
            return list.map(function(elt) {
              var label = _this.getAttributeValueLabel(elt);
              return {
                label: label,
                value: label
              };
            });
          };
          DynamicAttributesService.prototype.getAttributeLabel = function(attribute) {
            switch (this.translateService.currentLang) {
              case _constants_lang_constants__WEBPACK_IMPORTED_MODULE_5__['LangConstants'].ENGLISH_CODE:
                return !!attribute.attributeNameEn ? attribute.attributeNameEn : '';
              case _constants_lang_constants__WEBPACK_IMPORTED_MODULE_5__['LangConstants'].FRENCH_CODE:
                return !!attribute.attributeNameFr ? attribute.attributeNameFr : '';
              default:
                return '';
            }
          };
          DynamicAttributesService.prototype.getAttributeType = function(bidoAttribute) {
            switch (bidoAttribute.attributeType) {
              case _constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_4__['BidoAttributeConstants']
                .ATTRIBUTE_TYPE_BOOLEAN:
                return _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_10__['DynamicAttributeType'].Boolean;
              case _constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_4__['BidoAttributeConstants']
                .ATTRIBUTE_TYPE_DATE:
                return _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_10__['DynamicAttributeType'].Date;
              case _constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_4__['BidoAttributeConstants']
                .ATTRIBUTE_TYPE_LIST:
                return _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_10__['DynamicAttributeType'].List;
              case _constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_4__['BidoAttributeConstants']
                .ATTRIBUTE_TYPE_TEXT:
                return _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_10__['DynamicAttributeType'].Text;
              default:
                return _enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_10__['DynamicAttributeType'].Text;
            }
          };
          DynamicAttributesService.prototype.getAttributeValueLabel = function(attribute) {
            switch (this.translateService.currentLang) {
              case _constants_lang_constants__WEBPACK_IMPORTED_MODULE_5__['LangConstants'].ENGLISH_CODE:
                return attribute.textEn;
              case _constants_lang_constants__WEBPACK_IMPORTED_MODULE_5__['LangConstants'].FRENCH_CODE:
                return attribute.textFr;
              default:
                return '';
            }
          };
          DynamicAttributesService.prototype.isBidoAttribute = function(attribute) {
            var bidoAttributeValueDatas = attribute.bidoAttributeValueDatas;
            return bidoAttributeValueDatas !== undefined && bidoAttributeValueDatas !== null;
          };
          DynamicAttributesService.prototype.isBireAttribute = function(attribute) {
            var bireAttributeValueDatas = attribute.bireAttributeValueDatas;
            return bireAttributeValueDatas !== undefined && bireAttributeValueDatas !== null;
          };
          var DynamicAttributesService_1;
          DynamicAttributesService.DATE_FORMAT = 'YYYY-MM-DD';
          DynamicAttributesService = DynamicAttributesService_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _services_app_config_service__WEBPACK_IMPORTED_MODULE_7__['AppConfigService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateService']
              ])
            ],
            DynamicAttributesService
          );
          return DynamicAttributesService;
        })(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/components/dynamic-attributes/enums/dynamic-attribute-type.enum.ts':
      /*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-attributes/enums/dynamic-attribute-type.enum.ts ***!
  \*******************************************************************************************/
      /*! exports provided: DynamicAttributeType */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DynamicAttributeType', function() {
          return DynamicAttributeType;
        });
        var DynamicAttributeType;
        (function(DynamicAttributeType) {
          DynamicAttributeType['Boolean'] = 'Boolean';
          DynamicAttributeType['Date'] = 'Date';
          DynamicAttributeType['List'] = 'List';
          DynamicAttributeType['Text'] = 'Text';
        })(DynamicAttributeType || (DynamicAttributeType = {}));

        /***/
      },

    /***/ './src/app/shared/constants/bido-attribute-constants.ts':
      /*!**************************************************************!*\
  !*** ./src/app/shared/constants/bido-attribute-constants.ts ***!
  \**************************************************************/
      /*! exports provided: BidoAttributeConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BidoAttributeConstants', function() {
          return BidoAttributeConstants;
        });
        var BidoAttributeConstants = /** @class */ (function() {
          function BidoAttributeConstants() {}
          /**************************************************************************
           * Attribute Types
           *************************************************************************/
          BidoAttributeConstants.ATTRIBUTE_TYPE_TEXT = 'Text';
          BidoAttributeConstants.ATTRIBUTE_TYPE_DATE = 'Date';
          BidoAttributeConstants.ATTRIBUTE_TYPE_BOOLEAN = 'Boolean';
          BidoAttributeConstants.ATTRIBUTE_TYPE_LIST = 'List';
          /**************************************************************************
           * Standard Attributes
           *************************************************************************/
          BidoAttributeConstants.SAP_EQUIPMENT_CODE = 1;
          BidoAttributeConstants.ASSET_LOCATION = 2;
          BidoAttributeConstants.MANUFACTURER = 3;
          BidoAttributeConstants.ICAO_CODE = 4;
          BidoAttributeConstants.ITEM_NUMBER = 5;
          BidoAttributeConstants.EVENT_LOCATION = 6;
          BidoAttributeConstants.ASSET_SYSTEM_SOURCE_ID = 7;
          BidoAttributeConstants.ASSET_SYSTEM_SOURCE_REFERENCE = 8;
          BidoAttributeConstants.EVENT_SYSTEM_SOURCE_ID = 9;
          BidoAttributeConstants.EVENT_SYSTEM_SOURCE_REFERENCE = 10;
          BidoAttributeConstants.FUNCTIONAL_LOCATION = 11;
          BidoAttributeConstants.EVENT_IS_DEFERRED_DEFECT = 12;
          BidoAttributeConstants.EVENT_DD_DELAY_CATEGORY = 13;
          BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZED_VALUE = 14;
          BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZED_UNIT = 15;
          BidoAttributeConstants.EVENT_DD_TASK_PROPOSED_TO_PROCESS = 16;
          BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZATION_NUMBER = 17;
          BidoAttributeConstants.EVENT_DEFECT_LAST_AUTHOR = 18;
          BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_LAST_AUTHOR = 19;
          BidoAttributeConstants.EVENT_DEFECT_DEFERRAL_LAST_AUTHOR = 20;
          BidoAttributeConstants.EVENT_DEFECT_DETECTION_CONTEXT = 21;
          BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_DESCRIPTION = 22;
          BidoAttributeConstants.EVENT_DEFECT_LOG_NUMBER = 23;
          BidoAttributeConstants.EVENT_DEFECT_EXTENSION = 24;
          BidoAttributeConstants.EVENT_DEFECT_AUTHOR = 25;
          BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_AUTHOR = 26;
          BidoAttributeConstants.EVENT_DEFECT_DEFERRAL_AUTHOR = 27;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_WO_CONTEXT = 28;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_AUTHORIZATION_NUMBER = 29;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_LIMIT_DATE = 30;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_REFUSAL_REASON = 31;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_AUTHOR = 32;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_DECISION_LAST_AUTHOR = 33;
          BidoAttributeConstants.MAINTENANCE_PLAN_ORIGINAL_DEADLINES = 34;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_FLIGHT_RESTRICTIONS = 35;
          BidoAttributeConstants.EVENT_DEFECT_FLIGHT_RESTRICTIONS = 36;
          BidoAttributeConstants.EVENT_DEFECT_IS_CRITICAL = 37;
          BidoAttributeConstants.FLIGHT_GONOGO_VALIDATION = 38;
          BidoAttributeConstants.EVENT_TASK_APPLIED_FLIGHT_CONTEXT = 39;
          BidoAttributeConstants.IGNORE_INITIAL_DEADLINE_NEXT_OCCURRENCE_CALCULATION = 40;
          BidoAttributeConstants.EVENT_DEFECT_INSPECTION_MEAN = 41;
          BidoAttributeConstants.EVENT_DEFECT_SRM_REFERENCE = 42;
          BidoAttributeConstants.EVENT_DEFECT_FRAME_FROM = 43;
          BidoAttributeConstants.EVENT_DEFECT_FRAME_FROM_DISTANCE = 44;
          BidoAttributeConstants.EVENT_DEFECT_FRAME_TO = 45;
          BidoAttributeConstants.EVENT_DEFECT_FRAME_TO_DISTANCE = 46;
          BidoAttributeConstants.EVENT_DEFECT_STRINGER_FROM = 47;
          BidoAttributeConstants.EVENT_DEFECT_STRINGER_FROM_DISTANCE = 48;
          BidoAttributeConstants.EVENT_DEFECT_STRINGER_TO = 49;
          BidoAttributeConstants.EVENT_DEFECT_STRINGER_TO_DISTANCE = 50;
          BidoAttributeConstants.EVENT_DEFECT_RIB_FROM = 51;
          BidoAttributeConstants.EVENT_DEFECT_RIB_FROM_DISTANCE = 52;
          BidoAttributeConstants.EVENT_DEFECT_RIB_TO = 53;
          BidoAttributeConstants.EVENT_DEFECT_RIB_TO_DISTANCE = 54;
          BidoAttributeConstants.EVENT_DEFECT_BEAM_FROM = 55;
          BidoAttributeConstants.EVENT_DEFECT_BEAM_FROM_DISTANCE = 56;
          BidoAttributeConstants.EVENT_DEFECT_BEAM_TO = 57;
          BidoAttributeConstants.EVENT_DEFECT_BEAM_TO_DISTANCE = 56;
          BidoAttributeConstants.EVENT_DEFECT_DEPTH = 59;
          BidoAttributeConstants.EVENT_DEFECT_LENGHT = 60;
          BidoAttributeConstants.EVENT_DEFECT_WIDTH = 61;
          BidoAttributeConstants.EVENT_DEFECT_SURFACE_AREA = 62;
          BidoAttributeConstants.FLIGHT_SYSTEM_SOURCE_ID = 63;
          BidoAttributeConstants.FLIGHT_SYSTEM_SOURCE_REFERENCE = 64;
          BidoAttributeConstants.EVENT_WORK_ORDER_SOURCE = 65;
          BidoAttributeConstants.EVENT_FAULT_CODE = 68;
          // Dassault *******************************************************************
          BidoAttributeConstants.DAV_HUMS_STATUS = 2000;
          BidoAttributeConstants.DAV_HUMS_MESSAGE = 2001;
          BidoAttributeConstants.DAV_MANUAL_FLIGHT_ENTRIES = 2003;
          return BidoAttributeConstants;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=default~administration-attributes-attributes-module~administration-business-partner-business-partner~1045786c.js.map
