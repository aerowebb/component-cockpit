(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~administration-administration-module~administration-attributes-attributes-module~administrat~974549ff'],
  {
    /***/ './src/app/shared/components/dialog-table/dialog-table.component.html':
      /*!****************************************************************************!*\
  !*** ./src/app/shared/components/dialog-table/dialog-table.component.html ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">\r\n      {{ tableData.componentId + ".title" | translate }} ({{ formattedTableRows ? formattedTableRows.length : 0 }})\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <p-table\r\n      [resizableColumns]="true"\r\n      #ptable\r\n      class="aw-table2"\r\n      [columns]="tableData.tableCols"\r\n      [value]="formattedTableRows"\r\n      [selectionMode]="tableData.selectionMode"\r\n      [(selection)]="selection"\r\n      [dataKey]="!!tableData.dataKey ? \'_id\' : undefined"\r\n      [scrollable]="true"\r\n    >\r\n      <ng-template pTemplate="emptymessage">\r\n        <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n        <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n          <div class="lds-hourglass"></div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="caption">\r\n        <div class="aw-table-header">\r\n          <div class="aw-table-global-filter">\r\n            <label class="aw-table-global-filter-label"> <i class="fa fa-fw fa-search" aria-hidden="true"></i> </label>\r\n\r\n            <input\r\n              #ptableGlobalFilter\r\n              class="aw-table-global-filter-input"\r\n              type="text"\r\n              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n              (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n            />\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="colgroup" let-columns>\r\n        <colgroup>\r\n          <col *ngIf="tableData.selectionMode === tableSelectionMode.Multiple" class="aw-table-checkbox-wrapper" />\r\n          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n        </colgroup>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="header" let-columns>\r\n        <tr>\r\n          <th *ngIf="tableData.selectionMode === tableSelectionMode.Multiple" class="aw-table-checkbox-wrapper">\r\n            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n          </th>\r\n\r\n          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n            {{ tableData.componentId + "." + col.field | translate }}\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n          <td *ngIf="tableData.selectionMode === tableSelectionMode.Multiple" class="aw-table-checkbox-wrapper">\r\n            <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n          </td>\r\n\r\n          <td *ngFor="let col of columns" [ngSwitch]="col.filterMode" [ngStyle]="{ \'text-align\': col.alignment }">\r\n            <span *ngSwitchCase="tableColumnFilterMode.Tricheckbox">\r\n              <i\r\n                *ngIf="rowData[col.field] !== null && rowData[col.field]"\r\n                class="fa fa-fw fa-check"\r\n                aria-hidden="true"\r\n              ></i>\r\n            </span>\r\n\r\n            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button type="button" mat-raised-button color="primary" (click)="validate()" [disabled]="!selection">\r\n      <span>{{ "global.validate" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-table/dialog-table.component.ts':
      /*!**************************************************************************!*\
  !*** ./src/app/shared/components/dialog-table/dialog-table.component.ts ***!
  \**************************************************************************/
      /*! exports provided: DialogTableComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DialogTableComponent', function() {
          return DialogTableComponent;
        });
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
        /* harmony import */ var _enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../enums/table-column-filter-mode.enum */ './src/app/shared/enums/table-column-filter-mode.enum.ts'
        );
        /* harmony import */ var _enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../enums/table-selection-mode.enum */ './src/app/shared/enums/table-selection-mode.enum.ts'
        );
        /* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _utils_list_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../utils/list-utils */ './src/app/shared/utils/list-utils.ts'
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

        var DialogTableComponent = /** @class */ (function(_super) {
          __extends(DialogTableComponent, _super);
          function DialogTableComponent(translateService, dateService, loaderService, messageService) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write,
                'DialogTableComponent'
              ) || this;
            _this.translateService = translateService;
            _this.dateService = dateService;
            _this.loaderService = loaderService;
            _this.messageService = messageService;
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.tableColumnFilterMode =
              _enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_5__['TableColumnFilterMode'];
            _this.tableSelectionMode =
              _enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableSelectionMode'];
            _this.colWidthUnit = undefined;
            _this.formattedTableRows = [];
            _this.moreResults = false;
            _this.objectMap = new Map();
            _this.showColumnFilters = false;
            _this.tableWidth = undefined;
            return _this;
          }
          DialogTableComponent.prototype.ngOnInit = function() {
            this.loaderService.hideLoadingBar();
            if (!!this.tableData) {
              this.init();
              this.computeTableWidth();
              this.selection =
                this.tableData.selectionMode ===
                _enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableSelectionMode'].Multiple
                  ? []
                  : undefined;
              this.showColumnFilters = !this.tableData.tableCols.some(function(col) {
                return (
                  !!col.filterMode &&
                  col.filterMode ===
                    _enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_5__['TableColumnFilterMode'].None
                );
              });
            }
          };
          DialogTableComponent.prototype.validate = function() {
            var _this = this;
            if (
              (this.selection instanceof Array &&
                _utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils'].isEmpty(this.selection)) ||
              (!(this.selection instanceof Array) && !this.selection)
            ) {
              this.messageService.showWarningMessage('global.warningOnNoSelection');
            } else {
              if (this.selection instanceof Array) {
                this.onSelected.emit(
                  this.selection
                    .map(function(row) {
                      return _this.objectMap.get(row);
                    })
                    .filter(function(obj) {
                      return !!obj;
                    })
                );
              } else {
                this.onSelected.emit(this.objectMap.get(this.selection));
              }
              this.closeDialog();
            }
          };
          DialogTableComponent.prototype.computeTableWidth = function() {
            var tableWidthData = this.tableData.tableCols.map(function(col) {
              return !!col.width ? /^(\d+(?:\.\d+)?)[ ]*([a-zA-Z]+)$/g.exec(col.width) : undefined;
            });
            if (
              tableWidthData.every(function(regExpMatches) {
                return !!regExpMatches;
              })
            ) {
              var widthIndex_1 = 1;
              var unitIndex_1 = 2;
              var colUnitList = tableWidthData
                .map(function(regExpMatches) {
                  return regExpMatches[unitIndex_1];
                })
                .map(function(unit) {
                  return unit.trim();
                })
                .map(function(unit) {
                  return unit.toLowerCase();
                });
              if (
                colUnitList.filter(function(v, i, a) {
                  return a.indexOf(v) === i;
                }).length === 1
              ) {
                this.colWidthUnit = colUnitList[0];
                var tableWidth = tableWidthData
                  .map(function(regExpMatches) {
                    return regExpMatches[widthIndex_1];
                  })
                  .map(Number)
                  .reduce(function(acc, val) {
                    return acc + val;
                  }, 0);
                if (this.colWidthUnit === 'rem') {
                  var tableScrollbarWidthInRem = 2;
                  tableWidth += tableScrollbarWidthInRem;
                } else if (this.colWidthUnit === 'px') {
                  var tableScrollbarWidthInPx = 20;
                  tableWidth += tableScrollbarWidthInPx;
                }
                this.tableWidth = tableWidth.toString();
              }
            }
          };
          DialogTableComponent.prototype.init = function() {
            var _this = this;
            if (!!this.keyObservableMap) {
              var columnsWithKey_1 = Array.from(this.keyObservableMap.keys());
              var keyValueMap_1 = {};
              Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(
                Array.from(this.keyObservableMap.values())
              ).subscribe(function(keyValueResults) {
                keyValueResults.forEach(function(keyValueResult) {
                  keyValueResult.forEach(function(keyValue) {
                    keyValueMap_1[keyValue.value] = keyValue.label;
                  });
                });
                _this.loadAndFormatTableRows(columnsWithKey_1, keyValueMap_1);
              });
            } else {
              this.loadAndFormatTableRows([], {});
            }
          };
          DialogTableComponent.prototype.loadAndFormatTableRows = function(columnsWithKey, keyValueMap) {
            var _this = this;
            this.tableData.tableRows.subscribe(function(result) {
              if (!!result) {
                _this.moreResults = result.moreResults;
                _this.formattedTableRows = result.list
                  .map(function(obj) {
                    var formattedObj = {};
                    _this.tableData.tableCols.forEach(function(tableCol) {
                      if (
                        Object.getOwnPropertyNames(obj).some(function(property) {
                          return property === tableCol.field;
                        })
                      ) {
                        if (tableCol.isDate !== undefined && tableCol.isDate !== null && tableCol.isDate) {
                          if (obj[tableCol.field] instanceof Date) {
                            formattedObj[tableCol.field] = _this.dateService.dateToString(obj[tableCol.field]);
                          } else if (typeof obj[tableCol.field] === 'number') {
                            formattedObj[tableCol.field] = _this.dateService.timestampToString(obj[tableCol.field]);
                          }
                        } else {
                          formattedObj[tableCol.field] =
                            columnsWithKey.includes(tableCol.field) &&
                            Object.getOwnPropertyNames(keyValueMap).some(function(property) {
                              return property === obj[tableCol.field];
                            })
                              ? keyValueMap[obj[tableCol.field]]
                              : !!obj[tableCol.field]
                              ? obj[tableCol.field].toString()
                              : '';
                        }
                      }
                    });
                    if (
                      !!_this.tableData.dataKey &&
                      Object.getOwnPropertyNames(obj).some(function(property) {
                        return property === _this.tableData.dataKey;
                      })
                    ) {
                      var idPropertyName = '_id';
                      formattedObj[idPropertyName] = obj[_this.tableData.dataKey];
                    }
                    _this.objectMap.set(formattedObj, obj);
                    return formattedObj;
                  })
                  .filter(function(obj) {
                    return !_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils'].isEmpty(
                      Object.getOwnPropertyNames(obj)
                    );
                  });
              }
            });
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('data'), __metadata('design:type', Object)],
            DialogTableComponent.prototype,
            'tableData',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('keyMap'), __metadata('design:type', Map)],
            DialogTableComponent.prototype,
            'keyObservableMap',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogTableComponent.prototype,
            'onSelected',
            void 0
          );
          DialogTableComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-table',
                template: __webpack_require__(
                  /*! ./dialog-table.component.html */ './src/app/shared/components/dialog-table/dialog-table.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _services_date_service__WEBPACK_IMPORTED_MODULE_7__['DateService'],
                _services_loader_service__WEBPACK_IMPORTED_MODULE_8__['LoaderService'],
                _services_message_service__WEBPACK_IMPORTED_MODULE_9__['MessageService']
              ])
            ],
            DialogTableComponent
          );
          return DialogTableComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-table/dialog-table.module.ts':
      /*!***********************************************************************!*\
  !*** ./src/app/shared/components/dialog-table/dialog-table.module.ts ***!
  \***********************************************************************/
      /*! exports provided: DialogTableModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DialogTableModule', function() {
          return DialogTableModule;
        });
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
        /* harmony import */ var _dialog_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./dialog-table.component */ './src/app/shared/components/dialog-table/dialog-table.component.ts'
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
        var COMPONENTS = [_dialog_table_component__WEBPACK_IMPORTED_MODULE_6__['DialogTableComponent']];
        var DialogTableModule = /** @class */ (function() {
          function DialogTableModule() {}
          DialogTableModule = __decorate(
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
                )
              })
            ],
            DialogTableModule
          );
          return DialogTableModule;
        })();

        /***/
      },

    /***/ './src/app/shared/enums/table-column-filter-mode.enum.ts':
      /*!***************************************************************!*\
  !*** ./src/app/shared/enums/table-column-filter-mode.enum.ts ***!
  \***************************************************************/
      /*! exports provided: TableColumnFilterMode */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TableColumnFilterMode', function() {
          return TableColumnFilterMode;
        });
        var TableColumnFilterMode;
        (function(TableColumnFilterMode) {
          TableColumnFilterMode['None'] = 'none';
          TableColumnFilterMode['Tricheckbox'] = 'tricheckbox';
          TableColumnFilterMode['Input'] = 'input';
        })(TableColumnFilterMode || (TableColumnFilterMode = {}));

        /***/
      },

    /***/ './src/app/shared/enums/table-selection-mode.enum.ts':
      /*!***********************************************************!*\
  !*** ./src/app/shared/enums/table-selection-mode.enum.ts ***!
  \***********************************************************/
      /*! exports provided: TableSelectionMode */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TableSelectionMode', function() {
          return TableSelectionMode;
        });
        var TableSelectionMode;
        (function(TableSelectionMode) {
          TableSelectionMode['Multiple'] = 'multiple';
          TableSelectionMode['Single'] = 'single';
        })(TableSelectionMode || (TableSelectionMode = {}));

        /***/
      }
  }
]);
//# sourceMappingURL=default~administration-administration-module~administration-attributes-attributes-module~administrat~974549ff.js.map
