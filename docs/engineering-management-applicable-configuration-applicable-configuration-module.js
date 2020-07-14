(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['engineering-management-applicable-configuration-applicable-configuration-module'],
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

    /***/ './src/app/main/engineering-management/applicable-configuration/applicable-configuration.module.ts':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/applicable-configuration.module.ts ***!
  \*********************************************************************************************************/
      /*! exports provided: ApplicableConfigurationModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ApplicableConfigurationModule',
          function() {
            return ApplicableConfigurationModule;
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
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/tree */ './node_modules/primeng/tree.js'
        );
        /* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tree__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ './src/app/shared/components/component-sidebar/component-sidebar.mdule.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_qualification_dialog_search_qualification_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-qualification/dialog-search-qualification.module */ './src/app/shared/components/dialog-search-qualification/dialog-search-qualification.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_rating_dialog_search_rating_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-rating/dialog-search-rating.module */ './src/app/shared/components/dialog-search-rating/dialog-search-rating.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/dialog-status/dialog-status.module */ './src/app/shared/components/dialog-status/dialog-status.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/dialog-table/dialog-table.module */ './src/app/shared/components/dialog-table/dialog-table.module.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_status_update_history_status_update_history_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/components/status-update-history/status-update-history.module */ './src/app/shared/components/status-update-history/status-update-history.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_applicable_configuration_form_mhiael_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./form/applicable-configuration-form-mhiael.service */ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form-mhiael.service.ts'
        );
        /* harmony import */ var _form_applicable_configuration_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./form/applicable-configuration-form.component */ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.component.ts'
        );
        /* harmony import */ var _form_applicable_configuration_form_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./form/applicable-configuration-form.service */ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.service.ts'
        );
        /* harmony import */ var _form_dialog_associated_qualification_dialog_associated_qualification_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./form/dialog-associated-qualification/dialog-associated-qualification.component */ './src/app/main/engineering-management/applicable-configuration/form/dialog-associated-qualification/dialog-associated-qualification.component.ts'
        );
        /* harmony import */ var _form_dialog_control_ipc_data_dialog_control_ipc_data_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./form/dialog-control-ipc-data/dialog-control-ipc-data.component */ './src/app/main/engineering-management/applicable-configuration/form/dialog-control-ipc-data/dialog-control-ipc-data.component.ts'
        );
        /* harmony import */ var _form_dialog_disassembly_dialog_disassembly_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./form/dialog-disassembly/dialog-disassembly.component */ './src/app/main/engineering-management/applicable-configuration/form/dialog-disassembly/dialog-disassembly.component.ts'
        );
        /* harmony import */ var _form_dialog_document_config_dialog_document_config_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./form/dialog-document-config/dialog-document-config.component */ './src/app/main/engineering-management/applicable-configuration/form/dialog-document-config/dialog-document-config.component.ts'
        );
        /* harmony import */ var _form_dialog_evolution_interdependence_dialog_evolution_interdependence_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./form/dialog-evolution-interdependence/dialog-evolution-interdependence.component */ './src/app/main/engineering-management/applicable-configuration/form/dialog-evolution-interdependence/dialog-evolution-interdependence.component.ts'
        );
        /* harmony import */ var _form_dialog_followed_rating_dialog_followed_rating_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./form/dialog-followed-rating/dialog-followed-rating.component */ './src/app/main/engineering-management/applicable-configuration/form/dialog-followed-rating/dialog-followed-rating.component.ts'
        );
        /* harmony import */ var _form_dialog_oem_partner_dialog_oem_partner_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./form/dialog-oem-partner/dialog-oem-partner.component */ './src/app/main/engineering-management/applicable-configuration/form/dialog-oem-partner/dialog-oem-partner.component.ts'
        );
        /* harmony import */ var _form_dialog_removal_order_dialog_removal_order_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./form/dialog-removal-order/dialog-removal-order.component */ './src/app/main/engineering-management/applicable-configuration/form/dialog-removal-order/dialog-removal-order.component.ts'
        );
        /* harmony import */ var _search_applicable_configuration_search_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./search/applicable-configuration-search.component */ './src/app/main/engineering-management/applicable-configuration/search/applicable-configuration-search.component.ts'
        );
        /* harmony import */ var _search_applicable_configuration_search_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./search/applicable-configuration-search.service */ './src/app/main/engineering-management/applicable-configuration/search/applicable-configuration-search.service.ts'
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
          primeng_table__WEBPACK_IMPORTED_MODULE_5__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__['TooltipModule'],
          primeng_tree__WEBPACK_IMPORTED_MODULE_7__['TreeModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__['SelectButtonModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_11__[
            'ComponentSidebarModule'
          ],
          _shared_components_dialog_search_qualification_dialog_search_qualification_module__WEBPACK_IMPORTED_MODULE_12__[
            'DialogSearchQualificationModule'
          ],
          _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_14__['DialogStatusModule'],
          _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_15__['DialogTableModule'],
          _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_16__[
            'DynamicAttributesModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__['ModalModule'],
          _shared_components_status_update_history_status_update_history_module__WEBPACK_IMPORTED_MODULE_18__[
            'StatusUpdateHistoryModule'
          ],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_19__['TableModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _form_dialog_associated_qualification_dialog_associated_qualification_component__WEBPACK_IMPORTED_MODULE_24__[
            'DialogAssociatedQualificationComponent'
          ],
          _form_dialog_control_ipc_data_dialog_control_ipc_data_component__WEBPACK_IMPORTED_MODULE_25__[
            'DialogControlIpcDataComponent'
          ],
          _form_dialog_disassembly_dialog_disassembly_component__WEBPACK_IMPORTED_MODULE_26__[
            'DialogDisassemblyComponent'
          ],
          _form_dialog_document_config_dialog_document_config_component__WEBPACK_IMPORTED_MODULE_27__[
            'DialogDocumentConfigComponent'
          ],
          _form_dialog_evolution_interdependence_dialog_evolution_interdependence_component__WEBPACK_IMPORTED_MODULE_28__[
            'DialogEvolutionInterdependenceComponent'
          ],
          _form_dialog_oem_partner_dialog_oem_partner_component__WEBPACK_IMPORTED_MODULE_30__[
            'DialogOemPartnerComponent'
          ],
          _form_dialog_removal_order_dialog_removal_order_component__WEBPACK_IMPORTED_MODULE_31__[
            'DialogRemovalOrderComponent'
          ],
          _form_dialog_followed_rating_dialog_followed_rating_component__WEBPACK_IMPORTED_MODULE_29__[
            'DialogFollowedRatingComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _form_applicable_configuration_form_component__WEBPACK_IMPORTED_MODULE_22__[
            'ApplicableConfigurationFormComponent'
          ],
          _search_applicable_configuration_search_component__WEBPACK_IMPORTED_MODULE_32__[
            'ApplicableConfigurationSearchComponent'
          ]
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _form_applicable_configuration_form_service__WEBPACK_IMPORTED_MODULE_23__[
            'ApplicableConfigurationFormService'
          ],
          _search_applicable_configuration_search_service__WEBPACK_IMPORTED_MODULE_33__[
            'ApplicableConfigurationSearchService'
          ],
          _form_applicable_configuration_form_mhiael_service__WEBPACK_IMPORTED_MODULE_21__[
            'ApplicableConfigurationFormMhiaelService'
          ]
        ];
        var ApplicableConfigurationModule = /** @class */ (function() {
          function ApplicableConfigurationModule() {}
          ApplicableConfigurationModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__['AppCommonSharedModule'],
                    _shared_components_dialog_search_rating_dialog_search_rating_module__WEBPACK_IMPORTED_MODULE_13__[
                      'DialogSearchRatingModule'
                    ],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_20__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            ApplicableConfigurationModule
          );
          return ApplicableConfigurationModule;
        })();

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form-mhiael.service.ts':
      /*!***************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form-mhiael.service.ts ***!
  \***************************************************************************************************************************/
      /*! exports provided: ApplicableConfigurationFormMhiaelService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ApplicableConfigurationFormMhiaelService',
          function() {
            return ApplicableConfigurationFormMhiaelService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_mhiael_mass_updates_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/mhiael/mass-updates.api */ './src/app/shared/api/mhiael/mass-updates.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_mhiael_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-mhiael-http */ './src/app/shared/http/abstract-aw-mhiael-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

        var ApplicableConfigurationFormMhiaelService = /** @class */ (function(_super) {
          __extends(ApplicableConfigurationFormMhiaelService, _super);
          function ApplicableConfigurationFormMhiaelService(http, appConfigService, massUpdatesApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.massUpdatesApi = massUpdatesApi;
            return _this;
          }
          ApplicableConfigurationFormMhiaelService.prototype.updateInMassIDPSubObjectStatus = function(
            bireVariantVersion
          ) {
            return _super.prototype.post.call(
              this,
              this.massUpdatesApi.updateInMassIDPSubObjectStatus,
              bireVariantVersion
            );
          };
          ApplicableConfigurationFormMhiaelService.prototype.updateIPCCsv = function(bireVariantVersion) {
            return _super.prototype.post.call(this, this.massUpdatesApi.updateIPCCsv, bireVariantVersion);
          };
          ApplicableConfigurationFormMhiaelService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_mhiael_mass_updates_api__WEBPACK_IMPORTED_MODULE_2__['MassUpdatesApi']
              ])
            ],
            ApplicableConfigurationFormMhiaelService
          );
          return ApplicableConfigurationFormMhiaelService;
        })(_shared_http_abstract_aw_mhiael_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwMhiaelHttpService']);

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.component.html':
      /*!************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.component.html ***!
  \************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="!isCreateOpenMode && componentData && componentData.objectId" class="page-subtitle">\r\n          - {{ componentDesignation }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="object-status" *ngIf="applicableConfiguration.statusState" (click)="showStatus()">\r\n      {{ applicableConfiguration.statusState | formatSelectOption: status }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      *ngIf="isReadOpenMode && hasUpdateAccessRight"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="editApplicableConfiguration()"\r\n    >\r\n      {{ "global.edit" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode && !isCreateOpenMode"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="cancelApplicableConfiguration()"\r\n    >\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="saveApplicableConfiguration()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      *ngIf="!isCreateOpenMode"\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button type="button" mat-menu-item (click)="controlIpcData()">\r\n        {{ getComponentName() + ".controlIpcData" | translate }}\r\n      </button>\r\n      <button type="button" mat-menu-item (click)="openStatusUpdatesPopup()">\r\n        {{ getComponentName() + ".updates" | translate }}\r\n      </button>\r\n      <button\r\n        *ngIf="isReadOpenMode && !isCreateOpenMode"\r\n        type="button"\r\n        mat-menu-item\r\n        (click)="reloadApplicableConfiguration()"\r\n      >\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n      <button type="button" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "removeFromFavorite" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n        <!-- MAIN -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".home" | translate }}\r\n          </ng-template>\r\n\r\n          <div class="grid-row">\r\n            <div #mainInfoAnchor class="grid-cell--equally" (click)="selectPageTocEntry(\'mainInfoAnchor\')">\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(\'mainInfoAnchor\') }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ "page.mainData" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="column">\r\n                    <div class="row">\r\n                      <div class="form-group" [ngClass]="{ required: !isReadOpenMode && isCreateOpenMode }">\r\n                        <label class="form-label">{{ componentData.componentId + ".familycode" | translate }}</label>\r\n\r\n                        <div\r\n                          class="form-control form-control-with-modal"\r\n                          [ngClass]="{ disabled: isReadOpenMode || !isCreateOpenMode }"\r\n                        >\r\n                          <div class="form-control-data" (click)="openFamilyPopup()">\r\n                            {{ applicableConfiguration.familyCode }}\r\n                          </div>\r\n\r\n                          <div *ngIf="applicableConfiguration.familyCode" class="btn-clear-wrapper">\r\n                            <i\r\n                              class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                              aria-hidden="true"\r\n                              (click)="applicableConfiguration.familyCode = undefined"\r\n                            ></i>\r\n                          </div>\r\n                          <div class="btn-search-wrapper">\r\n                            <i\r\n                              class="fa fa-fw fa-search aw-icon btn-search"\r\n                              aria-hidden="true"\r\n                              (click)="openFamilyPopup()"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{\r\n                          componentData.componentId + ".familyFunction" | translate\r\n                        }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [(ngModel)]="selectedFamilyFunctionDisplayed"\r\n                            [disabled]="true"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div\r\n                        class="form-group"\r\n                        [ngClass]="{ required: !isReadOpenMode && isCreateOpenMode }"\r\n                        [ngClass]="{ disabled: isReadOpenMode || !isCreateOpenMode }"\r\n                      >\r\n                        <label class="form-label">{{ componentData.componentId + ".variantcode" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [(ngModel)]="applicableConfiguration.variantCode"\r\n                            [disabled]="isReadOpenMode || !isCreateOpenMode"\r\n                            [maxLength]="50"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div\r\n                        class="form-group"\r\n                        [ngClass]="{ required: !isReadOpenMode }"\r\n                        [ngClass]="{ disabled: isReadOpenMode }"\r\n                      >\r\n                        <label class="form-label">{{ componentData.componentId + ".variantname" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [(ngModel)]="applicableConfiguration.variantName"\r\n                            [disabled]="isReadOpenMode"\r\n                            [maxLength]="100"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ componentData.componentId + ".structuretype" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" class="aw-input" [ngModel]="formatStructureText()" [disabled]="true" />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{\r\n                          componentData.componentId + ".variantRevisionDate" | translate\r\n                        }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <p-calendar\r\n                            showButtonBar="true"\r\n                            [monthNavigator]="true"\r\n                            [yearNavigator]="true"\r\n                            [yearRange]="sessionService.calendarYearRange"\r\n                            class="aw-calendar"\r\n                            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                            [locale]="sessionService.calendarFormat"\r\n                            [disabled]="isReadOpenMode"\r\n                            [(ngModel)]="applicableConfiguration.variantRevisionDate"\r\n                          ></p-calendar>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{\r\n                          componentData.componentId + ".variantRevisionNumber" | translate\r\n                        }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [(ngModel)]="applicableConfiguration.variantRevisionNumber"\r\n                            [disabled]="isReadOpenMode"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div #itemStrucutre class="grid-cell--grow4" (click)="selectPageTocEntry(\'itemStrucutre\')">\r\n              <div\r\n                class="grid-cell grid-cell--container grid-cell-item-structure"\r\n                [ngClass]="{ active: isPageTocEntrySelected(\'itemStrucutre\') }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container loading-indicator">\r\n                    <div class="grid-cell-title">\r\n                      {{ "global.itemStructure" | translate }} ({{\r\n                        itemStructureDisplayed ? itemStructureDisplayed.length : 0\r\n                      }})\r\n                      <div *ngIf="itemStructureLoading" class="lds-hourglass"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div *ngIf="!itemStructureLoading" class="column">\r\n                    <div class="list-with-details">\r\n                      <div class="list">\r\n                        <div class="list-header">\r\n                          <div class="aw-tree-global-filter">\r\n                            <label class="aw-tree-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              class="aw-tree-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'tree.globalFilterText\' | translate }}"\r\n                              [(ngModel)]="searchItemStructureGlobalFilter"\r\n                              (keyup)="filterItemStructure(searchItemStructureGlobalFilter)"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="list-with-details">\r\n                      <div class="list">\r\n                        <p-tree\r\n                          [value]="itemStructureDisplayed"\r\n                          selectionMode="single"\r\n                          [(selection)]="itemStructureNodeSelected"\r\n                          (onNodeSelect)="onSelectNode()"\r\n                        >\r\n                          <ng-template let-node pTemplate="default">\r\n                            <div class="code">\r\n                              <div class="chapter">{{ node.data.chapter }}</div>\r\n                              -\r\n                              <div class="section">{{ node.data.section }}</div>\r\n                              -\r\n                              <div class="subject">{{ node.data.subject }}</div>\r\n                              -\r\n                              <div class="sheet">{{ node.data.sheet }}</div>\r\n                              -\r\n                              <div class="marks">{{ node.data.marks }}</div>\r\n                            </div>\r\n                            <div class="name">{{ node.data.name }}</div>\r\n                          </ng-template>\r\n                        </p-tree>\r\n                      </div>\r\n\r\n                      <div\r\n                        class="details"\r\n                        [ngClass]="{\r\n                          \'visibility--hidden\': !itemStructureDisplayed || itemStructureDisplayed.length === 0\r\n                        }"\r\n                      >\r\n                        <div *ngIf="itemStructureNodeSelected" class="column">\r\n                          <div class="section">\r\n                            <div class="section-content">\r\n                              <div class="row item-structure-node-action-list">\r\n                                <button type="button" mat-raised-button (click)="openItem()">\r\n                                  {{ getComponentName() + ".openItem" | translate }}\r\n                                </button>\r\n\r\n                                <button type="button" mat-raised-button (click)="openConfigurationDiagram()">\r\n                                  {{ getComponentName() + ".openConfigurationDiagram" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class="section">\r\n                            <div class="section-content">\r\n                              <div class="row">\r\n                                <div class="flex--2">\r\n                                  <div class="row">\r\n                                    <div class="form-group">\r\n                                      <label class="form-label">\r\n                                        {{ getComponentName() + ".itemFamily" | translate }}\r\n                                      </label>\r\n\r\n                                      <div class="form-control">\r\n                                        <input\r\n                                          type="text"\r\n                                          class="aw-input"\r\n                                          [(ngModel)]="itemFamilyCode"\r\n                                          [disabled]="true"\r\n                                        />\r\n                                      </div>\r\n                                    </div>\r\n\r\n                                    <div class="form-group">\r\n                                      <label class="form-label">\r\n                                        {{ getComponentName() + ".serializedPart" | translate }}\r\n                                      </label>\r\n\r\n                                      <div class="form-control">\r\n                                        <p-checkbox\r\n                                          binary="true"\r\n                                          class="aw-checkbox"\r\n                                          [(ngModel)]="itemStructureNodeSelected.data.serializedPart"\r\n                                          [disabled]="true"\r\n                                        >\r\n                                        </p-checkbox>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n\r\n                                  <div class="row">\r\n                                    <div class="form-group">\r\n                                      <label class="form-label">\r\n                                        {{ getComponentName() + ".functionCode" | translate }}\r\n                                      </label>\r\n\r\n                                      <div class="form-control">\r\n                                        <input\r\n                                          type="text"\r\n                                          class="aw-input"\r\n                                          [(ngModel)]="itemStructureNodeSelected.data.functionCode"\r\n                                          [disabled]="true"\r\n                                        />\r\n                                      </div>\r\n                                    </div>\r\n\r\n                                    <div class="form-group">\r\n                                      <label class="form-label">\r\n                                        {{ getComponentName() + ".itemNumber" | translate }}\r\n                                      </label>\r\n\r\n                                      <div class="form-control">\r\n                                        <input\r\n                                          type="text"\r\n                                          class="aw-input"\r\n                                          [(ngModel)]="itemStructureNodeSelected.data.itemNumber"\r\n                                          [disabled]="true"\r\n                                        />\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="flex--1 item-structure-node-image">\r\n                                  <img\r\n                                    *ngIf="itemStructureNodeImageList && itemStructureNodeImageList.length > 0"\r\n                                    [src]="itemStructureNodeImageList[0]"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class="section">\r\n                            <h4 class="section-title">\r\n                              {{ getComponentName() + ".partNumbers" | translate }}\r\n                            </h4>\r\n\r\n                            <!-- Node part numbers table -->\r\n\r\n                            <div class="section-content">\r\n                              <a-table [dataSource]="nodePartTableDataSource">\r\n                                <ng-template columnDef="pnCode" let-rowData="rowData">\r\n                                  <a (click)="openItemPartNumber(rowData)">{{ rowData.pnCode }}</a>\r\n                                </ng-template>\r\n                              </a-table>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- RATINGS -->\r\n        <mat-tab *ngIf="!!selectedFamilyFunction && selectedFamilyFunction === \'2-eng\'">\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".ratings" | translate }}\r\n          </ng-template>\r\n\r\n          <div class="section">\r\n            <h4 class="section-title">\r\n              {{ componentData.componentId + ".ratings" | translate }} ({{\r\n                ratingTableDataSource ? ratingTableDataSource.dataCount : 0\r\n              }})\r\n            </h4>\r\n\r\n            <div class="section-content">\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ componentData.componentId + ".isFollowedInRating" | translate }}\r\n                </label>\r\n                <div class="form-control">\r\n                  <p-checkbox\r\n                    binary="true"\r\n                    class="aw-checkbox"\r\n                    [disabled]="isReadOpenMode || (!!ratingTable && ratingTable.length > 0)"\r\n                    [(ngModel)]="isDisplayRatingTable"\r\n                  ></p-checkbox>\r\n                </div>\r\n              </div>\r\n\r\n              <a-table [dataSource]="ratingTableDataSource">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf="!isReadOpenMode && ratingTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    color="warn"\r\n                    (click)="deleteSelectedRating()"\r\n                  >\r\n                    {{ "global.delete" | translate }}\r\n                  </button>\r\n                  <button\r\n                    *ngIf="!isReadOpenMode && !ratingTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="createRating()"\r\n                  >\r\n                    {{ "global.add" | translate }}\r\n                  </button>\r\n                  <button\r\n                    *ngIf="ratingTableDataSource.dataSelectionCount === 1"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="openRating()"\r\n                  >\r\n                    {{ "global.open" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- AIRWORTHINESS DOCUMENTS -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".airworthinessDocuments" | translate }}\r\n          </ng-template>\r\n\r\n          <div class="grid-row">\r\n            <div #configDoc class="grid-cell--12" (click)="selectPageTocEntry(\'configDoc\')">\r\n              <div class="grid-cell grid-cell--container" [ngClass]="{ active: isPageTocEntrySelected(\'configDoc\') }">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ getComponentName() + ".airworthinessDocuments" | translate }} ({{\r\n                        configurationDocumentsTableDataSource ? configurationDocumentsTableDataSource.dataCount : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <a-table [dataSource]="configurationDocumentsTableDataSource">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && configurationDocumentsTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        color="warn"\r\n                        (click)="deleteConfigurationDocuments()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && configurationDocumentsTableDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="editConfigurationDocument()"\r\n                      >\r\n                        {{ "global.edit" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && !configurationDocumentsTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openDocumentMatchingModel()"\r\n                      >\r\n                        {{ "global.add" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf="configurationDocumentsTableDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openConfigurationDocuments()"\r\n                      >\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                    <ng-template columnDef="number" let-rowData="rowData">\r\n                      <a (click)="openDocumentForm(rowData)">{{ rowData.number }}</a>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- DOCUMENTS -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".document" | translate }}\r\n          </ng-template>\r\n\r\n          <div class="grid-row">\r\n            <div #docMatching class="grid-cell--12" (click)="selectPageTocEntry(\'docMatching\')">\r\n              <div class="grid-cell grid-cell--container" [ngClass]="{ active: isPageTocEntrySelected(\'docMatching\') }">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ "global.documentsMatching" | translate }} ({{\r\n                        evolutionModificationTableDataSource ? evolutionModificationTableDataSource.dataCount : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <a-table [dataSource]="evolutionModificationTableDataSource">\r\n                    <ng-template columnDef="evolutionNumber" let-rowData="rowData">\r\n                      <a\r\n                        (click)="\r\n                          openEvolution({\r\n                            number: rowData.evolutionNumber,\r\n                            revisionNumber: rowData.evolutionRevisionNumber\r\n                          })\r\n                        "\r\n                      >\r\n                        {{ rowData.evolutionNumber }}\r\n                      </a>\r\n                    </ng-template>\r\n                    <ng-template columnDef="modificationNumber" let-rowData="rowData">\r\n                      <span pTooltip="{{ rowData[\'modificationDesignation\'] }}" tooltipPosition="top">{{\r\n                        rowData.modificationNumber\r\n                      }}</span>\r\n                    </ng-template>\r\n                    <ng-template columnDef="sbAdNumber" let-rowData="rowData">\r\n                      <span pTooltip="{{ rowData[\'sbDesignation\'] }}" tooltipPosition="top">{{\r\n                        rowData.sbAdNumber\r\n                      }}</span>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- EVOLUTION IN -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".evolutionInterdependences" | translate }}\r\n          </ng-template>\r\n\r\n          <div class="grid-row">\r\n            <div\r\n              #evolutionInterdependences\r\n              class="grid-cell--12"\r\n              (click)="selectPageTocEntry(\'evolutionInterdependences\')"\r\n            >\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(\'evolutionInterdependences\') }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ "global.evolutionInterdependences" | translate }} ({{\r\n                        evolutionInterdependencesTableDataSource\r\n                          ? evolutionInterdependencesTableDataSource.dataCount\r\n                          : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <a-table [dataSource]="evolutionInterdependencesTableDataSource">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && evolutionInterdependencesTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        color="warn"\r\n                        (click)="deleteInterdependence()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && !evolutionInterdependencesTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="createInterdependence()"\r\n                      >\r\n                        {{ "global.add" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="evolutionInterdependencesTableDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openInterdependence()"\r\n                      >\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                    <ng-template columnDef="evolutionNumber" let-rowData="rowData">\r\n                      <a\r\n                        (click)="\r\n                          openEvolution({\r\n                            number: rowData.evolutionNumber,\r\n                            revisionNumber: rowData.evolutionRevisionNumber\r\n                          })\r\n                        "\r\n                      >\r\n                        {{ rowData.evolutionNumber }}\r\n                      </a>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".disassemblyGroups" | translate }}\r\n          </ng-template>\r\n\r\n          <div class="grid-row">\r\n            <div #disassemblyGroups class="grid-cell--equally" (click)="selectPageTocEntry(\'disassemblyGroups\')">\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(\'disassemblyGroups\') }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ "global.disassemblyGroups" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <h4 class="section-title">\r\n                      {{ componentData.componentId + ".disassemblyGroupsList" | translate }} ({{\r\n                        disassemblyGroupTableDataSource ? disassemblyGroupTableDataSource.dataCount : 0\r\n                      }})\r\n                    </h4>\r\n\r\n                    <div class="section-content">\r\n                      <a-table [dataSource]="disassemblyGroupTableDataSource">\r\n                        <ng-template tableActionsDef>\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && disassemblyGroupTableDataSource.hasDataSelection"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteDisassembly()"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n                          <button\r\n                            *ngIf="disassemblyGroupTableDataSource.dataSelectionCount === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="displayStatusForDisassemblyGroup()"\r\n                          >\r\n                            {{ componentData.componentId + ".displayStatus" | translate }}\r\n                          </button>\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && !disassemblyGroupTableDataSource.hasDataSelection"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="createDisassembly()"\r\n                          >\r\n                            {{ "global.add" | translate }}\r\n                          </button>\r\n                          <button\r\n                            *ngIf="disassemblyGroupTableDataSource.dataSelectionCount === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openDisassembly()"\r\n                          >\r\n                            {{ "global.open" | translate }}\r\n                          </button>\r\n                        </ng-template>\r\n                      </a-table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div #disassemblyGroups class="grid-cell--equally" (click)="selectPageTocEntry(\'disassemblyGroups\')">\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(\'disassemblyGroups\') }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ componentData.componentId + ".removalOrders" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <h4 class="section-title">\r\n                      {{ componentData.componentId + ".removalOrdersList" | translate }} ({{\r\n                        removalOrderTableDataSource ? removalOrderTableDataSource.dataCount : 0\r\n                      }})\r\n                    </h4>\r\n\r\n                    <div class="section-content">\r\n                      <a-table [dataSource]="removalOrderTableDataSource">\r\n                        <ng-template tableActionsDef>\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && removalOrderTableDataSource.hasDataSelection"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteRemovalOrder()"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="removalOrderTableDataSource.dataSelectionCount === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="displayStatusForRemovalOrder()"\r\n                          >\r\n                            {{ componentData.componentId + ".displayStatus" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && !removalOrderTableDataSource.hasDataSelection"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="createRemovalOrder()"\r\n                          >\r\n                            {{ "global.add" | translate }}\r\n                          </button>\r\n                          <button\r\n                            *ngIf="removalOrderTableDataSource.dataSelectionCount === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openRemovalOrder()"\r\n                          >\r\n                            {{ "global.open" | translate }}\r\n                          </button>\r\n                        </ng-template>\r\n                      </a-table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".additionalInformation" | translate }}\r\n          </ng-template>\r\n\r\n          <div class="grid-row">\r\n            <div #generalAnchor class="grid-cell--equally" (click)="selectPageTocEntry(\'generalAnchor\')">\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(\'generalAnchor\') }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ componentData.componentId + ".oemPartners" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <!-- Oem partners table -->\r\n\r\n                    <h4 class="section-title">\r\n                      {{ componentData.componentId + ".oemPartnersList" | translate }} ({{\r\n                        oemPartnersTableDataSource ? oemPartnersTableDataSource.dataCount : 0\r\n                      }})\r\n                    </h4>\r\n\r\n                    <div class="section-content">\r\n                      <a-table [dataSource]="oemPartnersTableDataSource">\r\n                        <ng-template tableActionsDef>\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && oemPartnersTableDataSource.hasDataSelection"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteSelectedOEMPartner()"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && oemPartnersTableDataSource.dataSelectionCount === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="editSelectedOEMPartner()"\r\n                          >\r\n                            {{ "global.edit" | translate }}\r\n                          </button>\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && !oemPartnersTableDataSource.hasDataSelection"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="createOEMPartner()"\r\n                          >\r\n                            {{ "global.add" | translate }}\r\n                          </button>\r\n                          <button\r\n                            *ngIf="oemPartnersTableDataSource.dataSelectionCount === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openSelectedOEMPartner()"\r\n                          >\r\n                            {{ "global.open" | translate }}\r\n                          </button>\r\n                        </ng-template>\r\n                      </a-table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div #generalAnchor class="grid-cell--equally" (click)="selectPageTocEntry(\'generalAnchor\')">\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(\'generalAnchor\') }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".associatedQualification" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <h4 class="section-title">\r\n                      {{ componentData.componentId + ".associatedQualificationList" | translate }} ({{\r\n                        associatedQualificationTableDataSource ? associatedQualificationTableDataSource.dataCount : 0\r\n                      }})\r\n                    </h4>\r\n\r\n                    <div class="section-content">\r\n                      <a-table [dataSource]="associatedQualificationTableDataSource">\r\n                        <ng-template tableActionsDef>\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && associatedQualificationTableDataSource.hasDataSelection"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteSelectedAssociatedQual()"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && !associatedQualificationTableDataSource.hasDataSelection"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="createAssociatedQual()"\r\n                          >\r\n                            {{ "global.add" | translate }}\r\n                          </button>\r\n                          <button\r\n                            *ngIf="associatedQualificationTableDataSource.dataSelectionCount === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openAssociatedQual()"\r\n                          >\r\n                            {{ "global.open" | translate }}\r\n                          </button>\r\n                        </ng-template>\r\n                      </a-table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".attributes" | translate }}\r\n          </ng-template>\r\n\r\n          <div class="grid-row">\r\n            <div #attributes class="grid-cell--12" (click)="selectPageTocEntry(\'attributes\')">\r\n              <div class="grid-cell grid-cell--container" [ngClass]="{ active: isPageTocEntrySelected(\'attributes\') }">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ "global.attributes" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <div class="section-content">\r\n                      <aw-dynamic-attributes\r\n                        [attributes]="dynamicAttributesForAppConfig"\r\n                        [history]="dynamicAttributesHistoric"\r\n                        [showHistory]="false"\r\n                        [isReadOpenMode]="isReadOpenMode"\r\n                      >\r\n                      </aw-dynamic-attributes>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n\r\n      <aw-dialog-evolution-interdependence\r\n        *ngIf="showEvolutionInterdependencesDialog"\r\n        [evolutionInterdependence]="currentEvolutionInterdependences"\r\n        [bireVariantVersionSelected]="bireVariantVersionSelected"\r\n        [(display)]="showEvolutionInterdependencesDialog"\r\n        [openMode]="evolutionInterdependencesDialogOpenMode"\r\n        (onValidated)="onAddEvolutionInterdependences($event)"\r\n      >\r\n      </aw-dialog-evolution-interdependence>\r\n      <aw-dialog-disassembly\r\n        *ngIf="showDisassemblyGroupDialog"\r\n        [disassemblyGroup]="currentDisassemblyGroup"\r\n        [(display)]="showDisassemblyGroupDialog"\r\n        [openMode]="disassemblyGroupDialogOpenMode"\r\n        (onValidated)="onAddDisassembly($event)"\r\n      ></aw-dialog-disassembly>\r\n      <aw-dialog-removal-order\r\n        *ngIf="showRemovalOrderDialog"\r\n        [bireVariantVersionSelected]="bireVariantVersionSelected"\r\n        [removalOrder]="currentRemovalOrderGroup"\r\n        [(display)]="showRemovalOrderDialog"\r\n        [disassemblyGroupRemoved]="disassemblyGroupRemoved"\r\n        [openMode]="removalOrderDialogOpenMode"\r\n        (onValidated)="onAddRemovalOrder($event)"\r\n        [disassemblyList]="disassemblyList"\r\n      ></aw-dialog-removal-order>\r\n      <aw-dialog-oem-partner\r\n        *ngIf="showOEMPartnerDialog"\r\n        [openMode]="oemPartnerOpenMode"\r\n        [oemPartners]="oemPartnersTableDataSource.dataSrc"\r\n        [oemPartnerMaxSelected]="currentOEMPartnerMax"\r\n        [oemPartnerMinSelected]="currentOEMPartnerMin"\r\n        [(display)]="showOEMPartnerDialog"\r\n        (onValidated)="onAddOEMPartner($event)"\r\n      ></aw-dialog-oem-partner>\r\n      <aw-dialog-associated-qualification\r\n        *ngIf="showAssociatedQualificationDialog"\r\n        [qualification]="selectedAssociatedQualifications"\r\n        [openMode]="associatedQualificationOpenMode"\r\n        [(display)]="showAssociatedQualificationDialog"\r\n        (onValidated)="onAddAssociatedQualification($event)"\r\n      >\r\n      </aw-dialog-associated-qualification>\r\n      <aw-dialog-table\r\n        *ngIf="showFamilyCodeDialog"\r\n        [keyMap]="keyMap"\r\n        [(display)]="showFamilyCodeDialog"\r\n        [data]="dialogTableDataFamilyCode"\r\n        (onSelected)="setSelectedFamilyCode($event)"\r\n      ></aw-dialog-table>\r\n      <aw-dialog-document-config\r\n        *ngIf="showDocumentMatchingDialog"\r\n        [(display)]="showDocumentMatchingDialog"\r\n        [openMode]="documentMatchingDialogOpenMode"\r\n        [component-data]="applicableConfiguration"\r\n        [currentConfigurationDoc]="currentConfigurationDoc"\r\n        (onValidated)="onAddDocumentParmas($event)"\r\n      >\r\n      </aw-dialog-document-config>\r\n      <aw-dialog-status\r\n        *ngIf="displayStatusPopup"\r\n        [isStatusEditable]="isStatusEditable"\r\n        [item]="currentAsset"\r\n        [itemId]="currentAssetId"\r\n        [(display)]="displayStatusPopup"\r\n      ></aw-dialog-status>\r\n      <aw-dialog-status\r\n        *ngIf="displayStatusRemovalPopup"\r\n        [isStatusEditable]="isStatusEditable"\r\n        [item]="currentRemovalAsset"\r\n        [itemId]="currentAssetId"\r\n        [(display)]="displayStatusRemovalPopup"\r\n      >\r\n      </aw-dialog-status>\r\n\r\n      <aw-dialog-status\r\n        *ngIf="showStatusUpdatesPopup"\r\n        [isStatusEditable]="false"\r\n        [item]="applicableConfiguration"\r\n        [(display)]="showStatusUpdatesPopup"\r\n        [isObjectTypeOfBireMaintenancePlanDTO]="true"\r\n      >\r\n      </aw-dialog-status>\r\n\r\n      <aw-dialog-applicable-configuration-control-ipc-data\r\n        *ngIf="controlIpcDataVisible"\r\n        [(display)]="controlIpcDataVisible"\r\n        [applicableConfiguration]="applicableConfiguration"\r\n      >\r\n      </aw-dialog-applicable-configuration-control-ipc-data>\r\n      <aw-dialog-followed-rating\r\n        *ngIf="showRatingDialog"\r\n        [openMode]="ratingDialogOpenMode"\r\n        [(display)]="showRatingDialog"\r\n        [bireRatingInput]="bireRatingInput"\r\n        (onValidated)="onAddRating($event)"\r\n      >\r\n      </aw-dialog-followed-rating>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.component.scss':
      /*!************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.component.scss ***!
  \************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .grid-cell-item-structure .list-with-details .details,\n:host .grid-cell-item-structure .list-with-details .list {\n  max-height: 50rem; }\n\n:host .grid-cell-item-structure .list-with-details .details {\n  flex-grow: 1; }\n\n:host .grid-cell-item-structure .list-with-details .details .item-structure-node-action-list {\n    justify-content: flex-end; }\n\n:host .grid-cell-item-structure .list-with-details .details .item-structure-node-action-list > button {\n      margin-right: 8px; }\n\n:host .grid-cell-item-structure .list-with-details .details .item-structure-node-action-list > button:last-of-type {\n        margin-right: 0; }\n\n:host .grid-cell-item-structure .list-with-details .details .item-structure-node-image > img {\n    max-width: 25%;\n    min-width: 25%; }\n\n:host .grid-cell-item-structure .list-with-details .list {\n  min-width: 25rem; }\n\n::ng-deep .export-methods {\n  list-style-type: none;\n  margin: 0;\n  min-width: 100px;\n  padding: 0; }\n\n::ng-deep .export-methods .export-method-wrapper {\n    cursor: pointer;\n    font-size: 0.8rem;\n    padding: 5px 0; }\n\n::ng-deep .export-methods .export-method-wrapper .export-method {\n      padding-left: 5px; }\n\n::ng-deep .export-methods .export-method-wrapper .export-method:hover {\n        text-decoration: underline; }\n\n::ng-deep .grid-cell-item-structure .list .chapter,\n::ng-deep .grid-cell-item-structure .list .section,\n::ng-deep .grid-cell-item-structure .list .subject,\n::ng-deep .grid-cell-item-structure .list .sheet,\n::ng-deep .grid-cell-item-structure .list .marks {\n  display: inline-block;\n  font-weight: 600; }\n\n::ng-deep .grid-cell-item-structure .list .name {\n  font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L2FwcGxpY2FibGUtY29uZmlndXJhdGlvbi9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxlbmdpbmVlcmluZy1tYW5hZ2VtZW50XFxhcHBsaWNhYmxlLWNvbmZpZ3VyYXRpb25cXGZvcm1cXGFwcGxpY2FibGUtY29uZmlndXJhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2VuZ2luZWVyaW5nLW1hbmFnZW1lbnQvYXBwbGljYWJsZS1jb25maWd1cmF0aW9uL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFTUSxZQUFZLEVBQUE7O0FBVHBCO0lBWVUseUJBQXlCLEVBQUE7O0FBWm5DO01BZVksaUJDMEJNLEVBQUE7O0FEekNsQjtRQWtCYyxlQUFlLEVBQUE7O0FBbEI3QjtJQXlCWSxjQUFjO0lBQ2QsY0FBYyxFQUFBOztBQTFCMUI7RUFnQ1EsZ0JBQWdCLEVBQUE7O0FBTXhCO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUpaO0lBT0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjLEVBQUE7O0FBVGxCO01BWU0saUJBQWlCLEVBQUE7O0FBWnZCO1FBZVEsMEJBQTBCLEVBQUE7O0FBTWxDOzs7OztFQUtFLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vZW5naW5lZXJpbmctbWFuYWdlbWVudC9hcHBsaWNhYmxlLWNvbmZpZ3VyYXRpb24vZm9ybS9hcHBsaWNhYmxlLWNvbmZpZ3VyYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5ncmlkLWNlbGwtaXRlbS1zdHJ1Y3R1cmUge1xyXG4gICAgLmxpc3Qtd2l0aC1kZXRhaWxzIHtcclxuICAgICAgLmRldGFpbHMsXHJcbiAgICAgIC5saXN0IHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgICAgICAgLml0ZW0tc3RydWN0dXJlLW5vZGUtYWN0aW9uLWxpc3Qge1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAmID4gYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLml0ZW0tc3RydWN0dXJlLW5vZGUtaW1hZ2Uge1xyXG4gICAgICAgICAgJiA+IGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDI1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5saXN0IHtcclxuICAgICAgICBtaW4td2lkdGg6IDI1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmV4cG9ydC1tZXRob2RzIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLmV4cG9ydC1tZXRob2Qtd3JhcHBlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG5cclxuICAgIC5leHBvcnQtbWV0aG9kIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5ncmlkLWNlbGwtaXRlbS1zdHJ1Y3R1cmUgLmxpc3QgLmNoYXB0ZXIsXHJcbjo6bmctZGVlcCAuZ3JpZC1jZWxsLWl0ZW0tc3RydWN0dXJlIC5saXN0IC5zZWN0aW9uLFxyXG46Om5nLWRlZXAgLmdyaWQtY2VsbC1pdGVtLXN0cnVjdHVyZSAubGlzdCAuc3ViamVjdCxcclxuOjpuZy1kZWVwIC5ncmlkLWNlbGwtaXRlbS1zdHJ1Y3R1cmUgLmxpc3QgLnNoZWV0LFxyXG46Om5nLWRlZXAgLmdyaWQtY2VsbC1pdGVtLXN0cnVjdHVyZSAubGlzdCAubWFya3Mge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmdyaWQtY2VsbC1pdGVtLXN0cnVjdHVyZSAubGlzdCAubmFtZSB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.component.ts':
      /*!**********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.component.ts ***!
  \**********************************************************************************************************************/
      /*! exports provided: ApplicableConfigurationFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ApplicableConfigurationFormComponent',
          function() {
            return ApplicableConfigurationFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/fesm5/platform-browser.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! lodash-es */ './node_modules/lodash-es/lodash.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_api_update_historic_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/api/update-historic.api */ './src/app/shared/api/update-historic.api.ts'
        );
        /* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/components/component-sidebar/page-toc.service */ './src/app/shared/components/component-sidebar/page-toc.service.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/components/dynamic-attributes/dynamic-attributes.service */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.service.ts'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/enums/table-column-filter-mode.enum */ './src/app/shared/enums/table-column-filter-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/enums/table-selection-mode.enum */ './src/app/shared/enums/table-selection-mode.enum.ts'
        );
        /* harmony import */ var _shared_pipes_format_select_option_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/pipes/format-select-option.pipe */ './src/app/shared/pipes/format-select-option.pipe.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../../../shared/utils/dto-utils */ './src/app/shared/utils/dto-utils.ts'
        );
        /* harmony import */ var _shared_utils_image_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../../../../shared/utils/image-utils */ './src/app/shared/utils/image-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ../../../../shared/utils/workflow-utils */ './src/app/shared/utils/workflow-utils.ts'
        );
        /* harmony import */ var _object_status_object_status_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ../../../object-status/object-status.component */ './src/app/main/object-status/object-status.component.ts'
        );
        /* harmony import */ var _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ../../../overlay/overlay.service */ './src/app/main/overlay/overlay.service.ts'
        );
        /* harmony import */ var _applicable_configuration_form_mhiael_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./applicable-configuration-form-mhiael.service */ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form-mhiael.service.ts'
        );
        /* harmony import */ var _applicable_configuration_form_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ./applicable-configuration-form.service */ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.service.ts'
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
        var __spread =
          (undefined && undefined.__spread) ||
          function() {
            for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
            return ar;
          };

        var ApplicableConfigurationFormComponent = /** @class */ (function(_super) {
          __extends(ApplicableConfigurationFormComponent, _super);
          function ApplicableConfigurationFormComponent(
            favoriteService,
            loaderService,
            messageService,
            pageTocService,
            serializationService,
            tabService,
            sessionService,
            domSanitizer,
            applicableConfigurationFormService,
            confirmationService,
            dateService,
            dynamicAttributesService,
            propertiesService,
            translateService,
            updateHistoricApi,
            applicableConfigurationFormMhiaelService,
            _overlayService,
            _formatSelectOption
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                pageTocService
              ) || this;
            _this.sessionService = sessionService;
            _this.domSanitizer = domSanitizer;
            _this.applicableConfigurationFormService = applicableConfigurationFormService;
            _this.confirmationService = confirmationService;
            _this.dateService = dateService;
            _this.dynamicAttributesService = dynamicAttributesService;
            _this.propertiesService = propertiesService;
            _this.translateService = translateService;
            _this.updateHistoricApi = updateHistoricApi;
            _this.applicableConfigurationFormMhiaelService = applicableConfigurationFormMhiaelService;
            _this._overlayService = _overlayService;
            _this._formatSelectOption = _formatSelectOption;
            _this.mapItemPns = new Map();
            _super.prototype.registerPageTocEntryObservable.call(_this);
            _this.setItemStructureGlobalFilter();
            _this.init();
            _this.structureTypes = [];
            _this.bireAttributesForApplicableConfiguration = [];
            _this.deleteApi = _this.updateHistoricApi.removeBireVariantVersionHistory;
            _this.selectedAnchor = undefined;
            // this.setTableCols();
            _this.bireVariantVersionSelected = undefined;
            _this.initOemPartnersTableDataSource();
            _this.oemPartnersAdded = [];
            _this.oemPartnersUpdated = [];
            _this.oemPartnersRemoved = [];
            _this.oemPartnersList = [];
            _this.initAssociatedQualificationTableDataSource();
            _this.associatedQualificationAdded = [];
            _this.associatedQualificationRemoved = [];
            _this.initConfigurationDocumentsTableDataSource();
            _this.currentConfigurationDocuments = undefined;
            _this.currentConfigurationDocumentsIndex = undefined;
            _this.configurationDocumentsDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
            _this.showConfigurationDocumentsDialog = false;
            _this.showDocumentMatchingDialog = false;
            _this.initEvolutionModificationTableDataSource();
            _this.initEvolutionInterdependencesTableDataSource();
            _this.interdependences = [];
            _this.currentEvolutionInterdependences = undefined;
            _this.currentEvolutionInterdependencesIndex = undefined;
            _this.evolutionInterdependencesDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
            _this.showEvolutionInterdependencesDialog = false;
            _this.showFamilyCodeDialog = false;
            _this.showStatusUpdatesPopup = false;
            _this.interdependenceAddedList = [];
            _this.interdepenedenceRemoved = [];
            _this.loadInterdependences();
            _this.initDisassemblyGroupTableDataSource();
            _this.disassemblyGroupAdded = [];
            _this.disassemblyGroupRemoved = [];
            _this.configurationDocumentsAddedList = [];
            _this.configurationDocumentsRemovedList = [];
            _this.configurationDocumentsUpdatedList = [];
            _this.currentDisassemblyGroup = undefined;
            _this.currentDisassemblyGroupIndex = undefined;
            _this.disassemblyGroupDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
            _this.showDisassemblyGroupDialog = false;
            _this.disassemblyList = [];
            _this.initRemovalOrderTableDataSource();
            _this.removalOrderAdded = [];
            _this.removalOrderRemoved = [];
            _this.currentRemovalOrder = undefined;
            _this.currentRemovalOrderIndex = undefined;
            _this.removalOrderDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
            _this.showRemovalOrderDialog = false;
            _this.displayStatusPopup = false;
            _this.keyMap = new Map();
            _this.keyMap.set(
              'familyFunction',
              _this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                  .FAMILY_FUNCTION_MAP
              )
            );
            _this.keyMap.set(
              'structureType',
              _this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                  .STRUCTURE_TYPE_MAP
              )
            );
            _this.searchFamilyCode();
            _this.updatesKeyMap = new Map();
            _this.initNodePartTableDataSource();
            _this.isDisplayRatingTable = false;
            _this.initRatingTableDataSource();
            _this.itemStructureDisplayed = [];
            _this.loadCurrency();
            _this.applicableConfiguration.statusState =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__[
                'AWPropertiesConstants'
              ].FUNC_OBJECT_STATUS_ON_GOING_KEY;
            _this.status = [];
            _this.loadStatus(
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                .OBJECT_STATUS_LOADED_KEY
            );
            _this.userWorkflowSubject
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['takeUntil'])(_this.unsubscribe))
              .subscribe(function(_userWorkflow) {
                _this.updateWorkflowStatusList();
              });
            return _this;
          }
          ApplicableConfigurationFormComponent_1 = ApplicableConfigurationFormComponent;
          ApplicableConfigurationFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
              .ENG_APPLICABLE_CONFIGURATION_FORM;
          };
          ApplicableConfigurationFormComponent.prototype.ngOnInit = function() {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            if (!!this.componentData) {
              this.updateOpenMode(this.componentData.openMode);
              var context = !!this.componentData.objectId
                ? this.serializationService.deserialize(this.componentData.objectId)
                : 'tab.createMode';
              this.componentDesignation = context.familyCode
                ? context.familyCode + '-' + context.variantCode + '-' + context.variantName
                : 'tab.createMode';
              this.displayComponentContext(this.componentDesignation, this.isCreateOpenMode);
              this.loadFormData();
            }
            this.loadStructureTypes();
            this.loadOEMPartnerList();
            this.findBireAttributesByCategory();
            // Lang change events
            this.translateService.onLangChange.subscribe(function() {
              // Reset the right attribute name regarding the langage
              _this.dynamicAttributesForAppConfig = _this.dynamicAttributesService.from(
                _this.bireAttributesForApplicableConfiguration
              );
            });
            this.fillTableOfContents();
          };
          ApplicableConfigurationFormComponent.prototype.initNodePartTableDataSource = function() {
            this.nodePartTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              enableSelection: false,
              columns: [
                {
                  field: 'pnCode',
                  translateKey: this.getTranslateKey('pn'),
                  width: '25%'
                },
                {
                  field: 'isnAta',
                  translateKey: this.getTranslateKey('isnAta'),
                  width: '10%'
                },
                {
                  field: 'pnQuantityTci',
                  translateKey: this.getTranslateKey('ipcQuantity'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__['ColumnAlignment'].RIGHT,
                  width: '15%'
                },
                {
                  field: 'pnQuantityMpl',
                  translateKey: this.getTranslateKey('mplQuantity'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__['ColumnAlignment'].RIGHT,
                  width: '15%'
                },
                {
                  field: 'alternativePn',
                  translateKey: this.getTranslateKey('alternativePn'),
                  width: '35%'
                }
              ],
              data: []
            });
          };
          ApplicableConfigurationFormComponent.prototype.initOemPartnersTableDataSource = function() {
            this.oemPartnersTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'partnerCode',
                  translateKey: this.getTranslateKey('partnerCode')
                },
                {
                  field: 'itemRangeMin',
                  translateKey: this.getTranslateKey('itemRangeMin')
                },
                {
                  field: 'itemRangeMax',
                  translateKey: this.getTranslateKey('itemRangeMax')
                }
              ],
              data: []
            });
          };
          ApplicableConfigurationFormComponent.prototype.initAssociatedQualificationTableDataSource = function() {
            this.associatedQualificationTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'qualificationCode',
                  translateKey: this.getTranslateKey('qualificationCode')
                },
                {
                  field: 'qualificationName',
                  translateKey: this.getTranslateKey('qualificationName')
                },
                {
                  field: 'qualificationDescription',
                  translateKey: this.getTranslateKey('qualificationDescription')
                },
                {
                  field: 'averageHourRate',
                  translateKey: this.getTranslateKey('averageHourRate')
                }
              ],
              data: []
            });
          };
          ApplicableConfigurationFormComponent.prototype.initRatingTableDataSource = function() {
            this.ratingTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'ratingCode',
                  translateKey: this.getTranslateKey('ratingCode')
                },
                {
                  field: 'ratingName',
                  translateKey: this.getTranslateKey('ratingName')
                }
              ],
              data: []
            });
          };
          ApplicableConfigurationFormComponent.prototype.initConfigurationDocumentsTableDataSource = function() {
            this.configurationDocumentsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'number',
                  translateKey: this.getTranslateKey('number'),
                  width: '12.5%'
                },
                {
                  field: 'revisionNumber',
                  translateKey: this.getTranslateKey('revisionNumber'),
                  width: '12.5%'
                },
                {
                  field: 'designation',
                  translateKey: this.getTranslateKey('designation'),
                  width: '47.5%'
                },
                {
                  field: 'documentType',
                  translateKey: this.getTranslateKey('documentType'),
                  width: '12.5%'
                },
                {
                  field: 'type',
                  translateKey: this.getTranslateKey('type'),
                  width: '5%'
                },
                {
                  field: 'approvalDateStr',
                  translateKey: this.getTranslateKey('approvalDateStr'),
                  width: '10%'
                }
              ],
              data: []
            });
          };
          ApplicableConfigurationFormComponent.prototype.initEvolutionModificationTableDataSource = function() {
            this.evolutionModificationTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__[
              'TableDataSource'
            ]({
              enableSelection: false,
              columns: [
                {
                  field: 'evolutionNumber',
                  translateKey: this.getTranslateKey('evolutionNumber'),
                  width: '10.5%'
                },
                {
                  field: 'evolutionRevisionNumber',
                  translateKey: this.getTranslateKey('evolutionRevisionNumber'),
                  width: '10.5%'
                },
                {
                  field: 'familyCode',
                  translateKey: this.getTranslateKey('familyCode'),
                  width: '10.5%'
                },
                {
                  field: 'modificationStructureTypeKey',
                  translateKey: this.getTranslateKey('modificationStructureTypeKey'),
                  width: '10.5%'
                },
                {
                  field: 'modificationType',
                  translateKey: this.getTranslateKey('modificationType'),
                  width: '10.5%'
                },
                {
                  field: 'modificationNumber',
                  translateKey: this.getTranslateKey('modificationNumber'),
                  width: '10.5%'
                },
                {
                  field: 'modificationRevisionNumber',
                  translateKey: this.getTranslateKey('modificationRevisionNumber'),
                  width: '10.5%'
                },
                {
                  field: 'sbAdNumber',
                  translateKey: this.getTranslateKey('sbAdNumber'),
                  width: '10.5%'
                },
                {
                  field: 'sbAdRevisionNumber',
                  translateKey: this.getTranslateKey('sbAdRevisionNumber'),
                  width: '16%'
                }
              ],
              data: []
            });
          };
          ApplicableConfigurationFormComponent.prototype.initEvolutionInterdependencesTableDataSource = function() {
            this.evolutionInterdependencesTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'familyCode',
                  translateKey: this.getTranslateKey('familyCode')
                },
                {
                  field: 'variantCode',
                  translateKey: this.getTranslateKey('variantCode')
                },
                {
                  field: 'evolutionNumber',
                  translateKey: this.getTranslateKey('evolutionNumber')
                },
                {
                  field: 'evolutionRevisionNumber',
                  translateKey: this.getTranslateKey('evolutionRevisionNumber')
                },
                {
                  field: 'interdependenceCode',
                  translateKey: this.getTranslateKey('interdependenceCode')
                },
                {
                  field: 'evoEvolutionNumber',
                  translateKey: this.getTranslateKey('evoEvolutionNumber')
                },
                {
                  field: 'evoEvolutionRevisionNumber',
                  translateKey: this.getTranslateKey('evoEvolutionRevisionNumber')
                }
              ],
              data: []
            });
          };
          ApplicableConfigurationFormComponent.prototype.initDisassemblyGroupTableDataSource = function() {
            this.disassemblyGroupTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'familyCode',
                  translateKey: this.getTranslateKey('familyCode')
                },
                {
                  field: 'variantCode',
                  translateKey: this.getTranslateKey('variantCode')
                },
                {
                  field: 'unmountCode',
                  translateKey: this.getTranslateKey('unmountCode')
                }
              ],
              data: []
            });
          };
          ApplicableConfigurationFormComponent.prototype.initRemovalOrderTableDataSource = function() {
            this.removalOrderTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'unmountCode',
                  translateKey: this.getTranslateKey('unmountCode')
                },
                {
                  field: 'unmUnmountCode',
                  translateKey: this.getTranslateKey('unmUnmountCode')
                }
              ],
              data: []
            });
          };
          ApplicableConfigurationFormComponent.prototype.fillTableOfContents = function() {
            var _this = this;
            var mainDataKey = 'page.mainData';
            var generalKey = this.getTranslateKey('general');
            var itemStructureKey = this.getTranslateKey('itemStructure');
            var configDocKey = this.getTranslateKey('configDoc');
            var docMatchingKey = this.getTranslateKey('docMatching');
            var evolutionInterdependencesKey = this.getTranslateKey('evolutionInterdependences');
            var disassemblyGroupsKey = this.getTranslateKey('disassemblyGroups');
            var attributesKey = this.getTranslateKey('attributes');
            this.translateService
              .get([
                mainDataKey,
                generalKey,
                itemStructureKey,
                configDocKey,
                docMatchingKey,
                evolutionInterdependencesKey,
                disassemblyGroupsKey,
                attributesKey
              ])
              .subscribe(function(results) {
                var mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
                var generalLabel = !!results ? results[generalKey] : 'Additional Information';
                var itemStructureLabel = !!results ? results[itemStructureKey] : 'Item Structure';
                var configDocLabel = !!results ? results[configDocKey] : 'Airworthiness Documents';
                var docMatchingLabel = !!results ? results[docMatchingKey] : 'Document Matching';
                var evolutionInterdependencesLabel = !!results
                  ? results[evolutionInterdependencesKey]
                  : 'Evolution Interdependences';
                var disassemblyGroupsLabel = !!results ? results[disassemblyGroupsKey] : 'Disassembly Groups';
                var attributesLabel = !!results ? results[attributesKey] : 'Attributes';
                _this.toc = [
                  {
                    id: 'mainInfoAnchor',
                    anchor: _this.mainInfoAnchor,
                    label: mainDataLabel
                  },
                  {
                    id: 'itemStrucutre',
                    anchor: _this.itemStrucutre,
                    label: itemStructureLabel
                  },
                  {
                    id: 'generalAnchor',
                    anchor: _this.generalAnchor,
                    label: generalLabel
                  },
                  {
                    id: 'configDoc',
                    anchor: _this.configDoc,
                    label: configDocLabel
                  },
                  {
                    id: 'docMatching',
                    anchor: _this.docMatching,
                    label: docMatchingLabel
                  },
                  {
                    id: 'evolutionInterdependences',
                    anchor: _this.evolutionInterdependences,
                    label: evolutionInterdependencesLabel
                  },
                  {
                    id: 'disassemblyGroups',
                    anchor: _this.disassemblyGroups,
                    label: disassemblyGroupsLabel
                  },
                  {
                    id: 'attributes',
                    anchor: _this.attributes,
                    label: attributesLabel
                  }
                ];
                _super.prototype.selectPageTocEntry.call(_this, 'mainInfoAnchor');
              });
          };
          Object.defineProperty(ApplicableConfigurationFormComponent.prototype, 'itemFamilyCode', {
            ///////////////////////////////////////////////////////////////////////////////
            get: function() {
              var _this = this;
              if (!this.itemStructureNodeSelected) {
                return '';
              } else {
                var itemFamilyCodeSelected = this.itemFamilyCodeList.find(function(elt) {
                  return elt.value === _this.itemStructureNodeSelected.data.itemFamilyCode;
                });
                return itemFamilyCodeSelected ? itemFamilyCodeSelected.label : '';
              }
            },
            enumerable: true,
            configurable: true
          });
          ApplicableConfigurationFormComponent.prototype.controlIpcData = function() {
            this.controlIpcDataVisible = true;
          };
          ApplicableConfigurationFormComponent.prototype.filterItemStructure = function(searchTextValue) {
            this.searchItemStructureGlobalFilterChanged.next(searchTextValue);
          };
          ApplicableConfigurationFormComponent.prototype.onSelectNode = function() {
            var _this = this;
            this.itemStructureNodePartTableLoading = true;
            var node = this.itemStructureNodeSelected;
            var nodePart = [];
            var bireItem = this.buildBireItemDTO(node.data);
            if (!!node && !!node.data) {
              this.applicableConfigurationFormService.findBireVersionPnsByItem(bireItem).subscribe(function(result) {
                result.forEach(function(pn) {
                  var row = {
                    pnCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(pn.pnCode),
                    isnAta: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(pn.isnAta),
                    pnQuantityTci: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(
                      pn.pnQuantityTci
                    ),
                    pnQuantityMpl: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(
                      pn.pnQuantityMpl
                    ),
                    alternativePn: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(
                      pn.pnAlternativeType
                    ),
                    _obj: pn
                  };
                  nodePart.push(row);
                });
                _this.nodePartTableDataSource.setData(nodePart);
                _this.nodePartTableDataSource.update();
              });
            }
            this.itemStructureNodePartTableLoading = false;
            this.loadItemStructureNodeIllustrationList(bireItem);
          };
          // tslint:disable-next-line: no-any
          ApplicableConfigurationFormComponent.prototype.buildBireItemDTO = function(data) {
            return {
              chapter: data.chapter,
              familyCode: data.familyCode,
              marks: data.marks,
              section: data.section,
              sheet: data.sheet,
              structureType: data.structureType,
              subject: data.subject,
              variantCode: data.variantCode
            };
          };
          ApplicableConfigurationFormComponent.prototype.openConfigurationDiagram = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .ENG_CONFIGURATION_DIAGRAM_FORM,
              objectId: this.serializationService.serialize(this.itemStructureNodeSelected.data),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Write
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ApplicableConfigurationFormComponent.prototype.openItem = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants'].ENG_ITEM_FORM,
              objectId: this.serializationService.serialize(this.itemStructureNodeSelected.data),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ApplicableConfigurationFormComponent.prototype.openItemPartNumber = function(itemPartNumber) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .ENG_ITEM_PART_NUMBER_FORM,
              objectId: this.serializationService.serialize(itemPartNumber._obj),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ApplicableConfigurationFormComponent.prototype.clearItemStructureGlobalFilter = function() {
            this.searchItemStructureGlobalFilter = '';
          };
          ApplicableConfigurationFormComponent.prototype.findNodeInItemStructureByItem = function(temStructure, item) {
            return this.getAllNodeInItemStructure(temStructure).find(function(elt) {
              var nodeData = elt.data;
              return (
                nodeData.familyCode === item.familyCode &&
                nodeData.chapter === item.chapter &&
                nodeData.subject === item.subject &&
                nodeData.variantCode === item.variantCode &&
                nodeData.section === item.section &&
                nodeData.sheet === item.sheet &&
                nodeData.marks === item.marks &&
                nodeData.structureType === item.structureType
              );
            });
          };
          ApplicableConfigurationFormComponent.prototype.getAllNodeInItemStructure = function(itemStructure) {
            var _this = this;
            var result = [];
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__['ListUtils'].isNullOrEmpty(itemStructure)) {
              itemStructure.forEach(function(node) {
                result = __spread(result, [node]);
                result = __spread(result, _this.getAllNodeInItemStructure(node.children));
              });
            }
            return result;
          };
          ApplicableConfigurationFormComponent.prototype.loadFormData = function() {
            var _this = this;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__['forkJoin'])([
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                  .ITEM_FAMILY_CODE_MAP
              ),
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                  .FAMILY_FUNCTION_MAP
              )
            ]).subscribe(function(_a) {
              var _b = __read(_a, 2),
                itemFamilyCodeList = _b[0],
                familyFunctionList = _b[1];
              _this.itemFamilyCodeList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__['ListUtils'].orEmpty(
                itemFamilyCodeList
              );
              _this.flFunctions = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__['ListUtils'].orEmpty(
                familyFunctionList
              );
              _this.loadApplicableConfiguration();
              if (_this.componentData.objectId && _this.componentData.objectId.length > 0) {
                _this.loadApplicableForm();
              }
            });
          };
          ApplicableConfigurationFormComponent.prototype.loadItemStructureNodeIllustrationList = function(bireItem) {
            var _this = this;
            this.itemStructureNodeImageList = [];
            var bireItemDTOId = {
              familyCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(
                bireItem.familyCode
              ),
              chapter: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(
                bireItem.chapter
              ),
              subject: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(
                bireItem.subject
              ),
              variantCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(
                bireItem.variantCode
              ),
              section: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(
                bireItem.section
              ),
              sheet: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(bireItem.sheet),
              marks: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(bireItem.marks),
              structureType: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(
                bireItem.structureType
              )
            };
            this.applicableConfigurationFormService.findBireDocItemsByItem(bireItemDTOId).subscribe(function(results) {
              _this.itemStructureNodeImageList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__['ListUtils']
                .orEmpty(results)
                .filter(function(result) {
                  return (
                    _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_30__['ObjectUtils'].isDefined(
                      result.bireDocumentDTO
                    ) &&
                    _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_30__['ObjectUtils'].isDefined(
                      result.bireDocumentDTO.docFile
                    )
                  );
                })
                .map(function(result) {
                  var doc = result.bireDocumentDTO;
                  return _this.domSanitizer.bypassSecurityTrustResourceUrl(
                    '' +
                      _shared_utils_image_utils__WEBPACK_IMPORTED_MODULE_28__['ImageUtils'].getBase64Prefix(
                        doc.docType
                      ) +
                      doc.docFile
                  );
                });
            });
          };
          ApplicableConfigurationFormComponent.prototype.setItemStructureGlobalFilter = function() {
            var _this = this;
            this.clearItemStructureGlobalFilter();
            this.searchItemStructureGlobalFilterChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__['Subject']();
            this.searchItemStructureGlobalFilterChanged
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['debounceTime'])(
                  ApplicableConfigurationFormComponent_1.SEARCH_TEXT_DEBOUNCE_TIME
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['distinctUntilChanged'])(),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['takeUntil'])(this.unsubscribe)
              )
              .subscribe(function(searchTextValue) {
                _this.updateItemStructureDisplayed(searchTextValue);
              });
          };
          ApplicableConfigurationFormComponent.prototype.treeNodeMatchFilters = function(node, searchText) {
            var _this = this;
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__['ListUtils'].isNullOrEmpty(node.children)) {
              node.children = node.children.filter(function(child) {
                return _this.treeNodeMatchFilters(child, searchText);
              });
            }
            var nodeData = node.data;
            // Description
            var designation = [
              nodeData.chapter,
              nodeData.section,
              nodeData.subject,
              nodeData.sheet,
              nodeData.marks,
              nodeData.name
            ].join('-');
            var designationMatch =
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].isNullOrEmpty(searchText) ||
              designation.includes(searchText);
            // Name
            var name = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils']
              .orEmpty(nodeData.name)
              .toLowerCase();
            var nameMatch =
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].isNullOrEmpty(searchText) ||
              name.includes(searchText);
            return (
              _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__['ListUtils'].orEmpty(node.children).length > 0 ||
              designationMatch ||
              nameMatch
            );
          };
          ApplicableConfigurationFormComponent.prototype.updateItemStructureDisplayed = function(searchText) {
            var _this = this;
            this.itemStructureDisplayed = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__['cloneDeep'])(
              this.itemStructure
            );
            this.itemStructureDisplayed = this.itemStructureDisplayed.filter(function(elt) {
              return _this.treeNodeMatchFilters(elt, !!searchText ? searchText.toLowerCase() : undefined);
            });
            if (this.itemStructureNodeSelected) {
              var selectedItem = this.itemStructureNodeSelected.data;
              var nodeInItemStructureDisplayed = this.findNodeInItemStructureByItem(
                this.itemStructureDisplayed,
                selectedItem
              );
              if (nodeInItemStructureDisplayed) {
                this.itemStructureNodeSelected = nodeInItemStructureDisplayed;
              }
            }
          };
          ///////////////////////////////////////////////////////////////////////////////
          ApplicableConfigurationFormComponent.prototype.findBireAttributesByCategory = function() {
            var _this = this;
            this.applicableConfigurationFormService
              .findBireAttributesByCategory(
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                  .MCH_ATTRIBUTE_CATEGORY_VARIANT_VERSION_KEY
              )
              .subscribe(function(results) {
                var _a;
                if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__['ListUtils'].isNullOrEmpty(results)) {
                  (_a = _this.bireAttributesForApplicableConfiguration).push.apply(_a, __spread(results));
                }
                setTimeout(function() {
                  _this.dynamicAttributesForAppConfig = _this.dynamicAttributesService.from(
                    _this.bireAttributesForApplicableConfiguration
                  );
                  _this.getBireEvolutionAttributes();
                });
              });
          };
          ApplicableConfigurationFormComponent.prototype.getBireEvolutionAttributes = function() {
            var _this = this;
            var bireVariantVersionDTOId = {
              familyCode: this.applicableConfiguration.familyCode,
              structureType: this.applicableConfiguration.structureType,
              variantCode: this.applicableConfiguration.variantCode
            };
            this.applicableConfigurationFormService
              .findBireVariantAttributesByVariantVersion(bireVariantVersionDTOId)
              .subscribe(
                function(results) {
                  _this.bireVariantAttributeDTO = results;
                  _this.dynamicAttributesService.setValues(
                    _this.dynamicAttributesForAppConfig,
                    _this.bireVariantAttributeDTO
                  );
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindAttributesByEvolution'));
                }
              );
          };
          ApplicableConfigurationFormComponent.prototype.loadApplicableForm = function() {
            if (
              !!this.applicableConfiguration.familyCode &&
              !!this.applicableConfiguration.variantCode &&
              !!this.applicableConfiguration.structureType
            ) {
              this.bireVariantVersionDTOId = {
                familyCode: this.applicableConfiguration.familyCode,
                variantCode: this.applicableConfiguration.variantCode,
                structureType: this.applicableConfiguration.structureType
              };
              this.loadConfigurationDocuments(this.bireVariantVersionDTOId);
              this.loadEvolutionModificationSbad(this.bireVariantVersionDTOId);
              this.loadEvolutionInterdependences(this.bireVariantVersionDTOId);
              this.loadDisassemblyGroups(this.bireVariantVersionDTOId);
              this.loadRemovalOrders(this.bireVariantVersionDTOId);
              this.loadOEMPartner(this.bireVariantVersionDTOId);
              this.loadAssociatedQualification(this.bireVariantVersionDTOId);
              this.loadItemStructure();
              this.loadConfigDocuments(this.bireVariantVersionDTOId);
              if (
                this.selectedFamilyFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_ENGINE_KEY
              ) {
                this.loadRatingTable(this.bireVariantVersionDTOId);
              }
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'ngOnInit', 'this.applicableConfiguration');
            }
          };
          // Item Structure table
          ApplicableConfigurationFormComponent.prototype.loadItemStructure = function() {
            var _this = this;
            this.itemStructureLoading = true;
            this.searchItemStructureGlobalFilter = '';
            var input = {
              familyCode: this.bireVariantVersionDTOId.familyCode,
              variantCode: this.bireVariantVersionDTOId.variantCode,
              structureType: this.bireVariantVersionDTOId.structureType
            };
            this.applicableConfigurationFormService.getItemStructureForTree(input).subscribe(function(data) {
              _this.itemStructure = _this.buildTree(data);
              _this.itemStructureDisplayed = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__['cloneDeep'])(
                _this.itemStructure
              );
              if (_this.itemStructureDisplayed.length > 0) {
                if (_this.itemStructureDisplayed.length === 1) {
                  _this.itemStructure[0].expanded = true;
                  _this.itemStructureDisplayed[0].expanded = true;
                }
                _this.itemStructureNodeSelected = _this.itemStructureDisplayed[0];
                _this.onSelectNode();
              } else {
                _this.itemStructureNodeSelected = undefined;
              }
              _this.itemStructureLoading = false;
            });
          };
          ApplicableConfigurationFormComponent.prototype.buildTree = function(data) {
            var _this = this;
            var toReturn = [];
            data.forEach(function(elt) {
              toReturn.push({
                data: elt.data,
                children: _this.buildTree(
                  _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__['ListUtils'].orEmpty(elt.children)
                )
              });
            });
            return toReturn;
          };
          ApplicableConfigurationFormComponent.prototype.loadApplicableConfiguration = function() {
            var _this = this;
            if (this.componentData) {
              if (this.componentData.objectId && this.componentData.objectId.length > 0) {
                this.applicableConfiguration = this.serializationService.deserialize(this.componentData.objectId);
                this.applicableConfiguration.statusDate = new Date(
                  this.serializationService.deserialize(this.componentData.objectId).statusDate
                );
                this.selectedFamilyFunction = this.applicableConfiguration.familyFunction;
                if (!!this.flFunctions) {
                  var selectedFunction = this.flFunctions.find(function(functions) {
                    return functions.value === _this.applicableConfiguration.familyFunction;
                  });
                  this.selectedFamilyFunctionDisplayed =
                    !!selectedFunction && !!selectedFunction.label ? selectedFunction.label : '';
                }
                this.applicableConfiguration.variantRevisionDate = this.applicableConfiguration.variantRevisionDate
                  ? new Date(this.applicableConfiguration.variantRevisionDate)
                  : this.variantRevisionDateClone
                  ? this.variantRevisionDateClone
                  : undefined;
                this.applicableConfiguration.variantRevisionNumber = this.applicableConfiguration.variantRevisionNumber
                  ? this.applicableConfiguration.variantRevisionNumber
                  : this.variantRevisionNumberClone
                  ? this.variantRevisionNumberClone
                  : '';
                this.bireRatingInput = {
                  familyCode: this.applicableConfiguration.familyCode,
                  structureType: this.applicableConfiguration.structureType
                };
                if (!!this.applicableConfiguration.statusState) {
                  this.loadStatus(this.applicableConfiguration.statusState);
                  this.loadUserWorkflow(this.applicableConfiguration.statusState);
                }
              }
            }
          };
          ApplicableConfigurationFormComponent.prototype.loadConfigurationDocuments = function(
            bireVariantVersionDTOId
          ) {
            var _this = this;
            this.applicableConfigurationFormService
              .findEvolutionModificationSbadList(bireVariantVersionDTOId)
              .subscribe(function(result) {
                result.forEach(function(element) {
                  var propertyStructureTypeSelected = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__[
                    'ListUtils'
                  ]
                    .orEmpty(_this.propertyStructureType)
                    .find(function(type) {
                      return type.value === element.structureType;
                    });
                  if (element.structureType && propertyStructureTypeSelected) {
                    element.structureType = propertyStructureTypeSelected.label;
                  }
                });
                _this.evolutionModificationTableDataSource.setData(_this.removeDuplicateDoc(result));
                _this.evolutionModificationTableDataSource.update();
              });
          };
          ApplicableConfigurationFormComponent.prototype.loadEvolutionModificationSbad = function(
            bireVariantVersionDTOId
          ) {
            var _this = this;
            this.applicableConfigurationFormService
              .findEvolutionModificationSbadList(bireVariantVersionDTOId)
              .subscribe(function(result) {
                _this.evolutionModificationTableDataSource.setData(_this.removeDuplicateDoc(result));
                _this.evolutionModificationTableDataSource.update();
              });
          };
          ApplicableConfigurationFormComponent.prototype.removeDuplicateDoc = function(result) {
            var newArr = [];
            result.forEach(function(res) {
              var found = false;
              newArr.forEach(function(r) {
                if (
                  r.evolutionNumber === res.evolutionNumber &&
                  r.evolutionRevisionNumber === res.evolutionRevisionNumber &&
                  r.familyCode === res.familyCode &&
                  r.modificationNumber === res.modificationNumber &&
                  r.modificationRevisionNumber === res.modificationRevisionNumber &&
                  r.modificationStructureTypeKey === r.modificationStructureTypeKey &&
                  r.modificationType === res.modificationType &&
                  r.sbAdNumber === res.sbAdNumber &&
                  r.sbAdRevisionNumber === res.sbAdRevisionNumber &&
                  r.structureType === res.structureType
                ) {
                  found = true;
                }
              });
              if (!found) {
                newArr.push(res);
              }
            });
            return newArr;
          };
          ApplicableConfigurationFormComponent.prototype.loadEvolutionInterdependences = function(
            bireVariantVersionDTOId
          ) {
            var _this = this;
            this.applicableConfigurationFormService
              .findBireEvolutionEvolutionsByFamilyAndVariantCodes(bireVariantVersionDTOId)
              .subscribe(function(results) {
                var tempTable = [];
                var tempResult;
                results.forEach(function(result) {
                  tempResult = _this.createApplicabilityRow(result);
                  if (!!result && !!tempResult) {
                    tempTable.push(tempResult);
                  } else {
                    _super.prototype.throwUnboundLocalError.call(_this, 'loadEvolutionInterdependences', 'result');
                  }
                });
                _this.evolutionInterdependencesTableDataSource.setData(tempTable);
                _this.evolutionInterdependencesTableDataSource.update();
                // this.evolutionInterdependencesTable = result.map((resultData) => this.createApplicabilityRow(resultData));
              });
          };
          ApplicableConfigurationFormComponent.prototype.createApplicabilityRow = function(resultData) {
            if (!!resultData.bireEvolutionEvolutionDTO) {
              var evolutionInterdependencesRow = {
                evolutionNumber: resultData.bireEvolutionEvolutionDTO.evolutionNumber,
                evolutionRevisionNumber: resultData.bireEvolutionEvolutionDTO.evolutionRevisionNumber,
                evoEvolutionNumber: resultData.bireEvolutionEvolutionDTO.evoEvolutionNumber,
                evoEvolutionRevisionNumber: resultData.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber,
                interdependenceCode: !!resultData.bireEvolutionEvolutionDTO.interdependenceCode
                  ? this.formatInterdependences(resultData.bireEvolutionEvolutionDTO.interdependenceCode)
                  : undefined,
                familyCode: resultData.bireEvolutionEvolutionDTO.familyCode,
                structureType: resultData.bireEvolutionEvolutionDTO.structureType,
                variantCode: resultData.bireEvolutionEvolutionDTO.variantCode,
                statusState: resultData.bireEvolutionEvolutionDTO.statusState,
                statusUser: resultData.bireEvolutionEvolutionDTO.statusUser,
                statusDate: resultData.bireEvolutionEvolutionDTO.statusDate,
                adInitialText: resultData.adInitialText,
                adDependentText: resultData.adDependentText,
                sbInitialText: resultData.sbInitialText,
                sbDependentText: resultData.sbDependentText,
                modInitialText: resultData.modInitialText,
                modDependentText: resultData.modDependentText,
                bireEvolutionEvolutionDTO: {
                  evolutionNumber: resultData.bireEvolutionEvolutionDTO.evolutionNumber,
                  evolutionRevisionNumber: resultData.bireEvolutionEvolutionDTO.evolutionRevisionNumber,
                  evoEvolutionNumber: resultData.bireEvolutionEvolutionDTO.evoEvolutionNumber,
                  evoEvolutionRevisionNumber: resultData.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber,
                  interdependenceCode: resultData.bireEvolutionEvolutionDTO.interdependenceCode,
                  familyCode: resultData.bireEvolutionEvolutionDTO.familyCode,
                  structureType: resultData.bireEvolutionEvolutionDTO.structureType,
                  variantCode: resultData.bireEvolutionEvolutionDTO.variantCode,
                  statusState: resultData.bireEvolutionEvolutionDTO.statusState,
                  statusUser: resultData.bireEvolutionEvolutionDTO.statusUser,
                  statusDate: resultData.bireEvolutionEvolutionDTO.statusDate
                }
              };
              return evolutionInterdependencesRow;
            } else {
              _super.prototype.throwUnboundLocalError.call(
                this,
                'createApplicabilityRow',
                'resultData.bireEvolutionEvolutionDTO'
              );
            }
          };
          ApplicableConfigurationFormComponent.prototype.loadDisassemblyGroups = function(bireVariantVersionDTOId) {
            var _this = this;
            this.applicableConfigurationFormService
              .findBireUnmountAssemblysByFamilyAndVariantCodes(bireVariantVersionDTOId)
              .subscribe(function(result) {
                _this.disassemblyGroupTableDataSource.setData(result);
                _this.disassemblyGroupTableDataSource.update();
              });
          };
          ApplicableConfigurationFormComponent.prototype.loadRemovalOrders = function(bireVariantVersionDTOId) {
            var _this = this;
            this.applicableConfigurationFormService
              .findBireUnmountOrdersByFamilyAndVariantCodes(bireVariantVersionDTOId)
              .subscribe(function(result) {
                _this.removalOrderTableDataSource.setData(result);
                _this.removalOrderTableDataSource.update();
              });
          };
          ApplicableConfigurationFormComponent.prototype.loadOEMPartner = function(bireVariantVersionDTOId) {
            var _this = this;
            this.applicableConfigurationFormService
              .findBirePartnersByVariant(bireVariantVersionDTOId)
              .subscribe(function(result) {
                _this.oemPartnersTableDataSource.setData(result);
                _this.oemPartnersTableDataSource.update();
              });
          };
          ApplicableConfigurationFormComponent.prototype.loadAssociatedQualification = function(
            bireVariantVersionDTOId
          ) {
            var _this = this;
            var precision = 2;
            this.applicableConfigurationFormService.getLocalCurrency().subscribe(function(result) {
              _this.currency = result;
              _this.applicableConfigurationFormService
                .findBireQualificationsByVariantPK(bireVariantVersionDTOId)
                .subscribe(function(results) {
                  _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__['ListUtils']
                    .orEmpty(results)
                    .forEach(function(row) {
                      row.averageHourRate = row.averageHourRate
                        ? parseInt(row.averageHourRate, 10).toFixed(precision) + ' ' + _this.currency
                        : row.averageHourRate;
                    });
                  _this.associatedQualificationTableDataSource.setData(results);
                  _this.associatedQualificationTableDataSource.update();
                });
            });
          };
          ApplicableConfigurationFormComponent.prototype.loadStructureTypes = function() {
            var _this = this;
            this.propertiesService.getValue('getStructureTypeMap').subscribe(function(results) {
              _this.structureTypes = results || [];
            });
          };
          ApplicableConfigurationFormComponent.prototype.formatStructureText = function() {
            var structureLabel = !!this.applicableConfiguration.structureType
              ? this.formatStructures(this.applicableConfiguration.structureType)
              : '';
            return structureLabel;
          };
          ApplicableConfigurationFormComponent.prototype.formatStructures = function(structureKey) {
            var selectedStructure = this.structureTypes.find(function(structures) {
              return structures.value === structureKey;
            });
            return !!selectedStructure && !!selectedStructure.label ? selectedStructure.label : '';
          };
          ApplicableConfigurationFormComponent.prototype.formatInterdependences = function(interdependenceKey) {
            var selectedInterdepence = this.interdependences.find(function(interdependence) {
              return interdependence.value === interdependenceKey;
            });
            return !!selectedInterdepence && !!selectedInterdepence.label ? selectedInterdepence.label : '';
          };
          ApplicableConfigurationFormComponent.prototype.loadOEMPartnerList = function() {
            var _this = this;
            var oemCustomer = {};
            this.applicableConfigurationFormService.findOEMPartnersBySearchCriteria(oemCustomer).subscribe(
              function(results) {
                _this.oemPartnersList = results;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnOEMList'));
              }
            );
          };
          ApplicableConfigurationFormComponent.prototype.loadConfigDocuments = function(bireVariantVersionDTOId) {
            var _this = this;
            this.applicableConfigurationFormService
              .findConfigurationDocuments(bireVariantVersionDTOId)
              .subscribe(function(configurationDocumentList) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__['forkJoin'])([
                  _this.propertiesService.getValue(
                    _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__[
                      'GenericPropertyConstants'
                    ].EVOLUTION_TYPE_MAP
                  ),
                  _this.propertiesService.getValue(
                    _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__[
                      'GenericPropertyConstants'
                    ].SB_TYPE_MAP
                  )
                ]).subscribe(function(_a) {
                  var _b = __read(_a, 2),
                    evolutionTypeList = _b[0],
                    sbTypeList = _b[1];
                  _this.configurationDocumentsTableDataSource.setData(
                    configurationDocumentList.map(function(result) {
                      var configurationDocument = __assign({}, result);
                      var typeMap =
                        result.documentType === 'Airworthiness'
                          ? sbTypeList
                          : result.documentType === 'Evolution'
                          ? evolutionTypeList
                          : [];
                      configurationDocument.type =
                        !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__['ListUtils'].isEmpty(typeMap) &&
                        !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].isNullOrEmpty(
                          result.type
                        )
                          ? _this.extractTypeName(typeMap, result.type)
                          : configurationDocument.type;
                      configurationDocument.approvalDateStr = _this.dateService.dateToString(result.approvalDate);
                      return configurationDocument;
                    })
                  );
                  _this.configurationDocumentsTableDataSource.update();
                });
              });
          };
          ApplicableConfigurationFormComponent.prototype.openModification = function(modification) {
            var bireModificationDTO = {
              modificationType: modification.type,
              modificationNumber: modification.number,
              modificationRevisionNumber: modification.revisionNumber,
              familyCode: this.applicableConfiguration.familyCode,
              structureType: this.applicableConfiguration.structureType
            };
            var labelKey = 'transaction.ModificationFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'ModificationFormComponent',
              objectId: bireModificationDTO ? this.serializationService.serialize(bireModificationDTO) : undefined,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ApplicableConfigurationFormComponent.prototype.openEvolution = function(evolution) {
            var labelKey = 'transaction.EvolutionFormComponent';
            var evolutionId = {
              evolutionNumber: evolution.number,
              evolutionRevisionNumber: evolution.revisionNumber
            };
            var data = {
              id: this.tabService.generateId(),
              componentId: 'EvolutionFormComponent',
              objectId: this.serializationService.serialize(evolutionId),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ApplicableConfigurationFormComponent.prototype.openSbad = function(sbad) {
            var labelKey = 'transaction.SbadFormComponent';
            var bireSbDTOId = {
              sbNumber: sbad.number,
              sbRevisionNumber: sbad.revisionNumber
            };
            var data = {
              id: this.tabService.generateId(),
              componentId: 'SbadFormComponent',
              objectId: this.serializationService.serialize(bireSbDTOId),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ApplicableConfigurationFormComponent.prototype.openDocumentForm = function(document) {
            switch (document.documentType) {
              case 'Modification':
                this.openModification(document);
                break;
              case 'Evolution':
                this.openEvolution(document);
                break;
              case 'Airworthiness':
                this.openSbad(document);
                break;
              default:
                break;
            }
          };
          ApplicableConfigurationFormComponent.prototype.extractTypeName = function(typeMap, typeCode) {
            var selectedType = typeMap.find(function(elt) {
              return elt.value === typeCode;
            });
            return selectedType ? selectedType.label : typeCode;
          };
          ApplicableConfigurationFormComponent.prototype.searchFamilyCode = function() {
            var test = [
              {
                field: 'familyCode',
                width: '180px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                    .Input,
                alignment: 'left'
              },
              {
                field: 'familyName',
                width: '180px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                    .Input,
                alignment: 'left'
              },
              {
                field: 'familyFunction',
                width: '180px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                    .Input,
                alignment: 'left'
              },
              {
                field: 'structureType',
                width: '180px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                    .Input,
                alignment: 'left'
              }
            ];
            this.dialogTableDataFamilyCode = {
              componentId: 'ApplicabilityPopupDialog',
              tableCols: test,
              tableRows: this.applicableConfigurationFormService.findAllBireFamilys(),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableSelectionMode'].Single,
              globalFilter: true
            };
          };
          ApplicableConfigurationFormComponent.prototype.setSelectedFamilyCode = function(selectedObject) {
            if (selectedObject) {
              this.applicableConfiguration.familyCode = selectedObject.familyCode;
              this.applicableConfiguration.structureType = selectedObject.structureType;
              this.selectedFamilyFunction = selectedObject.familyFunction;
              this.applicableConfiguration.familyFunction = selectedObject.familyFunction;
              this.bireRatingInput = {
                familyCode: this.applicableConfiguration.familyCode,
                structureType: this.applicableConfiguration.structureType
              };
              if (!!selectedObject.familyFunction) {
                var selectedFunction = this.flFunctions.find(function(functions) {
                  return functions.value === selectedObject.familyFunction;
                });
                this.selectedFamilyFunctionDisplayed =
                  !!selectedFunction && !!selectedFunction.label ? selectedFunction.label : '';
              }
            }
            this.showFamilyCodeDialog = false;
          };
          ApplicableConfigurationFormComponent.prototype.openFamilyPopup = function() {
            if (!this.isReadOpenMode && this.isCreateOpenMode) {
              this.showFamilyCodeDialog = true;
            }
          };
          // Tab Interdependence
          ApplicableConfigurationFormComponent.prototype.loadInterdependences = function() {
            var _this = this;
            this.applicableConfigurationFormService.findAllBireInterdependences().subscribe(
              function(results) {
                _this.interdependences = results;
              },
              function() {
                _this.messageService.showErrorMessage('errorOnGetInterdependences');
              }
            );
          };
          ApplicableConfigurationFormComponent.prototype.createInterdependence = function() {
            this.currentEvolutionInterdependences = undefined;
            this.bireVariantVersionSelected = this.bireVariantVersionDTOId;
            this.evolutionInterdependencesDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Create;
            this.showEvolutionInterdependencesDialog = true;
          };
          ApplicableConfigurationFormComponent.prototype.openInterdependence = function() {
            var _this = this;
            if (this.evolutionInterdependencesTableDataSource.dataSelectionCount === 1) {
              var interdependenceCode = this.interdependences.filter(function(result) {
                return (
                  result.label === _this.evolutionInterdependencesTableDataSource.dataSelection[0].interdependenceCode
                );
              })[0].value;
              var tempCurrentEvolutionInterdependences = {
                bireEvolutionEvolutionDTO: {
                  evolutionNumber: this.evolutionInterdependencesTableDataSource.dataSelection[0].evolutionNumber,
                  evolutionRevisionNumber: this.evolutionInterdependencesTableDataSource.dataSelection[0]
                    .evolutionRevisionNumber,
                  evoEvolutionNumber: this.evolutionInterdependencesTableDataSource.dataSelection[0].evoEvolutionNumber,
                  evoEvolutionRevisionNumber: this.evolutionInterdependencesTableDataSource.dataSelection[0]
                    .evoEvolutionRevisionNumber,
                  interdependenceCode: interdependenceCode ? interdependenceCode : '',
                  familyCode: this.evolutionInterdependencesTableDataSource.dataSelection[0].familyCode,
                  structureType: this.evolutionInterdependencesTableDataSource.dataSelection[0].structureType,
                  variantCode: this.evolutionInterdependencesTableDataSource.dataSelection[0].variantCode,
                  statusState: this.evolutionInterdependencesTableDataSource.dataSelection[0].statusState,
                  statusUser: this.evolutionInterdependencesTableDataSource.dataSelection[0].statusUser,
                  statusDate: this.evolutionInterdependencesTableDataSource.dataSelection[0].statusDate
                },
                adInitialText: this.evolutionInterdependencesTableDataSource.dataSelection[0].adInitialText,
                adDependentText: this.evolutionInterdependencesTableDataSource.dataSelection[0].adDependentText,
                sbInitialText: this.evolutionInterdependencesTableDataSource.dataSelection[0].sbInitialText,
                sbDependentText: this.evolutionInterdependencesTableDataSource.dataSelection[0].sbDependentText,
                modInitialText: this.evolutionInterdependencesTableDataSource.dataSelection[0].modInitialText,
                modDependentText: this.evolutionInterdependencesTableDataSource.dataSelection[0].modInitialText
              };
              this.currentEvolutionInterdependences = tempCurrentEvolutionInterdependences;
              this.currentEvolutionInterdependencesIndex = undefined;
              this.evolutionInterdependencesDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
              this.showEvolutionInterdependencesDialog = true;
            }
          };
          ApplicableConfigurationFormComponent.prototype.deleteInterdependence = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.deleteConfirmationMsg',
              accept: function() {
                _this.evolutionInterdependencesTableDataSource.dataSelection.forEach(function(interdependence) {
                  if (
                    !!interdependence.bireEvolutionEvolutionDTO &&
                    !!interdependence.bireEvolutionEvolutionDTO.interdependenceCode &&
                    !!interdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber &&
                    !!interdependence.bireEvolutionEvolutionDTO.evolutionNumber &&
                    !!interdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber &&
                    !!interdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber &&
                    !!_this.applicableConfiguration.familyCode &&
                    !!_this.applicableConfiguration.structureType &&
                    !!_this.applicableConfiguration.variantCode
                  ) {
                    var bireEvolutionEvolutionDTOId = {
                      interdependenceCode: interdependence.bireEvolutionEvolutionDTO.interdependenceCode,
                      evolutionRevisionNumber: interdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber,
                      evolutionNumber: interdependence.bireEvolutionEvolutionDTO.evolutionNumber,
                      evoEvolutionNumber: interdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber,
                      evoEvolutionRevisionNumber: interdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber,
                      familyCode: _this.applicableConfiguration.familyCode,
                      variantCode: _this.applicableConfiguration.variantCode,
                      structureType: _this.applicableConfiguration.structureType
                    };
                    var interdependenceAddedWithoutSelection = _this.interdependenceAddedList.filter(function(
                      interdependenceAdded
                    ) {
                      return (
                        !!interdependence.bireEvolutionEvolutionDTO &&
                        !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__[
                          'DTOUtils'
                        ].equalsBireEvolutionEvolutionDTO(
                          interdependence.bireEvolutionEvolutionDTO,
                          interdependenceAdded
                        )
                      );
                    });
                    if (_this.interdependenceAddedList.length !== interdependenceAddedWithoutSelection.length) {
                      _this.interdependenceAddedList = interdependenceAddedWithoutSelection;
                    } else {
                      _this.interdepenedenceRemoved.push(bireEvolutionEvolutionDTOId);
                    }
                  } else {
                    _super.prototype.throwUnboundLocalError.call(
                      _this,
                      'deleteInterdependence',
                      'interdependence && this.applicableConfiguration'
                    );
                  }
                });
                _this.evolutionInterdependencesTableDataSource.setData(
                  _this.evolutionInterdependencesTableDataSource.dataSrc.filter(function(evolution) {
                    return !_this.evolutionInterdependencesTableDataSource.dataSelection.some(function(
                      selectedEvolutionInterdependence
                    ) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__[
                        'DTOUtils'
                      ].equalsBireEvolutionEvolutionDTO(
                        evolution.bireEvolutionEvolutionDTO,
                        selectedEvolutionInterdependence.bireEvolutionEvolutionDTO
                      );
                    });
                  })
                );
                _this.evolutionInterdependencesTableDataSource.update();
                _this.evolutionInterdependencesTableDataSource.dataSelection = [];
              }
            });
          };
          ApplicableConfigurationFormComponent.prototype.onAddEvolutionInterdependences = function(
            evolutionInterdependence
          ) {
            var _this = this;
            if (!!evolutionInterdependence.bireEvolutionEvolutionDTO) {
              var isAdded = this.evolutionInterdependencesTableDataSource.dataSrc.some(function(evolution) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__[
                  'DTOUtils'
                ].equalsBireEvolutionEvolutionDTO(
                  evolutionInterdependence.bireEvolutionEvolutionDTO,
                  evolution.bireEvolutionEvolutionDTO
                );
              });
              if (isAdded) {
                this.messageService.showWarningMessage(this.getTranslateKey('warningOnEvolutionInterdependenceExists'));
              } else {
                this.applicableConfigurationFormService
                  .findSbAdModForBireEvolutionEvolutionDto(evolutionInterdependence.bireEvolutionEvolutionDTO)
                  .subscribe(function(result) {
                    // Match the family code, before adding entry in table
                    if (
                      !!result.bireEvolutionEvolutionDTO &&
                      !!_this.bireVariantVersionSelected &&
                      result.bireEvolutionEvolutionDTO.familyCode === _this.bireVariantVersionSelected.familyCode
                    ) {
                      var tempRow = _this.createApplicabilityRow(result);
                      if (!!tempRow) {
                        _this.evolutionInterdependencesTableDataSource.addData([tempRow]);
                      } else {
                        _super.prototype.throwUnboundLocalError.call(
                          _this,
                          'onAddEvolutionInterdependences',
                          'tempRow'
                        );
                      }
                      _this.interdependenceAddedList.push(result.bireEvolutionEvolutionDTO);
                    }
                  });
              }
            }
            this.evolutionInterdependencesTableDataSource.dataSelection = [];
          };
          // Tab Disassembly
          ApplicableConfigurationFormComponent.prototype.createDisassembly = function() {
            this.currentDisassemblyGroup = undefined;
            this.bireVariantVersionSelected = this.bireVariantVersionDTOId;
            if (
              this.applicableConfiguration.familyCode &&
              this.applicableConfiguration.variantCode &&
              this.applicableConfiguration.variantName
            ) {
              this.disassemblyGroupDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Create;
              this.showDisassemblyGroupDialog = true;
            } else {
              this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
            }
          };
          ApplicableConfigurationFormComponent.prototype.openDisassembly = function() {
            if (this.disassemblyGroupTableDataSource.dataSelectionCount === 1) {
              this.currentDisassemblyGroup = this.disassemblyGroupTableDataSource.dataSelection[0];
              this.currentDisassemblyGroupIndex = undefined;
              this.disassemblyGroupDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
              this.showDisassemblyGroupDialog = true;
            }
          };
          ApplicableConfigurationFormComponent.prototype.deleteDisassembly = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.deleteConfirmationMsg',
              accept: function() {
                _this.disassemblyGroupTableDataSource.dataSelection.forEach(function(disassembly) {
                  if (
                    !!disassembly.unmountCode &&
                    !!_this.applicableConfiguration.familyCode &&
                    !!_this.applicableConfiguration.variantCode &&
                    !!_this.applicableConfiguration.structureType
                  ) {
                    var bireUnmountAssemblyDTOId = {
                      unmountCode: disassembly.unmountCode,
                      familyCode: _this.applicableConfiguration.familyCode,
                      variantCode: _this.applicableConfiguration.variantCode,
                      structureType: _this.applicableConfiguration.structureType
                    };
                    var disassemblyAddedWithoutSelection = _this.disassemblyGroupAdded.filter(function(
                      disassemblyGroupAdded
                    ) {
                      return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__[
                        'DTOUtils'
                      ].equalsBireUnmountAssemblyDTO(disassembly, disassemblyGroupAdded);
                    });
                    if (_this.disassemblyGroupAdded.length !== disassemblyAddedWithoutSelection.length) {
                      _this.disassemblyGroupAdded = disassemblyAddedWithoutSelection;
                    } else {
                      _this.disassemblyGroupRemoved.push(bireUnmountAssemblyDTOId);
                    }
                  } else {
                    _super.prototype.throwUnboundLocalError.call(
                      _this,
                      'deleteDisassembly',
                      'disassembly && this.applicableConfiguration'
                    );
                  }
                });
                _this.disassemblyGroupTableDataSource.setData(
                  _this.disassemblyGroupTableDataSource.dataSrc.filter(function(disassembly) {
                    return !_this.disassemblyGroupTableDataSource.dataSelection.some(function(selecteddisassembly) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__[
                        'DTOUtils'
                      ].equalsBireUnmountAssemblyDTO(disassembly, selecteddisassembly);
                    });
                  })
                );
                _this.disassemblyGroupTableDataSource.update();
                _this.disassemblyGroupTableDataSource.dataSelection = [];
              }
            });
          };
          ApplicableConfigurationFormComponent.prototype.onAddDisassembly = function(disassemblyGroup) {
            if (!!disassemblyGroup) {
              disassemblyGroup.familyCode = this.applicableConfiguration.familyCode;
              disassemblyGroup.structureType = this.applicableConfiguration.structureType;
              disassemblyGroup.variantCode = this.applicableConfiguration.variantCode;
              var isAdded = this.disassemblyGroupTableDataSource.dataSrc.some(function(disassembly) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__['DTOUtils'].equalsBireUnmountAssemblyDTO(
                  disassemblyGroup,
                  disassembly
                );
              });
              if (isAdded) {
                this.messageService.showWarningMessage(this.getTranslateKey('warningOnDisassemblyGroupExists'));
              } else {
                this.disassemblyGroupTableDataSource.addData([disassemblyGroup]);
                this.disassemblyGroupAdded.push(disassemblyGroup);
              }
            }
            this.disassemblyGroupTableDataSource.dataSelection = [];
          };
          // Tab Removal order
          ApplicableConfigurationFormComponent.prototype.createRemovalOrder = function() {
            var _this = this;
            this.currentRemovalOrder = undefined;
            this.bireVariantVersionSelected = this.bireVariantVersionDTOId;
            if (
              this.applicableConfiguration.familyCode &&
              this.applicableConfiguration.variantCode &&
              this.applicableConfiguration.variantName
            ) {
              this.removalOrderDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Create;
              this.showRemovalOrderDialog = true;
              // To populate values in dropdown
              this.disassemblyList = [];
              this.disassemblyGroupTableDataSource.dataSrc.forEach(function(item) {
                if (!!item.unmountCode) {
                  var disassembly = {
                    label: item.unmountCode,
                    value: item.unmountCode
                  };
                  _this.disassemblyList.push(disassembly);
                } else {
                  _super.prototype.throwUnboundLocalError.call(_this, 'createRemovalOrder', 'item.unmountCode');
                }
              });
            } else {
              this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
            }
          };
          ApplicableConfigurationFormComponent.prototype.openRemovalOrder = function() {
            if (this.removalOrderTableDataSource.dataSelectionCount === 1) {
              this.currentRemovalOrder = this.removalOrderTableDataSource.dataSelection[0];
              this.currentRemovalOrderIndex = undefined;
              this.removalOrderDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
              this.showRemovalOrderDialog = true;
            }
          };
          ApplicableConfigurationFormComponent.prototype.deleteRemovalOrder = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.deleteConfirmationMsg',
              accept: function() {
                _this.removalOrderTableDataSource.dataSelection.forEach(function(removalOrder) {
                  if (
                    !!removalOrder.unmountCode &&
                    !!removalOrder.unmUnmountCode &&
                    !!_this.applicableConfiguration.familyCode &&
                    !!_this.applicableConfiguration.variantCode &&
                    !!_this.applicableConfiguration.structureType
                  ) {
                    var bireUnmountOrderDTOId = {
                      unmountCode: removalOrder.unmountCode,
                      familyCode: _this.applicableConfiguration.familyCode,
                      variantCode: _this.applicableConfiguration.variantCode,
                      structureType: _this.applicableConfiguration.structureType,
                      unmUnmountCode: removalOrder.unmUnmountCode,
                      unmFamilyCode: _this.applicableConfiguration.familyCode,
                      unmVariantCode: _this.applicableConfiguration.variantCode,
                      unmStructureType: _this.applicableConfiguration.structureType
                    };
                    var removalOrderAddedWithoutSelection = _this.removalOrderAdded.filter(function(removalOrderAdded) {
                      return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__[
                        'DTOUtils'
                      ].equalsBireUnmountAssemblyDTO(removalOrder, removalOrderAdded);
                    });
                    if (_this.removalOrderAdded.length !== removalOrderAddedWithoutSelection.length) {
                      _this.removalOrderAdded = removalOrderAddedWithoutSelection;
                    } else {
                      _this.removalOrderRemoved.push(bireUnmountOrderDTOId);
                    }
                  } else {
                    _super.prototype.throwUnboundLocalError.call(
                      _this,
                      'deleteRemovalOrder',
                      'removalOrder && this.applicableConfiguration'
                    );
                  }
                });
                _this.removalOrderTableDataSource.setData(
                  _this.removalOrderTableDataSource.dataSrc.filter(function(removalOrder) {
                    return !_this.removalOrderTableDataSource.dataSelection.some(function(selectedRemoval) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__[
                        'DTOUtils'
                      ].equalsBireUnmountOrderDTO(removalOrder, selectedRemoval);
                    });
                  })
                );
                _this.removalOrderTableDataSource.update();
                _this.removalOrderTableDataSource.dataSelection = [];
              }
            });
          };
          ApplicableConfigurationFormComponent.prototype.onAddRemovalOrder = function(removalOrder) {
            if (!!removalOrder) {
              var isAdded = this.removalOrderTableDataSource.dataSrc.some(function(order) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__['DTOUtils'].equalsBireUnmountOrderDTO(
                  removalOrder,
                  order
                );
              });
              if (isAdded) {
                this.messageService.showWarningMessage(this.getTranslateKey('warningOnRemovalOrderExists'));
              } else {
                this.removalOrderTableDataSource.addData([removalOrder]);
                this.removalOrderAdded.push(removalOrder);
              }
            }
            this.disassemblyGroupTableDataSource.dataSelection = [];
          };
          // TAB OEM PARTNER OPERATIONS
          ApplicableConfigurationFormComponent.prototype.createOEMPartner = function() {
            this.currentOEMPartnerMax = undefined;
            this.currentOEMPartnerMin = undefined;
            if (
              this.applicableConfiguration.familyCode &&
              this.applicableConfiguration.variantCode &&
              this.applicableConfiguration.variantName
            ) {
              this.oemPartnerOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Create;
              this.showOEMPartnerDialog = true;
            } else {
              this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
            }
          };
          // ADD OEM
          ApplicableConfigurationFormComponent.prototype.onAddOEMPartner = function(result) {
            result.familyCode = this.applicableConfiguration.familyCode;
            result.structureType = this.applicableConfiguration.structureType;
            result.variantCode = this.applicableConfiguration.variantCode;
            this.oemPartnersList.forEach(function(ev) {
              if (ev.value === result.partnerCode) {
                result.partnerCode = ev.label;
              }
            });
            this.getLabelValueForOEMPartner('label', result.partnerCode, function(data) {
              result.partnerCode = data;
            });
            if (
              this.oemPartnerOpenMode ===
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Write
            ) {
              for (var i = 0; i < this.oemPartnersTableDataSource.dataCount; i++) {
                if (
                  _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__['DTOUtils'].equalsBirePartnerDTO(
                    this.oemPartnersTableDataSource.dataSrc[i],
                    this.oemPartnersTableDataSource.dataSelection[0]
                  )
                ) {
                  this.oemPartnersTableDataSource.replaceData(this.oemPartnersTableDataSource.dataSelection[0], result);
                }
              }
              this.oemPartnersTableDataSource.setData(this.oemPartnersTableDataSource.dataSrc);
              this.oemPartnersUpdated.push(result);
            } else {
              this.oemPartnersAdded.push(result);
              this.oemPartnersTableDataSource.addData([result]);
            }
            this.oemPartnersTableDataSource.dataSelection = [];
            this.oemPartnersTableDataSource.update();
          };
          // Fetching label value from OEM Partner
          ApplicableConfigurationFormComponent.prototype.getLabelValueForOEMPartner = function(oper, data, callback) {
            if (oper === 'label') {
              this.oemPartnersList.forEach(function(ev) {
                if (ev.value === data) {
                  callback(ev.label);
                }
              });
            } else {
              this.oemPartnersList.forEach(function(ev) {
                if (ev.label === data) {
                  callback(ev.value);
                }
              });
            }
          };
          // EDIT OEM
          ApplicableConfigurationFormComponent.prototype.editSelectedOEMPartner = function() {
            this.generateOEMPartnerData();
            this.oemPartnerOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Write;
          };
          // VIEW OEM
          ApplicableConfigurationFormComponent.prototype.openSelectedOEMPartner = function() {
            this.generateOEMPartnerData();
            this.oemPartnerOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
          };
          ApplicableConfigurationFormComponent.prototype.generateOEMPartnerData = function() {
            var _this = this;
            if (this.oemPartnersTableDataSource.dataSelectionCount > 1) {
              return;
            }
            var SUBJECT_CONST = 2;
            var SHEET_CONST = 3;
            var MARKS_CONST = 4;
            var partnerCode = '';
            this.getLabelValueForOEMPartner(
              'value',
              this.oemPartnersTableDataSource.dataSelection[0].partnerCode,
              function(data) {
                partnerCode = data;
                var rangeMax = _this.oemPartnersTableDataSource.dataSelection[0].itemRangeMax;
                var rangeMin = _this.oemPartnersTableDataSource.dataSelection[0].itemRangeMin;
                if (!!rangeMax && !!rangeMin) {
                  _this.currentOEMPartnerMax = {
                    familyCode: _this.oemPartnersTableDataSource.dataSelection[0].familyCode,
                    variantCode: _this.oemPartnersTableDataSource.dataSelection[0].variantCode,
                    chapter: rangeMax.split('-')[0],
                    section: rangeMax.split('-')[1],
                    subject: rangeMax.split('-')[SUBJECT_CONST],
                    sheet: rangeMax.split('-')[SHEET_CONST],
                    marks: rangeMax.split('-')[MARKS_CONST],
                    structureType: partnerCode
                  };
                  _this.currentOEMPartnerMin = {
                    familyCode: _this.oemPartnersTableDataSource.dataSelection[0].familyCode,
                    variantCode: _this.oemPartnersTableDataSource.dataSelection[0].variantCode,
                    chapter: rangeMin.split('-')[0],
                    section: rangeMin.split('-')[1],
                    subject: rangeMin.split('-')[SUBJECT_CONST],
                    sheet: rangeMin.split('-')[SHEET_CONST],
                    marks: rangeMin.split('-')[MARKS_CONST],
                    structureType: partnerCode
                  };
                  _this.showOEMPartnerDialog = true;
                } else {
                  _super.prototype.throwUnboundLocalError.call(_this, 'generateOEMPartnerData', 'rangeMax && rangeMin');
                }
              }
            );
          };
          // DELETE OEM
          ApplicableConfigurationFormComponent.prototype.deleteSelectedOEMPartner = function() {
            var _this = this;
            if (this.oemPartnersTableDataSource.dataSelectionCount > 0) {
              this.confirmationService.confirmDelete({
                messageKey: 'global.deleteConfirmationMsg',
                accept: function() {
                  _this.oemPartnersTableDataSource.dataSelection.forEach(function(disassembly) {
                    if (
                      !!_this.applicableConfiguration.familyCode &&
                      !!disassembly.itemRangeMin &&
                      !!disassembly.partnerCode &&
                      !!disassembly.structureType &&
                      !!disassembly.variantCode
                    ) {
                      var birePartnerDTO = {
                        familyCode: _this.applicableConfiguration.familyCode,
                        itemRangeMin: disassembly.itemRangeMin,
                        partnerCode: disassembly.partnerCode,
                        structureType: disassembly.structureType,
                        variantCode: disassembly.variantCode
                      };
                      var birePartnerAddedWithoutSelection = _this.oemPartnersAdded.filter(function(
                        disassemblyGroupAdded
                      ) {
                        return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__['DTOUtils'].equalsBirePartnerDTO(
                          disassembly,
                          disassemblyGroupAdded
                        );
                      });
                      if (_this.oemPartnersAdded.length !== birePartnerAddedWithoutSelection.length) {
                        _this.oemPartnersAdded = birePartnerAddedWithoutSelection;
                      } else {
                        _this.oemPartnersRemoved.push(birePartnerDTO);
                      }
                    } else {
                      _super.prototype.throwUnboundLocalError.call(
                        _this,
                        'deleteSelectedOEMPartner',
                        'disassembly && this.applicableConfiguration'
                      );
                    }
                  });
                  _this.oemPartnersTableDataSource.setData(
                    _this.oemPartnersTableDataSource.dataSrc.filter(function(removalPartner) {
                      return !_this.oemPartnersTableDataSource.dataSelection.some(function(selectedRemoval) {
                        return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__['DTOUtils'].equalsBirePartnerDTO(
                          removalPartner,
                          selectedRemoval
                        );
                      });
                    })
                  );
                  _this.oemPartnersTableDataSource.update();
                  _this.oemPartnersTableDataSource.dataSelection = [];
                }
              });
            }
          };
          ApplicableConfigurationFormComponent.prototype.loadCurrency = function() {
            var _this = this;
            this.applicableConfigurationFormService.getLocalCurrency().subscribe(function(result) {
              _this.currency = result;
            });
          };
          // Associated Qualification OPERATIONS
          ApplicableConfigurationFormComponent.prototype.createAssociatedQual = function() {
            if (
              this.applicableConfiguration.familyCode &&
              this.applicableConfiguration.variantCode &&
              this.applicableConfiguration.variantName
            ) {
              this.associatedQualificationOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Create;
              this.showAssociatedQualificationDialog = true;
            } else {
              this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
            }
          };
          ApplicableConfigurationFormComponent.prototype.onAddAssociatedQualification = function(results) {
            var isFound = false;
            var precision = 2;
            this.associatedQualificationTableDataSource.dataSrc.forEach(function(result) {
              if (result.qualificationCode === results.qualificationCode) {
                isFound = true;
              }
            });
            if (!isFound) {
              results.familyCode = this.applicableConfiguration.familyCode;
              results.structureType = this.applicableConfiguration.structureType;
              results.variantCode = this.applicableConfiguration.variantCode;
              // tslint:disable-next-line:no-string-literal
              results['averageHourRate'] = results['averageHourRate']
                ? // tslint:disable-next-line:no-string-literal
                  parseInt(results['averageHourRate'], 10).toFixed(precision) + ' ' + this.currency
                : // tslint:disable-next-line:no-string-literal
                  results['averageHourRate'];
              this.associatedQualificationTableDataSource.setData(this.associatedQualificationTableDataSource.dataSrc);
              this.associatedQualificationTableDataSource.update();
              this.associatedQualificationTableDataSource.addData([results]);
              this.associatedQualificationAdded.push(results);
            }
          };
          // EDIT ASSOCIATED QUALIFICATION
          // public editAssociatedQual() {
          //   this.associatedQualificationOpenMode = ComponentOpenMode.Write;
          //   this.showAssociatedQualificationDialog = true;
          // }
          ApplicableConfigurationFormComponent.prototype.deleteSelectedAssociatedQual = function() {
            var _this = this;
            if (this.associatedQualificationTableDataSource.dataSelectionCount > 0) {
              this.confirmationService.confirmDelete({
                messageKey: 'global.deleteConfirmationMsg',
                accept: function() {
                  _this.associatedQualificationTableDataSource.dataSelection.forEach(function(disassembly) {
                    if (
                      !!_this.applicableConfiguration.familyCode &&
                      !!_this.applicableConfiguration.structureType &&
                      !!_this.applicableConfiguration.variantCode &&
                      !!disassembly.qualificationCode
                    ) {
                      var bireQualifVariantDTOId = {
                        familyCode: _this.applicableConfiguration.familyCode,
                        structureType: _this.applicableConfiguration.structureType,
                        variantCode: _this.applicableConfiguration.variantCode,
                        qualificationCode: disassembly.qualificationCode
                      };
                      var assoQualificationAddedWithoutSelection = _this.associatedQualificationAdded.filter(function(
                        assoQualGroupAdded
                      ) {
                        return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__[
                          'DTOUtils'
                        ].equalsBireQualificationDTO(disassembly, assoQualGroupAdded);
                      });
                      if (_this.associatedQualificationAdded.length !== assoQualificationAddedWithoutSelection.length) {
                        _this.associatedQualificationAdded = assoQualificationAddedWithoutSelection;
                      } else {
                        _this.associatedQualificationRemoved.push(bireQualifVariantDTOId);
                      }
                    } else {
                      _super.prototype.throwUnboundLocalError.call(
                        _this,
                        'deleteSelectedAssociationQual',
                        'this.applicableConfiguration && disassembly'
                      );
                    }
                  });
                  _this.associatedQualificationTableDataSource.setData(
                    _this.associatedQualificationTableDataSource.dataSrc.filter(function(removalOrder) {
                      return !_this.associatedQualificationTableDataSource.dataSelection.some(function(
                        selectedRemoval
                      ) {
                        return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__[
                          'DTOUtils'
                        ].equalsBireQualificationDTO(removalOrder, selectedRemoval);
                      });
                    })
                  );
                  _this.associatedQualificationTableDataSource.update();
                  _this.associatedQualificationTableDataSource.dataSelection = [];
                }
              });
            }
          };
          // VIEW ASSOCIATED QUALIFICATION
          ApplicableConfigurationFormComponent.prototype.openAssociatedQual = function() {
            this.associatedQualificationOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
            this.showAssociatedQualificationDialog = true;
          };
          // Document Matching Operations
          ApplicableConfigurationFormComponent.prototype.openDocumentMatchingModel = function() {
            if (
              this.applicableConfiguration.familyCode &&
              this.applicableConfiguration.variantCode &&
              this.applicableConfiguration.variantName
            ) {
              this.currentConfigurationDoc = undefined;
              this.documentMatchingDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Create;
              this.showDocumentMatchingDialog = true;
            } else {
              this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
            }
          };
          // Add Config Doc
          ApplicableConfigurationFormComponent.prototype.onAddDocumentParmas = function(event) {
            var _this = this;
            var isFound = false;
            this.configurationDocumentsTableDataSource.dataSrc.forEach(function(removalOrder, index) {
              if (
                _this.documentMatchingDialogOpenMode ===
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Write
              ) {
                if (
                  _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__['DTOUtils'].equalsConfigDocumentsTableDTO(
                    removalOrder,
                    _this.configurationDocumentsTableDataSource.dataSelection[0]
                  )
                ) {
                  _this.configurationDocumentsTableDataSource.replaceData(
                    _this.configurationDocumentsTableDataSource.dataSelection[0],
                    event
                  );
                  _this.configurationDocumentsUpdatedList.push(event);
                }
              } else if (
                _this.documentMatchingDialogOpenMode ===
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Create
              ) {
                if (
                  _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__['DTOUtils'].equalsConfigDocumentsTableDTO(
                    removalOrder,
                    event
                  )
                ) {
                  isFound = true;
                }
              }
            });
            if (
              this.documentMatchingDialogOpenMode ===
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Create
            ) {
              if (!isFound) {
                this.configurationDocumentsTableDataSource.dataSrc.push(event);
                this.configurationDocumentsAddedList.push(event);
              }
            }
            this.configurationDocumentsTableDataSource.dataSrc.forEach(function(row) {
              row.approvalDateStr = _this.dateService.dateWithHourToString(row.approvalDate);
            });
            this.configurationDocumentsTableDataSource.setData(this.configurationDocumentsTableDataSource.dataSrc);
            this.configurationDocumentsTableDataSource.update();
            this.configurationDocumentsTableDataSource.dataSelection = [];
          };
          // View Config Doc
          ApplicableConfigurationFormComponent.prototype.openConfigurationDocuments = function() {
            this.currentConfigurationDoc = this.configurationDocumentsTableDataSource.dataSelection;
            this.documentMatchingDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
            this.showDocumentMatchingDialog = true;
          };
          // Delete Config Docs
          ApplicableConfigurationFormComponent.prototype.deleteConfigurationDocuments = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.deleteConfirmationMsg',
              accept: function() {
                _this.configurationDocumentsTableDataSource.dataSelection.forEach(function(disassembly) {
                  var configurationDocumentDTO = {
                    familyCode: _this.applicableConfiguration.familyCode,
                    structureType: _this.applicableConfiguration.structureType,
                    approvalDate: disassembly.approvalDate,
                    number: disassembly.number,
                    revisionNumber: disassembly.revisionNumber,
                    type: disassembly.type,
                    variantCode: _this.applicableConfiguration.variantCode,
                    applicabilityCode: disassembly.applicabilityCode,
                    documentType: disassembly.documentType
                  };
                  var configDocAddedWithoutSelection = _this.configurationDocumentsAddedList.filter(function(
                    assoQualGroupAdded
                  ) {
                    return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__[
                      'DTOUtils'
                    ].equalsConfigDocumentsTableDTO(disassembly, assoQualGroupAdded);
                  });
                  if (_this.configurationDocumentsAddedList.length !== configDocAddedWithoutSelection.length) {
                    _this.configurationDocumentsAddedList = configDocAddedWithoutSelection;
                  } else {
                    _this.configurationDocumentsRemovedList.push(configurationDocumentDTO);
                  }
                });
                _this.configurationDocumentsTableDataSource.setData(
                  _this.configurationDocumentsTableDataSource.dataSrc.filter(function(removalOrder) {
                    return !_this.configurationDocumentsTableDataSource.dataSelection.some(function(selectedRemoval) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_27__[
                        'DTOUtils'
                      ].equalsConfigDocumentsTableDTO(removalOrder, selectedRemoval);
                    });
                  })
                );
                _this.configurationDocumentsTableDataSource.update();
                _this.configurationDocumentsTableDataSource.dataSelection = [];
              }
            });
          };
          // Edit Config Docs
          ApplicableConfigurationFormComponent.prototype.editConfigurationDocument = function() {
            this.currentConfigurationDoc = this.configurationDocumentsTableDataSource.dataSelection;
            this.documentMatchingDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Write;
            this.showDocumentMatchingDialog = true;
          };
          ApplicableConfigurationFormComponent.prototype.cancelApplicableConfiguration = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
            );
            this.reloadApplicableConfiguration();
            this.clearItemStructureGlobalFilter();
          };
          ApplicableConfigurationFormComponent.prototype.editApplicableConfiguration = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Write
            );
          };
          ApplicableConfigurationFormComponent.prototype.reloadApplicableConfiguration = function() {
            this.oemPartnersTableDataSource.dataSelection = [];
            this.associatedQualificationTableDataSource.dataSelection = [];
            this.configurationDocumentsTableDataSource.dataSelection = [];
            this.evolutionInterdependencesTableDataSource.dataSelection = [];
            this.disassemblyGroupTableDataSource.dataSelection = [];
            this.removalOrderTableDataSource.dataSelection = [];
            this.loadApplicableConfiguration();
            this.loadApplicableForm();
            this.loadStructureTypes();
            this.loadOEMPartnerList();
            if (!!this.applicableConfiguration.statusState) {
              this.loadStatus(this.applicableConfiguration.statusState);
              this.loadUserWorkflow(this.applicableConfiguration.statusState);
            }
          };
          ApplicableConfigurationFormComponent.prototype.validateForm = function() {
            if (
              !this.applicableConfiguration.variantCode ||
              !this.applicableConfiguration.variantName ||
              !this.applicableConfiguration.familyCode
            ) {
              return false;
            } else {
              return true;
            }
          };
          ApplicableConfigurationFormComponent.prototype.saveApplicableConfiguration = function() {
            var _this = this;
            if (!this.validateForm()) {
              this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
              return;
            }
            this.bireVariantAttributeDTO = this.dynamicAttributesService.toBireVariantAttribute(
              this.applicableConfiguration.familyCode,
              this.applicableConfiguration.variantCode,
              this.applicableConfiguration.structureType,
              this.dynamicAttributesForAppConfig
            );
            var bireVariantVersion = {
              familyCode: this.applicableConfiguration.familyCode,
              statusDate: this.applicableConfiguration.statusDate,
              statusState: this.applicableConfiguration.statusState,
              statusUser: this.applicableConfiguration.statusUser,
              structureType: this.applicableConfiguration.structureType,
              variantCode: this.applicableConfiguration.variantCode,
              variantName: this.applicableConfiguration.variantName,
              variantRevisionDate: this.applicableConfiguration.variantRevisionDate,
              variantRevisionNumber: this.applicableConfiguration.variantRevisionNumber
            };
            var saveApplicationConfigurationDataInput = {
              bireInterdependenceAddedList: this.interdependenceAddedList,
              bireInterdependenceDeletedList: this.interdepenedenceRemoved,
              bireInterdependenceUpdatedList: [],
              bireVariantVersionDTO: bireVariantVersion,
              birePartnerDTOAddedList: this.oemPartnersAdded,
              birePartnerDTOUpdatedList: this.oemPartnersUpdated,
              birePartnerDTODeletedList: this.oemPartnersRemoved,
              bireQualificationDTOAddedList: this.associatedQualificationAdded,
              bireQualifVariantDTODeletedList: this.associatedQualificationRemoved,
              bireUnmountAssemblyDTOAddedList: this.disassemblyGroupAdded.map(function(disassemblyGroup) {
                return _this.fillDisassemblyGroup(disassemblyGroup, _this.applicableConfiguration);
              }),
              bireUnmountAssemblyDTOIdDeletedList: this.disassemblyGroupRemoved,
              bireUnmountOrderDTOAddedList: this.removalOrderAdded.map(function(removalOrder) {
                return _this.fillRemovalOrder(removalOrder, _this.applicableConfiguration);
              }),
              bireUnmountOrderDeletedList: this.removalOrderRemoved,
              configurationDocumentsAddedList: this.configurationDocumentsAddedList,
              configurationDocumentsRemovedList: this.configurationDocumentsRemovedList,
              configurationDocumentsUpdatedList: this.configurationDocumentsUpdatedList,
              bireVariantAttribute: this.bireVariantAttributeDTO,
              bireRatingDTOAddedList: this.bireRatingDTOAddedList,
              bireRatingDTORemovedList: this.bireRatingDTORemovedList
            };
            this.showSaveSpinner = true;
            this.applicableConfigurationFormService
              .saveApplicationConfigurationData(saveApplicationConfigurationDataInput)
              .subscribe(
                function(result) {
                  _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSave'));
                  var bireVariantDTO = {
                    familyCode: _this.applicableConfiguration.familyCode,
                    familyFunction: _this.applicableConfiguration.familyFunction,
                    familyName: _this.applicableConfiguration.familyName,
                    structureType: _this.applicableConfiguration.structureType,
                    statusDate: new Date(),
                    statusState: _this.applicableConfiguration.statusState,
                    statusUser: _this.applicableConfiguration.statusUser,
                    variantCode: _this.applicableConfiguration.variantCode,
                    variantName: _this.applicableConfiguration.variantName,
                    variantRevisionDate: _this.applicableConfiguration.variantRevisionDate,
                    variantRevisionNumber: _this.applicableConfiguration.variantRevisionNumber
                  };
                  _this.componentData.objectId = _this.serializationService.serialize(bireVariantDTO);
                  if (!!bireVariantVersion.variantRevisionNumber) {
                    _this.variantRevisionNumberClone = bireVariantVersion.variantRevisionNumber;
                  }
                  if (!!bireVariantVersion.variantRevisionDate) {
                    _this.variantRevisionDateClone = bireVariantVersion.variantRevisionDate;
                  }
                  _this.clearDTOList();
                  _this.showSaveSpinner = false;
                  _this.updateOpenMode(
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
                  );
                  _this.reloadApplicableConfiguration();
                },
                function(error) {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSave'));
                  _this.showSaveSpinner = false;
                }
              );
            if (
              bireVariantVersion.statusState ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                  .FUNC_OBJECT_STATUS_APPROVED_KEY &&
              this.sessionService.isSpecificMHIAEL
            ) {
              this.applicableConfigurationFormMhiaelService
                .updateInMassIDPSubObjectStatus(bireVariantVersion)
                .subscribe();
              this.applicableConfigurationFormMhiaelService.updateIPCCsv(bireVariantVersion).subscribe();
            }
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Write
            );
            this.componentDesignation = this.applicableConfiguration.familyCode
              ? this.applicableConfiguration.familyCode +
                '-' +
                this.applicableConfiguration.variantCode +
                '-\n        ' +
                this.applicableConfiguration.variantName
              : 'tab.createMode';
            this.displayComponentContext(this.componentDesignation, this.isCreateOpenMode);
          };
          // Clearing DTO
          ApplicableConfigurationFormComponent.prototype.clearDTOList = function() {
            this.oemPartnersAdded = [];
            this.oemPartnersUpdated = [];
            this.oemPartnersRemoved = [];
            this.associatedQualificationAdded = [];
            this.associatedQualificationRemoved = [];
            this.removalOrderRemoved = [];
            this.removalOrderAdded = [];
            this.disassemblyGroupAdded = [];
            this.disassemblyGroupRemoved = [];
            this.configurationDocumentsAddedList = [];
            this.configurationDocumentsRemovedList = [];
            this.configurationDocumentsUpdatedList = [];
            this.bireRatingDTOAddedList = [];
            this.bireRatingDTORemovedList = [];
          };
          ApplicableConfigurationFormComponent.prototype.fillDisassemblyGroup = function(
            disassemblyGroup,
            applicableConfiguration
          ) {
            disassemblyGroup.familyCode = applicableConfiguration.familyCode;
            disassemblyGroup.structureType = applicableConfiguration.structureType;
            disassemblyGroup.variantCode = applicableConfiguration.variantCode;
            return disassemblyGroup;
          };
          ApplicableConfigurationFormComponent.prototype.fillRemovalOrder = function(
            removalOrder,
            applicableConfiguration
          ) {
            removalOrder.familyCode = applicableConfiguration.familyCode;
            removalOrder.structureType = applicableConfiguration.structureType;
            removalOrder.variantCode = applicableConfiguration.variantCode;
            removalOrder.unmFamilyCode = applicableConfiguration.familyCode;
            removalOrder.unmStructureType = applicableConfiguration.structureType;
            removalOrder.unmVariantCode = applicableConfiguration.variantCode;
            return removalOrder;
          };
          ApplicableConfigurationFormComponent.prototype.init = function() {
            this.flFunctions = [];
            this.applicableConfiguration = {};
            this.componentDesignation = '';
            this.controlIpcDataVisible = false;
            this.itemFamilyCodeList = [];
            this.itemStructureLoading = false;
            this.itemStructureNodeImageList = [];
            this.searchItemStructureGlobalFilter = '';
            this.showRatingDialog = false;
            this.ratingDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
            this.isLoadingRating = false;
            this.bireRatingDTOAddedList = [];
            this.bireRatingDTORemovedList = [];
          };
          ApplicableConfigurationFormComponent.prototype.isSelectedAnchor = function(anchorId) {
            return anchorId === this.selectedAnchor;
          };
          ApplicableConfigurationFormComponent.prototype.setSelectedAnchor = function(anchorId) {
            this.pageTocService.setAnchorSelected(anchorId);
            this.selectedAnchor = anchorId;
          };
          ApplicableConfigurationFormComponent.prototype.displayStatusForDisassemblyGroup = function() {
            if (
              !!this.disassemblyGroupTableDataSource.dataSelection &&
              this.disassemblyGroupTableDataSource.dataSelectionCount === 1
            ) {
              this.isStatusEditable = this.isReadOpenMode ? false : true;
              this.currentAsset = __assign({}, this.disassemblyGroupTableDataSource.dataSelection[0]);
              this.currentAssetId = 'Asset ';
              this.currentAssetId += [
                this.currentAsset.familyCode,
                this.currentAsset.structureType,
                this.currentAsset.variantCode,
                this.currentAsset.unmountCode
              ].join('-');
              this.displayStatusPopup = true;
            }
          };
          ApplicableConfigurationFormComponent.prototype.displayStatusForRemovalOrder = function() {
            if (
              !!this.removalOrderTableDataSource.dataSelection &&
              this.removalOrderTableDataSource.dataSelectionCount === 1
            ) {
              this.isStatusEditable = this.isReadOpenMode ? false : true;
              this.currentRemovalAsset = __assign({}, this.removalOrderTableDataSource.dataSelection[0]);
              this.currentAssetId = 'Asset ';
              this.currentAssetId += [
                this.applicableConfiguration.familyCode,
                this.applicableConfiguration.structureType,
                this.applicableConfiguration.variantCode,
                this.currentRemovalAsset.unmountCode,
                this.applicableConfiguration.familyCode,
                this.applicableConfiguration.structureType,
                this.applicableConfiguration.variantCode,
                this.currentRemovalAsset.unmUnmountCode
              ].join('-');
              this.displayStatusRemovalPopup = true;
            }
          };
          ApplicableConfigurationFormComponent.prototype.openStatusUpdatesPopup = function() {
            this.showStatusUpdatesPopup = true;
          };
          ApplicableConfigurationFormComponent.prototype.loadRatingTable = function(bireVariantVersionDTOId) {
            var _this = this;
            this.isLoadingRating = true;
            this.applicableConfigurationFormService.findBireRatingsByVariantPK(bireVariantVersionDTOId).subscribe(
              function(result) {
                _this.ratingTableDataSource.setData(result);
                _this.ratingTableDataSource.update();
                _this.isDisplayRatingTable = !!_this.ratingTableDataSource && _this.ratingTableDataSource.dataCount > 0;
                _this.isLoadingRating = false;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindAttributesByEvolution'));
              }
            );
          };
          ApplicableConfigurationFormComponent.prototype.createRating = function() {
            this.ratingDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Write;
            this.bireRatingInput = {
              familyCode: this.applicableConfiguration.familyCode,
              structureType: this.applicableConfiguration.structureType
            };
            this.showRatingDialog = true;
          };
          ApplicableConfigurationFormComponent.prototype.deleteSelectedRating = function() {
            var _this = this;
            // delete selected rating
            if (this.ratingTableDataSource.hasDataSelection) {
              this.confirmationService.confirmDelete({
                messageKey: 'global.deleteConfirmationMsg',
                accept: function() {
                  _this.ratingTableDataSource.dataSelection.forEach(function(rating) {
                    var startIndex = _this.ratingTableDataSource.dataSrc.findIndex(function(code) {
                      return code.ratingCode === rating.ratingCode;
                    });
                    _this.ratingTableDataSource.dataSrc.splice(startIndex, 1);
                    _this.bireRatingDTORemovedList.push(rating);
                  });
                  _this.ratingTableDataSource.setData(_this.ratingTableDataSource.dataSrc);
                  _this.ratingTableDataSource.update();
                  _this.ratingTableDataSource.dataSelection = [];
                  _this.isDisplayRatingTable =
                    !!_this.ratingTableDataSource && _this.ratingTableDataSource.dataCount > 0;
                }
              });
            }
          };
          ApplicableConfigurationFormComponent.prototype.openRating = function() {
            this.ratingDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
            this.bireRatingInput = this.ratingTableDataSource.dataSelection[0];
            this.showRatingDialog = true;
          };
          ApplicableConfigurationFormComponent.prototype.onAddRating = function(bireRatingDTO) {
            if (!!bireRatingDTO) {
              // Add into table if does not exist
              var existingRating = this.ratingTableDataSource.dataSrc.some(function(rating) {
                return rating.ratingCode === bireRatingDTO.ratingCode;
              });
              if (!existingRating) {
                this.ratingTableDataSource.addData([bireRatingDTO]);
                this.bireRatingDTOAddedList.push(bireRatingDTO);
              }
              this.isDisplayRatingTable = !!this.ratingTableDataSource && this.ratingTableDataSource.dataCount > 0;
            }
          };
          ApplicableConfigurationFormComponent.prototype.showStatus = function() {
            var _this = this;
            var overlayRef = this._overlayService.openWithPositionCenter({
              content: _object_status_object_status_component__WEBPACK_IMPORTED_MODULE_33__['ObjectStatusComponent'],
              data: {
                currentAuthor: this.applicableConfiguration.statusUser,
                currentDate: this.applicableConfiguration.statusDate,
                currentStatus: {
                  label: this._formatSelectOption.transform(
                    this.applicableConfiguration.statusState,
                    this.workflowStatus
                  ),
                  value: this.applicableConfiguration.statusState
                },
                nextStatuses: this.workflowStatus
              }
            });
            overlayRef.afterClosed$.subscribe({
              next: function(event) {
                if (event.data) {
                  _this.applicableConfiguration.statusState = event.data;
                  _this.saveApplicableConfiguration();
                }
              }
            });
          };
          ApplicableConfigurationFormComponent.prototype.updateWorkflowStatusList = function() {
            this.workflowStatus = _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_32__[
              'WorkflowUtils'
            ].filterWorkflowStatusList(this.userWorkflow, this.status, this.applicableConfiguration.statusState);
          };
          ApplicableConfigurationFormComponent.prototype.loadStatus = function(statusState) {
            var _this = this;
            this.propertiesService.getObjectStatusList(true, false, false, statusState, false).subscribe(
              function(results) {
                if (results) {
                  results.forEach(function(element) {
                    if (
                      _this.status.filter(function(status) {
                        return status.value === element.value;
                      }).length === 0
                    ) {
                      _this.status.push(element);
                    }
                  });
                  _this.status = __spread(_this.status);
                  _this.updateWorkflowStatusList();
                }
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetStatusList'));
              }
            );
          };
          var ApplicableConfigurationFormComponent_1;
          ApplicableConfigurationFormComponent.SEARCH_TEXT_DEBOUNCE_TIME = 500;
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('mainInfoAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ApplicableConfigurationFormComponent.prototype,
            'mainInfoAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('generalAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ApplicableConfigurationFormComponent.prototype,
            'generalAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('itemStrucutre'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ApplicableConfigurationFormComponent.prototype,
            'itemStrucutre',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('configDoc'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ApplicableConfigurationFormComponent.prototype,
            'configDoc',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('docMatching'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ApplicableConfigurationFormComponent.prototype,
            'docMatching',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('evolutionInterdependences'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ApplicableConfigurationFormComponent.prototype,
            'evolutionInterdependences',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('disassemblyGroups'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ApplicableConfigurationFormComponent.prototype,
            'disassemblyGroups',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('attributes'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ApplicableConfigurationFormComponent.prototype,
            'attributes',
            void 0
          );
          ApplicableConfigurationFormComponent = ApplicableConfigurationFormComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-applicable-configuration-form',
                template: __webpack_require__(
                  /*! ./applicable-configuration-form.component.html */ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./applicable-configuration-form.component.scss */ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_19__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_20__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_21__['MessageService'],
                _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_7__['PageTocService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_23__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_25__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_24__['SessionService'],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__['DomSanitizer'],
                _applicable_configuration_form_service__WEBPACK_IMPORTED_MODULE_36__[
                  'ApplicableConfigurationFormService'
                ],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_17__['ConfirmationService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_18__['DateService'],
                _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_8__[
                  'DynamicAttributesService'
                ],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_22__['PropertiesService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateService'],
                _shared_api_update_historic_api__WEBPACK_IMPORTED_MODULE_6__['UpdateHistoricApi'],
                _applicable_configuration_form_mhiael_service__WEBPACK_IMPORTED_MODULE_35__[
                  'ApplicableConfigurationFormMhiaelService'
                ],
                _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_34__['OverlayService'],
                _shared_pipes_format_select_option_pipe__WEBPACK_IMPORTED_MODULE_16__['FormatSelectOptionPipe']
              ])
            ],
            ApplicableConfigurationFormComponent
          );
          return ApplicableConfigurationFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_26__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.service.ts':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.service.ts ***!
  \********************************************************************************************************************/
      /*! exports provided: ApplicableConfigurationFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ApplicableConfigurationFormService',
          function() {
            return ApplicableConfigurationFormService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_business_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-business.api */ './src/app/shared/api/product-structure-business.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/task-management.api */ './src/app/shared/api/task-management.api.ts'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
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

        var ApplicableConfigurationFormService = /** @class */ (function(_super) {
          __extends(ApplicableConfigurationFormService, _super);
          function ApplicableConfigurationFormService(
            http,
            appConfigService,
            fleetManagementApi,
            productStructureBusinessApi,
            productStructureManagementApi,
            taskManagementApi,
            propertiesService
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            _this.productStructureBusinessApi = productStructureBusinessApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.taskManagementApi = taskManagementApi;
            _this.propertiesService = propertiesService;
            return _this;
          }
          // To bind table of configuration documnets  tab
          ApplicableConfigurationFormService.prototype.findBireModificationVariantsBySearchCriteria = function(
            criteria
          ) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireModificationVariantsBySearchCriteria,
              criteria
            );
          };
          // To bind table of Documnets matching tab
          ApplicableConfigurationFormService.prototype.findEvolutionModificationSbadList = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findEvolutionModificationSbadList,
              criteria
            );
          };
          // To bind interdependence tab
          ApplicableConfigurationFormService.prototype.findAllBireApplicabilitys = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireApplicabilitys);
          };
          // To bind table of Evolution Interdependences tab
          ApplicableConfigurationFormService.prototype.findBireEvolutionEvolutionsByFamilyAndVariantCodes = function(
            criteria
          ) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireEvolutionEvolutionsByFamilyAndVariantCodes,
              criteria
            );
          };
          // To bind interdependence tab
          ApplicableConfigurationFormService.prototype.findAllBireInterdependences = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireInterdependences);
          };
          ApplicableConfigurationFormService.prototype.getComplianceMap = function() {
            return this.propertiesService.getValue('getComplianceMap');
          };
          ApplicableConfigurationFormService.prototype.getEvolutionLevelMap = function() {
            return this.propertiesService.getValue('getEvolutionLevelMap');
          };
          ApplicableConfigurationFormService.prototype.getEvolutionTypeMap = function() {
            return this.propertiesService.getValue('getEvolutionTypeMap');
          };
          // To bind the evolution popup
          ApplicableConfigurationFormService.prototype.findBireEvolutionsByEvolutionCriteria = function(
            evolution,
            familyCode,
            structureType,
            variantCode
          ) {
            var params = {
              bireEvolutionDTO: evolution,
              familyCode: familyCode,
              structureType: structureType,
              variantCode: variantCode
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireEvolutionsByEvolutionCriteria,
              params
            );
          };
          // To bind family code popup
          ApplicableConfigurationFormService.prototype.findFamilyVariantVersion = function() {
            var familyVariantInput = {
              useCase: 'UC50',
              module: 'FAMILY'
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findFamilyVariantVersion,
              familyVariantInput
            );
          };
          // To display sb,ad,mod in table on validate
          ApplicableConfigurationFormService.prototype.findSbAdModForBireEvolutionEvolutionDto = function(evolution) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findSbAdModForBireEvolutionEvolutionDto,
              evolution
            );
          };
          // To bind table of Disassembly tab
          ApplicableConfigurationFormService.prototype.findBireUnmountAssemblysByFamilyAndVariantCodes = function(
            criteria
          ) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireUnmountAssemblysByFamilyAndVariantCodes,
              criteria
            );
          };
          // To bind table of removal order tab
          ApplicableConfigurationFormService.prototype.findBireUnmountOrdersByFamilyAndVariantCodes = function(
            criteria
          ) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireUnmountOrdersByFamilyAndVariantCodes,
              criteria
            );
          };
          // To bind removal order dropdown
          ApplicableConfigurationFormService.prototype.findBireUnmountAssemblysByFamilyAndVariantCodesDropdownRemovalOrder = function(
            criteria
          ) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireUnmountAssemblysByFamilyAndVariantCodesDropdownRemovalOrder,
              criteria
            );
          };
          // To bind item structure tree
          ApplicableConfigurationFormService.prototype.findTopFathersBireItemsByFamilyAndVariantCodes = function(
            criteria
          ) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findTopFathersBireItemsByFamilyAndVariantCodes,
              criteria
            );
          };
          // To bind item structure tree
          ApplicableConfigurationFormService.prototype.getItemStructureForTree = function(criteria) {
            return _super.prototype.post.call(this, this.productStructureBusinessApi.getItemStructureForTree, criteria);
          };
          ApplicableConfigurationFormService.prototype.saveApplicationConfigurationData = function(applicableConfig) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.saveApplicationConfigurationData,
              applicableConfig
            );
          };
          ApplicableConfigurationFormService.prototype.getLocalCurrency = function() {
            return _super.prototype.post.call(this, this.taskManagementApi.getLocalCurrency);
          };
          ApplicableConfigurationFormService.prototype.findBirePartnersByVariant = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBirePartnersByVariant,
              criteria
            );
          };
          ApplicableConfigurationFormService.prototype.findConfigurationDocuments = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireModificationVariantsBySearchCriteria,
              criteria
            );
          };
          ApplicableConfigurationFormService.prototype.findBireQualificationsByVariantPK = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireQualificationsByVariantPK,
              criteria
            );
          };
          // To bind findOEMPartnersBySearchCriteria tab
          ApplicableConfigurationFormService.prototype.findOEMPartnersBySearchCriteria = function(bidoCustomer) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findOEMPartnersBySearchCriteria,
              bidoCustomer
            );
          };
          ApplicableConfigurationFormService.prototype.findBireSb = function(bireSbId) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireSb, bireSbId);
          };
          ApplicableConfigurationFormService.prototype.findBireEvolution = function(evolution) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireEvolution, evolution);
          };
          ApplicableConfigurationFormService.prototype.findQualification = function(searchObject) {
            var param = {
              bireQualification: searchObject,
              bireTask: {}
            };
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findBireQualificationsBySearchCriteria,
              param
            );
          };
          ApplicableConfigurationFormService.prototype.findBireAttributesByCategory = function(category) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireAttributesByCategory,
              category
            );
          };
          ApplicableConfigurationFormService.prototype.findBireVariantAttributesByVariantVersion = function(
            bireVariantVersionDTOId
          ) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireVariantAttributesByVariantVersion,
              bireVariantVersionDTOId
            );
          };
          ApplicableConfigurationFormService.prototype.findBireVersionPnsByItem = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireVersionPnsByItem, input);
          };
          ApplicableConfigurationFormService.prototype.checkIpcData = function(input) {
            return _super.prototype.post.call(this, this.productStructureBusinessApi.checkIpcData, input);
          };
          ApplicableConfigurationFormService.prototype.findTopFatherBireItemListByFamilyCodeAndVariantCode = function(
            input
          ) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findTopFatherBireItemListByFamilyCodeAndVariantCode,
              input
            );
          };
          ApplicableConfigurationFormService.prototype.findBireItemListByItemFather = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireItemListByItemFather,
              input
            );
          };
          ApplicableConfigurationFormService.prototype.findBireSbsBySbCriteria = function() {
            var bireSbDTO = {
              sbNumber: undefined
            };
            var criteria = {
              bireSbDTO: bireSbDTO,
              familyCode: undefined,
              structureType: undefined,
              variantCode: undefined,
              publicationDateFrom: undefined,
              publicationDateTo: undefined,
              effectiveDateFrom: undefined,
              effectiveDateTo: undefined
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireSbsBySbCriteria,
              criteria
            );
          };
          ApplicableConfigurationFormService.prototype.findBireModificationsByModificationPKAndDesignation = function(
            bireModificationDTO,
            designation
          ) {
            var findBireModificationsByModificationPKAndDesignationInput = {
              bireModificationDTO: bireModificationDTO,
              module:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__['BidoFunctionTypeConstants']
                  .MODULE_FAMILY,
              useCase:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__['BidoFunctionTypeConstants']
                  .UC_MCH_BOM
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireModificationsByModificationPKAndDesignation,
              findBireModificationsByModificationPKAndDesignationInput
            );
          };
          ApplicableConfigurationFormService.prototype.findBireDocItemsByItem = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireDocItemsByItem, input);
          };
          ApplicableConfigurationFormService.prototype.findAllBireAlternativePnByItemVersionAndPnCode = function(
            input
          ) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findAllBireAlternativePnByItemVersionAndPnCode,
              input
            );
          };
          ApplicableConfigurationFormService.prototype.findAllBireFamilys = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireFamilys);
          };
          ApplicableConfigurationFormService.prototype.findBireRatingsByVariantPK = function(bireVariantVersionDTOId) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireRatingsByVariantPK,
              bireVariantVersionDTOId
            );
          };
          ApplicableConfigurationFormService.prototype.findBireRatingsBySearchCriteria = function(
            findBireRatingsBySearchCriteriaInput
          ) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireRatingsBySearchCriteria,
              findBireRatingsBySearchCriteriaInput
            );
          };
          ApplicableConfigurationFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi'],
                _shared_api_product_structure_business_api__WEBPACK_IMPORTED_MODULE_3__['ProductStructureBusinessApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_5__['TaskManagementApi'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__['PropertiesService']
              ])
            ],
            ApplicableConfigurationFormService
          );
          return ApplicableConfigurationFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-associated-qualification/dialog-associated-qualification.component.html':
      /*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-associated-qualification/dialog-associated-qualification.component.html ***!
  \**********************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">{{ getComponentName() + ".qualificationCode" | translate }}</label>\r\n\r\n      <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n        <div class="form-control-data" (click)="quickSearchQualification()">\r\n          {{ bireQualificationDTO.qualificationCode }}\r\n          <span *ngIf="bireQualificationDTO.qualificationName">- {{ bireQualificationDTO.qualificationName }}</span>\r\n        </div>\r\n\r\n        <div *ngIf="bireQualificationDTO.qualificationCode" class="btn-clear-wrapper">\r\n          <i\r\n            class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n            aria-hidden="true"\r\n            (click)="\r\n              bireQualificationDTO.qualificationCode = undefined; bireQualificationDTO.qualificationName = undefined\r\n            "\r\n          ></i>\r\n        </div>\r\n        <div class="btn-search-wrapper">\r\n          <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="quickSearchQualification()"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="!bireQualificationDTO.qualificationCode"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-qualification\r\n  *ngIf="showQuickSearchQualificationPopup"\r\n  [(display)]="showQuickSearchQualificationPopup"\r\n  [qualification-code]="qualificationCode"\r\n  (onSelected)="setSelectedQualification($event)"\r\n></aw-dialog-search-qualification>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-associated-qualification/dialog-associated-qualification.component.ts':
      /*!********************************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-associated-qualification/dialog-associated-qualification.component.ts ***!
  \********************************************************************************************************************************************************/
      /*! exports provided: DialogAssociatedQualificationComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogAssociatedQualificationComponent',
          function() {
            return DialogAssociatedQualificationComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _applicable_configuration_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../applicable-configuration-form.service */ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.service.ts'
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

        var DialogAssociatedQualificationComponent = /** @class */ (function(_super) {
          __extends(DialogAssociatedQualificationComponent, _super);
          function DialogAssociatedQualificationComponent(messageService, applicableConfigurationFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'DialogAssociatedQualificationComponent'
              ) || this;
            _this.messageService = messageService;
            _this.applicableConfigurationFormService = applicableConfigurationFormService;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.showQuickSearchQualificationPopup = false;
            return _this;
          }
          DialogAssociatedQualificationComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
            this.bireQualificationDTO = {};
            if (!!this.qualification && this.qualification.length !== 0) {
              this.bireQualificationDTO = this.qualification[0];
            }
          };
          DialogAssociatedQualificationComponent.prototype.quickSearchQualification = function() {
            if (!this.isReadOpenMode) {
              this.showQuickSearchQualificationPopup = true;
            }
          };
          DialogAssociatedQualificationComponent.prototype.setSelectedQualification = function(event) {
            this.bireQualificationDTO = event;
          };
          DialogAssociatedQualificationComponent.prototype.validate = function() {
            var _this = this;
            if (!this.bireQualificationDTO.qualificationCode) {
              this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
              return;
            }
            if (!this.bireQualificationDTO.qualificationName) {
              var qualificationName_1 = '';
              // Checking if qualification code typed is valid or not
              this.isQualificationCodeValid(function(cb) {
                qualificationName_1 = cb;
                if (qualificationName_1 === '') {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('invalidQualificationCode'));
                  return;
                } else {
                  _this.bireQualificationDTO.qualificationCode = cb.qualificationCode;
                  _this.bireQualificationDTO.qualificationName = cb.qualificationName;
                }
                _this.onValidated.emit(_this.bireQualificationDTO);
                _this.display = false;
              });
            } else {
              this.onValidated.emit(this.bireQualificationDTO);
              this.display = false;
            }
          };
          DialogAssociatedQualificationComponent.prototype.isQualificationCodeValid = function(callback) {
            var _this = this;
            var searchObject = {
              qualificationCode: this.bireQualificationDTO.qualificationCode
            };
            this.applicableConfigurationFormService.findQualification(searchObject).subscribe(function(res) {
              if (res.list.length === 0) {
                callback('');
              }
              res.list.map(function(result) {
                if (
                  !!searchObject.qualificationCode &&
                  !!result.qualificationCode &&
                  searchObject.qualificationCode.toLowerCase() === result.qualificationCode.toLowerCase()
                ) {
                  callback(result);
                } else {
                  _super.prototype.throwUnboundLocalError.call(
                    _this,
                    'isQualificationCodeValid',
                    'searchObject && result'
                  );
                }
              });
            });
          };
          DialogAssociatedQualificationComponent.prototype.cancel = function() {
            this.display = false;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogAssociatedQualificationComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogAssociatedQualificationComponent.prototype,
            'qualification',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogAssociatedQualificationComponent.prototype,
            'onValidated',
            void 0
          );
          DialogAssociatedQualificationComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-associated-qualification',
                template: __webpack_require__(
                  /*! ./dialog-associated-qualification.component.html */ './src/app/main/engineering-management/applicable-configuration/form/dialog-associated-qualification/dialog-associated-qualification.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService'],
                _applicable_configuration_form_service__WEBPACK_IMPORTED_MODULE_4__[
                  'ApplicableConfigurationFormService'
                ]
              ])
            ],
            DialogAssociatedQualificationComponent
          );
          return DialogAssociatedQualificationComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-control-ipc-data/dialog-control-ipc-data.component.html':
      /*!******************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-control-ipc-data/dialog-control-ipc-data.component.html ***!
  \******************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="70">\r\n  <a-header>\r\n    <div class="modal-title">\r\n      {{\r\n        report && report.reportTitle && report.reportTitle.length > 0\r\n          ? report.reportTitle\r\n          : (getComponentName() + ".title" | translate)\r\n      }}\r\n    </div>\r\n    <div class="close-wrapper">\r\n      <i class="aw-icon aw-icon-with-border material-icons" (click)="closeDialog()">close</i>\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="section">\r\n        <h4 class="section-title">\r\n          {{ getComponentName() + ".controlCriteria" | translate }}\r\n        </h4>\r\n\r\n        <div class="section-content">\r\n          <div class="row">\r\n            <div class="form-group">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".items" | translate }}\r\n              </label>\r\n\r\n              <div class="form-control">\r\n                <p-checkbox binary="true" class="aw-checkbox" [(ngModel)]="withItems" appendTo="body"></p-checkbox>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".evolutions" | translate }}\r\n              </label>\r\n\r\n              <div class="form-control">\r\n                <p-checkbox binary="true" class="aw-checkbox" [(ngModel)]="withEvolutions" appendTo="body"></p-checkbox>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="action-list flex--3">\r\n              <button type="button" mat-raised-button (click)="controlIpcData()">\r\n                {{ getComponentName() + ".perform" | translate }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Control results table -->\r\n\r\n      <div class="section">\r\n        <h4 class="section-title">\r\n          {{ getComponentName() + ".controlResults" | translate }}\r\n          ({{ messageTableDataSource ? messageTableDataSource.dataCount : 0 }})\r\n        </h4>\r\n\r\n        <div class="section-content">\r\n          <div class="row">\r\n            <a-table [dataSource]="messageTableDataSource">\r\n              <ng-template tableActionsDef>\r\n                <p-selectButton\r\n                  [(ngModel)]="searchControlSelectedList"\r\n                  [options]="searchControlList"\r\n                  multiple="multiple"\r\n                  (onChange)="onChangeSearchControlList()"\r\n                >\r\n                </p-selectButton>\r\n              </ng-template>\r\n            </a-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-control-ipc-data/dialog-control-ipc-data.component.scss':
      /*!******************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-control-ipc-data/dialog-control-ipc-data.component.scss ***!
  \******************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .action-list {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L2FwcGxpY2FibGUtY29uZmlndXJhdGlvbi9mb3JtL2RpYWxvZy1jb250cm9sLWlwYy1kYXRhL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxlbmdpbmVlcmluZy1tYW5hZ2VtZW50XFxhcHBsaWNhYmxlLWNvbmZpZ3VyYXRpb25cXGZvcm1cXGRpYWxvZy1jb250cm9sLWlwYy1kYXRhXFxkaWFsb2ctY29udHJvbC1pcGMtZGF0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L2FwcGxpY2FibGUtY29uZmlndXJhdGlvbi9mb3JtL2RpYWxvZy1jb250cm9sLWlwYy1kYXRhL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNxQkUsYUFBYTtFQUNiLG1CQUFtQjtFRGxCakIscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L2FwcGxpY2FibGUtY29uZmlndXJhdGlvbi9mb3JtL2RpYWxvZy1jb250cm9sLWlwYy1kYXRhL2RpYWxvZy1jb250cm9sLWlwYy1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5hY3Rpb24tbGlzdCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG59XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-control-ipc-data/dialog-control-ipc-data.component.ts':
      /*!****************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-control-ipc-data/dialog-control-ipc-data.component.ts ***!
  \****************************************************************************************************************************************/
      /*! exports provided: DialogControlIpcDataComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogControlIpcDataComponent',
          function() {
            return DialogControlIpcDataComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! lodash-es */ './node_modules/lodash-es/lodash.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_report_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/constants/report-constants */ './src/app/shared/constants/report-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _applicable_configuration_form_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../applicable-configuration-form.service */ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.service.ts'
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

        var DialogControlIpcDataComponent = /** @class */ (function(_super) {
          __extends(DialogControlIpcDataComponent, _super);
          function DialogControlIpcDataComponent(applicableConfigurationFormService, translateService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Write,
                'DialogControlIpcDataComponent'
              ) || this;
            _this.applicableConfigurationFormService = applicableConfigurationFormService;
            _this.translateService = translateService;
            _this.reportConstants = _shared_constants_report_constants__WEBPACK_IMPORTED_MODULE_4__['ReportConstants'];
            _this.init();
            _this.initMessageTableDataSource();
            _this.setSearchControlList();
            return _this;
          }
          DialogControlIpcDataComponent.prototype.ngOnInit = function() {
            this.controlIpcData();
            this.setDefaultSearchControlList();
          };
          DialogControlIpcDataComponent.prototype.controlIpcData = function() {
            var _this = this;
            this.messageTable = [];
            this.report = undefined;
            var input = {
              familyCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__['StringUtils'].orEmpty(
                this.applicableConfiguration.familyCode
              ),
              structureType: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__['StringUtils'].orEmpty(
                this.applicableConfiguration.structureType
              ),
              variantCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__['StringUtils'].orEmpty(
                this.applicableConfiguration.variantCode
              ),
              withEvolutions: this.withEvolutions,
              withItems: this.withItems
            };
            this.applicableConfigurationFormService.checkIpcData(input).subscribe(function(result) {
              _this.report = result;
              _this.messageTable = _this.report
                ? _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__['ListUtils']
                    .orEmpty(_this.report.messages)
                    .map(function(elt) {
                      return _this.createMessageRow(elt);
                    })
                : [];
              _this.messageTableDataSource.setData(
                Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(_this.messageTable)
              );
              _this.messageTableDataSource.update();
            });
          };
          DialogControlIpcDataComponent.prototype.onChangeSearchControlList = function() {
            this.filterMessageTable();
          };
          DialogControlIpcDataComponent.prototype.initMessageTableDataSource = function() {
            this.messageTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__[
              'TableDataSource'
            ]({
              enableSelection: false,
              columns: [
                {
                  field: 'description',
                  translateKey: this.getTranslateKey('description'),
                  width: '90%'
                },
                {
                  field: 'severity',
                  translateKey: this.getTranslateKey('severity'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__['ColumnAlignment'].CENTER,
                  width: '10%'
                }
              ],
              data: []
            });
          };
          DialogControlIpcDataComponent.prototype.createMessageRow = function(reportMessage) {
            var messageRow = {
              description: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__['StringUtils'].orEmpty(
                reportMessage.message
              ),
              severity: _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__['ObjectUtils'].isDefined(
                reportMessage.severity
              )
                ? reportMessage.severity
                : _shared_constants_report_constants__WEBPACK_IMPORTED_MODULE_4__['ReportConstants']
                    .SEVERITY_INFORMATION
            };
            return messageRow;
          };
          DialogControlIpcDataComponent.prototype.filterMessageTable = function() {
            var _this = this;
            this.messageTableDataSource.setData(
              Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(this.messageTable).filter(function(row) {
                return _this.searchControlSelectedList.includes(row.severity);
              })
            );
            this.messageTableDataSource.update();
          };
          DialogControlIpcDataComponent.prototype.init = function() {
            this.messageTable = [];
            this.report = undefined;
            this.withEvolutions = true;
            this.withItems = true;
          };
          DialogControlIpcDataComponent.prototype.setDefaultSearchControlList = function() {
            this.searchControlSelectedList = [
              _shared_constants_report_constants__WEBPACK_IMPORTED_MODULE_4__['ReportConstants'].SEVERITY_SUCCESS,
              _shared_constants_report_constants__WEBPACK_IMPORTED_MODULE_4__['ReportConstants'].SEVERITY_WARNING,
              _shared_constants_report_constants__WEBPACK_IMPORTED_MODULE_4__['ReportConstants'].SEVERITY_ERROR,
              _shared_constants_report_constants__WEBPACK_IMPORTED_MODULE_4__['ReportConstants'].SEVERITY_INFORMATION
            ];
          };
          DialogControlIpcDataComponent.prototype.setSearchControlList = function() {
            var _this = this;
            var reportErrorKey = this.getTranslateKey('reportError');
            var reportInformationKey = this.getTranslateKey('reportInformation');
            var reportSuccessKey = this.getTranslateKey('reportSuccess');
            var reportWarningKey = this.getTranslateKey('reportWarning');
            this.translateService
              .get([reportErrorKey, reportInformationKey, reportSuccessKey, reportWarningKey])
              .subscribe(function(_a) {
                var _b = __read(_a, 4),
                  reportErrorLabel = _b[0],
                  reportInformationLabel = _b[1],
                  reportSuccessLabel = _b[2],
                  reportWarningLabel = _b[3];
                _this.searchControlList = [
                  {
                    label: reportSuccessLabel || 'OK',
                    value:
                      _shared_constants_report_constants__WEBPACK_IMPORTED_MODULE_4__['ReportConstants']
                        .SEVERITY_SUCCESS
                  },
                  {
                    label: reportWarningLabel || 'WARNING',
                    value:
                      _shared_constants_report_constants__WEBPACK_IMPORTED_MODULE_4__['ReportConstants']
                        .SEVERITY_WARNING
                  },
                  {
                    label: reportErrorLabel || 'NOK',
                    value:
                      _shared_constants_report_constants__WEBPACK_IMPORTED_MODULE_4__['ReportConstants'].SEVERITY_ERROR
                  },
                  {
                    label: reportInformationLabel || 'INFORMATION',
                    value:
                      _shared_constants_report_constants__WEBPACK_IMPORTED_MODULE_4__['ReportConstants']
                        .SEVERITY_INFORMATION
                  }
                ];
              });
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogControlIpcDataComponent.prototype,
            'applicableConfiguration',
            void 0
          );
          DialogControlIpcDataComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-applicable-configuration-control-ipc-data',
                template: __webpack_require__(
                  /*! ./dialog-control-ipc-data.component.html */ './src/app/main/engineering-management/applicable-configuration/form/dialog-control-ipc-data/dialog-control-ipc-data.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-control-ipc-data.component.scss */ './src/app/main/engineering-management/applicable-configuration/form/dialog-control-ipc-data/dialog-control-ipc-data.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _applicable_configuration_form_service__WEBPACK_IMPORTED_MODULE_10__[
                  'ApplicableConfigurationFormService'
                ],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            DialogControlIpcDataComponent
          );
          return DialogControlIpcDataComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-disassembly/dialog-disassembly.component.html':
      /*!********************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-disassembly/dialog-disassembly.component.html ***!
  \********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">{{ getComponentName() + ".disassemblyGroup" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <input type="text" class="aw-input" [(ngModel)]="disassemblyGroup.unmountCode" [disabled]="isReadOpenMode" />\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="!disassemblyGroup.unmountCode"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-disassembly/dialog-disassembly.component.ts':
      /*!******************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-disassembly/dialog-disassembly.component.ts ***!
  \******************************************************************************************************************************/
      /*! exports provided: DialogDisassemblyComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogDisassemblyComponent',
          function() {
            return DialogDisassemblyComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
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

        var DialogDisassemblyComponent = /** @class */ (function(_super) {
          __extends(DialogDisassemblyComponent, _super);
          function DialogDisassemblyComponent(
            // private readonly applicableConfigurationFormService: ApplicableConfigurationFormService,
            messageService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'DialogDisassemblyComponent'
              ) || this;
            _this.messageService = messageService;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          DialogDisassemblyComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
            if (!this.disassemblyGroup) {
              this.disassemblyGroup = {};
            }
          };
          DialogDisassemblyComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogDisassemblyComponent.prototype.validate = function() {
            if (!this.disassemblyGroup.unmountCode || this.disassemblyGroup.unmountCode.length === 0) {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            } else {
              this.onValidated.emit(this.disassemblyGroup);
              this.display = false;
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogDisassemblyComponent.prototype,
            'disassemblyGroup',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogDisassemblyComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogDisassemblyComponent.prototype,
            'onValidated',
            void 0
          );
          DialogDisassemblyComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-disassembly',
                template: __webpack_require__(
                  /*! ./dialog-disassembly.component.html */ './src/app/main/engineering-management/applicable-configuration/form/dialog-disassembly/dialog-disassembly.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService']
              ])
            ],
            DialogDisassemblyComponent
          );
          return DialogDisassemblyComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-document-config/dialog-document-config.component.html':
      /*!****************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-document-config/dialog-document-config.component.html ***!
  \****************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n          <label class="form-label">{{ getComponentName() + ".documentType" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="documentList"\r\n              [(ngModel)]="document"\r\n              [disabled]="isReadOpenMode"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              (onChange)="changeDocType()"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n          <label class="form-label">{{ getComponentName() + ".number" | translate }}</label>\r\n\r\n          <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n            <div class="form-control-data" (click)="openDocumentDialog()">{{ configurationDocumentsDTO.number }}</div>\r\n\r\n            <div *ngIf="configurationDocumentsDTO.number" class="btn-clear-wrapper">\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="configurationDocumentsDTO.number = undefined"\r\n              ></i>\r\n            </div>\r\n            <div class="btn-search-wrapper">\r\n              <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openDocumentDialog()"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n          <label class="form-label">{{ getComponentName() + ".revisionNumber" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              type="text"\r\n              class="aw-input"\r\n              [disabled]="isReadOpenMode"\r\n              [(ngModel)]="configurationDocumentsDTO.revisionNumber"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div *ngIf="document === \'Modification\'" class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n          <label class="form-label">{{ getComponentName() + ".modificationApplicability" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              appendTo="body"\r\n              [options]="modApplicabilityList"\r\n              [(ngModel)]="modApplicability"\r\n              [disabled]="isReadOpenMode"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf="document !== \'Modification\'" class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".approvalDate" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-calendar\r\n              showButtonBar="true"\r\n              [monthNavigator]="true"\r\n              [yearNavigator]="true"\r\n              [yearRange]="sessionService.calendarYearRange"\r\n              class="aw-calendar"\r\n              appendTo="body"\r\n              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n              [locale]="sessionService.calendarFormat"\r\n              [disabled]="isReadOpenMode"\r\n              [(ngModel)]="approvalDate"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="!document || !configurationDocumentsDTO.number || !configurationDocumentsDTO.revisionNumber"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<!-- Airworthiness -->\r\n<aw-dialog-table\r\n  *ngIf="showSbadDialog"\r\n  [(display)]="showSbadDialog"\r\n  [keyMap]="keyMap"\r\n  [data]="dialogTableData"\r\n  (onSelected)="setSelectedObject($event)"\r\n></aw-dialog-table>\r\n\r\n<!-- Modification -->\r\n<aw-dialog-table\r\n  *ngIf="showModificationTypeDialog"\r\n  [keyMap]="modKeyMap"\r\n  [(display)]="showModificationTypeDialog"\r\n  [data]="dialogTableDataModificationType"\r\n  (onSelected)="setSelectedModificationObject($event)"\r\n></aw-dialog-table>\r\n\r\n<!-- Evolution -->\r\n<aw-dialog-table\r\n  *ngIf="showEvolutionNumberDialog"\r\n  [keyMap]="evKeyMap"\r\n  [(display)]="showEvolutionNumberDialog"\r\n  [data]="dialogTableDataEvolutionNumber"\r\n  (onSelected)="setSelectedEvolutionObject($event)"\r\n></aw-dialog-table>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-document-config/dialog-document-config.component.ts':
      /*!**************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-document-config/dialog-document-config.component.ts ***!
  \**************************************************************************************************************************************/
      /*! exports provided: DialogDocumentConfigComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogDocumentConfigComponent',
          function() {
            return DialogDocumentConfigComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/enums/table-column-filter-mode.enum */ './src/app/shared/enums/table-column-filter-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/enums/table-selection-mode.enum */ './src/app/shared/enums/table-selection-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _applicable_configuration_form_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../applicable-configuration-form.service */ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.service.ts'
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

        var DialogDocumentConfigComponent = /** @class */ (function(_super) {
          __extends(DialogDocumentConfigComponent, _super);
          function DialogDocumentConfigComponent(
            sessionService,
            applicableConfigurationFormService,
            messageService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read,
                'DialogDocumentMatchingComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.applicableConfigurationFormService = applicableConfigurationFormService;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.setKeyMap();
            _this.loadDialog();
            _this.modApplicabilityList = [];
            _this.findAllBireApplicability();
            return _this;
          }
          DialogDocumentConfigComponent.prototype.findAllBireApplicability = function() {
            var _this = this;
            this.applicableConfigurationFormService.findAllBireApplicabilitys().subscribe(function(result) {
              _this.modApplicabilityList = result;
              _this.modApplicability = result[0].value;
            });
          };
          // Setting KeyMap for dialogs
          DialogDocumentConfigComponent.prototype.setKeyMap = function() {
            this.keyMap = new Map();
            this.keyMap.set(
              'statusState',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .FUNC_OBJECT_STATUS_MAP
              )
            );
            this.keyMap.set(
              'sbType',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .SB_TYPE_MAP
              )
            );
            this.keyMap.set(
              'sbCompliance',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .COMPLIANCE_MAP
              )
            );
            this.keyMap.set(
              'sbClass',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .SB_CLASSIFICATION_MAP
              )
            );
            this.evKeyMap = new Map();
            this.evKeyMap.set(
              'familyFunction',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .FAMILY_FUNCTION_MAP
              )
            );
            this.evKeyMap.set(
              'evolutionType',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .EVOLUTION_TYPE_MAP
              )
            );
            this.evKeyMap.set(
              'evolutionCompliance',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .COMPLIANCE_MAP
              )
            );
            this.evKeyMap.set(
              'evolutionLevel',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .EVOLUTION_LEVEL_MAP
              )
            );
            this.evKeyMap.set(
              'structureType',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .STRUCTURE_TYPE_MAP
              )
            );
            this.modKeyMap = new Map();
            this.modKeyMap.set(
              'familyFunction',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .FAMILY_FUNCTION_MAP
              )
            );
            this.modKeyMap.set(
              'structureType',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .STRUCTURE_TYPE_MAP
              )
            );
          };
          DialogDocumentConfigComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
            this.showSbadDialog = false;
            this.showModificationTypeDialog = false;
            this.showEvolutionNumberDialog = false;
            this.documentList = [
              { label: 'Airworthiness', value: 'Airworthiness' },
              { label: 'Evolution', value: 'Evolution' },
              { label: 'Modification', value: 'Modification' }
            ];
            this.document = 'Airworthiness';
            this.configurationDocumentsDTO = {};
            if (this.currentConfigurationDoc) {
              this.loadDialogParameters(this.currentConfigurationDoc[0]);
            } else {
              this.currentConfigurationDoc = [];
            }
            if (this.componentData) {
              this.searchEvolutionNumber();
            }
            this.searchModificationType();
          };
          DialogDocumentConfigComponent.prototype.loadDialogParameters = function(params) {
            this.configurationDocumentsDTO = __assign({}, params);
            this.cloneConfDocumentsDTO = __assign({}, params);
            this.document = params.documentType;
            this.type = params.type;
            this.approvalDate = new Date(params.approvalDate.toString());
          };
          DialogDocumentConfigComponent.prototype.changeDocType = function() {
            if (!!this.configurationDocumentsDTO) {
              this.configurationDocumentsDTO.number = undefined;
              this.configurationDocumentsDTO.revisionNumber = undefined;
              this.type = undefined;
              this.approvalDate = undefined;
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'changeDocType', 'this.configurationDocumentsDTO');
            }
          };
          /**
           * for Airworthiness
           */
          DialogDocumentConfigComponent.prototype.loadDialog = function() {
            this.dialogTableData = {
              componentId: 'SbadPopupDialog',
              tableRows: this.applicableConfigurationFormService.findBireSbsBySbCriteria(),
              tableCols: [
                {
                  field: 'sbNumber',
                  width: '75px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input,
                  alignment: 'left'
                },
                {
                  field: 'sbRevisionNumber',
                  width: '75px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input,
                  alignment: 'left'
                },
                {
                  field: 'statusState',
                  width: '90px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input,
                  alignment: 'left'
                },
                {
                  field: 'sbType',
                  width: '100px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input,
                  alignment: 'left'
                },
                {
                  field: 'sbCompliance',
                  width: '90px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input,
                  alignment: 'left'
                },
                {
                  field: 'sbClass',
                  width: '90px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input,
                  alignment: 'left'
                },
                {
                  field: 'sbPublicationDate',
                  width: '100px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input,
                  isDate: true,
                  alignment: 'left'
                },
                {
                  field: 'sbEffectiveDate',
                  width: '100px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input,
                  isDate: true,
                  alignment: 'left'
                },
                {
                  field: 'sbDocumentUrl',
                  width: '200px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input,
                  alignment: 'left'
                },
                {
                  field: 'sbTitle',
                  width: '250px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input,
                  alignment: 'left'
                }
              ],
              exportExcel: true,
              globalFilter: true,
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_5__['TableSelectionMode'].Single
            };
          };
          /**
           * for Modification
           */
          DialogDocumentConfigComponent.prototype.searchModificationType = function() {
            if (!this.bireModificationDTO) {
              this.bireModificationDTO = {
                familyCode: this.componentData.familyCode,
                structureType: this.componentData.structureType
              };
              var evolutionTableCols = [
                {
                  field: 'familyCode',
                  width: '80px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'structureType',
                  width: '60px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'modificationType',
                  width: '80px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'modificationNumber',
                  width: '80px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'modificationRevisionNumber',
                  width: '80px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'modificationDocumentUrl',
                  width: '100px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'modificationTitle',
                  width: '250px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                      .Input
                }
              ];
              var modificationNumber = !!this.bireModificationDTO.modificationNumber
                ? this.bireModificationDTO.modificationNumber
                : '';
              this.dialogTableDataModificationType = {
                componentId: 'ModificationsPopupDialog',
                tableCols: evolutionTableCols,
                tableRows: this.applicableConfigurationFormService.findBireModificationsByModificationPKAndDesignation(
                  this.bireModificationDTO,
                  modificationNumber
                ),
                dataKey: undefined,
                selectionMode:
                  _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_5__['TableSelectionMode'].Single,
                globalFilter: true
              };
            }
          };
          /**
           * for Evolution
           */
          DialogDocumentConfigComponent.prototype.searchEvolutionNumber = function() {
            var evolutionNumberCol = [
              {
                field: 'evolutionNumber',
                width: '100px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'evolutionRevisionNumber',
                width: '100px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'statusState',
                width: '100px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'evolutionType',
                width: '100px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'evolutionCompliance',
                width: '100px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'evolutionLevel',
                width: '200px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'tracked',
                width: '50px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                    .Tricheckbox
              },
              {
                field: 'evolutionSummary',
                width: '200px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableColumnFilterMode']
                    .Input
              }
            ];
            if (!!this.componentData.familyCode && !!this.componentData.structureType) {
              this.dialogTableDataEvolutionNumber = {
                componentId: 'DialogEvolution',
                tableRows: this.applicableConfigurationFormService.findBireEvolutionsByEvolutionCriteria(
                  {},
                  this.componentData.familyCode,
                  this.componentData.structureType,
                  ''
                ),
                tableCols: evolutionNumberCol,
                globalFilter: true,
                dataKey: undefined,
                selectionMode:
                  _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_5__['TableSelectionMode'].Single
              };
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'searchEvolutionNumber', 'this.componentData');
            }
          };
          /**
           * Event on search click
           */
          DialogDocumentConfigComponent.prototype.openDocumentDialog = function() {
            if (!this.document) {
              return;
            }
            if (!this.isReadOpenMode) {
              if (this.document === 'Airworthiness') {
                this.showSbadDialog = true;
              } else if (this.document === 'Modification') {
                this.showModificationTypeDialog = true;
              } else {
                this.showEvolutionNumberDialog = true;
              }
            }
          };
          // Event after Airworthiness selection
          DialogDocumentConfigComponent.prototype.setSelectedObject = function(event) {
            var _this = this;
            this.getTypeNameFromList(
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .SB_TYPE_MAP
              ),
              event.sbType
            ).subscribe(function(type) {
              _this.configurationDocumentsDTO.number = event.sbNumber;
              _this.configurationDocumentsDTO.revisionNumber = event.sbRevisionNumber;
              _this.type = type;
            });
          };
          // Event after Modification selection
          DialogDocumentConfigComponent.prototype.setSelectedModificationObject = function(event) {
            this.configurationDocumentsDTO.number = event.modificationNumber;
            this.numberClone = event.modificationNumber;
            this.configurationDocumentsDTO.revisionNumber = event.modificationRevisionNumber;
            this.revNumberClone = event.modificationRevisionNumber;
            this.type = event.modificationType;
            this.bireModificationDTO = event;
          };
          // Event after Evolution selection
          DialogDocumentConfigComponent.prototype.setSelectedEvolutionObject = function(event) {
            var _this = this;
            this.getTypeNameFromList(
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .EVOLUTION_TYPE_MAP
              ),
              event.evolutionType
            ).subscribe(function(type) {
              _this.configurationDocumentsDTO.number = event.evolutionNumber;
              _this.configurationDocumentsDTO.revisionNumber = event.evolutionRevisionNumber;
              _this.type = type;
            });
          };
          DialogDocumentConfigComponent.prototype.getTypeNameFromList = function(observable, typeCode) {
            return observable.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['map'])(function(list) {
                var matchingElt = list.find(function(elt) {
                  return elt.value === typeCode;
                });
                return matchingElt ? matchingElt.label : '';
              })
            );
          };
          DialogDocumentConfigComponent.prototype.cancel = function() {
            this.display = false;
          };
          // Validating
          DialogDocumentConfigComponent.prototype.validate = function() {
            var _this = this;
            if (
              !!this.configurationDocumentsDTO &&
              this.document &&
              this.configurationDocumentsDTO.number &&
              this.configurationDocumentsDTO.revisionNumber
            ) {
              // Validate if Modification Doc Type Exist
              if (this.document === 'Modification') {
                if (!this.type) {
                  this.messageService.showErrorMessage('Modification does not exist');
                  return;
                } else if (
                  this.type &&
                  (this.numberClone !== this.configurationDocumentsDTO.number ||
                    this.revNumberClone !== this.configurationDocumentsDTO.revisionNumber)
                ) {
                  this.messageService.showErrorMessage('Modification does not exist');
                  return;
                } else {
                  this.emitData();
                }
              }
              // Validate if Airworthiness Doc Type Exist
              if (this.document === 'Airworthiness') {
                var bireSbDTOId = {
                  sbNumber: this.configurationDocumentsDTO.number,
                  sbRevisionNumber: this.configurationDocumentsDTO.revisionNumber
                };
                this.applicableConfigurationFormService.findBireSb(bireSbDTOId).subscribe(
                  function(response) {
                    if (response.sbNumber) {
                      _this.emitData();
                    }
                  },
                  function() {
                    _this.messageService.showErrorMessage('Sb does not exist');
                    return;
                  }
                );
              }
              // Validate if Evolution Doc Type Exist
              if (this.document === 'Evolution') {
                var evolution = {
                  evolutionNumber: this.configurationDocumentsDTO.number,
                  evolutionRevisionNumber: this.configurationDocumentsDTO.revisionNumber
                };
                this.applicableConfigurationFormService.findBireEvolution(evolution).subscribe(
                  function(response) {
                    if (response.evolutionNumber) {
                      _this.emitData();
                    }
                  },
                  function() {
                    _this.messageService.showErrorMessage('Evolution does not exist');
                    return;
                  }
                );
              }
            } else {
              this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
              return;
            }
          };
          DialogDocumentConfigComponent.prototype.emitData = function() {
            if (!!this.configurationDocumentsDTO) {
              var configDTO = {
                number: this.configurationDocumentsDTO.number,
                revisionNumber: this.configurationDocumentsDTO.revisionNumber,
                type: this.type,
                approvalDate: this.approvalDate,
                applicabilityCode: this.document === 'Modification' ? this.modApplicability : '',
                documentType: this.document,
                familyCode: this.componentData.familyCode,
                structureType: this.componentData.structureType,
                variantCode: this.componentData.variantCode
              };
              var WRITE_MODE = 2;
              var CREATE_MODE = 0;
              // TODO : CHECK THIS CODE, done as edit mode does not work in case number or rev number is changed
              if (
                this.openMode === WRITE_MODE &&
                !!this.cloneConfDocumentsDTO &&
                !!this.configurationDocumentsDTO &&
                this.cloneConfDocumentsDTO.documentType === this.configurationDocumentsDTO.documentType &&
                this.cloneConfDocumentsDTO.number === this.configurationDocumentsDTO.number &&
                this.cloneConfDocumentsDTO.revisionNumber === this.configurationDocumentsDTO.revisionNumber
              ) {
                this.onValidated.emit(configDTO);
              } else if (this.openMode === CREATE_MODE) {
                this.onValidated.emit(configDTO);
              }
              this.cancel();
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'emitData', 'this.configurationDocumentDTO');
            }
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogDocumentConfigComponent.prototype,
            'onValidated',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogDocumentConfigComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('component-data'),
              __metadata('design:type', Object)
            ],
            DialogDocumentConfigComponent.prototype,
            'componentData',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('currentConfigurationDoc'),
              __metadata('design:type', Array)
            ],
            DialogDocumentConfigComponent.prototype,
            'currentConfigurationDoc',
            void 0
          );
          DialogDocumentConfigComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-document-config',
                template: __webpack_require__(
                  /*! ./dialog-document-config.component.html */ './src/app/main/engineering-management/applicable-configuration/form/dialog-document-config/dialog-document-config.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__['SessionService'],
                _applicable_configuration_form_service__WEBPACK_IMPORTED_MODULE_10__[
                  'ApplicableConfigurationFormService'
                ],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__['PropertiesService']
              ])
            ],
            DialogDocumentConfigComponent
          );
          return DialogDocumentConfigComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_9__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-evolution-interdependence/dialog-evolution-interdependence.component.html':
      /*!************************************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-evolution-interdependence/dialog-evolution-interdependence.component.html ***!
  \************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="section">\r\n        <div class="section-content">\r\n          <div class="form-group">\r\n            <label class="form-label">{{ getComponentName() + ".familyCode" | translate }}</label>\r\n\r\n            <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n              <div class="form-control-data" (click)="showFamilyCode()">\r\n                {{ evolutionInterdependence.bireEvolutionEvolutionDTO.familyCode }}\r\n                <span *ngIf="evolutionInterdependence.bireEvolutionEvolutionDTO.structureType"\r\n                  >- {{ evolutionInterdependence.bireEvolutionEvolutionDTO.structureType }}</span\r\n                >\r\n                <span *ngIf="evolutionInterdependence.bireEvolutionEvolutionDTO.variantCode"\r\n                  >- {{ evolutionInterdependence.bireEvolutionEvolutionDTO.variantCode }}</span\r\n                >\r\n              </div>\r\n\r\n              <div *ngIf="evolutionInterdependence.bireEvolutionEvolutionDTO.familyCode" class="btn-clear-wrapper">\r\n                <i\r\n                  class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                  aria-hidden="true"\r\n                  (click)="\r\n                    evolutionInterdependence.bireEvolutionEvolutionDTO.familyCode = undefined;\r\n                    evolutionInterdependence.bireEvolutionEvolutionDTO.structureType = undefined;\r\n                    evolutionInterdependence.bireEvolutionEvolutionDTO.variantCode = undefined\r\n                  "\r\n                ></i>\r\n              </div>\r\n              <div class="btn-search-wrapper">\r\n                <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="showFamilyCode()"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section">\r\n        <h4 class="section-title">{{ getComponentName() + ".initial" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n            <label class="form-label">{{ getComponentName() + ".evolutionNumber" | translate }}</label>\r\n\r\n            <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n              <div class="form-control-data" (click)="openEvolutionDialog()">\r\n                {{ evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionNumber }}\r\n                <span *ngIf="evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber"\r\n                  >- {{ evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber }}</span\r\n                >\r\n              </div>\r\n\r\n              <div *ngIf="evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionNumber" class="btn-clear-wrapper">\r\n                <i\r\n                  class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                  aria-hidden="true"\r\n                  (click)="\r\n                    evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionNumber = undefined;\r\n                    evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber = undefined\r\n                  "\r\n                ></i>\r\n              </div>\r\n              <div class="btn-search-wrapper">\r\n                <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openEvolutionDialog()"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section">\r\n        <h4 class="section-title">{{ getComponentName() + ".interdependentEvolution" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n            <label class="form-label">{{ getComponentName() + ".evoEvolutionNumber" | translate }}</label>\r\n\r\n            <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n              <div class="form-control-data" (click)="openEvoEvolutionDialog()">\r\n                {{ evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber }}\r\n                <span *ngIf="evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber"\r\n                  >- {{ evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber }}</span\r\n                >\r\n              </div>\r\n\r\n              <div\r\n                *ngIf="evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber"\r\n                class="btn-clear-wrapper"\r\n              >\r\n                <i\r\n                  class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                  aria-hidden="true"\r\n                  (click)="\r\n                    evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber = undefined;\r\n                    evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber = undefined\r\n                  "\r\n                ></i>\r\n              </div>\r\n              <div class="btn-search-wrapper">\r\n                <i\r\n                  class="fa fa-fw fa-search aw-icon btn-search"\r\n                  aria-hidden="true"\r\n                  (click)="openEvoEvolutionDialog()"\r\n                ></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n            <label class="form-label">{{ getComponentName() + ".interdependence" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                class="aw-dropdown fixed-width"\r\n                [options]="interdependences"\r\n                [(ngModel)]="evolutionInterdependence.bireEvolutionEvolutionDTO.interdependenceCode"\r\n                [disabled]="isReadOpenMode"\r\n                placeholder="&nbsp;"\r\n                appendTo="body"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      type="button"\r\n      color="primary"\r\n      mat-raised-button\r\n      (click)="validate()"\r\n      [disabled]="\r\n        evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionNumber === undefined ||\r\n        evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionNumber === null ||\r\n        evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber === undefined ||\r\n        evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber === null ||\r\n        evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber === undefined ||\r\n        evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber === null ||\r\n        evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber === undefined ||\r\n        evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber === null ||\r\n        evolutionInterdependence.bireEvolutionEvolutionDTO.interdependenceCode === undefined ||\r\n        evolutionInterdependence.bireEvolutionEvolutionDTO.interdependenceCode === null\r\n      "\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-table\r\n  *ngIf="showEvolutionTableDialog"\r\n  [keyMap]="keyMap"\r\n  [data]="evolutionTableData"\r\n  [(display)]="showEvolutionTableDialog"\r\n  (onSelected)="onSelectedEvolution($event)"\r\n></aw-dialog-table>\r\n<aw-dialog-table\r\n  *ngIf="showEvoEvolutionTableDialog"\r\n  [keyMap]="keyMap"\r\n  [data]="evolutionTableData"\r\n  [(display)]="showEvoEvolutionTableDialog"\r\n  (onSelected)="onSelectedEvoEvolution($event)"\r\n></aw-dialog-table>\r\n<aw-dialog-table\r\n  *ngIf="showFamilyCodeDialog"\r\n  [keyMap]="keyMap"\r\n  [(display)]="showFamilyCodeDialog"\r\n  [data]="dialogTableDataFamilyCode"\r\n  (onSelected)="setSelectedFamilyCode($event)"\r\n></aw-dialog-table>\r\n<!--\r\n  <aw-dialog-table *ngIf="showEvolutionDialog" [data]="evolutionTableData" [(display)]="showEvolutionDialog" (onSelected)="onSelectedEvolution($event)"></aw-dialog-table>\r\n-->\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-evolution-interdependence/dialog-evolution-interdependence.component.ts':
      /*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-evolution-interdependence/dialog-evolution-interdependence.component.ts ***!
  \**********************************************************************************************************************************************************/
      /*! exports provided: DialogEvolutionInterdependenceComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogEvolutionInterdependenceComponent',
          function() {
            return DialogEvolutionInterdependenceComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/enums/table-column-filter-mode.enum */ './src/app/shared/enums/table-column-filter-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/enums/table-selection-mode.enum */ './src/app/shared/enums/table-selection-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _applicable_configuration_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../applicable-configuration-form.service */ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.service.ts'
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

        var DialogEvolutionInterdependenceComponent = /** @class */ (function(_super) {
          __extends(DialogEvolutionInterdependenceComponent, _super);
          function DialogEvolutionInterdependenceComponent(
            applicableConfigurationFormService,
            messageService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'DialogEvolutionInterdependenceComponent'
              ) || this;
            _this.applicableConfigurationFormService = applicableConfigurationFormService;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.showEvolutionTableDialog = false;
            _this.showEvoEvolutionTableDialog = false;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.showFamilyCodeDialog = false;
            _this.keyMap = new Map();
            _this.keyMap.set(
              'familyFunction',
              _this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .FAMILY_FUNCTION_MAP
              )
            );
            _this.keyMap.set(
              'structureType',
              _this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .STRUCTURE_TYPE_MAP
              )
            );
            _this.searchFamilyCode();
            _this.showEvolutionInterdependencesDialog = false;
            _this.loadInterdependences();
            _this.keyMap = new Map();
            _this.keyMap.set('evolutionType', _this.applicableConfigurationFormService.getEvolutionTypeMap());
            _this.keyMap.set('evolutionCompliance', _this.applicableConfigurationFormService.getComplianceMap());
            _this.keyMap.set('evolutionLevel', _this.applicableConfigurationFormService.getEvolutionLevelMap());
            return _this;
          }
          DialogEvolutionInterdependenceComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
            if (!this.evolutionInterdependence) {
              this.evolutionInterdependence = { bireEvolutionEvolutionDTO: {} };
              this.evolutionInterdependence.bireEvolutionEvolutionDTO = {
                familyCode: this.bireVariantVersionSelected.familyCode,
                variantCode: this.bireVariantVersionSelected.variantCode,
                structureType: this.bireVariantVersionSelected.structureType
              };
            }
          };
          // To bind drop-down
          DialogEvolutionInterdependenceComponent.prototype.loadInterdependences = function() {
            var _this = this;
            this.applicableConfigurationFormService.findAllBireInterdependences().subscribe(
              function(results) {
                _this.interdependences = results;
              },
              function() {
                _this.messageService.showErrorMessage('errorOnGetInterdependences');
              }
            );
          };
          DialogEvolutionInterdependenceComponent.prototype.openEvolutionDialog = function() {
            if (!this.isReadOpenMode) {
              this.initEvolutionTableData();
              this.showEvolutionTableDialog = true;
            }
          };
          DialogEvolutionInterdependenceComponent.prototype.openEvoEvolutionDialog = function() {
            if (!this.isReadOpenMode) {
              this.initEvolutionTableData();
              this.showEvoEvolutionTableDialog = true;
            }
          };
          DialogEvolutionInterdependenceComponent.prototype.cancel = function() {
            this.display = false;
          };
          // Family Code dialog
          DialogEvolutionInterdependenceComponent.prototype.showFamilyCode = function() {
            if (!this.isReadOpenMode) {
              this.showFamilyCodeDialog = true;
            }
          };
          DialogEvolutionInterdependenceComponent.prototype.setSelectedFamilyCode = function(selectedObject) {
            if (!!selectedObject && !!this.evolutionInterdependence.bireEvolutionEvolutionDTO) {
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.familyCode = selectedObject.familyCode;
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.structureType = selectedObject.structureType;
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.variantCode = selectedObject.variantCode;
              // Resetting values of evolution
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionNumber = undefined;
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber = undefined;
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber = undefined;
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber = undefined;
              this.showFamilyCodeDialog = false;
            } else {
              _super.prototype.throwUnboundLocalError.call(
                this,
                'setSelectedFamilyCode',
                'this.evolutionInterdependence && selectedObject'
              );
            }
          };
          DialogEvolutionInterdependenceComponent.prototype.searchFamilyCode = function() {
            var test = [
              {
                field: 'familyCode',
                width: '180px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input,
                alignment: 'left'
              },
              {
                field: 'familyName',
                width: '180px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input,
                alignment: 'left'
              },
              {
                field: 'familyFunction',
                width: '180px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input,
                alignment: 'left'
              },
              {
                field: 'structureType',
                width: '180px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input,
                alignment: 'left'
              },
              {
                field: 'variantCode',
                width: '180px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input,
                alignment: 'left'
              },
              {
                field: 'variantName',
                width: '180px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input,
                alignment: 'left'
              }
            ];
            this.dialogTableDataFamilyCode = {
              componentId: 'ApplicabilityPopupDialog',
              tableCols: test,
              tableRows: this.applicableConfigurationFormService.findFamilyVariantVersion(),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableSelectionMode'].Single,
              globalFilter: true
            };
          };
          DialogEvolutionInterdependenceComponent.prototype.initEvolutionTableData = function() {
            var evolutionTableCols = [
              {
                field: 'evolutionNumber',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'evolutionRevisionNumber',
                alignment: 'left',
                width: '15%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'statusState',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'evolutionType',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'evolutionCompliance',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'evolutionLevel',
                alignment: 'left',
                width: '20%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'tracked',
                alignment: 'center',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Tricheckbox
              },
              {
                field: 'evolutionSummary',
                alignment: 'left',
                width: '25%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              }
            ];
            var familyCode;
            var structureType;
            var variantCode;
            if (!!this.evolutionInterdependence && !!this.evolutionInterdependence.bireEvolutionEvolutionDTO) {
              familyCode = this.evolutionInterdependence.bireEvolutionEvolutionDTO.familyCode;
              structureType = this.evolutionInterdependence.bireEvolutionEvolutionDTO.structureType;
              variantCode = this.evolutionInterdependence.bireEvolutionEvolutionDTO.variantCode;
            } else {
              _super.prototype.throwUnboundLocalError.call(
                this,
                'initEvolutionTableData',
                'this.evolutionInterdependence.bireEvolutionEvolutionDTO'
              );
            }
            this.evolutionTableData = {
              componentId: 'DialogEvolution',
              tableCols: evolutionTableCols,
              tableRows: this.applicableConfigurationFormService.findBireEvolutionsByEvolutionCriteria(
                {},
                familyCode,
                structureType,
                variantCode
              ),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableSelectionMode'].Single,
              globalFilter: true
            };
          };
          DialogEvolutionInterdependenceComponent.prototype.validate = function() {
            if (
              !!this.evolutionInterdependence.bireEvolutionEvolutionDTO &&
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionNumber &&
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber &&
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber &&
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber &&
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.interdependenceCode
            ) {
              if (
                this.evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber ===
                this.evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionNumber
              ) {
                this.messageService.showWarningMessage(this.getTranslateKey('warningOnSameInterdependence'));
              } else {
                this.onValidated.emit(this.evolutionInterdependence);
                this.display = false;
              }
            } else {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            }
          };
          DialogEvolutionInterdependenceComponent.prototype.onSelectedEvolution = function(evolutionInterdependence) {
            if (!!evolutionInterdependence && !!this.evolutionInterdependence.bireEvolutionEvolutionDTO) {
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionNumber =
                evolutionInterdependence.evolutionNumber;
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber =
                evolutionInterdependence.evolutionRevisionNumber;
            } else {
              _super.prototype.throwUnboundLocalError.call(
                this,
                'onSelectedEvolution',
                'evolutionInterdependence && this.evolutionInterdependence.bireEvolutionEvolutionDTO'
              );
            }
          };
          DialogEvolutionInterdependenceComponent.prototype.onSelectedEvoEvolution = function(
            evolutionInterdependence
          ) {
            if (!!evolutionInterdependence && !!this.evolutionInterdependence.bireEvolutionEvolutionDTO) {
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber =
                evolutionInterdependence.evolutionNumber;
              this.evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber =
                evolutionInterdependence.evolutionRevisionNumber;
            } else {
              _super.prototype.throwUnboundLocalError.call(
                this,
                'onSelectedEvoEvolution',
                'evolutionInterdependence && this.evolutionInterdependence.bireEvolutionEvolutionDTO'
              );
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogEvolutionInterdependenceComponent.prototype,
            'bireVariantVersionSelected',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogEvolutionInterdependenceComponent.prototype,
            'evolutionInterdependence',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogEvolutionInterdependenceComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogEvolutionInterdependenceComponent.prototype,
            'onValidated',
            void 0
          );
          DialogEvolutionInterdependenceComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-evolution-interdependence',
                template: __webpack_require__(
                  /*! ./dialog-evolution-interdependence.component.html */ './src/app/main/engineering-management/applicable-configuration/form/dialog-evolution-interdependence/dialog-evolution-interdependence.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _applicable_configuration_form_service__WEBPACK_IMPORTED_MODULE_8__[
                  'ApplicableConfigurationFormService'
                ],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__['PropertiesService']
              ])
            ],
            DialogEvolutionInterdependenceComponent
          );
          return DialogEvolutionInterdependenceComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-followed-rating/dialog-followed-rating.component.html':
      /*!****************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-followed-rating/dialog-followed-rating.component.html ***!
  \****************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">{{ getComponentName() + ".ratingCode" | translate }}</label>\r\n\r\n      <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n        <div class="form-control-data" (click)="showRatingDialog()">{{ selectedRating.ratingCode }}</div>\r\n\r\n        <div *ngIf="selectedRating.ratingCode" class="btn-clear-wrapper">\r\n          <i\r\n            class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n            aria-hidden="true"\r\n            *ngIf="!!isReadOpenMode"\r\n            (click)="selectedRating.ratingCode = undefined"\r\n          ></i>\r\n        </div>\r\n        <div class="btn-search-wrapper">\r\n          <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="showRatingDialog()"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".ratingName" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <input\r\n          type="text"\r\n          class="aw-input"\r\n          maxlength="50"\r\n          [(ngModel)]="selectedRating.ratingName"\r\n          [disabled]="isReadOpenMode"\r\n        />\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="!selectedRating || !selectedRating.ratingCode"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-rating\r\n  *ngIf="showDialog"\r\n  [(display)]="showDialog"\r\n  (onSelected)="setSelectedRating($event)"\r\n  [structure-type]="bireRatingInput.structureType"\r\n  [family-code]="bireRatingInput.familyCode"\r\n></aw-dialog-search-rating>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-followed-rating/dialog-followed-rating.component.ts':
      /*!**************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-followed-rating/dialog-followed-rating.component.ts ***!
  \**************************************************************************************************************************************/
      /*! exports provided: DialogFollowedRatingComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogFollowedRatingComponent',
          function() {
            return DialogFollowedRatingComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
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

        var DialogFollowedRatingComponent = /** @class */ (function(_super) {
          __extends(DialogFollowedRatingComponent, _super);
          function DialogFollowedRatingComponent(messageService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'DialogFollowedRatingComponent'
              ) || this;
            _this.messageService = messageService;
            _this.isEditable = true;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.selectedRating = {};
            _this.showDialog = false;
            return _this;
          }
          DialogFollowedRatingComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
            if (!!this.bireRatingInput && !!this.bireRatingInput.ratingCode) {
              this.selectedRating = this.bireRatingInput;
            }
          };
          DialogFollowedRatingComponent.prototype.showRatingDialog = function() {
            this.showDialog = false;
            if (!this.isReadOpenMode) {
              this.showDialog = true;
            }
          };
          DialogFollowedRatingComponent.prototype.validate = function() {
            if (!!this.selectedRating && !this.selectedRating.ratingCode) {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            } else {
              this.onValidated.emit(this.selectedRating);
              this.closeDialog();
            }
          };
          /**
           * Event on setting rating
           */
          DialogFollowedRatingComponent.prototype.setSelectedRating = function(bireRatingDTO) {
            if (!!bireRatingDTO) {
              this.selectedRating = bireRatingDTO;
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogFollowedRatingComponent.prototype,
            'bireRatingInput',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogFollowedRatingComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogFollowedRatingComponent.prototype,
            'onValidated',
            void 0
          );
          DialogFollowedRatingComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-followed-rating',
                template: __webpack_require__(
                  /*! ./dialog-followed-rating.component.html */ './src/app/main/engineering-management/applicable-configuration/form/dialog-followed-rating/dialog-followed-rating.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService']
              ])
            ],
            DialogFollowedRatingComponent
          );
          return DialogFollowedRatingComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-oem-partner/dialog-oem-partner.component.html':
      /*!********************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-oem-partner/dialog-oem-partner.component.html ***!
  \********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="20">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".oemPartnerMgmt" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n          <label class="form-label">{{ getComponentName() + ".partnerCode" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              [disabled]="isReadOpenMode"\r\n              class="aw-dropdown fixed-width"\r\n              [options]="oemPartnersList"\r\n              [(ngModel)]="selectedPartner"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n          <label class="form-label">{{ getComponentName() + ".itemMinRange" | translate }}</label>\r\n\r\n          <div class="form-control display--flex-row">\r\n            <input\r\n              type="text"\r\n              class="aw-input flex--1"\r\n              [disabled]="isReadOpenMode"\r\n              [(ngModel)]="bireItemDTOIdMin.chapter"\r\n              maxlength="2"\r\n            />\r\n            <span class="separator">-</span>\r\n            <input\r\n              type="text"\r\n              class="aw-input flex--1"\r\n              [disabled]="isReadOpenMode"\r\n              [(ngModel)]="bireItemDTOIdMin.section"\r\n              maxlength="2"\r\n            />\r\n            <span class="separator">-</span>\r\n            <input\r\n              type="text"\r\n              class="aw-input flex--1"\r\n              [disabled]="isReadOpenMode"\r\n              [(ngModel)]="bireItemDTOIdMin.subject"\r\n              maxlength="2"\r\n            />\r\n            <span class="separator">-</span>\r\n            <input\r\n              type="text"\r\n              class="aw-input flex--3"\r\n              [disabled]="isReadOpenMode"\r\n              [(ngModel)]="bireItemDTOIdMin.sheet"\r\n              maxlength="5"\r\n            />\r\n            <span class="separator">-</span>\r\n            <input\r\n              type="text"\r\n              class="aw-input flex--3"\r\n              [disabled]="isReadOpenMode"\r\n              [(ngModel)]="bireItemDTOIdMin.marks"\r\n              maxlength="5"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n          <label class="form-label">{{ getComponentName() + ".itemMaxRange" | translate }}</label>\r\n\r\n          <div class="form-control display--flex-row">\r\n            <input\r\n              type="text"\r\n              class="aw-input flex--1"\r\n              [disabled]="isReadOpenMode"\r\n              [(ngModel)]="bireItemDTOIdMax.chapter"\r\n              maxlength="2"\r\n            />\r\n            <span class="separator">-</span>\r\n            <input\r\n              type="text"\r\n              class="aw-input flex--1"\r\n              [disabled]="isReadOpenMode"\r\n              [(ngModel)]="bireItemDTOIdMax.section"\r\n              maxlength="2"\r\n            />\r\n            <span class="separator">-</span>\r\n            <input\r\n              type="text"\r\n              class="aw-input flex--1"\r\n              [disabled]="isReadOpenMode"\r\n              [(ngModel)]="bireItemDTOIdMax.subject"\r\n              maxlength="2"\r\n            />\r\n            <span class="separator">-</span>\r\n            <input\r\n              type="text"\r\n              class="aw-input flex--3"\r\n              [disabled]="isReadOpenMode"\r\n              [(ngModel)]="bireItemDTOIdMax.sheet"\r\n              maxlength="5"\r\n            />\r\n            <span class="separator">-</span>\r\n            <input\r\n              type="text"\r\n              class="aw-input flex--3"\r\n              [disabled]="isReadOpenMode"\r\n              [(ngModel)]="bireItemDTOIdMax.marks"\r\n              maxlength="5"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      type="button"\r\n      color="primary"\r\n      mat-raised-button\r\n      (click)="validate()"\r\n      [disabled]="!selectedPartner || !bireItemDTOIdMin.chapter || !bireItemDTOIdMax.chapter"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-oem-partner/dialog-oem-partner.component.scss':
      /*!********************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-oem-partner/dialog-oem-partner.component.scss ***!
  \********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .separator {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L2FwcGxpY2FibGUtY29uZmlndXJhdGlvbi9mb3JtL2RpYWxvZy1vZW0tcGFydG5lci9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcZW5naW5lZXJpbmctbWFuYWdlbWVudFxcYXBwbGljYWJsZS1jb25maWd1cmF0aW9uXFxmb3JtXFxkaWFsb2ctb2VtLXBhcnRuZXJcXGRpYWxvZy1vZW0tcGFydG5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L2FwcGxpY2FibGUtY29uZmlndXJhdGlvbi9mb3JtL2RpYWxvZy1vZW0tcGFydG5lci9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDcUJFLGFBQWE7RUFDYixtQkFBbUI7RURsQmpCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L2FwcGxpY2FibGUtY29uZmlndXJhdGlvbi9mb3JtL2RpYWxvZy1vZW0tcGFydG5lci9kaWFsb2ctb2VtLXBhcnRuZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLnNlcGFyYXRvciB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-oem-partner/dialog-oem-partner.component.ts':
      /*!******************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-oem-partner/dialog-oem-partner.component.ts ***!
  \******************************************************************************************************************************/
      /*! exports provided: DialogOemPartnerComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogOemPartnerComponent',
          function() {
            return DialogOemPartnerComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _applicable_configuration_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../applicable-configuration-form.service */ './src/app/main/engineering-management/applicable-configuration/form/applicable-configuration-form.service.ts'
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

        var DialogOemPartnerComponent = /** @class */ (function(_super) {
          __extends(DialogOemPartnerComponent, _super);
          function DialogOemPartnerComponent(messageService, applicableConfigurationFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'DialogOemPartnerComponent'
              ) || this;
            _this.messageService = messageService;
            _this.applicableConfigurationFormService = applicableConfigurationFormService;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            // this.selectedPartner = '';
            _this.bireItemDTOIdMin = {
              familyCode: '',
              variantCode: '',
              chapter: '',
              section: '',
              subject: '',
              sheet: '',
              marks: '',
              structureType: ''
            };
            _this.bireItemDTOIdMax = {
              familyCode: '',
              variantCode: '',
              chapter: '',
              section: '',
              subject: '',
              sheet: '',
              marks: '',
              structureType: ''
            };
            _this.bireItemDTOIdMax = __assign({}, _this.bireItemDTOIdMin);
            return _this;
          }
          DialogOemPartnerComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
            this.fetchOEMPartnerList();
          };
          // Event to fill OEM Partner dropdown
          DialogOemPartnerComponent.prototype.fetchOEMPartnerList = function() {
            var _this = this;
            var oemCustomer = {};
            this.applicableConfigurationFormService
              .findOEMPartnersBySearchCriteria(oemCustomer)
              .subscribe(function(result) {
                _this.oemPartnersList = result;
                if (_this.oemPartnerMinSelected && _this.oemPartnerMaxSelected) {
                  _this.oemPartnersList.forEach(function(results) {
                    if (results.value === _this.oemPartnerMinSelected.structureType) {
                      _this.selectedPartner = _this.oemPartnerMinSelected.structureType;
                    }
                  });
                  _this.bireItemDTOIdMax = _this.oemPartnerMaxSelected;
                  _this.bireItemDTOIdMin = _this.oemPartnerMinSelected;
                }
              });
          };
          DialogOemPartnerComponent.prototype.cancel = function() {
            this.display = false;
          };
          // Event on validate click
          DialogOemPartnerComponent.prototype.validate = function() {
            if (!this.selectedPartner) {
              this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
              return;
            }
            var birePartner = {
              partnerCode: this.selectedPartner,
              itemRangeMin:
                this.bireItemDTOIdMin.chapter +
                '-' +
                this.bireItemDTOIdMin.section +
                '-' +
                this.bireItemDTOIdMin.subject +
                '-' +
                this.bireItemDTOIdMin.sheet +
                '-' +
                this.bireItemDTOIdMin.marks,
              itemRangeMax:
                this.bireItemDTOIdMax.chapter +
                '-' +
                this.bireItemDTOIdMax.section +
                '-' +
                this.bireItemDTOIdMax.subject +
                '-' +
                this.bireItemDTOIdMax.sheet +
                '-' +
                this.bireItemDTOIdMax.marks
            };
            if (!this.isItemRangeValid(birePartner)) {
              return;
            }
            if (!this.isDuplicateEntry(birePartner)) {
              this.onValidated.emit(birePartner);
              this.cancel();
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOfDuplicateEntry'));
            }
          };
          // Is Item Range Valid or not
          DialogOemPartnerComponent.prototype.isItemRangeValid = function(birePartner) {
            if (!this.bireItemDTOIdMin.chapter || !this.bireItemDTOIdMax.chapter) {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOfValidChapterRequired'));
              return false;
            }
            var minItems = birePartner.itemRangeMin.split('-');
            var maxItems = birePartner.itemRangeMax.split('-');
            for (var i = 0; i < minItems.length; i++) {
              if (minItems[i] && maxItems[i]) {
                // Skip in case of equal, both alphabet, min has alpha and max has number
                if (
                  minItems[i] === maxItems[i] ||
                  (isNaN(minItems[i]) && isNaN(maxItems[i])) ||
                  (isNaN(minItems[i]) && !isNaN(maxItems[i]))
                ) {
                  continue;
                }
                // If Max has alphabet and min with numeric
                if (isNaN(maxItems[i]) && !isNaN(minItems[i])) {
                  this.messageService.showErrorMessage(
                    'Item Range is not correct! : ' + birePartner.itemRangeMin + '/' + birePartner.itemRangeMax
                  );
                  return false;
                }
                if (minItems[i] > maxItems[i]) {
                  this.messageService.showErrorMessage(
                    'Item Range is not correct! : ' + birePartner.itemRangeMin + '/' + birePartner.itemRangeMax
                  );
                  return false;
                }
              }
            }
            return true;
          };
          // Is duplicate entry being added
          DialogOemPartnerComponent.prototype.isDuplicateEntry = function(birePartner) {
            var _this = this;
            var isFound = false;
            this.oemPartners.forEach(function(results) {
              if (
                results.partnerCode === _this.getPartnerLabel(birePartner.partnerCode) &&
                // results.itemRangeMax === birePartner.itemRangeMax &&
                results.itemRangeMin === birePartner.itemRangeMin
              ) {
                isFound = true;
              }
            });
            return isFound ? true : false;
          };
          DialogOemPartnerComponent.prototype.getPartnerLabel = function(val) {
            var label = '';
            this.oemPartnersList.forEach(function(res) {
              if (res.value === val) {
                label = res.label;
              }
            });
            return label;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogOemPartnerComponent.prototype,
            'onValidated',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogOemPartnerComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogOemPartnerComponent.prototype,
            'oemPartnerMaxSelected',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogOemPartnerComponent.prototype,
            'oemPartnerMinSelected',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogOemPartnerComponent.prototype,
            'oemPartners',
            void 0
          );
          DialogOemPartnerComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-oem-partner',
                template: __webpack_require__(
                  /*! ./dialog-oem-partner.component.html */ './src/app/main/engineering-management/applicable-configuration/form/dialog-oem-partner/dialog-oem-partner.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-oem-partner.component.scss */ './src/app/main/engineering-management/applicable-configuration/form/dialog-oem-partner/dialog-oem-partner.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService'],
                _applicable_configuration_form_service__WEBPACK_IMPORTED_MODULE_4__[
                  'ApplicableConfigurationFormService'
                ]
              ])
            ],
            DialogOemPartnerComponent
          );
          return DialogOemPartnerComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-removal-order/dialog-removal-order.component.html':
      /*!************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-removal-order/dialog-removal-order.component.html ***!
  \************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n        <label class="form-label">{{ getComponentName() + ".unmountCode" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            [options]="disassemblyBefore"\r\n            [disabled]="isReadOpenMode"\r\n            [(ngModel)]="removalOrder.unmountCode"\r\n            appendTo="body"\r\n            placeholder="&nbsp;"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n        <label class="form-label">{{ getComponentName() + ".unmUnmountCode" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            [options]="disassemblyAfter"\r\n            [disabled]="isReadOpenMode"\r\n            [(ngModel)]="removalOrder.unmUnmountCode"\r\n            appendTo="body"\r\n            placeholder="&nbsp;"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="\r\n        removalOrder.unmountCode === undefined ||\r\n        removalOrder.unmountCode === null ||\r\n        removalOrder.unmUnmountCode === undefined ||\r\n        removalOrder.unmUnmountCode === null\r\n      "\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/form/dialog-removal-order/dialog-removal-order.component.ts':
      /*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/form/dialog-removal-order/dialog-removal-order.component.ts ***!
  \**********************************************************************************************************************************/
      /*! exports provided: DialogRemovalOrderComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogRemovalOrderComponent',
          function() {
            return DialogRemovalOrderComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
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

        var DialogRemovalOrderComponent = /** @class */ (function(_super) {
          __extends(DialogRemovalOrderComponent, _super);
          function DialogRemovalOrderComponent(messageService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'DialogRemovalOrderComponent'
              ) || this;
            _this.messageService = messageService;
            _this.disassemblyBefore = [];
            _this.disassemblyAfter = [];
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          // To bind drop-down
          DialogRemovalOrderComponent.prototype.loadDisassemblyBeforeAfter = function() {
            this.disassemblyBefore = this.disassemblyList;
            this.disassemblyAfter = this.disassemblyList;
          };
          DialogRemovalOrderComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
            this.loadDisassemblyBeforeAfter();
            if (!this.removalOrder) {
              this.removalOrder = {};
            }
            if (this.disassemblyList) {
              this.removalOrder.unmountCode = this.disassemblyList[0].label;
              this.removalOrder.unmUnmountCode = this.disassemblyList[0].label;
            }
          };
          DialogRemovalOrderComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogRemovalOrderComponent.prototype.validate = function() {
            // Validate that it should not be same
            // if (
            //   this.removalOrder.unmountCode &&
            //   this.removalOrder.unmountCode.length > 0 &&
            //   this.removalOrder.unmUnmountCode &&
            //   this.removalOrder.unmUnmountCode.length > 0 &&
            //   this.removalOrder.unmountCode === this.removalOrder.unmUnmountCode
            // ) {
            //   this.messageService.showWarningMessage('');
            // } else {
            //   this.onValidated.emit(this.removalOrder);
            //   this.display = false;
            // }
            if (!this.removalOrder.unmountCode && !this.removalOrder.unmUnmountCode) {
              this.messageService.showWarningMessage(this.getTranslateKey('fillReqFields'));
            } else {
              if (this.removalOrder.unmountCode === this.removalOrder.unmUnmountCode) {
                this.messageService.showWarningMessage(this.getTranslateKey('warningOnSamedisassembly'));
              } else {
                this.onValidated.emit(this.removalOrder);
                this.display = false;
              }
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogRemovalOrderComponent.prototype,
            'bireVariantVersionSelected',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogRemovalOrderComponent.prototype,
            'removalOrder',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogRemovalOrderComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogRemovalOrderComponent.prototype,
            'onValidated',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogRemovalOrderComponent.prototype,
            'disassemblyList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogRemovalOrderComponent.prototype,
            'disassemblyGroupRemoved',
            void 0
          );
          DialogRemovalOrderComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-removal-order',
                template: __webpack_require__(
                  /*! ./dialog-removal-order.component.html */ './src/app/main/engineering-management/applicable-configuration/form/dialog-removal-order/dialog-removal-order.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService']
              ])
            ],
            DialogRemovalOrderComponent
          );
          return DialogRemovalOrderComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/search/applicable-configuration-search.component.html':
      /*!****************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/search/applicable-configuration-search.component.html ***!
  \****************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "page.searchPage" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" mat-raised-button (click)="openNewApplicableConfigration()" *ngIf="hasUpdateAccessRight">\r\n      {{ "global.create" | translate }}\r\n    </button>\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button type="button" mat-menu-item (click)="refresh()">\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <!-- Applicable configurations table -->\r\n\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "global.results" | translate }}\r\n                  ({{ applicableConfTableDataSource ? applicableConfTableDataSource.dataCount : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <a-table [dataSource]="applicableConfTableDataSource">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf="applicableConfTableDataSource.dataSelectionCount === 1"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="openExportLimits()"\r\n                  >\r\n                    {{ componentData.componentId + ".exportLimits" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    type="button"\r\n                    mat-raised-button\r\n                    *ngIf="applicableConfTableDataSource.hasData && !applicableConfTableDataSource.hasDataSelection"\r\n                    (click)="exportTable()"\r\n                  >\r\n                    {{ "global.export" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="hasManageAccessRight && applicableConfTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    color="warn"\r\n                    (click)="deleteApplicableConfiguration()"\r\n                  >\r\n                    {{ "global.delete" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="applicableConfTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="openSelectedApplicableConfiguration()"\r\n                  >\r\n                    {{ "global.open" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/search/applicable-configuration-search.component.ts':
      /*!**************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/search/applicable-configuration-search.component.ts ***!
  \**************************************************************************************************************************/
      /*! exports provided: ApplicableConfigurationSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ApplicableConfigurationSearchComponent',
          function() {
            return ApplicableConfigurationSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/utils/label-value-utils */ './src/app/shared/utils/label-value-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _applicable_configuration_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./applicable-configuration-search.service */ './src/app/main/engineering-management/applicable-configuration/search/applicable-configuration-search.service.ts'
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

        var ApplicableConfigurationSearchComponent = /** @class */ (function(_super) {
          __extends(ApplicableConfigurationSearchComponent, _super);
          function ApplicableConfigurationSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            applicableConfigurationSearchService,
            confirmationService,
            exportService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.applicableConfigurationSearchService = applicableConfigurationSearchService;
            _this.confirmationService = confirmationService;
            _this.exportService = exportService;
            _this.propertiesService = propertiesService;
            _this.searchObject = {};
            _this.showAdvancedCriteria = false;
            _this.flFunctions = [];
            _this.structureTypes = [];
            _this.initApplicableConfTableDataSource();
            return _this;
          }
          ApplicableConfigurationSearchComponent_1 = ApplicableConfigurationSearchComponent;
          ApplicableConfigurationSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
              .ENG_APPLICABLE_CONFIGURATION_SEARCH;
          };
          ApplicableConfigurationSearchComponent.prototype.ngOnInit = function() {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['forkJoin'])([
              this.propertiesService.getFamilyFunctionMap(),
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__['GenericPropertyConstants']
                  .STRUCTURE_TYPE_MAP
              )
            ]).subscribe(function(_a) {
              var _b = __read(_a, 2),
                itemFamilyList = _b[0],
                structureTypeList = _b[1];
              _this.flFunctions = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__['ListUtils'].orEmpty(
                itemFamilyList
              );
              _this.structureTypes = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__['ListUtils'].orEmpty(
                structureTypeList
              );
              _this.search();
            });
          };
          ApplicableConfigurationSearchComponent.prototype.initApplicableConfTableDataSource = function() {
            this.applicableConfTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'familyCode',
                  translateKey: this.getTranslateKey('familyCode'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__['ColumnAlignment'].LEFT,
                  width: '10%'
                },
                {
                  field: 'familyName',
                  translateKey: this.getTranslateKey('familyName'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__['ColumnAlignment'].LEFT,
                  width: '18%'
                },
                {
                  field: 'familyFunction',
                  translateKey: this.getTranslateKey('familyFunction'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__['ColumnAlignment'].LEFT,
                  width: '18%'
                },
                {
                  field: 'variantCode',
                  translateKey: this.getTranslateKey('variantCode'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__['ColumnAlignment'].LEFT,
                  width: '18%'
                },
                {
                  field: 'variantName',
                  translateKey: this.getTranslateKey('variantName'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__['ColumnAlignment'].LEFT,
                  width: '18%'
                },
                {
                  field: 'structureType',
                  translateKey: this.getTranslateKey('structureType'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__['ColumnAlignment'].LEFT,
                  width: '18%'
                }
              ],
              data: []
            });
          };
          ApplicableConfigurationSearchComponent.prototype.deleteApplicableConfiguration = function() {
            var _this = this;
            if (this.applicableConfTableDataSource.hasDataSelection) {
              this.confirmationService.confirmDelete({
                messageKey: 'global.deleteConfirmationMsg',
                accept: function() {
                  var selectedBireVariantVersionDTOId = new Array();
                  _this.applicableConfTableDataSource.dataSelection.forEach(function(applicableConfiguration) {
                    if (applicableConfiguration) {
                      _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_15__[
                        'LabelValueUtils'
                      ].labelToStringValue(applicableConfiguration, 'structureType', _this.structureTypes);
                      if (
                        !!applicableConfiguration.familyCode &&
                        !!applicableConfiguration.structureType &&
                        !!applicableConfiguration.variantCode
                      ) {
                        var bireVariantVersionDTOId = {
                          familyCode: applicableConfiguration.familyCode,
                          structureType: applicableConfiguration.structureType,
                          variantCode: applicableConfiguration.variantCode
                        };
                        selectedBireVariantVersionDTOId.push(bireVariantVersionDTOId);
                      } else {
                        _super.prototype.throwUnboundLocalError.call(
                          _this,
                          'deleteApplicableConfiguration',
                          'applicableConfiguration'
                        );
                      }
                    }
                  });
                  _this.applicableConfigurationSearchService
                    .removeBireVariantVersion(selectedBireVariantVersionDTOId)
                    .subscribe(
                      function(result) {
                        _this.messageService.showSuccessMessage('global.deleteSuccessMsg');
                        _this.applicableConfTableDataSource.deleteDataSelection();
                      },
                      function() {
                        _this.messageService.showErrorMessage('global.deleteErrorMsg');
                      }
                    );
                }
              });
            }
          };
          ApplicableConfigurationSearchComponent.prototype.exportTable = function() {
            if (!!this.componentData) {
              this.exportService.toExcel(
                this.modifyExportColumns(this.applicableConfTableDataSource.dataSrc),
                ApplicableConfigurationSearchComponent_1.RESULTS_TABLE_EXPORT_NAME,
                this.componentData.componentId
              );
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'exportTable', 'this.componentData');
            }
          };
          ApplicableConfigurationSearchComponent.prototype.modifyExportColumns = function(resultArr) {
            var exportArr = [];
            resultArr.forEach(function(res) {
              var json = {};
              var keys = Object.keys(res);
              keys.forEach(function(key) {
                if (
                  key !== 'statusDate' &&
                  key !== 'statusUser' &&
                  key !== 'statusState' &&
                  key !== 'variantRevisionDate' &&
                  key !== 'variantRevisionNumber'
                ) {
                  json[key] = res[key];
                }
              });
              exportArr.push(json);
            });
            return exportArr;
          };
          ApplicableConfigurationSearchComponent.prototype.refresh = function() {
            this.search();
          };
          ApplicableConfigurationSearchComponent.prototype.openNewApplicableConfigration = function() {
            this.openApplicableConfiguration(
              undefined,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Create
            );
          };
          ApplicableConfigurationSearchComponent.prototype.openSelectedApplicableConfiguration = function() {
            var _this = this;
            this.applicableConfTableDataSource.dataSelection.forEach(function(applicableConfiguration) {
              if (!!applicableConfiguration) {
                if (
                  !!applicableConfiguration.familyCode &&
                  applicableConfiguration.familyCode.trim().length > 0 &&
                  !!applicableConfiguration.variantCode &&
                  applicableConfiguration.variantCode.trim().length > 0 &&
                  !!applicableConfiguration.structureType &&
                  applicableConfiguration.structureType.trim().length > 0
                ) {
                  _this.openApplicableConfiguration(
                    applicableConfiguration,
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Read
                  );
                } else {
                  _this.messageService.showWarningMessage(_this.getTranslateKey('errorOnMissingCustomerCode'));
                }
              }
            });
          };
          ApplicableConfigurationSearchComponent.prototype.openApplicableConfiguration = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                  .ENG_APPLICABLE_CONFIGURATION_FORM,
              openMode: openMode
            };
            if (!!objectId && !!objectId.familyFunction) {
              var matchingFlFunction = this.flFunctions.find(function(elt) {
                return elt.label === objectId.familyFunction;
              });
              var familyFunction = matchingFlFunction ? matchingFlFunction.value : undefined;
              var matchingStructureType = this.structureTypes.find(function(elt) {
                return elt.label === objectId.structureType;
              });
              var structureType = matchingStructureType ? matchingStructureType.value : undefined;
              var bireVariantVersionDTO = {
                familyFunction: familyFunction,
                structureType: structureType,
                familyCode: objectId.familyCode,
                variantCode: objectId.variantCode,
                variantName: objectId.variantName,
                variantRevisionNumber: objectId.variantRevisionNumber,
                variantRevisionDate: objectId.variantRevisionDate,
                familyName: objectId.familyName,
                statusDate: objectId.statusDate,
                statusState: objectId.statusState,
                statusUser: objectId.statusUser
              };
              data.objectId = this.serializationService.serialize(bireVariantVersionDTO);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ApplicableConfigurationSearchComponent.prototype.formatFunctions = function(functionKey) {
            var selectedFunction = this.flFunctions.find(function(functions) {
              return functions.value === functionKey;
            });
            return !!selectedFunction && !!selectedFunction.label ? selectedFunction.label : '';
          };
          ApplicableConfigurationSearchComponent.prototype.formatStructures = function(structureKey) {
            var selectedStructure = this.structureTypes.find(function(structures) {
              return structures.value === structureKey;
            });
            return !!selectedStructure && !!selectedStructure.label ? selectedStructure.label : '';
          };
          ApplicableConfigurationSearchComponent.prototype.resetSearchCriteria = function() {
            this.searchObject = {};
          };
          ApplicableConfigurationSearchComponent.prototype.search = function() {
            var _this = this;
            this.applicableConfigurationSearchService.findFamilyVariantVersion().subscribe(function(result) {
              if (result) {
                result.list.forEach(function(element) {
                  _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_15__['LabelValueUtils'].stringValueToLabel(
                    element,
                    'structureType',
                    _this.structureTypes
                  );
                  _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_15__['LabelValueUtils'].stringValueToLabel(
                    element,
                    'familyFunction',
                    _this.flFunctions
                  );
                });
              }
              _this.setResultsTable(result);
            });
          };
          ApplicableConfigurationSearchComponent.prototype.setResultsTable = function(result) {
            if (!!result) {
              this.applicableConfTableDataSource.setData(
                result.list.sort(function(e1, e2) {
                  if (
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_17__['StringUtils'].isNullOrEmpty(e1.familyCode)
                  ) {
                    return 1;
                  } else if (
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_17__['StringUtils'].isNullOrEmpty(e2.familyCode)
                  ) {
                    return -1;
                  } else {
                    return e1.familyCode.localeCompare(e2.familyCode);
                  }
                })
              );
            }
            this.applicableConfTableDataSource.dataSelection = [];
          };
          ApplicableConfigurationSearchComponent.prototype.returnStructureValue = function(label) {
            var value;
            this.structureTypes.forEach(function(res) {
              if (res.label === label) {
                value = res.value;
              }
            });
            return value;
          };
          ApplicableConfigurationSearchComponent.prototype.openExportLimits = function() {
            var _this = this;
            var selectedApplicableConf = this.applicableConfTableDataSource.dataSelection;
            _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_15__['LabelValueUtils'].stringValueToLabel(
              selectedApplicableConf,
              'structureType',
              this.structureTypes
            );
            var bireVariantVersionDto = {
              familyCode: selectedApplicableConf[0].familyCode,
              structureType: this.returnStructureValue(selectedApplicableConf[0].structureType),
              variantCode: selectedApplicableConf[0].variantCode,
              variantName: selectedApplicableConf[0].variantName,
              variantRevisionNumber: selectedApplicableConf[0].variantRevisionNumber,
              variantRevisionDate: selectedApplicableConf[0].variantRevisionDate,
              statusState: selectedApplicableConf[0].statusState,
              statusUser: selectedApplicableConf[0].statusUser,
              statusDate: selectedApplicableConf[0].statusDate
            };
            this.applicableConfigurationSearchService.exportLimitsData(bireVariantVersionDto).subscribe(
              function(result) {
                if (!!_this.componentData) {
                  // this.downLoadFiles(result, templateName);
                  if (result.length === 0) {
                    var dto = {
                      atachapter: '',
                      limitValue: '',
                      unitCode: '',
                      familyVariant: '',
                      itemNumber: '',
                      partNumber: '',
                      counter: '',
                      rating: '',
                      limitIsUpdatable: '',
                      partDesignation: ''
                    };
                    result.push(dto);
                  }
                  _this.exportService.toExcel(
                    result,
                    ApplicableConfigurationSearchComponent_1.RESULTS_TABLE_EXPORT_NAME,
                    _this.componentData.componentId
                  );
                } else {
                  _super.prototype.throwUnboundLocalError.call(_this, 'openExportLimits', 'this.componentData');
                }
              },
              function() {
                _this.messageService.showErrorMessage('errorExportLimits');
              }
            );
          };
          var ApplicableConfigurationSearchComponent_1;
          ApplicableConfigurationSearchComponent.RESULTS_TABLE_EXPORT_NAME = 'applicable-configuration-list';
          ApplicableConfigurationSearchComponent = ApplicableConfigurationSearchComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-applicable-configuration-search',
                template: __webpack_require__(
                  /*! ./applicable-configuration-search.component.html */ './src/app/main/engineering-management/applicable-configuration/search/applicable-configuration-search.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__['TabService'],
                _applicable_configuration_search_service__WEBPACK_IMPORTED_MODULE_18__[
                  'ApplicableConfigurationSearchService'
                ],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__['ConfirmationService'],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_7__['ExportService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__['PropertiesService']
              ])
            ],
            ApplicableConfigurationSearchComponent
          );
          return ApplicableConfigurationSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_14__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/applicable-configuration/search/applicable-configuration-search.service.ts':
      /*!************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/applicable-configuration/search/applicable-configuration-search.service.ts ***!
  \************************************************************************************************************************/
      /*! exports provided: ApplicableConfigurationSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ApplicableConfigurationSearchService',
          function() {
            return ApplicableConfigurationSearchService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
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

        var ApplicableConfigurationSearchService = /** @class */ (function(_super) {
          __extends(ApplicableConfigurationSearchService, _super);
          function ApplicableConfigurationSearchService(
            http,
            appConfigService,
            productStructureManagementApi,
            propertiesService
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.propertiesService = propertiesService;
            return _this;
          }
          ApplicableConfigurationSearchService.prototype.findFamilyVariantVersion = function() {
            var criteria = {
              useCase:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_3__['BidoFunctionTypeConstants']
                  .UC_MCH_BOM,
              module:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_3__['BidoFunctionTypeConstants']
                  .MODULE_FAMILY,
              familyCode: '',
              familyName: '',
              structureType: ''
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findFamilyVariantVersion,
              criteria
            );
          };
          ApplicableConfigurationSearchService.prototype.removeBireVariantVersion = function(bireVariantVersionDTOId) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.removeBireVariantVersion,
              bireVariantVersionDTOId
            );
          };
          // tslint:disable-next-line:no-any
          ApplicableConfigurationSearchService.prototype.exportLimitsData = function(bireVariantVersionDto) {
            // tslint:disable-next-line:no-any
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.exportLimitsData,
              bireVariantVersionDto
            );
          };
          ApplicableConfigurationSearchService.prototype.getFamilyFunctionMap = function() {
            return this.propertiesService.getValue('getFamilyFunctionMap');
          };
          ApplicableConfigurationSearchService.prototype.getStructureTypeMap = function() {
            return this.propertiesService.getValue('getStructureTypeMap');
          };
          ApplicableConfigurationSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__['AppConfigService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__[
                  'ProductStructureManagementApi'
                ],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__['PropertiesService']
              ])
            ],
            ApplicableConfigurationSearchService
          );
          return ApplicableConfigurationSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-status/dialog-status.component.html':
      /*!******************************************************************************!*\
  !*** ./src/app/shared/components/dialog-status/dialog-status.component.html ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".statusState" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="statusList"\r\n          [(ngModel)]="item.statusState"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          [disabled]="!isStatusEditable"\r\n          appendTo="body"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".statusDate" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-calendar\r\n          showButtonBar="true"\r\n          [monthNavigator]="true"\r\n          [yearNavigator]="true"\r\n          [yearRange]="sessionService.calendarYearRange"\r\n          class="aw-calendar"\r\n          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n          [locale]="sessionService.calendarFormat"\r\n          [(ngModel)]="item.statusDate"\r\n          [disabled]="true"\r\n          [showTime]="true"\r\n          appendTo="body"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".statusUser" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <input class="aw-input" type="text" [(ngModel)]="item.statusUser" [disabled]="true" />\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.close" | translate }}</button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-status/dialog-status.component.ts':
      /*!****************************************************************************!*\
  !*** ./src/app/shared/components/dialog-status/dialog-status.component.ts ***!
  \****************************************************************************/
      /*! exports provided: DialogStatusComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DialogStatusComponent', function() {
          return DialogStatusComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../services/session.service */ './src/app/shared/services/session.service.ts'
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

        var DialogStatusComponent = /** @class */ (function(_super) {
          __extends(DialogStatusComponent, _super);
          function DialogStatusComponent(sessionService, propertiesService, messageService) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'DialogStatusComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.propertiesService = propertiesService;
            _this.messageService = messageService;
            return _this;
          }
          DialogStatusComponent.prototype.ngOnInit = function() {
            this.loadStatusList();
          };
          DialogStatusComponent.prototype.close = function() {
            this.display = false;
          };
          DialogStatusComponent.prototype.loadStatusList = function() {
            var _this = this;
            var statusState = 'statusState';
            this.propertiesService
              .getObjectStatusList(
                this.isObjectTypeOfBireSbDTO,
                this.isObjectTypeOfBireEvolutionDTO,
                this.isObjectTypeOfBireMaintenancePlanDTO,
                this.item[statusState],
                this.isSapSession
              )
              .subscribe(
                function(result) {
                  _this.statusList = result;
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadStatusList'));
                }
              );
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogStatusComponent.prototype,
            'item',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogStatusComponent.prototype,
            'itemId',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isStatusEditable'),
              __metadata('design:type', Boolean)
            ],
            DialogStatusComponent.prototype,
            'isStatusEditable',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isObjectTypeOfBireSbDTO'),
              __metadata('design:type', Boolean)
            ],
            DialogStatusComponent.prototype,
            'isObjectTypeOfBireSbDTO',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isObjectTypeOfBireEvolutionDTO'),
              __metadata('design:type', Boolean)
            ],
            DialogStatusComponent.prototype,
            'isObjectTypeOfBireEvolutionDTO',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isObjectTypeOfBireMaintenancePlanDTO'),
              __metadata('design:type', Boolean)
            ],
            DialogStatusComponent.prototype,
            'isObjectTypeOfBireMaintenancePlanDTO',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isSapSession'),
              __metadata('design:type', Boolean)
            ],
            DialogStatusComponent.prototype,
            'isSapSession',
            void 0
          );
          DialogStatusComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-status',
                template: __webpack_require__(
                  /*! ./dialog-status.component.html */ './src/app/shared/components/dialog-status/dialog-status.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _services_session_service__WEBPACK_IMPORTED_MODULE_5__['SessionService'],
                _services_properties_service__WEBPACK_IMPORTED_MODULE_4__['PropertiesService'],
                _services_message_service__WEBPACK_IMPORTED_MODULE_3__['MessageService']
              ])
            ],
            DialogStatusComponent
          );
          return DialogStatusComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-status/dialog-status.module.ts':
      /*!*************************************************************************!*\
  !*** ./src/app/shared/components/dialog-status/dialog-status.module.ts ***!
  \*************************************************************************/
      /*! exports provided: DialogStatusModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DialogStatusModule', function() {
          return DialogStatusModule;
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
        /* harmony import */ var _dialog_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./dialog-status.component */ './src/app/shared/components/dialog-status/dialog-status.component.ts'
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
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__['DropdownModule']
        ];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [_dialog_status_component__WEBPACK_IMPORTED_MODULE_7__['DialogStatusComponent']];
        var DialogStatusModule = /** @class */ (function() {
          function DialogStatusModule() {}
          DialogStatusModule = __decorate(
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
                )
              })
            ],
            DialogStatusModule
          );
          return DialogStatusModule;
        })();

        /***/
      },

    /***/ './src/app/shared/utils/image-utils.ts':
      /*!*********************************************!*\
  !*** ./src/app/shared/utils/image-utils.ts ***!
  \*********************************************/
      /*! exports provided: ImageUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ImageUtils', function() {
          return ImageUtils;
        });
        /* harmony import */ var _string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./string-utils */ './src/app/shared/utils/string-utils.ts'
        );

        var ImageUtils = /** @class */ (function() {
          function ImageUtils() {}
          ImageUtils.getBase64Prefix = function(extension) {
            var formattedExtension = '';
            if (this.isJpg(extension)) {
              formattedExtension = ImageUtils.JPG_BASE64_ID;
            } else if (this.isPng(extension)) {
              formattedExtension = ImageUtils.PNG_BASE64_ID;
            }
            return _string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isEmpty(formattedExtension)
              ? ''
              : 'data:image/' + formattedExtension + ';base64,';
          };
          ImageUtils.isJpg = function(extension) {
            return this.isFormatMatching(extension, ImageUtils.JPG_EXTENSION_LIST);
          };
          ImageUtils.isPng = function(extension) {
            return this.isFormatMatching(extension, ImageUtils.PNG_EXTENSION_LIST);
          };
          ImageUtils.isFormatMatching = function(extension, validExtensionList) {
            if (_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(extension)) {
              return false;
            } else {
              var extensionToCheck_1 = extension.toLowerCase();
              return validExtensionList.some(function(elt) {
                return elt === extensionToCheck_1;
              });
            }
          };
          ImageUtils.JPG_BASE64_ID = 'jpg';
          ImageUtils.PNG_BASE64_ID = 'png';
          ImageUtils.JPG_EXTENSION_LIST = ['jpeg', 'jpg'];
          ImageUtils.PNG_EXTENSION_LIST = ['png'];
          return ImageUtils;
        })();

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
//# sourceMappingURL=engineering-management-applicable-configuration-applicable-configuration-module.js.map
