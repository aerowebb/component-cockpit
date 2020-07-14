(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~engineering-management-applicable-configuration-applicable-configuration-module~engineering-~9b74530e'],
  {
    /***/ './src/app/shared/components/status-update-history/status-update-history.component.html':
      /*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/status-update-history/status-update-history.component.html ***!
  \**********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\n  <a-header>\n    <div class="modal-title">{{ "updates" | translate }} ({{ tableRows ? tableRows.length : 0 }})</div>\n  </a-header>\n\n  <a-content>\n    <div class="search-dialog-container">\n      <div class="section search-critetia-section">\n        <h4 class="section-title">{{ componentId + ".status" | translate }}</h4>\n\n        <div class="section-content">\n          <div class="column">\n            <div class="row">\n              <div class="form-group">\n                <label class="form-label"> {{ componentId + ".statusState" | translate }} </label>\n                <div class="form-control">\n                  <p-dropdown\n                    class="aw-dropdown fixed-width"\n                    [showClear]="true"\n                    [disabled]="!isStatusEditable"\n                    [options]="statusList"\n                    [(ngModel)]="object.statusState"\n                    placeholder="&nbsp;"\n                    appendTo="body"\n                  ></p-dropdown>\n                </div>\n              </div>\n\n              <div class="form-group">\n                <label class="form-label">{{ componentId + ".statusUser" | translate }}</label>\n                <div class="form-control">\n                  <input\n                    type="text"\n                    name="statusUser"\n                    class="aw-input"\n                    [(ngModel)]="object.statusUser"\n                    [disabled]="true"\n                  />\n                </div>\n              </div>\n\n              <div class="form-group">\n                <label class="form-label">{{ componentId + ".statusDate" | translate }}</label>\n                <div class="form-control">\n                  <input\n                    type="datetime"\n                    name="statusDate"\n                    class="aw-input"\n                    [disabled]="true"\n                    value="{{ dateService.dateWitCustomFormatToString(object.statusDate, DATE_WITH_HOUR) }}"\n                  />\n                </div>\n              </div>\n            </div>\n\n            <div *ngIf="isStatusEditable" class="row search-criteria-footer">\n              <div class="search-actions">\n                <button type="button" mat-raised-button (click)="updateObjectStatus()">\n                  <span>{{ "global.update" | translate }}</span>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="section">\n        <div class="section-content">\n          <p-table\n            [resizableColumns]="true"\n            #table\n            class="aw-table2"\n            [columns]="tableData.tableCols"\n            [value]="tableRows"\n            [(selection)]="selectedRows"\n            [scrollable]="true"\n          >\n            <ng-template pTemplate="emptymessage">\n              <span *ngIf="!isLoading"> &nbsp;</span>\n\n              <div *ngIf="isLoading" class="aw-table-loading-indicator">\n                <div class="loading-message">{{ "table.loadingData" | translate }}</div>\n                <div class="lds-hourglass"></div>\n              </div>\n            </ng-template>\n\n            <ng-template pTemplate="caption">\n              <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedRows.length > 0 }">\n                <div class="aw-table-global-filter">\n                  <label class="aw-table-global-filter-label">\n                    <i class="fa fa-fw fa-search" aria-hidden="true"></i>\n                  </label>\n\n                  <input\n                    #tableGlobalFilter\n                    class="aw-table-global-filter-input"\n                    type="text"\n                    placeholder="{{ \'table.globalFilterText\' | translate }}"\n                    (input)="table.filterGlobal($event.target.value, \'contains\')"\n                  />\n                </div>\n\n                <div *ngIf="selectedRows.length > 0" class="aw-table-actions">\n                  <button\n                    *ngIf="isStatusEditable"\n                    type="button"\n                    mat-raised-button\n                    [ngClass]="{ inactive: selectedRows.length === 0 }"\n                    (click)="deleteSelectedObjects()"\n                    [disabled]="selectedRows.length === 0"\n                    pTooltip="{{ \'global.delete\' | translate }}"\n                    tooltipPosition="top"\n                  >\n                    {{ "global.delete" | translate }}\n                  </button>\n                </div>\n              </div>\n            </ng-template>\n\n            <ng-template pTemplate="colgroup" let-columns>\n              <colgroup>\n                <col *ngIf="isStatusEditable" class="aw-table-checkbox-wrapper" />\n                <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\n              </colgroup>\n            </ng-template>\n\n            <ng-template pTemplate="header" let-columns>\n              <tr>\n                <th *ngIf="isStatusEditable" class="aw-table-checkbox-wrapper">\n                  <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\n                </th>\n\n                <th\n                  pResizableColumn\n                  *ngFor="let col of columns"\n                  [pSortableColumn]="col.field"\n                  [ngStyle]="{ \'text-align\': col.alignment }"\n                >\n                  {{ tableData.componentId + "." + col.field | translate }}\n                </th>\n              </tr>\n            </ng-template>\n\n            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\n              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\n                <td *ngIf="isStatusEditable" class="aw-table-checkbox-wrapper">\n                  <p-tableCheckbox class="aw-checkbox" [value]="rowData"></p-tableCheckbox>\n                </td>\n\n                <td *ngFor="let col of columns" [ngSwitch]="col.filterMode" [ngStyle]="{ \'text-align\': col.alignment }">\n                  <span *ngSwitchCase="tableColumnFilterMode.Tricheckbox">\n                    <span *ngIf="rowData[col.field]"> <i class="fa fa-check" aria-hidden="true"></i> </span>\n                  </span>\n\n                  <span *ngSwitchDefault>\n                    <span *ngIf="!col.isDate && !col.isDateWithHour">\n                      {{\n                        columnsWithKey.includes(col.field) && keyValueMap[rowData[col.field]]\n                          ? keyValueMap[rowData[col.field]]\n                          : rowData[col.field]\n                      }}\n                    </span>\n                    <span *ngIf="col.isDate && col.field === \'timestamp\'">\n                      {{ dateService.dateWitCustomFormatToString(rowData[col.field], DATE_WITH_HOUR) }}\n                    </span>\n                    <span *ngIf="col.isDate && col.field !== \'timestamp\'">\n                      {{ dateService.dateToString(rowData[col.field]) }}\n                    </span>\n                    <span *ngIf="col.isDateWithHour">\n                      {{ dateService.dateWitCustomFormatToString(rowData[col.field], DATE_WITH_HOUR) }}\n                    </span>\n                  </span>\n                </td>\n              </tr>\n            </ng-template>\n          </p-table>\n        </div>\n      </div>\n    </div>\n  </a-content>\n\n  <a-footer>\n    <button type="button" mat-raised-button (click)="closeDialog()">\n      {{ "global.close" | translate }}\n    </button>\n  </a-footer>\n</a-modal>\n';

        /***/
      },

    /***/ './src/app/shared/components/status-update-history/status-update-history.component.scss':
      /*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/status-update-history/status-update-history.component.scss ***!
  \**********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3N0YXR1cy11cGRhdGUtaGlzdG9yeS9zdGF0dXMtdXBkYXRlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */';

        /***/
      },

    /***/ './src/app/shared/components/status-update-history/status-update-history.component.ts':
      /*!********************************************************************************************!*\
  !*** ./src/app/shared/components/status-update-history/status-update-history.component.ts ***!
  \********************************************************************************************/
      /*! exports provided: StatusUpdateHistoryComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StatusUpdateHistoryComponent',
          function() {
            return StatusUpdateHistoryComponent;
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
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../enums/table-column-filter-mode.enum */ './src/app/shared/enums/table-column-filter-mode.enum.ts'
        );
        /* harmony import */ var _enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../enums/table-selection-mode.enum */ './src/app/shared/enums/table-selection-mode.enum.ts'
        );
        /* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _services_update_historic_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../services/update-historic.service */ './src/app/shared/services/update-historic.service.ts'
        );
        /* harmony import */ var _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../utils/label-value-utils */ './src/app/shared/utils/label-value-utils.ts'
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

        var StatusUpdateHistoryComponent = /** @class */ (function(_super) {
          __extends(StatusUpdateHistoryComponent, _super);
          function StatusUpdateHistoryComponent(
            messageService,
            propertiesService,
            sessionService,
            updateHistoricService,
            confirmationService,
            translateService,
            dateService
          ) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Write,
                'DialogStatusUpdateComponent'
              ) || this;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.sessionService = sessionService;
            _this.updateHistoricService = updateHistoricService;
            _this.confirmationService = confirmationService;
            _this.translateService = translateService;
            _this.dateService = dateService;
            _this.onUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.DATE_WITH_HOUR =
              _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants'].MOMENTJS_DATE_TIME;
            _this.tableColumnFilterMode =
              _enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode'];
            _this.tableSelectionMode =
              _enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_7__['TableSelectionMode'];
            _this.columnsWithKey = [];
            _this.keyValueMap = {};
            _this.statusList = [];
            _this.tableRows = [];
            _this.showColumnFilters = true;
            _this.selectedRows = [];
            _this.isLoading = false;
            return _this;
          }
          StatusUpdateHistoryComponent.prototype.ngOnInit = function() {
            var statusDate = 'statusDate';
            var statusState = 'statusState';
            if (!!this.object) {
              this.loadStatusList(this.object[statusState]);
            }
            if (this.tableData) {
              this.componentId = this.tableData.componentId;
              this.loadTableRows();
              this.loadKeyValueMapping();
            }
            if (!!this.object && this.object[statusDate]) {
              this.object[statusDate] = new Date(this.object[statusDate]);
            }
          };
          StatusUpdateHistoryComponent.prototype.loadKeyValueMapping = function() {
            var _this = this;
            if (this.keyObservableMap) {
              this.columnsWithKey = Array.from(this.keyObservableMap.keys());
              var observables = Array.from(this.keyObservableMap.values());
              Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(observables).subscribe(function(results) {
                results.forEach(function(result) {
                  result.forEach(function(element) {
                    _this.keyValueMap[element.value] = element.label;
                  });
                });
                if (_this.object) {
                  var statusState = 'statusState';
                  _this.addMissingStatusLabel(_this.object[statusState]);
                }
              });
            }
          };
          StatusUpdateHistoryComponent.prototype.loadTableRows = function() {
            var _this = this;
            if (!!this.tableData) {
              this.isLoading = true;
              var statusState_1 = 'statusState';
              this.tableData.tableRows.subscribe(
                function(results) {
                  _this.isLoading = false;
                  _this.tableRows = results.list;
                  _this.tableRows.forEach(function(element) {
                    _this.addMissingStatusLabel(element[statusState_1]);
                    if (
                      !_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_14__['LabelValueUtils'].stringValueToLabel(
                        element,
                        'statusState',
                        _this.statusList
                      )
                    ) {
                      _this.loadStatusList(element[statusState_1]);
                    }
                  });
                  _this.tableRows = __spread(_this.tableRows);
                },
                function() {
                  if (_this.tableData) {
                    _this.messageService.showErrorMessage(_this.tableData.componentId + '.errorOnGetTableRows');
                  }
                }
              );
            }
          };
          StatusUpdateHistoryComponent.prototype.loadStatusList = function(statusState) {
            var _this = this;
            this.propertiesService
              .getObjectStatusList(
                this.isObjectTypeOfBireSbDTO,
                this.isObjectTypeOfBireEvolutionDTO,
                this.isObjectBireMaintenancePlanDTO,
                statusState,
                this.isSapSession
              )
              .subscribe(
                function(result) {
                  result.forEach(function(element) {
                    if (
                      _this.statusList.filter(function(status) {
                        return status.value === element.value;
                      }).length === 0
                    ) {
                      _this.statusList.push(element);
                    }
                  });
                  _this.statusList = __spread(_this.statusList);
                  _this.addMissingStatusLabel(statusState);
                  _this.tableRows.forEach(function(element) {
                    _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_14__['LabelValueUtils'].stringValueToLabel(
                      element,
                      'statusState',
                      _this.statusList
                    );
                  });
                  _this.tableRows = __spread(_this.tableRows);
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadStatusList'));
                }
              );
          };
          /**
           * Add current state label from keyValueMap if status value unavailable in status list
           * Introduced for feature 2058 (added func object status to Part Number)
           * as it can be in a new function object status or in a former object status.
           * @param statusState Object status value.
           */
          StatusUpdateHistoryComponent.prototype.addMissingStatusLabel = function(statusState) {
            if (
              statusState &&
              this.statusList &&
              !this.statusList.find(function(lv) {
                return lv.value === statusState;
              }) &&
              this.keyValueMap[statusState]
            ) {
              this.statusList.push({ value: statusState, label: this.keyValueMap[statusState] });
            }
          };
          StatusUpdateHistoryComponent.prototype.deleteSelectedObjects = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey('confirmDeleteSelectedHistories'),
              accept: function() {
                _this.updateHistoricService.removeUpdateHistory(_this.deleteApi, _this.selectedRows).subscribe(
                  function(result) {
                    if (result) {
                      _this.loadTableRows();
                      _this.selectedRows = [];
                    } else {
                      _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDelete'));
                    }
                  },
                  function() {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDelete'));
                  }
                );
              }
            });
          };
          StatusUpdateHistoryComponent.prototype.updateObjectStatus = function() {
            if (!!this.object) {
              this.onUpdated.emit(this.object);
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(), __metadata('design:type', Object)],
            StatusUpdateHistoryComponent.prototype,
            'onUpdated',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('object'), __metadata('design:type', Object)],
            StatusUpdateHistoryComponent.prototype,
            'object',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('data'), __metadata('design:type', Object)],
            StatusUpdateHistoryComponent.prototype,
            'tableData',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('deleteApi'),
              __metadata('design:type', String)
            ],
            StatusUpdateHistoryComponent.prototype,
            'deleteApi',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('keyMap'), __metadata('design:type', Map)],
            StatusUpdateHistoryComponent.prototype,
            'keyObservableMap',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isStatusEditable'),
              __metadata('design:type', Boolean)
            ],
            StatusUpdateHistoryComponent.prototype,
            'isStatusEditable',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isObjectTypeOfBireSbDTO'),
              __metadata('design:type', Boolean)
            ],
            StatusUpdateHistoryComponent.prototype,
            'isObjectTypeOfBireSbDTO',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isObjectTypeOfBireEvolutionDTO'),
              __metadata('design:type', Boolean)
            ],
            StatusUpdateHistoryComponent.prototype,
            'isObjectTypeOfBireEvolutionDTO',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isObjectBireMaintenancePlanDTO'),
              __metadata('design:type', Boolean)
            ],
            StatusUpdateHistoryComponent.prototype,
            'isObjectBireMaintenancePlanDTO',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isSapSession'),
              __metadata('design:type', Boolean)
            ],
            StatusUpdateHistoryComponent.prototype,
            'isSapSession',
            void 0
          );
          StatusUpdateHistoryComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-status-update-history',
                template: __webpack_require__(
                  /*! ./status-update-history.component.html */ './src/app/shared/components/status-update-history/status-update-history.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./status-update-history.component.scss */ './src/app/shared/components/status-update-history/status-update-history.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _services_message_service__WEBPACK_IMPORTED_MODULE_10__['MessageService'],
                _services_properties_service__WEBPACK_IMPORTED_MODULE_11__['PropertiesService'],
                _services_session_service__WEBPACK_IMPORTED_MODULE_12__['SessionService'],
                _services_update_historic_service__WEBPACK_IMPORTED_MODULE_13__['UpdateHistoricService'],
                _services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__['ConfirmationService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _services_date_service__WEBPACK_IMPORTED_MODULE_9__['DateService']
              ])
            ],
            StatusUpdateHistoryComponent
          );
          return StatusUpdateHistoryComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/status-update-history/status-update-history.module.ts':
      /*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/status-update-history/status-update-history.module.ts ***!
  \*****************************************************************************************/
      /*! exports provided: StatusUpdateHistoryModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StatusUpdateHistoryModule',
          function() {
            return StatusUpdateHistoryModule;
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
        /* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _status_update_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./status-update-history.component */ './src/app/shared/components/status-update-history/status-update-history.component.ts'
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
          primeng_table__WEBPACK_IMPORTED_MODULE_3__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__['TooltipModule']
        ];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_8__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _status_update_history_component__WEBPACK_IMPORTED_MODULE_9__['StatusUpdateHistoryComponent']
        ];
        var StatusUpdateHistoryModule = /** @class */ (function() {
          function StatusUpdateHistoryModule() {}
          StatusUpdateHistoryModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS),
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
                )
              })
            ],
            StatusUpdateHistoryModule
          );
          return StatusUpdateHistoryModule;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=default~engineering-management-applicable-configuration-applicable-configuration-module~engineering-~9b74530e.js.map
