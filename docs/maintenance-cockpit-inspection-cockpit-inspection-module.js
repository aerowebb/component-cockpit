(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['maintenance-cockpit-inspection-cockpit-inspection-module'],
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

    /***/ './src/app/main/maintenance/cockpit-inspection/cockpit-inspection.module.ts':
      /*!**********************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/cockpit-inspection.module.ts ***!
  \**********************************************************************************/
      /*! exports provided: CockpitInspectionModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'CockpitInspectionModule',
          function() {
            return CockpitInspectionModule;
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
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/chart */ './node_modules/primeng/chart.js'
        );
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/inputtextarea */ './node_modules/primeng/inputtextarea.js'
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/progressbar */ './node_modules/primeng/progressbar.js'
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! primeng/treetable */ './node_modules/primeng/treetable.js'
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_treetable__WEBPACK_IMPORTED_MODULE_10__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_add_edit_inventory_add_edit_inventory_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/add-edit-inventory/add-edit-inventory.module */ './src/app/shared/components/add-edit-inventory/add-edit-inventory.module.ts'
        );
        /* harmony import */ var _shared_components_component_measure_component_measure_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/component-measure/component-measure.module */ './src/app/shared/components/component-measure/component-measure.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_cockpit_inspection_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./form/cockpit-inspection-form.component */ './src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.component.ts'
        );
        /* harmony import */ var _form_cockpit_inspection_form_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./form/cockpit-inspection-form.service */ './src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.service.ts'
        );
        /* harmony import */ var _form_info_sub_assembly_info_sub_assembly_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./form/info-sub-assembly/info-sub-assembly.component */ './src/app/main/maintenance/cockpit-inspection/form/info-sub-assembly/info-sub-assembly.component.ts'
        );
        /* harmony import */ var _form_sub_assembly_table_filters_sub_assembly_table_filters_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./form/sub-assembly-table-filters/sub-assembly-table-filters.component */ './src/app/main/maintenance/cockpit-inspection/form/sub-assembly-table-filters/sub-assembly-table-filters.component.ts'
        );
        /* harmony import */ var _form_technical_quotation_table_filters_technical_quotation_table_filters_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./form/technical-quotation-table-filters/technical-quotation-table-filters.component */ './src/app/main/maintenance/cockpit-inspection/form/technical-quotation-table-filters/technical-quotation-table-filters.component.ts'
        );
        /* harmony import */ var _form_tree_sub_assembly_tree_sub_assembly_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./form/tree-sub-assembly/tree-sub-assembly.component */ './src/app/main/maintenance/cockpit-inspection/form/tree-sub-assembly/tree-sub-assembly.component.ts'
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
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__['ChartModule'],
          _shared_components_component_measure_component_measure_module__WEBPACK_IMPORTED_MODULE_15__[
            'ComponentMeasureModule'
          ],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__['DropdownModule'],
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__['InputTextareaModule'],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__['ModalModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__['OverlayPanelModule'],
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__['ProgressBarModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__['SelectButtonModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_8__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__['TooltipModule'],
          primeng_treetable__WEBPACK_IMPORTED_MODULE_10__['TreeTableModule'],
          _shared_components_add_edit_inventory_add_edit_inventory_module__WEBPACK_IMPORTED_MODULE_14__[
            'AddEditInventoryModule'
          ]
        ];
        var INTERNAL_MODULES = [];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [];
        var DYNAMIC_COMPONENTS = [
          _form_cockpit_inspection_form_component__WEBPACK_IMPORTED_MODULE_18__['CockpitInspectionFormComponent'],
          _form_info_sub_assembly_info_sub_assembly_component__WEBPACK_IMPORTED_MODULE_20__['InfoSubAssemblyComponent'],
          _form_sub_assembly_table_filters_sub_assembly_table_filters_component__WEBPACK_IMPORTED_MODULE_21__[
            'SubAssemblyTableFiltersComponent'
          ],
          _form_technical_quotation_table_filters_technical_quotation_table_filters_component__WEBPACK_IMPORTED_MODULE_22__[
            'TechnicalQuotationTableFiltersComponent'
          ],
          _form_tree_sub_assembly_tree_sub_assembly_component__WEBPACK_IMPORTED_MODULE_23__['TreeSubAssemblyComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _form_cockpit_inspection_form_service__WEBPACK_IMPORTED_MODULE_19__['CockpitInspectionFormService']
        ];
        /******************************************************************************
         * Api's
         *************************************************************************** */
        var CockpitInspectionModule = /** @class */ (function() {
          function CockpitInspectionModule() {}
          CockpitInspectionModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_17__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            CockpitInspectionModule
          );
          return CockpitInspectionModule;
        })();

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.component.html':
      /*!*************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.component.html ***!
  \*************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ bsdeProjectDTO.projectNumber }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button type="button" *ngIf="isReadOpenMode" mat-menu-item (click)="refresh()">\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper" *ngIf="!showInfoSubAssembly">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <!-- COMPONENT COCKPIT PANEL -->\r\n        <div class="grid-cell--8">\r\n          <div class="grid-cell grid-cell--container grid-cell-scope">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container  loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".componentCockpit" | translate }}\r\n                  <div *ngIf="panelLoading" class="lds-hourglass"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".familyVariant" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        placeholder="&nbsp;"\r\n                        [showClear]="true"\r\n                        [disabled]="true"\r\n                        [options]="familyVariants"\r\n                        [(ngModel)]="bidoEquipmentDTO.familyVariantCode"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".pn" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <div class="form-control-generic">\r\n                        <span class="custom-span cursor-class" (click)="openPartNumberLink()">\r\n                          {{ bsdeProjectDTO.projectPn }}\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".sn" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <div class="form-control-generic" (click)="openSNLink()">\r\n                        <span class="custom-span cursor-class"> {{ bsdeProjectDTO.projectSn }} </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".designation" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <div class="form-control-generic">\r\n                        <span> {{ bidoEquipmentDTO.equipmentDesignation }} </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".mroCenter" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [disabled]="true" [(ngModel)]="mroCenter" />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".customer" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [disabled]="true" [(ngModel)]="bsdeProjectDTO.customerCode" />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".startDate" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="bsdeProjectDTO.projectStartDate"\r\n                        [disabled]="true"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".endDate" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="bsdeProjectDTO.projectEndDate"\r\n                        [disabled]="true"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- PROGRESS PANEL -->\r\n        <div class="grid-cell--4">\r\n          <div class="grid-cell grid-cell--container grid-cell-scope">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container  loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".progress" | translate }}\r\n                  <div *ngIf="chartContentReady" class="lds-hourglass"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="chart-container" *ngIf="treeContentReady">\r\n                  <div class="chart-wrapper">\r\n                    <p-chart\r\n                      [type]="chartType"\r\n                      [data]="chartData"\r\n                      [options]="chartOptions"\r\n                      width="100%"\r\n                      height="100%"\r\n                    ></p-chart>\r\n                  </div>\r\n\r\n                  <div class="chart-legend">\r\n                    <div class="chart-legend-label">\r\n                      <div class="chart-legend-label-color completed"></div>\r\n                      {{ chartData.labels[0] }}\r\n                      <span class="chart-value">{{ completedNb }} </span>\r\n                    </div>\r\n\r\n                    <div class="chart-legend-label">\r\n                      <div class="chart-legend-label-color not-completed"></div>\r\n                      {{ chartData.labels[1] }}\r\n                      <span class="chart-value">{{ notCompletedNb }} </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- TREE TABLE ITEM STRUCTURE-->\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container grid-cell-scope  grid-cell-item-structure">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container  loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".subAssemblies" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div *ngIf="treeContentReady">\r\n                <aw-tree-sub-assembly\r\n                  [bsdeProjectDTO]="bsdeProjectDTO"\r\n                  (openImageEmitter)="openImage($event)"\r\n                  (openSubAssemblyEmitter)="openSubAssembly($event)"\r\n                  (renderProgress)="renderProgress($event)"\r\n                  (bireItemDTOEmitter)="getBireItem($event)"\r\n                ></aw-tree-sub-assembly>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- IMAGE DIALOG -->\r\n  <a-modal class="aw-modal" *ngIf="openImageDialog" [(visible)]="openImageDialog">\r\n    <a-header>\r\n      <div class="modal-title">{{ getComponentName() + ".dialogTitle" | translate }}</div>\r\n    </a-header>\r\n\r\n    <a-content>\r\n      <div>\r\n        <img class="expanded-img-class" [src]="dialogImgSrc" />\r\n      </div>\r\n    </a-content>\r\n\r\n    <a-footer>\r\n      <button type="button" mat-raised-button (click)="closeDialog()">\r\n        <span>{{ "global.close" | translate }}</span>\r\n      </button>\r\n    </a-footer>\r\n  </a-modal>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.component.scss':
      /*!*************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.component.scss ***!
  \*************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .chart-container {\n  display: flex;\n  flex-direction: row;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: auto;\n  margin-left: auto; }\n\n@media screen and (max-width: 1280px) {\n    :host .chart-container {\n      flex-direction: column; } }\n\n:host .chart-container .chart-legend {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 8px; }\n\n:host .chart-container .chart-legend .chart-legend-label {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n\n:host .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n        height: 0.75rem;\n        margin-right: 8px;\n        width: 2rem; }\n\n:host .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.completed {\n          background-color: #4caf50; }\n\n:host .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-completed {\n          background-color: #ffc107; }\n\n:host .chart-container .chart-legend .chart-value {\n      font-weight: 700;\n      margin-left: 8px; }\n\n:host .chart-container .chart-wrapper {\n    position: relative;\n    height: 8rem;\n    width: 10rem;\n    margin-top: 2em; }\n\n:host .padding-class {\n  padding-left: 0.5em; }\n\n:host .custom-span {\n  color: #01579b; }\n\n:host .inventory-title {\n  padding-left: 0.5em;\n  font-style: italic;\n  font-size: large; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb2NrcGl0LWluc3BlY3Rpb24vZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX21vZGlmaWVycy5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2NvY2twaXQtaW5zcGVjdGlvbi9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxcY29ja3BpdC1pbnNwZWN0aW9uXFxmb3JtXFxjb2NrcGl0LWluc3BlY3Rpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb2NrcGl0LWluc3BlY3Rpb24vZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2NvY2twaXQtaW5zcGVjdGlvbi9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsaUNBQWlDLEVBQUE7O0FBR25DO0VBQ0Usd0JBQXdCO0VBQ3hCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlDQUFpQztFQUFqQyxzQ0FBaUM7RUFBakMsaUNBQWlDLEVBQUE7O0FBR25DO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0Usb0NBQTRCO0tBQTVCLGlDQUE0QjtNQUE1QixnQ0FBNEI7VUFBNUIsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVyxFQUFBOztBQUtiO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0Usa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0Usa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0Usb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0Usc0NBQXNDLEVBQUE7O0FDekh4QztFQ21CRSxhQUFhO0VBQ2IsbUJBQW1CO0VEMkJqQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBN0NqQjtJQUpKO01BS00sc0JBQXNCLEVBQUEsRUE2Q3pCOztBQWxESDtJQ2NFLGFBQWE7SUFDYixzQkFBc0I7SURKbEIsdUJBQXVCO0lBQ3ZCLGdCRTRCWSxFQUFBOztBRnhDbEI7TUNtQkUsYUFBYTtNQUNiLG1CQUFtQjtNREhiLG1CQUFtQixFQUFBOztBQWpCM0I7UUFvQlUsZUFBZTtRQUNmLGlCRW1CUTtRRmxCUixXQUFXLEVBQUE7O0FBdEJyQjtVQXlCWSx5QkVSVSxFQUFBOztBRmpCdEI7VUE2QlkseUJFWEksRUFBQTs7QUZsQmhCO01BbUNRLGdCQUFnQjtNQUNoQixnQkVJVSxFQUFBOztBRnhDbEI7SUF5Q00sa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZSxFQUFBOztBQTVDckI7RUFxREksbUJBQW1CLEVBQUE7O0FBckR2QjtFQXlESSxjQUFjLEVBQUE7O0FBekRsQjtFQTZESSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb2NrcGl0LWluc3BlY3Rpb24vZm9ybS9jb2NrcGl0LWluc3BlY3Rpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LS1mbGV4LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLWZsZXgtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzcGxheS0tbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LS0xMDAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1pbi13aWR0aC0tZml0LWNvbnRlbnQge1xyXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvc2l0aW9uLS1yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwteS0tbm9uZSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LS11bnNlbGVjdGFibGUge1xyXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aXNpYmlsaXR5LS1oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtLTEwIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTIwIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTMwIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTQwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTUwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTYwIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTcwIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTgwIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTkwIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5mbGV4LS0xIHtcclxuICBmbGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0yIHtcclxuICBmbGV4OiAyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0zIHtcclxuICBmbGV4OiAzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS00IHtcclxuICBmbGV4OiA0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS01IHtcclxuICBmbGV4OiA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS1hdXRvIHtcclxuICBmbGV4OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tZW5kIHtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1zdGFydCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWVuZCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktc3RhcnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwibW9kaWZpZXJzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFydC1sZWdlbmQge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgLmNoYXJ0LWxlZ2VuZC1sYWJlbCB7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmNoYXJ0LWxlZ2VuZC1sYWJlbC1jb2xvciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgICAgICB3aWR0aDogMnJlbTtcclxuXHJcbiAgICAgICAgICAmLmNvbXBsZXRlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5ub3QtY29tcGxldGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGFydC12YWx1ZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGFydC13cmFwcGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnBhZGRpbmctY2xhc3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tc3BhbiB7XHJcbiAgICBjb2xvcjogIzAxNTc5YjtcclxuICB9XHJcblxyXG4gIC5pbnZlbnRvcnktdGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgfVxyXG59XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.component.ts':
      /*!***********************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.component.ts ***!
  \***********************************************************************************************/
      /*! exports provided: CockpitInspectionFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'CockpitInspectionFormComponent',
          function() {
            return CockpitInspectionFormComponent;
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
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
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
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/utils/bido-family-variant-utils */ './src/app/shared/utils/bido-family-variant-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _cockpit_inspection_form_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./cockpit-inspection-form.service */ './src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.service.ts'
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

        var CockpitInspectionFormComponent = /** @class */ (function(_super) {
          __extends(CockpitInspectionFormComponent, _super);
          function CockpitInspectionFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            cockpitInspectionFormService,
            translateService,
            sessionService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.cockpitInspectionFormService = cockpitInspectionFormService;
            _this.translateService = translateService;
            _this.sessionService = sessionService;
            _this.chartContentReady = true;
            _this.familyVariants = [];
            return _this;
          }
          CockpitInspectionFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
              .MAI_COCKPIT_INSPECTION_FORM;
          };
          CockpitInspectionFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.init();
            this.renderTreeTableColumns();
            this.loadMROCenter();
            this.loadFamilyVariants();
            this.bidoEquipmentDTO = {};
          };
          CockpitInspectionFormComponent.prototype.refresh = function() {
            if (this.breadcrumbsList.length === 0 || this.breadcrumbsList.length === 1) {
              this.treeContentReady = false;
              this.init();
              this.loadScreenData();
            }
          };
          /**********************************
           * INITIALIZATION
           **********************************/
          CockpitInspectionFormComponent.prototype.init = function() {
            this.bsdeProjectDTO = {};
            this.itemStructureNodeSelected = [];
            this.itemStructureDisplayed = [];
            this.breadcrumbsList = [];
            this.subAssemblys = [];
            this.selectedSubAssembly = {};
            this.chartData = {
              datasets: [],
              labels: []
            };
          };
          CockpitInspectionFormComponent.prototype.loadScreenData = function() {
            this.fetchProjectDetails();
            this.initChart();
          };
          CockpitInspectionFormComponent.prototype.loadMROCenter = function() {
            var _this = this;
            // Load dropdowns
            var observables = [
              this.cockpitInspectionFormService.findMROCenter(),
              this.cockpitInspectionFormService.findAllCustomers()
            ];
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(observables).subscribe(function(results) {
              _this.mroCenters = results[0] || [];
              _this.customerList = results[1] || [];
              _this.loadScreenData();
            });
          };
          CockpitInspectionFormComponent.prototype.loadFamilyVariants = function() {
            var _this = this;
            this.familyVariants = [];
            this.cockpitInspectionFormService.loadFamilyVariants().subscribe(
              function(results) {
                results.forEach(function(result) {
                  var label1 = result.familyname ? result.familyname : result.familyCode;
                  var label2 = result.variantName ? result.variantName : result.variantCode;
                  var label = label1 + '-' + label2;
                  var value = _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_15__[
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
              },
              function() {
                _this.messageService.showErrorMessage('errorOnLoadingFamilyVariants');
              }
            );
          };
          /**********************************
           * TREE TABLE COLUMNS
           **********************************/
          CockpitInspectionFormComponent.prototype.renderTreeTableColumns = function() {
            this.structureTableCols = [
              { field: 'item', alignment: 'left', width: '20%' },
              { field: 'functionData', alignment: 'left', width: '10%' },
              { field: 'itemFamilyCode', alignment: 'left', width: '10%' },
              { field: 'progress', alignment: 'center', width: '10%' },
              { field: 'quantity', alignment: 'left', width: '10%' },
              { field: 'configuration', alignment: 'center', width: '10%' },
              { field: 'illustration', alignment: 'center', width: '20%' },
              { field: 'action', alignment: 'center', width: '10%' }
            ];
          };
          /**********************************
           * FETCH PROJECT DETAILS
           **********************************/
          CockpitInspectionFormComponent.prototype.fetchProjectDetails = function() {
            var _this = this;
            if (!!this.componentData && !!this.componentData.objectId) {
              var projectNumber = this.serializationService.deserialize(this.componentData.objectId);
              this.panelLoading = true;
              this.cockpitInspectionFormService
                .findBsdeProjectByProjectNumber(projectNumber)
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                    _this.panelLoading = false;
                  })
                )
                .subscribe(function(result) {
                  _this.mroCenter = !result.repairCenterCode
                    ? undefined
                    : _this.mroCenters.filter(function(res) {
                        return res.value === result.repairCenterCode;
                      })[0].label;
                  result.customerCode = !result.customerCode
                    ? undefined
                    : _this.customerList.filter(function(res) {
                        return res.value === result.customerCode;
                      })[0].label;
                  _this.bsdeProjectDTO = result;
                  // Setting Context of screen
                  if (!!result.projectNumber) {
                    _this.subtitle = [
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].isNullOrEmpty(
                        result.projectNumber.toString()
                      )
                        ? ''
                        : 'N\u00B0 ' + result.projectNumber,
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].isNullOrEmpty(
                        result.projectPn
                      )
                        ? ''
                        : 'P/N ' + result.projectPn,
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].isNullOrEmpty(
                        result.projectSn
                      )
                        ? ''
                        : 'S/N ' + result.projectSn
                    ]
                      .filter(function(s) {
                        return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].isEmpty(s);
                      })
                      .join(' | ');
                  }
                  _this.displayComponentContext(_this.subtitle, _this.isCreateOpenMode);
                  if (!!_this.bsdeProjectDTO.projectPn || !!_this.bsdeProjectDTO.projectSn) {
                    var input = {
                      pnCode: _this.bsdeProjectDTO.projectPn,
                      sn: _this.bsdeProjectDTO.projectSn
                    };
                    _this.cockpitInspectionFormService.findBidoEquipmentsByPnAndSn(input).subscribe(function(res) {
                      _this.bidoEquipmentDTO = !!res && res.length > 0 ? res[0] : undefined;
                    });
                  }
                  _this.panelLoading = false;
                  _this.treeContentReady = true;
                });
            }
          };
          /**********************************
           * CHART OPERATIONS
           **********************************/
          CockpitInspectionFormComponent.prototype.initChart = function() {
            this.chartType = 'pie';
            this.chartVisible = false;
            this.chartData = {
              datasets: [
                {
                  data: [],
                  backgroundColor: [
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants'].COLOR_GREEN,
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants'].COLOR_ORANGE
                  ],
                  hoverBackgroundColor: [
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants'].COLOR_GREEN,
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants'].COLOR_ORANGE
                  ]
                }
              ],
              labels: []
            };
            this.setChartLabels();
            this.setChartOptions();
          };
          CockpitInspectionFormComponent.prototype.setChartLabels = function() {
            var _this = this;
            var completedKey = this.getTranslateKey('completed');
            var notCompletedKey = this.getTranslateKey('notCompleted');
            this.translateService.get([completedKey, notCompletedKey]).subscribe(function(results) {
              var completedLabel = results ? results[completedKey] : 'Completed';
              var notCompletedLabel = results ? results[notCompletedKey] : 'Not Completed';
              _this.chartData.labels = [completedLabel, notCompletedLabel];
            });
          };
          CockpitInspectionFormComponent.prototype.setChartOptions = function() {
            this.chartOptions = {
              legend: {
                display: false
              },
              tooltips: {
                bodyFontColor:
                  _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants'].COLOR_BACKGROUND_PRIMARY
              }
            };
          };
          CockpitInspectionFormComponent.prototype.clearChartData = function() {
            this.chartData.datasets[0].data = [0, 0];
            this.completedNb = 0;
            this.notCompletedNb = 0;
          };
          /**********************************
           * RENDER DATA FOR PROGRESS CHART
           **********************************/
          CockpitInspectionFormComponent.prototype.renderProgress = function(event) {
            if (!!this.chartData && !!this.chartData.datasets) {
              this.chartContentReady = false;
              this.completedNb = event.completed;
              this.notCompletedNb = event.notCompleted;
              this.chartData.datasets[0].data = [event.completed, event.notCompleted];
              this.chartData = __assign({}, this.chartData);
            }
          };
          /**********************************
           * IMAGE ILLUSTRATION DIALOG OPERATIONS
           **********************************/
          CockpitInspectionFormComponent.prototype.openImage = function(event) {
            this.openImageDialog = true;
            this.dialogImgSrc = event;
          };
          CockpitInspectionFormComponent.prototype.closeDialog = function() {
            this.openImageDialog = false;
          };
          /**********************************
           * OPEN SUB-ASSEMBLY and ASSOSCIATED FUNCTIONALITY
           **********************************/
          CockpitInspectionFormComponent.prototype.openSubAssembly = function(event) {
            var pageData = {
              parentBireItem: !!event.parent && !!event.parent.data ? event.parent.data : this.bireItemDTO,
              selectedBireItem: event.bireItemDTO,
              selectedBireItemForTree: event.data,
              bsdeProjectDTO: this.bsdeProjectDTO
            };
            this.openItemChildren(pageData);
          };
          CockpitInspectionFormComponent.prototype.openItemChildren = function(item) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__['ComponentConstants']
                  .MAI_INFO_SUB_ASSEMBLY_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
            };
            if (!!item) {
              data.objectId = this.serializationService.serialize(item);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /**********************************
           * OPEN PART NUMBER UC
           **********************************/
          CockpitInspectionFormComponent.prototype.openPartNumberLink = function() {
            var _this = this;
            if (!!this.bidoEquipmentDTO && !!this.bireItemDTO) {
              var bireVersionPnDTO_1 = {
                subject: this.bidoEquipmentDTO.subject,
                sheet: this.bidoEquipmentDTO.sheet,
                marks: this.bidoEquipmentDTO.marks,
                chapter: this.bidoEquipmentDTO.chapter,
                section: this.bidoEquipmentDTO.section,
                pnCode: this.bsdeProjectDTO.projectPn,
                familyCode: this.bireItemDTO.familyCode,
                variantCode: this.bireItemDTO.variantCode,
                structureType: this.bireItemDTO.structureType
              };
              this.cockpitInspectionFormService.getPartNumberStructure(bireVersionPnDTO_1).subscribe(function(res) {
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
                      _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
                    );
                  }
                }
              });
            }
          };
          /**
           * open item part number UC
           */
          CockpitInspectionFormComponent.prototype.openItemPartNumber = function(objectId, openMode) {
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
          CockpitInspectionFormComponent.prototype.closeInventory = function() {
            this.cockpitInspectionFormService.closeEvent();
          };
          CockpitInspectionFormComponent.prototype.openSNLink = function() {
            if (!!this.bidoEquipmentDTO && !!this.bidoEquipmentDTO.equipmentCode) {
              var functionNm =
                this.bidoEquipmentDTO.equipmentFunction ||
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_TOOL_KEY;
              this.openEquipment(
                this.bidoEquipmentDTO.equipmentCode,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read,
                functionNm
              );
            }
          };
          CockpitInspectionFormComponent.prototype.openEquipment = function(objectId, openMode, functionNm) {
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
          CockpitInspectionFormComponent.prototype.getBireItem = function(dto) {
            this.bireItemDTO = dto;
          };
          CockpitInspectionFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-cockpit-inspection-form',
                template: __webpack_require__(
                  /*! ./cockpit-inspection-form.component.html */ './src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./cockpit-inspection-form.component.scss */ './src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.component.scss'
                  ),
                  __webpack_require__(
                    /*! ./shared/shared.scss */ './src/app/main/maintenance/cockpit-inspection/form/shared/shared.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__['TabService'],
                _cockpit_inspection_form_service__WEBPACK_IMPORTED_MODULE_17__['CockpitInspectionFormService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_12__['SessionService']
              ])
            ],
            CockpitInspectionFormComponent
          );
          return CockpitInspectionFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_14__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.service.ts':
      /*!*********************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.service.ts ***!
  \*********************************************************************************************/
      /*! exports provided: CockpitInspectionFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'CockpitInspectionFormService',
          function() {
            return CockpitInspectionFormService;
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
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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

        var CockpitInspectionFormService = /** @class */ (function(_super) {
          __extends(CockpitInspectionFormService, _super);
          function CockpitInspectionFormService(
            http,
            appConfigService,
            projectManagementApi,
            cockpitComponentApi,
            productStructureManagementApi,
            fleetManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.projectManagementApi = projectManagementApi;
            _this.cockpitComponentApi = cockpitComponentApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.saveSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__['Subject']();
            return _this;
          }
          CockpitInspectionFormService.prototype.findBsdeProjectByProjectNumber = function(projectNumber) {
            return _super.prototype.post.call(
              this,
              this.projectManagementApi.findBsdeProjectByProjectNumber,
              projectNumber
            );
          };
          /**************************************************
           * FETCHING DATA FOR SUB ASSEMBLY TREE STRUCTURE
           **************************************************/
          CockpitInspectionFormService.prototype.getCockpitInspection = function(input) {
            return _super.prototype.post.call(this, this.cockpitComponentApi.getCockpitInspection, input);
          };
          CockpitInspectionFormService.prototype.findBireDocItemsByItem = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireDocItemsByItem, input);
          };
          /**************************************************
           * FETCHING DATA FOR TECHNICAL AND SUB ASSEMBLY TABLE
           **************************************************/
          CockpitInspectionFormService.prototype.getTechnicalQuotation = function(input) {
            return _super.prototype.post.call(this, this.cockpitComponentApi.getTechnicalQuotation, input);
          };
          CockpitInspectionFormService.prototype.findBidoEquipmentByBireItemDTO = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentByBireItemDTO, input);
          };
          CockpitInspectionFormService.prototype.findFirstBidoEquipmentsByPnAndSnCodes = function(woEquipement) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findFirstBidoEquipmentsByPnAndSnCodes,
              woEquipement
            );
          };
          CockpitInspectionFormService.prototype.findMROCenter = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireSiteForTask);
          };
          CockpitInspectionFormService.prototype.getSubAssemblySiblingList = function(input) {
            return _super.prototype.post.call(this, this.cockpitComponentApi.getSubAssemblySiblingList, input);
          };
          CockpitInspectionFormService.prototype.fetchSentenceList = function() {
            return _super.prototype.post.call(this, this.cockpitComponentApi.getSentenceList);
          };
          CockpitInspectionFormService.prototype.fetchDecisionList = function() {
            return _super.prototype.post.call(this, this.cockpitComponentApi.getDecisionList);
          };
          CockpitInspectionFormService.prototype.findAllCustomers = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findMroBireSite);
          };
          CockpitInspectionFormService.prototype.closeEvent = function() {
            this.saveSubject.next();
          };
          CockpitInspectionFormService.prototype.saveEvent = function() {
            return this.saveSubject.asObservable();
          };
          CockpitInspectionFormService.prototype.findBidoEquipmentsByPnAndSn = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes, input);
          };
          CockpitInspectionFormService.prototype.getPartNumberStructure = function(bireItemDTOId) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.getPartNumberStructure,
              bireItemDTOId
            );
          };
          CockpitInspectionFormService.prototype.loadFamilyVariants = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireVariantVersions);
          };
          CockpitInspectionFormService.prototype.printPDF = function(inventories) {
            return _super.prototype.post.call(this, this.cockpitComponentApi.generateInspectionPDF, inventories);
          };
          CockpitInspectionFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__['AppConfigService'],
                _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_6__['ProjectManagementApi'],
                _shared_api_cockpit_component_api__WEBPACK_IMPORTED_MODULE_3__['CockpitComponentApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__['FleetManagementApi']
              ])
            ],
            CockpitInspectionFormService
          );
          return CockpitInspectionFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/info-sub-assembly/info-sub-assembly.component.html':
      /*!*************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/info-sub-assembly/info-sub-assembly.component.html ***!
  \*************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">\r\n          - {{ bsdeProjectDTO.projectNumber }}\r\n          <span *ngIf="selectedBireItemDTO">\r\n            - {{ selectedBireItemDTO.chapter }}-{{ selectedBireItemDTO.section }}-{{ selectedBireItemDTO.subject }}-{{\r\n              selectedBireItemDTO.sheet\r\n            }}-{{ selectedBireItemDTO.marks }}\r\n            <span *ngIf="!!selectedBireItemDTO.name">- {{ selectedBireItemDTO.name }}</span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button type="button" mat-menu-item (click)="refresh()">\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--10 custom-breadcrumb-padding"></div>\r\n\r\n        <!-- SIBLINGS DROPDOWN TO NAVIGATE BETWEEN SIBLINGS -->\r\n        <div class="grid-cell--2" *ngIf="siblingsList.length > 0">\r\n          <div class="form-group">\r\n            <label class="form-label"></label>\r\n            <div class="form-control sibling-list">\r\n              <p-dropdown\r\n                class="aw-dropdown custom-width"\r\n                [options]="siblingsList"\r\n                [(ngModel)]="selectedSibling"\r\n                (onChange)="loadSibling()"\r\n              >\r\n                <ng-template let-item pTemplate="selectedItem">\r\n                  <div>{{ item?.label }}</div>\r\n                  <div>\r\n                    <i>{{ item?.subtitle }}</i>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template let-group pTemplate="item">\r\n                  <div>{{ group?.label }}</div>\r\n                  <div>\r\n                    <i>{{ group?.subtitle }}</i>\r\n                  </div>\r\n                </ng-template>\r\n              </p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <!-- ITEM BLOCK -->\r\n          <div\r\n            [ngClass]="{\r\n              \'grid-cell--6\': !!selectedSubAssembly.bireDocumentDTO && !!selectedSubAssembly.bireDocumentDTO.docFile,\r\n              \'grid-cell--4\': !!selectedSubAssembly.bireDocumentDTO && !selectedSubAssembly.bireDocumentDTO.docFile\r\n            }"\r\n          >\r\n            <div class="grid-cell grid-cell--container grid-cell-scope  custom-height">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ getComponentName() + ".item" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content">\r\n                <div class="column">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".family" | translate }}</label>\r\n                      <div class="form-control">\r\n                        <b>{{ itemFamily }}</b>\r\n                        <i>{{ isSerialized }}</i>\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".expectedQuantity" | translate }}</label>\r\n                      <div class="form-control">\r\n                        <b>{{ selectedSubAssembly.expectedQuantity }}</b>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".functionCode" | translate }}</label>\r\n                      <div class="form-control">\r\n                        <b>{{ selectedSubAssembly.functionCode }}</b>\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".realQuantity" | translate }}</label>\r\n                      <div class="form-control">\r\n                        <b>{{ selectedSubAssembly.realQuantity }}</b>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div\r\n                  class="column"\r\n                  *ngIf="!!selectedSubAssembly.bireDocumentDTO && !!selectedSubAssembly.bireDocumentDTO.docFile"\r\n                >\r\n                  <div class="illustration">\r\n                    <img\r\n                      class="img-class"\r\n                      [src]="selectedSubAssembly.additionalData"\r\n                      (click)="openImage(selectedSubAssembly.additionalData)"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Control Configuration -->\r\n          <div\r\n            [ngClass]="{\r\n              \'grid-cell--3\': !!selectedSubAssembly.bireDocumentDTO && !!selectedSubAssembly.bireDocumentDTO.docFile,\r\n              \'grid-cell--4\': !!selectedSubAssembly.bireDocumentDTO && !selectedSubAssembly.bireDocumentDTO.docFile\r\n            }"\r\n          >\r\n            <div class="grid-cell grid-cell--container grid-cell-scope custom-height">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container  loading-indicator">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ getComponentName() + ".configurationControl" | translate }}\r\n                    <div *ngIf="isTechnicalTableLoaded" class="lds-hourglass"></div>\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n              <div class="grid-cell-content">\r\n                <div class="column">\r\n                  <div class="row">\r\n                    <p-table class="aw-table2" [columns]="confControlCols" [value]="confControlList">\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isfilterTable"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isfilterTable" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            <span *ngIf="col.field !== \'label\'">{{\r\n                              getComponentName() + "." + col.field | translate\r\n                            }}</span>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <!-- CONTROL -->\r\n                            <span *ngSwitchCase="\'ok\'">\r\n                              <div [style.textAlign]="col.alignment">\r\n                                <span\r\n                                  [ngClass]="calculateOKColorCode(rowData) ? \'alert alert--ok\' : \'alert alert--none\'"\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span>\r\n                              </div>\r\n                            </span>\r\n                            <span *ngSwitchCase="\'nok\'">\r\n                              <div [style.textAlign]="col.alignment">\r\n                                <span *ngIf="!rowData[col.field]" class="alert alert--none">\r\n                                  {{ rowData[col.field] }}\r\n                                </span>\r\n                                <span *ngIf="!!rowData[col.field]" class="alert alert--nok">\r\n                                  {{ rowData[col.field] }}\r\n                                </span>\r\n                              </div>\r\n                            </span>\r\n                            <span *ngSwitchCase="\'warning\'">\r\n                              <div [style.textAlign]="col.alignment">\r\n                                <span\r\n                                  [ngClass]="\r\n                                    calculateWarningColorCode(rowData) ? \'alert alert--warning\' : \'alert alert--none\'\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span>\r\n                              </div>\r\n                            </span>\r\n                            <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- PROGRESS -->\r\n          <div\r\n            [ngClass]="{\r\n              \'grid-cell--3\': !!selectedSubAssembly.bireDocumentDTO && !!selectedSubAssembly.bireDocumentDTO.docFile,\r\n              \'grid-cell--4\': !!selectedSubAssembly.bireDocumentDTO && !selectedSubAssembly.bireDocumentDTO.docFile\r\n            }"\r\n          >\r\n            <div class="grid-cell grid-cell--container grid-cell-scope custom-height">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container  loading-indicator">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ getComponentName() + ".progress" | translate }}\r\n                    <div *ngIf="isTechnicalTableLoaded" class="lds-hourglass"></div>\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content">\r\n                <div class="column custom-chart-height">\r\n                  <div class="chart-container" *ngIf="showSubAssemblyTree">\r\n                    <div class="chart-wrapper">\r\n                      <p-chart\r\n                        [type]="chartType"\r\n                        [data]="chartData"\r\n                        [options]="chartOptions"\r\n                        width="100%"\r\n                        height="100%"\r\n                      ></p-chart>\r\n                    </div>\r\n\r\n                    <div class="chart-legend">\r\n                      <div class="chart-legend-label">\r\n                        <div class="chart-legend-label-color completed"></div>\r\n                        {{ chartData.labels[0] }}\r\n                        <span class="chart-value">{{ completedNb }} </span>\r\n                      </div>\r\n\r\n                      <div class="chart-legend-label">\r\n                        <div class="chart-legend-label-color not-completed"></div>\r\n                        {{ chartData.labels[1] }}\r\n                        <span class="chart-value">{{ notCompletedNb }} </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Technical Quotation Table -->\r\n          <div class="grid-cell--12">\r\n            <div class="grid-cell grid-cell--container grid-cell-scope">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container  loading-indicator">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ getComponentName() + ".technicalQuotation" | translate }}\r\n                    <div *ngIf="isTechnicalTableLoaded" class="lds-hourglass"></div>\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content">\r\n                <div class="grid-cell--12">\r\n                  <div class="grid-row">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #ptableFilterElement\r\n                      class="aw-table2"\r\n                      [columns]="technicalQuotationCols"\r\n                      [value]="technicalQuotationList"\r\n                      [(selection)]="selectedElements"\r\n                      [scrollable]="true"\r\n                      dataKey="index"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isfilterTable"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isfilterTable" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedElements.length > 0 }">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableCusCustomerGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptableFilterElement.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions">\r\n                            <button\r\n                              type="button"\r\n                              mat-raised-button\r\n                              *ngIf="selectedElements.length === 1"\r\n                              (click)="openMeasure()"\r\n                            >\r\n                              {{ getComponentName() + ".showMeasures" | translate }}\r\n                            </button>\r\n                            <button\r\n                              type="button"\r\n                              mat-raised-button\r\n                              *ngIf="selectedElements.length === 0"\r\n                              (click)="openQuotationPanel()"\r\n                            >\r\n                              {{ "global.add" | translate }}\r\n                            </button>\r\n                            <button\r\n                              type="button"\r\n                              mat-raised-button\r\n                              *ngIf="technicalQuotationList.length !== 0"\r\n                              (click)="editInventory()"\r\n                            >\r\n                              {{ "global.edit" | translate }}\r\n                            </button>\r\n                            <button\r\n                              type="button"\r\n                              *ngIf="selectedElements.length > 0"\r\n                              mat-raised-button\r\n                              (click)="printPDF()"\r\n                            >\r\n                              {{ getComponentName() + ".print" | translate }}\r\n                            </button>\r\n                          </div>\r\n                          <div class="aw-table-icon-actions">\r\n                            <i\r\n                              class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                              aria-hidden="true"\r\n                              [ngClass]="{ active: filtersVisible }"\r\n                              (click)="opFilters.toggle($event)"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width, display: col.display }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper">\r\n                            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                          </th>\r\n\r\n                          <th\r\n                            pResizableColumn\r\n                            *ngFor="let col of columns"\r\n                            [ngStyle]="{ \'text-align\': col.alignment, display: col.display }"\r\n                          >\r\n                            {{ getComponentName() + "." + col.field | translate }}\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td class="aw-table-checkbox-wrapper">\r\n                            <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                          </td>\r\n\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment, display: col.display }"\r\n                          >\r\n                            <span *ngSwitchCase="\'equipment\'">\r\n                              <div class="code">\r\n                                <div (click)="openPartNumberLink(rowData[\'pn\'])" *ngIf="!!rowData[\'pn\']">\r\n                                  <span *ngIf="!rowData.isOtherPN">{{ getComponentName() + ".pn" | translate }}</span>\r\n                                  <span *ngIf="rowData.isOtherPN">{{\r\n                                    getComponentName() + ".otherPN" | translate\r\n                                  }}</span>\r\n                                  :\r\n                                  <span class="custom-span custom-font-style cursor-class padding-class">{{\r\n                                    rowData["pn"]\r\n                                  }}</span>\r\n                                </div>\r\n                                <div *ngIf="!!rowData[\'sn\'] && isItemSerialized">\r\n                                  <span>{{ getComponentName() + ".sn" | translate }}:</span>\r\n                                  <span class="custom-span custom-font-style padding-class">{{ rowData["sn"] }}</span>\r\n                                </div>\r\n                                <div *ngIf="!isItemSerialized && !!rowData[\'tn\']">\r\n                                  <span>{{ getComponentName() + ".tn" | translate }}:</span>\r\n                                  <span class="custom-span custom-font-style padding-class">{{ rowData["tn"] }}</span>\r\n                                </div>\r\n                              </div>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'sentenceValue\'" class="custom-font-style">\r\n                              {{ rowData["sentenceValue"] }}\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'targetPn\'">\r\n                              <span\r\n                                class="custom-span custom-font-style cursor-class"\r\n                                (click)="openPartNumberLink(rowData[\'targetPn\'])"\r\n                                >{{ rowData["targetPn"] }}</span\r\n                              >\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'decisionValue\'">\r\n                              <div class="custom-font-style">\r\n                                {{ rowData["decisionValue"] }}\r\n                              </div>\r\n                              <div\r\n                                class="div-padding"\r\n                                *ngIf="!!rowData[\'issueWareHouse\'] || !!rowData[\'receiptWareHouse\']"\r\n                              >\r\n                                <div>\r\n                                  {{ getComponentName() + ".issue" | translate }}:\r\n                                  <span class="custom-font-style padding-class">{{ rowData["issueWareHouse"] }}</span>\r\n                                </div>\r\n                                <div>\r\n                                  {{ getComponentName() + ".receipt" | translate }}:\r\n                                  <span class="custom-font-style">{{ rowData["receiptWareHouse"] }}</span>\r\n                                </div>\r\n                              </div>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'iwbTask\'">\r\n                              <div *ngFor="let task of rowData[\'iwbTask\']" title="{{ rowData[\'iwbTaskHover\'] }}">\r\n                                <span>{{ task }}</span>\r\n                              </div>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'iwbFindingsToDisplay\'">\r\n                              <div\r\n                                *ngFor="let finding of rowData[\'iwbFindingsToDisplay\']"\r\n                                title="{{ rowData[\'iwbFindingsToDisplayHover\'] }}"\r\n                              >\r\n                                <span>{{ finding }}</span>\r\n                              </div>\r\n                            </span>\r\n\r\n                            <!-- CONTROL -->\r\n                            <span *ngSwitchCase="\'control\'">\r\n                              <div [style.textAlign]="col.alignment">\r\n                                <span\r\n                                  *ngIf="rowData[\'targetResultMatchingIcon\'] === controlConfigConstants.ICON_RED"\r\n                                  class="alert alert--nok"\r\n                                  title="{{ rowData[\'targetResultMatchingAlt\'] }}"\r\n                                >\r\n                                  {{ getComponentName() + ".alertNok" | translate }}\r\n                                </span>\r\n                                <span\r\n                                  *ngIf="rowData[\'targetResultMatchingIcon\'] === controlConfigConstants.ICON_GREEN"\r\n                                  class="alert alert--ok"\r\n                                  title="{{ rowData[\'targetResultMatchingAlt\'] }}"\r\n                                >\r\n                                  {{ getComponentName() + ".alertOk" | translate }}\r\n                                </span>\r\n                              </div>\r\n                            </span>\r\n                            <span *ngSwitchCase="\'woCode\'">\r\n                              <div\r\n                                *ngIf="!!rowData[col.field]"\r\n                                class="code breadcrumb-cursor"\r\n                                (click)="openWorkOrderLink(rowData)"\r\n                              >\r\n                                <span class="custom-span custom-font-style padding-class ">{{\r\n                                  rowData[col.field]\r\n                                }}</span>\r\n                              </div>\r\n                              <div *ngIf="!!rowData[col.field]" class="table-cell progress">\r\n                                <span>\r\n                                  <p-progressBar [value]="rowData[\'woProgress\']"></p-progressBar>\r\n                                </span>\r\n                              </div>\r\n                              <div></div>\r\n                            </span>\r\n                            <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- TREE TABLE ITEM STRUCTURE-->\r\n          <div class="grid-cell--12" *ngIf="!!subAssemblys && subAssemblys.length > 0">\r\n            <div class="grid-cell grid-cell--container grid-cell-scope  grid-cell-item-structure">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container  loading-indicator">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ getComponentName() + ".subAssemblies" | translate }}\r\n                    <div *ngIf="chartContentReady" class="lds-hourglass"></div>\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content">\r\n                <aw-tree-sub-assembly\r\n                  *ngIf="showSubAssemblyTree"\r\n                  [bsdeProjectDTO]="bsdeProjectDTO"\r\n                  (openImageEmitter)="openImage($event)"\r\n                  [subAssemblys]="subAssemblys"\r\n                  (openSubAssemblyEmitter)="openSubAssembly($event)"\r\n                  (renderProgress)="renderProgress($event)"\r\n                ></aw-tree-sub-assembly>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- IMAGE DIALOG -->\r\n  <a-modal class="aw-modal" *ngIf="openImageDialog" [(visible)]="openImageDialog">\r\n    <a-header>\r\n      <div class="modal-title">{{ getComponentName() + ".dialogTitle" | translate }}</div>\r\n    </a-header>\r\n\r\n    <a-content>\r\n      <div class="illustration">\r\n        <img class="expanded-img-class" [src]="dialogImgSrc" />\r\n      </div>\r\n    </a-content>\r\n\r\n    <a-footer>\r\n      <button type="button" mat-raised-button (click)="closeDialog()">\r\n        <span>{{ "global.close" | translate }}</span>\r\n      </button>\r\n    </a-footer>\r\n  </a-modal>\r\n\r\n  <!-- Filter for Technical Quotation -->\r\n  <p-overlayPanel\r\n    #opFilters\r\n    [appendTo]="\'body\'"\r\n    class="aw-overlay"\r\n    (onShow)="filtersVisible = true"\r\n    (onHide)="filtersVisible = false"\r\n  >\r\n    <aw-technical-quotation-table-filters\r\n      [decisionList]="decisionList"\r\n      [configurationList]="configurationList"\r\n      [sentenceList]="sentenceList"\r\n      [pnList]="pnList"\r\n      [woCodeList]="woCodeList"\r\n      [(searchCriteria)]="searchCriteria"\r\n      (onFilter)="opFilters.hide(); filtersVisible = false; filterWithCriteria()"\r\n      (onReset)="resetTableFilters()"\r\n    ></aw-technical-quotation-table-filters>\r\n  </p-overlayPanel>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/info-sub-assembly/info-sub-assembly.component.scss':
      /*!*************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/info-sub-assembly/info-sub-assembly.component.scss ***!
  \*************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .chart-container {\n  display: flex;\n  flex-direction: row;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: auto;\n  margin-left: auto; }\n  @media screen and (max-width: 1280px) {\n    :host .chart-container {\n      flex-direction: column; } }\n  :host .chart-container .chart-legend {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 8px; }\n  :host .chart-container .chart-legend .chart-legend-label {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n  :host .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n        height: 0.75rem;\n        margin-right: 8px;\n        width: 2rem; }\n  :host .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.completed {\n          background-color: #4caf50; }\n  :host .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-completed {\n          background-color: #ffc107; }\n  :host .chart-container .chart-legend .chart-value {\n      font-weight: 700;\n      margin-left: 8px; }\n  :host .chart-container .chart-wrapper {\n    position: relative;\n    height: 8rem;\n    width: 10rem; }\n  :host ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n  :host .message {\n  color: #01579b;\n  font-size: 1rem;\n  text-align: center;\n  width: 100%; }\n  :host .control-class {\n  text-align: center;\n  padding: 0.2em; }\n  :host .ok {\n  background-color: #4caf50 !important; }\n  :host .warning {\n  background-color: #ffc107 !important; }\n  :host .nok {\n  background-color: #f6685e !important; }\n  :host #breadcrumbs-status {\n  overflow: hidden;\n  display: flex; }\n  :host ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n  :host .breadcrumbs {\n  display: flex;\n  flex-grow: 1; }\n  :host .bread-crumb-custom-cell {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n  padding-bottom: 0 !important; }\n  :host #breadcrumbs-status li {\n  float: left;\n  margin: 0 1em 0 1em; }\n  :host #breadcrumbs-status .current {\n  float: left;\n  margin: 0 1em 0 1em; }\n  :host #breadcrumbs-status .statusLabel {\n  background: #ffffff;\n  padding: 0.3em 1em;\n  float: left;\n  text-decoration: none;\n  color: #000;\n  position: relative;\n  white-space: nowrap;\n  min-height: 3em; }\n  :host #breadcrumbs-status .current .statusLabel {\n  background: #01579b; }\n  :host #breadcrumbs-status .statusLabel::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-width: 1.5em 0 1.5em 1em;\n  border-style: solid;\n  border-color: #ffffff #ffffff #ffffff transparent;\n  left: -1em; }\n  :host #breadcrumbs-status .current .statusLabel::before {\n  border-color: #01579b #01579b #01579b transparent; }\n  :host #breadcrumbs-status .statusLabel::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-top: 1.5em solid transparent;\n  border-bottom: 1.5em solid transparent;\n  border-left: 1em solid #ffffff;\n  right: -1em; }\n  :host #breadcrumbs-status .current .statusLabel::after {\n  border-left-color: #01579b; }\n  :host #breadcrumbs-status .current .statusLabel {\n  color: white;\n  font-weight: bold; }\n  :host #breadcrumbs-status .current::after,\n:host #breadcrumbs-status .current::before {\n  content: normal; }\n  :host .illustration {\n  text-align: center; }\n  :host .img-class {\n  max-height: 7rem;\n  cursor: pointer; }\n  :host .margin-class {\n  margin-top: 1em; }\n  :host .breadcrumb-cursor {\n  cursor: pointer; }\n  :host .disable-pointer {\n  cursor: none;\n  pointer-events: none; }\n  :host .padding-class {\n  padding-left: 0.5em; }\n  :host .custom-height {\n  height: 15em !important; }\n  :host .custom-chart-height {\n  height: 9.6em !important; }\n  :host .div-padding {\n  padding-top: 1em !important; }\n  :host .custom-breadcrumb-padding {\n  padding: 0 !important; }\n  :host .sibling-list {\n  float: right; }\n  :host .subtitle {\n  max-width: 10em;\n  overflow: hidden;\n  word-wrap: break-word;\n  text-overflow: ellipsis; }\n  :host .custom-font-style {\n  font-weight: bold; }\n  :host .inventory-title {\n  padding-left: 0.5em;\n  font-style: italic;\n  font-size: large; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb2NrcGl0LWluc3BlY3Rpb24vZm9ybS9pbmZvLXN1Yi1hc3NlbWJseS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbWFpbnRlbmFuY2VcXGNvY2twaXQtaW5zcGVjdGlvblxcZm9ybVxcaW5mby1zdWItYXNzZW1ibHlcXGluZm8tc3ViLWFzc2VtYmx5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2NvY2twaXQtaW5zcGVjdGlvbi9mb3JtL2luZm8tc3ViLWFzc2VtYmx5L2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29ja3BpdC1pbnNwZWN0aW9uL2Zvcm0vaW5mby1zdWItYXNzZW1ibHkvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ29CRSxhQUFhO0VBQ2IsbUJBQW1CO0VENkJqQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7RUFoRGpCO0lBSko7TUFLTSxzQkFBc0IsRUFBQSxFQWdEekI7RUFyREg7SUNlRSxhQUFhO0lBQ2Isc0JBQXNCO0lETGxCLHVCQUF1QjtJQUN2QixnQkU2QlksRUFBQTtFRnpDbEI7TUNvQkUsYUFBYTtNQUNiLG1CQUFtQjtNREpiLG1CQUFtQixFQUFBO0VBakIzQjtRQW9CVSxlQUFlO1FBQ2YsaUJFb0JRO1FGbkJSLFdBQVcsRUFBQTtFQXRCckI7VUF5QlkseUJFUFUsRUFBQTtFRmxCdEI7VUE2QlkseUJFVkksRUFBQTtFRm5CaEI7TUF1Q1EsZ0JBQWdCO01BQ2hCLGdCRUNVLEVBQUE7RUZ6Q2xCO0lBNkNNLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWSxFQUFBO0VBL0NsQjtFQXdESSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQixFQUFBO0VBMURwQjtFQThESSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUFqRWY7RUFxRUksa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtFQXRFbEI7RUEwRUksb0NBQTBDLEVBQUE7RUExRTlDO0VBOEVJLG9DQUFvQyxFQUFBO0VBOUV4QztFQWtGSSxvQ0FBd0MsRUFBQTtFQWxGNUM7RUFzRkksZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtFQXZGakI7RUEyRkksU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0IsRUFBQTtFQTdGcEI7RUFpR0ksYUFBYTtFQUNiLFlBQVksRUFBQTtFQWxHaEI7RUFzR0ksd0NBQXdDO0VBQ3hDLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IsNEJBQTRCLEVBQUE7RUF6R2hDO0VBNkdJLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTtFQTlHdkI7RUFrSEksV0FBVztFQUNYLG1CQUFtQixFQUFBO0VBbkh2QjtFQXVISSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsV0U1SHFCO0VGNkhyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTtFQTlIbkI7RUFrSUksbUJFaklrQixFQUFBO0VGRHRCO0VBc0lJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGlEQUFpRDtFQUNqRCxVQUFVLEVBQUE7RUE3SWQ7RUFpSkksaURBQW1FLEVBQUE7RUFqSnZFO0VBcUpJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDhCQUE4QjtFQUM5QixXQUFXLEVBQUE7RUE1SmY7RUFnS0ksMEJFL0prQixFQUFBO0VGRHRCO0VBb0tJLFlBQVk7RUFDWixpQkFBaUIsRUFBQTtFQXJLckI7O0VBMEtJLGVBQWUsRUFBQTtFQTFLbkI7RUE4S0ksa0JBQWtCLEVBQUE7RUE5S3RCO0VBa0xJLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7RUFuTG5CO0VBdUxJLGVBQWUsRUFBQTtFQXZMbkI7RUEyTEksZUFBZSxFQUFBO0VBM0xuQjtFQStMSSxZQUFZO0VBQ1osb0JBQW9CLEVBQUE7RUFoTXhCO0VBb01JLG1CQUFtQixFQUFBO0VBcE12QjtFQXdNSSx1QkFBdUIsRUFBQTtFQXhNM0I7RUE0TUksd0JBQXdCLEVBQUE7RUE1TTVCO0VBZ05JLDJCQUEyQixFQUFBO0VBaE4vQjtFQW9OSSxxQkFBcUIsRUFBQTtFQXBOekI7RUF3TkksWUFBWSxFQUFBO0VBeE5oQjtFQTROSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix1QkFBdUIsRUFBQTtFQS9OM0I7RUFtT0ksaUJBQWlCLEVBQUE7RUFuT3JCO0VBdU9JLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2NvY2twaXQtaW5zcGVjdGlvbi9mb3JtL2luZm8tc3ViLWFzc2VtYmx5L2luZm8tc3ViLWFzc2VtYmx5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFydC1sZWdlbmQge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgLmNoYXJ0LWxlZ2VuZC1sYWJlbCB7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmNoYXJ0LWxlZ2VuZC1sYWJlbC1jb2xvciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgICAgICB3aWR0aDogMnJlbTtcclxuXHJcbiAgICAgICAgICAmLmNvbXBsZXRlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5ub3QtY29tcGxldGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyAgICYubm90LWNvbXBsZXRlZCB7XHJcbiAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICAgICAgICAvLyAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGFydC12YWx1ZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGFydC13cmFwcGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIH1cclxuXHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgY29sb3I6ICMwMTU3OWI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250cm9sLWNsYXNzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4gIH1cclxuXHJcbiAgLm9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC53YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5ub2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5icmVhZGNydW1icyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuXHJcbiAgLmJyZWFkLWNydW1iLWN1c3RvbS1jZWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyBsaSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCAxZW0gMCAxZW07XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5jdXJyZW50IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIDFlbSAwIDFlbTtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLnN0YXR1c0xhYmVsIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAwLjNlbSAxZW07XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1pbi1oZWlnaHQ6IDNlbTtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQgLnN0YXR1c0xhYmVsIHtcclxuICAgIGJhY2tncm91bmQ6ICRhY2NlbnQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5zdGF0dXNMYWJlbDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xLjVlbTtcclxuICAgIGJvcmRlci13aWR0aDogMS41ZW0gMCAxLjVlbSAxZW07XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmICNmZmZmZmYgI2ZmZmZmZiB0cmFuc3BhcmVudDtcclxuICAgIGxlZnQ6IC0xZW07XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5jdXJyZW50IC5zdGF0dXNMYWJlbDo6YmVmb3JlIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvciAkYWNjZW50LWNvbG9yICRhY2NlbnQtY29sb3IgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5zdGF0dXNMYWJlbDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNWVtO1xyXG4gICAgYm9yZGVyLXRvcDogMS41ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxLjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxZW0gc29saWQgI2ZmZmZmZjtcclxuICAgIHJpZ2h0OiAtMWVtO1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyAuY3VycmVudCAuc3RhdHVzTGFiZWw6OmFmdGVyIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyAuY3VycmVudCAuc3RhdHVzTGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5jdXJyZW50OjphZnRlcixcclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5jdXJyZW50OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgLmlsbHVzdHJhdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaW1nLWNsYXNzIHtcclxuICAgIG1heC1oZWlnaHQ6IDdyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWFyZ2luLWNsYXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICB9XHJcblxyXG4gIC5icmVhZGNydW1iLWN1cnNvciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZGlzYWJsZS1wb2ludGVyIHtcclxuICAgIGN1cnNvcjogbm9uZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnBhZGRpbmctY2xhc3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20taGVpZ2h0IHtcclxuICAgIGhlaWdodDogMTVlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1jaGFydC1oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiA5LjZlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmRpdi1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctdG9wOiAxZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tYnJlYWRjcnVtYi1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zaWJsaW5nLWxpc3Qge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIG1heC13aWR0aDogMTBlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcblxyXG4gIC5jdXN0b20tZm9udC1zdHlsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5pbnZlbnRvcnktdGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgfVxyXG59XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/info-sub-assembly/info-sub-assembly.component.ts':
      /*!***********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/info-sub-assembly/info-sub-assembly.component.ts ***!
  \***********************************************************************************************************/
      /*! exports provided: InfoSubAssemblyComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'InfoSubAssemblyComponent',
          function() {
            return InfoSubAssemblyComponent;
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
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _shared_utils_image_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../../shared/utils/image-utils */ './src/app/shared/utils/image-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _cockpit_inspection_form_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../cockpit-inspection-form.service */ './src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.service.ts'
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

        var InfoSubAssemblyComponent = /** @class */ (function(_super) {
          __extends(InfoSubAssemblyComponent, _super);
          function InfoSubAssemblyComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            domSanitizer,
            sessionService,
            translateService,
            propertiesService,
            cockpitInspectionFormService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.domSanitizer = domSanitizer;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.propertiesService = propertiesService;
            _this.cockpitInspectionFormService = cockpitInspectionFormService;
            _this.showSubAssemblyTree = true;
            _this.isFromInspection = true;
            _this.inventories = [];
            _this.controlConfigConstants =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants'];
            _this.completedNb = 0;
            _this.notCompletedNb = 0;
            return _this;
          }
          InfoSubAssemblyComponent_1 = InfoSubAssemblyComponent;
          InfoSubAssemblyComponent.prototype.getComponentName = function() {
            return 'InfoSubAssemblyComponent';
          };
          InfoSubAssemblyComponent.prototype.ngOnInit = function() {
            this.selectedElements = [];
            this.availablePNList = [];
            this.selectedSubAssembly = {};
            this.subAssemblyPageData = !!this.componentData.objectId
              ? this.serializationService.deserialize(this.componentData.objectId)
              : undefined;
            if (!!this.subAssemblyPageData.selectedBireItem) {
              var item = this.subAssemblyPageData.selectedBireItem;
              this.displayComponentContext(
                item.chapter + '-' + item.section + '-' + item.subject + '-' + item.sheet + '-' + item.marks,
                this.isCreateOpenMode
              );
            }
            // Setting Page component Data
            if (!!this.subAssemblyPageData) {
              this.projectNumber = this.subAssemblyPageData.bsdeProjectDTO.projectNumber;
              this.selectedBireItemDTO = this.subAssemblyPageData.selectedBireItem;
              this.parentBireItem = this.subAssemblyPageData.parentBireItem;
              this.bsdeProjectDTO = this.subAssemblyPageData.bsdeProjectDTO;
              this.selectedSubAssembly = this.subAssemblyPageData.selectedBireItemForTree;
              if (!!this.selectedSubAssembly.bireDocumentDTO && this.selectedSubAssembly.bireDocumentDTO.docFile) {
                this.selectedSubAssembly.additionalData = this.loadItemStructureNodeIllustrationList(
                  this.selectedSubAssembly
                );
              }
              this.loadPNList();
            }
            this.setControlGlobalFilter();
            this.init();
          };
          /**********************************
           * Load Image
           **********************************/
          InfoSubAssemblyComponent.prototype.loadItemStructureNodeIllustrationList = function(result) {
            var doc = result.bireDocumentDTO;
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              '' +
                _shared_utils_image_utils__WEBPACK_IMPORTED_MODULE_20__['ImageUtils'].getBase64Prefix(doc.docType) +
                doc.docFile
            );
          };
          InfoSubAssemblyComponent.prototype.refresh = function() {
            this.initChart();
          };
          InfoSubAssemblyComponent.prototype.init = function() {
            this.fetchDropdown();
            this.chartData = {
              datasets: [],
              labels: []
            };
            this.confControlList = [];
            this.subAssemblys = [];
            this.siblingsList = [];
            this.technicalQuotationList = [];
            this.pnList = [];
            this.woCodeList = [];
            this.selectedTaskType = '0';
            this.renderTableCols();
            this.initChart();
            this.getTechnicalQuotation();
          };
          /**********************************
           * INIT DROPDOWNS
           **********************************/
          InfoSubAssemblyComponent.prototype.fetchDropdown = function() {
            var _this = this;
            this.propertiesService.resetCache(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                .TASK_TYPE_MAP
            );
            this.setSearchControlList();
            this.setSearchSentenceDecisionList();
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .ITEM_FAMILY_CODE_MAP
              )
              .subscribe(function(res) {
                _this.familyCodeMap = res;
              });
            this.cockpitInspectionFormService.findMROCenter().subscribe(function(res) {
              _this.mroCenters = res;
            });
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .TASK_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.taskList = results || [];
                _this.taskList.unshift({
                  label: InfoSubAssemblyComponent_1.ALL_TYPES_LABEL,
                  value: '0'
                });
                _this.selectedTaskType = '0';
              });
          };
          InfoSubAssemblyComponent.prototype.renderTableCols = function() {
            this.technicalQuotationCols = [
              { field: 'equipment', alignment: 'left', display: 'table-cell' },
              { field: 'pn', alignment: 'left', display: 'none' },
              { field: 'sn', alignment: 'left', display: 'none' },
              { field: 'sentenceValue', alignment: 'left', display: 'table-cell' },
              { field: 'decisionValue', alignment: 'left', display: 'table-cell' },
              {
                field: 'quantity',
                alignment: 'left',
                display: !!this.selectedBireItemDTO && this.selectedBireItemDTO.serializedPart ? 'none' : 'table-cell'
              },
              { field: 'iwbFindingsToDisplay', alignment: 'left', display: 'table-cell' },
              { field: 'iwbTask', alignment: 'left', display: 'table-cell' },
              { field: 'woCode', alignment: 'center', display: 'table-cell' },
              { field: 'targetPn', alignment: 'left', display: 'table-cell' },
              { field: 'control', alignment: 'center', display: 'table-cell' },
              { field: 'receiptWareHouse', alignment: 'left', display: 'none' },
              { field: 'issueWareHouse', alignment: 'left', display: 'none' }
            ];
            this.confControlCols = [
              { field: 'label', alignment: 'left', width: '30%' },
              { field: 'ok', alignment: 'center', width: '20%' },
              { field: 'warning', alignment: 'center', width: '30%' },
              { field: 'nok', alignment: 'center', width: '20%' }
            ];
          };
          /**********************************
           * CHART OPERATIONS
           **********************************/
          InfoSubAssemblyComponent.prototype.initChart = function() {
            this.chartType = 'pie';
            this.chartVisible = false;
            this.chartData = {
              datasets: [
                {
                  data: [],
                  backgroundColor: [
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__['AppConstants'].COLOR_GREEN,
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__['AppConstants'].COLOR_ORANGE
                  ],
                  hoverBackgroundColor: [
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__['AppConstants'].COLOR_GREEN,
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__['AppConstants'].COLOR_ORANGE
                  ]
                }
              ],
              labels: []
            };
            this.setChartLabels();
            this.setChartOptions();
          };
          InfoSubAssemblyComponent.prototype.setChartLabels = function() {
            var _this = this;
            var completedKey = this.getTranslateKey('completed');
            var notCompletedKey = this.getTranslateKey('notCompleted');
            this.translateService.get([completedKey, notCompletedKey]).subscribe(function(results) {
              var completedLabel = results ? results[completedKey] : 'Completed';
              var notCompletedLabel = results ? results[notCompletedKey] : 'Not Completed';
              _this.chartData.labels = [completedLabel, notCompletedLabel];
            });
          };
          InfoSubAssemblyComponent.prototype.setChartOptions = function() {
            this.chartOptions = {
              legend: {
                display: false
              },
              tooltips: {
                bodyFontColor:
                  _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__['AppConstants'].COLOR_BACKGROUND_PRIMARY
              }
            };
          };
          /**********************************
           * RENDER DATA FOR PROGRESS CHART
           **********************************/
          InfoSubAssemblyComponent.prototype.renderProgress = function(event) {
            var _this = this;
            this.calculateProgressChartData();
            if (!!this.chartData && !!this.chartData.datasets) {
              setTimeout(function() {
                _this.completedNb += event.completed;
                _this.notCompletedNb += event.notCompleted;
                _this.chartData.datasets[0].data = [_this.completedNb, _this.notCompletedNb];
                _this.chartData = __assign({}, _this.chartData);
              });
            }
          };
          /**********************************
           * CONFIGURATION CONTROL TABLE
           **********************************/
          InfoSubAssemblyComponent.prototype.fillConfControlTable = function() {
            this.confControlList = [];
            this.confControlList.push({
              label: '' + this.translateService.instant(this.getTranslateKey('item')),
              nok: this.getQuotationCounters(InfoSubAssemblyComponent_1.NOK),
              ok: this.getQuotationCounters(InfoSubAssemblyComponent_1.OK),
              warning: this.getQuotationCounters(InfoSubAssemblyComponent_1.WARNING)
            });
            if (!!this.subAssemblys && this.subAssemblys.length > 0) {
              this.confControlList.push({
                label: '' + this.translateService.instant(this.getTranslateKey('subAssemblies')),
                nok: this.getSubAssemblyCounters(InfoSubAssemblyComponent_1.NOK),
                ok: this.getSubAssemblyCounters(InfoSubAssemblyComponent_1.OK),
                warning: this.getSubAssemblyCounters(InfoSubAssemblyComponent_1.WARNING)
              });
            } else {
              if (this.confControlCols[0].field === 'label') {
                // Removing label column in case subassemby not present
                this.confControlCols.shift();
              }
            }
          };
          InfoSubAssemblyComponent.prototype.calculateOKColorCode = function(rowData) {
            if (!rowData.ok) {
              return false;
            } else {
              if (!!rowData.ok) {
                if (!!rowData.nok) {
                  return false;
                } else if (rowData.ok < rowData.warning) {
                  return false;
                }
              }
            }
            return true;
          };
          InfoSubAssemblyComponent.prototype.calculateWarningColorCode = function(rowData) {
            if (!rowData.warning) {
              return false;
            } else {
              if (!!rowData.warning) {
                if (!!rowData.nok) {
                  return false;
                } else if (rowData.warning < rowData.ok) {
                  return false;
                }
              }
            }
            return true;
          };
          InfoSubAssemblyComponent.prototype.getSubAssemblyCounters = function(code) {
            var counter = 0;
            this.subAssemblys.forEach(function(res) {
              if (!!res.data) {
                if (code === res.data.icon) {
                  counter++;
                }
              }
            });
            return counter;
          };
          InfoSubAssemblyComponent.prototype.getQuotationCounters = function(code) {
            var counter = 0;
            this.technicalQuotationList.forEach(function(res) {
              if (code === res.targetResultMatchingIcon) {
                counter++;
              }
            });
            return counter;
          };
          /**********************************
           * IMAGE ILLUSTRATION DIALOG OPERATIONS
           **********************************/
          InfoSubAssemblyComponent.prototype.openImage = function(event) {
            this.openImageDialog = true;
            this.dialogImgSrc = event;
          };
          InfoSubAssemblyComponent.prototype.closeDialog = function() {
            this.openImageDialog = false;
          };
          /**********************************
           * LOAD TECHNICAL QUOTATION TABLE DATA
           **********************************/
          InfoSubAssemblyComponent.prototype.getTechnicalQuotation = function() {
            var _this = this;
            var input = {
              bireItemDTO: this.selectedBireItemDTO,
              projectNumber: !!this.projectNumber ? this.projectNumber : undefined,
              taskTypeCode: this.selectedTaskType
            };
            this.isTechnicalTableLoaded = true;
            this.cockpitInspectionFormService
              .getTechnicalQuotation(input)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['finalize'])(function() {
                  _this.isTechnicalTableLoaded = false;
                  if (!_this.subAssemblys || _this.subAssemblys.length === 0) {
                    _this.calculateProgressChartData();
                  }
                })
              )
              .subscribe(function(data) {
                var techQuotationData = data[0];
                _this.technicalQuotationDBList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__['cloneDeep'])(
                  techQuotationData.technicalQuotationList
                );
                _this.technicalQuotationList = _this.customizeTechnicalTableData(
                  techQuotationData.technicalQuotationList
                );
                if (!!techQuotationData.subAssemblies && techQuotationData.subAssemblies.length > 0) {
                  if (
                    !!techQuotationData.subAssemblies[0].children &&
                    techQuotationData.subAssemblies[0].children.length > 0
                  ) {
                    _this.subAssemblys = __spread(techQuotationData.subAssemblies[0].children);
                    _this.showSubAssemblyTree = true;
                  }
                }
                _this.loadItemInformation();
                _this.fillConfControlTable();
                _this.setPNAndWOList();
                _this.setAssemblySiblings();
              });
          };
          InfoSubAssemblyComponent.prototype.customizeTechnicalTableData = function(tableData) {
            var _this = this;
            var MAX_ELEMENT = 3;
            tableData.forEach(function(row, index) {
              row.index = index;
              if (!!row.iwbFindingsToDisplay) {
                if (row.iwbFindingsToDisplay.length > 0) {
                  var findings = row.iwbFindingsToDisplay;
                  row.iwbFindingsToDisplay = [];
                  row.iwbFindingsToDisplayHover = '';
                  findings.forEach(function(res) {
                    row.iwbFindingsToDisplay.push(
                      [
                        _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                          res.damageCode
                        )
                          ? ''
                          : res.damageCode,
                        _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                          res.quantity
                        )
                          ? ''
                          : res.quantity,
                        _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                          res.criticality
                        )
                          ? ''
                          : res.criticality
                      ]
                        .filter(function(s) {
                          return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isEmpty(s);
                        })
                        .join(' / ')
                    );
                    row.iwbFindingsToDisplayHover += [
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                        res.damageCode
                      )
                        ? ''
                        : res.damageCode,
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                        res.quantity
                      )
                        ? ''
                        : res.quantity,
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                        res.criticality
                      )
                        ? ''
                        : res.criticality,
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                        res.findingComment
                      )
                        ? '\n'
                        : res.findingComment + '\n'
                    ]
                      .filter(function(s) {
                        return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isEmpty(s);
                      })
                      .join(' / ');
                  });
                }
                if (row.iwbFindingsToDisplay.length > MAX_ELEMENT) {
                  row.iwbFindingsToDisplay = __spread(row.iwbFindingsToDisplay.slice(0, MAX_ELEMENT));
                  row.iwbFindingsToDisplay.push('[...]');
                }
              }
              if (!!row.iwbTask) {
                if (row.iwbTask.length > 0) {
                  var tasks = row.iwbTask;
                  row.iwbTask = [];
                  row.iwbTaskHover = '';
                  tasks.forEach(function(res) {
                    row.iwbTask.push(
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                        res.taskCode
                      )
                        ? ''
                        : res.taskCode
                    );
                    row.iwbTaskHover += [
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                        res.taskCode
                      )
                        ? ''
                        : res.taskCode,
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                        res.taskDescription
                      )
                        ? '\n'
                        : res.taskDescription + '\n'
                    ]
                      .filter(function(s) {
                        return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isEmpty(s);
                      })
                      .join(' / ');
                  });
                }
                if (row.iwbTask.length > MAX_ELEMENT) {
                  row.iwbTask = __spread(row.iwbTask.slice(0, MAX_ELEMENT));
                  row.iwbTask.push('[...]');
                }
              }
              // Handling for Other PN
              if (_this.availablePNList.indexOf(row.pn) === -1) {
                row.isOtherPN = true;
              }
            });
            return tableData;
          };
          // Loading ITEM Panel Information
          InfoSubAssemblyComponent.prototype.loadItemInformation = function() {
            this.selectedSubAssembly = __assign({}, this.selectedSubAssembly);
            if (!!this.selectedSubAssembly.itemFamilyCode) {
              this.itemFamily = this.selectedSubAssembly.itemFamilyCode;
              this.isSerialized =
                '' +
                (!!this.selectedSubAssembly
                  ? this.selectedSubAssembly.serializedPart
                    ? ' (' + this.translateService.instant(this.getTranslateKey('serialized')) + ')'
                    : ' (' + this.translateService.instant(this.getTranslateKey('notSerialized')) + ')'
                  : undefined);
              this.isItemSerialized = this.selectedSubAssembly.serializedPart;
            }
          };
          /**********************************
           * SETTING SIBLINGS LIST
           **********************************/
          InfoSubAssemblyComponent.prototype.setAssemblySiblings = function() {
            var _this = this;
            var input = {
              bireItemDTO: this.parentBireItem,
              projectNumber: this.projectNumber
            };
            this.cockpitInspectionFormService.getSubAssemblySiblingList(input).subscribe(function(data) {
              data.forEach(function(res) {
                if (!!res) {
                  var bireItemForTreeDTO = res.bireItemDTO;
                  bireItemForTreeDTO.expectedQuantity = _this.getExpectedQuantity(res);
                  bireItemForTreeDTO.realQuantity = _this.getRealQuantity(res);
                  bireItemForTreeDTO.bireDocumentDTO = res.bireDocumentDTO;
                  _this.siblingsList.push({
                    label: [
                      bireItemForTreeDTO.chapter,
                      bireItemForTreeDTO.section,
                      bireItemForTreeDTO.subject,
                      bireItemForTreeDTO.sheet,
                      bireItemForTreeDTO.marks
                    ].join('-'),
                    subtitle: bireItemForTreeDTO.name,
                    value: bireItemForTreeDTO,
                    data: res
                  });
                  _this.setSiblingSelection();
                }
              });
            });
          };
          InfoSubAssemblyComponent.prototype.setSiblingSelection = function() {
            var _this = this;
            // const data = this.breadcrumbsList[this.breadcrumbsList.length - 1].data as PageData;
            var bireItem = this.selectedBireItemDTO;
            this.siblingsList.forEach(function(res) {
              var item =
                bireItem.chapter +
                '-' +
                bireItem.section +
                '-' +
                bireItem.subject +
                '-' +
                bireItem.sheet +
                '-' +
                bireItem.marks;
              if (res.label === item) {
                _this.selectedSibling = res.value;
              }
            });
          };
          /**********************************
           * OPEN SUB ASSEMBLY
           **********************************/
          InfoSubAssemblyComponent.prototype.openSubAssembly = function(node) {
            var pageData = {
              parentBireItem: !!node.parent && !!node.parent.data ? node.parent.data : this.selectedBireItemDTO,
              selectedBireItem: node.bireItemDTO,
              selectedBireItemForTree: node.data,
              bsdeProjectDTO: this.bsdeProjectDTO
            };
            this.openItemChildren(pageData);
          };
          InfoSubAssemblyComponent.prototype.openItemChildren = function(item) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .MAI_INFO_SUB_ASSEMBLY_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read
            };
            if (!!item) {
              data.objectId = this.serializationService.serialize(item);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          InfoSubAssemblyComponent.prototype.openQuotationPanel = function() {
            this.isAddInventory = true;
            this.showAddQuotationPanel = true;
            var bireItem = this.subAssemblyPageData.selectedBireItemForTree;
            var item = {
              data: this.bsdeProjectDTO,
              subtittle: this.selectedSubAssembly.name,
              title:
                bireItem.chapter +
                '-' +
                bireItem.section +
                '-' +
                bireItem.subject +
                '-' +
                bireItem.sheet +
                '-' +
                bireItem.marks,
              bireItem: bireItem,
              index: -1,
              isAddInventory: this.isAddInventory,
              isFromInspection: true,
              inventoryList: []
            };
            this.openItemInventory(item);
          };
          InfoSubAssemblyComponent.prototype.hideEquipmentPanel = function() {
            this.showAddQuotationPanel = false;
          };
          InfoSubAssemblyComponent.prototype.editInventory = function() {
            var _this = this;
            this.inventories =
              !!this.selectedElements && this.selectedElements.length > 0
                ? this.selectedElements
                : this.technicalQuotationList;
            var inventoryList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__['cloneDeep'])(this.inventories);
            inventoryList.forEach(function(res) {
              res.icon = res.targetResultMatchingIcon;
              res.trackingNumber = res.tn;
              res.sentenceValue = !!res.sentenceValue ? _this.getSentenceValue(res.sentenceValue) : undefined;
              res.decisionValue = !!res.decisionValue ? _this.getDecisionValue(res.decisionValue) : undefined;
              res.serialized = !!_this.isItemSerialized;
            });
            this.isAddInventory = false;
            this.showAddQuotationPanel = true;
            var bireItem = this.subAssemblyPageData.selectedBireItemForTree;
            var item = {
              data: this.bsdeProjectDTO,
              subtittle: this.selectedSubAssembly.name,
              title:
                bireItem.chapter +
                '-' +
                bireItem.section +
                '-' +
                bireItem.subject +
                '-' +
                bireItem.sheet +
                '-' +
                bireItem.marks,
              bireItem: bireItem,
              index: -1,
              isAddInventory: this.isAddInventory,
              isFromInspection: true,
              inventoryList: inventoryList
            };
            this.openItemInventory(item);
          };
          InfoSubAssemblyComponent.prototype.openItemInventory = function(item) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .MAI_ITEM_INVENTORY,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read
            };
            if (!!item) {
              data.objectId = this.serializationService.serialize(item);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          InfoSubAssemblyComponent.prototype.openMeasure = function() {
            var bidoEquipment = {
              sn: this.isItemSerialized ? this.selectedElements[0].sn : undefined,
              pnCode: this.selectedElements[0].pn
            };
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .MAI_MEASURE_COMPONENT,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read
            };
            data.objectId = this.serializationService.serialize(bidoEquipment);
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /**********************************
           * EVENT ON LOADING ASSEMBLY'S SIBLINGS
           **********************************/
          InfoSubAssemblyComponent.prototype.loadSibling = function() {
            var _this = this;
            var node = {
              bireItemDTO: this.selectedSibling,
              data: this.selectedSibling
            };
            if (!!this.selectedSibling) {
              this.selectedSibling.itemFamilyCode = !!this.selectedSibling.itemFamilyCode
                ? this.familyCodeMap.filter(function(res) {
                    return _this.selectedSibling.itemFamilyCode === res.value;
                  })[0].label
                : undefined;
            }
            this.openSubAssembly(node);
          };
          /**********************************
           * OPEN PART NUMBER UC
           **********************************/
          InfoSubAssemblyComponent.prototype.openPartNumberLink = function(pnCode) {
            this.openPN(
              pnCode,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read
            );
          };
          InfoSubAssemblyComponent.prototype.openPN = function(objectId, openMode) {
            var labelKey =
              'transaction.' +
              _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                .ENG_PART_NUMBER_FORM;
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .ENG_PART_NUMBER_FORM,
              objectId: objectId,
              openMode: openMode
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /**********************************
           * OPEN WORK ORDER UC
           **********************************/
          InfoSubAssemblyComponent.prototype.openWorkOrderLink = function(rowData) {
            if (!!rowData.woId && !!rowData.woProjectId) {
              var workOrderDTOId = {
                woId: rowData.woId,
                projectId: rowData.woProjectId
              };
              this.openWorkOrder(
                workOrderDTOId,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read
              );
            }
          };
          InfoSubAssemblyComponent.prototype.openWorkOrder = function(wo, openModeWanted) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .MAI_WORK_ORDER_FORM,
              openMode: openModeWanted,
              objectId: this.serializationService.serialize(wo)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /**********************************
           * TABLE FILTER OPERATIONS
           **********************************/
          InfoSubAssemblyComponent.prototype.setSearchControlList = function() {
            var _this = this;
            var OK =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                .ICON_GREEN_LED_CODE;
            var NOK =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                .ICON_RED_LED_CODE;
            var WARNING =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                .ICON_YELLOW_LED_CODE;
            var alertNokKey = this.getTranslateKey('alertNok');
            var alertOkKey = this.getTranslateKey('alertOk');
            var alertWarningKey = this.getTranslateKey('alertWarning');
            this.translateService.get([alertNokKey, alertOkKey, alertWarningKey]).subscribe(function(results) {
              var alertNokLabel = results ? results[alertNokKey] : 'NOK';
              var alertOkLabel = results ? results[alertOkKey] : 'OK';
              var alertWarningLabel = results ? results[alertWarningKey] : 'WARNING';
              _this.configurationList = [
                {
                  label: alertOkLabel,
                  value: OK
                },
                {
                  label: alertWarningLabel,
                  value: WARNING
                },
                {
                  label: alertNokLabel,
                  value: NOK
                }
              ];
            });
          };
          /**********************************
           * SETTING DROPDOWN
           **********************************/
          InfoSubAssemblyComponent.prototype.setSearchSentenceDecisionList = function() {
            var _this = this;
            this.cockpitInspectionFormService.fetchSentenceList().subscribe(function(res) {
              _this.sentenceList = res;
            });
            this.cockpitInspectionFormService.fetchDecisionList().subscribe(function(res) {
              _this.decisionList = res;
            });
          };
          InfoSubAssemblyComponent.prototype.setPNAndWOList = function() {
            var _this = this;
            this.technicalQuotationList.forEach(function(res) {
              if (!!res && !!res.pn) {
                _this.pnList.push({
                  label: res.pn,
                  value: res.pn
                });
              }
              if (!!res.woCode) {
                _this.woCodeList.push({
                  label: res.woCode,
                  value: res.woCode
                });
              }
            });
          };
          /**********************************
           * TABLE FILTER OPERATIONS
           **********************************/
          InfoSubAssemblyComponent.prototype.filterWithCriteria = function() {
            if (Object.keys(this.searchCriteria).length === 0) {
              this.technicalQuotationList = this.customizeTechnicalTableData(
                Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__['cloneDeep'])(this.technicalQuotationDBList)
              );
            } else {
              this.searchQuotationGlobalFilterChanged.next();
            }
          };
          InfoSubAssemblyComponent.prototype.resetTableFilters = function() {
            this.searchCriteria = {};
          };
          InfoSubAssemblyComponent.prototype.setControlGlobalFilter = function() {
            var _this = this;
            this.resetTableFilters();
            this.searchQuotationGlobalFilterChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__['Subject']();
            this.searchQuotationGlobalFilterChanged
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['debounceTime'])(
                  InfoSubAssemblyComponent_1.SEARCH_TEXT_DEBOUNCE_TIME
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['takeUntil'])(this.unsubscribe)
              )
              .subscribe(function() {
                _this.updateQuotationTableDisplayed();
              });
          };
          InfoSubAssemblyComponent.prototype.matchFilters = function(row, searchCriteria) {
            var pn = searchCriteria.pn === row.pn;
            var wo = searchCriteria.wo === row.woCode;
            var decision;
            if (!!row.decision) {
              decision = !!searchCriteria.decision && searchCriteria.decision.indexOf(row.decision) > -1;
            }
            var sentence;
            if (!!row.sentenceValue) {
              var sentenceLabel = this.sentenceList.filter(function(res) {
                return res.label === row.sentenceValue;
              })[0].value;
              sentence = !!searchCriteria.sentence && searchCriteria.sentence.indexOf(sentenceLabel) > -1;
            }
            var control;
            if (!!row.targetResultMatchingIcon) {
              control = !!searchCriteria.control && searchCriteria.control.indexOf(row.targetResultMatchingIcon) > -1;
            }
            return pn || wo || decision || sentence || control;
          };
          InfoSubAssemblyComponent.prototype.updateQuotationTableDisplayed = function() {
            var _this = this;
            this.technicalQuotationList = [];
            this.technicalQuotationList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__['cloneDeep'])(
              this.technicalQuotationDBList
            );
            this.technicalQuotationList = this.customizeTechnicalTableData(
              this.technicalQuotationList.filter(function(elt) {
                return _this.matchFilters(elt, _this.searchCriteria);
              })
            );
          };
          InfoSubAssemblyComponent.prototype.getExpectedQuantity = function(rowData) {
            var qty = rowData.quantity;
            rowData.expectedQuantity =
              qty !== undefined && qty.split(' ').length === 2
                ? qty.split(' ')[1].substring(1, qty.split(' ')[1].length - 1)
                : qty === '0'
                ? qty
                : undefined;
            return rowData.expectedQuantity;
          };
          InfoSubAssemblyComponent.prototype.getRealQuantity = function(rowData) {
            var qty = rowData.quantity;
            rowData.realQuantity =
              qty !== undefined && qty.split(' ').length > 0 ? qty.split(' ')[0] : qty === '0' ? qty : undefined;
            return rowData.realQuantity;
          };
          /**********************************
           * CALCULATE PROGRESS CHART DATA
           **********************************/
          InfoSubAssemblyComponent.prototype.calculateProgressChartData = function() {
            var _this = this;
            this.completedNb = 0;
            this.notCompletedNb = 0;
            this.technicalQuotationList.forEach(function(res) {
              if (
                !!res.decision &&
                !!res.sentenceValue &&
                (res.decision !== InfoSubAssemblyComponent_1.LOST_INVENTORY ||
                  res.decision !== InfoSubAssemblyComponent_1.MISSING_ENTRY_INVENTORY)
              ) {
                _this.completedNb =
                  !_this.isItemSerialized && !!res.quantity && parseInt(res.quantity, 10) > 0
                    ? _this.completedNb + parseInt(res.quantity, 10)
                    : _this.completedNb + 1;
              } else {
                _this.notCompletedNb =
                  !_this.isItemSerialized && !!res.quantity && parseInt(res.quantity, 10) > 0
                    ? _this.notCompletedNb + parseInt(res.quantity, 10)
                    : _this.notCompletedNb + 1;
              }
            });
            // Handling for missing quantities
            if (
              !!this.selectedSubAssembly.expectedQuantity &&
              !!this.technicalQuotationList &&
              (this.technicalQuotationList.length < Number(this.selectedSubAssembly.expectedQuantity) ||
                this.technicalQuotationList.length < Number(this.selectedSubAssembly.realQuantity))
            ) {
              var totalInventoryQty = this.technicalQuotationList.reduce(function(acc, val) {
                return acc + parseInt(val.quantity, 10);
              }, 0);
              var missingQuantities =
                Number(this.selectedSubAssembly.expectedQuantity) > Number(this.selectedSubAssembly.realQuantity)
                  ? Number(this.selectedSubAssembly.expectedQuantity) - totalInventoryQty
                  : Number(this.selectedSubAssembly.realQuantity) - totalInventoryQty;
              this.notCompletedNb = this.notCompletedNb + missingQuantities;
            }
            this.chartData.datasets[0].data = [this.completedNb, this.notCompletedNb];
            this.chartData = __assign({}, this.chartData);
          };
          /*****************************************
           * Print Inventory as PDF
           ****************************************/
          InfoSubAssemblyComponent.prototype.printPDF = function() {
            var _this = this;
            var input = {
              bireItemDTO: this.selectedBireItemDTO,
              projectNumber: !!this.projectNumber ? this.projectNumber : undefined
            };
            this.showPrintSpinner = true;
            this.cockpitInspectionFormService
              .printPDF(input)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['finalize'])(function() {
                  _this.showPrintSpinner = false;
                })
              )
              .subscribe(
                function(res) {
                  if (!!res.fileContent) {
                    _this.downLoadFiles(res.fileContent, res.fileName);
                  }
                },
                function(error) {
                  var httpError = error;
                  if (!!httpError.error && !!httpError.error.errorDesc) {
                    _this.messageService.showErrorMessage(httpError.error.errorDesc);
                  }
                  _this.showPrintSpinner = false;
                }
              );
          };
          InfoSubAssemblyComponent.prototype.downLoadFiles = function(docFile, docName) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_19__['FileUtils'].downloadFile(docFile, docName);
          };
          /*********************************************
           * Fetch Sentence List
           *********************************************/
          InfoSubAssemblyComponent.prototype.getSentenceValue = function(label) {
            var dto = this.sentenceList.filter(function(res) {
              return res.label === label;
            });
            return !!dto && dto.length > 0 ? dto[0].value : undefined;
          };
          /*********************************************
           * Fetch Decision List
           *********************************************/
          InfoSubAssemblyComponent.prototype.getDecisionValue = function(label) {
            var dto = this.decisionList.filter(function(res) {
              return res.label === label;
            });
            return !!dto && dto.length > 0 ? dto[0].value : undefined;
          };
          /********************************************
           * Load PN list
           ********************************************/
          InfoSubAssemblyComponent.prototype.loadPNList = function() {
            var _this = this;
            var input = this.selectedBireItemDTO;
            this.cockpitInspectionFormService.getPartNumberStructure(input).subscribe(function(res) {
              if (!!res && res.length > 0) {
                res.forEach(function(dto) {
                  _this.availablePNList.push(dto.pn);
                });
              }
            });
          };
          var InfoSubAssemblyComponent_1;
          InfoSubAssemblyComponent.SEARCH_TEXT_DEBOUNCE_TIME = 500;
          InfoSubAssemblyComponent.OK = '9';
          InfoSubAssemblyComponent.WARNING = '11';
          InfoSubAssemblyComponent.NOK = '10';
          InfoSubAssemblyComponent.ALL_TYPES_LABEL = 'All Types';
          InfoSubAssemblyComponent.LOST_INVENTORY = '6-mis';
          InfoSubAssemblyComponent.MISSING_ENTRY_INVENTORY = '5-los';
          InfoSubAssemblyComponent = InfoSubAssemblyComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-info-sub-assembly',
                template: __webpack_require__(
                  /*! ./info-sub-assembly.component.html */ './src/app/main/maintenance/cockpit-inspection/form/info-sub-assembly/info-sub-assembly.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./info-sub-assembly.component.scss */ './src/app/main/maintenance/cockpit-inspection/form/info-sub-assembly/info-sub-assembly.component.scss'
                  ),
                  __webpack_require__(
                    /*! ../shared/shared.scss */ './src/app/main/maintenance/cockpit-inspection/form/shared/shared.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_11__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_15__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_17__['TabService'],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__['DomSanitizer'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_16__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_14__['PropertiesService'],
                _cockpit_inspection_form_service__WEBPACK_IMPORTED_MODULE_22__['CockpitInspectionFormService']
              ])
            ],
            InfoSubAssemblyComponent
          );
          return InfoSubAssemblyComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_18__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/shared/shared.scss':
      /*!*****************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/shared/shared.scss ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .alert {\n  display: inline-block;\n  max-width: 7rem;\n  text-transform: uppercase;\n  width: 100%;\n  font-weight: 600;\n  text-align: center;\n  width: 5rem;\n  margin-left: 0.6em; }\n\n:host .alert.alert--ok {\n    background-color: #4caf50; }\n\n:host .alert.alert--warning {\n    background-color: #ffc107; }\n\n:host .alert.alert--nok {\n    background-color: #f6685e; }\n\n:host .alert.alert--none {\n    background-color: #c8d4d6; }\n\n:host .custom-span {\n  color: #01579b; }\n\n:host .code {\n  display: inline-table; }\n\n:host .top {\n  margin-bottom: 2em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n:host ::ng-deep .name {\n  font-style: italic;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 15em; }\n\n:host .cursor-class {\n  cursor: pointer !important; }\n\n:host .action-buttons {\n  margin-bottom: 1em;\n  display: flex;\n  float: right; }\n\n:host .custom-row {\n  display: flex;\n  padding-bottom: 1em; }\n\n:host .expanded-img-class {\n  max-width: 100em;\n  max-height: 50em; }\n\n:host .custom-padding {\n  margin-right: 1em !important; }\n\n:host .table-filters-overlay {\n  display: flex;\n  flex-direction: row; }\n\n:host .table-filters-overlay .column {\n    margin: 0 16px; }\n\n:host .table-filters-overlay .filters {\n    display: flex;\n    flex-direction: column; }\n\n:host .table-filters-overlay .filters > * {\n      margin: 8px 0 !important; }\n\n:host .table-filters-overlay .filters .aw-dropdown {\n      overflow: visible !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb2NrcGl0LWluc3BlY3Rpb24vZm9ybS9zaGFyZWQvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9tb2RpZmllcnMuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb2NrcGl0LWluc3BlY3Rpb24vZm9ybS9zaGFyZWQvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFxjb2NrcGl0LWluc3BlY3Rpb25cXGZvcm1cXHNoYXJlZFxcc2hhcmVkLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29ja3BpdC1pbnNwZWN0aW9uL2Zvcm0vc2hhcmVkL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29ja3BpdC1pbnNwZWN0aW9uL2Zvcm0vc2hhcmVkL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsaUNBQWlDLEVBQUE7O0FBR25DO0VBQ0Usd0JBQXdCO0VBQ3hCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlDQUFpQztFQUFqQyxzQ0FBaUM7RUFBakMsaUNBQWlDLEVBQUE7O0FBR25DO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0Usb0NBQTRCO0tBQTVCLGlDQUE0QjtNQUE1QixnQ0FBNEI7VUFBNUIsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVyxFQUFBOztBQUtiO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0Usa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0Usa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0Usb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0Usc0NBQXNDLEVBQUE7O0FDekh4QztFQUVJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFUdEI7SUFZTSx5QkNLZ0IsRUFBQTs7QURqQnRCO0lBZ0JNLHlCQ0VVLEVBQUE7O0FEbEJoQjtJQW9CTSx5QkNBYyxFQUFBOztBRHBCcEI7SUF3Qk0seUJDRFMsRUFBQTs7QUR2QmY7RUE2QkksY0FBYyxFQUFBOztBQTdCbEI7RUFpQ0kscUJBQXFCLEVBQUE7O0FBakN6QjtFQXFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUF4Q3ZCO0VBNENJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBaERuQjtFQW9ESSwwQkFBMEIsRUFBQTs7QUFwRDlCO0VBd0RJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQTFEaEI7RUE4REksYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQS9EdkI7RUFtRUksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQXBFcEI7RUF3RUksNEJBQTRCLEVBQUE7O0FBeEVoQztFRW1CRSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FGcEJyQjtJQStFTSxjQUFjLEVBQUE7O0FBL0VwQjtJRWNFLGFBQWE7SUFDYixzQkFBc0IsRUFBQTs7QUZmeEI7TUFzRlEsd0JBQWtDLEVBQUE7O0FBdEYxQztNQTBGUSw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29ja3BpdC1pbnNwZWN0aW9uL2Zvcm0vc2hhcmVkL3NoYXJlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXktLWZsZXgtY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzcGxheS0tZmxleC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5LS1ub25lIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWlnaHQtLTEwMCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWluLXdpZHRoLS1maXQtY29udGVudCB7XHJcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9zaXRpb24tLXJlbGF0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjcm9sbC15LS1ub25lIHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtLXVuc2VsZWN0YWJsZSB7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpc2liaWxpdHktLWhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC0tMTAge1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi53aWR0aC0tMjAge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi53aWR0aC0tMzAge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNDAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNTAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNjAge1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNzAge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tODAge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tOTAge1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tMTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLmZsZXgtLTEge1xyXG4gIGZsZXg6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTIge1xyXG4gIGZsZXg6IDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTMge1xyXG4gIGZsZXg6IDMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTQge1xyXG4gIGZsZXg6IDQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTUge1xyXG4gIGZsZXg6IDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLWF1dG8ge1xyXG4gIGZsZXg6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1lbmQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLXN0YXJ0IHtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktZW5kIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1zdGFydCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJtb2RpZmllcnNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuYWxlcnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiA3cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1ub25lIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXkxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1zcGFuIHtcclxuICAgIGNvbG9yOiAjMDE1NzliO1xyXG4gIH1cclxuXHJcbiAgLmNvZGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gIH1cclxuXHJcbiAgLnRvcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5uYW1lIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXgtd2lkdGg6IDE1ZW07XHJcbiAgfVxyXG5cclxuICAuY3Vyc29yLWNsYXNzIHtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1idXR0b25zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICB9XHJcblxyXG4gIC5leHBhbmRlZC1pbWctY2xhc3Mge1xyXG4gICAgbWF4LXdpZHRoOiAxMDBlbTtcclxuICAgIG1heC1oZWlnaHQ6IDUwZW07XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXBhZGRpbmcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50YWJsZS1maWx0ZXJzLW92ZXJsYXkge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlcnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAgJiA+ICoge1xyXG4gICAgICAgIG1hcmdpbjogJG1hcmdpbi12YWx1ZSAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hdy1kcm9wZG93biB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVdGlscyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gYnV0dG9uLWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCAkY29sb3IsICRib3JkZXItY29sb3I6IG51bGwpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyLFxyXG4gICY6bm90KDpkaXNhYmxlZCkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogaWYoJGJvcmRlci1jb2xvciA9PSBudWxsLCAkY29sb3IsICRib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgtY29sdW1uKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtcm93KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQG1peGluIGlucHV0KCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1kaXNhYmxlZCgpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZm9jdXMoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1ob3ZlcigpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlYXJjaC1jcml0ZXJpYS1jb250YWluZXIge1xyXG4gIC5hZHZhbmNlZC1jcml0ZXJpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgICYucmVxdWlyZWQge1xyXG4gICAgICBAaW5jbHVkZSBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCgpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHcmlkIGZvcm0gY29udHJvbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViTWVkaXVtXCI7XHJcblxyXG4gICYgPiBpbnB1dCArIHAtbWVzc2FnZSA+IC51aS1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyNTUsIDI1NSwgMjU1KSA2MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAuYXctaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuLFxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG5cclxuICAgICAgJi5hdy1jYWxlbmRhciAudWktaW5wdXR0ZXh0LFxyXG4gICAgICAmLmF3LWRyb3Bkb3duIC51aS1kcm9wZG93bixcclxuICAgICAgJi5hdy1pbnB1dCxcclxuICAgICAgJi5hdy10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctY2FsZW5kYXIge1xyXG4gICAgICAvLyBGSVhNRTogZml4IGFuIFVJIGlzc3VlIG9uIFByaW1lTkcgY2FsZW5kYXIgY29tcG9uZW50OyB0byByZW1vdmUgd2hlbiBpc3N1ZSB3aWxsIGJlIGZpeGVkIHVwc3RyZWFtXHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAuYXctaWNvbjpub3QoLnJlYWQtb25seS1saW5rKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIG5vbmVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW5pbXAsXHJcbiAgICAuYnRuLWV4dGVybmFsLWxpbmstd3JhcHBlcixcclxuICAgIC5idG4tY2xlYXItd3JhcHBlcixcclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlcixcclxuICAgIC5idG4tc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgICAuYXctZmlsZXVwbG9hZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudWktYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWNsZWFyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtcmFkaW9idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAmID4gLmF3LXJhZGlvYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jYWxlbmRhciB7XHJcbiAgJi51aS1pbnB1dHdyYXBwZXItZm9jdXMge1xyXG4gICAgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkY2hlY2tib3gtaGVpZ2h0O1xyXG4gIHdpZHRoOiAkY2hlY2tib3gtaGVpZ2h0O1xyXG5cclxuICAudWktY2hrYm94IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1jaGtib3gtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZHJvcGRvd24ge1xyXG4gIC51aS1kcm9wZG93biB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1mb2N1cyB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbixcclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gICAgICByaWdodDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDEuNzVyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5maXhlZC13aWR0aCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZpbGV1cGxvYWQge1xyXG4gIEBleHRlbmQgLmF3LWJ0bjtcclxuXHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnVpLWZpbGV1cGxvYWQtY2hvb3NlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudWktYnV0dG9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWlucHV0KCkge1xyXG4gIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZXh0YXJlYSB7XHJcbiAgQGluY2x1ZGUgZ3JpZC1pbnB1dCgpO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1yYWRpb2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuICB3aWR0aDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuXHJcbiAgLnVpLXJhZGlvYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAudWktcmFkaW9idXR0b24taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGNhbGVuZGFyLXBhbmVsIHtcclxuICAudWktZGF0ZXBpY2tlcjpub3QoLnVpLWRhdGVwaWNrZXItaW5saW5lKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcm9wZG93bi1wYW5lbCB7XHJcbiAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciAudWktZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgIC51aS1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/sub-assembly-table-filters/sub-assembly-table-filters.component.html':
      /*!*******************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/sub-assembly-table-filters/sub-assembly-table-filters.component.html ***!
  \*******************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="grid-row">\r\n  <!-- COMPONENT COCKPIT PANEL -->\r\n  <div class="grid-cell--12">\r\n    <div class="grid-cell grid-cell--container grid-cell-scope">\r\n      <div class="grid-cell-content">\r\n        <div class="table-filters-overlay">\r\n          <div class="column">\r\n            <div class="filters">\r\n              <div class="form-group">\r\n                <label class="form-label"> &nbsp; </label>\r\n\r\n                <div class="form-control aw-selectbutton-wrapper">\r\n                  <p-selectButton\r\n                    [options]="progressList"\r\n                    multiple="multiple"\r\n                    [(ngModel)]="searchCriteria.progress"\r\n                  ></p-selectButton>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ getComponentName() + ".family" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="itemFamilyList"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [(ngModel)]="searchCriteria.family"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="column">\r\n            <div class="filters">\r\n              <div class="form-group">\r\n                <label class="form-label"> &nbsp; </label>\r\n\r\n                <div class="form-control aw-selectbutton-wrapper">\r\n                  <p-selectButton\r\n                    [options]="configurationList"\r\n                    multiple="multiple"\r\n                    [(ngModel)]="searchCriteria.configuration"\r\n                  ></p-selectButton>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="row action-buttons">\r\n        <button type="button" mat-raised-button class="custom-padding" (click)="reset()">\r\n          {{ getComponentName() + ".reset" | translate }}\r\n        </button>\r\n        <button type="button" mat-raised-button (click)="filter()">\r\n          {{ getComponentName() + ".filter" | translate }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/sub-assembly-table-filters/sub-assembly-table-filters.component.ts':
      /*!*****************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/sub-assembly-table-filters/sub-assembly-table-filters.component.ts ***!
  \*****************************************************************************************************************************/
      /*! exports provided: SubAssemblyTableFiltersComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SubAssemblyTableFiltersComponent',
          function() {
            return SubAssemblyTableFiltersComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

        var SubAssemblyTableFiltersComponent = /** @class */ (function(_super) {
          __extends(SubAssemblyTableFiltersComponent, _super);
          function SubAssemblyTableFiltersComponent(sessionService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write
              ) || this;
            _this.sessionService = sessionService;
            _this.init();
            return _this;
          }
          SubAssemblyTableFiltersComponent.prototype.getComponentName = function() {
            return 'SubAssemblyTableFiltersComponent';
          };
          SubAssemblyTableFiltersComponent.prototype.filter = function() {
            this.onFilter.emit();
          };
          SubAssemblyTableFiltersComponent.prototype.reset = function() {
            this.onReset.emit();
          };
          SubAssemblyTableFiltersComponent.prototype.init = function() {
            this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            SubAssemblyTableFiltersComponent.prototype,
            'progressList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            SubAssemblyTableFiltersComponent.prototype,
            'configurationList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            SubAssemblyTableFiltersComponent.prototype,
            'itemFamilyList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            SubAssemblyTableFiltersComponent.prototype,
            'searchCriteria',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            SubAssemblyTableFiltersComponent.prototype,
            'onFilter',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            SubAssemblyTableFiltersComponent.prototype,
            'onReset',
            void 0
          );
          SubAssemblyTableFiltersComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-sub-assembly-table-filters',
                template: __webpack_require__(
                  /*! ./sub-assembly-table-filters.component.html */ './src/app/main/maintenance/cockpit-inspection/form/sub-assembly-table-filters/sub-assembly-table-filters.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../shared/shared.scss */ './src/app/main/maintenance/cockpit-inspection/form/shared/shared.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__['SessionService']
              ])
            ],
            SubAssemblyTableFiltersComponent
          );
          return SubAssemblyTableFiltersComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_3__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/technical-quotation-table-filters/technical-quotation-table-filters.component.html':
      /*!*********************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/technical-quotation-table-filters/technical-quotation-table-filters.component.html ***!
  \*********************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div>\r\n  <div class="row flex--12 custom-row">\r\n    <div class="form-group flex--6 custom-padding">\r\n      <label class="form-label"> {{ getComponentName() + ".pn" | translate }} </label>\r\n\r\n      <div class="form-control aw-selectbutton-wrapper">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="pnList"\r\n          [showClear]="true"\r\n          [(ngModel)]="searchCriteria.pn"\r\n          placeholder="&nbsp;"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group flex--4">\r\n      <label class="form-label"> {{ getComponentName() + ".wo" | translate }} </label>\r\n\r\n      <div class="form-control aw-selectbutton-wrapper">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="woCodeList"\r\n          [(ngModel)]="searchCriteria.wo"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row flex--12 custom-row">\r\n    <div class="form-group flex--6 custom-padding">\r\n      <label class="form-label"> {{ getComponentName() + ".sentence" | translate }} </label>\r\n\r\n      <div class="form-control aw-selectbutton-wrapper">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="sentenceList"\r\n          [(ngModel)]="searchCriteria.sentence"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group flex--6">\r\n      <label class="form-label"> {{ getComponentName() + ".decision" | translate }} </label>\r\n\r\n      <div class="form-control aw-selectbutton-wrapper">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="decisionList"\r\n          [(ngModel)]="searchCriteria.decision"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row flex--12">\r\n    <div class="form-group flex--4">\r\n      <label class="form-label"> &nbsp; </label>\r\n\r\n      <div class="form-control aw-selectbutton-wrapper">\r\n        <p-selectButton\r\n          [options]="configurationList"\r\n          multiple="multiple"\r\n          [(ngModel)]="searchCriteria.control"\r\n        ></p-selectButton>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row action-buttons">\r\n    <button type="button" mat-raised-button class="custom-padding" (click)="reset()">\r\n      {{ getComponentName() + ".reset" | translate }}\r\n    </button>\r\n    <button type="button" mat-raised-button (click)="filter()">\r\n      {{ getComponentName() + ".filter" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/technical-quotation-table-filters/technical-quotation-table-filters.component.ts':
      /*!*******************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/technical-quotation-table-filters/technical-quotation-table-filters.component.ts ***!
  \*******************************************************************************************************************************************/
      /*! exports provided: TechnicalQuotationTableFiltersComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'TechnicalQuotationTableFiltersComponent',
          function() {
            return TechnicalQuotationTableFiltersComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

        var TechnicalQuotationTableFiltersComponent = /** @class */ (function(_super) {
          __extends(TechnicalQuotationTableFiltersComponent, _super);
          function TechnicalQuotationTableFiltersComponent(sessionService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write
              ) || this;
            _this.sessionService = sessionService;
            _this.init();
            return _this;
          }
          TechnicalQuotationTableFiltersComponent_1 = TechnicalQuotationTableFiltersComponent;
          TechnicalQuotationTableFiltersComponent.prototype.getComponentName = function() {
            return 'TechnicalQuotationTableFiltersComponent';
          };
          TechnicalQuotationTableFiltersComponent.prototype.filter = function() {
            this.onFilter.emit();
          };
          TechnicalQuotationTableFiltersComponent.prototype.reset = function() {
            this.onReset.emit();
          };
          TechnicalQuotationTableFiltersComponent.prototype.init = function() {
            this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.configurationList = [];
            this.configurationList.push(
              { label: 'OK', value: TechnicalQuotationTableFiltersComponent_1.OK },
              { label: 'WARNING', value: TechnicalQuotationTableFiltersComponent_1.WARNING },
              { label: 'NOK', value: TechnicalQuotationTableFiltersComponent_1.NOK }
            );
          };
          var TechnicalQuotationTableFiltersComponent_1;
          TechnicalQuotationTableFiltersComponent.OK =
            _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_1__[
              'ControlConfigConstants'
            ].ICON_GREEN;
          TechnicalQuotationTableFiltersComponent.WARNING =
            _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_1__[
              'ControlConfigConstants'
            ].ICON_YELLOW;
          TechnicalQuotationTableFiltersComponent.NOK =
            _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_1__['ControlConfigConstants'].ICON_RED;
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            TechnicalQuotationTableFiltersComponent.prototype,
            'decisionList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            TechnicalQuotationTableFiltersComponent.prototype,
            'sentenceList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            TechnicalQuotationTableFiltersComponent.prototype,
            'configurationList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            TechnicalQuotationTableFiltersComponent.prototype,
            'pnList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            TechnicalQuotationTableFiltersComponent.prototype,
            'woCodeList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            TechnicalQuotationTableFiltersComponent.prototype,
            'searchCriteria',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            TechnicalQuotationTableFiltersComponent.prototype,
            'onFilter',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            TechnicalQuotationTableFiltersComponent.prototype,
            'onReset',
            void 0
          );
          TechnicalQuotationTableFiltersComponent = TechnicalQuotationTableFiltersComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-technical-quotation-table-filters',
                template: __webpack_require__(
                  /*! ./technical-quotation-table-filters.component.html */ './src/app/main/maintenance/cockpit-inspection/form/technical-quotation-table-filters/technical-quotation-table-filters.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../shared/shared.scss */ './src/app/main/maintenance/cockpit-inspection/form/shared/shared.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__['SessionService']
              ])
            ],
            TechnicalQuotationTableFiltersComponent
          );
          return TechnicalQuotationTableFiltersComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_4__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/tree-sub-assembly/tree-sub-assembly.component.html':
      /*!*************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/tree-sub-assembly/tree-sub-assembly.component.html ***!
  \*************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="lds-hourglass loader" *ngIf="treePanelLoading"></div>\r\n<p-treeTable\r\n  #ptreetableStructure\r\n  class="aw-tree-table2"\r\n  [columns]="structureTableCols"\r\n  [value]="itemStructureDisplayed"\r\n  [(selection)]="itemStructureNodeSelected"\r\n  selectionMode="checkBox"\r\n  [scrollable]="true"\r\n  [resizableColumns]="true"\r\n>\r\n  <ng-template pTemplate="emptymessage">\r\n    <span *ngIf="!isLoadingStructureTable"> &nbsp;</span>\r\n\r\n    <div *ngIf="isLoadingStructureTable" class="aw-table-loading-indicator">\r\n      <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n      <div class="lds-hourglass"></div>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate="caption">\r\n    <div class="aw-table-header" [ngClass]="{ \'rows-selected\': itemStructureNodeSelected.length > 0 }">\r\n      <div class="aw-table-global-filter">\r\n        <label class="aw-table-global-filter-label">\r\n          <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n        </label>\r\n\r\n        <input\r\n          #ptreetableStructureGlobalFilter\r\n          class="aw-table-global-filter-input"\r\n          type="text"\r\n          placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n          (input)="ptreetableStructure.filterGlobal($event.target.value, \'contains\')"\r\n        />\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate="caption">\r\n    <div class="aw-table-header" [ngClass]="{ \'rows-selected\': itemStructureNodeSelected.length > 0 }">\r\n      <div class="aw-table-global-filter">\r\n        <label class="aw-table-global-filter-label">\r\n          <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n        </label>\r\n\r\n        <input\r\n          #ptreetableStructureGlobalFilter\r\n          class="aw-table-global-filter-input"\r\n          type="text"\r\n          placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n          [(ngModel)]="searchGlobalFilter"\r\n          (ngModelChange)="filterTextWithCriteria()"\r\n        />\r\n      </div>\r\n\r\n      <div class="aw-table-icon-actions">\r\n        <i\r\n          class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n          aria-hidden="true"\r\n          [ngClass]="{ active: filtersVisible }"\r\n          (click)="opFilters.toggle($event)"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate="colgroup" let-columns>\r\n    <colgroup>\r\n      <col class="aw-table-checkbox-wrapper" />\r\n      <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n    </colgroup>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate="header" let-columns>\r\n    <tr>\r\n      <th class="aw-table-checkbox-wrapper">\r\n        <p-treeTableHeaderCheckbox class="aw-table-checkbox"></p-treeTableHeaderCheckbox>\r\n      </th>\r\n\r\n      <th ttResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n        <span *ngIf="col.field !== \'action\'">\r\n          {{ getComponentName() + "." + col.field | translate }}\r\n        </span>\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">\r\n    <tr>\r\n      <td class="aw-table-checkbox-wrapper">\r\n        <p-treeTableCheckbox class="aw-table-checkbox" [value]="rowNode"></p-treeTableCheckbox>\r\n      </td>\r\n\r\n      <td *ngFor="let col of columns; let i = index" [ngSwitch]="col.field">\r\n        <p-treeTableToggler [rowNode]="rowNode" *ngIf="i == 0"></p-treeTableToggler>\r\n\r\n        <!-- ITEM -->\r\n        <span *ngSwitchCase="\'item\'">\r\n          <div class="item-class">\r\n            <div (click)="openItemUC(rowData)">\r\n              <a\r\n                >{{ rowData.chapter }}-{{ rowData.section }}-{{ rowData.subject }}-{{ rowData.sheet }}-{{\r\n                  rowData.marks\r\n                }}</a\r\n              >\r\n            </div>\r\n            <div class="name" title="{{ rowData.name }}">\r\n              {{ rowData.name }}\r\n            </div>\r\n          </div>\r\n        </span>\r\n\r\n        <!-- Function Data -->\r\n        <span *ngSwitchCase="\'functionData\'">\r\n          <div>\r\n            {{ getComponentName() + ".functionCode" | translate }}:\r\n            <b class="padding-class">{{ rowData.functionCode }}</b>\r\n          </div>\r\n          <div>\r\n            {{ getComponentName() + ".itemNumber" | translate }}:\r\n            <b class="padding-class">{{ rowData.itemNumber }}</b>\r\n          </div>\r\n        </span>\r\n\r\n        <!-- ITEM FAMILY -->\r\n        <span *ngSwitchCase="\'itemFamilyCode\'">\r\n          <div>\r\n            <b>{{ rowData["itemFamilyCode"] }}</b>\r\n          </div>\r\n          <div *ngIf="rowData[\'serializedPart\']">\r\n            {{ getComponentName() + ".serialized" | translate }}\r\n          </div>\r\n          <div *ngIf="!rowData[\'serializedPart\']">\r\n            {{ getComponentName() + ".notSerialized" | translate }}\r\n          </div>\r\n        </span>\r\n\r\n        <!-- Quantity -->\r\n        <span *ngSwitchCase="\'quantity\'">\r\n          <div>\r\n            {{ getComponentName() + ".expected" | translate }}:\r\n            <b class="padding-class">{{ getExpectedQuantity(rowData) }}</b>\r\n          </div>\r\n          <div>\r\n            {{ getComponentName() + ".real" | translate }}:\r\n            <b class="padding-class">{{ getRealQuantity(rowData) }}</b>\r\n          </div>\r\n        </span>\r\n\r\n        <!-- PROGRESS -->\r\n        <span *ngSwitchCase="\'progress\'">\r\n          <div class="table-cell progress">\r\n            <span>\r\n              <p-progressBar [value]="calculateItemProgress(rowData)"></p-progressBar>\r\n            </span>\r\n          </div>\r\n        </span>\r\n\r\n        <!-- ILLUSTRATION TEST -->\r\n        <span *ngSwitchCase="\'illustration\'">\r\n          <div class="illustration">\r\n            <img\r\n              class="img-class"\r\n              *ngIf="!!rowData.bireDocumentDTO && !!rowData.bireDocumentDTO.docFile"\r\n              [src]="rowData.additionalData"\r\n              (click)="openImage(rowData.additionalData)"\r\n            />\r\n          </div>\r\n        </span>\r\n\r\n        <!-- CONFIGURATION -->\r\n        <span *ngSwitchCase="\'configuration\'">\r\n          <div [style.textAlign]="col.alignment">\r\n            <span\r\n              *ngIf="rowData[\'icon\'] === controlConfigConstants.ICON_RED"\r\n              class="alert alert--nok"\r\n              pTooltip="{{ rowData[\'errorMessage\'] }}"\r\n            >\r\n              {{ getComponentName() + ".alertNok" | translate }}\r\n            </span>\r\n            <span *ngIf="rowData[\'icon\'] === controlConfigConstants.ICON_GREEN" class="alert alert--ok">\r\n              {{ getComponentName() + ".alertOk" | translate }}\r\n            </span>\r\n          </div>\r\n        </span>\r\n\r\n        <!-- ACTION -->\r\n        <span *ngSwitchCase="\'action\'">\r\n          <div class="action-button">\r\n            <button type="button" mat-raised-button (click)="openSubAssembly(rowNode)">\r\n              <span>{{ "global.open" | translate }}</span>\r\n            </button>\r\n          </div>\r\n        </span>\r\n\r\n        <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-treeTable>\r\n\r\n<!-- Filter -->\r\n<p-overlayPanel\r\n  #opFilters\r\n  [appendTo]="\'body\'"\r\n  class="aw-overlay"\r\n  (onShow)="filtersVisible = true"\r\n  (onHide)="filtersVisible = false"\r\n>\r\n  <aw-sub-assembly-table-filters\r\n    [progressList]="progressList"\r\n    [configurationList]="configurationList"\r\n    [itemFamilyList]="itemFamiliesList"\r\n    [(searchCriteria)]="searchCriteria"\r\n    (onFilter)="opFilters.hide(); filtersVisible = false; filterWithCriteria()"\r\n    (onReset)="resetTableFilters()"\r\n  ></aw-sub-assembly-table-filters>\r\n</p-overlayPanel>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/tree-sub-assembly/tree-sub-assembly.component.scss':
      /*!*************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/tree-sub-assembly/tree-sub-assembly.component.scss ***!
  \*************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .list-with-details .details,\n:host .list-with-details .list {\n  max-height: 50rem; }\n\n:host .list-with-details .details {\n  flex-grow: 1; }\n\n:host .list-with-details .details .item-structure-node-action-list {\n    justify-content: flex-end; }\n\n:host .list-with-details .details .item-structure-node-action-list > button {\n      margin-right: 8px; }\n\n:host .list-with-details .details .item-structure-node-action-list > button:last-of-type {\n        margin-right: 0; }\n\n:host .list-with-details .details .item-structure-node-image > img {\n    max-width: 100%;\n    min-width: 100%; }\n\n:host .list-with-details .list {\n  min-width: 25rem; }\n\n:host ::ng-deep .chapter {\n  display: inline-block;\n  color: #01579b;\n  font-weight: 600; }\n\n:host ::ng-deep .info {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n:host .illustration {\n  text-align: center; }\n\n:host .img-class {\n  max-height: 3rem;\n  cursor: pointer; }\n\n:host /deep/ p-progressbar.pla .ui-progressbar-value {\n  background: #c8d4d6; }\n\n:host /deep/ p-progressbar.ong .ui-progressbar-value {\n  background: #b8d0e8; }\n\n:host /deep/ p-progressbar.tbc .ui-progressbar-value {\n  background: #b8d0e8; }\n\n:host /deep/ p-progressbar.per .ui-progressbar-value {\n  background: #006ea9; }\n\n:host /deep/ p-progressbar.clo .ui-progressbar-value {\n  background: #4caf50; }\n\n:host /deep/ p-progressbar.pos .ui-progressbar-value {\n  background: #4caf50; }\n\n:host /deep/ p-progressbar.por .ui-progressbar-value {\n  background: #dddf00; }\n\n:host .loader {\n  position: absolute;\n  right: 2em;\n  z-index: 1000;\n  top: 1.5em; }\n\n:host .item-class {\n  display: inline-grid; }\n\n:host .action-button {\n  width: 50%;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb2NrcGl0LWluc3BlY3Rpb24vZm9ybS90cmVlLXN1Yi1hc3NlbWJseS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX21vZGlmaWVycy5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2NvY2twaXQtaW5zcGVjdGlvbi9mb3JtL3RyZWUtc3ViLWFzc2VtYmx5L2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxcY29ja3BpdC1pbnNwZWN0aW9uXFxmb3JtXFx0cmVlLXN1Yi1hc3NlbWJseVxcdHJlZS1zdWItYXNzZW1ibHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29ja3BpdC1pbnNwZWN0aW9uL2Zvcm0vdHJlZS1zdWItYXNzZW1ibHkvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUNBQWlDO0VBQWpDLHNDQUFpQztFQUFqQyxpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxvQ0FBNEI7S0FBNUIsaUNBQTRCO01BQTVCLGdDQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUE7O0FBS2I7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxzQ0FBc0MsRUFBQTs7QUN6SHhDOztFQUlNLGlCQUFpQixFQUFBOztBQUp2QjtFQVFNLFlBQVksRUFBQTs7QUFSbEI7SUFXUSx5QkFBeUIsRUFBQTs7QUFYakM7TUFjVSxpQkMwQlEsRUFBQTs7QUR4Q2xCO1FBaUJZLGVBQWUsRUFBQTs7QUFqQjNCO0lBd0JVLGVBQWU7SUFDZixlQUFlLEVBQUE7O0FBekJ6QjtFQStCTSxnQkFBZ0IsRUFBQTs7QUEvQnRCO0VBb0NJLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBdENwQjtFQTBDSSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQTVDdkI7RUFnREksa0JBQWtCLEVBQUE7O0FBaER0QjtFQW9ESSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQXJEbkI7RUF5REksbUJDbENXLEVBQUE7O0FEdkJmO0VBNERJLG1CQ3ZDaUIsRUFBQTs7QURyQnJCO0VBK0RJLG1CQzFDaUIsRUFBQTs7QURyQnJCO0VBa0VJLG1CQzVDZ0IsRUFBQTs7QUR0QnBCO0VBcUVJLG1CQ3BEa0IsRUFBQTs7QURqQnRCO0VBd0VJLG1CQ3ZEa0IsRUFBQTs7QURqQnRCO0VBMkVJLG1CQ25EYSxFQUFBOztBRHhCakI7RUErRUksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsVUFBVSxFQUFBOztBQWxGZDtFQXNGSSxvQkFBb0IsRUFBQTs7QUF0RnhCO0VBMEZJLFVBQVU7RUFDVixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2NvY2twaXQtaW5zcGVjdGlvbi9mb3JtL3RyZWUtc3ViLWFzc2VtYmx5L3RyZWUtc3ViLWFzc2VtYmx5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXktLWZsZXgtY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzcGxheS0tZmxleC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5LS1ub25lIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWlnaHQtLTEwMCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWluLXdpZHRoLS1maXQtY29udGVudCB7XHJcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9zaXRpb24tLXJlbGF0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjcm9sbC15LS1ub25lIHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtLXVuc2VsZWN0YWJsZSB7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpc2liaWxpdHktLWhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC0tMTAge1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi53aWR0aC0tMjAge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi53aWR0aC0tMzAge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNDAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNTAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNjAge1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNzAge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tODAge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tOTAge1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tMTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLmZsZXgtLTEge1xyXG4gIGZsZXg6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTIge1xyXG4gIGZsZXg6IDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTMge1xyXG4gIGZsZXg6IDMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTQge1xyXG4gIGZsZXg6IDQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTUge1xyXG4gIGZsZXg6IDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLWF1dG8ge1xyXG4gIGZsZXg6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1lbmQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLXN0YXJ0IHtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktZW5kIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1zdGFydCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJtb2RpZmllcnNcIjtcclxuXHJcbjpob3N0IHtcclxuICAubGlzdC13aXRoLWRldGFpbHMge1xyXG4gICAgLmRldGFpbHMsXHJcbiAgICAubGlzdCB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDUwcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWxzIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICAgLml0ZW0tc3RydWN0dXJlLW5vZGUtYWN0aW9uLWxpc3Qge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgICYgPiBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLml0ZW0tc3RydWN0dXJlLW5vZGUtaW1hZ2Uge1xyXG4gICAgICAgICYgPiBpbWcge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5saXN0IHtcclxuICAgICAgbWluLXdpZHRoOiAyNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuY2hhcHRlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogIzAxNTc5YjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLmluZm8ge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIC5pbGx1c3RyYXRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmltZy1jbGFzcyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgL2RlZXAvIHAtcHJvZ3Jlc3NiYXIucGxhIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ3JleTE7XHJcbiAgfVxyXG4gIC9kZWVwLyBwLXByb2dyZXNzYmFyLm9uZyAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZDogJGJsdWUtbGlnaHQxO1xyXG4gIH1cclxuICAvZGVlcC8gcC1wcm9ncmVzc2Jhci50YmMgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICRibHVlLWxpZ2h0MTtcclxuICB9XHJcbiAgL2RlZXAvIHAtcHJvZ3Jlc3NiYXIucGVyIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZS1kYXJrMTtcclxuICB9XHJcbiAgL2RlZXAvIHAtcHJvZ3Jlc3NiYXIuY2xvIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ3JlZW4tbGlnaHQxO1xyXG4gIH1cclxuICAvZGVlcC8gcC1wcm9ncmVzc2Jhci5wb3MgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICRncmVlbi1saWdodDE7XHJcbiAgfVxyXG4gIC9kZWVwLyBwLXByb2dyZXNzYmFyLnBvciAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZDogJHllbGxvdzE7XHJcbiAgfVxyXG5cclxuICAubG9hZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyZW07XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgdG9wOiAxLjVlbTtcclxuICB9XHJcblxyXG4gIC5pdGVtLWNsYXNzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/maintenance/cockpit-inspection/form/tree-sub-assembly/tree-sub-assembly.component.ts':
      /*!***********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/cockpit-inspection/form/tree-sub-assembly/tree-sub-assembly.component.ts ***!
  \***********************************************************************************************************/
      /*! exports provided: TreeSubAssemblyComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'TreeSubAssemblyComponent',
          function() {
            return TreeSubAssemblyComponent;
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
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_image_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../../shared/utils/image-utils */ './src/app/shared/utils/image-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _cockpit_inspection_form_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../cockpit-inspection-form.service */ './src/app/main/maintenance/cockpit-inspection/form/cockpit-inspection-form.service.ts'
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

        var TreeSubAssemblyComponent = /** @class */ (function(_super) {
          __extends(TreeSubAssemblyComponent, _super);
          function TreeSubAssemblyComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            domSanitizer,
            sessionService,
            translateService,
            cockpitInspectionFormService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.domSanitizer = domSanitizer;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.cockpitInspectionFormService = cockpitInspectionFormService;
            _this.propertiesService = propertiesService;
            _this.controlConfigConstants =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants'];
            _this.openImageEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.openSubAssemblyEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.renderProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.bireItemDTOEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          TreeSubAssemblyComponent_1 = TreeSubAssemblyComponent;
          TreeSubAssemblyComponent.prototype.getComponentName = function() {
            return 'TreeSubAssemblyComponent';
          };
          TreeSubAssemblyComponent.prototype.ngOnInit = function() {
            this.itemStructureNodeSelected = [];
            this.searchCriteria = {};
            this.progressCounter = {
              completed: 0,
              notCompleted: 0
            };
            this.init();
          };
          TreeSubAssemblyComponent.prototype.init = function() {
            this.setControlGlobalFilter();
            this.setSearchControlList();
            this.setSearchFamiliesList();
            this.setSearchProgressList();
            this.renderTreeTableColumns();
            this.fetchDropdown();
          };
          /**********************************
           * INIT DROPDOWNS
           **********************************/
          TreeSubAssemblyComponent.prototype.fetchDropdown = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .ITEM_FAMILY_CODE_MAP
              )
              .subscribe(function(res) {
                _this.familyCodeMap = res;
                if (!!_this.bsdeProjectDTO.projectPn) {
                  if (!!_this.subAssemblys && _this.subAssemblys.length > 0) {
                    _this.itemStructureDisplayed = _this.buildTree(_this.subAssemblys);
                    _this.itemStructureDisplayed = _this.emptyChildrens(_this.itemStructureDisplayed);
                    _this.acTreeData = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__['cloneDeep'])(_this.acTreeData);
                    if (_this.itemStructureDisplayed.length > 0) {
                      _this.itemStructureDisplayed[0].expanded = true;
                    }
                    _this.calculateChart();
                  } else {
                    _this.fetchTreeStructure();
                  }
                }
              });
          };
          // When on Info screen, remove the childrens for tree
          TreeSubAssemblyComponent.prototype.emptyChildrens = function(treeNode) {
            treeNode.forEach(function(node) {
              return (node.children = []);
            });
            return treeNode;
          };
          /**********************************
           * TREE TABLE COLUMNS
           **********************************/
          TreeSubAssemblyComponent.prototype.renderTreeTableColumns = function() {
            this.structureTableCols = [
              { field: 'item', alignment: 'left', width: '20%' },
              { field: 'functionData', alignment: 'left', width: '15%' },
              { field: 'itemFamilyCode', alignment: 'left', width: '10%' },
              { field: 'progress', alignment: 'center', width: '15%' },
              { field: 'quantity', alignment: 'left', width: '10%' },
              { field: 'configuration', alignment: 'center', width: '10%' },
              { field: 'illustration', alignment: 'center', width: '10%' },
              { field: 'action', alignment: 'center', width: '10%' }
            ];
          };
          /**********************************
           * RENDER TREE
           **********************************/
          TreeSubAssemblyComponent.prototype.fetchTreeStructure = function() {
            var _this = this;
            if (!!this.bsdeProjectDTO.projectPn && !!this.bsdeProjectDTO.projectSn) {
              var input = {
                projectNumber: this.bsdeProjectDTO.projectNumber,
                repairCenterCode: this.bsdeProjectDTO.repairCenterCode,
                taskTypeCode: this.bsdeProjectDTO.taskTypeCode
              };
              this.treePanelLoading = true;
              this.cockpitInspectionFormService
                .getCockpitInspection(input)
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['finalize'])(function() {
                    _this.treePanelLoading = false;
                    _this.calculateChart();
                  })
                )
                .subscribe(function(result) {
                  _this.itemStructureDisplayed = _this.buildTree(result);
                  _this.calculateProgressChartData(_this.itemStructureDisplayed);
                  if (_this.itemStructureDisplayed.length > 0) {
                    _this.itemStructureDisplayed[0].expanded = true;
                    _this.bireItemDTOEmitter.emit(_this.itemStructureDisplayed[0].bireItemDTO);
                  }
                  _this.acTreeData = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__['cloneDeep'])(result);
                });
            }
          };
          TreeSubAssemblyComponent.prototype.calculateChart = function() {
            this.progressCounter = {
              completed: 0,
              notCompleted: 0
            };
            this.calculateProgressChartData(this.itemStructureDisplayed);
            this.renderProgress.emit(this.progressCounter); // Emitting with default values
          };
          TreeSubAssemblyComponent.prototype.buildTree = function(data) {
            var _this = this;
            var toReturn = [];
            if (!!data) {
              data.forEach(function(elt) {
                var eleClone = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__['cloneDeep'])(elt.data);
                if (!!eleClone) {
                  if (!!eleClone.itemFamilyCode) {
                    var dto = _this.familyCodeMap.filter(function(res) {
                      return eleClone.itemFamilyCode === res.value;
                    })[0];
                    if (!!dto) {
                      eleClone.itemFamilyCode = dto.label;
                    }
                  }
                  if (!!eleClone.bireDocumentDTO && eleClone.bireDocumentDTO.docFile) {
                    eleClone.additionalData = _this.loadItemStructureNodeIllustrationList(eleClone);
                  }
                  if (!!elt.sentenceAndDecisionList && elt.sentenceAndDecisionList.length > 0) {
                    elt.sentenceAndDecisionList.forEach(function(res) {
                      if (
                        !!res.decision &&
                        !!res.sentence &&
                        (res.decision !==
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__[
                            'AWPropertiesConstants'
                          ].SENTENCE_BBIS_ENTRY_MISSING_KEY ||
                          res.decision !==
                            _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__[
                              'AWPropertiesConstants'
                            ].SENTENCE_BBIS_LOST_KEY)
                      ) {
                        if (eleClone.totalCompletedInventory === undefined) {
                          eleClone.totalCompletedInventory = 0;
                        }
                        eleClone.totalCompletedInventory =
                          !eleClone.serializedPart && !!res.quantity && parseInt(res.quantity, 10) > 0
                            ? eleClone.totalCompletedInventory + parseInt(res.quantity, 10)
                            : eleClone.totalCompletedInventory + 1;
                      }
                    });
                  }
                }
                toReturn.push({
                  data: eleClone,
                  children: _this.buildTree(
                    _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils'].orEmpty(elt.children)
                  ),
                  bireItemDTO: elt.bireItemDTO,
                  sentenceAndDecisionList: elt.sentenceAndDecisionList,
                  expanded: !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                    _this.searchGlobalFilter
                  )
                });
              });
            }
            return toReturn;
          };
          /**********************************
           * Load Image
           **********************************/
          TreeSubAssemblyComponent.prototype.loadItemStructureNodeIllustrationList = function(result) {
            var doc = result.bireDocumentDTO;
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              '' +
                _shared_utils_image_utils__WEBPACK_IMPORTED_MODULE_19__['ImageUtils'].getBase64Prefix(doc.docType) +
                doc.docFile
            );
          };
          /**********************************
           * CALCULATE PERCENTAGE
           **********************************/
          TreeSubAssemblyComponent.prototype.calculateItemProgress = function(data) {
            var PERCENT = 100;
            var expectedQty = this.getExpectedQuantity(data);
            var realQty = this.getRealQuantity(data);
            if (realQty === '0') {
              return 0;
            } else if (realQty !== undefined && expectedQty !== undefined && parseInt(realQty, 10) > 0) {
              var val = ((parseInt(expectedQty, 10) - parseInt(realQty, 10)) / parseInt(expectedQty, 10)) * PERCENT;
              return val < 0 ? 0 : val;
            }
            return 0;
          };
          /**********************************
           * CALCULATE PROGRESS CHART DATA
           **********************************/
          TreeSubAssemblyComponent.prototype.calculateProgressChartData = function(data) {
            var _this = this;
            data.forEach(function(elt) {
              if (!!elt && !!elt.data) {
                var expectedQty = _this.getExpectedQuantity(elt.data) || '0';
                var realQty = _this.getRealQuantity(elt.data) || '0';
                _this.progressCounter.completed += elt.data.totalCompletedInventory;
                if (
                  (expectedQty != undefined && parseInt(expectedQty, 10) > parseInt(realQty, 10)) ||
                  parseInt(expectedQty, 10) === parseInt(realQty, 10)
                ) {
                  _this.progressCounter.notCompleted +=
                    parseInt(expectedQty, 10) - (elt.data.totalCompletedInventory || 0);
                }
                if (realQty != undefined && parseInt(expectedQty, 10) < parseInt(realQty, 10)) {
                  _this.progressCounter.notCompleted += parseInt(realQty, 10) - (elt.data.totalCompletedInventory || 0);
                }
              }
              if (!!elt.children && elt.children.length > 0) {
                _this.calculateProgressChartData(elt.children);
              }
            });
          };
          /**********************************
           * IMAGE ILLUSTRATION DIALOG OPERATIONS
           **********************************/
          TreeSubAssemblyComponent.prototype.openImage = function(event) {
            this.openImageEmitter.emit(event);
          };
          TreeSubAssemblyComponent.prototype.openSubAssembly = function(event) {
            this.openSubAssemblyEmitter.emit(event.node);
          };
          /**********************************
           * OPEN ITEM UC
           **********************************/
          TreeSubAssemblyComponent.prototype.openItemUC = function(rowData) {
            if (!!rowData && !!rowData.chapter) {
              this.openItem(rowData);
            }
          };
          TreeSubAssemblyComponent.prototype.openItem = function(item) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants'].ENG_ITEM_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read
            };
            if (!!item) {
              var itemFormId = {
                familyCode: item.familyCode,
                chapter: item.chapter,
                section: item.section,
                sheet: item.sheet,
                marks: item.marks,
                subject: item.subject,
                structureType: item.structureType,
                variantCode: item.variantCode
              };
              data.objectId = this.serializationService.serialize(itemFormId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /**********************************
           * TABLE FILTER OPERATIONS
           **********************************/
          TreeSubAssemblyComponent.prototype.setSearchControlList = function() {
            var _this = this;
            var OK =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                .ICON_GREEN_LED_CODE;
            var NOK =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                .ICON_RED_LED_CODE;
            var WARNING =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                .ICON_YELLOW_LED_CODE;
            var alertNokKey = this.getTranslateKey('alertNok');
            var alertOkKey = this.getTranslateKey('alertOk');
            var alertWarningKey = this.getTranslateKey('alertWarning');
            this.translateService.get([alertNokKey, alertOkKey, alertWarningKey]).subscribe(function(results) {
              var alertNokLabel = results ? results[alertNokKey] : 'NOK';
              var alertOkLabel = results ? results[alertOkKey] : 'OK';
              var alertWarningLabel = results ? results[alertWarningKey] : 'WARNING';
              _this.configurationList = [
                {
                  label: alertOkLabel,
                  value: OK
                },
                {
                  label: alertNokLabel,
                  value: NOK
                },
                {
                  label: alertWarningLabel,
                  value: WARNING
                }
              ];
            });
          };
          TreeSubAssemblyComponent.prototype.setSearchProgressList = function() {
            var _this = this;
            var completedKey = this.getTranslateKey('completed');
            var notCompletedKey = this.getTranslateKey('notCompleted');
            this.translateService.get([completedKey, notCompletedKey]).subscribe(function(results) {
              var completedLabel = results ? results[completedKey] : 'Completed';
              var notCompletedLabel = results ? results[notCompletedKey] : 'Not Completed';
              _this.progressList = [
                {
                  label: completedLabel,
                  value: 0
                },
                {
                  label: notCompletedLabel,
                  value: 1
                }
              ];
            });
          };
          TreeSubAssemblyComponent.prototype.setSearchFamiliesList = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .ITEM_FAMILY_CODE_MAP
              )
              .subscribe(function(res) {
                _this.itemFamiliesList = res;
              });
          };
          TreeSubAssemblyComponent.prototype.filterWithCriteria = function() {
            this.searchGlobalFilter = '';
            if (Object.keys(this.searchCriteria).length === 0) {
              var acTreeData =
                !!this.subAssemblys && this.subAssemblys.length > 0 ? this.subAssemblys : this.acTreeData;
              this.itemStructureDisplayed = this.buildTree(acTreeData);
              if (this.itemStructureDisplayed.length > 0) {
                this.itemStructureDisplayed[0].expanded = true;
              }
            } else {
              this.searchSubAssemblyGlobalFilterChanged.next();
            }
          };
          TreeSubAssemblyComponent.prototype.filterTextWithCriteria = function() {
            this.searchSubAssemblyGlobalFilterChanged.next();
          };
          /**********************************
           * FILTER FUNCTIONALITY
           **********************************/
          TreeSubAssemblyComponent.prototype.resetTableFilters = function() {
            this.searchGlobalFilter = '';
            this.searchCriteria = {};
          };
          TreeSubAssemblyComponent.prototype.setControlGlobalFilter = function() {
            var _this = this;
            this.resetTableFilters();
            this.searchSubAssemblyGlobalFilterChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__['Subject']();
            this.searchSubAssemblyGlobalFilterChanged
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['debounceTime'])(
                  TreeSubAssemblyComponent_1.SEARCH_TEXT_DEBOUNCE_TIME
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['takeUntil'])(this.unsubscribe)
              )
              .subscribe(function() {
                _this.updateTreeDisplayed();
              });
          };
          TreeSubAssemblyComponent.prototype.treeNodeMatchFilters = function(node, searchCriteria) {
            var _this = this;
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils'].isNullOrEmpty(node.children)) {
              node.children = node.children.filter(function(child) {
                return _this.treeNodeMatchFilters(child, searchCriteria);
              });
            }
            var nodeData = node.data;
            // Control
            var controlMatch = true;
            if (
              !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils'].isNullOrEmpty(
                searchCriteria.configuration
              )
            ) {
              var nodeControl = nodeData.icon;
              var controlList = this.searchCriteria.configuration;
              controlMatch = controlList.includes(nodeControl);
            }
            var family = true;
            if (
              !!nodeData.itemFamilyCode &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                searchCriteria.family
              )
            ) {
              var familyLabel = this.familyCodeMap.filter(function(res) {
                return nodeData.itemFamilyCode === res.label;
              })[0].value;
              family = searchCriteria.family === familyLabel;
            }
            var completed = true;
            if (
              !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils'].isNullOrEmpty(
                searchCriteria.progress
              )
            ) {
              var completedItem = nodeData.isItemCompleted;
              var completedList = searchCriteria.progress;
              completed = completedList.includes(completedItem);
            }
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
            var expected = !!nodeData.expectedQuantity ? nodeData.expectedQuantity : '';
            var expectedMatch =
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.searchGlobalFilter
              ) && expected.includes(this.searchGlobalFilter.toLowerCase());
            var real = !!nodeData.realQuantity ? nodeData.realQuantity : '';
            var realMatch =
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.searchGlobalFilter
              ) && real.includes(this.searchGlobalFilter.toLowerCase());
            var serialized = nodeData.serializedPart ? 'serialized' : 'not serialized';
            var serializedMatch =
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.searchGlobalFilter
              ) && serialized.includes(this.searchGlobalFilter.toLowerCase());
            if (
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.searchGlobalFilter
              )
            ) {
              if (!!node.sentenceAndDecisionList && node.sentenceAndDecisionList.length > 0) {
                var filterSuccess =
                  _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils'].orEmpty(node.children).length >
                    0 ||
                  (controlMatch && family && completed);
                node.expanded = filterSuccess ? true : false;
                return filterSuccess;
              } else {
                var filterSuccess =
                  _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils'].orEmpty(node.children).length >
                    0 ||
                  (controlMatch && family);
                node.expanded = filterSuccess ? true : false;
                return filterSuccess;
              }
            } else {
              var filterSuccess =
                _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils'].orEmpty(node.children).length > 0 ||
                functionCodeMatch ||
                itemNumberMatch ||
                familyMatch ||
                expectedMatch ||
                realMatch ||
                nameMatch ||
                itemMatch ||
                serializedMatch;
              node.expanded = filterSuccess ? true : false;
              return filterSuccess;
            }
          };
          TreeSubAssemblyComponent.prototype.updateTreeDisplayed = function() {
            var _this = this;
            this.itemStructureDisplayed = [];
            var acTreeData = !!this.subAssemblys && this.subAssemblys.length > 0 ? this.subAssemblys : this.acTreeData;
            this.itemStructureDisplayed = this.buildTree(
              Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__['cloneDeep'])(acTreeData)
            );
            if (
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.searchGlobalFilter
              ) &&
              this.itemStructureDisplayed.length > 0
            ) {
              this.itemStructureDisplayed[0].expanded = true;
            }
            this.itemStructureDisplayed = this.itemStructureDisplayed.filter(function(elt) {
              return _this.treeNodeMatchFilters(elt, _this.searchCriteria);
            });
          };
          TreeSubAssemblyComponent.prototype.getExpectedQuantity = function(rowData) {
            var qty = rowData.quantity;
            rowData.expectedQuantity =
              qty !== undefined && qty.split(' ').length === 2
                ? qty.split(' ')[1].substring(1, qty.split(' ')[1].length - 1)
                : qty === '0'
                ? qty
                : undefined;
            return rowData.expectedQuantity;
          };
          TreeSubAssemblyComponent.prototype.getRealQuantity = function(rowData) {
            var qty = rowData.quantity;
            rowData.realQuantity =
              qty !== undefined && qty.split(' ').length > 0 ? qty.split(' ')[0] : qty === '0' ? qty : undefined;
            return rowData.realQuantity;
          };
          var TreeSubAssemblyComponent_1;
          TreeSubAssemblyComponent.SEARCH_TEXT_DEBOUNCE_TIME = 500;
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            TreeSubAssemblyComponent.prototype,
            'openImageEmitter',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            TreeSubAssemblyComponent.prototype,
            'openSubAssemblyEmitter',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            TreeSubAssemblyComponent.prototype,
            'bireItemDTOEmitter',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            TreeSubAssemblyComponent.prototype,
            'renderProgress',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            TreeSubAssemblyComponent.prototype,
            'bsdeProjectDTO',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            TreeSubAssemblyComponent.prototype,
            'subAssemblys',
            void 0
          );
          TreeSubAssemblyComponent = TreeSubAssemblyComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-tree-sub-assembly',
                template: __webpack_require__(
                  /*! ./tree-sub-assembly.component.html */ './src/app/main/maintenance/cockpit-inspection/form/tree-sub-assembly/tree-sub-assembly.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./tree-sub-assembly.component.scss */ './src/app/main/maintenance/cockpit-inspection/form/tree-sub-assembly/tree-sub-assembly.component.scss'
                  ),
                  __webpack_require__(
                    /*! ../shared/shared.scss */ './src/app/main/maintenance/cockpit-inspection/form/shared/shared.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_11__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_15__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_17__['TabService'],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__['DomSanitizer'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_16__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateService'],
                _cockpit_inspection_form_service__WEBPACK_IMPORTED_MODULE_22__['CockpitInspectionFormService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_14__['PropertiesService']
              ])
            ],
            TreeSubAssemblyComponent
          );
          return TreeSubAssemblyComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_18__['PageComponent']);

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
//# sourceMappingURL=maintenance-cockpit-inspection-cockpit-inspection-module.js.map
