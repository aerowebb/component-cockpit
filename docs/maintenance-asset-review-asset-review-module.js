(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['maintenance-asset-review-asset-review-module'],
  {
    /***/ './node_modules/primeng/components/inputtextarea/inputtextarea.js':
      /*!************************************************************************!*\
  !*** ./node_modules/primeng/components/inputtextarea/inputtextarea.js ***!
  \************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var __decorate =
          (this && this.__decorate) ||
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
          (this && this.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };
        var __param =
          (this && this.__param) ||
          function(paramIndex, decorator) {
            return function(target, key) {
              decorator(target, key, paramIndex);
            };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        var core_1 = __webpack_require__(/*! @angular/core */ './node_modules/@angular/core/fesm5/core.js');
        var forms_1 = __webpack_require__(/*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js');
        var common_1 = __webpack_require__(/*! @angular/common */ './node_modules/@angular/common/fesm5/common.js');
        var InputTextarea = /** @class */ (function() {
          function InputTextarea(el, ngModel) {
            this.el = el;
            this.ngModel = ngModel;
            this.onResize = new core_1.EventEmitter();
          }
          InputTextarea.prototype.ngDoCheck = function() {
            this.updateFilledState();
            if (this.autoResize) {
              this.resize();
            }
          };
          //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
          InputTextarea.prototype.onInput = function(e) {
            this.updateFilledState();
            if (this.autoResize) {
              this.resize(e);
            }
          };
          InputTextarea.prototype.updateFilledState = function() {
            this.filled =
              (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
              (this.ngModel && this.ngModel.model);
          };
          InputTextarea.prototype.onFocus = function(e) {
            if (this.autoResize) {
              this.resize(e);
            }
          };
          InputTextarea.prototype.onBlur = function(e) {
            if (this.autoResize) {
              this.resize(e);
            }
          };
          InputTextarea.prototype.resize = function(event) {
            this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
            if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
              this.el.nativeElement.style.overflowY = 'scroll';
              this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
            } else {
              this.el.nativeElement.style.overflow = 'hidden';
            }
            this.onResize.emit(event || {});
          };
          __decorate(
            [core_1.Input(), __metadata('design:type', Boolean)],
            InputTextarea.prototype,
            'autoResize',
            void 0
          );
          __decorate(
            [core_1.Output(), __metadata('design:type', core_1.EventEmitter)],
            InputTextarea.prototype,
            'onResize',
            void 0
          );
          __decorate(
            [
              core_1.HostListener('input', ['$event']),
              __metadata('design:type', Function),
              __metadata('design:paramtypes', [Object]),
              __metadata('design:returntype', void 0)
            ],
            InputTextarea.prototype,
            'onInput',
            null
          );
          __decorate(
            [
              core_1.HostListener('focus', ['$event']),
              __metadata('design:type', Function),
              __metadata('design:paramtypes', [Object]),
              __metadata('design:returntype', void 0)
            ],
            InputTextarea.prototype,
            'onFocus',
            null
          );
          __decorate(
            [
              core_1.HostListener('blur', ['$event']),
              __metadata('design:type', Function),
              __metadata('design:paramtypes', [Object]),
              __metadata('design:returntype', void 0)
            ],
            InputTextarea.prototype,
            'onBlur',
            null
          );
          InputTextarea = __decorate(
            [
              core_1.Directive({
                selector: '[pInputTextarea]',
                host: {
                  '[class.ui-inputtext]': 'true',
                  '[class.ui-corner-all]': 'true',
                  '[class.ui-inputtextarea-resizable]': 'autoResize',
                  '[class.ui-state-default]': 'true',
                  '[class.ui-widget]': 'true',
                  '[class.ui-state-filled]': 'filled'
                }
              }),
              __param(1, core_1.Optional()),
              __metadata('design:paramtypes', [core_1.ElementRef, forms_1.NgModel])
            ],
            InputTextarea
          );
          return InputTextarea;
        })();
        exports.InputTextarea = InputTextarea;
        var InputTextareaModule = /** @class */ (function() {
          function InputTextareaModule() {}
          InputTextareaModule = __decorate(
            [
              core_1.NgModule({
                imports: [common_1.CommonModule],
                exports: [InputTextarea],
                declarations: [InputTextarea]
              })
            ],
            InputTextareaModule
          );
          return InputTextareaModule;
        })();
        exports.InputTextareaModule = InputTextareaModule;
        //# sourceMappingURL=inputtextarea.js.map

        /***/
      },

    /***/ './node_modules/primeng/overlaypanel.js':
      /*!**********************************************!*\
  !*** ./node_modules/primeng/overlaypanel.js ***!
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
            /*! ./components/overlaypanel/overlaypanel */ './node_modules/primeng/components/overlaypanel/overlaypanel.js'
          )
        );

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/asset-review.module.ts':
      /*!**********************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/asset-review.module.ts ***!
  \**********************************************************************/
      /*! exports provided: AssetReviewModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AssetReviewModule', function() {
          return AssetReviewModule;
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
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/keyfilter */ './node_modules/primeng/keyfilter.js'
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/message */ './node_modules/primeng/message.js'
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_message__WEBPACK_IMPORTED_MODULE_7__
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
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! primeng/treetable */ './node_modules/primeng/treetable.js'
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_treetable__WEBPACK_IMPORTED_MODULE_14__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_asset_rev_search_asset_rev_search_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/components/asset-rev-search/asset-rev-search.module */ './src/app/shared/components/asset-rev-search/asset-rev-search.module.ts'
        );
        /* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ './src/app/shared/components/component-sidebar/component-sidebar.mdule.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-customer/dialog-search-customer.module */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../shared/components/dialog-table/dialog-table.module */ './src/app/shared/components/dialog-table/dialog-table.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_work_package_dialog_work_package_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../shared/components/dialog-work-package/dialog-work-package.module */ './src/app/shared/components/dialog-work-package/dialog-work-package.module.ts'
        );
        /* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _shared_components_defect_list_defect_list_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./../../../shared/components/defect-list/defect-list.module */ './src/app/shared/components/defect-list/defect-list.module.ts'
        );
        /* harmony import */ var _form_asset_review_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./form/asset-review-form.component */ './src/app/main/maintenance/asset-review/form/asset-review-form.component.ts'
        );
        /* harmony import */ var _form_asset_review_form_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./form/asset-review-form.service */ './src/app/main/maintenance/asset-review/form/asset-review-form.service.ts'
        );
        /* harmony import */ var _form_asset_view_scope_asset_view_scope_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./form/asset-view-scope/asset-view-scope.component */ './src/app/main/maintenance/asset-review/form/asset-view-scope/asset-view-scope.component.ts'
        );
        /* harmony import */ var _form_flight_operations_validation_flight_operations_validation_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./form/flight-operations-validation/flight-operations-validation.component */ './src/app/main/maintenance/asset-review/form/flight-operations-validation/flight-operations-validation.component.ts'
        );
        /* harmony import */ var _form_flight_operations_validation_flight_operations_validation_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./form/flight-operations-validation/flight-operations-validation.service */ './src/app/main/maintenance/asset-review/form/flight-operations-validation/flight-operations-validation.service.ts'
        );
        /* harmony import */ var _form_flight_operations_validation_popups_dialog_generate_report_dialog_generate_report_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./form/flight-operations-validation/popups/dialog-generate-report/dialog-generate-report.component */ './src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-generate-report/dialog-generate-report.component.ts'
        );
        /* harmony import */ var _form_flight_operations_validation_popups_dialog_simulate_record_dialog_simulate_record_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./form/flight-operations-validation/popups/dialog-simulate-record/dialog-simulate-record.component */ './src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-simulate-record/dialog-simulate-record.component.ts'
        );
        /* harmony import */ var _search_ar_search_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./search/ar-search.component */ './src/app/main/maintenance/asset-review/search/ar-search.component.ts'
        );
        /* harmony import */ var _search_ar_search_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ./search/ar-search.service */ './src/app/main/maintenance/asset-review/search/ar-search.service.ts'
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
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__['CheckboxModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__['ChartModule'],
          primeng_dragdrop__WEBPACK_IMPORTED_MODULE_4__['DragDropModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__['DropdownModule'],
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__['KeyFilterModule'],
          primeng_message__WEBPACK_IMPORTED_MODULE_7__['MessageModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__['OverlayPanelModule'],
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__['RadioButtonModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__['SelectButtonModule'],
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11__['SplitButtonModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_12__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__['TooltipModule'],
          primeng_treetable__WEBPACK_IMPORTED_MODULE_14__['TreeTableModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_25__['TableModule'],
          _shared_components_asset_rev_search_asset_rev_search_module__WEBPACK_IMPORTED_MODULE_18__[
            'AssetRevSearchModule'
          ],
          _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_19__[
            'ComponentSidebarModule'
          ],
          _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_20__[
            'DialogSearchCustomerModule'
          ],
          _shared_components_dialog_work_package_dialog_work_package_module__WEBPACK_IMPORTED_MODULE_22__[
            'DialogWorkPackageModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_24__['ModalModule'],
          _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_21__['DialogTableModule'],
          _shared_components_defect_list_defect_list_module__WEBPACK_IMPORTED_MODULE_27__['DefectListModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _form_asset_view_scope_asset_view_scope_component__WEBPACK_IMPORTED_MODULE_30__['AssetViewScopeComponent'],
          _form_flight_operations_validation_popups_dialog_simulate_record_dialog_simulate_record_component__WEBPACK_IMPORTED_MODULE_34__[
            'DialogSimulateRecordComponent'
          ],
          _form_flight_operations_validation_popups_dialog_generate_report_dialog_generate_report_component__WEBPACK_IMPORTED_MODULE_33__[
            'DialogGenerateReportComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _search_ar_search_component__WEBPACK_IMPORTED_MODULE_35__['ARSearchComponent'],
          _form_asset_review_form_component__WEBPACK_IMPORTED_MODULE_28__['AssetReviewFormComponent'],
          _form_flight_operations_validation_flight_operations_validation_component__WEBPACK_IMPORTED_MODULE_31__[
            'FlightOperationsValidationComponent'
          ]
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _search_ar_search_service__WEBPACK_IMPORTED_MODULE_36__['ARSearchService'],
          _form_asset_review_form_service__WEBPACK_IMPORTED_MODULE_29__['AssetReviewFormService'],
          _form_flight_operations_validation_flight_operations_validation_service__WEBPACK_IMPORTED_MODULE_32__[
            'FlightOperationsValidationService'
          ]
        ];
        var AssetReviewModule = /** @class */ (function() {
          function AssetReviewModule() {}
          AssetReviewModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_15__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_16__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_17__['AppCommonSharedModule'],
                    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_23__[
                      'ManageSearchCriteriaModule'
                    ],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_26__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            AssetReviewModule
          );
          return AssetReviewModule;
        })();

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/asset-review-form.component.html':
      /*!*************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/asset-review-form.component.html ***!
  \*************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="isAssetAircraft" class="page-subtitle">\r\n          - {{ getComponentName() + ".aircraft" | translate }} {{ asset.registration }}\r\n        </div>\r\n        <div *ngIf="isAssetEngine || isAssetEquipment" class="page-subtitle">\r\n          - {{ asset.equipmentDesignation }} / {{ asset.sn }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item [matMenuTriggerFor]="navigations">\r\n        {{ "global.goTo" | translate }}\r\n      </button>\r\n\r\n      <button mat-menu-item [matMenuTriggerFor]="potentialUnitSelection">\r\n        {{ getComponentName() + ".potentialUnit" | translate }}({{ potentialUnitSelected }})\r\n      </button>\r\n\r\n      <button mat-menu-item (click)="reloadAssetReview()">{{ "global.refresh" | translate }}</button>\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n    <mat-menu #navigations="matMenu">\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="navigationLinkList[0].command()">\r\n        {{ navigationLinkList[0].label | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="navigationLinkList[1].command()">\r\n        {{ navigationLinkList[1].label | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="navigationLinkList[2].command()">\r\n        {{ navigationLinkList[2].label | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="navigationLinkList[3].command()">\r\n        {{ navigationLinkList[3].label | translate }}\r\n      </button>\r\n    </mat-menu>\r\n    <mat-menu #potentialUnitSelection="matMenu">\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="potentialUnitList[0].command()">\r\n        {{ potentialUnitList[0].label | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="potentialUnitList[1].command()">\r\n        {{ potentialUnitList[1].label | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="potentialUnitList[2].command()">\r\n        {{ potentialUnitList[2].label | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div id="airworthiness-control-form" class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <mat-tab-group animationDuration="0ms" dynamicHeight [(selectedIndex)]="tabIndex">\r\n        <!-- Home -->\r\n        <mat-tab id="homeTab">\r\n          <ng-template mat-tab-label>\r\n            {{ "home" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container grid-cell-scope">\r\n                <aw-airworthiness-table-asset-view-scope\r\n                  [airworthinessTableColCsnLabel]="airworthinessTableColCsnLabel"\r\n                  [airworthinessTableColTsnLabel]="airworthinessTableColTsnLabel"\r\n                  [asset]="asset"\r\n                  [assetAirworthiness]="assetAirworthiness"\r\n                  [globalAlertListLoading]="globalAlertListLoading"\r\n                  [isAssetAircraft]="isAssetAircraft"\r\n                  [isAssetEngine]="isAssetEngine"\r\n                  [isAssetEquipment]="isAssetEquipment"\r\n                  (onNavigate)="openTopAsset()"\r\n                ></aw-airworthiness-table-asset-view-scope>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container loading-indicator">\r\n                    <div class="grid-cell-title">\r\n                      <span>{{ getComponentName() + ".acrsStatus" | translate }}</span>\r\n                      <div *ngIf="isSummaryTableLoading" class="lds-hourglass"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="table-summary-wrapper">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      class="aw-table-control-summary"\r\n                      [columns]="acrsStatusTableCols"\r\n                      [value]="acrsStatusTable"\r\n                    >\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th\r\n                            pResizableColumn\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'category\'"> </span>\r\n\r\n                            <span *ngSwitchDefault> {{ getComponentName() + "." + col.field | translate }} </span>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-columns="columns" let-rowData>\r\n                        <tr>\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment, width: col.width }"\r\n                          >\r\n                            <span *ngSwitchCase="\'nok\'" class="control-result" [ngClass]="{ nok: rowData[\'nok\'] > 0 }">\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'warning\'"\r\n                              class="control-result"\r\n                              [ngClass]="{ warning: rowData[\'nok\'] == 0 && rowData[\'warning\'] > 0 }"\r\n                            >\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'ok\'"\r\n                              class="control-result"\r\n                              [ngClass]="{ ok: rowData[\'nok\'] == 0 && rowData[\'warning\'] == 0 && rowData[\'ok\'] >= 0 }"\r\n                            >\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'category\'" class="category">\r\n                              <a\r\n                                *ngIf="\r\n                                  rowData.label !== component.SUMMARY_TABLE_CONFIGURATION_LABEL &&\r\n                                  rowData.label !== component.SUMMARY_TABLE_TOTAL_LABEL\r\n                                "\r\n                                (click)="navigateToRowTabIndex(rowData)"\r\n                              >\r\n                                {{ rowData[col.field] }}\r\n                              </a>\r\n\r\n                              <a\r\n                                *ngIf="rowData.label === component.SUMMARY_TABLE_CONFIGURATION_LABEL"\r\n                                (click)="openConfigurationControlScreen()"\r\n                              >\r\n                                {{ rowData[col.field] }}\r\n                              </a>\r\n\r\n                              <span *ngIf="rowData.label === component.SUMMARY_TABLE_TOTAL_LABEL">\r\n                                {{ rowData[col.field] }}\r\n                              </span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab id="workTab">\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".work" | translate }}\r\n          </ng-template>\r\n          <!--Work Packages-->\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ getComponentName() + ".workPackages" | translate }} ({{\r\n                        workPackageTable1 ? workPackageTable1.length : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div *ngIf="!isWorkPackageLoading" class="table-summary-wrapper">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      class="table-control-summary"\r\n                      [columns]="acrsStatusTableCols"\r\n                      [value]="workPackageTableSummary"\r\n                    >\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th\r\n                            pResizableColumn\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'category\'"></span>\r\n\r\n                            <span *ngSwitchDefault> {{ getComponentName() + "." + col.field | translate }} </span>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-columns="columns" let-rowData>\r\n                        <tr>\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'nok\'" [ngClass]="{ nok: rowData[\'nok\'] > 0 }">\r\n                              <span *ngIf="!!rowData.category">{{ rowData[col.field] }}</span>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'warning\'"\r\n                              [ngClass]="{ warning: rowData[\'nok\'] == 0 && rowData[\'warning\'] > 0 }"\r\n                            >\r\n                              <span *ngIf="!!rowData.category">{{ rowData[col.field] }}</span>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'ok\'"\r\n                              [ngClass]="{ ok: rowData[\'nok\'] == 0 && rowData[\'warning\'] == 0 && rowData[\'ok\'] >= 0 }"\r\n                            >\r\n                              <span *ngIf="!!rowData.category">{{ rowData[col.field] }}</span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'category\'" class="category"\r\n                              ><span *ngIf="!!rowData.category">{{ rowData[col.field] }}</span></span\r\n                            >\r\n\r\n                            <span *ngSwitchDefault>\r\n                              <span *ngIf="!!rowData.category">{{ rowData[col.field] }}</span>\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n\r\n                  <div class="table-wrapper">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #ptable\r\n                      class="aw-table2"\r\n                      [columns]="workPackageTableCols"\r\n                      [value]="workPackageTableForDisplay"\r\n                      [(selection)]="selectedWorkPackages"\r\n                      [scrollable]="true"\r\n                      dataKey="wpId"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isWorkPackageLoading"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isWorkPackageLoading" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedWorkPackages.length > 0 }">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions">\r\n                            <button\r\n                              *ngIf="selectedWorkPackages.length > 0 && enableACRSbutton() && enableACRSIfWPClosed()"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="createAcrsEvent()"\r\n                            >\r\n                              <span *ngIf="!showForm1()">{{\r\n                                getComponentName() + ".createAcrsEvent" | translate\r\n                              }}</span>\r\n                              <span *ngIf="showForm1()">{{\r\n                                getComponentName() + ".createForm1Event" | translate\r\n                              }}</span>\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="selectedWorkPackages.length === 1"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="updateConfiguration()"\r\n                            >\r\n                              {{ "updateAssetBreakdown" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="selectedWorkPackages.length === 1"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="updateLogbook()"\r\n                            >\r\n                              {{ getComponentName() + ".updateLogbook" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="selectedWorkPackages.length === 0"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="refreshWorkPackage()"\r\n                            >\r\n                              {{ "global.refresh" | translate }}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                          <col class="row-expand-wrapper" />\r\n                          <col class="row-action-wrapper" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper">\r\n                            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                          </th>\r\n\r\n                          <th\r\n                            pResizableColumn\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'acrs\'">\r\n                              <span *ngIf="!showForm1()">{{ componentData.componentId + ".acrs" | translate }}</span>\r\n                              <span *ngIf="showForm1()">{{ componentData.componentId + ".form1" | translate }}</span>\r\n                            </span>\r\n                            <span *ngSwitchCase="\'acrsEventCode\'">\r\n                              <span *ngIf="!showForm1()">{{\r\n                                componentData.componentId + ".acrsEventCode" | translate\r\n                              }}</span>\r\n                              <span *ngIf="showForm1()">{{\r\n                                componentData.componentId + ".form1EventCode" | translate\r\n                              }}</span>\r\n                            </span>\r\n                            <span *ngSwitchDefault>{{ componentData.componentId + "." + col.field | translate }}</span>\r\n                          </th>\r\n\r\n                          <th class="row-expand-wrapper"></th>\r\n                          <th class="row-action-wrapper"></th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td class="aw-table-checkbox-wrapper">\r\n                            <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                          </td>\r\n\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'number\'"\r\n                              ><a (click)="openWorkPackage(rowData)">{{ rowData[col.field] }}</a></span\r\n                            >\r\n\r\n                            <span *ngSwitchCase="\'acrs\'">\r\n                              <span\r\n                                *ngIf="rowData.checkResultIcon === \'9\'"\r\n                                class="airworthiness-alert airworthiness-alert--ok"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip !== null && rowData.checkResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.checkResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip === null || rowData.checkResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                              <span\r\n                                *ngIf="rowData.checkResultIcon === \'10\'"\r\n                                class="airworthiness-alert airworthiness-alert--nok"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip !== null && rowData.checkResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.checkResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip === null || rowData.checkResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                              <span\r\n                                *ngIf="rowData.checkResultIcon === \'11\'"\r\n                                class="airworthiness-alert airworthiness-alert--warning"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip !== null && rowData.checkResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.checkResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip === null || rowData.checkResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'name\'">\r\n                              <span title="{{ rowData[col.field] }}">{{ rowData[col.field] }}</span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'logbookUpdate\'">\r\n                              <span\r\n                                *ngIf="rowData.logbookCheckResultIcon === \'9\'"\r\n                                class="airworthiness-alert airworthiness-alert--ok"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.logbookCheckResultTooltip !== null &&\r\n                                    rowData.logbookCheckResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.logbookCheckResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.logbookCheckResultTooltip === null ||\r\n                                    rowData.logbookCheckResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                              <span\r\n                                *ngIf="rowData.logbookCheckResultIcon === \'10\'"\r\n                                class="airworthiness-alert airworthiness-alert--nok"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.logbookCheckResultTooltip !== null &&\r\n                                    rowData.logbookCheckResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.logbookCheckResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.logbookCheckResultTooltip === null ||\r\n                                    rowData.logbookCheckResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                              <span\r\n                                *ngIf="rowData.logbookCheckResultIcon === \'11\'"\r\n                                class="airworthiness-alert airworthiness-alert--warning"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.logbookCheckResultTooltip !== null &&\r\n                                    rowData.logbookCheckResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.logbookCheckResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.logbookCheckResultTooltip === null ||\r\n                                    rowData.logbookCheckResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'appliedConfiguration\'">\r\n                              <span\r\n                                *ngIf="rowData.configurationCheckResultIcon === \'9\'"\r\n                                class="airworthiness-alert airworthiness-alert--ok"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.configurationCheckResultTooltip !== null &&\r\n                                    rowData.configurationCheckResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.configurationCheckResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.configurationCheckResultTooltip === null ||\r\n                                    rowData.configurationCheckResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                              <span\r\n                                *ngIf="rowData.configurationCheckResultIcon === \'10\'"\r\n                                class="airworthiness-alert airworthiness-alert--nok"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.configurationCheckResultTooltip !== null &&\r\n                                    rowData.configurationCheckResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.configurationCheckResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.configurationCheckResultTooltip === null ||\r\n                                    rowData.configurationCheckResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                              <span\r\n                                *ngIf="rowData.configurationCheckResultIcon === \'11\'"\r\n                                class="airworthiness-alert airworthiness-alert--warning"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.configurationCheckResultTooltip !== null &&\r\n                                    rowData.configurationCheckResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.configurationCheckResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.configurationCheckResultTooltip === null ||\r\n                                    rowData.configurationCheckResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'acrsEventCode\'"\r\n                              ><a (click)="openEvent(rowData)">{{ rowData[col.field] }}</a></span\r\n                            >\r\n\r\n                            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                          </td>\r\n\r\n                          <td class="row-expand-wrapper" [pRowToggler]="rowData">\r\n                            <i\r\n                              class="fa fa-fw aw-icon aw-icon-with-border"\r\n                              [ngClass]="rowData._expand ? \'fa-minus\' : \'fa-plus\'"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                              tooltipPosition="top"\r\n                              (click)="toggleWorkPackageExpand(rowData)"\r\n                            ></i>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="rowexpansion" let-rowData let-columns="columns">\r\n                        <tr class="row-expanded" *ngIf="rowData._expand">\r\n                          <td [attr.colspan]="columns.length + 2">\r\n                            <div class="row">\r\n                              <div class="form-group">\r\n                                <label class="form-label"> {{ getComponentName() + ".mroCenter" | translate }} </label>\r\n\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    class="aw-input"\r\n                                    type="text"\r\n                                    [(ngModel)]="rowData.mroCenter"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".customer" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    class="aw-input"\r\n                                    type="text"\r\n                                    [(ngModel)]="rowData.customer"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".assignedTo" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    class="aw-input"\r\n                                    type="text"\r\n                                    [(ngModel)]="rowData.assignedTo"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".dueDate" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <input class="aw-input" type="text" [(ngModel)]="rowData.dueDate" [disabled]="true" />\r\n                                </div>\r\n                              </div>\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".wpClosedBy" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    class="aw-input"\r\n                                    type="text"\r\n                                    [(ngModel)]="rowData.closedBy"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".acrsValidatedBy" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    class="aw-input"\r\n                                    type="text"\r\n                                    [(ngModel)]="rowData.acrsValidatedBy"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab id="defectsTab">\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".defects" | translate }}\r\n          </ng-template>\r\n          <!--Defects-->\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <aw-defect-list\r\n                  [acrsEventCodeList]="acrsEventCodeList"\r\n                  [equipmentCode]="scope.equipmentCodeList[0]"\r\n                  (updateDefectSummary)="updateDefectSummary($event)"\r\n                ></aw-defect-list>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab id="flightsTab">\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".flights" | translate }}\r\n          </ng-template>\r\n          <!--Flights-->\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ getComponentName() + ".flights" | translate }}\r\n                      ({{ flightsTableDataSource ? flightsTableDataSource.dataCount : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div *ngIf="!flightsTableDataSource.isLoading" class="table-summary-wrapper" style="width: 25%">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      class="table-control-summary"\r\n                      [columns]="flightSummaryTableCols"\r\n                      [value]="flightTableSummary"\r\n                    >\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th\r\n                            pResizableColumn\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchDefault> {{ getComponentName() + "." + col.field | translate }} </span>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-columns="columns" let-rowData>\r\n                        <tr>\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                            style="padding-right: 1%; width: 60%"\r\n                          >\r\n                            <span *ngSwitchCase="\'nok\'" [ngClass]="{ nok: rowData[\'nok\'] > 0 }">\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'warning\'"\r\n                              [ngClass]="{ warning: rowData[\'nok\'] == 0 && rowData[\'warning\'] > 0 }"\r\n                            >\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'ok\'"\r\n                              [ngClass]="{ ok: rowData[\'nok\'] == 0 && rowData[\'warning\'] == 0 && rowData[\'ok\'] >= 0 }"\r\n                            >\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span *ngSwitchDefault>\r\n                              <span>{{ rowData[col.field] }}</span>\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n\r\n                  <div class="table-wrapper">\r\n                    <a-table\r\n                      id="tableFlights"\r\n                      [dataSource]="flightsTableDataSource"\r\n                      (onRowTogglerClick)="toggleFlightExpand($event)"\r\n                      class="flight-table"\r\n                    >\r\n                      <ng-template tableActionsDef>\r\n                        <button\r\n                          *ngIf="flightsTableDataSource.dataSelectionCount === 1 && showValidateFlightButton()"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="validateFlight(flightsTableDataSource.dataSelection)"\r\n                        >\r\n                          {{ getComponentName() + ".validateFlight" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!flightsTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="refreshFlightTable()"\r\n                        >\r\n                          {{ "global.refresh" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n\r\n                      <ng-template columnDef="control" let-rowData="rowData">\r\n                        <span\r\n                          *ngIf="rowData._obj.checkResultIcon === \'9\'"\r\n                          class="airworthiness-alert airworthiness-alert--ok"\r\n                          ><span\r\n                            *ngIf="rowData._obj.checkResultAlt !== null && rowData._obj.checkResultAlt !== undefined"\r\n                            title="{{ rowData._obj.checkResultAlt }}"\r\n                            >{{ rowData.control }}</span\r\n                          ><span\r\n                            *ngIf="rowData._obj.checkResultAlt === null || rowData._obj.checkResultAlt === undefined"\r\n                          >\r\n                            {{ rowData.control }}\r\n                          </span></span\r\n                        >\r\n                        <span\r\n                          *ngIf="rowData._obj.checkResultIcon === \'10\'"\r\n                          class="airworthiness-alert airworthiness-alert--nok"\r\n                          ><span\r\n                            *ngIf="rowData._obj.checkResultAlt !== null && rowData._obj.checkResultAlt !== undefined"\r\n                            title="{{ rowData._obj.checkResultAlt }}"\r\n                            >{{ rowData.control }}</span\r\n                          ><span\r\n                            *ngIf="rowData._obj.checkResultAlt === null || rowData._obj.checkResultAlt === undefined"\r\n                          >\r\n                            {{ rowData.control }}\r\n                          </span></span\r\n                        >\r\n                        <span\r\n                          *ngIf="rowData._obj.checkResultIcon === \'11\'"\r\n                          class="airworthiness-alert airworthiness-alert--warning"\r\n                          ><span\r\n                            *ngIf="rowData._obj.checkResultAlt !== null && rowData._obj.checkResultAlt !== undefined"\r\n                            title="{{ rowData._obj.checkResultAlt }}"\r\n                            >{{ rowData.control }}</span\r\n                          ><span\r\n                            *ngIf="rowData._obj.checkResultAlt === null || rowData._obj.checkResultAlt === undefined"\r\n                          >\r\n                            {{ rowData.control }}\r\n                          </span></span\r\n                        >\r\n                      </ng-template>\r\n\r\n                      <ng-template columnDef="chronoNumber" let-rowData="rowData">\r\n                        <a (click)="openFlight(rowData)">{{ rowData.chronoNumber }}</a>\r\n                      </ng-template>\r\n\r\n                      <ng-template columnDef="missionCode" let-rowData="rowData">\r\n                        <a (click)="openMission(rowData)">{{ rowData.missionCode }}</a>\r\n                      </ng-template>\r\n\r\n                      <ng-template rowExpansionDef let-rowData="rowData">\r\n                        <aw-airworthiness-table-remaining-values\r\n                          [row]="rowData"\r\n                          [remainingTable]="remainingTable"\r\n                          [remainingTableCols]="remainingTableCols"\r\n                        ></aw-airworthiness-table-remaining-values>\r\n                        <aw-airworthiness-table-remaining-values\r\n                          [row]="rowData"\r\n                          [remainingTable]="remainingTable"\r\n                          [remainingTableCols]="remainingTableCols2"\r\n                        ></aw-airworthiness-table-remaining-values>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab id="postponedWorkOrdersTab">\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".postponement" | translate }}\r\n          </ng-template>\r\n          <!--Postponed work orders-->\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ getComponentName() + ".postponement" | translate }}\r\n                      ({{ postponementTable ? postponementTable.length : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div *ngIf="!isPostponementTableLoading" class="table-summary-wrapper" style="width: 25%">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      class="table-control-summary"\r\n                      [columns]="postponementSummaryTableCols"\r\n                      [value]="postponementTableSummary"\r\n                    >\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th\r\n                            pResizableColumn\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchDefault> {{ getComponentName() + "." + col.field | translate }} </span>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-columns="columns" let-rowData>\r\n                        <tr>\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                            style="padding-right: 1%; width: 60%"\r\n                          >\r\n                            <span *ngSwitchCase="\'nok\'" [ngClass]="{ nok: rowData[\'nok\'] > 0 }">\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'warning\'"\r\n                              [ngClass]="{ warning: rowData[\'nok\'] == 0 && rowData[\'warning\'] > 0 }"\r\n                            >\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'ok\'"\r\n                              [ngClass]="{ ok: rowData[\'nok\'] == 0 && rowData[\'warning\'] == 0 && rowData[\'ok\'] >= 0 }"\r\n                            >\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span *ngSwitchDefault>\r\n                              <span>{{ rowData[col.field] }}</span>\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n\r\n                  <div class="table-wrapper">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #ptablePostponedWorkOrders\r\n                      class="aw-table2"\r\n                      [columns]="postponementTableCols"\r\n                      [value]="postponementTable"\r\n                      [scrollable]="true"\r\n                      dataKey="rowId"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isPostponementTableLoading"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isPostponementTableLoading" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptablePostponedWorkOrders.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                          <col class="row-expand-wrapper" />\r\n                          <col class="row-action-wrapper" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th colspan="6">{{ getComponentName() + ".workOrder" | translate }}</th>\r\n                          <th colspan="4" class="table-border-left" style="text-align: center">\r\n                            {{ getComponentName() + ".postponement" | translate }}\r\n                          </th>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                          <th\r\n                            pResizableColumn\r\n                            *ngFor="let col of columns"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                            [ngClass]="{ \'table-border-left\': col.field === \'postponementEventCode\' }"\r\n                          >\r\n                            {{ componentData.componentId + "." + col.field | translate }}\r\n                          </th>\r\n\r\n                          <th class="row-expand-wrapper"></th>\r\n                          <th class="row-action-wrapper"></th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                            [ngClass]="{ \'table-border-left\': col.field === \'postponementEventCode\' }"\r\n                          >\r\n                            <span *ngSwitchCase="\'control\'">\r\n                              <span\r\n                                *ngIf="rowData.checkResultIcon === \'9\'"\r\n                                class="airworthiness-alert airworthiness-alert--ok"\r\n                                >{{ rowData[col.field] }}</span\r\n                              >\r\n                              <span\r\n                                *ngIf="rowData.checkResultIcon === \'10\'"\r\n                                class="airworthiness-alert airworthiness-alert--nok"\r\n                                >{{ rowData[col.field] }}</span\r\n                              >\r\n                              <span\r\n                                *ngIf="rowData.checkResultIcon === \'11\'"\r\n                                class="airworthiness-alert airworthiness-alert--warning"\r\n                              >\r\n                                {{ rowData[col.field] }}\r\n                              </span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'workOrderStatus\'">\r\n                              <span title="{{ rowData[col.field] }}">{{ rowData[col.field] }}</span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'workOrderCode\'"\r\n                              ><a (click)="openJobCard(rowData)">{{ rowData[col.field] }}</a></span\r\n                            >\r\n\r\n                            <span *ngSwitchCase="\'workOrderOrigin\'"\r\n                              ><a (click)="consultWorkOrderOrigin(rowData)"\r\n                                ><span title="{{ rowData[col.field] }}">{{ rowData[col.field] }}</span></a\r\n                              ></span\r\n                            >\r\n\r\n                            <span *ngSwitchCase="\'postponementEventCode\'"\r\n                              ><a (click)="openEventCode(rowData)">{{ rowData[col.field] }}</a></span\r\n                            >\r\n\r\n                            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                          </td>\r\n\r\n                          <td class="row-expand-wrapper" [pRowToggler]="rowData">\r\n                            <i\r\n                              class="fa fa-fw aw-icon aw-icon-with-border"\r\n                              [ngClass]="rowData._expand ? \'fa-minus\' : \'fa-plus\'"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                              tooltipPosition="top"\r\n                              (click)="togglePostponementExpand(rowData)"\r\n                            ></i>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="rowexpansion" let-rowData let-columns="columns">\r\n                        <tr class="row-expanded" *ngIf="rowData._expand">\r\n                          <td [attr.colspan]="columns.length + 2">\r\n                            <div class="row">\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".postponementDescription" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    class="aw-input"\r\n                                    type="text"\r\n                                    [(ngModel)]="rowData.postponementDescription"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".postponementRefusalReason" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    class="aw-input"\r\n                                    type="text"\r\n                                    [(ngModel)]="rowData.postponementRefusalReason"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab id="upcomingTasksAndLLPTab">\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".upcomingEvents" | translate }}\r\n          </ng-template>\r\n          <!--Upcoming events-->\r\n          <div class="grid-row">\r\n            <div\r\n              #upcomingEventsAnchor\r\n              class="grid-cell--12"\r\n              (click)="selectPageTocEntry(component.UPCOMING_EVENTS_ANCHOR_ID)"\r\n            >\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(component.UPCOMING_EVENTS_ANCHOR_ID) }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ getComponentName() + ".upcomingEvents" | translate }}\r\n                      ({{ upcomingEventsTable ? upcomingEventsTable.length : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div *ngIf="!isUpcomingEventsTableLoading" class="table-summary-wrapper" style="width: 25%">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      class="table-control-summary"\r\n                      [columns]="upcomingEventsSummaryTableCols"\r\n                      [value]="upcomingEventsTableSummary"\r\n                    >\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th\r\n                            pResizableColumn\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchDefault> {{ getComponentName() + "." + col.field | translate }} </span>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-columns="columns" let-rowData>\r\n                        <tr>\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                            style="padding-right: 1%; width: 60%"\r\n                          >\r\n                            <span *ngSwitchCase="\'nok\'" [ngClass]="{ nok: rowData[\'nok\'] > 0 }">\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'warning\'"\r\n                              [ngClass]="{ warning: rowData[\'nok\'] == 0 && rowData[\'warning\'] > 0 }"\r\n                            >\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'ok\'"\r\n                              [ngClass]="{ ok: rowData[\'nok\'] == 0 && rowData[\'warning\'] == 0 && rowData[\'ok\'] >= 0 }"\r\n                            >\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span *ngSwitchDefault>\r\n                              <span>{{ rowData[col.field] }}</span>\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n\r\n                  <div class="table-wrapper">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #ptableUpcomingEventsWorkOrders\r\n                      class="aw-table2"\r\n                      [columns]="upcomingEventsTableCols"\r\n                      [value]="upcomingEventsTable"\r\n                      [scrollable]="true"\r\n                      dataKey="rowId"\r\n                      (sortFunction)="customSort($event)"\r\n                      [customSort]="true"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isUpcomingEventsTableLoading"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isUpcomingEventsTableLoading" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptableUpcomingEventsWorkOrders.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n                          <div class="aw-table-icon-actions">\r\n                            <i\r\n                              class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{\r\n                                getComponentName() + (utlFiltersVisible ? \'.hideFilters\' : \'.showFilters\') | translate\r\n                              }}"\r\n                              [ngClass]="{ active: utlFiltersVisible }"\r\n                              (click)="utlFilters.toggle($event)"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                          <col class="row-expand-wrapper" />\r\n                          <col class="row-action-wrapper" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th\r\n                            pResizableColumn\r\n                            *ngFor="let col of columns"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                            [pSortableColumn]="col.field"\r\n                            [pSortableColumnDisabled]="col.field !== \'remainingEquivalentPotential\'"\r\n                          >\r\n                            {{ componentData.componentId + "." + col.field | translate }}\r\n                            <p-sortIcon\r\n                              *ngIf="col.field === \'remainingEquivalentPotential\'"\r\n                              [field]="col.field"\r\n                            ></p-sortIcon>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'control\'">\r\n                              <span\r\n                                *ngIf="rowData.checkResultIcon === \'9\'"\r\n                                class="airworthiness-alert airworthiness-alert--ok"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip !== null && rowData.checkResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.checkResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip === null || rowData.checkResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                              <span\r\n                                *ngIf="!rowData.checkResultIcon"\r\n                                class="airworthiness-alert airworthiness-alert--ok"\r\n                              >\r\n                                {{ rowData[col.field] }}\r\n                              </span>\r\n                              <span\r\n                                *ngIf="rowData.checkResultIcon === \'10\'"\r\n                                class="airworthiness-alert airworthiness-alert--nok"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip !== null && rowData.checkResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.checkResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip === null || rowData.checkResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                              <span\r\n                                *ngIf="rowData.checkResultIcon === \'11\'"\r\n                                class="airworthiness-alert airworthiness-alert--warning"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip !== null && rowData.checkResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.checkResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip === null || rowData.checkResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'designation\'"\r\n                              ><a (click)="openEquipmentDesignation(rowData)"\r\n                                ><span title="{{ rowData[col.field] }}">{{ rowData[col.field] }}</span></a\r\n                              ></span\r\n                            >\r\n\r\n                            <span *ngSwitchCase="\'code\'"\r\n                              ><a (click)="openEventDetailCode(rowData)"\r\n                                ><span title="{{ rowData[col.field] }}">{{ rowData[col.field] }}</span></a\r\n                              ></span\r\n                            >\r\n\r\n                            <span *ngSwitchCase="\'remainingEquivalentPotential\'">\r\n                              <div *ngIf="isEquivalentPotentialLoading" class="lds-hourglass"></div>\r\n                              <span *ngIf="!isEquivalentPotentialLoading">{{ rowData[col.field] }}</span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab id="airworthinessDocumentsTab">\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".airworthinessDocuments" | translate }}\r\n          </ng-template>\r\n          <!--Airworthiness Documents-->\r\n          <div class="grid-row">\r\n            <div\r\n              #awDocumentsAnchor\r\n              class="grid-cell--12"\r\n              (click)="selectPageTocEntry(component.AW_DOCUMENTS_ANCHOR_ID)"\r\n            >\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(component.AW_DOCUMENTS_ANCHOR_ID) }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ getComponentName() + ".airworthinessDocuments" | translate }}\r\n                      ({{ airworthinessDocumentsTable ? airworthinessDocumentsTable.length : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div *ngIf="!isAirworthinessDocumentsTableLoading" class="table-summary-wrapper" style="width: 25%">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      class="table-control-summary"\r\n                      [columns]="airworthinessDocumentsSummaryTableCols"\r\n                      [value]="airworthinessDocumentsTableSummary"\r\n                    >\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th\r\n                            pResizableColumn\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchDefault> {{ getComponentName() + "." + col.field | translate }} </span>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-columns="columns" let-rowData>\r\n                        <tr>\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                            style="padding-right: 1%; width: 60%"\r\n                          >\r\n                            <span *ngSwitchCase="\'nok\'" [ngClass]="{ nok: rowData[\'nok\'] > 0 }">\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'warning\'"\r\n                              [ngClass]="{ warning: rowData[\'nok\'] == 0 && rowData[\'warning\'] > 0 }"\r\n                            >\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'ok\'"\r\n                              [ngClass]="{ ok: rowData[\'nok\'] == 0 && rowData[\'warning\'] == 0 && rowData[\'ok\'] >= 0 }"\r\n                            >\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span *ngSwitchDefault>\r\n                              <span>{{ rowData[col.field] }}</span>\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n\r\n                  <div class="table-wrapper">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #ptableDocs\r\n                      class="aw-table2"\r\n                      [columns]="airworthinessDocumentsTableCols"\r\n                      [value]="airworthinessDocumentsTable"\r\n                      [scrollable]="true"\r\n                      dataKey="rowId"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isAirworthinessDocumentsTableLoading"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isAirworthinessDocumentsTableLoading" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptableDocs.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-icon-actions">\r\n                            <i\r\n                              class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{\r\n                                getComponentName() + (adFiltersVisible ? \'.hideFilters\' : \'.showFilters\') | translate\r\n                              }}"\r\n                              [ngClass]="{ active: adFiltersVisible }"\r\n                              (click)="adFilters.toggle($event)"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                          <col class="row-expand-wrapper" />\r\n                          <col class="row-action-wrapper" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper">\r\n                            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                          </th>\r\n\r\n                          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            {{ componentData.componentId + "." + col.field | translate }}\r\n                          </th>\r\n\r\n                          <th class="row-expand-wrapper"></th>\r\n                          <th class="row-action-wrapper"></th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td class="aw-table-checkbox-wrapper">\r\n                            <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                          </td>\r\n\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'control\'">\r\n                              <span\r\n                                *ngIf="rowData.checkResultIcon === \'9\'"\r\n                                class="airworthiness-alert airworthiness-alert--ok"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip !== null && rowData.checkResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.checkResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip === null || rowData.checkResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                              <span\r\n                                *ngIf="rowData.checkResultIcon === \'10\'"\r\n                                class="airworthiness-alert airworthiness-alert--nok"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip !== null && rowData.checkResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.checkResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip === null || rowData.checkResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                              <span\r\n                                *ngIf="rowData.checkResultIcon === \'11\'"\r\n                                class="airworthiness-alert airworthiness-alert--warning"\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip !== null && rowData.checkResultTooltip !== undefined\r\n                                  "\r\n                                  title="{{ rowData.checkResultTooltip }}"\r\n                                  >{{ rowData[col.field] }}</span\r\n                                ><span\r\n                                  *ngIf="\r\n                                    rowData.checkResultTooltip === null || rowData.checkResultTooltip === undefined\r\n                                  "\r\n                                >\r\n                                  {{ rowData[col.field] }}\r\n                                </span></span\r\n                              >\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'id\'"\r\n                              ><a (click)="openID(rowData)"\r\n                                ><span title="{{ rowData[col.field] }}">{{ rowData[col.field] }}</span></a\r\n                              ></span\r\n                            >\r\n\r\n                            <span *ngSwitchCase="\'asset\'" title="{{ rowData[col.field] }}">{{\r\n                              rowData[col.field]\r\n                            }}</span>\r\n\r\n                            <span *ngSwitchCase="\'description\'" title="{{ rowData[col.field] }}">{{\r\n                              rowData[col.field]\r\n                            }}</span>\r\n\r\n                            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                          </td>\r\n\r\n                          <td class="row-expand-wrapper" [pRowToggler]="rowData">\r\n                            <i\r\n                              class="fa fa-fw aw-icon aw-icon-with-border"\r\n                              [ngClass]="rowData._expand ? \'fa-minus\' : \'fa-plus\'"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                              tooltipPosition="top"\r\n                              (click)="toggleAirworthinessDocumentsExpand(rowData)"\r\n                            ></i>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="rowexpansion" let-rowData let-columns="columns">\r\n                        <tr class="row-expanded" *ngIf="rowData._expand">\r\n                          <td [attr.colspan]="columns.length + 2">\r\n                            <div class="row">\r\n                              <div class="form-group">\r\n                                <label class="form-label"> {{ getComponentName() + ".comment" | translate }} </label>\r\n\r\n                                <div class="form-control">\r\n                                  <input class="aw-input" type="text" [(ngModel)]="rowData.comment" [disabled]="true" />\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".executionDetails" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    class="aw-input"\r\n                                    type="text"\r\n                                    [(ngModel)]="rowData.executionDetails"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".lastApplicationDate" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    class="aw-input"\r\n                                    type="text"\r\n                                    [(ngModel)]="rowData.lastApplicationDate"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".lastApplicationHours" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  {{ rowData.lastApplicationHours }}\r\n                                  <label *ngIf="rowData.lastApplicationHours"> H</label>\r\n                                </div>\r\n                              </div>\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".lastApplicationCycles" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  {{ rowData.lastApplicationCycles }}\r\n                                  <span *ngIf="rowData.lastApplicationCycles"> C</span>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n  <!--Filter panel for upcoming tasks and LLP-->\r\n  <p-overlayPanel\r\n    #utlFilters\r\n    class="aw-overlay"\r\n    (onShow)="utlFiltersVisible = true"\r\n    (onHide)="utlFiltersVisible = false"\r\n  >\r\n    <div class="row">\r\n      <div class="form-group flex--auto">\r\n        <label class="form-label"> &nbsp; </label>\r\n        <div class="form-control aw-selectbutton-wrapper">\r\n          <p-selectButton\r\n            [options]="utlFilterList"\r\n            multiple="multiple"\r\n            [(ngModel)]="selectedUtlFilterList"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n      <div class="form-group flex--auto">\r\n        <label class="form-label"> &nbsp; </label>\r\n        <div class="form-control aw-selectbutton-wrapper">\r\n          <p-selectButton\r\n            [options]="eventTypeFilterList"\r\n            multiple="multiple"\r\n            [(ngModel)]="selectedEventTypeFilterList"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="row">\r\n      <div class="form-group flex--auto">\r\n        <label class="form-label"> {{ componentData.componentId + ".asset" | translate }} </label>\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            [options]="utlAssetList"\r\n            [(ngModel)]="selectedUtlAsset"\r\n            [showClear]="true"\r\n            placeholder="&nbsp;"\r\n          >\r\n          </p-dropdown>\r\n        </div>\r\n      </div>\r\n      <div class="form-group"></div>\r\n    </div>\r\n\r\n    <div class="row action-list">\r\n      <button type="button" mat-raised-button (click)="resetUtlFilter()">\r\n        {{ getComponentName() + ".reset" | translate }}\r\n      </button>\r\n      <button\r\n        type="button"\r\n        mat-raised-button\r\n        (click)="utlFilters.hide(); utlFiltersVisible = false; filterUpcomingTasksAndLLP()"\r\n      >\r\n        {{ getComponentName() + ".filter" | translate }}\r\n      </button>\r\n    </div>\r\n  </p-overlayPanel>\r\n\r\n  <!--Filter panel for airworthiness document-->\r\n  <p-overlayPanel #adFilters class="aw-overlay" (onShow)="adFiltersVisible = true" (onHide)="adFiltersVisible = false">\r\n    <div class="row">\r\n      <div class="form-group flex--auto">\r\n        <label class="form-label"> &nbsp; </label>\r\n        <div class="form-control aw-selectbutton-wrapper">\r\n          <p-selectButton\r\n            [options]="adFilterList"\r\n            multiple="multiple"\r\n            [(ngModel)]="selectedADFilterList"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group flex--auto">\r\n        <label class="form-label"> {{ componentData.componentId + ".asset" | translate }} </label>\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            [options]="assetList"\r\n            [(ngModel)]="selectedAdAsset"\r\n            [showClear]="true"\r\n            placeholder="&nbsp;"\r\n          >\r\n          </p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="row action-list">\r\n      <button type="button" mat-raised-button (click)="resetADFilter()">\r\n        {{ getComponentName() + ".reset" | translate }}\r\n      </button>\r\n      <button type="button" mat-raised-button (click)="adFilters.hide(); adFiltersVisible = false; filterAdDocuments()">\r\n        {{ getComponentName() + ".filter" | translate }}\r\n      </button>\r\n    </div>\r\n  </p-overlayPanel>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/asset-review-form.component.scss':
      /*!*************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/asset-review-form.component.scss ***!
  \*************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .table-border-left {\n  border-left: solid 1px #006ea9 !important; }\n\n:host .ok {\n  background-color: #4caf50; }\n\n:host .warning {\n  background-color: #ffc107; }\n\n:host .nok {\n  background-color: #f6685e; }\n\n:host .aw-table-row-details .label-value-group > label {\n  min-width: 10rem; }\n\n:host .table-summary-wrapper {\n  margin: 0 auto;\n  width: 35rem; }\n\n:host .table-control-summary td,\n:host .table-control-summary th {\n  background-color: #fff;\n  border: 0;\n  line-height: 1.42857143;\n  vertical-align: middle;\n  color: #000; }\n\n:host .table-control-summary th {\n  color: #595959;\n  font-weight: 400; }\n\n:host .table-control-summary td {\n  color: #000; }\n\n:host .table-control-summary col,\n:host .table-control-summary td,\n:host .table-control-summary th {\n  padding: 4px; }\n\n:host .table-control-summary tr td,\n:host .table-control-summary tr th {\n  text-align: center; }\n\n:host .table-control-summary tr td:first-of-type,\n  :host .table-control-summary tr th:first-of-type {\n    padding-right: 5%;\n    text-align: right; }\n\n:host .table-control-summary .ui-table-tbody tr:nth-of-type(2) td {\n  padding-top: 8px; }\n\n:host .table-control-summary td > span {\n  background-color: #fff;\n  display: block;\n  padding: calc(8px - 4px); }\n\n:host .table-control-summary td > span:not(.category) {\n    background-color: #f0f0f0; }\n\n:host .table-control-summary td > span.ok {\n    background-color: #4caf50; }\n\n:host .table-control-summary td > span.warning {\n    background-color: #ffc107; }\n\n:host .table-control-summary td > span.nok {\n    background-color: #f6685e; }\n\n:host .action-list {\n  justify-content: flex-end; }\n\n:host .action-list .aw-btn {\n    margin-left: 8px; }\n\n:host .action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n\n:host .flight-table .airworthiness-alert {\n  display: inline-block;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9hc3NldC1yZXZpZXcvZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX21vZGlmaWVycy5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2Fzc2V0LXJldmlldy9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxcYXNzZXQtcmV2aWV3XFxmb3JtXFxhc3NldC1yZXZpZXctZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9hc3NldC1yZXZpZXcvZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5Q0FBaUM7RUFBakMsc0NBQWlDO0VBQWpDLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLG9DQUE0QjtLQUE1QixpQ0FBNEI7TUFBNUIsZ0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQTs7QUFLYjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLHNDQUFzQyxFQUFBOztBQ3pIeEM7RUFFSSx5Q0FBeUMsRUFBQTs7QUFGN0M7RUFNSSx5QkNXa0IsRUFBQTs7QURqQnRCO0VBVUkseUJDUVksRUFBQTs7QURsQmhCO0VBY0kseUJDTWdCLEVBQUE7O0FEcEJwQjtFQW9CUSxnQkFBZ0IsRUFBQTs7QUFwQnhCO0VBMEJJLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBM0JoQjs7RUFpQ00sc0JDckN5QjtFRHNDekIsU0FBUztFQUNULHVCQ0ltQjtFREhuQixzQkFBc0I7RUFDdEIsV0N2Q21CLEVBQUE7O0FERXpCO0VBeUNNLGNDMUN3QjtFRDJDeEIsZ0JBQWdCLEVBQUE7O0FBMUN0QjtFQThDTSxXQ2hEbUIsRUFBQTs7QURFekI7OztFQXNETSxZQUFZLEVBQUE7O0FBdERsQjs7RUE0RFEsa0JBQWtCLEVBQUE7O0FBNUQxQjs7SUErRFUsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBOztBQWhFM0I7RUF1RVEsZ0JDL0JVLEVBQUE7O0FEeENsQjtFQTRFTSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHdCQUFxQyxFQUFBOztBQTlFM0M7SUFpRlEseUJBQXlCLEVBQUE7O0FBakZqQztJQXFGUSx5QkNwRWMsRUFBQTs7QURqQnRCO0lBeUZRLHlCQ3ZFUSxFQUFBOztBRGxCaEI7SUE2RlEseUJDekVZLEVBQUE7O0FEcEJwQjtFQW1HSSx5QkFBeUIsRUFBQTs7QUFuRzdCO0lBc0dNLGdCQzlEWSxFQUFBOztBRHhDbEI7TUF5R1EsY0FBYyxFQUFBOztBQXpHdEI7RUErR0kscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvYXNzZXQtcmV2aWV3L2Zvcm0vYXNzZXQtcmV2aWV3LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS0tZmxleC1jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5LS1mbGV4LXJvdyB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlaWdodC0tMTAwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taW4td2lkdGgtLWZpdC1jb250ZW50IHtcclxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi0tcmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Nyb2xsLXktLW5vbmUge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC0tdW5zZWxlY3RhYmxlIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlzaWJpbGl0eS0taGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLS0xMCB7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLndpZHRoLS0yMCB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLndpZHRoLS0zMCB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLndpZHRoLS00MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS01MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS02MCB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLndpZHRoLS03MCB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLndpZHRoLS04MCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLndpZHRoLS05MCB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLndpZHRoLS0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4uZmxleC0tMSB7XHJcbiAgZmxleDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMiB7XHJcbiAgZmxleDogMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMyB7XHJcbiAgZmxleDogMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNCB7XHJcbiAgZmxleDogNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNSB7XHJcbiAgZmxleDogNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tYXV0byB7XHJcbiAgZmxleDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWVuZCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tc3RhcnQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1lbmQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LXN0YXJ0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG4iLCJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcIm1vZGlmaWVyc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC50YWJsZS1ib3JkZXItbGVmdCB7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICMwMDZlYTkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gIH1cclxuXHJcbiAgLndhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICB9XHJcblxyXG4gIC5ub2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgfVxyXG5cclxuICAuYXctdGFibGUtcm93LWRldGFpbHMge1xyXG4gICAgLmxhYmVsLXZhbHVlLWdyb3VwIHtcclxuICAgICAgJiA+IGxhYmVsIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEwcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGFibGUtc3VtbWFyeS13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDM1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlLWNvbnRyb2wtc3VtbWFyeSB7XHJcbiAgICB0ZCxcclxuICAgIHRoIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWJsZS1jb250cm9sLXN1bW1hcnkge1xyXG4gICAgY29sLFxyXG4gICAgdGQsXHJcbiAgICB0aCB7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICB0ciB7XHJcbiAgICAgIHRkLFxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktdGFibGUtdGJvZHkge1xyXG4gICAgICB0cjpudGgtb2YtdHlwZSgyKSB0ZCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0ZCA+IHNwYW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZzogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC0gNHB4KTtcclxuXHJcbiAgICAgICY6bm90KC5jYXRlZ29yeSkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYub2sge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYud2FybmluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5ub2sge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWxpc3Qge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAuYXctYnRuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmxpZ2h0LXRhYmxlIC5haXJ3b3J0aGluZXNzLWFsZXJ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/asset-review-form.component.ts':
      /*!***********************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/asset-review-form.component.ts ***!
  \***********************************************************************************/
      /*! exports provided: AssetReviewFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AssetReviewFormComponent',
          function() {
            return AssetReviewFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! lodash-es */ './node_modules/lodash-es/lodash.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../node_modules/@ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../node_modules/rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/components/component-sidebar/page-toc.service */ './src/app/shared/components/component-sidebar/page-toc.service.ts'
        );
        /* harmony import */ var _shared_components_defect_list_defect_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/components/defect-list/defect-list.service */ './src/app/shared/components/defect-list/defect-list.service.ts'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-evolution-constants */ './src/app/shared/constants/bido-evolution-constants.ts'
        );
        /* harmony import */ var _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/constants/bire-unit-measure-constants */ './src/app/shared/constants/bire-unit-measure-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/enums/table-column-filter-mode.enum */ './src/app/shared/enums/table-column-filter-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/enums/table-selection-mode.enum */ './src/app/shared/enums/table-selection-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../../shared/utils/bido-equipment-utils */ './src/app/shared/utils/bido-equipment-utils.ts'
        );
        /* harmony import */ var _shared_utils_comparator_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../../../shared/utils/comparator-utils */ './src/app/shared/utils/comparator-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ../../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _airworthiness_control_form_schedule_maintenance_form_constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ../../airworthiness-control/form/schedule-maintenance-form/constants/maintenance-plan-table-type-constants */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/constants/maintenance-plan-table-type-constants.ts'
        );
        /* harmony import */ var _asset_review_form_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./asset-review-form.service */ './src/app/main/maintenance/asset-review/form/asset-review-form.service.ts'
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

        var FilterAlert;
        (function(FilterAlert) {
          FilterAlert[(FilterAlert['All'] = 0)] = 'All';
          FilterAlert[(FilterAlert['Critcal'] = 1)] = 'Critcal';
        })(FilterAlert || (FilterAlert = {}));
        var AssetReviewFormComponent = /** @class */ (function(_super) {
          __extends(AssetReviewFormComponent, _super);
          function AssetReviewFormComponent(
            favoriteService,
            loaderService,
            messageService,
            pageTocService,
            serializationService,
            tabService,
            sessionService,
            assetReviewFormService,
            propertiesService,
            translateService,
            dateService,
            defectListService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                pageTocService
              ) || this;
            _this.sessionService = sessionService;
            _this.assetReviewFormService = assetReviewFormService;
            _this.propertiesService = propertiesService;
            _this.translateService = translateService;
            _this.dateService = dateService;
            _this.defectListService = defectListService;
            _this.acrsStatusTableCols = [
              { field: 'category', alignment: 'left', width: '52%' },
              { field: 'ok', alignment: 'center', width: '16%' },
              { field: 'warning', alignment: 'center', width: '16%' },
              { field: 'nok', alignment: 'center', width: '16%' }
            ];
            _this.flightSummaryTableCols = [
              { field: 'ok', alignment: 'center' },
              { field: 'warning', alignment: 'center' },
              { field: 'nok', alignment: 'center' }
            ];
            _this.postponementSummaryTableCols = [
              { field: 'ok', alignment: 'center' },
              { field: 'warning', alignment: 'center' },
              { field: 'nok', alignment: 'center' }
            ];
            _this.upcomingEventsSummaryTableCols = [
              { field: 'ok', alignment: 'center' },
              { field: 'warning', alignment: 'center' },
              { field: 'nok', alignment: 'center' }
            ];
            _this.airworthinessDocumentsSummaryTableCols = [
              { field: 'ok', alignment: 'center' },
              { field: 'warning', alignment: 'center' },
              { field: 'nok', alignment: 'center' }
            ];
            _this.acrsStatusTable = [];
            _this.workPackageTableSummary = [];
            _this.flightTableSummary = [];
            _this.postponementTableSummary = [];
            _this.upcomingEventsTableSummary = [];
            _this.airworthinessDocumentsTableSummary = [];
            _this.isSummaryTableLoading = false;
            _this.isWorkPackageLoading = false;
            _this.isPostponementTableLoading = false;
            _this.isUpcomingEventsTableLoading = false;
            _this.isAirworthinessDocumentsTableLoading = false;
            _this.isEquivalentPotentialLoading = false;
            _this.component = AssetReviewFormComponent_1;
            _this.setNavigationLinkList();
            _this.setPotentialUnitList();
            _this.filterAlert = FilterAlert;
            _this.init();
            _this.setFilterControlList();
            _this.setFiterEventTypeList();
            _this.setTableCols();
            _this.loadAirworthinessTableColumnLabelList();
            _this.initializeOkNokWarning();
            _this.registerPageTocEntryObservable();
            _this.registrRereshButtonObservables();
            _this.tabIndex = AssetReviewFormComponent_1.HOME_TAB_INDEX;
            return _this;
          }
          AssetReviewFormComponent_1 = AssetReviewFormComponent;
          AssetReviewFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.updateOpenMode(this.componentData.openMode);
            if (!this.componentData.objectId) {
              this.messageService.showErrorMessage('global.errorOnNavigate');
            } else {
              this.setTableOfContent();
              // Init scope
              this.scope = this.serializationService.deserialize(this.componentData.objectId) || [];
              this.topAssetTypeList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_28__['ListUtils']
                .orEmpty(this.scope.functionList)
                .filter(function(v, i, a) {
                  return a.indexOf(v) === i;
                })
                .join(', ');
              this.topEquipmentCodeList = this.scope.equipmentCodeList;
              this.topFamilyVariantList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_28__['ListUtils']
                .orEmpty(this.scope.familyVariantList)
                .filter(function(v, i, a) {
                  return a.indexOf(v) === i;
                })
                .join(', ');
              this.topWarehouse = this.scope.warehouse;
              this.simulationCriteria = this.scope.simulationCriteria;
              this.initSummaryCount();
              this.initSummaryTable();
              this.load();
              this.loadAsset();
              this.initWorkPackageSummary();
              this.initFlightSummary();
              this.initPostponementSummary();
              this.initUpcomingEventsSummary();
              this.initAirworthinessDocumentsSummary();
              this.loadAssetReviewTables();
            }
          };
          AssetReviewFormComponent.prototype.setTableOfContent = function() {
            var _this = this;
            var generalKey = this.getTranslateKey('general');
            var summaryKey = this.getTranslateKey('acrsStatus');
            var workPackagesKey = this.getTranslateKey('workPackages');
            var defectsKey = this.getTranslateKey('defects');
            var flightsKey = this.getTranslateKey('flights');
            var postponementKey = this.getTranslateKey('postponement');
            var upcomingEventsKey = this.getTranslateKey('upcomingEvents');
            var awDocumentsKey = this.getTranslateKey('airworthinessDocuments');
            this.translateService
              .get([
                generalKey,
                summaryKey,
                workPackagesKey,
                defectsKey,
                flightsKey,
                postponementKey,
                upcomingEventsKey,
                awDocumentsKey
              ])
              .subscribe(function(results) {
                var generalLabel = !!results ? results[generalKey] : 'General';
                var summaryLabel = !!results ? results[summaryKey] : 'Summary';
                var workPackagesLabel = !!results ? results[workPackagesKey] : 'Work Packages';
                var defectsLabel = !!results ? results[defectsKey] : 'Defects';
                var flightsLabel = !!results ? results[flightsKey] : 'Flights';
                var postponementLabel = !!results ? results[postponementKey] : 'Postponement';
                var upcomingEventsLabel = !!results ? results[upcomingEventsKey] : 'Upcoming Events';
                var awDocumentsLabel = !!results ? results[awDocumentsKey] : 'Airworthiness Documents';
                _this.toc = [
                  {
                    id: 'generalAnchor',
                    anchor: _this.generalEltRef,
                    label: generalLabel
                  },
                  {
                    id: 'summaryAnchor',
                    anchor: _this.summaryEltRef,
                    label: summaryLabel
                  },
                  {
                    id: 'workPackagesAnchor',
                    anchor: _this.workPackagesEltRef,
                    label: workPackagesLabel
                  },
                  {
                    id: 'defectsAnchor',
                    anchor: _this.defectsEltRef,
                    label: defectsLabel
                  },
                  {
                    id: 'flightsAnchor',
                    anchor: _this.flightsEltRef,
                    label: flightsLabel
                  },
                  {
                    id: 'postponementAnchor',
                    anchor: _this.postponementEltRef,
                    label: postponementLabel
                  },
                  {
                    id: 'upcomingEventsAnchor',
                    anchor: _this.upcomingEventsEltRef,
                    label: upcomingEventsLabel
                  },
                  {
                    id: 'awDocumentsAnchor',
                    anchor: _this.awDocumentsEltRef,
                    label: awDocumentsLabel
                  }
                ];
                _super.prototype.selectPageTocEntry.call(_this, AssetReviewFormComponent_1.GENERAL_ANCHOR_ID);
              });
          };
          AssetReviewFormComponent.prototype.initializeOkNokWarning = function() {
            var _this = this;
            var ok = this.getComponentName() + '.ok';
            var nok = this.getComponentName() + '.nok';
            var warning = this.getComponentName() + '.warning';
            this.translateService.get([ok, nok, warning]).subscribe(function(results) {
              _this.okString = results[ok];
              _this.nokString = results[nok];
              _this.warningString = results[warning];
            });
          };
          AssetReviewFormComponent.prototype.init = function() {
            this.assetStructure = [];
            this.assetStructureSrc = [];
            this.acrsEventCodeList = [];
            this.selectedFilterAlert = FilterAlert.All;
            this.topAssetTypeList = '';
            this.topEquipmentCodeList = [];
            this.topFamilyVariantList = '';
            this.topWarehouse = undefined;
            this.simulationCriteria = undefined;
            this.assetAirworthiness = undefined;
            this.airworthinessTreeTable = [];
            this.airworthinessMap = new Map();
            this.potentialUnitSelected =
              _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_10__[
                'BireUnitMeasureConstants'
              ].HOUR;
            this.workPackageTable1 = [];
            this.globalAlertListLoading = false;
            this.workPackageTableForDisplay = [];
            this.selectedWorkPackages = [];
            this.postponementTable = [];
            this.upcomingEventsTable = [];
            this.airworthinessDocumentsTable = [];
            this.airworthinessDocumentsTable = [];
            this.airworthinessDocumentsTableBak = [];
            this.remainingTable = [];
            this.remainingTableCols = [];
            this.remainingTableCols2 = [];
            this.assetList = [];
            this.selectedAdAsset = undefined;
            this.selectedUtlAsset = undefined;
            this.adFiltersVisible = false;
            this.utlFiltersVisible = false;
          };
          AssetReviewFormComponent.prototype.initFlightsTableDataSource = function() {
            this.flightsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                { field: 'control', translateKey: this.getTranslateKey('control'), width: '8%' },
                { field: 'chronoNumber', translateKey: this.getTranslateKey('chronoNumber'), width: '11%' },
                { field: 'missionCode', translateKey: this.getTranslateKey('missionCode'), width: '11%' },
                { field: 'missionType', translateKey: this.getTranslateKey('missionType'), width: '12%' },
                { field: 'startDateText', translateKey: this.getTranslateKey('startDateText'), width: '12%' },
                { field: 'endDateText', translateKey: this.getTranslateKey('endDateText'), width: '12%' },
                { field: 'duration', translateKey: this.getTranslateKey('duration'), width: '11%' },
                { field: 'cycleNumber', translateKey: this.getTranslateKey('cycleNumber'), width: '11%' },
                { field: 'statusStateText', translateKey: this.getTranslateKey('statusStateText'), width: '12%' }
              ],
              data: []
            });
          };
          AssetReviewFormComponent.prototype.setWorkPackageTableCols = function() {
            this.workPackageTableCols = [
              { field: 'acrs', alignment: 'left', width: '8%' },
              { field: 'logbookUpdate', alignment: 'left', width: '8%' },
              { field: 'appliedConfiguration', alignment: 'left', width: '8%' },
              { field: 'number', alignment: 'left', width: '10%' },
              { field: 'name', alignment: 'left', width: '12%' },
              { field: 'startDate', alignment: 'left', width: '15%' },
              { field: 'endDate', alignment: 'left', width: '15%' },
              { field: 'status', alignment: 'left', width: '9%' },
              { field: 'acrsEventCode', alignment: 'left', width: '11%' }
            ];
          };
          AssetReviewFormComponent.prototype.setTableCols = function() {
            this.setWorkPackageTableCols();
            this.initFlightsTableDataSource();
            this.postponementTableCols = [
              { field: 'control', alignment: 'left', width: '8%' },
              { field: 'workOrderCode', alignment: 'left' },
              { field: 'workOrderOrigin', alignment: 'left' },
              { field: 'workOrderType', alignment: 'left', width: '5%' },
              { field: 'workOrderStatus', alignment: 'left' },
              { field: 'workOrderDescription', alignment: 'left', width: '16%' },
              { field: 'postponementEventCode', alignment: 'left', width: '12%' },
              { field: 'postponementDateText', alignment: 'left' },
              { field: 'postponementStatus', alignment: 'left' },
              { field: 'postponementDeadLineText', alignment: 'left' }
            ];
            this.upcomingEventsTableCols = [
              { field: 'control', alignment: 'left', width: '8%' },
              { field: 'designation', alignment: 'left', width: '22%' },
              { field: 'code', alignment: 'left', width: '18%' },
              { field: 'typeString', alignment: 'left', width: '6%' },
              { field: 'eventDescription', alignment: 'left' },
              { field: 'remainingTime', alignment: 'left' },
              { field: 'remainingEquivalentPotential', alignment: 'left' }
            ];
            this.airworthinessDocumentsTableCols = [
              { field: 'control', alignment: 'left', width: '8%' },
              { field: 'asset', alignment: 'left', width: '18%' },
              { field: 'id', alignment: 'left' },
              { field: 'description', alignment: 'left' },
              { field: 'effectiveDate', alignment: 'left' },
              { field: 'limitComplianceDate', alignment: 'left' },
              { field: 'firstTime', alignment: 'left' },
              { field: 'periodicity', alignment: 'left' },
              { field: 'nextApplication', alignment: 'left' },
              { field: 'remainingApplication', alignment: 'left' }
            ];
            this.remainingTableCols = [
              { field: 'missionDepartureLocation', alignment: 'left' },
              { field: 'missionArrivalLocation', alignment: 'left' },
              { field: 'pilot', alignment: 'left' },
              { field: 'copilot', alignment: 'left' }
            ];
            this.remainingTableCols2 = [
              { field: 'ifrDuration', alignment: 'left' },
              { field: 'fuelUsed', alignment: 'left' },
              { field: 'engineStartDateText', alignment: 'left' },
              { field: 'engineStopDateText', alignment: 'left' }
            ];
          };
          AssetReviewFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
              .MAI_ASSET_REVIEW_FORM;
          };
          Object.defineProperty(AssetReviewFormComponent.prototype, 'isAssetAircraft', {
            get: function() {
              return (
                !!this.asset &&
                !!this.asset.equipmentFunction &&
                this.asset.equipmentFunction ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                    .ITEM_FAMILY_CODE_AIRCRAFT_KEY
              );
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(AssetReviewFormComponent.prototype, 'isAssetEngine', {
            get: function() {
              return (
                !!this.asset &&
                !!this.asset.equipmentFunction &&
                this.asset.equipmentFunction ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                    .ITEM_FAMILY_CODE_ENGINE_KEY
              );
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(AssetReviewFormComponent.prototype, 'isAssetEquipment', {
            get: function() {
              return !!this.asset && !this.isAssetAircraft && !this.isAssetEngine;
            },
            enumerable: true,
            configurable: true
          });
          AssetReviewFormComponent.prototype.openConfigurationControlScreen = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .MAI_CONFIGURATION_CONTROL,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Write,
              objectId: this.serializationService.serialize(this.scope)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.toggleWorkPackageExpand = function(row) {
            row._expand = !row._expand;
          };
          AssetReviewFormComponent.prototype.toggleFlightExpand = function(event) {
            this.remainingTable = [event.selectedData];
          };
          AssetReviewFormComponent.prototype.togglePostponementExpand = function(row) {
            row._expand = !row._expand;
          };
          AssetReviewFormComponent.prototype.toggleAirworthinessDocumentsExpand = function(row) {
            row._expand = !row._expand;
          };
          AssetReviewFormComponent.prototype.enableACRSbutton = function() {
            var response = true;
            this.selectedWorkPackages.forEach(function(wp) {
              response =
                wp.acrsEventCode === null || wp.acrsEventCode === undefined ? response && true : response && false;
            });
            return response;
          };
          AssetReviewFormComponent.prototype.enableACRSIfWPClosed = function() {
            var _this = this;
            var response = true;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_13__['GenericPropertyConstants']
                  .AIRM_PROJECT_STATUS_MAP
              )
              .subscribe(function(results) {
                if (!!results) {
                  var statusList = _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_30__[
                    'SelectItemUtils'
                  ].fromLabelValues(results);
                  statusList.forEach(function(status) {
                    if (
                      status.value ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                        .AIRM_PROJECT_STATUS_CLOSE
                    ) {
                      _this.selectedWorkPackages.forEach(function(wp) {
                        response = response && wp.status === status.label;
                      });
                    }
                  });
                }
              });
            return response;
          };
          AssetReviewFormComponent.prototype.refreshWorkPackage = function() {
            var _this = this;
            this.selectedWorkPackages = [];
            this.workPackageTable1 = [];
            this.workPackageTableSummary = [];
            this.workPackageTableForDisplay = [];
            this.initWorkPackageSummaryCount();
            this.initWorkPackageSummary();
            this.remainingTable = [];
            this.isWorkPackageLoading = true;
            this.assetReviewFormService
              .getWorkPackageList(this.scope.equipmentCodeList[0])
              .subscribe(function(results) {
                _this.workPackageTable1 = results;
                _this.setWorkPackageTables();
              });
          };
          AssetReviewFormComponent.prototype.refreshFlightTable = function() {
            var _this = this;
            this.flightsTable = [];
            this.flightsTableDataSource.setData([]);
            this.flightTableSummary = [];
            this.initFlightsSummaryCount();
            this.initFlightSummary();
            this.flightsTableDataSource.isLoading = true;
            this.assetReviewFormService
              .getAssetFlightList(this.scope.equipmentCodeList[0])
              .subscribe(function(results) {
                _this.flightsTable = results;
                _this.setFlightsTable();
              });
          };
          AssetReviewFormComponent.prototype.refreshPostponementTable = function() {
            var _this = this;
            this.postponementTable = [];
            this.postponementTableSummary = [];
            this.initPostponementSummaryCount();
            this.initPostponementSummary();
            this.assetReviewFormService
              .getPostponedWorkOrderList(this.scope.equipmentCodeList[0])
              .subscribe(function(results) {
                _this.postponementTable = results;
                _this.setPostponementTable();
              });
          };
          AssetReviewFormComponent.prototype.refreshUpcomingEventsTable = function() {
            var _this = this;
            this.isEquivalentPotentialLoading = true;
            this.selectedUtlAsset = undefined;
            this.upcomingEventsTableSummary = [];
            this.initUpcomingEventsSummaryCount();
            this.initUpcomingEventsSummary();
            var input = {
              equipmentCode: this.scope.equipmentCodeList[0],
              potentialUnit: this.potentialUnitSelected
            };
            this.assetReviewFormService.getAssetUpcomingEventsPotentialUnit(input).subscribe(function(results) {
              _this.sortUpcomingEventsTableData(results);
              _this.upcomingEventsTable = results;
              _this.setUpcomingEventsTable();
              _this.upcomingEventsTableBak = __spread(_this.upcomingEventsTable);
              _this.createUtlAssetList(__spread(_this.upcomingEventsTableBak));
              _this.isEquivalentPotentialLoading = false;
            });
          };
          AssetReviewFormComponent.prototype.refreshAirworthinessDocumentsTable = function() {
            var _this = this;
            this.isAirworthinessDocumentsTableLoading = true;
            this.selectedAdAsset = undefined;
            this.airworthinessDocumentsTable = [];
            this.airworthinessDocumentsTableBak = [];
            this.airworthinessDocumentsTableSummary = [];
            this.initAirworthinessDocumentsSummaryCount();
            this.initAirworthinessDocumentsSummary();
            this.assetReviewFormService
              .getAssetAirworthinessDocuments(this.scope.equipmentCodeList[0])
              .subscribe(function(results) {
                _this.sortAdTableData(results);
                _this.airworthinessDocumentsTable = results;
                _this.airworthinessDocumentsTableBak = __spread(_this.airworthinessDocumentsTable);
                _this.createAssetList(__spread(results));
                _this.setAirworthinessDocumentsTable();
              });
          };
          AssetReviewFormComponent.prototype.updateUpcomingEventsTable = function(potentialUnit) {
            this.potentialUnitSelected = potentialUnit;
            this.reload();
            this.refreshUpcomingEventsTable();
          };
          AssetReviewFormComponent.prototype.createAcrsEvent = function() {
            var _this = this;
            var inputs = [];
            var selectedIndexes = [];
            this.selectedWorkPackages.forEach(function(wp) {
              var index = _this.workPackageTableForDisplay.findIndex(function(pack) {
                return pack.wpId === wp.wpId;
              });
              if (index !== -1) {
                selectedIndexes.push(index);
                var input = {
                  wpId: _this.workPackageTableForDisplay[index].wpId,
                  equipmentCode: _this.scope.equipmentCodeList[0],
                  number: _this.workPackageTableForDisplay[index].number,
                  equipmentFunction: !!_this.asset ? _this.asset.equipmentFunction : undefined
                };
                inputs.push(input);
              }
            });
            this.assetReviewFormService.createAcrsEvent(inputs).subscribe(function(eventCode) {
              if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].isNullOrEmpty(eventCode)) {
                _this.selectedWorkPackages = [];
                var event_1 = {
                  notificationCode: eventCode
                };
                _this.openEventScreen(
                  event_1,
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
                );
                _this.refreshWorkPackage();
              }
            });
          };
          AssetReviewFormComponent.prototype.openWorkPackage = function(row) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .MAI_WORK_PACKAGE_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Write,
              objectId: this.serializationService.serialize({ wpId: row.wpId })
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.openEvent = function(row) {
            var event = {
              notificationCode: row.acrsEventCode
            };
            this.openEventScreen(
              event,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
            );
          };
          AssetReviewFormComponent.prototype.openEventScreen = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .FLE_EVENT_CREATE,
              openMode: openMode
            };
            if (!!objectId) {
              data.objectId = this.serializationService.serialize(objectId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.updateConfiguration = function() {
            var _this = this;
            this.selectedWorkPackages.forEach(function(workPackage) {
              if (workPackage.wpId) {
                _this.assetReviewFormService
                  .findBidmProject(workPackage.wpId.toString())
                  .subscribe(function(workPackageObj) {
                    if (workPackageObj.assetCode && workPackageObj.projectId) {
                      var objectId = {
                        equipmentCodeList: [workPackageObj.assetCode],
                        workPackage: workPackageObj.projectId
                      };
                      var data = {
                        id: _this.tabService.generateId(),
                        openMode:
                          _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode']
                            .Read,
                        componentId:
                          _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                            .MAI_CONFIGURATION_CONTROL,
                        objectId: _this.serializationService.serialize(objectId)
                      };
                      var labelKey = 'transaction.' + data.componentId;
                      _this.tabService.open(_this.tabService.create(data, labelKey, true));
                    }
                  });
              }
            });
          };
          AssetReviewFormComponent.prototype.updateLogbook = function() {
            var _this = this;
            this.selectedWorkPackages.forEach(function(wp) {
              var data = {
                id: _this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                    .MAI_UPDATE_LOGBOOK_FORM,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Write,
                objectId: _this.serializationService.serialize({
                  wpId: wp.wpId,
                  assetCode: _this.scope.equipmentCodeList[0],
                  warningCount: _this.logbookWarningCount
                })
              };
              var labelKey = 'transaction.' + data.componentId;
              _this.tabService.open(_this.tabService.create(data, labelKey, true));
            });
          };
          AssetReviewFormComponent.prototype.openLinkedEvent = function() {
            // todo
          };
          AssetReviewFormComponent.prototype.showValidateFlightButton = function() {
            var response = this.flightsTableDataSource.dataSelection[0].flightValidationVisibility ? true : false;
            return response;
          };
          AssetReviewFormComponent.prototype.validateFlight = function(data) {
            var flight = [];
            flight = this.flightsTable.filter(function(fl) {
              return fl.chronoNumber === data[0].chronoNumber;
            });
            if (!!flight[0]) {
              this.flightValidation(
                flight[0].bidoEquipmentDTO,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
              );
            }
          };
          AssetReviewFormComponent.prototype.flightValidation = function(objectId, openMode) {
            var labelKey = 'transaction.FlightOperationsValidationComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'FlightOperationsValidationComponent',
              openMode: openMode
            };
            if (!!objectId) {
              data.objectId = this.serializationService.serialize(objectId);
            }
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.openFlight = function(row) {
            var _this = this;
            var criteria = {
              hrModuleActivated: this.sessionService.hrModuleActivated,
              missionInstanceCode: this.getSearchMissionInstanceCode(row.chronoNumber),
              onlyNotAffectedFlights: false
            };
            this.assetReviewFormService.findAllBidoMissionEquipmentByCriteria(criteria).subscribe(function(results) {
              var missionEquipment = results.list[0];
              var data = {
                id: _this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                    .FLI_FLIGHT_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
              };
              if (!!missionEquipment) {
                if (
                  !!missionEquipment.equipmentCode &&
                  !!missionEquipment.missionCode &&
                  !!missionEquipment.occurrence
                ) {
                  var missionEquipmentId = {
                    equipmentCode: missionEquipment.equipmentCode,
                    missionCode: missionEquipment.missionCode,
                    occurrence: missionEquipment.occurrence,
                    chronoNumber: missionEquipment.chronoNumber
                  };
                  data.objectId = _this.serializationService.serialize(missionEquipmentId);
                }
              }
              var labelKey = 'transaction.' + data.componentId;
              _this.tabService.open(_this.tabService.create(data, labelKey, true));
            });
          };
          AssetReviewFormComponent.prototype.getSearchMissionInstanceCode = function(chronoNumber) {
            return _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].isNullOrEmpty(chronoNumber)
              ? undefined
              : '%' + chronoNumber;
          };
          AssetReviewFormComponent.prototype.openMission = function(row) {
            var object = {
              missionCode: row.missionCode
            };
            var labelKey = 'transaction.MissionFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'MissionFormComponent',
              objectId: this.serializationService.serialize(object),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.openJobCard = function() {
            // todo
          };
          AssetReviewFormComponent.prototype.consultWorkOrderOrigin = function(row) {
            var _this = this;
            if (!!row.workOrderOrigin) {
              var bidmWorkOrderDTO_1 = row.bidmWorkOrderDTO;
              var assetWorkOrderOriginInput = {
                woType: bidmWorkOrderDTO_1.woType,
                woSource: bidmWorkOrderDTO_1.woSource,
                evolutionType: row.evolutionType,
                familyVariantCode: !!this.scope.familyVariantList ? this.scope.familyVariantList[0] : undefined
              };
              this.assetReviewFormService
                .findWorkOrderOriginDetails(assetWorkOrderOriginInput)
                .subscribe(function(result) {
                  if (
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                      .AIRM_WORK_ORDER_TYPE_TASK === bidmWorkOrderDTO_1.woType
                  ) {
                    if (!!result.bireTaskDTOId) {
                      // open task form
                      var bireTaskDTO = result.bireTaskDTOId;
                      _this.openTask(bireTaskDTO);
                    }
                  } else if (
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                      .AIRM_WORK_ORDER_TYPE_EVOLUTION === bidmWorkOrderDTO_1.woType
                  ) {
                    if (
                      _shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_9__['BidoEvolutionConstants']
                        .CODE_EVOLUTION === row.evolutionType
                    ) {
                      if (!!result.bireEvolutionDTOId) {
                        // open evolution form
                        var bireEvolutionDTOId = {
                          adSbModDTOId: result.bireEvolutionDTOId
                        };
                        _this.openEvolution(bireEvolutionDTOId);
                      }
                    } else if (
                      _shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_9__['BidoEvolutionConstants']
                        .CODE_AD === row.evolutionType
                    ) {
                      if (!!result.bireSbDTOId) {
                        // open Airworthiness Directive form
                        var bireSBDTOId = {
                          adSbModDTOId: result.bireSbDTOId
                        };
                        _this.openAD(bireSBDTOId);
                      }
                    } else if (
                      _shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_9__['BidoEvolutionConstants']
                        .CODE_SB === row.evolutionType
                    ) {
                      if (!!result.bireSbDTOId) {
                        // open Service Bulletin form
                        var bireSbDTOId = {
                          adSbModDTOId: result.bireSbDTOId
                        };
                        _this.openSB(bireSbDTOId);
                      }
                    } else if (
                      _shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_9__['BidoEvolutionConstants']
                        .CODE_MODIFICATION === row.evolutionType
                    ) {
                      if (!!result.bireModificationDTOId) {
                        // open modification form
                        var bireModificationDTOId = {
                          adSbModDTOId: result.bireModificationDTOId
                        };
                        _this.openModification(bireModificationDTOId);
                      }
                    }
                  } else if (
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                      .AIRM_WORK_ORDER_TYPE_DEFECT === bidmWorkOrderDTO_1.woType
                  ) {
                    if (!!result.bidoNotificationDTOId && !!result.notNotificationCode) {
                      // open event form
                    }
                  } else if (
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                      .AIRM_WORK_ORDER_TYPE_SN_CHANGE === bidmWorkOrderDTO_1.woType
                  ) {
                    if (!!result.bidoEquipmentDTO) {
                      if (
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                          .ITEM_FAMILY_CODE_AIRCRAFT_KEY === result.bidoEquipmentDTO.equipmentFunction
                      ) {
                        // open aircraft
                        _this.goToAircraft(
                          result.bidoEquipmentDTO.equipmentCode,
                          _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
                        );
                      } else if (
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                          .ITEM_FAMILY_CODE_ENGINE_KEY === result.bidoEquipmentDTO.equipmentFunction
                      ) {
                        // open engine
                        _this.goToEngine(
                          result.bidoEquipmentDTO.equipmentCode,
                          _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
                        );
                      } else {
                        // open equipment
                        _this.goToEquipment(
                          result.bidoEquipmentDTO.equipmentCode,
                          _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
                        );
                      }
                    }
                  }
                });
            }
          };
          AssetReviewFormComponent.prototype.openTask = function(bireTaskDTO) {
            var labelKey = 'transaction.TaskFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'TaskFormComponent',
              objectId: this.serializationService.serialize(bireTaskDTO),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.openEventCode = function() {
            // todo
          };
          AssetReviewFormComponent.prototype.openEquipmentDesignation = function(row) {
            switch (row.bidoEquipmentDTO.equipmentFunction) {
              case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                .FAMILY_FUNCTION_AIRCRAFT_KEY:
                this.goToAircraft(
                  row.bidoEquipmentDTO.equipmentCode,
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
                );
                break;
              case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                .FAMILY_FUNCTION_ENGINE_KEY:
                this.goToEngine(
                  row.bidoEquipmentDTO.equipmentCode,
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
                );
                break;
              default:
                this.goToEquipment(
                  row.bidoEquipmentDTO.equipmentCode,
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
                );
                break;
            }
          };
          AssetReviewFormComponent.prototype.goToAircraft = function(aircraftCode, openMode) {
            var labelKey = 'transaction.AircraftFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'AircraftFormComponent',
              openMode: openMode
            };
            if (!!aircraftCode) {
              var equipmentId = {
                equipmentCode: aircraftCode
              };
              data.objectId = this.serializationService.serialize(equipmentId);
            }
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.goToEngine = function(engineCode, openMode) {
            var labelKey = 'transaction.EngineFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'EngineFormComponent',
              openMode: openMode
            };
            if (!!engineCode) {
              var equipmentId = {
                equipmentCode: engineCode
              };
              data.objectId = this.serializationService.serialize(equipmentId);
            }
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.goToEquipment = function(equipmentCode, openMode) {
            var labelKey = 'transaction.EquipmentFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'EquipmentFormComponent',
              openMode: openMode
            };
            if (!!equipmentCode) {
              var equipmentId = {
                equipmentCode: equipmentCode
              };
              data.objectId = this.serializationService.serialize(equipmentId);
            }
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.openEventDetailCode = function(row) {
            if (row.bireTaskDTOId !== null) {
              this.openTask(row.bireTaskDTOId);
            } else {
              this.openEquipmentDesignation(row);
            }
          };
          AssetReviewFormComponent.prototype.reloadAssetReview = function() {
            this.reload();
            this.refreshWorkPackage();
            this.refreshFlightTable();
            this.refreshUpcomingEventsTable();
            this.refreshAirworthinessDocumentsTable();
            this.refreshPostponementTable();
            this.loadAssetStructure();
            if (this.refreshButton) {
              this.refreshButton();
            }
          };
          AssetReviewFormComponent.prototype.openID = function(row) {
            switch (row.adSbModType) {
              case 'AD':
                this.openAD(row);
                break;
              case 'SB':
                this.openSB(row);
                break;
              case 'EVOL':
                this.openEvolution(row);
                break;
              case 'MOD':
                this.openModification(row);
                break;
              default:
                break;
            }
          };
          AssetReviewFormComponent.prototype.updateDefectSummary = function(defectCounts) {
            this.defectCounts = defectCounts;
            this.loadSummaryData();
          };
          AssetReviewFormComponent.prototype.openAD = function(row) {
            var bireSBDTOId = row.adSbModDTOId;
            var labelKey = 'transaction.AirworthinessDirectiveFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'AirworthinessDirectiveFormComponent',
              objectId: this.serializationService.serialize(bireSBDTOId),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.openSB = function(row) {
            var bireSBDTOId = row.adSbModDTOId;
            var labelKey = 'transaction.SbadFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'SbadFormComponent',
              objectId: this.serializationService.serialize(bireSBDTOId),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.openEvolution = function(row) {
            var bireEvolutionDTOId = row.adSbModDTOId;
            var labelKey = 'transaction.EvolutionFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'EvolutionFormComponent',
              objectId: this.serializationService.serialize(bireEvolutionDTOId),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.openModification = function(row) {
            var bireModificationDTOId = row.adSbModDTOId;
            var labelKey = 'transaction.ModificationFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .ENG_MODIFICATION_FORM,
              objectId: bireModificationDTOId ? this.serializationService.serialize(bireModificationDTOId) : undefined,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          // tslint:disable-next-line:no-any
          AssetReviewFormComponent.prototype.navigateToSelectedSectionFromSummary = function(
            anchorId,
            elementRef,
            event
          ) {
            _super.prototype.selectPageTocEntry.call(this, anchorId);
            _super.prototype.scrollToAnchorAndStopPropagation.call(this, elementRef, event);
          };
          AssetReviewFormComponent.prototype.navigateToRowTabIndex = function(rowData) {
            if (rowData.tabIndex !== undefined) {
              this.tabIndex = rowData.tabIndex;
            }
          };
          AssetReviewFormComponent.prototype.loadAsset = function() {
            var _this = this;
            var input = {
              equipmentCode: this.topEquipmentCodeList[0]
            };
            this.assetReviewFormService.getEquipment(input).subscribe(function(result) {
              _this.asset = result;
              _this.initSummaryTable();
              _this.initWorkPackageSummary();
              _this.setComponentContextForAsset();
            });
          };
          AssetReviewFormComponent.prototype.setNavigationLinkList = function() {
            var _this = this;
            var airworthinessStatusKey = this.getTranslateKey('airworthinessStatus');
            var appliedConfigManagementKey = this.getTranslateKey('appliedConfigurationControl');
            var assetMaintenancePlanKey = this.getTranslateKey('assetMaintenancePlan');
            var maintenancePlanningKey = this.getTranslateKey('maintenancePlanning');
            this.translateService
              .get([
                airworthinessStatusKey,
                appliedConfigManagementKey,
                assetMaintenancePlanKey,
                maintenancePlanningKey
              ])
              .subscribe(function(results) {
                var airworthinessStatusLabel = results ? results[airworthinessStatusKey] : 'Airworthiness Status';
                var appliedConfigurationControlLabel = results
                  ? results[appliedConfigManagementKey]
                  : 'Applied Configuration Control';
                var assetMaintenancePlanLabel = results ? results[assetMaintenancePlanKey] : 'Asset Maintenance Plan';
                var maintenancePlanningLabel = results ? results[maintenancePlanningKey] : 'Asset Review';
                _this.navigationLinkList = [
                  {
                    label: airworthinessStatusLabel,
                    command: function() {
                      _this.openAirworthinessStatus(_this.scope);
                    }
                  },
                  {
                    label: appliedConfigurationControlLabel,
                    command: function() {
                      _this.openAppliedConfigurationControl();
                    }
                  },
                  {
                    label: assetMaintenancePlanLabel,
                    command: function() {
                      _this.openAssetMaintenancePlan();
                    }
                  },
                  {
                    label: maintenancePlanningLabel,
                    command: function() {
                      _this.openMaintenancePlanning();
                    }
                  }
                ];
              });
          };
          AssetReviewFormComponent.prototype.openAppliedConfigurationControl = function() {
            var objectId = {
              equipmentCodeList: this.scope.equipmentCodeList
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .MAI_CONFIGURATION_CONTROL,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.openAssetMaintenancePlan = function() {
            var objectId = {
              equipmentCode: this.scope.equipmentCodeList[0]
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read,
              componentId: 'AssetMaintenancePlanComponent',
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.openMaintenancePlanning = function() {
            var objectId = {
              warehouse: this.scope.warehouse,
              equipmentCode: this.scope.equipmentCodeList[0],
              familyVariantCode:
                !!this.scope.familyVariantList && this.scope.familyVariantList.length > 0
                  ? this.scope.familyVariantList[0]
                  : undefined,
              function:
                !!this.scope.functionList && this.scope.functionList.length > 0 ? this.scope.functionList[0] : undefined
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Write,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.setPotentialUnitList = function() {
            var _this = this;
            var daysKey = this.getTranslateKey('days');
            var cyclesKey = this.getTranslateKey('cycles');
            var hoursKey = this.getTranslateKey('hours');
            this.translateService.get([daysKey, cyclesKey, hoursKey]).subscribe(function(results) {
              var daysLabel = results ? results[daysKey] : 'Days';
              var cyclesLabel = results ? results[cyclesKey] : 'Cycles';
              var hoursLabel = results ? results[hoursKey] : 'Hours';
              _this.potentialUnitList = [
                {
                  label: hoursLabel,
                  command: function() {
                    _this.updateUpcomingEventsTable(
                      _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_10__[
                        'BireUnitMeasureConstants'
                      ].HOUR
                    );
                  }
                },
                {
                  label: cyclesLabel,
                  command: function() {
                    _this.updateUpcomingEventsTable(
                      _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_10__[
                        'BireUnitMeasureConstants'
                      ].CYCLE
                    );
                  }
                },
                {
                  label: daysLabel,
                  command: function() {
                    _this.updateUpcomingEventsTable(
                      _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_10__[
                        'BireUnitMeasureConstants'
                      ].DAY
                    );
                  }
                }
              ];
            });
          };
          AssetReviewFormComponent.prototype.openAirworthinessStatus = function(objectId) {
            var componentId =
              _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                .MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM;
            var data = {
              componentId: componentId,
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Write,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.loadAssetReviewTables = function() {
            var _this = this;
            this.isSummaryTableLoading = true;
            this.isWorkPackageLoading = true;
            this.flightsTableDataSource.isLoading = true;
            this.isPostponementTableLoading = true;
            this.isUpcomingEventsTableLoading = true;
            this.isAirworthinessDocumentsTableLoading = true;
            var input = {
              equipmentCode: this.scope.equipmentCodeList[0],
              potentialUnit:
                _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_10__['BireUnitMeasureConstants']
                  .HOUR
            };
            // Apply forkjoin on Work Package and Defect APIs
            this.assetReviewFormService.getAssetReviewTabsData(input).subscribe(function(results) {
              _this.workPackageTable1 = results.assetWorkPackageList || [];
              _this.flightsTable = results.assetFlightList || [];
              _this.postponementTable = results.assetPostponedWorkOrderList || [];
              // upcoming tasks and LLP
              _this.sortUpcomingEventsTableData(results.assetUpcomingEventList);
              _this.upcomingEventsTable = results.assetUpcomingEventList || [];
              // Airwothiness documents
              _this.sortAdTableData(results.assetAirworthinessDocumentList);
              _this.airworthinessDocumentsTable = results.assetAirworthinessDocumentList || [];
              _this.airworthinessDocumentsTableBak = results.assetAirworthinessDocumentList || [];
              _this.createAssetList(__spread(_this.airworthinessDocumentsTableBak));
              _this.initEventTableData();
              // Setting tables
              _this.setWorkPackageTables();
              _this.setFlightsTable();
              _this.setPostponementTable();
              _this.setUpcomingEventsTable();
              _this.upcomingEventsTableBak = __spread(_this.upcomingEventsTable) || [];
              _this.createUtlAssetList(__spread(_this.upcomingEventsTableBak));
              _this.setAirworthinessDocumentsTable();
              // Final method call
              _this.loadSummaryData();
              _this.isSummaryTableLoading = false;
            });
          };
          AssetReviewFormComponent.prototype.initEventTableData = function() {
            var eventTableCols = [
              {
                field: 'notificationCode',
                alignment: 'left',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'reportingPeriodStartDate',
                alignment: 'left',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableColumnFilterMode']
                    .Input,
                isDate: true
              },
              {
                field: 'notificationDescription',
                alignment: 'left',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableColumnFilterMode']
                    .Input
              }
            ];
            this.eventTableData = {
              componentId: 'DialogAssetReviewEvent',
              tableCols: eventTableCols,
              tableRows: this.assetReviewFormService.findBidoNotificationList(this.acrsEventCodeList),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_16__['TableSelectionMode'].Single,
              globalFilter: true
            };
          };
          AssetReviewFormComponent.prototype.setWorkPackageTables = function() {
            // Bind work packag table
            if (this.workPackageTable1.length > 0) {
              this.bindWorkPackageTable();
              // ACRS Work Package
              this.acrsWorkPackageOkCount = this.workPackageTable1.filter(function(wp) {
                return (
                  wp.checkResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_GREEN
                );
              }).length;
              this.acrsWorkPackageNokCount = this.workPackageTable1.filter(function(wp) {
                return (
                  wp.checkResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_RED
                );
              }).length;
              this.acrsWorkPackageWarningCount = this.workPackageTable1.filter(function(wp) {
                return (
                  wp.checkResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_YELLOW
                );
              }).length;
              // Logbook Work Package
              this.logbookOkCount = this.workPackageTable1.filter(function(wp) {
                return (
                  wp.logbookCheckResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_GREEN
                );
              }).length;
              this.logbookNokCount = this.workPackageTable1.filter(function(wp) {
                return (
                  wp.logbookCheckResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_RED
                );
              }).length;
              this.logbookWarningCount = this.workPackageTable1.filter(function(wp) {
                return (
                  wp.logbookCheckResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_YELLOW
                );
              }).length;
              // Asset breakdown Work Package
              this.breakdownOkCount = this.workPackageTable1.filter(function(wp) {
                return (
                  wp.configurationCheckResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_GREEN
                );
              }).length;
              this.breakdownNokCount = this.workPackageTable1.filter(function(wp) {
                return (
                  wp.configurationCheckResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_RED
                );
              }).length;
              this.breakdownWarningCount = this.workPackageTable1.filter(function(wp) {
                return (
                  wp.configurationCheckResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_YELLOW
                );
              }).length;
              this.workPackageTableSummary[0].ok = this.acrsWorkPackageOkCount;
              this.workPackageTableSummary[0].nok = this.acrsWorkPackageNokCount;
              this.workPackageTableSummary[0].warning = this.acrsWorkPackageWarningCount;
              this.workPackageTableSummary[1].ok = this.logbookOkCount;
              this.workPackageTableSummary[1].nok = this.logbookNokCount;
              this.workPackageTableSummary[1].warning = this.logbookWarningCount;
              this.workPackageTableSummary[2].ok = this.breakdownOkCount;
              this.workPackageTableSummary[2].nok = this.breakdownNokCount;
              this.workPackageTableSummary[2].warning = this.breakdownWarningCount;
              this.loadSummaryForWorkPackage();
            } else {
              this.isWorkPackageLoading = false;
            }
          };
          AssetReviewFormComponent.prototype.bindWorkPackageTable = function() {
            var _this = this;
            this.workPackageTable1.forEach(function(wp) {
              var workPackage = {};
              workPackage.wpId = wp.wpId;
              workPackage.number = wp.number;
              workPackage.name = wp.name;
              workPackage.startDate = wp.startDate;
              workPackage.endDate = wp.endDate;
              workPackage.dueDate = wp.dueDate;
              workPackage.status = wp.status;
              workPackage.mroCenter = wp.mroCenter;
              workPackage.customer = wp.customer;
              workPackage.assignedTo = wp.assignedTo;
              workPackage.closedBy = wp.closedBy;
              workPackage.acrsEventCode = wp.acrsEventCode;
              workPackage.checkResultTooltip = wp.checkResultTooltip;
              workPackage.logbookCheckResultTooltip = wp.logbookCheckResultTooltip;
              workPackage.configurationCheckResultTooltip = wp.configurationCheckResultTooltip;
              workPackage.acrs =
                wp.checkResultIcon ===
                _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                  .ICON_GREEN
                  ? _this.okString
                  : wp.checkResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_RED
                  ? _this.nokString
                  : wp.checkResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_YELLOW
                  ? _this.warningString
                  : '';
              workPackage.logbookUpdate =
                wp.logbookCheckResultIcon ===
                _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                  .ICON_GREEN
                  ? _this.okString
                  : wp.logbookCheckResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_RED
                  ? _this.nokString
                  : wp.logbookCheckResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_YELLOW
                  ? _this.warningString
                  : '';
              workPackage.appliedConfiguration =
                wp.configurationCheckResultIcon ===
                _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                  .ICON_GREEN
                  ? _this.okString
                  : wp.configurationCheckResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_RED
                  ? _this.nokString
                  : wp.configurationCheckResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_YELLOW
                  ? _this.warningString
                  : '';
              workPackage.checkResultIcon = wp.checkResultIcon;
              workPackage.logbookCheckResultIcon = wp.logbookCheckResultIcon;
              workPackage.configurationCheckResultIcon = wp.configurationCheckResultIcon;
              workPackage._obj = wp;
              _this.createAcrsEventList(wp.acrsEventCode);
              _this.workPackageTableForDisplay.push(workPackage);
              if (wp.acrsEventCode) {
                var notificationInput = {
                  notificationCode: wp.acrsEventCode
                };
                _this.assetReviewFormService.findBidoNotification(notificationInput).subscribe(function(notification) {
                  workPackage.acrsValidatedBy = notification ? notification.statusUser : undefined;
                });
              }
            });
            this.isWorkPackageLoading = false;
          };
          AssetReviewFormComponent.prototype.setFlightsTable = function() {
            if (this.flightsTable.length > 0) {
              this.bindFlightsTable();
              this.flightOkCount = this.flightsTable.filter(function(fl) {
                return (
                  fl.checkResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_GREEN
                );
              }).length;
              this.flightNokCount = this.flightsTable.filter(function(fl) {
                return (
                  fl.checkResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_RED
                );
              }).length;
              this.flightWarningCount = this.flightsTable.filter(function(fl) {
                return (
                  fl.checkResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_YELLOW
                );
              }).length;
              this.flightTableSummary[0].ok = this.flightOkCount;
              this.flightTableSummary[0].nok = this.flightNokCount;
              this.flightTableSummary[0].warning = this.flightWarningCount;
              this.loadSummaryForFlights();
            } else {
              this.flightsTableDataSource.setData([]);
              this.flightsTableDataSource.isLoading = false;
            }
          };
          AssetReviewFormComponent.prototype.bindFlightsTable = function() {
            var _this = this;
            var flightsForDisplay = this.flightsTable.map(function(fl) {
              var flight = {};
              flight.rowId = Math.random();
              flight.chronoNumber = fl.chronoNumber;
              flight.missionCode = fl.missionCode;
              flight.missionType = fl.missionType;
              flight.startDateText = _this.dateService.timestampWithHourMinSecToString(fl.startDateText);
              flight.endDateText = _this.dateService.timestampWithHourMinSecToString(fl.endDateText);
              flight.duration = fl.duration;
              flight.cycleNumber = fl.cycleNumber;
              flight.statusStateText = fl.statusStateText;
              flight.control =
                fl.checkResultIcon ===
                _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                  .ICON_GREEN
                  ? _this.okString
                  : fl.checkResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_RED
                  ? _this.nokString
                  : fl.checkResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_YELLOW
                  ? _this.warningString
                  : '';
              flight.missionDepartureLocation = fl.missionDepartureLocation;
              flight.missionArrivalLocation = fl.missionArrivalLocation;
              flight.pilot = fl.pilot;
              flight.copilot = fl.copilot;
              flight.ifrDuration = fl.ifrDuration;
              if (fl.fuelUsed !== null && fl.fuelUsed !== undefined) {
                flight.fuelUsed = fl.fuelUsed.toString();
              }
              flight.engineStartDateText = _this.dateService.timestampWithHourMinSecToString(fl.engineStartDateText);
              flight.engineStopDateText = _this.dateService.timestampWithHourMinSecToString(fl.engineStopDateText);
              flight.flightValidationVisibility = fl.flightValidationVisibility;
              flight._obj = fl;
              return flight;
            });
            this.flightsTableDataSource.setData(flightsForDisplay);
            this.flightsTableDataSource.addContentFilterToColumn('missionCode');
            this.flightsTableDataSource.addContentFilterToColumn('missionType');
            this.flightsTableDataSource.addContentFilterToColumn('statusStateText');
            this.flightsTableDataSource.isLoading = false;
          };
          AssetReviewFormComponent.prototype.setPostponementTable = function() {
            if (this.postponementTable.length > 0) {
              this.bindPostponementTable();
              this.postponementOkCount = this.postponementTable.filter(function(postponement) {
                return (
                  postponement.checkResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_GREEN
                );
              }).length;
              this.postponementNokCount = this.postponementTable.filter(function(postponement) {
                return (
                  postponement.checkResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_RED
                );
              }).length;
              this.postponementWarningCount = this.postponementTable.filter(function(postponement) {
                return (
                  postponement.checkResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_YELLOW
                );
              }).length;
              this.postponementTableSummary[0].ok = this.postponementOkCount;
              this.postponementTableSummary[0].nok = this.postponementNokCount;
              this.postponementTableSummary[0].warning = this.postponementWarningCount;
              this.loadSummaryForPostponement();
            } else {
              this.isPostponementTableLoading = false;
            }
          };
          AssetReviewFormComponent.prototype.bindPostponementTable = function() {
            var _this = this;
            this.postponementTable.forEach(function(p) {
              p.rowId = Math.random();
              p.control =
                p.checkResultIcon ===
                _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                  .ICON_GREEN
                  ? _this.okString
                  : p.checkResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_RED
                  ? _this.nokString
                  : p.checkResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_YELLOW
                  ? _this.warningString
                  : '';
              if (!!p.postponementDateText) {
                var date = new Date(p.postponementDateText);
                p.postponementDateText = _this.dateService.dateToString(date);
              }
              if (!!p.postponementDeadLineText) {
                var date = new Date(p.postponementDeadLineText);
                p.postponementDeadLineText = _this.dateService.dateToString(date);
              }
            });
            this.isPostponementTableLoading = false;
          };
          AssetReviewFormComponent.prototype.setUpcomingEventsTable = function() {
            if (this.upcomingEventsTable.length > 0) {
              this.bindUpcomingEventsTable();
              this.upcomingEventsOkCount = this.upcomingEventsTable.filter(function(event) {
                return (
                  event.checkResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_GREEN || event.checkResultIcon === null
                );
              }).length;
              this.upcomingEventsNokCount = this.upcomingEventsTable.filter(function(event) {
                return (
                  event.checkResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_RED
                );
              }).length;
              this.upcomingEventsWarningCount = this.upcomingEventsTable.filter(function(event) {
                return (
                  event.checkResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_YELLOW
                );
              }).length;
              this.upcomingEventsTableSummary[0].ok = this.upcomingEventsOkCount;
              this.upcomingEventsTableSummary[0].nok = this.upcomingEventsNokCount;
              this.upcomingEventsTableSummary[0].warning = this.upcomingEventsWarningCount;
              this.loadSummaryForUpcomingEvents();
            } else {
              this.isUpcomingEventsTableLoading = false;
              this.sortUpcomingEventDTORowOnRemainingPotential();
            }
          };
          AssetReviewFormComponent.prototype.bindUpcomingEventsTable = function() {
            var _this = this;
            this.upcomingEventsTable.forEach(function(event) {
              event.rowId = Math.random();
              event.control =
                event.checkResultIcon ===
                _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                  .ICON_GREEN
                  ? _this.okString
                  : event.checkResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_RED
                  ? _this.nokString
                  : event.checkResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_YELLOW
                  ? _this.warningString
                  : _this.okString;
              event.typeString = _this.convertTypeToString(event.type);
            });
            this.isUpcomingEventsTableLoading = false;
            this.sortUpcomingEventDTORowOnRemainingPotential();
          };
          AssetReviewFormComponent.prototype.convertTypeToString = function(type) {
            switch (type) {
              case 1:
                return 'AD';
              case 2:
                return 'AIRCRAFT';
              // tslint:disable-next-line: no-magic-numbers
              case 3:
                return 'DEFECT';
              // tslint:disable-next-line: no-magic-numbers
              case 4:
                return 'GROUP_CODE';
              // tslint:disable-next-line: no-magic-numbers
              case 5:
                return 'ENGINE';
              // tslint:disable-next-line: no-magic-numbers
              case 6:
                return 'EQUIPMENT';
              // tslint:disable-next-line: no-magic-numbers
              case 7:
                return 'LLP';
              // tslint:disable-next-line: no-magic-numbers
              case 8:
                return 'SB';
              // tslint:disable-next-line: no-magic-numbers
              case 9:
                return 'TASK';
              // tslint:disable-next-line: no-magic-numbers
              case 10:
                return 'VISIT';
              default:
                return '';
            }
          };
          AssetReviewFormComponent.prototype.setAirworthinessDocumentsTable = function() {
            if (this.airworthinessDocumentsTable.length > 0) {
              this.bindAirworthinessDocumentsTable();
              this.airworthinessDocumentsOkCount = this.airworthinessDocumentsTable.filter(function(doc) {
                return (
                  doc.checkResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_GREEN
                );
              }).length;
              this.airworthinessDocumentsNokCount = this.airworthinessDocumentsTable.filter(function(doc) {
                return (
                  doc.checkResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_RED
                );
              }).length;
              this.airworthinessDocumentsWarningCount = this.airworthinessDocumentsTable.filter(function(doc) {
                return (
                  doc.checkResultIcon ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_YELLOW
                );
              }).length;
              this.airworthinessDocumentsTableSummary[0].ok = this.airworthinessDocumentsOkCount;
              this.airworthinessDocumentsTableSummary[0].nok = this.airworthinessDocumentsNokCount;
              this.airworthinessDocumentsTableSummary[0].warning = this.airworthinessDocumentsWarningCount;
              this.loadSummaryforAD();
            } else {
              this.isAirworthinessDocumentsTableLoading = false;
            }
          };
          AssetReviewFormComponent.prototype.bindAirworthinessDocumentsTable = function() {
            var _this = this;
            this.airworthinessDocumentsTable.forEach(function(doc) {
              doc.id = doc.number;
              doc.rowId = Math.random();
              doc.control =
                doc.checkResultIcon ===
                _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                  .ICON_GREEN
                  ? _this.okString
                  : doc.checkResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_RED
                  ? _this.nokString
                  : doc.checkResultIcon ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_YELLOW
                  ? _this.warningString
                  : '';
              if (!!doc.effectiveDate) {
                var effectiveDate = new Date(doc.effectiveDate);
                doc.effectiveDate = _this.dateService.dateToString(effectiveDate);
              }
              if (!!doc.limitComplianceDate) {
                var limitComplianceDate = new Date(doc.limitComplianceDate);
                doc.limitComplianceDate = _this.dateService.dateToString(limitComplianceDate);
              }
              if (!!doc.lastApplicationDate) {
                var lastApplicationDate = new Date(doc.lastApplicationDate);
                doc.lastApplicationDate = _this.dateService.dateToString(lastApplicationDate);
              }
            });
            this.isAirworthinessDocumentsTableLoading = false;
          };
          AssetReviewFormComponent.prototype.loadAssetStructure = function() {
            var _this = this;
            var input = {
              checkConfiguration: true,
              checkFl: true,
              checkLogbook: true,
              checkMel: true,
              checkPotential: true,
              checkReferential: true,
              checkStructure: true,
              equipmentCode: this.scope.equipmentCodeList[0],
              projectId: undefined,
              withAllCounters: true,
              withFunctionalLocations: true,
              withMelFlag: true
            };
            this.assetReviewFormService.controlConfiguration(input).subscribe(function(result) {
              if (result) {
                _this.assetStructureSrc = [_this.createAssetStructureTreeNode(result)];
                _this.assetStructure = Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__['cloneDeep'])(
                  _this.assetStructureSrc
                );
                _this.updateSummaryTable();
              }
            });
          };
          AssetReviewFormComponent.prototype.createAssetStructureTreeNode = function(asset) {
            var _this = this;
            asset.checkGlobalResult = this.calculateCheckGlobalResultForAssetStructureNode(asset);
            var node = {
              data: asset,
              expanded: false,
              children: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_28__['ListUtils']
                .orEmpty(asset.children)
                .map(function(childAsset) {
                  return _this.createAssetStructureTreeNode(childAsset);
                })
            };
            return node;
          };
          AssetReviewFormComponent.prototype.updateSummaryTable = function() {
            var _this = this;
            this.initConfigSummaryTable();
            this.assetStructure.forEach(function(asset) {
              return _this.updateSummaryTableWithAssetStructureTreeNode(asset);
            });
            this.updateSummaryTableRowGlobal();
          };
          AssetReviewFormComponent.prototype.initConfigSummaryTable = function() {
            this.summaryTable = [
              {
                category: '',
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: '',
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: '',
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: '',
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: '',
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: '',
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: '',
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: '',
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: '',
                nok: 0,
                ok: 0,
                warning: 0
              }
            ];
          };
          AssetReviewFormComponent.prototype.calculateCheckGlobalResultForAssetStructureNode = function(asset) {
            var checkList = [
              asset.checkCoreResult,
              asset.checkConfigurationResult,
              asset.checkStructureResult,
              asset.checkPotentialResult,
              asset.checkReferentialResult,
              asset.checkMelResult,
              asset.checkLogbookResult,
              asset.checkFlResult
            ].filter(function(check) {
              return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__['ObjectUtils'].isDefined(check);
            });
            return checkList.some(function(check) {
              return (
                check ===
                _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                  .ICON_RED
              );
            })
              ? _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                  .ICON_RED
              : checkList.some(function(check) {
                  return (
                    check ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_YELLOW
                  );
                })
              ? _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                  .ICON_YELLOW
              : _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                  .ICON_GREEN;
          };
          AssetReviewFormComponent.prototype.updateSummaryTableWithAssetStructureTreeNode = function(node) {
            var _this = this;
            var asset = node.data;
            // Configuration check
            this.updateSummaryTableRow(
              AssetReviewFormComponent_1.SUMMARY_TABLE_CONFIGURATION_INDEX,
              asset.checkConfigurationResult
            );
            // Core check
            this.updateSummaryTableRow(AssetReviewFormComponent_1.SUMMARY_TABLE_CORE_INDEX, asset.checkCoreResult);
            // FL check
            this.updateSummaryTableRow(AssetReviewFormComponent_1.SUMMARY_TABLE_FL_INDEX, asset.checkFlResult);
            // Logbook check
            this.updateSummaryTableRow(
              AssetReviewFormComponent_1.SUMMARY_TABLE_LOGBOOK_INDEX,
              asset.checkLogbookResult
            );
            // MEL check
            this.updateSummaryTableRow(AssetReviewFormComponent_1.SUMMARY_TABLE_MEL_INDEX, asset.checkMelResult);
            // Potential check
            this.updateSummaryTableRow(
              AssetReviewFormComponent_1.SUMMARY_TABLE_POTENTIAL_INDEX,
              asset.checkPotentialResult
            );
            // Referential check
            this.updateSummaryTableRow(
              AssetReviewFormComponent_1.SUMMARY_TABLE_REFERENTIAL_INDEX,
              asset.checkReferentialResult
            );
            // Structure check
            this.updateSummaryTableRow(
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_CONFIGURATION,
              asset.checkStructureResult
            );
            // Children
            if (node.children) {
              node.children.forEach(function(childAsset) {
                return _this.updateSummaryTableWithAssetStructureTreeNode(childAsset);
              });
            }
          };
          AssetReviewFormComponent.prototype.updateSummaryTableRowGlobal = function() {
            var index = AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_CONFIGURATION;
            var nok = this.summaryTable
              .slice(1)
              .map(function(row) {
                return row.nok;
              })
              .reduce(function(a, b) {
                return a + b;
              }, 0);
            this.acrsStatusTable[index].nok = nok;
            this.configurationNokCount = nok;
            var ok = this.summaryTable
              .slice(1)
              .map(function(row) {
                return row.ok;
              })
              .reduce(function(a, b) {
                return a + b;
              }, 0);
            this.acrsStatusTable[index].ok = ok;
            this.configurationOkCount = ok;
            var warning = this.summaryTable
              .slice(1)
              .map(function(row) {
                return row.warning;
              })
              .reduce(function(a, b) {
                return a + b;
              }, 0);
            this.acrsStatusTable[index].warning = warning;
            this.configurationWarningCount = warning;
            this.loadReviewStatusSummaryData();
          };
          AssetReviewFormComponent.prototype.updateSummaryTableRow = function(rowIndex, checkResult) {
            this.summaryTable[rowIndex].nok +=
              checkResult ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_RED
                ? 1
                : 0;
            this.summaryTable[rowIndex].ok +=
              checkResult ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_GREEN
                ? 1
                : 0;
            this.summaryTable[rowIndex].warning +=
              checkResult ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_YELLOW
                ? 1
                : 0;
          };
          AssetReviewFormComponent.prototype.loadSummaryData = function() {
            // Workpackage
            this.loadSummaryForWorkPackage();
            // Defects
            this.loadSummaryForDefects();
            // Flights
            this.loadSummaryForFlights();
            // Postponement
            this.loadSummaryForPostponement();
            // Upcoming events
            this.loadSummaryForUpcomingEvents();
            // Airworthiness Documents
            this.loadSummaryforAD();
            // loadGloabSummaryData
            this.loadReviewStatusSummaryData();
          };
          AssetReviewFormComponent.prototype.loadReviewStatusSummaryData = function() {
            this.acrsStatusTable[AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_HEADER].ok =
              this.acrsWorkPackageOkCount +
              this.logbookOkCount +
              this.breakdownOkCount +
              this.configurationOkCount +
              this.defectCounts.ok +
              this.flightOkCount +
              this.postponementOkCount +
              this.upcomingEventsOkCount +
              this.airworthinessDocumentsOkCount; // add oks for all the fields to be added in future
            this.acrsStatusTable[AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_HEADER].nok =
              this.acrsWorkPackageNokCount +
              this.logbookNokCount +
              this.breakdownNokCount +
              this.configurationNokCount +
              this.defectCounts.nok +
              this.flightNokCount +
              this.postponementNokCount +
              this.upcomingEventsNokCount +
              this.airworthinessDocumentsNokCount; // add noks for all the fields to be added in future
            this.acrsStatusTable[AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_HEADER].warning =
              this.acrsWorkPackageWarningCount +
              this.logbookWarningCount +
              this.breakdownWarningCount +
              this.configurationWarningCount +
              this.defectCounts.warning +
              this.flightWarningCount +
              this.postponementWarningCount +
              this.upcomingEventsWarningCount +
              this.airworthinessDocumentsWarningCount; // add warnings for all the fields to be added in future
          };
          AssetReviewFormComponent.prototype.loadSummaryForWorkPackage = function() {
            // Work package
            this.acrsStatusTable[AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_ACRS].ok = this.acrsWorkPackageOkCount;
            this.acrsStatusTable[AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_ACRS].nok = this.acrsWorkPackageNokCount;
            this.acrsStatusTable[
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_ACRS
            ].warning = this.acrsWorkPackageWarningCount;
            // Logbook
            this.acrsStatusTable[AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_LOGBOOK].ok = this.logbookOkCount;
            this.acrsStatusTable[AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_LOGBOOK].nok = this.logbookNokCount;
            this.acrsStatusTable[
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_LOGBOOK
            ].warning = this.logbookWarningCount;
            // Asset breakdown
            this.acrsStatusTable[
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_ASSET_BREAKDOWN
            ].ok = this.breakdownOkCount;
            this.acrsStatusTable[
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_ASSET_BREAKDOWN
            ].nok = this.breakdownNokCount;
            this.acrsStatusTable[
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_ASSET_BREAKDOWN
            ].warning = this.breakdownWarningCount;
          };
          AssetReviewFormComponent.prototype.loadSummaryForDefects = function() {
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_DEFECTS].ok = this.defectCounts.ok;
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_DEFECTS].nok = this.defectCounts.nok;
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_DEFECTS
            ].warning = this.defectCounts.warning;
          };
          AssetReviewFormComponent.prototype.loadSummaryForFlights = function() {
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_FLIGHTS].ok = this.flightOkCount;
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_FLIGHTS].nok = this.flightNokCount;
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_FLIGHTS
            ].warning = this.flightWarningCount;
          };
          AssetReviewFormComponent.prototype.loadSummaryForPostponement = function() {
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_POSTPONED].ok = this.postponementOkCount;
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_POSTPONED
            ].nok = this.postponementNokCount;
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_POSTPONED
            ].warning = this.postponementWarningCount;
          };
          AssetReviewFormComponent.prototype.loadSummaryForUpcomingEvents = function() {
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_UPCOMING].ok = this.upcomingEventsOkCount;
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_UPCOMING
            ].nok = this.upcomingEventsNokCount;
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_UPCOMING
            ].warning = this.upcomingEventsWarningCount;
          };
          AssetReviewFormComponent.prototype.loadSummaryforAD = function() {
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_DOCUMENTS
            ].ok = this.airworthinessDocumentsOkCount;
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_DOCUMENTS
            ].nok = this.airworthinessDocumentsNokCount;
            // tslint:disable-next-line:no-magic-numbers
            this.acrsStatusTable[
              AssetReviewFormComponent_1.SUMMARY_TABLE_ROW_DOCUMENTS
            ].warning = this.airworthinessDocumentsWarningCount;
          };
          AssetReviewFormComponent.prototype.createAcrsEventList = function(eventCode) {
            if (!!eventCode) {
              var id_1 = {
                notificationCode: eventCode
              };
              var exists = this.acrsEventCodeList.some(function(event) {
                return event.notificationCode === id_1.notificationCode;
              });
              if (!exists) {
                this.acrsEventCodeList.push(id_1);
              }
            }
          };
          AssetReviewFormComponent.prototype.setComponentContextForAsset = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_13__['GenericPropertyConstants']
                  .FAMILY_FUNCTION_MAP
              )
              .subscribe(function(result) {
                if (_this.asset) {
                  var componentContext = void 0;
                  if (_this.isAssetAircraft) {
                    var selectedFunction = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_28__['ListUtils']
                      .orEmpty(result)
                      .find(function(elt) {
                        return elt.value === _this.asset.equipmentFunction;
                      });
                    var aircraftLabel = selectedFunction ? selectedFunction.label : 'Aircraft';
                    componentContext = [
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(aircraftLabel),
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(
                        _this.asset.registration
                      )
                    ]
                      .filter(function(s) {
                        return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].isEmpty(s);
                      })
                      .join(' ');
                  } else {
                    componentContext = [
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(
                        _this.asset.equipmentDesignation
                      ),
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(_this.asset.sn)
                    ]
                      .filter(function(s) {
                        return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].isEmpty(s);
                      })
                      .join(' / ');
                  }
                  _this.displayComponentContext(componentContext, _this.isCreateOpenMode);
                }
              });
          };
          AssetReviewFormComponent.prototype.loadAirworthinessTableColumnLabelList = function() {
            var _this = this;
            var observables = [
              this.assetReviewFormService.getCsnLabelForAirworthinessControl(),
              this.assetReviewFormService.getTsnLabelForAirworthinessControl()
            ];
            Object(_node_modules_rxjs__WEBPACK_IMPORTED_MODULE_4__['forkJoin'])(observables).subscribe(function(_a) {
              var _b = __read(_a, 2),
                cycleBireMeasureReferenceLabel = _b[0],
                timeBireMeasureReferenceLabel = _b[1];
              _this.airworthinessTableColCsnLabel = cycleBireMeasureReferenceLabel;
              _this.airworthinessTableColTsnLabel = timeBireMeasureReferenceLabel;
            });
          };
          AssetReviewFormComponent.prototype.reload = function() {
            this.assetAirworthiness = undefined;
            this.load();
          };
          AssetReviewFormComponent.prototype.load = function() {
            var _this = this;
            this.globalAlertListLoading = true;
            var airworthinessTableParams = {
              equipmentCodeList: this.topEquipmentCodeList,
              simulation: this.simulationCriteria !== undefined,
              simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
              simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
              simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
              unitEquivalent: this.potentialUnitSelected
            };
            this.assetReviewFormService
              .generateAirworthinessControlTable(airworthinessTableParams)
              .subscribe(function(results) {
                _this.airworthinessTreeTable = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_28__['ListUtils']
                  .orEmpty(results)
                  .filter(function(elt) {
                    return (
                      elt.bidoEquipment &&
                      !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].isNullOrEmpty(
                        elt.bidoEquipment.equipmentCode
                      )
                    );
                  });
                _this.createAllAirworhtinessRow(_this.airworthinessTreeTable);
                // In asset view mode, show sub assemblies
                var topEquipmentCode = _this.airworthinessTreeTable[0].bidoEquipment.equipmentCode;
                var topEquipment = _this.airworthinessMap.get(topEquipmentCode);
                _this.assetAirworthiness = _this.airworthinessMap.get(topEquipmentCode);
                _this.computeGlobalAlertForEachTopEquipment([topEquipment]);
              });
          };
          AssetReviewFormComponent.prototype.createAllAirworhtinessRow = function(list) {
            var _this = this;
            if (list.length > 0) {
              list.forEach(function(elt) {
                _this.airworthinessMap.set(elt.bidoEquipment.equipmentCode, _this.createAirworthinessRow(elt));
                _this.createAllAirworhtinessRow(elt.children);
              });
            }
          };
          AssetReviewFormComponent.prototype.createAirworthinessRow = function(elt) {
            return {
              alert: elt.globalAirworthinessStatus,
              asset: _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_26__[
                'BidoEquipmentUtils'
              ].createAssetName(elt.bidoEquipment),
              csn: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(elt.counterCsn),
              designation: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(
                elt.assetDesignation
              ),
              mp: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(
                elt.maintenanceProgram
              ),
              nextWorkPackage: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(
                elt.nextWorkPackage
              ),
              potential: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(elt.potential),
              status: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(elt.status),
              tsn: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils'].orEmpty(elt.counterTsn),
              hasChildren: elt.children.length > 0,
              _id: elt.bidoEquipment.equipmentCode,
              _obj: elt,
              _alertLoading: false,
              _alertTooltip: '',
              _expand: false,
              _potentialLoading: false
            };
          };
          AssetReviewFormComponent.prototype.computeGlobalAlertForEachTopEquipment = function(topEquipmentList) {
            var _this = this;
            topEquipmentList.forEach(function(equipment) {
              equipment._alertLoading = true;
            });
            // this.togglePotentialLoadingIndicator(true);
            var observables = topEquipmentList.map(function(equipment) {
              var input = {
                equipmentCodeList: _this.topEquipmentCodeList,
                simulation: _this.simulationCriteria !== undefined,
                simulationCyclesValue: _this.simulationCriteria ? _this.simulationCriteria.inCycles : undefined,
                simulationDateValue: _this.simulationCriteria ? _this.simulationCriteria.atDate : undefined,
                simulationHoursValue: _this.simulationCriteria ? _this.simulationCriteria.inHours : undefined,
                equipmentToCheck: equipment._obj.bidoEquipment.equipmentCode
              };
              return _this.assetReviewFormService.checkEquipmentForAirworthinessControl(input);
            });
            _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_4__['merge']
              .apply(void 0, __spread(observables))
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['finalize'])(function() {
                  _this.computePotentialForAllEquipment();
                  _this.globalAlertListLoading = false;
                })
              )
              .subscribe(function(result) {
                var matchingEquipment = topEquipmentList.find(function(equipment) {
                  return equipment._obj.bidoEquipment.equipmentCode === result.bidoEquipment.equipmentCode;
                });
                if (!!matchingEquipment) {
                  matchingEquipment._alertLoading = false;
                  matchingEquipment.alert = result.globalAirworthinessStatus;
                }
              });
          };
          AssetReviewFormComponent.prototype.computePotentialForAllEquipment = function() {
            var _this = this;
            var params = {
              equipmentCodeList: this.topEquipmentCodeList,
              simulation: this.simulationCriteria !== undefined,
              simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
              simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
              simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
              unitMeasure: this.potentialUnitSelected
            };
            this.assetReviewFormService
              .computePotentialForAirworthinessControlInput(params)
              .subscribe(function(results) {
                var treeNodeMap = _this.mapTreeNodeByEquipmentCode(results);
                treeNodeMap.forEach(function(_, key) {
                  var treeNode = treeNodeMap.get(key);
                  var matchingElt = _this.airworthinessMap.get(key);
                  if (!!treeNode) {
                    matchingElt.potential = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__[
                      'StringUtils'
                    ].orEmpty(treeNode.remainingEquivalent);
                    matchingElt._obj.remainingEquivalent = treeNode.remainingEquivalent;
                    matchingElt._obj.remainingEquivalentIcon = treeNode.remainingEquivalentIcon;
                    matchingElt._obj.remainingEquivalentTooltip = treeNode.remainingEquivalentTooltip;
                    if (
                      matchingElt.alert ===
                      _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                        .ICON_YELLOW
                    ) {
                      var lowRemainingKey = _this.getTranslateKey('lowRemaining');
                      _this.translateService.get(lowRemainingKey).subscribe(function(translatedKey) {
                        matchingElt._alertTooltip = translatedKey || 'Low remaining';
                      });
                    } else if (
                      matchingElt.alert ===
                      _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                        .ICON_RED
                    ) {
                      var missingAssetInAppliedConfigurationKey_1 = _this.getTranslateKey(
                        'missingAssetInAppliedConfiguration'
                      );
                      var overPotentialKey_1 = _this.getTranslateKey('overduePotential');
                      var overPotentialSubassemblyKey_1 = _this.getTranslateKey('overduePotentialSubAssembly');
                      _this.translateService
                        .get([
                          missingAssetInAppliedConfigurationKey_1,
                          overPotentialKey_1,
                          overPotentialSubassemblyKey_1
                        ])
                        .subscribe(function(translatedKeys) {
                          var missingAssetInAppliedConfigurationLabel = !!translatedKeys
                            ? translatedKeys[missingAssetInAppliedConfigurationKey_1]
                            : 'Missing asset in the applied configuration';
                          var overPotentialLabel = !!translatedKeys
                            ? translatedKeys[overPotentialKey_1]
                            : 'Overdue potential';
                          var overPotentialSubassemblyLabel = !!translatedKeys
                            ? translatedKeys[overPotentialSubassemblyKey_1]
                            : 'Overdue potential on sub-assemblies';
                          var alertList = [];
                          if (matchingElt.potential.startsWith('-')) {
                            alertList = __spread(alertList, [overPotentialLabel]);
                          }
                          var overduePotentialSubAssembly = matchingElt._obj.children.some(function(child) {
                            return _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_31__['StringUtils']
                              .orEmpty(child.remainingEquivalent)
                              .startsWith('-');
                          });
                          if (overduePotentialSubAssembly) {
                            alertList = __spread(alertList, [overPotentialSubassemblyLabel]);
                          }
                          if (
                            treeNode.checkResultIcon ===
                            _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__[
                              'ControlConfigConstants'
                            ].ICON_RED
                          ) {
                            alertList = __spread(alertList, [missingAssetInAppliedConfigurationLabel]);
                          }
                          matchingElt._alertTooltip = alertList.join(' & ');
                        });
                    }
                  }
                });
              });
          };
          AssetReviewFormComponent.prototype.initSummaryTable = function() {
            var _this = this;
            var reviewStatusDetail = this.getComponentName() + '.reviewStatusDetail';
            var acrsWorkPackages = this.getComponentName() + '.acrsWorkPackages';
            if (this.showForm1()) {
              acrsWorkPackages = this.getComponentName() + '.form1WorkPackages';
            }
            var logbookWorkPackages = this.getComponentName() + '.logbookWorkPackages';
            var assetBreakdownWorkPackages = this.getComponentName() + '.assetBreakdownWorkPackages';
            var configuration = this.getComponentName() + '.configuration';
            var defects = this.getComponentName() + '.defects';
            var flights = this.getComponentName() + '.flights';
            var postponement = this.getComponentName() + '.postponement';
            var upcomingEvents = this.getComponentName() + '.upcomingEvents';
            var airworthinessDocuments = this.getComponentName() + '.airworthinessDocuments';
            this.translateService
              .get([
                reviewStatusDetail,
                acrsWorkPackages,
                logbookWorkPackages,
                assetBreakdownWorkPackages,
                configuration,
                defects,
                flights,
                postponement,
                upcomingEvents,
                airworthinessDocuments
              ])
              .subscribe(function(results) {
                _this.acrsStatusTable = [
                  {
                    category: results[reviewStatusDetail],
                    ok: 0,
                    warning: 0,
                    nok: 0,
                    label: AssetReviewFormComponent_1.SUMMARY_TABLE_TOTAL_LABEL
                  },
                  {
                    category: results[acrsWorkPackages],
                    ok: _this.acrsWorkPackageOkCount,
                    warning: _this.acrsWorkPackageWarningCount,
                    nok: _this.acrsWorkPackageNokCount,
                    label: AssetReviewFormComponent_1.SUMMARY_TABLE_ACRS_LABEL,
                    tabIndex: AssetReviewFormComponent_1.WORK_PACKAGE_TAB_INDEX
                  },
                  {
                    category: results[logbookWorkPackages],
                    ok: _this.logbookOkCount,
                    warning: _this.logbookWarningCount,
                    nok: _this.logbookNokCount,
                    label: AssetReviewFormComponent_1.SUMMARY_TABLE_LOGBOOK_LABEL,
                    tabIndex: AssetReviewFormComponent_1.WORK_PACKAGE_TAB_INDEX
                  },
                  {
                    category: results[assetBreakdownWorkPackages],
                    ok: _this.breakdownOkCount,
                    warning: _this.breakdownNokCount,
                    nok: _this.breakdownWarningCount,
                    label: AssetReviewFormComponent_1.SUMMARY_TABLE_BREAKDOWN_LABEL,
                    tabIndex: AssetReviewFormComponent_1.WORK_PACKAGE_TAB_INDEX
                  },
                  {
                    category: results[configuration],
                    ok: _this.configurationOkCount,
                    warning: _this.configurationWarningCount,
                    nok: _this.configurationNokCount,
                    label: AssetReviewFormComponent_1.SUMMARY_TABLE_CONFIGURATION_LABEL
                  },
                  {
                    category: results[defects],
                    ok: _this.defectCounts.ok,
                    warning: _this.defectCounts.warning,
                    nok: _this.defectCounts.nok,
                    label: AssetReviewFormComponent_1.SUMMARY_TABLE_DEFECTS_LABEL,
                    tabIndex: AssetReviewFormComponent_1.DEFECT_TAB_INDEX
                  },
                  {
                    category: results[flights],
                    ok: _this.flightOkCount,
                    warning: _this.flightWarningCount,
                    nok: _this.flightNokCount,
                    label: AssetReviewFormComponent_1.SUMMARY_TABLE_FLIGHTS_LABEL,
                    tabIndex: AssetReviewFormComponent_1.FLIGHT_TAB_INDEX
                  },
                  {
                    category: results[postponement],
                    ok: _this.postponementOkCount,
                    warning: _this.postponementWarningCount,
                    nok: _this.postponementNokCount,
                    label: AssetReviewFormComponent_1.SUMMARY_TABLE_POSTPONEMENT_LABEL,
                    tabIndex: AssetReviewFormComponent_1.POSTPONED_WORK_ORDER_TAB_INDEX
                  },
                  {
                    category: results[upcomingEvents],
                    ok: _this.upcomingEventsOkCount,
                    warning: _this.upcomingEventsNokCount,
                    nok: _this.upcomingEventsWarningCount,
                    label: AssetReviewFormComponent_1.SUMMARY_TABLE_UPCOMING_EVENTS_LABEL,
                    tabIndex: AssetReviewFormComponent_1.UPCOMING_TASK_LLP_TAB_INDEX
                  },
                  {
                    category: results[airworthinessDocuments],
                    ok: _this.airworthinessDocumentsOkCount,
                    warning: _this.airworthinessDocumentsWarningCount,
                    nok: _this.airworthinessDocumentsNokCount,
                    label: AssetReviewFormComponent_1.SUMMARY_TABLE_AIRWORTHINESS_DOCUMENTS_LABEL,
                    tabIndex: AssetReviewFormComponent_1.AIRWORTHINESS_DOCUMENTS_TAB_INDEX
                  }
                ];
                // configuration summary
                _this.loadAssetStructure();
              });
          };
          AssetReviewFormComponent.prototype.initWorkPackageSummary = function() {
            var _this = this;
            var acrs = this.getComponentName() + '.acrs';
            if (this.showForm1()) {
              acrs = this.getComponentName() + '.form1';
            }
            var logbookUpdate = this.getComponentName() + '.logbookUpdate';
            var assetBreakdown = this.getComponentName() + '.appliedConfiguration';
            this.translateService.get([acrs, logbookUpdate, assetBreakdown]).subscribe(function(results) {
              _this.workPackageTableSummary = [
                {
                  category: results[acrs],
                  ok: _this.acrsWorkPackageOkCount,
                  warning: _this.acrsWorkPackageWarningCount,
                  nok: _this.acrsWorkPackageNokCount
                },
                {
                  category: results[logbookUpdate],
                  ok: _this.logbookOkCount,
                  warning: _this.logbookWarningCount,
                  nok: _this.logbookNokCount
                },
                {
                  category: results[assetBreakdown],
                  ok: _this.breakdownOkCount,
                  warning: _this.breakdownNokCount,
                  nok: _this.breakdownWarningCount
                }
              ];
            });
          };
          AssetReviewFormComponent.prototype.initFlightSummary = function() {
            this.flightTableSummary = [
              {
                ok: 0,
                warning: 0,
                nok: 0
              }
            ];
          };
          AssetReviewFormComponent.prototype.initPostponementSummary = function() {
            this.postponementTableSummary = [
              {
                ok: 0,
                warning: 0,
                nok: 0
              }
            ];
          };
          AssetReviewFormComponent.prototype.initUpcomingEventsSummary = function() {
            this.upcomingEventsTableSummary = [
              {
                ok: 0,
                warning: 0,
                nok: 0
              }
            ];
          };
          AssetReviewFormComponent.prototype.initAirworthinessDocumentsSummary = function() {
            this.airworthinessDocumentsTableSummary = [
              {
                ok: 0,
                warning: 0,
                nok: 0
              }
            ];
          };
          AssetReviewFormComponent.prototype.initSummaryCount = function() {
            this.initWorkPackageSummaryCount();
            this.initConfigurationSummaryCount();
            this.initFlightsSummaryCount();
            this.initDefectsSummaryCount();
            this.initPostponementSummaryCount();
            this.initUpcomingEventsSummaryCount();
            this.initAirworthinessDocumentsSummaryCount();
          };
          AssetReviewFormComponent.prototype.initWorkPackageSummaryCount = function() {
            this.acrsWorkPackageOkCount = 0;
            this.acrsWorkPackageNokCount = 0;
            this.acrsWorkPackageWarningCount = 0;
            this.logbookOkCount = 0;
            this.logbookNokCount = 0;
            this.logbookWarningCount = 0;
            this.breakdownOkCount = 0;
            this.breakdownNokCount = 0;
            this.breakdownWarningCount = 0;
          };
          AssetReviewFormComponent.prototype.initConfigurationSummaryCount = function() {
            this.configurationOkCount = 0;
            this.configurationNokCount = 0;
            this.configurationWarningCount = 0;
          };
          AssetReviewFormComponent.prototype.initFlightsSummaryCount = function() {
            this.flightOkCount = 0;
            this.flightNokCount = 0;
            this.flightWarningCount = 0;
          };
          AssetReviewFormComponent.prototype.initDefectsSummaryCount = function() {
            this.defectCounts = {
              ok: 0,
              nok: 0,
              warning: 0
            };
          };
          AssetReviewFormComponent.prototype.initPostponementSummaryCount = function() {
            this.postponementOkCount = 0;
            this.postponementNokCount = 0;
            this.postponementWarningCount = 0;
          };
          AssetReviewFormComponent.prototype.initUpcomingEventsSummaryCount = function() {
            this.upcomingEventsOkCount = 0;
            this.upcomingEventsNokCount = 0;
            this.upcomingEventsWarningCount = 0;
          };
          AssetReviewFormComponent.prototype.initAirworthinessDocumentsSummaryCount = function() {
            this.airworthinessDocumentsOkCount = 0;
            this.airworthinessDocumentsNokCount = 0;
            this.airworthinessDocumentsWarningCount = 0;
          };
          AssetReviewFormComponent.prototype.mapTreeNodeByEquipmentCode = function(list) {
            var map = new Map();
            var queue = list;
            while (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_28__['ListUtils'].isEmpty(queue)) {
              var first = queue.shift();
              queue = __spread(queue, first.children);
              map.set(first.bidoEquipment.equipmentCode, first);
            }
            return map;
          };
          AssetReviewFormComponent.prototype.openTopAsset = function() {
            var assetCode = this.scope.equipmentCodeList[0];
            if (this.isAssetAircraft) {
              this.openAircraft(assetCode);
            } else if (this.isAssetEngine) {
              this.openEngine(assetCode);
            } else {
              this.openEquipment(assetCode);
            }
          };
          AssetReviewFormComponent.prototype.openAircraft = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .FLE_AIRCRAFT_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.openEngine = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .FLE_ENGINE_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.openEquipment = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .FLE_EQUIPMENT_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetReviewFormComponent.prototype.registrRereshButtonObservables = function() {
            var _this = this;
            this.defectListService.refreshButton$
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['takeUntil'])(this.unsubscribe))
              .subscribe(function(f) {
                _this.refreshButton = f;
              });
          };
          AssetReviewFormComponent.prototype.sortUpcomingEventDTORowOnRemainingPotential = function() {
            var _this = this;
            this.upcomingEventsTable.sort(function(data1, data2) {
              return _this.compareRemainingEquivalent(data1, data2);
            });
          };
          AssetReviewFormComponent.prototype.compareRemainingEquivalent = function(data1, data2) {
            var remainingEquivalent1 = data1.remainingEquivalentPotential;
            var remainingEquivalent2 = data2.remainingEquivalentPotential;
            var isNOK1 =
              data1.checkResultIcon ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_RED;
            var isNOK2 =
              data2.checkResultIcon ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_RED;
            return _shared_utils_comparator_utils__WEBPACK_IMPORTED_MODULE_27__[
              'ComparatorUtils'
            ].compareByRemainingEquivalent(
              {
                equipment: data1.bidoEquipmentDTO,
                remainingEquivalent: remainingEquivalent1,
                isNOK: isNOK1
              },
              {
                equipment: data2.bidoEquipmentDTO,
                remainingEquivalent: remainingEquivalent2,
                isNOK: isNOK2
              }
            );
          };
          AssetReviewFormComponent.prototype.customSort = function(event) {
            var _this = this;
            if (event.field && event.field === 'remainingEquivalentPotential' && event.data) {
              event.data.sort(function(data1, data2) {
                var result = _this.compareRemainingEquivalent(data1, data2);
                return event.order ? event.order * result : result;
              });
            }
          };
          AssetReviewFormComponent.prototype.createAssetList = function(airworthinessRows) {
            var _this = this;
            this.assetList = [];
            airworthinessRows.forEach(function(element) {
              if (!!element.asset) {
                var assetText_1 = {
                  label: element.asset,
                  value: element.asset
                };
                var exists = _this.assetList.some(function(asset) {
                  return asset.label === assetText_1.label;
                });
                if (!exists) {
                  _this.assetList.push(assetText_1);
                }
              }
            });
          };
          AssetReviewFormComponent.prototype.createUtlAssetList = function(upcomingEventRows) {
            var _this = this;
            this.utlAssetList = [];
            upcomingEventRows.forEach(function(row) {
              if (!!row.designation) {
                var assetText_2 = {
                  label: row.designation,
                  value: row.designation
                };
                var exists = _this.utlAssetList.some(function(asset) {
                  return asset.label === assetText_2.label;
                });
                if (!exists) {
                  _this.utlAssetList.push(assetText_2);
                }
              }
            });
          };
          AssetReviewFormComponent.prototype.sortAdTableData = function(tableData) {
            var _this = this;
            if (!!tableData) {
              tableData.sort(function(n1, n2) {
                var resultIcon1 = n1.checkResultIcon;
                var resultIcon2 = n2.checkResultIcon;
                return _this.compareFunction(resultIcon1, resultIcon2);
              });
            }
          };
          AssetReviewFormComponent.prototype.sortUpcomingEventsTableData = function(tableData) {
            var _this = this;
            if (!!tableData) {
              tableData.sort(function(n1, n2) {
                var resultIcon1 = !!n1.checkResultIcon
                  ? n1.checkResultIcon
                  : _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_GREEN;
                var resultIcon2 = !!n2.checkResultIcon
                  ? n2.checkResultIcon
                  : _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                      .ICON_GREEN;
                return _this.compareFunction(resultIcon1, resultIcon2);
              });
            }
          };
          AssetReviewFormComponent.prototype.compareFunction = function(resultIcon1, resultIcon2) {
            var data1 =
              resultIcon1 ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_RED
                ? this.component.CONTROL_RED_VALUE
                : resultIcon1 ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_YELLOW
                ? this.component.CONTROL_YELLOW_VALUE
                : this.component.CONTROL_GREEN_VALUE;
            var data2 =
              resultIcon2 ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_RED
                ? this.component.CONTROL_RED_VALUE
                : resultIcon2 ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_YELLOW
                ? this.component.CONTROL_YELLOW_VALUE
                : this.component.CONTROL_GREEN_VALUE;
            if (data1 < data2) {
              return -1;
            } else if (data1 > data2) {
              return 1;
            }
            return 0;
          };
          /**********************************
           * FILTER OPERATIONS
           **********************************/
          AssetReviewFormComponent.prototype.filterAdDocuments = function() {
            var _this = this;
            this.airworthinessDocumentsTable = this.airworthinessDocumentsTableBak.filter(function(ad) {
              var asset = !!_this.selectedAdAsset ? ad.asset === _this.selectedAdAsset : true;
              var control = !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_28__['ListUtils'].isNullOrEmpty(
                _this.selectedADFilterList
              )
                ? ad.checkResultIcon && _this.selectedADFilterList.includes(ad.checkResultIcon)
                : true;
              return asset && control;
            });
            this.initAirworthinessDocumentsSummaryCount();
            this.initAirworthinessDocumentsSummary();
            this.setAirworthinessDocumentsTable();
            if (this.airworthinessDocumentsTable.length === 0) {
              this.loadSummaryforAD();
            }
            this.loadReviewStatusSummaryData();
          };
          AssetReviewFormComponent.prototype.filterUpcomingTasksAndLLP = function() {
            var _this = this;
            this.upcomingEventsTable = this.upcomingEventsTableBak.filter(function(utl) {
              var asset = !!_this.selectedUtlAsset ? utl.designation === _this.selectedUtlAsset : true;
              var checkResultIcon = !!utl.checkResultIcon
                ? utl.checkResultIcon
                : _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                    .ICON_GREEN;
              var type = !!utl.type ? utl.type : -1;
              var control = !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_28__['ListUtils'].isNullOrEmpty(
                _this.selectedUtlFilterList
              )
                ? _this.selectedUtlFilterList.includes(checkResultIcon)
                : true;
              var eventType = !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_28__['ListUtils'].isNullOrEmpty(
                _this.selectedEventTypeFilterList
              )
                ? _this.selectedEventTypeFilterList.includes(type)
                : true;
              return asset && control && eventType;
            });
            this.upcomingEventsTableSummary = [];
            this.initUpcomingEventsSummaryCount();
            this.initUpcomingEventsSummary();
            this.setUpcomingEventsTable();
            if (this.upcomingEventsTable.length === 0) {
              this.loadSummaryForUpcomingEvents();
            }
            this.loadReviewStatusSummaryData();
          };
          AssetReviewFormComponent.prototype.resetADFilter = function() {
            this.setDefaultAdFilterList();
            this.selectedAdAsset = undefined;
          };
          AssetReviewFormComponent.prototype.resetUtlFilter = function() {
            this.setDefaultUtlFilterList();
            this.setDefaultEventTypeFilterList();
            this.selectedUtlAsset = undefined;
          };
          AssetReviewFormComponent.prototype.setFilterControlList = function() {
            var _this = this;
            var OK =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_GREEN;
            var NOK =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_RED;
            var WARNING =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_YELLOW;
            var alertNokKey = this.getTranslateKey('alertNok');
            var alertOkKey = this.getTranslateKey('alertOk');
            var alertWarningKey = this.getTranslateKey('alertWarning');
            this.translateService.get([alertNokKey, alertOkKey, alertWarningKey]).subscribe(function(results) {
              var alertNokLabel = results ? results[alertNokKey] : 'NOK';
              var alertOkLabel = results ? results[alertOkKey] : 'OK';
              var alertWarningLabel = results ? results[alertWarningKey] : 'WARNING';
              _this.adFilterList = [
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
              _this.utlFilterList = [
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
            this.setDefaultAdFilterList();
            this.setDefaultUtlFilterList();
          };
          AssetReviewFormComponent.prototype.setDefaultAdFilterList = function() {
            this.selectedADFilterList = [
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_GREEN,
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_YELLOW,
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_RED
            ];
          };
          AssetReviewFormComponent.prototype.setDefaultUtlFilterList = function() {
            this.selectedUtlFilterList = [
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_GREEN,
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_YELLOW,
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_12__['ControlConfigConstants']
                .ICON_RED
            ];
          };
          AssetReviewFormComponent.prototype.setFiterEventTypeList = function() {
            var _this = this;
            var evenTypeAd = this.getTranslateKey('adType');
            var eventTypeSB = this.getTranslateKey('sbType');
            var eventTypeDefect = this.getTranslateKey('defectType');
            var eventTypeLLP = this.getTranslateKey('llpType');
            var eventTypeOMP = this.getTranslateKey('ompType');
            var eventTypeTASK = this.getTranslateKey('taskType');
            this.translateService
              .get([evenTypeAd, eventTypeSB, eventTypeDefect, eventTypeLLP, eventTypeOMP, eventTypeTASK])
              .subscribe(function(results) {
                var adLabel = results ? results[evenTypeAd] : _this.component.LABEL_AD;
                var sbLabel = results ? results[eventTypeSB] : _this.component.LABEL_SB;
                var defectLabel = results ? results[eventTypeDefect] : _this.component.LABEL_DEFECT;
                var llpLabel = results ? results[eventTypeLLP] : _this.component.LABEL_LLP;
                var ompLabel = results ? results[eventTypeOMP] : _this.component.LABEL_OMP;
                var taskLabel = results ? results[eventTypeTASK] : _this.component.LABEL_TASK;
                _this.eventTypeFilterList = [
                  {
                    label: adLabel,
                    value:
                      _airworthiness_control_form_schedule_maintenance_form_constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_32__[
                        'MaintenancePlanTableTypeConstants'
                      ].AD
                  },
                  {
                    label: sbLabel,
                    value:
                      _airworthiness_control_form_schedule_maintenance_form_constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_32__[
                        'MaintenancePlanTableTypeConstants'
                      ].SB
                  },
                  {
                    label: defectLabel,
                    value:
                      _airworthiness_control_form_schedule_maintenance_form_constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_32__[
                        'MaintenancePlanTableTypeConstants'
                      ].DEFECT
                  },
                  {
                    label: llpLabel,
                    value:
                      _airworthiness_control_form_schedule_maintenance_form_constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_32__[
                        'MaintenancePlanTableTypeConstants'
                      ].LLP
                  },
                  {
                    label: ompLabel,
                    value: 0
                  },
                  {
                    label: taskLabel,
                    value:
                      _airworthiness_control_form_schedule_maintenance_form_constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_32__[
                        'MaintenancePlanTableTypeConstants'
                      ].TASK
                  }
                ];
              });
            this.setDefaultEventTypeFilterList();
          };
          AssetReviewFormComponent.prototype.setDefaultEventTypeFilterList = function() {
            this.selectedEventTypeFilterList = [
              _airworthiness_control_form_schedule_maintenance_form_constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_32__[
                'MaintenancePlanTableTypeConstants'
              ].AD,
              _airworthiness_control_form_schedule_maintenance_form_constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_32__[
                'MaintenancePlanTableTypeConstants'
              ].SB,
              _airworthiness_control_form_schedule_maintenance_form_constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_32__[
                'MaintenancePlanTableTypeConstants'
              ].DEFECT,
              _airworthiness_control_form_schedule_maintenance_form_constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_32__[
                'MaintenancePlanTableTypeConstants'
              ].LLP,
              0,
              _airworthiness_control_form_schedule_maintenance_form_constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_32__[
                'MaintenancePlanTableTypeConstants'
              ].TASK
            ];
          };
          AssetReviewFormComponent.prototype.showForm1 = function() {
            return (
              !!this.asset &&
              (this.asset.equipmentFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_ENGINE_KEY ||
                this.asset.equipmentFunction ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                    .ITEM_FAMILY_CODE_MAJOR_EQUIPMENT_KEY)
            );
          };
          var AssetReviewFormComponent_1;
          AssetReviewFormComponent.GENERAL_ANCHOR_ID = 'generalAnchor';
          AssetReviewFormComponent.SUMMARY_ANCHOR_ID = 'summaryAnchor';
          AssetReviewFormComponent.WORK_PACKAGES_ANCHOR_ID = 'workPackagesAnchor';
          AssetReviewFormComponent.DEFECTS_ANCHOR_ID = 'defectsAnchor';
          AssetReviewFormComponent.FLIGHTS_ANCHOR_ID = 'flightsAnchor';
          AssetReviewFormComponent.POSTPONEMENT_ANCHOR_ID = 'postponementAnchor';
          AssetReviewFormComponent.UPCOMING_EVENTS_ANCHOR_ID = 'upcomingEventsAnchor';
          AssetReviewFormComponent.AW_DOCUMENTS_ANCHOR_ID = 'awDocumentsAnchor';
          AssetReviewFormComponent.SUMMARY_TABLE_CONFIGURATION_INDEX = 2;
          AssetReviewFormComponent.SUMMARY_TABLE_CORE_INDEX = 1;
          AssetReviewFormComponent.SUMMARY_TABLE_FL_INDEX = 8;
          AssetReviewFormComponent.SUMMARY_TABLE_LOGBOOK_INDEX = 7;
          AssetReviewFormComponent.SUMMARY_TABLE_MEL_INDEX = 6;
          AssetReviewFormComponent.SUMMARY_TABLE_POTENTIAL_INDEX = 4;
          AssetReviewFormComponent.SUMMARY_TABLE_REFERENTIAL_INDEX = 5;
          // private static readonly SUMMARY_TABLE_STRUCTURE_INDEX: number = 3;
          AssetReviewFormComponent.SUMMARY_TABLE_ACRS_LABEL = 'summaryAcrs';
          AssetReviewFormComponent.SUMMARY_TABLE_LOGBOOK_LABEL = 'summaryLogbook';
          AssetReviewFormComponent.SUMMARY_TABLE_BREAKDOWN_LABEL = 'summaryBreakdown';
          AssetReviewFormComponent.SUMMARY_TABLE_DEFECTS_LABEL = 'summaryDefects';
          AssetReviewFormComponent.SUMMARY_TABLE_FLIGHTS_LABEL = 'summaryFlights';
          AssetReviewFormComponent.SUMMARY_TABLE_POSTPONEMENT_LABEL = 'summaryPostponement';
          AssetReviewFormComponent.SUMMARY_TABLE_UPCOMING_EVENTS_LABEL = 'summaryUpcomingEvents';
          AssetReviewFormComponent.SUMMARY_TABLE_AIRWORTHINESS_DOCUMENTS_LABEL = 'summaryAirworthinessDocuments';
          AssetReviewFormComponent.SUMMARY_TABLE_CONFIGURATION_LABEL = 'configuration';
          AssetReviewFormComponent.SUMMARY_TABLE_TOTAL_LABEL = 'total';
          AssetReviewFormComponent.SUMMARY_TABLE_ROW_HEADER = 0;
          AssetReviewFormComponent.SUMMARY_TABLE_ROW_ACRS = 1;
          AssetReviewFormComponent.SUMMARY_TABLE_ROW_LOGBOOK = 2;
          AssetReviewFormComponent.SUMMARY_TABLE_ROW_ASSET_BREAKDOWN = 3;
          AssetReviewFormComponent.SUMMARY_TABLE_ROW_CONFIGURATION = 4;
          AssetReviewFormComponent.SUMMARY_TABLE_ROW_DEFECTS = 5;
          AssetReviewFormComponent.SUMMARY_TABLE_ROW_FLIGHTS = 6;
          AssetReviewFormComponent.SUMMARY_TABLE_ROW_POSTPONED = 7;
          AssetReviewFormComponent.SUMMARY_TABLE_ROW_UPCOMING = 8;
          AssetReviewFormComponent.SUMMARY_TABLE_ROW_DOCUMENTS = 9;
          AssetReviewFormComponent.HOME_TAB_INDEX = 0;
          AssetReviewFormComponent.WORK_PACKAGE_TAB_INDEX = 1;
          AssetReviewFormComponent.DEFECT_TAB_INDEX = 2;
          AssetReviewFormComponent.FLIGHT_TAB_INDEX = 3;
          AssetReviewFormComponent.POSTPONED_WORK_ORDER_TAB_INDEX = 4;
          AssetReviewFormComponent.UPCOMING_TASK_LLP_TAB_INDEX = 5;
          AssetReviewFormComponent.AIRWORTHINESS_DOCUMENTS_TAB_INDEX = 6;
          AssetReviewFormComponent.LABEL_AD = 'AD';
          AssetReviewFormComponent.LABEL_SB = 'SB';
          AssetReviewFormComponent.LABEL_DEFECT = 'DEFECT';
          AssetReviewFormComponent.LABEL_LLP = 'LLP';
          AssetReviewFormComponent.LABEL_OMP = 'OMP';
          AssetReviewFormComponent.LABEL_TASK = 'TASK';
          AssetReviewFormComponent.CONTROL_RED_VALUE = 1;
          AssetReviewFormComponent.CONTROL_YELLOW_VALUE = 2;
          AssetReviewFormComponent.CONTROL_GREEN_VALUE = 3;
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                AssetReviewFormComponent_1.GENERAL_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AssetReviewFormComponent.prototype,
            'generalEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                AssetReviewFormComponent_1.SUMMARY_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AssetReviewFormComponent.prototype,
            'summaryEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                AssetReviewFormComponent_1.WORK_PACKAGES_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AssetReviewFormComponent.prototype,
            'workPackagesEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                AssetReviewFormComponent_1.DEFECTS_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AssetReviewFormComponent.prototype,
            'defectsEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                AssetReviewFormComponent_1.FLIGHTS_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AssetReviewFormComponent.prototype,
            'flightsEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                AssetReviewFormComponent_1.POSTPONEMENT_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AssetReviewFormComponent.prototype,
            'postponementEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                AssetReviewFormComponent_1.UPCOMING_EVENTS_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AssetReviewFormComponent.prototype,
            'upcomingEventsEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                AssetReviewFormComponent_1.AW_DOCUMENTS_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AssetReviewFormComponent.prototype,
            'awDocumentsEltRef',
            void 0
          );
          AssetReviewFormComponent = AssetReviewFormComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-asset-review-form',
                template: __webpack_require__(
                  /*! ./asset-review-form.component.html */ './src/app/main/maintenance/asset-review/form/asset-review-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./asset-review-form.component.scss */ './src/app/main/maintenance/asset-review/form/asset-review-form.component.scss'
                  ),
                  __webpack_require__(/*! ./share.scss */ './src/app/main/maintenance/asset-review/form/share.scss')
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_18__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_19__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_20__['MessageService'],
                _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_5__['PageTocService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_22__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_24__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_23__['SessionService'],
                _asset_review_form_service__WEBPACK_IMPORTED_MODULE_33__['AssetReviewFormService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_21__['PropertiesService'],
                _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__['TranslateService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_17__['DateService'],
                _shared_components_defect_list_defect_list_service__WEBPACK_IMPORTED_MODULE_6__['DefectListService']
              ])
            ],
            AssetReviewFormComponent
          );
          return AssetReviewFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_25__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/asset-view-scope/asset-view-scope.component.html':
      /*!*****************************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/asset-view-scope/asset-view-scope.component.html ***!
  \*****************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="grid-cell-header">\r\n  <div class="grid-cell-title-container loading-indicator">\r\n    <div class="grid-cell-title">\r\n      <span *ngIf="isAssetAircraft">{{ getComponentName() + ".aircraft" | translate }}</span>\r\n      <span *ngIf="isAssetEngine">{{ getComponentName() + ".engine" | translate }}</span>\r\n      <span *ngIf="isAssetEquipment">{{ getComponentName() + ".equipment" | translate }}</span>\r\n      <div\r\n        *ngIf="globalAlertListLoading || assetAirworthiness._alertLoading || assetAirworthiness._potentialLoading"\r\n        class="lds-hourglass"\r\n      ></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="grid-cell-content">\r\n  <div class="column">\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".designation" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="asset.equipmentDesignation" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".alert" | translate }} </label>\r\n\r\n        <div class="form-control" pTooltip="{{ assetAirworthiness._alertTooltip }}" tooltipPosition="top">\r\n          <div class="form-control-generic">\r\n            <span\r\n              *ngIf="\r\n                assetAirworthiness.alert !== undefined &&\r\n                assetAirworthiness.alert !== null &&\r\n                assetAirworthiness.alert === controlConfigConstants.ICON_GREEN\r\n              "\r\n              class="alert alert--ok"\r\n            >\r\n              {{ getComponentName() + ".alertOk" | translate }}\r\n            </span>\r\n\r\n            <span\r\n              *ngIf="\r\n                assetAirworthiness.alert === null ||\r\n                (!!assetAirworthiness.alert && assetAirworthiness.alert === controlConfigConstants.ICON_RED)\r\n              "\r\n              class="alert alert--nok"\r\n            >\r\n              {{ getComponentName() + ".alertNok" | translate }}\r\n            </span>\r\n\r\n            <span\r\n              *ngIf="\r\n                assetAirworthiness.alert !== undefined &&\r\n                assetAirworthiness.alert !== null &&\r\n                assetAirworthiness.alert === controlConfigConstants.ICON_YELLOW\r\n              "\r\n              class="alert alert--warning"\r\n            >\r\n              {{ getComponentName() + ".alertWarning" | translate }}\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf="isAssetAircraft" class="row">\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".registration" | translate }} </label>\r\n\r\n        <div class="form-control" pTooltip="{{ assetAirworthiness._obj.counterAlertTooltip }}" tooltipPosition="bottom">\r\n          <input type="text" class="aw-input" [(ngModel)]="asset.registration" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".msn" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <div class="form-control-generic">\r\n            <a (click)="openTopAsset()">{{ asset.sn }}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf="isAssetEngine || isAssetEquipment" class="row">\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".pn" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="asset.pnCode" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".sn" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <div class="form-control-generic">\r\n            <a (click)="openTopAsset()">{{ asset.sn }}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".familyVariant" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="asset.familyVariantCode" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label">\r\n          <span *ngIf="isAssetAircraft"> {{ getComponentName() + ".statusAircraft" | translate }} </span>\r\n          <span *ngIf="isAssetEngine"> {{ getComponentName() + ".statusEngine" | translate }} </span>\r\n          <span *ngIf="isAssetEquipment"> {{ getComponentName() + ".statusEquipment" | translate }} </span>\r\n        </label>\r\n\r\n        <div class="form-control"><input type="text" class="aw-input" [(ngModel)]="status" [disabled]="true" /></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ airworthinessTableColTsnLabel }} </label>\r\n\r\n        <div class="form-control" pTooltip="{{ assetAirworthiness._obj.counterTsnTooltip }}" tooltipPosition="top">\r\n          <input type="text" class="aw-input" [(ngModel)]="assetAirworthiness.tsn" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ airworthinessTableColCsnLabel }} </label>\r\n\r\n        <div class="form-control" pTooltip="{{ assetAirworthiness._obj.counterCsnTooltip }}" tooltipPosition="top">\r\n          <input type="text" class="aw-input" [(ngModel)]="assetAirworthiness.csn" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".potential" | translate }} </label>\r\n\r\n        <div\r\n          class="form-control"\r\n          pTooltip="{{ assetAirworthiness._obj.remainingEquivalentTooltip }}"\r\n          tooltipPosition="top"\r\n        >\r\n          <input type="text" class="aw-input" [(ngModel)]="assetAirworthiness.potential" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/asset-view-scope/asset-view-scope.component.ts':
      /*!***************************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/asset-view-scope/asset-view-scope.component.ts ***!
  \***************************************************************************************************/
      /*! exports provided: AssetViewScopeComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AssetViewScopeComponent',
          function() {
            return AssetViewScopeComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _airworthiness_control_form_airworthiness_control_form_types_airworthiness_row_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../airworthiness-control/form/airworthiness-control-form/types/airworthiness-row.interface */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/types/airworthiness-row.interface.ts'
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

        var AssetViewScopeComponent = /** @class */ (function(_super) {
          __extends(AssetViewScopeComponent, _super);
          function AssetViewScopeComponent(propertiesService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write
              ) || this;
            _this.propertiesService = propertiesService;
            _this.controlConfigConstants =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_1__['ControlConfigConstants'];
            _this.init();
            return _this;
          }
          Object.defineProperty(AssetViewScopeComponent.prototype, 'asset', {
            get: function() {
              return this._asset;
            },
            set: function(value) {
              if (!!value) {
                this._asset = value;
                this.setAssetStatus();
              }
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(AssetViewScopeComponent.prototype, 'assetAirworthiness', {
            get: function() {
              return this._assetAirworthiness;
            },
            set: function(value) {
              if (!!value) {
                this._assetAirworthiness = value;
              }
            },
            enumerable: true,
            configurable: true
          });
          AssetViewScopeComponent.prototype.getComponentName = function() {
            return 'AssetViewScopeComponent';
          };
          AssetViewScopeComponent.prototype.openTopAsset = function() {
            this.onNavigate.emit();
          };
          AssetViewScopeComponent.prototype.init = function() {
            this._asset = {};
            this._assetAirworthiness = new _airworthiness_control_form_airworthiness_control_form_types_airworthiness_row_interface__WEBPACK_IMPORTED_MODULE_7__[
              'AirworthinessRow'
            ]();
            this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          };
          AssetViewScopeComponent.prototype.setAssetStatus = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .OPERATIONAL_STATUS_MAP
              )
              .subscribe(function(results) {
                var status = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_6__['ListUtils']
                  .orEmpty(results)
                  .find(function(elt) {
                    return elt.value === _this._asset.operationalStatus;
                  });
                _this.status = status ? status.label : '';
              });
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            AssetViewScopeComponent.prototype,
            'airworthinessTableColCsnLabel',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            AssetViewScopeComponent.prototype,
            'airworthinessTableColTsnLabel',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            AssetViewScopeComponent.prototype,
            'globalAlertListLoading',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            AssetViewScopeComponent.prototype,
            'isAssetAircraft',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            AssetViewScopeComponent.prototype,
            'isAssetEngine',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            AssetViewScopeComponent.prototype,
            'isAssetEquipment',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            AssetViewScopeComponent.prototype,
            'asset',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata(
                'design:type',
                _airworthiness_control_form_airworthiness_control_form_types_airworthiness_row_interface__WEBPACK_IMPORTED_MODULE_7__[
                  'AirworthinessRow'
                ]
              ),
              __metadata('design:paramtypes', [
                _airworthiness_control_form_airworthiness_control_form_types_airworthiness_row_interface__WEBPACK_IMPORTED_MODULE_7__[
                  'AirworthinessRow'
                ]
              ])
            ],
            AssetViewScopeComponent.prototype,
            'assetAirworthiness',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            AssetViewScopeComponent.prototype,
            'onNavigate',
            void 0
          );
          AssetViewScopeComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-airworthiness-table-asset-view-scope',
                template: __webpack_require__(
                  /*! ./asset-view-scope.component.html */ './src/app/main/maintenance/asset-review/form/asset-view-scope/asset-view-scope.component.html'
                ),
                styles: [
                  __webpack_require__(/*! ../share.scss */ './src/app/main/maintenance/asset-review/form/share.scss')
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__['PropertiesService']
              ])
            ],
            AssetViewScopeComponent
          );
          return AssetViewScopeComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_5__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/flight-operations-validation/flight-operations-validation.component.html':
      /*!*****************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/flight-operations-validation/flight-operations-validation.component.html ***!
  \*****************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="!isCreateOpenMode && componentData && componentData.objectId" class="page-subtitle">\r\n          - {{ flightOperationValidationOutput.chronoNumber }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button id="returnToFlight" type="button" mat-raised-button (click)="openFlightForm()">\r\n      {{ componentData.componentId + ".returnToFlight" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--6">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <div class="grid-cell-title">\r\n                  <span>{{ componentData.componentId + ".flight" | translate }}</span>\r\n                  <div *ngIf="flightLoading" class="lds-hourglass"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="grid-row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".cNumber" | translate }}</label>\r\n\r\n                    <div class="form-control" style="margin-top: 12px;">\r\n                      <a (click)="openFlightForm()" style="cursor: pointer">\r\n                        {{ flightOperationValidationOutput.chronoNumber }}</a\r\n                      >\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".type" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="flightOperationValidationOutput.type"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".status" | translate }}</label>\r\n                    <div class="form-control" *ngIf="flightOperationValidationOutput.status === \'Validated\'">\r\n                      <input\r\n                        type="text"\r\n                        style="background-color: #4caf50;text-align: center;\r\n                          width: 6rem;"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="flightOperationValidationOutput.status"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="form-control" *ngIf="flightOperationValidationOutput.status !== \'Validated\'">\r\n                      <input\r\n                        type="text"\r\n                        style="background-color: #FFBF00;text-align: center;\r\n                            width: 6rem;"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="flightOperationValidationOutput.status"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".customer" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="flightOperationValidationOutput.flightCustomer"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".date" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [showTime]="true"\r\n                        [(ngModel)]="flightOperationValidationOutput.date"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".duration" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="flightOperationValidationOutput.duration"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="grid-cell--6">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <div class="grid-cell-title">\r\n                  <span>{{ componentData.componentId + ".aircraft" | translate }}</span>\r\n                  <div *ngIf="aircraftLoading" class="lds-hourglass"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="grid-row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".msn" | translate }}</label>\r\n\r\n                    <div class="form-control" style="margin-top: 12px;">\r\n                      <a style="cursor: pointer" (click)="openAsset()"> {{ flightOperationValidationOutput.msn }}</a>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".familyVariant" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="flightOperationValidationOutput.familyVariant"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".registration" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="flightOperationValidationOutput.assetRegistration"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".eisDate" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="flightOperationValidationOutput.eisDate"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ fligthOperationsTsnLabel }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="flightOperationValidationOutput.tsn"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ fligthOperationsCsnLabel }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="flightOperationValidationOutput.csn"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ componentData.componentId + ".tableTilte" | translate }}\r\n                  ({{ resultsTable ? resultsTable.length : 0 }})\r\n                  <div class="lds-hourglass" *ngIf="isLoadingReport"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #ptableCusCustomer\r\n                      class="aw-table2"\r\n                      [columns]="resultsTableCols"\r\n                      [value]="resultsTable"\r\n                      [scrollable]="true"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isLoadingTable"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isLoadingTable" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableCusCustomerGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptableCusCustomer.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions">\r\n                            <button *ngIf="showReport" type="button" mat-raised-button (click)="generateRport()">\r\n                              {{ componentData.componentId + ".report" | translate }}\r\n                            </button>\r\n                            <button\r\n                              *ngIf="showSimulateAndRecord()"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="simulate()"\r\n                            >\r\n                              {{ componentData.componentId + ".simulate" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="showSimulateAndRecord()"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="recordMeasures()"\r\n                            >\r\n                              {{ componentData.componentId + ".recordMeasures" | translate }}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            {{ componentData.componentId + "." + col.field | translate }}\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'propagate\'" class="page-header-links">\r\n                              <td [pEditableColumn]="rowData[col.field]" [pEditableColumnField]="rowData[col.field]">\r\n                                <p-cellEditor>\r\n                                  <ng-template pTemplate="input">\r\n                                    <p-checkbox\r\n                                      class="aw-checkbox"\r\n                                      binary="true"\r\n                                      [(ngModel)]="rowData.propagate"\r\n                                    ></p-checkbox>\r\n                                  </ng-template>\r\n                                  <ng-template pTemplate="output">\r\n                                    <p-checkbox\r\n                                      class="aw-checkbox"\r\n                                      binary="true"\r\n                                      [(ngModel)]="rowData.propagate"\r\n                                    ></p-checkbox>\r\n                                  </ng-template>\r\n                                </p-cellEditor>\r\n                              </td>\r\n                            </span>\r\n\r\n                            <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <aw-dialog-simulate-record\r\n    *ngIf="showPopup"\r\n    [(display)]="showPopup"\r\n    [isRecord]="isRecord"\r\n    [isSimulate]="isSimulate"\r\n    [endDate]="flightOperationValidationOutput.endDate"\r\n    (onValidated)="onValidatingPopup($event)"\r\n  >\r\n  </aw-dialog-simulate-record>\r\n\r\n  <aw-dialog-generate-report *ngIf="showReportPopup" [(display)]="showReportPopup" [reportMessage]="reportData.report">\r\n  </aw-dialog-generate-report>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/flight-operations-validation/flight-operations-validation.component.scss':
      /*!*****************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/flight-operations-validation/flight-operations-validation.component.scss ***!
  \*****************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvYXNzZXQtcmV2aWV3L2Zvcm0vZmxpZ2h0LW9wZXJhdGlvbnMtdmFsaWRhdGlvbi9mbGlnaHQtb3BlcmF0aW9ucy12YWxpZGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */';

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/flight-operations-validation/flight-operations-validation.component.ts':
      /*!***************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/flight-operations-validation/flight-operations-validation.component.ts ***!
  \***************************************************************************************************************************/
      /*! exports provided: FlightOperationsValidationComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FlightOperationsValidationComponent',
          function() {
            return FlightOperationsValidationComponent;
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
        /* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/components/component-sidebar/page-toc.service */ './src/app/shared/components/component-sidebar/page-toc.service.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _flight_operations_validation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./flight-operations-validation.service */ './src/app/main/maintenance/asset-review/form/flight-operations-validation/flight-operations-validation.service.ts'
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

        var FlightOperationsValidationComponent = /** @class */ (function(_super) {
          __extends(FlightOperationsValidationComponent, _super);
          function FlightOperationsValidationComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            pageTocService,
            sessionService,
            flightOperationsValidationService,
            translateService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                pageTocService
              ) || this;
            _this.sessionService = sessionService;
            _this.flightOperationsValidationService = flightOperationsValidationService;
            _this.translateService = translateService;
            _this.resultsTable = [];
            _this.resultsTableCols = [
              { field: 'measureText', alignment: 'left' },
              { field: 'measureUnit', alignment: 'left' },
              { field: 'measureValue', alignment: 'left' },
              { field: 'measureValueCoeff', alignment: 'left' },
              { field: 'measureComments', alignment: 'left' },
              { field: 'propagate', alignment: 'left' }
            ];
            _this.flightOperationValidationOutput = {};
            _this.bidoMissionEquipmentDTO = {};
            _this.aircraftLoading = false;
            _this.flightLoading = false;
            _this.isLoadingTable = false;
            _this.isLoadingReport = false;
            _this.showPopup = false;
            _this.isSimulate = false;
            _this.isRecord = false;
            _this.showReport = false;
            _this.showReportPopup = false;
            _this.recordAndSimulateInput = {};
            _this.reportData = {};
            _this.selectedAnchor = undefined;
            _this.registerPageTocEntrySelectedObservable();
            return _this;
          }
          FlightOperationsValidationComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.updateOpenMode(this.componentData.openMode);
            this.toc = [
              {
                id: 'flightAnchor',
                anchor: this.flightAnchor,
                label: this.translateService.instant(this.getTranslateKey('flight'))
              },
              {
                id: 'aircraftAnchor',
                anchor: this.aircraftAnchor,
                label: this.translateService.instant(this.getTranslateKey('aircraft'))
              },
              {
                id: 'tableAnchor',
                anchor: this.tableAnchor,
                label: this.translateService.instant(this.getTranslateKey('tableTilte'))
              }
            ];
            this.aircraftLoading = false;
            this.flightLoading = false;
            this.isLoadingTable = false;
            if (!this.componentData.objectId) {
              this.messageService.showErrorMessage('global.errorOnNavigate');
            } else {
              this.bidoMissionEquipmentDTO = this.serializationService.deserialize(this.componentData.objectId);
              this.loadFlightValidation();
              this.loadDynamicLabelList();
            }
          };
          FlightOperationsValidationComponent.prototype.loadFlightValidation = function() {
            var _this = this;
            var bidoMissionEquipment = {
              missionCode: this.bidoMissionEquipmentDTO.missionCode,
              occurrence: this.bidoMissionEquipmentDTO.occurrence,
              equipmentCode: this.bidoMissionEquipmentDTO.equipmentCode
            };
            this.flightOperationsValidationService.flightValidation(bidoMissionEquipment).subscribe(function(results) {
              _this.flightOperationValidationOutput = results;
              _this.flightOperationValidationOutput.date = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_14__[
                'ObjectUtils'
              ].isDefined(_this.flightOperationValidationOutput.date)
                ? _this.flightOperationValidationOutput.date
                : undefined;
              if (!!_this.flightOperationValidationOutput && !!_this.flightOperationValidationOutput.chronoNumber) {
                _this.aircraftLoading = false;
                _this.flightLoading = false;
                _this.isLoadingTable = false;
                _this.displayComponentContext(
                  _this.flightOperationValidationOutput.chronoNumber,
                  _this.isCreateOpenMode
                );
                _this.resultsTable = _this.flightOperationValidationOutput.measureToRecordTableOutput;
              }
            });
          };
          FlightOperationsValidationComponent.prototype.isSelectedAnchor = function(anchorId) {
            return anchorId === this.selectedAnchor;
          };
          FlightOperationsValidationComponent.prototype.setSelectedAnchor = function(anchorId) {
            this.pageTocService.setAnchorSelected(anchorId);
            this.selectedAnchor = anchorId;
          };
          FlightOperationsValidationComponent.prototype.registerPageTocEntrySelectedObservable = function() {
            var _this = this;
            this.pageTocService.pageTocEntrySelected$
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['takeUntil'])(this.unsubscribe))
              .subscribe(function(pageTocEntrySelected) {
                _this.selectedAnchor = pageTocEntrySelected;
              });
          };
          FlightOperationsValidationComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
              .MAI_FLIGHT_OPERATIONS;
          };
          FlightOperationsValidationComponent.prototype.simulate = function() {
            this.showPopup = true;
            this.isRecord = false;
            this.isSimulate = true;
          };
          FlightOperationsValidationComponent.prototype.recordMeasures = function() {
            this.showPopup = true;
            this.isRecord = true;
            this.isSimulate = false;
          };
          FlightOperationsValidationComponent.prototype.generateRport = function() {
            this.showReportPopup = true;
          };
          FlightOperationsValidationComponent.prototype.onValidatingPopup = function(data) {
            var _this = this;
            this.reportData = {};
            this.showReport = false;
            this.recordAndSimulateInput = {
              measureToRecordList: this.resultsTable,
              bidoMissionEquipmentDTO: this.bidoMissionEquipmentDTO,
              allowMeasureInsertionBeforeExistingValue: data.allowMeasureInsertionBeforeExistingValue,
              allowMeasureReadingEqualsOrSmallerThanPrevious: data.allowMeasureReadingEqualsOrSmallerThanPrevious,
              allowMeasureReadingGreaterThanPreviousMonth: data.allowMeasureReadingGreaterThanPreviousMonth,
              forceReading: data.forceReading,
              readingDate: data.readingDate
            };
            this.isLoadingReport = true;
            if (this.isSimulate) {
              this.flightOperationsValidationService
                .simulateRecord(this.recordAndSimulateInput)
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                    _this.isLoadingReport = false;
                  })
                )
                .subscribe(function(results) {
                  if (!!results) {
                    _this.reportData = results;
                    _this.showReport = true;
                  }
                });
            }
            if (this.isRecord) {
              this.flightOperationsValidationService
                .recordMeasure(this.recordAndSimulateInput)
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                    _this.isLoadingReport = false;
                  })
                )
                .subscribe(function(results) {
                  if (!!results) {
                    _this.reportData = results;
                    _this.showReport = true;
                    _this.loadFlightValidation();
                  } else {
                    _this.messageService.showErrorMessage(_this.componentData.componentId + '.errorOnRetrievingDatas');
                  }
                });
            }
          };
          FlightOperationsValidationComponent.prototype.showSimulateAndRecord = function() {
            return this.flightOperationValidationOutput.status !== 'Validated';
          };
          FlightOperationsValidationComponent.prototype.openAsset = function() {
            this.openAircraft(
              this.bidoMissionEquipmentDTO.equipmentCode,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Read
            );
          };
          FlightOperationsValidationComponent.prototype.openAircraft = function(objectId, openMode) {
            var labelKey = 'transaction.AircraftFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'AircraftFormComponent',
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
          FlightOperationsValidationComponent.prototype.openFlightForm = function() {
            this.openFlight(
              this.bidoMissionEquipmentDTO,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Read
            );
          };
          FlightOperationsValidationComponent.prototype.openFlight = function(row, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
                  .FLI_FLIGHT_FORM,
              openMode: openMode
            };
            if (!!row) {
              var missionEquipmentId = {
                equipmentCode: row.equipmentCode,
                missionCode: row.missionCode,
                occurrence: Number(this.flightOperationValidationOutput.occurence),
                chronoNumber: this.flightOperationValidationOutput.chronoNumber
              };
              data.objectId = this.serializationService.serialize(missionEquipmentId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          FlightOperationsValidationComponent.prototype.loadDynamicLabelList = function() {
            var _this = this;
            var observables = [
              this.flightOperationsValidationService.getTsnLabelForFlightOperations(),
              this.flightOperationsValidationService.getCsnLabelForFlightOperations()
            ];
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(observables).subscribe(function(_a) {
              var _b = __read(_a, 2),
                timeBireMeasureReferenceLabel = _b[0],
                cycleBireMeasureReferenceLabel = _b[1];
              _this.fligthOperationsTsnLabel = timeBireMeasureReferenceLabel;
              _this.fligthOperationsCsnLabel = cycleBireMeasureReferenceLabel;
            });
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('flightAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            FlightOperationsValidationComponent.prototype,
            'flightAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('aircraftAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            FlightOperationsValidationComponent.prototype,
            'aircraftAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('tableAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            FlightOperationsValidationComponent.prototype,
            'tableAnchor',
            void 0
          );
          FlightOperationsValidationComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-flight-operations-validation',
                template: __webpack_require__(
                  /*! ./flight-operations-validation.component.html */ './src/app/main/maintenance/asset-review/form/flight-operations-validation/flight-operations-validation.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./flight-operations-validation.component.scss */ './src/app/main/maintenance/asset-review/form/flight-operations-validation/flight-operations-validation.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__['TabService'],
                _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__['PageTocService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__['SessionService'],
                _flight_operations_validation_service__WEBPACK_IMPORTED_MODULE_15__[
                  'FlightOperationsValidationService'
                ],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            FlightOperationsValidationComponent
          );
          return FlightOperationsValidationComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_13__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/flight-operations-validation/flight-operations-validation.service.ts':
      /*!*************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/flight-operations-validation/flight-operations-validation.service.ts ***!
  \*************************************************************************************************************************/
      /*! exports provided: FlightOperationsValidationService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FlightOperationsValidationService',
          function() {
            return FlightOperationsValidationService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
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

        var FlightOperationsValidationService = /** @class */ (function(_super) {
          __extends(FlightOperationsValidationService, _super);
          function FlightOperationsValidationService(http, appConfigService, fleetManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            return _this;
          }
          FlightOperationsValidationService.prototype.flightValidation = function(criteria) {
            return _super.prototype.post.call(this, this.fleetManagementApi.getFlightValidation, criteria);
          };
          FlightOperationsValidationService.prototype.simulateRecord = function(criteria) {
            return _super.prototype.post.call(this, this.fleetManagementApi.simulateRecord, criteria);
          };
          FlightOperationsValidationService.prototype.recordMeasure = function(criteria) {
            return _super.prototype.post.call(this, this.fleetManagementApi.recordMeasure, criteria);
          };
          FlightOperationsValidationService.prototype.getTsnLabelForFlightOperations = function() {
            return _super.prototype.get.call(this, this.fleetManagementApi.getTsnLableForFlightOperations);
          };
          FlightOperationsValidationService.prototype.getCsnLabelForFlightOperations = function() {
            return _super.prototype.get.call(this, this.fleetManagementApi.getCsnLableForFlightOperations);
          };
          FlightOperationsValidationService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi']
              ])
            ],
            FlightOperationsValidationService
          );
          return FlightOperationsValidationService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-generate-report/dialog-generate-report.component.html':
      /*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-generate-report/dialog-generate-report.component.html ***!
  \*****************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group" style="padding-top: 5px">\r\n      <textarea class="aw-textarea" [cols]="80" [rows]="15" pInputTextarea [(ngModel)]="reportMessage"></textarea>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-generate-report/dialog-generate-report.component.scss':
      /*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-generate-report/dialog-generate-report.component.scss ***!
  \*****************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvYXNzZXQtcmV2aWV3L2Zvcm0vZmxpZ2h0LW9wZXJhdGlvbnMtdmFsaWRhdGlvbi9wb3B1cHMvZGlhbG9nLWdlbmVyYXRlLXJlcG9ydC9kaWFsb2ctZ2VuZXJhdGUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */';

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-generate-report/dialog-generate-report.component.ts':
      /*!***************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-generate-report/dialog-generate-report.component.ts ***!
  \***************************************************************************************************************************************************/
      /*! exports provided: DialogGenerateReportComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogGenerateReportComponent',
          function() {
            return DialogGenerateReportComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
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

        var DialogGenerateReportComponent = /** @class */ (function(_super) {
          __extends(DialogGenerateReportComponent, _super);
          function DialogGenerateReportComponent() {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'DialogGenerateReportComponent'
              ) || this;
            _this.reportMessage = '';
            return _this;
          }
          DialogGenerateReportComponent.prototype.ngOnInit = function() {
            return;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogGenerateReportComponent.prototype,
            'reportMessage',
            void 0
          );
          DialogGenerateReportComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-generate-report',
                template: __webpack_require__(
                  /*! ./dialog-generate-report.component.html */ './src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-generate-report/dialog-generate-report.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-generate-report.component.scss */ './src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-generate-report/dialog-generate-report.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            DialogGenerateReportComponent
          );
          return DialogGenerateReportComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-simulate-record/dialog-simulate-record.component.html':
      /*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-simulate-record/dialog-simulate-record.component.html ***!
  \*****************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div *ngIf="isRecord" class="modal-title">{{ getComponentName() + ".titleRecord" | translate }}</div>\r\n    <div *ngIf="isSimulate" class="modal-title">{{ getComponentName() + ".titleSimulate" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section results-section">\r\n        <div class="grid-row">\r\n          <div class="form-group">\r\n            <label class="form-label"> {{ getComponentName() + ".timeZone" | translate }} </label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                class="aw-dropdown fixed-width"\r\n                [options]="timeZoneList"\r\n                [(ngModel)]="currentTimeZone"\r\n                [showClear]="true"\r\n                placeholder="&nbsp;"\r\n                (onChange)="updateReadingDates()"\r\n                [disabled]="isReadOpenMode"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="grid-row" style="width: 25%">\r\n          <div class="form-group required">\r\n            <label class="form-label"> {{ getComponentName() + ".date" | translate }} </label>\r\n\r\n            <div class="form-control">\r\n              <p-calendar\r\n                showButtonBar="true"\r\n                [monthNavigator]="true"\r\n                [yearNavigator]="true"\r\n                [yearRange]="sessionService.calendarYearRange"\r\n                showTime="true"\r\n                class="aw-calendar"\r\n                [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                [locale]="sessionService.calendarFormat"\r\n                [disabled]="isReadOpenMode"\r\n                [(ngModel)]="this.popupForm.readingDate"\r\n                appendTo="body"\r\n              ></p-calendar>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="grid-row">\r\n          <div class="form-group" style="width: 430px;">\r\n            <label class="form-label">{{ getComponentName() + ".measureInsertion" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-checkbox\r\n                class="aw-checkbox"\r\n                binary="true"\r\n                [(ngModel)]="this.popupForm.allowMeasureInsertionBeforeExistingValue"\r\n                [disabled]="isReadOpenMode"\r\n              ></p-checkbox>\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <label class="form-label">{{ getComponentName() + ".measureReading" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-checkbox\r\n                class="aw-checkbox"\r\n                binary="true"\r\n                [(ngModel)]="this.popupForm.allowMeasureReadingGreaterThanPreviousMonth"\r\n                [disabled]="isReadOpenMode"\r\n              ></p-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-row">\r\n          <div class="form-group">\r\n            <label class="form-label">{{ getComponentName() + ".measureEquals" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-checkbox\r\n                class="aw-checkbox"\r\n                binary="true"\r\n                [(ngModel)]="this.popupForm.allowMeasureReadingEqualsOrSmallerThanPrevious"\r\n                [disabled]="isReadOpenMode"\r\n              ></p-checkbox>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label class="form-label">{{ getComponentName() + ".forceRecording" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-checkbox\r\n                class="aw-checkbox"\r\n                binary="true"\r\n                [(ngModel)]="this.popupForm.forceReading"\r\n                [disabled]="isReadOpenMode"\r\n              ></p-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n    <button [disabled]="showValidate()" color="primary" type="button" mat-raised-button (click)="onValidate()">\r\n      <i class="fa fa-fw fa-check" aria-hidden="true"></i> <span>{{ "global.validate" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-simulate-record/dialog-simulate-record.component.scss':
      /*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-simulate-record/dialog-simulate-record.component.scss ***!
  \*****************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvYXNzZXQtcmV2aWV3L2Zvcm0vZmxpZ2h0LW9wZXJhdGlvbnMtdmFsaWRhdGlvbi9wb3B1cHMvZGlhbG9nLXNpbXVsYXRlLXJlY29yZC9kaWFsb2ctc2ltdWxhdGUtcmVjb3JkLmNvbXBvbmVudC5zY3NzIn0= */';

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-simulate-record/dialog-simulate-record.component.ts':
      /*!***************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-simulate-record/dialog-simulate-record.component.ts ***!
  \***************************************************************************************************************************************************/
      /*! exports provided: DialogSimulateRecordComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSimulateRecordComponent',
          function() {
            return DialogSimulateRecordComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! moment */ './node_modules/moment/moment.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../..//shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
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

        var DialogSimulateRecordComponent = /** @class */ (function(_super) {
          __extends(DialogSimulateRecordComponent, _super);
          function DialogSimulateRecordComponent(propertiesService, messageService, sessionService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read,
                'DialogSimulateRecordComponent'
              ) || this;
            _this.propertiesService = propertiesService;
            _this.messageService = messageService;
            _this.sessionService = sessionService;
            _this.currentTimeZone = undefined;
            _this.defaultTimezone = undefined;
            _this.previousTimezone = undefined;
            _this.timeZoneList = [];
            _this.popupForm = {
              allowMeasureInsertionBeforeExistingValue: false,
              allowMeasureReadingGreaterThanPreviousMonth: false,
              forceReading: false,
              allowMeasureReadingEqualsOrSmallerThanPrevious: false
            };
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          DialogSimulateRecordComponent_1 = DialogSimulateRecordComponent;
          DialogSimulateRecordComponent.prototype.loadTimeZoneList = function() {
            var _this = this;
            this.propertiesService.getTimeZones().subscribe(function(results) {
              _this.timeZoneList = results
                .map(function(result) {
                  var matches = DialogSimulateRecordComponent_1.TIMEZONE_VALUE_REGEX.exec(result.value);
                  return {
                    label: result.label,
                    value: !!matches && matches.length > 0 ? Number(matches[1]).toString() : undefined
                  };
                })
                .filter(function(timezone) {
                  return !!timezone.value;
                });
              _this.propertiesService.getDefaultTimeZoneCode().subscribe(function(result) {
                var matches = DialogSimulateRecordComponent_1.TIMEZONE_VALUE_REGEX.exec(result);
                if (!!matches && matches.length > 0) {
                  _this.defaultTimezone = Number(matches[1]).toString();
                  _this.resetTimezone();
                }
              });
            });
          };
          DialogSimulateRecordComponent.prototype.resetTimezone = function() {
            this.currentTimeZone = this.defaultTimezone;
            this.previousTimezone = this.currentTimeZone;
          };
          DialogSimulateRecordComponent.prototype.loadDate = function() {
            this.popupForm.readingDate = this.endDate;
          };
          DialogSimulateRecordComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write
            );
            this.loadTimeZoneList();
            this.loadDate();
          };
          DialogSimulateRecordComponent.prototype.updateReadingDates = function() {
            var previousTimezoneValue = Number(this.previousTimezone);
            var currentTimeZoneValue = Number(this.currentTimeZone);
            if (currentTimeZoneValue !== previousTimezoneValue) {
              var gap =
                Math.abs(previousTimezoneValue) >= 0 && Math.abs(currentTimeZoneValue)
                  ? Math.abs(Math.abs(previousTimezoneValue) - Math.abs(currentTimeZoneValue))
                  : Math.abs(previousTimezoneValue) + Math.abs(currentTimeZoneValue);
              var isGapPositive = currentTimeZoneValue >= previousTimezoneValue;
              if (!!this.popupForm) {
                if (!!this.popupForm.readingDate) {
                  var newDate = this.updateDate(gap, isGapPositive, String(this.popupForm.readingDate));
                  this.popupForm.readingDate = new Date(newDate);
                }
              }
              this.previousTimezone = this.currentTimeZone;
            }
          };
          DialogSimulateRecordComponent.prototype.updateDate = function(gap, isGapPositive, date) {
            if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_7__['StringUtils'].isNullOrEmpty(date)) {
              return '';
            } else {
              var dateValue = new Date(date);
              var updatedDate = isGapPositive
                ? moment__WEBPACK_IMPORTED_MODULE_1__(dateValue).add(gap, 'hours')
                : moment__WEBPACK_IMPORTED_MODULE_1__(dateValue).subtract(gap, 'hours');
              return updatedDate.format(this.sessionService.dateTimeFormatMomentJS);
            }
          };
          DialogSimulateRecordComponent.prototype.showValidate = function() {
            var response = !this.popupForm.readingDate ? true : false;
            return response;
          };
          DialogSimulateRecordComponent.prototype.onValidate = function() {
            this.onValidated.emit(this.popupForm);
            this.closeDialog();
          };
          var DialogSimulateRecordComponent_1;
          DialogSimulateRecordComponent.TIMEZONE_VALUE_REGEX = /([+-]\d\d):\d\d/;
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogSimulateRecordComponent.prototype,
            'isRecord',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogSimulateRecordComponent.prototype,
            'isSimulate',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Date)],
            DialogSimulateRecordComponent.prototype,
            'endDate',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogSimulateRecordComponent.prototype,
            'onValidated',
            void 0
          );
          DialogSimulateRecordComponent = DialogSimulateRecordComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-simulate-record',
                template: __webpack_require__(
                  /*! ./dialog-simulate-record.component.html */ './src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-simulate-record/dialog-simulate-record.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-simulate-record.component.scss */ './src/app/main/maintenance/asset-review/form/flight-operations-validation/popups/dialog-simulate-record/dialog-simulate-record.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__['PropertiesService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__['SessionService']
              ])
            ],
            DialogSimulateRecordComponent
          );
          return DialogSimulateRecordComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/form/share.scss':
      /*!***************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/share.scss ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.airworthiness-alert,\n.maintenance-alert {\n  font-weight: 600;\n  text-align: center; }\n\n.airworthiness-alert.airworthiness-alert--nok,\n.maintenance-alert.maintenance-alert--nok {\n  background-color: #f6685e; }\n\n.airworthiness-alert.airworthiness-alert--ok,\n.maintenance-alert.maintenance-alert--ok {\n  background-color: #4caf50; }\n\n.airworthiness-alert.airworthiness-alert--warning,\n.maintenance-alert.maintenance-alert--warning {\n  background-color: #ffc107; }\n\n.aw-table2 .airworthiness-alert,\n.aw-tree-table2 .maintenance-alert {\n  display: inline-block;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9hc3NldC1yZXZpZXcvZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbWFpbnRlbmFuY2VcXGFzc2V0LXJldmlld1xcZm9ybVxcc2hhcmUuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9hc3NldC1yZXZpZXcvZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7O0VBRUUseUJDY2tCLEVBQUE7O0FEWHBCOztFQUVFLHlCQ01vQixFQUFBOztBREh0Qjs7RUFFRSx5QkNFYyxFQUFBOztBRENoQjs7RUFFRSxxQkFBcUI7RUFDckIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9hc3NldC1yZXZpZXcvZm9ybS9zaGFyZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5cclxuLmFpcndvcnRoaW5lc3MtYWxlcnQsXHJcbi5tYWludGVuYW5jZS1hbGVydCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5haXJ3b3J0aGluZXNzLWFsZXJ0LmFpcndvcnRoaW5lc3MtYWxlcnQtLW5vayxcclxuLm1haW50ZW5hbmNlLWFsZXJ0Lm1haW50ZW5hbmNlLWFsZXJ0LS1ub2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG59XHJcblxyXG4uYWlyd29ydGhpbmVzcy1hbGVydC5haXJ3b3J0aGluZXNzLWFsZXJ0LS1vayxcclxuLm1haW50ZW5hbmNlLWFsZXJ0Lm1haW50ZW5hbmNlLWFsZXJ0LS1vayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxufVxyXG5cclxuLmFpcndvcnRoaW5lc3MtYWxlcnQuYWlyd29ydGhpbmVzcy1hbGVydC0td2FybmluZyxcclxuLm1haW50ZW5hbmNlLWFsZXJ0Lm1haW50ZW5hbmNlLWFsZXJ0LS13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG59XHJcblxyXG4uYXctdGFibGUyIC5haXJ3b3J0aGluZXNzLWFsZXJ0LFxyXG4uYXctdHJlZS10YWJsZTIgLm1haW50ZW5hbmNlLWFsZXJ0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/search/ar-search.component.html':
      /*!*******************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/search/ar-search.component.html ***!
  \*******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "global.search" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show All Actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<aw-asset-rev-search (onOpenClick)="openSelection($event)"></aw-asset-rev-search>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/search/ar-search.component.scss':
      /*!*******************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/search/ar-search.component.scss ***!
  \*******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvYXNzZXQtcmV2aWV3L3NlYXJjaC9hci1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/search/ar-search.component.ts':
      /*!*****************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/search/ar-search.component.ts ***!
  \*****************************************************************************/
      /*! exports provided: ARSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ARSearchComponent', function() {
          return ARSearchComponent;
        });
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
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _ar_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./ar-search.service */ './src/app/main/maintenance/asset-review/search/ar-search.service.ts'
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

        var ARSearchComponent = /** @class */ (function(_super) {
          __extends(ARSearchComponent, _super);
          function ARSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            assetReviewSearchService
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
            _this.assetReviewSearchService = assetReviewSearchService;
            _this.loadWareHouseList();
            return _this;
          }
          ARSearchComponent.prototype.openSelection = function(event) {
            if (!!event.output) {
              var warehouse = void 0;
              if (event.warehouseId) {
                var selectedWarehouse = this.wareHouseList.find(function(wareHouse) {
                  return wareHouse.value === event.warehouseId;
                });
                if (selectedWarehouse) {
                  warehouse = selectedWarehouse.label;
                }
              }
              var componentId =
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
                  .MAI_ASSET_REVIEW_FORM;
              var equipmentList = [];
              var fvList = [];
              var funcList = [];
              var objectId = {
                warehouse: warehouse,
                equipmentCodeList: __spread(equipmentList, [event.output.equipmentCode]),
                familyVariantList: __spread(fvList, [event.output.familyVariant]),
                functionList: __spread(funcList, [event.output.function])
              };
              var data = {
                componentId: componentId,
                id: this.tabService.generateId(),
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                objectId: this.serializationService.serialize(objectId)
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          ARSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          ARSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
              .MAI_ASSET_REVIEW_SEARCH;
          };
          ARSearchComponent.prototype.loadWareHouseList = function() {
            var _this = this;
            this.assetReviewSearchService.findAllWarehouse().subscribe(function(results) {
              _this.wareHouseList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_9__['ListUtils']
                .orEmpty(results)
                .filter(function(warehouse) {
                  return !!warehouse.whCode;
                })
                .map(function(warehouse) {
                  return {
                    label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_10__['StringUtils'].isNullOrEmpty(
                      warehouse.whName
                    )
                      ? warehouse.whCode
                      : warehouse.whCode + ' - ' + warehouse.whName,
                    value: warehouse.wareHouseId
                  };
                });
            });
          };
          ARSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-ar-search',
                template: __webpack_require__(
                  /*! ./ar-search.component.html */ './src/app/main/maintenance/asset-review/search/ar-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./ar-search.component.scss */ './src/app/main/maintenance/asset-review/search/ar-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__['TabService'],
                _ar_search_service__WEBPACK_IMPORTED_MODULE_11__['ARSearchService']
              ])
            ],
            ARSearchComponent
          );
          return ARSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/asset-review/search/ar-search.service.ts':
      /*!***************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/search/ar-search.service.ts ***!
  \***************************************************************************/
      /*! exports provided: ARSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ARSearchService', function() {
          return ARSearchService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
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

        var ARSearchService = /** @class */ (function(_super) {
          __extends(ARSearchService, _super);
          function ARSearchService(http, appConfigService, bidtWarehouseApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            return _this;
          }
          /**************************************************************************
           * Bidt warehouse api
           *************************************************************************/
          ARSearchService.prototype.findAllWarehouse = function() {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findAll);
          };
          ARSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
                providedIn: 'root'
              }),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_2__['BidtWarehouseApi']
              ])
            ],
            ARSearchService
          );
          return ARSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-work-package/dialog-work-package.module.ts':
      /*!*************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-work-package/dialog-work-package.module.ts ***!
  \*************************************************************************************/
      /*! exports provided: DialogWorkPackageModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogWorkPackageModule',
          function() {
            return DialogWorkPackageModule;
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
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/inputtextarea */ './node_modules/primeng/inputtextarea.js'
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_3__
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
        /* harmony import */ var _dialog_work_package_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./dialog-work-package.component */ './src/app/shared/components/dialog-work-package/dialog-work-package.component.ts'
        );
        /* harmony import */ var _dialog_work_package_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./dialog-work-package.service */ './src/app/shared/components/dialog-work-package/dialog-work-package.service.ts'
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
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__['DropdownModule'],
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_3__['InputTextareaModule']
        ];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [_dialog_work_package_component__WEBPACK_IMPORTED_MODULE_8__['DialogWorkPackageComponent']];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_dialog_work_package_service__WEBPACK_IMPORTED_MODULE_9__['DialogWorkPackageService']];
        var DialogWorkPackageModule = /** @class */ (function() {
          function DialogWorkPackageModule() {}
          DialogWorkPackageModule = __decorate(
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
            DialogWorkPackageModule
          );
          return DialogWorkPackageModule;
        })();

        /***/
      },

    /***/ './src/app/shared/constants/bido-evolution-constants.ts':
      /*!**************************************************************!*\
  !*** ./src/app/shared/constants/bido-evolution-constants.ts ***!
  \**************************************************************/
      /*! exports provided: BidoEvolutionConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BidoEvolutionConstants', function() {
          return BidoEvolutionConstants;
        });
        var BidoEvolutionConstants = /** @class */ (function() {
          function BidoEvolutionConstants() {}
          BidoEvolutionConstants.CODE_MODIFICATION = 'MOD';
          BidoEvolutionConstants.CODE_EVOLUTION = 'EVOL';
          BidoEvolutionConstants.CODE_SB = 'SB';
          BidoEvolutionConstants.MODULE_HR = 'AD';
          BidoEvolutionConstants.CODE_AD = 'AD';
          return BidoEvolutionConstants;
        })();

        /***/
      },

    /***/ './src/app/shared/constants/control-config-constants.ts':
      /*!**************************************************************!*\
  !*** ./src/app/shared/constants/control-config-constants.ts ***!
  \**************************************************************/
      /*! exports provided: ControlConfigConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ControlConfigConstants', function() {
          return ControlConfigConstants;
        });
        var ControlConfigConstants = /** @class */ (function() {
          function ControlConfigConstants() {}
          ControlConfigConstants.ICON_GREEN = '9';
          ControlConfigConstants.ICON_RED = '10';
          ControlConfigConstants.ICON_YELLOW = '11';
          ControlConfigConstants.ICON_NONE = '12';
          ControlConfigConstants.CUSTOMIZATION_STATUS_NONE = '0';
          ControlConfigConstants.CUSTOMIZATION_STATUS_OK_ASSUMED = '10';
          ControlConfigConstants.CUSTOMIZATION_STATUS_OK_CUSTOMIZED = '11';
          ControlConfigConstants.CUSTOMIZATION_STATUS_WARNING_NO_ALTERNATIVE = '21';
          ControlConfigConstants.ICON_GREEN_LIGHT_CODE = '0';
          ControlConfigConstants.ICON_RED_LIGHT_CODE = '1';
          ControlConfigConstants.ICON_YELLOW_LIGHT_CODE = '2';
          ControlConfigConstants.ICON_NONE_LIGHT_CODE = '3';
          ControlConfigConstants.ICON_EQUIPMENT_CODE = '5';
          ControlConfigConstants.ICON_GREEN_ROUND_CODE = '6';
          ControlConfigConstants.ICON_ITEM_CODE = '4';
          ControlConfigConstants.ICON_YELLOW_TRIANGLE_CODE = '7';
          ControlConfigConstants.ICON_RED_SQUARE_CODE = '8';
          ControlConfigConstants.ICON_GREEN_LED_CODE = '9';
          ControlConfigConstants.ICON_YELLOW_LED_CODE = '11';
          ControlConfigConstants.ICON_RED_LED_CODE = '10';
          ControlConfigConstants.ICON_NONE_LED_CODE = '12';
          ControlConfigConstants.OME_CHECK_EQUIPMENT_MISSING = 'MISSING';
          ControlConfigConstants.OME_CHECK_EQUIPMENT_TO_REMOVE = 'REMOVE';
          ControlConfigConstants.OME_CHECK_EQUIPMENT_TO_REPLACE = 'REPLACE';
          ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_SUGGESTED = 'SUGGESTED';
          ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_VALIDATED = 'VALIDATED';
          ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_ON_GOING = 'ON_GOING';
          return ControlConfigConstants;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=maintenance-asset-review-asset-review-module.js.map
