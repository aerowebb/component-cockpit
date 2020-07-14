(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~logistics-order-document-order-document-module~logistics-sales-document-sales-document-modul~9d7d02cf'],
  {
    /***/ './node_modules/primeng/keyfilter.js':
      /*!*******************************************!*\
  !*** ./node_modules/primeng/keyfilter.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* Shorthand */

        function __export(m) {
          for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
        Object.defineProperty(exports, '__esModule', { value: true });
        __export(
          __webpack_require__(
            /*! ./components/keyfilter/keyfilter */ './node_modules/primeng/components/keyfilter/keyfilter.js'
          )
        );

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.component.html':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.component.html ***!
  \****************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ "purchaseRequestPopin.title" | translate }}</div>\r\n\r\n    <i class="material-icons aw-icon aw-icon-with-border" (click)="onCancel()">close</i>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section search-criteria-section">\r\n        <h4 class="section-title">{{ "global.search" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="column">\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ "purchaseRequestPopin.prCode" | translate }} </label>\r\n\r\n                <div class="form-control"><input class="aw-input" type="text" [(ngModel)]="searchObject.prCode" /></div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ "purchaseRequestPopin.prName" | translate }} </label>\r\n\r\n                <div class="form-control"><input class="aw-input" type="text" [(ngModel)]="searchObject.prName" /></div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ "purchaseRequestPopin.prDescription" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <input class="aw-input" type="text" [(ngModel)]="searchObject.prDescription" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ "purchaseRequestPopin.creationDate" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-calendar\r\n                    showButtonBar="true"\r\n                    [monthNavigator]="true"\r\n                    [yearNavigator]="true"\r\n                    [yearRange]="sessionService.calendarYearRange"\r\n                    class="aw-calendar"\r\n                    [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                    [locale]="sessionService.calendarFormat"\r\n                    [(ngModel)]="creation"\r\n                    appendTo="body"\r\n                  ></p-calendar>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ "purchaseRequestPopin.receptionDate" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-calendar\r\n                    showButtonBar="true"\r\n                    [monthNavigator]="true"\r\n                    [yearNavigator]="true"\r\n                    [yearRange]="sessionService.calendarYearRange"\r\n                    class="aw-calendar"\r\n                    [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                    [locale]="sessionService.calendarFormat"\r\n                    [(ngModel)]="reception"\r\n                    appendTo="body"\r\n                  ></p-calendar>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ "purchaseRequestPopin.bidoCustomerCustomerCode" | translate }} </label>\r\n\r\n                <div class="form-control"><input class="aw-input" type="text" [(ngModel)]="customerCode" /></div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ "purchaseRequestPopin.prCategory" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="propertyPrCategory"\r\n                    [(ngModel)]="searchObject.prCategory"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ "purchaseRequestPopin.prStatus" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="propertyPrStatus"\r\n                    [(ngModel)]="searchObject.prStatus"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group"></div>\r\n            </div>\r\n\r\n            <div class="row search-criteria-footer">\r\n              <div class="search-actions">\r\n                <button type="button" color="primary" mat-raised-button (click)="searchPurchaseRequests()">\r\n                  <span>{{ "global.toSearch" | translate }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section results-section">\r\n        <h4 class="section-title">\r\n          {{ "global.results" | translate }} ({{ resultsTable.list ? resultsTable.list.length : 0 }})\r\n        </h4>\r\n\r\n        <div class="section-content">\r\n          <p-table\r\n            [resizableColumns]="true"\r\n            #ptable\r\n            class="aw-table2"\r\n            [columns]="resultsTableCols"\r\n            [value]="resultsTable.list"\r\n            [(selection)]="selectedObject"\r\n            selectionMode="single"\r\n            dataKey="prCode"\r\n            [scrollable]="true"\r\n            (onRowUnselect)="onRowUnselect()"\r\n          >\r\n            <ng-template pTemplate="emptymessage">\r\n              <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n              <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                <div class="lds-hourglass"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="caption">\r\n              <div class="aw-table-header">\r\n                <div class="aw-table-global-filter">\r\n                  <label class="aw-table-global-filter-label">\r\n                    <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    #ptableGlobalFilter\r\n                    class="aw-table-global-filter-input"\r\n                    type="text"\r\n                    placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                    (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="colgroup" let-columns>\r\n              <colgroup>\r\n                <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="header" let-columns>\r\n              <tr>\r\n                <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                  {{ "purchaseRequestPopin." + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }" [ngSwitch]="col.field">\r\n                  <span *ngSwitchCase="\'prName\'" title="{{ rowData[col.field] }}">{{ rowData[col.field] }}</span>\r\n                  <span *ngSwitchCase="\'prDescription\'" title="{{ rowData[col.field] }}">{{ rowData[col.field] }}</span>\r\n                  <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="onCancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button [disabled]="isOneObjectSelected()" color="primary" type="button" mat-raised-button (click)="onValidate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.component.ts':
      /*!**************************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.component.ts ***!
  \**************************************************************************************************************/
      /*! exports provided: DialogSearchPurchaseRequestComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchPurchaseRequestComponent',
          function() {
            return DialogSearchPurchaseRequestComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../utils/label-value-utils */ './src/app/shared/utils/label-value-utils.ts'
        );
        /* harmony import */ var _dialog_search_purchase_request_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./dialog-search-purchase-request.service */ './src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.service.ts'
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

        var DialogSearchPurchaseRequestComponent = /** @class */ (function(_super) {
          __extends(DialogSearchPurchaseRequestComponent, _super);
          function DialogSearchPurchaseRequestComponent(
            dialogSearchPurchaseRequestService,
            sessionService,
            translateService,
            messageService,
            propertiesService,
            dateService
          ) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write,
                'purchaseRequestPopin'
              ) || this;
            _this.dialogSearchPurchaseRequestService = dialogSearchPurchaseRequestService;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.dateService = dateService;
            _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.resultsTable = {
              list: [],
              moreResults: false
            };
            _this.searchObject = {};
            _this.selectedObject = {};
            _this.resultsTableCols = [
              { field: 'prCode', alignment: 'left' },
              { field: 'prName', alignment: 'left' },
              { field: 'prDescription', alignment: 'left' },
              { field: 'creationDate', alignment: 'left' },
              { field: 'receptionDate', alignment: 'left' },
              { field: 'bidoCustomerCustomerCode', alignment: 'left' },
              { field: 'prCategory', alignment: 'left' },
              { field: 'prStatus', alignment: 'left' }
            ];
            _this.loadPrCategories();
            _this.loadPrStatus();
            return _this;
          }
          Object.defineProperty(DialogSearchPurchaseRequestComponent.prototype, 'purchaseOrderCode', {
            // VISIBLE INPUT
            // tslint:disable-next-line: no-unsafe-any
            set: function(code) {
              this.searchObject.prCode = code;
            },
            enumerable: true,
            configurable: true
          });
          DialogSearchPurchaseRequestComponent.prototype.searchPurchaseRequests = function() {
            var _this = this;
            this.dialogSearchPurchaseRequestService
              .findBidtPurchaseRequestsByCriteriaForOVS(
                this.searchObject,
                this.customerCode,
                this.creation,
                this.reception
              )
              .subscribe(
                function(results) {
                  if (results) {
                    results.list.forEach(function(element) {
                      _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_8__['LabelValueUtils'].stringValueToLabel(
                        element,
                        'prCategory',
                        _this.propertyPrCategory
                      );
                      _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_8__['LabelValueUtils'].stringValueToLabel(
                        element,
                        'prStatus',
                        _this.propertyPrStatus
                      );
                      element.creationDate = _this.formatDate(element.prCreationDate);
                      element.receptionDate = _this.formatDate(element.prReceptionDate);
                    });
                    _this.resultsTable = results;
                  }
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSearch'));
                }
              );
          };
          /*
      <summary>Emit the selectedObject on validate</summary>
      */
          DialogSearchPurchaseRequestComponent.prototype.onValidate = function() {
            _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_8__['LabelValueUtils'].labelToStringValue(
              this.selectedObject,
              'prCategory',
              this.propertyPrCategory
            );
            _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_8__['LabelValueUtils'].labelToStringValue(
              this.selectedObject,
              'prStatus',
              this.propertyPrStatus
            );
            this.onSelected.emit(this.selectedObject);
            this.selectedObject = {};
            this.display = false;
          };
          // Clean the selectedObject object if the row is unselect
          DialogSearchPurchaseRequestComponent.prototype.onRowUnselect = function() {
            this.selectedObject = {};
          };
          // Clean all the object on rerender
          DialogSearchPurchaseRequestComponent.prototype.onShow = function() {
            this.selectedObject = {};
            this.resultsTable = {
              list: [],
              moreResults: false
            };
          };
          /*
      <summary>Close the pop up on cancel</summary>
      */
          DialogSearchPurchaseRequestComponent.prototype.onCancel = function() {
            this.selectedObject = {};
            this.resultsTable = {
              list: [],
              moreResults: false
            };
            this.display = false;
          };
          DialogSearchPurchaseRequestComponent.prototype.isOneObjectSelected = function() {
            return !this.selectedObject.prCode;
          };
          DialogSearchPurchaseRequestComponent.prototype.loadPrCategories = function() {
            var _this = this;
            this.propertiesService.getValue('getPurchaseCategoryMap').subscribe(
              function(results) {
                if (results) {
                  _this.propertyPrCategory = results;
                }
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetPrCategoryList'));
              }
            );
          };
          DialogSearchPurchaseRequestComponent.prototype.loadPrStatus = function() {
            var _this = this;
            this.propertiesService.getValue('getPurchaseStatusMap').subscribe(
              function(results) {
                if (results) {
                  _this.propertyPrStatus = results;
                }
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetPrStatusList'));
              }
            );
          };
          DialogSearchPurchaseRequestComponent.prototype.formatDate = function(date) {
            if (!!date) {
              return this.dateService.dateToString(new Date(date));
            } else {
              return '';
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(), __metadata('design:type', Object)],
            DialogSearchPurchaseRequestComponent.prototype,
            'onSelected',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('pr-code'),
              __metadata('design:type', String),
              __metadata('design:paramtypes', [String])
            ],
            DialogSearchPurchaseRequestComponent.prototype,
            'purchaseOrderCode',
            null
          );
          DialogSearchPurchaseRequestComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-search-purchase-request',
                template: __webpack_require__(
                  /*! ./dialog-search-purchase-request.component.html */ './src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _dialog_search_purchase_request_service__WEBPACK_IMPORTED_MODULE_9__[
                  'DialogSearchPurchaseRequestService'
                ],
                _services_session_service__WEBPACK_IMPORTED_MODULE_7__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _services_properties_service__WEBPACK_IMPORTED_MODULE_6__['PropertiesService'],
                _services_date_service__WEBPACK_IMPORTED_MODULE_4__['DateService']
              ])
            ],
            DialogSearchPurchaseRequestComponent
          );
          return DialogSearchPurchaseRequestComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.module.ts':
      /*!***********************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.module.ts ***!
  \***********************************************************************************************************/
      /*! exports provided: DialogSearchPurchaseRequestModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchPurchaseRequestModule',
          function() {
            return DialogSearchPurchaseRequestModule;
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
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_3__
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
        /* harmony import */ var _dialog_search_purchase_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./dialog-search-purchase-request.component */ './src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.component.ts'
        );
        /* harmony import */ var _dialog_search_purchase_request_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./dialog-search-purchase-request.service */ './src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.service.ts'
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
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__['DropdownModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_3__['TableModule']
        ];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _dialog_search_purchase_request_component__WEBPACK_IMPORTED_MODULE_8__['DialogSearchPurchaseRequestComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _dialog_search_purchase_request_service__WEBPACK_IMPORTED_MODULE_9__['DialogSearchPurchaseRequestService']
        ];
        var DialogSearchPurchaseRequestModule = /** @class */ (function() {
          function DialogSearchPurchaseRequestModule() {}
          DialogSearchPurchaseRequestModule = __decorate(
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
            DialogSearchPurchaseRequestModule
          );
          return DialogSearchPurchaseRequestModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.service.ts':
      /*!************************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.service.ts ***!
  \************************************************************************************************************/
      /*! exports provided: DialogSearchPurchaseRequestService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchPurchaseRequestService',
          function() {
            return DialogSearchPurchaseRequestService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_purchase_request_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/bidt-purchase-request.api */ './src/app/shared/api/bidt-purchase-request.api.ts'
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

        var DialogSearchPurchaseRequestService = /** @class */ (function(_super) {
          __extends(DialogSearchPurchaseRequestService, _super);
          function DialogSearchPurchaseRequestService(http, appConfigService, bidtPurchaseRequestApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtPurchaseRequestApi = bidtPurchaseRequestApi;
            return _this;
          }
          DialogSearchPurchaseRequestService.prototype.findBidtPurchaseRequestsByCriteriaForOVS = function(
            criteria,
            custumerCode,
            creation,
            reception
          ) {
            var param = {
              bidtPurchaseRequestCriteria: criteria,
              supplier: custumerCode,
              creationDate: creation,
              receptionDate: reception
            };
            return _super.prototype.post.call(
              this,
              this.bidtPurchaseRequestApi.findBidtPurchaseRequestsByCriteriaForOVS,
              param
            );
          };
          DialogSearchPurchaseRequestService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_bidt_purchase_request_api__WEBPACK_IMPORTED_MODULE_2__['BidtPurchaseRequestApi']
              ])
            ],
            DialogSearchPurchaseRequestService
          );
          return DialogSearchPurchaseRequestService;
        })(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=default~logistics-order-document-order-document-module~logistics-sales-document-sales-document-modul~9d7d02cf.js.map
