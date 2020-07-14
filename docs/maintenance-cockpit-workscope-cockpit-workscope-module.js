(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['maintenance-cockpit-workscope-cockpit-workscope-module'],
  {
    /***/ './node_modules/primeng/chart.js':
      /*!***************************************!*\
  !*** ./node_modules/primeng/chart.js ***!
  \***************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* Shorthand */

        function __export(m) {
          for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
        Object.defineProperty(exports, '__esModule', { value: true });
        __export(
          __webpack_require__(/*! ./components/chart/chart */ './node_modules/primeng/components/chart/chart.js')
        );

        /***/
      },

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

    /***/ './node_modules/primeng/treetable.js':
      /*!*******************************************!*\
  !*** ./node_modules/primeng/treetable.js ***!
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
            /*! ./components/treetable/treetable */ './node_modules/primeng/components/treetable/treetable.js'
          )
        );

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/cockpit-workscope.module.ts':
      /*!********************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/cockpit-workscope.module.ts ***!
  \********************************************************************************/
      /*! exports provided: CockpitWorkscopeModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'CockpitWorkscopeModule', function() {
          return CockpitWorkscopeModule;
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
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/chart */ './node_modules/primeng/chart.js'
        );
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/checkbox */ './node_modules/primeng/checkbox.js'
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/inputtextarea */ './node_modules/primeng/inputtextarea.js'
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/primeng */ './node_modules/primeng/primeng.js'
        );
        /* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_primeng__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/progressbar */ './node_modules/primeng/progressbar.js'
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! primeng/treetable */ './node_modules/primeng/treetable.js'
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_treetable__WEBPACK_IMPORTED_MODULE_11__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_api_workscope_component_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/api/workscope-component.api */ './src/app/shared/api/workscope-component.api.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_add_edit_inventory_add_edit_inventory_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/components/add-edit-inventory/add-edit-inventory.module */ './src/app/shared/components/add-edit-inventory/add-edit-inventory.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_cockpit_workscope_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./form/cockpit-workscope-form.component */ './src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.component.ts'
        );
        /* harmony import */ var _form_cockpit_workscope_form_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./form/cockpit-workscope-form.service */ './src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.service.ts'
        );
        /* harmony import */ var _form_load_workscope_popup_load_workscope_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./form/load-workscope-popup/load-workscope-popup.component */ './src/app/main/maintenance/cockpit-workscope/form/load-workscope-popup/load-workscope-popup.component.ts'
        );
        /* harmony import */ var _form_manage_configuration_manage_configuration_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./form/manage-configuration/manage-configuration-form.component */ './src/app/main/maintenance/cockpit-workscope/form/manage-configuration/manage-configuration-form.component.ts'
        );
        /* harmony import */ var _form_manage_removal_causes_manage_removal_causes_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./form/manage-removal-causes/manage-removal-causes-form.component */ './src/app/main/maintenance/cockpit-workscope/form/manage-removal-causes/manage-removal-causes-form.component.ts'
        );
        /* harmony import */ var _form_workscope_import_popup_workscope_import_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./form/workscope-import-popup/workscope-import-popup.component */ './src/app/main/maintenance/cockpit-workscope/form/workscope-import-popup/workscope-import-popup.component.ts'
        );
        /* harmony import */ var _form_workscope_table_filters_workscope_table_filters_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./form/workscope-table-filters/workscope-table-filters.component */ './src/app/main/maintenance/cockpit-workscope/form/workscope-table-filters/workscope-table-filters.component.ts'
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
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__['TooltipModule'],
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__['ChartModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__['CheckboxModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          primeng_treetable__WEBPACK_IMPORTED_MODULE_11__['TreeTableModule'],
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__['ProgressBarModule'],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__['ModalModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_9__['TableModule'],
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__['InputTextareaModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__['SelectButtonModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__['DropdownModule'],
          primeng_primeng__WEBPACK_IMPORTED_MODULE_6__['FileUploadModule'],
          primeng_primeng__WEBPACK_IMPORTED_MODULE_6__['OverlayPanelModule'],
          _shared_components_add_edit_inventory_add_edit_inventory_module__WEBPACK_IMPORTED_MODULE_16__[
            'AddEditInventoryModule'
          ],
          primeng_primeng__WEBPACK_IMPORTED_MODULE_6__['AutoCompleteModule'],
          primeng_primeng__WEBPACK_IMPORTED_MODULE_6__['SplitButtonModule']
        ];
        var INTERNAL_MODULES = [];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _form_load_workscope_popup_load_workscope_popup_component__WEBPACK_IMPORTED_MODULE_21__[
            'LoadWorkscopePopupComponent'
          ],
          _form_workscope_table_filters_workscope_table_filters_component__WEBPACK_IMPORTED_MODULE_25__[
            'WorkscopeTableFilterComponent'
          ],
          _form_workscope_import_popup_workscope_import_popup_component__WEBPACK_IMPORTED_MODULE_24__[
            'WorkscopeImportPopupComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _form_cockpit_workscope_form_component__WEBPACK_IMPORTED_MODULE_19__['CockpitWorkscopeFormComponent'],
          _form_manage_configuration_manage_configuration_form_component__WEBPACK_IMPORTED_MODULE_22__[
            'ManageConfigurationFormComponent'
          ],
          _form_manage_removal_causes_manage_removal_causes_form_component__WEBPACK_IMPORTED_MODULE_23__[
            'ManageRemovalCausesFormComponent'
          ]
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _form_cockpit_workscope_form_service__WEBPACK_IMPORTED_MODULE_20__['CockpitWorkscopeFormService']
        ];
        /******************************************************************************
         * Api's
         *************************************************************************** */
        var APIS = [_shared_api_workscope_component_api__WEBPACK_IMPORTED_MODULE_14__['WorkscopeComponentApi']];
        var CockpitWorkscopeModule = /** @class */ (function() {
          function CockpitWorkscopeModule() {}
          CockpitWorkscopeModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_12__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_13__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_15__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES, APIS)
              })
            ],
            CockpitWorkscopeModule
          );
          return CockpitWorkscopeModule;
        })();

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.component.html':
      /*!***********************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.component.html ***!
  \***********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ bsdeProjectDTO.projectNumber }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="manageConfiguration()">\r\n      {{ getComponentName() + ".manageConfiguration" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="manageRemovalCauses()">\r\n      {{ getComponentName() + ".manageRemovalCauses" | translate }}\r\n    </button>\r\n\r\n    <p-splitButton\r\n      *ngIf="!isReadOpenMode"\r\n      class="aw-split-btn custom-padding"\r\n      label="{{ getComponentName() + \'.loadWorkscope\' | translate }}"\r\n      [model]="loadWorkscopeList"\r\n    ></p-splitButton>\r\n\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="edit()">\r\n      {{ "global.edit" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="save()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <!-- ENABLE THE BUTTON WHEN SERVICE READY -->\r\n      <!-- <button id="favorites" mat-menu-item (click)="saveAndExport()">\r\n        {{ getComponentName() + ".exportInventory" | translate }}\r\n      </button> -->\r\n      <button mat-menu-item (click)="refresh()">{{ "global.refresh" | translate }}</button>\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--8">\r\n          <div class="grid-cell grid-cell--container grid-cell-scope">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container  loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".componentCockpit" | translate }}\r\n                  <div *ngIf="panelLoading" class="lds-hourglass"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".familyVariant" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        placeholder="&nbsp;"\r\n                        [showClear]="true"\r\n                        [disabled]="true"\r\n                        [options]="familyVariants"\r\n                        [(ngModel)]="bidoEquipmentDTO.familyVariantCode"\r\n                      >\r\n                      </p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".pn" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <div class="form-control-generic">\r\n                        <span class="custom-span cursor-class" (click)="openPartNumberLink()">\r\n                          {{ bsdeProjectDTO.projectPn }}</span\r\n                        >\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".sn" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <div class="form-control-generic">\r\n                        <span class="custom-span cursor-class" (click)="openSNLink()">\r\n                          {{ bsdeProjectDTO.projectSn }}\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".designation" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="bidoEquipmentDTO.equipmentDesignation"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".mroCenter" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [disabled]="true" [(ngModel)]="mroCenter" />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".customer" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [disabled]="true" [(ngModel)]="bsdeProjectDTO.customerCode" />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".startDate" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="bsdeProjectDTO.projectStartDate"\r\n                        [disabled]="true"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".endDate" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="bsdeProjectDTO.projectEndDate"\r\n                        [disabled]="true"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-cell--4">\r\n          <div class="grid-cell grid-cell--container grid-cell-scope">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container  loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".workscopeInformation" | translate }}\r\n                  <div *ngIf="panelLoading" class="lds-hourglass"></div>\r\n                </h3>\r\n                <div class="btn-custom">\r\n                  <button\r\n                    *ngIf="isApprove && !isReadOpenMode && !isCreateOpenMode"\r\n                    type="button"\r\n                    class="btn-upgrade"\r\n                    mat-raised-button\r\n                    (click)="upgrade()"\r\n                  >\r\n                    {{ getComponentName() + ".upgrade" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="!isApprove && !isReadOpenMode && !isCreateOpenMode"\r\n                    type="button"\r\n                    class="btn-approve"\r\n                    mat-raised-button\r\n                    (click)="approve()"\r\n                  >\r\n                    {{ getComponentName() + ".btnApprove" | translate }}\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".version" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="workscopeInformationObject.versionNumber"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".status" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="workscopeInformationObject.status"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".lastUpdate" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="workscopeInformationObject.lastUpdate"\r\n                        title="{{ workscopeInformationObject.lastUpdate }}"\r\n                      />\r\n                      <span *ngIf="!!workscopeInformationObject.lastUpdateDate">\r\n                        ({{ workscopeInformationObject.lastUpdateDate | date: "yyyy/MM/dd" }})\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".approvedItems" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="workscopeInformationObject.approveItem"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".draftItems" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="workscopeInformationObject.draftItem"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".removedItems" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="workscopeInformationObject.removeItem"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- TREE TABLE ITEM STRUCTURE-->\r\n      <div class="grid-row">\r\n        <div [ngClass]="{ \'grid-cell--12\': showChanges }">\r\n          <div\r\n            [ngClass]="{\r\n              \'grid-cell grid-cell--container grid-cell-scope  grid-cell-item-structure current-changes\': showChanges\r\n            }"\r\n          >\r\n            <div class="grid-cell-content">\r\n              <div class="grid-row">\r\n                <div [ngClass]="{ \'grid-cell--6\': isLineSelected, \'grid-cell--12\': !isLineSelected }">\r\n                  <div class="grid-cell grid-cell--container grid-cell-scope  grid-cell-item-structure">\r\n                    <div class="grid-cell-header">\r\n                      <div class="grid-cell-title-container  loading-indicator">\r\n                        <h3 class="grid-cell-title">\r\n                          {{ getComponentName() + ".workscopeDetail" | translate }}\r\n                        </h3>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="grid-cell-content">\r\n                      <p-treeTable\r\n                        #ptreetableStructure\r\n                        class="aw-tree-table2"\r\n                        [columns]="workscopeTableCols"\r\n                        [value]="workscopeStructure"\r\n                        selectionMode="single"\r\n                        [(selection)]="selectedWorkscope"\r\n                        [scrollable]="true"\r\n                        [resizableColumns]="true"\r\n                        (onNodeSelect)="onRowSelected($event.node)"\r\n                        (onNodeUnselect)="onRowUnSelected($event.node)"\r\n                        (onNodeExpand)="onNodeExpand($event.node)"\r\n                        dataKey="item"\r\n                      >\r\n                        <ng-template pTemplate="emptymessage">\r\n                          <span *ngIf="!tableLoading"> &nbsp;</span>\r\n\r\n                          <div *ngIf="tableLoading" class="aw-table-loading-indicator">\r\n                            <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                            <div class="lds-hourglass"></div>\r\n                          </div>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate="caption">\r\n                          <div class="aw-table-header">\r\n                            <div class="aw-table-global-filter custom-filter-class">\r\n                              <label class="aw-table-global-filter-label">\r\n                                <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                              </label>\r\n\r\n                              <input\r\n                                #ptreetableStructureGlobalFilter\r\n                                class="aw-table-global-filter-input"\r\n                                type="text"\r\n                                placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                                [(ngModel)]="searchGlobalFilter"\r\n                                (ngModelChange)="filterTextWithCriteria()"\r\n                              />\r\n                            </div>\r\n                            <div>\r\n                              <p-selectButton\r\n                                *ngIf="!isReadOpenMode"\r\n                                [(ngModel)]="selectedChangeFilter"\r\n                                [options]="changeFilterList"\r\n                                (onChange)="changeFilter()"\r\n                              ></p-selectButton>\r\n                            </div>\r\n                            <div class="aw-table-actions">\r\n                              <button\r\n                                type="button"\r\n                                *ngIf="\r\n                                  !isReadOpenMode &&\r\n                                  !!workscopeTreeData &&\r\n                                  workscopeTreeData.length > 0 &&\r\n                                  showFilterButtons &&\r\n                                  workscopeInformationObject.status === draft\r\n                                "\r\n                                mat-raised-button\r\n                                (click)="addRemoveAllToWorkscope(true)"\r\n                              >\r\n                                {{ getComponentName() + ".addAllToWorkscope" | translate }}\r\n                              </button>\r\n\r\n                              <button\r\n                                type="button"\r\n                                *ngIf="\r\n                                  !isReadOpenMode &&\r\n                                  !!workscopeTreeData &&\r\n                                  workscopeTreeData.length > 0 &&\r\n                                  showFilterButtons &&\r\n                                  workscopeInformationObject.status === draft\r\n                                "\r\n                                mat-raised-button\r\n                                (click)="addRemoveAllToWorkscope(false)"\r\n                              >\r\n                                {{ getComponentName() + ".removeAllFromWorkscope" | translate }}\r\n                              </button>\r\n                            </div>\r\n                            <div class="aw-table-icon-actions">\r\n                              <i\r\n                                *ngIf="!!workscopeTreeData && workscopeTreeData.length > 0"\r\n                                class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                                aria-hidden="true"\r\n                                [ngClass]="{ active: filtersVisible }"\r\n                                (click)="opFilters.toggle($event); openFilters()"\r\n                              ></i>\r\n                            </div>\r\n                          </div>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate="colgroup" let-columns>\r\n                          <colgroup>\r\n                            <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                          </colgroup>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate="header" let-columns>\r\n                          <tr>\r\n                            <th\r\n                              ttResizableColumn\r\n                              *ngFor="let col of columns"\r\n                              [ngStyle]="{ \'text-align\': col.alignment }"\r\n                            >\r\n                              <span *ngIf="col.field !== \'action\'">\r\n                                {{ getComponentName() + "." + col.field | translate }}\r\n                              </span>\r\n                            </th>\r\n                          </tr>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">\r\n                          <tr [ttSelectableRow]="rowNode">\r\n                            <td\r\n                              style="overflow: hidden; text-overflow: ellipsis;"\r\n                              *ngFor="let col of columns; let i = index"\r\n                              [ngSwitch]="col.field"\r\n                              [ngStyle]="{ \'text-align\': col.alignment }"\r\n                            >\r\n                              <p-treeTableToggler [rowNode]="rowNode" *ngIf="i == 0"></p-treeTableToggler>\r\n\r\n                              <span *ngSwitchCase="\'item\'">\r\n                                <div class="code">\r\n                                  <div class="chapter">\r\n                                    {{ rowData.item }}\r\n                                  </div>\r\n                                  <div class="name" title="{{ rowData.name }}">{{ rowData.name }}</div>\r\n                                </div>\r\n                              </span>\r\n\r\n                              <span *ngSwitchCase="\'itemFamily\'">\r\n                                <div>\r\n                                  <span class="custom-font">{{ rowData["itemFamilyCode"] }}</span>\r\n                                </div>\r\n                                <div class="name" *ngIf="rowData[\'serializedPart\']">\r\n                                  {{ getComponentName() + ".serialized" | translate }}\r\n                                </div>\r\n                                <div class="name" *ngIf="!rowData[\'serializedPart\']">\r\n                                  {{ getComponentName() + ".notSerialized" | translate }}\r\n                                </div>\r\n                              </span>\r\n\r\n                              <span *ngSwitchCase="\'impacts\'">\r\n                                <div>\r\n                                  <span class="custom-font">{{ rowData.cause }}</span>\r\n                                </div>\r\n                                <div>\r\n                                  {{ rowData.impact }}\r\n                                </div>\r\n                                <div>\r\n                                  {{ rowData.removalCause }}\r\n                                </div>\r\n                              </span>\r\n                              <span *ngSwitchCase="\'relatedVersion\'">\r\n                                <div\r\n                                  *ngIf="rowData.isWorkscope"\r\n                                  class="version"\r\n                                  [ngClass]="{\r\n                                    \'version-draft\': rowData.isWorkscope && rowData.workscopeVersionStatus === 0,\r\n                                    \'version-approved\': rowData.isWorkscope && rowData.workscopeVersionStatus === 1\r\n                                  }"\r\n                                >\r\n                                  <div class="version-content">\r\n                                    <span>{{ rowData.workscopeVersionNumber }}</span>\r\n                                  </div>\r\n                                  <div class="version-content">\r\n                                    <span *ngIf="rowData.workscopeVersionStatus === 0">\r\n                                      {{ getComponentName() + ".draft" | translate }}\r\n                                    </span>\r\n                                    <span *ngIf="rowData.workscopeVersionStatus === 1">\r\n                                      {{ getComponentName() + ".approve" | translate }}\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                              </span>\r\n                              <span *ngSwitchCase="\'quantity\'">\r\n                                <div>\r\n                                  {{ getComponentName() + ".expected" | translate }}:\r\n                                  <b class="padding-class chapter">{{ getExpectedQuantity(rowData) }}</b>\r\n                                </div>\r\n                                <div>\r\n                                  {{ getComponentName() + ".real" | translate }}:\r\n                                  <b class="padding-class chapter">{{ getRealQuantity(rowData) }}</b>\r\n                                </div>\r\n                              </span>\r\n                              <span *ngSwitchCase="\'inventories\'">\r\n                                <div *ngIf="rowData.inventoriesList && rowData.inventoriesList.length > 0">\r\n                                  <span *ngIf="rowData[\'serializedPart\']">\r\n                                    <span *ngIf="!!getRealQuantity(rowData) && getRealQuantity(rowData) === \'1\'">\r\n                                      <div>\r\n                                        {{ getComponentName() + ".pn" | translate }}:\r\n                                        <b class="padding-class chapter">{{ rowData.inventoriesList[0].pn }}</b>\r\n                                      </div>\r\n                                      <div>\r\n                                        {{ getComponentName() + ".sn" | translate }}:\r\n                                        <b class="padding-class chapter">{{ rowData.inventoriesList[0].sn }}</b>\r\n                                      </div>\r\n                                    </span>\r\n                                    <span\r\n                                      *ngIf="\r\n                                        !!getRealQuantity(rowData) &&\r\n                                        getRealQuantity(rowData) !== \'1\' &&\r\n                                        getRealQuantity(rowData) !== \'0\'\r\n                                      "\r\n                                    >\r\n                                      {{ rowData.inventoriesList.length }}\r\n                                      {{ getComponentName() + ".inventories" | translate }}\r\n                                    </span>\r\n                                  </span>\r\n                                  <span *ngIf="!rowData[\'serializedPart\']">\r\n                                    <span *ngIf="rowData.inventoriesList.length === 1">\r\n                                      <div>\r\n                                        {{ getComponentName() + ".pn" | translate }}:\r\n                                        <b class="padding-class chapter">{{ rowData.inventoriesList[0].pn }}</b>\r\n                                      </div>\r\n                                      <div *ngIf="!!rowData.inventoriesList[0].trackingNumber">\r\n                                        {{ getComponentName() + ".tn" | translate }}:\r\n                                        <b class="padding-class chapter">{{\r\n                                          rowData.inventoriesList[0].trackingNumber\r\n                                        }}</b>\r\n                                      </div>\r\n                                    </span>\r\n                                    <span *ngIf="rowData.inventoriesList.length > 1"\r\n                                      >{{ rowData.inventoriesList.length }}\r\n                                      {{ getComponentName() + ".inventories" | translate }}</span\r\n                                    >\r\n                                  </span>\r\n                                </div>\r\n                              </span>\r\n                              <span *ngSwitchCase="\'workOrder\'">\r\n                                <div *ngIf="rowData.inventoriesList && rowData.inventoriesList.length > 0">\r\n                                  <div *ngIf="!!rowData.inventoriesList[0].workScopingOrder">\r\n                                    <b class="chapter">{{ rowData.inventoriesList[0].workScopingOrder }}</b>\r\n                                    <p-progressBar [value]="rowData.inventoriesList[0].currentOpeProgress">\r\n                                    </p-progressBar>\r\n                                  </div>\r\n                                </div>\r\n                              </span>\r\n                              <span *ngSwitchCase="\'workscope\'">\r\n                                <p-checkbox\r\n                                  class="aw-checkbox custom-checkbox"\r\n                                  [styleClass]="getColorStyle(rowData)"\r\n                                  binary="true"\r\n                                  [disabled]="isReadOpenMode || workscopeInformationObject.status === approved"\r\n                                  [(ngModel)]="rowData.isWorkscope"\r\n                                  (onChange)="inventoryModified(rowData, rowNode)"\r\n                                ></p-checkbox>\r\n                              </span>\r\n\r\n                              <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-template>\r\n                      </p-treeTable>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf="isLineSelected" class="grid-cell--6">\r\n                  <div class="grid-cell grid-cell--container grid-cell-scope  grid-cell-item-structure">\r\n                    <div class="grid-cell-header">\r\n                      <div class="grid-cell-title-container  loading-indicator">\r\n                        <h3 class="grid-cell-title">\r\n                          {{ getComponentName() + ".inventories" | translate }} of {{ selectedWorkscope.item }}\r\n                        </h3>\r\n                      </div>\r\n                    </div>\r\n                    <div class="grid-cell-content grid-cell-content-with-section">\r\n                      <div class="section">\r\n                        <div class="section-content">\r\n                          <div class="grid-cell--12">\r\n                            <div class="grid-row">\r\n                              <p-table\r\n                                [resizableColumns]="true"\r\n                                #ptableFilterElement\r\n                                class="aw-table2"\r\n                                [columns]="technicalQuotationCols"\r\n                                [value]="selectedWorkscope.inventoriesList"\r\n                                [scrollable]="true"\r\n                                dataKey="rowIndex"\r\n                                [(selection)]="selectedInventories"\r\n                              >\r\n                                <ng-template pTemplate="emptymessage">\r\n                                  <span *ngIf="!isfilterTable"> &nbsp;</span>\r\n\r\n                                  <div *ngIf="isfilterTable" class="aw-table-loading-indicator">\r\n                                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                                    <div class="lds-hourglass"></div>\r\n                                  </div>\r\n                                </ng-template>\r\n                                <ng-template pTemplate="caption">\r\n                                  <div class="aw-table-header">\r\n                                    <div class="aw-table-actions">\r\n                                      <button\r\n                                        *ngIf="\r\n                                          !isReadOpenMode &&\r\n                                          !!selectedWorkscope &&\r\n                                          selectedInventories &&\r\n                                          selectedInventories.length === 0\r\n                                        "\r\n                                        type="button"\r\n                                        mat-raised-button\r\n                                        (click)="addInventory()"\r\n                                      >\r\n                                        {{ getComponentName() + ".addInventory" | translate }}\r\n                                      </button>\r\n\r\n                                      <button\r\n                                        *ngIf="\r\n                                          !isReadOpenMode &&\r\n                                          !!selectedWorkscope &&\r\n                                          selectedInventories &&\r\n                                          selectedInventories.length > 0\r\n                                        "\r\n                                        type="button"\r\n                                        mat-raised-button\r\n                                        (click)="editInventory()"\r\n                                      >\r\n                                        {{ getComponentName() + ".editInventory" | translate }}\r\n                                      </button>\r\n                                    </div>\r\n                                  </div>\r\n                                </ng-template>\r\n\r\n                                <ng-template pTemplate="colgroup" let-columns>\r\n                                  <colgroup>\r\n                                    <col class="aw-table-checkbox-wrapper" />\r\n                                    <col\r\n                                      *ngFor="let col of columns"\r\n                                      [ngStyle]="{ width: col.width, display: col.display }"\r\n                                    />\r\n                                  </colgroup>\r\n                                </ng-template>\r\n\r\n                                <ng-template pTemplate="header" let-columns>\r\n                                  <tr>\r\n                                    <th class="aw-table-checkbox-wrapper">\r\n                                      <p-tableHeaderCheckbox\r\n                                        class="aw-table-checkbox"\r\n                                        [disabled]="isReadOpenMode"\r\n                                      ></p-tableHeaderCheckbox>\r\n                                    </th>\r\n\r\n                                    <th\r\n                                      pResizableColumn\r\n                                      *ngFor="let col of columns"\r\n                                      [ngStyle]="{ \'text-align\': col.alignment, display: col.display }"\r\n                                    >\r\n                                      {{ getComponentName() + "." + col.field | translate }}\r\n                                    </th>\r\n                                  </tr>\r\n                                </ng-template>\r\n\r\n                                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                                  <tr>\r\n                                    <td class="aw-table-checkbox-wrapper">\r\n                                      <p-tableCheckbox\r\n                                        class="aw-table-checkbox"\r\n                                        [disabled]="isReadOpenMode"\r\n                                        [value]="rowData"\r\n                                      ></p-tableCheckbox>\r\n                                    </td>\r\n\r\n                                    <td\r\n                                      *ngFor="let col of columns"\r\n                                      [ngSwitch]="col.field"\r\n                                      [ngStyle]="{ \'text-align\': col.alignment, display: col.display }"\r\n                                    >\r\n                                      <span *ngSwitchCase="\'equipment\'">\r\n                                        <div class="code">\r\n                                          <div (click)="openPartNumberLink(rowData[\'pn\'])" *ngIf="!!rowData[\'pn\']">\r\n                                            {{ getComponentName() + ".pn" | translate }}:\r\n                                            <span class="custom-span custom-font-style cursor-class padding-class">{{\r\n                                              rowData["pn"]\r\n                                            }}</span>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class="designation">\r\n                                          <div class="name" *ngIf="selectedWorkscope.serializedPart">\r\n                                            <span>{{ getComponentName() + ".sn" | translate }}:</span>\r\n                                            <span class="custom-span custom-font-style padding-class">{{\r\n                                              rowData["sn"]\r\n                                            }}</span>\r\n                                          </div>\r\n                                          <div *ngIf="!selectedWorkscope.serializedPart">\r\n                                            <span>{{ getComponentName() + ".tn" | translate }}:</span>\r\n                                            <span class="custom-span custom-font-style padding-class">{{\r\n                                              rowData["tn"]\r\n                                            }}</span>\r\n                                          </div>\r\n                                        </div>\r\n                                      </span>\r\n\r\n                                      <span *ngSwitchCase="\'sentenceValue\'" class="custom-font-style">\r\n                                        <div *ngIf="!!rowData[\'sentenceValue\']">\r\n                                          S : {{ getSentenceValue(rowData["sentenceValue"]) }}\r\n                                        </div>\r\n                                        <div *ngIf="!!rowData[\'decisionValue\']">\r\n                                          D : {{ getDecisionValue(rowData["decisionValue"]) }}\r\n                                        </div>\r\n                                      </span>\r\n\r\n                                      <span *ngSwitchCase="\'targetPn\'">\r\n                                        <span\r\n                                          class="custom-span custom-font-style cursor-class"\r\n                                          (click)="openPartNumberLink(rowData[\'targetPn\'])"\r\n                                          >{{ rowData["targetPn"] }}</span\r\n                                        >\r\n                                      </span>\r\n\r\n                                      <!-- CONTROL -->\r\n                                      <span *ngSwitchCase="\'sentenceValue\'" class="custom-font-style">\r\n                                        <div *ngIf="!!rowData[\'sentenceValue\']">\r\n                                          S : {{ getSentenceValue(rowData["sentenceValue"], true) }}\r\n                                        </div>\r\n                                        <div *ngIf="!!rowData[\'decisionValue\']">\r\n                                          D : {{ getDecisionValue(rowData["decisionValue"], true) }}\r\n                                        </div>\r\n                                      </span>\r\n\r\n                                      <span *ngSwitchCase="\'control\'">\r\n                                        <div [style.textAlign]="col.alignment">\r\n                                          <span\r\n                                            *ngIf="\r\n                                              rowData[\'targetResultMatchingIcon\'] === controlConfigConstants.ICON_RED\r\n                                            "\r\n                                            class="alert alert--nok"\r\n                                            title="{{ rowData[\'targetResultMatchingAlt\'] }}"\r\n                                          >\r\n                                            {{ getComponentName() + ".alertNok" | translate }}\r\n                                          </span>\r\n                                          <span\r\n                                            *ngIf="\r\n                                              rowData[\'targetResultMatchingIcon\'] === controlConfigConstants.ICON_GREEN\r\n                                            "\r\n                                            class="alert alert--ok"\r\n                                            title="{{ rowData[\'targetResultMatchingAlt\'] }}"\r\n                                          >\r\n                                            {{ getComponentName() + ".alertOk" | translate }}\r\n                                          </span>\r\n                                        </div>\r\n                                      </span>\r\n\r\n                                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                                    </td>\r\n                                  </tr>\r\n                                </ng-template>\r\n                              </p-table>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Filter -->\r\n    <p-overlayPanel\r\n      #opFilters\r\n      [appendTo]="\'body\'"\r\n      class="aw-overlay"\r\n      (onShow)="filtersVisible = true; showFilterOverlay = true"\r\n      (onHide)="filtersVisible = false; showFilterOverlay = false"\r\n    >\r\n      <aw-workscope-table-filters\r\n        *ngIf="showFilterOverlay && !!workscopeTreeData && workscopeTreeData.length > 0"\r\n        [workscopeTreeData]="workscopeTreeData"\r\n        [(searchCriteria)]="searchCriteria"\r\n        [familyCodeMap]="familyCodeMap"\r\n        (onFilter)="opFilters.hide(); filtersVisible = false; filterWithCriteria()"\r\n        (onReset)="resetTableFilters()"\r\n      ></aw-workscope-table-filters>\r\n    </p-overlayPanel>\r\n  </div>\r\n\r\n  <aw-load-workscope-popup\r\n    *ngIf="showLoadWorkscopePopup"\r\n    [(display)]="showLoadWorkscopePopup"\r\n    (onEquipmentLoad)="loadEquipment()"\r\n  ></aw-load-workscope-popup>\r\n\r\n  <aw-workscope-import-popup\r\n    *ngIf="showWorkscopeImportPopup"\r\n    [(display)]="showWorkscopeImportPopup"\r\n    (refresh)="refreshOnImport($event)"\r\n  ></aw-workscope-import-popup>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.component.scss':
      /*!***********************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.component.scss ***!
  \***********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .list-with-details .details,\n:host .list-with-details .list {\n  max-height: 50rem; }\n\n:host .list-with-details .details {\n  flex-grow: 1; }\n\n:host .list-with-details .details .item-structure-node-action-list {\n    justify-content: flex-end; }\n\n:host .list-with-details .details .item-structure-node-action-list > button {\n      margin-right: 8px; }\n\n:host .list-with-details .details .item-structure-node-action-list > button:last-of-type {\n        margin-right: 0; }\n\n:host .list-with-details .details .item-structure-node-image > img {\n    max-width: 100%;\n    min-width: 100%; }\n\n:host .list-with-details .list {\n  min-width: 25rem; }\n\n:host ::ng-deep .chapter {\n  display: inline-block;\n  color: #01579b;\n  font-weight: 600; }\n\n:host ::ng-deep .info {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n:host .illustration {\n  text-align: center; }\n\n:host .img-class {\n  max-height: 6rem;\n  cursor: pointer; }\n\n:host .loader {\n  position: absolute;\n  right: 2em;\n  z-index: 1000;\n  top: 1.5em; }\n\n:host .padding-class {\n  padding-left: 0.5em; }\n\n:host .custom-span {\n  color: #01579b; }\n\n:host .custom-field-padding {\n  padding-top: 0.6em !important; }\n\n:host .text-align-center {\n  text-align: center; }\n\n:host .alert {\n  display: inline-block;\n  max-width: 7rem;\n  text-transform: uppercase;\n  width: 100%;\n  font-weight: 600;\n  text-align: center;\n  width: 5rem;\n  margin-left: 0.6em; }\n\n:host .alert.alert--ok {\n    background-color: #4caf50; }\n\n:host .alert.alert--warning {\n    background-color: #ffc107; }\n\n:host .alert.alert--nok {\n    background-color: #f6685e; }\n\n:host .custom-span {\n  color: #01579b; }\n\n:host .code {\n  display: inline-table; }\n\n:host .top {\n  margin-bottom: 2em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n:host ::ng-deep .name {\n  font-style: italic;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 12em; }\n\n:host ::ng-deep .custom-checkbox {\n  margin-top: 0 !important;\n  cursor: pointer; }\n\n:host .cursor-class {\n  cursor: pointer !important; }\n\n:host .action-buttons {\n  display: flex;\n  float: right; }\n\n:host .custom-row {\n  display: flex;\n  padding-bottom: 1em; }\n\n:host .expanded-img-class {\n  max-width: 100em;\n  max-height: 50em; }\n\n:host .custom-padding {\n  margin-right: 1em !important; }\n\n:host .progress-bar-width {\n  margin-left: auto;\n  margin-right: auto; }\n\n:host .show-more-margin {\n  margin-left: 1em !important; }\n\n:host #breadcrumbs-status {\n  overflow: hidden;\n  display: flex; }\n\n:host ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n:host .breadcrumbs {\n  display: flex;\n  flex-grow: 1; }\n\n:host .bread-crumb-custom-cell {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n  padding-bottom: 0 !important; }\n\n:host #breadcrumbs-status li {\n  float: left;\n  margin: 0 1em 0 1em; }\n\n:host #breadcrumbs-status .current {\n  float: left;\n  margin: 0 1em 0 1em; }\n\n:host #breadcrumbs-status .statusLabel {\n  background: #ffffff;\n  padding: 0.3em 1em;\n  float: left;\n  text-decoration: none;\n  color: #000;\n  position: relative;\n  white-space: nowrap;\n  min-height: 3em; }\n\n:host #breadcrumbs-status .current .statusLabel {\n  background: #01579b; }\n\n:host #breadcrumbs-status .statusLabel::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-width: 1.5em 0 1.5em 1em;\n  border-style: solid;\n  border-color: #ffffff #ffffff #ffffff transparent;\n  left: -1em; }\n\n:host #breadcrumbs-status .current .statusLabel::before {\n  border-color: #01579b #01579b #01579b transparent; }\n\n:host #breadcrumbs-status .statusLabel::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-top: 1.5em solid transparent;\n  border-bottom: 1.5em solid transparent;\n  border-left: 1em solid #ffffff;\n  right: -1em; }\n\n:host #breadcrumbs-status .current .statusLabel::after {\n  border-left-color: #01579b; }\n\n:host #breadcrumbs-status .current .statusLabel {\n  color: white;\n  font-weight: bold; }\n\n:host #breadcrumbs-status .current::after,\n:host #breadcrumbs-status .current::before {\n  content: normal; }\n\n:host ::ng-deep .added .ui-state-active {\n  border-color: #4caf50 !important;\n  background: #4caf50 !important; }\n\n:host ::ng-deep .removed .ui-chkbox-box:not(.ui-state-disabled) {\n  border-color: #f6685e !important; }\n\n:host ::ng-deep .custom-filter-class {\n  flex-grow: 0 !important;\n  padding-right: 2% !important; }\n\n:host .custom-font {\n  font-weight: bold; }\n\n:host .version-draft {\n  color: #000 !important;\n  background: #ffc107 !important; }\n\n:host .version-approved {\n  color: #000 !important;\n  background: #4caf50 !important; }\n\n:host .version {\n  margin: auto;\n  width: 65%;\n  font-size: x-small; }\n\n:host .version-content {\n  padding: 0.2em 0 0.2em 0; }\n\n:host .btn-custom {\n  margin-left: auto;\n  margin-right: 0; }\n\n:host .btn-custom button,\n:host .btn-custom a {\n  color: #fff !important; }\n\n:host .btn-custom .btn-upgrade {\n  background-color: #ffc107 !important; }\n\n:host .btn-custom .btn-approve {\n  background-color: #4caf50 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb2NrcGl0LXdvcmtzY29wZS9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfbW9kaWZpZXJzLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29ja3BpdC13b3Jrc2NvcGUvZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbWFpbnRlbmFuY2VcXGNvY2twaXQtd29ya3Njb3BlXFxmb3JtXFxjb2NrcGl0LXdvcmtzY29wZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2NvY2twaXQtd29ya3Njb3BlL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUNBQWlDO0VBQWpDLHNDQUFpQztFQUFqQyxpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxvQ0FBNEI7S0FBNUIsaUNBQTRCO01BQTVCLGdDQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUE7O0FBS2I7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxzQ0FBc0MsRUFBQTs7QUN6SHhDOztFQUlNLGlCQUFpQixFQUFBOztBQUp2QjtFQVFNLFlBQVksRUFBQTs7QUFSbEI7SUFXUSx5QkFBeUIsRUFBQTs7QUFYakM7TUFjVSxpQkMwQlEsRUFBQTs7QUR4Q2xCO1FBaUJZLGVBQWUsRUFBQTs7QUFqQjNCO0lBd0JVLGVBQWU7SUFDZixlQUFlLEVBQUE7O0FBekJ6QjtFQStCTSxnQkFBZ0IsRUFBQTs7QUEvQnRCO0VBb0NJLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBdENwQjtFQTBDSSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQTVDdkI7RUFnREksa0JBQWtCLEVBQUE7O0FBaER0QjtFQW9ESSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQXJEbkI7RUF5REksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsVUFBVSxFQUFBOztBQTVEZDtFQWdFSSxtQkFBbUIsRUFBQTs7QUFoRXZCO0VBb0VJLGNBQWMsRUFBQTs7QUFwRWxCO0VBd0VJLDZCQUE2QixFQUFBOztBQXhFakM7RUE0RUksa0JBQWtCLEVBQUE7O0FBNUV0QjtFQWdGSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBdkZ0QjtJQTBGTSx5QkN6RWdCLEVBQUE7O0FEakJ0QjtJQThGTSx5QkM1RVUsRUFBQTs7QURsQmhCO0lBa0dNLHlCQzlFYyxFQUFBOztBRHBCcEI7RUF1R0ksY0FBYyxFQUFBOztBQXZHbEI7RUEyR0kscUJBQXFCLEVBQUE7O0FBM0d6QjtFQStHSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFsSHZCO0VBc0hJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBMUhuQjtFQThISSx3QkFBd0I7RUFDeEIsZUFBZSxFQUFBOztBQS9IbkI7RUFtSUksMEJBQTBCLEVBQUE7O0FBbkk5QjtFQXVJSSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQXhJaEI7RUE0SUksYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQTdJdkI7RUFpSkksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQWxKcEI7RUFzSkksNEJBQTRCLEVBQUE7O0FBdEpoQztFQTBKSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBM0p0QjtFQStKSSwyQkFBMkIsRUFBQTs7QUEvSi9CO0VBb0tJLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBcktqQjtFQXlLSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQTNLcEI7RUErS0ksYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFoTGhCO0VBb0xJLHdDQUF3QztFQUN4QyxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBOztBQXZMaEM7RUEyTEksV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQTVMdkI7RUFnTUksV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQWpNdkI7RUFxTUksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFdDM01xQjtFRDRNckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBNU1uQjtFQWdOSSxtQkNoTmtCLEVBQUE7O0FEQXRCO0VBb05JLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGlEQUFpRDtFQUNqRCxVQUFVLEVBQUE7O0FBM05kO0VBK05JLGlEQUFtRSxFQUFBOztBQS9OdkU7RUFtT0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsOEJBQThCO0VBQzlCLFdBQVcsRUFBQTs7QUExT2Y7RUE4T0ksMEJDOU9rQixFQUFBOztBREF0QjtFQWtQSSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBblByQjs7RUF3UEksZUFBZSxFQUFBOztBQXhQbkI7RUE0UEksZ0NBQXNDO0VBQ3RDLDhCQUFvQyxFQUFBOztBQTdQeEM7RUFpUUksZ0NBQW9DLEVBQUE7O0FBalF4QztFQXFRSSx1QkFBdUI7RUFDdkIsNEJBQTRCLEVBQUE7O0FBdFFoQztFQTBRSSxpQkFBaUIsRUFBQTs7QUExUXJCO0VBOFFJLHNCQUFxQztFQUNyQyw4QkFBOEIsRUFBQTs7QUEvUWxDO0VBbVJJLHNCQUFxQztFQUNyQyw4QkFBb0MsRUFBQTs7QUFwUnhDO0VBd1JJLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBMVJ0QjtFQThSSSx3QkFBd0IsRUFBQTs7QUE5UjVCO0VBa1NJLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBblNuQjs7RUF3U0ksc0JBQTJDLEVBQUE7O0FBeFMvQztFQTRTSSxvQ0FBb0MsRUFBQTs7QUE1U3hDO0VBZ1RJLG9DQUEwQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb2NrcGl0LXdvcmtzY29wZS9mb3JtL2NvY2twaXQtd29ya3Njb3BlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS0tZmxleC1jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5LS1mbGV4LXJvdyB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlaWdodC0tMTAwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taW4td2lkdGgtLWZpdC1jb250ZW50IHtcclxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi0tcmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Nyb2xsLXktLW5vbmUge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC0tdW5zZWxlY3RhYmxlIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlzaWJpbGl0eS0taGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLS0xMCB7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLndpZHRoLS0yMCB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLndpZHRoLS0zMCB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLndpZHRoLS00MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS01MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS02MCB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLndpZHRoLS03MCB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLndpZHRoLS04MCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLndpZHRoLS05MCB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLndpZHRoLS0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4uZmxleC0tMSB7XHJcbiAgZmxleDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMiB7XHJcbiAgZmxleDogMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMyB7XHJcbiAgZmxleDogMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNCB7XHJcbiAgZmxleDogNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNSB7XHJcbiAgZmxleDogNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tYXV0byB7XHJcbiAgZmxleDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWVuZCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tc3RhcnQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1lbmQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LXN0YXJ0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG4iLCJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcIm1vZGlmaWVyc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5saXN0LXdpdGgtZGV0YWlscyB7XHJcbiAgICAuZGV0YWlscyxcclxuICAgIC5saXN0IHtcclxuICAgICAgbWF4LWhlaWdodDogNTByZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgICAuaXRlbS1zdHJ1Y3R1cmUtbm9kZS1hY3Rpb24tbGlzdCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaXRlbS1zdHJ1Y3R1cmUtbm9kZS1pbWFnZSB7XHJcbiAgICAgICAgJiA+IGltZyB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3Qge1xyXG4gICAgICBtaW4td2lkdGg6IDI1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5jaGFwdGVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjMDE1NzliO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuaW5mbyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgLmlsbHVzdHJhdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaW1nLWNsYXNzIHtcclxuICAgIG1heC1oZWlnaHQ6IDZyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAubG9hZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyZW07XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgdG9wOiAxLjVlbTtcclxuICB9XHJcblxyXG4gIC5wYWRkaW5nLWNsYXNzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXNwYW4ge1xyXG4gICAgY29sb3I6ICMwMTU3OWI7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWZpZWxkLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy10b3A6IDAuNmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC1hbGlnbi1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFsZXJ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1heC13aWR0aDogN3JlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjZlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tbm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXNwYW4ge1xyXG4gICAgY29sb3I6ICMwMTU3OWI7XHJcbiAgfVxyXG5cclxuICAuY29kZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgfVxyXG5cclxuICAudG9wIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm5hbWUge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1heC13aWR0aDogMTJlbTtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuY3VzdG9tLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jdXJzb3ItY2xhc3Mge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gIH1cclxuXHJcbiAgLmV4cGFuZGVkLWltZy1jbGFzcyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMGVtO1xyXG4gICAgbWF4LWhlaWdodDogNTBlbTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tcGFkZGluZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzLWJhci13aWR0aCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5zaG93LW1vcmUtbWFyZ2luIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8vIEJyZWFkY3J1bWJcclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuYnJlYWRjcnVtYnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcblxyXG4gIC5icmVhZC1jcnVtYi1jdXN0b20tY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgbGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgMWVtIDAgMWVtO1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyAuY3VycmVudCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCAxZW0gMCAxZW07XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5zdGF0dXNMYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMC4zZW0gMWVtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtaW4taGVpZ2h0OiAzZW07XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5jdXJyZW50IC5zdGF0dXNMYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYWNjZW50LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyAuc3RhdHVzTGFiZWw6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMS41ZW07XHJcbiAgICBib3JkZXItd2lkdGg6IDEuNWVtIDAgMS41ZW0gMWVtO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZiAjZmZmZmZmICNmZmZmZmYgdHJhbnNwYXJlbnQ7XHJcbiAgICBsZWZ0OiAtMWVtO1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyAuY3VycmVudCAuc3RhdHVzTGFiZWw6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3IgJGFjY2VudC1jb2xvciAkYWNjZW50LWNvbG9yIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyAuc3RhdHVzTGFiZWw6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xLjVlbTtcclxuICAgIGJvcmRlci10b3A6IDEuNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMS41ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMWVtIHNvbGlkICNmZmZmZmY7XHJcbiAgICByaWdodDogLTFlbTtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQgLnN0YXR1c0xhYmVsOjphZnRlciB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQgLnN0YXR1c0xhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyAuY3VycmVudDo6YWZ0ZXIsXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyAuY3VycmVudDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuYWRkZWQgLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAucmVtb3ZlZCAudWktY2hrYm94LWJveDpub3QoLnVpLXN0YXRlLWRpc2FibGVkKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLmN1c3RvbS1maWx0ZXItY2xhc3Mge1xyXG4gICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1mb250IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLnZlcnNpb24tZHJhZnQge1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3IgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC52ZXJzaW9uLWFwcHJvdmVkIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudmVyc2lvbiB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gIH1cclxuXHJcbiAgLnZlcnNpb24tY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAwIDAuMmVtIDA7XHJcbiAgfVxyXG5cclxuICAuYnRuLWN1c3RvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5idG4tY3VzdG9tIGJ1dHRvbixcclxuICAuYnRuLWN1c3RvbSBhIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnRuLWN1c3RvbSAuYnRuLXVwZ3JhZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1jdXN0b20gLmJ0bi1hcHByb3ZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.component.ts':
      /*!*********************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.component.ts ***!
  \*********************************************************************************************/
      /*! exports provided: CockpitWorkscopeFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'CockpitWorkscopeFormComponent',
          function() {
            return CockpitWorkscopeFormComponent;
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
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/utils/bido-family-variant-utils */ './src/app/shared/utils/bido-family-variant-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _cockpit_workscope_form_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./cockpit-workscope-form.service */ './src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.service.ts'
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

        var CockpitWorkscopeFormComponent = /** @class */ (function(_super) {
          __extends(CockpitWorkscopeFormComponent, _super);
          function CockpitWorkscopeFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            translateService,
            confirmationService,
            cockpitWorkscopeFormService,
            propertiesService,
            sessionService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.translateService = translateService;
            _this.confirmationService = confirmationService;
            _this.cockpitWorkscopeFormService = cockpitWorkscopeFormService;
            _this.propertiesService = propertiesService;
            _this.sessionService = sessionService;
            _this.isFromInspection = false;
            _this.selectedChangeFilter = 0;
            _this.inventories = [];
            _this.familyCodeMap = new Map();
            _this.renderTreeTableColumns(false);
            _this.familyVariants = [];
            _this.loadFamilyCodes();
            _this.controlConfigConstants =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_7__['ControlConfigConstants'];
            return _this;
          }
          CockpitWorkscopeFormComponent_1 = CockpitWorkscopeFormComponent;
          CockpitWorkscopeFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
              .MAI_COCKPIT_WORKSCOPE_FORM;
          };
          CockpitWorkscopeFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            if (!!this.componentData) {
              this.updateOpenMode(this.componentData.openMode);
            }
            this.setSearchSentenceDecisionList();
            this.init();
            this.loadMROCenter();
            this.loadFamilyVariants();
            this.changeFilterList = [
              {
                value: CockpitWorkscopeFormComponent_1.ALL,
                label: this.translateService.instant(this.getTranslateKey('all'))
              },
              {
                value: CockpitWorkscopeFormComponent_1.ADDED,
                label: this.translateService.instant(this.getTranslateKey('added'))
              },
              {
                value: CockpitWorkscopeFormComponent_1.DELETED,
                label: this.translateService.instant(this.getTranslateKey('deleted'))
              }
            ];
            this.draft = this.translateService.instant(this.getTranslateKey('draft'));
            this.approved = this.translateService.instant(this.getTranslateKey('approve'));
          };
          /**********************************
           * FILTER FUNCTIONALITY
           **********************************/
          CockpitWorkscopeFormComponent.prototype.resetTableFilters = function() {
            this.searchGlobalFilter = '';
            this.searchCriteria = {};
          };
          CockpitWorkscopeFormComponent.prototype.setControlGlobalFilter = function() {
            var _this = this;
            this.resetTableFilters();
            this.searchSubAssemblyGlobalFilterChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__['Subject']();
            this.searchSubAssemblyGlobalFilterChanged
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['debounceTime'])(
                  CockpitWorkscopeFormComponent_1.SEARCH_TEXT_DEBOUNCE_TIME
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['takeUntil'])(this.unsubscribe)
              )
              .subscribe(function() {
                _this.changeFilter();
              });
          };
          /**********************************
           * INITIALIZATION
           **********************************/
          CockpitWorkscopeFormComponent.prototype.init = function() {
            var _this = this;
            this.bsdeProjectDTO = {};
            this.bidoEquipmentDTO = {};
            this.workscopeInformationObject = {};
            this.workscopeStructure = [];
            this.mroCenters = [];
            this.customerList = [];
            this.breadcrumbsList = [];
            this.modifiedWorkscopeTreeData = [];
            this.selectedWorkscope = {};
            this.searchCriteria = {};
            this.showLoadWorkscopePopup = false;
            this.workscopeTreeDataInDBByItemKeyMap = new Map();
            this.workscopeTreeDataFromUIByItemKeyMap = new Map();
            this.workscopeTreeDataFromStagedByItemKeyMap = new Map();
            this.loadWorkscopeList = [
              {
                label: this.translateService.instant(this.getTranslateKey('fromFleetManagement')),
                command: function() {
                  _this.loadWorkscope();
                }
              },
              {
                label: this.translateService.instant(this.getTranslateKey('fromExcel')),
                command: function() {
                  _this.loadFromExcel();
                }
              }
            ];
          };
          CockpitWorkscopeFormComponent.prototype.refresh = function() {
            this.init();
            this.loadMROCenter();
            this.loadFamilyVariants();
          };
          CockpitWorkscopeFormComponent.prototype.loadMROCenter = function() {
            var _this = this;
            // Load dropdowns
            var observables = [
              this.cockpitWorkscopeFormService.findMROCenter(),
              this.cockpitWorkscopeFormService.findAllCustomers()
            ];
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['forkJoin'])(observables).subscribe(function(results) {
              _this.mroCenters = results[0] || [];
              _this.customerList = results[1] || [];
            });
          };
          CockpitWorkscopeFormComponent.prototype.loadEquipment = function() {
            var _this = this;
            if (!!this.componentData && !!this.componentData.objectId) {
              var input = {
                projectNumber: this.serializationService.deserialize(this.componentData.objectId)
              };
              this.cockpitWorkscopeFormService.loadWorkshopScopeByProjectNumber(input).subscribe(function(res) {
                _this.showLoadWorkscopePopup = false;
                _this.refresh();
              });
            }
          };
          /**********************************
           * TREE TABLE COLUMNS
           **********************************/
          CockpitWorkscopeFormComponent.prototype.renderTreeTableColumns = function(selected) {
            if (selected) {
              this.workscopeTableCols = [
                { field: 'item', alignment: 'left', width: '20%' },
                { field: 'itemFamily', alignment: 'left', width: '10%' },
                { field: 'workscope', alignment: 'center', width: '10%' },
                { field: 'relatedVersion', alignment: 'center', width: '10%' },
                { field: 'impacts', alignment: 'left', width: '10%' },
                { field: 'quantity', alignment: 'left', width: '10%' }
              ];
            } else {
              this.workscopeTableCols = [
                { field: 'item', alignment: 'left', width: '20%' },
                { field: 'itemFamily', alignment: 'left', width: '10%' },
                { field: 'workscope', alignment: 'center', width: '10%' },
                { field: 'relatedVersion', alignment: 'center', width: '10%' },
                { field: 'impacts', alignment: 'left', width: '10%' },
                { field: 'quantity', alignment: 'left', width: '10%' },
                { field: 'inventories', alignment: 'left', width: '20%' },
                { field: 'workOrder', alignment: 'center', width: '10%' }
              ];
            }
            this.technicalQuotationCols = [
              { field: 'equipment', alignment: 'left', width: '25%' },
              { field: 'sentenceValue', alignment: 'left', width: '25%' },
              { field: 'targetPn', alignment: 'left', width: '20%' },
              { field: 'quantity', alignment: 'center', width: '10%' },
              { field: 'control', alignment: 'center', width: '20%' }
            ];
          };
          /**********************************
           * FETCH PROJECT DETAILS
           **********************************/
          CockpitWorkscopeFormComponent.prototype.fetchProjectDetails = function() {
            var _this = this;
            if (!!this.componentData && !!this.componentData.objectId) {
              var projectNumber = this.serializationService.deserialize(this.componentData.objectId);
              this.panelLoading = true;
              this.cockpitWorkscopeFormService
                .findBsdeProjectByProjectNumber(projectNumber)
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['finalize'])(function() {
                    _this.panelLoading = false;
                  })
                )
                .subscribe(function(bsdeProjectDTO) {
                  if (bsdeProjectDTO) {
                    var mroCenteObj = _this.mroCenters.filter(function(res) {
                      return res.value === bsdeProjectDTO.repairCenterCode;
                    })[0];
                    var customerObj = _this.customerList.filter(function(res) {
                      return res.value === bsdeProjectDTO.customerCode;
                    })[0];
                    _this.mroCenter = mroCenteObj && mroCenteObj.label;
                    bsdeProjectDTO.customerCode = customerObj && customerObj.label;
                    _this.bsdeProjectDTO = bsdeProjectDTO;
                    _this.subtitle = [
                      !!bsdeProjectDTO && !!bsdeProjectDTO.projectNumber
                        ? 'N\u00B0 ' + bsdeProjectDTO.projectNumber
                        : '',
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                        bsdeProjectDTO.projectPn
                      )
                        ? ''
                        : 'P/N ' + bsdeProjectDTO.projectPn,
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                        bsdeProjectDTO.projectSn
                      )
                        ? ''
                        : 'S/N ' + bsdeProjectDTO.projectSn
                    ]
                      .filter(function(s) {
                        return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isEmpty(s);
                      })
                      .join(' | ');
                    _this.displayComponentContext(_this.subtitle, _this.isCreateOpenMode);
                    _this.breadcrumbsList = [];
                    _this.getFamilyVariantData();
                  }
                  _this.panelLoading = false;
                });
              this.tableLoading = true;
              var input = {
                projectNumber: projectNumber
              };
              this.cockpitWorkscopeFormService
                .getWorkscope(input)
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['finalize'])(function() {
                    _this.tableLoading = false;
                  })
                )
                .subscribe(function(result) {
                  _this.getWorkscopeInformation(result);
                  _this.workscopeStructure = _this.buildTree(result);
                  _this.modifiedWorkscopeTreeData = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(result);
                  _this.buildMap(_this.modifiedWorkscopeTreeData, _this.workscopeTreeDataFromStagedByItemKeyMap);
                  if (!!_this.workscopeStructure && _this.workscopeStructure.length > 0) {
                    _this.workscopeStructure[0].expanded = true;
                  }
                  _this.buildMap(_this.workscopeStructure, _this.workscopeTreeDataFromUIByItemKeyMap);
                  _this.tableLoading = false;
                  _this.workscopeTreeData = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(result);
                  _this.buildMap(_this.workscopeTreeData, _this.workscopeTreeDataInDBByItemKeyMap);
                  _this.setControlGlobalFilter();
                  _this.resetWorkscopeCounters();
                  _this.updateWorkscopeInformation(_this.modifiedWorkscopeTreeData);
                });
            }
          };
          CockpitWorkscopeFormComponent.prototype.getFamilyVariantData = function() {
            var _this = this;
            if (!!this.bsdeProjectDTO.projectPn || !!this.bsdeProjectDTO.projectSn) {
              var bidoEquipment = {
                pnCode: this.bsdeProjectDTO.projectPn,
                sn: this.bsdeProjectDTO.projectSn
              };
              this.cockpitWorkscopeFormService.findBidoEquipmentsByPnAndSn(bidoEquipment).subscribe(function(res) {
                _this.bidoEquipmentDTO = !!res && res.length > 0 ? res[0] : {};
              });
            }
          };
          CockpitWorkscopeFormComponent.prototype.openSNLink = function() {
            if (!!this.bidoEquipmentDTO && !!this.bidoEquipmentDTO.equipmentCode) {
              var functionNm =
                this.bidoEquipmentDTO.equipmentFunction ||
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_TOOL_KEY;
              this.openEquipment(
                this.bidoEquipmentDTO.equipmentCode,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read,
                functionNm
              );
            }
          };
          CockpitWorkscopeFormComponent.prototype.openEquipment = function(objectId, openMode, functionNm) {
            var labelKey;
            var componentName;
            if (
              !functionNm ||
              functionNm ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_MAJOR_EQUIPMENT_KEY
            ) {
              labelKey =
                'transaction.' +
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                  .FLE_EQUIPMENT_FORM;
              componentName =
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                  .FLE_EQUIPMENT_FORM;
            } else {
              if (
                functionNm ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_ENGINE_KEY
              ) {
                labelKey =
                  'transaction.' +
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                    .FLE_ENGINE_FORM;
                componentName =
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                    .FLE_ENGINE_FORM;
              } else if (
                functionNm ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_AIRCRAFT_KEY
              ) {
                labelKey =
                  'transaction.' +
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                    .FLE_AIRCRAFT_FORM;
                componentName =
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                    .FLE_AIRCRAFT_FORM;
              } else if (
                functionNm ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_TOOL_KEY
              ) {
                labelKey =
                  'transaction.' +
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                    .LOG_TOOL_FORM;
                componentName =
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                    .LOG_TOOL_FORM;
              } else {
                // Open Equipment By default for other cases
                labelKey =
                  'transaction.' +
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                    .FLE_EQUIPMENT_FORM;
                componentName =
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                    .FLE_EQUIPMENT_FORM;
              }
            }
            var data = {
              id: this.tabService.generateId(),
              componentId: componentName,
              openMode: openMode
            };
            if (!!objectId) {
              var equipmentId = {
                equipmentCode: objectId
              };
              data.objectId = this.serializationService.serialize(equipmentId);
            }
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /**********************************
           * OPEN PART NUMBER LINK
           **********************************/
          CockpitWorkscopeFormComponent.prototype.openPartNumberLink = function() {
            var _this = this;
            if (!!this.bidoEquipmentDTO) {
              var bireVersionPnDTO_1 = {
                subject: this.bidoEquipmentDTO.subject,
                sheet: this.bidoEquipmentDTO.sheet,
                marks: this.bidoEquipmentDTO.marks,
                chapter: this.bidoEquipmentDTO.chapter,
                section: this.bidoEquipmentDTO.section,
                pnCode: this.bsdeProjectDTO.projectPn,
                familyCode: _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_19__[
                  'BidoFamilyVariantUtils'
                ].getFamilyCodeFromFamilyVariantCode(this.bidoEquipmentDTO.familyVariantCode),
                variantCode: _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_19__[
                  'BidoFamilyVariantUtils'
                ].getVariantCodeFromFamilyVariantCode(this.bidoEquipmentDTO.familyVariantCode),
                structureType:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .STRUCTURE_TYPE_IPC_KEY
              };
              this.cockpitWorkscopeFormService.getPartNumberStructure(bireVersionPnDTO_1).subscribe(function(res) {
                if (!!res && res.length > 0) {
                  var partNum = res.filter(function(dto) {
                    return (
                      !!dto.bireVersionPnDTO &&
                      _this.bsdeProjectDTO.projectPn === dto.bireVersionPnDTO.pnCode &&
                      _this.bsdeProjectDTO.projectSn
                    );
                  });
                  if (!!partNum && partNum.length > 0) {
                    bireVersionPnDTO_1.isnAta = partNum[0].isn;
                    bireVersionPnDTO_1.versionNumber = partNum[0].versionNumber;
                    _this.openItemPartNumber(
                      bireVersionPnDTO_1,
                      _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
                    );
                  }
                }
              });
            }
          };
          /**
           * open item part number UC
           */
          CockpitWorkscopeFormComponent.prototype.openItemPartNumber = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                  .ENG_ITEM_PART_NUMBER_FORM,
              openMode: openMode
            };
            if (!!objectId) {
              data.objectId = this.serializationService.serialize(objectId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          CockpitWorkscopeFormComponent.prototype.loadFamilyCodes = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__['GenericPropertyConstants']
                  .ITEM_FAMILY_CODE_MAP
              )
              .subscribe(function(familyCodeList) {
                var itemFamily = familyCodeList;
                itemFamily.forEach(function(element) {
                  _this.familyCodeMap.set(element.value, element.label);
                });
              });
          };
          CockpitWorkscopeFormComponent.prototype.loadFamilyVariants = function() {
            var _this = this;
            this.familyVariants = [];
            this.cockpitWorkscopeFormService.loadFamilyVariants().subscribe(
              function(results) {
                results.forEach(function(result) {
                  var label1 = result.familyname ? result.familyname : result.familyCode;
                  var label2 = result.variantName ? result.variantName : result.variantCode;
                  var label = label1 + '-' + label2;
                  var value = _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_19__[
                    'BidoFamilyVariantUtils'
                  ].buildFamilyVariantCode(result.familyCode, result.variantCode);
                  if (!!label && !!value) {
                    var familyVariant = {
                      label: label,
                      value: value
                    };
                    _this.familyVariants.push(familyVariant);
                  } else {
                    _super.prototype.throwUnboundLocalError.call(_this, 'loadFamilyVariants', 'label && value');
                  }
                });
                _this.familyVariants.sort(function(a, b) {
                  return !!a.label && !!b.label && a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1;
                });
                _this.fetchProjectDetails();
              },
              function() {
                _this.messageService.showErrorMessage('errorOnLoadingFamilyVariants');
              }
            );
          };
          CockpitWorkscopeFormComponent.prototype.buildTree = function(data) {
            var _this = this;
            var toReturn = [];
            data.forEach(function(elt) {
              var eleClone = elt.data;
              if (!!eleClone) {
                if (!!eleClone.chapter) {
                  // tslint:disable-next-line:max-line-length
                  eleClone.item =
                    eleClone.chapter +
                    '-' +
                    eleClone.section +
                    '-' +
                    eleClone.subject +
                    '-' +
                    eleClone.sheet +
                    '-' +
                    eleClone.marks;
                }
                if (!!eleClone.itemFamilyCode) {
                  var dto = _this.familyCodeMap.get(eleClone.itemFamilyCode);
                  if (!!dto) {
                    eleClone.itemFamilyCode = dto;
                  }
                }
                if (!!eleClone.inventoriesList) {
                  eleClone.inventoriesList.forEach(function(res, index) {
                    res.rowIndex = index;
                    res.sentenceValue = !!res.sentenceValue ? res.sentenceValue : undefined;
                    res.decisionValue = !!res.decisionValue ? res.decisionValue : undefined;
                    res.targetResultMatchingIcon =
                      _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_7__[
                        'ControlConfigConstants'
                      ].ICON_GREEN; // FIXME when back will be updated
                  });
                }
                _this.updateVersionColumn(eleClone);
              }
              toReturn.push({
                data: eleClone,
                children: _this.buildTree(elt.children || []),
                bireItemDTO: elt.bireItemDTO
              });
            });
            return toReturn;
          };
          /***********************************************
           * UPDATE VERSION COLUMN
           ***********************************************/
          CockpitWorkscopeFormComponent.prototype.updateVersionColumn = function(data) {
            if (data.isWorkscope) {
              if (!data.workscopeVersionNumber || data.workscopeVersionStatus === 0) {
                data.workscopeVersionNumber = this.workscopeInformationObject.versionNumber;
                data.workscopeVersionStatus = this.workscopeInformationObject.status === this.draft ? 0 : 1;
              }
            } else {
              data.workscopeVersionNumber = undefined;
              data.workscopeVersionStatus = undefined;
            }
          };
          CockpitWorkscopeFormComponent.prototype.cancel = function() {
            if (this.isWriteOpenMode) {
              this.updateOpenMode(
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
              );
            }
          };
          CockpitWorkscopeFormComponent.prototype.edit = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Write
            );
          };
          /*********************************************
           * Open Manage Configuration Screen
           *********************************************/
          CockpitWorkscopeFormComponent.prototype.manageConfiguration = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                  .MAI_MANAGE_CONFIGURATION_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
            };
            if (!!this.bsdeProjectDTO.projectNumber) {
              data.objectId = this.serializationService.serialize(this.bsdeProjectDTO.projectNumber);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /*********************************************
           * Open Manage Removal Cause Screen
           *********************************************/
          CockpitWorkscopeFormComponent.prototype.manageRemovalCauses = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                  .MAI_MANAGE_REMOVAL_CAUSES_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
            };
            if (!!this.bsdeProjectDTO.projectNumber) {
              data.objectId = this.serializationService.serialize(this.bsdeProjectDTO.projectNumber);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          CockpitWorkscopeFormComponent.prototype.loadWorkscope = function() {
            this.showLoadWorkscopePopup = true;
          };
          /*******************************
           * Add Inventory
           *******************************/
          CockpitWorkscopeFormComponent.prototype.addInventory = function() {
            this.isAddInventory = true;
            this.showAddEditInventory = true;
            this.breadcrumbsList = [];
            this.createBreadCrumb(this.selectedWorkscope);
            var item = {
              data: this.bsdeProjectDTO,
              subtittle: this.breadcrumbsList[0].subtittle,
              title: this.breadcrumbsList[0].title,
              index: this.breadcrumbsList.length,
              bireItem: this.selectedWorkscope || undefined,
              isAddInventory: this.isAddInventory,
              isFromInspection: this.isFromInspection,
              inventoryList: []
            };
            this.openItemInventory(item);
          };
          CockpitWorkscopeFormComponent.prototype.openItemInventory = function(item) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                  .MAI_ITEM_INVENTORY,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
            };
            if (!!item) {
              data.objectId = this.serializationService.serialize(item);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /*******************************
           * Add Inventory
           *******************************/
          CockpitWorkscopeFormComponent.prototype.editInventory = function() {
            var _this = this;
            this.inventories = [];
            this.breadcrumbsList = [];
            this.createBreadCrumb(this.selectedWorkscope);
            if (
              !!this.selectedWorkscope &&
              !!this.selectedWorkscope.inventoriesList &&
              this.selectedWorkscope.inventoriesList.length > 0
            ) {
              this.selectedInventories.forEach(function(res, index) {
                _this.inventories.push({
                  rowIndex: index,
                  pn: res.pn,
                  sn: res.sn,
                  trackingNumber: res.trackingNumber,
                  woCode: res.workScopingOrder,
                  quantity: res.quantity,
                  sentenceValue: res.sentenceValue,
                  decisionValue: res.decisionValue,
                  serialized: !!_this.selectedWorkscope ? _this.selectedWorkscope.serializedPart : false,
                  icon: res.targetResultMatchingIcon,
                  progress: res.currentOpeProgress,
                  woId: res.workScopingOrderId,
                  woProjectId: res.woProjectId
                });
              });
            }
            this.isAddInventory = false;
            this.showAddEditInventory = true;
            var item = {
              index: this.breadcrumbsList.length,
              subtittle: this.breadcrumbsList[0].subtittle,
              title: this.breadcrumbsList[0].title,
              data: this.bsdeProjectDTO,
              bireItem: this.selectedWorkscope || undefined,
              isAddInventory: this.isAddInventory,
              isFromInspection: this.isFromInspection,
              inventoryList: this.inventories
            };
            this.openItemInventory(item);
          };
          CockpitWorkscopeFormComponent.prototype.createBreadCrumb = function(data) {
            if (data) {
              var item = {
                title: data.item,
                subtittle: data.name,
                index: this.breadcrumbsList.length
              };
              this.breadcrumbsList.push(item);
            }
          };
          CockpitWorkscopeFormComponent.prototype.onRowSelected = function(node) {
            if (!!node.data) {
              this.selectedWorkscope = node.data;
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'onRowSelected', 'node.data');
            }
            this.isLineSelected = true;
            this.selectedInventories = [];
            this.renderTreeTableColumns(true);
          };
          CockpitWorkscopeFormComponent.prototype.onRowUnSelected = function(node) {
            this.selectedWorkscope = {};
            this.selectedInventories = [];
            this.isLineSelected = false;
            this.renderTreeTableColumns(false);
          };
          CockpitWorkscopeFormComponent.prototype.getExpectedQuantity = function(rowData) {
            var qty = rowData.quantity;
            rowData.expectedQuantity =
              qty !== undefined && qty.split(' ').length === 2
                ? qty.split(' ')[1].substring(1, qty.split(' ')[1].length - 1)
                : qty === '0'
                ? qty
                : undefined;
            return rowData.expectedQuantity;
          };
          CockpitWorkscopeFormComponent.prototype.getRealQuantity = function(rowData) {
            var qty = rowData.quantity;
            rowData.realQuantity =
              qty !== undefined && qty.split(' ').length > 0 ? qty.split(' ')[0] : qty === '0' ? qty : undefined;
            return rowData.realQuantity;
          };
          CockpitWorkscopeFormComponent.prototype.filterTextWithCriteria = function() {
            this.searchSubAssemblyGlobalFilterChanged.next();
          };
          CockpitWorkscopeFormComponent.prototype.changeFilter = function() {
            var _this = this;
            this.workscopeStructure = [];
            var treeData = this.modifiedWorkscopeTreeData;
            this.workscopeStructure = this.buildTree(
              Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(treeData)
            );
            if (
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.searchGlobalFilter
              ) &&
              this.workscopeStructure.length > 0
            ) {
              this.workscopeStructure[0].expanded = true;
            }
            this.workscopeStructure = this.workscopeStructure.filter(function(elt) {
              return _this.treeNodeMatchFilters(elt, _this.searchCriteria);
            });
            // Update modified Keys of ui tree
            this.updateTreeData(this.workscopeStructure, this.modifiedWorkscopeTreeData);
          };
          CockpitWorkscopeFormComponent.prototype.treeNodeMatchFilters = function(node, searchCriteria) {
            var _this = this;
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils'].isNullOrEmpty(node.children)) {
              node.children = node.children.filter(function(child) {
                return _this.treeNodeMatchFilters(child, searchCriteria);
              });
            }
            var nodeData = node.data;
            var functionCode = nodeData.functionCode ? nodeData.functionCode.toLowerCase() : '';
            var functionCodeMatch =
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.searchGlobalFilter
              ) && functionCode.includes(this.searchGlobalFilter.toLowerCase());
            var item =
              nodeData.chapter +
              '-' +
              nodeData.section +
              '-' +
              nodeData.subject +
              '-' +
              nodeData.sheet +
              '-' +
              nodeData.marks;
            var itemMatch =
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.searchGlobalFilter
              ) && item.includes(this.searchGlobalFilter.toLowerCase());
            var itemNumber = nodeData.itemNumber ? nodeData.itemNumber.toLowerCase() : '';
            var itemNumberMatch =
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.searchGlobalFilter
              ) && itemNumber.includes(this.searchGlobalFilter.toLowerCase());
            var name = nodeData.name ? nodeData.name.toLowerCase() : '';
            var nameMatch =
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.searchGlobalFilter
              ) && name.includes(this.searchGlobalFilter.toLowerCase());
            var familyCode = nodeData.itemFamilyCode ? nodeData.itemFamilyCode.toLowerCase() : '';
            var familyMatch =
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.searchGlobalFilter
              ) && familyCode.includes(this.searchGlobalFilter.toLowerCase());
            var serialized = nodeData.serializedPart ? 'serialized' : 'not serialized';
            var serializedMatch =
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.searchGlobalFilter
              ) && serialized.includes(this.searchGlobalFilter.toLowerCase());
            var filterCriteriaSuccess = true;
            // ADDED, DELETE AND ALL
            if (this.selectedChangeFilter === CockpitWorkscopeFormComponent_1.ALL) {
              filterCriteriaSuccess = true;
            } else if (this.selectedChangeFilter === CockpitWorkscopeFormComponent_1.DELETED) {
              filterCriteriaSuccess =
                _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils'].orEmpty(node.children).length > 0 ||
                (nodeData.isModified && nodeData.isRemoved);
              if (filterCriteriaSuccess) {
                node.expanded = true;
              }
            } else if (this.selectedChangeFilter === CockpitWorkscopeFormComponent_1.ADDED) {
              filterCriteriaSuccess =
                _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils'].orEmpty(node.children).length > 0 ||
                (nodeData.isModified && nodeData.isAdded);
              if (filterCriteriaSuccess) {
                node.expanded = true;
              }
            }
            // OVERLAY FILTERS
            var family = true;
            if (
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                searchCriteria.family
              )
            ) {
              family = !!nodeData.itemFamilyCode && searchCriteria.family === nodeData.itemFamilyCode;
            }
            var designation = true;
            if (
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                searchCriteria.designation
              )
            ) {
              designation =
                !!searchCriteria.designation &&
                !!nodeData.name &&
                nodeData.name.toLowerCase().indexOf(searchCriteria.designation.toLowerCase()) !== -1;
            }
            var funcCode = true;
            if (
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                searchCriteria.functionCode
              )
            ) {
              funcCode = !!nodeData.functionCode && searchCriteria.functionCode === nodeData.functionCode;
            }
            var itemName = true;
            if (
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                searchCriteria.item
              )
            ) {
              itemName = !!nodeData.item && searchCriteria.item === nodeData.item;
            }
            var impact = true;
            if (
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                searchCriteria.impact
              )
            ) {
              impact = !!nodeData.impact && searchCriteria.impact === nodeData.impact;
            }
            var partNumber = true;
            if (
              !!nodeData.inventoriesList &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(searchCriteria.pn)
            ) {
              var dto = nodeData.inventoriesList.filter(function(inven) {
                return inven.pn === searchCriteria.pn;
              });
              partNumber = !!dto && dto.length > 0;
            }
            var serialNumber = true;
            if (
              !!nodeData.inventoriesList &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(searchCriteria.sn)
            ) {
              var dto = nodeData.inventoriesList.filter(function(inven) {
                return !!inven.sn && !!searchCriteria.sn && inven.sn.indexOf(searchCriteria.sn) !== -1;
              });
              serialNumber = !!dto && dto.length > 0;
            }
            var workOrder = true;
            if (
              !!nodeData.inventoriesList &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                searchCriteria.woCode
              )
            ) {
              var dto = nodeData.inventoriesList.filter(function(inven) {
                return inven.workScopingOrder === searchCriteria.woCode;
              });
              workOrder = !!dto && dto.length > 0;
            }
            var isSerialized = true;
            if (!!searchCriteria.selectedSerialize && searchCriteria.selectedSerialize.length > 0) {
              var serialPart = nodeData.serializedPart ? 0 : 1;
              isSerialized = searchCriteria.selectedSerialize.includes(serialPart);
            }
            var isWorkscope = true;
            if (!!searchCriteria.selectedWorkscope && searchCriteria.selectedWorkscope.length > 0) {
              var workscope = nodeData.isWorkscope ? 0 : 1;
              isWorkscope = searchCriteria.selectedWorkscope.includes(workscope);
            }
            var filterSuccess = false;
            if (
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.searchGlobalFilter
              )
            ) {
              var success =
                _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils'].orEmpty(node.children).length > 0 ||
                (designation &&
                  isSerialized &&
                  isWorkscope &&
                  impact &&
                  family &&
                  funcCode &&
                  itemName &&
                  partNumber &&
                  serialNumber &&
                  workOrder &&
                  filterCriteriaSuccess);
              if (!!this.searchCriteria && Object.keys(this.searchCriteria).length !== 0) {
                node.expanded = success;
              } else if (this.selectedChangeFilter === CockpitWorkscopeFormComponent_1.ALL) {
                this.workscopeStructure[0].expanded = true;
              } else {
                node.expanded = success;
              }
              return success;
            } else {
              filterSuccess =
                filterCriteriaSuccess &&
                (_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils'].orEmpty(node.children).length >
                  0 ||
                  functionCodeMatch ||
                  itemNumberMatch ||
                  familyMatch ||
                  nameMatch ||
                  itemMatch ||
                  serializedMatch);
            }
            node.expanded = true;
            return filterSuccess;
          };
          /*****************************************************
           * Click on inventory workscope
           *****************************************************/
          CockpitWorkscopeFormComponent.prototype.inventoryModified = function(data, event, flag, parent) {
            // get modified copy
            var workscopeTreeDataFromStaged = this.getWorkscopeTreeDataFromStaged(this.getKey(data));
            // Fetching original state
            var workscopeTreeDataInDB = this.getWorkscopeTreeDataFromDB(this.getKey(data));
            if (!parent && !!workscopeTreeDataFromStaged && workscopeTreeDataFromStaged.data) {
              // Modifying Item status for parent
              var parentItem = !!event.parent ? event.parent.data : undefined;
              // Check all childrens in db and modify them
              if (
                !!workscopeTreeDataInDB &&
                !!workscopeTreeDataInDB.children &&
                workscopeTreeDataInDB.children.length > 0
              ) {
                var isChildrenSame = false;
                if (!!event.node && !!event.node.children && event.node.children.length > 0) {
                  isChildrenSame = event.node.children.length === workscopeTreeDataInDB.children.length;
                }
                // Children length is same, take childrens from clicked node, else from db copy
                var childrenData =
                  isChildrenSame && !!event.node && !!event.node.children && event.node.children.length > 0
                    ? event.node.children
                    : workscopeTreeDataInDB.children;
                this.modifyAllWorkscope(childrenData, data.isWorkscope, parentItem);
              }
              var isWorkscope = flag != undefined ? flag : data.isWorkscope;
              this.updateBireItemOfNode(data, isWorkscope);
              this.resetWorkscopeCounters();
              this.updateNodeInTree(data, this.modifiedWorkscopeTreeData);
              // Updating map
              this.updateBireItemForWorkscopeTreeDTO(data, workscopeTreeDataFromStaged.data);
              // Modify Parent Node on basis of childrens
              this.updateParentNode(event, data.isWorkscope);
            } else if (parent !== this.getKey(data)) {
              // Modify only if no childrens in case of remove
              if (flag || (!!event && !!event.children && event.children.length === 0)) {
                this.updateBireItemOfNode(data, flag);
                // Updating map
                this.updateNodeInTree(data, this.modifiedWorkscopeTreeData);
                if (!!workscopeTreeDataFromStaged && !!workscopeTreeDataFromStaged.data) {
                  this.updateBireItemForWorkscopeTreeDTO(data, workscopeTreeDataFromStaged.data);
                }
              }
            }
            // Update modified Keys of ui tree
            this.updateTreeData(this.workscopeStructure, this.modifiedWorkscopeTreeData);
            // Refresh Tree Node after changes
            if (!parent && !!this.searchCriteria && Object.keys(this.searchCriteria).length > 0) {
              this.filterWithCriteria();
            }
            // Update counters
            this.updateWorkscopeInformation(this.modifiedWorkscopeTreeData);
          };
          CockpitWorkscopeFormComponent.prototype.updateBireItemOfNode = function(data, flag) {
            var dbData = this.getWorkscopeTreeDataFromDB(this.getKey(data));
            if (!!data && !!dbData && !!!!dbData.data) {
              data.isModified = dbData.data.isWorkscope === flag ? false : true;
              data.isWorkscope = flag
                ? data.isWorkscope
                  ? data.isWorkscope
                  : flag
                : !data.isWorkscope
                ? data.isWorkscope
                : flag;
              data.isAdded = flag;
              data.workscopeVersionNumber = this.workscopeInformationObject.versionNumber;
              data.workscopeVersionStatus = !flag
                ? undefined
                : this.workscopeInformationObject.status === this.draft
                ? 0
                : 1;
              data.isRemoved = !flag;
            }
          };
          /********************************************
           * If parent is clicked, apply settings to its childrens also
           ********************************************/
          CockpitWorkscopeFormComponent.prototype.setActionForChildrens = function(data, isWorkscope) {
            var _this = this;
            data.forEach(function(res) {
              if (!!res.data) {
                var workscopeTreeDataInDB = _this.getWorkscopeTreeDataFromDB(_this.getKey(res.data));
                res.data.isWorkscope = isWorkscope;
                if (!!workscopeTreeDataInDB && workscopeTreeDataInDB.data) {
                  if (workscopeTreeDataInDB.data.isWorkscope === res.data.isWorkscope) {
                    // Item in original state
                    res.data.isModified = false;
                    res.data.isAdded = false;
                    res.data.isRemoved = false;
                  } else {
                    res.data.isModified = true;
                    res.data.isRemoved = isWorkscope ? false : true;
                    res.data.isAdded = isWorkscope ? true : false;
                  }
                  _this.updateVersionColumn(res.data);
                }
                if (!!res.children && res.children.length > 0) {
                  _this.setActionForChildrens(res.children, isWorkscope);
                }
              }
            });
          };
          CockpitWorkscopeFormComponent.prototype.onNodeExpand = function(node) {
            this.selectedWorkscope = node;
          };
          /**********************************************
           * Set Workscope Information Panel
           *********************************************/
          CockpitWorkscopeFormComponent.prototype.getWorkscopeInformation = function(data) {
            this.workscopeInformationObject = {
              lastUpdate: this.bsdeProjectDTO.statusUser,
              lastUpdateDate: this.bsdeProjectDTO.statusDate,
              approveItem: 0,
              draftItem: 0,
              removeItem: 0
            };
            if (!!data && data.length > 0 && !!data[0].data) {
              this.workscopeInformationObject.versionNumber = data[0].data.workscopeVersionNumber;
              this.workscopeInformationObject.status =
                data[0].data.workscopeVersionStatus === 0 ? this.draft : this.approved;
            }
            if (this.workscopeInformationObject.status === this.approved) {
              this.isApprove = true;
            }
          };
          CockpitWorkscopeFormComponent.prototype.resetWorkscopeCounters = function() {
            this.workscopeInformationObject.approveItem = 0;
            this.workscopeInformationObject.draftItem = 0;
            this.workscopeInformationObject.removeItem = 0;
          };
          CockpitWorkscopeFormComponent.prototype.getColorStyle = function(rowData) {
            return rowData.isModified && rowData.isWorkscope
              ? 'added'
              : rowData.isModified && !rowData.isWorkscope
              ? 'removed'
              : 'none';
          };
          /***************************************************
           * Filter handling
           **************************************************/
          CockpitWorkscopeFormComponent.prototype.filterWithCriteria = function() {
            this.showFilterButtons = Object.keys(this.searchCriteria).length === 0 ? false : true;
            this.searchGlobalFilter = '';
            if (Object.keys(this.searchCriteria).length === 0) {
              // No Filter => Restore UI data
              this.workscopeStructure = this.buildTree(this.modifiedWorkscopeTreeData);
              if (this.workscopeStructure.length > 0) {
                this.workscopeStructure[0].expanded = true;
              }
            } else {
              this.searchSubAssemblyGlobalFilterChanged.next();
            }
          };
          /**********************************************
           * Approve and Upgrade functionality
           **********************************************/
          CockpitWorkscopeFormComponent.prototype.approve = function() {
            this.workscopeInformationObject.status = this.approved;
            this.buildTree(this.workscopeStructure);
            this.resetWorkscopeCounters();
            this.updateWorkscopeInformation(this.modifiedWorkscopeTreeData);
            this.isApprove = true;
          };
          CockpitWorkscopeFormComponent.prototype.upgrade = function() {
            this.workscopeInformationObject.status = this.draft;
            if (!!this.workscopeInformationObject.versionNumber) {
              this.workscopeInformationObject.versionNumber += 1;
            }
            this.isApprove = false;
          };
          /*****************************************************
           * Add/Remove all from workscope
           ****************************************************/
          CockpitWorkscopeFormComponent.prototype.addRemoveAllToWorkscope = function(flag) {
            // Avoiding multiple click on buttons
            if (this.workscopeStructure.length > 0) {
              // Avoid parent item to be modified
              var parentItemData = this.workscopeStructure[0].data;
              this.modifyAllWorkscope(this.workscopeStructure, flag, parentItemData);
              // Update modified Keys of ui tree
              this.updateTreeData(this.workscopeStructure, this.modifiedWorkscopeTreeData);
            }
          };
          CockpitWorkscopeFormComponent.prototype.modifyAllWorkscope = function(treeData, isWorkscope, parent) {
            var _this = this;
            treeData.forEach(function(res) {
              if (!!res && !!res.data) {
                // get modified copy
                var workscopeTreeDataFromStaged = _this.getWorkscopeTreeDataFromStaged(_this.getKey(res.data));
                var workscopeTreeDataInDB = _this.getWorkscopeTreeDataFromDB(_this.getKey(res.data));
                if (!!res.children && res.children.length === 0) {
                  var parentInfo = !!parent ? _this.getKey(parent) : undefined;
                  _this.inventoryModified(res.data, res, isWorkscope, parentInfo);
                }
                // Update Map
                _this.updateStageMap(res.data);
                if (res.children && res.children.length > 0) {
                  _this.updateBireItemOfNode(res.data, isWorkscope);
                  // Updating map
                  if (!!workscopeTreeDataFromStaged && !!workscopeTreeDataFromStaged.data) {
                    _this.updateBireItemForWorkscopeTreeDTO(res.data, workscopeTreeDataFromStaged.data);
                  }
                  _this.updateNodeInTree(res.data, _this.modifiedWorkscopeTreeData);
                  _this.modifyAllWorkscope(res.children, isWorkscope, parent);
                } else if (
                  !!workscopeTreeDataInDB &&
                  !!workscopeTreeDataInDB.data &&
                  !!workscopeTreeDataInDB.children &&
                  workscopeTreeDataInDB.children.length > 0
                ) {
                  _this.updateBireItemOfNode(workscopeTreeDataInDB.data, isWorkscope);
                  // Updating map
                  if (!!workscopeTreeDataFromStaged && !!workscopeTreeDataFromStaged.data) {
                    _this.updateBireItemForWorkscopeTreeDTO(
                      workscopeTreeDataInDB.data,
                      workscopeTreeDataFromStaged.data
                    );
                  }
                  _this.updateNodeInTree(workscopeTreeDataInDB.data, _this.modifiedWorkscopeTreeData);
                  _this.modifyAllWorkscope(workscopeTreeDataInDB.children, isWorkscope, parent);
                }
                // Modify Parent Node on basis   of childrens
                _this.updateParentNode(res, isWorkscope);
              }
            });
          };
          CockpitWorkscopeFormComponent.prototype.updateParentNode = function(res, isWorkscope) {
            // Modify Parent Node on basis of childrens
            if (!!res.parent) {
              if (!!res.parent.children && !!res.parent.data) {
                // Check workscope status of all children
                var parentDTO = this.workscopeTreeDataFromStagedByItemKeyMap.get(this.getKey(res.parent.data));
                if (!!parentDTO && !!parentDTO.children) {
                  var isAllWorkscope = [];
                  this.workscopeItems(parentDTO, isAllWorkscope);
                  res.parent.data.isWorkscope = isAllWorkscope.length === 0 ? false : true;
                  this.updateBireItemOfNode(res.parent.data, res.parent.data.isWorkscope);
                  // Update Map
                  this.updateStageMap(res.parent.data);
                }
                // If parent itself has parent
                if (!!res.parent.parent) {
                  this.updateParentNode(res.parent, isWorkscope);
                }
              }
            }
          };
          CockpitWorkscopeFormComponent.prototype.workscopeItems = function(data, toReturn) {
            var _this = this;
            if (!!data.children) {
              data.children.forEach(function(elt) {
                if (!!elt.data && elt.data.isWorkscope) {
                  toReturn.push(elt);
                }
                if (!!elt.children) {
                  _this.workscopeItems(elt, toReturn);
                }
              });
            }
          };
          CockpitWorkscopeFormComponent.prototype.updateStageMap = function(data) {
            // Update Map
            var workscopeTreeStagedData = this.workscopeTreeDataFromStagedByItemKeyMap.get(this.getKey(data));
            // Updating map
            if (!!workscopeTreeStagedData && !!workscopeTreeStagedData.data) {
              this.updateBireItemForWorkscopeTreeDTO(data, workscopeTreeStagedData.data);
            }
          };
          /***************************************************
           * Update counter of Workscope Information panel
           ***************************************************/
          CockpitWorkscopeFormComponent.prototype.updateWorkscopeInformation = function(res) {
            var _this = this;
            res.forEach(function(workscope) {
              if (!!workscope.data) {
                var data = workscope.data;
                if (data.isModified && data.isRemoved && _this.workscopeInformationObject.removeItem !== undefined) {
                  _this.workscopeInformationObject.removeItem += 1;
                }
                if (data.workscopeVersionStatus === 1 && _this.workscopeInformationObject.approveItem !== undefined) {
                  _this.workscopeInformationObject.approveItem += 1;
                }
                if (data.workscopeVersionStatus === 0 && _this.workscopeInformationObject.draftItem !== undefined) {
                  _this.workscopeInformationObject.draftItem += 1;
                }
                if (!!workscope.children && workscope.children.length > 0) {
                  _this.updateWorkscopeInformation(workscope.children);
                }
              }
            });
          };
          /**********************************************
           * Support for Load Workscope from Excel
           **********************************************/
          CockpitWorkscopeFormComponent.prototype.loadFromExcel = function() {
            this.showWorkscopeImportPopup = true;
          };
          CockpitWorkscopeFormComponent.prototype.refreshOnImport = function() {
            // TODO
          };
          CockpitWorkscopeFormComponent.prototype.openFilters = function() {
            this.showFilterOverlay = !this.filtersVisible;
          };
          /********************************************
           * SAVE WORKSCOPE
           ********************************************/
          CockpitWorkscopeFormComponent.prototype.save = function(isFromExport) {
            var _this = this;
            if (!this.isAddInventory && !this.isNewInventoryAdded) {
              this.cleanParents(this.modifiedWorkscopeTreeData);
              var input = {
                projectNumber: this.bsdeProjectDTO.projectNumber,
                workscopeTreeDataList: this.modifiedWorkscopeTreeData
              };
              this.showSaveSpinner = true;
              this.cockpitWorkscopeFormService
                .saveWorkscope(input)
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['finalize'])(function() {
                    _this.tableLoading = false;
                    _this.showSaveSpinner = false;
                    if (isFromExport) {
                      _this.exportWorkscope();
                    }
                  })
                )
                .subscribe(function(result) {
                  _this.updateOpenMode(
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
                  );
                  // TODO
                  _this.messageService.showSuccessMessage('global.successOnSave');
                });
            }
          };
          CockpitWorkscopeFormComponent.prototype.cleanParents = function(structure) {
            var _this = this;
            structure.forEach(function(elt, index) {
              elt.parent = {};
              if (elt.children) {
                _this.cleanParents(elt.children);
              }
            });
          };
          CockpitWorkscopeFormComponent.prototype.isObjectNotNull = function(searchCriteria) {
            return !!searchCriteria && Object.keys(searchCriteria).length > 0;
          };
          /********************************************
           * UTILITY METHODS
           ********************************************/
          // Getting identifier key for an item node
          CockpitWorkscopeFormComponent.prototype.getKey = function(item) {
            return item.chapter + '-' + item.section + '-' + item.subject + '-' + item.sheet + '-' + item.marks;
          };
          // Based on the key, getting the node copy of DB
          CockpitWorkscopeFormComponent.prototype.getWorkscopeTreeDataFromDB = function(key) {
            return this.workscopeTreeDataInDBByItemKeyMap.get(key);
          };
          // Based on the key, getting the node copy of UI
          CockpitWorkscopeFormComponent.prototype.getWorkscopeTreeDataFromUI = function(key) {
            return this.workscopeTreeDataFromUIByItemKeyMap.get(key);
          };
          // Based on the key, getting the node copy from staged (modified)
          CockpitWorkscopeFormComponent.prototype.getWorkscopeTreeDataFromStaged = function(key) {
            return this.workscopeTreeDataFromStagedByItemKeyMap.get(key);
          };
          // Build a map to ease the search of a node
          CockpitWorkscopeFormComponent.prototype.buildMap = function(data, referenceMap) {
            var _this = this;
            data.forEach(function(elt) {
              var eleClone = elt.data;
              if (!!eleClone) {
                if (!!eleClone.chapter) {
                  // tslint:disable-next-line:max-line-length
                  var item =
                    eleClone.chapter +
                    '-' +
                    eleClone.section +
                    '-' +
                    eleClone.subject +
                    '-' +
                    eleClone.sheet +
                    '-' +
                    eleClone.marks;
                  referenceMap.set(item, elt);
                }
              }
              _this.buildMap(elt.children || [], referenceMap);
            });
          };
          CockpitWorkscopeFormComponent.prototype.updateTreeData = function(source, destination) {
            var _this = this;
            if (destination && source) {
              source.forEach(function(sourceItem) {
                if (!!sourceItem.data) {
                  var sData = sourceItem.data;
                  _this.updateNodeInTree(sData, destination);
                }
              });
            }
          };
          CockpitWorkscopeFormComponent.prototype.updateNodeInTree = function(searchObj, destination) {
            var _this = this;
            if (destination && searchObj) {
              destination.filter(function(destinationItem) {
                var dData = destinationItem.data;
                if (_this.getKey(searchObj) === _this.getKey(dData)) {
                  _this.updateBireItemForWorkscopeTreeDTO(searchObj, dData);
                }
                if (!!destinationItem.children && destinationItem.children.length > 0) {
                  _this.updateNodeInTree(searchObj, destinationItem.children);
                }
              });
            }
          };
          // Synchronise two BireItemForWorkscopeTreeDTO
          CockpitWorkscopeFormComponent.prototype.updateBireItemForWorkscopeTreeDTO = function(source, destination) {
            if (destination && source) {
              destination.isWorkscope = source.isWorkscope;
              destination.isModified = source.isModified;
              destination.workscopeVersionNumber = this.workscopeInformationObject.versionNumber;
              destination.workscopeVersionStatus = !destination.isWorkscope
                ? undefined
                : this.workscopeInformationObject.status === this.draft
                ? 0
                : 1;
              destination.isAdded = source.isAdded;
              destination.isRemoved = source.isRemoved;
            }
          };
          CockpitWorkscopeFormComponent.prototype.setSearchSentenceDecisionList = function() {
            var _this = this;
            this.cockpitWorkscopeFormService.fetchSentenceList().subscribe(function(res) {
              _this.sentenceList = res;
            });
            this.cockpitWorkscopeFormService.fetchDecisionList().subscribe(function(res) {
              _this.decisionList = res;
            });
          };
          /*********************************************
           * Fetch Sentence List
           *********************************************/
          CockpitWorkscopeFormComponent.prototype.getSentenceValue = function(label, isValue) {
            var dto = this.sentenceList.filter(function(res) {
              return isValue ? res.value === label : res.label === label;
            });
            return !!dto && dto.length > 0 ? (isValue ? dto[0].label : dto[0].value) : undefined;
          };
          /*********************************************
           * Fetch Decision List
           *********************************************/
          CockpitWorkscopeFormComponent.prototype.getDecisionValue = function(label, isValue) {
            var dto = this.decisionList.filter(function(res) {
              return isValue ? res.value === label : res.label === label;
            });
            return !!dto && dto.length > 0 ? (isValue ? dto[0].label : dto[0].value) : undefined;
          };
          /********************************************
           * Save and Export Workscope
           ********************************************/
          CockpitWorkscopeFormComponent.prototype.saveAndExport = function() {
            var _this = this;
            var isSaveNeeded = true;
            // Check the need if project needs to be saved
            if (
              !!this.workscopeInformationObject &&
              this.workscopeInformationObject.removeItem === 0 &&
              this.workscopeInformationObject.approveItem === 0
            ) {
              // Nothing modified
              isSaveNeeded = false;
            }
            if (isSaveNeeded) {
              var partialMessageKey = 'saveProjectAndExport';
              this.confirmationService.confirm({
                messageKey: this.getTranslateKey(partialMessageKey),
                accept: function() {
                  _this.save(true);
                }
              });
            } else {
              this.exportWorkscope();
            }
          };
          /**************************************
           * Export Workscope
           **************************************/
          CockpitWorkscopeFormComponent.prototype.exportWorkscope = function() {
            // TODO implement when service is ready
            this.messageService.showSuccessMessage(this.getTranslateKey('exportFile'));
          };
          var CockpitWorkscopeFormComponent_1;
          CockpitWorkscopeFormComponent.SEARCH_TEXT_DEBOUNCE_TIME = 500;
          CockpitWorkscopeFormComponent.ALL = 0;
          CockpitWorkscopeFormComponent.ADDED = 1;
          CockpitWorkscopeFormComponent.DELETED = 2;
          CockpitWorkscopeFormComponent = CockpitWorkscopeFormComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-cockpit-workscope-form',
                template: __webpack_require__(
                  /*! ./cockpit-workscope-form.component.html */ './src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./cockpit-workscope-form.component.scss */ './src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_11__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_15__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_17__['TabService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__['ConfirmationService'],
                _cockpit_workscope_form_service__WEBPACK_IMPORTED_MODULE_22__['CockpitWorkscopeFormService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_14__['PropertiesService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_16__['SessionService']
              ])
            ],
            CockpitWorkscopeFormComponent
          );
          return CockpitWorkscopeFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_18__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.service.ts':
      /*!*******************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.service.ts ***!
  \*******************************************************************************************/
      /*! exports provided: CockpitWorkscopeFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'CockpitWorkscopeFormService',
          function() {
            return CockpitWorkscopeFormService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_api_cockpit_component_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/cockpit-component.api */ './src/app/shared/api/cockpit-component.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/api/project-management.api */ './src/app/shared/api/project-management.api.ts'
        );
        /* harmony import */ var _shared_api_standard_import_pm_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/api/standard-import-pm.api */ './src/app/shared/api/standard-import-pm.api.ts'
        );
        /* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/api/task-management.api */ './src/app/shared/api/task-management.api.ts'
        );
        /* harmony import */ var _shared_api_workscope_component_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/api/workscope-component.api */ './src/app/shared/api/workscope-component.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
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

        var CockpitWorkscopeFormService = /** @class */ (function(_super) {
          __extends(CockpitWorkscopeFormService, _super);
          function CockpitWorkscopeFormService(
            http,
            appConfigService,
            workscopeComponentApi,
            projectManagementApi,
            productStructureManagementApi,
            fleetManagementApi,
            standardImportPmApi,
            taskManagementApi,
            cockpitComponentApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.workscopeComponentApi = workscopeComponentApi;
            _this.projectManagementApi = projectManagementApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.standardImportPmApi = standardImportPmApi;
            _this.taskManagementApi = taskManagementApi;
            _this.cockpitComponentApi = cockpitComponentApi;
            _this.saveInventory = new rxjs__WEBPACK_IMPORTED_MODULE_2__['Subject']();
            return _this;
          }
          CockpitWorkscopeFormService.prototype.findBsdeProjectByProjectNumber = function(projectNumber) {
            return _super.prototype.post.call(
              this,
              this.projectManagementApi.findBsdeProjectByProjectNumber,
              projectNumber
            );
          };
          CockpitWorkscopeFormService.prototype.getWorkscope = function(input) {
            return _super.prototype.post.call(this, this.workscopeComponentApi.getWorkscope, input);
          };
          CockpitWorkscopeFormService.prototype.findMROCenter = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireSiteForTask);
          };
          CockpitWorkscopeFormService.prototype.findAllCustomers = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findMroBireSite);
          };
          CockpitWorkscopeFormService.prototype.getImportTaskBsdeXLS = function() {
            return _super.prototype.post.call(this, this.standardImportPmApi.getImportTaskBsdeXLS);
          };
          CockpitWorkscopeFormService.prototype.findBireReturnReasonsByItem = function(projectNumber) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireReturnReasonsByItem, projectNumber);
          };
          CockpitWorkscopeFormService.prototype.saveBsdeReturnReasonWithBsdeProject = function(
            saveBsdeReturnReasonWithProjectInput
          ) {
            return _super.prototype.post.call(
              this,
              this.projectManagementApi.saveBsdeReturnReasonWithBsdeProject,
              saveBsdeReturnReasonWithProjectInput
            );
          };
          CockpitWorkscopeFormService.prototype.getWorkscopeTargetNumberAndVariantName = function(input) {
            return _super.prototype.post.call(
              this,
              this.workscopeComponentApi.getWorkscopeTargetNumberAndVariantName,
              input
            );
          };
          CockpitWorkscopeFormService.prototype.loadFamilyVariants = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireVariantVersions);
          };
          CockpitWorkscopeFormService.prototype.loadWorkshopScopeByProjectNumber = function(input) {
            return _super.prototype.post.call(this, this.workscopeComponentApi.getLoadWorkscope, input);
          };
          CockpitWorkscopeFormService.prototype.findBidoEquipmentsByPnAndSn = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes, input);
          };
          CockpitWorkscopeFormService.prototype.getPartNumberStructure = function(bireItemDTOId) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.getPartNumberStructure,
              bireItemDTOId
            );
          };
          CockpitWorkscopeFormService.prototype.downloadTemplate = function() {
            return _super.prototype.post.call(this, this.workscopeComponentApi.loadWorkscopeTemplate);
          };
          CockpitWorkscopeFormService.prototype.findBireConfigurationPacksByItemVersionAndConfigurationCode = function(
            input
          ) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireConfigurationPacksByItemVersionAndConfigurationCode,
              input
            );
          };
          CockpitWorkscopeFormService.prototype.findBirePackEvolutionsByItemAndPackBaseOptionCodeItem = function(
            input
          ) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBirePackEvolutionsByItemAndPackBaseOptionCodeItem,
              input
            );
          };
          // Save inventory event
          CockpitWorkscopeFormService.prototype.updateInventory = function() {
            this.saveInventory.next(true);
          };
          // Save Workscope
          CockpitWorkscopeFormService.prototype.saveWorkscope = function(input) {
            return _super.prototype.post.call(this, this.workscopeComponentApi.saveWorkscope, input);
          };
          // Save Removal Causes
          CockpitWorkscopeFormService.prototype.saveCauseRemovalList = function(input) {
            return _super.prototype.post.call(this, this.workscopeComponentApi.saveCauseRemoval, input);
          };
          CockpitWorkscopeFormService.prototype.fetchSentenceList = function() {
            return _super.prototype.post.call(this, this.cockpitComponentApi.getSentenceList);
          };
          CockpitWorkscopeFormService.prototype.fetchDecisionList = function() {
            return _super.prototype.post.call(this, this.cockpitComponentApi.getDecisionList);
          };
          CockpitWorkscopeFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_11__['AppConfigService'],
                _shared_api_workscope_component_api__WEBPACK_IMPORTED_MODULE_9__['WorkscopeComponentApi'],
                _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_6__['ProjectManagementApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__['FleetManagementApi'],
                _shared_api_standard_import_pm_api__WEBPACK_IMPORTED_MODULE_7__['StandardImportPmApi'],
                _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_8__['TaskManagementApi'],
                _shared_api_cockpit_component_api__WEBPACK_IMPORTED_MODULE_3__['CockpitComponentApi']
              ])
            ],
            CockpitWorkscopeFormService
          );
          return CockpitWorkscopeFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_10__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/load-workscope-popup/load-workscope-popup.component.html':
      /*!******************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/load-workscope-popup/load-workscope-popup.component.html ***!
  \******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title chapter">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="grid-row">\r\n        <div class="form-group">\r\n          <h4>\r\n            {{ getComponentName() + ".message" | translate }}\r\n          </h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="loadEquipmentData()">\r\n      {{ getComponentName() + ".loadEquipment" | translate }}\r\n    </button>\r\n    <button type="button" mat-raised-button (click)="close()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/load-workscope-popup/load-workscope-popup.component.ts':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/load-workscope-popup/load-workscope-popup.component.ts ***!
  \****************************************************************************************************************/
      /*! exports provided: LoadWorkscopePopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'LoadWorkscopePopupComponent',
          function() {
            return LoadWorkscopePopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _cockpit_workscope_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../cockpit-workscope-form.service */ './src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.service.ts'
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

        var LoadWorkscopePopupComponent = /** @class */ (function(_super) {
          __extends(LoadWorkscopePopupComponent, _super);
          function LoadWorkscopePopupComponent(cockpitWorkscopeFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'LoadWorkscopePopupComponent'
              ) || this;
            _this.cockpitWorkscopeFormService = cockpitWorkscopeFormService;
            _this.onEquipmentLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          LoadWorkscopePopupComponent.prototype.ngOnInit = function() {
            return;
          };
          LoadWorkscopePopupComponent.prototype.close = function() {
            this.display = false;
          };
          LoadWorkscopePopupComponent.prototype.loadEquipmentData = function() {
            this.onEquipmentLoad.emit(true);
            this.display = false;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            LoadWorkscopePopupComponent.prototype,
            'onEquipmentLoad',
            void 0
          );
          LoadWorkscopePopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-load-workscope-popup',
                template: __webpack_require__(
                  /*! ./load-workscope-popup.component.html */ './src/app/main/maintenance/cockpit-workscope/form/load-workscope-popup/load-workscope-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _cockpit_workscope_form_service__WEBPACK_IMPORTED_MODULE_3__['CockpitWorkscopeFormService']
              ])
            ],
            LoadWorkscopePopupComponent
          );
          return LoadWorkscopePopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/manage-configuration/manage-configuration-form.component.html':
      /*!***********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/manage-configuration/manage-configuration-form.component.html ***!
  \***********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ projectNumber }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button *ngIf="!isReadOpenMode" color="primary" type="button" mat-raised-button (click)="save()">\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12 custom-breadcrumb-padding">\r\n          <div class="grid-cell grid-cell--container bread-crumb-custom-cell">\r\n            <div class="grid-cell-content">\r\n              <div class="row">\r\n                <div class="grid-cell--6"></div>\r\n                <div class="grid-cell--3">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ getComponentName() + ".targetConfigurationNumber" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        placeholder="&nbsp;"\r\n                        [options]="targetNumberList"\r\n                        [(ngModel)]="selectedTargetConfiguration"\r\n                        [showClear]="true"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-cell--3">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ getComponentName() + ".targetVariant" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        placeholder="&nbsp;"\r\n                        [options]="variantNameList"\r\n                        [(ngModel)]="selectedTargetVariantName"\r\n                        [showClear]="true"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="grid-row">\r\n        <div class="grid-cell--6">\r\n          <div class="grid-cell grid-cell--container grid-cell-scope  grid-cell-item-structure">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container  loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".itemsConfiguration" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table #table class="aw-table2" [columns]="itemConfigurationTableCols" [value]="itemConfigurationTable">\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoadingItemConfiguration"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoadingItemConfiguration" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header"></div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ getComponentName() + "." + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <div *ngSwitchCase="\'conf2\'" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [options]="rowData[\'iwbTargetConfigList2\']"\r\n                          [(ngModel)]="rowData[col.field]"\r\n                          appendTo="body"\r\n                          [disabled]="isReadMode"\r\n                          (onChange)="onChangeConfiguration(rowData, 2, rowData[col.field])"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                      <div *ngSwitchCase="\'conf3\'" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [options]="rowData[\'iwbTargetConfigList3\']"\r\n                          [(ngModel)]="rowData[col.field]"\r\n                          appendTo="body"\r\n                          [disabled]="isReadMode"\r\n                          (onChange)="onChangeConfiguration(rowData, 3, rowData[col.field])"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                      <div *ngSwitchCase="\'bireItemText\'">\r\n                        <div>{{ rowData[col.field] }}</div>\r\n                        <div *ngIf="!!rowData[\'bireItemDTO\']">\r\n                          <i>{{ rowData["bireItemDTO"].name }}</i>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngSwitchDefault>{{ rowData[col.field] }}</div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="grid-cell--6">\r\n          <div class="grid-cell grid-cell--container grid-cell-scope  grid-cell-item-structure">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container  loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".configurationReport" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #table\r\n                class="aw-table2"\r\n                [columns]="configurationReportTableCols"\r\n                [value]="configurationReportTable"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoadingConfigurationReport"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoadingConfigurationReport" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header"></div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col [ngStyle]="{ width: \'46%\' }" />\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th [ngStyle]="{ width: \'46%\' }"></th>\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ getComponentName() + "." + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td [ngStyle]="{ width: \'46%\' }">\r\n                      <div>{{ rowData["name"] }}</div>\r\n                    </td>\r\n                    <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <div *ngSwitchDefault [ngClass]="{ \'blue-cell\': rowData[col.field] === rowData[\'max\'] }">\r\n                        {{ rowData[col.field] }}\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container grid-cell-scope  grid-cell-item-structure">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container  loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".configurationEvolutions" | translate }} ({{\r\n                    configurationEvolutionTable ? configurationEvolutionTable.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #table\r\n                class="aw-table2"\r\n                [columns]="configurationEvolutionTableCols"\r\n                [value]="configurationEvolutionTableOnLoad"\r\n                [scrollable]="true"\r\n                scrollHeight="400px"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoadingConfigurationEvolution"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoadingConfigurationEvolution" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header">\r\n                    <div class="aw-table-global-filter custom-filter-class">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableResultsGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="table.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n                    <div>\r\n                      <p-selectButton\r\n                        [options]="filterList"\r\n                        [(ngModel)]="selectedFilter"\r\n                        (onChange)="selectFilter()"\r\n                      ></p-selectButton>\r\n                    </div>\r\n                    <div class="aw-table-actions">\r\n                      <p-selectButton\r\n                        [options]="confList"\r\n                        [(ngModel)]="selectedConf"\r\n                        (onChange)="selectFilter()"\r\n                      ></p-selectButton>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ getComponentName() + "." + col.field | translate }}\r\n                    </th>\r\n                    <th class="aw-table-checkbox-wrapper"></th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <span *ngSwitchCase="\'items\'">\r\n                        <div class="code">\r\n                          <div class="info">\r\n                            <span>\r\n                              <b>\r\n                                <a> {{ rowData[col.field] }}</a></b\r\n                              ></span\r\n                            >\r\n                          </div>\r\n                          <div class="info">\r\n                            <span>\r\n                              <i> {{ rowData["itemsDesc"] }} </i></span\r\n                            >\r\n                          </div>\r\n                        </div>\r\n                      </span>\r\n                      <div *ngSwitchCase="\'apply\'" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                        <p-checkbox\r\n                          *ngIf="selectedConf === conf1"\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="rowData[\'inMinConf\']"\r\n                          [disabled]="rowData[\'isDisabled\']"\r\n                          (onChange)="onChangeMinConf(rowData)"\r\n                        ></p-checkbox>\r\n                        <p-checkbox\r\n                          *ngIf="selectedConf === conf2"\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="rowData[\'inConf2\']"\r\n                          (onChange)="onChangeMinConf(rowData)"\r\n                        ></p-checkbox>\r\n                        <p-checkbox\r\n                          *ngIf="selectedConf === conf3"\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="rowData[\'inConf3\']"\r\n                          (onChange)="onChangeMinConf(rowData)"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                      <div *ngSwitchCase="\'evolutionNumber\'" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                        <div class="info">\r\n                          <span>\r\n                            <b>\r\n                              <a (click)="openEvolutionLink(rowData)"> {{ rowData[col.field] }}</a></b\r\n                            ></span\r\n                          >\r\n                        </div>\r\n                      </div>\r\n                      <div *ngSwitchCase="\'evolutionDesignation\'">\r\n                        <div class="code" id="parent-hover-content">\r\n                          <div class="info">{{ rowData[col.field] }}</div>\r\n                          <div class="info" id="hover-content">\r\n                            <span>\r\n                              <i> {{ rowData[col.field] }} </i></span\r\n                            >\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngSwitchDefault>{{ rowData[col.field] }}</div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/manage-configuration/manage-configuration-form.component.scss':
      /*!***********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/manage-configuration/manage-configuration-form.component.scss ***!
  \***********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host #hover-content {\n  display: none; }\n\n:host #parent-hover-content:hover #hover-content {\n  display: block;\n  background-color: black;\n  color: #fff !important;\n  white-space: normal; }\n\n:host .custom-filter-class {\n  flex-grow: 0 !important;\n  padding-right: 2% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb2NrcGl0LXdvcmtzY29wZS9mb3JtL21hbmFnZS1jb25maWd1cmF0aW9uL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxcY29ja3BpdC13b3Jrc2NvcGVcXGZvcm1cXG1hbmFnZS1jb25maWd1cmF0aW9uXFxtYW5hZ2UtY29uZmlndXJhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBYSxFQUFBOztBQUZqQjtFQUtJLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBOztBQVJ2QjtFQVlJLHVCQUF1QjtFQUN2Qiw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29ja3BpdC13b3Jrc2NvcGUvZm9ybS9tYW5hZ2UtY29uZmlndXJhdGlvbi9tYW5hZ2UtY29uZmlndXJhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICNob3Zlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNwYXJlbnQtaG92ZXItY29udGVudDpob3ZlciAjaG92ZXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWZpbHRlci1jbGFzcyB7XHJcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/manage-configuration/manage-configuration-form.component.ts':
      /*!*********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/manage-configuration/manage-configuration-form.component.ts ***!
  \*********************************************************************************************************************/
      /*! exports provided: ManageConfigurationFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ManageConfigurationFormComponent',
          function() {
            return ManageConfigurationFormComponent;
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
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _cockpit_workscope_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../cockpit-workscope-form.service */ './src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.service.ts'
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

        var ManageConfigurationFormComponent = /** @class */ (function(_super) {
          __extends(ManageConfigurationFormComponent, _super);
          function ManageConfigurationFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            cockpitWorkscopeFormService,
            sessionService,
            translateService
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
            _this.cockpitWorkscopeFormService = cockpitWorkscopeFormService;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.conf1 = 'conf1';
            _this.conf2 = 'conf2';
            _this.conf3 = 'conf3';
            return _this;
          }
          ManageConfigurationFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
              .MAI_MANAGE_CONFIGURATION_FORM;
          };
          ManageConfigurationFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            var context = !!this.componentData.objectId
              ? this.serializationService.deserialize(this.componentData.objectId)
              : undefined;
            if (!!context) {
              this.displayComponentContext('N\u00B0' + context, this.isCreateOpenMode);
            }
            this.init();
            this.renderTreeTableColumns();
            this.fetchTablesData();
          };
          /**********************************
           * INITIALIZATION
           **********************************/
          ManageConfigurationFormComponent.prototype.init = function() {
            this.targetNumberList = [];
            this.variantNameList = [];
            this.itemConfigurationTable = [];
            this.itemConfigurationTableClone = [];
            this.configurationEvolutionTable = [];
            this.configurationReportTable = [];
            this.iwbTargetConfiguration = [];
            this.evolutionLinkedToConfList = [];
            this.confList = [
              { label: String(this.translateService.instant(this.getTranslateKey('conf1'))), value: 'conf1' },
              { label: String(this.translateService.instant(this.getTranslateKey('conf2'))), value: 'conf2' },
              { label: String(this.translateService.instant(this.getTranslateKey('conf3'))), value: 'conf3' }
            ];
            this.filterList = [
              { label: String(this.translateService.instant(this.getTranslateKey('all'))), value: '0' },
              { label: String(this.translateService.instant(this.getTranslateKey('applied'))), value: '1' },
              { label: String(this.translateService.instant(this.getTranslateKey('notApplied'))), value: '2' }
            ];
            this.categoryMandatory = this.translateService.instant(this.getTranslateKey('mandatory'));
            this.selectedFilter = '0';
            this.selectedTargetConfiguration = '3';
            this.selectedConf = 'conf1';
          };
          /**********************************
           * TREE TABLE COLUMNS
           **********************************/
          ManageConfigurationFormComponent.prototype.renderTreeTableColumns = function() {
            this.setConfigurationColumns();
            this.selectedTargetConfiguration = '1';
            this.configurationReportTableCols = [
              { field: 'conf1', alignment: 'center', width: '18%' },
              { field: 'conf2', alignment: 'center', width: '18%' },
              { field: 'conf3', alignment: 'center', width: '18%' }
            ];
            this.configurationEvolutionTableCols = [
              { field: 'items', alignment: 'left', width: '10%' },
              { field: 'apply', alignment: 'center', width: '5%' },
              { field: 'evolutionNumber', alignment: 'left', width: '10%' },
              { field: 'evolutionDesignation', alignment: 'left', width: '20%' },
              { field: 'category', alignment: 'left', width: '15%' },
              { field: 'compliance', alignment: 'left', width: '10%' },
              { field: 'mod', alignment: 'left', width: '10%' },
              { field: 'sb', alignment: 'left', width: '10%' },
              { field: 'ad', alignment: 'left', width: '10%' }
            ];
          };
          /**********************************
           * FETCH PROJECT DETAILS
           **********************************/
          ManageConfigurationFormComponent.prototype.fetchTablesData = function() {
            var _this = this;
            this.projectNumber = parseInt(this.serializationService.deserialize(this.componentData.objectId), 10);
            if (!!this.projectNumber) {
              var inputData = {
                projectNumber: this.projectNumber
              };
              var projectNumber = this.projectNumber;
              if (projectNumber) {
                this.isLoadingConfigurationEvolution = true;
                this.isLoadingConfigurationReport = true;
                this.isLoadingItemConfiguration = true;
                this.cockpitWorkscopeFormService
                  .getWorkscopeTargetNumberAndVariantName(inputData)
                  .pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                      _this.isLoadingConfigurationEvolution = false;
                      _this.isLoadingConfigurationReport = false;
                      _this.isLoadingItemConfiguration = false;
                    })
                  )
                  .subscribe(function(result) {
                    if (result) {
                      _this.targetNumberList = [
                        { label: String(_this.translateService.instant(_this.getTranslateKey('conf1'))), value: '1' },
                        { label: String(_this.translateService.instant(_this.getTranslateKey('conf2'))), value: '2' },
                        { label: String(_this.translateService.instant(_this.getTranslateKey('conf3'))), value: '3' }
                      ];
                      if (result.variantNameList) {
                        _this.variantNameList = result.variantNameList;
                        _this.selectedTargetVariantName =
                          !!_this.variantNameList && _this.variantNameList.length > 0
                            ? _this.variantNameList[0].value
                            : undefined;
                      }
                      if (result.itemConfigurationOutputList) {
                        result.itemConfigurationOutputList.forEach(function(data) {
                          if (!!data.iwbTargetConfigList1) {
                            data.iwbTargetConfigList1.sort(function(a, b) {
                              return !!a.label && !!b.label && a.label > b.label ? 1 : -1;
                            });
                          }
                          if (!!data.iwbTargetConfigList2) {
                            data.iwbTargetConfigList2.sort(function(a, b) {
                              return !!a.label && !!b.label && a.label > b.label ? 1 : -1;
                            });
                          }
                          if (!!data.iwbTargetConfigList3) {
                            data.iwbTargetConfigList3.sort(function(a, b) {
                              return !!a.label && !!b.label && a.label > b.label ? 1 : -1;
                            });
                          }
                          var dto = { label: '', value: undefined };
                          if (!!data.iwbTargetConfigList1 && data.iwbTargetConfigList1.length > 0) {
                            data.iwbTargetConfigList1.unshift(dto);
                          }
                          if (!!data.iwbTargetConfigList2 && data.iwbTargetConfigList2.length > 0) {
                            data.iwbTargetConfigList2.unshift(dto);
                          }
                          if (!!data.iwbTargetConfigList3 && data.iwbTargetConfigList3.length > 0) {
                            data.iwbTargetConfigList3.unshift(dto);
                          }
                        });
                        _this.itemConfigurationTable = result.itemConfigurationOutputList;
                        _this.itemConfigurationTableClone = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(
                          _this.itemConfigurationTable
                        );
                      }
                      if (result.configurationReportList) {
                        _this.configurationReportTable = result.configurationReportList.map(function(obj) {
                          var row = obj;
                          if (obj.conf1 && obj.conf2 && obj.conf3) {
                            row.max = Math.max(obj.conf1, obj.conf2, obj.conf3);
                          }
                          return row;
                        });
                        _this.configurationReportTable.push(
                          {
                            name: _this.translateService.instant(_this.getTranslateKey('incomingLogbook')),
                            conf1: 0,
                            conf2: 0,
                            conf3: 0
                          },
                          {
                            name: _this.translateService.instant(_this.getTranslateKey('itemConfToApply')),
                            conf1: 0,
                            conf2: 0,
                            conf3: 0
                          }
                        );
                      }
                      if (result.configurationEvolutionDTOList) {
                        _this.configurationEvolutionTable = result.configurationEvolutionDTOList.map(function(obj) {
                          var configurationsEvolutionRow = {
                            ad: obj.ad,
                            category: obj.category,
                            compliance: obj.compliance,
                            evolutionDesignation: obj.evolutionDesignation,
                            evolutionNumber: obj.evolutionNumber,
                            evolutionRevisionNumber: obj.evolutionRevisionNumber,
                            isMandatory: obj.iwbMinimalEvolution && obj.iwbMinimalEvolution.mandatory,
                            inConf2: obj.iwbMinimalEvolution && obj.iwbMinimalEvolution.inConf2,
                            inConf3: obj.iwbMinimalEvolution && obj.iwbMinimalEvolution.inConf3,
                            inMinConf: obj.iwbMinimalEvolution && obj.iwbMinimalEvolution.inMinConf,
                            items: obj.items,
                            itemsDesc:
                              obj.iwbMinimalEvolution &&
                              obj.iwbMinimalEvolution.configurableItemsImpactedList &&
                              obj.iwbMinimalEvolution.configurableItemsImpactedList.length
                                ? obj.iwbMinimalEvolution.configurableItemsImpactedList[0].name
                                : '',
                            mod: obj.mod,
                            sb: obj.sb,
                            _obj: obj
                          };
                          return configurationsEvolutionRow;
                        });
                        _this.renderEvolutionTable(true);
                        _this.updateAppliedReportCounter();
                        _this.iwbTargetConfiguration = result.iwbTargetConfiguration || [];
                        _this.findEvolutionLinkedToConfiguration(_this.iwbTargetConfiguration);
                      }
                    }
                  });
              }
            }
          };
          /*********************************************
           * EVOLUTIONS LINKED TO CONFIGURATION
           ********************************************/
          ManageConfigurationFormComponent.prototype.findEvolutionLinkedToConfiguration = function(configurationList) {
            var _this = this;
            this.evolutionLinkedToConfList = [];
            // Remove duplicate configurations occuring due to 3 conf
            var configurations = [];
            configurationList.forEach(function(res) {
              var found = configurations.some(function(conf) {
                return conf.configurationCode === res.configurationCode;
              });
              if (!found) {
                configurations.push(res);
              }
            });
            configurations.forEach(function(res) {
              if (res.configurationCode) {
                var isConfExist = _this.evolutionLinkedToConfList.some(function(evolutions) {
                  return evolutions.configuration === res.configurationCode;
                });
                if (!isConfExist) {
                  var input = {
                    bireItemVersionDTO: res,
                    configurationCode: res.configurationCode
                  };
                  _this.cockpitWorkscopeFormService
                    .findBireConfigurationPacksByItemVersionAndConfigurationCode(input)
                    .subscribe(function(packList) {
                      if (!!packList && packList.length > 0) {
                        // FIND PACKS HERE
                        packList.forEach(function(pack) {
                          var packInput = {
                            bireItemDTO: res,
                            packBaseOptionCode: pack.packBaseOptionCode
                          };
                          _this.cockpitWorkscopeFormService
                            .findBirePackEvolutionsByItemAndPackBaseOptionCodeItem(packInput)
                            .subscribe(function(evolutions) {
                              _this.evolutionLinkedToConfList.push({
                                evolutionList: evolutions,
                                configuration: res.configurationCode,
                                item:
                                  res.chapter +
                                  '-' +
                                  res.section +
                                  '-' +
                                  res.subject +
                                  '-' +
                                  res.sheet +
                                  '-' +
                                  res.marks
                              });
                            });
                        });
                      }
                    });
                }
              }
            });
          };
          ManageConfigurationFormComponent.prototype.setConfigReportTable = function() {
            var _this = this;
            var CONFIG_INDEX_LOGBOOK = 3;
            var INCOMING_LOGBOOK = this.translateService.instant(this.getTranslateKey('incomingLogbook'));
            if (!this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf1) {
              this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf1 = 0;
            }
            if (!this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf2) {
              this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf2 = 0;
            }
            if (!this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf3) {
              this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf3 = 0;
            }
            this.configurationEvolutionTableOnLoad.forEach(function(obj) {
              if (obj.category === INCOMING_LOGBOOK) {
                if (obj.inMinConf) {
                  _this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf1 = _this.configurationReportTable[
                    CONFIG_INDEX_LOGBOOK
                  ].conf1
                    ? _this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf1 + 1
                    : 1;
                }
                if (obj.inConf2) {
                  _this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf2 = _this.configurationReportTable[
                    CONFIG_INDEX_LOGBOOK
                  ].conf2
                    ? _this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf2 + 1
                    : 1;
                }
                if (obj.inConf3) {
                  _this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf3 = _this.configurationReportTable[
                    CONFIG_INDEX_LOGBOOK
                  ].conf3
                    ? _this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf3 + 1
                    : 1;
                }
              }
            });
            var data = this.configurationReportTable[CONFIG_INDEX_LOGBOOK];
            this.configurationReportTable[CONFIG_INDEX_LOGBOOK].max = Math.max(data.conf1, data.conf2, data.conf3);
          };
          ManageConfigurationFormComponent.prototype.renderEvolutionTable = function(updateTable) {
            this.sortEvolution();
            this.selectConfig();
            if (updateTable) {
              this.setConfigReportTable();
            }
          };
          ManageConfigurationFormComponent.prototype.sortEvolution = function() {
            if (!this.configurationEvolutionTableOnLoad || this.configurationEvolutionTableOnLoad.length === 0) {
              this.configurationEvolutionTableOnLoad = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(
                this.configurationEvolutionTable
              );
            }
            this.configurationEvolutionTableOnLoad.sort(function(a, b) {
              if (!!a.items && !!b.items) {
                if (a.items < b.items) {
                  return -1;
                } else if (a.items > b.items) {
                  return 1;
                } else {
                  return 0;
                }
              }
              return 0;
            });
          };
          ManageConfigurationFormComponent.prototype.selectConfig = function() {
            if (this.selectedConf === this.conf1) {
              this.configurationEvolutionTableOnLoad.forEach(function(obj) {
                obj.isDisabled = obj.isMandatory;
              });
            }
          };
          /*************************************************
           * Change event on conf change
           ************************************************/
          ManageConfigurationFormComponent.prototype.onChangeMinConf = function(rowData) {
            var SELECTED = this.translateService.instant(this.getTranslateKey('selected'));
            var AVAILABLE = this.translateService.instant(this.getTranslateKey('available'));
            var incomingLogbook = this.translateService.instant(this.getTranslateKey('incomingLogbook'));
            if (!!rowData.category && rowData.category.toLowerCase() !== incomingLogbook.toLowerCase()) {
              if (this.selectedConf === this.conf1) {
                rowData.category = rowData.inMinConf ? SELECTED : AVAILABLE;
              } else if (this.selectedConf === this.conf2) {
                rowData.category = rowData.inConf2 ? SELECTED : AVAILABLE;
              } else if (this.selectedConf === this.conf3) {
                rowData.category = rowData.inConf3 ? SELECTED : AVAILABLE;
              }
            }
            var changeIndex = -1;
            this.configurationEvolutionTable.filter(function(res, index) {
              if (
                res.items === rowData.items &&
                res.evolutionNumber === rowData.evolutionNumber &&
                res.evolutionRevisionNumber === rowData.evolutionRevisionNumber
              ) {
                changeIndex = index;
              }
            });
            if (changeIndex !== -1) {
              this.configurationEvolutionTable[changeIndex] = rowData;
            }
            this.configurationEvolutionTable = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(
              this.configurationEvolutionTable
            );
            this.updateAppliedReportCounter();
          };
          ManageConfigurationFormComponent.prototype.setConfigurationColumns = function() {
            this.itemConfigurationTableCols = [
              { field: 'bireItemText', alignment: 'left', width: '36%' },
              { field: 'conf2', alignment: 'left', width: '32%' },
              { field: 'conf3', alignment: 'left', width: '32%' }
            ];
          };
          ManageConfigurationFormComponent.prototype.openEvolutionLink = function(evolution) {
            if (evolution && evolution.evolutionNumber && evolution.evolutionRevisionNumber) {
              var bireEvolutionId = {
                evolutionNumber: evolution.evolutionNumber,
                evolutionRevisionNumber: evolution.evolutionRevisionNumber
              };
              this.openEvolution(
                bireEvolutionId,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Read
              );
            }
          };
          ManageConfigurationFormComponent.prototype.openEvolution = function(objectId, openMode) {
            var labelKey = 'transaction.EvolutionFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'EvolutionFormComponent',
              objectId: this.serializationService.serialize(objectId),
              openMode: openMode
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /**********************************************
           * Action on change configuration
           **********************************************/
          ManageConfigurationFormComponent.prototype.onChangeConfiguration = function(rowData, index, confCode) {
            var _this = this;
            var selected = this.translateService.instant(this.getTranslateKey('selected'));
            var conf3 = 3;
            var ITEM_CONFIG_TO_APPLY_INDEX = 4;
            // History Data
            var data = this.itemConfigurationTableClone.filter(function(res) {
              return res.bireItemText === rowData.bireItemText;
            });
            // Check the conf code
            var code = !!confCode
              ? confCode
              : data.length > 0 && index === 1
              ? data[0].conf1
              : index === 2
              ? data[0].conf2
              : data[0].conf3;
            var evolutionData = this.evolutionLinkedToConfList.filter(function(res) {
              return res.configuration === code;
            });
            this.updateTableForLastConfiguration(index, rowData);
            if (!!evolutionData && evolutionData.length > 0) {
              var evolutionList_1 = evolutionData[0].evolutionList.map(function(_a) {
                var evolutionNumber = _a.evolutionNumber;
                return evolutionNumber;
              });
              this.setValuesToConfigToApply(0, 0, 0);
              var INDUCED_BY_SELECTION_1 = this.translateService.instant(this.getTranslateKey('induceBySelection'));
              var AVAILABLE_1 = this.translateService.instant(this.getTranslateKey('available'));
              if (!!data && !!rowData && data.length > 0 && evolutionList_1.length > 0) {
                var itemData_1 = data[0]; // History Data
                this.configurationEvolutionTable.filter(function(ev) {
                  if (ev.items === rowData.bireItemText && ev.category !== _this.categoryMandatory) {
                    if (index === 2 && evolutionList_1.indexOf(ev.evolutionNumber) !== -1) {
                      if (!!rowData.conf2 && !itemData_1.conf2) {
                        ev.inConf2 = true;
                        if (ev.category !== selected) {
                          ev.category = INDUCED_BY_SELECTION_1;
                        }
                      } else if (!rowData.conf2 && !!itemData_1.conf2) {
                        ev.inConf2 = false;
                        ev.category = AVAILABLE_1;
                      } else if (!!rowData.conf2 && !!itemData_1.conf2) {
                        if (ev.items === itemData_1.bireItemText) {
                          ev.inConf2 = false;
                          ev.category = AVAILABLE_1;
                        }
                        if (ev.items === rowData.bireItemText) {
                          ev.inConf2 = true;
                          if (ev.category !== selected) {
                            ev.category = INDUCED_BY_SELECTION_1;
                          }
                        }
                      }
                    } else if (index === conf3 && evolutionList_1.indexOf(ev.evolutionNumber) !== -1) {
                      if (!!rowData.conf3 && !itemData_1.conf3) {
                        ev.inConf3 = true;
                        if (ev.category !== selected) {
                          ev.category = INDUCED_BY_SELECTION_1;
                        }
                      } else if (!rowData.conf3 && !!itemData_1.conf3) {
                        ev.inConf3 = false;
                        ev.category = AVAILABLE_1;
                      } else if (!!rowData.conf3 && !!itemData_1.conf3) {
                        if (ev.items === itemData_1.bireItemText) {
                          ev.inConf3 = false;
                          ev.category = AVAILABLE_1;
                        }
                        if (ev.items === rowData.bireItemText) {
                          ev.inConf3 = true;
                          if (ev.category !== selected) {
                            ev.category = INDUCED_BY_SELECTION_1;
                          }
                        }
                      }
                    }
                  }
                });
              }
              this.configurationEvolutionTableOnLoad = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(
                this.configurationEvolutionTable
              );
              this.renderEvolutionTable(false);
              this.updateAppliedReportCounter();
            }
            this.itemConfigurationTableClone = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(
              this.itemConfigurationTable
            );
            // Update Counters
            this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX] = this.updateItemConfigToApplyCounters();
            var itemConf = this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX];
            this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX].max = Math.max(
              itemConf.conf1,
              itemConf.conf2,
              itemConf.conf3
            );
            this.selectFilter();
          };
          /*************************************
           * Update for last configuration
           *************************************/
          ManageConfigurationFormComponent.prototype.updateTableForLastConfiguration = function(index, rowData) {
            var _this = this;
            var AVAILABLE = this.translateService.instant(this.getTranslateKey('available'));
            // History Data
            var itemData = this.itemConfigurationTableClone.filter(function(res) {
              return res.bireItemText === rowData.bireItemText;
            });
            if (!!itemData && itemData.length > 0) {
              var data = itemData[0];
              // Check the conf code
              var code_1 = index === 2 ? data.conf2 : data.conf3;
              if (!!code_1) {
                var evolutionData = this.evolutionLinkedToConfList.filter(function(res) {
                  return res.configuration === code_1;
                });
                if (!!evolutionData && evolutionData.length > 0) {
                  // Find list of evolution for that configuration
                  var evolutionList_2 = evolutionData[0].evolutionList.map(function(_a) {
                    var evolutionNumber = _a.evolutionNumber;
                    return evolutionNumber;
                  });
                  // Filter out the evolution of that item and remove it from selection
                  this.configurationEvolutionTable.filter(function(ev) {
                    if (ev.items === rowData.bireItemText && ev.category !== _this.categoryMandatory) {
                      if (index === 2 && ev.inConf2 && evolutionList_2.indexOf(ev.evolutionNumber) !== -1) {
                        ev.inConf2 = false;
                        ev.category = AVAILABLE;
                      }
                    }
                  });
                }
              }
              this.updateAppliedReportCounter();
            }
          };
          ManageConfigurationFormComponent.prototype.updateItemConfigToApplyCounters = function() {
            var row = {
              name: this.translateService.instant(this.getTranslateKey('itemConfToApply')),
              conf1: 0,
              conf2: 0,
              conf3: 0
            };
            this.itemConfigurationTable.forEach(function(res) {
              if (!!res.conf1) {
                row.conf1++;
              }
              if (!!res.conf2) {
                row.conf2++;
              }
              if (!!res.conf3) {
                row.conf3++;
              }
            });
            return row;
          };
          ManageConfigurationFormComponent.prototype.setValuesToConfigToApply = function(conf1, conf2, conf3) {
            var ITEM_CONFIG_TO_APPLY_INDEX = 4;
            if (!this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX].conf1) {
              this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX].conf1 = conf1;
            }
            if (!this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX].conf2) {
              this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX].conf2 = conf2;
            }
            if (!this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX].conf3) {
              this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX].conf3 = conf3;
            }
          };
          /***********************************************
           * Filter
           ***********************************************/
          ManageConfigurationFormComponent.prototype.selectFilter = function() {
            var _this = this;
            if (this.selectedConf === this.conf1) {
              this.configurationEvolutionTableOnLoad.forEach(function(obj) {
                obj.isDisabled = obj.isMandatory;
              });
            }
            switch (this.selectedFilter) {
              case '0': {
                this.configurationEvolutionTableOnLoad = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(
                  this.configurationEvolutionTable
                );
                break;
              }
              case '1': {
                this.configurationEvolutionTableOnLoad = this.configurationEvolutionTable.filter(function(res) {
                  if (_this.selectedConf === 'conf1') {
                    return res.inMinConf === true;
                  }
                  if (_this.selectedConf === 'conf2') {
                    return res.inConf2 === true;
                  }
                  if (_this.selectedConf === 'conf3') {
                    return res.inConf3 === true;
                  }
                });
                break;
              }
              case '2': {
                this.configurationEvolutionTableOnLoad = this.configurationEvolutionTable.filter(function(res) {
                  if (_this.selectedConf === 'conf1') {
                    return res.inMinConf === false;
                  }
                  if (_this.selectedConf === 'conf2') {
                    return res.inConf2 === false;
                  }
                  if (_this.selectedConf === 'conf3') {
                    return res.inConf3 === false;
                  }
                });
                break;
              }
              default:
                break;
            }
            this.configurationEvolutionTableOnLoad = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(
              this.configurationEvolutionTableOnLoad
            );
            this.renderEvolutionTable(false);
          };
          ManageConfigurationFormComponent.prototype.updateAppliedReportCounter = function() {
            var _this = this;
            // Resetting the counter
            this.setAppliedCounter(0, 0, 0, 0, 0, 0);
            // Updating applied counters
            var appliedInConf1 = 0;
            var appliedInConf2 = 0;
            var appliedInConf3 = 0;
            // Updating Incoming Counters
            var incomingConf1 = 0;
            var incomingConf2 = 0;
            var incomingConf3 = 0;
            this.configurationEvolutionTable.forEach(function(res) {
              if (res.inMinConf) {
                appliedInConf1++;
                if (res.category === _this.translateService.instant(_this.getTranslateKey('incomingLogbook'))) {
                  incomingConf1++;
                }
              }
              if (res.inConf2) {
                appliedInConf2++;
                if (res.category === _this.translateService.instant(_this.getTranslateKey('incomingLogbook'))) {
                  incomingConf2++;
                }
              }
              if (res.inConf3) {
                appliedInConf3++;
                if (res.category === _this.translateService.instant(_this.getTranslateKey('incomingLogbook'))) {
                  incomingConf3++;
                }
              }
            });
            this.setAppliedCounter(
              appliedInConf1,
              appliedInConf2,
              appliedInConf3,
              incomingConf1,
              incomingConf2,
              incomingConf3
            );
          };
          /**********************************************
           * Set APPLIED Counter
           **********************************************/
          ManageConfigurationFormComponent.prototype.setAppliedCounter = function(
            conf1,
            conf2,
            conf3,
            inconf1,
            inconf2,
            inconf3
          ) {
            var appliedIndex = 1;
            var incomingLogbookIndex = 3;
            // Resetting the counter
            this.configurationReportTable = this.configurationReportTable.map(function(obj, index) {
              var row = obj;
              if (index === appliedIndex) {
                obj.conf1 = conf1;
                obj.conf2 = conf2;
                obj.conf3 = conf3;
                if (obj.conf1 && obj.conf2 && obj.conf3) {
                  row.max = Math.max(obj.conf1, obj.conf2, obj.conf3);
                }
              }
              if (index === incomingLogbookIndex) {
                obj.conf1 = inconf1;
                obj.conf2 = inconf2;
                obj.conf3 = inconf3;
                if (obj.conf1 && obj.conf2 && obj.conf3) {
                  row.max = Math.max(obj.conf1, obj.conf2, obj.conf3);
                }
              }
              return row;
            });
          };
          ManageConfigurationFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-manage-configuration-form',
                template: __webpack_require__(
                  /*! ./manage-configuration-form.component.html */ './src/app/main/maintenance/cockpit-workscope/form/manage-configuration/manage-configuration-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../shared/shared.scss */ './src/app/main/maintenance/cockpit-workscope/form/shared/shared.scss'
                  ),
                  __webpack_require__(
                    /*! ./manage-configuration-form.component.scss */ './src/app/main/maintenance/cockpit-workscope/form/manage-configuration/manage-configuration-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__['TabService'],
                _cockpit_workscope_form_service__WEBPACK_IMPORTED_MODULE_13__['CockpitWorkscopeFormService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            ManageConfigurationFormComponent
          );
          return ManageConfigurationFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_12__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/manage-removal-causes/manage-removal-causes-form.component.html':
      /*!*************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/manage-removal-causes/manage-removal-causes-form.component.html ***!
  \*************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ projectNumber }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="save()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container grid-cell-scope  grid-cell-item-structure">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container  loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".availableCausesForRemoval" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #table\r\n                class="aw-table2"\r\n                [columns]="removalCausesTableCols"\r\n                [value]="removalCausesTable"\r\n                [(selection)]="selectedCauses"\r\n                [scrollable]="true"\r\n                scrollHeight="400px"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoadingImport"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoadingImport" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedCauses.length > 0 }">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableResultsGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="table.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ getComponentName() + "." + col.field | translate }}\r\n                    </th>\r\n                    <th class="aw-table-checkbox-wrapper"></th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <div *ngSwitchDefault>{{ rowData[col.field] }}</div>\r\n                    </td>\r\n\r\n                    <td class="aw-table-checkbox-wrapper">\r\n                      <span>\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="rowData.isReturnReasonSelected"\r\n                        ></p-checkbox>\r\n                      </span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/manage-removal-causes/manage-removal-causes-form.component.ts':
      /*!***********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/manage-removal-causes/manage-removal-causes-form.component.ts ***!
  \***********************************************************************************************************************/
      /*! exports provided: ManageRemovalCausesFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ManageRemovalCausesFormComponent',
          function() {
            return ManageRemovalCausesFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _cockpit_workscope_form_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../cockpit-workscope-form.service */ './src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.service.ts'
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

        var ManageRemovalCausesFormComponent = /** @class */ (function(_super) {
          __extends(ManageRemovalCausesFormComponent, _super);
          function ManageRemovalCausesFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            cockpitWorkscopeFormService,
            sessionService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.cockpitWorkscopeFormService = cockpitWorkscopeFormService;
            _this.sessionService = sessionService;
            _this.setTableColumns();
            return _this;
          }
          ManageRemovalCausesFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .MAI_MANAGE_REMOVAL_CAUSES_FORM;
          };
          ManageRemovalCausesFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.init();
            this.loadRemovalCauses();
          };
          /**********************************
           * INITIALIZATION
           **********************************/
          ManageRemovalCausesFormComponent.prototype.init = function() {
            var context = !!this.componentData.objectId
              ? this.serializationService.deserialize(this.componentData.objectId)
              : undefined;
            if (!!context) {
              this.displayComponentContext('N\u00B0' + context, this.isCreateOpenMode);
            }
            this.removalCausesTable = [];
            this.selectedCauses = [];
          };
          ManageRemovalCausesFormComponent.prototype.setTableColumns = function() {
            this.removalCausesTableCols = [
              { field: 'code', alignment: 'left', width: '25%' },
              { field: 'name', alignment: 'left', width: '25%' },
              { field: 'description', alignment: 'center', width: '25%' },
              { field: 'type', alignment: 'left', width: '25%' }
            ];
          };
          ManageRemovalCausesFormComponent.prototype.loadRemovalCauses = function() {
            var _this = this;
            this.projectNumber = parseInt(this.serializationService.deserialize(this.componentData.objectId), 10);
            if (!!this.projectNumber) {
              this.panelLoading = true;
              if (!!this.projectNumber) {
                this.tableLoading = true;
                this.cockpitWorkscopeFormService
                  .findBireReturnReasonsByItem(this.projectNumber)
                  .pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['finalize'])(function() {
                      _this.tableLoading = false;
                    })
                  )
                  .subscribe(function(result) {
                    _this.removalCausesTable = result.map(function(obj) {
                      return _this.transformToCustomTable(obj);
                    });
                    _this.tableLoading = false;
                  });
              }
            }
          };
          ManageRemovalCausesFormComponent.prototype.transformToCustomTable = function(row) {
            var rowObj = {
              _obj: row,
              code: row.bireReturnReasonDTO && row.bireReturnReasonDTO.returnReasonCode,
              description: row.bireReturnReasonDTO && row.bireReturnReasonDTO.returnReasonDescription,
              name: row.bireReturnReasonDTO && row.bireReturnReasonDTO.returnReasonName,
              type: row.causeTypeValue,
              isReturnReasonSelected: row.isReturnReasonSelected,
              isSelectionReadOnly: row.isSelectionReadOnly
            };
            return rowObj;
          };
          ManageRemovalCausesFormComponent.prototype.save = function() {
            var _this = this;
            // Building input - only keeping checked elements
            var returnReasonForProjectList = [];
            this.removalCausesTable.forEach(function(elmt) {
              if (elmt.isReturnReasonSelected && elmt._obj && elmt._obj.bireReturnReasonDTO) {
                returnReasonForProjectList.push(elmt._obj.bireReturnReasonDTO);
              }
            });
            var input = {
              projectNumber: this.projectNumber,
              returnReasonDataList: returnReasonForProjectList
            };
            this.showSaveSpinner = true;
            this.cockpitWorkscopeFormService
              .saveCauseRemovalList(input)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['finalize'])(function() {
                  _this.tableLoading = false;
                  _this.showSaveSpinner = false;
                })
              )
              .subscribe(
                function(result) {
                  // this.updateOpenMode(ComponentOpenMode.Read);
                  _this.messageService.showSuccessMessage('global.successOnSave');
                },
                function(error) {
                  var httpError = error;
                  if (!!httpError.error && !!httpError.error.errorDesc) {
                    _this.messageService.showErrorMessage(httpError.error.errorDesc);
                  }
                }
              );
          };
          ManageRemovalCausesFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-manage-removal-causes-form',
                template: __webpack_require__(
                  /*! ./manage-removal-causes-form.component.html */ './src/app/main/maintenance/cockpit-workscope/form/manage-removal-causes/manage-removal-causes-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../shared/shared.scss */ './src/app/main/maintenance/cockpit-workscope/form/shared/shared.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__['TabService'],
                _cockpit_workscope_form_service__WEBPACK_IMPORTED_MODULE_11__['CockpitWorkscopeFormService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__['SessionService']
              ])
            ],
            ManageRemovalCausesFormComponent
          );
          return ManageRemovalCausesFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_10__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/shared/shared.scss':
      /*!****************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/shared/shared.scss ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host #breadcrumbs-status {\n  overflow: hidden;\n  display: flex; }\n\n:host ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n:host .breadcrumbs {\n  display: flex;\n  flex-grow: 1; }\n\n:host .bread-crumb-custom-cell {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n  padding-bottom: 0 !important; }\n\n:host #breadcrumbs-status li {\n  float: left;\n  margin: 0 1em 0 1em; }\n\n:host #breadcrumbs-status .current {\n  float: left;\n  margin: 0 1em 0 1em; }\n\n:host #breadcrumbs-status .statusLabel {\n  background: #ffffff;\n  padding: 0.3em 1em;\n  float: left;\n  text-decoration: none;\n  color: #000;\n  position: relative;\n  white-space: nowrap;\n  min-height: 3em; }\n\n:host #breadcrumbs-status .current .statusLabel {\n  background: #01579b; }\n\n:host #breadcrumbs-status .statusLabel::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-width: 1.5em 0 1.5em 1em;\n  border-style: solid;\n  border-color: #ffffff #ffffff #ffffff transparent;\n  left: -1em; }\n\n:host #breadcrumbs-status .current .statusLabel::before {\n  border-color: #01579b #01579b #01579b transparent; }\n\n:host #breadcrumbs-status .statusLabel::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-top: 1.5em solid transparent;\n  border-bottom: 1.5em solid transparent;\n  border-left: 1em solid #ffffff;\n  right: -1em; }\n\n:host #breadcrumbs-status .current .statusLabel::after {\n  border-left-color: #01579b; }\n\n:host #breadcrumbs-status .current .statusLabel {\n  color: white;\n  font-weight: bold; }\n\n:host #breadcrumbs-status .current::after,\n:host #breadcrumbs-status .current::before {\n  content: normal; }\n\n:host .illustration {\n  text-align: center; }\n\n:host .img-class {\n  max-height: 7rem;\n  cursor: pointer; }\n\n:host .margin-class {\n  margin-top: 1em; }\n\n:host .breadcrumb-cursor {\n  cursor: pointer; }\n\n:host .disable-pointer {\n  cursor: none;\n  pointer-events: none; }\n\n:host .padding-class {\n  padding-left: 0.5em; }\n\n:host .custom-height {\n  height: 15em !important; }\n\n:host .custom-chart-height {\n  height: 9.6em !important; }\n\n:host .div-padding {\n  padding-top: 1em !important; }\n\n:host .custom-breadcrumb-padding {\n  padding: 0 !important; }\n\n:host .sibling-list {\n  float: right; }\n\n:host .subtitle {\n  max-width: 10em;\n  overflow: hidden;\n  word-wrap: break-word;\n  text-overflow: ellipsis; }\n\n:host .blue-cell {\n  background-color: #b8d0e8; }\n\n:host .anchor-class {\n  padding-left: 1em;\n  cursor: pointer; }\n\n:host .control-class {\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis; }\n\n::ng-deep .action-list {\n  justify-content: flex-end; }\n\n::ng-deep .action-list .aw-btn {\n    margin-left: 8px; }\n\n::ng-deep .action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb2NrcGl0LXdvcmtzY29wZS9mb3JtL3NoYXJlZC9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbWFpbnRlbmFuY2VcXGNvY2twaXQtd29ya3Njb3BlXFxmb3JtXFxzaGFyZWRcXHNoYXJlZC5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2NvY2twaXQtd29ya3Njb3BlL2Zvcm0vc2hhcmVkL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSSxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUhqQjtFQU9JLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBVHBCO0VBYUksYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFkaEI7RUFrQkksd0NBQXdDO0VBQ3hDLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IsNEJBQTRCLEVBQUE7O0FBckJoQztFQXlCSSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBMUJ2QjtFQThCSSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBL0J2QjtFQW1DSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsV0N4Q3FCO0VEeUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUExQ25CO0VBOENJLG1CQzdDa0IsRUFBQTs7QUREdEI7RUFrREksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsaURBQWlEO0VBQ2pELFVBQVUsRUFBQTs7QUF6RGQ7RUE2REksaURBQW1FLEVBQUE7O0FBN0R2RTtFQWlFSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsV0FBVyxFQUFBOztBQXhFZjtFQTRFSSwwQkMzRWtCLEVBQUE7O0FERHRCO0VBZ0ZJLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFqRnJCOztFQXNGSSxlQUFlLEVBQUE7O0FBdEZuQjtFQTBGSSxrQkFBa0IsRUFBQTs7QUExRnRCO0VBOEZJLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBL0ZuQjtFQW1HSSxlQUFlLEVBQUE7O0FBbkduQjtFQXVHSSxlQUFlLEVBQUE7O0FBdkduQjtFQTJHSSxZQUFZO0VBQ1osb0JBQW9CLEVBQUE7O0FBNUd4QjtFQWdISSxtQkFBbUIsRUFBQTs7QUFoSHZCO0VBb0hJLHVCQUF1QixFQUFBOztBQXBIM0I7RUF3SEksd0JBQXdCLEVBQUE7O0FBeEg1QjtFQTRISSwyQkFBMkIsRUFBQTs7QUE1SC9CO0VBZ0lJLHFCQUFxQixFQUFBOztBQWhJekI7RUFvSUksWUFBWSxFQUFBOztBQXBJaEI7RUF3SUksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsdUJBQXVCLEVBQUE7O0FBM0kzQjtFQStJSSx5QkN6SGlCLEVBQUE7O0FEdEJyQjtFQW1KSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQXBKbkI7RUF3SkksbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix1QkFBdUIsRUFBQTs7QUFJM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFEM0I7SUFJSSxnQkN6SGMsRUFBQTs7QURxSGxCO01BT00sY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb2NrcGl0LXdvcmtzY29wZS9mb3JtL3NoYXJlZC9zaGFyZWQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gICNicmVhZGNydW1icy1zdGF0dXMge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5icmVhZGNydW1icyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuXHJcbiAgLmJyZWFkLWNydW1iLWN1c3RvbS1jZWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyBsaSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCAxZW0gMCAxZW07XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5jdXJyZW50IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIDFlbSAwIDFlbTtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLnN0YXR1c0xhYmVsIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwLjNlbSAxZW07XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1pbi1oZWlnaHQ6IDNlbTtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQgLnN0YXR1c0xhYmVsIHtcclxuICAgIGJhY2tncm91bmQ6ICRhY2NlbnQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5zdGF0dXNMYWJlbDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xLjVlbTtcclxuICAgIGJvcmRlci13aWR0aDogMS41ZW0gMCAxLjVlbSAxZW07XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmICNmZmZmZmYgI2ZmZmZmZiB0cmFuc3BhcmVudDtcclxuICAgIGxlZnQ6IC0xZW07XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5jdXJyZW50IC5zdGF0dXNMYWJlbDo6YmVmb3JlIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvciAkYWNjZW50LWNvbG9yICRhY2NlbnQtY29sb3IgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5zdGF0dXNMYWJlbDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNWVtO1xyXG4gICAgYm9yZGVyLXRvcDogMS41ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxLjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxZW0gc29saWQgI2ZmZmZmZjtcclxuICAgIHJpZ2h0OiAtMWVtO1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyAuY3VycmVudCAuc3RhdHVzTGFiZWw6OmFmdGVyIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyAuY3VycmVudCAuc3RhdHVzTGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5jdXJyZW50OjphZnRlcixcclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5jdXJyZW50OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgLmlsbHVzdHJhdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaW1nLWNsYXNzIHtcclxuICAgIG1heC1oZWlnaHQ6IDdyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWFyZ2luLWNsYXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICB9XHJcblxyXG4gIC5icmVhZGNydW1iLWN1cnNvciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZGlzYWJsZS1wb2ludGVyIHtcclxuICAgIGN1cnNvcjogbm9uZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnBhZGRpbmctY2xhc3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20taGVpZ2h0IHtcclxuICAgIGhlaWdodDogMTVlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1jaGFydC1oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiA5LjZlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmRpdi1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctdG9wOiAxZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tYnJlYWRjcnVtYi1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zaWJsaW5nLWxpc3Qge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIG1heC13aWR0aDogMTBlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcblxyXG4gIC5ibHVlLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtbGlnaHQxO1xyXG4gIH1cclxuXHJcbiAgLmFuY2hvci1jbGFzcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250cm9sLWNsYXNzIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWN0aW9uLWxpc3Qge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gIC5hdy1idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/workscope-import-popup/workscope-import-popup.component.html':
      /*!**********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/workscope-import-popup/workscope-import-popup.component.html ***!
  \**********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="30">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group">\r\n      <label class="form-label"> {{ getComponentName() + ".fileToImport" | translate }}</label>\r\n\r\n      <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n        <div class="form-control-data control-class" title="{{ fileName }}">\r\n          {{ fileName }}\r\n        </div>\r\n\r\n        <div class="btn-file-upload-wrapper">\r\n          <p-fileUpload\r\n            #fileUploader\r\n            *ngIf="!isReadOpenMode"\r\n            class="aw-fileupload"\r\n            name="document[]"\r\n            customUpload="true"\r\n            mode="basic"\r\n            auto="true"\r\n            chooseLabel=""\r\n            (uploadHandler)="uploadDocument($event, fileUploader)"\r\n          >\r\n          </p-fileUpload>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="form-group">\r\n      <a class="anchor-class" (click)="openTemplate()">{{ getComponentName() + ".templateFile" | translate }}</a>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="import()" [disabled]="!fileName">\r\n      {{ "global.import" | translate }}\r\n    </button>\r\n    <button type="button" mat-raised-button (click)="close()">{{ "global.close" | translate }}</button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/workscope-import-popup/workscope-import-popup.component.ts':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/workscope-import-popup/workscope-import-popup.component.ts ***!
  \********************************************************************************************************************/
      /*! exports provided: WorkscopeImportPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'WorkscopeImportPopupComponent',
          function() {
            return WorkscopeImportPopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _cockpit_workscope_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../cockpit-workscope-form.service */ './src/app/main/maintenance/cockpit-workscope/form/cockpit-workscope-form.service.ts'
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

        var WorkscopeImportPopupComponent = /** @class */ (function(_super) {
          __extends(WorkscopeImportPopupComponent, _super);
          function WorkscopeImportPopupComponent(messageService, translateService, cockpitWorkscopeFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'WorkscopeImportPopupComponent'
              ) || this;
            _this.messageService = messageService;
            _this.translateService = translateService;
            _this.cockpitWorkscopeFormService = cockpitWorkscopeFormService;
            _this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.templateName = _this.translateService.instant(_this.getTranslateKey('templateFile'));
            return _this;
          }
          WorkscopeImportPopupComponent.prototype.ngOnInit = function() {
            // todo
          };
          WorkscopeImportPopupComponent.prototype.openTemplate = function() {
            var _this = this;
            this.cockpitWorkscopeFormService.downloadTemplate().subscribe(function(result) {
              _this.downLoadFiles(result, _this.templateName);
            });
          };
          WorkscopeImportPopupComponent.prototype.downLoadFiles = function(docFile, docName) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_5__['FileUtils'].downloadFile(docFile, docName);
          };
          WorkscopeImportPopupComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            if (event.files) {
              var file_1 = event.files[0];
              {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_5__['FileUtils'].getFileContentAsBase64(
                  file_1,
                  function(fileContent) {
                    _this.file = {
                      docFile: fileContent,
                      docName: file_1.name,
                      docPublicationDate: new Date()
                    };
                    if (!!_this.file.docName) {
                      _this.fileName = _this.file.docName;
                    }
                  }
                );
              }
              fileUploader.clear();
            }
          };
          WorkscopeImportPopupComponent.prototype.import = function() {
            // TODO : Add import functionality
            this.messageService.showSuccessMessage(this.getTranslateKey('succesMessage'));
            this.close();
          };
          WorkscopeImportPopupComponent.prototype.close = function() {
            this.display = false;
            this.refresh.emit();
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            WorkscopeImportPopupComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            WorkscopeImportPopupComponent.prototype,
            'refresh',
            void 0
          );
          WorkscopeImportPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-workscope-import-popup',
                template: __webpack_require__(
                  /*! ./workscope-import-popup.component.html */ './src/app/main/maintenance/cockpit-workscope/form/workscope-import-popup/workscope-import-popup.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../shared/shared.scss */ './src/app/main/maintenance/cockpit-workscope/form/shared/shared.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__['MessageService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _cockpit_workscope_form_service__WEBPACK_IMPORTED_MODULE_6__['CockpitWorkscopeFormService']
              ])
            ],
            WorkscopeImportPopupComponent
          );
          return WorkscopeImportPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/workscope-table-filters/workscope-table-filters.component.html':
      /*!************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/workscope-table-filters/workscope-table-filters.component.html ***!
  \************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-content">\r\n  <div class="grid-row">\r\n    <div class="grid-cell grid-cell--container">\r\n      <div class="grid-cell-content">\r\n        <div class="column">\r\n          <div class="row">\r\n            <div class="form-group flex--auto">\r\n              <label class="form-label"> &nbsp; </label>\r\n\r\n              <div class="form-control aw-selectbutton-wrapper">\r\n                <p-selectButton\r\n                  [options]="serializeList"\r\n                  [multiple]="true"\r\n                  [(ngModel)]="selectedSerialize"\r\n                  (onChange)="onChangeSerializeFilter()"\r\n                ></p-selectButton>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group flex--auto">\r\n              <label class="form-label"> &nbsp; </label>\r\n\r\n              <div class="form-control aw-selectbutton-wrapper">\r\n                <p-selectButton\r\n                  [options]="workscopeList"\r\n                  [multiple]="true"\r\n                  [(ngModel)]="selectedWorkscope"\r\n                  (onChange)="onChangeWorkscopeFilter()"\r\n                ></p-selectButton>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row">\r\n            <div class="form-group flex--auto">\r\n              <label class="form-label"> {{ getComponentName() + ".family" | translate }} </label>\r\n\r\n              <div class="form-control">\r\n                <p-autoComplete\r\n                  class="aw-dropdown fixed-width"\r\n                  [(ngModel)]="searchCriteria.family"\r\n                  [suggestions]="listInterface.familyList"\r\n                  [immutable]="true"\r\n                  [dropdown]="true"\r\n                  [forceSelection]="true"\r\n                  (completeMethod)="searchFamilyList($event)"\r\n                  (onSelect)="loadItemList()"\r\n                  (onClear)="resetItemList(true)"\r\n                ></p-autoComplete>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group flex--auto">\r\n              <label class="form-label"> {{ getComponentName() + ".item" | translate }} </label>\r\n\r\n              <div class="form-control">\r\n                <p-autoComplete\r\n                  class="aw-dropdown fixed-width"\r\n                  [(ngModel)]="selectedItem"\r\n                  [suggestions]="listInterface.itemList"\r\n                  field="label"\r\n                  [immutable]="true"\r\n                  [dropdown]="true"\r\n                  (completeMethod)="searchItemList($event)"\r\n                  (onClear)="resetItemList(false)"\r\n                ></p-autoComplete>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row">\r\n            <div class="form-group">\r\n              <label class="form-label"> {{ getComponentName() + ".pn" | translate }} </label>\r\n\r\n              <div class="form-control">\r\n                <p-autoComplete\r\n                  class="aw-dropdown fixed-width"\r\n                  [(ngModel)]="searchCriteria.pn"\r\n                  [suggestions]="listInterface.pnList"\r\n                  [immutable]="true"\r\n                  [dropdown]="true"\r\n                  (completeMethod)="searchPNList($event)"\r\n                ></p-autoComplete>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group">\r\n              <label class="form-label"> {{ getComponentName() + ".sn" | translate }} </label>\r\n\r\n              <div class="form-control">\r\n                <input type="text" class="aw-input" [(ngModel)]="searchCriteria.sn" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row">\r\n            <div class="form-group">\r\n              <label class="form-label"> {{ getComponentName() + ".designation" | translate }} </label>\r\n\r\n              <div class="form-control">\r\n                <input type="text" class="aw-input" [(ngModel)]="searchCriteria.designation" />\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group">\r\n              <label class="form-label"> {{ getComponentName() + ".functionCode" | translate }} </label>\r\n\r\n              <div class="form-control">\r\n                <p-autoComplete\r\n                  class="aw-dropdown fixed-width"\r\n                  [(ngModel)]="searchCriteria.functionCode"\r\n                  [suggestions]="listInterface.functionCodeList"\r\n                  [immutable]="true"\r\n                  [dropdown]="true"\r\n                  (completeMethod)="searchFunctionCodeList($event)"\r\n                ></p-autoComplete>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row">\r\n            <div class="form-group">\r\n              <label class="form-label"> {{ getComponentName() + ".impacts" | translate }} </label>\r\n\r\n              <div class="form-control">\r\n                <p-autoComplete\r\n                  class="aw-dropdown fixed-width"\r\n                  [(ngModel)]="searchCriteria.impact"\r\n                  [suggestions]="listInterface.impactList"\r\n                  [immutable]="true"\r\n                  [dropdown]="true"\r\n                  (completeMethod)="searchImpactList($event)"\r\n                ></p-autoComplete>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group">\r\n              <label class="form-label"> {{ getComponentName() + ".wo" | translate }} </label>\r\n\r\n              <div class="form-control">\r\n                <p-autoComplete\r\n                  class="aw-dropdown fixed-width"\r\n                  [(ngModel)]="searchCriteria.woCode"\r\n                  [suggestions]="listInterface.woList"\r\n                  [immutable]="true"\r\n                  [dropdown]="true"\r\n                  (completeMethod)="searchWoList($event)"\r\n                ></p-autoComplete>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row action-list">\r\n            <button type="button" mat-raised-button (click)="reset()">\r\n              {{ "global.reset" | translate }}\r\n            </button>\r\n\r\n            <button type="button" mat-raised-button (click)="filter()">\r\n              {{ "global.filter" | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-workscope/form/workscope-table-filters/workscope-table-filters.component.ts':
      /*!**********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-workscope/form/workscope-table-filters/workscope-table-filters.component.ts ***!
  \**********************************************************************************************************************/
      /*! exports provided: WorkscopeTableFilterComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'WorkscopeTableFilterComponent',
          function() {
            return WorkscopeTableFilterComponent;
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
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
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

        var WorkscopeTableFilterComponent = /** @class */ (function(_super) {
          __extends(WorkscopeTableFilterComponent, _super);
          function WorkscopeTableFilterComponent(sessionService, translateService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write
              ) || this;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.updateCounter = 0;
            _this.init();
            return _this;
          }
          WorkscopeTableFilterComponent_1 = WorkscopeTableFilterComponent;
          Object.defineProperty(WorkscopeTableFilterComponent.prototype, 'setSearchCriteria', {
            set: function(data) {
              if (!!data) {
                this.searchCriteria = data;
                if (!!this.searchCriteria.selectedSerialize) {
                  this.selectedSerialize = this.searchCriteria.selectedSerialize;
                }
                if (!!this.searchCriteria.selectedWorkscope) {
                  this.selectedWorkscope = this.searchCriteria.selectedWorkscope;
                }
                if (!!this.searchCriteria.family) {
                  this.listInterface.itemList = [];
                  this.loadItemList();
                }
                if (!!this.searchCriteria.item) {
                  this.selectedItem = { label: this.searchCriteria.item, value: this.searchCriteria.item };
                }
              }
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(WorkscopeTableFilterComponent.prototype, 'setTreeData', {
            set: function(data) {
              if (!!data && this.updateCounter === 0) {
                this.buildTree(data);
                if (!!this.searchCriteria.family) {
                  this.loadItemList();
                } else {
                  this.listInterface.itemList = __spread(this.itemListClone);
                }
                this.cloneListInterface = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(
                  this.listInterface
                );
              }
            },
            enumerable: true,
            configurable: true
          });
          WorkscopeTableFilterComponent.prototype.getComponentName = function() {
            return 'WorkscopeTableFilterComponent';
          };
          WorkscopeTableFilterComponent.prototype.filter = function() {
            if (!!this.selectedItem) {
              // Avoiding setting of undefined in item
              this.searchCriteria.item = this.selectedItem.label;
            }
            this.onFilter.emit();
          };
          WorkscopeTableFilterComponent.prototype.reset = function() {
            this.selectedItem = undefined;
            this.listInterface.itemList = __spread(this.cloneListInterface.itemList);
            this.searchCriteria = {};
            this.selectedSerialize = [
              WorkscopeTableFilterComponent_1.SERIALIZE,
              WorkscopeTableFilterComponent_1.NOT_SERIALIZE
            ];
            this.selectedWorkscope = [
              WorkscopeTableFilterComponent_1.WORKSCOPE,
              WorkscopeTableFilterComponent_1.NOT_WORKSCOPE
            ];
            this.onReset.emit();
          };
          WorkscopeTableFilterComponent.prototype.init = function() {
            this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.initDropdown();
          };
          /*********************************************
           * INITILIZE DROPDOWNS
           ********************************************/
          WorkscopeTableFilterComponent.prototype.initDropdown = function() {
            this.itemFamilyList = [];
            this.itemListClone = [];
            this.serializeList = [
              { label: this.translateService.instant(this.getTranslateKey('serialized')), value: 0 },
              { label: this.translateService.instant(this.getTranslateKey('notSerialized')), value: 1 }
            ];
            this.workscopeList = [
              { label: this.translateService.instant(this.getTranslateKey('workscope')), value: 0 },
              { label: this.translateService.instant(this.getTranslateKey('notWorkscope')), value: 1 }
            ];
            this.listInterface = {
              familyList: [],
              functionCodeList: [],
              impactList: [],
              pnList: [],
              woList: []
            };
            if (!this.searchCriteria) {
              this.searchCriteria = {};
            }
            this.selectedSerialize = [
              WorkscopeTableFilterComponent_1.SERIALIZE,
              WorkscopeTableFilterComponent_1.NOT_SERIALIZE
            ];
            this.selectedWorkscope = [
              WorkscopeTableFilterComponent_1.WORKSCOPE,
              WorkscopeTableFilterComponent_1.NOT_WORKSCOPE
            ];
          };
          /**************************************************
           * SET DATA FOR DROPDOWN
           *************************************************/
          WorkscopeTableFilterComponent.prototype.buildTree = function(data) {
            var _this = this;
            var toReturn = [];
            data.forEach(function(elt) {
              var eleClone = elt.data;
              if (!!eleClone) {
                if (!!eleClone.item && !!eleClone.itemFamilyCode) {
                  _this.itemFamilyList.push({
                    label: eleClone.item,
                    value: eleClone.itemFamilyCode
                  });
                }
                _this.setDropdowns(eleClone);
              }
              toReturn.push({
                data: eleClone,
                children: _this.buildTree(elt.children || []),
                bireItemDTO: elt.bireItemDTO
              });
            });
            return toReturn;
          };
          WorkscopeTableFilterComponent.prototype.setDropdowns = function(eleClone) {
            var _this = this;
            if (!!this.listInterface) {
              if (!!eleClone.item) {
                var isPresent = this.itemListClone.filter(function(res) {
                  return res.value === eleClone.item;
                });
                if (isPresent.length === 0) {
                  this.itemListClone.push({
                    label: eleClone.item,
                    value: eleClone.item
                  });
                }
              }
              if (!!eleClone.itemFamilyCode) {
                var isPresent = this.listInterface.familyList.filter(function(res) {
                  return res === eleClone.itemFamilyCode;
                });
                if (isPresent.length === 0) {
                  this.listInterface.familyList.push(eleClone.itemFamilyCode);
                }
              }
              if (!!eleClone.impact) {
                var isPresent = this.listInterface.impactList.filter(function(res) {
                  return res === eleClone.impact;
                });
                if (isPresent.length === 0) {
                  this.listInterface.impactList.push(eleClone.impact);
                }
              }
              if (!!eleClone.functionCode) {
                var isPresent = this.listInterface.functionCodeList.filter(function(res) {
                  return res === eleClone.functionCode;
                });
                if (isPresent.length === 0) {
                  this.listInterface.functionCodeList.push(eleClone.functionCode);
                }
              }
              if (!!eleClone.inventoriesList && eleClone.inventoriesList.length > 0) {
                eleClone.inventoriesList.forEach(function(inventory) {
                  if (!!inventory.pn) {
                    var isPNPresent = _this.listInterface.pnList.filter(function(res) {
                      return res === inventory.pn;
                    });
                    if (isPNPresent.length === 0) {
                      _this.listInterface.pnList.push(inventory.pn);
                    }
                  }
                  if (!!inventory.workScopingOrder) {
                    var isWOPresent = _this.listInterface.woList.filter(function(res) {
                      return res === inventory.workScopingOrder;
                    });
                    if (isWOPresent.length === 0) {
                      _this.listInterface.woList.push(inventory.workScopingOrder);
                    }
                  }
                });
              }
            }
            this.updateCounter += 1;
          };
          /*****************************************************
           * FILTER ITEM LIST ON BASIS OF FAMILY
           *****************************************************/
          WorkscopeTableFilterComponent.prototype.loadItemList = function() {
            var _this = this;
            var dtoList = this.itemFamilyList.filter(function(res) {
              return !!_this.searchCriteria.family && res.value === _this.searchCriteria.family;
            });
            if (!!dtoList && dtoList.length > 0) {
              this.listInterface.itemList = __spread(dtoList);
            } else {
              this.listInterface.itemList = [];
            }
          };
          /********************************************
           * Filter List
           *******************************************/
          WorkscopeTableFilterComponent.prototype.searchFamilyList = function(ev) {
            var dataArr = [];
            if (!!ev && !!ev.query && !!this.cloneListInterface && !!this.cloneListInterface.familyList) {
              dataArr = this.cloneListInterface.familyList.filter(function(family) {
                return family.toLowerCase().startsWith(ev.query.toLowerCase());
              });
            } else {
              dataArr = this.cloneListInterface.familyList || [];
            }
            this.listInterface.familyList = __spread(dataArr);
          };
          WorkscopeTableFilterComponent.prototype.resetItemList = function(resetFamily) {
            if (resetFamily) {
              this.searchCriteria.family = undefined;
            }
            this.searchCriteria.item = undefined;
            if (!!this.searchCriteria.family) {
              this.loadItemList();
            } else {
              this.listInterface.itemList = __spread(this.itemListClone);
            }
          };
          WorkscopeTableFilterComponent.prototype.searchPNList = function(ev) {
            var dataArr = [];
            if (!!ev && !!ev.query && !!this.cloneListInterface && !!this.cloneListInterface.pnList) {
              dataArr = this.cloneListInterface.pnList.filter(function(pn) {
                return pn.toLowerCase().startsWith(ev.query.toLowerCase());
              });
            } else {
              dataArr = this.cloneListInterface.pnList || [];
            }
            this.listInterface.pnList = __spread(dataArr);
          };
          /**********************************************
           * Filter Item List
           *********************************************/
          WorkscopeTableFilterComponent.prototype.searchItemList = function(ev) {
            var list = this.getItemListForFamily();
            if (!!ev && !!ev.query && !!list) {
              this.listInterface.itemList = list.filter(function(res) {
                return res.label.toLowerCase().startsWith(ev.query.toLowerCase());
              });
            } else {
              this.listInterface.itemList = __spread(this.listInterface.itemList);
            }
          };
          WorkscopeTableFilterComponent.prototype.getItemListForFamily = function() {
            var _this = this;
            var list = this.cloneListInterface.itemList || [];
            if (!!this.searchCriteria.family) {
              list = this.itemFamilyList.filter(function(res) {
                return !!_this.searchCriteria.family && res.value === _this.searchCriteria.family;
              });
            }
            return list;
          };
          WorkscopeTableFilterComponent.prototype.searchFunctionCodeList = function(ev) {
            var dataArr = [];
            if (!!ev && !!ev.query && !!this.cloneListInterface && !!this.cloneListInterface.functionCodeList) {
              dataArr = this.cloneListInterface.functionCodeList.filter(function(code) {
                return code.toLowerCase().startsWith(ev.query.toLowerCase());
              });
            } else {
              dataArr = this.cloneListInterface.functionCodeList || [];
            }
            this.listInterface.functionCodeList = __spread(dataArr);
          };
          WorkscopeTableFilterComponent.prototype.searchImpactList = function(ev) {
            var dataArr = [];
            if (!!ev && !!ev.query && !!this.cloneListInterface && !!this.cloneListInterface.impactList) {
              dataArr = this.cloneListInterface.impactList.filter(function(impact) {
                return impact.toLowerCase().startsWith(ev.query.toLowerCase());
              });
            } else {
              dataArr = this.cloneListInterface.impactList || [];
            }
            this.listInterface.impactList = __spread(dataArr);
          };
          WorkscopeTableFilterComponent.prototype.searchWoList = function(ev) {
            var dataArr = [];
            if (!!ev && !!ev.query && !!this.cloneListInterface && !!this.cloneListInterface.woList) {
              dataArr = this.cloneListInterface.woList.filter(function(wo) {
                return wo.toLowerCase().startsWith(ev.query.toLowerCase());
              });
            } else {
              dataArr = this.cloneListInterface.woList || [];
            }
            this.listInterface.woList = __spread(dataArr);
          };
          /******************************************
           * MULTI SELECT FILTER HANDLING
           *****************************************/
          WorkscopeTableFilterComponent.prototype.onChangeSerializeFilter = function() {
            this.searchCriteria.selectedSerialize = this.selectedSerialize;
          };
          WorkscopeTableFilterComponent.prototype.onChangeWorkscopeFilter = function() {
            this.searchCriteria.selectedWorkscope = this.selectedWorkscope;
          };
          var WorkscopeTableFilterComponent_1;
          WorkscopeTableFilterComponent.SERIALIZE = 0;
          WorkscopeTableFilterComponent.NOT_SERIALIZE = 1;
          WorkscopeTableFilterComponent.WORKSCOPE = 0;
          WorkscopeTableFilterComponent.NOT_WORKSCOPE = 1;
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('searchCriteria'),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            WorkscopeTableFilterComponent.prototype,
            'setSearchCriteria',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('workscopeTreeData'),
              __metadata('design:type', Array),
              __metadata('design:paramtypes', [Array])
            ],
            WorkscopeTableFilterComponent.prototype,
            'setTreeData',
            null
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Map)],
            WorkscopeTableFilterComponent.prototype,
            'familyCodeMap',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            WorkscopeTableFilterComponent.prototype,
            'onFilter',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            WorkscopeTableFilterComponent.prototype,
            'onReset',
            void 0
          );
          WorkscopeTableFilterComponent = WorkscopeTableFilterComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-workscope-table-filters',
                template: __webpack_require__(
                  /*! ./workscope-table-filters.component.html */ './src/app/main/maintenance/cockpit-workscope/form/workscope-table-filters/workscope-table-filters.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../shared/shared.scss */ './src/app/main/maintenance/cockpit-workscope/form/shared/shared.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            WorkscopeTableFilterComponent
          );
          return WorkscopeTableFilterComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_5__['GenericComponent']);

        /***/
      },

    /***/ './src/app/shared/api/workscope-component.api.ts':
      /*!*******************************************************!*\
  !*** ./src/app/shared/api/workscope-component.api.ts ***!
  \*******************************************************/
      /*! exports provided: WorkscopeComponentApi */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'WorkscopeComponentApi', function() {
          return WorkscopeComponentApi;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _abstract_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./abstract.api */ './src/app/shared/api/abstract.api.ts'
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

        var WorkscopeComponentApi = /** @class */ (function(_super) {
          __extends(WorkscopeComponentApi, _super);
          function WorkscopeComponentApi() {
            var _this = _super.call(this, WorkscopeComponentApi_1.baseUrl) || this;
            _this.getWorkscope = _super.prototype.appendToBaseUrl.call(_this, '/get_workscope');
            _this.getLoadWorkscope = _super.prototype.appendToBaseUrl.call(_this, '/get_load_workscope');
            _this.getWorkscopeTargetNumberAndVariantName = _super.prototype.appendToBaseUrl.call(
              _this,
              '/get_workscope_target_number_and_variant_name'
            );
            _this.loadWorkscopeTemplate = _super.prototype.appendToBaseUrl.call(_this, '/load_workscope_template');
            _this.saveWorkscope = _super.prototype.appendToBaseUrl.call(_this, '/save_workscope');
            _this.saveCauseRemoval = _super.prototype.appendToBaseUrl.call(_this, '/save_cause_removal');
            return _this;
          }
          WorkscopeComponentApi_1 = WorkscopeComponentApi;
          var WorkscopeComponentApi_1;
          WorkscopeComponentApi.baseUrl = '/workscope_component';
          WorkscopeComponentApi = WorkscopeComponentApi_1 = __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(), __metadata('design:paramtypes', [])],
            WorkscopeComponentApi
          );
          return WorkscopeComponentApi;
        })(_abstract_api__WEBPACK_IMPORTED_MODULE_1__['AbstractApi']);

        /***/
      },

    /***/ './src/app/shared/utils/bido-family-variant-utils.ts':
      /*!***********************************************************!*\
  !*** ./src/app/shared/utils/bido-family-variant-utils.ts ***!
  \***********************************************************/
      /*! exports provided: BidoFamilyVariantUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BidoFamilyVariantUtils', function() {
          return BidoFamilyVariantUtils;
        });
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );

        var BidoFamilyVariantUtils = /** @class */ (function() {
          function BidoFamilyVariantUtils() {}
          BidoFamilyVariantUtils.buildFamilyVariantCode = function(familyCode, variantCode) {
            if (
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(familyCode) ||
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(variantCode)
            ) {
              return undefined;
            } else {
              return familyCode + '-' + variantCode;
            }
          };
          BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode = function(familyVariantCode) {
            return !!familyVariantCode && familyVariantCode.indexOf('-') > -1
              ? familyVariantCode.substring(0, familyVariantCode.indexOf('-'))
              : undefined;
          };
          BidoFamilyVariantUtils.getVariantCodeFromFamilyVariantCode = function(familyVariantCode) {
            return !!familyVariantCode && familyVariantCode.indexOf('-') > -1
              ? familyVariantCode.substring(familyVariantCode.indexOf('-') + 1)
              : undefined;
          };
          return BidoFamilyVariantUtils;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=maintenance-cockpit-workscope-cockpit-workscope-module.js.map
