(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['administration-enterprise-map-enterprise-map-module'],
  {
    /***/ './src/app/main/administration/enterprise-map/enterprise-map.component.html':
      /*!**********************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-map/enterprise-map.component.html ***!
  \**********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                    <label class="form-label"> {{ componentData.componentId + ".company" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="companyList"\r\n                        [(ngModel)]="selectedCompany"\r\n                        (onChange)="loadEnterpriseMapData()"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group "></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-content">\r\n              <p-tree class="orgChart" [value]="treeNode" layout="horizontal">\r\n                <ng-template let-node pTemplate="blueBox">\r\n                  <div class="node-header">{{ componentData.componentId + "." + node.label | translate }}</div>\r\n                  <ul>\r\n                    <li *ngFor="let w of node.data">{{ w }}</li>\r\n                  </ul>\r\n                </ng-template>\r\n                <ng-template let-node pTemplate="default"> {{ node.label }} </ng-template>\r\n              </p-tree>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/enterprise-map/enterprise-map.component.scss':
      /*!**********************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-map/enterprise-map.component.scss ***!
  \**********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .grid-row .grid-cell--12 .grid-cell .grid-cell-content {\n  align-items: center;\n  justify-content: center; }\n  :host .grid-row .grid-cell--12 .grid-cell .grid-cell-content .orgChart .node-header {\n    background-color: #006ea9;\n    color: #ffffff;\n    margin: -8px -14px 0;\n    padding: 0.5em 0.7em; }\n  :host .grid-row .grid-cell--12 .grid-cell .grid-cell-content .orgChart ul {\n    list-style: none;\n    margin-left: 0;\n    padding-left: 0; }\n  :host .grid-row .grid-cell--12 .grid-cell .grid-cell-content .orgChart ul li {\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      text-align: left; }\n  ::ng-deep .ui-tree {\n  border: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hZG1pbmlzdHJhdGlvbi9lbnRlcnByaXNlLW1hcC9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcYWRtaW5pc3RyYXRpb25cXGVudGVycHJpc2UtbWFwXFxlbnRlcnByaXNlLW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU1VLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTtFQVBqQztJQVVjLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLG9CQUFvQixFQUFBO0VBYmxDO0lBaUJjLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZSxFQUFBO0VBbkI3QjtNQXNCZ0IscUJBQXFCO01BQ3JCLFNBQVM7TUFDVCxVQUFVO01BQ1YsZ0JBQWdCLEVBQUE7RUFTaEM7RUFDRSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vYWRtaW5pc3RyYXRpb24vZW50ZXJwcmlzZS1tYXAvZW50ZXJwcmlzZS1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLy8gQ2VudGVyIGNvbnRlbnRcclxuICAuZ3JpZC1yb3cge1xyXG4gICAgLmdyaWQtY2VsbC0tMTIge1xyXG4gICAgICAuZ3JpZC1jZWxsIHtcclxuICAgICAgICAuZ3JpZC1jZWxsLWNvbnRlbnQge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgLm9yZ0NoYXJ0IHtcclxuICAgICAgICAgICAgLm5vZGUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2ZWE5O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogLThweCAtMTRweCAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuN2VtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcblxyXG4gICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG46Om5nLWRlZXAgLnVpLXRyZWUge1xyXG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/administration/enterprise-map/enterprise-map.component.ts':
      /*!********************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-map/enterprise-map.component.ts ***!
  \********************************************************************************/
      /*! exports provided: EnterpriseMapComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'EnterpriseMapComponent', function() {
          return EnterpriseMapComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_enterprise_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/enums/enterprise-type.enum */ './src/app/shared/enums/enterprise-type.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _enterprise_map_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./enterprise-map.service */ './src/app/main/administration/enterprise-map/enterprise-map.service.ts'
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

        var EnterpriseMapComponent = /** @class */ (function(_super) {
          __extends(EnterpriseMapComponent, _super);
          function EnterpriseMapComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            enterpriseMapService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.enterpriseMapService = enterpriseMapService;
            _this.treeNode = [];
            _this.enterpriseType = _shared_enums_enterprise_type_enum__WEBPACK_IMPORTED_MODULE_3__['EnterpriseType'];
            _this.companyList = [];
            return _this;
          }
          EnterpriseMapComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
              .ADM_ENTERPRISE_MAP;
          };
          EnterpriseMapComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.loadDropDown();
          };
          /**
           * Filling the company list
           */
          EnterpriseMapComponent.prototype.loadDropDown = function() {
            var _this = this;
            this.enterpriseMapService.getCompanyList().subscribe(function(result) {
              _this.companyList = result;
              _this.selectedCompany = result[0].value;
              _this.loadEnterpriseMapData();
            });
          };
          /* Generating organisation chart
           * and grouping warehouse or Work Center in a single block
           * to avoid too large displays
           */
          EnterpriseMapComponent.prototype.loadEnterpriseMapData = function() {
            var _this = this;
            this.enterpriseMapService.enterpriseMap(this.selectedCompany).subscribe(function(result) {
              if (result != undefined) {
                // Enterprise exists
                var etsNode_1 = {
                  // Enterprise node : parent node
                  label: result.label,
                  expanded: true,
                  children: []
                };
                if (result.children) {
                  result.children.forEach(function(companyItem) {
                    // Company node, belonging to Entreprise
                    var company = {
                      label: companyItem.label,
                      expanded: false,
                      children: []
                    };
                    // Warehouses & Work Centers children that will be added to Company
                    var warehousesChild = {
                      data: [],
                      label:
                        _shared_enums_enterprise_type_enum__WEBPACK_IMPORTED_MODULE_3__['EnterpriseType'].WAREHOUSE,
                      type: 'blueBox'
                    };
                    var workCentersChild = {
                      data: [],
                      label:
                        _shared_enums_enterprise_type_enum__WEBPACK_IMPORTED_MODULE_3__['EnterpriseType'].WORKCENTER,
                      type: 'blueBox'
                    };
                    // Record each label to corresponding child
                    if (!!companyItem.children) {
                      companyItem.children.forEach(function(w) {
                        if (
                          w.type ===
                          _shared_enums_enterprise_type_enum__WEBPACK_IMPORTED_MODULE_3__['EnterpriseType'].WAREHOUSE
                        ) {
                          warehousesChild.data.push(w.label);
                        }
                        if (
                          w.type ===
                          _shared_enums_enterprise_type_enum__WEBPACK_IMPORTED_MODULE_3__['EnterpriseType'].WORKCENTER
                        ) {
                          workCentersChild.data.push(w.label);
                        }
                      });
                      // Add warehouses and work centers to company children
                      if (!!company.children) {
                        if (warehousesChild.data.length > 0) {
                          company.children.push(warehousesChild);
                        }
                        if (workCentersChild.data.length > 0) {
                          company.children.push(workCentersChild);
                        }
                      }
                      // Add Company to its Entreprise
                      if (!!etsNode_1.children) {
                        etsNode_1.children.push(company);
                      }
                    }
                  });
                  _this.treeNode = [];
                  _this.treeNode.push(etsNode_1);
                }
              }
            });
          };
          EnterpriseMapComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-enterprise-map',
                template: __webpack_require__(
                  /*! ./enterprise-map.component.html */ './src/app/main/administration/enterprise-map/enterprise-map.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./enterprise-map.component.scss */ './src/app/main/administration/enterprise-map/enterprise-map.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__['TabService'],
                _enterprise_map_service__WEBPACK_IMPORTED_MODULE_10__['EnterpriseMapService']
              ])
            ],
            EnterpriseMapComponent
          );
          return EnterpriseMapComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_9__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/administration/enterprise-map/enterprise-map.module.ts':
      /*!*****************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-map/enterprise-map.module.ts ***!
  \*****************************************************************************/
      /*! exports provided: EnterpriseMapModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'EnterpriseMapModule', function() {
          return EnterpriseMapModule;
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
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/tree */ './node_modules/primeng/tree.js'
        );
        /* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tree__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _enterprise_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./enterprise-map.component */ './src/app/main/administration/enterprise-map/enterprise-map.component.ts'
        );
        /* harmony import */ var _enterprise_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./enterprise-map.service */ './src/app/main/administration/enterprise-map/enterprise-map.service.ts'
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
          primeng_tree__WEBPACK_IMPORTED_MODULE_3__['TreeModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_2__['TooltipModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var DYNAMIC_COMPONENTS = [_enterprise_map_component__WEBPACK_IMPORTED_MODULE_7__['EnterpriseMapComponent']];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_enterprise_map_service__WEBPACK_IMPORTED_MODULE_8__['EnterpriseMapService']];
        var EnterpriseMapModule = /** @class */ (function() {
          function EnterpriseMapModule() {}
          EnterpriseMapModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_4__['AngularCommonSharedModule'],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_6__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            EnterpriseMapModule
          );
          return EnterpriseMapModule;
        })();

        /***/
      },

    /***/ './src/app/main/administration/enterprise-map/enterprise-map.service.ts':
      /*!******************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-map/enterprise-map.service.ts ***!
  \******************************************************************************/
      /*! exports provided: EnterpriseMapService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'EnterpriseMapService', function() {
          return EnterpriseMapService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/bidt-company.api */ './src/app/shared/api/bidt-company.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
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

        var EnterpriseMapService = /** @class */ (function(_super) {
          __extends(EnterpriseMapService, _super);
          function EnterpriseMapService(http, appConfigService, bidtCompanyApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtCompanyApi = bidtCompanyApi;
            return _this;
          }
          EnterpriseMapService.prototype.enterpriseMap = function(id) {
            return _super.prototype.post.call(this, this.bidtCompanyApi.enterpriseMap, id);
          };
          EnterpriseMapService.prototype.getCompanyList = function() {
            return _super.prototype.post.call(this, this.bidtCompanyApi.getCompanyList);
          };
          EnterpriseMapService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__['BidtCompanyApi']
              ])
            ],
            EnterpriseMapService
          );
          return EnterpriseMapService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/enums/enterprise-type.enum.ts':
      /*!******************************************************!*\
  !*** ./src/app/shared/enums/enterprise-type.enum.ts ***!
  \******************************************************/
      /*! exports provided: EnterpriseType */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'EnterpriseType', function() {
          return EnterpriseType;
        });
        var EnterpriseType;
        (function(EnterpriseType) {
          EnterpriseType['WAREHOUSE'] = 'WAREHOUSE';
          EnterpriseType['WORKCENTER'] = 'WORKCENTER';
        })(EnterpriseType || (EnterpriseType = {}));

        /***/
      }
  }
]);
//# sourceMappingURL=administration-enterprise-map-enterprise-map-module.js.map
