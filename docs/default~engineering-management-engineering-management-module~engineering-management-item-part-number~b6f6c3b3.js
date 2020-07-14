(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~engineering-management-engineering-management-module~engineering-management-item-part-number~b6f6c3b3'],
  {
    /***/ './node_modules/primeng/inputtextarea.js':
      /*!***********************************************!*\
  !*** ./node_modules/primeng/inputtextarea.js ***!
  \***********************************************/
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
            /*! ./components/inputtextarea/inputtextarea */ './node_modules/primeng/components/inputtextarea/inputtextarea.js'
          )
        );

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-part/dialog-search-part.component.html':
      /*!****************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-part/dialog-search-part.component.html ***!
  \****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="70">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section">\r\n        <h4 class="section-title">{{ "global.search" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="column">\r\n            <div class="row">\r\n              <div class="form-group" *ngIf="showPartTypeDropdown">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".partType" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="pnTypeList"\r\n                    [(ngModel)]="selectedPnType"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    appendTo="body"\r\n                    [disabled]="disablePartTypeDropdown"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".partNumber" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input type="text" class="aw-input" [(ngModel)]="searchObject.pn" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".partDesignation" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input type="text" class="aw-input" [(ngModel)]="searchObject.name" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row search-criteria-footer">\r\n              <div class="search-actions">\r\n                <button type="button" color="primary" mat-raised-button (click)="search()">\r\n                  {{ "global.toSearch" | translate }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section">\r\n        <h4 class="section-title">\r\n          {{ "global.results" | translate }}\r\n          ({{ table.list ? table.list.length : 0 }}{{ table.moreResults ? "+" : "" }})\r\n        </h4>\r\n\r\n        <div class="section-content">\r\n          <p-table\r\n            [resizableColumns]="true"\r\n            #ptableItem\r\n            class="aw-table2"\r\n            [columns]="tableColList"\r\n            [value]="table.list"\r\n            [(selection)]="tableSelection"\r\n            selectionMode="single"\r\n            [scrollable]="true"\r\n          >\r\n            <ng-template pTemplate="emptymessage">\r\n              <span *ngIf="!tableLoading"> &nbsp;</span>\r\n\r\n              <div *ngIf="tableLoading" class="aw-table-loading-indicator">\r\n                <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                <div class="lds-hourglass"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="caption">\r\n              <div class="aw-table-header">\r\n                <div class="aw-table-global-filter">\r\n                  <label class="aw-table-global-filter-label">\r\n                    <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    class="aw-table-global-filter-input"\r\n                    type="text"\r\n                    placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                    (input)="ptableItem.filterGlobal($event.target.value, \'contains\')"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="colgroup" let-columns>\r\n              <colgroup>\r\n                <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="header" let-columns>\r\n              <tr>\r\n                <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                  {{ getComponentName() + "." + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                  {{ rowData[col.field] }}\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="cancel()">\r\n      {{ "dialog.cancel" | translate }}\r\n    </button>\r\n\r\n    <button type="button" color="primary" mat-raised-button (click)="validate()" [disabled]="!tableSelection">\r\n      {{ "dialog.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-part/dialog-search-part.component.ts':
      /*!**************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-part/dialog-search-part.component.ts ***!
  \**************************************************************************************/
      /*! exports provided: DialogSearchPartComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchPartComponent',
          function() {
            return DialogSearchPartComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _types_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _utils_list_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _utils_object_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _dialog_search_part_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./dialog-search-part.service */ './src/app/shared/components/dialog-search-part/dialog-search-part.service.ts'
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

        var DialogSearchPartComponent = /** @class */ (function(_super) {
          __extends(DialogSearchPartComponent, _super);
          function DialogSearchPartComponent(
            dialogSearchPartService,
            messageService,
            propertiesService,
            translateService
          ) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write,
                'DialogSearchPartComponent'
              ) || this;
            _this.dialogSearchPartService = dialogSearchPartService;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.translateService = translateService;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.setTableColList();
            return _this;
          }
          DialogSearchPartComponent.prototype.ngOnInit = function() {
            this.init();
            this.searchObject = this.searchObject || {};
            if (this.searchObject !== {}) {
              this.selectedPnType = this.pnType;
              this.showPartTypeDropdown = !this.searchObject.toolSearch;
            }
          };
          DialogSearchPartComponent.prototype.search = function() {
            var _this = this;
            this.tableLoading = true;
            this.clearTableData();
            this.searchObject.type = _utils_object_utils__WEBPACK_IMPORTED_MODULE_9__['ObjectUtils'].isDefined(
              this.selectedPnType
            )
              ? this.selectedPnType
              : undefined;
            // Since ingredient search also includes tools, dont assign type in request
            if (
              this.disablePartTypeDropdown &&
              this.searchObject.type ===
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                  .PN_TYPE_INGREDIENT_KEY
            ) {
              this.searchObject.type = undefined;
            }
            if (this.searchObject.toolSearch) {
              this.searchObject.type = undefined;
            }
            //////////////////////////////////////
            this.dialogSearchPartService
              .findBirePartNumbersBySearchCriteria(this.searchObject)
              .subscribe(function(result) {
                _this.table.moreResults = result.moreResults;
                _this.table.list = _utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils']
                  .orEmpty(result.list)
                  .map(function(elt) {
                    return _this.createItemRow(elt);
                  });
                _this.tableLoading = false;
              });
          };
          DialogSearchPartComponent.prototype.cancel = function() {
            _super.prototype.closeDialog.call(this);
          };
          DialogSearchPartComponent.prototype.validate = function() {
            if (!this.tableSelection) {
              this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelection'));
            } else {
              /*const item: PartsAssociatedTableDTO = this.tableSelection._obj;
            const partAssociateTableDTO: PartAssociateTableDTO = {
              birePlanPnDTO: item.birePnDTO,
              pnCode: item.consumableCode,
              pnName: item.consumableName,
              pnType: item.consumableTypeKey,
              planPnTypeText: item.consumableTypeValue
            };*/
              this.onValidated.emit(this.tableSelection._obj);
              _super.prototype.closeDialog.call(this);
            }
          };
          DialogSearchPartComponent.prototype.clearTableData = function() {
            this.table = { list: [], moreResults: false };
            this.tableSelection = undefined;
          };
          DialogSearchPartComponent.prototype.createItemRow = function(obj) {
            var birePnDTO = obj.birePnDTO ? obj.birePnDTO : {};
            var pnType;
            this.pnTypeMap.forEach(function(element) {
              if (birePnDTO.pnType && birePnDTO.pnType === element.value) {
                pnType = element.label;
              }
            });
            var itemRow = {
              partDesignation: _utils_string_utils__WEBPACK_IMPORTED_MODULE_10__['StringUtils'].orEmpty(
                birePnDTO.articleDesignation
              ),
              partNumber: _utils_string_utils__WEBPACK_IMPORTED_MODULE_10__['StringUtils'].orEmpty(birePnDTO.pnCode),
              partType: _utils_string_utils__WEBPACK_IMPORTED_MODULE_10__['StringUtils'].orEmpty(pnType),
              _obj: obj
            };
            return itemRow;
          };
          DialogSearchPartComponent.prototype.init = function() {
            this.clearTableData();
            this.showPartTypeDropdown = true;
            this.tableLoading = false;
            this.handlePnType();
          };
          DialogSearchPartComponent.prototype.handlePnType = function() {
            var _this = this;
            this.selectedPnType = undefined;
            this.propertiesService
              .getValue(
                _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__['GenericPropertyConstants']
                  .PN_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.pnTypeMap = _utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils'].orEmpty(results);
                _this.pnTypeList = _utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils']
                  .orEmpty(results)
                  .map(function(elt) {
                    if (
                      _this.disablePartTypeDropdown &&
                      elt.value ===
                        _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                          .PN_TYPE_INGREDIENT_KEY
                    ) {
                      elt.label = _this.translateService.instant(_this.getTranslateKey('ingredientTool'));
                    }
                    return {
                      label: elt.label,
                      value: elt.value
                    };
                  });
              });
          };
          DialogSearchPartComponent.prototype.setTableColList = function() {
            this.tableColList = [
              { field: 'partType', alignment: 'left', width: '25%' },
              { field: 'partNumber', alignment: 'left', width: '25%' },
              { field: 'partDesignation', alignment: 'left', width: '50%' }
            ];
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogSearchPartComponent.prototype,
            'searchObject',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogSearchPartComponent.prototype,
            'disablePartTypeDropdown',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogSearchPartComponent.prototype,
            'pnType',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(), __metadata('design:type', Object)],
            DialogSearchPartComponent.prototype,
            'onValidated',
            void 0
          );
          DialogSearchPartComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-search-part',
                template: __webpack_require__(
                  /*! ./dialog-search-part.component.html */ './src/app/shared/components/dialog-search-part/dialog-search-part.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _dialog_search_part_service__WEBPACK_IMPORTED_MODULE_11__['DialogSearchPartService'],
                _services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _services_properties_service__WEBPACK_IMPORTED_MODULE_6__['PropertiesService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            DialogSearchPartComponent
          );
          return DialogSearchPartComponent;
        })(_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-part/dialog-search-part.module.ts':
      /*!***********************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-part/dialog-search-part.module.ts ***!
  \***********************************************************************************/
      /*! exports provided: DialogSearchPartModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DialogSearchPartModule', function() {
          return DialogSearchPartModule;
        });
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
        /* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dialog_search_part_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./dialog-search-part.component */ './src/app/shared/components/dialog-search-part/dialog-search-part.component.ts'
        );
        /* harmony import */ var _dialog_search_part_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./dialog-search-part.service */ './src/app/shared/components/dialog-search-part/dialog-search-part.service.ts'
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
          primeng_table__WEBPACK_IMPORTED_MODULE_2__['TableModule']
        ];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [_dialog_search_part_component__WEBPACK_IMPORTED_MODULE_7__['DialogSearchPartComponent']];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_dialog_search_part_service__WEBPACK_IMPORTED_MODULE_8__['DialogSearchPartService']];
        var DialogSearchPartModule = /** @class */ (function() {
          function DialogSearchPartModule() {}
          DialogSearchPartModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS),
                imports: __spread(
                  [
                    _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__['AngularCommonSharedModule'],
                    _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__['AppCommonSharedModule']
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            DialogSearchPartModule
          );
          return DialogSearchPartModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-part/dialog-search-part.service.ts':
      /*!************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-part/dialog-search-part.service.ts ***!
  \************************************************************************************/
      /*! exports provided: DialogSearchPartService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchPartService',
          function() {
            return DialogSearchPartService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _api_task_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../api/task-management.api */ './src/app/shared/api/task-management.api.ts'
        );
        /* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

        var DialogSearchPartService = /** @class */ (function(_super) {
          __extends(DialogSearchPartService, _super);
          function DialogSearchPartService(http, appConfigService, productStructureManagementApi, taskManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.taskManagementApi = taskManagementApi;
            return _this;
          }
          DialogSearchPartService.prototype.findBireItemsBySearchCriteria = function(bireItem) {
            var params = {
              bireItemDTOCriteria: bireItem,
              pnCode: undefined,
              attribute: undefined
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireItemsBySearchCriteria,
              params
            );
          };
          DialogSearchPartService.prototype.findBirePartNumbersBySearchCriteria = function(partsSearchInputCriteria) {
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findBirePartNumbersBySearchCriteria,
              partsSearchInputCriteria
            );
          };
          DialogSearchPartService.prototype.findFamilyVariant = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findFamilyVariant, input);
          };
          DialogSearchPartService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _services_app_config_service__WEBPACK_IMPORTED_MODULE_5__['AppConfigService'],
                _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__['ProductStructureManagementApi'],
                _api_task_management_api__WEBPACK_IMPORTED_MODULE_3__['TaskManagementApi']
              ])
            ],
            DialogSearchPartService
          );
          return DialogSearchPartService;
        })(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/utils/label-value-utils.ts':
      /*!***************************************************!*\
  !*** ./src/app/shared/utils/label-value-utils.ts ***!
  \***************************************************/
      /*! exports provided: LabelValueUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LabelValueUtils', function() {
          return LabelValueUtils;
        });
        var LabelValueUtils = /** @class */ (function() {
          function LabelValueUtils() {}
          /*
           * DEPRECATED: do not use; create an interface instead
           */
          LabelValueUtils.stringValueToLabel = function(object, propertyName, propertyList) {
            if (!!object[propertyName]) {
              var labelValue = propertyList.find(function(property) {
                return property.value === object[propertyName];
              });
              if (!!labelValue) {
                object[propertyName] = labelValue.label;
                return true;
              }
            }
            return false;
          };
          /*
           * DEPRECATED: do not use; create an interface instead
           */
          LabelValueUtils.labelToStringValue = function(object, propertyName, propertyList) {
            if (!!object[propertyName]) {
              var labelValue = propertyList.find(function(property) {
                return property.label === object[propertyName];
              });
              if (!!labelValue) {
                object[propertyName] = labelValue.value;
                return true;
              }
            }
            return false;
          };
          return LabelValueUtils;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=default~engineering-management-engineering-management-module~engineering-management-item-part-number~b6f6c3b3.js.map
