(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['maintenance-maintenance-module'],
  {
    /***/ './node_modules/primeng/dragdrop.js':
      /*!******************************************!*\
  !*** ./node_modules/primeng/dragdrop.js ***!
  \******************************************/
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
            /*! ./components/dragdrop/dragdrop */ './node_modules/primeng/components/dragdrop/dragdrop.js'
          )
        );

        /***/
      },

    /***/ './node_modules/primeng/radiobutton.js':
      /*!*********************************************!*\
  !*** ./node_modules/primeng/radiobutton.js ***!
  \*********************************************/
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
            /*! ./components/radiobutton/radiobutton */ './node_modules/primeng/components/radiobutton/radiobutton.js'
          )
        );

        /***/
      },

    /***/ './src/app/main/maintenance/maintenance.module.ts':
      /*!********************************************************!*\
  !*** ./src/app/main/maintenance/maintenance.module.ts ***!
  \********************************************************/
      /*! exports provided: MaintenanceModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MaintenanceModule', function() {
          return MaintenanceModule;
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
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/checkbox */ './node_modules/primeng/checkbox.js'
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/dialog */ './node_modules/primeng/dialog.js'
        );
        /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dialog__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/dragdrop */ './node_modules/primeng/dragdrop.js'
        );
        /* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dragdrop__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/fileupload */ './node_modules/primeng/fileupload.js'
        );
        /* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/inputtextarea */ './node_modules/primeng/inputtextarea.js'
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/radiobutton */ './node_modules/primeng/radiobutton.js'
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! primeng/splitbutton */ './node_modules/primeng/splitbutton.js'
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_12__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__
        );
        /* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! primeng/tree */ './node_modules/primeng/tree.js'
        );
        /* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tree__WEBPACK_IMPORTED_MODULE_14__
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! primeng/treetable */ './node_modules/primeng/treetable.js'
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_treetable__WEBPACK_IMPORTED_MODULE_15__
        );
        /* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! primeng/tristatecheckbox */ './node_modules/primeng/tristatecheckbox.js'
        );
        /* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_api_unit_matrix_conversion_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../shared/api/unit-matrix-conversion.api */ './src/app/shared/api/unit-matrix-conversion.api.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_defect_list_defect_list_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../shared/components/defect-list/defect-list.module */ './src/app/shared/components/defect-list/defect-list.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _shared_components_work_order_list_work_order_list_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../shared/components/work-order-list/work-order-list.module */ './src/app/shared/components/work-order-list/work-order-list.module.ts'
        );
        /* harmony import */ var _shared_components_work_scheduling_work_scheduling_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../shared/components/work-scheduling/work-scheduling.module */ './src/app/shared/components/work-scheduling/work-scheduling.module.ts'
        );
        /* harmony import */ var _shared_services_work_scheduling_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../shared/services/work-scheduling.service */ './src/app/shared/services/work-scheduling.service.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _engineering_management_item_search_item_search_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../engineering-management/item/search/item-search.service */ './src/app/main/engineering-management/item/search/item-search.service.ts'
        );
        /* harmony import */ var _procurement_request_procurement_requests_table_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./procurement-request/procurement-requests-table.module */ './src/app/main/maintenance/procurement-request/procurement-requests-table.module.ts'
        );
        /* harmony import */ var _referential_dashboard_referential_dashboard_search_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./referential-dashboard/referential-dashboard-search.component */ './src/app/main/maintenance/referential-dashboard/referential-dashboard-search.component.ts'
        );
        /* harmony import */ var _referential_dashboard_referential_dashboard_search_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./referential-dashboard/referential-dashboard-search.service */ './src/app/main/maintenance/referential-dashboard/referential-dashboard-search.service.ts'
        );
        /* harmony import */ var _unit_conversion_matrix_dialog_unit_conversion_matrix_dialog_unit_conversion_matrix_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./unit-conversion-matrix/dialog-unit-conversion-matrix/dialog-unit-conversion-matrix.component */ './src/app/main/maintenance/unit-conversion-matrix/dialog-unit-conversion-matrix/dialog-unit-conversion-matrix.component.ts'
        );
        /* harmony import */ var _unit_conversion_matrix_import_report_popup_import_report_popup_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./unit-conversion-matrix/import-report-popup/import-report-popup.component */ './src/app/main/maintenance/unit-conversion-matrix/import-report-popup/import-report-popup.component.ts'
        );
        /* harmony import */ var _unit_conversion_matrix_unit_conversion_matrix_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./unit-conversion-matrix/unit-conversion-matrix.component */ './src/app/main/maintenance/unit-conversion-matrix/unit-conversion-matrix.component.ts'
        );
        /* harmony import */ var _unit_conversion_matrix_unit_conversion_matrix_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./unit-conversion-matrix/unit-conversion-matrix.service */ './src/app/main/maintenance/unit-conversion-matrix/unit-conversion-matrix.service.ts'
        );
        /* harmony import */ var _work_orders_calendar_work_orders_calendar_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ./work-orders-calendar/work-orders-calendar.module */ './src/app/main/maintenance/work-orders-calendar/work-orders-calendar.module.ts'
        );
        /* harmony import */ var _work_package_scheduling_work_package_scheduling_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
          /*! ./work-package-scheduling/work-package-scheduling.component */ './src/app/main/maintenance/work-package-scheduling/work-package-scheduling.component.ts'
        );
        /* harmony import */ var _work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
          /*! ./work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service */ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts'
        );
        /* harmony import */ var _workshop_home_workshop_home_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
          /*! ./workshop-home/workshop-home.component */ './src/app/main/maintenance/workshop-home/workshop-home.component.ts'
        );
        /* harmony import */ var _workshop_home_workshop_home_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
          /*! ./workshop-home/workshop-home.service */ './src/app/main/maintenance/workshop-home/workshop-home.service.ts'
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

        var PRIMENG_MODULES = [
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__['CheckboxModule'],
          primeng_dialog__WEBPACK_IMPORTED_MODULE_3__['DialogModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__['DropdownModule'],
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__['InputTextareaModule'],
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__['RadioButtonModule'],
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11__['SplitButtonModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_12__['TableModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__['SelectButtonModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__['TooltipModule'],
          primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16__['TriStateCheckboxModule'],
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__['FileUploadModule'],
          primeng_dragdrop__WEBPACK_IMPORTED_MODULE_4__['DragDropModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__['OverlayPanelModule'],
          primeng_treetable__WEBPACK_IMPORTED_MODULE_15__['TreeTableModule'],
          primeng_tree__WEBPACK_IMPORTED_MODULE_14__['TreeModule']
        ];
        var INTERNAL_MODULES = [
          _procurement_request_procurement_requests_table_module__WEBPACK_IMPORTED_MODULE_29__[
            'ProcurementRequestsTableModule'
          ],
          _shared_components_defect_list_defect_list_module__WEBPACK_IMPORTED_MODULE_21__['DefectListModule'],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_23__['TableModule'],
          _shared_components_work_scheduling_work_scheduling_module__WEBPACK_IMPORTED_MODULE_25__[
            'WorkSchedulingModule'
          ],
          _work_orders_calendar_work_orders_calendar_module__WEBPACK_IMPORTED_MODULE_36__['WorkOrdersCalendarModule'],
          _shared_components_work_order_list_work_order_list_module__WEBPACK_IMPORTED_MODULE_24__['WorkOrderListModule']
        ];
        var OTHER_LIBS_MODULES = [];
        var COMPONENTS = [
          _unit_conversion_matrix_import_report_popup_import_report_popup_component__WEBPACK_IMPORTED_MODULE_33__[
            'ImportReportPopupComponent'
          ],
          _unit_conversion_matrix_dialog_unit_conversion_matrix_dialog_unit_conversion_matrix_component__WEBPACK_IMPORTED_MODULE_32__[
            'DialogUnitConversionMatrixComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _unit_conversion_matrix_unit_conversion_matrix_component__WEBPACK_IMPORTED_MODULE_34__[
            'UnitConversionMatrixComponent'
          ],
          _work_package_scheduling_work_package_scheduling_component__WEBPACK_IMPORTED_MODULE_37__[
            'WorkPackageSchedulingComponent'
          ],
          _workshop_home_workshop_home_component__WEBPACK_IMPORTED_MODULE_39__['WorkshopHomeComponent'],
          _referential_dashboard_referential_dashboard_search_component__WEBPACK_IMPORTED_MODULE_30__[
            'ReferentialDashboardSearchComponent'
          ]
        ];
        var SERVICES = [
          _unit_conversion_matrix_unit_conversion_matrix_service__WEBPACK_IMPORTED_MODULE_35__[
            'UnitConversionMatrixService'
          ],
          _referential_dashboard_referential_dashboard_search_service__WEBPACK_IMPORTED_MODULE_31__[
            'ReferentialDashboardSearchService'
          ],
          _shared_api_unit_matrix_conversion_api__WEBPACK_IMPORTED_MODULE_19__['UnitConversionMatrixApi'],
          _shared_services_work_scheduling_service__WEBPACK_IMPORTED_MODULE_26__['WorkSchedulingService'],
          _workshop_home_workshop_home_service__WEBPACK_IMPORTED_MODULE_40__['WorkshopHomeService'],
          _engineering_management_item_search_item_search_service__WEBPACK_IMPORTED_MODULE_28__['ItemSearchService'],
          _work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_38__[
            'DialogWorkOrderEditService'
          ]
        ];
        var MaintenanceModule = /** @class */ (function() {
          function MaintenanceModule() {}
          MaintenanceModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_17__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_18__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_20__['AppCommonSharedModule'],
                    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_22__['ModalModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_27__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  PRIMENG_MODULES,
                  OTHER_LIBS_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            MaintenanceModule
          );
          return MaintenanceModule;
        })();

        /***/
      },

    /***/ './src/app/main/maintenance/referential-dashboard/referential-dashboard-search.component.html':
      /*!****************************************************************************************************!*\
  !*** ./src/app/main/maintenance/referential-dashboard/referential-dashboard-search.component.html ***!
  \****************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n\r\n        <i\r\n          class="fa fa-fw fa-info aw-icon aw-icon-with-border"\r\n          aria-hidden="true"\r\n          pTooltip="{{ \'page.info\' | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-primary-actions"><!-- Remove enclosing tag if empty --></div>\r\n\r\n  <div class="page-close"><i class="material-icons" (click)="closeComponent()">close</i></div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="row">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      Received File List ({{ refrentialTableDataSource ? refrentialTableDataSource.dataCount : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class="row">\r\n                <div class="grid-cell-content">\r\n                  <a-table [dataSource]="refrentialTableDataSource">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf="refrentialTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="downloadFile()">\r\n                        {{ "global.download" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf="hasManageAccessRight && refrentialTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="deleteFiles()">\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                    <ng-template columnDef="reportName" let-rowData="rowData">\r\n                      <a class="report-name-text">{{ rowData.reportName | uppercase }} </a>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/referential-dashboard/referential-dashboard-search.component.scss':
      /*!****************************************************************************************************!*\
  !*** ./src/app/main/maintenance/referential-dashboard/referential-dashboard-search.component.scss ***!
  \****************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .report-name-text {\n  text-decoration: underline;\n  color: blue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9yZWZlcmVudGlhbC1kYXNoYm9hcmQvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFxyZWZlcmVudGlhbC1kYXNoYm9hcmRcXHJlZmVyZW50aWFsLWRhc2hib2FyZC1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwwQkFBMEI7RUFDMUIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9yZWZlcmVudGlhbC1kYXNoYm9hcmQvcmVmZXJlbnRpYWwtZGFzaGJvYXJkLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAucmVwb3J0LW5hbWUtdGV4dCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/maintenance/referential-dashboard/referential-dashboard-search.component.ts':
      /*!**************************************************************************************************!*\
  !*** ./src/app/main/maintenance/referential-dashboard/referential-dashboard-search.component.ts ***!
  \**************************************************************************************************/
      /*! exports provided: ReferentialDashboardSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ReferentialDashboardSearchComponent',
          function() {
            return ReferentialDashboardSearchComponent;
          }
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/fesm5/common.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _referential_dashboard_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./referential-dashboard-search.service */ './src/app/main/maintenance/referential-dashboard/referential-dashboard-search.service.ts'
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

        var ReferentialDashboardSearchComponent = /** @class */ (function(_super) {
          __extends(ReferentialDashboardSearchComponent, _super);
          function ReferentialDashboardSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            refrentialDashboardSearchService,
            confirmationService
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
            _this.refrentialDashboardSearchService = refrentialDashboardSearchService;
            _this.confirmationService = confirmationService;
            _this.initReferentialTableDataSource();
            _this.getAllFiles();
            return _this;
          }
          ReferentialDashboardSearchComponent.prototype.getComponentName = function() {
            return 'ReferentialDashboardSearchComponent';
          };
          ReferentialDashboardSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
          };
          ReferentialDashboardSearchComponent.prototype.initReferentialTableDataSource = function() {
            this.refrentialTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'reportName',
                  translateKey: this.getTranslateKey('reportName')
                },
                {
                  field: 'folderName',
                  translateKey: this.getTranslateKey('folderName')
                },
                {
                  field: 'date',
                  translateKey: this.getTranslateKey('date')
                }
              ],
              data: []
            });
          };
          /** Search Contact By Criteria */
          ReferentialDashboardSearchComponent.prototype.getAllFiles = function() {
            var _this = this;
            this.refrentialDashboardSearchService.getAllFiles().subscribe(function(result) {
              _this.renderTable(result);
              _this.refrentialTableDataSource.dataSelection = [];
            });
          };
          /** Filling contact table */
          ReferentialDashboardSearchComponent.prototype.renderTable = function(result) {
            var fileListDTO = [];
            result.forEach(function(results) {
              results.folderName = results.folderName.substring(0, parseInt(results.folderName.lastIndexOf('\\'), 10));
              var fileCreationDate = new Date(results.date);
              var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__['DatePipe']('en-US');
              results.date = pipe.transform(fileCreationDate, 'd/M/yy hh:mm:ss');
              fileListDTO.push(results);
            });
            this.refrentialTableDataSource.setData(fileListDTO);
          };
          /** delete files By Criteria */
          ReferentialDashboardSearchComponent.prototype.deleteFiles = function() {
            var _this = this;
            var referentialDashboardDto = {};
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey('confirmDeleteSelectedFile'),
              accept: function() {
                _this.refrentialTableDataSource.dataSelection.forEach(function(referentialDoc) {
                  if (referentialDoc.folderName && !!referentialDoc.date) {
                    referentialDashboardDto.reportName = referentialDoc.reportName;
                    referentialDashboardDto.folderName = referentialDoc.folderName;
                    referentialDashboardDto.date = new Date(referentialDoc.date);
                    referentialDashboardDto.folderPath = referentialDoc.folderPath;
                  }
                  _this.refrentialDashboardSearchService.deleteFile(referentialDashboardDto).subscribe(
                    function(result) {
                      _this.getAllFiles();
                      _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteFile'));
                    },
                    function(error) {
                      _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDeleteFile'));
                    }
                  );
                  _this.refrentialTableDataSource.dataSelection = [];
                });
              }
            });
          };
          /** download functionality */
          ReferentialDashboardSearchComponent.prototype.downloadFile = function() {
            var _this = this;
            var referentialDashboardDto = [];
            var fileName = [];
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey('confirmDownloadSelectedFiles'),
              accept: function() {
                _this.refrentialTableDataSource.dataSelection.forEach(function(referentialDoc, index) {
                  if (!!referentialDoc.reportName && !!referentialDoc.folderName && !!referentialDoc.date) {
                    fileName[index] = referentialDoc.reportName;
                    referentialDashboardDto[index] = {};
                    referentialDashboardDto[index].reportName = referentialDoc.reportName;
                    referentialDashboardDto[index].folderName = referentialDoc.folderName;
                    referentialDashboardDto[index].date = new Date(referentialDoc.date);
                    referentialDashboardDto[index].folderPath = referentialDoc.folderPath;
                  }
                  _this.refrentialDashboardSearchService.downloadNDeleteFiles(referentialDashboardDto[index]).subscribe(
                    function(result) {
                      _this.downLoadFiles(result, fileName[index]);
                      _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDownloadFile'));
                      _this.refrentialDashboardSearchService.deleteFile(referentialDashboardDto[index]).subscribe(
                        function(deleteresult) {
                          _this.getAllFiles();
                          _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteFile'));
                        },
                        function(error) {
                          _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDeleteFile'));
                        }
                      );
                    },
                    function(error) {
                      _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDownloadFile'));
                    }
                  );
                  _this.refrentialTableDataSource.dataSelection = [];
                });
              }
            });
          };
          /** download files */
          ReferentialDashboardSearchComponent.prototype.downLoadFiles = function(docFile, docName) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_11__['FileUtils'].downloadFile(docFile, docName);
          };
          ReferentialDashboardSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Component'])({
                selector: 'aw-referential-dashboard-search',
                template: __webpack_require__(
                  /*! ./referential-dashboard-search.component.html */ './src/app/main/maintenance/referential-dashboard/referential-dashboard-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./referential-dashboard-search.component.scss */ './src/app/main/maintenance/referential-dashboard/referential-dashboard-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__['TabService'],
                _referential_dashboard_search_service__WEBPACK_IMPORTED_MODULE_12__[
                  'ReferentialDashboardSearchService'
                ],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__['ConfirmationService']
              ])
            ],
            ReferentialDashboardSearchComponent
          );
          return ReferentialDashboardSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/referential-dashboard/referential-dashboard-search.service.ts':
      /*!************************************************************************************************!*\
  !*** ./src/app/main/maintenance/referential-dashboard/referential-dashboard-search.service.ts ***!
  \************************************************************************************************/
      /*! exports provided: ReferentialDashboardSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ReferentialDashboardSearchService',
          function() {
            return ReferentialDashboardSearchService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_referential_managment_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/referential-managment.api */ './src/app/shared/api/referential-managment.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_dassault_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-dassault-http */ './src/app/shared/http/abstract-aw-dassault-http.ts'
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

        var ReferentialDashboardSearchService = /** @class */ (function(_super) {
          __extends(ReferentialDashboardSearchService, _super);
          function ReferentialDashboardSearchService(http, appConfigService, referentialApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.referentialApi = referentialApi;
            return _this;
          }
          ReferentialDashboardSearchService.prototype.deleteFile = function(referntials) {
            return _super.prototype.post.call(this, this.referentialApi.deletFiles, referntials);
          };
          ReferentialDashboardSearchService.prototype.downloadNDeleteFiles = function(referntials) {
            return _super.prototype.post.call(this, this.referentialApi.downloadFiles, referntials);
          };
          ReferentialDashboardSearchService.prototype.getAllFiles = function() {
            return _super.prototype.get.call(this, this.referentialApi.getFilesFromMediation);
          };
          ReferentialDashboardSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_referential_managment_api__WEBPACK_IMPORTED_MODULE_2__['ReferentialManagementApi']
              ])
            ],
            ReferentialDashboardSearchService
          );
          return ReferentialDashboardSearchService;
        })(_shared_http_abstract_aw_dassault_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwDassaultHttpService']);

        /***/
      },

    /***/ './src/app/main/maintenance/unit-conversion-matrix/dialog-unit-conversion-matrix/dialog-unit-conversion-matrix.component.html':
      /*!************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/unit-conversion-matrix/dialog-unit-conversion-matrix/dialog-unit-conversion-matrix.component.html ***!
  \************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">{{ getComponentName() + ".unit" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="unitCodes"\r\n          [(ngModel)]="measure.unit"\r\n          appendTo="body"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">{{ getComponentName() + ".fhEquivalent" | translate }}</label>\r\n\r\n      <div class="form-control"><input type="number" class="aw-input" [(ngModel)]="measure.fhEquivalent" /></div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n    <button\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [ngClass]="{ inactive: !enableValidate() }"\r\n      [disabled]="!enableValidate()"\r\n    >\r\n      <span>{{ "global.validate" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/unit-conversion-matrix/dialog-unit-conversion-matrix/dialog-unit-conversion-matrix.component.scss':
      /*!************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/unit-conversion-matrix/dialog-unit-conversion-matrix/dialog-unit-conversion-matrix.component.scss ***!
  \************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvdW5pdC1jb252ZXJzaW9uLW1hdHJpeC9kaWFsb2ctdW5pdC1jb252ZXJzaW9uLW1hdHJpeC9kaWFsb2ctdW5pdC1jb252ZXJzaW9uLW1hdHJpeC5jb21wb25lbnQuc2NzcyJ9 */';

        /***/
      },

    /***/ './src/app/main/maintenance/unit-conversion-matrix/dialog-unit-conversion-matrix/dialog-unit-conversion-matrix.component.ts':
      /*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/unit-conversion-matrix/dialog-unit-conversion-matrix/dialog-unit-conversion-matrix.component.ts ***!
  \**********************************************************************************************************************************/
      /*! exports provided: DialogUnitConversionMatrixComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogUnitConversionMatrixComponent',
          function() {
            return DialogUnitConversionMatrixComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _unit_conversion_matrix_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../unit-conversion-matrix.service */ './src/app/main/maintenance/unit-conversion-matrix/unit-conversion-matrix.service.ts'
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

        var DialogUnitConversionMatrixComponent = /** @class */ (function(_super) {
          __extends(DialogUnitConversionMatrixComponent, _super);
          function DialogUnitConversionMatrixComponent(unitConversionMatrixService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogUnitConversionMatrixComponent'
              ) || this;
            _this.unitConversionMatrixService = unitConversionMatrixService;
            _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          DialogUnitConversionMatrixComponent.prototype.ngOnInit = function() {
            this.measure = {};
            this.unitCodes = [];
            this.loadDropdown();
          };
          DialogUnitConversionMatrixComponent.prototype.loadDropdown = function() {
            var _this = this;
            this.unitConversionMatrixService.findAllBireMeasureReferences().subscribe(function(results) {
              var list = results;
              list.sort(function(a, b) {
                if (a.counterCode && b.counterCode) {
                  var counterCodeA = a.counterCode.toLowerCase();
                  var counterCodeB = b.counterCode.toLowerCase();
                  if (counterCodeA < counterCodeB) {
                    return -1;
                  }
                  if (counterCodeA > counterCodeB) {
                    return 1;
                  }
                }
                return 0;
              });
              list.forEach(function(element) {
                var labelValue = {
                  label: !!element.counterCode ? element.counterCode : '',
                  value: !!element.counterCode ? element.counterCode : ''
                };
                _this.unitCodes.push(labelValue);
              });
              if (!!_this.ucm) {
                _this.measure = _this.ucm;
              }
            });
          };
          DialogUnitConversionMatrixComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogUnitConversionMatrixComponent.prototype.validate = function() {
            if (!!this.measure) {
              if (this.newUcm) {
                this.onCreate.emit(this.measure);
                this.display = false;
              } else {
                this.onUpdate.emit(this.measure);
                this.display = false;
              }
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'validate', 'this.measure');
            }
          };
          DialogUnitConversionMatrixComponent.prototype.enableValidate = function() {
            if (
              !!this.measure &&
              !!this.measure.unit &&
              this.measure.unit !== '' &&
              !!this.measure.fhEquivalent &&
              this.measure.fhEquivalent !== ''
            ) {
              return true;
            } else {
              return false;
            }
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogUnitConversionMatrixComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogUnitConversionMatrixComponent.prototype,
            'ucm',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogUnitConversionMatrixComponent.prototype,
            'newUcm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogUnitConversionMatrixComponent.prototype,
            'onCreate',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogUnitConversionMatrixComponent.prototype,
            'onUpdate',
            void 0
          );
          DialogUnitConversionMatrixComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-unit-conversion-matrix',
                template: __webpack_require__(
                  /*! ./dialog-unit-conversion-matrix.component.html */ './src/app/main/maintenance/unit-conversion-matrix/dialog-unit-conversion-matrix/dialog-unit-conversion-matrix.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-unit-conversion-matrix.component.scss */ './src/app/main/maintenance/unit-conversion-matrix/dialog-unit-conversion-matrix/dialog-unit-conversion-matrix.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _unit_conversion_matrix_service__WEBPACK_IMPORTED_MODULE_3__['UnitConversionMatrixService']
              ])
            ],
            DialogUnitConversionMatrixComponent
          );
          return DialogUnitConversionMatrixComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/unit-conversion-matrix/import-report-popup/import-report-popup.component.html':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/unit-conversion-matrix/import-report-popup/import-report-popup.component.html ***!
  \****************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="displayValue">\r\n  <a-header>\r\n    <div class="modal-title">{{ componentId + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group">\r\n      <label class="form-label"></label>\r\n\r\n      <div class="form-control" style="height: auto">\r\n        <textarea\r\n          pInputTextArea\r\n          [cols]="60"\r\n          [rows]="15"\r\n          type="text"\r\n          class="aw-textarea"\r\n          [(ngModel)]="importReportMessage"\r\n          disabled\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="close()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/unit-conversion-matrix/import-report-popup/import-report-popup.component.scss':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/unit-conversion-matrix/import-report-popup/import-report-popup.component.scss ***!
  \****************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.textbox {\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS91bml0LWNvbnZlcnNpb24tbWF0cml4L2ltcG9ydC1yZXBvcnQtcG9wdXAvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFx1bml0LWNvbnZlcnNpb24tbWF0cml4XFxpbXBvcnQtcmVwb3J0LXBvcHVwXFxpbXBvcnQtcmVwb3J0LXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3VuaXQtY29udmVyc2lvbi1tYXRyaXgvaW1wb3J0LXJlcG9ydC1wb3B1cC9pbXBvcnQtcmVwb3J0LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/unit-conversion-matrix/import-report-popup/import-report-popup.component.ts':
      /*!**************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/unit-conversion-matrix/import-report-popup/import-report-popup.component.ts ***!
  \**************************************************************************************************************/
      /*! exports provided: ImportReportPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ImportReportPopupComponent',
          function() {
            return ImportReportPopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
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
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var ImportReportPopupComponent = /** @class */ (function() {
          function ImportReportPopupComponent() {
            this.componentId = 'ImportReportPopupComponent';
            this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          }
          Object.defineProperty(ImportReportPopupComponent.prototype, 'display', {
            get: function() {
              return this.displayValue;
            },
            set: function(displayValue) {
              this.displayValue = displayValue;
              this.displayChange.emit(this.displayValue);
            },
            enumerable: true,
            configurable: true
          });
          ImportReportPopupComponent.prototype.ngOnInit = function() {
            if (this.importReportMessage === '') {
              this.close();
            }
          };
          ImportReportPopupComponent.prototype.close = function() {
            this.display = false;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            ImportReportPopupComponent.prototype,
            'display',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            ImportReportPopupComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            ImportReportPopupComponent.prototype,
            'importReportMessage',
            void 0
          );
          ImportReportPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-import-report-popup',
                template: __webpack_require__(
                  /*! ./import-report-popup.component.html */ './src/app/main/maintenance/unit-conversion-matrix/import-report-popup/import-report-popup.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./import-report-popup.component.scss */ './src/app/main/maintenance/unit-conversion-matrix/import-report-popup/import-report-popup.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            ImportReportPopupComponent
          );
          return ImportReportPopupComponent;
        })();

        /***/
      },

    /***/ './src/app/main/maintenance/unit-conversion-matrix/unit-conversion-matrix.component.html':
      /*!***********************************************************************************************!*\
  !*** ./src/app/main/maintenance/unit-conversion-matrix/unit-conversion-matrix.component.html ***!
  \***********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "page.searchPage" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" mat-raised-button color="primary" (click)="save()">\r\n      {{ componentData.componentId + ".save" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      *ngIf="!isCreateOpenMode"\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button type="button" mat-menu-item (click)="openTemplate()">\r\n        {{ "global.export" | translate }}\r\n      </button>\r\n\r\n      <button *ngIf="isReadOpenMode && !isCreateOpenMode" type="button" mat-menu-item (click)="reloadMatrix()">\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n\r\n      <button *ngIf="isReadOpenMode && !isCreateOpenMode" type="button" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ "page." + (isFavoriteEntry ? "removeFromFavorites" : "addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ "home" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-content">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    #ucTable\r\n                    [columns]="ucmTableCols"\r\n                    [value]="ucmTable"\r\n                    class="aw-table2"\r\n                    [style]="{ margin: \'0 auto\', width: \'100%\' }"\r\n                    [(selection)]="selectedUcmRows"\r\n                    [scrollable]="true"\r\n                    scrollHeight="400px"\r\n                  >\r\n                    <ng-template pTemplate="emptymessage">\r\n                      <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                      <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                        <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                        <div class="lds-hourglass"></div>\r\n                      </div>\r\n                    </ng-template>\r\n                    <ng-template pTemplate="caption">\r\n                      <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedUcmRows.length > 0 }">\r\n                        <div class="aw-table-global-filter">\r\n                          <label class="aw-table-global-filter-label">\r\n                            <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableResultsGlobalFilter\r\n                            class="aw-table-global-filter-input"\r\n                            type="text"\r\n                            placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                            (input)="ucTable.filterGlobal($event.target.value, \'contains\')"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class="aw-table-actions">\r\n                          <button\r\n                            type="button"\r\n                            *ngIf="selectedUcmRows.length === 0"\r\n                            mat-raised-button\r\n                            (click)="createUcmRecord()"\r\n                          >\r\n                            {{ "global.add" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="selectedUcmRows.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="editUcmRecord()"\r\n                          >\r\n                            {{ "global.edit" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="selectedUcmRows.length > 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteUcmRecord()"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col class="aw-table-checkbox-wrapper" />\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th class="aw-table-checkbox-wrapper">\r\n                          <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n                    <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                      <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                        <td class="aw-table-checkbox-wrapper">\r\n                          <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ rowData[col.field] }}\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + ".importTab" | translate }}\r\n          </ng-template>\r\n          <!-- Import -->\r\n\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ componentData.componentId + ".importTab" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-cell-content">\r\n                  <div class="grid-cell--12">\r\n                    <div class="grid-cell-content">\r\n                      <div class="column">\r\n                        <div class="row grid-cell--6">\r\n                          <div class="form-group">\r\n                            <label class="form-label">\r\n                              {{ componentData.componentId + ".fileToImport" | translate }}\r\n                            </label>\r\n                            <div class="form-control form-control-with-modal">\r\n                              <div class="form-control-data">\r\n                                {{ fileName }}\r\n                              </div>\r\n\r\n                              <div class="btn-file-upload-wrapper">\r\n                                <p-fileUpload\r\n                                  #fileUploader\r\n                                  class="aw-fileupload"\r\n                                  name="document[]"\r\n                                  customUpload="true"\r\n                                  mode="basic"\r\n                                  auto="true"\r\n                                  chooseLabel=""\r\n                                  (uploadHandler)="uploadDocument($event, fileUploader)"\r\n                                ></p-fileUpload>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="row search-criteria-footer">\r\n                          <div class="search-actions">\r\n                            <button\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="import()"\r\n                              [ngClass]="{ inactive: fileName === \'\' }"\r\n                            >\r\n                              <i class="fa fa-fw fa-plus" aria-hidden="true"></i>\r\n                              <span>{{ componentData.componentId + ".importFile" | translate }}</span>\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Archived Report -->\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".archivedImportTab" | translate }} ({{\r\n                        archivedImportReportTable ? archivedImportReportTable.length : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-cell-content">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    #table\r\n                    class="aw-table2"\r\n                    [columns]="archivedImportReportTableCols"\r\n                    [value]="archivedImportReportTable"\r\n                    [style]="{ margin: \'0 auto\', width: \'100%\' }"\r\n                    [(selection)]="selectedArchivedImportReports"\r\n                    [scrollable]="true"\r\n                    scrollHeight="400px"\r\n                  >\r\n                    <ng-template pTemplate="emptymessage">\r\n                      <span *ngIf="!isLoadingImport"> &nbsp;</span>\r\n\r\n                      <div *ngIf="isLoadingImport" class="aw-table-loading-indicator">\r\n                        <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                        <div class="lds-hourglass"></div>\r\n                      </div>\r\n                    </ng-template>\r\n                    <ng-template pTemplate="caption">\r\n                      <div\r\n                        class="aw-table-header"\r\n                        [ngClass]="{ \'rows-selected\': selectedArchivedImportReports.length > 0 }"\r\n                      >\r\n                        <div class="aw-table-global-filter">\r\n                          <label class="aw-table-global-filter-label">\r\n                            <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableResultsGlobalFilter\r\n                            class="aw-table-global-filter-input"\r\n                            type="text"\r\n                            placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                            (input)="table.filterGlobal($event.target.value, \'contains\')"\r\n                          />\r\n                        </div>\r\n                        <div class="aw-table-actions">\r\n                          <button\r\n                            type="button"\r\n                            mat-raised-button\r\n                            pTooltip="{{ \'global.delete\' | translate }}"\r\n                            tooltipPosition="top"\r\n                            (click)="deleteArchivedImportReports()"\r\n                            *ngIf="selectedArchivedImportReports.length !== 0"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col class="aw-table-checkbox-wrapper" />\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th class="aw-table-checkbox-wrapper">\r\n                          <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n                    <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                      <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                        <td class="aw-table-checkbox-wrapper">\r\n                          <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td\r\n                          *ngFor="let col of columns"\r\n                          [ngSwitch]="col.field"\r\n                          [ngStyle]="{ \'text-align\': col.alignment }"\r\n                        >\r\n                          <div *ngSwitchCase="\'reportName\'">\r\n                            <span\r\n                              (click)="openReportDetail(rowData)"\r\n                              style="cursor: pointer; text-decoration: underline; color: blue"\r\n                            >\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n                          </div>\r\n                          <div *ngSwitchCase="\'statusDate\'">\r\n                            <span> {{ rowData[col.field] | date: "yyyy/MM/dd":"":translateService.currentLang }} </span>\r\n                          </div>\r\n                          <div *ngSwitchDefault>{{ rowData[col.field] }}</div>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-import-report-popup\r\n  *ngIf="showImportReportMessage"\r\n  [importReportMessage]="importReportMessage"\r\n  [(display)]="showImportReportMessage"\r\n></aw-import-report-popup>\r\n\r\n<aw-dialog-unit-conversion-matrix\r\n  *ngIf="showDialogUnitConversionMatrix"\r\n  [ucm]="currentUcm"\r\n  [(display)]="showDialogUnitConversionMatrix"\r\n  [newUcm]="isNewUcm"\r\n  (onCreate)="addNewUcm($event)"\r\n  (onUpdate)="updateUcm($event)"\r\n></aw-dialog-unit-conversion-matrix>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/unit-conversion-matrix/unit-conversion-matrix.component.scss':
      /*!***********************************************************************************************!*\
  !*** ./src/app/main/maintenance/unit-conversion-matrix/unit-conversion-matrix.component.scss ***!
  \***********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host #unit-component .main-data .form-group {\n  width: 15rem; }\n  :host #unit-component .main-data .form-group .star {\n    color: red; }\n  :host #unit-component .attributes-tab {\n  display: flex;\n  flex-direction: column; }\n  :host #unit-component .plus-field {\n  margin-right: 20px;\n  max-width: 35rem;\n  min-width: 25rem;\n  width: 20%; }\n  :host #unit-component .ucmTab {\n  display: flex;\n  flex-direction: column; }\n  :host #unit-component .ucmTab .ucm-tables {\n    display: flex;\n    flex-direction: column;\n    padding-top: 24px; }\n  :host #unit-component .ucmTab .ucm-tables .align-right {\n      margin-left: 93%; }\n  :host #unit-component .ucmTab .ucm-tables .row {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap; }\n  :host #unit-component .ucmTab .ucm-tables .row:first-of-type {\n        margin-bottom: 24px; }\n  :host #unit-component .ucmTab .ucm-tables .row .table-wrapper {\n        width: 50%; }\n  :host #unit-component .ucmTab .ucm-tables .row .table-wrapper:first-of-type {\n          padding-right: 24px; }\n  :host #unit-component .ucmTab .ucm-tables .row .table-wrapper:nth-of-type(2) {\n          padding-left: 24px; }\n  :host #unit-component .fields-tab {\n  display: flex;\n  flex-direction: column; }\n  :host #unit-component .fields-tab .fields-fields {\n    display: flex;\n    flex-direction: row;\n    width: 100%; }\n  :host #unit-component .fields-tab .fields-fields .fields-field {\n      width: 15rem; }\n  :host #unit-component .fields-tab .fields-fields .cost-field {\n      width: 6rem; }\n  :host #unit-component .fields-tab .fields-fields > div {\n      display: flex;\n      flex-direction: column;\n      width: 50%; }\n  :host #unit-component .fields-tab .fields-fields > div:first-of-type {\n        padding-right: 24px; }\n  :host #unit-component .fields-tab .fields-fields > div:nth-of-type(2) {\n        padding-left: 24px; }\n  :host #unit-component .fields-tab .fields-tables {\n    display: flex;\n    flex-direction: column;\n    padding-top: 24px; }\n  :host #unit-component .fields-tab .fields-tables .row {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap; }\n  :host #unit-component .fields-tab .fields-tables .row:first-of-type {\n        margin-bottom: 24px; }\n  :host #unit-component .fields-tab .fields-tables .row .table-wrapper {\n        width: 50%; }\n  :host #unit-component .fields-tab .fields-tables .row .table-wrapper:first-of-type {\n          padding-right: 24px; }\n  :host #unit-component .fields-tab .fields-tables .row .table-wrapper:nth-of-type(2) {\n          padding-left: 24px; }\n  :host #unit-component .import-tab {\n  display: flex;\n  flex-direction: column; }\n  :host #unit-component .import-tab .import-fields {\n    display: flex;\n    flex-direction: row;\n    width: 100%; }\n  :host #unit-component .import-tab .import-fields .import-field {\n      width: 10rem; }\n  :host #unit-component .import-tab .import-fields > div {\n      display: flex;\n      flex-direction: column;\n      width: 50%; }\n  :host #unit-component .import-tab .import-fields > div:first-of-type {\n        padding-right: 24px; }\n  :host #unit-component .import-tab .import-fields > div:nth-of-type(2) {\n        padding-left: 24px; }\n  :host #unit-component .import-tab .tasks-tables {\n    display: flex;\n    flex-direction: column;\n    padding-top: 24px; }\n  :host #unit-component .import-tab .tasks-tables .row {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap; }\n  :host #unit-component .import-tab .tasks-tables .row:first-of-type {\n        margin-bottom: 24px; }\n  :host #unit-component .import-tab .tasks-tables .row .table-wrapper {\n        width: 50%; }\n  :host #unit-component .import-tab .tasks-tables .row .table-wrapper:first-of-type {\n          padding-right: 24px; }\n  :host #unit-component .import-tab .tasks-tables .row .table-wrapper:nth-of-type(2) {\n          padding-left: 24px; }\n  :host #unit-component .evolution-form-popup {\n  display: flex;\n  flex-direction: row;\n  transition: width 0.3s;\n  width: 20vw; }\n  :host #unit-component .evolution-form-popup > div:nth-of-type(2) {\n    flex: 1; }\n  :host #unit-component .evolution-form-popup.active-right-panel {\n    width: 70vw; }\n  :host #unit-component .evolution-form-popup.active-right-panel .left-panel .evolution-number {\n      background-color: #e5e5e5; }\n  :host #unit-component .evolution-form-popup.active-right-panel .left-panel .form-group {\n      padding: 20px; }\n  :host #unit-component .evolution-form-popup.active-right-panel .right-panel {\n      border-left: 1px solid #bdbdbd;\n      padding: 20px 0 20px 20px; }\n  :host #unit-component .evolution-number-panel {\n  margin-bottom: 1rem;\n  height: 409px;\n  transition: height 0.5s ease-in-out; }\n  :host #unit-component .evolution-number-panel .form-group {\n    margin-bottom: 5px;\n    margin-left: 0;\n    transition: margin-left 0.5s ease-in-out, margin-top 0.25s ease-in-out; }\n  :host #unit-component .evolution-number-panel .table-container {\n    -webkit-animation: fade 1s;\n            animation: fade 1s;\n    opacity: 1; }\n  :host #unit-component .evolution-number-panel.collapsed {\n    box-shadow: none;\n    height: 56px; }\n  :host #unit-component .evolution-number-panel.collapsed .panel-content {\n      padding-bottom: 0; }\n  :host #unit-component .evolution-number-panel.collapsed .form-group {\n      margin-bottom: 0;\n      margin-left: -24px;\n      margin-top: -24px; }\n  :host #unit-component .evolution-number-panel.collapsed .table-container {\n      -webkit-animation: fade-out 1s;\n              animation: fade-out 1s; }\n  ::ng-deep .export-methods {\n  list-style-type: none;\n  margin: 0;\n  min-width: 100px;\n  padding: 0; }\n  ::ng-deep .export-methods .export-method-wrapper {\n    cursor: pointer;\n    font-size: 0.8rem;\n    padding: 5px 0; }\n  ::ng-deep .export-methods .export-method-wrapper .export-method {\n      padding-left: 5px; }\n  ::ng-deep .export-methods .export-method-wrapper .export-method:hover {\n        text-decoration: underline; }\n  ::ng-deep #visit-form-component .aw-dialog .ui-dialog {\n  max-width: 90%; }\n  @-webkit-keyframes fade {\n  0% {\n    display: none;\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  @keyframes fade {\n  0% {\n    display: none;\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  @-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n  @keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS91bml0LWNvbnZlcnNpb24tbWF0cml4L2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxcdW5pdC1jb252ZXJzaW9uLW1hdHJpeFxcdW5pdC1jb252ZXJzaW9uLW1hdHJpeC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdNLFlBQVksRUFBQTtFQUhsQjtJQU1RLFVBQVUsRUFBQTtFQU5sQjtFQVdNLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQVo1QjtFQWdCTSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7RUFuQmhCO0VBdUJNLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQXhCNUI7SUEyQlEsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUIsRUFBQTtFQTdCekI7TUFnQ1UsZ0JBQWdCLEVBQUE7RUFoQzFCO01Bb0NVLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZUFBZSxFQUFBO0VBdEN6QjtRQXlDWSxtQkFBbUIsRUFBQTtFQXpDL0I7UUE2Q1ksVUFBVSxFQUFBO0VBN0N0QjtVQWdEYyxtQkFBbUIsRUFBQTtFQWhEakM7VUFvRGMsa0JBQWtCLEVBQUE7RUFwRGhDO0VBNERNLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQTdENUI7SUFnRVEsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXLEVBQUE7RUFsRW5CO01BcUVVLFlBQVksRUFBQTtFQXJFdEI7TUF5RVUsV0FBVyxFQUFBO0VBekVyQjtNQTZFVSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFVBQVUsRUFBQTtFQS9FcEI7UUFrRlksbUJBQW1CLEVBQUE7RUFsRi9CO1FBc0ZZLGtCQUFrQixFQUFBO0VBdEY5QjtJQTRGUSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQixFQUFBO0VBOUZ6QjtNQWlHVSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGVBQWUsRUFBQTtFQW5HekI7UUFzR1ksbUJBQW1CLEVBQUE7RUF0Ry9CO1FBMEdZLFVBQVUsRUFBQTtFQTFHdEI7VUE2R2MsbUJBQW1CLEVBQUE7RUE3R2pDO1VBaUhjLGtCQUFrQixFQUFBO0VBakhoQztFQXlITSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7RUExSDVCO0lBNkhRLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVyxFQUFBO0VBL0huQjtNQWtJVSxZQUFZLEVBQUE7RUFsSXRCO01Bc0lVLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsVUFBVSxFQUFBO0VBeElwQjtRQTJJWSxtQkFBbUIsRUFBQTtFQTNJL0I7UUErSVksa0JBQWtCLEVBQUE7RUEvSTlCO0lBcUpRLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCLEVBQUE7RUF2SnpCO01BMEpVLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZUFBZSxFQUFBO0VBNUp6QjtRQStKWSxtQkFBbUIsRUFBQTtFQS9KL0I7UUFtS1ksVUFBVSxFQUFBO0VBbkt0QjtVQXNLYyxtQkFBbUIsRUFBQTtFQXRLakM7VUEwS2Msa0JBQWtCLEVBQUE7RUExS2hDO0VBa0xNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTtFQXJMakI7SUF3TFEsT0FBTyxFQUFBO0VBeExmO0lBNExRLFdBQVcsRUFBQTtFQTVMbkI7TUFnTVkseUJBQXlCLEVBQUE7RUFoTXJDO01Bb01ZLGFBQWEsRUFBQTtFQXBNekI7TUF5TVUsOEJBQThCO01BQzlCLHlCQUF5QixFQUFBO0VBMU1uQztFQWdOTSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1DQUFtQyxFQUFBO0VBbE56QztJQXFOUSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHNFQUFzRSxFQUFBO0VBdk45RTtJQTJOUSwwQkFBa0I7WUFBbEIsa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtFQTVObEI7SUFnT1EsZ0JBQWdCO0lBQ2hCLFlBQVksRUFBQTtFQWpPcEI7TUFvT1UsaUJBQWlCLEVBQUE7RUFwTzNCO01Bd09VLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsaUJBQWlCLEVBQUE7RUExTzNCO01BOE9VLDhCQUFzQjtjQUF0QixzQkFBc0IsRUFBQTtFQU9oQztFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTtFQUpaO0lBT0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjLEVBQUE7RUFUbEI7TUFZTSxpQkFBaUIsRUFBQTtFQVp2QjtRQWVRLDBCQUEwQixFQUFBO0VBTWxDO0VBQ0UsY0FBYyxFQUFBO0VBR2hCO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsVUFBVSxFQUFBO0VBR1o7SUFDRSxVQUFVLEVBQUEsRUFBQTtFQVBkO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsVUFBVSxFQUFBO0VBR1o7SUFDRSxVQUFVLEVBQUEsRUFBQTtFQUlkO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFHWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0VBTmQ7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3VuaXQtY29udmVyc2lvbi1tYXRyaXgvdW5pdC1jb252ZXJzaW9uLW1hdHJpeC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAjdW5pdC1jb21wb25lbnQge1xyXG4gICAgLm1haW4tZGF0YSAuZm9ybS1ncm91cCB7XHJcbiAgICAgIHdpZHRoOiAxNXJlbTtcclxuXHJcbiAgICAgIC5zdGFyIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF0dHJpYnV0ZXMtdGFiIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAucGx1cy1maWVsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgbWF4LXdpZHRoOiAzNXJlbTtcclxuICAgICAgbWluLXdpZHRoOiAyNXJlbTtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxuXHJcbiAgICAudWNtVGFiIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIC51Y20tdGFibGVzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XHJcblxyXG4gICAgICAgIC5hbGlnbi1yaWdodCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOTMlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50YWJsZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkcy10YWIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLmZpZWxkcy1maWVsZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmZpZWxkcy1maWVsZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29zdC1maWVsZCB7XHJcbiAgICAgICAgICB3aWR0aDogNnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgPiBkaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5maWVsZHMtdGFibGVzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XHJcblxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGFibGUtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbXBvcnQtdGFiIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIC5pbXBvcnQtZmllbGRzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5pbXBvcnQtZmllbGQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnRhc2tzLXRhYmxlcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG5cclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhYmxlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZXZvbHV0aW9uLWZvcm0tcG9wdXAge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xyXG4gICAgICB3aWR0aDogMjB2dztcclxuXHJcbiAgICAgICYgPiBkaXY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlLXJpZ2h0LXBhbmVsIHtcclxuICAgICAgICB3aWR0aDogNzB2dztcclxuXHJcbiAgICAgICAgLmxlZnQtcGFuZWwge1xyXG4gICAgICAgICAgLmV2b2x1dGlvbi1udW1iZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodC1wYW5lbCB7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ldm9sdXRpb24tbnVtYmVyLXBhbmVsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgaGVpZ2h0OiA0MDlweDtcclxuICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXMgZWFzZS1pbi1vdXQsIG1hcmdpbi10b3AgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZSAxcztcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNvbGxhcHNlZCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcblxyXG4gICAgICAgIC5wYW5lbC1jb250ZW50IHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjRweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBhbmltYXRpb246IGZhZGUtb3V0IDFzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5leHBvcnQtbWV0aG9kcyB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC5leHBvcnQtbWV0aG9kLXdyYXBwZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuXHJcbiAgICAuZXhwb3J0LW1ldGhvZCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAjdmlzaXQtZm9ybS1jb21wb25lbnQgLmF3LWRpYWxvZyAudWktZGlhbG9nIHtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlIHtcclxuICAwJSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/unit-conversion-matrix/unit-conversion-matrix.component.ts':
      /*!*********************************************************************************************!*\
  !*** ./src/app/main/maintenance/unit-conversion-matrix/unit-conversion-matrix.component.ts ***!
  \*********************************************************************************************/
      /*! exports provided: UnitConversionMatrixComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UnitConversionMatrixComponent',
          function() {
            return UnitConversionMatrixComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
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
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _unit_conversion_matrix_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./unit-conversion-matrix.service */ './src/app/main/maintenance/unit-conversion-matrix/unit-conversion-matrix.service.ts'
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

        var UnitConversionMatrixComponent = /** @class */ (function(_super) {
          __extends(UnitConversionMatrixComponent, _super);
          function UnitConversionMatrixComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            translateService,
            unitConversionMatrixService,
            confirmationService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.translateService = translateService;
            _this.unitConversionMatrixService = unitConversionMatrixService;
            _this.confirmationService = confirmationService;
            _this.tabUnitConversionMatrixId = 'ucm';
            _this.tabImportId = 'import';
            _this.tabArchivedImportReportsId = 'archImportReport';
            _this.currentUcm = undefined;
            _this.showDialogUnitConversionMatrix = false;
            _this.currentTabId = _this.tabUnitConversionMatrixId;
            _this.templateFile = {};
            _this.ucmTable = undefined;
            _this.ucmTableCols = [
              { field: 'unit', alignment: 'center' },
              { field: 'fhEquivalent', alignment: 'center' }
            ];
            _this.selectedUcmRows = [];
            _this.file = undefined;
            _this.fileName = undefined;
            _this.archivedImportReportTable = undefined;
            _this.archivedImportReportTableCols = [
              { field: 'reportCode', alignment: 'center' },
              { field: 'reportName', alignment: 'center' },
              { field: 'statusUser', alignment: 'center' },
              { field: 'statusDate', alignment: 'center' }
            ];
            _this.selectedArchivedImportReports = [];
            _this.unitConversionMatrixRowAddedList = [];
            _this.loadUnitConversionMatrixTable();
            _this.loadArchivedImportReports();
            _this.isLoadingImport = false;
            _this.isLoading = false;
            return _this;
          }
          UnitConversionMatrixComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          UnitConversionMatrixComponent.prototype.getComponentName = function() {
            return 'UnitConversionMatrixComponent';
          };
          // Downloads excel template
          UnitConversionMatrixComponent.prototype.openTemplate = function() {
            var _this = this;
            this.unitConversionMatrixService.getExcelTemplate().subscribe(
              function(result) {
                _this.templateFile = result;
                if (!!_this.templateFile.fileContent && !!_this.templateFile.fileName) {
                  _this.downLoadFiles(_this.templateFile.fileContent, _this.templateFile.fileName);
                } else {
                  _super.prototype.throwUnboundLocalError.call(_this, 'openTemplate', 'this.template');
                }
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetTemplate'));
              }
            );
          };
          UnitConversionMatrixComponent.prototype.loadUnitConversionMatrixTable = function() {
            var _this = this;
            this.isLoading = true;
            this.unitConversionMatrixService.getUnitConversionMatrixRows().subscribe(
              function(results) {
                _this.ucmTable = results || [];
                _this.isLoading = false;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetUcmRows'));
                _this.isLoading = false;
              }
            );
          };
          UnitConversionMatrixComponent.prototype.downLoadFiles = function(docFile, docName) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_10__['FileUtils'].downloadFile(docFile, docName);
          };
          UnitConversionMatrixComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            if (event.files) {
              var file_1 = event.files[0];
              {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_10__['FileUtils'].getFileContentAsBase64(
                  file_1,
                  function(fileContent) {
                    if (fileContent) {
                      _this.file = {
                        docFile: fileContent,
                        docName: file_1.name,
                        docPublicationDate: new Date()
                      };
                      _this.fileName = _this.file.docName;
                    }
                  }
                );
              }
              fileUploader.clear();
            }
          };
          UnitConversionMatrixComponent.prototype.import = function() {
            var _this = this;
            if (!!this.file) {
              var input = {
                fileName: this.fileName,
                excelSource: this.file.docFile
              };
              this.unitConversionMatrixService.importUnitConversionMatrixFromExcel(input).subscribe(function(result) {
                _this.fileName = '';
                _this.file = undefined;
                _this.importReportMessage = result;
                _this.showImportReportMessage = true;
                _this.loadUnitConversionMatrixTable();
                _this.loadArchivedImportReports();
              });
            }
          };
          UnitConversionMatrixComponent.prototype.loadArchivedImportReports = function() {
            var _this = this;
            this.isLoadingImport = true;
            this.unitConversionMatrixService.loadArchivedImportReports().subscribe(
              function(results) {
                _this.archivedImportReportTable = results || [];
                _this.isLoadingImport = false;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetArchivedImportReports'));
                _this.isLoadingImport = false;
              }
            );
          };
          UnitConversionMatrixComponent.prototype.deleteArchivedImportReports = function() {
            var _this = this;
            if (this.selectedArchivedImportReports !== []) {
              var partialMessageKey_1 =
                this.selectedArchivedImportReports.length > 1
                  ? 'confirmDeleteSelectedReports'
                  : 'confirmDeleteSelectedReport';
              var reports_1 = new Array();
              this.selectedArchivedImportReports.forEach(function(report) {
                if (report && report.reportId) {
                  var reportId = {
                    reportId: report.reportId
                  };
                  reports_1.push(reportId);
                }
              });
              this.confirmationService.confirmDelete({
                messageKey: this.getTranslateKey(partialMessageKey_1),
                accept: function() {
                  _this.unitConversionMatrixService.deleteReportEntry(reports_1).subscribe(
                    function(results) {
                      var messageKey =
                        partialMessageKey_1 === 'confirmDeleteSelectedReports'
                          ? _this.getTranslateKey('successOnDeleteReports')
                          : _this.getTranslateKey('successOnDeleteReport');
                      _this.messageService.showSuccessMessage(messageKey);
                      _this.selectedArchivedImportReports = [];
                      _this.loadArchivedImportReports();
                    },
                    function() {
                      var messageKey =
                        partialMessageKey_1 === 'confirmDeleteSelectedReports'
                          ? _this.getTranslateKey('errorOnDeleteReports')
                          : _this.getTranslateKey('errorOnDeleteReport');
                      _this.messageService.showSuccessMessage(messageKey);
                    }
                  );
                }
              });
            }
          };
          UnitConversionMatrixComponent.prototype.openReportDetail = function(object) {
            var _this = this;
            var partialMessageKey = this.getTranslateKey('openReport');
            this.confirmationService.confirm({
              interpolateParams: { 'openReport.reportName': object.reportName },
              contextKeys: [this.getTranslateKey('openReport.line1')],
              messageKey: partialMessageKey,
              accept: function() {
                if (!!object.reportId) {
                  var bireReportDTOId = {
                    reportId: object.reportId
                  };
                  _this.unitConversionMatrixService
                    .openImportReportContent(bireReportDTOId)
                    .subscribe(function(result) {
                      if (!!object.reportName) {
                        _this.downLoadFiles(result, object.reportName);
                      } else {
                        _super.prototype.throwUnboundLocalError.call(_this, 'openReportDetail', 'object.reportName');
                      }
                    });
                } else {
                  _super.prototype.throwUnboundLocalError.call(_this, 'openReportDetail', 'object.reportId');
                }
              }
            });
          };
          UnitConversionMatrixComponent.prototype.save = function() {
            var _this = this;
            this.unitConversionMatrixService
              .saveBidoPreferenceUser(this.unitConversionMatrixRowAddedList)
              .subscribe(function() {
                _this.unitConversionMatrixRowAddedList = [];
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSaveUnitConversionMatrix'));
              });
          };
          /***********
           * Open tabs
           ***********/
          UnitConversionMatrixComponent.prototype.openUCMTab = function() {
            this.currentTabId = this.tabUnitConversionMatrixId;
          };
          UnitConversionMatrixComponent.prototype.openImportTab = function() {
            this.currentTabId = this.tabImportId;
          };
          UnitConversionMatrixComponent.prototype.openArchImportReportTab = function() {
            this.currentTabId = this.tabArchivedImportReportsId;
          };
          /************************************
           * Unit Conversion Matrix Tab Actions
           ************************************/
          UnitConversionMatrixComponent.prototype.createUcmRecord = function() {
            this.currentUcm = undefined;
            this.isNewUcm = true;
            this.showDialogUnitConversionMatrix = true;
          };
          UnitConversionMatrixComponent.prototype.editUcmRecord = function() {
            if (!!this.ucmTable && this.selectedUcmRows.length === 1) {
              this.currentUcm = __assign({}, this.selectedUcmRows[0]);
              this.isNewUcm = false;
              this.currentUcmIndex = this.ucmTable.indexOf(this.selectedUcmRows[0]);
              this.showDialogUnitConversionMatrix = true;
            }
          };
          UnitConversionMatrixComponent.prototype.deleteUcmRecord = function() {
            var _this = this;
            var partialMessageKey =
              this.selectedUcmRows.length > 1 ? 'confirmDeleteSelectedRows' : 'confirmDeleteSelectedRow';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                var idArr = [];
                _this.selectedUcmRows.forEach(function(res) {
                  if (!!res.preferenceUserId) {
                    idArr.push(res.preferenceUserId);
                  }
                });
                _this.unitConversionMatrixService.removeBidoPreferenceUser(idArr).subscribe(function() {
                  if (!!_this.ucmTable) {
                    var messageKey = _this.selectedUcmRows.length > 1 ? 'successOnDeleteRows' : 'successOnDeleteRow';
                    _this.messageService.showSuccessMessage(_this.getTranslateKey(messageKey));
                    _this.ucmTable = _this.ucmTable.filter(function(ucmRow) {
                      return !_this.selectedUcmRows.includes(ucmRow);
                    });
                    _this.selectedUcmRows = [];
                  }
                });
              }
            });
          };
          UnitConversionMatrixComponent.prototype.addNewUcm = function(ucm) {
            if (!!ucm && !!this.ucmTable) {
              this.unitConversionMatrixRowAddedList.push(ucm);
              this.ucmTable = __spread(this.ucmTable, [ucm]);
            }
          };
          UnitConversionMatrixComponent.prototype.updateUcm = function(ucm) {
            if (!!ucm && !!this.ucmTable) {
              var foundIndex = this.unitConversionMatrixRowAddedList.findIndex(function(value) {
                return value.preferenceUserId === ucm.preferenceUserId;
              });
              if (foundIndex !== -1) {
                this.unitConversionMatrixRowAddedList[foundIndex] = ucm;
              } else {
                this.unitConversionMatrixRowAddedList.push(ucm);
              }
              this.ucmTable[this.currentUcmIndex] = ucm;
              this.selectedUcmRows = [];
            }
          };
          UnitConversionMatrixComponent.prototype.reloadMatrix = function() {
            this.selectedArchivedImportReports = [];
            this.unitConversionMatrixRowAddedList = [];
            this.loadUnitConversionMatrixTable();
            this.loadArchivedImportReports();
          };
          UnitConversionMatrixComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-unit-conversion-matrix',
                template: __webpack_require__(
                  /*! ./unit-conversion-matrix.component.html */ './src/app/main/maintenance/unit-conversion-matrix/unit-conversion-matrix.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./unit-conversion-matrix.component.scss */ './src/app/main/maintenance/unit-conversion-matrix/unit-conversion-matrix.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__['TabService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _unit_conversion_matrix_service__WEBPACK_IMPORTED_MODULE_11__['UnitConversionMatrixService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__['ConfirmationService']
              ])
            ],
            UnitConversionMatrixComponent
          );
          return UnitConversionMatrixComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_9__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/unit-conversion-matrix/unit-conversion-matrix.service.ts':
      /*!*******************************************************************************************!*\
  !*** ./src/app/main/maintenance/unit-conversion-matrix/unit-conversion-matrix.service.ts ***!
  \*******************************************************************************************/
      /*! exports provided: UnitConversionMatrixService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UnitConversionMatrixService',
          function() {
            return UnitConversionMatrixService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/fleet-business.api */ './src/app/shared/api/fleet-business.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_standard_import_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/api/standard-import.api */ './src/app/shared/api/standard-import.api.ts'
        );
        /* harmony import */ var _shared_api_unit_matrix_conversion_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/api/unit-matrix-conversion.api */ './src/app/shared/api/unit-matrix-conversion.api.ts'
        );
        /* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/api/user-profile-management.api */ './src/app/shared/api/user-profile-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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

        var UnitConversionMatrixService = /** @class */ (function(_super) {
          __extends(UnitConversionMatrixService, _super);
          function UnitConversionMatrixService(
            http,
            appConfigService,
            unitMatrixConversionApi,
            fleetManagementApi,
            fleetBusinessApi,
            standardImportApi,
            userProfileManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.unitMatrixConversionApi = unitMatrixConversionApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.fleetBusinessApi = fleetBusinessApi;
            _this.standardImportApi = standardImportApi;
            _this.userProfileManagementApi = userProfileManagementApi;
            return _this;
          }
          UnitConversionMatrixService.prototype.searchUnitMatrixConversion = function(input) {
            return _super.prototype.post.call(this, this.unitMatrixConversionApi.searchUnitMatrixConversion, input);
          };
          UnitConversionMatrixService.prototype.getUnitConversionMatrix = function(id) {
            return _super.prototype.post.call(this, this.unitMatrixConversionApi.getUnitMatrixConversion, id);
          };
          UnitConversionMatrixService.prototype.deleteUnitConversionMatrix = function(id) {
            return _super.prototype.post.call(this, this.unitMatrixConversionApi.deleteUnitMatrixConversion, id);
          };
          UnitConversionMatrixService.prototype.saveConversionMatrix = function(input) {
            return _super.prototype.post.call(this, this.unitMatrixConversionApi.saveConversionMatrix, input);
          };
          UnitConversionMatrixService.prototype.getUnitConversionMatrixRows = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.getUnitConversionMatrixRows);
          };
          UnitConversionMatrixService.prototype.getExcelTemplate = function() {
            return _super.prototype.post.call(this, this.fleetBusinessApi.getXlsUnitConversionMatrixReport);
          };
          UnitConversionMatrixService.prototype.importUnitConversionMatrixFromExcel = function(input) {
            return _super.prototype.post.call(this, this.standardImportApi.importUnitConversionMatrixFromExcel, input);
          };
          UnitConversionMatrixService.prototype.loadArchivedImportReports = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoReportsUnitMatrixConversion);
          };
          UnitConversionMatrixService.prototype.openImportReportContent = function(reportId) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoReportContentOfBidoReport,
              reportId
            );
          };
          UnitConversionMatrixService.prototype.deleteReportEntry = function(reports) {
            return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoReport, reports);
          };
          UnitConversionMatrixService.prototype.saveBidoPreferenceUser = function(rowList) {
            return _super.prototype.post.call(this, this.userProfileManagementApi.saveBidoPreferenceUser, rowList);
          };
          UnitConversionMatrixService.prototype.removeBidoPreferenceUser = function(id) {
            return _super.prototype.post.call(this, this.userProfileManagementApi.removeBidoPreferenceUser, id);
          };
          UnitConversionMatrixService.prototype.findAllBireMeasureReferences = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBireMeasureReferences);
          };
          UnitConversionMatrixService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__['AppConfigService'],
                _shared_api_unit_matrix_conversion_api__WEBPACK_IMPORTED_MODULE_5__['UnitConversionMatrixApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__['FleetManagementApi'],
                _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_2__['FleetBusinessApi'],
                _shared_api_standard_import_api__WEBPACK_IMPORTED_MODULE_4__['StandardImportApi'],
                _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_6__['UserProfileManagementApi']
              ])
            ],
            UnitConversionMatrixService
          );
          return UnitConversionMatrixService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/maintenance/work-package-scheduling/work-package-scheduling.component.html':
      /*!*************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package-scheduling/work-package-scheduling.component.html ***!
  \*************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button type="button" mat-menu-item (click)="reloadData()">\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <aw-work-scheduling\r\n          [firstColumnName]="\'projectNumber\'"\r\n          [workPackageStatusList]="statusList"\r\n          [tableData]="treeTable"\r\n          [isTableLoading]="isTableLoading"\r\n          (onRowClick)="openWorkPackageDetail($event)"\r\n          [ngStyle]="{ width: \'100%\' }"\r\n        ></aw-work-scheduling>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/work-package-scheduling/work-package-scheduling.component.ts':
      /*!***********************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package-scheduling/work-package-scheduling.component.ts ***!
  \***********************************************************************************************/
      /*! exports provided: WorkPackageSchedulingComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'WorkPackageSchedulingComponent',
          function() {
            return WorkPackageSchedulingComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_services_work_scheduling_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/services/work-scheduling.service */ './src/app/shared/services/work-scheduling.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
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

        var WorkPackageSchedulingComponent = /** @class */ (function(_super) {
          __extends(WorkPackageSchedulingComponent, _super);
          function WorkPackageSchedulingComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            workSchedulingService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.workSchedulingService = workSchedulingService;
            _this.propertiesService = propertiesService;
            _this.loadWorkPackageStatusList();
            _this.registerRefreshButton();
            _this.refreshButton = undefined;
            return _this;
          }
          WorkPackageSchedulingComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .MAI_MY_JOBS_CARDS_FORM;
          };
          WorkPackageSchedulingComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.loadWorkSchdulingTable();
          };
          WorkPackageSchedulingComponent.prototype.loadWorkSchdulingTable = function() {
            var _this = this;
            this.isTableLoading = true;
            this.workSchedulingService.getWorkPackageSchedulingList().subscribe(function(result) {
              if (result) {
                _this.treeTable = result.filter(function(wp) {
                  var bidmProjectDTO = wp.data;
                  return !(
                    bidmProjectDTO.statusState === '6-clo' &&
                    !!bidmProjectDTO.projectEndDate &&
                    new Date(bidmProjectDTO.projectEndDate).valueOf() < new Date().valueOf()
                  );
                });
                _this.isTableLoading = false;
              }
            });
          };
          WorkPackageSchedulingComponent.prototype.registerRefreshButton = function() {
            var _this = this;
            this.workSchedulingService.refreshButton$
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['takeUntil'])(this.unsubscribe))
              .subscribe(function(f) {
                _this.refreshButton = f;
              });
          };
          WorkPackageSchedulingComponent.prototype.loadWorkPackageStatusList = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__['GenericPropertyConstants']
                  .AIRM_PROJECT_STATUS_MAP
              )
              .subscribe(function(result) {
                _this.statusList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils'].orEmpty(result);
              });
          };
          WorkPackageSchedulingComponent.prototype.reloadData = function() {
            if (this.refreshButton) {
              this.refreshButton();
              this.loadWorkSchdulingTable();
            }
          };
          WorkPackageSchedulingComponent.prototype.openWorkPackageDetail = function(rowData) {
            if (!!rowData) {
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
                    .MAI_WORK_PACKAGE_FORM,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write,
                objectId: this.serializationService.serialize({ wpId: rowData.projectId })
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          WorkPackageSchedulingComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-work-package-scheduling',
                template: __webpack_require__(
                  /*! ./work-package-scheduling.component.html */ './src/app/main/maintenance/work-package-scheduling/work-package-scheduling.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _shared_services_work_scheduling_service__WEBPACK_IMPORTED_MODULE_11__['WorkSchedulingService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_8__['PropertiesService']
              ])
            ],
            WorkPackageSchedulingComponent
          );
          return WorkPackageSchedulingComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/workshop-home/workshop-home.component.html':
      /*!*****************************************************************************!*\
  !*** ./src/app/main/maintenance/workshop-home/workshop-home.component.html ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title">{{ componentData.componentId + ".workshop" | translate }} {{ bidtWarehouse.whName }}</h2>\r\n\r\n      <div class="hr-style">\r\n        <div class="grid-row">\r\n          <div class="grid-cell-style">\r\n            <div class="grid-cell--3">\r\n              {{ componentData.componentId + ".humanResourceLabel" | translate }}\r\n            </div>\r\n          </div>\r\n          <div class="grid-cell-style">\r\n            <div class="grid-cell--3">\r\n              {{ humanResourceOutputDTO.nbPrevisionalDaysEmployeeWorkedOnWO }}\r\n            </div>\r\n          </div>\r\n          <div class="grid-cell-style">\r\n            <div class="grid-cell--3">\r\n              {{ humanResourceOutputDTO.nbPrevisionalDaysEmployeeArePresent }}\r\n            </div>\r\n          </div>\r\n          <div class="grid-cell-style">\r\n            <div class="grid-cell--3">\r\n              {{ humanResourceOutputDTO.nbEmployee }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group" style="max-width: 25%">\r\n        <label class="form-label"> {{ componentData.componentId + ".reportingDate" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <p-calendar\r\n            showButtonBar="true"\r\n            [monthNavigator]="true"\r\n            [yearNavigator]="true"\r\n            [yearRange]="sessionService.calendarYearRange"\r\n            class="aw-calendar"\r\n            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n            [locale]="sessionService.calendarFormat"\r\n            [(ngModel)]="date"\r\n            (ngModelChange)="onDateValueChange()"\r\n          ></p-calendar>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="!isCreateOpenMode && componentData && componentData.objectId" class="page-subtitle">\r\n          - {{ subtitle }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ "general" | translate }}\r\n        </ng-template>\r\n\r\n        <div class="grid-row">\r\n          <div id="workloadPanel" class="grid-cell--6">\r\n            <div #workloadAnchor class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".workloadTab" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content">\r\n                <a-table id="workloadTable" [dataSource]="workloadTableDataSource">\r\n                  <ng-template columnDef="workloadKey" let-rowData="rowData">\r\n                    {{ rowData.workloadKey | translate }}\r\n                  </ng-template>\r\n                  <ng-template columnDef="validationOk" let-rowData="rowData">\r\n                    <span [ngClass]="{ \'alert--ok\': rowData.isValidationOk }">\r\n                      {{ rowData.validationOk }}\r\n                    </span>\r\n                  </ng-template>\r\n                  <ng-template columnDef="alert" let-rowData="rowData">\r\n                    <span [ngClass]="{ \'alert--warning\': rowData.isAlert }">\r\n                      {{ rowData.alert }}\r\n                    </span>\r\n                  </ng-template>\r\n                  <ng-template columnDef="validationNok" let-rowData="rowData">\r\n                    <span [ngClass]="{ \'alert--nok\': rowData.isValidationNok }">\r\n                      {{ rowData.validationNok }}\r\n                    </span>\r\n                  </ng-template>\r\n                </a-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div id="qualificationsStatusPanel" class="grid-cell--6">\r\n            <div #qualificationsStatusAnchor class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".qualificationsStatusTab" | translate }} ({{\r\n                      qualificationStatusTableDataSource ? qualificationStatusTableDataSource.dataCount : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content">\r\n                <a-table id="qualificationsStatusTable" [dataSource]="qualificationStatusTableDataSource">\r\n                  <ng-template columnDef="qualificationOk" let-rowData="rowData">\r\n                    <span [ngClass]="{ \'alert--ok\': rowData.isQualificationOk }">\r\n                      {{ rowData.qualificationOk }}\r\n                    </span>\r\n                  </ng-template>\r\n                  <ng-template columnDef="qualificationAlert" let-rowData="rowData">\r\n                    <span [ngClass]="{ \'alert--warning\': rowData.isQualificationAlert }">\r\n                      {{ rowData.qualificationAlert }}\r\n                    </span>\r\n                  </ng-template>\r\n                  <ng-template columnDef="qualificationNok" let-rowData="rowData">\r\n                    <span [ngClass]="{ \'alert--nok\': rowData.isQualificationNok }">\r\n                      {{ rowData.qualificationNok }}\r\n                    </span>\r\n                  </ng-template>\r\n                </a-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-row">\r\n          <div id="partsPanel" class="grid-cell--12">\r\n            <aw-procurement-requests-table\r\n              [procurementRequests]="procurementRequestAndIndicatorsParts"\r\n              [requestManagementKey]="articleTitleKey"\r\n            ></aw-procurement-requests-table>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-row">\r\n          <div id="toolsPanel" class="grid-cell--12">\r\n            <aw-procurement-requests-table\r\n              [procurementRequests]="procurementRequestAndIndicatorsTools"\r\n              [requestManagementKey]="supportResourcesTitleKey"\r\n            ></aw-procurement-requests-table>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab id="workOrdersTab">\r\n        <ng-template mat-tab-label>\r\n          {{ "workOrders" | translate }}\r\n        </ng-template>\r\n\r\n        <div class="grid-row">\r\n          <div id="workOrdersPanel" class="grid-cell--12">\r\n            <div class="grid-cell grid-cell--container" *ngIf="!!woDisplayedList">\r\n              <aw-work-order-list [workOrderInputList]="woDisplayedList" [hideWOTableAction]="true">\r\n              </aw-work-order-list>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/workshop-home/workshop-home.component.scss':
      /*!*****************************************************************************!*\
  !*** ./src/app/main/maintenance/workshop-home/workshop-home.component.scss ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .calendar-style {\n  position: absolute;\n  right: 60px; }\n\n:host .grid-cell-style {\n  border: 1px solid black; }\n\n:host .hr-style {\n  margin-left: auto;\n  margin-right: auto; }\n\n:host .alert--ok {\n  display: block;\n  background-color: #4caf50; }\n\n:host .alert--warning {\n  display: block;\n  background-color: #ffc107; }\n\n:host .alert--nok {\n  display: block;\n  background-color: #f6685e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3Jrc2hvcC1ob21lL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxcd29ya3Nob3AtaG9tZVxcd29ya3Nob3AtaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3Jrc2hvcC1ob21lL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUhmO0VBTUksdUJBQXVCLEVBQUE7O0FBTjNCO0VBU0ksaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQVZ0QjtFQWNJLGNBQWM7RUFDZCx5QkNJa0IsRUFBQTs7QURuQnRCO0VBbUJJLGNBQWM7RUFDZCx5QkNBWSxFQUFBOztBRHBCaEI7RUF3QkksY0FBYztFQUNkLHlCQ0hnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3Jrc2hvcC1ob21lL3dvcmtzaG9wLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuOmhvc3Qge1xyXG4gIC5jYWxlbmRhci1zdHlsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNjBweDtcclxuICB9XHJcbiAgLmdyaWQtY2VsbC1zdHlsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgLmhyLXN0eWxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmFsZXJ0LS1vayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgLmFsZXJ0LS1ub2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/workshop-home/workshop-home.component.ts':
      /*!***************************************************************************!*\
  !*** ./src/app/main/maintenance/workshop-home/workshop-home.component.ts ***!
  \***************************************************************************/
      /*! exports provided: WorkshopHomeComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'WorkshopHomeComponent', function() {
          return WorkshopHomeComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/components/component-sidebar/page-toc.service */ './src/app/shared/components/component-sidebar/page-toc.service.ts'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _workshop_home_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./workshop-home.service */ './src/app/main/maintenance/workshop-home/workshop-home.service.ts'
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

        var WorkshopHomeComponent = /** @class */ (function(_super) {
          __extends(WorkshopHomeComponent, _super);
          function WorkshopHomeComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            pageTocService,
            translateService,
            workshopHomeService,
            sessionService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Read,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                pageTocService
              ) || this;
            _this.translateService = translateService;
            _this.workshopHomeService = workshopHomeService;
            _this.sessionService = sessionService;
            _this.loadTablesHeader();
            return _this;
          }
          WorkshopHomeComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
              .DAS_WORKSHOP_HOME;
          };
          WorkshopHomeComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.init();
            if (!!this.componentData) {
              // this.setTableOfContent();
              this.updateOpenMode(this.componentData.openMode);
            }
            this.loadTables();
          };
          WorkshopHomeComponent.prototype.init = function() {
            this.date = new Date();
            this.humanResourceOutputDTO = {
              nbEmployee: 0,
              nbPrevisionalDaysEmployeeArePresent: 0,
              nbPrevisionalDaysEmployeeWorkedOnWO: 0
            };
            this.humanResourceOutputDTO = {};
            this.bidtWarehouse = { whName: ' ' };
            this.articleTitleKey = 'articleTitleKey';
            this.supportResourcesTitleKey = 'supportResourcesTitleKey';
          };
          WorkshopHomeComponent.prototype.loadTablesHeader = function() {
            this.initWorkloadTableDataSource();
            this.initQualificationsStatusTableDataSource();
          };
          WorkshopHomeComponent.prototype.initWorkloadTableDataSource = function() {
            this.workloadTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__[
              'TableDataSource'
            ]({
              allowMultiSelect: false,
              enableSelection: false,
              columns: [
                { field: 'workloadKey', translateKey: ' ' },
                {
                  field: 'validationOk',
                  translateKey: this.getTranslateKey('validationOk'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__['ColumnAlignment'].CENTER
                },
                {
                  field: 'alert',
                  translateKey: this.getTranslateKey('alert'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__['ColumnAlignment'].CENTER
                },
                {
                  field: 'validationNok',
                  translateKey: this.getTranslateKey('validationNok'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__['ColumnAlignment'].CENTER
                }
              ],
              data: [
                {
                  workloadKey: this.getTranslateKey('workOrders'),
                  validationOk: 0,
                  alert: 0,
                  validationNok: 0
                },
                {
                  workloadKey: this.getTranslateKey('workOrdersHours'),
                  validationOk: 0,
                  alert: 0,
                  validationNok: 0
                },
                {
                  workloadKey: this.getTranslateKey('articles'),
                  validationOk: 0,
                  alert: 0,
                  validationNok: 0
                },
                {
                  workloadKey: this.getTranslateKey('supportResources'),
                  validationOk: 0,
                  alert: 0,
                  validationNok: 0
                }
              ]
            });
          };
          WorkshopHomeComponent.prototype.initQualificationsStatusTableDataSource = function() {
            this.qualificationStatusTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__[
              'TableDataSource'
            ]({
              allowMultiSelect: false,
              enableSelection: false,
              columns: [
                { field: 'qualificationName', translateKey: ' ' },
                {
                  field: 'qualificationDisponibility',
                  translateKey: this.getTranslateKey('qualificationDisponibility'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__['ColumnAlignment'].CENTER
                },
                {
                  field: 'qualificationOk',
                  translateKey: this.getTranslateKey('qualificationOk'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__['ColumnAlignment'].CENTER
                },
                {
                  field: 'qualificationAlert',
                  translateKey: this.getTranslateKey('qualificationAlert'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__['ColumnAlignment'].CENTER
                },
                {
                  field: 'qualificationNok',
                  translateKey: this.getTranslateKey('qualificationNok'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__['ColumnAlignment'].CENTER
                }
              ],
              data: []
            });
          };
          WorkshopHomeComponent.prototype.onCalendarOptions = function() {
            this.loadTables();
          };
          WorkshopHomeComponent.prototype.onDateValueChange = function() {
            this.loadTables();
          };
          WorkshopHomeComponent.prototype.loadTables = function() {
            var _this = this;
            var workShopManagerInputDTO = {
              startDate: this.date
            };
            this.workshopHomeService.getWorkShopManagerInfo(workShopManagerInputDTO).subscribe(
              function(result) {
                if (!!result) {
                  _this.workloadOutputDTO = result;
                  _this.humanResourceOutputDTO = _this.workloadOutputDTO.humanResourceOutputDTO;
                  _this.bidtWarehouse = !!_this.workloadOutputDTO.bidtWarehouse
                    ? _this.workloadOutputDTO.bidtWarehouse
                    : { whName: ' ' };
                  var worksOrdersHoursOutputDTO = _this.workloadOutputDTO.worksOrdersHoursOutputDTO;
                  var worksOrdersPartsAvailabilityOutputDTO =
                    _this.workloadOutputDTO.worksOrdersPartsAvailabilityOutputDTO;
                  var worksOrdersToolsAvailabilityOutputDTO =
                    _this.workloadOutputDTO.worksOrdersToolsAvailabilityOutputDTO;
                  _this.procurementRequestAndIndicatorsParts =
                    _this.workloadOutputDTO.procurementRequestAndIndicatorsPartsList;
                  _this.procurementRequestAndIndicatorsTools =
                    _this.workloadOutputDTO.procurementRequestAndIndicatorsToolsList;
                  _this.woDisplayedList = _this.workloadOutputDTO.woDisplayedList;
                  if (
                    !!worksOrdersHoursOutputDTO &&
                    !!worksOrdersPartsAvailabilityOutputDTO &&
                    !!worksOrdersToolsAvailabilityOutputDTO
                  ) {
                    _this.workloadTableDataSource.setData([
                      {
                        workloadKey: _this.getTranslateKey('workOrders'),
                        validationOk: worksOrdersHoursOutputDTO.ok,
                        alert: worksOrdersHoursOutputDTO.warning,
                        validationNok: worksOrdersHoursOutputDTO.notOk,
                        isValidationOk: worksOrdersHoursOutputDTO.ok > 0,
                        isAlert: worksOrdersHoursOutputDTO.warning > 0,
                        isValidationNok: worksOrdersHoursOutputDTO.notOk > 0
                      },
                      {
                        workloadKey: _this.getTranslateKey('workOrdersHours'),
                        validationOk: worksOrdersHoursOutputDTO.hoursOk,
                        alert: worksOrdersHoursOutputDTO.hoursWarning,
                        validationNok: worksOrdersHoursOutputDTO.hoursNOk,
                        isValidationOk: worksOrdersHoursOutputDTO.hoursOk > 0,
                        isAlert: worksOrdersHoursOutputDTO.hoursWarning > 0,
                        isValidationNok: worksOrdersHoursOutputDTO.hoursNOk > 0
                      },
                      {
                        workloadKey: _this.getTranslateKey('articles'),
                        validationOk: worksOrdersPartsAvailabilityOutputDTO.ok,
                        alert: worksOrdersPartsAvailabilityOutputDTO.warning,
                        validationNok: worksOrdersPartsAvailabilityOutputDTO.notOk,
                        isValidationOk: worksOrdersPartsAvailabilityOutputDTO.ok > 0,
                        isAlert: worksOrdersPartsAvailabilityOutputDTO.warning > 0,
                        isValidationNok: worksOrdersPartsAvailabilityOutputDTO.notOk > 0
                      },
                      {
                        workloadKey: _this.getTranslateKey('supportResources'),
                        validationOk: worksOrdersToolsAvailabilityOutputDTO.ok,
                        alert: worksOrdersToolsAvailabilityOutputDTO.warning,
                        validationNok: worksOrdersToolsAvailabilityOutputDTO.notOk,
                        isValidationOk: worksOrdersToolsAvailabilityOutputDTO.ok > 0,
                        isAlert: worksOrdersToolsAvailabilityOutputDTO.warning > 0,
                        isValidationNok: worksOrdersToolsAvailabilityOutputDTO.notOk > 0
                      }
                    ]);
                  }
                  var qualificationEmployeeOutputDTO = _this.workloadOutputDTO.qualificationEmployeeOutputDTO;
                  var qualRowData = qualificationEmployeeOutputDTO.map(function(elt) {
                    return {
                      qualificationName: elt.qualificationTitle,
                      qualificationDisponibility: elt.nbHoursAvailability,
                      qualificationOk: elt.ok,
                      qualificationAlert: elt.warning,
                      qualificationNok: elt.notOk,
                      isQualificationOk: elt.ok > 0,
                      isQualificationAlert: elt.warning > 0,
                      isQualificationNok: elt.notOk > 0
                    };
                  });
                  _this.qualificationStatusTableDataSource.setData(qualRowData);
                }
              },
              function(_error) {
                _this.messageService.showErrorMessage(_error.message);
              }
            );
          };
          WorkshopHomeComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-workshop-home',
                template: __webpack_require__(
                  /*! ./workshop-home.component.html */ './src/app/main/maintenance/workshop-home/workshop-home.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./workshop-home.component.scss */ './src/app/main/maintenance/workshop-home/workshop-home.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__['TabService'],
                _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_2__['PageTocService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _workshop_home_service__WEBPACK_IMPORTED_MODULE_13__['WorkshopHomeService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__['SessionService']
              ])
            ],
            WorkshopHomeComponent
          );
          return WorkshopHomeComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/workshop-home/workshop-home.service.ts':
      /*!*************************************************************************!*\
  !*** ./src/app/main/maintenance/workshop-home/workshop-home.service.ts ***!
  \*************************************************************************/
      /*! exports provided: WorkshopHomeService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'WorkshopHomeService', function() {
          return WorkshopHomeService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_manager_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/manager.api */ './src/app/shared/api/manager.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/api/task-management.api */ './src/app/shared/api/task-management.api.ts'
        );
        /* harmony import */ var _shared_constants_bire_action_type_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/constants/bire-action-type-constants */ './src/app/shared/constants/bire-action-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
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

        var WorkshopHomeService = /** @class */ (function(_super) {
          __extends(WorkshopHomeService, _super);
          function WorkshopHomeService(
            http,
            appConfigService,
            productStructureManagementApi,
            taskManagementApi,
            propertiesService,
            mannagerApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.taskManagementApi = taskManagementApi;
            _this.propertiesService = propertiesService;
            _this.mannagerApi = mannagerApi;
            return _this;
          }
          WorkshopHomeService.prototype.findBirePn = function(pn) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBirePn, pn);
          };
          WorkshopHomeService.prototype.findBirePnDocs = function(pn) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBirePnDocs, pn);
          };
          WorkshopHomeService.prototype.findAllBireVariantVersions = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireVariantVersions);
          };
          WorkshopHomeService.prototype.findAllBireUnitMeasures = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireUnitMeasures);
          };
          WorkshopHomeService.prototype.savePnData = function(savePartNumberInput) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.savePartNumber,
              savePartNumberInput
            );
          };
          // public upgradeBireEvolution(bireEvolutionDTO: BireEvolutionDTO, targetRevisionNumber: string): Observable<BireEvolutionDTO> {
          //     const upgradeBireEvolutionInput: UpgradeBireEvolutionInput = {
          //         bireEvolutionDTO: bireEvolutionDTO,
          //         targetRevisionNumber : targetRevisionNumber
          //     };
          //     return super.post<UpgradeBireEvolutionInput, BireEvolutionDTO>
          //         (this.productStructureManagementApi.upgradeBireEvolution, upgradeBireEvolutionInput);
          // }
          WorkshopHomeService.prototype.findBireAttribute = function(attributeId) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireAttribute, attributeId);
          };
          WorkshopHomeService.prototype.findBireAttributesByCategory = function(category) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireAttributesByCategory,
              category
            );
          };
          WorkshopHomeService.prototype.findBireEvolutionPnsByPnCode = function(birePn) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireEvolutionPnsByPnCode,
              birePn
            );
          };
          WorkshopHomeService.prototype.findBireItemPnEvolutionsByPnCodeOrPnPnCode = function(birePn) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireItemPnEvolutionsByPnCodeOrPnPnCode,
              birePn
            );
          };
          WorkshopHomeService.prototype.findBirePnMeasuresByPnCode = function(birePn) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBirePnMeasuresByPnCode,
              birePn
            );
          };
          WorkshopHomeService.prototype.findBirePnAttributesByPn = function(pnCode) {
            var birePnId = {
              pnCode: pnCode
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBirePnAttributesByPn,
              birePnId
            );
          };
          WorkshopHomeService.prototype.getFuncObjectStatusMap = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .FUNC_OBJECT_STATUS_MAP
            );
          };
          WorkshopHomeService.prototype.getObjectStatusMap = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .OBJECT_STATUS_MAP
            );
          };
          WorkshopHomeService.prototype.getPnTraceabilityMap = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .PN_TRACEABILITY_MAP
            );
          };
          WorkshopHomeService.prototype.getRefMeasureCategoryMap = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .REF_MEASURE_CATEGORY_MAP
            );
          };
          // Bind Items Table
          WorkshopHomeService.prototype.findBireItemsBySearchCriteria = function(pnCode) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findAllBireItemByPnCodeAndFamilyVariantAndItemNumberAndFunctionCode,
              pnCode
            );
          };
          WorkshopHomeService.prototype.findBireItemsBySearchCriteriaPartNumber = function(
            attribute,
            bireItemDTOCriteria,
            pnCode
          ) {
            var criteria = {
              attribute: attribute,
              bireItemDTOCriteria: bireItemDTOCriteria,
              pnCode: pnCode
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireItemsBySearchCriteriaPartNumber,
              criteria
            );
          };
          WorkshopHomeService.prototype.getStructureTypeMap = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .STRUCTURE_TYPE_MAP
            );
          };
          WorkshopHomeService.prototype.findBireActionTypesByActionTypeCodeA = function() {
            var item =
              _shared_constants_bire_action_type_constants__WEBPACK_IMPORTED_MODULE_5__['BireActionTypeConstants']
                .ACTION_TYPE_A;
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireActionTypesByActionTypeCode,
              item
            );
          };
          WorkshopHomeService.prototype.findBireActionTypesByActionTypeCodeB = function() {
            var item =
              _shared_constants_bire_action_type_constants__WEBPACK_IMPORTED_MODULE_5__['BireActionTypeConstants']
                .ACTION_TYPE_B;
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireActionTypesByActionTypeCode,
              item
            );
          };
          WorkshopHomeService.prototype.findBireVersionPnsByPnCode = function(pnCode) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireVersionPnsByPnCode,
              pnCode
            );
          };
          WorkshopHomeService.prototype.findBireMaintenancePlansByPn = function(pnCode) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireMaintenanceProgramByPn, pnCode);
          };
          WorkshopHomeService.prototype.findQuantityUnitMap = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findQuantityUnitMap);
          };
          WorkshopHomeService.prototype.getWorkShopManagerInfo = function(workShopManagerInputDTO) {
            return _super.prototype.post.call(this, this.mannagerApi.getWorkShopManagerInfo, workShopManagerInputDTO);
          };
          WorkshopHomeService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__['AppConfigService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_4__['TaskManagementApi'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__['PropertiesService'],
                _shared_api_manager_api__WEBPACK_IMPORTED_MODULE_2__['ManagerApi']
              ])
            ],
            WorkshopHomeService
          );
          return WorkshopHomeService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/api/unit-matrix-conversion.api.ts':
      /*!**********************************************************!*\
  !*** ./src/app/shared/api/unit-matrix-conversion.api.ts ***!
  \**********************************************************/
      /*! exports provided: UnitConversionMatrixApi */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UnitConversionMatrixApi',
          function() {
            return UnitConversionMatrixApi;
          }
        );
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

        var UnitConversionMatrixApi = /** @class */ (function(_super) {
          __extends(UnitConversionMatrixApi, _super);
          function UnitConversionMatrixApi() {
            var _this = _super.call(this, UnitConversionMatrixApi_1.baseUrl) || this;
            _this.searchUnitMatrixConversion = _super.prototype.appendToBaseUrl.call(_this, '/search');
            _this.getUnitMatrixConversion = _super.prototype.appendToBaseUrl.call(_this, '/get_by_id');
            _this.getDefaultMatrixByFamilyVariant = _super.prototype.appendToBaseUrl.call(
              _this,
              '/get_default_by_family_variant'
            );
            _this.deleteUnitMatrixConversion = _super.prototype.appendToBaseUrl.call(_this, '/delete');
            _this.saveConversionMatrix = _super.prototype.appendToBaseUrl.call(_this, '/save');
            return _this;
          }
          UnitConversionMatrixApi_1 = UnitConversionMatrixApi;
          var UnitConversionMatrixApi_1;
          UnitConversionMatrixApi.baseUrl = '/bire_conversion_matrix';
          UnitConversionMatrixApi = UnitConversionMatrixApi_1 = __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(), __metadata('design:paramtypes', [])],
            UnitConversionMatrixApi
          );
          return UnitConversionMatrixApi;
        })(_abstract_api__WEBPACK_IMPORTED_MODULE_1__['AbstractApi']);

        /***/
      },

    /***/ './src/app/shared/components/work-scheduling/work-scheduling.component.html':
      /*!**********************************************************************************!*\
  !*** ./src/app/shared/components/work-scheduling/work-scheduling.component.html ***!
  \**********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "global.results" | translate }} ({{ nbResultsFiltered!=undefined ? nbResultsFiltered : !!treeTable ? treeTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class="grid-cell-content">\r\n              <div class="slider-row">\r\n                <div class="time-resolution">\r\n                  <p-slider\r\n                    [max]="component.TIME_RESOLUTION_MAX_ZOOM"\r\n                    [min]="component.TIME_RESOLUTION_MIN_ZOOM"\r\n                    [(ngModel)]="schedulerZoomLevel"\r\n                    (onChange)="onChangeTimeResolution($event)"\r\n                  ></p-slider>\r\n                </div>\r\n              </div>\r\n              <div class="row">\r\n                <div class="scheduler-wrap" [ngClass]="{ show: true }">\r\n                  <bry-scheduler\r\n                    [eventColor]="schedulerConfig[\'eventColor\']"\r\n                    [barMargin]="barMargin"\r\n                    [columns]="schedulerConfig[\'columns\']"\r\n                    [startDate]="schedulerConfig[\'startDate\']"\r\n                    [endDate]="schedulerConfig[\'endDate\']"\r\n                    [timeRanges]="schedulerConfig[\'timeRanges\']"\r\n                    [timeRangesFeature]="schedulerConfig[\'timeRangesFeature\']"\r\n                    [viewPreset]="schedulerConfig[\'viewPreset\']"\r\n                    [resources]="resourcesProjectNumber"\r\n                    [filterBarFeature]="true"\r\n                    [events]="events"\r\n                    [eventTooltipFeature]="schedulerConfig[\'eventTooltip\']"\r\n                    [contextMenuFeature]="schedulerConfig[\'contextMenu\']"\r\n                    [readOnly]="schedulerConfig[\'readOnly\']"\r\n                    [zoomKeepsOriginalTimespan]="schedulerConfig[\'zoomKeepsOriginalTimespan\']"\r\n                    [zoomOnMouseWheel]="schedulerConfig[\'zoomOnMouseWheel\']"\r\n                    [zoomOnTimeAxisDoubleClick]="schedulerConfig[\'zoomOnTimeAxisDoubleClick\']"\r\n                    (onSchedulerEvents)="onSchedulerEvents($event)"\r\n                  >\r\n                  </bry-scheduler>\r\n                </div>\r\n              </div>\r\n          </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/work-scheduling/work-scheduling.component.scss':
      /*!**********************************************************************************!*\
  !*** ./src/app/shared/components/work-scheduling/work-scheduling.component.scss ***!
  \**********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host ::ng-deep div.slider-row {\n  display: flex;\n  justify-content: flex-end; }\n\n:host ::ng-deep .grid-cell-content {\n  flex-direction: column !important; }\n\n:host ::ng-deep a {\n  color: #01579b; }\n\n:host ::ng-deep a.project-number-select {\n    border-bottom-color: transparent;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    color: #01579b;\n    cursor: pointer;\n    transition: border-bottom-color 0.25s ease-in-out; }\n\n:host ::ng-deep a:hover {\n    text-decoration: underline; }\n\n:host ::ng-deep .b-sch-event {\n  cursor: default; }\n\n:host ::ng-deep .b-sch-event.undefinedDueDate {\n    background: repeating-linear-gradient(-45deg, #f6685e, #f6685e 7px, white 7px, white 14px) !important; }\n\n:host ::ng-deep .b-sch-event.undefinedDueDate:hover {\n      background: #f6685e !important; }\n\n:host ::ng-deep .b-sch-event.gray {\n    background-color: #c8d4d6 !important; }\n\n:host ::ng-deep .b-sch-event.green {\n    background-color: #4caf50 !important; }\n\n:host ::ng-deep .b-sch-event.yellow {\n    background-color: #dddf00 !important; }\n\n:host ::ng-deep .b-sch-event.red {\n    background-color: #f6685e !important; }\n\n:host ::ng-deep .b-sch-event.blue {\n    background-color: #b8d0e8 !important; }\n\n:host ::ng-deep .time-resolution {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  margin: 0 calc(2 * 8px);\n  margin-bottom: 1em; }\n\n:host ::ng-deep .time-resolution p-slider {\n    width: 10rem; }\n\n:host .aw-tree-table2 tr:not(.read-only):not(.ui-state-highlight):hover > td {\n  background-color: transparent !important;\n  border-bottom: 0px !important;\n  border-top: 0px !important; }\n\n:host .aw-tree-table2 .aw-table-actions {\n  margin-right: 3%; }\n\n:host .scheduler-wrap {\n  height: 75vh;\n  visibility: hidden; }\n\n:host .scheduler-wrap.show {\n    visibility: visible; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvd29yay1zY2hlZHVsaW5nL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHdvcmstc2NoZWR1bGluZ1xcd29yay1zY2hlZHVsaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy93b3JrLXNjaGVkdWxpbmcvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGFBQWE7RUFDYix5QkFBeUIsRUFBQTs7QUFIN0I7RUFPSSxpQ0FBaUMsRUFBQTs7QUFQckM7RUFXSSxjQ1RrQixFQUFBOztBREZ0QjtJQWNNLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaURBQ0YsRUFBQTs7QUFwQko7SUF1Qk0sMEJBQTBCLEVBQUE7O0FBdkJoQztFQTRCSSxlQUFlLEVBQUE7O0FBNUJuQjtJQStCTSxxR0FBNkcsRUFBQTs7QUEvQm5IO01Ba0NRLDhCQUFpQyxFQUFBOztBQWxDekM7SUF1Q00sb0NBQW1DLEVBQUE7O0FBdkN6QztJQTJDTSxvQ0FBMEMsRUFBQTs7QUEzQ2hEO0lBK0NNLG9DQUFxQyxFQUFBOztBQS9DM0M7SUFtRE0sb0NBQXdDLEVBQUE7O0FBbkQ5QztJQXVETSxvQ0FBeUMsRUFBQTs7QUF2RC9DO0VBNERJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUFvQztFQUNwQyxrQkFBa0IsRUFBQTs7QUFoRXRCO0lBa0VNLFlBQVksRUFBQTs7QUFsRWxCO0VBdUVJLHdDQUF3QztFQUN4Qyw2QkFBNkI7RUFDN0IsMEJBQTBCLEVBQUE7O0FBekU5QjtFQThFTSxnQkFBZ0IsRUFBQTs7QUE5RXRCO0VBbUZJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFwRnRCO0lBdUZNLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvd29yay1zY2hlZHVsaW5nL3dvcmstc2NoZWR1bGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbjpob3N0IHtcclxuICA6Om5nLWRlZXAgZGl2LnNsaWRlci1yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuZ3JpZC1jZWxsLWNvbnRlbnR7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgYSB7XHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAmLnByb2plY3QtbnVtYmVyLXNlbGVjdCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgICBjb2xvcjogIzAxNTc5YjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5iLXNjaC1ldmVudHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAmLnVuZGVmaW5lZER1ZURhdGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KC00NWRlZywgJHJlZC1saWdodDEsICRyZWQtbGlnaHQxIDdweCwgd2hpdGUgN3B4LCB3aGl0ZSAxNHB4KSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmdyYXkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTEgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLmdyZWVuIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICYueWVsbG93IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdzEgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLnJlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5ibHVlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLnRpbWUtcmVzb2x1dGlvbiB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW46IDAgY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBwLXNsaWRlciB7XHJcbiAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hdy10cmVlLXRhYmxlMiB0cjpub3QoLnJlYWQtb25seSk6bm90KC51aS1zdGF0ZS1oaWdobGlnaHQpOmhvdmVyID4gdGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYXctdHJlZS10YWJsZTIge1xyXG4gICAgLmF3LXRhYmxlLWFjdGlvbnMge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNjaGVkdWxlci13cmFwIHtcclxuICAgIGhlaWdodDogNzV2aDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICAmLnNob3cge1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */';

        /***/
      },

    /***/ './src/app/shared/components/work-scheduling/work-scheduling.component.ts':
      /*!********************************************************************************!*\
  !*** ./src/app/shared/components/work-scheduling/work-scheduling.component.ts ***!
  \********************************************************************************/
      /*! exports provided: WorkSchedulingComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'WorkSchedulingComponent',
          function() {
            return WorkSchedulingComponent;
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
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! moment */ './node_modules/moment/moment.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _constants_lang_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../constants/lang-constants */ './src/app/shared/constants/lang-constants.ts'
        );
        /* harmony import */ var _services_bidm_project_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../services/bidm-project.service */ './src/app/shared/services/bidm-project.service.ts'
        );
        /* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _services_work_scheduling_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../services/work-scheduling.service */ './src/app/shared/services/work-scheduling.service.ts'
        );
        /* harmony import */ var _types_generic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../types/generic-component */ './src/app/shared/types/generic-component.ts'
        );
        /* harmony import */ var _utils_list_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../scheduler/scheduler.component */ './src/app/shared/components/scheduler/scheduler.component.ts'
        );
        /* harmony import */ var _scheduler_scheduler_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../scheduler/scheduler.service */ './src/app/shared/components/scheduler/scheduler.service.ts'
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

        var CellColor;
        (function(CellColor) {
          CellColor['Grey'] = 'gray';
          CellColor['Green'] = 'green';
          CellColor['Red'] = 'red';
          CellColor['Yellow'] = 'yellow';
          CellColor['Blue'] = 'blue';
        })(CellColor || (CellColor = {}));
        var WorkSchedulingComponent = /** @class */ (function(_super) {
          __extends(WorkSchedulingComponent, _super);
          function WorkSchedulingComponent(
            dateService,
            workSchedulingService,
            propertiesService,
            bidmProjectService,
            schedulerService,
            translateService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Write
              ) || this;
            _this.dateService = dateService;
            _this.workSchedulingService = workSchedulingService;
            _this.propertiesService = propertiesService;
            _this.bidmProjectService = bidmProjectService;
            _this.schedulerService = schedulerService;
            _this.translateService = translateService;
            _this.dateDiff = 86400000; // 1000 * 3600 * 24;
            _this.noOfDays = 7;
            _this.barMargin = 10;
            _this.resourcesProjectNumberCounter = 0;
            _this.eventCounter = 0;
            _this.timeRanges = true;
            // For bryntum scheduler
            _this.component = WorkSchedulingComponent_1;
            _this.schedulerZoomLevel = WorkSchedulingComponent_1.TIME_RESOLUTION_MAX_ZOOM;
            _this.schedulerTimeResolutionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__['Subject']();
            _this.init();
            _this.loadMroCenterList();
            _this.loadTypeList();
            _this.loadUserList();
            _this.workSchedulingService.setRefreshButton(_this.refresh.bind(_this));
            return _this;
          }
          WorkSchedulingComponent_1 = WorkSchedulingComponent;
          Object.defineProperty(WorkSchedulingComponent.prototype, 'tableData', {
            get: function() {
              return this.treeTable;
            },
            set: function(value) {
              if (!!value) {
                this.treeTable = value;
                this.treeTableTemp = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(this.treeTable);
                this.buildSchedulerProjectNumberList();
                this.buildSchedulerEventsList();
              }
            },
            enumerable: true,
            configurable: true
          });
          WorkSchedulingComponent.prototype.refresh = function() {
            this.treeTable = [];
          };
          WorkSchedulingComponent.prototype.init = function() {
            this.mroCenterList = [];
            this.typeList = [];
            this.userList = [];
            this.treeTable = [];
            this.treeTableTemp = [];
            this.onRowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          };
          WorkSchedulingComponent.prototype.getComponentName = function() {
            return 'WorkSchedulingComponent';
          };
          WorkSchedulingComponent.prototype.ngOnInit = function() {
            if (!this.firstColumnName) {
              _super.prototype.throwUnboundLocalError.call(this, 'ngOnInit', 'firstColumnName');
            }
            this.setGlobalFilter();
            // Bryntum scheduler init
            this.setSchedulerConfig();
          };
          WorkSchedulingComponent.prototype.showToday = function() {
            this.scheduler.schedulerEngine.zoomTo({
              centerDate: new Date(),
              preset: this.scheduler.schedulerEngine.viewPreset
            });
          };
          WorkSchedulingComponent.prototype.registerSchedulerTimeResolutionObservable = function() {
            var _this = this;
            this.schedulerTimeResolutionChanged
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['distinctUntilChanged'])(),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['takeUntil'])(this.unsubscribe)
              )
              .subscribe({
                next: function(value) {
                  _this.scheduler.schedulerEngine.zoomTo(value);
                }
              });
          };
          WorkSchedulingComponent.prototype.onChangeTimeResolution = function(event) {
            this.schedulerTimeResolutionChanged.next(event.value);
          };
          WorkSchedulingComponent.prototype.generateSchedulerColumnsProjectNumberId = function() {
            return this.resourcesProjectNumberCounter++;
          };
          WorkSchedulingComponent.prototype.setSchedulerConfig = function() {
            this.schedulerConfig = {
              eventColor: 'transparent',
              readOnly: true,
              timeRanges: true,
              timeRangesFeature: {
                showCurrentTimeLine: true
              },
              zoomKeepsOriginalTimespan: true,
              zoomOnMouseWheel: false,
              zoomOnTimeAxisDoubleClick: false
            };
            this.registerSchedulerTimeResolutionObservable();
            this.setSchedulerDate();
            this.setSchedulerWOColumn();
            this.setSchedulerViewPreset();
            this.setTooltipFeature();
            this.setContextMenuFeature();
          };
          WorkSchedulingComponent.prototype.setContextMenuFeature = function() {
            this.schedulerConfig = __assign({}, this.schedulerConfig, {
              contextMenu: {
                items: {
                  addEvent: false
                },
                processHeaderItems: function() {
                  return false;
                }
              }
            });
          };
          WorkSchedulingComponent.prototype.setTooltipFeature = function() {
            var _this = this;
            this.schedulerConfig = __assign({}, this.schedulerConfig, {
              eventTooltip: {
                template: function(data) {
                  var foundData = _this.treeTable.find(function(value) {
                    return value.data.projectId === data.eventRecord.data.resourceId;
                  });
                  var returnValue = '';
                  if (!!foundData) {
                    returnValue = _this.showTooltip(foundData.data);
                  }
                  return returnValue;
                },
                anchorToTarget: false
              }
            });
          };
          WorkSchedulingComponent.prototype.buildSchedulerEventsList = function() {
            var _this = this;
            this.events = this.treeTable.map(function(obj) {
              var farEndDate = 2999;
              var farEndMonth = 1;
              return {
                id: _this.generateSchedulerEventId(),
                resourceId: obj.data.projectId,
                startDate: obj.data.projectStartDate,
                endDate:
                  obj.data.projectDueDate != undefined ? obj.data.projectDueDate : new Date(farEndDate, farEndMonth),
                eventType: '',
                cls:
                  obj.data.projectDueDate != undefined
                    ? _this.getCellColor(obj.data)
                    : _this.getCellColor(obj.data) + ' undefinedDueDate',
                draggable: false,
                resizable: false
              };
            });
          };
          WorkSchedulingComponent.prototype.buildSchedulerProjectNumberList = function() {
            var _this = this;
            this.resourcesProjectNumber = this.treeTable.map(function(obj) {
              return {
                id: obj.data.projectId,
                generatedId: _this.generateSchedulerColumnsProjectNumberId(),
                projectNumber:
                  '' + obj.data.projectNumber + ' (' + _this.dateService.dateToString(obj.data.projectStartDate) + ')',
                children: []
              };
            });
          };
          WorkSchedulingComponent.prototype.setSchedulerViewPreset = function() {
            this.schedulerConfig = __assign({}, this.schedulerConfig, {
              viewPreset: {
                name: WorkSchedulingComponent_1.dayAndWeek,
                displayDateFormat: WorkSchedulingComponent_1.displayDateFormat,
                timeResolution: {
                  unit: WorkSchedulingComponent_1.day,
                  increment: 1
                },
                headerConfig: {
                  middle: {
                    unit: WorkSchedulingComponent_1.day,
                    dateFormat: WorkSchedulingComponent_1.dateFormat
                  }
                }
              }
            });
          };
          WorkSchedulingComponent.prototype.setSchedulerWOColumn = function() {
            this.schedulerConfig = __assign({}, this.schedulerConfig, {
              columns: [
                {
                  text: this.translateService.instant(this.getTranslateKey('projectNumber')),
                  field: 'projectNumber',
                  width: 140,
                  htmlEncode: false,
                  sortable: true,
                  editor: false,
                  enableCellContextMenu: false,
                  renderer: function(_a) {
                    var record = _a.record;
                    return (
                      '\n            <div class="info">\n                    <a id="' +
                      record.data.generatedId +
                      '" class="project-number-select">' +
                      record.data.projectNumber +
                      '</a>\n            </div>\n          '
                    );
                  }
                }
              ]
            });
          };
          WorkSchedulingComponent.prototype.setSchedulerDate = function() {
            this.schedulerConfig = __assign({}, this.schedulerConfig, {
              startDate: !!this.events
                ? this.schedulerService.getFirstEventStartDate(this.events)
                : moment__WEBPACK_IMPORTED_MODULE_3__()
                    .startOf('year')
                    .toDate(),
              endDate: !!this.events
                ? this.schedulerService.getLastEventEndDate(this.events)
                : moment__WEBPACK_IMPORTED_MODULE_3__()
                    .endOf('year')
                    .toDate()
            });
          };
          WorkSchedulingComponent.prototype.onSchedulerEvents = function($event) {
            var action = 'action';
            var records = 'records';
            var type = 'type';
            var target = 'target';
            // Update number of results
            if (!!$event && !!$event[action] && $event[action] === 'filter' && !!$event[records]) {
              this.nbResultsFiltered = $event[records].length;
            }
            if ($event[type] === 'cellclick' && $event[target].matches('.project-number-select')) {
              var projectResource_1 = this.resourcesProjectNumber.find(function(resource) {
                return resource.generatedId.toString() === $event[target].id;
              });
              if (!!projectResource_1) {
                var projectFromTreeTable = this.treeTable.find(function(resource) {
                  return resource.data.projectId === projectResource_1.id;
                });
                if (!!projectFromTreeTable) {
                  this.openDetailsPage(projectFromTreeTable.data);
                }
              }
            }
          };
          WorkSchedulingComponent.prototype.generateSchedulerEventId = function() {
            return this.eventCounter++;
          };
          WorkSchedulingComponent.prototype.getCellColor = function(rowData) {
            var returnColor = '';
            if (!!rowData.projectStartDate) {
              if (
                rowData.statusState ===
                  _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                    .AIRM_PROJECT_STATUS_SIMULATED ||
                rowData.statusState ===
                  _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                    .AIRM_PROJECT_STATUS_SCHEDULED
              ) {
                returnColor = CellColor.Grey;
              } else if (
                rowData.statusState ===
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                  .AIRM_PROJECT_STATUS_CLOSE
              ) {
                returnColor = CellColor.Green;
              } else if (
                !!rowData.projectDueDate &&
                rowData.statusState !==
                  _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                    .AIRM_PROJECT_STATUS_CLOSE
              ) {
                if (new Date(rowData.projectDueDate.toDateString()).valueOf() < new Date().valueOf()) {
                  returnColor = CellColor.Red;
                }
                var dateDiffernce = this.getDateDiffInDays(new Date(), rowData.projectDueDate);
                if (dateDiffernce > 0 && dateDiffernce < this.noOfDays) {
                  returnColor = CellColor.Yellow;
                } else {
                  returnColor = CellColor.Blue;
                }
              } else if (!rowData.projectDueDate) {
                returnColor = CellColor.Red;
              } else {
                returnColor = CellColor.Blue;
              }
            }
            return returnColor;
          };
          WorkSchedulingComponent.prototype.showTooltip = function(rowData) {
            return this.bidmProjectService.getRepresentationAsHtml(
              rowData,
              this.mroCenterList,
              this.workPackageStatusList,
              this.typeList,
              this.userList
            );
          };
          WorkSchedulingComponent.prototype.openDetailsPage = function(rowData) {
            if (!!rowData) {
              this.onRowClick.emit(rowData);
            }
          };
          WorkSchedulingComponent.prototype.setGlobalFilter = function() {
            var _this = this;
            this.searchGlobalFilterChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__['Subject']();
            this.searchGlobalFilterChanged
              .pipe(
                // tslint:disable-next-line: no-magic-numbers
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['debounceTime'])(500),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['distinctUntilChanged'])(),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['takeUntil'])(this.unsubscribe)
              )
              .subscribe(function(searchTextValue) {
                _this.filterWorkSchedulingStructure(searchTextValue);
              });
          };
          WorkSchedulingComponent.prototype.filterWorkSchedulingStructure = function(searchTextValue) {
            var _this = this;
            this.treeTable = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(this.treeTableTemp);
            this.treeTable = this.treeTable.filter(function(elt) {
              return _this.matchTreeStructureNode(elt, !!searchTextValue ? searchTextValue.toLowerCase() : undefined);
            });
          };
          WorkSchedulingComponent.prototype.matchTreeStructureNode = function(node, searchText) {
            var _this = this;
            if (!_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__['ListUtils'].isNullOrEmpty(node.children)) {
              node.children = node.children.filter(function(child) {
                return _this.matchTreeStructureNode(child, searchText);
              });
            }
            var nodeData = node.data;
            // Work Package
            var workPackage = _utils_string_utils__WEBPACK_IMPORTED_MODULE_17__['StringUtils']
              .orEmpty(nodeData.projectNumber.toString())
              .toLowerCase();
            var workPackageMatch =
              _utils_string_utils__WEBPACK_IMPORTED_MODULE_17__['StringUtils'].isNullOrEmpty(searchText) ||
              workPackage.includes(searchText);
            // Start Date
            var startDate = _utils_string_utils__WEBPACK_IMPORTED_MODULE_17__['StringUtils'].orEmpty(
              this.dateService.dateToString(nodeData.projectStartDate)
            );
            var startDateMatch =
              _utils_string_utils__WEBPACK_IMPORTED_MODULE_17__['StringUtils'].isNullOrEmpty(searchText) ||
              startDate.includes(searchText);
            return (
              _utils_list_utils__WEBPACK_IMPORTED_MODULE_16__['ListUtils'].orEmpty(node.children).length > 0 ||
              workPackageMatch || startDateMatch
            );
          };
          WorkSchedulingComponent.prototype.getDateDiffInDays = function(date1, date2) {
            var timeDiff = date2.getTime() - date1.getTime();
            return timeDiff / this.dateDiff;
          };
          WorkSchedulingComponent.prototype.loadMroCenterList = function() {
            var _this = this;
            this.workSchedulingService.findAllBireSite().subscribe(function(results) {
              _this.mroCenterList = _utils_list_utils__WEBPACK_IMPORTED_MODULE_16__['ListUtils'].orEmpty(results);
            });
          };
          WorkSchedulingComponent.prototype.loadTypeList = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__['GenericPropertyConstants']
                  .WORK_PACKAGE_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.typeList = _utils_list_utils__WEBPACK_IMPORTED_MODULE_16__['ListUtils'].orEmpty(results);
              });
          };
          WorkSchedulingComponent.prototype.loadUserList = function() {
            var _this = this;
            this.workSchedulingService
              .findBidoUsersWithUseCase(
                _constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_9__['BidoFunctionTypeConstants']
                  .UC_AIRM_RECEPTION
              )
              .subscribe(function(results) {
                _this.userList = _utils_list_utils__WEBPACK_IMPORTED_MODULE_16__['ListUtils']
                  .orEmpty(results)
                  .filter(function(elt) {
                    return !_utils_string_utils__WEBPACK_IMPORTED_MODULE_17__['StringUtils'].isNullOrEmpty(elt.userId);
                  })
                  .map(function(result) {
                    var userName =
                      _utils_string_utils__WEBPACK_IMPORTED_MODULE_17__['StringUtils'].orEmpty(result.firstname) +
                      ' ' +
                      _utils_string_utils__WEBPACK_IMPORTED_MODULE_17__['StringUtils'].orEmpty(result.lastname);
                    return {
                      label: userName.trim(),
                      value: result.userId
                    };
                  });
              });
          };
          WorkSchedulingComponent.prototype.ngAfterViewInit = function() {
            if (
              this.translateService.currentLang ===
              _constants_lang_constants__WEBPACK_IMPORTED_MODULE_11__['LangConstants'].FRENCH_CODE
            ) {
              this.scheduler.schedulerEngine.localeManager.locale = 'Fr';
            } else {
              this.scheduler.schedulerEngine.localeManager.locale = 'En';
            }
            this.showToday();
          };
          var WorkSchedulingComponent_1;
          WorkSchedulingComponent.dayAndWeek = 'dayAndWeek';
          WorkSchedulingComponent.hourAndDay = 'hourAndDay';
          WorkSchedulingComponent.day = 'day';
          WorkSchedulingComponent.dateFormat = 'DD/MM/YYYY';
          WorkSchedulingComponent.displayDateFormat = 'DD/MM/YYYY';
          WorkSchedulingComponent.TIME_RESOLUTION_MAX_ZOOM = 10;
          WorkSchedulingComponent.TIME_RESOLUTION_MIN_ZOOM = 0;
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                _scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_18__['SchedulerComponent']
              ),
              __metadata(
                'design:type',
                _scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_18__['SchedulerComponent']
              )
            ],
            WorkSchedulingComponent.prototype,
            'scheduler',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            WorkSchedulingComponent.prototype,
            'onRowClick',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            WorkSchedulingComponent.prototype,
            'firstColumnName',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            WorkSchedulingComponent.prototype,
            'workPackageStatusList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            WorkSchedulingComponent.prototype,
            'isTableLoading',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array),
              __metadata('design:paramtypes', [Array])
            ],
            WorkSchedulingComponent.prototype,
            'tableData',
            null
          );
          WorkSchedulingComponent = WorkSchedulingComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-work-scheduling',
                template: __webpack_require__(
                  /*! ./work-scheduling.component.html */ './src/app/shared/components/work-scheduling/work-scheduling.component.html'
                ),
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                styles: [
                  __webpack_require__(
                    /*! ./work-scheduling.component.scss */ './src/app/shared/components/work-scheduling/work-scheduling.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__['DateService'],
                _services_work_scheduling_service__WEBPACK_IMPORTED_MODULE_14__['WorkSchedulingService'],
                _services_properties_service__WEBPACK_IMPORTED_MODULE_13__['PropertiesService'],
                _services_bidm_project_service__WEBPACK_IMPORTED_MODULE_12__['BidmProjectService'],
                _scheduler_scheduler_service__WEBPACK_IMPORTED_MODULE_19__['SchedulerService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            WorkSchedulingComponent
          );
          return WorkSchedulingComponent;
        })(_types_generic_component__WEBPACK_IMPORTED_MODULE_15__['GenericComponent']);

        /***/
      },

    /***/ './src/app/shared/components/work-scheduling/work-scheduling.module.ts':
      /*!*****************************************************************************!*\
  !*** ./src/app/shared/components/work-scheduling/work-scheduling.module.ts ***!
  \*****************************************************************************/
      /*! exports provided: WorkSchedulingModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'WorkSchedulingModule', function() {
          return WorkSchedulingModule;
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
        /* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/primeng */ './node_modules/primeng/primeng.js'
        );
        /* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_primeng__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/treetable */ './node_modules/primeng/treetable.js'
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_treetable__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _services_work_scheduling_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../services/work-scheduling.service */ './src/app/shared/services/work-scheduling.service.ts'
        );
        /* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _scheduler_scheduler_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../scheduler/scheduler.module */ './src/app/shared/components/scheduler/scheduler.module.ts'
        );
        /* harmony import */ var _work_scheduling_work_scheduling_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../work-scheduling/work-scheduling.component */ './src/app/shared/components/work-scheduling/work-scheduling.component.ts'
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
          primeng_table__WEBPACK_IMPORTED_MODULE_4__['TableModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          primeng_treetable__WEBPACK_IMPORTED_MODULE_6__['TreeTableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__['TooltipModule']
        ];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_11__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _work_scheduling_work_scheduling_component__WEBPACK_IMPORTED_MODULE_13__['WorkSchedulingComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_services_work_scheduling_service__WEBPACK_IMPORTED_MODULE_10__['WorkSchedulingService']];
        var WorkSchedulingModule = /** @class */ (function() {
          function WorkSchedulingModule() {}
          WorkSchedulingModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS),
                imports: __spread(
                  [
                    _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_7__['AngularCommonSharedModule'],
                    _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_8__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _app_common_shared_module__WEBPACK_IMPORTED_MODULE_9__['AppCommonSharedModule']
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES,
                  [
                    _scheduler_scheduler_module__WEBPACK_IMPORTED_MODULE_12__['SchedulerModule'],
                    primeng_primeng__WEBPACK_IMPORTED_MODULE_3__['SliderModule']
                  ]
                ),
                providers: __spread(SERVICES)
              })
            ],
            WorkSchedulingModule
          );
          return WorkSchedulingModule;
        })();

        /***/
      },

    /***/ './src/app/shared/services/work-scheduling.service.ts':
      /*!************************************************************!*\
  !*** ./src/app/shared/services/work-scheduling.service.ts ***!
  \************************************************************/
      /*! exports provided: WorkSchedulingService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'WorkSchedulingService', function() {
          return WorkSchedulingService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _api_am_project_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../api/am-project-management.api */ './src/app/shared/api/am-project-management.api.ts'
        );
        /* harmony import */ var _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../api/user-profile-management.api */ './src/app/shared/api/user-profile-management.api.ts'
        );
        /* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./app-config.service */ './src/app/shared/services/app-config.service.ts'
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

        var WorkSchedulingService = /** @class */ (function(_super) {
          __extends(WorkSchedulingService, _super);
          function WorkSchedulingService(
            http,
            appConfigService,
            userProfileManagementApi,
            productStructureManagementApi,
            amProjectManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.userProfileManagementApi = userProfileManagementApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.amProjectManagementApi = amProjectManagementApi;
            _this._refreshButtonSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__['Subject']();
            _this._refreshButton$ = _this._refreshButtonSource.asObservable();
            return _this;
          }
          WorkSchedulingService.prototype.findAllBireSite = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireSite);
          };
          WorkSchedulingService.prototype.findBidoUsersWithUseCase = function(useCase) {
            return _super.prototype.post.call(this, this.userProfileManagementApi.findBidoUsersWithUseCase, useCase);
          };
          WorkSchedulingService.prototype.getServerDate = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.getServerDate, undefined);
          };
          WorkSchedulingService.prototype.getWorkPackageSchedulingList = function() {
            var bidmProjectDTO = {};
            return _super.prototype.post.call(
              this,
              this.amProjectManagementApi.findWorkPackageSchedulingList,
              bidmProjectDTO
            );
          };
          Object.defineProperty(WorkSchedulingService.prototype, 'refreshButton$', {
            get: function() {
              return this._refreshButton$;
            },
            enumerable: true,
            configurable: true
          });
          WorkSchedulingService.prototype.setRefreshButton = function(f) {
            this._refreshButtonSource.next(f);
          };
          WorkSchedulingService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _app_config_service__WEBPACK_IMPORTED_MODULE_7__['AppConfigService'],
                _api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_5__['UserProfileManagementApi'],
                _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__['ProductStructureManagementApi'],
                _api_am_project_management_api__WEBPACK_IMPORTED_MODULE_3__['AMProjectManagementApi']
              ])
            ],
            WorkSchedulingService
          );
          return WorkSchedulingService;
        })(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=maintenance-maintenance-module.js.map
