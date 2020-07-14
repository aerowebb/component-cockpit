(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~administration-administration-module~administration-contact-contact-module~administration-ev~1f3bf018'],
  {
    /***/ './src/app/shared/components/dialog-search-customer/dialog-search-customer.component.html':
      /*!************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-customer/dialog-search-customer.component.html ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="50">\r\n  <a-header>\r\n    <div class="modal-title">{{ "customerPopin.title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="section">\r\n      <h4 class="section-title">\r\n        {{ "global.results" | translate }} ({{ resultsTable.list ? resultsTable.list.length : 0 }})\r\n      </h4>\r\n\r\n      <div class="section-content">\r\n        <p-table\r\n          [resizableColumns]="true"\r\n          #ptable\r\n          class="aw-table2"\r\n          [columns]="resultsTableCols"\r\n          [value]="resultsTable.list"\r\n          [(selection)]="selectedObject"\r\n          selectionMode="single"\r\n          dataKey="customerCode"\r\n          [scrollable]="true"\r\n          (onRowUnselect)="onRowUnselect()"\r\n        >\r\n          <ng-template pTemplate="emptymessage">\r\n            <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n            <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n              <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n              <div class="lds-hourglass"></div>\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="caption">\r\n            <div class="aw-table-header">\r\n              <div class="aw-table-global-filter">\r\n                <label class="aw-table-global-filter-label">\r\n                  <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                </label>\r\n\r\n                <input\r\n                  #ptableGlobalFilter\r\n                  class="aw-table-global-filter-input"\r\n                  type="text"\r\n                  placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                  (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                />\r\n              </div>\r\n\r\n              <div class="aw-table-actions"></div>\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="colgroup" let-columns>\r\n            <colgroup>\r\n              <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n            </colgroup>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="header" let-columns>\r\n            <tr>\r\n              <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                {{ "customerPopin." + col.field | translate }}\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n            <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n              <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">{{ rowData[col.field] }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </p-table>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="onCancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button type="button" color="primary" mat-raised-button (click)="onValidate()" [disabled]="isOneObjectSelected()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-customer/dialog-search-customer.component.ts':
      /*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-customer/dialog-search-customer.component.ts ***!
  \**********************************************************************************************/
      /*! exports provided: DialogSearchCustomerComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchCustomerComponent',
          function() {
            return DialogSearchCustomerComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _dialog_search_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./dialog-search-customer.service */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.service.ts'
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

        /**
         * DEPRECATED: use `aw-dialog-bido-customer`
         */
        var DialogSearchCustomerComponent = /** @class */ (function(_super) {
          __extends(DialogSearchCustomerComponent, _super);
          function DialogSearchCustomerComponent(dialogSearchCustomerService) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'customerOVSPopup'
              ) || this;
            _this.dialogSearchCustomerService = dialogSearchCustomerService;
            _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.resultsTable = {
              list: [],
              moreResults: false
            };
            _this.searchObject = {};
            _this.selectedObject = {};
            _this.resultsTableCols = [
              { field: 'customerCode', alignment: 'left' },
              { field: 'customerName', alignment: 'left' }
            ];
            return _this;
          }
          Object.defineProperty(DialogSearchCustomerComponent.prototype, 'qualificationCode', {
            set: function(code) {
              this.searchObject = {};
              this.searchObject.customerCode = code;
            },
            enumerable: true,
            configurable: true
          });
          DialogSearchCustomerComponent.prototype.ngOnInit = function() {
            this.searchCustomers();
          };
          /**
           * Search customers for operator or owner
           */
          DialogSearchCustomerComponent.prototype.searchCustomers = function() {
            var _this = this;
            if (!!this.iscustomerOwner) {
              this.searchObject.isOwner = true;
              this.dialogSearchCustomerService.findBidoCustomersBySearchCriteria(this.searchObject).subscribe(
                function(results) {
                  if (results) {
                    _this.resultsTable = results;
                    _this.totalFilteredRows = _this.resultsTable.list.length;
                  }
                },
                function() {
                  // TODO
                }
              );
            } else if (!!this.iscustomerOperator) {
              this.searchObject.isOperator = true;
              this.dialogSearchCustomerService.findBidoCustomersBySearchCriteria(this.searchObject).subscribe(
                function(results) {
                  if (results) {
                    _this.resultsTable = results;
                    _this.totalFilteredRows = _this.resultsTable.list.length;
                  }
                },
                function() {
                  // TODO
                }
              );
            } else {
              this.searchObject = {};
              this.dialogSearchCustomerService.findBidoCustomersBySearchCriteria(this.searchObject).subscribe(
                function(results) {
                  if (results) {
                    _this.resultsTable = results;
                    _this.totalFilteredRows = _this.resultsTable.list.length;
                  }
                },
                function() {
                  // TODO
                }
              );
            }
          };
          /*
      <summary>Emit the selectedObject on validate</summary>
      */
          DialogSearchCustomerComponent.prototype.onValidate = function() {
            this.onSelected.emit(this.selectedObject);
            this.display = false;
          };
          // Clean the selectedObject object if the row is unselect
          DialogSearchCustomerComponent.prototype.onRowUnselect = function() {
            this.selectedObject = {};
          };
          // Clean all the object on rerender
          DialogSearchCustomerComponent.prototype.onShow = function() {
            this.selectedObject = {};
            this.resultsTable = {
              list: [],
              moreResults: false
            };
          };
          /*
      <summary>Close the pop up on cancel</summary>
      */
          DialogSearchCustomerComponent.prototype.onCancel = function() {
            this.selectedObject = {};
            this.resultsTable = {
              list: [],
              moreResults: false
            };
            this.display = false;
          };
          DialogSearchCustomerComponent.prototype.isOneObjectSelected = function() {
            return !this.selectedObject.customerCode;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogSearchCustomerComponent.prototype,
            'iscustomerOwner',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogSearchCustomerComponent.prototype,
            'iscustomerOperator',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('customer-code'),
              __metadata('design:type', String),
              __metadata('design:paramtypes', [String])
            ],
            DialogSearchCustomerComponent.prototype,
            'qualificationCode',
            null
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(), __metadata('design:type', Object)],
            DialogSearchCustomerComponent.prototype,
            'onSelected',
            void 0
          );
          DialogSearchCustomerComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-search-customer',
                template: __webpack_require__(
                  /*! ./dialog-search-customer.component.html */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _dialog_search_customer_service__WEBPACK_IMPORTED_MODULE_3__['DialogSearchCustomerService']
              ])
            ],
            DialogSearchCustomerComponent
          );
          return DialogSearchCustomerComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts':
      /*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts ***!
  \*******************************************************************************************/
      /*! exports provided: DialogSearchCustomerModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchCustomerModule',
          function() {
            return DialogSearchCustomerModule;
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
        /* harmony import */ var _dialog_search_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./dialog-search-customer.component */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.component.ts'
        );
        /* harmony import */ var _dialog_search_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./dialog-search-customer.service */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.service.ts'
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
          _dialog_search_customer_component__WEBPACK_IMPORTED_MODULE_6__['DialogSearchCustomerComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_dialog_search_customer_service__WEBPACK_IMPORTED_MODULE_7__['DialogSearchCustomerService']];
        var DialogSearchCustomerModule = /** @class */ (function() {
          function DialogSearchCustomerModule() {}
          DialogSearchCustomerModule = __decorate(
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
            DialogSearchCustomerModule
          );
          return DialogSearchCustomerModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-customer/dialog-search-customer.service.ts':
      /*!********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-customer/dialog-search-customer.service.ts ***!
  \********************************************************************************************/
      /*! exports provided: DialogSearchCustomerService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchCustomerService',
          function() {
            return DialogSearchCustomerService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
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

        var DialogSearchCustomerService = /** @class */ (function(_super) {
          __extends(DialogSearchCustomerService, _super);
          function DialogSearchCustomerService(http, appConfigService, fleetManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            return _this;
          }
          DialogSearchCustomerService.prototype.findBidoCustomersBySearchCriteria = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoCustomersBySearchCriteria,
              criteria
            );
          };
          DialogSearchCustomerService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi']
              ])
            ],
            DialogSearchCustomerService
          );
          return DialogSearchCustomerService;
        })(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=default~administration-administration-module~administration-contact-contact-module~administration-ev~1f3bf018.js.map
