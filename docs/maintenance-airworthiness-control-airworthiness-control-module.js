(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['maintenance-airworthiness-control-airworthiness-control-module'],
  {
    /***/ './node_modules/primeng/components/radiobutton/radiobutton.js':
      /*!********************************************************************!*\
  !*** ./node_modules/primeng/components/radiobutton/radiobutton.js ***!
  \********************************************************************/
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
        Object.defineProperty(exports, '__esModule', { value: true });
        var core_1 = __webpack_require__(/*! @angular/core */ './node_modules/@angular/core/fesm5/core.js');
        var common_1 = __webpack_require__(/*! @angular/common */ './node_modules/@angular/common/fesm5/common.js');
        var forms_1 = __webpack_require__(/*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js');
        exports.RADIO_VALUE_ACCESSOR = {
          provide: forms_1.NG_VALUE_ACCESSOR,
          useExisting: core_1.forwardRef(function() {
            return RadioButton;
          }),
          multi: true
        };
        var RadioButton = /** @class */ (function() {
          function RadioButton(cd) {
            this.cd = cd;
            this.onClick = new core_1.EventEmitter();
            this.onFocus = new core_1.EventEmitter();
            this.onBlur = new core_1.EventEmitter();
            this.onModelChange = function() {};
            this.onModelTouched = function() {};
          }
          RadioButton.prototype.handleClick = function(event, radioButton, focus) {
            event.preventDefault();
            if (this.disabled) {
              return;
            }
            this.select(event);
            if (focus) {
              radioButton.focus();
            }
          };
          RadioButton.prototype.select = function(event) {
            if (!this.disabled) {
              this.inputViewChild.nativeElement.checked = true;
              this.checked = true;
              this.onModelChange(this.value);
              this.onClick.emit(event);
            }
          };
          RadioButton.prototype.writeValue = function(value) {
            this.checked = value == this.value;
            if (this.inputViewChild.nativeElement) {
              this.inputViewChild.nativeElement.checked = this.checked;
            }
            this.cd.markForCheck();
          };
          RadioButton.prototype.registerOnChange = function(fn) {
            this.onModelChange = fn;
          };
          RadioButton.prototype.registerOnTouched = function(fn) {
            this.onModelTouched = fn;
          };
          RadioButton.prototype.setDisabledState = function(val) {
            this.disabled = val;
          };
          RadioButton.prototype.onInputFocus = function(event) {
            this.focused = true;
            this.onFocus.emit(event);
          };
          RadioButton.prototype.onInputBlur = function(event) {
            this.focused = false;
            this.onModelTouched();
            this.onBlur.emit(event);
          };
          RadioButton.prototype.onChange = function(event) {
            this.select(event);
          };
          __decorate([core_1.Input(), __metadata('design:type', Object)], RadioButton.prototype, 'value', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], RadioButton.prototype, 'name', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Boolean)], RadioButton.prototype, 'disabled', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], RadioButton.prototype, 'label', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Number)], RadioButton.prototype, 'tabindex', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], RadioButton.prototype, 'inputId', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Object)], RadioButton.prototype, 'style', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], RadioButton.prototype, 'styleClass', void 0);
          __decorate(
            [core_1.Input(), __metadata('design:type', String)],
            RadioButton.prototype,
            'labelStyleClass',
            void 0
          );
          __decorate(
            [core_1.Output(), __metadata('design:type', core_1.EventEmitter)],
            RadioButton.prototype,
            'onClick',
            void 0
          );
          __decorate(
            [core_1.Output(), __metadata('design:type', core_1.EventEmitter)],
            RadioButton.prototype,
            'onFocus',
            void 0
          );
          __decorate(
            [core_1.Output(), __metadata('design:type', core_1.EventEmitter)],
            RadioButton.prototype,
            'onBlur',
            void 0
          );
          __decorate(
            [core_1.ViewChild('rb'), __metadata('design:type', core_1.ElementRef)],
            RadioButton.prototype,
            'inputViewChild',
            void 0
          );
          RadioButton = __decorate(
            [
              core_1.Component({
                selector: 'p-radioButton',
                template:
                  '\n        <div [ngStyle]="style" [ngClass]="\'ui-radiobutton ui-widget\'" [class]="styleClass">\n            <div class="ui-helper-hidden-accessible">\n                <input #rb type="radio" [attr.id]="inputId" [attr.name]="name" [attr.value]="value" [attr.tabindex]="tabindex" \n                    [checked]="checked" (change)="onChange($event)" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" [disabled]="disabled">\n            </div>\n            <div (click)="handleClick($event, rb, true)"\n                [ngClass]="{\'ui-radiobutton-box ui-widget ui-state-default\':true,\n                \'ui-state-active\':rb.checked,\'ui-state-disabled\':disabled,\'ui-state-focus\':focused}">\n                <span class="ui-radiobutton-icon ui-clickable" [ngClass]="{\'pi pi-circle-on\':rb.checked}"></span>\n            </div>\n        </div>\n        <label (click)="select($event)" [class]="labelStyleClass"\n            [ngClass]="{\'ui-radiobutton-label\':true, \'ui-label-active\':rb.checked, \'ui-label-disabled\':disabled, \'ui-label-focus\':focused}"\n            *ngIf="label" [attr.for]="inputId">{{label}}</label>\n    ',
                providers: [exports.RADIO_VALUE_ACCESSOR]
              }),
              __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
            ],
            RadioButton
          );
          return RadioButton;
        })();
        exports.RadioButton = RadioButton;
        var RadioButtonModule = /** @class */ (function() {
          function RadioButtonModule() {}
          RadioButtonModule = __decorate(
            [
              core_1.NgModule({
                imports: [common_1.CommonModule],
                exports: [RadioButton],
                declarations: [RadioButton]
              })
            ],
            RadioButtonModule
          );
          return RadioButtonModule;
        })();
        exports.RadioButtonModule = RadioButtonModule;
        //# sourceMappingURL=radiobutton.js.map

        /***/
      },

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

    /***/ './src/app/main/maintenance/airworthiness-control/airworthiness-control.module.ts':
      /*!****************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/airworthiness-control.module.ts ***!
  \****************************************************************************************/
      /*! exports provided: AirworthinessControlModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AirworthinessControlModule',
          function() {
            return AirworthinessControlModule;
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
        /* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/dragdrop */ './node_modules/primeng/dragdrop.js'
        );
        /* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dragdrop__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/keyfilter */ './node_modules/primeng/keyfilter.js'
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/message */ './node_modules/primeng/message.js'
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_message__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/radiobutton */ './node_modules/primeng/radiobutton.js'
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! primeng/splitbutton */ './node_modules/primeng/splitbutton.js'
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_10__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_11__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! primeng/treetable */ './node_modules/primeng/treetable.js'
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_treetable__WEBPACK_IMPORTED_MODULE_13__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ './src/app/shared/components/component-sidebar/component-sidebar.mdule.ts'
        );
        /* harmony import */ var _shared_components_dialog_control_simulation_dialog_control_simulation_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/components/dialog-control-simulation/dialog-control-simulation.module */ './src/app/shared/components/dialog-control-simulation/dialog-control-simulation.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-customer/dialog-search-customer.module */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_work_package_dialog_work_package_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../shared/components/dialog-work-package/dialog-work-package.module */ './src/app/shared/components/dialog-work-package/dialog-work-package.module.ts'
        );
        /* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_work_package_list_work_package_list_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../shared/components/work-package-list/work-package-list.module */ './src/app/shared/components/work-package-list/work-package-list.module.ts'
        );
        /* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../shared/services/file.service */ './src/app/shared/services/file.service.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _human_resources_employee_form_employee_form_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../human-resources/employee-form/employee-form.service */ './src/app/main/human-resources/employee-form/employee-form.service.ts'
        );
        /* harmony import */ var _work_order_form_work_order_form_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../work-order/form/work-order-form.service */ './src/app/main/maintenance/work-order/form/work-order-form.service.ts'
        );
        /* harmony import */ var _work_orders_form_work_orders_form_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../work-orders/form/work-orders-form.service */ './src/app/main/maintenance/work-orders/form/work-orders-form.service.ts'
        );
        /* harmony import */ var _work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ../work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.module */ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.module.ts'
        );
        /* harmony import */ var _work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ../work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service */ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts'
        );
        /* harmony import */ var _work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ../work-package/form/work-package-form.service */ './src/app/main/maintenance/work-package/form/work-package-form.service.ts'
        );
        /* harmony import */ var _work_package_work_package_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ../work-package/work-package.service */ './src/app/main/maintenance/work-package/work-package.service.ts'
        );
        /* harmony import */ var _form_airworthiness_control_form_airworthiness_control_for_asset_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./form/airworthiness-control-form/airworthiness-control-for-asset-form.component */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-for-asset-form.component.ts'
        );
        /* harmony import */ var _form_airworthiness_control_form_airworthiness_control_for_fleet_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./form/airworthiness-control-form/airworthiness-control-for-fleet-form.component */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-for-fleet-form.component.ts'
        );
        /* harmony import */ var _form_airworthiness_control_form_airworthiness_control_form_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./form/airworthiness-control-form/airworthiness-control-form.service */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.service.ts'
        );
        /* harmony import */ var _form_airworthiness_control_form_airworthiness_table_remaining_values_airworthiness_table_remaining_values_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ./form/airworthiness-control-form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.ts'
        );
        /* harmony import */ var _form_airworthiness_control_form_asset_view_scope_asset_view_scope_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
          /*! ./form/airworthiness-control-form/asset-view-scope/asset-view-scope.component */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/asset-view-scope/asset-view-scope.component.ts'
        );
        /* harmony import */ var _form_airworthiness_control_form_dialog_airworthiness_table_full_screen_dialog_airworthiness_table_full_screen_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
          /*! ./form/airworthiness-control-form/dialog-airworthiness-table-full-screen/dialog-airworthiness-table-full-screen.component */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/dialog-airworthiness-table-full-screen/dialog-airworthiness-table-full-screen.component.ts'
        );
        /* harmony import */ var _form_airworthiness_control_form_fleet_view_scope_fleet_view_scope_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
          /*! ./form/airworthiness-control-form/fleet-view-scope/fleet-view-scope.component */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/fleet-view-scope/fleet-view-scope.component.ts'
        );
        /* harmony import */ var _form_schedule_maintenance_form_dialog_interdependence_data_dialog_interdependence_data_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
          /*! ./form/schedule-maintenance-form/dialog-interdependence-data/dialog-interdependence-data.component */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-interdependence-data/dialog-interdependence-data.component.ts'
        );
        /* harmony import */ var _form_schedule_maintenance_form_dialog_last_task_applications_dialog_last_task_applications_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
          /*! ./form/schedule-maintenance-form/dialog-last-task-applications/dialog-last-task-applications.component */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-last-task-applications/dialog-last-task-applications.component.ts'
        );
        /* harmony import */ var _form_schedule_maintenance_form_dialog_schedule_maintenance_calendar_dialog_schedule_maintenance_calendar_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
          /*! ./form/schedule-maintenance-form/dialog-schedule-maintenance-calendar/dialog-schedule-maintenance-calendar.component */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-calendar/dialog-schedule-maintenance-calendar.component.ts'
        );
        /* harmony import */ var _form_schedule_maintenance_form_dialog_schedule_maintenance_table_full_screen_dialog_schedule_maintenance_table_full_screen_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
          /*! ./form/schedule-maintenance-form/dialog-schedule-maintenance-table-full-screen/dialog-schedule-maintenance-table-full-screen.component */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-table-full-screen/dialog-schedule-maintenance-table-full-screen.component.ts'
        );
        /* harmony import */ var _form_schedule_maintenance_form_dialog_task_counters_dialog_task_counters_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
          /*! ./form/schedule-maintenance-form/dialog-task-counters/dialog-task-counters.component */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-task-counters/dialog-task-counters.component.ts'
        );
        /* harmony import */ var _form_schedule_maintenance_form_maintenance_table_filters_maintenance_table_filters_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
          /*! ./form/schedule-maintenance-form/maintenance-table-filters/maintenance-table-filters.component */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/maintenance-table-filters/maintenance-table-filters.component.ts'
        );
        /* harmony import */ var _form_schedule_maintenance_form_schedule_maintenance_form_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
          /*! ./form/schedule-maintenance-form/schedule-maintenance-form.component */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.component.ts'
        );
        /* harmony import */ var _form_schedule_maintenance_form_schedule_maintenance_form_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
          /*! ./form/schedule-maintenance-form/schedule-maintenance-form.service */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.service.ts'
        );
        /* harmony import */ var _search_airworthiness_control_search_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
          /*! ./search/airworthiness-control-search.component */ './src/app/main/maintenance/airworthiness-control/search/airworthiness-control-search.component.ts'
        );
        /* harmony import */ var _search_schedule_maintenance_search_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
          /*! ./search/schedule-maintenance-search.component */ './src/app/main/maintenance/airworthiness-control/search/schedule-maintenance-search.component.ts'
        );
        /* harmony import */ var _search_search_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
          /*! ./search/search.service */ './src/app/main/maintenance/airworthiness-control/search/search.service.ts'
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
          primeng_dragdrop__WEBPACK_IMPORTED_MODULE_3__['DragDropModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__['DropdownModule'],
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5__['KeyFilterModule'],
          primeng_message__WEBPACK_IMPORTED_MODULE_6__['MessageModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7__['OverlayPanelModule'],
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__['RadioButtonModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__['SelectButtonModule'],
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_10__['SplitButtonModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_11__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__['TooltipModule'],
          primeng_treetable__WEBPACK_IMPORTED_MODULE_13__['TreeTableModule'],
          _shared_components_dialog_control_simulation_dialog_control_simulation_module__WEBPACK_IMPORTED_MODULE_18__[
            'DialogControlSimulationModule'
          ]
        ];
        var INTERNAL_MODULES = [
          _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_17__[
            'ComponentSidebarModule'
          ],
          _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_19__[
            'DialogSearchCustomerModule'
          ],
          _shared_components_work_package_list_work_package_list_module__WEBPACK_IMPORTED_MODULE_23__[
            'WorkPackageListModule'
          ],
          _shared_components_dialog_work_package_dialog_work_package_module__WEBPACK_IMPORTED_MODULE_20__[
            'DialogWorkPackageModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_22__['ModalModule'],
          _work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_module__WEBPACK_IMPORTED_MODULE_29__[
            'DialogWorkOrderEditionModule'
          ]
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _form_airworthiness_control_form_airworthiness_table_remaining_values_airworthiness_table_remaining_values_component__WEBPACK_IMPORTED_MODULE_36__[
            'AirworthinessTableRemainingValuesComponent'
          ],
          _form_airworthiness_control_form_asset_view_scope_asset_view_scope_component__WEBPACK_IMPORTED_MODULE_37__[
            'AssetViewScopeComponent'
          ],
          _form_airworthiness_control_form_dialog_airworthiness_table_full_screen_dialog_airworthiness_table_full_screen_component__WEBPACK_IMPORTED_MODULE_38__[
            'DialogAirworthinessTableFullScreenComponent'
          ],
          _form_schedule_maintenance_form_dialog_interdependence_data_dialog_interdependence_data_component__WEBPACK_IMPORTED_MODULE_40__[
            'DialogInterdependenceDataComponent'
          ],
          _form_schedule_maintenance_form_dialog_last_task_applications_dialog_last_task_applications_component__WEBPACK_IMPORTED_MODULE_41__[
            'DialogLastTaskApplicationsComponent'
          ],
          _form_schedule_maintenance_form_dialog_schedule_maintenance_calendar_dialog_schedule_maintenance_calendar_component__WEBPACK_IMPORTED_MODULE_42__[
            'DialogScheduleMaintenanceCalendarComponent'
          ],
          _form_schedule_maintenance_form_dialog_schedule_maintenance_table_full_screen_dialog_schedule_maintenance_table_full_screen_component__WEBPACK_IMPORTED_MODULE_43__[
            'DialogScheduleMaintenanceTableFullScreenComponent'
          ],
          _form_schedule_maintenance_form_dialog_task_counters_dialog_task_counters_component__WEBPACK_IMPORTED_MODULE_44__[
            'DialogTaskCountersComponent'
          ],
          _form_airworthiness_control_form_fleet_view_scope_fleet_view_scope_component__WEBPACK_IMPORTED_MODULE_39__[
            'FleetViewScopeComponent'
          ],
          _form_schedule_maintenance_form_maintenance_table_filters_maintenance_table_filters_component__WEBPACK_IMPORTED_MODULE_45__[
            'MaintenanceTableFiltersComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _form_airworthiness_control_form_airworthiness_control_for_asset_form_component__WEBPACK_IMPORTED_MODULE_33__[
            'AirworthinessControlForAssetFormComponent'
          ],
          _form_airworthiness_control_form_airworthiness_control_for_fleet_form_component__WEBPACK_IMPORTED_MODULE_34__[
            'AirworthinessControlForFleetFormComponent'
          ],
          _search_airworthiness_control_search_component__WEBPACK_IMPORTED_MODULE_48__[
            'AirworthinessControlSearchComponent'
          ],
          _form_schedule_maintenance_form_schedule_maintenance_form_component__WEBPACK_IMPORTED_MODULE_46__[
            'ScheduleMaintenanceFormComponent'
          ],
          _search_schedule_maintenance_search_component__WEBPACK_IMPORTED_MODULE_49__[
            'ScheduleMaintenanceSearchComponent'
          ]
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _form_airworthiness_control_form_airworthiness_control_form_service__WEBPACK_IMPORTED_MODULE_35__[
            'AirworthinessControlFormService'
          ],
          _search_search_service__WEBPACK_IMPORTED_MODULE_50__['SearchService'],
          _form_schedule_maintenance_form_schedule_maintenance_form_service__WEBPACK_IMPORTED_MODULE_47__[
            'ScheduleMaintenanceFormService'
          ],
          _shared_services_file_service__WEBPACK_IMPORTED_MODULE_24__['FileService'],
          _work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_30__[
            'DialogWorkOrderEditService'
          ],
          _work_orders_form_work_orders_form_service__WEBPACK_IMPORTED_MODULE_28__['WorkOrdersFormService'],
          _work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_31__['WorkPackageFormService'],
          _work_package_work_package_service__WEBPACK_IMPORTED_MODULE_32__['WorkPackageService'],
          _human_resources_employee_form_employee_form_service__WEBPACK_IMPORTED_MODULE_26__['EmployeeFormService'],
          _work_order_form_work_order_form_service__WEBPACK_IMPORTED_MODULE_27__['WorkOrderFormService']
        ];
        var AirworthinessControlModule = /** @class */ (function() {
          function AirworthinessControlModule() {}
          AirworthinessControlModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_14__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_15__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_16__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_25__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS),
                    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_21__[
                      'ManageSearchCriteriaModule'
                    ]
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            AirworthinessControlModule
          );
          return AirworthinessControlModule;
        })();

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/enums/search-asset.enum.ts':
      /*!***********************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/enums/search-asset.enum.ts ***!
  \***********************************************************************************/
      /*! exports provided: SearchAsset */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SearchAsset', function() {
          return SearchAsset;
        });
        var SearchAsset;
        (function(SearchAsset) {
          SearchAsset[(SearchAsset['All'] = 1)] = 'All';
          SearchAsset[(SearchAsset['Aircraft'] = 2)] = 'Aircraft';
          SearchAsset[(SearchAsset['Equipment'] = 3)] = 'Equipment';
          SearchAsset[(SearchAsset['Engine'] = 4)] = 'Engine';
        })(SearchAsset || (SearchAsset = {}));

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/enums/search-category.enum.ts':
      /*!**************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/enums/search-category.enum.ts ***!
  \**************************************************************************************/
      /*! exports provided: SearchCategory */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SearchCategory', function() {
          return SearchCategory;
        });
        var SearchCategory;
        (function(SearchCategory) {
          SearchCategory[(SearchCategory['Asset'] = 1)] = 'Asset';
          SearchCategory[(SearchCategory['Fleet'] = 2)] = 'Fleet';
        })(SearchCategory || (SearchCategory = {}));

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-for-asset-form.component.ts':
      /*!******************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-for-asset-form.component.ts ***!
  \******************************************************************************************************************************************/
      /*! exports provided: AirworthinessControlForAssetFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AirworthinessControlForAssetFormComponent',
          function() {
            return AirworthinessControlForAssetFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/services/file.service */ './src/app/shared/services/file.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
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
        /* harmony import */ var _airworthiness_control_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./airworthiness-control-form.component */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.component.ts'
        );
        /* harmony import */ var _airworthiness_control_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./airworthiness-control-form.service */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.service.ts'
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

        var AirworthinessControlForAssetFormComponent = /** @class */ (function(_super) {
          __extends(AirworthinessControlForAssetFormComponent, _super);
          function AirworthinessControlForAssetFormComponent(
            exportService,
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            dateService,
            sessionService,
            airworthinessControlFormService,
            propertiesService,
            translateService,
            fileService
          ) {
            return (
              _super.call(
                this,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                dateService,
                sessionService,
                airworthinessControlFormService,
                exportService,
                propertiesService,
                translateService,
                fileService
              ) || this
            );
          }
          AirworthinessControlForAssetFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM;
          };
          AirworthinessControlForAssetFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-airworthiness-control-for-asset-form',
                template: __webpack_require__(
                  /*! ./airworthiness-control-form.component.html */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../share.scss */ './src/app/main/maintenance/airworthiness-control/form/share.scss'
                  ),
                  __webpack_require__(
                    /*! ./airworthiness-control-form.component.scss */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_4__['ExportService'],
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__['TabService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__['DateService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__['SessionService'],
                _airworthiness_control_form_service__WEBPACK_IMPORTED_MODULE_14__['AirworthinessControlFormService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__['PropertiesService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_services_file_service__WEBPACK_IMPORTED_MODULE_6__['FileService']
              ])
            ],
            AirworthinessControlForAssetFormComponent
          );
          return AirworthinessControlForAssetFormComponent;
        })(_airworthiness_control_form_component__WEBPACK_IMPORTED_MODULE_13__['AirworthinessControlFormComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-for-fleet-form.component.ts':
      /*!******************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-for-fleet-form.component.ts ***!
  \******************************************************************************************************************************************/
      /*! exports provided: AirworthinessControlForFleetFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AirworthinessControlForFleetFormComponent',
          function() {
            return AirworthinessControlForFleetFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/services/file.service */ './src/app/shared/services/file.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
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
        /* harmony import */ var _airworthiness_control_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./airworthiness-control-form.component */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.component.ts'
        );
        /* harmony import */ var _airworthiness_control_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./airworthiness-control-form.service */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.service.ts'
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

        var AirworthinessControlForFleetFormComponent = /** @class */ (function(_super) {
          __extends(AirworthinessControlForFleetFormComponent, _super);
          function AirworthinessControlForFleetFormComponent(
            exportService,
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            dateService,
            sessionService,
            airworthinessControlFormService,
            propertiesService,
            translateService,
            fileService
          ) {
            return (
              _super.call(
                this,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                dateService,
                sessionService,
                airworthinessControlFormService,
                exportService,
                propertiesService,
                translateService,
                fileService
              ) || this
            );
          }
          AirworthinessControlForFleetFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .MAI_AIRWORTHINESS_CONTROL_FOR_FLEET_FORM;
          };
          AirworthinessControlForFleetFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-airworthiness-control-for-fleet-form',
                template: __webpack_require__(
                  /*! ./airworthiness-control-form.component.html */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../share.scss */ './src/app/main/maintenance/airworthiness-control/form/share.scss'
                  ),
                  __webpack_require__(
                    /*! ./airworthiness-control-form.component.scss */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_4__['ExportService'],
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__['TabService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__['DateService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__['SessionService'],
                _airworthiness_control_form_service__WEBPACK_IMPORTED_MODULE_14__['AirworthinessControlFormService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__['PropertiesService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_services_file_service__WEBPACK_IMPORTED_MODULE_6__['FileService']
              ])
            ],
            AirworthinessControlForFleetFormComponent
          );
          return AirworthinessControlForFleetFormComponent;
        })(_airworthiness_control_form_component__WEBPACK_IMPORTED_MODULE_13__['AirworthinessControlFormComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.component.html':
      /*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.component.html ***!
  \**********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle-container">\r\n        <div *ngIf="isAssetViewMode && isAssetAircraft" class="page-subtitle">\r\n          - {{ componentName + ".aircraft" | translate }} {{ asset.registration }}\r\n        </div>\r\n        <div *ngIf="isAssetViewMode && (isAssetEngine || isAssetEquipment)" class="page-subtitle">\r\n          - {{ asset.equipmentDesignation }} / {{ asset.sn }}\r\n        </div>\r\n        <div *ngIf="isFleetViewMode" class="page-subtitle">- {{ topFamilyVariantList }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      *ngIf="isAssetViewMode && scope._parent"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="goUpInAirworthinessTable()"\r\n    >\r\n      {{ componentName + ".goUp" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf="simulationCriteria !== undefined" type="button" mat-raised-button (click)="resetSimulation()">\r\n      {{ componentName + ".resetSimulation" | translate }}\r\n    </button>\r\n\r\n    <button type="button" mat-raised-button (click)="simulate()">{{ componentName + ".simulate" | translate }}</button>\r\n\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button *ngIf="isAssetViewMode" id="goTo" mat-menu-item [matMenuTriggerFor]="navigations">\r\n        {{ "global.goTo" | translate }}\r\n      </button>\r\n\r\n      <button mat-menu-item [matMenuTriggerFor]="potentialUnitSelection">\r\n        {{ componentName + ".potentialUnit" | translate }}({{ potentialUnitSelected }})\r\n      </button>\r\n\r\n      <button mat-menu-item (click)="reload()">{{ "global.refresh" | translate }}</button>\r\n\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n\r\n    <mat-menu #navigations="matMenu">\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="navigationLinkList[0].command()">\r\n        {{ navigationLinkList[0].label | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="navigationLinkList[1].command()">\r\n        {{ navigationLinkList[1].label | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="navigationLinkList[2].command()">\r\n        {{ navigationLinkList[2].label | translate }}\r\n      </button>\r\n    </mat-menu>\r\n    <mat-menu #potentialUnitSelection="matMenu">\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="potentialUnitList[0].command()">\r\n        {{ potentialUnitList[0].label | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="potentialUnitList[1].command()">\r\n        {{ potentialUnitList[1].label | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="potentialUnitList[2].command()">\r\n        {{ potentialUnitList[2].label | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div id="airworthiness-control-form" class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div *ngIf="simulationCriteria !== undefined" class="grid-cell--12">\r\n        <div class="grid-cell grid-cell--container grid-cell-state-simulation">\r\n          <div class="grid-cell-header">\r\n            <div class="grid-cell-title-container">\r\n              <h3 class="grid-cell-title">\r\n                {{ componentName + ".ageingSimulation" | translate }}:\r\n                <span\r\n                  *ngIf="simulationCriteria.inHours && simulationCriteria.inHours <= 1"\r\n                  class="simulation-criterion"\r\n                >\r\n                  {{ componentName + ".simulateInHour" | translate: { value: simulationCriteria.inHours.toString() } }}\r\n                </span>\r\n                <span *ngIf="simulationCriteria.inHours && simulationCriteria.inHours > 1" class="simulation-criterion">\r\n                  {{ componentName + ".simulateInHours" | translate: { value: simulationCriteria.inHours.toString() } }}\r\n                </span>\r\n                <span\r\n                  *ngIf="simulationCriteria.inCycles && simulationCriteria.inCycles <= 1"\r\n                  class="simulation-criterion"\r\n                >\r\n                  {{\r\n                    componentName + ".simulateInCycle" | translate: { value: simulationCriteria.inCycles.toString() }\r\n                  }}\r\n                </span>\r\n                <span\r\n                  *ngIf="simulationCriteria.inCycles && simulationCriteria.inCycles > 1"\r\n                  class="simulation-criterion"\r\n                >\r\n                  {{\r\n                    componentName + ".simulateInCycles" | translate: { value: simulationCriteria.inCycles.toString() }\r\n                  }}\r\n                </span>\r\n                <span *ngIf="simulationCriteria.atDate" class="simulation-criterion">\r\n                  {{\r\n                    componentName + ".simulateAtDate"\r\n                      | translate: { value: dateService.dateToString(simulationCriteria.atDate) }\r\n                  }}\r\n                </span>\r\n              </h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div *ngIf="isFleetViewMode" class="grid-cell--6">\r\n          <div\r\n            class="grid-cell grid-cell--container grid-cell-scope"\r\n            [ngClass]="{\r\n              \'in-simulation\': simulationCriteria !== undefined\r\n            }"\r\n          >\r\n            <aw-airworthiness-table-fleet-view-scope\r\n              [topAssetTypeList]="topAssetTypeList"\r\n              [topFamilyVariantList]="topFamilyVariantList"\r\n              [topWarehouse]="topWarehouse"\r\n            ></aw-airworthiness-table-fleet-view-scope>\r\n          </div>\r\n        </div>\r\n        <div *ngIf="isFleetViewMode" class="grid-cell--6 grid-cell--no-padding">\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div\r\n                class="grid-cell grid-cell--container grid-cell-summary"\r\n                [ngClass]="{\r\n                  \'in-simulation\': simulationCriteria !== undefined\r\n                }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container loading-indicator">\r\n                    <div class="grid-cell-title">\r\n                      {{\r\n                        componentName + (isAssetViewMode ? ".subAssemblySummary" : ".airworthinessSummary") | translate\r\n                      }}\r\n                      <div *ngIf="globalAlertListLoading" class="lds-hourglass"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="row flex-row--justify-center">\r\n                    <div *ngIf="!globalAlertListLoading && chartVisible" class="chart-container">\r\n                      <div class="chart-wrapper">\r\n                        <p-chart\r\n                          [type]="chartType"\r\n                          [data]="chartData"\r\n                          [options]="chartOptions"\r\n                          width="100%"\r\n                          height="100%"\r\n                        ></p-chart>\r\n                      </div>\r\n\r\n                      <div class="chart-legend">\r\n                        <div class="chart-legend-label">\r\n                          <div class="chart-legend-label-color airworthy"></div>\r\n                          {{ chartData.labels[0] }} <span class="chart-value">{{ airworthyEquipmentNb }} </span>\r\n                        </div>\r\n\r\n                        <div class="chart-legend-label">\r\n                          <div class="chart-legend-label-color airworthy-with-alerts"></div>\r\n                          {{ chartData.labels[1] }}\r\n                          <span class="chart-value">{{ airworthyWithAlertEquipmentNb }} </span>\r\n                        </div>\r\n\r\n                        <div class="chart-legend-label">\r\n                          <div class="chart-legend-label-color not-airworthy"></div>\r\n                          {{ chartData.labels[2] }} <span class="chart-value">{{ notAirworthyEquipmentNb }}</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="isAssetViewMode" class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div\r\n            class="grid-cell grid-cell--container grid-cell-scope"\r\n            [ngClass]="{\r\n              \'in-simulation\': simulationCriteria !== undefined\r\n            }"\r\n          >\r\n            <aw-airworthiness-table-asset-view-scope\r\n              [airworthinessTableColCsnLabel]="airworthinessTableColCsnLabel"\r\n              [airworthinessTableColTsnLabel]="airworthinessTableColTsnLabel"\r\n              [asset]="asset"\r\n              [assetAirworthiness]="assetAirworthiness"\r\n              [globalAlertListLoading]="globalAlertListLoading"\r\n              [isAssetAircraft]="isAssetAircraft"\r\n              [isAssetEngine]="isAssetEngine"\r\n              [isAssetEquipment]="isAssetEquipment"\r\n              (onNavigate)="openTopAsset()"\r\n            ></aw-airworthiness-table-asset-view-scope>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="isAssetViewMode" class="grid-row">\r\n        <div class="grid-cell--9 grid-cell--no-padding">\r\n          <div class="grid-row">\r\n            <div class="grid-cell--6">\r\n              <div\r\n                class="grid-cell grid-cell--container grid-cell-remaining-values"\r\n                [ngClass]="{\r\n                  \'in-simulation\': simulationCriteria !== undefined\r\n                }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <div class="grid-cell-title">\r\n                      <span *ngIf="isAssetAircraft">\r\n                        {{ componentName + ".aircraftRemainingValues" | translate }}\r\n                      </span>\r\n                      <span *ngIf="isAssetEngine">\r\n                        {{ componentName + ".engineRemainingValues" | translate }}\r\n                      </span>\r\n                      <span *ngIf="isAssetEquipment">\r\n                        {{ componentName + ".equipmentRemainingValues" | translate }}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <aw-airworthiness-table-remaining-values\r\n                    #topAssetAirworthinessTableRemainingValuesComponent\r\n                    [equipmentCodeList]="topEquipmentCodeList"\r\n                    [fullTable]="false"\r\n                    [minimumRemainingEquivalentMap]="minimumRemainingEquivalentMap"\r\n                    [potentialUnitSelected]="potentialUnitSelected"\r\n                    [row]="assetAirworthiness"\r\n                    [simulationCriteria]="simulationCriteria"\r\n                  ></aw-airworthiness-table-remaining-values>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell--6">\r\n              <div\r\n                class="grid-cell grid-cell--container grid-cell-summary"\r\n                [ngClass]="{\r\n                  \'in-simulation\': simulationCriteria !== undefined\r\n                }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container loading-indicator">\r\n                    <div class="grid-cell-title">\r\n                      {{\r\n                        componentName + (isAssetViewMode ? ".subAssemblySummary" : ".airworthinessSummary") | translate\r\n                      }}\r\n                      <div *ngIf="globalAlertListLoading" class="lds-hourglass"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="row flex-row--justify-center">\r\n                    <div *ngIf="!globalAlertListLoading && chartVisible" class="chart-container">\r\n                      <div class="chart-wrapper">\r\n                        <p-chart\r\n                          [type]="chartType"\r\n                          [data]="chartData"\r\n                          [options]="chartOptions"\r\n                          width="100%"\r\n                          height="100%"\r\n                        ></p-chart>\r\n                      </div>\r\n\r\n                      <div class="chart-legend">\r\n                        <div class="chart-legend-label">\r\n                          <div class="chart-legend-label-color airworthy"></div>\r\n                          {{ chartData.labels[0] }} <span class="chart-value">{{ airworthyEquipmentNb }} </span>\r\n                        </div>\r\n\r\n                        <div class="chart-legend-label">\r\n                          <div class="chart-legend-label-color airworthy-with-alerts"></div>\r\n                          {{ chartData.labels[1] }}\r\n                          <span class="chart-value">{{ airworthyWithAlertEquipmentNb }} </span>\r\n                        </div>\r\n\r\n                        <div class="chart-legend-label">\r\n                          <div class="chart-legend-label-color not-airworthy"></div>\r\n                          {{ chartData.labels[2] }} <span class="chart-value">{{ notAirworthyEquipmentNb }}</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-cell--3">\r\n          <div\r\n            class="grid-cell grid-cell--container grid-cell-summary"\r\n            [ngClass]="{\r\n              \'in-simulation\': simulationCriteria !== undefined\r\n            }"\r\n          >\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <div class="grid-cell-title">\r\n                  {{ componentName + ".configurationControl" | translate }}\r\n                  <div\r\n                    *ngIf="configurationControlTableLoading || airworthinessTableLoading || globalAlertListLoading"\r\n                    class="lds-hourglass"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="column">\r\n                <div class="section">\r\n                  <div class="section-content">\r\n                    <div class="row flex-row--justify-end">\r\n                      <button\r\n                        type="button"\r\n                        mat-raised-button\r\n                        [ngClass]="{\r\n                          \'visibility--hidden\':\r\n                            configurationControlTableLoading || airworthinessTableLoading || globalAlertListLoading\r\n                        }"\r\n                        (click)="openControlConfiguration()"\r\n                      >\r\n                        {{ componentName + ".open" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="section">\r\n                  <div class="section-content">\r\n                    <div class="row">\r\n                      <div\r\n                        class="table-summary-wrapper"\r\n                        [ngClass]="{\r\n                          \'visibility--hidden\':\r\n                            configurationControlTableLoading || airworthinessTableLoading || globalAlertListLoading\r\n                        }"\r\n                      >\r\n                        <p-table\r\n                          [resizableColumns]="true"\r\n                          class="aw-table-control-summary aw-table-control-summary-single-row"\r\n                          [value]="configurationControlTable"\r\n                        >\r\n                          <ng-template pTemplate="colgroup">\r\n                            <colgroup>\r\n                              <col [ngStyle]="{ width: \'33%\' }" />\r\n                              <col [ngStyle]="{ width: \'33%\' }" />\r\n                              <col [ngStyle]="{ width: \'33%\' }" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate="header" let-columns>\r\n                            <tr>\r\n                              <th [ngStyle]="{ \'text-align\': \'center\' }">\r\n                                {{ componentName + ".ok" | translate }}\r\n                              </th>\r\n                              <th [ngStyle]="{ \'text-align\': \'center\' }">\r\n                                {{ componentName + ".warning" | translate }}\r\n                              </th>\r\n                              <th [ngStyle]="{ \'text-align\': \'center\' }">\r\n                                {{ componentName + ".nok" | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate="body" let-columns="columns" let-rowData>\r\n                            <tr>\r\n                              <td [ngStyle]="{ \'text-align\': \'center\' }">\r\n                                <span\r\n                                  class="control-result"\r\n                                  [ngClass]="{\r\n                                    ok: rowData[\'nok\'] == 0 && rowData[\'warning\'] == 0 && rowData[\'ok\'] >= 0\r\n                                  }"\r\n                                >\r\n                                  {{ rowData["ok"] }}\r\n                                </span>\r\n                              </td>\r\n                              <td [ngStyle]="{ \'text-align\': \'center\' }">\r\n                                <span\r\n                                  class="control-result"\r\n                                  [ngClass]="{ warning: rowData[\'nok\'] == 0 && rowData[\'warning\'] > 0 }"\r\n                                >\r\n                                  {{ rowData["warning"] }}\r\n                                </span>\r\n                              </td>\r\n                              <td [ngStyle]="{ \'text-align\': \'center\' }">\r\n                                <span class="control-result" [ngClass]="{ nok: rowData[\'nok\'] > 0 }">\r\n                                  {{ rowData["nok"] }}\r\n                                </span>\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div\r\n            class="grid-cell grid-cell--container grid-cell-detail"\r\n            [ngClass]="{ \'in-simulation\': simulationCriteria !== undefined }"\r\n          >\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 *ngIf="!airworthinessTableOnlyAlertsVisible" class="grid-cell-title">\r\n                  {{ componentName + (isAssetViewMode ? ".subAssemblyDetail" : ".airworthinessDetail") | translate }}\r\n                  ({{ airworthinessTable ? airworthinessTable.length : 0 }})\r\n                </h3>\r\n                <h3 *ngIf="airworthinessTableOnlyAlertsVisible" class="grid-cell-title">\r\n                  {{ componentName + (isAssetViewMode ? ".subAssemblyDetail" : ".airworthinessDetail") | translate }}\r\n                  ({{ airworthinessTableDisplayedRowNb }} / {{ airworthinessTable ? airworthinessTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <p-table\r\n                  [resizableColumns]="true"\r\n                  #ptableAirworthiness\r\n                  class="aw-table2"\r\n                  [columns]="airworthinessTableCols"\r\n                  [value]="airworthinessTable"\r\n                  [(selection)]="airworthinessTableSelection"\r\n                  dataKey="_id"\r\n                  [scrollable]="true"\r\n                  (sortFunction)="customSort($event)"\r\n                  [customSort]="true"\r\n                >\r\n                  <ng-template pTemplate="emptymessage">\r\n                    <span *ngIf="!airworthinessTableLoading"> &nbsp;</span>\r\n\r\n                    <div *ngIf="airworthinessTableLoading" class="aw-table-loading-indicator">\r\n                      <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                      <div class="lds-hourglass"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="caption">\r\n                    <div\r\n                      class="aw-table-header"\r\n                      [ngClass]="{ \'rows-selected\': airworthinessTableSelection.length > 0 }"\r\n                    >\r\n                      <div class="aw-table-global-filter">\r\n                        <label class="aw-table-global-filter-label">\r\n                          <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableAirworthinessGlobalFilter\r\n                          class="aw-table-global-filter-input"\r\n                          type="text"\r\n                          placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                          (input)="ptableAirworthiness.filterGlobal($event.target.value, \'contains\')"\r\n                        />\r\n                      </div>\r\n\r\n                      <div class="aw-table-actions">\r\n                        <p-splitButton\r\n                          *ngIf="!airworthinessTableLoading && airworthinessTableSelection.length === 1"\r\n                          class="aw-split-btn aw-table-action"\r\n                          label="{{ componentName + \'.navigate\' | translate }}"\r\n                          [model]="navigationLinkListForTableRow"\r\n                        ></p-splitButton>\r\n\r\n                        <p-selectButton\r\n                          *ngIf="!airworthinessTableLoading"\r\n                          class="aw-table-action select-button-margin"\r\n                          [(ngModel)]="airworthinessTableVisibilitySelected"\r\n                          [options]="airworthinessTableVisibilityList"\r\n                          (onChange)="onChangeAirworthinessTableVisibility()"\r\n                        ></p-selectButton>\r\n\r\n                        <button\r\n                          *ngIf="!airworthinessTableLoading && airworthinessTableSelection.length === 0"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="exportAirwothinessTable()"\r\n                        >\r\n                          {{ "global.export" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="colgroup" let-columns>\r\n                    <colgroup>\r\n                      <col class="aw-table-checkbox-wrapper" />\r\n                      <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      <col class="row-expand-wrapper" />\r\n                      <col class="row-action-wrapper" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="header" let-columns>\r\n                    <tr>\r\n                      <th class="aw-table-checkbox-wrapper">\r\n                        <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                      </th>\r\n\r\n                      <th\r\n                        pResizableColumn\r\n                        *ngFor="let col of columns"\r\n                        [pSortableColumn]="col.field"\r\n                        [pSortableColumnDisabled]="col.field !== \'potential\'"\r\n                        [ngStyle]="{ \'text-align\': col.alignment }"\r\n                      >\r\n                        <span>\r\n                          {{ componentName + "." + col.field | translate }}\r\n                        </span>\r\n                        <p-sortIcon *ngIf="col.field === \'potential\'" [field]="col.field"></p-sortIcon>\r\n                      </th>\r\n\r\n                      <th class="row-expand-wrapper"></th>\r\n                      <th class="row-action-wrapper"></th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template\r\n                    pTemplate="body"\r\n                    let-rowData\r\n                    let-expanded="expanded"\r\n                    let-columns="columns"\r\n                    let-rowIndex="rowIndex"\r\n                  >\r\n                    <tr\r\n                      *ngIf="\r\n                        airworthinessTableOnlyAlertsVisible\r\n                          ? rowData[\'alert\'] !== undefined &&\r\n                            rowData[\'alert\'] !== null &&\r\n                            (rowData[\'alert\'] === controlConfigConstants.ICON_RED ||\r\n                              rowData[\'alert\'] === controlConfigConstants.ICON_YELLOW)\r\n                          : true\r\n                      "\r\n                      [pSelectableRow]="rowData"\r\n                      [pSelectableRowIndex]="rowIndex"\r\n                    >\r\n                      <td class="aw-table-checkbox-wrapper">\r\n                        <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                      </td>\r\n\r\n                      <td\r\n                        *ngFor="let col of columns"\r\n                        [ngSwitch]="col.field"\r\n                        [ngStyle]="{ \'text-align\': col.alignment }"\r\n                      >\r\n                        <div *ngSwitchCase="\'alert\'">\r\n                          <span pTooltip="{{ rowData[\'_alertTooltip\'] }}" tooltipPosition="top">\r\n                            <div\r\n                              *ngIf="rowData[\'_alertLoading\']"\r\n                              class="lds-hourglass display--flex-row"\r\n                              [ngClass]="{\r\n                                \'flex-row--justify-center\': col.alignment === \'center\',\r\n                                \'flex-row--justify-left\': col.alignment === \'left\',\r\n                                \'flex-row--justify-right\': col.alignment === \'right\'\r\n                              }"\r\n                            ></div>\r\n\r\n                            <span\r\n                              *ngIf="\r\n                                !rowData[\'_alertLoading\'] &&\r\n                                rowData[col.field] !== undefined &&\r\n                                rowData[col.field] !== null &&\r\n                                rowData[col.field] === controlConfigConstants.ICON_GREEN\r\n                              "\r\n                              class="alert alert--ok"\r\n                            >\r\n                              {{ componentName + ".alertOk" | translate }}\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf="\r\n                                !rowData[\'_alertLoading\'] &&\r\n                                rowData[col.field] !== undefined &&\r\n                                rowData[col.field] !== null &&\r\n                                rowData[col.field] === controlConfigConstants.ICON_RED\r\n                              "\r\n                              class="alert alert--nok"\r\n                            >\r\n                              {{ componentName + ".alertNok" | translate }}\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf="\r\n                                !rowData[\'_alertLoading\'] &&\r\n                                rowData[col.field] !== undefined &&\r\n                                rowData[col.field] !== null &&\r\n                                rowData[col.field] === controlConfigConstants.ICON_YELLOW\r\n                              "\r\n                              class="alert alert--warning"\r\n                            >\r\n                              {{ componentName + ".alertWarning" | translate }}\r\n                            </span>\r\n                          </span>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'asset\'" class="table-cell">\r\n                          <span\r\n                            *ngSwitchCase="\'asset\'"\r\n                            pTooltip="{{ rowData[\'_obj\'].counterAlertTooltip }}"\r\n                            tooltipPosition="top"\r\n                          >\r\n                            <i\r\n                              *ngIf="\r\n                                rowData[\'_obj\'].counterAlertStatus !== undefined &&\r\n                                rowData[\'_obj\'].counterAlertStatus !== null &&\r\n                                rowData[\'_obj\'].counterAlertStatus.length > 0 &&\r\n                                (rowData[\'_obj\'].counterAlertStatus === controlConfigConstants.ICON_RED ||\r\n                                  rowData[\'_obj\'].counterAlertStatus === controlConfigConstants.ICON_YELLOW)\r\n                              "\r\n                              class="fa fa-fw fa-exclamation-triangle"\r\n                              aria-hidden="true"\r\n                            ></i>\r\n                            <a (click)="openSubAsset(rowData)">{{ rowData["_obj"].assetRepresentation }}</a>\r\n                          </span>\r\n                          <span class="designation">{{ rowData["designation"] }}</span>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'maintenancePlan\'" class="table-cell">\r\n                          <span pTooltip="{{ rowData[\'_obj\'].maintenanceProgramTooltip }}" tooltipPosition="top">\r\n                            <i\r\n                              *ngIf="\r\n                                rowData[\'_obj\'].maintenanceProgramStatus !== undefined &&\r\n                                rowData[\'_obj\'].maintenanceProgramStatus !== null &&\r\n                                rowData[\'_obj\'].maintenanceProgramStatus.length > 0 &&\r\n                                (rowData[\'_obj\'].maintenanceProgramStatus ===\r\n                                  controlConfigConstants.CUSTOMIZATION_STATUS_WARNING_NO_ALTERNATIVE ||\r\n                                  rowData[\'_obj\'].maintenanceProgramStatus ===\r\n                                    controlConfigConstants.CUSTOMIZATION_STATUS_OK_CUSTOMIZED)\r\n                              "\r\n                              class="fa fa-fw fa-exclamation-triangle"\r\n                              aria-hidden="true"\r\n                            ></i>\r\n                            <a (click)="openAssetMaintenancePlan(rowData[\'_obj\'].bidoEquipment.equipmentCode)">\r\n                              {{ rowData["mp"] }}\r\n                            </a>\r\n                          </span>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'potential\'" class="table-cell">\r\n                          <span pTooltip="{{ rowData[\'_obj\'].remainingEquivalentTooltip }}" tooltipPosition="top">\r\n                            <div\r\n                              *ngIf="rowData[\'_potentialLoading\']"\r\n                              class="lds-hourglass display--flex-row"\r\n                              [ngClass]="{\r\n                                \'flex-row--justify-center\': col.alignment === \'center\',\r\n                                \'flex-row--justify-left\': col.alignment === \'left\',\r\n                                \'flex-row--justify-right\': col.alignment === \'right\'\r\n                              }"\r\n                            ></div>\r\n\r\n                            <i\r\n                              *ngIf="\r\n                                !rowData[\'_potentialLoading\'] &&\r\n                                rowData[\'_obj\'].remainingEquivalentIcon !== undefined &&\r\n                                rowData[\'_obj\'].remainingEquivalentIcon !== null &&\r\n                                rowData[\'_obj\'].remainingEquivalentIcon.length > 0 &&\r\n                                (rowData[\'_obj\'].remainingEquivalentIcon === controlConfigConstants.ICON_RED ||\r\n                                  rowData[\'_obj\'].remainingEquivalentIcon === controlConfigConstants.ICON_YELLOW)\r\n                              "\r\n                              class="fa fa-fw fa-exclamation-triangle"\r\n                              aria-hidden="true"\r\n                            ></i>\r\n                            <span style="font-weight: bold" *ngIf="!rowData[\'_potentialLoading\']">{{\r\n                              rowData[col.field]\r\n                            }}</span>\r\n                          </span>\r\n                          <i\r\n                            ><span>{{ rowData["_obj"].remaining }}</span></i\r\n                          >\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'measures\'" class="table-cell">\r\n                          <span pTooltip="{{ rowData[\'_obj\'].counterTsnTooltip }}" tooltipPosition="top">\r\n                            <i\r\n                              *ngIf="rowData[\'_obj\'].counterTsnIcon === controlConfigConstants.ICON_YELLOW"\r\n                              class="fa fa-fw fa-exclamation-triangle"\r\n                              aria-hidden="true"\r\n                            ></i>\r\n                            {{ airworthinessTableColTsnLabel + ": " + rowData["tsn"] }}\r\n                          </span>\r\n                          <span pTooltip="{{ rowData[\'_obj\'].counterCsnTooltip }}" tooltipPosition="top">\r\n                            <i\r\n                              *ngIf="rowData[\'_obj\'].counterCsnIcon === controlConfigConstants.ICON_YELLOW"\r\n                              class="fa fa-fw fa-exclamation-triangle"\r\n                              aria-hidden="true"\r\n                            ></i>\r\n                            {{ airworthinessTableColCsnLabel + ": " + rowData["csn"] }}\r\n                          </span>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'appliedConfiguration\'" class="table-cell">\r\n                          <div\r\n                            *ngIf="\r\n                              subAssetConfigurationControlMap.get(\r\n                                computeControlKey(rowData.sn, rowData.pnCode)\r\n                              ) as controls\r\n                            "\r\n                          >\r\n                            <div class="control-result">\r\n                              <span class="label">OK: </span>\r\n                              <span\r\n                                class="value"\r\n                                let\r\n                                [ngClass]="{\r\n                                  ok:\r\n                                    controls && controls[\'nok\'] == 0 && controls[\'warning\'] == 0 && controls[\'ok\'] >= 0\r\n                                }"\r\n                              >\r\n                                {{ controls && controls["ok"] }}\r\n                              </span>\r\n                            </div>\r\n                            <div class="control-result">\r\n                              <span class="label">WARNING: </span>\r\n                              <span\r\n                                class="value"\r\n                                [ngClass]="{\r\n                                  warning: controls && controls[\'nok\'] == 0 && controls[\'warning\'] > 0\r\n                                }"\r\n                              >\r\n                                {{ controls && controls["warning"] }}\r\n                              </span>\r\n                            </div>\r\n                            <div class="control-result">\r\n                              <span class="label">NOK: </span>\r\n                              <span\r\n                                class="value"\r\n                                [ngClass]="{\r\n                                  nok: controls && controls[\'nok\'] > 0\r\n                                }"\r\n                              >\r\n                                {{ controls && controls["nok"] }}\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'illustration\'" class="table-cell illustration">\r\n                          <a\r\n                            *ngIf="rowData.illustrationDocument"\r\n                            (click)="showIllustration(rowData.illustrationDocument)"\r\n                          >\r\n                            <img [src]="sanitizeAndGetBase64Prefix(rowData.illustrationDocument)" />\r\n                          </a>\r\n                        </div>\r\n\r\n                        <div *ngSwitchDefault>\r\n                          <span> {{ rowData[col.field] }} </span>\r\n                        </div>\r\n                      </td>\r\n\r\n                      <td class="row-expand-wrapper" [pRowToggler]="rowData">\r\n                        <i\r\n                          class="fa fa-fw aw-icon aw-icon-with-border"\r\n                          [ngClass]="expanded ? \'fa-minus\' : \'fa-plus\'"\r\n                          aria-hidden="true"\r\n                          pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                          tooltipPosition="top"\r\n                          (click)="toggleAirworthinessTableRowDetailsVisibility(rowData)"\r\n                        ></i>\r\n                      </td>\r\n\r\n                      <td class="row-action-wrapper">\r\n                        <i\r\n                          *ngIf="rowData[\'hasChildren\']"\r\n                          class="fa fa-fw fa-chevron-right aw-icon aw-icon-with-border"\r\n                          aria-hidden="true"\r\n                          pTooltip="{{ componentName + \'.goDown\' | translate }}"\r\n                          tooltipPosition="top"\r\n                          (click)="goDownInAirworthinessTable(rowData)"\r\n                        ></i>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="rowexpansion" let-rowData let-columns="columns">\r\n                    <tr class="row-expanded">\r\n                      <td [attr.colspan]="columns.length + 2">\r\n                        <aw-airworthiness-table-remaining-values\r\n                          [equipmentCodeList]="topEquipmentCodeList"\r\n                          [fullTable]="true"\r\n                          [minimumRemainingEquivalentMap]="minimumRemainingEquivalentMap"\r\n                          [potentialUnitSelected]="potentialUnitSelected"\r\n                          [row]="rowData"\r\n                          [simulationCriteria]="simulationCriteria"\r\n                        ></aw-airworthiness-table-remaining-values>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <aw-dialog-control-simulation\r\n      *ngIf="simulationDialogVisible"\r\n      [(display)]="simulationDialogVisible"\r\n      (onValidated)="onSimulate($event)"\r\n    ></aw-dialog-control-simulation>\r\n\r\n    <aw-dialog-airworthiness-table-full-screen\r\n      *ngIf="airworthinessTableFullScreenDialogVisible"\r\n      [(display)]="airworthinessTableFullScreenDialogVisible"\r\n      [(airworthinessTableOnlyAlertsVisible)]="airworthinessTableOnlyAlertsVisible"\r\n      [(airworthinessTableVisibilitySelected)]="airworthinessTableVisibilitySelected"\r\n      [(potentialUnitSelected)]="potentialUnitSelected"\r\n      [airworthinessTableDisplayedRowNb]="airworthinessTableDisplayedRowNb"\r\n      [airworthinessTableVisibilityList]="airworthinessTableVisibilityList"\r\n      [csnLabel]="airworthinessTableColCsnLabel"\r\n      [isAssetViewMode]="isAssetViewMode"\r\n      [navigationLinkList]="navigationLinkListForTableRow"\r\n      [potentialUnitList]="potentialUnitList"\r\n      [table]="airworthinessTable"\r\n      [tsnLabel]="airworthinessTableColTsnLabel"\r\n    ></aw-dialog-airworthiness-table-full-screen>\r\n\r\n    <a-modal class="aw-modal" [(visible)]="currentIllustration">\r\n      <a-header>\r\n        <div class="close-wrapper">\r\n          <i class="aw-icon aw-icon-with-border material-icons" (click)="hideIllustration()">close</i>\r\n        </div>\r\n      </a-header>\r\n\r\n      <a-content>\r\n        <img *ngIf="currentIllustration" [src]="currentIllustration" />\r\n      </a-content>\r\n    </a-modal>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.component.scss':
      /*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.component.scss ***!
  \**********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host #airworthiness-control-form ::ng-deep .table-cell {\n  display: flex;\n  flex-direction: column; }\n\n:host #airworthiness-control-form ::ng-deep .table-cell.illustration img {\n    max-height: 6rem; }\n\n:host #airworthiness-control-form ::ng-deep .table-cell.illustration a {\n    cursor: pointer;\n    border-bottom-color: transparent; }\n\n:host #airworthiness-control-form ::ng-deep .table-cell .label {\n    min-width: 2.5rem;\n    display: inline-block; }\n\n:host #airworthiness-control-form ::ng-deep .table-cell .designation {\n    font-style: italic;\n    white-space: normal; }\n\n:host #airworthiness-control-form .grid-cell-detail .form-control-potential-unit {\n  width: 4rem; }\n\n:host #airworthiness-control-form .grid-cell-state-simulation {\n  background-color: #ffc107;\n  padding: 0; }\n\n:host #airworthiness-control-form .grid-cell-state-simulation .grid-cell-title {\n    color: #000; }\n\n:host #airworthiness-control-form .grid-cell-state-simulation .simulation-criterion:not(:last-of-type)::after {\n    content: " | "; }\n\n:host #airworthiness-control-form .grid-cell-remaining-values {\n  min-height: 14rem; }\n\n:host #airworthiness-control-form .grid-cell-summary {\n  min-height: 12rem; }\n\n:host #airworthiness-control-form .grid-cell-summary .chart-container {\n    display: flex;\n    flex-direction: row; }\n\n@media screen and (max-width: 1280px) {\n      :host #airworthiness-control-form .grid-cell-summary .chart-container {\n        flex-direction: column; } }\n\n:host #airworthiness-control-form .grid-cell-summary .chart-container .chart-legend {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      margin-left: 8px; }\n\n:host #airworthiness-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label {\n        display: flex;\n        flex-direction: row;\n        align-items: center; }\n\n:host #airworthiness-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n          height: 0.75rem;\n          margin-right: 8px;\n          width: 2rem; }\n\n:host #airworthiness-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.airworthy {\n            background-color: #4caf50; }\n\n:host #airworthiness-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.airworthy-with-alerts {\n            background-color: #ffc107; }\n\n:host #airworthiness-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-airworthy {\n            background-color: #f6685e; }\n\n:host #airworthiness-control-form .grid-cell-summary .chart-container .chart-legend .chart-value {\n        font-weight: 700;\n        margin-left: 8px; }\n\n:host #airworthiness-control-form .grid-cell-summary .chart-container .chart-wrapper {\n      position: relative;\n      height: 8rem;\n      width: 10rem; }\n\n:host #airworthiness-control-form div.control-result span {\n  padding: calc(8px - 4px); }\n\n:host #airworthiness-control-form div.control-result span.value {\n    background-color: #f0f0f0;\n    text-align: center;\n    float: right;\n    min-width: 3em;\n    font-weight: normal !important;\n    margin-right: 2em; }\n\n:host #airworthiness-control-form div.control-result span.value.ok {\n      background-color: #4caf50; }\n\n:host #airworthiness-control-form div.control-result span.value.warning {\n      background-color: #ffc107; }\n\n:host #airworthiness-control-form div.control-result span.value.nok {\n      background-color: #f6685e; }\n\n:host #airworthiness-control-form .select-button-margin {\n  margin-right: 5px; }\n\n:host #airworthiness-control-form ::ng-deep .aw-modal .modal .modal__content {\n  overflow-x: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9haXJ3b3J0aGluZXNzLWNvbnRyb2wtZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX21vZGlmaWVycy5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2FpcndvcnRoaW5lc3MtY29udHJvbC9mb3JtL2FpcndvcnRoaW5lc3MtY29udHJvbC1mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxcYWlyd29ydGhpbmVzcy1jb250cm9sXFxmb3JtXFxhaXJ3b3J0aGluZXNzLWNvbnRyb2wtZm9ybVxcYWlyd29ydGhpbmVzcy1jb250cm9sLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvYWlyd29ydGhpbmVzcy1jb250cm9sL2Zvcm0vYWlyd29ydGhpbmVzcy1jb250cm9sLWZvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9haXJ3b3J0aGluZXNzLWNvbnRyb2wtZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5Q0FBaUM7RUFBakMsc0NBQWlDO0VBQWpDLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLG9DQUE0QjtLQUE1QixpQ0FBNEI7TUFBNUIsZ0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQTs7QUFLYjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLHNDQUFzQyxFQUFBOztBQ3pIeEM7RUNjRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FEZnhCO0lBS00sZ0JBQWdCLEVBQUE7O0FBTHRCO0lBU00sZUFBZTtJQUNmLGdDQUFnQyxFQUFBOztBQVZ0QztJQWNNLGlCQUFpQjtJQUNqQixxQkFBcUIsRUFBQTs7QUFmM0I7SUFtQk0sa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBOztBQXBCekI7RUEwQk0sV0FBVyxFQUFBOztBQTFCakI7RUErQkkseUJFYlk7RUZjWixVQUFVLEVBQUE7O0FBaENkO0lBbUNNLFdFckNtQixFQUFBOztBRkV6QjtJQXVDTSxjQUFjLEVBQUE7O0FBdkNwQjtFQTRDSSxpQkFBaUIsRUFBQTs7QUE1Q3JCO0VBZ0RJLGlCQUFpQixFQUFBOztBQWhEckI7SUNtQkUsYUFBYTtJQUNiLG1CQUFtQixFQUFBOztBRGlDZjtNQXJETjtRQXNEUSxzQkFBc0IsRUFBQSxFQTRDekI7O0FBbEdMO01DY0UsYUFBYTtNQUNiLHNCQUFzQjtNRDZDaEIsdUJBQXVCO01BQ3ZCLGdCRXJCVSxFQUFBOztBRnhDbEI7UUNtQkUsYUFBYTtRQUNiLG1CQUFtQjtRRDhDWCxtQkFBbUIsRUFBQTs7QUFsRTdCO1VBcUVZLGVBQWU7VUFDZixpQkU5Qk07VUYrQk4sV0FBVyxFQUFBOztBQXZFdkI7WUEwRWMseUJFekRRLEVBQUE7O0FGakJ0QjtZQThFYyx5QkU1REUsRUFBQTs7QUZsQmhCO1lBa0ZjLHlCRTlETSxFQUFBOztBRnBCcEI7UUF3RlUsZ0JBQWdCO1FBQ2hCLGdCRWpEUSxFQUFBOztBRnhDbEI7TUE4RlEsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixZQUFZLEVBQUE7O0FBaEdwQjtFQXVHTSx3QkFBcUMsRUFBQTs7QUF2RzNDO0lBMEdRLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsaUJBQWlCLEVBQUE7O0FBL0d6QjtNQWtIVSx5QkVqR1ksRUFBQTs7QUZqQnRCO01Bc0hVLHlCRXBHTSxFQUFBOztBRmxCaEI7TUEwSFUseUJFdEdVLEVBQUE7O0FGcEJwQjtFQWlJSSxpQkFBaUIsRUFBQTs7QUFqSXJCO0VBdUlRLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9haXJ3b3J0aGluZXNzLWNvbnRyb2wtZm9ybS9haXJ3b3J0aGluZXNzLWNvbnRyb2wtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LS1mbGV4LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLWZsZXgtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzcGxheS0tbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LS0xMDAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1pbi13aWR0aC0tZml0LWNvbnRlbnQge1xyXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvc2l0aW9uLS1yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwteS0tbm9uZSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LS11bnNlbGVjdGFibGUge1xyXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aXNpYmlsaXR5LS1oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtLTEwIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTIwIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTMwIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTQwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTUwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTYwIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTcwIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTgwIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTkwIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5mbGV4LS0xIHtcclxuICBmbGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0yIHtcclxuICBmbGV4OiAyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0zIHtcclxuICBmbGV4OiAzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS00IHtcclxuICBmbGV4OiA0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS01IHtcclxuICBmbGV4OiA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS1hdXRvIHtcclxuICBmbGV4OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tZW5kIHtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1zdGFydCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWVuZCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktc3RhcnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwibW9kaWZpZXJzXCI7XHJcblxyXG46aG9zdCAjYWlyd29ydGhpbmVzcy1jb250cm9sLWZvcm0ge1xyXG4gIDo6bmctZGVlcCAudGFibGUtY2VsbCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICYuaWxsdXN0cmF0aW9uIGltZyB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDZyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi5pbGx1c3RyYXRpb24gYSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgbWluLXdpZHRoOiAyLjVyZW07XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuZGVzaWduYXRpb24ge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLWRldGFpbCB7XHJcbiAgICAuZm9ybS1jb250cm9sLXBvdGVudGlhbC11bml0IHtcclxuICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLXN0YXRlLXNpbXVsYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgLmdyaWQtY2VsbC10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaW11bGF0aW9uLWNyaXRlcmlvbjpub3QoOmxhc3Qtb2YtdHlwZSk6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCIgfCBcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtcmVtYWluaW5nLXZhbHVlcyB7XHJcbiAgICBtaW4taGVpZ2h0OiAxNHJlbTtcclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtc3VtbWFyeSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMnJlbTtcclxuXHJcbiAgICAuY2hhcnQtY29udGFpbmVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGFydC1sZWdlbmQge1xyXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcblxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAuY2hhcnQtbGVnZW5kLWxhYmVsIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAuY2hhcnQtbGVnZW5kLWxhYmVsLWNvbG9yIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwLjc1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG5cclxuICAgICAgICAgICAgJi5haXJ3b3J0aHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYWlyd29ydGh5LXdpdGgtYWxlcnRzIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLm5vdC1haXJ3b3J0aHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhcnQtdmFsdWUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoYXJ0LXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXYuY29udHJvbC1yZXN1bHQge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmc6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAtIDRweCk7XHJcblxyXG4gICAgICAmLnZhbHVlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG5cclxuICAgICAgICAmLm9rIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLndhcm5pbmcge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYubm9rIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlbGVjdC1idXR0b24tbWFyZ2luIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5hdy1tb2RhbCB7XHJcbiAgICAubW9kYWwge1xyXG4gICAgICAubW9kYWxfX2NvbnRlbnQge1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVdGlscyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gYnV0dG9uLWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCAkY29sb3IsICRib3JkZXItY29sb3I6IG51bGwpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyLFxyXG4gICY6bm90KDpkaXNhYmxlZCkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogaWYoJGJvcmRlci1jb2xvciA9PSBudWxsLCAkY29sb3IsICRib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgtY29sdW1uKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtcm93KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQG1peGluIGlucHV0KCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1kaXNhYmxlZCgpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZm9jdXMoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1ob3ZlcigpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlYXJjaC1jcml0ZXJpYS1jb250YWluZXIge1xyXG4gIC5hZHZhbmNlZC1jcml0ZXJpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgICYucmVxdWlyZWQge1xyXG4gICAgICBAaW5jbHVkZSBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCgpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHcmlkIGZvcm0gY29udHJvbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViTWVkaXVtXCI7XHJcblxyXG4gICYgPiBpbnB1dCArIHAtbWVzc2FnZSA+IC51aS1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyNTUsIDI1NSwgMjU1KSA2MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAuYXctaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuLFxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG5cclxuICAgICAgJi5hdy1jYWxlbmRhciAudWktaW5wdXR0ZXh0LFxyXG4gICAgICAmLmF3LWRyb3Bkb3duIC51aS1kcm9wZG93bixcclxuICAgICAgJi5hdy1pbnB1dCxcclxuICAgICAgJi5hdy10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctY2FsZW5kYXIge1xyXG4gICAgICAvLyBGSVhNRTogZml4IGFuIFVJIGlzc3VlIG9uIFByaW1lTkcgY2FsZW5kYXIgY29tcG9uZW50OyB0byByZW1vdmUgd2hlbiBpc3N1ZSB3aWxsIGJlIGZpeGVkIHVwc3RyZWFtXHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAuYXctaWNvbjpub3QoLnJlYWQtb25seS1saW5rKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIG5vbmVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW5pbXAsXHJcbiAgICAuYnRuLWV4dGVybmFsLWxpbmstd3JhcHBlcixcclxuICAgIC5idG4tY2xlYXItd3JhcHBlcixcclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlcixcclxuICAgIC5idG4tc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgICAuYXctZmlsZXVwbG9hZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudWktYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWNsZWFyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtcmFkaW9idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAmID4gLmF3LXJhZGlvYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jYWxlbmRhciB7XHJcbiAgJi51aS1pbnB1dHdyYXBwZXItZm9jdXMge1xyXG4gICAgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkY2hlY2tib3gtaGVpZ2h0O1xyXG4gIHdpZHRoOiAkY2hlY2tib3gtaGVpZ2h0O1xyXG5cclxuICAudWktY2hrYm94IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1jaGtib3gtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZHJvcGRvd24ge1xyXG4gIC51aS1kcm9wZG93biB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1mb2N1cyB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbixcclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gICAgICByaWdodDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDEuNzVyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5maXhlZC13aWR0aCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZpbGV1cGxvYWQge1xyXG4gIEBleHRlbmQgLmF3LWJ0bjtcclxuXHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnVpLWZpbGV1cGxvYWQtY2hvb3NlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudWktYnV0dG9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWlucHV0KCkge1xyXG4gIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZXh0YXJlYSB7XHJcbiAgQGluY2x1ZGUgZ3JpZC1pbnB1dCgpO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1yYWRpb2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuICB3aWR0aDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuXHJcbiAgLnVpLXJhZGlvYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAudWktcmFkaW9idXR0b24taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGNhbGVuZGFyLXBhbmVsIHtcclxuICAudWktZGF0ZXBpY2tlcjpub3QoLnVpLWRhdGVwaWNrZXItaW5saW5lKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcm9wZG93bi1wYW5lbCB7XHJcbiAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciAudWktZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgIC51aS1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.component.ts':
      /*!********************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.component.ts ***!
  \********************************************************************************************************************************/
      /*! exports provided: AirworthinessControlFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AirworthinessControlFormComponent',
          function() {
            return AirworthinessControlFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! lodash-es */ './node_modules/lodash-es/lodash.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/constants/bire-unit-measure-constants */ './src/app/shared/constants/bire-unit-measure-constants.ts'
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
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../shared/utils/bido-equipment-utils */ './src/app/shared/utils/bido-equipment-utils.ts'
        );
        /* harmony import */ var _shared_utils_comparator_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../../shared/utils/comparator-utils */ './src/app/shared/utils/comparator-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _airworthiness_table_remaining_values_airworthiness_table_remaining_values_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./airworthiness-table-remaining-values/airworthiness-table-remaining-values.component */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.ts'
        );
        /* harmony import */ var _enums_airworthiness_table_visibility_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./enums/airworthiness-table-visibility.enum */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/enums/airworthiness-table-visibility.enum.ts'
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

        var ViewMode;
        (function(ViewMode) {
          ViewMode[(ViewMode['Asset'] = 0)] = 'Asset';
          ViewMode[(ViewMode['Fleet'] = 1)] = 'Fleet';
        })(ViewMode || (ViewMode = {}));
        var AirworthinessControlFormComponent = /** @class */ (function(_super) {
          __extends(AirworthinessControlFormComponent, _super);
          function AirworthinessControlFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            dateService,
            sessionService,
            airworthinessControlFormService,
            exportService,
            propertiesService,
            translateService,
            fileService
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
            _this.dateService = dateService;
            _this.sessionService = sessionService;
            _this.airworthinessControlFormService = airworthinessControlFormService;
            _this.exportService = exportService;
            _this.propertiesService = propertiesService;
            _this.translateService = translateService;
            _this.fileService = fileService;
            _this.subAssetConfigurationControlMap = new Map();
            _this.componentName = 'AirworthinessControlFormComponent';
            _this.controlConfigConstants =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants'];
            _this.setAirwothinessTableColumnList();
            _this.setAirworthinessTableVisibilityList();
            _this.setNavigationLinkList();
            _this.setNavigationLinkListForTableRow();
            _this.setPotentialUnitList();
            _this.init();
            _this.initChart();
            _this.loadAirworthinessTableColumnLabelList();
            return _this;
          }
          AirworthinessControlFormComponent.prototype.getTranslateKey = function(key) {
            return _super.prototype.getTranslateKey.call(this, key, this.componentName);
          };
          AirworthinessControlFormComponent.prototype.ngOnDestroy = function() {
            var input = {
              equipmentCodeList: this.topEquipmentCodeList
            };
            this.airworthinessControlFormService.clearAirworthinessControlCache(input).subscribe();
          };
          AirworthinessControlFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.updateOpenMode(this.componentData.openMode);
            if (!this.componentData.objectId) {
              this.messageService.showErrorMessage('global.errorOnNavigate');
            } else {
              // Init scope
              this.scope = this.serializationService.deserialize(this.componentData.objectId) || [];
              this.topAssetTypeList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__['ListUtils']
                .orEmpty(this.scope.functionList)
                .filter(function(v, i, a) {
                  return a.indexOf(v) === i;
                })
                .join(', ');
              this.topEquipmentCodeList = this.scope.equipmentCodeList;
              this.topFamilyVariantList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__['ListUtils']
                .orEmpty(this.scope.familyVariantList)
                .filter(function(v, i, a) {
                  return a.indexOf(v) === i;
                })
                .join(', ');
              this.topWarehouse = this.scope.warehouse;
              this.simulationCriteria = this.scope.simulationCriteria;
              this.viewMode = this.topEquipmentCodeList.length === 1 ? ViewMode.Asset : ViewMode.Fleet;
              // Load table
              this.load();
              if (this.isAssetViewMode) {
                // Load asset and display context from selected asset
                this.loadAsset();
              } else {
                this.displayComponentContext(this.topFamilyVariantList, this.isCreateOpenMode);
              }
            }
          };
          Object.defineProperty(AirworthinessControlFormComponent.prototype, 'isAssetAircraft', {
            get: function() {
              return (
                !!this.asset &&
                !!this.asset.equipmentFunction &&
                this.asset.equipmentFunction ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .ITEM_FAMILY_CODE_AIRCRAFT_KEY
              );
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(AirworthinessControlFormComponent.prototype, 'isAssetEngine', {
            get: function() {
              return (
                !!this.asset &&
                !!this.asset.equipmentFunction &&
                this.asset.equipmentFunction ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .ITEM_FAMILY_CODE_ENGINE_KEY
              );
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(AirworthinessControlFormComponent.prototype, 'isAssetEquipment', {
            get: function() {
              return !!this.asset && !this.isAssetAircraft && !this.isAssetEngine;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(AirworthinessControlFormComponent.prototype, 'isAssetViewMode', {
            get: function() {
              return this.viewMode === ViewMode.Asset;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(AirworthinessControlFormComponent.prototype, 'isFleetViewMode', {
            get: function() {
              return this.viewMode === ViewMode.Fleet;
            },
            enumerable: true,
            configurable: true
          });
          AirworthinessControlFormComponent.prototype.exportAirwothinessTable = function() {
            var _this = this;
            var translateKey = AirworthinessControlFormComponent.EXPORT_TRANSLATE_KEY;
            var aircraftStatusKey = _super.prototype.getTranslateKey.call(this, 'aircraftStatus', translateKey);
            var alertNokKey = _super.prototype.getTranslateKey.call(this, 'alertNok', translateKey);
            var alertOkKey = _super.prototype.getTranslateKey.call(this, 'alertOk', translateKey);
            var alertWarningKey = _super.prototype.getTranslateKey.call(this, 'alertWarning', translateKey);
            var assetKey = _super.prototype.getTranslateKey.call(this, 'asset', translateKey);
            var designationKey = _super.prototype.getTranslateKey.call(this, 'designation', translateKey);
            var maintenanceProgramKey = _super.prototype.getTranslateKey.call(this, 'maintenanceProgram', translateKey);
            var potentialKey = _super.prototype.getTranslateKey.call(this, 'potential', translateKey);
            var statusKey = _super.prototype.getTranslateKey.call(this, 'status', translateKey);
            var fileNamePrefixKey = _super.prototype.getTranslateKey.call(this, 'fileNamePrefix', translateKey);
            this.translateService
              .get([
                aircraftStatusKey,
                alertNokKey,
                alertOkKey,
                alertWarningKey,
                assetKey,
                designationKey,
                maintenanceProgramKey,
                potentialKey,
                statusKey,
                fileNamePrefixKey
              ])
              .subscribe(function(results) {
                if (results) {
                  var listToExport = _this.airworthinessTable.map(function(element) {
                    var _a;
                    var alert;
                    switch (element.alert) {
                      case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__[
                        'ControlConfigConstants'
                      ].ICON_GREEN:
                        alert = results[alertOkKey];
                        break;
                      case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__[
                        'ControlConfigConstants'
                      ].ICON_RED:
                        alert = results[alertNokKey];
                        break;
                      case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__[
                        'ControlConfigConstants'
                      ].ICON_YELLOW:
                        alert = results[alertWarningKey];
                        break;
                      default:
                        alert = '';
                        break;
                    }
                    return (
                      (_a = {}),
                      (_a[results[statusKey]] = alert),
                      (_a[results[assetKey]] = element.asset),
                      (_a[results[designationKey]] = element.designation),
                      (_a[results[potentialKey]] = element.potential),
                      (_a[_this.airworthinessTableColTsnLabel] = element.tsn),
                      (_a[_this.airworthinessTableColCsnLabel] = element.csn),
                      (_a[results[aircraftStatusKey]] = element.status),
                      (_a[results[maintenanceProgramKey]] = element.mp),
                      _a
                    );
                  });
                  var fileNameToExport =
                    results[fileNamePrefixKey] + '__' + _this.dateService.dateWithHourToString(new Date());
                  var exportOpts = {
                    header: [
                      results[statusKey],
                      results[assetKey],
                      results[designationKey],
                      results[potentialKey],
                      _this.airworthinessTableColTsnLabel,
                      _this.airworthinessTableColCsnLabel,
                      results[aircraftStatusKey],
                      results[maintenanceProgramKey]
                    ]
                  };
                  _this.exportService.toExcel(listToExport, fileNameToExport, undefined, exportOpts);
                }
              });
          };
          AirworthinessControlFormComponent.prototype.goDownInAirworthinessTable = function(row) {
            var objectId = {
              equipmentCodeList: [row._obj.bidoEquipment.equipmentCode],
              simulationCriteria: this.simulationCriteria,
              _parent: this.scope
            };
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AirworthinessControlFormComponent.prototype.goUpInAirworthinessTable = function() {
            if (!!this.scope._parent) {
              var componentId =
                this.scope._parent.equipmentCodeList.length === 1
                  ? _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                      .MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM
                  : _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                      .MAI_AIRWORTHINESS_CONTROL_FOR_FLEET_FORM;
              var data = {
                componentId: componentId,
                id: this.tabService.generateId(),
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
                objectId: this.serializationService.serialize(this.scope._parent)
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          AirworthinessControlFormComponent.prototype.onChangeAirworthinessTableVisibility = function() {
            this.airworthinessTableOnlyAlertsVisible =
              this.airworthinessTableVisibilitySelected ===
              _enums_airworthiness_table_visibility_enum__WEBPACK_IMPORTED_MODULE_18__['AirworthinessTableVisibility']
                .OnlyAlerts;
            if (this.airworthinessTableOnlyAlertsVisible) {
              this.airworthinessTableDisplayedRowNb = this.airworthinessTable.filter(function(elt) {
                return (
                  elt.alert !== undefined &&
                  elt.alert !== null &&
                  (elt.alert ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                      .ICON_RED ||
                    elt.alert ===
                      _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                        .ICON_YELLOW)
                );
              }).length;
            }
          };
          AirworthinessControlFormComponent.prototype.onSimulate = function(criteria) {
            this.simulationCriteria = criteria;
            this.reloadFromCache();
          };
          AirworthinessControlFormComponent.prototype.openAssetMaintenancePlan = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
              componentId: 'AssetMaintenancePlanComponent',
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AirworthinessControlFormComponent.prototype.openControlConfiguration = function() {
            if (this.asset && this.asset.equipmentCode) {
              var objectId = {
                equipmentCodeList: [this.asset.equipmentCode]
              };
              var data = {
                id: this.tabService.generateId(),
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                    .MAI_CONFIGURATION_CONTROL,
                objectId: this.serializationService.serialize(objectId)
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          AirworthinessControlFormComponent.prototype.openSubAsset = function(subAssembly) {
            if (subAssembly._obj.bidoEquipment.equipmentCode && subAssembly._obj.bidoEquipment.equipmentFunction) {
              switch (subAssembly._obj.bidoEquipment.equipmentFunction) {
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_AIRCRAFT_KEY:
                  this.openAircraft(subAssembly._obj.bidoEquipment.equipmentCode);
                  break;
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_ENGINE_KEY:
                  this.openEngine(subAssembly._obj.bidoEquipment.equipmentCode);
                  break;
                default:
                  this.openEquipment(subAssembly._obj.bidoEquipment.equipmentCode);
                  break;
              }
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnOpenSubAssembly'));
            }
          };
          AirworthinessControlFormComponent.prototype.openTopAsset = function() {
            var assetCode = this.topEquipmentCode;
            if (this.isAssetAircraft) {
              this.openAircraft(assetCode);
            } else if (this.isAssetEngine) {
              this.openEngine(assetCode);
            } else {
              this.openEquipment(assetCode);
            }
          };
          AirworthinessControlFormComponent.prototype.reload = function() {
            var _this = this;
            var input = {
              equipmentCodeList: this.topEquipmentCodeList
            };
            this.airworthinessControlFormService.clearAirworthinessControlCache(input).subscribe(function() {
              _this.load();
              _this.loadConfigurationControl();
            });
          };
          AirworthinessControlFormComponent.prototype.resetSimulation = function() {
            this.simulationCriteria = undefined;
            this.reloadFromCache();
          };
          AirworthinessControlFormComponent.prototype.showAirworthinessTableFullScreen = function() {
            this.airworthinessTableFullScreenDialogVisible = true;
          };
          AirworthinessControlFormComponent.prototype.simulate = function() {
            this.simulationDialogVisible = true;
          };
          AirworthinessControlFormComponent.prototype.toggleAirworthinessTableRowDetailsVisibility = function(row) {
            row._expand = !row._expand;
          };
          AirworthinessControlFormComponent.prototype.clearChartData = function() {
            this.chartData.datasets[0].data = [0, 0, 0];
            this.airworthyEquipmentNb = 0;
            this.airworthyWithAlertEquipmentNb = 0;
            this.notAirworthyEquipmentNb = 0;
          };
          AirworthinessControlFormComponent.prototype.computeGlobalAlertForEachTopEquipment = function(
            topEquipmentList
          ) {
            var _this = this;
            this.clearChartData();
            topEquipmentList.forEach(function(equipment) {
              equipment._alertLoading = true;
            });
            this.togglePotentialLoadingIndicator(true);
            var observables = topEquipmentList.map(function(equipment) {
              var input = {
                equipmentCodeList: _this.topEquipmentCodeList,
                simulation: _this.simulationCriteria !== undefined,
                simulationCyclesValue: _this.simulationCriteria ? _this.simulationCriteria.inCycles : undefined,
                simulationDateValue: _this.simulationCriteria ? _this.simulationCriteria.atDate : undefined,
                simulationHoursValue: _this.simulationCriteria ? _this.simulationCriteria.inHours : undefined,
                equipmentToCheck: equipment._obj.bidoEquipment.equipmentCode
              };
              return _this.airworthinessControlFormService.checkEquipmentForAirworthinessControl(input);
            });
            rxjs__WEBPACK_IMPORTED_MODULE_2__['merge']
              .apply(void 0, __spread(observables))
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                  _this.updateChartData();
                  _this.setPotentialForAllEquipment(_this.airworthinessTreeTable);
                  _this.globalAlertListLoading = false;
                })
              )
              .subscribe(function(result) {
                _this.loadConfigurationControl(result.bidoEquipment);
                var matchingEquipment = topEquipmentList.find(function(equipment) {
                  return equipment._obj.bidoEquipment.equipmentCode === result.bidoEquipment.equipmentCode;
                });
                if (!!matchingEquipment) {
                  matchingEquipment._alertLoading = false;
                  matchingEquipment.alert = result.globalAirworthinessStatus;
                }
              });
          };
          AirworthinessControlFormComponent.prototype.createAirworthinessRow = function(elt) {
            var bidoEquipment = elt.bidoEquipment;
            var airworthinessRow = {
              alert: elt.globalAirworthinessStatus,
              asset: _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_12__[
                'BidoEquipmentUtils'
              ].createAssetName(bidoEquipment),
              csn: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].orEmpty(elt.counterCsn),
              designation: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].orEmpty(
                elt.assetDesignation
              ),
              mp: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].orEmpty(
                elt.maintenanceProgram
              ),
              nextWorkPackage: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].orEmpty(
                elt.nextWorkPackage
              ),
              potential: '',
              status: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].orEmpty(elt.status),
              tsn: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].orEmpty(elt.counterTsn),
              hasChildren: elt.children.length > 0,
              pnCode: bidoEquipment.pnCode ? bidoEquipment.pnCode : '',
              sn: bidoEquipment.sn ? bidoEquipment.sn : '',
              _id: bidoEquipment.equipmentCode,
              _obj: __assign({}, elt, {
                assetRepresentation: _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_12__[
                  'BidoEquipmentUtils'
                ].createAssetRepresentation(bidoEquipment)
              }),
              _alertLoading: false,
              _alertTooltip: '',
              _expand: false,
              _potentialLoading: false
            };
            // TODO: make only one call to retrieve all attached documents
            // if (
            //   bidoEquipment &&
            //   bidoEquipment.familyVariantCode &&
            //   bidoEquipment.section &&
            //   bidoEquipment.sheet &&
            //   bidoEquipment.marks &&
            //   bidoEquipment.subject &&
            //   bidoEquipment.chapter
            // ) {
            //   const familyCodeFound = bidoEquipment.familyVariantCode.split('-')[0];
            //   const variantCodeFound = bidoEquipment.familyVariantCode.split('-')[1];
            //   if (familyCodeFound && variantCodeFound) {
            //     const bireItemDtoId = {
            //       familyCode: familyCodeFound,
            //       chapter: bidoEquipment.chapter,
            //       subject: bidoEquipment.subject,
            //       variantCode: variantCodeFound,
            //       section: bidoEquipment.section,
            //       sheet: bidoEquipment.sheet,
            //       marks: bidoEquipment.marks,
            //       structureType: AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY
            //     };
            //     this.fileService
            //       .findIllustration(bireItemDtoId, bidoEquipment)
            //       .subscribe((document) => (airworthinessRow.illustrationDocument = document));
            //   }
            // }
            return airworthinessRow;
          };
          AirworthinessControlFormComponent.prototype.createAllAirworhtinessRow = function(list) {
            var _this = this;
            if (list.length > 0) {
              list.forEach(function(elt) {
                _this.airworthinessMap.set(elt.bidoEquipment.equipmentCode, _this.createAirworthinessRow(elt));
                _this.createAllAirworhtinessRow(elt.children);
              });
            }
          };
          AirworthinessControlFormComponent.prototype.init = function() {
            this.airworthinessMap = new Map();
            this.airworthinessTable = [];
            this.airworthinessTableDisplayedRowNb = 0;
            this.airworthinessTableFullScreenDialogVisible = false;
            this.airworthinessTableOnlyAlertsVisible = false;
            this.airworthinessTableLoading = false;
            this.airworthinessTableSelection = [];
            this.airworthinessTableVisibilitySelected =
              _enums_airworthiness_table_visibility_enum__WEBPACK_IMPORTED_MODULE_18__[
                'AirworthinessTableVisibility'
              ].All;
            this.airworthinessTreeTable = [];
            this.asset = undefined;
            this.assetAirworthiness = undefined;
            this.configurationControlTable = [];
            this.configurationControlTableLoading = false;
            this.globalAlertListLoading = false;
            this.minimumRemainingEquivalentMap = new Map();
            this.potentialUnitSelected =
              _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_6__[
                'BireUnitMeasureConstants'
              ].HOUR;
            this.simulationCriteria = undefined;
            this.simulationDialogVisible = false;
            this.topAssetTypeList = '';
            this.topEquipmentCode = undefined;
            this.topEquipmentCodeList = [];
            this.topFamilyVariantList = '';
            this.topWarehouse = undefined;
          };
          AirworthinessControlFormComponent.prototype.initChart = function() {
            this.chartType = 'pie';
            this.chartVisible = false;
            this.chartData = {
              datasets: [
                {
                  data: [0, 0, 0],
                  backgroundColor: [
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants'].COLOR_GREEN,
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants'].COLOR_ORANGE,
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants'].COLOR_RED
                  ],
                  hoverBackgroundColor: [
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants'].COLOR_GREEN,
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants'].COLOR_ORANGE,
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants'].COLOR_RED
                  ]
                }
              ],
              labels: []
            };
            this.airworthyEquipmentNb = 0;
            this.airworthyWithAlertEquipmentNb = 0;
            this.notAirworthyEquipmentNb = 0;
            this.setChartLabels();
            this.setChartOptions();
          };
          AirworthinessControlFormComponent.prototype.load = function() {
            var _this = this;
            this.airworthinessTableLoading = true;
            this.airworthinessTable = [];
            this.assetAirworthiness = undefined;
            this.chartVisible = false;
            this.globalAlertListLoading = true;
            this.topEquipmentCode = undefined;
            this.clearChartData();
            var airworthinessTableParams = {
              equipmentCodeList: this.topEquipmentCodeList,
              simulation: this.simulationCriteria !== undefined,
              simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
              simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
              simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
              unitEquivalent: this.potentialUnitSelected
            };
            this.airworthinessControlFormService
              .generateAirworthinessControlTable(airworthinessTableParams)
              .subscribe(function(results) {
                _this.airworthinessTableLoading = false;
                _this.airworthinessTreeTable = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__['ListUtils']
                  .orEmpty(results)
                  .filter(function(elt) {
                    return (
                      elt.bidoEquipment &&
                      !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].isNullOrEmpty(
                        elt.bidoEquipment.equipmentCode
                      )
                    );
                  });
                _this.createAllAirworhtinessRow(_this.airworthinessTreeTable);
                // In asset view mode, show sub assemblies
                if (_this.isAssetViewMode) {
                  _this.topEquipmentCode = _this.airworthinessTreeTable[0].bidoEquipment.equipmentCode;
                  var topEquipment = _this.airworthinessMap.get(_this.topEquipmentCode);
                  _this.airworthinessTable = _this.airworthinessTreeTable[0].children.map(function(elt) {
                    return _this.airworthinessMap.get(elt.bidoEquipment.equipmentCode);
                  });
                  _this.assetAirworthiness = _this.airworthinessMap.get(_this.topEquipmentCode);
                  _this.computeGlobalAlertForEachTopEquipment([topEquipment]);
                } else {
                  _this.airworthinessTable = _this.airworthinessTreeTable.map(function(elt) {
                    return _this.airworthinessMap.get(elt.bidoEquipment.equipmentCode);
                  });
                  _this.computeGlobalAlertForEachTopEquipment(_this.airworthinessTable);
                }
              });
          };
          AirworthinessControlFormComponent.prototype.loadAirworthinessTableColumnLabelList = function() {
            var _this = this;
            var observables = [
              this.airworthinessControlFormService.getCsnLabelForAirworthinessControl(),
              this.airworthinessControlFormService.getTsnLabelForAirworthinessControl()
            ];
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(observables).subscribe(function(_a) {
              var _b = __read(_a, 2),
                cycleBireMeasureReferenceLabel = _b[0],
                timeBireMeasureReferenceLabel = _b[1];
              _this.airworthinessTableColCsnLabel = cycleBireMeasureReferenceLabel;
              _this.airworthinessTableColTsnLabel = timeBireMeasureReferenceLabel;
            });
          };
          AirworthinessControlFormComponent.prototype.loadAsset = function() {
            var _this = this;
            var input = {
              equipmentCode: this.topEquipmentCodeList[0]
            };
            this.airworthinessControlFormService.getEquipment(input).subscribe(function(result) {
              _this.asset = result;
              _this.setComponentContextForAsset();
            });
          };
          AirworthinessControlFormComponent.prototype.loadConfigurationControl = function(bidoEquipmentDTO) {
            var _this = this;
            var input = {
              checkConfiguration: true,
              checkFl: true,
              checkLogbook: true,
              checkMel: true,
              checkPotential: true,
              checkReferential: true,
              checkStructure: true,
              equipmentCode: '',
              withAllCounters: true,
              withFunctionalLocations: true,
              withMelFlag: true
            };
            if (this.isAssetViewMode) {
              this.configurationControlTable = [];
              this.configurationControlTableLoading = true;
              input = __assign({}, input, { equipmentCode: this.asset ? this.asset.equipmentCode || '' : '' });
              this.airworthinessControlFormService.controlConfiguration(input).subscribe(function(result) {
                _this.configurationControlTable = [
                  {
                    ok: _this.computeConfigurationControl(
                      result,
                      _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                        .ICON_GREEN,
                      'ok'
                    ),
                    warning: _this.computeConfigurationControl(
                      result,
                      _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                        .ICON_YELLOW,
                      'warning'
                    ),
                    nok: _this.computeConfigurationControl(
                      result,
                      _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                        .ICON_RED,
                      'nok'
                    )
                  }
                ];
                _this.configurationControlTableLoading = false;
              });
            } else if (bidoEquipmentDTO) {
              input = __assign({}, input, {
                equipmentCode: bidoEquipmentDTO.equipmentCode ? bidoEquipmentDTO.equipmentCode || '' : ''
              });
              this.airworthinessControlFormService.controlConfiguration(input).subscribe(function(result) {
                _this.computeConfigurationControl(
                  result,
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                    .ICON_GREEN,
                  'ok'
                );
                _this.computeConfigurationControl(
                  result,
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                    .ICON_YELLOW,
                  'warning'
                );
                _this.computeConfigurationControl(
                  result,
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                    .ICON_RED,
                  'nok'
                );
              });
            }
          };
          AirworthinessControlFormComponent.prototype.computeControlKey = function(sn, pnCode) {
            return 'SN:' + (sn ? sn : '') + '|PN:' + (pnCode ? pnCode : '');
          };
          AirworthinessControlFormComponent.prototype.computeConfigurationControl = function(
            asset,
            controlValueRef,
            statusChecked
          ) {
            var _this = this;
            var checkList = [
              asset.checkConfigurationCause,
              asset.checkCoreCause,
              asset.checkFlCause,
              asset.checkMelCause,
              asset.checkReferentialCause,
              asset.checkStructureCause,
              asset.checkConfigurationCauseAlt,
              asset.checkCoreCauseAlt,
              asset.checkFlCauseAlt,
              asset.checkMelCauseAlt,
              asset.checkReferentialCauseAlt,
              asset.checkStructureCauseAlt,
              asset.checkConfigurationResult,
              asset.checkCoreResult,
              asset.checkFlResult,
              asset.checkMelResult,
              asset.checkReferentialResult,
              asset.checkStructureResult,
              asset.checkLogbookCause,
              asset.checkLogbookCauseAlt,
              asset.checkLogbookResult,
              asset.checkPotentialCause,
              asset.checkPotentialCauseAlt,
              asset.checkPotentialResult
            ];
            var controlValueNb = 0;
            controlValueNb += checkList
              .map(function(check) {
                return check === controlValueRef ? 1 : 0;
              })
              .reduce(function(a, b) {
                return a + b;
              }, 0);
            var cle = asset.bidoEquipment
              ? this.computeControlKey(asset.bidoEquipment.sn, asset.bidoEquipment.pnCode)
              : '';
            var objectStatusNbCtrl = this.subAssetConfigurationControlMap.get(
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].orEmpty(cle)
            );
            if (!objectStatusNbCtrl) {
              objectStatusNbCtrl = {};
              this.subAssetConfigurationControlMap.set(
                _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].orEmpty(cle),
                objectStatusNbCtrl
              );
            }
            objectStatusNbCtrl[statusChecked] = controlValueNb;
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__['ListUtils'].isNullOrEmpty(asset.children)) {
              controlValueNb += asset.children
                .map(function(assetChild) {
                  return _this.computeConfigurationControl(assetChild, controlValueRef, statusChecked);
                })
                .reduce(function(a, b) {
                  return a + b;
                }, 0);
            }
            return controlValueNb;
          };
          AirworthinessControlFormComponent.prototype.findMinimumRemainingEquivalent = function(list) {
            var remainingEquivalent;
            var queue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__['cloneDeep'])(list);
            while (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__['ListUtils'].isEmpty(queue)) {
              var first = queue.shift();
              queue = __spread(queue, first.children);
              if (
                _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_15__['ObjectUtils'].isDefined(
                  first.remainingEquivalentValue
                )
              ) {
                if (!remainingEquivalent) {
                  remainingEquivalent = first;
                } else {
                  var currMin = remainingEquivalent.remainingEquivalentValue;
                  var newMin = first.remainingEquivalentValue;
                  if (newMin < currMin) {
                    remainingEquivalent = first;
                  }
                }
              }
            }
            return remainingEquivalent;
          };
          AirworthinessControlFormComponent.prototype.mapTreeNodeByEquipmentCode = function(list) {
            var map = new Map();
            var queue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__['cloneDeep'])(list);
            while (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__['ListUtils'].isEmpty(queue)) {
              var first = queue.shift();
              queue = __spread(queue, first.children);
              map.set(first.bidoEquipment.equipmentCode, first);
            }
            return map;
          };
          AirworthinessControlFormComponent.prototype.openAircraft = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .FLE_AIRCRAFT_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AirworthinessControlFormComponent.prototype.openAssetReview = function(equipmentCode, familyVariantCode) {
            var objectId = {
              equipmentCodeList: [equipmentCode],
              familyVariantList: familyVariantCode ? [familyVariantCode] : undefined
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .MAI_ASSET_REVIEW_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AirworthinessControlFormComponent.prototype.openConfigurationControl = function(equipmentCode) {
            var objectId = {
              equipmentCodeList: [equipmentCode]
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .MAI_CONFIGURATION_CONTROL,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AirworthinessControlFormComponent.prototype.openEngine = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .FLE_ENGINE_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AirworthinessControlFormComponent.prototype.openEquipment = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .FLE_EQUIPMENT_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AirworthinessControlFormComponent.prototype.openScheduleMaintenance = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AirworthinessControlFormComponent.prototype.reloadFromCache = function() {
            this.load();
            this.loadConfigurationControl();
          };
          AirworthinessControlFormComponent.prototype.setAirwothinessTableColumnList = function() {
            this.airworthinessTableCols = [
              { field: 'alert', alignment: 'center', width: '11.5%' },
              { field: 'asset', alignment: 'left', width: '16.5%' },
              { field: 'potential', alignment: 'left', width: '14%' },
              { field: 'measures', alignment: 'left', width: '11%' },
              { field: 'appliedConfiguration', alignment: 'left', width: '16.5%' },
              { field: 'maintenancePlan', alignment: 'left', width: '14%' },
              { field: 'illustration', alignment: 'left', width: '16.5%' }
            ];
          };
          AirworthinessControlFormComponent.prototype.setAirworthinessTableVisibilityList = function() {
            var _this = this;
            var allKey = this.getTranslateKey('showAll');
            var onlyAlertsKey = this.getTranslateKey('showOnlyAlerts');
            this.translateService.get([allKey, onlyAlertsKey]).subscribe(function(results) {
              var allLabel = !!results ? results[allKey] : 'All';
              var onlyAlertsLabel = !!results ? results[onlyAlertsKey] : 'Only Alerts';
              _this.airworthinessTableVisibilityList = [
                {
                  label: allLabel,
                  value:
                    _enums_airworthiness_table_visibility_enum__WEBPACK_IMPORTED_MODULE_18__[
                      'AirworthinessTableVisibility'
                    ].All
                },
                {
                  label: onlyAlertsLabel,
                  value:
                    _enums_airworthiness_table_visibility_enum__WEBPACK_IMPORTED_MODULE_18__[
                      'AirworthinessTableVisibility'
                    ].OnlyAlerts
                }
              ];
            });
          };
          AirworthinessControlFormComponent.prototype.setChartLabels = function() {
            var _this = this;
            var airworthyKey = this.getTranslateKey('airworthy');
            var airworthyWithAlertsKey = this.getTranslateKey('airworthyWithAlerts');
            var notAirworthyKey = this.getTranslateKey('notAirworthy');
            this.translateService
              .get([airworthyKey, airworthyWithAlertsKey, notAirworthyKey])
              .subscribe(function(results) {
                var airworthyLabel = results ? results[airworthyKey] : 'Airworthy';
                var airworthyWithAlertsLabel = results ? results[airworthyWithAlertsKey] : 'Airworthy With Alerts';
                var notAirworthyLabel = results ? results[notAirworthyKey] : 'Not Airworthy';
                _this.chartData.labels = [airworthyLabel, airworthyWithAlertsLabel, notAirworthyLabel];
              });
          };
          AirworthinessControlFormComponent.prototype.setChartOptions = function() {
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
          AirworthinessControlFormComponent.prototype.setComponentContextForAsset = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .FAMILY_FUNCTION_MAP
              )
              .subscribe(function(result) {
                if (_this.asset) {
                  var componentContext = void 0;
                  if (_this.isAssetAircraft) {
                    var selectedFunction = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__['ListUtils']
                      .orEmpty(result)
                      .find(function(elt) {
                        return elt.value === _this.asset.equipmentFunction;
                      });
                    var aircraftLabel = selectedFunction ? selectedFunction.label : 'Aircraft';
                    componentContext = aircraftLabel + ' ' + _this.asset.registration;
                  } else {
                    componentContext = _this.asset.equipmentDesignation + ' / ' + _this.asset.sn;
                  }
                  _this.displayComponentContext(componentContext, _this.isCreateOpenMode);
                }
              });
          };
          AirworthinessControlFormComponent.prototype.setNavigationLinkList = function() {
            var _this = this;
            var assetReviewKey = this.getTranslateKey('assetReview');
            var configurationControlKey = this.getTranslateKey('configurationControl');
            var scheduleMaintenanceKey = this.getTranslateKey('scheduleMaintenance');
            this.translateService
              .get([assetReviewKey, configurationControlKey, scheduleMaintenanceKey])
              .subscribe(function(results) {
                var assetReviewLabel = results ? results[assetReviewKey] : 'Asset Review';
                var configurationControlLabel = results
                  ? results[configurationControlKey]
                  : 'Applied Configuration Management';
                var scheduleMaintenanceLabel = results ? results[scheduleMaintenanceKey] : 'Maintenance Planning';
                _this.navigationLinkList = [
                  {
                    label: assetReviewLabel,
                    command: function() {
                      _this.openAssetReview(
                        _this.scope.equipmentCodeList[0],
                        _this.scope.familyVariantList ? _this.scope.familyVariantList[0] : undefined
                      );
                    }
                  },
                  {
                    label: configurationControlLabel,
                    command: function() {
                      _this.openConfigurationControl(_this.scope.equipmentCodeList[0]);
                    }
                  },
                  {
                    label: scheduleMaintenanceLabel,
                    command: function() {
                      _this.openScheduleMaintenance(_this.scope.equipmentCodeList[0]);
                    }
                  }
                ];
              });
          };
          AirworthinessControlFormComponent.prototype.setNavigationLinkListForTableRow = function() {
            var _this = this;
            var aircraftReviewKey = this.getTranslateKey('assetReview');
            var configurationControlKey = this.getTranslateKey('configurationControl');
            var scheduleMaintenanceKey = this.getTranslateKey('scheduleMaintenance');
            this.translateService
              .get([aircraftReviewKey, configurationControlKey, scheduleMaintenanceKey])
              .subscribe(function(results) {
                var aircraftReviewLabel = results ? results[aircraftReviewKey] : 'Aircraft Review';
                var configurationControlLabel = results
                  ? results[configurationControlKey]
                  : 'Applied Configuration Management';
                var scheduleMaintenanceLabel = results ? results[scheduleMaintenanceKey] : 'Maintenance Planning';
                _this.navigationLinkListForTableRow = [
                  {
                    label: aircraftReviewLabel,
                    command: function() {
                      _this.openAssetReview(
                        _this.airworthinessTableSelection[0]._obj.bidoEquipment.equipmentCode,
                        _this.airworthinessTableSelection[0]._obj.bidoEquipment.familyVariantCode
                      );
                    }
                  },
                  {
                    label: configurationControlLabel,
                    command: function() {
                      _this.openConfigurationControl(
                        _this.airworthinessTableSelection[0]._obj.bidoEquipment.equipmentCode
                      );
                    }
                  },
                  {
                    label: scheduleMaintenanceLabel,
                    command: function() {
                      _this.openScheduleMaintenance(
                        _this.airworthinessTableSelection[0]._obj.bidoEquipment.equipmentCode
                      );
                    }
                  }
                ];
              });
          };
          AirworthinessControlFormComponent.prototype.setPotentialForAllEquipment = function(results) {
            var _this = this;
            // Compute minimum remaining equivalent for each equipment
            _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__['ListUtils']
              .orEmpty(results)
              .forEach(function(result) {
                var minimumRemainingEquivalent = _this.findMinimumRemainingEquivalent(result.children);
                if (result.code && minimumRemainingEquivalent) {
                  _this.minimumRemainingEquivalentMap.set(result.code, minimumRemainingEquivalent);
                }
              });
            if (this.isAssetViewMode) {
              this.topAssetAirworthinessTableRemainingValuesComponent.load();
            }
            var treeNodeMap = this.mapTreeNodeByEquipmentCode(results);
            treeNodeMap.forEach(function(_, key) {
              var treeNode = treeNodeMap.get(key);
              var matchingElt = _this.airworthinessMap.get(key);
              if (!!treeNode) {
                matchingElt.potential = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].orEmpty(
                  treeNode.remainingEquivalent
                );
                matchingElt._obj.remainingEquivalent = treeNode.remainingEquivalent;
                matchingElt._obj.remainingEquivalentIcon = treeNode.remainingEquivalentIcon;
                matchingElt._obj.remainingEquivalentTooltip = treeNode.remainingEquivalentTooltip;
                if (
                  matchingElt.alert ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                    .ICON_YELLOW
                ) {
                  var lowRemainingKey = _this.getTranslateKey('lowRemaining');
                  _this.translateService.get(lowRemainingKey).subscribe(function(translatedKey) {
                    matchingElt._alertTooltip = translatedKey || 'Low remaining';
                  });
                } else if (
                  matchingElt.alert ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                    .ICON_RED
                ) {
                  var missingAssetInAppliedConfigurationKey_1 = _this.getTranslateKey(
                    'missingAssetInAppliedConfiguration'
                  );
                  var overPotentialKey_1 = _this.getTranslateKey('overduePotential');
                  var overPotentialSubassemblyKey_1 = _this.getTranslateKey('overduePotentialSubAssembly');
                  _this.translateService
                    .get([missingAssetInAppliedConfigurationKey_1, overPotentialKey_1, overPotentialSubassemblyKey_1])
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
                        return _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils']
                          .orEmpty(child.remainingEquivalent)
                          .startsWith('-');
                      });
                      if (overduePotentialSubAssembly) {
                        alertList = __spread(alertList, [overPotentialSubassemblyLabel]);
                      }
                      if (
                        treeNode.checkResultIcon ===
                        _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__[
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
            this.togglePotentialLoadingIndicator(false);
            this.sortAirworthinessRowOnRemainingPotential();
          };
          AirworthinessControlFormComponent.prototype.setPotentialUnitList = function() {
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
                    _this.updatePotentialUnit(
                      _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_6__[
                        'BireUnitMeasureConstants'
                      ].HOUR
                    );
                  }
                },
                {
                  label: cyclesLabel,
                  command: function() {
                    _this.updatePotentialUnit(
                      _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_6__[
                        'BireUnitMeasureConstants'
                      ].CYCLE
                    );
                  }
                },
                {
                  label: daysLabel,
                  command: function() {
                    _this.updatePotentialUnit(
                      _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_6__[
                        'BireUnitMeasureConstants'
                      ].DAY
                    );
                  }
                }
              ];
            });
          };
          AirworthinessControlFormComponent.prototype.togglePotentialLoadingIndicator = function(newStatus) {
            this.airworthinessTable.forEach(function(elt) {
              elt._potentialLoading = newStatus;
            });
          };
          AirworthinessControlFormComponent.prototype.updateChartData = function() {
            var _this = this;
            this.airworthinessTable.forEach(function(row) {
              if (row.alert) {
                var AIRWORTHY_VALUES_INDEX = 0;
                var AIRWORTHY_WITH_ALERTS_VALUES_INDEX = 1;
                var NOT_AIRWORTHY_VALUES_INDEX = 2;
                if (
                  row.alert ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                    .ICON_GREEN
                ) {
                  _this.chartData.datasets[0].data[AIRWORTHY_VALUES_INDEX]++;
                  _this.airworthyEquipmentNb = _this.chartData.datasets[0].data[AIRWORTHY_VALUES_INDEX];
                }
                if (
                  row.alert ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                    .ICON_YELLOW
                ) {
                  _this.chartData.datasets[0].data[AIRWORTHY_WITH_ALERTS_VALUES_INDEX]++;
                  _this.airworthyWithAlertEquipmentNb =
                    _this.chartData.datasets[0].data[AIRWORTHY_WITH_ALERTS_VALUES_INDEX];
                }
                if (
                  row.alert ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                    .ICON_RED
                ) {
                  _this.chartData.datasets[0].data[NOT_AIRWORTHY_VALUES_INDEX]++;
                  _this.notAirworthyEquipmentNb = _this.chartData.datasets[0].data[NOT_AIRWORTHY_VALUES_INDEX];
                }
                _this.chartData = __assign({}, _this.chartData);
                _this.chartVisible = _this.chartData.datasets[0].data.some(function(elt) {
                  return elt > 0;
                });
              }
            });
          };
          AirworthinessControlFormComponent.prototype.updatePotentialUnit = function(unit) {
            var _this = this;
            this.potentialUnitSelected = unit;
            this.togglePotentialLoadingIndicator(true);
            var params = {
              equipmentCodeList: this.topEquipmentCodeList,
              simulation: this.simulationCriteria !== undefined,
              simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
              simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
              simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
              unitEquivalent: this.potentialUnitSelected
            };
            this.airworthinessControlFormService
              .computePotentialForAirworthinessControlInput(params)
              .subscribe(function(results) {
                _this.setPotentialForAllEquipment(results);
              });
          };
          AirworthinessControlFormComponent.prototype.sanitizeAndGetBase64Prefix = function(illustrationDocument) {
            return this.fileService.sanitizeAndGetBase64Prefix(illustrationDocument);
          };
          AirworthinessControlFormComponent.prototype.showIllustration = function(illustrationDocument) {
            this.currentIllustration = this.sanitizeAndGetBase64Prefix(illustrationDocument);
          };
          AirworthinessControlFormComponent.prototype.hideIllustration = function() {
            this.currentIllustration = undefined;
          };
          AirworthinessControlFormComponent.prototype.sortAirworthinessRowOnRemainingPotential = function() {
            var _this = this;
            this.airworthinessTable.sort(function(data1, data2) {
              return _this.compareRemainingEquivalent(data1, data2);
            });
          };
          AirworthinessControlFormComponent.prototype.customSort = function(event) {
            var _this = this;
            if (event.field && event.field === 'potential' && event.data) {
              event.data.sort(function(data1, data2) {
                var result = _this.compareRemainingEquivalent(data1, data2);
                return event.order ? event.order * result : result;
              });
            }
          };
          AirworthinessControlFormComponent.prototype.compareRemainingEquivalent = function(data1, data2) {
            var isNOK1 =
              data1.alert ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                .ICON_RED;
            var isNOK2 =
              data2.alert ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                .ICON_RED;
            var remainingEquivalent1 = data1._obj.remainingEquivalent;
            var remainingEquivalent2 = data2._obj.remainingEquivalent;
            return _shared_utils_comparator_utils__WEBPACK_IMPORTED_MODULE_13__[
              'ComparatorUtils'
            ].compareByRemainingEquivalent(
              { equipment: data1._obj.bidoEquipment, remainingEquivalent: remainingEquivalent1, isNOK: isNOK1 },
              { equipment: data2._obj.bidoEquipment, remainingEquivalent: remainingEquivalent2, isNOK: isNOK2 }
            );
          };
          AirworthinessControlFormComponent.EXPORT_TRANSLATE_KEY = 'AirworthinessControlFormComponentExport';
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('airworthinessTableAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AirworthinessControlFormComponent.prototype,
            'airworthinessTableAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('maintenancePlanTableAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AirworthinessControlFormComponent.prototype,
            'maintenancePlanTableAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('remainingValuesAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AirworthinessControlFormComponent.prototype,
            'remainingValuesAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('scopeAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AirworthinessControlFormComponent.prototype,
            'scopeAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('summaryAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AirworthinessControlFormComponent.prototype,
            'summaryAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                'topAssetAirworthinessTableRemainingValuesComponent'
              ),
              __metadata(
                'design:type',
                _airworthiness_table_remaining_values_airworthiness_table_remaining_values_component__WEBPACK_IMPORTED_MODULE_17__[
                  'AirworthinessTableRemainingValuesComponent'
                ]
              )
            ],
            AirworthinessControlFormComponent.prototype,
            'topAssetAirworthinessTableRemainingValuesComponent',
            void 0
          );
          return AirworthinessControlFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.service.ts':
      /*!******************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.service.ts ***!
  \******************************************************************************************************************************/
      /*! exports provided: AirworthinessControlFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AirworthinessControlFormService',
          function() {
            return AirworthinessControlFormService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/api/airworthiness-management.api */ './src/app/shared/api/airworthiness-management.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/api/fleet-business.api */ './src/app/shared/api/fleet-business.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

        var AirworthinessControlFormService = /** @class */ (function(_super) {
          __extends(AirworthinessControlFormService, _super);
          function AirworthinessControlFormService(
            http,
            appConfigService,
            airworthinessManagementApi,
            fleetBusinessApi,
            fleetManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.airworthinessManagementApi = airworthinessManagementApi;
            _this.fleetBusinessApi = fleetBusinessApi;
            _this.fleetManagementApi = fleetManagementApi;
            return _this;
          }
          /**************************************************************************
           * Airworthiness management api
           *************************************************************************/
          AirworthinessControlFormService.prototype.checkEquipmentForAirworthinessControl = function(input) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.checkEquipmentForAirworthinessControl,
              input
            );
          };
          AirworthinessControlFormService.prototype.clearAirworthinessControlCache = function(input) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.clearAirworthinessControlCache,
              input
            );
          };
          AirworthinessControlFormService.prototype.computePotentialForAirworthinessControlInput = function(input) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.computePotentialForAirworthinessControlInput,
              input
            );
          };
          AirworthinessControlFormService.prototype.computeRemainingForAd = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.computeRemainingForAd, input);
          };
          AirworthinessControlFormService.prototype.computeRemainingForDefect = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.computeRemainingForDefect, input);
          };
          AirworthinessControlFormService.prototype.computeRemainingForDocument = function(equipmentCode) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.computeRemainingForDocument,
              equipmentCode
            );
          };
          AirworthinessControlFormService.prototype.computeRemainingForLlp = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.computeRemainingForLlp, input);
          };
          AirworthinessControlFormService.prototype.computeRemainingForTask = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.computeRemainingForTask, input);
          };
          AirworthinessControlFormService.prototype.generateAirworthinessControlTable = function(input) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.generateAirworthinessControlTable,
              input
            );
          };
          AirworthinessControlFormService.prototype.getCsnLabelForAirworthinessControl = function() {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.getCsnLabelForAirworthinessControl);
          };
          AirworthinessControlFormService.prototype.getTsnLabelForAirworthinessControl = function() {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.getTsnLabelForAirworthinessControl);
          };
          AirworthinessControlFormService.prototype.removeFromWorkPackage = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.removeFromWorkPackage, input);
          };
          /**************************************************************************
           * Fleet business api
           *************************************************************************/
          AirworthinessControlFormService.prototype.controlConfiguration = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.controlConfiguration, input);
          };
          /**************************************************************************
           * Fleet management api
           *************************************************************************/
          AirworthinessControlFormService.prototype.getEquipment = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, input);
          };
          AirworthinessControlFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__['AppConfigService'],
                _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_2__['AirworthinessManagementApi'],
                _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_3__['FleetBusinessApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__['FleetManagementApi']
              ])
            ],
            AirworthinessControlFormService
          );
          return AirworthinessControlFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.html':
      /*!*********************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.html ***!
  \*********************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="column">\r\n  <div class="row">\r\n    <p-table [resizableColumns]="true" #ptable class="aw-table2" [columns]="remainingTableCols" [value]="remainingTable" [scrollable]="true">\r\n      <ng-template pTemplate="emptymessage">\r\n        <span *ngIf="!remainingTableLoading"> &nbsp;</span>\r\n\r\n        <div *ngIf="remainingTableLoading" class="aw-table-loading-indicator">\r\n          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n          <div class="lds-hourglass"></div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="colgroup" let-columns>\r\n        <colgroup>\r\n          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n        </colgroup>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="header" let-columns>\r\n        <tr>\r\n          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n            {{ getComponentName() + "." + col.field + (fullTable ? "" : "Short") | translate }}\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n          <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n            <span\r\n              *ngSwitchCase="\'elementDesignation\'"\r\n              pTooltip="{{ rowData[\'elementDesignationTooltip\'] }}"\r\n              tooltipPosition="top"\r\n            >\r\n              {{ rowData[col.field] }}\r\n            </span>\r\n\r\n            <span *ngSwitchCase="\'elementId\'" pTooltip="{{ rowData[\'elementIdTooltip\'] }}" tooltipPosition="top">\r\n              <span *ngIf="fullTable">{{ rowData[col.field] }}</span>\r\n              <span *ngIf="!fullTable && !rowData[\'elementDesignation\']">{{ rowData[col.field] }}</span>\r\n              <span *ngIf="!fullTable && rowData[\'elementDesignation\']"\r\n                >{{ rowData[col.field] }} - {{ rowData["elementDesignation"] }}</span\r\n              >\r\n            </span>\r\n\r\n            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.scss':
      /*!*********************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.scss ***!
  \*********************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host ::ng-deep div.ui-table-scrollable-body {\n  min-height: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9haXJ3b3J0aGluZXNzLWNvbnRyb2wtZm9ybS9haXJ3b3J0aGluZXNzLXRhYmxlLXJlbWFpbmluZy12YWx1ZXMvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFxhaXJ3b3J0aGluZXNzLWNvbnRyb2xcXGZvcm1cXGFpcndvcnRoaW5lc3MtY29udHJvbC1mb3JtXFxhaXJ3b3J0aGluZXNzLXRhYmxlLXJlbWFpbmluZy12YWx1ZXNcXGFpcndvcnRoaW5lc3MtdGFibGUtcmVtYWluaW5nLXZhbHVlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9haXJ3b3J0aGluZXNzLWNvbnRyb2wtZm9ybS9haXJ3b3J0aGluZXNzLXRhYmxlLXJlbWFpbmluZy12YWx1ZXMvYWlyd29ydGhpbmVzcy10YWJsZS1yZW1haW5pbmctdmFsdWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIDo6bmctZGVlcCBkaXYudWktdGFibGUtc2Nyb2xsYWJsZS1ib2R5IHtcclxuICAgIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.ts':
      /*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.ts ***!
  \*******************************************************************************************************************************************************************************/
      /*! exports provided: AirworthinessTableRemainingValuesComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AirworthinessTableRemainingValuesComponent',
          function() {
            return AirworthinessTableRemainingValuesComponent;
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
        /* harmony import */ var _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/constants/bire-unit-measure-constants */ './src/app/shared/constants/bire-unit-measure-constants.ts'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../../shared/utils/number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _airworthiness_control_form_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../airworthiness-control-form.service */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-control-form.service.ts'
        );
        /* harmony import */ var _types_airworthiness_row_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../types/airworthiness-row.interface */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/types/airworthiness-row.interface.ts'
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

        var AirworthinessTableRemainingValuesComponent = /** @class */ (function(_super) {
          __extends(AirworthinessTableRemainingValuesComponent, _super);
          function AirworthinessTableRemainingValuesComponent(airworthinessControlFormService, translateService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Write
              ) || this;
            _this.airworthinessControlFormService = airworthinessControlFormService;
            _this.translateService = translateService;
            _this.controlConfigConstants =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_4__['ControlConfigConstants'];
            _this.init();
            return _this;
          }
          AirworthinessTableRemainingValuesComponent_1 = AirworthinessTableRemainingValuesComponent;
          AirworthinessTableRemainingValuesComponent.prototype.getComponentName = function() {
            return 'AirworthinessTableRemainingValuesComponent';
          };
          AirworthinessTableRemainingValuesComponent.prototype.ngOnInit = function() {
            this.setRemainingTableColumnList();
            if (this.fullTable) {
              this.load();
            }
          };
          AirworthinessTableRemainingValuesComponent.prototype.clearTable = function() {
            this.remainingTable = [];
          };
          AirworthinessTableRemainingValuesComponent.prototype.addSubAssemblyData = function() {
            var _this = this;
            if (this.minimumRemainingEquivalentMap) {
              var minimumRemainingEquivalentKey = this.row._obj.code;
              if (minimumRemainingEquivalentKey) {
                var minimumRemainingEquivalent = this.minimumRemainingEquivalentMap.get(minimumRemainingEquivalentKey);
                if (
                  minimumRemainingEquivalent &&
                  minimumRemainingEquivalent.bidoEquipment &&
                  minimumRemainingEquivalent.assetDesignation &&
                  _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_9__['ObjectUtils'].isDefined(
                    minimumRemainingEquivalent.remainingEquivalentValue
                  )
                ) {
                  var id_1 =
                    minimumRemainingEquivalent.bidoEquipment.pnCode + '/' + minimumRemainingEquivalent.bidoEquipment.sn;
                  var designation_1 = minimumRemainingEquivalent.assetDesignation;
                  var value_1 = minimumRemainingEquivalent.remainingEquivalentValue;
                  var subAssemblyKey = this.getTranslateKey('subAssembly');
                  this.translateService.get(subAssemblyKey).subscribe(function(translatedKey) {
                    var remainingType = translatedKey || 'Sub Assembly';
                    var row = {
                      remainingType: remainingType,
                      elementDesignation: designation_1,
                      elementId: id_1,
                      remainingValue: value_1.toString() + ' ' + _this.potentialUnitSelected,
                      _obj: { remainingValue: value_1, elementIdList: [designation_1], elementDesignationList: [] }
                    };
                    _this.remainingTable = __spread(_this.remainingTable, [row]);
                    _this.sortRemainingTable();
                  });
                }
              }
            }
          };
          AirworthinessTableRemainingValuesComponent.prototype.createRemainingRow = function(elt, label, unitMeasure) {
            var elementDesignation = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__['ListUtils'].isNullOrEmpty(
              elt.elementDesignationList
            )
              ? ''
              : elt.elementDesignationList[0];
            var elementDesignationTooltip =
              _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__['ListUtils'].isNullOrEmpty(
                elt.elementDesignationList
              ) || elt.elementDesignationList.length <= 1
                ? undefined
                : elt.elementDesignationList.join(
                    AirworthinessTableRemainingValuesComponent_1.TOOLTIP_CONTENT_SEPRATOR
                  );
            var elementId = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__['ListUtils'].isNullOrEmpty(
              elt.elementIdList
            )
              ? ''
              : elt.elementIdList[0];
            var elementIdTooltip =
              _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__['ListUtils'].isNullOrEmpty(elt.elementIdList) ||
              elt.elementIdList.length <= 1
                ? undefined
                : elt.elementIdList.join(AirworthinessTableRemainingValuesComponent_1.TOOLTIP_CONTENT_SEPRATOR);
            var remainingValue =
              elt.remainingValue !== undefined && elt.remainingValue !== null
                ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_8__['NumberUtils']
                    .roundNumber(elt.remainingValue, 2)
                    .toString() +
                  ' ' +
                  (unitMeasure || this.potentialUnitSelected)
                : '';
            return {
              elementDesignation: elementDesignation,
              elementDesignationTooltip: elementDesignationTooltip,
              elementId: elementId,
              elementIdTooltip: elementIdTooltip,
              remainingValue: remainingValue,
              remainingType: label,
              _obj: elt
            };
          };
          AirworthinessTableRemainingValuesComponent.prototype.init = function() {
            this.fullTable = true;
            this.potentialUnitSelected =
              _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_3__[
                'BireUnitMeasureConstants'
              ].DAY;
            this.remainingTableLoading = true;
            this.clearTable();
          };
          AirworthinessTableRemainingValuesComponent.prototype.load = function() {
            var _this = this;
            this.clearTable();
            this.remainingTableLoading = true;
            var equipmentCode = this.row._obj.bidoEquipment.equipmentCode;
            var input = {
              equipmentCode: equipmentCode,
              equipmentCodeList: this.equipmentCodeList,
              simulation: this.simulationCriteria !== undefined,
              simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
              simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
              simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
              unitMeasure: this.potentialUnitSelected,
              fatherEquipmentCode: this.row._obj.bidoEquipment.equEquipmentCode || equipmentCode
            };
            var observables = [
              this.airworthinessControlFormService.computeRemainingForAd(input),
              this.airworthinessControlFormService.computeRemainingForDefect(input),
              this.airworthinessControlFormService.computeRemainingForDocument(equipmentCode),
              this.airworthinessControlFormService.computeRemainingForLlp(input),
              this.airworthinessControlFormService.computeRemainingForTask(input)
            ];
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(observables).subscribe(function(_a) {
              var _b = __read(_a, 5),
                adResult = _b[0],
                defectResult = _b[1],
                documentationResult = _b[2],
                llpResult = _b[3],
                taskResult = _b[4];
              var adTypeKey = _this.getTranslateKey('remainingtypeAd');
              var defectTypeKey = _this.getTranslateKey('remainingtypeDefect');
              var documentationTypeKey = _this.getTranslateKey('remainingtypeDocumentation');
              var llpTypeKey = _this.getTranslateKey('remainingtypeLlp');
              var taskTypeKey = _this.getTranslateKey('remainingtypeTask');
              _this.translateService
                .get([adTypeKey, defectTypeKey, documentationTypeKey, llpTypeKey, taskTypeKey])
                .subscribe(function(results) {
                  _this.remainingTableLoading = false;
                  var adTypeLabel = results ? results[adTypeKey] : 'SB/AD';
                  var defectTypeLabel = results ? results[defectTypeKey] : 'Defect';
                  var documentationTypeLabel = results ? results[documentationTypeKey] : 'Documentation';
                  var llpTypeLabel = results ? results[llpTypeKey] : 'LLP';
                  var taskTypeLabel = results ? results[taskTypeKey] : 'OMP';
                  if (!!adResult) {
                    _this.remainingTable = __spread(_this.remainingTable, [
                      _this.createRemainingRow(adResult, adTypeLabel)
                    ]);
                  }
                  if (!!defectResult) {
                    _this.remainingTable = __spread(_this.remainingTable, [
                      _this.createRemainingRow(defectResult, defectTypeLabel)
                    ]);
                  }
                  if (!!documentationResult) {
                    _this.remainingTable = __spread(_this.remainingTable, [
                      _this.createRemainingRow(
                        documentationResult,
                        documentationTypeLabel,
                        _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_3__[
                          'BireUnitMeasureConstants'
                        ].DAY
                      )
                    ]);
                  }
                  if (!!llpResult) {
                    _this.remainingTable = __spread(_this.remainingTable, [
                      _this.createRemainingRow(llpResult, llpTypeLabel)
                    ]);
                  }
                  if (!!taskResult) {
                    _this.remainingTable = __spread(_this.remainingTable, [
                      _this.createRemainingRow(taskResult, taskTypeLabel)
                    ]);
                  }
                  _this.addSubAssemblyData();
                });
            });
          };
          AirworthinessTableRemainingValuesComponent.prototype.sortRemainingTable = function() {
            this.remainingTable = this.remainingTable.sort(function(elt1, elt2) {
              if (elt1._obj.remainingValue === undefined || elt1._obj.remainingValue === null) {
                return 1;
              }
              if (elt2._obj.remainingValue === undefined || elt2._obj.remainingValue === null) {
                return -1;
              }
              if (elt1._obj.remainingValue < elt2._obj.remainingValue) {
                return -1;
              } else if (elt1._obj.remainingValue > elt2._obj.remainingValue) {
                return 1;
              } else {
                return -1;
              }
            });
          };
          AirworthinessTableRemainingValuesComponent.prototype.setRemainingTableColumnList = function() {
            this.remainingTableCols = [
              { field: 'remainingValue', alignment: 'left', width: '15%' },
              { field: 'remainingType', alignment: 'left', width: '17.5%' }
            ];
            if (this.fullTable) {
              this.remainingTableCols = __spread(this.remainingTableCols, [
                { field: 'elementId', alignment: 'left', width: '32.5%' },
                { field: 'elementDesignation', alignment: 'left', width: '35%' }
              ]);
            } else {
              this.remainingTableCols = __spread(this.remainingTableCols, [
                { field: 'elementId', alignment: 'left', width: '67.5%' }
              ]);
            }
          };
          var AirworthinessTableRemainingValuesComponent_1;
          AirworthinessTableRemainingValuesComponent.TOOLTIP_CONTENT_SEPRATOR = ', ';
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            AirworthinessTableRemainingValuesComponent.prototype,
            'equipmentCodeList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            AirworthinessTableRemainingValuesComponent.prototype,
            'fullTable',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Map)],
            AirworthinessTableRemainingValuesComponent.prototype,
            'minimumRemainingEquivalentMap',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata(
                'design:type',
                _types_airworthiness_row_interface__WEBPACK_IMPORTED_MODULE_11__['AirworthinessRow']
              )
            ],
            AirworthinessTableRemainingValuesComponent.prototype,
            'row',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            AirworthinessTableRemainingValuesComponent.prototype,
            'simulationCriteria',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            AirworthinessTableRemainingValuesComponent.prototype,
            'potentialUnitSelected',
            void 0
          );
          AirworthinessTableRemainingValuesComponent = AirworthinessTableRemainingValuesComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-airworthiness-table-remaining-values',
                template: __webpack_require__(
                  /*! ./airworthiness-table-remaining-values.component.html */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./airworthiness-table-remaining-values.component.scss */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _airworthiness_control_form_service__WEBPACK_IMPORTED_MODULE_10__['AirworthinessControlFormService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            AirworthinessTableRemainingValuesComponent
          );
          return AirworthinessTableRemainingValuesComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_6__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/asset-view-scope/asset-view-scope.component.html':
      /*!*****************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/asset-view-scope/asset-view-scope.component.html ***!
  \*****************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="grid-cell-header">\r\n  <div class="grid-cell-title-container loading-indicator">\r\n    <div class="grid-cell-title">\r\n      <span *ngIf="isAssetAircraft">{{ getComponentName() + ".aircraft" | translate }}</span>\r\n      <span *ngIf="isAssetEngine">{{ getComponentName() + ".engine" | translate }}</span>\r\n      <span *ngIf="isAssetEquipment">{{ getComponentName() + ".equipment" | translate }}</span>\r\n      <div\r\n        *ngIf="globalAlertListLoading || assetAirworthiness._alertLoading || assetAirworthiness._potentialLoading"\r\n        class="lds-hourglass"\r\n      ></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="grid-cell-content">\r\n  <div class="column">\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".familyVariant" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="asset.familyVariantCode" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="isAssetAircraft" class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".registration" | translate }} </label>\r\n\r\n        <div class="form-control" pTooltip="{{ assetAirworthiness._obj.counterAlertTooltip }}" tooltipPosition="bottom">\r\n          <input type="text" class="aw-input" [(ngModel)]="asset.registration" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="isAssetAircraft" class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".msn" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <div class="form-control-generic">\r\n            <a (click)="openTopAsset()">{{ asset.sn }}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="isAssetEngine || isAssetEquipment" class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".pn" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="asset.pnCode" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="isAssetEngine || isAssetEquipment" class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".sn" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <div class="form-control-generic">\r\n            <a (click)="openTopAsset()">{{ asset.sn }}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label">\r\n          <span *ngIf="isAssetAircraft"> {{ getComponentName() + ".statusAircraft" | translate }} </span>\r\n          <span *ngIf="isAssetEngine"> {{ getComponentName() + ".statusEngine" | translate }} </span>\r\n          <span *ngIf="isAssetEquipment"> {{ getComponentName() + ".statusEquipment" | translate }} </span>\r\n        </label>\r\n\r\n        <div class="form-control"><input type="text" class="aw-input" [(ngModel)]="status" [disabled]="true" /></div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".alert" | translate }} </label>\r\n\r\n        <div class="form-control" pTooltip="{{ assetAirworthiness._alertTooltip }}" tooltipPosition="top">\r\n          <div class="form-control-generic">\r\n            <span\r\n              *ngIf="\r\n                assetAirworthiness.alert !== undefined &&\r\n                assetAirworthiness.alert !== null &&\r\n                assetAirworthiness.alert === controlConfigConstants.ICON_GREEN\r\n              "\r\n              class="alert alert--ok"\r\n            >\r\n              {{ getComponentName() + ".alertOk" | translate }}\r\n            </span>\r\n\r\n            <span\r\n              *ngIf="\r\n                assetAirworthiness.alert !== undefined &&\r\n                assetAirworthiness.alert !== null &&\r\n                assetAirworthiness.alert === controlConfigConstants.ICON_RED\r\n              "\r\n              class="alert alert--nok"\r\n            >\r\n              {{ getComponentName() + ".alertNok" | translate }}\r\n            </span>\r\n\r\n            <span\r\n              *ngIf="\r\n                assetAirworthiness.alert !== undefined &&\r\n                assetAirworthiness.alert !== null &&\r\n                assetAirworthiness.alert === controlConfigConstants.ICON_YELLOW\r\n              "\r\n              class="alert alert--warning"\r\n            >\r\n              {{ getComponentName() + ".alertWarning" | translate }}\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group flex--2">\r\n        <label class="form-label"> {{ getComponentName() + ".designation" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="asset.equipmentDesignation" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ airworthinessTableColTsnLabel }} </label>\r\n\r\n        <div class="form-control" pTooltip="{{ assetAirworthiness._obj.counterTsnTooltip }}" tooltipPosition="top">\r\n          <input type="text" class="aw-input" [(ngModel)]="assetAirworthiness.tsn" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ airworthinessTableColCsnLabel }} </label>\r\n\r\n        <div class="form-control" pTooltip="{{ assetAirworthiness._obj.counterCsnTooltip }}" tooltipPosition="top">\r\n          <input type="text" class="aw-input" [(ngModel)]="assetAirworthiness.csn" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".potential" | translate }} </label>\r\n\r\n        <div\r\n          class="form-control"\r\n          pTooltip="{{ assetAirworthiness._obj.remainingEquivalentTooltip }}"\r\n          tooltipPosition="top"\r\n        >\r\n          <input type="text" class="aw-input" [(ngModel)]="assetAirworthiness.potential" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/asset-view-scope/asset-view-scope.component.ts':
      /*!***************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/asset-view-scope/asset-view-scope.component.ts ***!
  \***************************************************************************************************************************************/
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
          /*! ../../../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _types_airworthiness_row_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../types/airworthiness-row.interface */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/types/airworthiness-row.interface.ts'
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
            this._assetAirworthiness = new _types_airworthiness_row_interface__WEBPACK_IMPORTED_MODULE_7__[
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
                _types_airworthiness_row_interface__WEBPACK_IMPORTED_MODULE_7__['AirworthinessRow']
              ),
              __metadata('design:paramtypes', [
                _types_airworthiness_row_interface__WEBPACK_IMPORTED_MODULE_7__['AirworthinessRow']
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
                  /*! ./asset-view-scope.component.html */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/asset-view-scope/asset-view-scope.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../../share.scss */ './src/app/main/maintenance/airworthiness-control/form/share.scss'
                  )
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

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/dialog-airworthiness-table-full-screen/dialog-airworthiness-table-full-screen.component.html':
      /*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/dialog-airworthiness-table-full-screen/dialog-airworthiness-table-full-screen.component.html ***!
  \*************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-table-fullscreen" [(visible)]="display" [fullScreen]="true">\r\n  <a-header>\r\n    <div class="modal__title-container">\r\n      <div *ngIf="!airworthinessTableOnlyAlertsVisible" class="modal__title">\r\n        {{ getComponentName() + (isAssetViewMode ? ".subAssemblyDetail" : ".detail") | translate }} ({{\r\n          airworthinessTable ? airworthinessTable.length : 0\r\n        }})\r\n      </div>\r\n      <div *ngIf="airworthinessTableOnlyAlertsVisible" class="modal__title">\r\n        {{ getComponentName() + (isAssetViewMode ? ".subAssemblyDetail" : ".detail") | translate }} ({{\r\n          airworthinessTableDisplayedRowNb\r\n        }}\r\n        / {{ airworthinessTable ? airworthinessTable.length : 0 }})\r\n      </div>\r\n    </div>\r\n\r\n    <div class="close"><i class="material-icons" (click)="closeDialog()">close</i></div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <p-table\r\n      [resizableColumns]="true"\r\n      #ptableAsset\r\n      class="aw-table2"\r\n      [columns]="airworthinessTableCols"\r\n      [value]="airworthinessTable"\r\n      [(selection)]="airworthinessTableSelection"\r\n      dataKey="_id"\r\n      [scrollable]="true"\r\n    >\r\n      <ng-template pTemplate="caption">\r\n        <div class="aw-table-header" [ngClass]="{ \'rows-selected\': airworthinessTableSelection.length > 0 }">\r\n          <div class="aw-table-global-filter">\r\n            <label class="aw-table-global-filter-label"> <i class="fa fa-fw fa-search" aria-hidden="true"></i> </label>\r\n\r\n            <input\r\n              #ptableAssetGlobalFilter\r\n              class="aw-table-global-filter-input"\r\n              type="text"\r\n              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n              (input)="ptableAsset.filterGlobal($event.target.value, \'contains\')"\r\n            />\r\n          </div>\r\n\r\n          <div class="aw-table-actions">\r\n            <p-splitButton\r\n              *ngIf="airworthinessTableSelection.length > 0"\r\n              class="aw-split-btn aw-table-action"\r\n              label="{{ getComponentName() + \'.navigate\' | translate }}"\r\n              [model]="navigationLinkList"\r\n            ></p-splitButton>\r\n\r\n            <p-splitButton\r\n              *ngIf="airworthinessTableSelection.length === 0"\r\n              class="aw-split-btn aw-table-action"\r\n              label="{{ getComponentName() + \'.potentialUnit\' | translate }} ({{ potentialUnitSelected }})"\r\n              [model]="potentialUnitList"\r\n            ></p-splitButton>\r\n\r\n            <p-selectButton\r\n              class="aw-table-action"\r\n              [(ngModel)]="airworthinessTableVisibilitySelected"\r\n              [options]="airworthinessTableVisibilityList"\r\n              (onChange)="onChangeAirworthinessTableVisibility()"\r\n            ></p-selectButton>\r\n\r\n            <button\r\n              *ngIf="airworthinessTableSelection.length === 0"\r\n              type="button"\r\n              mat-raised-button\r\n              (click)="exportAirwothinessTable()"\r\n            >\r\n              {{ "global.export" | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="colgroup" let-columns>\r\n        <colgroup>\r\n          <col class="aw-table-checkbox-wrapper" />\r\n          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n        </colgroup>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="header" let-columns>\r\n        <tr>\r\n          <th class="aw-table-checkbox-wrapper">\r\n            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n          </th>\r\n\r\n          <th\r\n            pResizableColumn\r\n            *ngFor="let col of columns"\r\n            [ngSwitch]="col.field"\r\n            [ngStyle]="{ \'text-align\': col.alignment }"\r\n            [pSortableColumn]="col.field"\r\n          >\r\n            <span *ngSwitchCase="\'csn\'">{{ airworthinessTableColCsnLabel }}</span>\r\n\r\n            <span *ngSwitchCase="\'potential\'"> {{ getComponentName() + "." + col.field | translate }} </span>\r\n\r\n            <span *ngSwitchCase="\'tsn\'">{{ airworthinessTableColTsnLabel }}</span>\r\n\r\n            <span *ngSwitchDefault> {{ getComponentName() + "." + col.field | translate }} </span>\r\n\r\n            <p-sortIcon\r\n              [field]="col.field"\r\n              ariaLabel="{{ \'global.activateSort\' | translate }}"\r\n              ariaLabelDesc="{{ \'global.activateSortDesc\' | translate }}"\r\n              ariaLabelAsc="{{ \'global.activateSortAsc\' | translate }}"\r\n            ></p-sortIcon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n        <tr\r\n          *ngIf="\r\n            airworthinessTableOnlyAlertsVisible\r\n              ? rowData[\'alert\'] !== undefined &&\r\n                rowData[\'alert\'] !== null &&\r\n                (rowData[\'alert\'] === controlConfigConstants.ICON_RED ||\r\n                  rowData[\'alert\'] === controlConfigConstants.ICON_YELLOW)\r\n              : true\r\n          "\r\n          [pSelectableRow]="rowData"\r\n          [pSelectableRowIndex]="rowIndex"\r\n        >\r\n          <td class="aw-table-checkbox-wrapper">\r\n            <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n          </td>\r\n\r\n          <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n            <span *ngSwitchCase="\'alert\'">\r\n              <div\r\n                *ngIf="rowData[\'_alertLoading\']"\r\n                class="lds-hourglass display--flex-row"\r\n                [ngClass]="{\r\n                  \'flex-row--justify-center\': col.alignment === \'center\',\r\n                  \'flex-row--justify-left\': col.alignment === \'left\',\r\n                  \'flex-row--justify-right\': col.alignment === \'right\'\r\n                }"\r\n              ></div>\r\n\r\n              <span\r\n                *ngIf="\r\n                  !rowData[\'_alertLoading\'] &&\r\n                  rowData[col.field] !== undefined &&\r\n                  rowData[col.field] !== null &&\r\n                  rowData[col.field].length > 0 &&\r\n                  rowData[col.field] === controlConfigConstants.ICON_GREEN\r\n                "\r\n                class="alert alert--ok"\r\n              >\r\n                {{ getComponentName() + ".alertOk" | translate }}\r\n              </span>\r\n\r\n              <span\r\n                *ngIf="\r\n                  !rowData[\'_alertLoading\'] &&\r\n                  rowData[col.field] !== undefined &&\r\n                  rowData[col.field] !== null &&\r\n                  rowData[col.field].length > 0 &&\r\n                  rowData[col.field] === controlConfigConstants.ICON_RED\r\n                "\r\n                class="alert alert--nok"\r\n              >\r\n                {{ getComponentName() + ".alertNok" | translate }}\r\n              </span>\r\n\r\n              <span\r\n                *ngIf="\r\n                  !rowData[\'_alertLoading\'] &&\r\n                  rowData[col.field] !== undefined &&\r\n                  rowData[col.field] !== null &&\r\n                  rowData[col.field].length > 0 &&\r\n                  rowData[col.field] === controlConfigConstants.ICON_YELLOW\r\n                "\r\n                class="alert alert--warning"\r\n              >\r\n                {{ getComponentName() + ".alertWarning" | translate }}\r\n              </span>\r\n            </span>\r\n\r\n            <span *ngSwitchCase="\'asset\'" pTooltip="{{ rowData[\'_obj\'].counterAlertTooltip }}" tooltipPosition="top">\r\n              <i\r\n                *ngIf="\r\n                  rowData[\'_obj\'].counterAlertStatus !== undefined &&\r\n                  rowData[\'_obj\'].counterAlertStatus !== null &&\r\n                  rowData[\'_obj\'].counterAlertStatus.length > 0 &&\r\n                  (rowData[\'_obj\'].counterAlertStatus !== controlConfigConstants.ICON_RED ||\r\n                    rowData[\'_obj\'].counterAlertStatus !== controlConfigConstants.ICON_YELLOW)\r\n                "\r\n                class="fa fa-fw fa-exclamation-triangle"\r\n                aria-hidden="true"\r\n              ></i>\r\n              {{ rowData[col.field] }}\r\n            </span>\r\n\r\n            <span *ngSwitchCase="\'csn\'" pTooltip="{{ rowData[\'_obj\'].counterCsnTooltip }}" tooltipPosition="top">\r\n              <i\r\n                *ngIf="rowData[\'_obj\'].counterCsnIcon === controlConfigConstants.ICON_YELLOW"\r\n                class="fa fa-fw fa-exclamation-triangle"\r\n                aria-hidden="true"\r\n              ></i>\r\n              {{ rowData[col.field] }}\r\n            </span>\r\n\r\n            <span *ngSwitchCase="\'mp\'" pTooltip="{{ rowData[\'_obj\'].maintenanceProgramTooltip }}" tooltipPosition="top">\r\n              <i\r\n                *ngIf="\r\n                  rowData[\'_obj\'].maintenanceProgramStatus !== undefined &&\r\n                  rowData[\'_obj\'].maintenanceProgramStatus !== null &&\r\n                  rowData[\'_obj\'].maintenanceProgramStatus.length > 0 &&\r\n                  (rowData[\'_obj\'].maintenanceProgramStatus !== controlConfigConstants.ICON_RED ||\r\n                    rowData[\'_obj\'].maintenanceProgramStatus !== controlConfigConstants.ICON_YELLOW)\r\n                "\r\n                class="fa fa-fw fa-exclamation-triangle"\r\n                aria-hidden="true"\r\n              ></i>\r\n              {{ rowData[col.field] }}\r\n            </span>\r\n\r\n            <span\r\n              *ngSwitchCase="\'potential\'"\r\n              pTooltip="{{ rowData[\'_obj\'].remainingEquivalentTooltip }}"\r\n              tooltipPosition="top"\r\n            >\r\n              <div\r\n                *ngIf="rowData[\'_potentialLoading\']"\r\n                class="lds-hourglass display--flex-row"\r\n                [ngClass]="{\r\n                  \'flex-row--justify-center\': col.alignment === \'center\',\r\n                  \'flex-row--justify-left\': col.alignment === \'left\',\r\n                  \'flex-row--justify-right\': col.alignment === \'right\'\r\n                }"\r\n              ></div>\r\n\r\n              <i\r\n                *ngIf="\r\n                  !rowData[\'_potentialLoading\'] &&\r\n                  rowData[\'_obj\'].remainingEquivalentIcon !== undefined &&\r\n                  rowData[\'_obj\'].remainingEquivalentIcon !== null &&\r\n                  rowData[\'_obj\'].remainingEquivalentIcon.length > 0 &&\r\n                  (rowData[\'_obj\'].remainingEquivalentIcon !== controlConfigConstants.ICON_RED ||\r\n                    rowData[\'_obj\'].remainingEquivalentIcon !== controlConfigConstants.ICON_YELLOW)\r\n                "\r\n                class="fa fa-fw fa-exclamation-triangle"\r\n                aria-hidden="true"\r\n              ></i>\r\n              <span *ngIf="!rowData[\'_potentialLoading\']">{{ rowData[col.field] }}</span>\r\n            </span>\r\n\r\n            <span *ngSwitchCase="\'tsn\'" pTooltip="{{ rowData[\'_obj\'].counterTsnTooltip }}" tooltipPosition="top">\r\n              <i\r\n                *ngIf="rowData[\'_obj\'].counterTsnIcon === controlConfigConstants.ICON_YELLOW"\r\n                class="fa fa-fw fa-exclamation-triangle"\r\n                aria-hidden="true"\r\n              ></i>\r\n              {{ rowData[col.field] }}\r\n            </span>\r\n\r\n            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </a-content>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/dialog-airworthiness-table-full-screen/dialog-airworthiness-table-full-screen.component.ts':
      /*!***********************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/dialog-airworthiness-table-full-screen/dialog-airworthiness-table-full-screen.component.ts ***!
  \***********************************************************************************************************************************************************************************/
      /*! exports provided: DialogAirworthinessTableFullScreenComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogAirworthinessTableFullScreenComponent',
          function() {
            return DialogAirworthinessTableFullScreenComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _enums_airworthiness_table_visibility_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../enums/airworthiness-table-visibility.enum */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/enums/airworthiness-table-visibility.enum.ts'
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

        var DialogAirworthinessTableFullScreenComponent = /** @class */ (function(_super) {
          __extends(DialogAirworthinessTableFullScreenComponent, _super);
          function DialogAirworthinessTableFullScreenComponent() {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'DialogAirworthinessTableFullScreenComponent'
              ) || this;
            _this.controlConfigConstants =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_1__['ControlConfigConstants'];
            _this.setAssetTableCols();
            _this.init();
            return _this;
          }
          Object.defineProperty(
            DialogAirworthinessTableFullScreenComponent.prototype,
            'airworthinessTableOnlyAlertsVisible',
            {
              get: function() {
                return this._airworthinessTableOnlyAlertsVisible;
              },
              set: function(value) {
                this._airworthinessTableOnlyAlertsVisible = value;
                this.airworthinessTableOnlyAlertsVisibleChange.emit(this._airworthinessTableOnlyAlertsVisible);
              },
              enumerable: true,
              configurable: true
            }
          );
          Object.defineProperty(
            DialogAirworthinessTableFullScreenComponent.prototype,
            'airworthinessTableVisibilitySelected',
            {
              get: function() {
                return this._airworthinessTableVisibilitySelected;
              },
              set: function(value) {
                this._airworthinessTableVisibilitySelected = value;
                this.airworthinessTableVisibilitySelectedChange.emit(this._airworthinessTableVisibilitySelected);
              },
              enumerable: true,
              configurable: true
            }
          );
          Object.defineProperty(DialogAirworthinessTableFullScreenComponent.prototype, 'potentialUnitSelected', {
            get: function() {
              return this._potentialUnitSelected;
            },
            set: function(value) {
              this._potentialUnitSelected = value;
              this.potentialUnitSelectedChange.emit(this._potentialUnitSelected);
            },
            enumerable: true,
            configurable: true
          });
          DialogAirworthinessTableFullScreenComponent.prototype.onChangeAirworthinessTableVisibility = function() {
            this.airworthinessTableOnlyAlertsVisible =
              this.airworthinessTableVisibilitySelected ===
              _enums_airworthiness_table_visibility_enum__WEBPACK_IMPORTED_MODULE_4__['AirworthinessTableVisibility']
                .OnlyAlerts;
          };
          DialogAirworthinessTableFullScreenComponent.prototype.init = function() {
            this.airworthinessTableOnlyAlertsVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'EventEmitter'
            ]();
            this.airworthinessTableVisibilitySelectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'EventEmitter'
            ]();
            this.potentialUnitSelectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.airworthinessTableSelection = [];
          };
          DialogAirworthinessTableFullScreenComponent.prototype.setAssetTableCols = function() {
            this.airworthinessTableCols = [
              { field: 'alert', alignment: 'center', width: '5rem' },
              { field: 'asset', alignment: 'left', width: '15rem' },
              { field: 'designation', alignment: 'left', width: '25rem' },
              { field: 'potential', alignment: 'left', width: '15rem' },
              { field: 'tsn', alignment: 'left', width: '10rem' },
              { field: 'csn', alignment: 'left', width: '10rem' },
              { field: 'status', alignment: 'left', width: '15rem' },
              { field: 'mp', alignment: 'left', width: '15rem' },
              { field: 'nextWorkPackage', alignment: 'left', width: '15rem' }
            ];
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('table'), __metadata('design:type', Array)],
            DialogAirworthinessTableFullScreenComponent.prototype,
            'airworthinessTable',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('csnLabel'),
              __metadata('design:type', String)
            ],
            DialogAirworthinessTableFullScreenComponent.prototype,
            'airworthinessTableColCsnLabel',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('tsnLabel'),
              __metadata('design:type', String)
            ],
            DialogAirworthinessTableFullScreenComponent.prototype,
            'airworthinessTableColTsnLabel',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogAirworthinessTableFullScreenComponent.prototype,
            'airworthinessTableDisplayedRowNb',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogAirworthinessTableFullScreenComponent.prototype,
            'airworthinessTableVisibilityList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogAirworthinessTableFullScreenComponent.prototype,
            'isAssetViewMode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogAirworthinessTableFullScreenComponent.prototype,
            'navigationLinkList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogAirworthinessTableFullScreenComponent.prototype,
            'potentialUnitList',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Boolean),
              __metadata('design:paramtypes', [Object])
            ],
            DialogAirworthinessTableFullScreenComponent.prototype,
            'airworthinessTableOnlyAlertsVisible',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Number),
              __metadata('design:paramtypes', [Object])
            ],
            DialogAirworthinessTableFullScreenComponent.prototype,
            'airworthinessTableVisibilitySelected',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', String),
              __metadata('design:paramtypes', [Object])
            ],
            DialogAirworthinessTableFullScreenComponent.prototype,
            'potentialUnitSelected',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogAirworthinessTableFullScreenComponent.prototype,
            'airworthinessTableOnlyAlertsVisibleChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogAirworthinessTableFullScreenComponent.prototype,
            'airworthinessTableVisibilitySelectedChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogAirworthinessTableFullScreenComponent.prototype,
            'potentialUnitSelectedChange',
            void 0
          );
          DialogAirworthinessTableFullScreenComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-airworthiness-table-full-screen',
                template: __webpack_require__(
                  /*! ./dialog-airworthiness-table-full-screen.component.html */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/dialog-airworthiness-table-full-screen/dialog-airworthiness-table-full-screen.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../../share.scss */ './src/app/main/maintenance/airworthiness-control/form/share.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            DialogAirworthinessTableFullScreenComponent
          );
          return DialogAirworthinessTableFullScreenComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/enums/airworthiness-table-visibility.enum.ts':
      /*!*************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/enums/airworthiness-table-visibility.enum.ts ***!
  \*************************************************************************************************************************************/
      /*! exports provided: AirworthinessTableVisibility */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AirworthinessTableVisibility',
          function() {
            return AirworthinessTableVisibility;
          }
        );
        var AirworthinessTableVisibility;
        (function(AirworthinessTableVisibility) {
          AirworthinessTableVisibility[(AirworthinessTableVisibility['All'] = 0)] = 'All';
          AirworthinessTableVisibility[(AirworthinessTableVisibility['OnlyAlerts'] = 1)] = 'OnlyAlerts';
        })(AirworthinessTableVisibility || (AirworthinessTableVisibility = {}));

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/fleet-view-scope/fleet-view-scope.component.html':
      /*!*****************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/fleet-view-scope/fleet-view-scope.component.html ***!
  \*****************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="grid-cell-header">\r\n  <div class="grid-cell-title-container">\r\n    <h3 class="grid-cell-title">{{ "global.scope" | translate }}</h3>\r\n  </div>\r\n</div>\r\n\r\n<div class="grid-cell-content">\r\n  <div class="column">\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".assetFunction" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="topAssetTypeList" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ "global.familyVariant" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="topFamilyVariantList" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="topWarehouse" class="form-group">\r\n        <label class="form-label"> {{ "global.warehouse" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="topWarehouse" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/fleet-view-scope/fleet-view-scope.component.ts':
      /*!***************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/fleet-view-scope/fleet-view-scope.component.ts ***!
  \***************************************************************************************************************************************/
      /*! exports provided: FleetViewScopeComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FleetViewScopeComponent',
          function() {
            return FleetViewScopeComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
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

        var FleetViewScopeComponent = /** @class */ (function(_super) {
          __extends(FleetViewScopeComponent, _super);
          function FleetViewScopeComponent() {
            return (
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write
              ) || this
            );
          }
          FleetViewScopeComponent.prototype.getComponentName = function() {
            return 'FleetViewScopeComponent';
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            FleetViewScopeComponent.prototype,
            'topAssetTypeList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            FleetViewScopeComponent.prototype,
            'topFamilyVariantList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            FleetViewScopeComponent.prototype,
            'topWarehouse',
            void 0
          );
          FleetViewScopeComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-airworthiness-table-fleet-view-scope',
                template: __webpack_require__(
                  /*! ./fleet-view-scope.component.html */ './src/app/main/maintenance/airworthiness-control/form/airworthiness-control-form/fleet-view-scope/fleet-view-scope.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../../share.scss */ './src/app/main/maintenance/airworthiness-control/form/share.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            FleetViewScopeComponent
          );
          return FleetViewScopeComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_2__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-interdependence-data/dialog-interdependence-data.component.html':
      /*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-interdependence-data/dialog-interdependence-data.component.html ***!
  \**************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="header">\r\n      <i class="fa fa-fw fa-exclamation-triangle" aria-hidden="true"></i>\r\n      <span>{{ getComponentName() + ".interdependenceIssues" | translate }}</span>\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <ul>\r\n      <li *ngFor="let interdependenceData of interdependenceDataList">{{ interdependenceData }}</li>\r\n    </ul>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="reject()">{{ "global.cancel" | translate }}</button>\r\n\r\n    <button type="button" mat-raised-button (click)="accept()">{{ "global.ok" | translate }}</button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-interdependence-data/dialog-interdependence-data.component.scss':
      /*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-interdependence-data/dialog-interdependence-data.component.scss ***!
  \**************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .header {\n  color: #fba643; }\n  :host .header > i {\n    font-size: 1rem;\n    margin-right: calc(8px / 2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9zY2hlZHVsZS1tYWludGVuYW5jZS1mb3JtL2RpYWxvZy1pbnRlcmRlcGVuZGVuY2UtZGF0YS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbWFpbnRlbmFuY2VcXGFpcndvcnRoaW5lc3MtY29udHJvbFxcZm9ybVxcc2NoZWR1bGUtbWFpbnRlbmFuY2UtZm9ybVxcZGlhbG9nLWludGVyZGVwZW5kZW5jZS1kYXRhXFxkaWFsb2ctaW50ZXJkZXBlbmRlbmNlLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvYWlyd29ydGhpbmVzcy1jb250cm9sL2Zvcm0vc2NoZWR1bGUtbWFpbnRlbmFuY2UtZm9ybS9kaWFsb2ctaW50ZXJkZXBlbmRlbmNlLWRhdGEvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGNDMEJ5QixFQUFBO0VENUI3QjtJQUtNLGVBQWU7SUFDZiwyQkFBd0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvYWlyd29ydGhpbmVzcy1jb250cm9sL2Zvcm0vc2NoZWR1bGUtbWFpbnRlbmFuY2UtZm9ybS9kaWFsb2ctaW50ZXJkZXBlbmRlbmNlLWRhdGEvZGlhbG9nLWludGVyZGVwZW5kZW5jZS1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgY29sb3I6ICRjcml0aWNhbC12YWx1ZS1kYXJrO1xyXG5cclxuICAgICYgPiBpIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-interdependence-data/dialog-interdependence-data.component.ts':
      /*!************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-interdependence-data/dialog-interdependence-data.component.ts ***!
  \************************************************************************************************************************************************************/
      /*! exports provided: DialogInterdependenceDataComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogInterdependenceDataComponent',
          function() {
            return DialogInterdependenceDataComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
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

        var DialogInterdependenceDataComponent = /** @class */ (function(_super) {
          __extends(DialogInterdependenceDataComponent, _super);
          function DialogInterdependenceDataComponent() {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogInterdependenceDataComponent'
              ) || this;
            _this.init();
            return _this;
          }
          DialogInterdependenceDataComponent.prototype.accept = function() {
            this.onAccept.emit();
          };
          DialogInterdependenceDataComponent.prototype.reject = function() {
            this.onReject.emit();
          };
          DialogInterdependenceDataComponent.prototype.init = function() {
            this.interdependenceDataList = [];
            this.onAccept = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.onReject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogInterdependenceDataComponent.prototype,
            'interdependenceDataList',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogInterdependenceDataComponent.prototype,
            'onAccept',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogInterdependenceDataComponent.prototype,
            'onReject',
            void 0
          );
          DialogInterdependenceDataComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-interdependence-data',
                template: __webpack_require__(
                  /*! ./dialog-interdependence-data.component.html */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-interdependence-data/dialog-interdependence-data.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-interdependence-data.component.scss */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-interdependence-data/dialog-interdependence-data.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            DialogInterdependenceDataComponent
          );
          return DialogInterdependenceDataComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-last-task-applications/dialog-last-task-applications.component.html':
      /*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-last-task-applications/dialog-last-task-applications.component.html ***!
  \******************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="50">\r\n  <a-header>\r\n    <div class="modal-title">\r\n      {{ getComponentName() + ".title" | translate }} ({{\r\n        taskApplicationHistoryTable ? taskApplicationHistoryTable.length : 0\r\n      }})\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div\r\n        *ngIf="isCreateOpenMode || (isWriteOpenMode && taskApplicationHistoryTableSelected)"\r\n        class="row object-details"\r\n      >\r\n        <div class="column">\r\n          <div class="row">\r\n            <div class="form-group required">\r\n              <label class="form-label"> {{ getComponentName() + ".applicationDate" | translate }} </label>\r\n\r\n              <div class="form-control">\r\n                <p-calendar\r\n                  showButtonBar="true"\r\n                  [monthNavigator]="true"\r\n                  [yearNavigator]="true"\r\n                  [yearRange]="sessionService.calendarYearRange"\r\n                  class="aw-calendar"\r\n                  [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                  [locale]="sessionService.calendarFormat"\r\n                  [(ngModel)]="taskApplication.applicationDate"\r\n                  [showTime]="true"\r\n                  appendTo="body"\r\n                ></p-calendar>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group flex--3 required">\r\n              <label class="form-label"> {{ getComponentName() + ".comment" | translate }} </label>\r\n\r\n              <div class="form-control">\r\n                <textarea\r\n                  class="aw-textarea"\r\n                  [rows]="3"\r\n                  pInputTextarea\r\n                  [(ngModel)]="taskApplication.comment"\r\n                ></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row actions-bar">\r\n            <button\r\n              type="button"\r\n              mat-raised-button\r\n              color="primary"\r\n              (click)="saveTaskApplication()"\r\n              [disabled]="!isTaskApplicationValid()"\r\n            >\r\n              {{ getComponentName() + ".validate" | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <p-table\r\n          [resizableColumns]="true"\r\n          #ptableTaskApplicationHistory\r\n          class="aw-table2"\r\n          [columns]="taskApplicationHistoryTableColList"\r\n          [value]="taskApplicationHistoryTable"\r\n          [(selection)]="taskApplicationHistoryTableSelected"\r\n          selectionMode="single"\r\n          [scrollable]="true"\r\n          (onRowSelect)="onRowSelect()"\r\n          (onRowUnselect)="onRowUnselect()"\r\n        >\r\n          <ng-template pTemplate="emptymessage">\r\n            <span *ngIf="!taskApplicationHistoryTableLoading"> &nbsp;</span>\r\n\r\n            <div *ngIf="taskApplicationHistoryTableLoading" class="aw-table-loading-indicator">\r\n              <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n              <div class="lds-hourglass"></div>\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="caption">\r\n            <div class="aw-table-header" [ngClass]="{ \'rows-selected\': taskApplicationHistoryTableSelected }">\r\n              <div class="aw-table-global-filter">\r\n                <label class="aw-table-global-filter-label">\r\n                  <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                </label>\r\n\r\n                <input\r\n                  #ptableTaskApplicationHistoryGlobalFilter\r\n                  class="aw-table-global-filter-input"\r\n                  type="text"\r\n                  placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                  (input)="ptableTaskApplicationHistory.filterGlobal($event.target.value, \'contains\')"\r\n                />\r\n              </div>\r\n\r\n              <div class="aw-table-actions">\r\n                <button\r\n                  *ngIf="taskApplicationHistoryTableSelected && isFirstRowSelected()"\r\n                  type="button"\r\n                  mat-raised-button\r\n                  [ngClass]="{ active: isWriteOpenMode }"\r\n                  (click)="toggleWriteOpenMode()"\r\n                >\r\n                  {{ getComponentName() + ".edit" | translate }}\r\n                </button>\r\n\r\n                <button\r\n                  *ngIf="!taskApplicationHistoryTableSelected"\r\n                  type="button"\r\n                  mat-raised-button\r\n                  [ngClass]="{ active: isCreateOpenMode }"\r\n                  (click)="toggleCreateOpenMode()"\r\n                >\r\n                  {{ getComponentName() + ".add" | translate }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="colgroup" let-columns>\r\n            <colgroup>\r\n              <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n            </colgroup>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="header" let-columns>\r\n            <tr>\r\n              <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                {{ getComponentName() + "." + col.field | translate }}\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n            <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n              <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                <a *ngSwitchCase="\'notificationCode\'" (click)="openEventUC(rowData)">\r\n                  {{ rowData[col.field] }}\r\n                </a>\r\n                <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </p-table>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-last-task-applications/dialog-last-task-applications.component.ts':
      /*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-last-task-applications/dialog-last-task-applications.component.ts ***!
  \****************************************************************************************************************************************************************/
      /*! exports provided: DialogLastTaskApplicationsComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogLastTaskApplicationsComponent',
          function() {
            return DialogLastTaskApplicationsComponent;
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
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _schedule_maintenance_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../schedule-maintenance-form.service */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.service.ts'
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

        var DialogLastTaskApplicationsComponent = /** @class */ (function(_super) {
          __extends(DialogLastTaskApplicationsComponent, _super);
          function DialogLastTaskApplicationsComponent(
            serializationService,
            tabService,
            scheduleMaintenanceFormService,
            sessionService,
            dateService,
            messageService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read,
                'DialogLastTaskApplicationsComponent'
              ) || this;
            _this.serializationService = serializationService;
            _this.tabService = tabService;
            _this.scheduleMaintenanceFormService = scheduleMaintenanceFormService;
            _this.sessionService = sessionService;
            _this.dateService = dateService;
            _this.messageService = messageService;
            _this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.init();
            _this.initTaskApplicationHistoryTableColList();
            return _this;
          }
          DialogLastTaskApplicationsComponent.prototype.ngOnDestroy = function() {
            this.onClose.emit(this.updated);
          };
          DialogLastTaskApplicationsComponent.prototype.ngOnInit = function() {
            this.load();
          };
          DialogLastTaskApplicationsComponent.prototype.isFirstRowSelected = function() {
            return (
              !!this.taskApplicationHistoryTableSelected &&
              this.taskApplicationHistoryTable.indexOf(this.taskApplicationHistoryTableSelected) === 0
            );
          };
          DialogLastTaskApplicationsComponent.prototype.isTaskApplicationValid = function() {
            return (
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_11__['ObjectUtils'].isDefined(
                this.taskApplication.applicationDate
              ) &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].isNullOrEmpty(
                this.taskApplication.comment
              )
            );
          };
          DialogLastTaskApplicationsComponent.prototype.onRowSelect = function() {
            if (this.isReadOpenMode || this.isWriteOpenMode) {
              this.clearTaskApplication();
            }
            if (this.isWriteOpenMode) {
              _super.prototype.updateOpenMode.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read
              );
            }
          };
          DialogLastTaskApplicationsComponent.prototype.onRowUnselect = function() {
            if (this.isReadOpenMode || this.isWriteOpenMode) {
              this.clearTaskApplication();
            }
            if (this.isWriteOpenMode) {
              _super.prototype.updateOpenMode.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read
              );
            }
          };
          DialogLastTaskApplicationsComponent.prototype.toggleCreateOpenMode = function() {
            _super.prototype.updateOpenMode.call(
              this,
              this.isCreateOpenMode
                ? _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read
                : _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Create
            );
            this.toggleOpenMode();
          };
          DialogLastTaskApplicationsComponent.prototype.toggleWriteOpenMode = function() {
            _super.prototype.updateOpenMode.call(
              this,
              this.isWriteOpenMode
                ? _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read
                : _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write
            );
            this.toggleOpenMode();
          };
          DialogLastTaskApplicationsComponent.prototype.saveTaskApplication = function() {
            var _this = this;
            if (this.checkApplicationDate(this.taskApplication.applicationDate)) {
              this.taskApplication.applicationDateUpdated = this.taskApplication.applicationDate;
              this.taskApplication.maintenancePlanTaskApplication = this.taskApplicationHistoryTableSelected
                ? this.taskApplicationHistoryTableSelected._obj.maintenancePlanTaskApplication
                : undefined;
              var input = {
                topEquipmentCode: this.topEquipmentCode,
                selectedRowId: this.selectedRow._id,
                taskApplication: this.taskApplication
              };
              if (this.taskApplicationHistoryTableSelected) {
                this.scheduleMaintenanceFormService.updateTask(input).subscribe(function(_) {
                  _this.endTaskApplicationSave();
                });
              } else {
                this.scheduleMaintenanceFormService.applyTask(input).subscribe(function(_) {
                  _this.endTaskApplicationSave();
                });
              }
            }
          };
          DialogLastTaskApplicationsComponent.prototype.clearTaskApplication = function() {
            this.taskApplication = {};
          };
          DialogLastTaskApplicationsComponent.prototype.checkApplicationDate = function(dateToCheck) {
            var isDateValid = true;
            var momentToCheck = moment__WEBPACK_IMPORTED_MODULE_1__(dateToCheck);
            // Check given date is not in the future
            if (momentToCheck.isAfter(moment__WEBPACK_IMPORTED_MODULE_1__())) {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnDateInTheFuture'));
              isDateValid = false;
            }
            // Check given date is the most recent
            var isMostRecentDate = this.taskApplicationHistoryTable
              .map(function(row) {
                return moment__WEBPACK_IMPORTED_MODULE_1__(new Date(row.applicationDate));
              })
              .every(function(date) {
                return date.isBefore(momentToCheck);
              });
            if (!isMostRecentDate) {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnDateNotTheMostRecent'));
              isDateValid = false;
            }
            return isDateValid;
          };
          DialogLastTaskApplicationsComponent.prototype.createTaskApplicationHistoryRow = function(element) {
            var row = {
              applicationDate: this.dateService.dateToString(element.applicationDate),
              comment: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].orEmpty(element.comment),
              notificationCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].orEmpty(
                element.notificationCode
              ),
              _obj: element
            };
            return row;
          };
          DialogLastTaskApplicationsComponent.prototype.endTaskApplicationSave = function() {
            this.init();
            this.load();
            _super.prototype.updateOpenMode.call(
              this,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read
            );
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveTaskApplication'));
            this.updated = true;
          };
          DialogLastTaskApplicationsComponent.prototype.init = function() {
            this.taskApplicationHistoryTable = [];
            this.taskApplicationHistoryTableLoading = false;
            this.taskApplicationHistoryTableSelected = undefined;
            this.updated = false;
            this.clearTaskApplication();
          };
          DialogLastTaskApplicationsComponent.prototype.initTaskApplicationHistoryTableColList = function() {
            this.taskApplicationHistoryTableColList = [
              { field: 'applicationDate', alignment: 'left', width: '20%' },
              { field: 'comment', alignment: 'left', width: '55%' },
              { field: 'notificationCode', alignment: 'left', width: '25%' }
            ];
          };
          DialogLastTaskApplicationsComponent.prototype.load = function() {
            var _this = this;
            this.taskApplicationHistoryTableLoading = true;
            var input = {
              topEquipmentCode: this.topEquipmentCode,
              selectedRowId: this.selectedRow._id
            };
            this.scheduleMaintenanceFormService.getTaskApplicationHistory(input).subscribe(function(result) {
              _this.taskApplicationHistoryTableLoading = false;
              _this.taskApplicationHistoryTable = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                .orEmpty(result)
                .map(function(element) {
                  return _this.createTaskApplicationHistoryRow(element);
                })
                .sort(_this.sortTaskApplicationList);
            });
          };
          DialogLastTaskApplicationsComponent.prototype.sortTaskApplicationList = function(elt1, elt2) {
            var moment1 = moment__WEBPACK_IMPORTED_MODULE_1__(new Date(elt1.applicationDate));
            var moment2 = moment__WEBPACK_IMPORTED_MODULE_1__(new Date(elt2.applicationDate));
            if (moment1.isBefore(moment2)) {
              return 1;
            } else if (moment1.isAfter(moment2)) {
              return -1;
            } else {
              return 0;
            }
          };
          DialogLastTaskApplicationsComponent.prototype.toggleOpenMode = function() {
            if (this.isCreateOpenMode || this.isWriteOpenMode) {
              this.clearTaskApplication();
            }
            if (this.taskApplicationHistoryTableSelected) {
              this.taskApplication = {
                applicationDate: new Date(this.taskApplicationHistoryTableSelected.applicationDate),
                comment: this.taskApplicationHistoryTableSelected.comment
              };
            }
          };
          DialogLastTaskApplicationsComponent.prototype.openEventUC = function(event) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
                  .FLE_EVENT_CREATE,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read
            };
            if (!!event) {
              var eventId = {
                notificationCode: event.notificationCode
              };
              data.objectId = this.serializationService.serialize(eventId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
            this.closeDialog();
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogLastTaskApplicationsComponent.prototype,
            'selectedRow',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogLastTaskApplicationsComponent.prototype,
            'topEquipmentCode',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogLastTaskApplicationsComponent.prototype,
            'onClose',
            void 0
          );
          DialogLastTaskApplicationsComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-last-task-applications',
                template: __webpack_require__(
                  /*! ./dialog-last-task-applications.component.html */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-last-task-applications/dialog-last-task-applications.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../share.scss */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/share.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__['TabService'],
                _schedule_maintenance_form_service__WEBPACK_IMPORTED_MODULE_13__['ScheduleMaintenanceFormService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__['SessionService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__['DateService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService']
              ])
            ],
            DialogLastTaskApplicationsComponent
          );
          return DialogLastTaskApplicationsComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_9__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-calendar/dialog-schedule-maintenance-calendar.component.html':
      /*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-calendar/dialog-schedule-maintenance-calendar.component.html ***!
  \********************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-table-fullscreen" [(visible)]="display" [fullScreen]="true">\r\n  <a-header>\r\n    <div class="modal-title">\r\n      {{ getComponentName() + ".title" | translate }}\r\n    </div>\r\n\r\n    <div class="close-wrapper">\r\n      <i class="aw-icon aw-icon-with-border fa fa-fw fa-minus" (click)="closeDialog()"></i>\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row top-bar">\r\n        <div class="calendar-navigation">\r\n          <button type="button" class="calendar-navigation__btn-today" (click)="showCurrentMonth()">\r\n            {{ "calendar.today" | translate }}\r\n          </button>\r\n\r\n          <button type="button" class="calendar-navigation__btn-previous-month" (click)="showPreviousMonth()">\r\n            <i class="fa fa-fw fa-chevron-left" aria-hidden="true"></i>\r\n          </button>\r\n\r\n          <button type="button" class="calendar-navigation__btn-next-month" (click)="showNextMonth()">\r\n            <i class="fa fa-fw fa-chevron-right" aria-hidden="true"></i>\r\n          </button>\r\n        </div>\r\n\r\n        <div class="current-date">\r\n          {{ currentYear }}.{{ currentMonth.toString().length === 1 ? "0" + currentMonth : currentMonth }}\r\n        </div>\r\n\r\n        <!-- <div class="calendar-search">\r\n          <input\r\n            class="calendar-search__input"\r\n            type="text"\r\n            placeholder="{{ \'global.search\' | translate }}"\r\n            [(ngModel)]="searchText"\r\n            (keyup)="search(searchText)"\r\n          />\r\n\r\n          <i\r\n            class="material-icons calendar-search__btn"\r\n            [ngClass]="{ visible: isSearchClearButtonVisible() }"\r\n            (click)="clearSearchText()"\r\n            >close</i\r\n          >\r\n        </div> -->\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="calendar" [ngClass]="{ \'on-resize\': resizedWorkPackage }">\r\n          <div class="calendar__header">\r\n            <div class="calendar-day-header" *ngFor="let dayName of dayNamesShort">\r\n              {{ "calendar." + dayName | translate }}\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            class="calendar__week"\r\n            *ngFor="let _ of \' \'.repeat(calendarDays.length / 7).split(\'\'); let weekIndex = index"\r\n          >\r\n            <div\r\n              id="drop-wp-{{ weekIndex }}-{{ weekDayIndex }}"\r\n              class="calendar-day-container"\r\n              pDroppable="dd-work-package"\r\n              (onDrop)="dropWorkPackage($event)"\r\n              *ngFor="\r\n                let calendarDay of calendarDays.slice(weekIndex * 7, (weekIndex + 1) * 7);\r\n                let weekDayIndex = index\r\n              "\r\n              (mouseup)="endResize($event)"\r\n            >\r\n              <div class="calendar-month-day-header" [ngClass]="{ \'droppable-work-package\': draggedWorkPackage }">\r\n                <div class="calendar-month-day-wrapper" (click)="openCalendarDayDialog($event)">\r\n                  <div\r\n                    class="calendar-month-day"\r\n                    [ngClass]="{\r\n                      \'current-month\': calendarDay.moment.month() + 1 === currentMonth,\r\n                      today:\r\n                        calendarDay.moment.format(\'D\') === today &&\r\n                        calendarDay.moment.month() + 1 === todayMonth &&\r\n                        calendarDay.moment.year() == todayYear,\r\n                      \'search-result\': selectedCalendarDays.includes(+weekIndex * 7 + +weekDayIndex)\r\n                    }"\r\n                  >\r\n                    {{ calendarDay.moment.format("D") }}\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- <div class="calendar-day-alerts">\r\n                        <i class="fa fa-exclamation-triangle warning" aria-hidden="true" (click)="openAlertDialog($event)"></i>\r\n                        <i class="fa fa-exclamation-circle danger" aria-hidden="true" (click)="openAlertDialog($event)"></i>\r\n                    </div> -->\r\n              </div>\r\n\r\n              <div class="calendar-day-events" [ngClass]="{ \'resizable-work-package\': resizedWorkPackage }">\r\n                <div\r\n                  class="calendar-day-fake-work-package"\r\n                  *ngFor="let _ of \' \'.repeat(calendarDay._fakeWorkPackageNb).split(\'\')"\r\n                ></div>\r\n\r\n                <div\r\n                  id="drop-me-{{ workPackage.id }}"\r\n                  class="calendar-day-work-package"\r\n                  pDroppable="dd-maintenance-events"\r\n                  (onDrop)="dropMaintenanceEvent($event)"\r\n                  [ngClass]="{\r\n                    \'droppable-maintenance-event\': draggedMaintenanceEvent,\r\n                    \'draggable-work-package\': draggedWorkPackage && draggedWorkPackage.id === workPackage.id,\r\n                    \'status-simulated\': workPackage.isSimulated,\r\n                    \'status-scheduled\': workPackage.isScheduled,\r\n                    \'status-other\': !workPackage.isSimulated && !workPackage.isScheduled\r\n                  }"\r\n                  [ngStyle]="{\r\n                    width: \'calc(\' + workPackage.weekDuration + \' * 100% + \' + (workPackage.weekDuration - 1) + \'* 7px)\'\r\n                  }"\r\n                  *ngFor="let workPackage of calendarDay.workPackages"\r\n                >\r\n                  <i\r\n                    *ngIf="showStartDateResizeHandler(workPackage, weekIndex)"\r\n                    class="fa fa-fw fa-ellipsis-v start-date-resize-handler"\r\n                    aria-hidden="true"\r\n                    (mousedown)="updateWorkPackageStartDate($event, workPackage)"\r\n                  ></i>\r\n\r\n                  <div\r\n                    *ngIf="\r\n                      calendarDay.moment.date() === workPackage.startDate.date() &&\r\n                      calendarDay.moment.month() === workPackage.startDate.month()\r\n                    "\r\n                    class="calendar-day-work-package-icon"\r\n                  >\r\n                    <i class="fa fa-fw fa-folder-open" aria-hidden="true"></i>\r\n                  </div>\r\n\r\n                  <div\r\n                    id="drag-wp-{{ weekIndex }}-{{ weekDayIndex }}"\r\n                    class="calendar-day-work-package-name"\r\n                    pDraggable="dd-work-package"\r\n                    (onDragStart)="startWorkPackageDrag($event, workPackage)"\r\n                    (onDragEnd)="endWorkPackageDrag()"\r\n                    (click)="openWorkPackageDialog($event, workPackage)"\r\n                  >\r\n                    <span>WP n°{{ workPackage.name }}</span>\r\n                  </div>\r\n\r\n                  <i\r\n                    *ngIf="showEndDateResizeHandler(workPackage, weekIndex)"\r\n                    class="fa fa-fw fa-ellipsis-v end-date-resize-handler"\r\n                    aria-hidden="true"\r\n                    (mousedown)="updateWorkPackageEndDate($event, workPackage)"\r\n                  ></i>\r\n                </div>\r\n\r\n                <div\r\n                  class="calendar-day-flight"\r\n                  *ngIf="calendarDay.flights && calendarDay.flights.length > 0"\r\n                  (click)="openFlightDialog($event, calendarDay.flights)"\r\n                >\r\n                  <div class="calendar-day-flight-icon"><i class="fa fa-fw fa-plane" aria-hidden="true"></i></div>\r\n\r\n                  <div class="calendar-day-flight-name">\r\n                    {{ calendarDay.flights.length }}\r\n                    <span *ngIf="calendarDay.flights.length === 1">{{ "global.flight" | translate }}</span>\r\n                    <span *ngIf="calendarDay.flights.length !== 1">{{ "global.flights" | translate }}</span>\r\n                  </div>\r\n                </div>\r\n\r\n                <div\r\n                  class="calendar-day-maintenance-event"\r\n                  [ngStyle]="{\r\n                    \'border-bottom-width\':\r\n                      draggedMaintenanceEvent && draggedMaintenanceEvent.id === maintenanceEvent.id ? \'1px\' : \'0\'\r\n                  }"\r\n                  *ngFor="let maintenanceEvent of calendarDay.maintenanceEvents"\r\n                  (click)="openMaintenanceEventDialog($event)"\r\n                >\r\n                  <div class="calendar-day-maintenance-event-icons">\r\n                    <i\r\n                      class="fa fa-fw fa-circle calendar-day-maintenance-event-group-icon"\r\n                      [style.color]="maintenanceEvent.color"\r\n                      aria-hidden="true"\r\n                    ></i>\r\n                    <i\r\n                      class="fa fa-fw calendar-day-maintenance-event-type-icon"\r\n                      [ngClass]="maintenanceEvent.icon"\r\n                      aria-hidden="true"\r\n                    ></i>\r\n                  </div>\r\n\r\n                  <div\r\n                    id="drag-me-{{ weekIndex }}-{{ weekDayIndex }}"\r\n                    class="calendar-day-maintenance-event-name"\r\n                    pDraggable="dd-maintenance-events"\r\n                    (onDragStart)="startMaintenanceEventDrag($event, maintenanceEvent)"\r\n                    (onDragEnd)="endMaintenanceEventDrag()"\r\n                  >\r\n                    {{ maintenanceEvent.name }}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n</a-modal>\r\n\r\n<aw-dialog-work-package\r\n  *ngIf="showCalendarDayDialog"\r\n  [(display)]="showCalendarDayDialog"\r\n  [startDate]="selectedDate"\r\n  (onValidated)="createWorkPackage($event)"\r\n></aw-dialog-work-package>\r\n\r\n<aw-dialog-work-package\r\n  *ngIf="showWorkPackageDialog"\r\n  [(display)]="showWorkPackageDialog"\r\n  [workPackage]="selectedWorkPackage"\r\n></aw-dialog-work-package>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-calendar/dialog-schedule-maintenance-calendar.component.scss':
      /*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-calendar/dialog-schedule-maintenance-calendar.component.scss ***!
  \********************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .top-bar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: calc(8px * 2); }\n  :host .top-bar .calendar-navigation,\n  :host .top-bar .current-date {\n    display: flex;\n    flex-direction: row; }\n  :host .top-bar .calendar-navigation button {\n    margin-right: 5px; }\n  :host .top-bar .calendar-navigation button:last-of-type {\n      margin-right: 0; }\n  :host .top-bar .calendar-search {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    justify-content: flex-end;\n    margin-left: 30px;\n    margin-right: -0.875rem; }\n  :host .top-bar .calendar-search .calendar-search__input {\n      background-color: #fff;\n      border-radius: 25px;\n      border: 1px solid #f0f0f0;\n      color: #595959;\n      font-size: 0.875rem;\n      line-height: 1.42857143;\n      outline: none;\n      transition: all 500ms;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      padding-right: calc(8px * 2);\n      width: 8rem;\n      z-index: 1;\n      transition: all 500ms; }\n  :host .top-bar .calendar-search .calendar-search__input:hover {\n        border-color: #bdbdbd; }\n  :host .top-bar .calendar-search .calendar-search__input:focus, :host .top-bar .calendar-search .calendar-search__input:hover {\n        border-color: #bdbdbd; }\n  :host .top-bar .calendar-search .calendar-search__input:focus {\n        width: 100%; }\n  :host .top-bar .calendar-search .calendar-search__btn {\n      color: #ddd;\n      cursor: pointer;\n      font-size: 0.875rem;\n      height: 0.875rem;\n      position: relative;\n      right: 26px;\n      top: 12px;\n      visibility: hidden;\n      width: 0.875rem;\n      z-index: 2; }\n  :host .top-bar .calendar-search .calendar-search__btn:hover, :host .top-bar .calendar-search .calendar-search__btn:focus {\n        color: #2e2e2e; }\n  :host .top-bar .calendar-search .calendar-search__btn.visible {\n        visibility: visible; }\n  :host .top-bar .current-date {\n    align-items: baseline;\n    font-size: 1.5rem;\n    margin-left: 15px; }\n  :host .top-bar .calendar-navigation__btn-next-month,\n  :host .top-bar .calendar-navigation__btn-previous-month,\n  :host .top-bar .calendar-navigation__btn-today {\n    background-color: #fff;\n    border-radius: 25px;\n    border: 1px solid #f0f0f0;\n    color: #595959;\n    font-size: 0.875rem;\n    line-height: 1.42857143;\n    outline: none;\n    transition: all 500ms;\n    cursor: pointer; }\n  :host .top-bar .calendar-navigation__btn-next-month:hover,\n    :host .top-bar .calendar-navigation__btn-previous-month:hover,\n    :host .top-bar .calendar-navigation__btn-today:hover {\n      border-color: #bdbdbd; }\n  :host .top-bar .calendar-navigation__btn-next-month.active,\n    :host .top-bar .calendar-navigation__btn-previous-month.active,\n    :host .top-bar .calendar-navigation__btn-today.active {\n      background-color: #01579b;\n      border-color: #01579b;\n      color: #fff; }\n  :host .top-bar .calendar-navigation__btn-today,\n  :host .top-bar .calendar-search__input {\n    padding: 8px 16px; }\n  :host .top-bar .calendar-navigation__btn-next-month {\n    padding: 8px 6px 8px 8px; }\n  :host .top-bar .calendar-navigation__btn-previous-month {\n    padding: 8px 8px 8px 6px; }\n  :host .top-bar .calendar-navigation__btn-today {\n    font-weight: 700; }\n  :host .top-bar .calendar-search__input:hover {\n    border-color: #b0b0b0; }\n  :host .calendar {\n  width: 100%; }\n  :host .calendar.on-resize {\n    cursor: move; }\n  :host .calendar .calendar__header,\n  :host .calendar .calendar__week {\n    display: flex;\n    flex-direction: row; }\n  :host .calendar .calendar-day-container,\n  :host .calendar .calendar-day-header {\n    padding: 3px 2px 3px 3px;\n    width: calc(100% / 7); }\n  :host .calendar .calendar__header {\n    border-bottom: 1px solid #e5e5e5;\n    border-top: 1px solid #e5e5e5;\n    height: 30px; }\n  :host .calendar .calendar__header .calendar-day-header {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      font-weight: 700;\n      padding-left: 10px; }\n  :host .calendar .calendar__week {\n    border-bottom: 1px solid #e5e5e5; }\n  :host .calendar .calendar__week:last-of-type {\n      border-bottom-color: transparent; }\n  :host .calendar .calendar__week .calendar-day-container {\n      display: flex;\n      flex-direction: column;\n      border-left: 1px solid #e5e5e5;\n      border-right: 1px solid transparent;\n      min-height: 7rem; }\n  :host .calendar .calendar__week .calendar-day-container:first-of-type {\n        border-left-color: transparent; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-month-day-header {\n        display: flex;\n        flex-direction: row;\n        align-items: baseline;\n        background-color: transparent;\n        justify-content: space-between;\n        transition: background-color 1s;\n        width: 100%; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-month-day-header.droppable-work-package {\n          background-color: #f8f8f8; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-month-day-header .calendar-month-day-wrapper {\n          display: flex;\n          flex-direction: row;\n          cursor: pointer;\n          flex-grow: 1; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-month-day-header .calendar-month-day-wrapper .calendar-month-day {\n            display: flex;\n            flex-direction: row;\n            align-items: center;\n            border-radius: 2px;\n            color: rgba(51, 51, 51, 0.4);\n            height: 20px;\n            justify-content: center;\n            margin-bottom: 4px;\n            margin-left: 2px;\n            text-align: center;\n            width: 20px; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-month-day-header .calendar-month-day-wrapper .calendar-month-day.current-month {\n              color: #333; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-month-day-header .calendar-month-day-wrapper .calendar-month-day.today {\n              color: #00acd4;\n              font-weight: 700; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-month-day-header .calendar-month-day-wrapper .calendar-month-day.search-result {\n              border: 1px solid #4caf50; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-alerts i {\n        cursor: pointer;\n        margin-left: 5px; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-alerts i:first-of-type {\n          margin-left: 0; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-alerts i.warning {\n          color: #ffc107; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-alerts i.danger {\n          color: #a82525; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events {\n        flex-grow: 1; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events.resizable-work-package {\n          background-color: #f8f8f8;\n          transition: all 1s; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-flight,\n        :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-maintenance-event,\n        :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-maintenance-event-icons,\n        :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-work-package,\n        :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-fake-work-package {\n          height: 24px; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-flight,\n        :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-maintenance-event,\n        :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-work-package,\n        :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-fake-work-package {\n          margin-top: 2px; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-flight,\n        :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-maintenance-event,\n        :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-work-package {\n          line-height: 24px; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events + *:first-child {\n          margin-top: 0; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-flight {\n          align-items: flex-start;\n          display: flex; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-maintenance-event {\n          align-items: flex-start;\n          border-bottom-color: #2e2e2e;\n          border-bottom-style: dashed;\n          display: flex;\n          width: -webkit-fit-content;\n          width: -moz-fit-content;\n          width: fit-content; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-maintenance-event .calendar-day-maintenance-event-icons {\n            align-items: center;\n            display: flex; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-maintenance-event .calendar-day-maintenance-event-icons .calendar-day-maintenance-event-group-icon {\n              font-size: 6px; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-maintenance-event .calendar-day-maintenance-event-icons .calendar-day-maintenance-event-type-icon {\n              font-size: 11px; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-flight-name,\n        :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-maintenance-event-name {\n          cursor: pointer;\n          font-size: 12px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-work-package {\n          border-radius: 2px;\n          border-style: solid;\n          border-width: 1px;\n          color: #fff;\n          cursor: pointer;\n          display: flex;\n          padding: 0 3px;\n          position: relative;\n          z-index: 100; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-work-package.status-simulated {\n            background-color: #00bcd4;\n            border-color: #00bcd4; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-work-package.status-scheduled {\n            background-color: #0096a9;\n            border-color: #0096a9; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-work-package.status-other {\n            background-color: #00707f;\n            border-color: #00707f; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-work-package.draggable-work-package {\n            background-color: #fff !important;\n            border-style: dashed !important;\n            color: #2e2e2e !important; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-work-package.droppable-maintenance-event {\n            background-color: #f8f8f8 !important;\n            color: #2e2e2e !important;\n            transition: all 1s; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-work-package .calendar-day-work-package-name {\n            flex-grow: 1;\n            overflow: hidden;\n            padding-left: 2px;\n            text-overflow: ellipsis;\n            white-space: nowrap; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-work-package .end-date-resize-handler,\n          :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-work-package .start-date-resize-handler {\n            cursor: move;\n            padding-top: 4px;\n            max-width: 0.5rem;\n            min-width: 0.5rem; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-work-package .end-date-resize-handler {\n            margin-left: 10px; }\n  :host .calendar .calendar__week .calendar-day-container .calendar-day-events .calendar-day-work-package .start-date-resize-handler {\n            margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9zY2hlZHVsZS1tYWludGVuYW5jZS1mb3JtL2RpYWxvZy1zY2hlZHVsZS1tYWludGVuYW5jZS1jYWxlbmRhci9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbWFpbnRlbmFuY2VcXGFpcndvcnRoaW5lc3MtY29udHJvbFxcZm9ybVxcc2NoZWR1bGUtbWFpbnRlbmFuY2UtZm9ybVxcZGlhbG9nLXNjaGVkdWxlLW1haW50ZW5hbmNlLWNhbGVuZGFyXFxkaWFsb2ctc2NoZWR1bGUtbWFpbnRlbmFuY2UtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvYWlyd29ydGhpbmVzcy1jb250cm9sL2Zvcm0vc2NoZWR1bGUtbWFpbnRlbmFuY2UtZm9ybS9kaWFsb2ctc2NoZWR1bGUtbWFpbnRlbmFuY2UtY2FsZW5kYXIvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9zY2hlZHVsZS1tYWludGVuYW5jZS1mb3JtL2RpYWxvZy1zY2hlZHVsZS1tYWludGVuYW5jZS1jYWxlbmRhci9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DQTtFQ2JFLGFBQWE7RUFDYixtQkFBbUI7RURnQmpCLG1CQUFtQjtFQUNuQiw0QkFBeUMsRUFBQTtFQUw3Qzs7SUNiRSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7RURZckI7SUFjUSxpQkFBaUIsRUFBQTtFQWR6QjtNQWlCVSxlQUFlLEVBQUE7RUFqQnpCO0lDYkUsYUFBYTtJQUNiLG1CQUFtQjtJRHFDZixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix1QkFBdUIsRUFBQTtFQTVCN0I7TUFoQ0Usc0JFSjZCO01GSzdCLG1CQUFtQjtNQUNuQix5QkVMa0M7TUZNbEMsY0VKNEI7TUZLNUIsbUJFaUNrQjtNRmhDbEIsdUJFa0N1QjtNRmpDdkIsYUFBYTtNQUViLHFCQUFxQjtNQ3VLckIsZ0JBQWdCO01BQ2hCLHVCQUF1QjtNQUN2QixtQkFBbUI7TURoSGIsNEJBQXlDO01BQ3pDLFdBQVc7TUFDWCxVQUFVO01BRVYscUJBQXFCLEVBQUE7RUEzRDNCO1FBQ0UscUJBQXNELEVBQUE7RUFxQjFEO1FBeUNVLHFCQUFzRCxFQUFBO0VBekNoRTtRQTZDVSxXQUFXLEVBQUE7RUE3Q3JCO01Ba0RRLFdBQVc7TUFDWCxlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLFVBQVUsRUFBQTtFQTNEbEI7UUErRFUsY0FBYyxFQUFBO0VBL0R4QjtRQW1FVSxtQkFBbUIsRUFBQTtFQW5FN0I7SUF5RU0scUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtFQTNFdkI7OztJQWhDRSxzQkVKNkI7SUZLN0IsbUJBQW1CO0lBQ25CLHlCRUxrQztJRk1sQyxjRUo0QjtJRks1QixtQkVpQ2tCO0lGaENsQix1QkVrQ3VCO0lGakN2QixhQUFhO0lBRWIscUJBQXFCO0lBVXJCLGVBQWUsRUFBQTtFQVJmOzs7TUFDRSxxQkFBc0QsRUFBQTtFQVN4RDs7O01BQ0UseUJFckJrQjtNRnNCbEIscUJFdEJrQjtNRnVCbEIsV0UzQjJCLEVBQUE7RUZvQy9COztJQXNGTSxpQkFBaUIsRUFBQTtFQXRGdkI7SUEwRk0sd0JBQXdCLEVBQUE7RUExRjlCO0lBOEZNLHdCQUF3QixFQUFBO0VBOUY5QjtJQWtHTSxnQkFBZ0IsRUFBQTtFQWxHdEI7SUF1R1EscUJBQXFCLEVBQUE7RUF2RzdCO0VBNkdJLFdBQVcsRUFBQTtFQTdHZjtJQWdITSxZQUFZLEVBQUE7RUFoSGxCOztJQ2JFLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFRFlyQjs7SUEwSE0sd0JBQXdCO0lBQ3hCLHFCQUFxQixFQUFBO0VBM0gzQjtJQStITSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLFlBQVksRUFBQTtFQWpJbEI7TUNiRSxhQUFhO01BQ2IsbUJBQW1CO01Ea0piLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsa0JBQWtCLEVBQUE7RUF4STFCO0lBNklNLGdDQUFnQyxFQUFBO0VBN0l0QztNQWdKUSxnQ0FBZ0MsRUFBQTtFQWhKeEM7TUNsQkUsYUFBYTtNQUNiLHNCQUFzQjtNRHVLaEIsOEJBQThCO01BQzlCLG1DQUFtQztNQUNuQyxnQkFBZ0IsRUFBQTtFQXhKeEI7UUEySlUsOEJBQThCLEVBQUE7RUEzSnhDO1FDYkUsYUFBYTtRQUNiLG1CQUFtQjtRRDZLWCxxQkFBcUI7UUFDckIsNkJBQTZCO1FBQzdCLDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0IsV0FBVyxFQUFBO0VBcktyQjtVQXdLWSx5QkFBeUIsRUFBQTtFQXhLckM7VUNiRSxhQUFhO1VBQ2IsbUJBQW1CO1VEMExULGVBQWU7VUFDZixZQUFZLEVBQUE7RUEvS3hCO1lDYkUsYUFBYTtZQUNiLG1CQUFtQjtZRGdNUCxtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLDRCQUE0QjtZQUM1QixZQUFZO1lBQ1osdUJBQXVCO1lBQ3ZCLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLFdBQVcsRUFBQTtFQTVMekI7Y0ErTGdCLFdBQVcsRUFBQTtFQS9MM0I7Y0FtTWdCLGNBQWM7Y0FDZCxnQkFBZ0IsRUFBQTtFQXBNaEM7Y0F3TWdCLHlCQUF5QixFQUFBO0VBeE16QztRQWdOWSxlQUFlO1FBQ2YsZ0JBQWdCLEVBQUE7RUFqTjVCO1VBb05jLGNBQWMsRUFBQTtFQXBONUI7VUF3TmMsY0V0T0UsRUFBQTtFRmNoQjtVQTROYyxjRXpPSyxFQUFBO0VGYW5CO1FBa09VLFlBQVksRUFBQTtFQWxPdEI7VUFxT1kseUJBQXlCO1VBQ3pCLGtCQUFrQixFQUFBO0VBdE85Qjs7Ozs7VUE4T1ksWUFBWSxFQUFBO0VBOU94Qjs7OztVQXFQWSxlQUFlLEVBQUE7RUFyUDNCOzs7VUEyUFksaUJBQWlCLEVBQUE7RUEzUDdCO1VBK1BZLGFBQWEsRUFBQTtFQS9QekI7VUFtUVksdUJBQXVCO1VBQ3ZCLGFBQWEsRUFBQTtFQXBRekI7VUF3UVksdUJBQXVCO1VBQ3ZCLDRCQUE0QjtVQUM1QiwyQkFBMkI7VUFDM0IsYUFBYTtVQUNiLDBCQUFrQjtVQUFsQix1QkFBa0I7VUFBbEIsa0JBQWtCLEVBQUE7RUE1UTlCO1lBK1FjLG1CQUFtQjtZQUNuQixhQUFhLEVBQUE7RUFoUjNCO2NBbVJnQixjQUFjLEVBQUE7RUFuUjlCO2NBdVJnQixlQUFlLEVBQUE7RUF2Ui9COztVQThSWSxlQUFlO1VBQ2YsZUFBZTtVQUNmLGdCQUFnQjtVQUNoQix1QkFBdUI7VUFDdkIsbUJBQW1CLEVBQUE7RUFsUy9CO1VBc1NZLGtCQUFrQjtVQUNsQixtQkFBbUI7VUFDbkIsaUJBQWlCO1VBQ2pCLFdBQVc7VUFDWCxlQUFlO1VBQ2YsYUFBYTtVQUNiLGNBQWM7VUFDZCxrQkFBa0I7VUFDbEIsWUFBWSxFQUFBO0VBOVN4QjtZQWlUYyx5QkFBeUI7WUFDekIscUJBQXFCLEVBQUE7RUFsVG5DO1lBc1RjLHlCQUF5QjtZQUN6QixxQkFBcUIsRUFBQTtFQXZUbkM7WUEyVGMseUJBQXlCO1lBQ3pCLHFCQUFxQixFQUFBO0VBNVRuQztZQWdVYyxpQ0FBaUM7WUFDakMsK0JBQStCO1lBQy9CLHlCQUF5QixFQUFBO0VBbFV2QztZQXNVYyxvQ0FBb0M7WUFDcEMseUJBQXlCO1lBQ3pCLGtCQUFrQixFQUFBO0VBeFVoQztZQTRVYyxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQix1QkFBdUI7WUFDdkIsbUJBQW1CLEVBQUE7RUFoVmpDOztZQXFWYyxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixpQkFBaUIsRUFBQTtFQXhWL0I7WUE0VmMsaUJBQWlCLEVBQUE7RUE1Vi9CO1lBZ1djLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9zY2hlZHVsZS1tYWludGVuYW5jZS1mb3JtL2RpYWxvZy1zY2hlZHVsZS1tYWludGVuYW5jZS1jYWxlbmRhci9kaWFsb2ctc2NoZWR1bGUtbWFpbnRlbmFuY2UtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbkBtaXhpbiB0b29sLWJhcl9fZm9ybS1jb250cm9sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgMjAlKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0b29sLWJhcl9fYnRuIHtcclxuICBAaW5jbHVkZSB0b29sLWJhcl9fZm9ybS1jb250cm9sKCk7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRvb2wtYmFyX19pbnB1dCB7XHJcbiAgQGluY2x1ZGUgdG9vbC1iYXJfX2Zvcm0tY29udHJvbCgpO1xyXG4gIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAudG9wLWJhciB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuY2FsZW5kYXItbmF2aWdhdGlvbixcclxuICAgIC5jdXJyZW50LWRhdGUge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWxlbmRhci1uYXZpZ2F0aW9uIHtcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYWxlbmRhci1zZWFyY2gge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtMC44NzVyZW07XHJcblxyXG4gICAgICAuY2FsZW5kYXItc2VhcmNoX19pbnB1dCB7XHJcbiAgICAgICAgQGluY2x1ZGUgdG9vbC1iYXJfX2lucHV0KCk7XHJcblxyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcztcclxuXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgMjAlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FsZW5kYXItc2VhcmNoX19idG4ge1xyXG4gICAgICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgIGhlaWdodDogMC44NzVyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0OiAyNnB4O1xyXG4gICAgICAgIHRvcDogMTJweDtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDAuODc1cmVtO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBjb2xvcjogIzJlMmUyZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudmlzaWJsZSB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdXJyZW50LWRhdGUge1xyXG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FsZW5kYXItbmF2aWdhdGlvbl9fYnRuLW5leHQtbW9udGgsXHJcbiAgICAuY2FsZW5kYXItbmF2aWdhdGlvbl9fYnRuLXByZXZpb3VzLW1vbnRoLFxyXG4gICAgLmNhbGVuZGFyLW5hdmlnYXRpb25fX2J0bi10b2RheSB7XHJcbiAgICAgIEBpbmNsdWRlIHRvb2wtYmFyX19idG4oKTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FsZW5kYXItbmF2aWdhdGlvbl9fYnRuLXRvZGF5LFxyXG4gICAgLmNhbGVuZGFyLXNlYXJjaF9faW5wdXQge1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FsZW5kYXItbmF2aWdhdGlvbl9fYnRuLW5leHQtbW9udGgge1xyXG4gICAgICBwYWRkaW5nOiA4cHggNnB4IDhweCA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbGVuZGFyLW5hdmlnYXRpb25fX2J0bi1wcmV2aW91cy1tb250aCB7XHJcbiAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FsZW5kYXItbmF2aWdhdGlvbl9fYnRuLXRvZGF5IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FsZW5kYXItc2VhcmNoX19pbnB1dCB7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2IwYjBiMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICYub24tcmVzaXplIHtcclxuICAgICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWxlbmRhcl9faGVhZGVyLFxyXG4gICAgLmNhbGVuZGFyX193ZWVrIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FsZW5kYXItZGF5LWNvbnRhaW5lcixcclxuICAgIC5jYWxlbmRhci1kYXktaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogM3B4IDJweCAzcHggM3B4O1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC8gNyk7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbGVuZGFyX19oZWFkZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuXHJcbiAgICAgIC5jYWxlbmRhci1kYXktaGVhZGVyIHtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbGVuZGFyX193ZWVrIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XHJcblxyXG4gICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYWxlbmRhci1kYXktY29udGFpbmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogN3JlbTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYWxlbmRhci1tb250aC1kYXktaGVhZGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgJi5kcm9wcGFibGUtd29yay1wYWNrYWdlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY2FsZW5kYXItbW9udGgtZGF5LXdyYXBwZXIge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgICAgICAgICAuY2FsZW5kYXItbW9udGgtZGF5IHtcclxuICAgICAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjQpO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICYuY3VycmVudC1tb250aCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICYudG9kYXkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMGFjZDQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgJi5zZWFyY2gtcmVzdWx0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0Y2FmNTA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FsZW5kYXItZGF5LWFsZXJ0cyB7XHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi53YXJuaW5nIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5kYW5nZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FsZW5kYXItZGF5LWV2ZW50cyB7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgICAgICAgJi5yZXNpemFibGUtd29yay1wYWNrYWdlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jYWxlbmRhci1kYXktZmxpZ2h0LFxyXG4gICAgICAgICAgLmNhbGVuZGFyLWRheS1tYWludGVuYW5jZS1ldmVudCxcclxuICAgICAgICAgIC5jYWxlbmRhci1kYXktbWFpbnRlbmFuY2UtZXZlbnQtaWNvbnMsXHJcbiAgICAgICAgICAuY2FsZW5kYXItZGF5LXdvcmstcGFja2FnZSxcclxuICAgICAgICAgIC5jYWxlbmRhci1kYXktZmFrZS13b3JrLXBhY2thZ2Uge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNhbGVuZGFyLWRheS1mbGlnaHQsXHJcbiAgICAgICAgICAuY2FsZW5kYXItZGF5LW1haW50ZW5hbmNlLWV2ZW50LFxyXG4gICAgICAgICAgLmNhbGVuZGFyLWRheS13b3JrLXBhY2thZ2UsXHJcbiAgICAgICAgICAuY2FsZW5kYXItZGF5LWZha2Utd29yay1wYWNrYWdlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jYWxlbmRhci1kYXktZmxpZ2h0LFxyXG4gICAgICAgICAgLmNhbGVuZGFyLWRheS1tYWludGVuYW5jZS1ldmVudCxcclxuICAgICAgICAgIC5jYWxlbmRhci1kYXktd29yay1wYWNrYWdlIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJiArICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jYWxlbmRhci1kYXktZmxpZ2h0IHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNhbGVuZGFyLWRheS1tYWludGVuYW5jZS1ldmVudCB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMmUyZTJlO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBkYXNoZWQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuXHJcbiAgICAgICAgICAgIC5jYWxlbmRhci1kYXktbWFpbnRlbmFuY2UtZXZlbnQtaWNvbnMge1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgLmNhbGVuZGFyLWRheS1tYWludGVuYW5jZS1ldmVudC1ncm91cC1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmNhbGVuZGFyLWRheS1tYWludGVuYW5jZS1ldmVudC10eXBlLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jYWxlbmRhci1kYXktZmxpZ2h0LW5hbWUsXHJcbiAgICAgICAgICAuY2FsZW5kYXItZGF5LW1haW50ZW5hbmNlLWV2ZW50LW5hbWUge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNhbGVuZGFyLWRheS13b3JrLXBhY2thZ2Uge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDNweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcblxyXG4gICAgICAgICAgICAmLnN0YXR1cy1zaW11bGF0ZWQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBiY2Q0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnN0YXR1cy1zY2hlZHVsZWQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2YTk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5NmE5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnN0YXR1cy1vdGhlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzA3ZjtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwN2Y7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZHJhZ2dhYmxlLXdvcmstcGFja2FnZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMyZTJlMmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5kcm9wcGFibGUtbWFpbnRlbmFuY2UtZXZlbnQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZjggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzJlMmUyZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhbGVuZGFyLWRheS13b3JrLXBhY2thZ2UtbmFtZSB7XHJcbiAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmVuZC1kYXRlLXJlc2l6ZS1oYW5kbGVyLFxyXG4gICAgICAgICAgICAuc3RhcnQtZGF0ZS1yZXNpemUtaGFuZGxlciB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAwLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5lbmQtZGF0ZS1yZXNpemUtaGFuZGxlciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdGFydC1kYXRlLXJlc2l6ZS1oYW5kbGVyIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVdGlscyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gYnV0dG9uLWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCAkY29sb3IsICRib3JkZXItY29sb3I6IG51bGwpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyLFxyXG4gICY6bm90KDpkaXNhYmxlZCkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogaWYoJGJvcmRlci1jb2xvciA9PSBudWxsLCAkY29sb3IsICRib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgtY29sdW1uKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtcm93KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQG1peGluIGlucHV0KCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1kaXNhYmxlZCgpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZm9jdXMoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1ob3ZlcigpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlYXJjaC1jcml0ZXJpYS1jb250YWluZXIge1xyXG4gIC5hZHZhbmNlZC1jcml0ZXJpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgICYucmVxdWlyZWQge1xyXG4gICAgICBAaW5jbHVkZSBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCgpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHcmlkIGZvcm0gY29udHJvbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViTWVkaXVtXCI7XHJcblxyXG4gICYgPiBpbnB1dCArIHAtbWVzc2FnZSA+IC51aS1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyNTUsIDI1NSwgMjU1KSA2MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAuYXctaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuLFxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG5cclxuICAgICAgJi5hdy1jYWxlbmRhciAudWktaW5wdXR0ZXh0LFxyXG4gICAgICAmLmF3LWRyb3Bkb3duIC51aS1kcm9wZG93bixcclxuICAgICAgJi5hdy1pbnB1dCxcclxuICAgICAgJi5hdy10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctY2FsZW5kYXIge1xyXG4gICAgICAvLyBGSVhNRTogZml4IGFuIFVJIGlzc3VlIG9uIFByaW1lTkcgY2FsZW5kYXIgY29tcG9uZW50OyB0byByZW1vdmUgd2hlbiBpc3N1ZSB3aWxsIGJlIGZpeGVkIHVwc3RyZWFtXHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAuYXctaWNvbjpub3QoLnJlYWQtb25seS1saW5rKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIG5vbmVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW5pbXAsXHJcbiAgICAuYnRuLWV4dGVybmFsLWxpbmstd3JhcHBlcixcclxuICAgIC5idG4tY2xlYXItd3JhcHBlcixcclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlcixcclxuICAgIC5idG4tc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgICAuYXctZmlsZXVwbG9hZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudWktYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWNsZWFyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtcmFkaW9idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAmID4gLmF3LXJhZGlvYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jYWxlbmRhciB7XHJcbiAgJi51aS1pbnB1dHdyYXBwZXItZm9jdXMge1xyXG4gICAgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkY2hlY2tib3gtaGVpZ2h0O1xyXG4gIHdpZHRoOiAkY2hlY2tib3gtaGVpZ2h0O1xyXG5cclxuICAudWktY2hrYm94IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1jaGtib3gtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZHJvcGRvd24ge1xyXG4gIC51aS1kcm9wZG93biB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1mb2N1cyB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbixcclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gICAgICByaWdodDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDEuNzVyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5maXhlZC13aWR0aCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZpbGV1cGxvYWQge1xyXG4gIEBleHRlbmQgLmF3LWJ0bjtcclxuXHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnVpLWZpbGV1cGxvYWQtY2hvb3NlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudWktYnV0dG9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWlucHV0KCkge1xyXG4gIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZXh0YXJlYSB7XHJcbiAgQGluY2x1ZGUgZ3JpZC1pbnB1dCgpO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1yYWRpb2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuICB3aWR0aDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuXHJcbiAgLnVpLXJhZGlvYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAudWktcmFkaW9idXR0b24taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGNhbGVuZGFyLXBhbmVsIHtcclxuICAudWktZGF0ZXBpY2tlcjpub3QoLnVpLWRhdGVwaWNrZXItaW5saW5lKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcm9wZG93bi1wYW5lbCB7XHJcbiAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciAudWktZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgIC51aS1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-calendar/dialog-schedule-maintenance-calendar.component.ts':
      /*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-calendar/dialog-schedule-maintenance-calendar.component.ts ***!
  \******************************************************************************************************************************************************************************/
      /*! exports provided: DialogScheduleMaintenanceCalendarComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogScheduleMaintenanceCalendarComponent',
          function() {
            return DialogScheduleMaintenanceCalendarComponent;
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
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _shared_utils_translate_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../../shared/utils/translate-utils */ './src/app/shared/utils/translate-utils.ts'
        );
        /* harmony import */ var _schedule_maintenance_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../schedule-maintenance-form.service */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.service.ts'
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

        var DialogScheduleMaintenanceCalendarComponent = /** @class */ (function(_super) {
          __extends(DialogScheduleMaintenanceCalendarComponent, _super);
          function DialogScheduleMaintenanceCalendarComponent(messageService, scheduleMaintenanceFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write,
                'DialogScheduleMaintenanceCalendarComponent'
              ) || this;
            _this.messageService = messageService;
            _this.scheduleMaintenanceFormService = scheduleMaintenanceFormService;
            _this.today = moment__WEBPACK_IMPORTED_MODULE_1__().format('D');
            _this.todayMonth = moment__WEBPACK_IMPORTED_MODULE_1__().month() + 1;
            _this.todayYear = moment__WEBPACK_IMPORTED_MODULE_1__().year();
            _this.flights = [];
            _this.workPackageList = [];
            _this.showAlertDialog = false;
            _this.showCalendarDayDialog = false;
            _this.showFlightDialog = false;
            _this.showMaintenanceEventDialog = false;
            _this.showWorkPackageDialog = false;
            _this.onCreateWorkPackge = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.rawWorkPackageListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.setMonth(moment__WEBPACK_IMPORTED_MODULE_1__());
            _this.initDayNames();
            _this.initSearchText();
            return _this;
          }
          DialogScheduleMaintenanceCalendarComponent_1 = DialogScheduleMaintenanceCalendarComponent;
          Object.defineProperty(DialogScheduleMaintenanceCalendarComponent.prototype, 'rawWorkPackageList', {
            get: function() {
              return this._rawWorkPackageList;
            },
            set: function(value) {
              this._rawWorkPackageList = value;
              if (!!this.rawWorkPackageList) {
                this.updateCalendarFromNewWorkPackagelist(this.rawWorkPackageList);
                this.rawWorkPackageListChange.emit(this._rawWorkPackageList);
              }
            },
            enumerable: true,
            configurable: true
          });
          DialogScheduleMaintenanceCalendarComponent.prototype.ngOnInit = function() {
            this.initFlights();
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.clearSearchText = function() {
            this.searchText = '';
            this.selectedCalendarDays = [];
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.createWorkPackage = function(data) {
            this.onCreateWorkPackge.emit(data);
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.dropMaintenanceEvent = function(event) {
            this.handleMaintenanceEventDrop(event);
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.dropWorkPackage = function(event) {
            this.handleWorkPackageDrop(event);
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.endMaintenanceEventDrag = function() {
            this.draggedMaintenanceEvent = undefined;
            this.dragSource = undefined;
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.endWorkPackageDrag = function() {
            this.draggedWorkPackage = undefined;
            this.dragSource = undefined;
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.endResize = function(event) {
            var _this = this;
            event.stopPropagation();
            if (!!this.resizedWorkPackage) {
              var eventTarget = event.target;
              var containerNode = this.findParentElementByClassName(eventTarget, 'calendar-day-container');
              if (!!containerNode) {
                var selectedCalendarDay = this.deserializeCalendarDay(
                  /^drop-[a-z]+-(\d+)-(\d+)$/g.exec(containerNode.id)
                );
                if (!!selectedCalendarDay) {
                  var selectedWorkPackage = this.workPackageList.find(function(workPackage) {
                    return workPackage.projectId === _this.resizedWorkPackage.obj.projectId;
                  });
                  if (!!selectedWorkPackage) {
                    if (this.resizedWorkPackageEndDate) {
                      var startDateMoment = moment__WEBPACK_IMPORTED_MODULE_1__(selectedWorkPackage.projectStartDate);
                      var startDate = startDateMoment.isBefore(this.calendarDays[0].moment, 'day')
                        ? this.calendarDays[0].moment
                        : startDateMoment;
                      if (
                        selectedCalendarDay.moment.isSame(moment__WEBPACK_IMPORTED_MODULE_1__(startDate), 'day') ||
                        selectedCalendarDay.moment.isAfter(moment__WEBPACK_IMPORTED_MODULE_1__(startDate), 'day')
                      ) {
                        if (!!selectedWorkPackage.projectDueDate) {
                          selectedWorkPackage.projectDueDate = selectedCalendarDay.moment.toDate();
                        } else if (!!selectedWorkPackage.projectEndDate) {
                          selectedWorkPackage.projectEndDate = selectedCalendarDay.moment.toDate();
                        }
                      }
                    } else if (this.resizedWorkPackageStartDate) {
                      if (
                        (!!selectedWorkPackage.projectDueDate &&
                          (selectedCalendarDay.moment.isSame(
                            moment__WEBPACK_IMPORTED_MODULE_1__(selectedWorkPackage.projectDueDate),
                            'day'
                          ) ||
                            selectedCalendarDay.moment.isBefore(
                              moment__WEBPACK_IMPORTED_MODULE_1__(selectedWorkPackage.projectDueDate),
                              'day'
                            ))) ||
                        (!!selectedWorkPackage.projectEndDate &&
                          (selectedCalendarDay.moment.isBefore(
                            moment__WEBPACK_IMPORTED_MODULE_1__(selectedWorkPackage.projectEndDate),
                            'day'
                          ) ||
                            selectedCalendarDay.moment.isBefore(
                              moment__WEBPACK_IMPORTED_MODULE_1__(selectedWorkPackage.projectEndDate),
                              'day'
                            )))
                      ) {
                        selectedWorkPackage.projectStartDate = selectedCalendarDay.moment.toDate();
                      }
                    }
                    if (this.resizedWorkPackageEndDate || this.resizedWorkPackageStartDate) {
                      this.updateWorkPackge(selectedWorkPackage);
                    }
                    this.clearAllWorkPackage();
                    this.setWorkPackages();
                    this.sortWorkPackages();
                    this.updateFakeWorkPackages();
                  }
                }
              }
            }
            this.resizedWorkPackage = undefined;
            this.resizedWorkPackageEndDate = false;
            this.resizedWorkPackageStartDate = false;
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.showEndDateResizeHandler = function(
            workPackage,
            weekIndex
          ) {
            var endDate = workPackage.obj.projectDueDate || workPackage.obj.projectEndDate;
            if (
              moment__WEBPACK_IMPORTED_MODULE_1__(endDate).isAfter(
                this.calendarDays[this.calendarDays.length - 1].moment,
                'day'
              )
            ) {
              return false;
            } else {
              var endDateCalendarDayIndex = this.calendarDays.findIndex(function(calendarDay) {
                return calendarDay.moment.isSame(moment__WEBPACK_IMPORTED_MODULE_1__(endDate), 'day');
              });
              return (
                endDateCalendarDayIndex !== undefined &&
                endDateCalendarDayIndex !== null &&
                endDateCalendarDayIndex >=
                  weekIndex * DialogScheduleMaintenanceCalendarComponent_1.DAYS_IN_WEEK_VISIBLE &&
                endDateCalendarDayIndex <
                  (weekIndex + 1) * DialogScheduleMaintenanceCalendarComponent_1.DAYS_IN_WEEK_VISIBLE
              );
            }
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.showStartDateResizeHandler = function(
            workPackage,
            weekIndex
          ) {
            if (
              moment__WEBPACK_IMPORTED_MODULE_1__(workPackage.obj.projectStartDate).isBefore(
                this.calendarDays[0].moment,
                'day'
              )
            ) {
              return false;
            } else {
              var firstWeekDay = this.calendarDays[
                weekIndex * DialogScheduleMaintenanceCalendarComponent_1.DAYS_IN_WEEK_VISIBLE
              ];
              var lastWeekDay = this.calendarDays[
                (weekIndex + 1) * DialogScheduleMaintenanceCalendarComponent_1.DAYS_IN_WEEK_VISIBLE - 1
              ];
              return (
                (workPackage.startDate.isSame(firstWeekDay.moment, 'day') ||
                  workPackage.startDate.isAfter(firstWeekDay.moment, 'day')) &&
                (workPackage.startDate.isSame(lastWeekDay.moment, 'day') ||
                  workPackage.startDate.isBefore(lastWeekDay.moment, 'day'))
              );
            }
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.isSearchClearButtonVisible = function() {
            return this.searchText.length > 0;
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.openAlertDialog = function(event) {
            event.stopPropagation();
            this.closeDialogs();
            this.showAlertDialog = true;
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.openCalendarDayDialog = function(event) {
            event.stopPropagation();
            this.closeDialogs();
            this.showCalendarDayDialog = true;
            var calendarDay = this.findWorkPackageDropSource(event);
            if (!!calendarDay) {
              this.selectedDate = calendarDay.moment.toDate();
            }
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.openFlightDialog = function(event, flights) {
            event.stopPropagation();
            this.closeDialogs();
            this.showFlightDialog = true;
            this.selectedFlights = flights;
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.openMaintenanceEventDialog = function(event) {
            event.stopPropagation();
            this.closeDialogs();
            this.showMaintenanceEventDialog = true;
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.openWorkPackageDialog = function(event, workPackage) {
            event.stopPropagation();
            this.closeDialogs();
            this.showWorkPackageDialog = true;
            this.selectedWorkPackage = workPackage.obj;
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.search = function(searchTextValue) {
            // this.searchTextChanged.next(searchTextValue);
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.showCurrentMonth = function() {
            this.setMonth(moment__WEBPACK_IMPORTED_MODULE_1__());
            this.setPlanning();
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.showNextMonth = function() {
            this.setMonth(this.currentMoment().add(1, 'months'));
            this.setPlanning();
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.showPreviousMonth = function() {
            this.setMonth(this.currentMoment().subtract(1, 'months'));
            this.setPlanning();
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.startMaintenanceEventDrag = function(event, element) {
            this.registerDragSource(event);
            if (!!this.dragSource) {
              this.draggedMaintenanceEvent = element;
            }
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.startWorkPackageDrag = function(event, element) {
            if (element.isScheduled || element.isSimulated) {
              this.registerDragSource(event);
              if (!!this.dragSource) {
                this.draggedWorkPackage = element;
              }
            }
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.updateWorkPackageEndDate = function(event, workPackage) {
            this.updateWorkPackageDate(event, workPackage);
            this.resizedWorkPackageEndDate = true;
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.updateWorkPackageStartDate = function(
            event,
            workPackage
          ) {
            this.updateWorkPackageDate(event, workPackage);
            this.resizedWorkPackageStartDate = true;
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.clearAllWorkPackage = function() {
            this.calendarDays.forEach(function(calendarDay) {
              calendarDay.workPackages = [];
            });
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.closeDialogs = function() {
            this.showAlertDialog = false;
            this.showCalendarDayDialog = false;
            this.showFlightDialog = false;
            this.showMaintenanceEventDialog = false;
            this.showWorkPackageDialog = false;
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.currentMoment = function() {
            return moment__WEBPACK_IMPORTED_MODULE_1__(
              this.currentYear + '-' + this.currentMonth + '-01',
              'YYYY-MM-DD'
            );
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.deserializeCalendarDay = function(regExpMatches) {
            if (!!regExpMatches) {
              var weekIndex = 1;
              var weekDayIndex = 2;
              var calendarDayIndex =
                Number(regExpMatches[weekIndex]) * DialogScheduleMaintenanceCalendarComponent_1.DAYS_IN_WEEK_VISIBLE +
                Number(regExpMatches[weekDayIndex]);
              return this.calendarDays[calendarDayIndex];
            } else {
              return undefined;
            }
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.findCalendarDayIndex = function(selectedMoment) {
            return this.calendarDays.findIndex(function(calendarDay) {
              return calendarDay.moment.isSame(selectedMoment, 'day');
            });
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.findMaintenanceEventDropSource = function(event) {
            var eventTarget = event.target;
            var containerNode = this.findParentElementByMatchingId(eventTarget, /^drop-[a-z]+-\d+$/g);
            if (!!containerNode) {
              var matches = /^drop-[a-z]+-(\d+)$/g.exec(containerNode.id);
              if (!!matches) {
                var targetWorkPackageId_1 = matches[1];
                var targetCalendarDay = this.calendarDays.find(function(calendarDay) {
                  return calendarDay.workPackages.some(function(workPackage) {
                    return workPackage.id === targetWorkPackageId_1;
                  });
                });
                if (!!targetCalendarDay) {
                  return targetCalendarDay.workPackages.find(function(workPackage) {
                    return workPackage.id === targetWorkPackageId_1;
                  });
                } else {
                  return undefined;
                }
              } else {
                return undefined;
              }
            } else {
              return undefined;
            }
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.findParentElementByClassName = function(
            child,
            className
          ) {
            var parent = child.parentElement;
            if (!!parent) {
              return !!parent.classList && parent.classList.contains(className)
                ? parent
                : this.findParentElementByClassName(parent, className);
            } else {
              return undefined;
            }
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.findParentElementByMatchingId = function(child, regExp) {
            var parent = child.parentElement;
            if (!!parent) {
              return !!parent.id && regExp.test(parent.id)
                ? parent
                : this.findParentElementByMatchingId(parent, regExp);
            } else {
              return undefined;
            }
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.findWorkPackageDropSource = function(event) {
            var eventTarget = event.target;
            if (eventTarget.classList[0] === 'calendar-month-day-wrapper') {
              var containerNode = this.findParentElementByClassName(eventTarget, 'calendar-day-container');
              return !!containerNode
                ? this.deserializeCalendarDay(/^drop-[a-z]+-(\d+)-(\d+)$/g.exec(containerNode.id))
                : undefined;
            } else {
              return undefined;
            }
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.handleMaintenanceEventDrop = function(event) {
            var _this = this;
            if (!!this.draggedMaintenanceEvent) {
              var targetWorkPackage = this.findMaintenanceEventDropSource(event);
              if (!!targetWorkPackage) {
                var isAlreadyInWP = targetWorkPackage.maintenanceEvents.some(function(maintenanceEvent) {
                  return !!_this.draggedMaintenanceEvent && maintenanceEvent.id === _this.draggedMaintenanceEvent.id;
                });
                if (isAlreadyInWP) {
                  // this.messageService.showWarningMessage(this.getTranslateKey('errorOnAddMaintenanceEventIntoWorkPackage'));
                } else {
                  targetWorkPackage.maintenanceEvents = __spread(targetWorkPackage.maintenanceEvents, [
                    this.draggedMaintenanceEvent
                  ]);
                }
              }
            }
            this.endMaintenanceEventDrag();
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.handleWorkPackageDrop = function(event) {
            var _this = this;
            if (!!this.dragSource && !!this.draggedWorkPackage) {
              var dropSource = this.findWorkPackageDropSource(event);
              if (!!dropSource && !dropSource.moment.isSame(this.dragSource.moment, 'day')) {
                this.calendarDays.forEach(function(calendarDay) {
                  calendarDay.workPackages = calendarDay.workPackages.filter(function(workPackage) {
                    return !!_this.draggedWorkPackage && workPackage.id !== _this.draggedWorkPackage.id;
                  });
                });
                this.draggedWorkPackage.startDate = dropSource.moment;
                this.draggedWorkPackage.obj.projectStartDate = this.draggedWorkPackage.startDate.toDate();
                var endDate = moment__WEBPACK_IMPORTED_MODULE_1__(this.draggedWorkPackage.obj.projectStartDate)
                  .add(this.draggedWorkPackage.totalDuration, 'days')
                  .toDate();
                if (this.draggedWorkPackage.obj.projectDueDate) {
                  this.draggedWorkPackage.obj.projectDueDate = endDate;
                } else {
                  this.draggedWorkPackage.obj.projectEndDate = endDate;
                }
                this.updateWorkPackge(this.draggedWorkPackage.obj);
                this.setWorkPackageAtDate(this.draggedWorkPackage, dropSource);
                this.sortWorkPackages();
                this.updateFakeWorkPackages();
              }
            }
            this.endWorkPackageDrag();
          };
          // private hasMaintenanceEventMatches(calendarDay: CalendarDay, searchTextValue: string) {
          //   return calendarDay.maintenanceEvents.some((maintenanceEvent) => {
          //     return (
          //       maintenanceEvent.id.includes(searchTextValue) ||
          //       maintenanceEvent.name.toUpperCase().includes(searchTextValue.toUpperCase())
          //     );
          //   });
          // }
          // private hasWorkPackageMatches(calendarDay: CalendarDay, searchTextValue: string) {
          //   return calendarDay.workPackages.some((workPackage) => {
          //     return (
          //       workPackage.id.includes(searchTextValue) ||
          //       workPackage.name.toUpperCase().includes(searchTextValue.toUpperCase())
          //     );
          //   });
          // }
          DialogScheduleMaintenanceCalendarComponent.prototype.initDayNames = function() {
            var unsortedDayNames = _shared_utils_translate_utils__WEBPACK_IMPORTED_MODULE_8__[
              'TranslateUtils'
            ].dayNamesShortEnglish();
            this.dayNamesShort = __spread(unsortedDayNames.slice(1), [unsortedDayNames[0]]);
            this.dayNamesShort = this.dayNamesShort.map(function(e) {
              return e.toLowerCase();
            });
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.initFlights = function() {
            var _this = this;
            this.scheduleMaintenanceFormService
              .findAllBidoMissionEquipmentByEquipmentCode(this.topEquipmentCode)
              .subscribe(function(flights) {
                _this.flights = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_6__['ListUtils'].orEmpty(flights);
                _this.setFlights();
              });
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.initSearchText = function() {
            this.clearSearchText();
            // this.searchTextChanged = new Subject<string>();
            // this.searchTextChanged
            //   .pipe(
            //     debounceTime(DialogScheduleMaintenanceCalendarComponent.SEARCH_TEXT_DEBOUNCE_TIME),
            //     distinctUntilChanged(),
            //     takeUntil(this.unsubscribe)
            //   )
            //   .subscribe((searchTextValue) => {
            //     this.selectedCalendarDays = [];
            //     if (!StringUtils.isNullOrEmpty(searchTextValue)) {
            //       for (let i = 0; i < this.calendarDays.length; i++) {
            //         const calendarDay = this.calendarDays[i];
            //         if (
            //           this.hasWorkPackageMatches(calendarDay, searchTextValue) ||
            //           this.hasMaintenanceEventMatches(calendarDay, searchTextValue)
            //         ) {
            //           this.selectedCalendarDays = [...this.selectedCalendarDays, i];
            //         }
            //       }
            //     }
            //   });
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.registerDragSource = function(event) {
            this.dragSource = this.deserializeCalendarDay(/^drag-[a-z]+-(\d+)-(\d+)$/g.exec(event.target.id));
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.setFlights = function() {
            var _this = this;
            var currentFirstDay = this.calendarDays[0].moment;
            var currentLastDay = this.calendarDays[this.calendarDays.length - 1].moment;
            var currentFlights = this.flights.filter(function(flight) {
              return moment__WEBPACK_IMPORTED_MODULE_1__(flight.startDate).isBetween(currentFirstDay, currentLastDay);
            });
            currentFlights.forEach(function(flight) {
              if (!!flight.missionCode) {
                var newFlight = {
                  id: flight.missionCode,
                  obj: flight
                };
                var startCalendarDay = _this.calendarDays.find(function(calendarDay) {
                  return calendarDay.moment.isSame(flight.startDate, 'day');
                });
                if (!!startCalendarDay) {
                  startCalendarDay.flights = __spread(startCalendarDay.flights, [newFlight]);
                }
              }
            });
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.setCalendarDays = function() {
            var daysInCurrentMonth = [];
            for (var i = 1; i <= this.currentMoment().daysInMonth(); i++) {
              daysInCurrentMonth = __spread(daysInCurrentMonth, [this.currentMoment().date(i)]);
            }
            var daysFromPreviousMonth =
              Number(daysInCurrentMonth[0].format('E')) === 1
                ? DialogScheduleMaintenanceCalendarComponent_1.DAYS_IN_WEEK_VISIBLE
                : Number(daysInCurrentMonth[0].format('E')) - 1;
            var daysInPreviousMonth = [];
            for (var i = 0; i < daysFromPreviousMonth; i++) {
              daysInPreviousMonth = __spread(
                [
                  this.currentMoment()
                    .add(-1, 'months')
                    .endOf('month')
                    .add(-i, 'days')
                ],
                daysInPreviousMonth
              );
            }
            var daysInNextMonth = [];
            var maxDaysInCalendar =
              DialogScheduleMaintenanceCalendarComponent_1.WEEKS_IN_CALENDAR_VISIBLE *
              DialogScheduleMaintenanceCalendarComponent_1.DAYS_IN_WEEK_VISIBLE;
            for (var i = 0; i < maxDaysInCalendar - (daysInCurrentMonth.length + daysInPreviousMonth.length); i++) {
              daysInNextMonth = __spread(daysInNextMonth, [
                this.currentMoment()
                  .add(1, 'months')
                  .startOf('month')
                  .add(i, 'days')
              ]);
            }
            this.calendarDays = __spread(daysInPreviousMonth, daysInCurrentMonth, daysInNextMonth).map(function(day) {
              var calendarDay = {
                moment: day,
                flights: [],
                maintenanceEvents: [],
                workPackages: [],
                _fakeWorkPackageNb: 0
              };
              return calendarDay;
            });
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.setMonth = function(selectedMoment) {
            this.currentMonth = selectedMoment.month() + 1;
            this.currentYear = selectedMoment.year();
            this.setCalendarDays();
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.setPlanning = function() {
            this.setFlights();
            this.setWorkPackages();
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.setWorkPackageAtDate = function(
            workPackage,
            selectedCalendarDay
          ) {
            var selectedCalendarWeekDay = Number(selectedCalendarDay.moment.format('E'));
            workPackage.weekDuration =
              workPackage.totalDuration + selectedCalendarWeekDay - 1 <=
              DialogScheduleMaintenanceCalendarComponent_1.DAYS_IN_WEEK_VISIBLE
                ? workPackage.totalDuration
                : DialogScheduleMaintenanceCalendarComponent_1.DAYS_IN_WEEK_VISIBLE - selectedCalendarWeekDay + 1;
            selectedCalendarDay.workPackages = __spread(selectedCalendarDay.workPackages, [workPackage]);
            var durationLeft = workPackage.totalDuration - workPackage.weekDuration;
            var lastWorkPackageStartDate = workPackage.startDate;
            while (durationLeft > 0) {
              var lastWorkPackageStartDateIndex = this.findCalendarDayIndex(lastWorkPackageStartDate);
              var nextMonday = this.calendarDays.slice(lastWorkPackageStartDateIndex + 1).find(function(calendarDay) {
                return calendarDay.moment.weekday() === 1;
              });
              if (!!nextMonday) {
                var newWorkPackage = __assign({}, workPackage);
                newWorkPackage.weekDuration = Math.min(
                  durationLeft,
                  DialogScheduleMaintenanceCalendarComponent_1.DAYS_IN_WEEK_VISIBLE
                );
                nextMonday.workPackages = __spread(nextMonday.workPackages, [newWorkPackage]);
                durationLeft -= newWorkPackage.weekDuration;
                lastWorkPackageStartDate = nextMonday.moment;
              } else {
                break;
              }
            }
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.setWorkPackages = function() {
            var _this = this;
            var currentFirstDay = this.calendarDays[0].moment;
            var currentLastDay = this.calendarDays[this.calendarDays.length - 1].moment;
            var currentWorkPackages = this.workPackageList.filter(function(workPackage) {
              var startDate = workPackage.projectStartDate;
              var endDate = workPackage.projectDueDate || workPackage.projectEndDate;
              return (
                moment__WEBPACK_IMPORTED_MODULE_1__(startDate).isSame(currentFirstDay, 'day') ||
                moment__WEBPACK_IMPORTED_MODULE_1__(startDate).isSame(currentLastDay, 'day') ||
                moment__WEBPACK_IMPORTED_MODULE_1__(endDate).isSame(currentFirstDay, 'day') ||
                moment__WEBPACK_IMPORTED_MODULE_1__(endDate).isSame(currentLastDay, 'day') ||
                moment__WEBPACK_IMPORTED_MODULE_1__(startDate).isBetween(currentFirstDay, currentLastDay, 'day') ||
                moment__WEBPACK_IMPORTED_MODULE_1__(endDate).isBetween(currentFirstDay, currentLastDay, 'day')
              );
            });
            currentWorkPackages.forEach(function(currentWorkPackage) {
              var newWorkpackageStartDate = moment__WEBPACK_IMPORTED_MODULE_1__(currentWorkPackage.projectStartDate);
              var newWorkpackageEndDate = moment__WEBPACK_IMPORTED_MODULE_1__(
                !!currentWorkPackage.projectDueDate
                  ? currentWorkPackage.projectDueDate
                  : currentWorkPackage.projectEndDate
              );
              if (newWorkpackageStartDate.isBefore(_this.calendarDays[0].moment, 'day')) {
                newWorkpackageStartDate = _this.calendarDays[0].moment;
              }
              if (newWorkpackageEndDate.isAfter(_this.calendarDays[_this.calendarDays.length - 1].moment, 'day')) {
                newWorkpackageEndDate = _this.calendarDays[_this.calendarDays.length - 1].moment;
              }
              var newWorkPackageName = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_7__['StringUtils'].orEmpty(
                '' + currentWorkPackage.projectNumber
              );
              if (
                !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_7__['StringUtils'].isNullOrEmpty(
                  currentWorkPackage.projectDescription
                )
              ) {
                newWorkPackageName += ' - ' + currentWorkPackage.projectDescription;
              }
              var startCalendarDay = _this.calendarDays.find(function(calendarDay) {
                return calendarDay.moment.isSame(newWorkpackageStartDate, 'day');
              });
              if (!!startCalendarDay && !!currentWorkPackage.projectId) {
                var newWorkpackage = {
                  id: currentWorkPackage.projectId,
                  obj: currentWorkPackage,
                  isScheduled:
                    currentWorkPackage.statusState ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                      .AIRM_PROJECT_STATUS_SCHEDULED,
                  isSimulated:
                    currentWorkPackage.statusState ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                      .AIRM_PROJECT_STATUS_SIMULATED,
                  name: newWorkPackageName,
                  totalDuration:
                    newWorkpackageEndDate.endOf('day').diff(newWorkpackageStartDate.startOf('day'), 'days') + 1,
                  weekDuration: 0,
                  startDate: startCalendarDay.moment,
                  maintenanceEvents: []
                };
                _this.setWorkPackageAtDate(newWorkpackage, startCalendarDay);
              }
            });
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.sortWorkPackages = function() {
            this.calendarDays.forEach(function(calendarDay) {
              calendarDay.workPackages.sort(function(w1, w2) {
                if (w1.totalDuration < w2.totalDuration) {
                  return 1;
                } else if (w1.totalDuration > w2.totalDuration) {
                  return -1;
                } else {
                  return w1.name.localeCompare(w2.name);
                }
              });
            });
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.updateFakeWorkPackages = function() {
            var _this = this;
            this.calendarDays.forEach(function(calendarDay) {
              calendarDay._fakeWorkPackageNb = 0;
            });
            var maxDaysInCalendar =
              DialogScheduleMaintenanceCalendarComponent_1.WEEKS_IN_CALENDAR_VISIBLE *
              DialogScheduleMaintenanceCalendarComponent_1.DAYS_IN_WEEK_VISIBLE;
            var _loop_1 = function(weekIndex) {
              var _loop_2 = function(i) {
                this_1.calendarDays[
                  weekIndex * DialogScheduleMaintenanceCalendarComponent_1.DAYS_IN_WEEK_VISIBLE + i
                ].workPackages.forEach(function(workPackage) {
                  for (var j = i + 1; j < i + workPackage.weekDuration; j++) {
                    _this.calendarDays[
                      weekIndex * DialogScheduleMaintenanceCalendarComponent_1.DAYS_IN_WEEK_VISIBLE + j
                    ]._fakeWorkPackageNb++;
                  }
                });
              };
              for (var i = 0; i < DialogScheduleMaintenanceCalendarComponent_1.WEEKS_IN_CALENDAR_VISIBLE; i++) {
                _loop_2(i);
              }
            };
            var this_1 = this;
            for (
              var weekIndex = 0;
              weekIndex < maxDaysInCalendar / DialogScheduleMaintenanceCalendarComponent_1.DAYS_IN_WEEK_VISIBLE - 1;
              weekIndex++
            ) {
              _loop_1(weekIndex);
            }
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.updateWorkPackge = function(workPackage) {
            var _this = this;
            this.scheduleMaintenanceFormService.updateWorkPackage(workPackage).subscribe(function(_) {
              _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnUpdateWorkPackage'));
            });
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.updateWorkPackageDate = function(event, workPackage) {
            event.preventDefault();
            event.stopPropagation();
            this.resizedWorkPackage = workPackage;
          };
          DialogScheduleMaintenanceCalendarComponent.prototype.updateCalendarFromNewWorkPackagelist = function(
            workPackageList
          ) {
            this.clearAllWorkPackage();
            this.workPackageList = workPackageList.filter(function(workPackage) {
              return (
                !!workPackage.projectStartDate &&
                (!!workPackage.projectEndDate || !!workPackage.projectDueDate) &&
                (moment__WEBPACK_IMPORTED_MODULE_1__(workPackage.projectStartDate).isBefore(
                  moment__WEBPACK_IMPORTED_MODULE_1__(workPackage.projectEndDate),
                  'day'
                ) ||
                  moment__WEBPACK_IMPORTED_MODULE_1__(workPackage.projectStartDate).isBefore(
                    moment__WEBPACK_IMPORTED_MODULE_1__(workPackage.projectDueDate),
                    'day'
                  ))
              );
            });
            this.setWorkPackages();
          };
          var DialogScheduleMaintenanceCalendarComponent_1;
          // private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;
          DialogScheduleMaintenanceCalendarComponent.DAYS_IN_WEEK_VISIBLE = 7;
          DialogScheduleMaintenanceCalendarComponent.WEEKS_IN_CALENDAR_VISIBLE = 6;
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogScheduleMaintenanceCalendarComponent.prototype,
            'topEquipmentCode',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('workPackageList'),
              __metadata('design:type', Array),
              __metadata('design:paramtypes', [Array])
            ],
            DialogScheduleMaintenanceCalendarComponent.prototype,
            'rawWorkPackageList',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogScheduleMaintenanceCalendarComponent.prototype,
            'onCreateWorkPackge',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogScheduleMaintenanceCalendarComponent.prototype,
            'rawWorkPackageListChange',
            void 0
          );
          DialogScheduleMaintenanceCalendarComponent = DialogScheduleMaintenanceCalendarComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-schedule-maintenance-calendar',
                template: __webpack_require__(
                  /*! ./dialog-schedule-maintenance-calendar.component.html */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-calendar/dialog-schedule-maintenance-calendar.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-schedule-maintenance-calendar.component.scss */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-calendar/dialog-schedule-maintenance-calendar.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__['MessageService'],
                _schedule_maintenance_form_service__WEBPACK_IMPORTED_MODULE_9__['ScheduleMaintenanceFormService']
              ])
            ],
            DialogScheduleMaintenanceCalendarComponent
          );
          return DialogScheduleMaintenanceCalendarComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-table-full-screen/dialog-schedule-maintenance-table-full-screen.component.html':
      /*!**************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-table-full-screen/dialog-schedule-maintenance-table-full-screen.component.html ***!
  \**************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal\r\n  id="dialog-schedule-maintenance-table-full-screen"\r\n  class="aw-table-fullscreen"\r\n  [(visible)]="display"\r\n  [fullScreen]="true"\r\n>\r\n  <a-header>\r\n    <div class="modal-title">\r\n      {{ getComponentName() + ".title" | translate }}\r\n      <span *ngIf="maintenancePlanTableDisplayedLeafNb === maintenancePlanTableLeafNb">\r\n        ({{ maintenancePlanTableDisplayedLeafNb }})\r\n      </span>\r\n      <span *ngIf="maintenancePlanTableDisplayedLeafNb !== maintenancePlanTableLeafNb">\r\n        ({{ maintenancePlanTableDisplayedLeafNb }} / {{ maintenancePlanTableLeafNb }})\r\n      </span>\r\n    </div>\r\n\r\n    <div class="close-wrapper">\r\n      <i class="aw-icon aw-icon-with-border fa fa-fw fa-minus" (click)="closeDialog()"></i>\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <p-treeTable\r\n        #ptable\r\n        class="aw-tree-table2"\r\n        [value]="maintenancePlanTable"\r\n        [columns]="maintenancePlanTableColList"\r\n        selectionMode="checkbox"\r\n        [(selection)]="maintenancePlanTableSelectedList"\r\n        [scrollable]="true"\r\n        [resizableColumns]="true"\r\n      >\r\n        <ng-template pTemplate="emptymessage">\r\n          <span *ngIf="!maintenancePlanTableLoading"> &nbsp;</span>\r\n\r\n          <div *ngIf="maintenancePlanTableLoading" class="aw-table-loading-indicator">\r\n            <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n            <div class="lds-hourglass"></div>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate="caption">\r\n          <div\r\n            class="aw-table-header"\r\n            [ngClass]="{\r\n              \'rows-selected\': maintenancePlanTableSelectedList.length > 0\r\n            }"\r\n          >\r\n            <div class="aw-table-global-filter">\r\n              <label class="aw-table-global-filter-label">\r\n                <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n              </label>\r\n\r\n              <input\r\n                class="aw-table-global-filter-input"\r\n                type="text"\r\n                placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                [(ngModel)]="searchGlobalFilter"\r\n                (keyup)="filter(searchGlobalFilter)"\r\n              />\r\n            </div>\r\n\r\n            <div class="aw-table-actions">\r\n              <button\r\n                *ngIf="\r\n                  scheduleMaintenanceFormService.workPackageRemoveFromButtonVisible(maintenancePlanTableSelectedList)\r\n                "\r\n                type="button"\r\n                mat-raised-button\r\n                (click)="removeFromWorkPackage()"\r\n              >\r\n                {{ getComponentName() + ".removeFromWP" | translate }}\r\n              </button>\r\n\r\n              <button\r\n                *ngIf="scheduleMaintenanceFormService.workPackageAddToButtonVisible(maintenancePlanTableSelectedList)"\r\n                type="button"\r\n                mat-raised-button\r\n                [ngClass]="{ active: workPackageListToAddVisible }"\r\n                (click)="opWorkPackageToAdd.toggle($event)"\r\n              >\r\n                {{ getComponentName() + ".addToWP" | translate }} &nbsp;\r\n                <i class="fa fa-fw fa-chevron-down" aria-hidden="true"></i>\r\n              </button>\r\n\r\n              <button\r\n                *ngIf="scheduleMaintenanceFormService.workPackageCreateButtonVisible(maintenancePlanTableSelectedList)"\r\n                type="button"\r\n                mat-raised-button\r\n                (click)="createWorkPackage()"\r\n              >\r\n                {{ getComponentName() + ".createWP" | translate }}\r\n              </button>\r\n\r\n              <p-splitButton\r\n                *ngIf="maintenancePlanTableSelectedList.length === 0"\r\n                class="aw-split-btn aw-table-action"\r\n                label="{{ getComponentName() + \'.potentialUnit\' | translate }} ({{ potentialUnitSelected }})"\r\n                [model]="potentialUnitList"\r\n              ></p-splitButton>\r\n\r\n              <button\r\n                *ngIf="!maintenancePlanTableLoading && maintenancePlanTableSelectedList.length === 0"\r\n                type="button"\r\n                mat-raised-button\r\n              >\r\n                {{ "global.export" | translate }}\r\n              </button>\r\n            </div>\r\n\r\n            <div *ngIf="!maintenancePlanTableLoading" class="aw-table-icon-actions">\r\n              <i\r\n                class="fa fa-fw fa-filter aw-icon aw-icon-with-border"\r\n                aria-hidden="true"\r\n                pTooltip="{{ getComponentName() + (filtersVisible ? \'.hideFilters\' : \'.showFilters\') | translate }}"\r\n                tooltipPosition="left"\r\n                [ngClass]="{ active: filtersVisible }"\r\n                (click)="opFilters.toggle($event)"\r\n              ></i>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngIf="\r\n              !maintenancePlanTableLoading &&\r\n              maintenancePlanTableSelectedList.length === 0 &&\r\n              filterActivatedList.length > 0\r\n            "\r\n            class="active-filter-list"\r\n          >\r\n            <div class="aw-chips" *ngFor="let filter of filterActivatedList">\r\n              <span *ngIf="filter.label" class="aw-chips-label">{{ filter.label }}</span>\r\n              <span class="aw-chips-value">{{ filter.value }}</span>\r\n              <i class="fa fa-fw fa-times aw-chips-icon" aria-hidden="true" (click)="filter.action()"></i>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate="colgroup" let-columns>\r\n          <colgroup>\r\n            <col class="aw-table-checkbox-wrapper" />\r\n            <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n          </colgroup>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate="header" let-columns>\r\n          <tr>\r\n            <th class="aw-table-checkbox-wrapper">\r\n              <p-treeTableHeaderCheckbox class="aw-table-checkbox"></p-treeTableHeaderCheckbox>\r\n            </th>\r\n\r\n            <th ttResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n              {{ getComponentName() + "." + col.field | translate }}\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">\r\n          <tr>\r\n            <td class="aw-table-checkbox-wrapper">\r\n              <p-treeTableCheckbox class="aw-table-checkbox" [value]="rowNode"></p-treeTableCheckbox>\r\n            </td>\r\n\r\n            <td\r\n              *ngFor="let col of columns; let i = index"\r\n              [ngSwitch]="col.field"\r\n              [ngStyle]="{ \'text-align\': col.alignment }"\r\n            >\r\n              <p-treeTableToggler [rowNode]="rowNode" *ngIf="i == 1"></p-treeTableToggler>\r\n\r\n              <span *ngSwitchCase="\'alert\'" pTooltip="{{ rowData[\'_alertTooltip\'] }}" tooltipPosition="top">\r\n                <span\r\n                  *ngIf="\r\n                    rowData[col.field] !== undefined &&\r\n                    rowData[col.field] !== null &&\r\n                    rowData[col.field] === controlConfigConstants.ICON_GREEN\r\n                  "\r\n                  class="alert alert--ok"\r\n                >\r\n                  {{ getComponentName() + ".alertOk" | translate }}\r\n                </span>\r\n\r\n                <span\r\n                  *ngIf="\r\n                    rowData[col.field] !== undefined &&\r\n                    rowData[col.field] !== null &&\r\n                    rowData[col.field] === controlConfigConstants.ICON_RED\r\n                  "\r\n                  class="alert alert--nok"\r\n                >\r\n                  {{ getComponentName() + ".alertNok" | translate }}\r\n                </span>\r\n\r\n                <span\r\n                  *ngIf="\r\n                    rowData[col.field] !== undefined &&\r\n                    rowData[col.field] !== null &&\r\n                    rowData[col.field] === controlConfigConstants.ICON_YELLOW\r\n                  "\r\n                  class="alert alert--warning"\r\n                >\r\n                  {{ getComponentName() + ".alertWarning" | translate }}\r\n                </span>\r\n              </span>\r\n\r\n              <span *ngSwitchCase="\'firstColumn\'" pTooltip="{{ rowData[\'firstColumnTooltip\'] }}" tooltipPosition="top">\r\n                {{ rowData[col.field] }}\r\n                <i\r\n                  *ngIf="\r\n                    rowData[\'counterAlert\'] !== undefined &&\r\n                    rowData[\'counterAlert\'] !== null &&\r\n                    rowData[\'counterAlert\'].length > 0 &&\r\n                    (rowData[\'counterAlert\'] === controlConfigConstants.ICON_RED ||\r\n                      rowData[\'counterAlert\'] === controlConfigConstants.ICON_YELLOW)\r\n                  "\r\n                  class="fa fa-fw fa-exclamation-triangle"\r\n                  aria-hidden="true"\r\n                  pTooltip="{{ rowData[\'counterAlertTooltip\'] }}"\r\n                  tooltipPosition="top"\r\n                ></i>\r\n              </span>\r\n\r\n              <span\r\n                *ngSwitchCase="\'nextTerm\'"\r\n                pTooltip="{{ rowData[\'usageCounterExplanation\'] }}"\r\n                tooltipPosition="top"\r\n              >\r\n                {{ rowData[col.field] }}\r\n              </span>\r\n\r\n              <a\r\n                *ngSwitchCase="\'nextWorkPackage\'"\r\n                pTooltip="{{ rowData[\'nextWorkPackageTooltip\'] }}"\r\n                tooltipPosition="top"\r\n                (click)="openWorkPackage(rowData)"\r\n              >\r\n                {{ rowData[col.field] }}\r\n              </a>\r\n\r\n              <span\r\n                *ngSwitchCase="\'remainingEquivalent\'"\r\n                pTooltip="{{ rowData[\'remainingEquivalentTooltip\'] }}"\r\n                tooltipPosition="top"\r\n              >\r\n                {{ rowData[col.field] }}\r\n              </span>\r\n\r\n              <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-treeTable>\r\n    </div>\r\n  </a-content>\r\n</a-modal>\r\n\r\n<p-overlayPanel #opFilters class="aw-overlay" (onShow)="filtersVisible = true" (onHide)="filtersVisible = false">\r\n  <aw-maintenance-table-filters\r\n    [searchAssetList]="searchAssetList"\r\n    [searchControlList]="searchControlList"\r\n    [searchCounterList]="searchCounterList"\r\n    [searchTaskGroupList]="searchTaskGroupList"\r\n    [searchTaskList]="searchTaskList"\r\n    [searchTypeList]="searchTypeList"\r\n    [searchWorkPackageList]="searchWorkPackageList"\r\n    [searchCriteria]="searchCriteria"\r\n    (onFilter)="opFilters.hide(); filtersVisible = false; filterWithCriteria()"\r\n    (onReset)="resetTableFilters()"\r\n  >\r\n  </aw-maintenance-table-filters>\r\n</p-overlayPanel>\r\n\r\n<p-overlayPanel\r\n  #opWorkPackageToAdd\r\n  (onShow)="workPackageListToAddVisible = true"\r\n  (onHide)="workPackageListToAddVisible = false"\r\n>\r\n  <aw-work-package-list\r\n    [addToVisible]="true"\r\n    [workPackageList]="workPackageList"\r\n    [workPackageStatusList]="workPackageStatusList"\r\n    (onAddTo)="opWorkPackageToAdd.hide(); workPackageListToAddVisible = false; addToWorkPackage($event)"\r\n  ></aw-work-package-list>\r\n</p-overlayPanel>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-table-full-screen/dialog-schedule-maintenance-table-full-screen.component.scss':
      /*!**************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-table-full-screen/dialog-schedule-maintenance-table-full-screen.component.scss ***!
  \**************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .filter-list {\n  margin-bottom: calc(8px * 2); }\n\n::ng-deep #dialog-schedule-maintenance-table-full-screen .ui-treetable-scrollable-body {\n  max-height: 45rem !important;\n  min-height: 45rem !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9zY2hlZHVsZS1tYWludGVuYW5jZS1mb3JtL2RpYWxvZy1zY2hlZHVsZS1tYWludGVuYW5jZS10YWJsZS1mdWxsLXNjcmVlbi9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbWFpbnRlbmFuY2VcXGFpcndvcnRoaW5lc3MtY29udHJvbFxcZm9ybVxcc2NoZWR1bGUtbWFpbnRlbmFuY2UtZm9ybVxcZGlhbG9nLXNjaGVkdWxlLW1haW50ZW5hbmNlLXRhYmxlLWZ1bGwtc2NyZWVuXFxkaWFsb2ctc2NoZWR1bGUtbWFpbnRlbmFuY2UtdGFibGUtZnVsbC1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSw0QkFBeUMsRUFBQTs7QUFJN0M7RUFDRSw0QkFBNEI7RUFDNUIsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2FpcndvcnRoaW5lc3MtY29udHJvbC9mb3JtL3NjaGVkdWxlLW1haW50ZW5hbmNlLWZvcm0vZGlhbG9nLXNjaGVkdWxlLW1haW50ZW5hbmNlLXRhYmxlLWZ1bGwtc2NyZWVuL2RpYWxvZy1zY2hlZHVsZS1tYWludGVuYW5jZS10YWJsZS1mdWxsLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuZmlsdGVyLWxpc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgI2RpYWxvZy1zY2hlZHVsZS1tYWludGVuYW5jZS10YWJsZS1mdWxsLXNjcmVlbiAudWktdHJlZXRhYmxlLXNjcm9sbGFibGUtYm9keSB7XHJcbiAgbWF4LWhlaWdodDogNDVyZW0gIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiA0NXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-table-full-screen/dialog-schedule-maintenance-table-full-screen.component.ts':
      /*!************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-table-full-screen/dialog-schedule-maintenance-table-full-screen.component.ts ***!
  \************************************************************************************************************************************************************************************************/
      /*! exports provided: DialogScheduleMaintenanceTableFullScreenComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogScheduleMaintenanceTableFullScreenComponent',
          function() {
            return DialogScheduleMaintenanceTableFullScreenComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _schedule_maintenance_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../schedule-maintenance-form.service */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.service.ts'
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

        var DialogScheduleMaintenanceTableFullScreenComponent = /** @class */ (function(_super) {
          __extends(DialogScheduleMaintenanceTableFullScreenComponent, _super);
          function DialogScheduleMaintenanceTableFullScreenComponent(scheduleMaintenanceFormService, sessionService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write,
                'DialogScheduleMaintenanceTableFullScreenComponent'
              ) || this;
            _this.scheduleMaintenanceFormService = scheduleMaintenanceFormService;
            _this.sessionService = sessionService;
            _this.controlConfigConstants =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_2__['ControlConfigConstants'];
            _this.init();
            _this.initMaintenancePlanTableColList();
            return _this;
          }
          Object.defineProperty(DialogScheduleMaintenanceTableFullScreenComponent.prototype, 'filterActivatedList', {
            get: function() {
              return this._filterActivatedList;
            },
            set: function(value) {
              this._filterActivatedList = value;
              this.filterActivatedListChange.emit(this._filterActivatedList);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(DialogScheduleMaintenanceTableFullScreenComponent.prototype, 'filtersVisible', {
            get: function() {
              return this._filtersVisible;
            },
            set: function(value) {
              this._filtersVisible = value;
              this.filtersVisibleChange.emit(this._filtersVisible);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'maintenancePlanTableSelectedList',
            {
              get: function() {
                return this._maintenancePlanTableSelectedList;
              },
              set: function(value) {
                this._maintenancePlanTableSelectedList = value;
                this.maintenancePlanTableSelectedListChange.emit(this._maintenancePlanTableSelectedList);
              },
              enumerable: true,
              configurable: true
            }
          );
          Object.defineProperty(DialogScheduleMaintenanceTableFullScreenComponent.prototype, 'potentialUnitSelected', {
            get: function() {
              return this._potentialUnitSelected;
            },
            set: function(value) {
              this._potentialUnitSelected = value;
              this.potentialUnitSelectedChange.emit(this._potentialUnitSelected);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(DialogScheduleMaintenanceTableFullScreenComponent.prototype, 'searchCriteria', {
            get: function() {
              return this._searchCriteria;
            },
            set: function(value) {
              this._searchCriteria = value;
              this.searchCriteriaChange.emit(this._searchCriteria);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(DialogScheduleMaintenanceTableFullScreenComponent.prototype, 'searchGlobalFilter', {
            get: function() {
              return this._searchGlobalFilter;
            },
            set: function(value) {
              this._searchGlobalFilter = value;
              this.searchGlobalFilterChange.emit(this._searchGlobalFilter);
            },
            enumerable: true,
            configurable: true
          });
          DialogScheduleMaintenanceTableFullScreenComponent.prototype.addToWorkPackage = function(workPackage) {
            this.onAddToWorkPackage.emit(workPackage);
          };
          DialogScheduleMaintenanceTableFullScreenComponent.prototype.createWorkPackage = function() {
            this.onCreateWorkPackage.emit();
          };
          DialogScheduleMaintenanceTableFullScreenComponent.prototype.filter = function(searchTextValue) {
            this.searchGlobalFilterChanged.next(searchTextValue);
          };
          DialogScheduleMaintenanceTableFullScreenComponent.prototype.filterWithCriteria = function() {
            this.onFilter.emit();
          };
          DialogScheduleMaintenanceTableFullScreenComponent.prototype.openWorkPackage = function(row) {
            this.onOpenWorkPackage.emit(row);
          };
          DialogScheduleMaintenanceTableFullScreenComponent.prototype.removeFromWorkPackage = function() {
            this.onRemoveFromWorkPackage.emit();
          };
          DialogScheduleMaintenanceTableFullScreenComponent.prototype.resetTableFilters = function() {
            this.onResetFilters.emit();
          };
          DialogScheduleMaintenanceTableFullScreenComponent.prototype.init = function() {
            this.workPackageListToAddVisible = false;
            this.onAddToWorkPackage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.onCreateWorkPackage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.onOpenWorkPackage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.onRemoveFromWorkPackage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.onResetFilters = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.filterActivatedListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.filtersVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.maintenancePlanTableSelectedListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'EventEmitter'
            ]();
            this.potentialUnitSelectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.searchCriteriaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.searchGlobalFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          };
          DialogScheduleMaintenanceTableFullScreenComponent.prototype.initMaintenancePlanTableColList = function() {
            this.maintenancePlanTableColList = [
              { field: 'alert', alignment: 'center', width: '5rem' },
              { field: 'firstColumn', alignment: 'left', width: '20rem' },
              { field: 'type', alignment: 'left', width: '7.5rem' },
              { field: 'description', alignment: 'left', width: '25rem' },
              { field: 'remainingEquivalent', alignment: 'left', width: '10rem' },
              { field: 'remaining', alignment: 'left', width: '25rem' },
              { field: 'nextWorkPackage', alignment: 'left', width: '10rem' },
              { field: 'nextTerm', alignment: 'left', width: '15rem' },
              { field: 'period', alignment: 'left', width: '10rem' },
              { field: 'status', alignment: 'left', width: '10rem' },
              { field: 'postponement', alignment: 'left', width: '10rem' }
            ];
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('table'), __metadata('design:type', Array)],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'maintenancePlanTable',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'maintenancePlanTableDisplayedLeafNb',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'maintenancePlanTableLeafNb',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'maintenancePlanTableLoading',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'potentialUnitList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'searchAssetList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'searchControlList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'searchCounterList',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', rxjs__WEBPACK_IMPORTED_MODULE_1__['Subject'])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'searchGlobalFilterChanged',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'searchTaskGroupList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'searchTaskList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'searchTypeList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'searchWorkPackageList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'workPackageList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'workPackageStatusList',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array),
              __metadata('design:paramtypes', [Array])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'filterActivatedList',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Boolean),
              __metadata('design:paramtypes', [Boolean])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'filtersVisible',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array),
              __metadata('design:paramtypes', [Array])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'maintenancePlanTableSelectedList',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', String),
              __metadata('design:paramtypes', [String])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'potentialUnitSelected',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'searchCriteria',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', String),
              __metadata('design:paramtypes', [String])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'searchGlobalFilter',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'onAddToWorkPackage',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'onCreateWorkPackage',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'onFilter',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'onOpenWorkPackage',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'onRemoveFromWorkPackage',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'onResetFilters',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'filterActivatedListChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'filtersVisibleChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'maintenancePlanTableSelectedListChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'potentialUnitSelectedChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'searchCriteriaChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent.prototype,
            'searchGlobalFilterChange',
            void 0
          );
          DialogScheduleMaintenanceTableFullScreenComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-schedule-maintenance-table-full-screen',
                template: __webpack_require__(
                  /*! ./dialog-schedule-maintenance-table-full-screen.component.html */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-table-full-screen/dialog-schedule-maintenance-table-full-screen.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../../share.scss */ './src/app/main/maintenance/airworthiness-control/form/share.scss'
                  ),
                  __webpack_require__(
                    /*! ../share.scss */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/share.scss'
                  ),
                  __webpack_require__(
                    /*! ./dialog-schedule-maintenance-table-full-screen.component.scss */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-schedule-maintenance-table-full-screen/dialog-schedule-maintenance-table-full-screen.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _schedule_maintenance_form_service__WEBPACK_IMPORTED_MODULE_6__['ScheduleMaintenanceFormService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__['SessionService']
              ])
            ],
            DialogScheduleMaintenanceTableFullScreenComponent
          );
          return DialogScheduleMaintenanceTableFullScreenComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-task-counters/dialog-task-counters.component.html':
      /*!************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-task-counters/dialog-task-counters.component.html ***!
  \************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="50">\r\n  <a-header>\r\n    <div class="modal-title">\r\n      {{ getComponentName() + ".title" | translate }} ({{ taskCountersTable ? taskCountersTable.length : 0 }})\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div *ngIf="isWriteOpenMode && taskCountersTableSelected" class="row object-details">\r\n        <div class="column">\r\n          <div class="row">\r\n            <div class="form-group required">\r\n              <label class="form-label"> {{ getComponentName() + ".nextTerm" | translate }} </label>\r\n\r\n              <div *ngIf="isCalendarUnit(taskCounter)" class="form-control">\r\n                <p-calendar\r\n                  showButtonBar="true"\r\n                  [monthNavigator]="true"\r\n                  [yearNavigator]="true"\r\n                  [yearRange]="sessionService.calendarYearRange"\r\n                  class="aw-calendar"\r\n                  [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                  [locale]="sessionService.calendarFormat"\r\n                  [(ngModel)]="taskCounter.nextTermDate"\r\n                  appendTo="body"\r\n                ></p-calendar>\r\n              </div>\r\n\r\n              <div *ngIf="!isCalendarUnit(taskCounter)" class="form-control">\r\n                <input type="text" class="aw-input" [(ngModel)]="taskCounter.nextTermDouble" />\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group required">\r\n              <label class="form-label"> {{ getComponentName() + ".periodicity" | translate }} </label>\r\n\r\n              <div class="form-control">\r\n                <input type="text" class="aw-input" [(ngModel)]="taskCounter.periodicity" />\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group flex--2"></div>\r\n          </div>\r\n\r\n          <div class="row actions-bar">\r\n            <button\r\n              type="button"\r\n              color="primary"\r\n              mat-raised-button\r\n              (click)="saveTaskCounter()"\r\n              [disabled]="!isTaskCounterValid()"\r\n            >\r\n              {{ getComponentName() + ".validate" | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <p-table\r\n          [resizableColumns]="true"\r\n          #ptableTaskCounters\r\n          class="aw-table2"\r\n          [columns]="taskCountersTableColList"\r\n          [value]="taskCountersTable"\r\n          [(selection)]="taskCountersTableSelected"\r\n          selectionMode="single"\r\n          [scrollable]="true"\r\n          (onRowSelect)="onRowSelect()"\r\n          (onRowUnselect)="onRowUnselect()"\r\n        >\r\n          <ng-template pTemplate="emptymessage">\r\n            <span *ngIf="!taskCountersTableLoading"> &nbsp;</span>\r\n\r\n            <div *ngIf="taskCountersTableLoading" class="aw-table-loading-indicator">\r\n              <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n              <div class="lds-hourglass"></div>\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="caption">\r\n            <div class="aw-table-header" [ngClass]="{ \'rows-selected\': taskCountersTableSelected }">\r\n              <div class="aw-table-global-filter">\r\n                <label class="aw-table-global-filter-label">\r\n                  <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                </label>\r\n\r\n                <input\r\n                  #ptableTaskCountersGlobalFilter\r\n                  class="aw-table-global-filter-input"\r\n                  type="text"\r\n                  placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                  (input)="ptableTaskCounters.filterGlobal($event.target.value, \'contains\')"\r\n                />\r\n              </div>\r\n\r\n              <div class="aw-table-actions">\r\n                <button\r\n                  *ngIf="taskCountersTableSelected"\r\n                  type="button"\r\n                  mat-raised-button\r\n                  [ngClass]="{ active: isWriteOpenMode }"\r\n                  (click)="toggleWriteOpenMode()"\r\n                >\r\n                  {{ getComponentName() + ".edit" | translate }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="colgroup" let-columns>\r\n            <colgroup>\r\n              <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n            </colgroup>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="header" let-columns>\r\n            <tr>\r\n              <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                {{ getComponentName() + "." + col.field | translate }}\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n            <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n              <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">{{ rowData[col.field] }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </p-table>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-task-counters/dialog-task-counters.component.ts':
      /*!**********************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-task-counters/dialog-task-counters.component.ts ***!
  \**********************************************************************************************************************************************/
      /*! exports provided: DialogTaskCountersComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogTaskCountersComponent',
          function() {
            return DialogTaskCountersComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../shared/constants/bire-unit-measure-constants */ './src/app/shared/constants/bire-unit-measure-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _schedule_maintenance_form_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../schedule-maintenance-form.service */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.service.ts'
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

        var DialogTaskCountersComponent = /** @class */ (function(_super) {
          __extends(DialogTaskCountersComponent, _super);
          function DialogTaskCountersComponent(
            scheduleMaintenanceFormService,
            sessionService,
            dateService,
            messageService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'DialogTaskCountersComponent'
              ) || this;
            _this.scheduleMaintenanceFormService = scheduleMaintenanceFormService;
            _this.sessionService = sessionService;
            _this.dateService = dateService;
            _this.messageService = messageService;
            _this.init();
            _this.initTaskCountersTableColList();
            return _this;
          }
          DialogTaskCountersComponent.prototype.ngOnDestroy = function() {
            this.onClose.emit(this.updated);
          };
          DialogTaskCountersComponent.prototype.ngOnInit = function() {
            this.load();
          };
          DialogTaskCountersComponent.prototype.isCalendarUnit = function(element) {
            return (
              element.unit ===
                _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_1__['BireUnitMeasureConstants']
                  .DAY ||
              element.unit ===
                _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_1__['BireUnitMeasureConstants']
                  .WEEK ||
              element.unit ===
                _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_1__['BireUnitMeasureConstants']
                  .MONTH ||
              element.unit ===
                _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_1__['BireUnitMeasureConstants']
                  .YEAR
            );
          };
          DialogTaskCountersComponent.prototype.isTaskCounterValid = function() {
            return (
              (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__['ObjectUtils'].isDefined(
                this.taskCounter.nextTermDate
              ) ||
                _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__['ObjectUtils'].isDefined(
                  this.taskCounter.nextTermDouble
                )) &&
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__['ObjectUtils'].isDefined(
                this.taskCounter.periodicity
              )
            );
          };
          DialogTaskCountersComponent.prototype.onRowSelect = function() {
            this.clearTaskCounter();
            _super.prototype.updateOpenMode.call(
              this,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read
            );
          };
          DialogTaskCountersComponent.prototype.onRowUnselect = function() {
            this.clearTaskCounter();
            _super.prototype.updateOpenMode.call(
              this,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read
            );
          };
          DialogTaskCountersComponent.prototype.toggleWriteOpenMode = function() {
            _super.prototype.updateOpenMode.call(
              this,
              this.isWriteOpenMode
                ? _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read
                : _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write
            );
            this.toggleOpenMode();
          };
          DialogTaskCountersComponent.prototype.saveTaskCounter = function() {
            var _this = this;
            var selectedTaskCounter = this.taskCountersTableSelected;
            selectedTaskCounter._obj.nextTermDate = this.taskCounter.nextTermDate;
            selectedTaskCounter._obj.nextTermDouble = this.taskCounter.nextTermDouble;
            selectedTaskCounter._obj.periodicity = this.taskCounter.periodicity;
            selectedTaskCounter.nextTerm = this.formatNextTerm(selectedTaskCounter._obj);
            selectedTaskCounter.periodicity = this.formatPeriodicity(selectedTaskCounter._obj);
            var input = {
              topEquipmentCode: this.topEquipmentCode,
              selectedRowId: this.selectedRow._id,
              taskCounter: this.taskCounter,
              isNew: false
            };
            this.scheduleMaintenanceFormService.saveTaskCounter(input).subscribe(function(_) {
              _this.taskCountersTableSelected = undefined;
              _this.clearTaskCounter();
              _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSaveTaskCounter'));
              _this.updated = true;
            });
          };
          DialogTaskCountersComponent.prototype.clearTaskCounter = function() {
            this.taskCounter = {};
          };
          DialogTaskCountersComponent.prototype.createTaskCountersRow = function(element) {
            var row = {
              nextTerm: this.formatNextTerm(element),
              periodicity: this.formatPeriodicity(element),
              periodicityType: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__['StringUtils'].orEmpty(
                element.periodicityType
              ),
              reference: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__['StringUtils'].orEmpty(
                element.referenceText
              ),
              unit: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__['StringUtils'].orEmpty(element.unit),
              _obj: element
            };
            return row;
          };
          DialogTaskCountersComponent.prototype.formatNextTerm = function(element) {
            var nextTerm = '';
            if (!!element.unit) {
              if (this.isCalendarUnit(element)) {
                nextTerm = this.dateService.dateToString(element.nextTermDate);
              } else if (
                _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__['ObjectUtils'].isDefined(element.nextTermDouble)
              ) {
                nextTerm = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__['StringUtils'].orEmpty(
                  element.nextTermDouble.toString()
                );
              }
            }
            return nextTerm;
          };
          DialogTaskCountersComponent.prototype.formatPeriodicity = function(element) {
            return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__['ObjectUtils'].isDefined(element.periodicity)
              ? element.periodicity.toString()
              : '';
          };
          DialogTaskCountersComponent.prototype.init = function() {
            this.taskCountersTable = [];
            this.taskCountersTableLoading = false;
            this.taskCountersTableSelected = undefined;
            this.updated = false;
            this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.clearTaskCounter();
          };
          DialogTaskCountersComponent.prototype.initTaskCountersTableColList = function() {
            this.taskCountersTableColList = [
              { field: 'reference', alignment: 'left', width: '40%' },
              { field: 'nextTerm', alignment: 'left', width: '15%' },
              { field: 'periodicity', alignment: 'left', width: '15%' },
              { field: 'unit', alignment: 'left', width: '10%' },
              { field: 'periodicityType', alignment: 'left', width: '20%' }
            ];
          };
          DialogTaskCountersComponent.prototype.load = function() {
            var _this = this;
            this.taskCountersTableLoading = true;
            var input = {
              topEquipmentCode: this.topEquipmentCode,
              selectedRowId: this.selectedRow._id
            };
            this.scheduleMaintenanceFormService.getAllCounterFromMaintenancePlan(input).subscribe(function(result) {
              _this.taskCountersTableLoading = false;
              _this.taskCountersTable = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__['ListUtils']
                .orEmpty(result)
                .map(function(element) {
                  return _this.createTaskCountersRow(element);
                });
            });
          };
          DialogTaskCountersComponent.prototype.toggleOpenMode = function() {
            if (this.isWriteOpenMode) {
              this.clearTaskCounter();
            }
            if (this.taskCountersTableSelected) {
              var periodicity = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__['ObjectUtils'].isDefined(
                this.taskCountersTableSelected.periodicity
              )
                ? Number(this.taskCountersTableSelected.periodicity)
                : undefined;
              this.taskCounter = {
                periodicity: periodicity,
                nextTermDate: this.taskCountersTableSelected._obj.nextTermDate,
                nextTermDouble: this.taskCountersTableSelected._obj.nextTermDouble,
                periodicityType: this.taskCountersTableSelected.periodicityType,
                reference: this.taskCountersTableSelected._obj.reference,
                referenceText: this.taskCountersTableSelected.reference,
                unit: this.taskCountersTableSelected.unit
              };
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogTaskCountersComponent.prototype,
            'selectedRow',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogTaskCountersComponent.prototype,
            'topEquipmentCode',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogTaskCountersComponent.prototype,
            'onClose',
            void 0
          );
          DialogTaskCountersComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-task-counters',
                template: __webpack_require__(
                  /*! ./dialog-task-counters.component.html */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/dialog-task-counters/dialog-task-counters.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../share.scss */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/share.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _schedule_maintenance_form_service__WEBPACK_IMPORTED_MODULE_10__['ScheduleMaintenanceFormService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__['SessionService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__['DateService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__['MessageService']
              ])
            ],
            DialogTaskCountersComponent
          );
          return DialogTaskCountersComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/enums/maintenance-plan-table-task-criteria.interface.ts':
      /*!***********************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/enums/maintenance-plan-table-task-criteria.interface.ts ***!
  \***********************************************************************************************************************************************/
      /*! exports provided: MaintenancePlanTableTaskCriteria */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MaintenancePlanTableTaskCriteria',
          function() {
            return MaintenancePlanTableTaskCriteria;
          }
        );
        var MaintenancePlanTableTaskCriteria;
        (function(MaintenancePlanTableTaskCriteria) {
          MaintenancePlanTableTaskCriteria[(MaintenancePlanTableTaskCriteria['ActiveTasks'] = 0)] = 'ActiveTasks';
          MaintenancePlanTableTaskCriteria[(MaintenancePlanTableTaskCriteria['InactiveTasks'] = 1)] = 'InactiveTasks';
          MaintenancePlanTableTaskCriteria[(MaintenancePlanTableTaskCriteria['OnCondition'] = 2)] = 'OnCondition';
        })(MaintenancePlanTableTaskCriteria || (MaintenancePlanTableTaskCriteria = {}));

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/enums/maintenance-plan-table-type-criteria.interface.ts':
      /*!***********************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/enums/maintenance-plan-table-type-criteria.interface.ts ***!
  \***********************************************************************************************************************************************/
      /*! exports provided: MaintenancePlanTableTypeCriteria */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MaintenancePlanTableTypeCriteria',
          function() {
            return MaintenancePlanTableTypeCriteria;
          }
        );
        var MaintenancePlanTableTypeCriteria;
        (function(MaintenancePlanTableTypeCriteria) {
          MaintenancePlanTableTypeCriteria[(MaintenancePlanTableTypeCriteria['AD'] = 0)] = 'AD';
          MaintenancePlanTableTypeCriteria[(MaintenancePlanTableTypeCriteria['Defect'] = 1)] = 'Defect';
          MaintenancePlanTableTypeCriteria[(MaintenancePlanTableTypeCriteria['LLP'] = 2)] = 'LLP';
          MaintenancePlanTableTypeCriteria[(MaintenancePlanTableTypeCriteria['OMP'] = 3)] = 'OMP';
          MaintenancePlanTableTypeCriteria[(MaintenancePlanTableTypeCriteria['SB'] = 4)] = 'SB';
          MaintenancePlanTableTypeCriteria[(MaintenancePlanTableTypeCriteria['AMG'] = 5)] = 'AMG';
        })(MaintenancePlanTableTypeCriteria || (MaintenancePlanTableTypeCriteria = {}));

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/maintenance-table-filters/maintenance-table-filters.component.html':
      /*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/maintenance-table-filters/maintenance-table-filters.component.html ***!
  \**********************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="row">\r\n  <div class="form-group flex--auto">\r\n    <label class="form-label"> &nbsp; </label>\r\n\r\n    <div class="form-control aw-selectbutton-wrapper">\r\n      <p-selectButton\r\n        [(ngModel)]="searchCriteria.controlList"\r\n        [options]="searchControlList"\r\n        multiple="multiple"\r\n      ></p-selectButton>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="form-group flex--auto">\r\n    <label class="form-label"> &nbsp; </label>\r\n\r\n    <div class="form-control aw-selectbutton-wrapper">\r\n      <p-selectButton\r\n        [(ngModel)]="searchCriteria.taskList"\r\n        [options]="searchTaskList"\r\n        multiple="multiple"\r\n      ></p-selectButton>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="form-group flex--auto">\r\n    <label class="form-label"> &nbsp; </label>\r\n\r\n    <div class="form-control aw-selectbutton-wrapper">\r\n      <p-selectButton\r\n        [(ngModel)]="searchCriteria.typeList"\r\n        [options]="searchTypeList"\r\n        multiple="multiple"\r\n      ></p-selectButton>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row">\r\n  <div class="form-group">\r\n    <label class="form-label"> {{ getComponentName() + ".taskGroup" | translate }} </label>\r\n\r\n    <div class="form-control">\r\n      <p-dropdown\r\n        class="aw-dropdown fixed-width"\r\n        [options]="searchTaskGroupList"\r\n        [(ngModel)]="searchCriteria.taskGroup"\r\n        [showClear]="true"\r\n        placeholder="&nbsp;"\r\n      ></p-dropdown>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="form-group">\r\n    <label class="form-label"> {{ getComponentName() + ".asset" | translate }} </label>\r\n\r\n    <div class="form-control">\r\n      <p-dropdown\r\n        class="aw-dropdown fixed-width"\r\n        [options]="searchAssetList"\r\n        [(ngModel)]="searchCriteria.asset"\r\n        [showClear]="true"\r\n        placeholder="&nbsp;"\r\n      ></p-dropdown>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="form-group">\r\n    <label class="form-label"> {{ getComponentName() + ".workPackage" | translate }} </label>\r\n\r\n    <div class="form-control">\r\n      <p-dropdown\r\n        class="aw-dropdown fixed-width"\r\n        [options]="searchWorkPackageList"\r\n        [(ngModel)]="searchCriteria.workPackage"\r\n        [showClear]="true"\r\n        placeholder="&nbsp;"\r\n      ></p-dropdown>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="form-group">\r\n    <label class="form-label"> {{ getComponentName() + ".counterUnit" | translate }} </label>\r\n\r\n    <div class="form-control">\r\n      <p-dropdown\r\n        class="aw-dropdown fixed-width"\r\n        [options]="searchCounterList"\r\n        [(ngModel)]="searchCriteria.counterUnit"\r\n        [showClear]="true"\r\n        placeholder="&nbsp;"\r\n      ></p-dropdown>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row">\r\n  <div class="form-group">\r\n    <label class="form-label"> {{ getComponentName() + ".hours" | translate }} &le; </label>\r\n    <div class="form-control">\r\n      <input type="number" class="aw-input" [(ngModel)]="searchCriteria.hours" />\r\n    </div>\r\n  </div>\r\n\r\n  <div class="form-group">\r\n    <label class="form-label"> {{ getComponentName() + ".cycles" | translate }} &le; </label>\r\n    <div class="form-control">\r\n      <input type="number" class="aw-input" [(ngModel)]="searchCriteria.cycles" />\r\n    </div>\r\n  </div>\r\n\r\n  <div class="form-group">\r\n    <label class="form-label"> {{ getComponentName() + ".date" | translate }} &le; </label>\r\n    <div class="form-control">\r\n      <p-calendar\r\n        showButtonBar="true"\r\n        [monthNavigator]="true"\r\n        [yearNavigator]="true"\r\n        [yearRange]="sessionService.calendarYearRange"\r\n        class="aw-calendar"\r\n        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n        [locale]="sessionService.calendarFormat"\r\n        [(ngModel)]="searchCriteria.date"\r\n      ></p-calendar>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="form-group" [ngClass]="{ \'visibility--hidden\': !searchCriteria.counterUnit }">\r\n    <label class="form-label"> {{ getComponentName() + ".counterValue" | translate }} &le; </label>\r\n    <div class="form-control">\r\n      <input type="number" class="aw-input" [(ngModel)]="searchCriteria.counterValue" />\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row action-list">\r\n  <button type="button" mat-raised-button (click)="reset()">\r\n    {{ getComponentName() + ".reset" | translate }}\r\n  </button>\r\n\r\n  <button type="button" mat-raised-button (click)="filter()">\r\n    {{ getComponentName() + ".filter" | translate }}\r\n  </button>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/maintenance-table-filters/maintenance-table-filters.component.scss':
      /*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/maintenance-table-filters/maintenance-table-filters.component.scss ***!
  \**********************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .action-list {\n  justify-content: flex-end; }\n  :host .action-list .aw-btn {\n    margin-left: 8px; }\n  :host .action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9zY2hlZHVsZS1tYWludGVuYW5jZS1mb3JtL21haW50ZW5hbmNlLXRhYmxlLWZpbHRlcnMvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFxhaXJ3b3J0aGluZXNzLWNvbnRyb2xcXGZvcm1cXHNjaGVkdWxlLW1haW50ZW5hbmNlLWZvcm1cXG1haW50ZW5hbmNlLXRhYmxlLWZpbHRlcnNcXG1haW50ZW5hbmNlLXRhYmxlLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvYWlyd29ydGhpbmVzcy1jb250cm9sL2Zvcm0vc2NoZWR1bGUtbWFpbnRlbmFuY2UtZm9ybS9tYWludGVuYW5jZS10YWJsZS1maWx0ZXJzL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSx5QkFBeUIsRUFBQTtFQUY3QjtJQUtNLGdCQ3FDWSxFQUFBO0VEMUNsQjtNQVFRLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvYWlyd29ydGhpbmVzcy1jb250cm9sL2Zvcm0vc2NoZWR1bGUtbWFpbnRlbmFuY2UtZm9ybS9tYWludGVuYW5jZS10YWJsZS1maWx0ZXJzL21haW50ZW5hbmNlLXRhYmxlLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLmFjdGlvbi1saXN0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgLmF3LWJ0biB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/maintenance-table-filters/maintenance-table-filters.component.ts':
      /*!********************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/maintenance-table-filters/maintenance-table-filters.component.ts ***!
  \********************************************************************************************************************************************************/
      /*! exports provided: MaintenanceTableFiltersComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MaintenanceTableFiltersComponent',
          function() {
            return MaintenanceTableFiltersComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
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

        var MaintenanceTableFiltersComponent = /** @class */ (function(_super) {
          __extends(MaintenanceTableFiltersComponent, _super);
          function MaintenanceTableFiltersComponent(sessionService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write
              ) || this;
            _this.sessionService = sessionService;
            _this.init();
            return _this;
          }
          MaintenanceTableFiltersComponent.prototype.getComponentName = function() {
            return 'MaintenanceTableFiltersComponent';
          };
          MaintenanceTableFiltersComponent.prototype.filter = function() {
            this.onFilter.emit();
          };
          MaintenanceTableFiltersComponent.prototype.reset = function() {
            this.onReset.emit();
          };
          MaintenanceTableFiltersComponent.prototype.init = function() {
            this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            MaintenanceTableFiltersComponent.prototype,
            'searchAssetList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            MaintenanceTableFiltersComponent.prototype,
            'searchControlList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            MaintenanceTableFiltersComponent.prototype,
            'searchCounterList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            MaintenanceTableFiltersComponent.prototype,
            'searchCriteria',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            MaintenanceTableFiltersComponent.prototype,
            'searchTaskGroupList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            MaintenanceTableFiltersComponent.prototype,
            'searchTaskList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            MaintenanceTableFiltersComponent.prototype,
            'searchTypeList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            MaintenanceTableFiltersComponent.prototype,
            'searchWorkPackageList',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            MaintenanceTableFiltersComponent.prototype,
            'onFilter',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            MaintenanceTableFiltersComponent.prototype,
            'onReset',
            void 0
          );
          MaintenanceTableFiltersComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-maintenance-table-filters',
                template: __webpack_require__(
                  /*! ./maintenance-table-filters.component.html */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/maintenance-table-filters/maintenance-table-filters.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./maintenance-table-filters.component.scss */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/maintenance-table-filters/maintenance-table-filters.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__['SessionService']
              ])
            ],
            MaintenanceTableFiltersComponent
          );
          return MaintenanceTableFiltersComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_3__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.component.html':
      /*!********************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.component.html ***!
  \********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ componentContext }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item [matMenuTriggerFor]="navigations">\r\n        {{ "global.goTo" | translate }}\r\n      </button>\r\n\r\n      <button mat-menu-item [matMenuTriggerFor]="potentialUnitSelection">\r\n        {{ getComponentName() + ".potentialUnit" | translate }}({{ potentialUnitSelected }})\r\n      </button>\r\n\r\n      <button mat-menu-item (click)="reload()">{{ "global.refresh" | translate }}</button>\r\n\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n\r\n    <mat-menu #navigations="matMenu">\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="navigationLinkList[0].command()">\r\n        {{ navigationLinkList[0].label | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="navigationLinkList[1].command()">\r\n        {{ navigationLinkList[1].label | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="navigationLinkList[2].command()">\r\n        {{ navigationLinkList[2].label | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="navigationLinkList[3].command()">\r\n        {{ navigationLinkList[3].label | translate }}\r\n      </button>\r\n    </mat-menu>\r\n    <mat-menu #potentialUnitSelection="matMenu">\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="potentialUnitList[0].command()">\r\n        {{ potentialUnitList[0].label | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="potentialUnitList[1].command()">\r\n        {{ potentialUnitList[1].label | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="potentialUnitList[2].command()">\r\n        {{ potentialUnitList[2].label | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div id="schedule-maintenance-form" class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--6">\r\n          <div class="grid-cell grid-cell--container grid-cell-scope">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <div class="grid-cell-title">\r\n                  <span *ngIf="isAssetAircraft">{{ getComponentName() + ".aircraft" | translate }}</span>\r\n                  <span *ngIf="isAssetEngine">{{ getComponentName() + ".engine" | translate }}</span>\r\n                  <span *ngIf="isAssetEquipment">{{ getComponentName() + ".equipment" | translate }}</span>\r\n                  <div *ngIf="maintenancePlanTableLoading" class="lds-hourglass"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ getComponentName() + ".designation" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="asset.equipmentDesignation" [disabled]="true" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div *ngIf="isAssetAircraft" class="form-group">\r\n                    <label class="form-label"> {{ getComponentName() + ".registration" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="asset.registration" [disabled]="true" />\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf="isAssetEngine || isAssetEquipment" class="form-group">\r\n                    <label class="form-label"> {{ getComponentName() + ".sn" | translate }} </label>\r\n\r\n                    <div class="form-control form-control-with-actions">\r\n                      <div class="form-control-generic">\r\n                        <a (click)="openAsset()">{{ asset.sn }}</a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ getComponentName() + ".airworthinessStatus" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <div class="form-control-generic">\r\n                        <span *ngIf="airworthinessStatus === controlConfigConstants.ICON_GREEN" class="alert alert--ok">\r\n                          {{ getComponentName() + ".alertOk" | translate }}\r\n                        </span>\r\n\r\n                        <span *ngIf="airworthinessStatus === controlConfigConstants.ICON_RED" class="alert alert--nok">\r\n                          {{ getComponentName() + ".alertNok" | translate }}\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngIf="airworthinessStatus === controlConfigConstants.ICON_YELLOW"\r\n                          class="alert alert--warning"\r\n                        >\r\n                          {{ getComponentName() + ".alertWarning" | translate }}\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ getComponentName() + ".familyVariant" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="asset.familyVariantCode" [disabled]="true" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div *ngIf="isAssetAircraft" class="form-group">\r\n                    <label class="form-label"> {{ getComponentName() + ".msn" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <div class="form-control-generic">\r\n                        <a (click)="openAsset()">{{ asset.sn }}</a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf="isAssetEngine || isAssetEquipment" class="form-group">\r\n                    <label class="form-label"> {{ getComponentName() + ".pn" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="asset.pnCode" [disabled]="true" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ getComponentName() + ".status" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="assetStatus" [disabled]="true" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <!-- <div class="form-group">\r\n                    <label class="form-label"> {{ getComponentName() + ".eisDate" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="assetEisDate" [disabled]="true" />\r\n                    </div>\r\n                  </div> -->\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ tsnLabel }} {{ getComponentName() + ".global" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="assetTsn" [disabled]="true" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ csnLabel }} {{ getComponentName() + ".global" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="assetCsn" [disabled]="true" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ getComponentName() + ".potentialEqRemaining" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="potentialEquivalent" [disabled]="true" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-cell--6">\r\n          <div class="grid-cell grid-cell--container grid-cell-summary">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <div class="grid-cell-title">\r\n                  {{ getComponentName() + ".upcomingEventsSummary" | translate }}\r\n                  <div *ngIf="maintenancePlanTableLoading" class="lds-hourglass"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="row">\r\n                <div *ngIf="summaryTableVisible && !maintenancePlanTableLoading" class="table-summary-wrapper">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    class="aw-table-control-summary"\r\n                    [columns]="summaryTableColList"\r\n                    [value]="summaryTable"\r\n                  >\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th\r\n                          pResizableColumn\r\n                          *ngFor="let col of columns"\r\n                          [ngSwitch]="col.field"\r\n                          [ngStyle]="{ \'text-align\': col.alignment }"\r\n                        >\r\n                          <span *ngSwitchCase="\'category\'"></span>\r\n\r\n                          <span *ngSwitchDefault> {{ "table." + col.field | translate }} </span>\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="body" let-columns="columns" let-rowData>\r\n                      <tr>\r\n                        <td\r\n                          *ngFor="let col of columns"\r\n                          [ngSwitch]="col.field"\r\n                          [ngStyle]="{ \'text-align\': col.alignment }"\r\n                        >\r\n                          <span *ngSwitchCase="\'nok\'" class="control-result" [ngClass]="{ nok: rowData[\'nok\'] > 0 }">\r\n                            {{ rowData[col.field] }}\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngSwitchCase="\'warning\'"\r\n                            class="control-result"\r\n                            [ngClass]="{ warning: rowData[\'nok\'] == 0 && rowData[\'warning\'] > 0 }"\r\n                          >\r\n                            {{ rowData[col.field] }}\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngSwitchCase="\'ok\'"\r\n                            class="control-result"\r\n                            [ngClass]="{ ok: rowData[\'nok\'] == 0 && rowData[\'warning\'] == 0 && rowData[\'ok\'] >= 0 }"\r\n                          >\r\n                            {{ rowData[col.field] }}\r\n                          </span>\r\n\r\n                          <span *ngSwitchCase="\'category\'">\r\n                            {{ getComponentName() + "." + rowData[col.field] | translate }}\r\n                          </span>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container grid-cell-schedule-maintenance">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <div class="grid-cell-title">\r\n                  {{ getComponentName() + ".upcomingEvents" | translate }}\r\n                  <span\r\n                    *ngIf="\r\n                      !maintenancePlanTableLoading && maintenancePlanTableDisplayedLeafNb === maintenancePlanTableLeafNb\r\n                    "\r\n                  >\r\n                    ({{ maintenancePlanTableDisplayedLeafNb }})\r\n                  </span>\r\n                  <span\r\n                    *ngIf="\r\n                      !maintenancePlanTableLoading && maintenancePlanTableDisplayedLeafNb !== maintenancePlanTableLeafNb\r\n                    "\r\n                  >\r\n                    ({{ maintenancePlanTableDisplayedLeafNb }} / {{ maintenancePlanTableLeafNb }})\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <p-treeTable\r\n                      [resizableColumns]="true"\r\n                      #ptable\r\n                      class="aw-tree-table2"\r\n                      [value]="maintenancePlanTableDisplayed"\r\n                      [columns]="maintenancePlanTableColList"\r\n                      selectionMode="checkbox"\r\n                      [(selection)]="maintenancePlanTableSelectedList"\r\n                      [scrollable]="true"\r\n                      (sortFunction)="customSort($event)"\r\n                      [customSort]="true"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!maintenancePlanTableLoading"> &nbsp;</span>\r\n\r\n                        <div *ngIf="maintenancePlanTableLoading" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div\r\n                          class="aw-table-header"\r\n                          [ngClass]="{\r\n                            \'rows-selected\': maintenancePlanTableSelectedList.length > 0\r\n                          }"\r\n                        >\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              [(ngModel)]="searchGlobalFilter"\r\n                              (keyup)="filter(searchGlobalFilter)"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions">\r\n                            <button\r\n                              *ngIf="\r\n                                scheduleMaintenanceFormService.workPackageRemoveFromButtonVisible(\r\n                                  maintenancePlanTableSelectedList\r\n                                )\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="removeFromWorkPackage()"\r\n                            >\r\n                              {{ getComponentName() + ".removeFromWP" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="\r\n                                scheduleMaintenanceFormService.workPackageAddToButtonVisible(\r\n                                  maintenancePlanTableSelectedList\r\n                                )\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              [ngClass]="{ active: workPackageListToAddVisible }"\r\n                              (click)="opWorkPackageToAdd.toggle($event)"\r\n                            >\r\n                              {{ getComponentName() + ".addToWP" | translate }} &nbsp;\r\n                              <i class="fa fa-fw fa-chevron-down" aria-hidden="true"></i>\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="\r\n                                scheduleMaintenanceFormService.workPackageCreateButtonVisible(\r\n                                  maintenancePlanTableSelectedList\r\n                                )\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="createWorkPackage()"\r\n                            >\r\n                              {{ getComponentName() + ".createWP" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="\r\n                                !maintenancePlanTableLoading &&\r\n                                maintenancePlanTableSelectedList.length === 1 &&\r\n                                isOmp(maintenancePlanTableSelectedList[0])\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="showTaskCounters()"\r\n                            >\r\n                              {{ getComponentName() + ".showTaskCounters" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="\r\n                                !maintenancePlanTableLoading &&\r\n                                maintenancePlanTableSelectedList.length === 1 &&\r\n                                isOmp(maintenancePlanTableSelectedList[0])\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="showLastTaskApplications()"\r\n                            >\r\n                              {{ getComponentName() + ".showLastTaskApplications" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="\r\n                                !maintenancePlanTableLoading &&\r\n                                maintenancePlanTableSelectedList.length === 0 &&\r\n                                workPackageList.length > 0\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              [ngClass]="{ active: workPackageListToShowVisible }"\r\n                              (click)="opWorkPackageToShow.toggle($event)"\r\n                            >\r\n                              {{ getComponentName() + ".showWP" | translate }} &nbsp;\r\n                              <i class="fa fa-fw fa-chevron-down" aria-hidden="true"></i>\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="!maintenancePlanTableLoading && maintenancePlanTableSelectedList.length === 0"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="exportDueList()"\r\n                            >\r\n                              {{ getComponentName() + ".export" | translate }}\r\n                            </button>\r\n                          </div>\r\n\r\n                          <div *ngIf="!maintenancePlanTableLoading" class="aw-table-icon-actions">\r\n                            <i\r\n                              class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{\r\n                                getComponentName() + (filtersVisible ? \'.hideFilters\' : \'.showFilters\') | translate\r\n                              }}"\r\n                              tooltipPosition="top"\r\n                              [ngClass]="{ active: filtersVisible }"\r\n                              (click)="opFilters.toggle($event)"\r\n                            ></i>\r\n\r\n                            <i\r\n                              class="fa fa-fw fa-calendar aw-icon aw-icon-with-border"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{ getComponentName() + \'.showCalendar\' | translate }}"\r\n                              tooltipPosition="top"\r\n                              (click)="showMaintenancePlanTableCalendar()"\r\n                            ></i>\r\n\r\n                            <i\r\n                              class="fa fa-fw fa-arrows-alt aw-icon aw-icon-with-border"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{ \'global.showTableFullScreen\' | translate }}"\r\n                              tooltipPosition="top"\r\n                              (click)="showMaintenancePlanTableFullScreen()"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div\r\n                          *ngIf="!maintenancePlanTableLoading && filterActivatedList.length > 0"\r\n                          class="active-filter-list"\r\n                        >\r\n                          <div class="aw-chips" *ngFor="let filter of filterActivatedList">\r\n                            <span *ngIf="filter.label" class="aw-chips-label">{{ filter.label }}</span>\r\n                            <span class="aw-chips-value">{{ filter.value }}</span>\r\n                            <i class="fa fa-fw fa-times aw-chips-icon" aria-hidden="true" (click)="filter.action()"></i>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper">\r\n                            <p-treeTableHeaderCheckbox class="aw-table-checkbox"></p-treeTableHeaderCheckbox>\r\n                          </th>\r\n\r\n                          <th\r\n                            *ngFor="let col of columns"\r\n                            [ttSortableColumn]="col.field"\r\n                            [ttSortableColumnDisabled]="\r\n                              col.field !== \'remainingEquivalent\' && col.field !== \'remainingTime\'\r\n                            "\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                            ttResizableColumn\r\n                          >\r\n                            {{ getComponentName() + "." + col.field | translate }}\r\n                            <p-treeTableSortIcon\r\n                              *ngIf="col.field === \'remainingEquivalent\' && col.field === \'remainingTime\'"\r\n                              [field]="col.field"\r\n                            ></p-treeTableSortIcon>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">\r\n                        <tr>\r\n                          <td class="aw-table-checkbox-wrapper">\r\n                            <p-treeTableCheckbox class="aw-table-checkbox" [value]="rowNode"></p-treeTableCheckbox>\r\n                          </td>\r\n\r\n                          <td\r\n                            *ngFor="let col of columns; let i = index"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <p-treeTableToggler [rowNode]="rowNode" *ngIf="i == 1"></p-treeTableToggler>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'alert\'"\r\n                              pTooltip="{{ rowData[\'alertTooltip\'] }}"\r\n                              tooltipPosition="top"\r\n                            >\r\n                              <span\r\n                                *ngIf="\r\n                                  rowData[col.field] !== undefined &&\r\n                                  rowData[col.field] !== null &&\r\n                                  rowData[col.field] === controlConfigConstants.ICON_GREEN\r\n                                "\r\n                                class="alert alert--ok"\r\n                              >\r\n                                {{ getComponentName() + ".alertOk" | translate }}\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngIf="\r\n                                  rowData[col.field] !== undefined &&\r\n                                  rowData[col.field] !== null &&\r\n                                  rowData[col.field] === controlConfigConstants.ICON_RED\r\n                                "\r\n                                class="alert alert--nok"\r\n                              >\r\n                                {{ getComponentName() + ".alertNok" | translate }}\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngIf="\r\n                                  rowData[col.field] !== undefined &&\r\n                                  rowData[col.field] !== null &&\r\n                                  rowData[col.field] === controlConfigConstants.ICON_YELLOW\r\n                                "\r\n                                class="alert alert--warning"\r\n                              >\r\n                                {{ getComponentName() + ".alertWarning" | translate }}\r\n                              </span>\r\n                            </span>\r\n\r\n                            <div *ngSwitchCase="\'firstColumn\'" style="display: inline-block; max-width: 0;">\r\n                              <a\r\n                                pTooltip="{{ rowData[\'firstColumnTooltip\'] }}"\r\n                                tooltipPosition="top"\r\n                                (click)="openMaintenancePlanRow(rowData)"\r\n                                >{{ rowData[col.field] }}</a\r\n                              >\r\n                              <i\r\n                                *ngIf="\r\n                                  rowData[\'counterAlert\'] !== undefined &&\r\n                                  rowData[\'counterAlert\'] !== null &&\r\n                                  rowData[\'counterAlert\'].length > 0 &&\r\n                                  (rowData[\'counterAlert\'] === controlConfigConstants.ICON_RED ||\r\n                                    rowData[\'counterAlert\'] === controlConfigConstants.ICON_YELLOW)\r\n                                "\r\n                                class="fa fa-fw fa-exclamation-triangle"\r\n                                aria-hidden="true"\r\n                                pTooltip="{{ rowData[\'counterAlertTooltip\'] }}"\r\n                                tooltipPosition="top"\r\n                              ></i>\r\n                              <div>{{ rowData["description"] }}</div>\r\n                            </div>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'nextTerm\'"\r\n                              pTooltip="{{ rowData[\'usageCounterExplanation\'] }}"\r\n                              tooltipPosition="top"\r\n                            >\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'nextWorkPackage\'">\r\n                              <a pTooltip="{{ rowData[\'nextWorkPackageTooltip\'] }}" (click)="openWorkPackage(rowData)">\r\n                                {{ rowData[col.field] }}\r\n                              </a>\r\n\r\n                              <button\r\n                                *ngIf="rowData[\'_displayBtnADDWP\']"\r\n                                type="button"\r\n                                mat-raised-button\r\n                                [ngClass]="{ active: rowData[\'_isActiveWorkPackageBtn\'] }"\r\n                                (click)="\r\n                                  storeRowToAssociateToWPWithWOCreation(rowNode.node);\r\n                                  opWorkPackageToAddAndDisplayWOCreation.toggle($event)\r\n                                "\r\n                              >\r\n                                {{ getComponentName() + ".addToWP" | translate }} &nbsp;\r\n                                <i class="fa fa-fw fa-chevron-down" aria-hidden="true"></i>\r\n                              </button>\r\n                            </span>\r\n\r\n                            <ng-container\r\n                              *ngSwitchCase="\'remainingEquivalent\'"\r\n                              pTooltip="{{ rowData[\'remainingEquivalentTooltip\'] }}"\r\n                              tooltipPosition="top"\r\n                            >\r\n                              <div style="font-weight: bold">{{ rowData[col.field] }}</div>\r\n                            </ng-container>\r\n\r\n                            <ng-container\r\n                              *ngSwitchCase="\'remainingTime\'"\r\n                              pTooltip="{{ rowData[\'remainingTime\'] }}"\r\n                              tooltipPosition="top"\r\n                            >\r\n                              <div style="font-weight: bold">{{ rowData["remaining"] }}</div>\r\n                            </ng-container>\r\n\r\n                            <ng-container *ngSwitchCase="\'type\'">\r\n                              <div>{{ rowData[col.field] }}</div>\r\n                              <div\r\n                                style="font-style: italic; overflow: hidden; text-overflow: ellipsis; white-space: nowrap"\r\n                              >\r\n                                {{ rowData["status"] }}\r\n                              </div>\r\n                            </ng-container>\r\n\r\n                            <ng-container *ngSwitchCase="\'postponement\'">\r\n                              <a (click)="openEventUC(rowData[\'postponement\'])">{{ rowData["postponement"] }}</a>\r\n                            </ng-container>\r\n\r\n                            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-treeTable>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-interdependence-data\r\n    *ngIf="interdependenceDataVisible"\r\n    [(display)]="interdependenceDataVisible"\r\n    [interdependenceDataList]="interdependenceDataList"\r\n    (onAccept)="onAcceptInterdependenceData()"\r\n    (onReject)="onRejectInterdependenceData()"\r\n  ></aw-dialog-interdependence-data>\r\n\r\n  <aw-dialog-last-task-applications\r\n    *ngIf="lastTaskApplicationsVisible"\r\n    [(display)]="lastTaskApplicationsVisible"\r\n    [selectedRow]="maintenancePlanTableSelectedList[0].data"\r\n    [topEquipmentCode]="topEquipmentCode"\r\n    (onClose)="onCloseLastTaskApplications($event)"\r\n  ></aw-dialog-last-task-applications>\r\n\r\n  <aw-dialog-schedule-maintenance-calendar\r\n    *ngIf="maintenancePlanTableCalendarVisible"\r\n    [(display)]="maintenancePlanTableCalendarVisible"\r\n    [(workPackageList)]="workPackageList"\r\n    [topEquipmentCode]="topEquipmentCode"\r\n    (onCreateWorkPackge)="onCreateWorkPackage($event)"\r\n  >\r\n  </aw-dialog-schedule-maintenance-calendar>\r\n\r\n  <aw-dialog-schedule-maintenance-table-full-screen\r\n    *ngIf="maintenancePlanTableFullScreenVisible"\r\n    [(display)]="maintenancePlanTableFullScreenVisible"\r\n    [(filterActivatedList)]="filterActivatedList"\r\n    [(filtersVisible)]="filtersVisible"\r\n    [(maintenancePlanTableSelectedList)]="maintenancePlanTableSelectedList"\r\n    [(potentialUnitSelected)]="potentialUnitSelected"\r\n    [(searchCriteria)]="searchCriteria"\r\n    [(searchGlobalFilter)]="searchGlobalFilter"\r\n    [maintenancePlanTableDisplayedLeafNb]="maintenancePlanTableDisplayedLeafNb"\r\n    [maintenancePlanTableLeafNb]="maintenancePlanTableLeafNb"\r\n    [maintenancePlanTableLoading]="maintenancePlanTableLoading"\r\n    [potentialUnitList]="potentialUnitList"\r\n    [searchAssetList]="searchAssetList"\r\n    [searchControlList]="searchControlList"\r\n    [searchCounterList]="searchCounterList"\r\n    [searchGlobalFilterChanged]="searchGlobalFilterChanged"\r\n    [searchTaskGroupList]="searchTaskGroupList"\r\n    [searchTaskList]="searchTaskList"\r\n    [searchTypeList]="searchTypeList"\r\n    [searchWorkPackageList]="searchWorkPackageList"\r\n    [table]="maintenancePlanTableDisplayed"\r\n    [workPackageList]="workPackageList"\r\n    [workPackageStatusList]="workPackageStatusList"\r\n    (onAddToWorkPackage)="addToWorkPackage($event)"\r\n    (onCreateWorkPackage)="createWorkPackage()"\r\n    (onFilter)="filterWithCriteria()"\r\n    (onOpenWorkPackage)="openWorkPackage($event)"\r\n    (onRemoveFromWorkPackage)="removeFromWorkPackage()"\r\n    (onResetFilters)="resetTableFilters()"\r\n  >\r\n  </aw-dialog-schedule-maintenance-table-full-screen>\r\n\r\n  <aw-dialog-task-counters\r\n    *ngIf="taskCountersVisible"\r\n    [(display)]="taskCountersVisible"\r\n    [selectedRow]="maintenancePlanTableSelectedList[0].data"\r\n    [topEquipmentCode]="topEquipmentCode"\r\n    (onClose)="onCloseTaskCounters($event)"\r\n  ></aw-dialog-task-counters>\r\n\r\n  <aw-dialog-work-package\r\n    *ngIf="workPackageCreationVisible"\r\n    [(display)]="workPackageCreationVisible"\r\n    [displayStatus]="false"\r\n    [displayWorkCenter]="true"\r\n    [warningMessageList]="interdependenceDataList"\r\n    (onValidated)="onCreateWorkPackage($event)"\r\n  ></aw-dialog-work-package>\r\n\r\n  <p-overlayPanel #opFilters class="aw-overlay" (onShow)="filtersVisible = true" (onHide)="filtersVisible = false">\r\n    <aw-maintenance-table-filters\r\n      [searchAssetList]="searchAssetList"\r\n      [searchControlList]="searchControlList"\r\n      [searchCounterList]="searchCounterList"\r\n      [searchTaskGroupList]="searchTaskGroupList"\r\n      [searchTaskList]="searchTaskList"\r\n      [searchTypeList]="searchTypeList"\r\n      [searchWorkPackageList]="searchWorkPackageList"\r\n      [searchCriteria]="searchCriteria"\r\n      (onFilter)="opFilters.hide(); filtersVisible = false; filterWithCriteria()"\r\n      (onReset)="resetTableFilters()"\r\n    >\r\n    </aw-maintenance-table-filters>\r\n  </p-overlayPanel>\r\n\r\n  <p-overlayPanel\r\n    #opWorkPackageToAdd\r\n    (onShow)="workPackageListToAddVisible = true"\r\n    (onHide)="workPackageListToAddVisible = false"\r\n  >\r\n    <aw-work-package-list\r\n      [addToVisible]="true"\r\n      [workPackageList]="workPackageList"\r\n      [workPackageStatusList]="workPackageStatusList"\r\n      (onAddTo)="opWorkPackageToAdd.hide(); workPackageListToAddVisible = false; addToWorkPackage($event)"\r\n    >\r\n    </aw-work-package-list>\r\n  </p-overlayPanel>\r\n\r\n  <p-overlayPanel #opWorkPackageToAddAndDisplayWOCreation>\r\n    <aw-work-package-list\r\n      [addToVisible]="true"\r\n      [workPackageList]="workPackageList"\r\n      [workPackageStatusList]="workPackageStatusList"\r\n      (onAddTo)="opWorkPackageToAddAndDisplayWOCreation.hide(); addToWorkPackageAndDisplayWorkOrder($event)"\r\n    >\r\n    </aw-work-package-list>\r\n  </p-overlayPanel>\r\n\r\n  <p-overlayPanel\r\n    #opWorkPackageToShow\r\n    (onShow)="workPackageListToShowVisible = true"\r\n    (onHide)="workPackageListToShowVisible = false"\r\n  >\r\n    <aw-work-package-list\r\n      [removeVisible]="true"\r\n      [workPackageList]="workPackageList"\r\n      [workPackageStatusList]="workPackageStatusList"\r\n      (onRemove)="opWorkPackageToShow.hide(); workPackageListToShowVisible = false; removeWorkPackage($event)"\r\n    >\r\n    </aw-work-package-list>\r\n  </p-overlayPanel>\r\n\r\n  <aw-dialog-work-order-edition\r\n    *ngIf="displayWorkOrderEdit"\r\n    [(display)]="displayWorkOrderEdit"\r\n    [workPackage]="workPackage"\r\n    [workOrders]="workOrderList"\r\n    [isFromMaintenancePlanning]="true"\r\n    (onValidated)="onAddWorkOrder($event)"\r\n  >\r\n  </aw-dialog-work-order-edition>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.component.scss':
      /*!********************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.component.scss ***!
  \********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .filter-list {\n  border: 1px solid #01579b;\n  border-radius: 4px; }\n\n:host .table-summary-wrapper {\n  margin: calc(8px * 2) auto 0 auto;\n  width: 30rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9zY2hlZHVsZS1tYWludGVuYW5jZS1mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxcYWlyd29ydGhpbmVzcy1jb250cm9sXFxmb3JtXFxzY2hlZHVsZS1tYWludGVuYW5jZS1mb3JtXFxzY2hlZHVsZS1tYWludGVuYW5jZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2FpcndvcnRoaW5lc3MtY29udHJvbC9mb3JtL3NjaGVkdWxlLW1haW50ZW5hbmNlLWZvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVJLHlCQ0RrQjtFREVsQixrQkMrQmUsRUFBQTs7QURsQ25CO0VBT0ksaUNBQWlDO0VBQ2pDLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvYWlyd29ydGhpbmVzcy1jb250cm9sL2Zvcm0vc2NoZWR1bGUtbWFpbnRlbmFuY2UtZm9ybS9zY2hlZHVsZS1tYWludGVuYW5jZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLmZpbHRlci1saXN0IHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRhY2NlbnQtY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICB9XHJcblxyXG4gIC50YWJsZS1zdW1tYXJ5LXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiBjYWxjKDhweCAqIDIpIGF1dG8gMCBhdXRvO1xyXG4gICAgd2lkdGg6IDMwcmVtO1xyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.component.ts':
      /*!******************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.component.ts ***!
  \******************************************************************************************************************************/
      /*! exports provided: ScheduleMaintenanceFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ScheduleMaintenanceFormComponent',
          function() {
            return ScheduleMaintenanceFormComponent;
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
        /* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/components/component-sidebar/page-toc.service */ './src/app/shared/components/component-sidebar/page-toc.service.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/constants/bire-unit-measure-constants */ './src/app/shared/constants/bire-unit-measure-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_comparator_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../../../shared/utils/comparator-utils */ './src/app/shared/utils/comparator-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _work_orders_form_work_orders_form_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../../work-orders/form/work-orders-form.service */ './src/app/main/maintenance/work-orders/form/work-orders-form.service.ts'
        );
        /* harmony import */ var _work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../../../work-package/form/work-package-form.service */ './src/app/main/maintenance/work-package/form/work-package-form.service.ts'
        );
        /* harmony import */ var _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./constants/maintenance-plan-table-type-constants */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/constants/maintenance-plan-table-type-constants.ts'
        );
        /* harmony import */ var _enums_maintenance_plan_table_task_criteria_interface__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./enums/maintenance-plan-table-task-criteria.interface */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/enums/maintenance-plan-table-task-criteria.interface.ts'
        );
        /* harmony import */ var _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./enums/maintenance-plan-table-type-criteria.interface */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/enums/maintenance-plan-table-type-criteria.interface.ts'
        );
        /* harmony import */ var _schedule_maintenance_form_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./schedule-maintenance-form.service */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.service.ts'
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
        var __values =
          (undefined && undefined.__values) ||
          function(o) {
            var m = typeof Symbol === 'function' && o[Symbol.iterator],
              i = 0;
            if (m) return m.call(o);
            return {
              next: function() {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          };

        var ScheduleMaintenanceFormComponent = /** @class */ (function(_super) {
          __extends(ScheduleMaintenanceFormComponent, _super);
          // ****************************************************************************
          function ScheduleMaintenanceFormComponent(
            favoriteService,
            loaderService,
            messageService,
            pageTocService,
            serializationService,
            tabService,
            scheduleMaintenanceFormService,
            sessionService,
            confirmationService,
            dateService,
            exportService,
            propertiesService,
            translateService,
            workOrdersFormService,
            wpFormService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                pageTocService
              ) || this;
            _this.scheduleMaintenanceFormService = scheduleMaintenanceFormService;
            _this.sessionService = sessionService;
            _this.confirmationService = confirmationService;
            _this.dateService = dateService;
            _this.exportService = exportService;
            _this.propertiesService = propertiesService;
            _this.translateService = translateService;
            _this.workOrdersFormService = workOrdersFormService;
            _this.wpFormService = wpFormService;
            _this.displayWorkOrderEdit = false;
            _this.component = ScheduleMaintenanceFormComponent_1;
            _this.controlConfigConstants =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants'];
            _this.init();
            _this.loadCsnLabel();
            _this.loadTsnLabel();
            _this.setGlobalFilter();
            _this.setMaintenanceTableColList();
            _this.setNavigationLinkList();
            _this.setPotentialUnitList();
            _this.setSearchControlList();
            _this.setSearchTaskList();
            _this.setSearchTypeList();
            _this.setSummaryTableColList();
            return _this;
          }
          ScheduleMaintenanceFormComponent_1 = ScheduleMaintenanceFormComponent;
          ScheduleMaintenanceFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
              .MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM;
          };
          ScheduleMaintenanceFormComponent.prototype.ngOnDestroy = function() {
            this.scheduleMaintenanceFormService.clearScheduleMaintenanceCache(this.topEquipmentCode).subscribe();
          };
          ScheduleMaintenanceFormComponent.prototype.ngOnInit = function() {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            this.remaining = '';
            this.updateOpenMode(this.componentData.openMode);
            if (!this.componentData.objectId) {
              this.messageService.showErrorMessage('global.errorOnNavigate');
            } else {
              this.scope = this.serializationService.deserialize(this.componentData.objectId);
              this.topEquipmentCode = this.scope.equipmentCode;
              this.loadWorkPackageStatusList().subscribe(function(workPackageStatusList) {
                _this.workPackageStatusList = workPackageStatusList;
                _this.load();
                _this.loadAsset();
              });
              this.setDefaultSearchControlList();
              this.setDefaultSearchTaskList();
              this.setDefaultSearchTypeList();
            }
          };
          Object.defineProperty(ScheduleMaintenanceFormComponent.prototype, 'isAssetAircraft', {
            get: function() {
              return (
                !!this.asset &&
                !!this.asset.equipmentFunction &&
                this.asset.equipmentFunction ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                    .ITEM_FAMILY_CODE_AIRCRAFT_KEY
              );
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(ScheduleMaintenanceFormComponent.prototype, 'isAssetEngine', {
            get: function() {
              return (
                !!this.asset &&
                !!this.asset.equipmentFunction &&
                this.asset.equipmentFunction ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                    .ITEM_FAMILY_CODE_ENGINE_KEY
              );
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(ScheduleMaintenanceFormComponent.prototype, 'isAssetEquipment', {
            get: function() {
              return !!this.asset && !this.isAssetAircraft && !this.isAssetEngine;
            },
            enumerable: true,
            configurable: true
          });
          ScheduleMaintenanceFormComponent.prototype.addToWorkPackage = function(workPackage) {
            var _this = this;
            this.workPackageToAdd = workPackage;
            var controlBaseMaintenanceSelectionParams = {
              topEquipmentCode: this.topEquipmentCode,
              selectedElementIdList: this.maintenancePlanTableSelectedList.map(function(elt) {
                return elt.data._id;
              })
            };
            this.scheduleMaintenanceFormService
              .controlBaseMaintenanceSelection(controlBaseMaintenanceSelectionParams)
              .subscribe(function(result) {
                if (result) {
                  _this.scheduleMaintenanceFormService
                    .controlEvolutionsInterdependenceForScheduleMaintenance(_this.topEquipmentCode)
                    .subscribe(function(interdependenceDataList) {
                      if (
                        _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils'].isNullOrEmpty(
                          interdependenceDataList
                        )
                      ) {
                        _this.onAcceptInterdependenceData();
                      } else {
                        _this.interdependenceDataList = interdependenceDataList.map(function(interdependenceData) {
                          return interdependenceData.issueMessage;
                        });
                        _this.interdependenceDataVisible = true;
                      }
                    });
                }
              });
          };
          ScheduleMaintenanceFormComponent.prototype.addToWorkPackageAndDisplayWorkOrder = function(workPackage) {
            var _this = this;
            this.workPackageToAdd = workPackage;
            this.scheduleMaintenanceFormService
              .controlEvolutionsInterdependenceForScheduleMaintenance(this.topEquipmentCode)
              .subscribe(function(interdependenceDataList) {
                if (
                  _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils'].isNullOrEmpty(
                    interdependenceDataList
                  )
                ) {
                  _this.onAcceptInterdependenceDataAndDisplayWOCreation();
                } else {
                  _this.interdependenceDataList = interdependenceDataList.map(function(interdependenceData) {
                    return interdependenceData.issueMessage;
                  });
                  _this.interdependenceDataVisible = true;
                }
              });
          };
          ScheduleMaintenanceFormComponent.prototype.createWorkPackage = function() {
            var _this = this;
            this.scheduleMaintenanceFormService
              .controlEvolutionsInterdependenceForScheduleMaintenance(this.topEquipmentCode)
              .subscribe(function(interdependenceDataList) {
                _this.interdependenceDataList = interdependenceDataList.map(function(interdependenceData) {
                  return interdependenceData.issueMessage;
                });
                _this.workPackageCreationVisible = true;
              });
          };
          ScheduleMaintenanceFormComponent.prototype.exportDueList = function() {
            var _this = this;
            var input = {
              topEquipmentCode: this.topEquipmentCode,
              rootNodeIdList: this.maintenancePlanTableDisplayed.map(function(rootNode) {
                return rootNode.data._id;
              }),
              nodeIdList: this.getNodeList()
            };
            this.scheduleMaintenanceFormService.exportDueList(input).subscribe(function(result) {
              var adTypeKey = _this.getTranslateKeyForEventType(
                _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                  'MaintenancePlanTableTypeConstants'
                ].AD
              );
              var aircraftTypeKey = _this.getTranslateKeyForEventType(
                _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                  'MaintenancePlanTableTypeConstants'
                ].AIRCRAFT
              );
              var defectTypeKey = _this.getTranslateKeyForEventType(
                _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                  'MaintenancePlanTableTypeConstants'
                ].DEFECT
              );
              var engineTypeKey = _this.getTranslateKeyForEventType(
                _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                  'MaintenancePlanTableTypeConstants'
                ].ENGINE
              );
              var equipmentTypeKey = _this.getTranslateKeyForEventType(
                _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                  'MaintenancePlanTableTypeConstants'
                ].EQUIPMENT
              );
              var groupCodeTypeKey = _this.getTranslateKeyForEventType(
                _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                  'MaintenancePlanTableTypeConstants'
                ].GROUP_CODE
              );
              var llpTypeKey = _this.getTranslateKeyForEventType(
                _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                  'MaintenancePlanTableTypeConstants'
                ].LLP
              );
              var sbTypeKey = _this.getTranslateKeyForEventType(
                _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                  'MaintenancePlanTableTypeConstants'
                ].SB
              );
              var taskTypeKey = _this.getTranslateKeyForEventType(
                _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                  'MaintenancePlanTableTypeConstants'
                ].TASK
              );
              var visitTypeKey = _this.getTranslateKeyForEventType(
                _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                  'MaintenancePlanTableTypeConstants'
                ].VISIT
              );
              var fileNamePrefixKey = _super.prototype.getTranslateKey.call(
                _this,
                'fileNamePrefix',
                ScheduleMaintenanceFormComponent_1.EXPORT_TRANSLATE_KEY
              );
              var amgTypeKey = _this.getTranslateKeyForEventType(
                _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                  'MaintenancePlanTableTypeConstants'
                ].AMG
              );
              _this.translateService
                .get([
                  adTypeKey,
                  aircraftTypeKey,
                  defectTypeKey,
                  engineTypeKey,
                  equipmentTypeKey,
                  groupCodeTypeKey,
                  llpTypeKey,
                  sbTypeKey,
                  taskTypeKey,
                  visitTypeKey,
                  fileNamePrefixKey,
                  amgTypeKey
                ])
                .subscribe(function(results) {
                  if (results) {
                    var listToExport = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils']
                      .orEmpty(result)
                      .map(function(element) {
                        var elementWithFormattedType = __assign({}, element);
                        elementWithFormattedType.upcomingEventType =
                          results[_this.getTranslateKeyForEventType(element.upcomingEventType)];
                        return elementWithFormattedType;
                      });
                    var familyVariantCode = _this.asset.familyVariantCode || '';
                    var pn = _this.asset.pnCode || '';
                    var registration = _this.asset.registration || '';
                    var sn = _this.asset.sn || '';
                    var fileNameToExport =
                      results[fileNamePrefixKey] +
                      (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isEmpty(
                        familyVariantCode
                      )
                        ? ''
                        : '__' + familyVariantCode) +
                      (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isEmpty(registration)
                        ? ''
                        : '__' + registration) +
                      (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isEmpty(pn)
                        ? ''
                        : '__' + pn) +
                      (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isEmpty(sn)
                        ? ''
                        : '__' + sn) +
                      '__' +
                      _this.dateService.dateWithHourToString(new Date());
                    var exportOpts = {
                      header: [
                        'assetText',
                        'pn',
                        'sn',
                        'item',
                        'functionCode',
                        'upcomingEventType',
                        'taskType',
                        'upcomingEventText',
                        'upcomingEventDescription',
                        'confText',
                        'eventId',
                        'eventVersion',
                        'visitCode',
                        'visitVersion',
                        'visitDesignation',
                        'counterCode',
                        'remaining',
                        'remainingUnit',
                        'remainingEquivalent',
                        'remainingEquivalentUnit',
                        'alertText',
                        'nextTerm',
                        'nextTermUnit',
                        'periodicity',
                        'periodicityUnit',
                        'periodicityType',
                        'status',
                        'statusInfo',
                        'postponementNotificationText',
                        'nextWorkPackageText'
                      ]
                    };
                    _this.exportService.toExcel(
                      listToExport,
                      fileNameToExport,
                      ScheduleMaintenanceFormComponent_1.EXPORT_TRANSLATE_KEY,
                      exportOpts
                    );
                  }
                });
            });
          };
          ScheduleMaintenanceFormComponent.prototype.filter = function(searchTextValue) {
            this.searchGlobalFilterChanged.next(searchTextValue);
          };
          ScheduleMaintenanceFormComponent.prototype.filterWithCriteria = function() {
            this.load();
          };
          ScheduleMaintenanceFormComponent.prototype.isOmp = function(row) {
            return (
              row.data._obj.type ===
              _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].TASK
            );
          };
          ScheduleMaintenanceFormComponent.prototype.onAcceptInterdependenceData = function() {
            var _this = this;
            this.interdependenceDataVisible = false;
            if (!!this.workPackageToAdd) {
              var params = {
                topEquipmentCode: this.topEquipmentCode,
                bidmProject: this.workPackageToAdd,
                selectedElementIdList: this.maintenancePlanTableSelectedList.map(function(elt) {
                  return elt.data._id;
                })
              };
              this.scheduleMaintenanceFormService.addToWorkPackage(params).subscribe(function(result) {
                if (result) {
                  _this.maintenancePlanTableSelectedList.forEach(function(row) {
                    _this.setMaintenancePlanRowNextWorkPackageAndDisplayBtnADDWP(_this.workPackageToAdd, row.data);
                  });
                  var selectedElementNb = _this.maintenancePlanTableSelectedList.length;
                  var message = selectedElementNb === 1 ? 'successOnAddElementToWP' : 'successOnAddElementsToWP';
                  _this.messageService.showSuccessMessage(_this.getTranslateKey(message));
                  _this.maintenancePlanTableSelectedList = [];
                  _this.workPackageToAdd = undefined;
                }
              });
            }
          };
          ScheduleMaintenanceFormComponent.prototype.onAcceptInterdependenceDataAndDisplayWOCreation = function() {
            var _this = this;
            this.interdependenceDataVisible = false;
            if (!!this.workPackageToAdd) {
              var params = {
                topEquipmentCode: this.topEquipmentCode,
                bidmProject: this.workPackageToAdd,
                selectedElementIdList: [this.idRowToAssicateToWPWithWOCreation]
              };
              this.scheduleMaintenanceFormService.addToWorkPackage(params).subscribe(function(result) {
                if (result) {
                  _this.setMaintenancePlanRowNextWorkPackageAndDisplayBtnADDWP(
                    _this.workPackageToAdd,
                    _this.findRowByid(_this.idRowToAssicateToWPWithWOCreation).data
                  );
                  var selectedElementNb = 1;
                  var message = selectedElementNb === 1 ? 'successOnAddElementToWP' : 'successOnAddElementsToWP';
                  _this.messageService.showSuccessMessage(_this.getTranslateKey(message));
                  _this.maintenancePlanTableSelectedList = [];
                  _this.workPackageToAdd = undefined;
                  _this.displayWorkOrderScreenEdit();
                }
              });
            }
          };
          ScheduleMaintenanceFormComponent.prototype.onCloseLastTaskApplications = function(updated) {
            if (updated) {
              this.load();
            }
          };
          ScheduleMaintenanceFormComponent.prototype.onCloseTaskCounters = function(updated) {
            if (updated) {
              this.load();
            }
          };
          ScheduleMaintenanceFormComponent.prototype.onCreateWorkPackage = function(data) {
            var _this = this;
            var params = {
              topEquipmentCode: this.topEquipmentCode,
              bidmProject: data.workPackage,
              selectedElementIdList: this.maintenancePlanTableSelectedList.map(function(elt) {
                return elt.data._id;
              }),
              workCenter: data.workcenter
            };
            this.scheduleMaintenanceFormService.createWorkPackage(params).subscribe(function(newWorkPackage) {
              _this.workPackageList = __spread(_this.workPackageList, [newWorkPackage]);
              _this.setSearchWorkPackageList();
              _this.maintenancePlanTableSelectedList.forEach(function(row) {
                _this.setMaintenancePlanRowNextWorkPackageAndDisplayBtnADDWP(newWorkPackage, row.data);
              });
              _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCreateWP'));
              _this.maintenancePlanTableSelectedList = [];
            });
          };
          ScheduleMaintenanceFormComponent.prototype.onRejectInterdependenceData = function() {
            this.interdependenceDataVisible = false;
          };
          ScheduleMaintenanceFormComponent.prototype.openAsset = function() {
            if (this.isAssetAircraft) {
              this.openAircraft(this.topEquipmentCode);
            } else if (this.isAssetEngine) {
              this.openEngine(this.topEquipmentCode);
            } else if (this.isAssetEquipment) {
              this.openEquipment(this.topEquipmentCode);
            }
          };
          ScheduleMaintenanceFormComponent.prototype.openMaintenancePlanRow = function(row) {
            switch (row._obj.type) {
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].AD:
                if (row._obj.sbNumber && row._obj.sbRevisionNumber) {
                  this.openAirworthinessDirective(row._obj.sbNumber, row._obj.sbRevisionNumber);
                }
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].AIRCRAFT:
                if (row._obj.equipmentCode) {
                  this.openAircraft(row._obj.equipmentCode);
                }
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].DEFECT:
                if (row._obj.notificationCode) {
                  this.openDefect(row._obj.notificationCode);
                }
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].ENGINE:
                if (row._obj.equipmentCode) {
                  this.openEngine(row._obj.equipmentCode);
                }
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].EQUIPMENT:
                if (row._obj.equipmentCode) {
                  this.openEquipment(row._obj.equipmentCode);
                }
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].GROUP_CODE:
                // TODO
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].LLP:
                if (row._obj.equipmentCode) {
                  this.openEquipment(row._obj.equipmentCode);
                }
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].SB:
                if (row._obj.sbNumber && row._obj.sbRevisionNumber) {
                  this.openServiceBulletin(row._obj.sbNumber, row._obj.sbRevisionNumber);
                }
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].TASK:
                if (row._obj.taskCode && row._obj.taskVersion) {
                  this.openTask(row._obj.taskCode, row._obj.taskVersion);
                }
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].VISIT:
                if (row._obj.taskCode && row._obj.taskVersion) {
                  this.openVisit(row._obj.taskCode, row._obj.taskVersion);
                }
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].AMG:
                if (row._obj.sbNumber && row._obj.sbRevisionNumber) {
                  this.openAdditionalMaintenanceGuideline(row._obj.sbNumber, row._obj.sbRevisionNumber);
                }
                break;
              default:
                break;
            }
          };
          ScheduleMaintenanceFormComponent.prototype.openWorkPackage = function(row) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .MAI_WORK_PACKAGE_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              objectId: this.serializationService.serialize({ wpId: row._obj.nextWorkPackage.projectId })
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ScheduleMaintenanceFormComponent.prototype.reload = function() {
            var _this = this;
            this.scheduleMaintenanceFormService
              .clearScheduleMaintenanceCache(this.topEquipmentCode)
              .subscribe(function() {
                _this.clearGlobalFilter();
                _this.resetTableFilters();
                _this.load();
              });
          };
          ScheduleMaintenanceFormComponent.prototype.removeFromWorkPackage = function() {
            var _this = this;
            var partialKey =
              this.maintenancePlanTableSelectedList.length === 1
                ? 'confirmRemoveElementFromWorkPackage'
                : 'confirmRemoveElementsFromWorkPackage';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialKey),
              accept: function() {
                _this.maintenancePlanTableSelectedList.forEach(function(elt) {
                  var params = {
                    topEquipmentCode: _this.topEquipmentCode,
                    selectedElementId: elt.data._id
                  };
                  _this.scheduleMaintenanceFormService.removeFromWorkPackage(params).subscribe(function() {
                    elt.data.nextWorkPackage = '';
                    elt.data.nextWorkPackageTooltip = '';
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnRemoveFromWP'));
                  });
                });
                _this.maintenancePlanTableSelectedList = [];
              }
            });
          };
          ScheduleMaintenanceFormComponent.prototype.removeWorkPackage = function(workPackage) {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey('confirmRemoveWorkPackage'),
              accept: function() {
                var input = {
                  projectId: workPackage.projectId
                };
                _this.scheduleMaintenanceFormService.removeWorkPackage(input).subscribe(function() {
                  _this.workPackageList = _this.workPackageList.filter(function(elt) {
                    return elt.projectId !== workPackage.projectId;
                  });
                  _this.updateMaintenancePlanTableAfterWorkPackageRemoval(_this.maintenancePlanTable, workPackage);
                  _this.updateMaintenancePlanTableDisplayed(_this.searchGlobalFilter);
                  _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnRemoveWP'));
                });
              }
            });
          };
          ScheduleMaintenanceFormComponent.prototype.resetTableFilters = function() {
            this.searchCriteria = {
              controlList: [],
              taskList: [],
              typeList: []
            };
            this.searchGlobalFilter = '';
            this.setDefaultSearchControlList();
            this.setDefaultSearchTaskList();
            this.setDefaultSearchTypeList();
          };
          ScheduleMaintenanceFormComponent.prototype.showLastTaskApplications = function() {
            this.lastTaskApplicationsVisible = true;
          };
          ScheduleMaintenanceFormComponent.prototype.showMaintenancePlanTableCalendar = function() {
            this.maintenancePlanTableCalendarVisible = true;
          };
          ScheduleMaintenanceFormComponent.prototype.showMaintenancePlanTableFullScreen = function() {
            this.maintenancePlanTableFullScreenVisible = true;
          };
          ScheduleMaintenanceFormComponent.prototype.showTaskCounters = function() {
            this.taskCountersVisible = true;
          };
          ScheduleMaintenanceFormComponent.prototype.getNodeList = function() {
            return this.maintenancePlanTableDisplayed
              .filter(function(rootNode) {
                return rootNode.children;
              })
              .map(function(rootNode) {
                return rootNode.children;
              })
              .reduce(function(acc, x) {
                return acc.concat(x);
              }, [])
              .map(function(node) {
                return node.data._id;
              });
          };
          ScheduleMaintenanceFormComponent.prototype.clearFilterAsset = function() {
            this.searchCriteria.asset = undefined;
            this.load();
          };
          ScheduleMaintenanceFormComponent.prototype.clearFilterControl = function(controlToRemove) {
            this.searchCriteria.controlList = this.searchCriteria.controlList.filter(function(control) {
              return control !== controlToRemove;
            });
            this.load();
          };
          ScheduleMaintenanceFormComponent.prototype.clearFilterCounterValue = function() {
            this.searchCriteria.counterValue = undefined;
            this.load();
          };
          ScheduleMaintenanceFormComponent.prototype.clearFilterCounterUnit = function() {
            this.searchCriteria.counterUnit = undefined;
            this.load();
          };
          ScheduleMaintenanceFormComponent.prototype.clearFilterCycles = function() {
            this.searchCriteria.cycles = undefined;
            this.load();
          };
          ScheduleMaintenanceFormComponent.prototype.clearFilterDate = function() {
            this.searchCriteria.date = undefined;
            this.load();
          };
          ScheduleMaintenanceFormComponent.prototype.clearFilterHours = function() {
            this.searchCriteria.hours = undefined;
            this.load();
          };
          ScheduleMaintenanceFormComponent.prototype.clearFilterTask = function(taskToRemove) {
            this.searchCriteria.taskList = this.searchCriteria.taskList.filter(function(task) {
              return task !== taskToRemove;
            });
            this.load();
          };
          ScheduleMaintenanceFormComponent.prototype.clearFilterTaskGroup = function() {
            this.searchCriteria.taskGroup = undefined;
            this.load();
          };
          ScheduleMaintenanceFormComponent.prototype.clearFilterType = function(typeToRemove) {
            this.searchCriteria.typeList = this.searchCriteria.typeList.filter(function(type) {
              return type !== typeToRemove;
            });
            this.load();
          };
          ScheduleMaintenanceFormComponent.prototype.clearFilterWorkPackage = function() {
            this.searchCriteria.workPackage = undefined;
            this.load();
          };
          ScheduleMaintenanceFormComponent.prototype.clearGlobalFilter = function() {
            this.searchGlobalFilter = '';
          };
          ScheduleMaintenanceFormComponent.prototype.clearTable = function() {
            this.maintenancePlanTable = [];
            this.maintenancePlanTableDisplayed = [];
            this.maintenancePlanTableSelectedList = [];
            this.initSummaryTable();
          };
          ScheduleMaintenanceFormComponent.prototype.createMaintenancePlanRow = function(element) {
            var remainingEquivalent = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__[
              'StringUtils'
            ].isNullOrEmpty(element.remainingEquivalent)
              ? element.remaining
              : element.remainingEquivalent;
            var remainingEquivalentTooltip = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__[
              'StringUtils'
            ].isNullOrEmpty(element.remainingEquivalent)
              ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                  element.remainingEquivalentTooltip
                )
              : [element.remainingEquivalentTooltip, element.remaining]
                  .filter(function(elt) {
                    return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isNullOrEmpty(elt);
                  })
                  .join('\n');
            var maintenancePlanRow = {
              remainingEquivalentTooltip: remainingEquivalentTooltip,
              firstColumn: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                element.firstColumn
              ),
              firstColumnTooltip: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                element.firstColumnTooltip
              ),
              alert: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(element.alertIcon),
              alertTooltip: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                element.alertTooltip
              ),
              asset: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(element.assetText),
              counterAlert: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                element.counterAlertIcon
              ),
              counterAlertTooltip: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                element.counterAlertTooltip
              ),
              description: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                element.description
              ),
              nextTerm: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                element.nextTerm
              ),
              nextWorkPackage: '',
              nextWorkPackageTooltip: '',
              period: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(element.period),
              postponement: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                element.postponementNotificationText
              ),
              remaining: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                element.remaining
              ),
              remainingEquivalent: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                remainingEquivalent
              ),
              remainingEquivalentIcon: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                element.remainingEquivalentIcon
              ),
              status: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(element.status),
              tolerance: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                element.tolerance
              ),
              type: '',
              usageCounterExplanation: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                element.usageCounterExplanation
              ),
              _id: element.id,
              _obj: element,
              _isActiveWorkPackageBtn: false
            };
            this.setMaintenancePlanRowType(element, maintenancePlanRow);
            this.setMaintenancePlanRowNextWorkPackageAndDisplayBtnADDWP(element.nextWorkPackage, maintenancePlanRow);
            return maintenancePlanRow;
          };
          ScheduleMaintenanceFormComponent.prototype.createMaintenancePlanTreeNode = function(baseElement) {
            var _this = this;
            var node = {
              data: this.createMaintenancePlanRow(baseElement),
              expanded: false,
              children: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils']
                .orEmpty(baseElement.children)
                .map(function(childElement) {
                  return _this.createMaintenancePlanTreeNode(childElement);
                })
                .sort(function(n1, n2) {
                  var alertN1 = n1.data.alert;
                  var alertN2 = n2.data.alert;
                  var typeN1 = n1.data.type;
                  var typeN2 = n2.data.type;
                  if (alertN1 === alertN2) {
                    return typeN1.localeCompare(typeN2);
                  } else if (
                    (alertN1 ===
                      _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                        .ICON_RED &&
                      alertN2 ===
                        _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__[
                          'ControlConfigConstants'
                        ].ICON_YELLOW) ||
                    (alertN1 ===
                      _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                        .ICON_RED &&
                      alertN2 ===
                        _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__[
                          'ControlConfigConstants'
                        ].ICON_GREEN) ||
                    (alertN1 ===
                      _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                        .ICON_YELLOW &&
                      alertN2 ===
                        _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__[
                          'ControlConfigConstants'
                        ].ICON_GREEN)
                  ) {
                    return -1;
                  } else {
                    return 1;
                  }
                })
            };
            return node;
          };
          ScheduleMaintenanceFormComponent.prototype.displayFilterActivatedList = function() {
            var _this = this;
            this.filterActivatedList = [];
            var filterControlActivatedList = this.searchCriteria.controlList
              .filter(function(control) {
                return _this.searchControlList.some(function(elt) {
                  return (
                    elt.value === control &&
                    !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isNullOrEmpty(elt.label)
                  );
                });
              })
              .map(function(control) {
                var selectedControl = _this.searchControlList.find(function(elt) {
                  return elt.value === control;
                });
                return {
                  action: _this.clearFilterControl.bind(_this, control),
                  value: selectedControl.label
                };
              });
            this.filterActivatedList = __spread(this.filterActivatedList, filterControlActivatedList);
            var filterTaskActivatedList = this.searchCriteria.taskList
              .filter(function(task) {
                return _this.searchTaskList.some(function(elt) {
                  return (
                    elt.value === task &&
                    !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isNullOrEmpty(elt.label)
                  );
                });
              })
              .map(function(task) {
                var selectedTask = _this.searchTaskList.find(function(elt) {
                  return elt.value === task;
                });
                return {
                  action: _this.clearFilterTask.bind(_this, task),
                  value: selectedTask.label
                };
              });
            this.filterActivatedList = __spread(this.filterActivatedList, filterTaskActivatedList);
            var filterTypeActivatedList = this.searchCriteria.typeList
              .filter(function(type) {
                return _this.searchTypeList.some(function(elt) {
                  return (
                    elt.value === type &&
                    !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isNullOrEmpty(elt.label)
                  );
                });
              })
              .map(function(type) {
                var selectedType = _this.searchTypeList.find(function(elt) {
                  return elt.value === type;
                });
                return {
                  action: _this.clearFilterType.bind(_this, type),
                  value: selectedType.label
                };
              });
            this.filterActivatedList = __spread(this.filterActivatedList, filterTypeActivatedList);
            if (this.searchCriteria.taskGroup) {
              var chips = {
                action: this.clearFilterTaskGroup.bind(this),
                value: this.searchCriteria.taskGroup
              };
              this.filterActivatedList = __spread(this.filterActivatedList, [chips]);
            }
            if (this.searchCriteria.asset) {
              var chips = {
                action: this.clearFilterAsset.bind(this),
                value: this.searchCriteria.asset
              };
              this.filterActivatedList = __spread(this.filterActivatedList, [chips]);
            }
            if (this.searchCriteria.workPackage) {
              var chips = {
                action: this.clearFilterWorkPackage.bind(this),
                value: this.searchCriteria.workPackage
              };
              this.filterActivatedList = __spread(this.filterActivatedList, [chips]);
            }
            if (this.searchCriteria.counterUnit) {
              var chips = {
                action: this.clearFilterCounterUnit.bind(this),
                value: this.searchCriteria.counterUnit
              };
              this.filterActivatedList = __spread(this.filterActivatedList, [chips]);
            }
            if (this.searchCriteria.hours) {
              var chips = {
                action: this.clearFilterHours.bind(this),
                value: this.searchCriteria.hours,
                label: this.translateService.instant(this.getTranslateKey('hours')) + ' <='
              };
              this.filterActivatedList = __spread(this.filterActivatedList, [chips]);
            }
            if (this.searchCriteria.cycles) {
              var chips = {
                action: this.clearFilterCycles.bind(this),
                value: this.searchCriteria.cycles,
                label: this.translateService.instant(this.getTranslateKey('cycles')) + ' <='
              };
              this.filterActivatedList = __spread(this.filterActivatedList, [chips]);
            }
            if (this.searchCriteria.date) {
              var chips = {
                action: this.clearFilterDate.bind(this),
                value: this.dateService.dateToString(this.searchCriteria.date),
                label: this.translateService.instant(this.getTranslateKey('date')) + ' <='
              };
              this.filterActivatedList = __spread(this.filterActivatedList, [chips]);
            }
            if (this.searchCriteria.counterValue && this.searchCriteria.counterUnit) {
              var chips = {
                action: this.clearFilterCounterValue.bind(this),
                label: this.searchCriteria.counterUnit + ' <=',
                value: this.searchCriteria.counterValue
              };
              this.filterActivatedList = __spread(this.filterActivatedList, [chips]);
            }
          };
          ScheduleMaintenanceFormComponent.prototype.getAllMaintenancePlanTableLeaf = function(table) {
            var result = [];
            var queue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(table);
            while (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils'].isEmpty(queue)) {
              var first = queue.shift();
              if (_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils'].isNullOrEmpty(first.children)) {
                result = __spread(result, [first.data]);
              } else {
                queue = __spread(queue, first.children);
              }
            }
            return result;
          };
          ScheduleMaintenanceFormComponent.prototype.getMaintenancePlanRowListByType = function(type) {
            return this.getAllMaintenancePlanTableLeaf(this.maintenancePlanTableDisplayed).filter(function(row) {
              return row._obj.type === type;
            });
          };
          ScheduleMaintenanceFormComponent.prototype.getTranslateKeyForEventType = function(typeCode) {
            var type;
            switch (typeCode) {
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].AD:
                type = 'AD';
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].AIRCRAFT:
                type = 'AIRCRAFT';
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].DEFECT:
                type = 'DEFECT';
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].ENGINE:
                type = 'ENGINE';
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].EQUIPMENT:
                type = 'EQUIPMENT';
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].GROUP_CODE:
                type = 'GROUP_CODE';
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].LLP:
                type = 'LLP';
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].SB:
                type = 'SB';
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].TASK:
                type = 'TASK';
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].VISIT:
                type = 'VISIT';
                break;
              case _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].AMG:
                type = 'AMG';
                break;
              default:
                type = '';
                break;
            }
            return this.getTranslateKey(type.replace(/_/g, '').toLowerCase());
          };
          ScheduleMaintenanceFormComponent.prototype.init = function() {
            this.componentContext = '';
            this.airworthinessStatus = '';
            this.asset = {};
            this.assetCsn = '';
            // this.assetEisDate = '';
            this.assetStatus = '';
            this.assetStructure = [];
            this.assetTsn = '';
            this.csnLabel = '';
            this.filterActivatedList = [];
            this.filtersVisible = false;
            this.interdependenceDataList = [];
            this.interdependenceDataVisible = false;
            this.lastTaskApplicationsVisible = false;
            this.maintenancePlanTableCalendarVisible = false;
            this.maintenancePlanTable = [];
            this.maintenancePlanTableDisplayed = [];
            this.maintenancePlanTableDisplayedLeafNb = 0;
            this.maintenancePlanTableFullScreenVisible = false;
            this.maintenancePlanTableLeafNb = 0;
            this.maintenancePlanTableSelectedList = [];
            this.potentialEquivalent = '';
            this.potentialUnitSelected =
              _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__[
                'BireUnitMeasureConstants'
              ].HOUR;
            this.searchAssetList = [];
            this.searchCounterList = [];
            this.searchGlobalFilter = '';
            this.searchTaskGroupList = [];
            this.searchWorkPackageList = [];
            this.taskCountersVisible = false;
            this.tsnLabel = '';
            this.workPackageCreationVisible = false;
            this.workPackageList = [];
            this.workPackageListToAddVisible = false;
            this.workPackageListToShowVisible = false;
            this.workPackageToAdd = undefined;
            this.clearTable();
            this.resetTableFilters();
          };
          ScheduleMaintenanceFormComponent.prototype.initSummaryTable = function() {
            this.summaryTableVisible = false;
            this.summaryTable = [
              {
                category: ScheduleMaintenanceFormComponent_1.SUMMARY_TABLE_GLOBAL_LABEL,
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: ScheduleMaintenanceFormComponent_1.SUMMARY_TABLE_OMP_LABEL,
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: ScheduleMaintenanceFormComponent_1.SUMMARY_TABLE_DEFECT_LABEL,
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: ScheduleMaintenanceFormComponent_1.SUMMARY_TABLE_AD_LABEL,
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: ScheduleMaintenanceFormComponent_1.SUMMARY_TABLE_SB_LABEL,
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: ScheduleMaintenanceFormComponent_1.SUMMARY_TABLE_LLP_LABEL,
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: ScheduleMaintenanceFormComponent_1.SUMMARY_TABLE_AMG_LABEL,
                nok: 0,
                ok: 0,
                warning: 0
              }
            ];
          };
          ScheduleMaintenanceFormComponent.prototype.load = function() {
            var _this = this;
            if (!!this.topEquipmentCode) {
              this.maintenancePlanTableLoading = true;
              this.clearTable();
              this.displayFilterActivatedList();
              this.summaryTableVisible = true;
              this.scheduleMaintenanceFormService
                .initializeScheduleMaintenance(this.topEquipmentCode)
                .subscribe(function(assetStructure) {
                  _this.assetStructure = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils'].orEmpty(
                    assetStructure
                  );
                  _this.loadSearchCounterList();
                  _this.loadSearchTaskGroupList();
                  // Maintenance plan structure
                  var onlyTaskOnCondition;
                  var showActiveTasksChecked;
                  var showInactiveTasksChecked;
                  if (!!_this.searchCriteria.taskList) {
                    onlyTaskOnCondition =
                      _this.searchCriteria.taskList.includes(
                        _enums_maintenance_plan_table_task_criteria_interface__WEBPACK_IMPORTED_MODULE_30__[
                          'MaintenancePlanTableTaskCriteria'
                        ].OnCondition
                      ) && _this.searchCriteria.taskList.length === 1;
                    showActiveTasksChecked = _this.searchCriteria.taskList.includes(
                      _enums_maintenance_plan_table_task_criteria_interface__WEBPACK_IMPORTED_MODULE_30__[
                        'MaintenancePlanTableTaskCriteria'
                      ].ActiveTasks
                    );
                    showInactiveTasksChecked = _this.searchCriteria.taskList.includes(
                      _enums_maintenance_plan_table_task_criteria_interface__WEBPACK_IMPORTED_MODULE_30__[
                        'MaintenancePlanTableTaskCriteria'
                      ].InactiveTasks
                    );
                  }
                  var params = {
                    onlyTaskOnCondition: onlyTaskOnCondition,
                    showActiveTasksChecked: showActiveTasksChecked,
                    showInactiveTasksChecked: showInactiveTasksChecked,
                    areDeletedTasksHidden: false,
                    counterCodeSelected: _this.searchCriteria.counterUnit,
                    filterActivated: true,
                    modeScheduleWPVisibility: true,
                    targetCounterValue: _this.searchCriteria.counterValue,
                    targetCycles: _this.searchCriteria.cycles,
                    targetDate: _this.searchCriteria.date,
                    targetHours: _this.searchCriteria.hours,
                    taskGroupCodeSelected: _this.searchCriteria.taskGroup,
                    topEquipmentCode: _this.topEquipmentCode,
                    unitCodeEquivalentSelected: _this.potentialUnitSelected
                  };
                  _this.scheduleMaintenanceFormService
                    .initializeMaintenancePlanStructure(params)
                    .subscribe(function(maintenancePlanStructure) {
                      _this.loadAssetCsn();
                      _this.loadAssetTsn();
                      if (
                        !!maintenancePlanStructure &&
                        !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils'].isEmpty(
                          maintenancePlanStructure
                        ) &&
                        !!maintenancePlanStructure[0].remainingEquivalentInOriginalUnit
                      ) {
                        _this.remaining = maintenancePlanStructure[0].remainingEquivalentInOriginalUnit;
                      }
                      _this.loadPotentialEquivalentValues();
                      _this.maintenancePlanTable = maintenancePlanStructure.map(function(element) {
                        return _this.createMaintenancePlanTreeNode(element);
                      });
                      _this.maintenancePlanTableLeafNb = _this.getAllMaintenancePlanTableLeaf(
                        _this.maintenancePlanTable
                      ).length;
                      _this.updateMaintenancePlanTableDisplayed();
                      _this.maintenancePlanTableLoading = false;
                      _this.setSearchAssetList();
                    });
                  // Work packages
                  _this.scheduleMaintenanceFormService
                    .workPackageList({ topEquipmentCode: _this.topEquipmentCode })
                    .subscribe(function(result) {
                      _this.workPackageList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__[
                        'ListUtils'
                      ].orEmpty(result);
                      _this.setSearchWorkPackageList();
                    });
                });
            }
          };
          ScheduleMaintenanceFormComponent.prototype.loadAsset = function() {
            var _this = this;
            var input = {
              equipmentCode: this.topEquipmentCode
            };
            this.scheduleMaintenanceFormService.getEquipment(input).subscribe(function(result) {
              _this.asset = result;
              if (!!_this.asset) {
                // this.setAssetEisDate();
                _this.setAssetStatus();
              }
              _this.setComponentContextForAsset();
            });
          };
          ScheduleMaintenanceFormComponent.prototype.loadAssetCsn = function() {
            var _this = this;
            this.scheduleMaintenanceFormService.getAssetCsn(this.topEquipmentCode).subscribe(function(result) {
              _this.assetCsn = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(result);
            });
          };
          ScheduleMaintenanceFormComponent.prototype.loadAssetTsn = function() {
            var _this = this;
            this.scheduleMaintenanceFormService.getAssetTsn(this.topEquipmentCode).subscribe(function(result) {
              _this.assetTsn = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(result);
            });
          };
          ScheduleMaintenanceFormComponent.prototype.loadCsnLabel = function() {
            var _this = this;
            this.scheduleMaintenanceFormService.getCsnLabelForAirworthinessControl().subscribe(function(result) {
              _this.csnLabel = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(result);
            });
          };
          ScheduleMaintenanceFormComponent.prototype.loadPotentialEquivalentValues = function() {
            var _this = this;
            this.scheduleMaintenanceFormService
              .getPotentialEquivalentValues(this.topEquipmentCode)
              .subscribe(function(result) {
                if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils'].isNullOrEmpty(result)) {
                  _this.potentialEquivalent =
                    Math.min.apply(Math, __spread(result)) +
                    ' ' +
                    _this.potentialUnitSelected +
                    ' / ' +
                    _this.remaining;
                }
              });
          };
          ScheduleMaintenanceFormComponent.prototype.loadSearchCounterList = function() {
            var _this = this;
            this.scheduleMaintenanceFormService
              .counterListFromMaintenancePlan(this.topEquipmentCode)
              .subscribe(function(result) {
                if (!!result) {
                  _this.searchCounterList = Object.entries(result).map(function(list) {
                    return {
                      label: list[1],
                      value: list[0]
                    };
                  });
                }
              });
          };
          ScheduleMaintenanceFormComponent.prototype.loadSearchTaskGroupList = function() {
            var _this = this;
            this.scheduleMaintenanceFormService
              .taskGroupListFromMaintenancePlan(this.topEquipmentCode)
              .subscribe(function(result) {
                if (!!result) {
                  _this.searchTaskGroupList = Object.entries(result).map(function(list) {
                    return {
                      label: list[1],
                      value: list[0]
                    };
                  });
                }
              });
          };
          ScheduleMaintenanceFormComponent.prototype.loadTsnLabel = function() {
            var _this = this;
            this.scheduleMaintenanceFormService.getTsnLabelForAirworthinessControl().subscribe(function(result) {
              _this.tsnLabel = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(result);
            });
          };
          ScheduleMaintenanceFormComponent.prototype.loadWorkPackageStatusList = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__['GenericPropertyConstants']
                .AIRM_PROJECT_STATUS_MAP
            );
          };
          ScheduleMaintenanceFormComponent.prototype.openAircraft = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .FLE_AIRCRAFT_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ScheduleMaintenanceFormComponent.prototype.openAirworthinessControl = function() {
            var objectId = {
              warehouse: this.scope.warehouse,
              equipmentCodeList: [this.scope.equipmentCode],
              familyVariantList: this.scope.familyVariantCode ? [this.scope.familyVariantCode] : undefined,
              functionList: this.scope.function ? [this.scope.function] : undefined
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Write,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ScheduleMaintenanceFormComponent.prototype.openAirworthinessDirective = function(sbNumber, sbRevisionNumber) {
            var objectId = {
              sbNumber: sbNumber,
              sbRevisionNumber: sbRevisionNumber
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .ENG_AIRWORTHINESS_DIRECTIVE_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ScheduleMaintenanceFormComponent.prototype.openAppliedConfigurationControl = function() {
            var objectId = {
              equipmentCodeList: [this.topEquipmentCode]
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .MAI_CONFIGURATION_CONTROL,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ScheduleMaintenanceFormComponent.prototype.openAssetMaintenancePlan = function() {
            var objectId = {
              equipmentCode: this.topEquipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId: 'AssetMaintenancePlanComponent',
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ScheduleMaintenanceFormComponent.prototype.openAssetReview = function() {
            var objectId = {
              equipmentCodeList: [this.asset.equipmentCode],
              familyVariantList: this.asset.familyVariantCode ? [this.asset.familyVariantCode] : undefined
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Write,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .MAI_ASSET_REVIEW_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ScheduleMaintenanceFormComponent.prototype.openDefect = function(notificationCode) {
            var objectId = {
              notificationCode: notificationCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .FLE_DEFECT_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ScheduleMaintenanceFormComponent.prototype.openEngine = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .FLE_ENGINE_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ScheduleMaintenanceFormComponent.prototype.openEquipment = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .FLE_EQUIPMENT_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ScheduleMaintenanceFormComponent.prototype.openServiceBulletin = function(sbNumber, sbRevisionNumber) {
            var objectId = {
              sbNumber: sbNumber,
              sbRevisionNumber: sbRevisionNumber
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants'].ENG_SBAD_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ScheduleMaintenanceFormComponent.prototype.openAdditionalMaintenanceGuideline = function(
            sbNumber,
            sbRevisionNumber
          ) {
            var objectId = {
              sbNumber: sbNumber,
              sbRevisionNumber: sbRevisionNumber
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .ENG_ADDITIONAL_MAINTENANCE_GUIDELINE_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ScheduleMaintenanceFormComponent.prototype.openTask = function(taskCode, taskVersion) {
            var objectId = {
              taskCode: taskCode,
              taskVersion: taskVersion
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants'].ENG_TASK_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ScheduleMaintenanceFormComponent.prototype.openVisit = function(taskCode, taskVersion) {
            var objectId = {
              taskCode: taskCode,
              taskVersion: taskVersion
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants'].ENG_VISIT_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ScheduleMaintenanceFormComponent.prototype.resetSummaryTableRow = function(index) {
            this.summaryTable[index].nok = 0;
            this.summaryTable[index].ok = 0;
            this.summaryTable[index].warning = 0;
          };
          ScheduleMaintenanceFormComponent.prototype.setAirworthinessStatus = function() {
            var e_1, _a;
            var worstFlag =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_GREEN;
            try {
              for (var _b = __values(this.maintenancePlanTable), _c = _b.next(); !_c.done; _c = _b.next()) {
                var element = _c.value;
                if (
                  element.data.alert ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                    .ICON_RED
                ) {
                  worstFlag =
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                      .ICON_RED;
                  break;
                } else if (
                  element.data.alert ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                      .ICON_YELLOW &&
                  worstFlag ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                      .ICON_GREEN
                ) {
                  worstFlag =
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                      .ICON_YELLOW;
                }
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
            this.airworthinessStatus = worstFlag;
          };
          // private setAssetEisDate(): void {
          //   this.assetEisDate = this.dateService.dateToString(this.asset.eisDate);
          // }
          ScheduleMaintenanceFormComponent.prototype.setAssetStatus = function() {
            var _this = this;
            if (this.isAssetAircraft) {
              var familyVariantInput =
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_AIRCRAFT_KEY;
              this.scheduleMaintenanceFormService.getStatusMap(familyVariantInput).subscribe(function(results) {
                var status = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils']
                  .orEmpty(results)
                  .find(function(elt) {
                    return elt.value === _this.asset.operationalStatus;
                  });
                _this.assetStatus = status ? status.label : '';
              });
            } else {
              this.propertiesService
                .getValue(
                  _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__['GenericPropertyConstants']
                    .OPERATIONAL_STATUS_MAP
                )
                .subscribe(function(results) {
                  var status = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils']
                    .orEmpty(results)
                    .find(function(elt) {
                      return elt.value === _this.asset.operationalStatus;
                    });
                  _this.assetStatus = status ? status.label : '';
                });
            }
          };
          ScheduleMaintenanceFormComponent.prototype.setComponentContextForAsset = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__['GenericPropertyConstants']
                  .FAMILY_FUNCTION_MAP
              )
              .subscribe(function(result) {
                if (_this.asset) {
                  if (_this.isAssetAircraft) {
                    var selectedFunction = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils']
                      .orEmpty(result)
                      .find(function(elt) {
                        return elt.value === _this.asset.equipmentFunction;
                      });
                    var aircraftLabel = selectedFunction ? selectedFunction.label : 'Aircraft';
                    _this.componentContext = [
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(aircraftLabel),
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                        _this.asset.registration
                      )
                    ]
                      .filter(function(s) {
                        return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isEmpty(s);
                      })
                      .join(' ');
                  } else {
                    _this.componentContext = [
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                        _this.asset.equipmentDesignation
                      ),
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(_this.asset.sn)
                    ]
                      .filter(function(s) {
                        return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isEmpty(s);
                      })
                      .join(' / ');
                  }
                  _this.displayComponentContext(_this.componentContext, _this.isCreateOpenMode);
                }
              });
          };
          ScheduleMaintenanceFormComponent.prototype.setDefaultSearchControlList = function() {
            this.searchCriteria.controlList = [
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_GREEN,
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_YELLOW,
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants'].ICON_RED
            ];
          };
          ScheduleMaintenanceFormComponent.prototype.setDefaultSearchTaskList = function() {
            this.searchCriteria.taskList = [
              _enums_maintenance_plan_table_task_criteria_interface__WEBPACK_IMPORTED_MODULE_30__[
                'MaintenancePlanTableTaskCriteria'
              ].ActiveTasks,
              _enums_maintenance_plan_table_task_criteria_interface__WEBPACK_IMPORTED_MODULE_30__[
                'MaintenancePlanTableTaskCriteria'
              ].OnCondition
            ];
          };
          ScheduleMaintenanceFormComponent.prototype.setDefaultSearchTypeList = function() {
            this.searchCriteria.typeList = [
              _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                'MaintenancePlanTableTypeCriteria'
              ].AD,
              _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                'MaintenancePlanTableTypeCriteria'
              ].Defect,
              _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                'MaintenancePlanTableTypeCriteria'
              ].LLP,
              _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                'MaintenancePlanTableTypeCriteria'
              ].OMP,
              _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                'MaintenancePlanTableTypeCriteria'
              ].SB,
              _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                'MaintenancePlanTableTypeCriteria'
              ].AMG
            ];
          };
          ScheduleMaintenanceFormComponent.prototype.setGlobalFilter = function() {
            var _this = this;
            this.clearGlobalFilter();
            this.searchGlobalFilterChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__['Subject']();
            this.searchGlobalFilterChanged
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['debounceTime'])(
                  ScheduleMaintenanceFormComponent_1.SEARCH_TEXT_DEBOUNCE_TIME
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['distinctUntilChanged'])(),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['takeUntil'])(this.unsubscribe)
              )
              .subscribe(function(searchTextValue) {
                _this.updateMaintenancePlanTableDisplayed(searchTextValue);
              });
          };
          ScheduleMaintenanceFormComponent.prototype.setMaintenancePlanRowNextWorkPackageAndDisplayBtnADDWP = function(
            workPackage,
            maintenancePlanRow
          ) {
            if (
              !!workPackage &&
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_25__['ObjectUtils'].isDefined(
                workPackage.projectId
              ) &&
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_25__['ObjectUtils'].isDefined(
                workPackage.projectNumber
              )
            ) {
              maintenancePlanRow._obj.nextWorkPackage = workPackage;
              var selectedStatus = this.workPackageStatusList.find(function(status) {
                return status.value === workPackage.statusState;
              });
              var workPackageStatus = !!selectedStatus ? selectedStatus.label : '';
              var workPackageDate = this.dateService.dateToString(workPackage.projectStartDate);
              var tooltip = 'WP n\u00B0 ' + workPackage.projectNumber;
              if (
                !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isEmpty(workPackageDate) ||
                !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isEmpty(workPackageStatus)
              ) {
                tooltip += ' (';
                tooltip += _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isEmpty(
                  workPackageStatus
                )
                  ? ''
                  : workPackageStatus;
                tooltip +=
                  !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isEmpty(workPackageDate) &&
                  !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isEmpty(workPackageStatus)
                    ? ', '
                    : '';
                tooltip += _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isEmpty(
                  workPackageDate
                )
                  ? ''
                  : workPackageDate;
                tooltip += ')';
              }
              maintenancePlanRow.nextWorkPackage = '' + workPackage.projectNumber;
              maintenancePlanRow.nextWorkPackageTooltip = tooltip;
            } else {
              maintenancePlanRow.nextWorkPackage = '';
              maintenancePlanRow.nextWorkPackageTooltip = '';
            }
            this.setMaintenancePlanRowDisplayBtnADDWP(maintenancePlanRow);
          };
          ScheduleMaintenanceFormComponent.prototype.setMaintenancePlanRowDisplayBtnADDWP = function(
            maintenancePlanRow
          ) {
            maintenancePlanRow._displayBtnADDWP = maintenancePlanRow.nextWorkPackage === '';
          };
          ScheduleMaintenanceFormComponent.prototype.setMaintenancePlanRowType = function(element, maintenancePlanRow) {
            if (element.type) {
              var typeKey = this.getTranslateKeyForEventType(element.type);
              this.translateService.get(typeKey).subscribe(function(translatedKey) {
                maintenancePlanRow.type = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__[
                  'StringUtils'
                ].orEmpty(translatedKey);
                maintenancePlanRow._isTypeEquipment =
                  element.type ===
                    _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                      'MaintenancePlanTableTypeConstants'
                    ].EQUIPMENT ||
                  element.type ===
                    _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                      'MaintenancePlanTableTypeConstants'
                    ].ENGINE;
              });
            }
          };
          ScheduleMaintenanceFormComponent.prototype.setMaintenanceTableColList = function() {
            this.maintenancePlanTableColList = [
              { field: 'alert', alignment: 'center', width: '6%' },
              { field: 'firstColumn', alignment: 'left', width: '17%' },
              { field: 'type', alignment: 'left', width: '5%' },
              { field: 'remainingEquivalent', alignment: 'left', width: '13%' },
              { field: 'remainingTime', alignment: 'left', width: '13%' },
              { field: 'nextTerm', alignment: 'left', width: '13%' },
              { field: 'nextWorkPackage', alignment: 'left', width: '11%' },
              { field: 'period', alignment: 'left', width: '15%' },
              { field: 'tolerance', alignment: 'left', width: '10%' },
              { field: 'postponement', alignment: 'left', width: '10%' }
            ];
          };
          ScheduleMaintenanceFormComponent.prototype.setNavigationLinkList = function() {
            var _this = this;
            var airworthinessControlKey = this.getTranslateKey('airworthinessStatus');
            var appliedConfigurationControlKey = this.getTranslateKey('appliedConfigurationControl');
            var assetMaintenancePlanKey = this.getTranslateKey('assetMaintenancePlan');
            var assetReviewKey = this.getTranslateKey('assetReview');
            this.translateService
              .get([airworthinessControlKey, appliedConfigurationControlKey, assetMaintenancePlanKey, assetReviewKey])
              .subscribe(function(results) {
                var airworthinessControlLabel = results ? results[airworthinessControlKey] : 'Airworthiness Status';
                var appliedConfigurationControlLabel = results
                  ? results[appliedConfigurationControlKey]
                  : 'Applied Configuration Control';
                var assetMaintenancePlanLabel = results ? results[assetMaintenancePlanKey] : 'Asset Maintenance Plan';
                var assetReviewLabel = results ? results[assetReviewKey] : 'Asset Review';
                _this.navigationLinkList = [
                  {
                    label: airworthinessControlLabel,
                    command: function() {
                      _this.openAirworthinessControl();
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
                    label: assetReviewLabel,
                    command: function() {
                      _this.openAssetReview();
                    }
                  }
                ];
              });
          };
          ScheduleMaintenanceFormComponent.prototype.setPotentialUnitList = function() {
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
                    _this.updatePotentialUnit(
                      _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__[
                        'BireUnitMeasureConstants'
                      ].HOUR
                    );
                  }
                },
                {
                  label: cyclesLabel,
                  command: function() {
                    _this.updatePotentialUnit(
                      _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__[
                        'BireUnitMeasureConstants'
                      ].CYCLE
                    );
                  }
                },
                {
                  label: daysLabel,
                  command: function() {
                    _this.updatePotentialUnit(
                      _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__[
                        'BireUnitMeasureConstants'
                      ].DAY
                    );
                  }
                }
              ];
            });
          };
          ScheduleMaintenanceFormComponent.prototype.setSearchAssetList = function() {
            this.searchAssetList = this.maintenancePlanTable
              .filter(function(elt) {
                return !!elt.data;
              })
              .map(function(elt) {
                return {
                  label: elt.data.firstColumn,
                  value: elt.data.firstColumn
                };
              });
          };
          ScheduleMaintenanceFormComponent.prototype.setSearchControlList = function() {
            var _this = this;
            var alertNokKey = this.getTranslateKey('alertNok');
            var alertOkKey = this.getTranslateKey('alertOk');
            var alertWarningKey = this.getTranslateKey('alertWarning');
            this.translateService.get([alertNokKey, alertOkKey, alertWarningKey]).subscribe(function(results) {
              var alertNokLabel = results ? results[alertNokKey] : 'NOK';
              var alertOkLabel = results ? results[alertOkKey] : 'OK';
              var alertWarningLabel = results ? results[alertWarningKey] : 'WARNING';
              _this.searchControlList = [
                {
                  label: alertOkLabel,
                  value:
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                      .ICON_GREEN
                },
                {
                  label: alertWarningLabel,
                  value:
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                      .ICON_YELLOW
                },
                {
                  label: alertNokLabel,
                  value:
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                      .ICON_RED
                }
              ];
            });
          };
          ScheduleMaintenanceFormComponent.prototype.setSearchTaskList = function() {
            var _this = this;
            var activeTasksKey = this.getTranslateKey('activeTasks');
            var inactiveTasksKey = this.getTranslateKey('inactiveTasks');
            var onConditionKey = this.getTranslateKey('onCondition');
            this.translateService.get([activeTasksKey, inactiveTasksKey, onConditionKey]).subscribe(function(results) {
              var activeTasksLabel = results ? results[activeTasksKey] : 'Active Tasks';
              var inactiveTasksLabel = results ? results[inactiveTasksKey] : 'Inactive Tasks';
              var onConditionLabel = results ? results[onConditionKey] : 'On Condition';
              _this.searchTaskList = [
                {
                  label: activeTasksLabel,
                  value:
                    _enums_maintenance_plan_table_task_criteria_interface__WEBPACK_IMPORTED_MODULE_30__[
                      'MaintenancePlanTableTaskCriteria'
                    ].ActiveTasks
                },
                {
                  label: inactiveTasksLabel,
                  value:
                    _enums_maintenance_plan_table_task_criteria_interface__WEBPACK_IMPORTED_MODULE_30__[
                      'MaintenancePlanTableTaskCriteria'
                    ].InactiveTasks
                },
                {
                  label: onConditionLabel,
                  value:
                    _enums_maintenance_plan_table_task_criteria_interface__WEBPACK_IMPORTED_MODULE_30__[
                      'MaintenancePlanTableTaskCriteria'
                    ].OnCondition
                }
              ];
            });
          };
          ScheduleMaintenanceFormComponent.prototype.setSearchTypeList = function() {
            var _this = this;
            var adKey = this.getTranslateKey('ad');
            var defectKey = this.getTranslateKey('defect');
            var llpKey = this.getTranslateKey('llp');
            var ompKey = this.getTranslateKey('omp');
            var sbKey = this.getTranslateKey('sb');
            var amgKey = this.getTranslateKey('amg');
            this.translateService.get([adKey, defectKey, llpKey, ompKey, sbKey, amgKey]).subscribe(function(results) {
              var adLabel = results ? results[adKey] : 'AD';
              var defectLabel = results ? results[defectKey] : 'Defect';
              var llpLabel = results ? results[llpKey] : 'LLP';
              var ompLabel = results ? results[ompKey] : 'OMP';
              var sbLabel = results ? results[sbKey] : 'SB';
              var amgLabel = results ? results[amgKey] : 'AMG';
              _this.searchTypeList = [
                {
                  label: adLabel,
                  value:
                    _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                      'MaintenancePlanTableTypeCriteria'
                    ].AD
                },
                {
                  label: sbLabel,
                  value:
                    _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                      'MaintenancePlanTableTypeCriteria'
                    ].SB
                },
                {
                  label: defectLabel,
                  value:
                    _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                      'MaintenancePlanTableTypeCriteria'
                    ].Defect
                },
                {
                  label: llpLabel,
                  value:
                    _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                      'MaintenancePlanTableTypeCriteria'
                    ].LLP
                },
                {
                  label: ompLabel,
                  value:
                    _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                      'MaintenancePlanTableTypeCriteria'
                    ].OMP
                },
                {
                  label: amgLabel,
                  value:
                    _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                      'MaintenancePlanTableTypeCriteria'
                    ].AMG
                }
              ];
            });
          };
          ScheduleMaintenanceFormComponent.prototype.setSearchWorkPackageList = function() {
            this.searchWorkPackageList = this.workPackageList
              .map(function(elt) {
                var workPackageNumber = '' + elt.projectNumber;
                return {
                  label: workPackageNumber,
                  value: workPackageNumber
                };
              })
              .sort(function(w1, w2) {
                return w1.label.localeCompare(w2.label);
              });
          };
          ScheduleMaintenanceFormComponent.prototype.setSummaryTableColList = function() {
            this.summaryTableColList = [
              { field: 'category', alignment: 'left', width: '40%' },
              { field: 'ok', alignment: 'center', width: '20%' },
              { field: 'warning', alignment: 'center', width: '20%' },
              { field: 'nok', alignment: 'center', width: '20%' }
            ];
          };
          ScheduleMaintenanceFormComponent.prototype.treeNodeMatchFilters = function(node, searchText) {
            var _this = this;
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils'].isNullOrEmpty(node.children)) {
              node.children = node.children.filter(function(child) {
                return _this.treeNodeMatchFilters(child, searchText);
              });
            }
            var nodeData = node.data;
            // Control
            var controlMatch = true;
            if (
              !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils'].isNullOrEmpty(
                this.searchCriteria.controlList
              )
            ) {
              var nodeControl = nodeData.alert;
              var controlList = this.searchCriteria.controlList;
              controlMatch = controlList.includes(nodeControl);
            }
            // Description
            var descriptionMatch =
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isNullOrEmpty(searchText) ||
              nodeData.description.toLowerCase().includes(searchText);
            // First column
            var firstColumnMatch =
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isNullOrEmpty(searchText) ||
              nodeData.firstColumn.toLowerCase().includes(searchText);
            // Type
            var typeMatch = true;
            if (
              !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils'].isNullOrEmpty(
                this.searchCriteria.typeList
              )
            ) {
              var nodeType = nodeData._obj.type;
              var typeList = this.searchCriteria.typeList;
              typeMatch =
                (typeList.includes(
                  _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                    'MaintenancePlanTableTypeCriteria'
                  ].AD
                ) &&
                  nodeType ===
                    _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                      'MaintenancePlanTableTypeConstants'
                    ].AD) ||
                (typeList.includes(
                  _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                    'MaintenancePlanTableTypeCriteria'
                  ].Defect
                ) &&
                  nodeType ===
                    _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                      'MaintenancePlanTableTypeConstants'
                    ].DEFECT) ||
                (typeList.includes(
                  _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                    'MaintenancePlanTableTypeCriteria'
                  ].LLP
                ) &&
                  nodeType ===
                    _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                      'MaintenancePlanTableTypeConstants'
                    ].LLP) ||
                (typeList.includes(
                  _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                    'MaintenancePlanTableTypeCriteria'
                  ].OMP
                ) &&
                  nodeType ===
                    _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                      'MaintenancePlanTableTypeConstants'
                    ].TASK) ||
                (typeList.includes(
                  _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                    'MaintenancePlanTableTypeCriteria'
                  ].SB
                ) &&
                  nodeType ===
                    _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                      'MaintenancePlanTableTypeConstants'
                    ].SB) ||
                (typeList.includes(
                  _enums_maintenance_plan_table_type_criteria_interface__WEBPACK_IMPORTED_MODULE_31__[
                    'MaintenancePlanTableTypeCriteria'
                  ].AMG
                ) &&
                  nodeType ===
                    _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                      'MaintenancePlanTableTypeConstants'
                    ].AMG);
            }
            // Work package
            var workPackageMatch =
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isNullOrEmpty(
                this.searchCriteria.workPackage
              ) || nodeData.nextWorkPackage === this.searchCriteria.workPackage;
            return (
              _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils'].orEmpty(node.children).length > 0 ||
              ((descriptionMatch || firstColumnMatch) && controlMatch && typeMatch && workPackageMatch)
            );
          };
          ScheduleMaintenanceFormComponent.prototype.updateMaintenancePlanTableAfterWorkPackageRemoval = function(
            nodes,
            workPackage
          ) {
            var _this = this;
            nodes.forEach(function(node) {
              var nodeData = node.data;
              if (nodeData._obj.nextWorkPackage && nodeData._obj.nextWorkPackage.projectId === workPackage.projectId) {
                nodeData._obj.nextWorkPackage = undefined;
                nodeData.nextWorkPackage = '';
                nodeData.nextWorkPackageTooltip = '';
              }
              if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils'].isNullOrEmpty(node.children)) {
                _this.updateMaintenancePlanTableAfterWorkPackageRemoval(node.children, workPackage);
              }
            });
          };
          ScheduleMaintenanceFormComponent.prototype.updateMaintenancePlanTableDisplayed = function(searchText) {
            var _this = this;
            var selectedAsset = this.maintenancePlanTable.find(function(elt) {
              return elt.data.firstColumn === _this.searchCriteria.asset;
            });
            this.maintenancePlanTableDisplayed = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(
              !!selectedAsset ? [selectedAsset] : this.maintenancePlanTable
            );
            this.maintenancePlanTableDisplayed = this.maintenancePlanTableDisplayed.filter(function(elt) {
              return _this.treeNodeMatchFilters(elt, !!searchText ? searchText.toLowerCase() : undefined);
            });
            this.maintenancePlanTableDisplayedLeafNb = this.getAllMaintenancePlanTableLeaf(
              this.maintenancePlanTableDisplayed
            ).length;
            if (
              !this.maintenancePlanTableDisplayed.some(function(elt) {
                return !!elt.expanded;
              }) &&
              this.maintenancePlanTableDisplayed.length > 0
            ) {
              this.maintenancePlanTableDisplayed[0].expanded = true;
            }
            this.setAirworthinessStatus();
            this.updateSummaryTable();
          };
          ScheduleMaintenanceFormComponent.prototype.updatePotentialUnit = function(unit) {
            this.potentialUnitSelected = unit;
            this.load();
          };
          ScheduleMaintenanceFormComponent.prototype.updateSummaryTableRow = function(indexInSummaryTable, rowType) {
            var rowList = this.getMaintenancePlanRowListByType(rowType);
            // Reset old values
            this.resetSummaryTableRow(indexInSummaryTable);
            // Fill with new values
            this.summaryTable[indexInSummaryTable].nok = rowList.filter(function(row) {
              return (
                row.alert ===
                _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                  .ICON_RED
              );
            }).length;
            this.summaryTable[indexInSummaryTable].ok = rowList.filter(function(row) {
              return (
                row.alert ===
                _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                  .ICON_GREEN
              );
            }).length;
            this.summaryTable[indexInSummaryTable].warning = rowList.filter(function(row) {
              return (
                row.alert ===
                _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                  .ICON_YELLOW
              );
            }).length;
            // Update global row
            this.updateSummaryTableGlobal();
          };
          ScheduleMaintenanceFormComponent.prototype.updateSummaryTable = function() {
            this.updateSummaryTableRow(
              ScheduleMaintenanceFormComponent_1.SUMMARY_TABLE_AD_INDEX,
              _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].AD
            );
            this.updateSummaryTableRow(
              ScheduleMaintenanceFormComponent_1.SUMMARY_TABLE_DEFECT_INDEX,
              _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].DEFECT
            );
            this.updateSummaryTableRow(
              ScheduleMaintenanceFormComponent_1.SUMMARY_TABLE_LLP_INDEX,
              _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].LLP
            );
            this.updateSummaryTableRow(
              ScheduleMaintenanceFormComponent_1.SUMMARY_TABLE_OMP_INDEX,
              _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].TASK
            );
            this.updateSummaryTableRow(
              ScheduleMaintenanceFormComponent_1.SUMMARY_TABLE_SB_INDEX,
              _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].SB
            );
            this.updateSummaryTableRow(
              ScheduleMaintenanceFormComponent_1.SUMMARY_TABLE_AMG_INDEX,
              _constants_maintenance_plan_table_type_constants__WEBPACK_IMPORTED_MODULE_29__[
                'MaintenancePlanTableTypeConstants'
              ].AMG
            );
            this.updateSummaryTableGlobal();
            this.summaryTable = __spread(this.summaryTable);
          };
          ScheduleMaintenanceFormComponent.prototype.updateSummaryTableGlobal = function() {
            var index = ScheduleMaintenanceFormComponent_1.SUMMARY_TABLE_GLOBAL_INDEX;
            this.summaryTable[index].nok = this.summaryTable
              .slice(1)
              .map(function(row) {
                return row.nok;
              })
              .reduce(function(a, b) {
                return a + b;
              }, 0);
            this.summaryTable[index].ok = this.summaryTable
              .slice(1)
              .map(function(row) {
                return row.ok;
              })
              .reduce(function(a, b) {
                return a + b;
              }, 0);
            this.summaryTable[index].warning = this.summaryTable
              .slice(1)
              .map(function(row) {
                return row.warning;
              })
              .reduce(function(a, b) {
                return a + b;
              }, 0);
          };
          ScheduleMaintenanceFormComponent.prototype.customSort = function(event) {
            if (event.field && event.field === 'remainingEquivalent' && event.data) {
              var order = event.order;
              if (!order) {
                order = 1;
              }
              this.sortTreeAndTreeChildrensOnRemainingEquivalent(event.data, order);
            }
            if (event.field && event.field === 'remainingTime' && event.data) {
              var order = event.order;
              if (!order) {
                order = 1;
              }
              this.sortTreeAndTreeChildrensOnRemainingTime(event.data, order);
            }
          };
          ScheduleMaintenanceFormComponent.prototype.sortTreeAndTreeChildrensOnRemainingEquivalent = function(
            rows,
            order
          ) {
            var _this = this;
            rows.forEach(function(row) {
              if (row.children && row.children.length > 1) {
                _this.sortTreeAndTreeChildrensOnRemainingEquivalent(row.children, order);
              }
            });
            rows.sort(function(data1, data2) {
              return _this.compareRemainingEquivalent(data1.data, data2.data) * order;
            });
          };
          ScheduleMaintenanceFormComponent.prototype.sortTreeAndTreeChildrensOnRemainingTime = function(rows, order) {
            var _this = this;
            rows.forEach(function(row) {
              if (row.children && row.children.length > 1) {
                _this.sortTreeAndTreeChildrensOnRemainingTime(row.children, order);
              }
            });
            rows.sort(function(data1, data2) {
              return _this.compareRemainingTime(data1.data, data2.data) * order;
            });
          };
          ScheduleMaintenanceFormComponent.prototype.compareRemainingEquivalent = function(
            maintenancePlanRow1,
            maintenancePlanRow2
          ) {
            var remainingEquivalent1 = maintenancePlanRow1.remainingEquivalent;
            var remainingEquivalent2 = maintenancePlanRow2.remainingEquivalent;
            var isNOK1 =
              maintenancePlanRow1.alert ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_RED;
            var isNOK2 =
              maintenancePlanRow2.alert ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_RED;
            return _shared_utils_comparator_utils__WEBPACK_IMPORTED_MODULE_23__[
              'ComparatorUtils'
            ].compareByRemainingEquivalent(
              {
                equipment: maintenancePlanRow1._obj.equipment,
                remainingEquivalent: remainingEquivalent1,
                isNOK: isNOK1
              },
              {
                equipment: maintenancePlanRow2._obj.equipment,
                remainingEquivalent: remainingEquivalent2,
                isNOK: isNOK2
              }
            );
          };
          ScheduleMaintenanceFormComponent.prototype.compareRemainingTime = function(
            maintenancePlanRow1,
            maintenancePlanRow2
          ) {
            var remaining1 = maintenancePlanRow1.remaining;
            var remaining2 = maintenancePlanRow2.remaining;
            var isNOK1 =
              maintenancePlanRow1.alert ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_RED;
            var isNOK2 =
              maintenancePlanRow2.alert ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_RED;
            return _shared_utils_comparator_utils__WEBPACK_IMPORTED_MODULE_23__['ComparatorUtils'].compareByRemaining(
              {
                equipment: maintenancePlanRow1._obj.equipment,
                remaining: remaining1,
                isNOK: isNOK1
              },
              {
                equipment: maintenancePlanRow2._obj.equipment,
                remaining: remaining2,
                isNOK: isNOK2
              }
            );
          };
          ScheduleMaintenanceFormComponent.prototype.flatDeep = function(tree) {
            var _this = this;
            return tree.reduce(function(acc, val) {
              return __spread(acc, val ? [val.data] : [], val.children ? _this.flatDeep(val.children) : []);
            }, []);
          };
          ScheduleMaintenanceFormComponent.prototype.displayWorkOrderScreenEdit = function() {
            var _this = this;
            var rowData = this.findRowByid(this.idRowToAssicateToWPWithWOCreation).data;
            if (rowData._obj && rowData._obj.nextWorkPackage) {
              this.workPackage = rowData._obj.nextWorkPackage;
              if (this.workPackage.projectId) {
                this.projectId = this.workPackage.projectId;
              }
              this.wpFormService.getBidmWorkOrdersStructureByProject(this.projectId).subscribe(function(woList) {
                _this.workOrderList = _this.flatDeep(woList);
                _this.displayWorkOrderEdit = true;
              });
              this.workOrderSelected = undefined;
            }
          };
          ScheduleMaintenanceFormComponent.prototype.onAddWorkOrder = function(isCreated) {
            var _this = this;
            if (isCreated) {
              this.workOrdersFormService.calculateBidmProjectStatus(this.workPackage).subscribe(function(statusState) {
                if (_this.workPackage.statusState !== statusState) {
                  _this.updateOpenMode(
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Write
                  );
                  _this.workPackage.statusState = statusState;
                }
              });
            }
          };
          ScheduleMaintenanceFormComponent.prototype.storeRowToAssociateToWPWithWOCreation = function(node) {
            var equipmentLine = node.data;
            equipmentLine._isActiveWorkPackageBtn = true;
            this.idRowToAssicateToWPWithWOCreation = +node.data._id;
          };
          ScheduleMaintenanceFormComponent.prototype.findRowByid = function(id) {
            return this.maintenancePlanTableDisplayed.filter(function(elt) {
              return +elt.data._id === id;
            })[0];
          };
          ScheduleMaintenanceFormComponent.prototype.openEventUC = function(eventCode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .FLE_EVENT_CREATE,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read
            };
            if (!!eventCode) {
              var eventId = {
                notificationCode: eventCode
              };
              data.objectId = this.serializationService.serialize(eventId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          var ScheduleMaintenanceFormComponent_1;
          ScheduleMaintenanceFormComponent.AIRCRAFT_ANCHOR_ID = 'aircraftAnchor';
          ScheduleMaintenanceFormComponent.UPCOMING_EVENTS_SUMMARY_ANCHOR_ID = 'upcomingEventsSummaryAnchor';
          ScheduleMaintenanceFormComponent.UPCOMING_EVENTS_ANCHOR_ID = 'upcomingEventsAnchor';
          ScheduleMaintenanceFormComponent.SUMMARY_TABLE_AD_LABEL = 'ad';
          ScheduleMaintenanceFormComponent.SUMMARY_TABLE_DEFECT_LABEL = 'defect';
          ScheduleMaintenanceFormComponent.SUMMARY_TABLE_GLOBAL_LABEL = 'global';
          ScheduleMaintenanceFormComponent.SUMMARY_TABLE_LLP_LABEL = 'llp';
          ScheduleMaintenanceFormComponent.SUMMARY_TABLE_OMP_LABEL = 'task';
          ScheduleMaintenanceFormComponent.SUMMARY_TABLE_SB_LABEL = 'sb';
          ScheduleMaintenanceFormComponent.SUMMARY_TABLE_AMG_LABEL = 'amg';
          ScheduleMaintenanceFormComponent.EXPORT_TRANSLATE_KEY = 'ScheduleMaintenanceFormComponentExport';
          ScheduleMaintenanceFormComponent.SEARCH_TEXT_DEBOUNCE_TIME = 500;
          ScheduleMaintenanceFormComponent.SUMMARY_TABLE_AD_INDEX = 3;
          ScheduleMaintenanceFormComponent.SUMMARY_TABLE_DEFECT_INDEX = 2;
          ScheduleMaintenanceFormComponent.SUMMARY_TABLE_GLOBAL_INDEX = 0;
          ScheduleMaintenanceFormComponent.SUMMARY_TABLE_LLP_INDEX = 5;
          ScheduleMaintenanceFormComponent.SUMMARY_TABLE_OMP_INDEX = 1;
          ScheduleMaintenanceFormComponent.SUMMARY_TABLE_SB_INDEX = 4;
          ScheduleMaintenanceFormComponent.SUMMARY_TABLE_AMG_INDEX = 6;
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                ScheduleMaintenanceFormComponent_1.AIRCRAFT_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ScheduleMaintenanceFormComponent.prototype,
            'aircraftEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                ScheduleMaintenanceFormComponent_1.UPCOMING_EVENTS_SUMMARY_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ScheduleMaintenanceFormComponent.prototype,
            'upcomingEventsSummaryEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                ScheduleMaintenanceFormComponent_1.UPCOMING_EVENTS_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ScheduleMaintenanceFormComponent.prototype,
            'upcomingEventsEltRef',
            void 0
          );
          ScheduleMaintenanceFormComponent = ScheduleMaintenanceFormComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-schedule-maintenance-form',
                template: __webpack_require__(
                  /*! ./schedule-maintenance-form.component.html */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../share.scss */ './src/app/main/maintenance/airworthiness-control/form/share.scss'
                  ),
                  __webpack_require__(
                    /*! ./share.scss */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/share.scss'
                  ),
                  __webpack_require__(
                    /*! ./schedule-maintenance-form.component.scss */ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_15__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_16__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_17__['MessageService'],
                _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_5__['PageTocService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_19__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_21__['TabService'],
                _schedule_maintenance_form_service__WEBPACK_IMPORTED_MODULE_32__['ScheduleMaintenanceFormService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_20__['SessionService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__['ConfirmationService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_13__['DateService'],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_14__['ExportService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_18__['PropertiesService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _work_orders_form_work_orders_form_service__WEBPACK_IMPORTED_MODULE_27__['WorkOrdersFormService'],
                _work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_28__['WorkPackageFormService']
              ])
            ],
            ScheduleMaintenanceFormComponent
          );
          return ScheduleMaintenanceFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_22__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.service.ts':
      /*!****************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/schedule-maintenance-form.service.ts ***!
  \****************************************************************************************************************************/
      /*! exports provided: ScheduleMaintenanceFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ScheduleMaintenanceFormService',
          function() {
            return ScheduleMaintenanceFormService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/api/airworthiness-management.api */ './src/app/shared/api/airworthiness-management.api.ts'
        );
        /* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/api/am-project-management.api */ './src/app/shared/api/am-project-management.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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

        var ScheduleMaintenanceFormService = /** @class */ (function(_super) {
          __extends(ScheduleMaintenanceFormService, _super);
          function ScheduleMaintenanceFormService(
            http,
            appConfigService,
            airworthinessManagementApi,
            aMProjectManagementApi,
            fleetManagementApi,
            productStructureManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.airworthinessManagementApi = airworthinessManagementApi;
            _this.aMProjectManagementApi = aMProjectManagementApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            return _this;
          }
          ScheduleMaintenanceFormService.prototype.workPackageAddToButtonVisible = function(
            maintenancePlanTableSelectedList
          ) {
            return (
              maintenancePlanTableSelectedList.length > 0 &&
              maintenancePlanTableSelectedList.every(function(elt) {
                return elt.data.nextWorkPackage.length === 0;
              })
            );
          };
          ScheduleMaintenanceFormService.prototype.workPackageCreateButtonVisible = function(
            maintenancePlanTableSelectedList
          ) {
            return true;
            /* return (
          maintenancePlanTableSelectedList.length > 0 &&
          maintenancePlanTableSelectedList.every((elt) => elt.data.nextWorkPackage.length === 0)
        ); */
          };
          ScheduleMaintenanceFormService.prototype.workPackageRemoveFromButtonVisible = function(
            maintenancePlanTableSelectedList
          ) {
            return (
              maintenancePlanTableSelectedList.length > 0 &&
              maintenancePlanTableSelectedList.every(function(elt) {
                return elt.data.nextWorkPackage.length > 0;
              })
            );
          };
          /**************************************************************************
           * Airworthiness management api
           *************************************************************************/
          ScheduleMaintenanceFormService.prototype.addToWorkPackage = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.addToWorkPackage, input);
          };
          ScheduleMaintenanceFormService.prototype.applyTask = function(input) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.applyTaskForScheduleMaintenance,
              input
            );
          };
          ScheduleMaintenanceFormService.prototype.clearScheduleMaintenanceCache = function(input) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.clearScheduleMaintenanceCache,
              input
            );
          };
          ScheduleMaintenanceFormService.prototype.controlBaseMaintenanceSelection = function(input) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.controlBaseMaintenanceSelection,
              input
            );
          };
          ScheduleMaintenanceFormService.prototype.controlEvolutionsInterdependenceForScheduleMaintenance = function(
            topEquipmentCode
          ) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.controlEvolutionsInterdependenceForScheduleMaintenanceInput,
              topEquipmentCode
            );
          };
          ScheduleMaintenanceFormService.prototype.counterListFromMaintenancePlan = function(topEquipmentCode) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.counterListFromMaintenancePlan,
              topEquipmentCode
            );
          };
          ScheduleMaintenanceFormService.prototype.createWorkPackage = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.createWorkPackage, input);
          };
          ScheduleMaintenanceFormService.prototype.exportDueList = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.exportDueList, input);
          };
          ScheduleMaintenanceFormService.prototype.getAllCounterFromMaintenancePlan = function(input) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.getAllCounterFromMaintenancePlanInput,
              input
            );
          };
          ScheduleMaintenanceFormService.prototype.getAssetCsn = function(topEquipmentCode) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.getAssetCsnFromMaintenancePlan,
              topEquipmentCode
            );
          };
          ScheduleMaintenanceFormService.prototype.getAssetTsn = function(topEquipmentCode) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.getAssetTsnFromMaintenancePlan,
              topEquipmentCode
            );
          };
          ScheduleMaintenanceFormService.prototype.getCsnLabelForAirworthinessControl = function() {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.getCsnLabelForAirworthinessControl);
          };
          ScheduleMaintenanceFormService.prototype.getPotentialEquivalentValues = function(topEquipmentCode) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.getPotentialEquivalentValues,
              topEquipmentCode
            );
          };
          ScheduleMaintenanceFormService.prototype.getTaskApplicationHistory = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.getTaskApplicationHistory, input);
          };
          ScheduleMaintenanceFormService.prototype.getTsnLabelForAirworthinessControl = function() {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.getTsnLabelForAirworthinessControl);
          };
          ScheduleMaintenanceFormService.prototype.initializeMaintenancePlanStructure = function(params) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.initializeMaintenancePlanStructure,
              params
            );
          };
          ScheduleMaintenanceFormService.prototype.initializeScheduleMaintenance = function(topEquipmentCode) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.initializeScheduleMaintenance,
              topEquipmentCode
            );
          };
          ScheduleMaintenanceFormService.prototype.removeFromWorkPackage = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.removeFromWorkPackage, input);
          };
          ScheduleMaintenanceFormService.prototype.saveTaskCounter = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.saveTaskCounter, input);
          };
          ScheduleMaintenanceFormService.prototype.taskGroupListFromMaintenancePlan = function(topEquipmentCode) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.taskGroupListFromMaintenancePlan,
              topEquipmentCode
            );
          };
          ScheduleMaintenanceFormService.prototype.updateTask = function(input) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.updateTaskApplicationDateForScheduleMaintenance,
              input
            );
          };
          ScheduleMaintenanceFormService.prototype.workPackageList = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.generateWorkPackageList, input);
          };
          /**************************************************************************
           * AM project management api
           *************************************************************************/
          ScheduleMaintenanceFormService.prototype.removeWorkPackage = function(input) {
            return _super.prototype.post.call(this, this.aMProjectManagementApi.removeBidmProject, input);
          };
          ScheduleMaintenanceFormService.prototype.updateWorkPackage = function(input) {
            return _super.prototype.post.call(this, this.aMProjectManagementApi.updateBidmProject, input);
          };
          /**************************************************************************
           * Fleet management api
           *************************************************************************/
          ScheduleMaintenanceFormService.prototype.findAllBidoMissionEquipmentByEquipmentCode = function(
            equipmentCode
          ) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findAllBidoMissionEquipmentByEquipmentCode,
              equipmentCode
            );
          };
          ScheduleMaintenanceFormService.prototype.getEquipment = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, input);
          };
          ScheduleMaintenanceFormService.prototype.getStatusMap = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.initializeOperationalStatusList,
              input
            );
          };
          ScheduleMaintenanceFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__['AppConfigService'],
                _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_2__['AirworthinessManagementApi'],
                _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_3__['AMProjectManagementApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__['FleetManagementApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__[
                  'ProductStructureManagementApi'
                ]
              ])
            ],
            ScheduleMaintenanceFormService
          );
          return ScheduleMaintenanceFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/share.scss':
      /*!**************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/schedule-maintenance-form/share.scss ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.object-details {\n  border: 1px solid #01579b;\n  border-radius: 4px;\n  padding: 8px;\n  margin-bottom: calc(8px * 5); }\n  .object-details .actions-bar {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9zY2hlZHVsZS1tYWludGVuYW5jZS1mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxcYWlyd29ydGhpbmVzcy1jb250cm9sXFxmb3JtXFxzY2hlZHVsZS1tYWludGVuYW5jZS1mb3JtXFxzaGFyZS5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2FpcndvcnRoaW5lc3MtY29udHJvbC9mb3JtL3NjaGVkdWxlLW1haW50ZW5hbmNlLWZvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9zY2hlZHVsZS1tYWludGVuYW5jZS1mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkNBb0I7RURDcEIsa0JDZ0NpQjtFRC9CakIsWUNzQ2dCO0VEckNoQiw0QkFBeUMsRUFBQTtFQUozQztJRW9CRSxhQUFhO0lBQ2IsbUJBQW1CO0lGWmpCLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9zY2hlZHVsZS1tYWludGVuYW5jZS1mb3JtL3NoYXJlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbi5vYmplY3QtZGV0YWlscyB7XHJcbiAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJGFjY2VudC1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG4gIG1hcmdpbi1ib3R0b206IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDUpO1xyXG5cclxuICAuYWN0aW9ucy1iYXIge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVdGlscyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gYnV0dG9uLWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCAkY29sb3IsICRib3JkZXItY29sb3I6IG51bGwpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyLFxyXG4gICY6bm90KDpkaXNhYmxlZCkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogaWYoJGJvcmRlci1jb2xvciA9PSBudWxsLCAkY29sb3IsICRib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgtY29sdW1uKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtcm93KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQG1peGluIGlucHV0KCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1kaXNhYmxlZCgpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZm9jdXMoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1ob3ZlcigpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlYXJjaC1jcml0ZXJpYS1jb250YWluZXIge1xyXG4gIC5hZHZhbmNlZC1jcml0ZXJpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgICYucmVxdWlyZWQge1xyXG4gICAgICBAaW5jbHVkZSBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCgpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHcmlkIGZvcm0gY29udHJvbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViTWVkaXVtXCI7XHJcblxyXG4gICYgPiBpbnB1dCArIHAtbWVzc2FnZSA+IC51aS1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyNTUsIDI1NSwgMjU1KSA2MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAuYXctaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuLFxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG5cclxuICAgICAgJi5hdy1jYWxlbmRhciAudWktaW5wdXR0ZXh0LFxyXG4gICAgICAmLmF3LWRyb3Bkb3duIC51aS1kcm9wZG93bixcclxuICAgICAgJi5hdy1pbnB1dCxcclxuICAgICAgJi5hdy10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctY2FsZW5kYXIge1xyXG4gICAgICAvLyBGSVhNRTogZml4IGFuIFVJIGlzc3VlIG9uIFByaW1lTkcgY2FsZW5kYXIgY29tcG9uZW50OyB0byByZW1vdmUgd2hlbiBpc3N1ZSB3aWxsIGJlIGZpeGVkIHVwc3RyZWFtXHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAuYXctaWNvbjpub3QoLnJlYWQtb25seS1saW5rKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIG5vbmVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW5pbXAsXHJcbiAgICAuYnRuLWV4dGVybmFsLWxpbmstd3JhcHBlcixcclxuICAgIC5idG4tY2xlYXItd3JhcHBlcixcclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlcixcclxuICAgIC5idG4tc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgICAuYXctZmlsZXVwbG9hZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudWktYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWNsZWFyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtcmFkaW9idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAmID4gLmF3LXJhZGlvYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jYWxlbmRhciB7XHJcbiAgJi51aS1pbnB1dHdyYXBwZXItZm9jdXMge1xyXG4gICAgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkY2hlY2tib3gtaGVpZ2h0O1xyXG4gIHdpZHRoOiAkY2hlY2tib3gtaGVpZ2h0O1xyXG5cclxuICAudWktY2hrYm94IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1jaGtib3gtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZHJvcGRvd24ge1xyXG4gIC51aS1kcm9wZG93biB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1mb2N1cyB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbixcclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gICAgICByaWdodDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDEuNzVyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5maXhlZC13aWR0aCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZpbGV1cGxvYWQge1xyXG4gIEBleHRlbmQgLmF3LWJ0bjtcclxuXHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnVpLWZpbGV1cGxvYWQtY2hvb3NlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudWktYnV0dG9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWlucHV0KCkge1xyXG4gIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZXh0YXJlYSB7XHJcbiAgQGluY2x1ZGUgZ3JpZC1pbnB1dCgpO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1yYWRpb2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuICB3aWR0aDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuXHJcbiAgLnVpLXJhZGlvYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAudWktcmFkaW9idXR0b24taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGNhbGVuZGFyLXBhbmVsIHtcclxuICAudWktZGF0ZXBpY2tlcjpub3QoLnVpLWRhdGVwaWNrZXItaW5saW5lKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcm9wZG93bi1wYW5lbCB7XHJcbiAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciAudWktZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgIC51aS1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/form/share.scss':
      /*!************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/form/share.scss ***!
  \************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.grid-cell.in-simulation {\n  border-left-color: #ffc107 !important;\n  border-left-style: solid;\n  border-left-width: 8px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbWFpbnRlbmFuY2VcXGFpcndvcnRoaW5lc3MtY29udHJvbFxcZm9ybVxcc2hhcmUuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHdCQ2tDa0I7RURqQ2xCLGlDQUEyQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9haXJ3b3J0aGluZXNzLWNvbnRyb2wvZm9ybS9zaGFyZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5cclxuLmdyaWQtY2VsbC5pbi1zaW11bGF0aW9uIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAkbWFyZ2luLXZhbHVlICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/search/airworthiness-control-search.component.ts':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/search/airworthiness-control-search.component.ts ***!
  \*********************************************************************************************************/
      /*! exports provided: AirworthinessControlSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AirworthinessControlSearchComponent',
          function() {
            return AirworthinessControlSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _enums_search_category_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../enums/search-category.enum */ './src/app/main/maintenance/airworthiness-control/enums/search-category.enum.ts'
        );
        /* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./search.component */ './src/app/main/maintenance/airworthiness-control/search/search.component.ts'
        );
        /* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./search.service */ './src/app/main/maintenance/airworthiness-control/search/search.service.ts'
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

        var AirworthinessControlSearchComponent = /** @class */ (function(_super) {
          __extends(AirworthinessControlSearchComponent, _super);
          function AirworthinessControlSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            searchService,
            sessionService,
            propertiesService,
            translateService
          ) {
            return (
              _super.call(
                this,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                sessionService,
                searchService,
                propertiesService,
                translateService
              ) || this
            );
          }
          AirworthinessControlSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .MAI_AIRWORTHINESS_CONTROL_SEARCH;
          };
          Object.defineProperty(AirworthinessControlSearchComponent.prototype, 'warehouseVisible', {
            get: function() {
              return true;
            },
            enumerable: true,
            configurable: true
          });
          AirworthinessControlSearchComponent.prototype.openSelection = function() {
            var _this = this;
            var warehouse;
            if (this.searchAssetObject.warehouseCode) {
              var selectedWarehouse = this.wareHouseList.find(function(wareHouse) {
                return wareHouse.value === _this.searchAssetObject.warehouseCode;
              });
              if (selectedWarehouse) {
                warehouse = selectedWarehouse.label;
              }
            }
            var componentId =
              this.selection.length === 1
                ? _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
                    .MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM
                : _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
                    .MAI_AIRWORTHINESS_CONTROL_FOR_FLEET_FORM;
            var objectId = {
              warehouse: warehouse,
              equipmentCodeList: this.selection.map(function(elt) {
                return elt.equipmentCode;
              }),
              familyVariantList: this.selection.map(function(elt) {
                return elt.familyVariant;
              }),
              functionList: this.selection
                .filter(function(elt) {
                  return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].isNullOrEmpty(
                    elt.function
                  );
                })
                .map(function(elt) {
                  return elt.function;
                })
            };
            var data = {
              componentId: componentId,
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AirworthinessControlSearchComponent.prototype.search = function() {
            var _this = this;
            this.resultTableLoading = true;
            _super.prototype.clearResultTable.call(this);
            _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
            var observable =
              this.selectedSearchCategory ===
                _enums_search_category_enum__WEBPACK_IMPORTED_MODULE_13__['SearchCategory'].Asset ||
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].isNullOrEmpty(this.searchFleet)
                ? this.searchService.findAllAssetForAirworthinessControl(this.searchAssetObject)
                : this.searchService.findAllFleetForAirworthinessControl(this.searchFleet);
            observable.subscribe(function(result) {
              _this.resultTableLoading = false;
              _this.resultTable.moreResults = result.moreResults;
              _this.resultTable.list = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                .orEmpty(result.list)
                .filter(function(elt) {
                  return (
                    !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].isNullOrEmpty(
                      elt.equipmentCode
                    ) &&
                    !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].isNullOrEmpty(
                      elt.familyVariant
                    )
                  );
                });
              _super.prototype.differ.call(_this, function() {
                _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
              });
            });
          };
          AirworthinessControlSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-airworthiness-control-search',
                template: __webpack_require__(
                  /*! ./search.component.html */ './src/app/main/maintenance/airworthiness-control/search/search.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _search_service__WEBPACK_IMPORTED_MODULE_15__['SearchService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__['SessionService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__['PropertiesService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            AirworthinessControlSearchComponent
          );
          return AirworthinessControlSearchComponent;
        })(_search_component__WEBPACK_IMPORTED_MODULE_14__['SearchComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/search/schedule-maintenance-search.component.ts':
      /*!********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/search/schedule-maintenance-search.component.ts ***!
  \********************************************************************************************************/
      /*! exports provided: ScheduleMaintenanceSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ScheduleMaintenanceSearchComponent',
          function() {
            return ScheduleMaintenanceSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _enums_search_category_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../enums/search-category.enum */ './src/app/main/maintenance/airworthiness-control/enums/search-category.enum.ts'
        );
        /* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./search.component */ './src/app/main/maintenance/airworthiness-control/search/search.component.ts'
        );
        /* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./search.service */ './src/app/main/maintenance/airworthiness-control/search/search.service.ts'
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

        var ScheduleMaintenanceSearchComponent = /** @class */ (function(_super) {
          __extends(ScheduleMaintenanceSearchComponent, _super);
          function ScheduleMaintenanceSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            searchService,
            sessionService,
            propertiesService,
            translateService
          ) {
            return (
              _super.call(
                this,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                sessionService,
                searchService,
                propertiesService,
                translateService
              ) || this
            );
          }
          ScheduleMaintenanceSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_SEARCH;
          };
          Object.defineProperty(ScheduleMaintenanceSearchComponent.prototype, 'warehouseVisible', {
            get: function() {
              return false;
            },
            enumerable: true,
            configurable: true
          });
          ScheduleMaintenanceSearchComponent.prototype.openSelection = function() {
            var _this = this;
            var warehouse;
            if (this.searchAssetObject.warehouseCode) {
              var selectedWarehouse = this.wareHouseList.find(function(wareHouse) {
                return wareHouse.value === _this.searchAssetObject.warehouseCode;
              });
              if (selectedWarehouse) {
                warehouse = selectedWarehouse.label;
              }
            }
            this.selection.forEach(function(elt) {
              var objectId = {
                warehouse: warehouse,
                equipmentCode: elt.equipmentCode,
                familyVariantCode: elt.familyVariant,
                function: elt.function
              };
              var data = {
                id: _this.tabService.generateId(),
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write,
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
                    .MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM,
                objectId: _this.serializationService.serialize(objectId)
              };
              var labelKey = 'transaction.' + data.componentId;
              _this.tabService.open(_this.tabService.create(data, labelKey, true));
            });
          };
          ScheduleMaintenanceSearchComponent.prototype.search = function() {
            var _this = this;
            this.resultTableLoading = true;
            _super.prototype.clearResultTable.call(this);
            _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
            var observable =
              this.selectedSearchCategory ===
                _enums_search_category_enum__WEBPACK_IMPORTED_MODULE_13__['SearchCategory'].Asset ||
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].isNullOrEmpty(this.searchFleet)
                ? this.searchService.findAllAssetForMaintenancePlanning(this.searchAssetObject)
                : this.searchService.findAllFleetForAirworthinessControl(this.searchFleet);
            observable.subscribe(function(result) {
              _this.resultTableLoading = false;
              _this.resultTable.moreResults = result.moreResults;
              _this.resultTable.list = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                .orEmpty(result.list)
                .filter(function(elt) {
                  return (
                    !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].isNullOrEmpty(
                      elt.equipmentCode
                    ) &&
                    !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].isNullOrEmpty(
                      elt.familyVariant
                    )
                  );
                });
              _super.prototype.differ.call(_this, function() {
                _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
              });
            });
          };
          ScheduleMaintenanceSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-schedule-maintenance-search',
                template: __webpack_require__(
                  /*! ./search.component.html */ './src/app/main/maintenance/airworthiness-control/search/search.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _search_service__WEBPACK_IMPORTED_MODULE_15__['SearchService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__['SessionService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__['PropertiesService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            ScheduleMaintenanceSearchComponent
          );
          return ScheduleMaintenanceSearchComponent;
        })(_search_component__WEBPACK_IMPORTED_MODULE_14__['SearchComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/search/search.component.html':
      /*!*************************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/search/search.component.html ***!
  \*************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "global.search" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show All Actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row search-criteria-header">\r\n                    <aw-manage-search-criteria\r\n                      [componentId]="SEARCH_CRITERIA_ID"\r\n                      (onSelected)="loadSearchCriteria($event)"\r\n                      (onSavedAsked)="saveSearchCriteriaAsked()"\r\n                      [objectFromPage]="criteriaToSave"\r\n                    ></aw-manage-search-criteria>\r\n                    <!-- <i\r\n                      class="fa fa-fw fa-floppy-o aw-icon aw-icon-with-border search-criteria-action"\r\n                      aria-hidden="true"\r\n                      pTooltip="{{ \'global.save\' | translate }}"\r\n                      tooltipPosition="top"\r\n                    ></i>\r\n                    <i\r\n                      class="fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action"\r\n                      aria-hidden="true"\r\n                      pTooltip="{{ \'global.reset\' | translate }}"\r\n                      tooltipPosition="top"\r\n                      (click)="initsearchCriteria()"\r\n                    ></i>-->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <h4 class="section-title">1. {{ componentName + ".category" | translate }}</h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <div class="form-control aw-selectbutton-wrapper">\r\n                        <p-selectButton\r\n                          [(ngModel)]="selectedSearchCategory"\r\n                          [options]="searchCategoryList"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group flex--3"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <h4 class="section-title">2. {{ componentName + ".mainCriteria" | translate }}</h4>\r\n\r\n                <div class="section-content">\r\n                  <!-- ********************************************************************** -->\r\n                  <!-- Fleet -->\r\n                  <!-- ********************************************************************** -->\r\n                  <div *ngIf="selectedSearchCategory === searchCategory.Fleet" class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentName + ".businessPartner" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [options]="businessPartnerList"\r\n                          [(ngModel)]="selectedBusinessPartner"\r\n                          [showClear]="true"\r\n                          placeholder="&nbsp;"\r\n                          (onChange)="onSelectBusinessPartner()"\r\n                          (keyup.enter)="search()"\r\n                          appendTo="body"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentName + ".fleet" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [options]="fleetList"\r\n                          [(ngModel)]="searchFleet"\r\n                          placeholder="&nbsp;"\r\n                          [showClear]="true"\r\n                          (keyup.enter)="search()"\r\n                          appendTo="body"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group flex--2"></div>\r\n                  </div>\r\n\r\n                  <!-- ********************************************************************** -->\r\n                  <!-- Asset -->\r\n                  <!-- ********************************************************************** -->\r\n                  <div *ngIf="selectedSearchCategory === searchCategory.Asset" class="row">\r\n                    <div class="form-group">\r\n                      <div class="form-control aw-selectbutton-wrapper">\r\n                        <p-selectButton\r\n                          [(ngModel)]="selectedSearchAsset"\r\n                          [options]="searchAssetList"\r\n                          (onChange)="onChangeSearchAsset()"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div *ngIf="selectedSearchCategory === searchCategory.Asset" class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentName + ".familyVariant" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [(ngModel)]="searchAssetObject.bireVariantVersion"\r\n                          placeholder="&nbsp;"\r\n                          [showClear]="true"\r\n                          [options]="familyVariantList"\r\n                          (keyup.enter)="search()"\r\n                          appendTo="body"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group flex--2">\r\n                      <label class="form-label"> {{ componentName + ".designation" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" [(ngModel)]="searchAssetObject.designation" class="aw-input" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf="selectedSearchCategory === searchCategory.Asset" class="section">\r\n                <h4 *ngIf="selectedSearchAsset === searchAsset.All" class="section-title">\r\n                  3. {{ componentName + ".otherCriteria" | translate }}\r\n                </h4>\r\n                <h4 *ngIf="selectedSearchAsset === searchAsset.Aircraft" class="section-title">\r\n                  3. {{ componentName + ".aircraftCriteria" | translate }}\r\n                </h4>\r\n                <h4 *ngIf="selectedSearchAsset === searchAsset.Engine" class="section-title">\r\n                  3. {{ componentName + ".engineCriteria" | translate }}\r\n                </h4>\r\n                <h4 *ngIf="selectedSearchAsset === searchAsset.Equipment" class="section-title">\r\n                  3. {{ componentName + ".equipmentCriteria" | translate }}\r\n                </h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div\r\n                      class="form-group"\r\n                      [ngClass]="{\r\n                        \'display--none\':\r\n                          selectedSearchAsset === searchAsset.All || selectedSearchAsset === searchAsset.Equipment\r\n                      }"\r\n                    >\r\n                      <label class="form-label"> {{ componentName + ".registration" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" [(ngModel)]="searchAssetObject.registration" class="aw-input" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label *ngIf="selectedSearchAsset === searchAsset.Engine" class="form-label">\r\n                        {{ componentName + ".esnCode" | translate }}\r\n                      </label>\r\n                      <label *ngIf="selectedSearchAsset === searchAsset.Aircraft" class="form-label">\r\n                        {{ componentName + ".msnCode" | translate }}\r\n                      </label>\r\n                      <label\r\n                        *ngIf="selectedSearchAsset === searchAsset.All || selectedSearchAsset === searchAsset.Equipment"\r\n                        class="form-label"\r\n                      >\r\n                        {{ componentName + ".snCode" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" [(ngModel)]="searchAssetObject.snCode" class="aw-input" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div\r\n                      class="form-group"\r\n                      [ngClass]="{\r\n                        \'display--none\': selectedSearchAsset === searchAsset.Aircraft\r\n                      }"\r\n                    >\r\n                      <label class="form-label"> {{ componentName + ".pnCode" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" [(ngModel)]="searchAssetObject.pnCode" class="aw-input" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div\r\n                      class="form-group"\r\n                      [ngClass]="{\r\n                        \'display--none\':\r\n                          selectedSearchAsset !== searchAsset.All && selectedSearchAsset !== searchAsset.Equipment\r\n                      }"\r\n                    >\r\n                      <label class="form-label"> {{ componentName + ".function" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          [options]="functionList"\r\n                          class="aw-dropdown fixed-width"\r\n                          [(ngModel)]="searchAssetObject.functionCode"\r\n                          placeholder="&nbsp;"\r\n                          [showClear]="true"\r\n                          (keyup.enter)="search()"\r\n                          appendTo="body"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label" *ngIf="selectedSearchAsset === searchAsset.Aircraft">\r\n                        {{ componentName + ".aircraftStatus" | translate }}\r\n                      </label>\r\n                      <label class="form-label" *ngIf="selectedSearchAsset !== searchAsset.Aircraft">\r\n                        {{ componentName + ".operationalStatus" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [options]="operationalStatusList"\r\n                          [(ngModel)]="searchAssetObject.operationalStatusCode"\r\n                          [showClear]="true"\r\n                          placeholder="&nbsp;"\r\n                          (keyup.enter)="search()"\r\n                          appendTo="body"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf="selectedSearchAsset === searchAsset.Aircraft" class="form-group"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf="selectedSearchCategory === searchCategory.Asset" class="section">\r\n                <div class="section-content">\r\n                  <div class="advanced-criteria" [ngClass]="{ \'display--none\': !showAdvancedCriteria }">\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentName + ".assetCode" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" [(ngModel)]="searchAssetObject.assetCode" class="aw-input" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentName + ".owner" | translate }} </label>\r\n\r\n                        <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n                          <div class="form-control-data" (click)="openOwnerDialog()">\r\n                            {{ searchAssetObject.ownerCustomerCode }}\r\n                          </div>\r\n\r\n                          <div *ngIf="searchAssetObject.ownerCustomerCode" class="btn-clear-wrapper">\r\n                            <i\r\n                              class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                              aria-hidden="true"\r\n                              (click)="searchAssetObject.ownerCustomerCode = undefined"\r\n                            ></i>\r\n                          </div>\r\n                          <div class="btn-search-wrapper">\r\n                            <i\r\n                              class="fa fa-fw fa-search aw-icon btn-search"\r\n                              aria-hidden="true"\r\n                              (click)="openOwnerDialog()"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentName + ".operator" | translate }} </label>\r\n\r\n                        <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n                          <div class="form-control-data" (click)="openOperatorDialog()">\r\n                            {{ searchAssetObject.operatorCustomerCode }}\r\n                          </div>\r\n\r\n                          <div *ngIf="searchAssetObject.operatorCustomerCode" class="btn-clear-wrapper">\r\n                            <i\r\n                              class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                              aria-hidden="true"\r\n                              (click)="searchAssetObject.operatorCustomerCode = undefined"\r\n                            ></i>\r\n                          </div>\r\n                          <div class="btn-search-wrapper">\r\n                            <i\r\n                              class="fa fa-fw fa-search aw-icon btn-search"\r\n                              aria-hidden="true"\r\n                              (click)="openOperatorDialog()"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div\r\n                        class="form-group"\r\n                        [ngClass]="{ \'display--none\': selectedSearchAsset !== searchAsset.Engine }"\r\n                      >\r\n                        <label class="form-label"> {{ componentName + ".modelCode" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" [(ngModel)]="searchAssetObject.modelCode" class="aw-input" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngIf="selectedSearchAsset !== searchAsset.Engine" class="form-group"></div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentName + ".mpName" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" [(ngModel)]="searchAssetObject.mpName" class="aw-input" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentName + ".mpRevision" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" [(ngModel)]="searchAssetObject.mpRevision" class="aw-input" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentName + ".location" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="locationList"\r\n                            [(ngModel)]="searchAssetObject.location"\r\n                            placeholder="&nbsp;"\r\n                            [showClear]="true"\r\n                            (keyup.enter)="search()"\r\n                            appendTo="body"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div\r\n                        class="form-group"\r\n                        [ngClass]="{\r\n                          \'display--none\':\r\n                            selectedSearchAsset === searchAsset.Aircraft ||\r\n                            !sessionService.mmModuleActivated ||\r\n                            !warehouseVisible\r\n                        }"\r\n                      >\r\n                        <label class="form-label"> {{ componentName + ".wareHouse" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="wareHouseList"\r\n                            [(ngModel)]="searchAssetObject.warehouseCode"\r\n                            [showClear]="true"\r\n                            placeholder="&nbsp;"\r\n                            (keyup.enter)="search()"\r\n                            appendTo="body"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div\r\n                        *ngIf="\r\n                          selectedSearchAsset === searchAsset.Aircraft ||\r\n                          !sessionService.mmModuleActivated ||\r\n                          !warehouseVisible\r\n                        "\r\n                        class="form-group"\r\n                      ></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row search-criteria-footer">\r\n                    <button mat-button (click)="showAdvancedCriteria = !showAdvancedCriteria">\r\n                      <ng-container *ngIf="showAdvancedCriteria">\r\n                        <mat-icon>remove</mat-icon>\r\n                        {{ "global.collapseCriteria" | translate }}\r\n                      </ng-container>\r\n                      <ng-container *ngIf="!showAdvancedCriteria">\r\n                        <mat-icon>add</mat-icon>\r\n                        {{ "global.expandCriteria" | translate }}\r\n                      </ng-container>\r\n                    </button>\r\n\r\n                    <div class="search-actions">\r\n                      <button\r\n                        type="button"\r\n                        mat-raised-button\r\n                        class="btn-with-spinner"\r\n                        color="primary"\r\n                        (click)="search()"\r\n                        appKeyPress\r\n                        [keyCode]="\'Enter\'"\r\n                        (keyPress)="search()"\r\n                      >\r\n                        <span *ngIf="resultTableLoading" class="lds-hourglass"></span>\r\n                        {{ "global.toSearch" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "global.results" | translate }} ({{ resultTable.list ? resultTable.list.length : 0\r\n                  }}<span *ngIf="resultTable.moreResults">+</span>)\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #ptable\r\n                class="aw-table2"\r\n                [columns]="resultTableCols"\r\n                [value]="resultTable.list"\r\n                [(selection)]="selection"\r\n                [scrollable]="true"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!resultTableLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="resultTableLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selection.length > 0 }">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="aw-table-actions">\r\n                      <button *ngIf="selection.length > 0" type="button" mat-raised-button (click)="openSelection()">\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th class="aw-table-checkbox-wrapper">\r\n                      <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ componentName + "." + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td class="aw-table-checkbox-wrapper">\r\n                      <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ rowData[col.field] }}\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-search-customer\r\n    *ngIf="showOperatorDialog"\r\n    [(display)]="showOperatorDialog"\r\n    [customer-code]="searchAssetObject.operator"\r\n    (onSelected)="onSelectOperator($event)"\r\n  ></aw-dialog-search-customer>\r\n\r\n  <aw-dialog-search-customer\r\n    *ngIf="showOwnerDialog"\r\n    [(display)]="showOwnerDialog"\r\n    [customer-code]="searchAssetObject.owner"\r\n    (onSelected)="onSelectOwner($event)"\r\n  ></aw-dialog-search-customer>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/airworthiness-control/search/search.component.ts':
      /*!***********************************************************************************!*\
  !*** ./src/app/main/maintenance/airworthiness-control/search/search.component.ts ***!
  \***********************************************************************************/
      /*! exports provided: SearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SearchComponent', function() {
          return SearchComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-attribute-constants */ './src/app/shared/constants/bido-attribute-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/lang-constants */ './src/app/shared/constants/lang-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _enums_search_asset_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../enums/search-asset.enum */ './src/app/main/maintenance/airworthiness-control/enums/search-asset.enum.ts'
        );
        /* harmony import */ var _enums_search_category_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../enums/search-category.enum */ './src/app/main/maintenance/airworthiness-control/enums/search-category.enum.ts'
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

        var SearchComponent = /** @class */ (function(_super) {
          __extends(SearchComponent, _super);
          function SearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            searchService,
            propertiesService,
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
                tabService
              ) || this;
            _this.sessionService = sessionService;
            _this.searchService = searchService;
            _this.propertiesService = propertiesService;
            _this.translateService = translateService;
            _this.SEARCH_CRITERIA_ID =
              _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__[
                'AppConstants'
              ].AIRWORTHINESS_STATUS_SEARCH_CRITERIA_ID;
            _this.componentName = 'AirworthinessControlSearchComponent';
            _this.searchAsset = _enums_search_asset_enum__WEBPACK_IMPORTED_MODULE_11__['SearchAsset'];
            _this.searchCategory = _enums_search_category_enum__WEBPACK_IMPORTED_MODULE_12__['SearchCategory'];
            _this.init();
            _this.setResultTableCols();
            _this.setSearchAssetList();
            _this.setSearchCategoryList();
            _this.loadBusinessPartnerList();
            _this.loadFamilyVariantList();
            _this.loadFleetList();
            _this.loadFunctionList();
            _this.loadLocationList();
            _this.loadOperationalStatusList();
            _this.loadWareHouseList();
            return _this;
          }
          SearchComponent.prototype.getTranslateKey = function(key) {
            return _super.prototype.getTranslateKey.call(this, key, this.componentName);
          };
          SearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          SearchComponent.prototype.initsearchCriteria = function() {
            this.searchAssetObject = {
              aircraftTypeSelected: false,
              allAssetTypeSelected: true,
              engineTypeSelected: false,
              equipmentTypeSelected: false
            };
            this.criteriaName = undefined;
            this.searchFleet = undefined;
            this.selectedBusinessPartner = undefined;
            this.selectedSearchAsset = _enums_search_asset_enum__WEBPACK_IMPORTED_MODULE_11__['SearchAsset'].All;
            this.selectedSearchCategory =
              _enums_search_category_enum__WEBPACK_IMPORTED_MODULE_12__['SearchCategory'].Asset;
          };
          SearchComponent.prototype.loadSearchCriteria = function(event) {
            var criteria = event.criteria;
            if (!criteria) {
              this.initsearchCriteria();
              return;
            }
            if (criteria.selectedSearchCategory === this.searchCategory.Fleet) {
              this.criteriaName = event.name;
              this.searchFleet = criteria.searchFleet;
              this.selectedBusinessPartner = criteria.selectedBusinessPartner;
              this.selectedSearchCategory = criteria.selectedSearchCategory;
            } else {
              this.criteriaName = event.name;
              this.searchAssetObject = criteria.searchObject || {};
              this.selectedSearchAsset = criteria.selectedSearchAsset;
              this.selectedSearchCategory = criteria.selectedSearchCategory;
            }
            this.search();
          };
          SearchComponent.prototype.saveSearchCriteriaAsked = function() {
            if (this.selectedSearchCategory === this.searchCategory.Fleet) {
              var criteriaToSave = {
                selectedBusinessPartner: this.selectedBusinessPartner,
                searchFleet: this.searchFleet,
                searchObject: this.searchAssetObject,
                selectedSearchAsset: this.selectedSearchAsset,
                selectedSearchCategory: this.selectedSearchCategory
              };
              this.criteriaToSave = criteriaToSave;
            } else {
              var criteriaToSave = {
                searchObject: this.searchAssetObject,
                selectedSearchAsset: this.selectedSearchAsset,
                selectedSearchCategory: this.selectedSearchCategory
              };
              this.criteriaToSave = criteriaToSave;
            }
          };
          SearchComponent.prototype.onChangeSearchAsset = function() {
            this.searchAssetObject.aircraftTypeSelected =
              this.selectedSearchAsset ===
              _enums_search_asset_enum__WEBPACK_IMPORTED_MODULE_11__['SearchAsset'].Aircraft;
            this.searchAssetObject.allAssetTypeSelected =
              this.selectedSearchAsset === _enums_search_asset_enum__WEBPACK_IMPORTED_MODULE_11__['SearchAsset'].All;
            this.searchAssetObject.engineTypeSelected =
              this.selectedSearchAsset === _enums_search_asset_enum__WEBPACK_IMPORTED_MODULE_11__['SearchAsset'].Engine;
            this.searchAssetObject.equipmentTypeSelected =
              this.selectedSearchAsset ===
              _enums_search_asset_enum__WEBPACK_IMPORTED_MODULE_11__['SearchAsset'].Equipment;
            this.loadFamilyVariantList();
            this.loadOperationalStatusList();
            this.loadWareHouseList();
          };
          SearchComponent.prototype.onSelectBusinessPartner = function() {
            this.loadFleetList();
          };
          SearchComponent.prototype.onSelectOperator = function(operator) {
            this.searchAssetObject.operatorCustomerCode = operator ? operator.customerCode : undefined;
          };
          SearchComponent.prototype.onSelectOwner = function(owner) {
            this.searchAssetObject.ownerCustomerCode = owner ? owner.customerCode : undefined;
          };
          SearchComponent.prototype.openOperatorDialog = function() {
            this.showOperatorDialog = true;
          };
          SearchComponent.prototype.openOwnerDialog = function() {
            this.showOwnerDialog = true;
          };
          SearchComponent.prototype.clearResultTable = function() {
            this.resultTable = { list: [], moreResults: false };
            this.selection = [];
          };
          SearchComponent.prototype.init = function() {
            this.initsearchCriteria();
            this.clearResultTable();
            this.resultTableLoading = false;
            this.businessPartnerList = [];
            this.familyVariantList = [];
            this.fleetList = [];
            this.functionList = [];
            this.locationList = [];
            this.operationalStatusList = [];
            this.wareHouseList = [];
          };
          SearchComponent.prototype.loadBusinessPartnerList = function() {
            var _this = this;
            this.searchService.findAllBidoCustomer().subscribe(function(results) {
              _this.businessPartnerList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils']
                .orEmpty(results)
                .filter(function(customer) {
                  return !!customer.customerCode;
                })
                .map(function(customer) {
                  return {
                    label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_10__['StringUtils'].isNullOrEmpty(
                      customer.customerName
                    )
                      ? customer.customerCode
                      : customer.customerName + ' (' + customer.customerCode + ')',
                    value: customer.customerCode
                  };
                });
            });
          };
          SearchComponent.prototype.loadFamilyVariantList = function() {
            var _this = this;
            var familyFunction;
            if (
              this.selectedSearchAsset ===
              _enums_search_asset_enum__WEBPACK_IMPORTED_MODULE_11__['SearchAsset'].Aircraft
            ) {
              familyFunction =
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_AIRCRAFT_KEY;
            } else if (
              this.selectedSearchAsset === _enums_search_asset_enum__WEBPACK_IMPORTED_MODULE_11__['SearchAsset'].Engine
            ) {
              familyFunction =
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_ENGINE_KEY;
            } else {
              familyFunction = '';
            }
            this.searchService.findAllBireVariantVersionByFamilyFunction(familyFunction).subscribe(function(results) {
              _this.familyVariantList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils']
                .orEmpty(results)
                .filter(function(familyVariant) {
                  return !!familyVariant.familyCode && !!familyVariant.variantCode;
                })
                .map(function(familyVariant) {
                  var label =
                    '' +
                    (familyVariant.familyName || familyVariant.familyCode) +
                    '-' +
                    ('' + (familyVariant.variantName || familyVariant.variantCode));
                  return {
                    label: label,
                    value: familyVariant
                  };
                });
            });
          };
          SearchComponent.prototype.loadFleetList = function() {
            var _this = this;
            var criteria = this.selectedBusinessPartner ? { customerCode: this.selectedBusinessPartner } : {};
            this.searchService.findAllBidoFleetByCriteria(criteria).subscribe(function(results) {
              _this.fleetList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils']
                .orEmpty(results)
                .filter(function(fleet) {
                  return !!fleet.fleetCode;
                })
                .map(function(fleet) {
                  return {
                    label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_10__['StringUtils'].isNullOrEmpty(
                      fleet.fleetName
                    )
                      ? fleet.fleetCode
                      : fleet.fleetCode + ' - ' + fleet.fleetName,
                    value: fleet.fleetId
                  };
                });
            });
          };
          SearchComponent.prototype.loadFunctionList = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__['GenericPropertyConstants']
                  .ITEM_FAMILY_CODE_MAP
              )
              .subscribe(function(results) {
                _this.functionList = _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_9__[
                  'SelectItemUtils'
                ].fromLabelValues(
                  _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils']
                    .orEmpty(results)
                    .filter(function(elt) {
                      return (
                        elt.value !==
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                            'AWPropertiesConstants'
                          ].ITEM_FAMILY_CODE_AIRCRAFT_KEY &&
                        elt.value !==
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                            'AWPropertiesConstants'
                          ].ITEM_FAMILY_CODE_ENGINE_KEY
                      );
                    })
                );
              });
          };
          SearchComponent.prototype.loadLocationList = function() {
            var _this = this;
            this.searchService
              .findAllBidoAttributeByAttributeId(
                _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_3__['BidoAttributeConstants']
                  .ASSET_LOCATION
              )
              .subscribe(function(results) {
                _this.locationList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils']
                  .orEmpty(results)
                  .map(function(location) {
                    return {
                      label:
                        _this.translateService.currentLang ===
                        _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_5__['LangConstants'].FRENCH_CODE
                          ? location.textFr
                          : location.textEn,
                      value: location.attributeValue
                    };
                  });
              });
          };
          SearchComponent.prototype.loadOperationalStatusList = function() {
            var _this = this;
            var mapKey;
            switch (this.selectedSearchAsset) {
              case _enums_search_asset_enum__WEBPACK_IMPORTED_MODULE_11__['SearchAsset'].Aircraft:
                mapKey =
                  _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__['GenericPropertyConstants']
                    .AIRCRAFT_STATUS_MAP;
                break;
              default:
                mapKey =
                  _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__['GenericPropertyConstants']
                    .OPERATIONAL_STATUS_MAP;
                break;
            }
            this.propertiesService.getValue(mapKey).subscribe(function(results) {
              _this.operationalStatusList = _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_9__[
                'SelectItemUtils'
              ].fromLabelValues(_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils'].orEmpty(results));
            });
          };
          SearchComponent.prototype.loadWareHouseList = function() {
            var _this = this;
            if (this.sessionService.mmModuleActivated) {
              this.searchService.findAllWarehouse().subscribe(function(results) {
                _this.wareHouseList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils']
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
            }
          };
          SearchComponent.prototype.setResultTableCols = function() {
            this.resultTableCols = [
              { field: 'familyVariant', alignment: 'left' },
              { field: 'registration', alignment: 'left' },
              { field: 'pnCode', alignment: 'left' },
              { field: 'snCode', alignment: 'left' },
              { field: 'designation', alignment: 'left' },
              { field: 'function', alignment: 'left' },
              { field: 'status', alignment: 'left' }
            ];
          };
          SearchComponent.prototype.setSearchAssetList = function() {
            var _this = this;
            var allKey = 'global.all';
            var aircraftKey = 'global.aircraft';
            var engineKey = 'global.engine';
            var equipmentKey = 'global.equipment';
            this.translateService.get([allKey, aircraftKey, engineKey, equipmentKey]).subscribe(function(results) {
              var allLabel = !!results ? results[allKey] : 'All';
              var aircraftLabel = !!results ? results[aircraftKey] : 'Aircraft';
              var engineLabel = !!results ? results[engineKey] : 'Engine';
              var equipmentLabel = !!results ? results[equipmentKey] : 'Equipment';
              _this.searchAssetList = [
                { label: allLabel, value: _enums_search_asset_enum__WEBPACK_IMPORTED_MODULE_11__['SearchAsset'].All },
                {
                  label: aircraftLabel,
                  value: _enums_search_asset_enum__WEBPACK_IMPORTED_MODULE_11__['SearchAsset'].Aircraft
                },
                {
                  label: engineLabel,
                  value: _enums_search_asset_enum__WEBPACK_IMPORTED_MODULE_11__['SearchAsset'].Engine
                },
                {
                  label: equipmentLabel,
                  value: _enums_search_asset_enum__WEBPACK_IMPORTED_MODULE_11__['SearchAsset'].Equipment
                }
              ];
            });
          };
          SearchComponent.prototype.setSearchCategoryList = function() {
            var _this = this;
            var assetKey = this.getTranslateKey('asset');
            var fleetKey = this.getTranslateKey('fleet');
            this.translateService.get([assetKey, fleetKey]).subscribe(function(results) {
              var assetLabel = !!results ? results[assetKey] : 'Asset';
              var fleetLabel = !!results ? results[fleetKey] : 'Fleet';
              _this.searchCategoryList = [
                {
                  label: assetLabel,
                  value: _enums_search_category_enum__WEBPACK_IMPORTED_MODULE_12__['SearchCategory'].Asset
                },
                {
                  label: fleetLabel,
                  value: _enums_search_category_enum__WEBPACK_IMPORTED_MODULE_12__['SearchCategory'].Fleet
                }
              ];
            });
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('resultsContainerAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            SearchComponent.prototype,
            'resultsContainerAnchor',
            void 0
          );
          return SearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_7__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/procurement-request/procurement-requests-table.service.ts':
      /*!********************************************************************************************!*\
  !*** ./src/app/main/maintenance/procurement-request/procurement-requests-table.service.ts ***!
  \********************************************************************************************/
      /*! exports provided: ProcurementRequestsTableService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ProcurementRequestsTableService',
          function() {
            return ProcurementRequestsTableService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/aircraft-maintenance.api */ './src/app/shared/api/aircraft-maintenance.api.ts'
        );
        /* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/api/am-project-management.api */ './src/app/shared/api/am-project-management.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_procurement_request_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/api/bidt-procurement-request.api */ './src/app/shared/api/bidt-procurement-request.api.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
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

        var ProcurementRequestsTableService = /** @class */ (function(_super) {
          __extends(ProcurementRequestsTableService, _super);
          function ProcurementRequestsTableService(
            http,
            appConfigService,
            procurementRequestApi,
            aMProjectManagementApi,
            aircraftMaintenanceApi,
            translateService
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.procurementRequestApi = procurementRequestApi;
            _this.aMProjectManagementApi = aMProjectManagementApi;
            _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
            _this.translateService = translateService;
            _this.componentName =
              _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__[
                'ComponentConstants'
              ].MAI_PROCUREMENT_REQUESTS_TABLE;
            return _this;
          }
          ProcurementRequestsTableService.prototype.findProcReqItemsAndStockQuantityIndicators = function(
            bidmWorkOrder,
            workPackageDTOIdsTab
          ) {
            var input = {};
            if (!!bidmWorkOrder) {
              input = {
                workOrdersIds: [{ woId: bidmWorkOrder.woId, projectId: bidmWorkOrder.projectId }]
              };
            }
            if (!!workPackageDTOIdsTab && workPackageDTOIdsTab.length > 0) {
              input = __assign({}, input, { workPackagesIds: workPackageDTOIdsTab });
            }
            return _super.prototype.post.call(
              this,
              this.procurementRequestApi.findProcurementRequestStockQuantityIndicators,
              input
            );
          };
          ProcurementRequestsTableService.prototype.findBidmProject = function(projectId) {
            return _super.prototype.post.call(this, this.aMProjectManagementApi.findBidmProject, projectId);
          };
          ProcurementRequestsTableService.prototype.calculateWorkOrderStatus = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.calculateWorkOrderStatus, input);
          };
          ProcurementRequestsTableService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__['AppConfigService'],
                _shared_api_bidt_procurement_request_api__WEBPACK_IMPORTED_MODULE_5__['BidtProcurementRequestApi'],
                _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_4__['AMProjectManagementApi'],
                _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__['AircraftMaintenanceApi'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateService']
              ])
            ],
            ProcurementRequestsTableService
          );
          return ProcurementRequestsTableService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/utils/bido-equipment-utils.ts':
      /*!******************************************************!*\
  !*** ./src/app/shared/utils/bido-equipment-utils.ts ***!
  \******************************************************/
      /*! exports provided: BidoEquipmentUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BidoEquipmentUtils', function() {
          return BidoEquipmentUtils;
        });
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./bido-family-variant-utils */ './src/app/shared/utils/bido-family-variant-utils.ts'
        );

        var BidoEquipmentUtils = /** @class */ (function() {
          function BidoEquipmentUtils() {}
          BidoEquipmentUtils.createAssetName = function(equipment) {
            if (!equipment) {
              return '';
            } else {
              var designation = void 0;
              switch (equipment.equipmentFunction) {
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_AIRCRAFT_KEY:
                  designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                    equipment.registration
                  );
                  break;
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_ENGINE_KEY:
                  designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                    equipment.sn
                  );
                  break;
                default:
                  designation =
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.pnCode) +
                    '/' +
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.sn);
                  break;
              }
              return designation;
            }
          };
          BidoEquipmentUtils.createAircraftRepresentation = function(equipment) {
            var aircraftRepresentation = '';
            if (!equipment) {
              return '';
            } else {
              if (BidoEquipmentUtils.createAssetName(equipment) !== '') {
                aircraftRepresentation =
                  'MSN ' +
                  _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.sn) +
                  ' | ' +
                  BidoEquipmentUtils.createAssetName(equipment);
              }
              if (
                BidoEquipmentUtils.createAssetName(equipment) === '' &&
                _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.sn) !== ''
              ) {
                aircraftRepresentation =
                  'MSN ' + _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.sn);
              }
              return aircraftRepresentation;
            }
          };
          BidoEquipmentUtils.createAssetRepresentation = function(equipment) {
            var assetRepresentation = '';
            if (equipment) {
              var designation = void 0;
              switch (equipment.equipmentFunction) {
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_AIRCRAFT_KEY:
                  assetRepresentation =
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                      equipment.familyVariantCode
                    ) +
                    ' | MSN ' +
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.sn) +
                    ' | ' +
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                      equipment.registration
                    );
                  designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                    equipment.registration
                  );
                  break;
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_ENGINE_KEY:
                  assetRepresentation =
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                      equipment.familyVariantCode
                    ) +
                    ' | MSN ' +
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.sn) +
                    ' | ' +
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                      equipment.registration
                    );
                  designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                    equipment.registration
                  );
                  break;
                default:
                  assetRepresentation =
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                      equipment.familyVariantCode
                    ) +
                    ' | SN ' +
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.sn);
                  designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                    equipment.sn
                  );
                  break;
              }
            }
            return assetRepresentation;
          };
          BidoEquipmentUtils.getBireItemPK = function(equipment) {
            if (
              !!equipment.chapter &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isEmpty(equipment.chapter) &&
              !!equipment.marks &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isEmpty(equipment.marks) &&
              !!equipment.section &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isEmpty(equipment.section) &&
              !!equipment.sheet &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isEmpty(equipment.sheet) &&
              !!equipment.subject &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isEmpty(equipment.subject)
            ) {
              var itemId = {
                familyCode: _bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_2__[
                  'BidoFamilyVariantUtils'
                ].getFamilyCodeFromFamilyVariantCode(equipment.familyVariantCode),
                chapter: equipment.chapter,
                subject: equipment.subject,
                variantCode: _bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_2__[
                  'BidoFamilyVariantUtils'
                ].getVariantCodeFromFamilyVariantCode(equipment.familyVariantCode),
                section: equipment.section,
                sheet: equipment.sheet,
                marks: equipment.marks,
                structureType:
                  _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                    .STRUCTURE_TYPE_IPC_KEY
              };
              return itemId;
            } else {
              return undefined;
            }
          };
          BidoEquipmentUtils.toString = function(asset, withFamilyVariantCode) {
            if (withFamilyVariantCode === void 0) {
              withFamilyVariantCode = true;
            }
            if (!asset) {
              return '';
            }
            var equipmentCode = asset.equipmentCode;
            var equipmentFunction = asset.equipmentFunction;
            var familyVariantCode = withFamilyVariantCode ? asset.familyVariantCode + ' | ' : '';
            var pn = asset.pnCode;
            var registration = asset.registration;
            var sn = asset.sn;
            if (
              equipmentFunction ===
              _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                .ITEM_FAMILY_CODE_AIRCRAFT_KEY
            ) {
              var formattedMsn = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(
                sn
              )
                ? 'MSN ' + sn
                : '';
              var formattedRegistration = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__[
                'StringUtils'
              ].isNullOrEmpty(registration)
                ? ' | ' + registration
                : '';
              return '' + familyVariantCode + formattedMsn + formattedRegistration;
            } else if (
              equipmentFunction ===
              _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                .ITEM_FAMILY_CODE_ENGINE_KEY
            ) {
              var formattedEsn = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(
                sn
              )
                ? 'ESN ' + sn
                : '';
              return '' + familyVariantCode + formattedEsn;
            } else {
              if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(pn)) {
                if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(sn)) {
                  return 'P/N ' + pn + ' | S/N ' + sn;
                } else {
                  return 'P/N ' + pn;
                }
              } else if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(sn)) {
                return 'S/N ' + sn;
              } else {
                return _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipmentCode);
              }
            }
          };
          return BidoEquipmentUtils;
        })();

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
//# sourceMappingURL=maintenance-airworthiness-control-airworthiness-control-module.js.map
