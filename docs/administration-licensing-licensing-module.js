(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['administration-licensing-licensing-module'],
  {
    /***/ './src/app/main/administration/licensing/licensing.module.ts':
      /*!*******************************************************************!*\
  !*** ./src/app/main/administration/licensing/licensing.module.ts ***!
  \*******************************************************************/
      /*! exports provided: LicensingModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LicensingModule', function() {
          return LicensingModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _search_licensing_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./search/licensing-search.component */ './src/app/main/administration/licensing/search/licensing-search.component.ts'
        );
        /* harmony import */ var _search_licensing_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./search/licensing-search.service */ './src/app/main/administration/licensing/search/licensing-search.service.ts'
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
        var EXTERNAL_MODULES = [primeng_tooltip__WEBPACK_IMPORTED_MODULE_1__['TooltipModule']];
        var INTERNAL_MODULES = [];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [];
        var DYNAMIC_COMPONENTS = [
          _search_licensing_search_component__WEBPACK_IMPORTED_MODULE_6__['LicensingSearchComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_search_licensing_search_service__WEBPACK_IMPORTED_MODULE_7__['LicensingSearchService']];
        var LicensingModule = /** @class */ (function() {
          function LicensingModule() {}
          LicensingModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_5__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            LicensingModule
          );
          return LicensingModule;
        })();

        /***/
      },

    /***/ './src/app/main/administration/licensing/search/licensing-search.component.html':
      /*!**************************************************************************************!*\
  !*** ./src/app/main/administration/licensing/search/licensing-search.component.html ***!
  \**************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" class="btn-with-spinner" mat-raised-button (click)="checkLicensing()">\r\n      <span class="lds-hourglass" *ngIf="showSpinner"></span>\r\n      {{ componentData.componentId + ".checkLicensing" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".numberOfLicenseAquired" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="pageData.licencingAutorised"\r\n                        title="{{ pageData.licencingAutorised }}"\r\n                        disabled\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".licensingCheckReport" | translate }}\r\n                      <span\r\n                        class="alertIcon"\r\n                        [class.none]="alertIcon === componentId.ICON_NONE"\r\n                        [class.ok]="alertIcon === componentId.ICON_GREEN"\r\n                        [class.nok]="alertIcon === componentId.ICON_RED"\r\n                      ></span>\r\n                    </label>\r\n                    <div class="form-control text-area">\r\n                      <textarea\r\n                        class="aw-textarea heightClass cell-grey"\r\n                        pInputTextarea\r\n                        disabled\r\n                        rows="30"\r\n                        [(ngModel)]="licenseReport"\r\n                      ></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/licensing/search/licensing-search.component.scss':
      /*!**************************************************************************************!*\
  !*** ./src/app/main/administration/licensing/search/licensing-search.component.scss ***!
  \**************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .heightClass {\n  height: 46em; }\n\n:host .cell-grey {\n  background-color: #e1e1e1 !important; }\n\n:host .alertIcon {\n  height: 0.8em;\n  width: 0.8em;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 0.5em; }\n\n:host .ok {\n  background-color: #4caf50 !important; }\n\n:host .none {\n  background-color: #c8d4d6 !important; }\n\n:host .nok {\n  background-color: #f6685e !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hZG1pbmlzdHJhdGlvbi9saWNlbnNpbmcvc2VhcmNoL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxhZG1pbmlzdHJhdGlvblxcbGljZW5zaW5nXFxzZWFyY2hcXGxpY2Vuc2luZy1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSSxZQUFZLEVBQUE7O0FBRmhCO0VBTUksb0NBQW9DLEVBQUE7O0FBTnhDO0VBVUksYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQWR0QjtFQWtCSSxvQ0FBMEMsRUFBQTs7QUFsQjlDO0VBc0JJLG9DQUFtQyxFQUFBOztBQXRCdkM7RUEwQkksb0NBQXdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FkbWluaXN0cmF0aW9uL2xpY2Vuc2luZy9zZWFyY2gvbGljZW5zaW5nLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5oZWlnaHRDbGFzcyB7XHJcbiAgICBoZWlnaHQ6IDQ2ZW07XHJcbiAgfVxyXG5cclxuICAuY2VsbC1ncmV5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hbGVydEljb24ge1xyXG4gICAgaGVpZ2h0OiAwLjhlbTtcclxuICAgIHdpZHRoOiAwLjhlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxuICB9XHJcblxyXG4gIC5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubm9uZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5ub2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/administration/licensing/search/licensing-search.component.ts':
      /*!************************************************************************************!*\
  !*** ./src/app/main/administration/licensing/search/licensing-search.component.ts ***!
  \************************************************************************************/
      /*! exports provided: LicensingSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'LicensingSearchComponent',
          function() {
            return LicensingSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _licensing_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./licensing-search.service */ './src/app/main/administration/licensing/search/licensing-search.service.ts'
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

        var LicensingSearchComponent = /** @class */ (function(_super) {
          __extends(LicensingSearchComponent, _super);
          function LicensingSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            licensingSearchService
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
            _this.licensingSearchService = licensingSearchService;
            _this.alertIcon = 0;
            _this.componentId = LicensingSearchComponent_1;
            return _this;
          }
          LicensingSearchComponent_1 = LicensingSearchComponent;
          LicensingSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
              .ADM_LICENSING_SEARCH;
          };
          LicensingSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.init();
          };
          /*************************************************************************
           * Init
           *************************************************************************/
          LicensingSearchComponent.prototype.init = function() {
            this.pageData = {};
            this.findBsdeAwCustoms();
          };
          /*************************************************************************
           * Load Screen Data
           *************************************************************************/
          LicensingSearchComponent.prototype.findBsdeAwCustoms = function() {
            var _this = this;
            this.licensingSearchService.findBsdeAwCustomsForLicensing().subscribe(
              function(result) {
                _this.pageData = result;
              },
              function(error) {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindingBsdeAwCustoms'));
              }
            );
          };
          /*************************************************************************
           * Check Licensing
           *************************************************************************/
          LicensingSearchComponent.prototype.checkLicensing = function() {
            var _this = this;
            this.showSpinner = true;
            this.licensingSearchService.checkAWLicense().subscribe(
              function(result) {
                _this.alertIcon =
                  result.alertIcon === 'ICON_NONE_LIGHT'
                    ? LicensingSearchComponent_1.ICON_NONE
                    : result.alertIcon === 'ICON_GREEN_LIGHT'
                    ? LicensingSearchComponent_1.ICON_GREEN
                    : LicensingSearchComponent_1.ICON_RED;
                if (!!result.licensingReport) {
                  _this.licenseReport = result.licensingReport;
                }
                if (!!result.reportException) {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFetchingLicense'));
                }
                _this.showSpinner = false;
              },
              function(error) {
                _this.showSpinner = false;
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFetchingLicense'));
              }
            );
          };
          var LicensingSearchComponent_1;
          LicensingSearchComponent.ICON_NONE = 0;
          LicensingSearchComponent.ICON_GREEN = 1;
          LicensingSearchComponent.ICON_RED = 2;
          LicensingSearchComponent = LicensingSearchComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-licensing-search',
                template: __webpack_require__(
                  /*! ./licensing-search.component.html */ './src/app/main/administration/licensing/search/licensing-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./licensing-search.component.scss */ './src/app/main/administration/licensing/search/licensing-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__['TabService'],
                _licensing_search_service__WEBPACK_IMPORTED_MODULE_9__['LicensingSearchService']
              ])
            ],
            LicensingSearchComponent
          );
          return LicensingSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/administration/licensing/search/licensing-search.service.ts':
      /*!**********************************************************************************!*\
  !*** ./src/app/main/administration/licensing/search/licensing-search.service.ts ***!
  \**********************************************************************************/
      /*! exports provided: LicensingSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LicensingSearchService', function() {
          return LicensingSearchService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/project-management.api */ './src/app/shared/api/project-management.api.ts'
        );
        /* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/user-profile-management.api */ './src/app/shared/api/user-profile-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
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

        var LicensingSearchService = /** @class */ (function(_super) {
          __extends(LicensingSearchService, _super);
          function LicensingSearchService(http, appConfigService, projectManagementApi, userProfileManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.projectManagementApi = projectManagementApi;
            _this.userProfileManagementApi = userProfileManagementApi;
            return _this;
          }
          LicensingSearchService.prototype.findBsdeAwCustomsForLicensing = function() {
            return _super.prototype.post.call(this, this.projectManagementApi.findBsdeAwCustomsForLicensing);
          };
          LicensingSearchService.prototype.checkAWLicense = function() {
            return _super.prototype.post.call(this, this.userProfileManagementApi.checkAWLicense);
          };
          LicensingSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__['AppConfigService'],
                _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_2__['ProjectManagementApi'],
                _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_3__['UserProfileManagementApi']
              ])
            ],
            LicensingSearchService
          );
          return LicensingSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=administration-licensing-licensing-module.js.map
