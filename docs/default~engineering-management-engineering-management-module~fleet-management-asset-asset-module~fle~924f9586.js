(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~engineering-management-engineering-management-module~fleet-management-asset-asset-module~fle~924f9586'],
  {
    /***/ './node_modules/primeng/selectbutton.js':
      /*!**********************************************!*\
  !*** ./node_modules/primeng/selectbutton.js ***!
  \**********************************************/
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
            /*! ./components/selectbutton/selectbutton */ './node_modules/primeng/components/selectbutton/selectbutton.js'
          )
        );

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-pn-alternatives/dialog-search-pn-alternatives.component.html':
      /*!**************************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-pn-alternatives/dialog-search-pn-alternatives.component.html ***!
  \**************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <a-table [dataSource]="alternativesTableDataSource"> </a-table>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      {{ "cancel" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="onSelect()"\r\n      [disabled]="!alternativesTableDataSource.hasDataSelection"\r\n    >\r\n      {{ "validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-pn-alternatives/dialog-search-pn-alternatives.component.ts':
      /*!************************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-pn-alternatives/dialog-search-pn-alternatives.component.ts ***!
  \************************************************************************************************************/
      /*! exports provided: DialogSearchPnAlternativesComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchPnAlternativesComponent',
          function() {
            return DialogSearchPnAlternativesComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _table_table_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _dialog_search_pn_alternatives_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./dialog-search-pn-alternatives.service */ './src/app/shared/components/dialog-search-pn-alternatives/dialog-search-pn-alternatives.service.ts'
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

        var DialogSearchPnAlternativesComponent = /** @class */ (function(_super) {
          __extends(DialogSearchPnAlternativesComponent, _super);
          function DialogSearchPnAlternativesComponent(dialogSearchPnAlternativesService) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write,
                'DialogSearchPnAlternativesComponent'
              ) || this;
            _this.dialogSearchPnAlternativesService = dialogSearchPnAlternativesService;
            _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.init();
            return _this;
          }
          // ////////////////////////////////////////////////////////////////////////////
          DialogSearchPnAlternativesComponent.prototype.ngOnInit = function() {
            this.load();
          };
          // ////////////////////////////////////////////////////////////////////////////
          DialogSearchPnAlternativesComponent.prototype.onSelect = function() {
            this.onSelected.emit(this.alternativesTableDataSource.dataSelection[0]._obj.birePn);
          };
          // ////////////////////////////////////////////////////////////////////////////
          DialogSearchPnAlternativesComponent.prototype.init = function() {
            this.initAlternativesTableDataSource();
          };
          DialogSearchPnAlternativesComponent.prototype.initAlternativesTableDataSource = function() {
            this.alternativesTableDataSource = new _table_table_data_source__WEBPACK_IMPORTED_MODULE_5__[
              'TableDataSource'
            ]({
              allowMultiSelect: false,
              columns: [
                { field: 'pnCode', translateKey: this.getTranslateKey('pnCode'), width: '15%' },
                { field: 'designation', translateKey: this.getTranslateKey('designation'), width: '40%' },
                {
                  field: 'manufacturerOtanCode',
                  translateKey: this.getTranslateKey('manufacturerOtanCode'),
                  width: '15%'
                },
                { field: 'otanPnReference', translateKey: this.getTranslateKey('otanPnReference'), width: '15%' },
                { field: 'interchangeability', translateKey: this.getTranslateKey('interchangeability'), width: '15%' }
              ]
            });
          };
          DialogSearchPnAlternativesComponent.prototype.load = function() {
            var _this = this;
            this.alternativesTableDataSource.setData([]);
            this.alternativesTableDataSource.isLoading = true;
            this.dialogSearchPnAlternativesService
              .findAlternatives(this.pn.pnCode)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['finalize'])(function() {
                  _this.alternativesTableDataSource.isLoading = false;
                })
              )
              .subscribe(function(results) {
                var alternatives = results
                  .reduce(function(acc, current) {
                    var isPresent = acc.find(function(item) {
                      return item.birePn.pnCode === current.birePn.pnCode;
                    });
                    if (!isPresent) {
                      return acc.concat([current]);
                    } else {
                      return acc;
                    }
                  }, [])
                  .map(function(result) {
                    return {
                      designation: _utils_string_utils__WEBPACK_IMPORTED_MODULE_4__['StringUtils'].orEmpty(
                        result.birePn.articleDesignation
                      ),
                      interchangeability: _utils_string_utils__WEBPACK_IMPORTED_MODULE_4__['StringUtils'].orEmpty(
                        result.interchangeability
                      ),
                      manufacturerOtanCode: _utils_string_utils__WEBPACK_IMPORTED_MODULE_4__['StringUtils'].orEmpty(
                        result.birePn.manufacturerOtanCode
                      ),
                      otanPnReference: _utils_string_utils__WEBPACK_IMPORTED_MODULE_4__['StringUtils'].orEmpty(
                        result.birePn.otanPnReference
                      ),
                      pnCode: _utils_string_utils__WEBPACK_IMPORTED_MODULE_4__['StringUtils'].orEmpty(
                        result.birePn.pnCode
                      ),
                      _obj: result
                    };
                  });
                _this.alternativesTableDataSource.setData(alternatives);
              });
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogSearchPnAlternativesComponent.prototype,
            'pn',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(), __metadata('design:type', Object)],
            DialogSearchPnAlternativesComponent.prototype,
            'onSelected',
            void 0
          );
          DialogSearchPnAlternativesComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-search-pn-alternatives[pn]',
                template: __webpack_require__(
                  /*! ./dialog-search-pn-alternatives.component.html */ './src/app/shared/components/dialog-search-pn-alternatives/dialog-search-pn-alternatives.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _dialog_search_pn_alternatives_service__WEBPACK_IMPORTED_MODULE_6__['DialogSearchPnAlternativesService']
              ])
            ],
            DialogSearchPnAlternativesComponent
          );
          return DialogSearchPnAlternativesComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-pn-alternatives/dialog-search-pn-alternatives.module.ts':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-pn-alternatives/dialog-search-pn-alternatives.module.ts ***!
  \*********************************************************************************************************/
      /*! exports provided: DialogSearchPnAlternativesModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchPnAlternativesModule',
          function() {
            return DialogSearchPnAlternativesModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _table_table_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dialog_search_pn_alternatives_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./dialog-search-pn-alternatives.component */ './src/app/shared/components/dialog-search-pn-alternatives/dialog-search-pn-alternatives.component.ts'
        );
        /* harmony import */ var _dialog_search_pn_alternatives_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./dialog-search-pn-alternatives.service */ './src/app/shared/components/dialog-search-pn-alternatives/dialog-search-pn-alternatives.service.ts'
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
        var EXTERNAL_MODULES = [_table_table_module__WEBPACK_IMPORTED_MODULE_5__['TableModule']];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_4__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _dialog_search_pn_alternatives_component__WEBPACK_IMPORTED_MODULE_6__['DialogSearchPnAlternativesComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _dialog_search_pn_alternatives_service__WEBPACK_IMPORTED_MODULE_7__['DialogSearchPnAlternativesService']
        ];
        var DialogSearchPnAlternativesModule = /** @class */ (function() {
          function DialogSearchPnAlternativesModule() {}
          DialogSearchPnAlternativesModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS),
                imports: __spread(
                  [
                    _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_1__['AngularCommonSharedModule'],
                    _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_2__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _app_common_shared_module__WEBPACK_IMPORTED_MODULE_3__['AppCommonSharedModule']
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            DialogSearchPnAlternativesModule
          );
          return DialogSearchPnAlternativesModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-pn-alternatives/dialog-search-pn-alternatives.service.ts':
      /*!**********************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-pn-alternatives/dialog-search-pn-alternatives.service.ts ***!
  \**********************************************************************************************************/
      /*! exports provided: DialogSearchPnAlternativesService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchPnAlternativesService',
          function() {
            return DialogSearchPnAlternativesService;
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

        var DialogSearchPnAlternativesService = /** @class */ (function(_super) {
          __extends(DialogSearchPnAlternativesService, _super);
          function DialogSearchPnAlternativesService(http, appConfigService, productStructureManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagementApi = productStructureManagementApi;
            return _this;
          }
          DialogSearchPnAlternativesService.prototype.findAlternatives = function(pnCode) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findAlternativePnsByPnCode,
              pnCode
            );
          };
          DialogSearchPnAlternativesService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__['ProductStructureManagementApi']
              ])
            ],
            DialogSearchPnAlternativesService
          );
          return DialogSearchPnAlternativesService;
        })(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-pn/dialog-search-pn.component.html':
      /*!************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-pn/dialog-search-pn.component.html ***!
  \************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="85">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n\r\n    <i class="material-icons aw-icon aw-icon-with-border" (click)="onCancel()">close</i>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section search-criteria-section">\r\n        <h4 class="section-title">{{ "global.search" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="column">\r\n            <div class="row">\r\n              <div class="form-group" *ngIf="showFamilyVariantSelection">\r\n                <label class="form-label"> {{ getComponentName() + ".familyVariant" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="propertyVariant"\r\n                    [(ngModel)]="familyVariant"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <ng-container\r\n                  *ngIf="!showPartTypeSelection && !showFamilyVariantSelection; then designation; else pnCode"\r\n                ></ng-container>\r\n\r\n                <ng-template #pnCode>\r\n                  <label class="form-label"> {{ getComponentName() + ".pnCode" | translate }} </label>\r\n\r\n                  <div class="form-control">\r\n                    <input type="text" class="aw-input" [(ngModel)]="searchObject.pnCode" />\r\n                  </div>\r\n                </ng-template>\r\n              </div>\r\n\r\n              <div class="form-group" *ngIf="showPartTypeSelection">\r\n                <label class="form-label"> {{ getComponentName() + ".type" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="pnTypes"\r\n                    [(ngModel)]="pnType"\r\n                    [showClear]="false"\r\n                    placeholder="&nbsp;"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <ng-container\r\n                  *ngIf="!showPartTypeSelection && !showFamilyVariantSelection; then designation; else otanPnReference"\r\n                ></ng-container>\r\n\r\n                <ng-template #otanPnReference>\r\n                  <label class="form-label"> {{ getComponentName() + ".otanPnReference" | translate }} </label>\r\n\r\n                  <div class="form-control">\r\n                    <input type="text" class="aw-input" [(ngModel)]="searchObject.otanPnReference" />\r\n                  </div>\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <ng-container\r\n                  *ngIf="!showPartTypeSelection && !showFamilyVariantSelection; then pnCode; else designation"\r\n                ></ng-container>\r\n\r\n                <ng-template #designation>\r\n                  <label class="form-label"> {{ getComponentName() + ".designation" | translate }} </label>\r\n\r\n                  <div class="form-control">\r\n                    <input type="text" class="aw-input" [(ngModel)]="searchObject.articleDesignation" />\r\n                  </div>\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row" *ngIf="withSparePartClass">\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ getComponentName() + ".sparePartClass" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    placeholder="&nbsp;"\r\n                    [showClear]="true"\r\n                    [(ngModel)]="searchObject.sparePartClassCode"\r\n                    [options]="sparePartClasses"\r\n                    appendTo="body"\r\n                    [disabled]="isSparePartClassPredefined"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group flex--3"></div>\r\n            </div>\r\n\r\n            <div class="row search-criteria-footer">\r\n              <div class="search-actions">\r\n                <button type="button" color="primary" mat-raised-button (click)="search()">\r\n                  <span>{{ "global.toSearch" | translate }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section results-section">\r\n        <h4 class="section-title">\r\n          {{ "global.results" | translate }} ({{ resultsTable.list ? resultsTable.list.length : 0 }})\r\n        </h4>\r\n\r\n        <div class="section-content">\r\n          <p-table\r\n            #ptable\r\n            class="aw-table2"\r\n            [columns]="resultsTableCols"\r\n            [value]="resultsTable.list"\r\n            selectionMode="single"\r\n            [(selection)]="selectedPn"\r\n            [scrollable]="true"\r\n          >\r\n            <ng-template pTemplate="emptymessage">\r\n              <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n              <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                <div class="lds-hourglass"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="caption">\r\n              <div class="aw-table-header">\r\n                <div class="aw-table-global-filter">\r\n                  <label class="aw-table-global-filter-label">\r\n                    <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    #ptableGlobalFilter\r\n                    class="aw-table-global-filter-input"\r\n                    type="text"\r\n                    placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                    (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                  />\r\n                </div>\r\n\r\n                <div class="aw-table-actions">\r\n                  <button type="button" mat-raised-button *ngIf="selectedPn" (click)="showPnAlternativesDialog()">\r\n                    {{ getComponentName() + ".showAlternatives" | translate }}\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="colgroup" let-columns>\r\n              <colgroup>\r\n                <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="header" let-columns>\r\n              <tr>\r\n                <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                  {{ getComponentName() + "." + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }" [ngSwitch]="col.field">\r\n                  <span *ngSwitchCase="\'statusState\'"> {{ statusDictionary[rowData[col.field]] }}</span>\r\n                  <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="onCancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button [disabled]="!selectedPn" color="primary" type="button" mat-raised-button (click)="onValidate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-pn-alternatives\r\n  *ngIf="pnAlternativesDialogVisible"\r\n  [(display)]="pnAlternativesDialogVisible"\r\n  [pn]="selectedPn"\r\n  (onSelected)="onSelectPnAlternative($event)"\r\n></aw-dialog-search-pn-alternatives>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-pn/dialog-search-pn.component.ts':
      /*!**********************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-pn/dialog-search-pn.component.ts ***!
  \**********************************************************************************/
      /*! exports provided: DialogSearchPnComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchPnComponent',
          function() {
            return DialogSearchPnComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _utils_list_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _utils_object_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _dialog_search_pn_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./dialog-search-pn.service */ './src/app/shared/components/dialog-search-pn/dialog-search-pn.service.ts'
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

        var DialogSearchPnComponent = /** @class */ (function(_super) {
          __extends(DialogSearchPnComponent, _super);
          function DialogSearchPnComponent(
            dialogSearchPnService,
            confirmationService,
            messageService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Write,
                'DialogSearchPnComponent'
              ) || this;
            _this.dialogSearchPnService = dialogSearchPnService;
            _this.confirmationService = confirmationService;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.resultsTable = { list: [], moreResults: false };
            _this.searchObject = {};
            _this.selectedPn = undefined;
            _this.showFamilyVariantSelection = true;
            _this.sparePartClasses = [];
            _this.familyVariantMap = new Map();
            _this.propertyVariant = [];
            _this.isLoading = false;
            _this.resultsTableCols = [
              { field: 'pnCode', width: '20%', alignment: 'left' },
              { field: 'articleDesignation', width: '32%', alignment: 'left' },
              { field: 'manufacturerOtanCode', width: '18%', alignment: 'left' },
              { field: 'otanPnReference', width: '15%', alignment: 'left' },
              { field: 'statusState', width: '15%', alignment: 'left' }
            ];
            return _this;
          }
          DialogSearchPnComponent.prototype.ngOnInit = function() {
            if (
              !this.pnType &&
              (!_utils_object_utils__WEBPACK_IMPORTED_MODULE_11__['ObjectUtils'].isDefined(this.withAllTypes) ||
                !this.withAllTypes)
            ) {
              this.pnType =
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                  'AWPropertiesConstants'
                ].PN_TYPE_PART_KEY;
            }
            this.loadDropDownLists();
            if (this.withSparePartClass) {
              this.loadSparePartClasses();
            }
          };
          DialogSearchPnComponent.prototype.loadDropDownLists = function() {
            var _this = this;
            var familyVariantInput = {
              useCase:
                _constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__['BidoFunctionTypeConstants']
                  .UC_MCH_BOM,
              module:
                _constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__['BidoFunctionTypeConstants']
                  .MODULE_FAMILY
            };
            this.statusDictionary = {};
            this.dialogSearchPnService.getFamilyVariant(familyVariantInput).subscribe(
              function(results) {
                var list = new Array();
                results.forEach(function(variantElement) {
                  if (!!variantElement.labelValueDTO) {
                    list.push(variantElement.labelValueDTO);
                    _this.familyVariantMap.set(variantElement.labelValueDTO, variantElement);
                  }
                });
                _this.propertyVariant = list;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetFamilyVariant'));
              }
            );
            if (this.withAllTypes) {
              this.propertiesService
                .getValue(
                  _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                    .PN_TYPE_MAP
                )
                .subscribe(function(results) {
                  _this.pnTypes = results.sort(function(x, y) {
                    return x.label.localeCompare(y.label);
                  });
                });
            } else {
              this.propertiesService
                .getValue(
                  _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                    .ENGINEERING_PN_TYPES_MAP
                )
                .subscribe(function(results) {
                  _this.pnTypes = results.sort(function(x, y) {
                    return x.label.localeCompare(y.label);
                  });
                });
            }
            this.propertiesService
              .getValue(
                _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                  .FUNC_OBJECT_STATUS_MAP
              )
              .subscribe(
                function(results) {
                  _this.propertyStatus = results;
                  _this.fillStatusDictionary(results);
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetFamilyVariant'));
                }
              );
            this.propertiesService
              .getValue(
                _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                  .OBJECT_STATUS_MAP
              )
              .subscribe(
                function(results) {
                  _this.fillStatusDictionary(results);
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetFamilyVariant'));
                }
              );
          };
          DialogSearchPnComponent.prototype.search = function() {
            var _this = this;
            this.resultsTable.list = [];
            this.resultsTable.moreResults = false;
            this.selectedPn = undefined;
            var familyCode;
            var structureType;
            var variantCode;
            this.isLoading = true;
            if (this.familyVariant) {
              var familyVariantDTO_1 = {};
              this.familyVariantMap.forEach(function(variantElement) {
                if (!!variantElement.labelValueDTO && variantElement.labelValueDTO.value === _this.familyVariant) {
                  familyVariantDTO_1 = variantElement;
                }
              });
              familyCode = familyVariantDTO_1.familyCode;
              structureType = familyVariantDTO_1.structureType;
              variantCode = familyVariantDTO_1.variantCode;
            }
            this.searchObject.pnType = this.pnType;
            this.dialogSearchPnService
              .findBirePnsBySearchCriteria(this.searchObject, familyCode, structureType, variantCode, this.toolSearch)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['finalize'])(function() {
                  _this.isLoading = false;
                })
              )
              .subscribe(function(results) {
                _this.resultsTable = results;
              });
          };
          DialogSearchPnComponent.prototype.fillStatusDictionary = function(references) {
            var _this = this;
            references.forEach(function(lv) {
              return (_this.statusDictionary[lv.value] = lv.label);
            });
          };
          DialogSearchPnComponent.prototype.onValidate = function() {
            var _this = this;
            if (this.selectedPn) {
              if (this.checkContainer && this.selectedPn.pnCode) {
                this.dialogSearchPnService.isPartWithContainer(this.selectedPn.pnCode).subscribe({
                  next: function(isPartWithContainer) {
                    if (isPartWithContainer) {
                      _this.confirmationService.confirm({
                        messageKey: _this.getTranslateKey('pnWithContainer'),
                        contextKeys: [_this.getTranslateKey('confirmContinue')],
                        accept: function() {
                          _this.validate();
                        }
                      });
                    } else {
                      _this.validate();
                    }
                  }
                });
              } else {
                this.validate();
              }
            }
          };
          DialogSearchPnComponent.prototype.validate = function() {
            this.onSelected.emit(this.selectedPn);
            this.closeDialog();
          };
          // Clean the selectedObject object if the row is unselect
          DialogSearchPnComponent.prototype.onRowUnselect = function() {
            this.selectedPn = undefined;
          };
          DialogSearchPnComponent.prototype.onCancel = function() {
            this.resultsTable = {
              list: [],
              moreResults: false
            };
            this.closeDialog();
          };
          DialogSearchPnComponent.prototype.showPnAlternativesDialog = function() {
            this.pnAlternativesDialogVisible = true;
          };
          DialogSearchPnComponent.prototype.onSelectPnAlternative = function(event) {
            this.onSelected.emit(event);
            this.closeDialog();
          };
          DialogSearchPnComponent.prototype.loadSparePartClasses = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                  .SPARE_PART_CLASS_CODE
              )
              .subscribe({
                next: function(sparePartClasses) {
                  _this.sparePartClasses = _utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                    .orEmpty(sparePartClasses)
                    .sort(function(x, y) {
                      return x.label.localeCompare(y.label);
                    });
                  if (_this.isSparePartClassPredefined) {
                    _this.searchObject.sparePartClassCode =
                      _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                        'AWPropertiesConstants'
                      ].SPC_REPAIRABLE_KEY;
                  }
                }
              });
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogSearchPnComponent.prototype,
            'familyVariant',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogSearchPnComponent.prototype,
            'pnType',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogSearchPnComponent.prototype,
            'toolSearch',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogSearchPnComponent.prototype,
            'showPartTypeSelection',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogSearchPnComponent.prototype,
            'showFamilyVariantSelection',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogSearchPnComponent.prototype,
            'checkContainer',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(), __metadata('design:type', Object)],
            DialogSearchPnComponent.prototype,
            'onSelected',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogSearchPnComponent.prototype,
            'withAllTypes',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogSearchPnComponent.prototype,
            'withSparePartClass',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogSearchPnComponent.prototype,
            'isSparePartClassPredefined',
            void 0
          );
          DialogSearchPnComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-search-pn',
                template: __webpack_require__(
                  /*! ./dialog-search-pn.component.html */ './src/app/shared/components/dialog-search-pn/dialog-search-pn.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _dialog_search_pn_service__WEBPACK_IMPORTED_MODULE_12__['DialogSearchPnService'],
                _services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__['ConfirmationService'],
                _services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _services_properties_service__WEBPACK_IMPORTED_MODULE_9__['PropertiesService']
              ])
            ],
            DialogSearchPnComponent
          );
          return DialogSearchPnComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-pn/dialog-search-pn.module.ts':
      /*!*******************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-pn/dialog-search-pn.module.ts ***!
  \*******************************************************************************/
      /*! exports provided: DialogSearchPnModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DialogSearchPnModule', function() {
          return DialogSearchPnModule;
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
        /* harmony import */ var _dialog_search_pn_alternatives_dialog_search_pn_alternatives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../dialog-search-pn-alternatives/dialog-search-pn-alternatives.module */ './src/app/shared/components/dialog-search-pn-alternatives/dialog-search-pn-alternatives.module.ts'
        );
        /* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dialog_search_pn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./dialog-search-pn.component */ './src/app/shared/components/dialog-search-pn/dialog-search-pn.component.ts'
        );
        /* harmony import */ var _dialog_search_pn_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./dialog-search-pn.service */ './src/app/shared/components/dialog-search-pn/dialog-search-pn.service.ts'
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
          primeng_table__WEBPACK_IMPORTED_MODULE_2__['TableModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__['DropdownModule']
        ];
        var INTERNAL_MODULES = [
          _dialog_search_pn_alternatives_dialog_search_pn_alternatives_module__WEBPACK_IMPORTED_MODULE_6__[
            'DialogSearchPnAlternativesModule'
          ],
          _modal_modal_module__WEBPACK_IMPORTED_MODULE_7__['ModalModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [_dialog_search_pn_component__WEBPACK_IMPORTED_MODULE_8__['DialogSearchPnComponent']];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_dialog_search_pn_service__WEBPACK_IMPORTED_MODULE_9__['DialogSearchPnService']];
        var DialogSearchPnModule = /** @class */ (function() {
          function DialogSearchPnModule() {}
          DialogSearchPnModule = __decorate(
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
            DialogSearchPnModule
          );
          return DialogSearchPnModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-pn/dialog-search-pn.service.ts':
      /*!********************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-pn/dialog-search-pn.service.ts ***!
  \********************************************************************************/
      /*! exports provided: DialogSearchPnService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DialogSearchPnService', function() {
          return DialogSearchPnService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
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

        var DialogSearchPnService = /** @class */ (function(_super) {
          __extends(DialogSearchPnService, _super);
          function DialogSearchPnService(http, appConfigService, productStructureManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagementApi = productStructureManagementApi;
            return _this;
          }
          DialogSearchPnService.prototype.isPartWithContainer = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.isPartWithContainer, input);
          };
          DialogSearchPnService.prototype.getFamilyVariant = function(familyVariantInput) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findFamilyVariant,
              familyVariantInput
            );
          };
          DialogSearchPnService.prototype.findBirePnsBySearchCriteria = function(
            criteria,
            familyCode,
            structureType,
            variantCode,
            toolSearch
          ) {
            var params = {
              birePnDTOCriteria: criteria,
              familyCode: familyCode,
              structureType: structureType,
              variantCode: variantCode,
              toolSearch: toolSearch
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBirePnsBySearchCriteria,
              params
            );
          };
          DialogSearchPnService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__['ProductStructureManagementApi']
              ])
            ],
            DialogSearchPnService
          );
          return DialogSearchPnService;
        })(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=default~engineering-management-engineering-management-module~fleet-management-asset-asset-module~fle~924f9586.js.map
