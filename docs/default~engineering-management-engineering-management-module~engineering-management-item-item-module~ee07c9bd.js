(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~engineering-management-engineering-management-module~engineering-management-item-item-module~ee07c9bd'],
  {
    /***/ './src/app/shared/components/dialog-search-task/dialog-search-task.component.html':
      /*!****************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-task/dialog-search-task.component.html ***!
  \****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="70">\r\n  <a-header>\r\n    <div class="modal-title">{{ (isTypeVisit ? "taskPopin.visitTitle" : "taskPopin.title") | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section search-criteria-section">\r\n        <h4 class="section-title">{{ "global.search" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="column">\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ (isTypeVisit ? "taskPopin.visitCode" : "taskPopin.taskCode") | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input class="aw-input" type="text" [(ngModel)]="searchObject.taskCode" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ "taskPopin.taskVersion" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <input class="aw-input" type="text" [(ngModel)]="searchObject.taskVersion" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ "taskPopin.taskDesignation" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <input class="aw-input" type="text" [(ngModel)]="searchObject.taskDesignation" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ "taskPopin.taskApplicabilityDate" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-calendar\r\n                    showButtonBar="true"\r\n                    [monthNavigator]="true"\r\n                    [yearNavigator]="true"\r\n                    [yearRange]="sessionService.calendarYearRange"\r\n                    class="aw-calendar"\r\n                    [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                    [locale]="sessionService.calendarFormat"\r\n                    [(ngModel)]="searchObject.taskApplicabilityDate"\r\n                    appendTo="body"\r\n                  ></p-calendar>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row">\r\n              <div class="form-group" *ngIf="!isTypeVisit">\r\n                <label class="form-label"> {{ "taskPopin.taskGroup" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [(ngModel)]="searchObject.groupCode"\r\n                    [options]="taskGroupList"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group" *ngIf="!isTypeVisit">\r\n                <label class="form-label"> {{ "taskPopin.taskTypeCode" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [(ngModel)]="searchObject.taskTypeCode"\r\n                    [options]="taskTypeList"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ "taskPopin.taskStatus" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [(ngModel)]="searchObject.taskStatus"\r\n                    [options]="taskStatusList"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group"></div>\r\n            </div>\r\n\r\n            <div class="row search-criteria-footer">\r\n              <div class="search-actions">\r\n                <button type="button" color="primary" mat-raised-button (click)="searchTasks()">\r\n                  <span>{{ "global.toSearch" | translate }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section results-section">\r\n        <h4 class="section-title">\r\n          {{ "global.results" | translate }} ({{ resultsTable.list ? resultsTable.list.length : 0 }})\r\n        </h4>\r\n\r\n        <div class="section-content">\r\n          <p-table\r\n            [resizableColumns]="true"\r\n            #ptable\r\n            class="aw-table2"\r\n            [columns]="resultsTableCols"\r\n            [value]="resultsTable.list"\r\n            [(selection)]="selectedObjects"\r\n            [selectionMode]="selectionMode"\r\n            [scrollable]="true"\r\n          >\r\n            <ng-template pTemplate="emptymessage">\r\n              <span *ngIf="!resultsTableLoading"> &nbsp;</span>\r\n\r\n              <div *ngIf="resultsTableLoading" class="aw-table-loading-indicator">\r\n                <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                <div class="lds-hourglass"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="caption">\r\n              <div class="aw-table-header">\r\n                <div class="aw-table-global-filter">\r\n                  <label class="aw-table-global-filter-label">\r\n                    <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    #ptableGlobalFilter\r\n                    class="aw-table-global-filter-input"\r\n                    type="text"\r\n                    placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                    (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="colgroup" let-columns>\r\n              <colgroup>\r\n                <col *ngIf="selectionMultiple" class="aw-table-checkbox-wrapper" />\r\n                <col *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment, width: col.width }" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="header" let-columns>\r\n              <tr>\r\n                <th *ngIf="selectionMultiple" class="aw-table-checkbox-wrapper">\r\n                  <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                </th>\r\n                <th\r\n                  pResizableColumn\r\n                  *ngFor="let col of columns"\r\n                  [ngStyle]="{ \'text-align\': col.alignment, width: col.width }"\r\n                >\r\n                  {{ "taskPopin." + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                <td *ngIf="selectionMultiple" class="aw-table-checkbox-wrapper">\r\n                  <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                </td>\r\n                <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment, width: col.width }">\r\n                  <span [title]="rowData[col.field]">{{ rowData[col.field] }}</span>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="onCancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button type="button" mat-raised-button color="primary" (click)="onValidate()" [disabled]="disableValidate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-task/dialog-search-task.component.ts':
      /*!**************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-task/dialog-search-task.component.ts ***!
  \**************************************************************************************/
      /*! exports provided: DialogSearchTaskComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchTaskComponent',
          function() {
            return DialogSearchTaskComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../services/date.service */ './src/app/shared/services/date.service.ts'
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
        /* harmony import */ var _dialog_search_task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./dialog-search-task.service */ './src/app/shared/components/dialog-search-task/dialog-search-task.service.ts'
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
        var __assign =
          (undefined && undefined.__assign) ||
          function() {
            __assign =
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
          };
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

        var DialogSearchTaskComponent = /** @class */ (function(_super) {
          __extends(DialogSearchTaskComponent, _super);
          function DialogSearchTaskComponent(dialogSearchTaskService, propertiesService, dateService, sessionService) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write,
                'taskPopin'
              ) || this;
            _this.dialogSearchTaskService = dialogSearchTaskService;
            _this.propertiesService = propertiesService;
            _this.dateService = dateService;
            _this.sessionService = sessionService;
            _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.selectionMode = 'single';
            _this.taskKeyMap = new Map();
            _this.loadTypes();
            _this.resultsTable = {
              list: [],
              moreResults: false
            };
            _this.selectionMultiple = false;
            _this.resultsTableLoading = false;
            _this.searchObject = {};
            _this.selectedObjects = [];
            return _this;
          }
          Object.defineProperty(DialogSearchTaskComponent.prototype, 'isVisit', {
            set: function(code) {
              this.isTypeVisit = code;
            },
            enumerable: true,
            configurable: true
          });
          DialogSearchTaskComponent.prototype.ngOnInit = function() {
            this.selectionMode = this.selectionMultiple ? 'multiple' : 'single';
            this.resultsTableCols = [
              { field: 'taskCode', alignment: 'left', width: '15%' },
              { field: 'taskVersion', alignment: 'left', width: '5%' },
              { field: 'taskDesignation', alignment: 'left', width: '25%' },
              { field: 'taskStatus', alignment: 'left', width: '10%' }
            ];
            if (!this.isTypeVisit) {
              this.resultsTableCols.push({ field: 'taskTypeCode', alignment: 'left', width: '15%' });
              this.resultsTableCols.push({ field: 'taskGroup', alignment: 'left', width: '15%' });
            }
            this.resultsTableCols.push();
            this.resultsTableCols.push({ field: 'taskApplicabilityDate', alignment: 'left', width: '15%' });
          };
          DialogSearchTaskComponent.prototype.searchTasks = function() {
            var _this = this;
            this.resultsTableLoading = true;
            this.resultsTable = {
              list: [],
              moreResults: false
            };
            var observableTask;
            if (this.searchObject && this.isTypeVisit) {
              var visitCriteriaMPInput = {
                bireTaskDTO: this.searchObject
              };
              observableTask = this.dialogSearchTaskService.findBireVisitsByCriteriaForMP(visitCriteriaMPInput);
            } else {
              var findBireTaskByCriteriaInput = {
                bireTaskDTO: this.searchObject
              };
              if (!!this.familyCode) {
                findBireTaskByCriteriaInput.familyCode = this.familyCode;
              }
              if (!!this.variantCode) {
                findBireTaskByCriteriaInput.variantCode = this.variantCode;
              }
              observableTask = this.dialogSearchTaskService.findBireTasksByCriteria(findBireTaskByCriteriaInput);
            }
            observableTask.subscribe(function(results) {
              if (results) {
                results.list.forEach(function(element) {
                  var row = {
                    _obj: __assign({}, element),
                    taskCode: element.taskCode,
                    taskVersion: element.taskVersion,
                    taskDesignation: element.taskDesignation
                  };
                  _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_8__['LabelValueUtils'].stringValueToLabel(
                    element,
                    'taskTypeCode',
                    _this.taskTypeList
                  );
                  _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_8__['LabelValueUtils'].stringValueToLabel(
                    element,
                    'taskStatus',
                    _this.taskStatusList
                  );
                  _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_8__['LabelValueUtils'].stringValueToLabel(
                    element,
                    'taskGroup',
                    _this.taskGroupList
                  );
                  row.taskTypeCode = element.taskTypeCode;
                  row.taskStatus = element.taskStatus;
                  row.taskGroup = element.groupCode;
                  row.taskApplicabilityDate = _this.dateService.dateToString(element.taskApplicabilityDate);
                  _this.resultsTable.list.push(row);
                });
                _this.resultsTable.moreResults = results.moreResults;
              }
              _this.resultsTableLoading = false;
            });
          };
          /*
      <summary>Emit the selectedObject on validate</summary>
      */
          DialogSearchTaskComponent.prototype.onValidate = function() {
            var _this = this;
            if (this.selectionMultiple) {
              var bireTaskArr_1 = [];
              this.selectedObjects.forEach(function(elt) {
                if (!!elt) {
                  _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_8__['LabelValueUtils'].labelToStringValue(
                    elt,
                    'taskTypeCode',
                    _this.taskTypeList
                  );
                  _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_8__['LabelValueUtils'].labelToStringValue(
                    elt,
                    'taskStatus',
                    _this.taskStatusList
                  );
                  _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_8__['LabelValueUtils'].labelToStringValue(
                    elt,
                    'taskGroup',
                    _this.taskGroupList
                  );
                  bireTaskArr_1.push(elt._obj);
                }
              });
              this.onSelected.emit(bireTaskArr_1);
            } else {
              if (!!this.selectedObjects) {
                var tableRow = this.selectedObjects;
                _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_8__['LabelValueUtils'].labelToStringValue(
                  this.selectedObjects,
                  'taskTypeCode',
                  this.taskTypeList
                );
                _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_8__['LabelValueUtils'].labelToStringValue(
                  this.selectedObjects,
                  'taskStatus',
                  this.taskStatusList
                );
                _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_8__['LabelValueUtils'].labelToStringValue(
                  this.selectedObjects,
                  'taskGroup',
                  this.taskGroupList
                );
                this.onSelected.emit(tableRow._obj);
              }
              this.display = false;
            }
          };
          /*
      <summary>Close the pop up on cancel</summary>
      */
          DialogSearchTaskComponent.prototype.onCancel = function() {
            _super.prototype.closeDialog.call(this);
          };
          DialogSearchTaskComponent.prototype.loadTypes = function() {
            var _this = this;
            var getTaskTypeMap = this.propertiesService.getValue('getTaskTypeMap');
            var getFuncObjectStatusMap = this.propertiesService.getValue('getFuncObjectStatusMap');
            var getTaskGroupMap = this.dialogSearchTaskService.getTaskGroups();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['forkJoin'])([
              getTaskTypeMap,
              getFuncObjectStatusMap,
              getTaskGroupMap
            ]).subscribe(function(_a) {
              var _b = __read(_a, 3),
                getTaskTypeResult = _b[0],
                getFuncObjectStatusResult = _b[1],
                getTaskGroupResult = _b[2];
              _this.taskTypeList = getTaskTypeResult.filter(function(obj) {
                return (
                  obj.value !==
                  _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                    .TASK_TYPE_VISIT_KEY
                );
              });
              _this.taskStatusList = getFuncObjectStatusResult;
              _this.taskGroupList = getTaskGroupResult;
            });
          };
          DialogSearchTaskComponent.prototype.disableValidate = function() {
            if (this.selectionMultiple) {
              return this.selectedObjects.length === 0;
            } else {
              return Object.keys(this.selectedObjects).length === 0;
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(), __metadata('design:type', Object)],
            DialogSearchTaskComponent.prototype,
            'onSelected',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogSearchTaskComponent.prototype,
            'selectionMultiple',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogSearchTaskComponent.prototype,
            'familyCode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogSearchTaskComponent.prototype,
            'variantCode',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('is-visit'),
              __metadata('design:type', Boolean),
              __metadata('design:paramtypes', [Boolean])
            ],
            DialogSearchTaskComponent.prototype,
            'isVisit',
            null
          );
          DialogSearchTaskComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-search-task',
                template: __webpack_require__(
                  /*! ./dialog-search-task.component.html */ './src/app/shared/components/dialog-search-task/dialog-search-task.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _dialog_search_task_service__WEBPACK_IMPORTED_MODULE_9__['DialogSearchTaskService'],
                _services_properties_service__WEBPACK_IMPORTED_MODULE_6__['PropertiesService'],
                _services_date_service__WEBPACK_IMPORTED_MODULE_5__['DateService'],
                _services_session_service__WEBPACK_IMPORTED_MODULE_7__['SessionService']
              ])
            ],
            DialogSearchTaskComponent
          );
          return DialogSearchTaskComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-task/dialog-search-task.module.ts':
      /*!***********************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-task/dialog-search-task.module.ts ***!
  \***********************************************************************************/
      /*! exports provided: DialogSearchTaskModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DialogSearchTaskModule', function() {
          return DialogSearchTaskModule;
        });
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
        /* harmony import */ var _dialog_search_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./dialog-search-task.component */ './src/app/shared/components/dialog-search-task/dialog-search-task.component.ts'
        );
        /* harmony import */ var _dialog_search_task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./dialog-search-task.service */ './src/app/shared/components/dialog-search-task/dialog-search-task.service.ts'
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
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__['DropdownModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_3__['TableModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule']
        ];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [_dialog_search_task_component__WEBPACK_IMPORTED_MODULE_8__['DialogSearchTaskComponent']];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_dialog_search_task_service__WEBPACK_IMPORTED_MODULE_9__['DialogSearchTaskService']];
        var DialogSearchTaskModule = /** @class */ (function() {
          function DialogSearchTaskModule() {}
          DialogSearchTaskModule = __decorate(
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
            DialogSearchTaskModule
          );
          return DialogSearchTaskModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-task/dialog-search-task.service.ts':
      /*!************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-task/dialog-search-task.service.ts ***!
  \************************************************************************************/
      /*! exports provided: DialogSearchTaskService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchTaskService',
          function() {
            return DialogSearchTaskService;
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

        var DialogSearchTaskService = /** @class */ (function(_super) {
          __extends(DialogSearchTaskService, _super);
          function DialogSearchTaskService(http, appConfigService, taskManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.taskManagementApi = taskManagementApi;
            return _this;
          }
          DialogSearchTaskService.prototype.getTaskGroups = function() {
            return _super.prototype.post.call(this, this.taskManagementApi.findAllBireTaskGroups);
          };
          DialogSearchTaskService.prototype.findBireTasksByCriteria = function(criteria) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireTasksByCriteria, criteria);
          };
          DialogSearchTaskService.prototype.findBireVisitsByCriteriaForMP = function(criteria) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireVisitsByCriteriaForMP, criteria);
          };
          DialogSearchTaskService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _api_task_management_api__WEBPACK_IMPORTED_MODULE_2__['TaskManagementApi']
              ])
            ],
            DialogSearchTaskService
          );
          return DialogSearchTaskService;
        })(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=default~engineering-management-engineering-management-module~engineering-management-item-item-module~ee07c9bd.js.map
