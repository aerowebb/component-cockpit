(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['flight-operations-flight-operations-module'],
  {
    /***/ './node_modules/primeng/dialog.js':
      /*!****************************************!*\
  !*** ./node_modules/primeng/dialog.js ***!
  \****************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* Shorthand */

        function __export(m) {
          for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
        Object.defineProperty(exports, '__esModule', { value: true });
        __export(
          __webpack_require__(/*! ./components/dialog/dialog */ './node_modules/primeng/components/dialog/dialog.js')
        );

        /***/
      },

    /***/ './node_modules/primeng/keyfilter.js':
      /*!*******************************************!*\
  !*** ./node_modules/primeng/keyfilter.js ***!
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
            /*! ./components/keyfilter/keyfilter */ './node_modules/primeng/components/keyfilter/keyfilter.js'
          )
        );

        /***/
      },

    /***/ './node_modules/primeng/message.js':
      /*!*****************************************!*\
  !*** ./node_modules/primeng/message.js ***!
  \*****************************************/
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
            /*! ./components/message/message */ './node_modules/primeng/components/message/message.js'
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

    /***/ './src/app/main/flight-operations/flight-operations.module.ts':
      /*!********************************************************************!*\
  !*** ./src/app/main/flight-operations/flight-operations.module.ts ***!
  \********************************************************************/
      /*! exports provided: FlightOperationsModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FlightOperationsModule', function() {
          return FlightOperationsModule;
        });
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/fesm5/common.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/calendar */ './node_modules/primeng/calendar.js'
        );
        /* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_calendar__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/chart */ './node_modules/primeng/chart.js'
        );
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_chart__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/checkbox */ './node_modules/primeng/checkbox.js'
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/dialog */ './node_modules/primeng/dialog.js'
        );
        /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dialog__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/inputtextarea */ './node_modules/primeng/inputtextarea.js'
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/keyfilter */ './node_modules/primeng/keyfilter.js'
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/message */ './node_modules/primeng/message.js'
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_message__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! primeng/radiobutton */ './node_modules/primeng/radiobutton.js'
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10__
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
        /* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! primeng/tristatecheckbox */ './node_modules/primeng/tristatecheckbox.js'
        );
        /* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_14__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../shared/components/component-sidebar/component-sidebar.mdule */ './src/app/shared/components/component-sidebar/component-sidebar.mdule.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_operational_config_dialog_search_operational_config_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../shared/components/dialog-search-operational-config/dialog-search-operational-config.module */ './src/app/shared/components/dialog-search-operational-config/dialog-search-operational-config.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../shared/components/dialog-status/dialog-status.module */ './src/app/shared/components/dialog-status/dialog-status.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_work_package_dialog_work_package_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../shared/components/dialog-work-package/dialog-work-package.module */ './src/app/shared/components/dialog-work-package/dialog-work-package.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _engineering_management_functional_location_search_functional_location_search_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../engineering-management/functional-location-search/functional-location-search.service */ './src/app/main/engineering-management/functional-location-search/functional-location-search.service.ts'
        );
        /* harmony import */ var _mission_form_dialog_flights_asset_popup_dialog_flights_asset_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./mission-form/dialog-flights-asset-popup/dialog-flights-asset-popup.component */ './src/app/main/flight-operations/mission-form/dialog-flights-asset-popup/dialog-flights-asset-popup.component.ts'
        );
        /* harmony import */ var _mission_form_dialog_flights_popup_dialog_flights_popup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./mission-form/dialog-flights-popup/dialog-flights-popup.component */ './src/app/main/flight-operations/mission-form/dialog-flights-popup/dialog-flights-popup.component.ts'
        );
        /* harmony import */ var _mission_form_mission_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./mission-form/mission-form.component */ './src/app/main/flight-operations/mission-form/mission-form.component.ts'
        );
        /* harmony import */ var _mission_form_mission_form_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./mission-form/mission-form.service */ './src/app/main/flight-operations/mission-form/mission-form.service.ts'
        );
        /* harmony import */ var _mission_form_mission_table_remaining_values_mission_table_remaining_values_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./mission-form/mission-table-remaining-values/mission-table-remaining-values.component */ './src/app/main/flight-operations/mission-form/mission-table-remaining-values/mission-table-remaining-values.component.ts'
        );
        /* harmony import */ var _mission_search_mission_search_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./mission-search/mission-search.component */ './src/app/main/flight-operations/mission-search/mission-search.component.ts'
        );
        /* harmony import */ var _mission_search_mission_search_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./mission-search/mission-search.service */ './src/app/main/flight-operations/mission-search/mission-search.service.ts'
        );
        /* harmony import */ var _operation_search_dialog_operation_dialog_operation_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./operation-search/dialog-operation/dialog-operation.component */ './src/app/main/flight-operations/operation-search/dialog-operation/dialog-operation.component.ts'
        );
        /* harmony import */ var _operation_search_operation_search_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./operation-search/operation-search.component */ './src/app/main/flight-operations/operation-search/operation-search.component.ts'
        );
        /* harmony import */ var _operation_search_operation_search_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./operation-search/operation-search.service */ './src/app/main/flight-operations/operation-search/operation-search.service.ts'
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

        var OTHER_LIBS_MODULES = [
          primeng_calendar__WEBPACK_IMPORTED_MODULE_2__['CalendarModule'],
          primeng_chart__WEBPACK_IMPORTED_MODULE_3__['ChartModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__['CheckboxModule'],
          primeng_dialog__WEBPACK_IMPORTED_MODULE_5__['DialogModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__['DropdownModule'],
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__['InputTextareaModule'],
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10__['RadioButtonModule'],
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11__['SplitButtonModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_12__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__['TooltipModule'],
          primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_14__['TriStateCheckboxModule'],
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_8__['KeyFilterModule'],
          primeng_message__WEBPACK_IMPORTED_MODULE_9__['MessageModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_dialog_search_operational_config_dialog_search_operational_config_module__WEBPACK_IMPORTED_MODULE_19__[
            'DialogSearchOperationalConfigModule'
          ],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_23__['TableModule']
        ];
        var COMPONENTS = [
          _mission_form_dialog_flights_popup_dialog_flights_popup_component__WEBPACK_IMPORTED_MODULE_27__[
            'DialogFlightPopupComponent'
          ],
          _mission_form_dialog_flights_asset_popup_dialog_flights_asset_popup_component__WEBPACK_IMPORTED_MODULE_26__[
            'DialogFlightAssetPopupComponent'
          ],
          _operation_search_dialog_operation_dialog_operation_component__WEBPACK_IMPORTED_MODULE_33__[
            'DialogOperationComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _operation_search_operation_search_component__WEBPACK_IMPORTED_MODULE_34__['OperationSearchComponent'],
          _mission_search_mission_search_component__WEBPACK_IMPORTED_MODULE_31__['MissionSearchComponent'],
          _mission_form_mission_form_component__WEBPACK_IMPORTED_MODULE_28__['MissionFormComponent'],
          _mission_form_mission_table_remaining_values_mission_table_remaining_values_component__WEBPACK_IMPORTED_MODULE_30__[
            'MissionTableRemainingValuesComponent'
          ]
        ];
        var SERVICES = [
          _operation_search_operation_search_service__WEBPACK_IMPORTED_MODULE_35__['OperationSearchService'],
          _mission_search_mission_search_service__WEBPACK_IMPORTED_MODULE_32__['MissionSearchService'],
          _mission_form_mission_form_service__WEBPACK_IMPORTED_MODULE_29__['MissionFormService'],
          _engineering_management_functional_location_search_functional_location_search_service__WEBPACK_IMPORTED_MODULE_25__[
            'FunctionalLocationSearchService'
          ]
        ];
        var FlightOperationsModule = /** @class */ (function() {
          function FlightOperationsModule() {}
          FlightOperationsModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_15__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_16__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_17__['AppCommonSharedModule'],
                    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_22__['ModalModule'],
                    _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_18__[
                      'ComponentSidebarModule'
                    ],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_24__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS),
                    _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_20__[
                      'DialogStatusModule'
                    ]
                  ],
                  OTHER_LIBS_MODULES,
                  INTERNAL_MODULES,
                  [
                    _shared_components_dialog_work_package_dialog_work_package_module__WEBPACK_IMPORTED_MODULE_21__[
                      'DialogWorkPackageModule'
                    ]
                  ]
                ),
                providers: __spread(SERVICES, [_angular_common__WEBPACK_IMPORTED_MODULE_0__['DatePipe']])
              })
            ],
            FlightOperationsModule
          );
          return FlightOperationsModule;
        })();

        /***/
      },

    /***/ './src/app/main/flight-operations/mission-form/dialog-flights-asset-popup/dialog-flights-asset-popup.component.html':
      /*!**************************************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/mission-form/dialog-flights-asset-popup/dialog-flights-asset-popup.component.html ***!
  \**************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".familyVariantCode" | translate }} </label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              appendTo="body"\r\n              class="aw-dropdown fixed-width"\r\n              placeholder="&nbsp;"\r\n              [options]="familyVariants"\r\n              [(ngModel)]="selectedFamilyVariantCode"\r\n              (onChange)="loadAssets()"\r\n              [showClear]="true"\r\n            ></p-dropdown>\r\n            <!-- <input type="text" class="aw-input" [(ngModel)]="selectFlight.familyVariantCode" [disabled]="true" /> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".chronoNumber" | translate }} </label>\r\n\r\n          <div class="form-control">\r\n            <input type="text" class="aw-input" [(ngModel)]="selectFlight.chronoNumber" [disabled]="true" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".flightStatus" | translate }} </label>\r\n\r\n          <div class="form-control">\r\n            <input type="text" class="aw-input" [(ngModel)]="selectFlight.flightStatus" [disabled]="true" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".startDate" | translate }} </label>\r\n\r\n          <div class="form-control">\r\n            <input type="text" class="aw-input" [(ngModel)]="startDate" [disabled]="true" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".endDate" | translate }} </label>\r\n\r\n          <div class="form-control">\r\n            <input type="text" class="aw-input" [(ngModel)]="endDate" [disabled]="true" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".asset" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              appendTo="body"\r\n              class="aw-dropdown fixed-width"\r\n              placeholder="&nbsp;"\r\n              [showClear]="true"\r\n              [options]="selectFlight.asset"\r\n              [(ngModel)]="selectedAssetValue"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="add()"\r\n      [disabled]="selectFlight.familyVariantCode === undefined || selectFlight.familyVariantCode === null"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/flight-operations/mission-form/dialog-flights-asset-popup/dialog-flights-asset-popup.component.ts':
      /*!************************************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/mission-form/dialog-flights-asset-popup/dialog-flights-asset-popup.component.ts ***!
  \************************************************************************************************************************/
      /*! exports provided: DialogFlightAssetPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogFlightAssetPopupComponent',
          function() {
            return DialogFlightAssetPopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _mission_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../mission-form.service */ './src/app/main/flight-operations/mission-form/mission-form.service.ts'
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

        var DialogFlightAssetPopupComponent = /** @class */ (function(_super) {
          __extends(DialogFlightAssetPopupComponent, _super);
          function DialogFlightAssetPopupComponent(missionFormService, dateService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'DialogFlightAssetPopupComponent'
              ) || this;
            _this.missionFormService = missionFormService;
            _this.dateService = dateService;
            // tslint:disable-next-line:no-any
            _this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.showOperationTableDialog = false;
            _this.familyVariants = [];
            return _this;
          }
          DialogFlightAssetPopupComponent.prototype.ngOnInit = function() {
            if (!this.selectFlight) {
              this.selectFlight = {};
            } else {
              this.loadFamilyVariant();
              this.startDate = this.dateService.dateWithHourToString(this.selectFlight.startDate);
              this.endDate = this.dateService.dateWithHourToString(this.selectFlight.endDate);
            }
          };
          DialogFlightAssetPopupComponent.prototype.loadFamilyVariant = function() {
            var _this = this;
            this.missionFormService
              .getFamilyVariantCodeMap(
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_AIRCRAFT_KEY
              )
              .subscribe(function(results) {
                results.forEach(function(variantElement) {
                  if (variantElement.variantCode !== '') {
                    _this.familyVariants.push({
                      label: variantElement.familyCode + '-' + variantElement.variantCode,
                      value: variantElement.familyCode + '-' + variantElement.variantCode
                    });
                  }
                });
                _this.selectedFamilyVariantCode = _this.selectFlight.familyVariantCode
                  ? _this.selectFlight.familyVariantCode
                  : undefined;
                _this.loadAssets();
              });
          };
          DialogFlightAssetPopupComponent.prototype.loadAssets = function() {
            var _this = this;
            if (!!this.selectedFamilyVariantCode) {
              var familyVariantCode = {
                familyVariantCode: this.selectedFamilyVariantCode
              };
              this.missionFormService.getAssetListBySearchCriteria(familyVariantCode).subscribe(function(result) {
                var labelValue = [];
                result.forEach(function(res) {
                  if (!!res) {
                    labelValue.push({
                      label: res.label,
                      value: res.value
                    });
                  }
                });
                _this.selectFlight.asset = labelValue;
                _this.selectFlight.asset.forEach(function(res) {
                  if (_this.selectFlight.assetCodeText && _this.selectFlight.assetCodeText === res.label) {
                    _this.selectedAssetValue = res.value;
                  }
                });
              });
            } else if (this.selectedFamilyVariantCode === null) {
              this.selectFlight.asset = [];
              this.selectedAssetValue = undefined;
            }
          };
          DialogFlightAssetPopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogFlightAssetPopupComponent.prototype.add = function() {
            if (this.selectedFamilyVariantCode !== undefined) {
              this.selectFlight.familyVariantCode = this.selectedFamilyVariantCode;
              this.selectFlight.assetCodeText = this.selectedAssetValue;
              this.onAdded.emit(this.selectFlight);
              this.display = false;
            }
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('editFlightSelect'),
              __metadata('design:type', Object)
            ],
            DialogFlightAssetPopupComponent.prototype,
            'selectFlight',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogFlightAssetPopupComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogFlightAssetPopupComponent.prototype,
            'onAdded',
            void 0
          );
          DialogFlightAssetPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-flights-asset-popup',
                template: __webpack_require__(
                  /*! ./dialog-flights-asset-popup.component.html */ './src/app/main/flight-operations/mission-form/dialog-flights-asset-popup/dialog-flights-asset-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _mission_form_service__WEBPACK_IMPORTED_MODULE_5__['MissionFormService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__['DateService']
              ])
            ],
            DialogFlightAssetPopupComponent
          );
          return DialogFlightAssetPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/flight-operations/mission-form/dialog-flights-popup/dialog-flights-popup.component.html':
      /*!**************************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/mission-form/dialog-flights-popup/dialog-flights-popup.component.html ***!
  \**************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n          <label class="form-label">{{ getComponentName() + ".numberOfFlights" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              appendTo="body"\r\n              [showClear]="true"\r\n              class="aw-dropdown fixed-width"\r\n              placeholder="&nbsp;"\r\n              [options]="numberOfFlights"\r\n              [(ngModel)]="popupFields.nbFlightsToCreate"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="add()"\r\n      [disabled]="popupFields.nbFlightsToCreate === undefined || popupFields.nbFlightsToCreate === null"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/flight-operations/mission-form/dialog-flights-popup/dialog-flights-popup.component.ts':
      /*!************************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/mission-form/dialog-flights-popup/dialog-flights-popup.component.ts ***!
  \************************************************************************************************************/
      /*! exports provided: DialogFlightPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogFlightPopupComponent',
          function() {
            return DialogFlightPopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _mission_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../mission-form.service */ './src/app/main/flight-operations/mission-form/mission-form.service.ts'
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

        var DialogFlightPopupComponent = /** @class */ (function(_super) {
          __extends(DialogFlightPopupComponent, _super);
          function DialogFlightPopupComponent(missionFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'DialogFlightPopupComponent'
              ) || this;
            _this.missionFormService = missionFormService;
            // tslint:disable-next-line:no-any
            _this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.showOperationTableDialog = false;
            _this.familyVariants = [];
            _this.numberOfFlights = [];
            _this.loadDropDowns();
            return _this;
          }
          DialogFlightPopupComponent.prototype.ngOnInit = function() {
            if (!this.popupFields) {
              this.popupFields = {};
            }
          };
          DialogFlightPopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogFlightPopupComponent.prototype.loadDropDowns = function() {
            var _this = this;
            this.missionFormService
              .getFamilyVariantCodeMap(
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_AIRCRAFT_KEY
              )
              .subscribe(function(results) {
                results.forEach(function(variantElement) {
                  if (variantElement.variantCode !== '') {
                    _this.familyVariants.push({
                      label: variantElement.familyCode + '-' + variantElement.variantCode,
                      value: variantElement.familyCode + '-' + variantElement.variantCode
                    });
                  }
                });
              });
            var numberOfFlights = 20;
            for (var i = 1; i <= numberOfFlights; i++) {
              var labelValue = {
                label: i.toString(),
                value: i.toString()
              };
              this.numberOfFlights.push(labelValue);
            }
          };
          DialogFlightPopupComponent.prototype.add = function() {
            if (this.popupFields.nbFlightsToCreate) {
              this.onAdded.emit(this.popupFields);
              this.display = false;
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('missingFields'));
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogFlightPopupComponent.prototype,
            'popupFields',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogFlightPopupComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogFlightPopupComponent.prototype,
            'onAdded',
            void 0
          );
          DialogFlightPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-flights-popup',
                template: __webpack_require__(
                  /*! ./dialog-flights-popup.component.html */ './src/app/main/flight-operations/mission-form/dialog-flights-popup/dialog-flights-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _mission_form_service__WEBPACK_IMPORTED_MODULE_4__['MissionFormService']
              ])
            ],
            DialogFlightPopupComponent
          );
          return DialogFlightPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/flight-operations/mission-form/mission-form.component.html':
      /*!*********************************************************************************!*\
  !*** ./src/app/main/flight-operations/mission-form/mission-form.component.html ***!
  \*********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="!isCreateOpenMode && componentData && componentData.objectId" class="page-subtitle">\r\n          - {{ serializationService.deserialize(componentData.objectId)["missionCode"] }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button *ngIf="isReadOpenMode && hasUpdateAccessRight" type="button" mat-raised-button (click)="editMissionFrom()">\r\n      {{ "global.edit" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode && !isCreateOpenMode"\r\n      color="warn"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="cancelMissionFrom()"\r\n    >\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="saveMissionFrom()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button *ngIf="isReadOpenMode && !isCreateOpenMode" type="button" mat-menu-item (click)="reloadMissionFrom()">\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n\r\n      <button id="updates" mat-menu-item (click)="openStatusUpdatesPopup()">\r\n        {{ "global.updates" | translate }}\r\n      </button>\r\n\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n        <!-- Home -->\r\n        <mat-tab id="homeTab">\r\n          <ng-template mat-tab-label>\r\n            {{ "home" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ "page.mainData" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-cell-content">\r\n                  <div class="column">\r\n                    <div class="row">\r\n                      <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                        <label class="form-label"> {{ componentData.componentId + ".code" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            maxlength="50"\r\n                            [(ngModel)]="missionFieldData.missionCode"\r\n                            [disabled]="isReadOpenMode || !isCreateOpenMode"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                        <label class="form-label"> {{ componentData.componentId + ".type" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            appendTo="body"\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="missionTypeList"\r\n                            [(ngModel)]="missionFieldData.missionType"\r\n                            [showClear]="true"\r\n                            placeholder="&nbsp;"\r\n                            [disabled]="isReadOpenMode"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ componentData.componentId + ".number" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [(ngModel)]="missionFieldData.missionNumber"\r\n                            [disabled]="isReadOpenMode"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div id="operatorCode" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".operator" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="flightCustomerList"\r\n                            [(ngModel)]="missionFieldData.customerOperatorCode"\r\n                            [disabled]="isReadOpenMode"\r\n                            [showClear]="true"\r\n                            placeholder="&nbsp;"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="row">\r\n                      <div class="form-group flex--2">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".missionDescription" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <textarea\r\n                            class="aw-textarea"\r\n                            [rows]="3"\r\n                            pInputTextarea\r\n                            [(ngModel)]="missionFieldData.missionDescription"\r\n                            maxlength="300"\r\n                            [disabled]="isReadOpenMode"\r\n                          ></textarea>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group flex--2">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".missionDetails" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <textarea\r\n                            class="aw-textarea"\r\n                            [rows]="3"\r\n                            pInputTextarea\r\n                            [(ngModel)]="missionFieldData.missionDetails"\r\n                            maxlength="300"\r\n                            [disabled]="isReadOpenMode"\r\n                          ></textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-row">\r\n            <div class="grid-cell--5">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ componentData.componentId + ".locations" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section section-locations">\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ componentData.componentId + ".departure" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              appendTo="body"\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="flightLocationList"\r\n                              [(ngModel)]="missionFieldData.departureLocation"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ componentData.componentId + ".arrival" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              appendTo="body"\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="flightLocationList"\r\n                              [(ngModel)]="missionFieldData.arrivalLocation"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class="row">\r\n                        <div class="form-group flex--2 section-locations">\r\n                          <label class="form-label"> {{ componentData.componentId + ".timeZone" | translate }} </label>\r\n\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              appendTo="body"\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="timeZoneList"\r\n                              [(ngModel)]="selectedTimeZone"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                              (onChange)="updateMissionDates()"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell--7">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ componentData.componentId + ".schedule" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label"> {{ componentData.componentId + ".startDate" | translate }} </label>\r\n\r\n                          <div class="form-control">\r\n                            <p-calendar\r\n                              showButtonBar="true"\r\n                              [monthNavigator]="true"\r\n                              [yearNavigator]="true"\r\n                              [yearRange]="sessionService.calendarYearRange"\r\n                              showTime="true"\r\n                              class="aw-calendar"\r\n                              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                              [locale]="sessionService.calendarFormat"\r\n                              [(ngModel)]="missionFieldData.startDate"\r\n                              [disabled]="isReadOpenMode"\r\n                              (onSelect)="onSelectMissionDate()"\r\n                              (onInput)="onSelectMissionDate()"\r\n                              appendTo="body"\r\n                            ></p-calendar>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ componentData.componentId + ".missionDuration" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              #missionDuration="ngModel"\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="missionFieldData.missionDuration"\r\n                              pInputText\r\n                              [pKeyFilter]="inputValidationService.validatorOfNumber()"\r\n                              [pValidateOnly]="true"\r\n                              maxlength="10"\r\n                              (keypress)="maxLengthCheck($event, missionFieldData.missionDuration)"\r\n                              [disabled]="isReadOpenMode"\r\n                            />\r\n                            <p-message\r\n                              *ngIf="missionDuration.invalid && (missionDuration.dirty || missionDuration.touched)"\r\n                              severity="error"\r\n                              [text]="inputValidationService.formatOfNumber()"\r\n                            ></p-message>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ componentData.componentId + ".periodicity" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              appendTo="body"\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="periodicityList"\r\n                              [(ngModel)]="missionFieldData.periodicityType"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label"> {{ componentData.componentId + ".endDate" | translate }} </label>\r\n\r\n                          <div class="form-control">\r\n                            <p-calendar\r\n                              showButtonBar="true"\r\n                              [monthNavigator]="true"\r\n                              [yearNavigator]="true"\r\n                              [yearRange]="sessionService.calendarYearRange"\r\n                              showTime="true"\r\n                              class="aw-calendar"\r\n                              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                              [locale]="sessionService.calendarFormat"\r\n                              [(ngModel)]="missionFieldData.endDate"\r\n                              [disabled]="isReadOpenMode"\r\n                              (onSelect)="onSelectMissionDate()"\r\n                              (onInput)="onSelectMissionDate()"\r\n                              appendTo="body"\r\n                            ></p-calendar>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ componentData.componentId + ".cycleNumber" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              #cycleNumber="ngModel"\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="missionFieldData.cycleNumber"\r\n                              pInputText\r\n                              [pKeyFilter]="inputValidationService.validatorOfNumber()"\r\n                              [pValidateOnly]="true"\r\n                              maxlength="10"\r\n                              (keypress)="maxLengthCheck($event, missionFieldData.cycleNumber)"\r\n                              [disabled]="isReadOpenMode"\r\n                            />\r\n                            <p-message\r\n                              *ngIf="cycleNumber.invalid && (cycleNumber.dirty || cycleNumber.touched)"\r\n                              severity="error"\r\n                              [text]="inputValidationService.formatOfNumber()"\r\n                            ></p-message>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ componentData.componentId + ".periodicityLimitDate" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <p-calendar\r\n                              showButtonBar="true"\r\n                              [monthNavigator]="true"\r\n                              [yearNavigator]="true"\r\n                              [yearRange]="sessionService.calendarYearRange"\r\n                              class="aw-calendar"\r\n                              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                              [locale]="sessionService.calendarFormat"\r\n                              [(ngModel)]="missionFieldData.periodicityLimitDate"\r\n                              [disabled]="isReadOpenMode"\r\n                              appendTo="body"\r\n                            ></p-calendar>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-row">\r\n            <div class="grid-cell--5">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ componentData.componentId + ".operation" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label"> {{ componentData.componentId + ".operation" | translate }} </label>\r\n\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              appendTo="body"\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="operationCode"\r\n                              [(ngModel)]="missionFieldData.operationCode"\r\n                              [disabled]="isReadOpenMode"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".operationalMissionCode" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              appendTo="body"\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="operationalMissionList"\r\n                              [(ngModel)]="missionFieldData.operationalMissionCode"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="grid-cell--7">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ componentData.componentId + ".conditions" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ componentData.componentId + ".environment" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <textarea\r\n                              class="aw-textarea"\r\n                              [rows]="3"\r\n                              pInputTextarea\r\n                              maxlength="300"\r\n                              [(ngModel)]="missionFieldData.environment"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></textarea>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ componentData.componentId + ".missionComment" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <textarea\r\n                              class="aw-textarea"\r\n                              [rows]="3"\r\n                              pInputTextarea\r\n                              maxlength="300"\r\n                              [(ngModel)]="missionFieldData.missionComment"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></textarea>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab id="flightsTab">\r\n          <ng-template mat-tab-label>\r\n            {{ "global.flights" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row" *ngIf="!isCreateOpenMode">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ "global.flights" | translate }} ({{ flightTabTableCols ? flightTableData.length : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    #ptableFlight\r\n                    class="aw-table2"\r\n                    [columns]="flightTabTableCols"\r\n                    [value]="flightTableData"\r\n                    [(selection)]="selectedFlights"\r\n                    dataKey="chronoNumber"\r\n                    [scrollable]="true"\r\n                  >\r\n                    <ng-template pTemplate="emptymessage">\r\n                      <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                      <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                        <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                        <div class="lds-hourglass"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="caption">\r\n                      <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedFlights.length > 0 }">\r\n                        <div class="aw-table-global-filter">\r\n                          <label class="aw-table-global-filter-label">\r\n                            <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableFlightGlobalFilter\r\n                            class="aw-table-global-filter-input"\r\n                            type="text"\r\n                            placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                            (input)="ptableFlight.filterGlobal($event.target.value, \'contains\')"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class="aw-table-actions">\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedFlights.length > 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteFlights()"\r\n                          >\r\n                            <span>{{ "global.delete" | translate }}</span>\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedFlights.length === 1 && isFlightEditable()"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="editFlights()"\r\n                          >\r\n                            <span>{{ "global.edit" | translate }}</span>\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedFlights.length === 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="createFlightData()"\r\n                          >\r\n                            <span>{{ "global.add" | translate }}</span>\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="selectedFlights.length > 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openFlightForm(selectedFlights)"\r\n                          >\r\n                            <span>{{ "global.open" | translate }}</span>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col class="aw-table-checkbox-wrapper" />\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        <col class="row-expand-wrapper" />\r\n                        <col class="row-action-wrapper" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th class="aw-table-checkbox-wrapper">\r\n                          <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th\r\n                          pResizableColumn\r\n                          *ngFor="let col of columns"\r\n                          [ngStyle]="{ \'text-align\': col.alignment, width: col.width }"\r\n                        >\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </th>\r\n                        <th class="row-expand-wrapper"></th>\r\n                        <th class="row-action-wrapper"></th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                      <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                        <td class="aw-table-checkbox-wrapper">\r\n                          <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td\r\n                          *ngFor="let col of columns"\r\n                          [ngSwitch]="col.field"\r\n                          [ngStyle]="{ \'text-align\': col.alignment, width: col.width }"\r\n                        >\r\n                          <span *ngSwitchCase="\'startDate\'"> {{ rowData[col.field] | date: "yyyy/MM/dd HH:mm" }} </span>\r\n                          <span *ngSwitchCase="\'endDate\'"> {{ rowData[col.field] | date: "yyyy/MM/dd HH:mm" }} </span>\r\n                          <a *ngSwitchCase="\'chronoNumber\'" (click)="openFlightForm([rowData])">\r\n                            {{ rowData[col.field] }}\r\n                          </a>\r\n                          <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                        </td>\r\n                        <td class="row-expand-wrapper" [pRowToggler]="rowData">\r\n                          <i\r\n                            class="fa fa-fw aw-icon aw-icon-with-border"\r\n                            [ngClass]="rowData._expand ? \'fa-minus\' : \'fa-plus\'"\r\n                            aria-hidden="true"\r\n                            pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                            tooltipPosition="top"\r\n                            (click)="toggleExpandCollapse(rowData)"\r\n                          ></i>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                    <ng-template pTemplate="rowexpansion" let-rowData let-columns="columns">\r\n                      <tr class="row-expanded" *ngIf="rowData._expand">\r\n                        <td [attr.colspan]="columns.length + 2">\r\n                          <div class="row">\r\n                            <div class="form-group">\r\n                              <label class="form-label">\r\n                                {{ getComponentName() + ".engineStartDate" | translate }}\r\n                              </label>\r\n                              <div class="form-control">\r\n                                <p-calendar\r\n                                  showButtonBar="true"\r\n                                  [monthNavigator]="true"\r\n                                  [yearNavigator]="true"\r\n                                  [yearRange]="sessionService.calendarYearRange"\r\n                                  appendTo="body"\r\n                                  class="aw-calendar"\r\n                                  [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                                  [locale]="sessionService.calendarFormat"\r\n                                  [(ngModel)]="rowData.engineStartDate"\r\n                                  [disabled]="true"\r\n                                ></p-calendar>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group">\r\n                              <label class="form-label">\r\n                                {{ getComponentName() + ".engineStopDate" | translate }}\r\n                              </label>\r\n\r\n                              <div class="form-control">\r\n                                <p-calendar\r\n                                  showButtonBar="true"\r\n                                  [monthNavigator]="true"\r\n                                  [yearNavigator]="true"\r\n                                  [yearRange]="sessionService.calendarYearRange"\r\n                                  appendTo="body"\r\n                                  class="aw-calendar"\r\n                                  [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                                  [locale]="sessionService.calendarFormat"\r\n                                  [(ngModel)]="rowData.engineStopDate"\r\n                                  [disabled]="true"\r\n                                ></p-calendar>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group">\r\n                              <label class="form-label">\r\n                                {{ getComponentName() + ".fuelUsed" | translate }}\r\n                              </label>\r\n\r\n                              <div class="form-control">\r\n                                <input class="aw-input" type="text" [(ngModel)]="rowData.fuelUsed" [disabled]="true" />\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group">\r\n                              <label class="form-label">\r\n                                {{ getComponentName() + ".passengers" | translate }}\r\n                              </label>\r\n\r\n                              <div class="form-control">\r\n                                <input\r\n                                  class="aw-input"\r\n                                  type="text"\r\n                                  [(ngModel)]="rowData.passengers"\r\n                                  [disabled]="true"\r\n                                />\r\n                              </div>\r\n                            </div>\r\n                            <div class="form-group">\r\n                              <label class="form-label">\r\n                                {{ getComponentName() + ".shipment" | translate }}\r\n                              </label>\r\n\r\n                              <div class="form-control">\r\n                                <input class="aw-input" type="text" [(ngModel)]="rowData.shipment" [disabled]="true" />\r\n                              </div>\r\n                            </div>\r\n                            <div class="form-group">\r\n                              <label class="form-label">\r\n                                {{ getComponentName() + ".pilot" | translate }}\r\n                              </label>\r\n\r\n                              <div class="form-control">\r\n                                <input class="aw-input" type="text" [(ngModel)]="rowData.pilot" [disabled]="true" />\r\n                              </div>\r\n                            </div>\r\n                            <div class="form-group">\r\n                              <label class="form-label">\r\n                                {{ getComponentName() + ".copilot" | translate }}\r\n                              </label>\r\n\r\n                              <div class="form-control">\r\n                                <input class="aw-input" type="text" [(ngModel)]="rowData.copilot" [disabled]="true" />\r\n                              </div>\r\n                            </div>\r\n                            <div class="form-group">\r\n                              <label class="form-label">\r\n                                {{ getComponentName() + ".dayMission" | translate }}\r\n                              </label>\r\n\r\n                              <div class="form-control">\r\n                                <i\r\n                                  *ngIf="rowData[\'dayMission\'] !== null && rowData[\'dayMission\']"\r\n                                  class="fa fa-fw fa-check"\r\n                                  aria-hidden="true"\r\n                                ></i>\r\n                              </div>\r\n                            </div>\r\n                            <div class="form-group">\r\n                              <label class="form-label">\r\n                                {{ getComponentName() + ".nightMission" | translate }}\r\n                              </label>\r\n\r\n                              <div class="form-control">\r\n                                <i\r\n                                  *ngIf="rowData[\'nightMission\'] !== null && rowData[\'nightMission\']"\r\n                                  class="fa fa-fw fa-check"\r\n                                  aria-hidden="true"\r\n                                ></i>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-flights-popup\r\n    *ngIf="showFlightDialog"\r\n    [(display)]="showFlightDialog"\r\n    [isReadOnlyForm]="isReadOnlyFlightDialog"\r\n    (onAdded)="onAddOperation($event)"\r\n  ></aw-dialog-flights-popup>\r\n\r\n  <aw-dialog-flights-asset-popup\r\n    *ngIf="showFlightEditDialog"\r\n    [(display)]="showFlightEditDialog"\r\n    [editFlightSelect]="editFlightSelect"\r\n    [isReadOnlyForm]="isReadOnlyFlightEditDialog"\r\n    (onAdded)="onEditOperation($event)"\r\n  ></aw-dialog-flights-asset-popup>\r\n\r\n  <aw-dialog-status\r\n    *ngIf="showStatusUpdatesPopup"\r\n    [isStatusEditable]="false"\r\n    [item]="missionFieldData"\r\n    [itemId]="missionFieldData.missionCode"\r\n    [(display)]="showStatusUpdatesPopup"\r\n  >\r\n  </aw-dialog-status>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/flight-operations/mission-form/mission-form.component.scss':
      /*!*********************************************************************************!*\
  !*** ./src/app/main/flight-operations/mission-form/mission-form.component.scss ***!
  \*********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .section-locations {\n  max-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mbGlnaHQtb3BlcmF0aW9ucy9taXNzaW9uLWZvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGZsaWdodC1vcGVyYXRpb25zXFxtaXNzaW9uLWZvcm1cXG1pc3Npb24tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vZmxpZ2h0LW9wZXJhdGlvbnMvbWlzc2lvbi1mb3JtL21pc3Npb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcblxuOmhvc3Qge1xuICAuc2VjdGlvbi1sb2NhdGlvbnMge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */';

        /***/
      },

    /***/ './src/app/main/flight-operations/mission-form/mission-form.component.ts':
      /*!*******************************************************************************!*\
  !*** ./src/app/main/flight-operations/mission-form/mission-form.component.ts ***!
  \*******************************************************************************/
      /*! exports provided: MissionFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MissionFormComponent', function() {
          return MissionFormComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! moment */ './node_modules/moment/moment.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/components/component-sidebar/page-toc.service */ './src/app/shared/components/component-sidebar/page-toc.service.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/services/input-validation.service */ './src/app/shared/services/input-validation.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../shared/utils/number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _mission_form_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./mission-form.service */ './src/app/main/flight-operations/mission-form/mission-form.service.ts'
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

        var MissionFormComponent = /** @class */ (function(_super) {
          __extends(MissionFormComponent, _super);
          function MissionFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            translateService,
            tabService,
            inputValidationService,
            sessionService,
            confirmationService,
            missionFormService,
            propertiesService,
            dateService,
            pageTocService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                pageTocService
              ) || this;
            _this.translateService = translateService;
            _this.inputValidationService = inputValidationService;
            _this.sessionService = sessionService;
            _this.confirmationService = confirmationService;
            _this.missionFormService = missionFormService;
            _this.propertiesService = propertiesService;
            _this.dateService = dateService;
            _super.prototype.registerPageTocEntryObservable.call(_this);
            _this.tabGeneralId = 'general';
            _this.tabFlightsTaskId = 'flights';
            _this.missionTypeList = [];
            _this.flightLocationList = [];
            _this.periodicityList = [];
            _this.selectedFlights = [];
            _this.addedFlights = [];
            _this.updatedFlights = [];
            _this.deletedFlights = [];
            _this.flightTableData = [];
            _this.flightTableDataAddedList = [];
            _this.numberOfFlights = undefined;
            _this.flightCustomerList = [];
            _this.selectedTimeZone = undefined;
            _this.isLoading = false;
            _this.updatedFilghtsAsset = {};
            _this.openGeneralTab();
            _this.setTableCols();
            _this.setSubTableCols();
            _this.loadFlightCustomerList();
            _this.loadStatus();
            _this.init();
            _this.missionFieldData = {};
            _this.missionFieldFromDb = {};
            _this.isReadOnlyFlightDialog = true;
            _this.isReadOnlyFlightEditDialog = true;
            _this.showFlightDialog = false;
            _this.showFlightEditDialog = false;
            _this.timeZoneList = [];
            _this.previousTimezone = undefined;
            _this.component = MissionFormComponent_1;
            return _this;
          }
          MissionFormComponent_1 = MissionFormComponent;
          MissionFormComponent.prototype.openGeneralTab = function() {
            this.currentTabId = this.tabGeneralId;
          };
          MissionFormComponent.prototype.openFlightsTaskTab = function() {
            this.currentTabId = this.tabFlightsTaskId;
          };
          MissionFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
              .FLI_FLIGHTS_MISSION_FORM;
          };
          MissionFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.setTableOfContent();
            if (this.componentData) {
              this.updateOpenMode(this.componentData.openMode);
              var context = this.isCreateOpenMode
                ? 'tab.createMode'
                : !!this.componentData.objectId &&
                  this.serializationService.deserialize(this.componentData.objectId).missionCode;
              this.displayComponentContext(context, this.isCreateOpenMode);
              this.loadDropDowns();
            }
          };
          MissionFormComponent.prototype.cancelMissionFrom = function() {
            if (this.isWriteOpenMode) {
              this.updateOpenMode(
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
              );
            }
            this.reloadMissionFrom();
          };
          MissionFormComponent.prototype.editMissionFrom = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Write
            );
          };
          MissionFormComponent.prototype.reloadMissionFrom = function() {
            this.init();
            this.loadMission();
          };
          MissionFormComponent.prototype.saveMissionFrom = function() {
            var _this = this;
            if (this.missionFieldData.missionType) {
              // tslint:disable-next-line: no-any
              // const flightArray: any[] = [];
              var isUpdate = void 0;
              // let isAssetOverride = false;
              this.componentData.openMode ===
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Create
                ? (isUpdate = false)
                : (isUpdate = true);
              this.missionFieldData.statusDate = undefined;
              this.missionFieldData.statusUser = '';
              this.missionFieldData.statusState = '';
              /* this.flightTableData.forEach((flight) => {
              if (!!flight.assetCodeText && !!flight.familyVariantCode) {
                const found = flightArray.some((asset): boolean => {
                  return asset.familyVariantCode === flight.familyVariantCode && asset.assetCodeText === flight.assetCodeText;
                });
                if (!found) {
                  flightArray.push({ familyVariantCode: flight.familyVariantCode, assetCodeText: flight.assetCodeText });
                } else {
                  isAssetOverride = true;
                }
              }
            });
      
            if (isAssetOverride) {
              this.messageService.showErrorMessage(this.getTranslateKey('warningOnFlightExists'));
      
              return;
            } */
              var saveMissionId = {
                bidoMissionDTO: this.missionFieldData,
                isForUpdate: isUpdate,
                addedFlights: this.addedFlights,
                removedFlights: [],
                updatedFlights: this.updatedFlights,
                selectedTimeZone: this.getActTimeZone()
              };
              this.showSaveSpinner = true;
              this.missionFormService.saveBidoMission(saveMissionId).subscribe(
                function(result) {
                  if (result && result !== {}) {
                    // tslint:disable-next-line:no-string-literal
                    var missionEquipmentTableOutputDTO = result['MissionEquipmentTableOutputDTO'];
                    missionEquipmentTableOutputDTO.forEach(function(res) {
                      res.asset.forEach(function(asset) {
                        if (res.assetCodeText === asset.value) {
                          res.assetCodeText = asset.label;
                        }
                      });
                    });
                    // tslint:disable-next-line: no-unsafe-any
                    _this.flightTableData = missionEquipmentTableOutputDTO;
                    // tslint:disable-next-line:no-string-literal
                    _this.missionFieldData = result['bidoMissionDTO'];
                    _this.missionFieldFromDb = __assign({}, _this.missionFieldData); // keep backup of mission field dto
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSaveMission'));
                    _this.numberOfFlights = _this.flightTableData.length;
                    if (
                      _this.componentData.openMode ===
                      _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Create
                    ) {
                      _this.componentData.objectId = _this.serializationService.serialize(_this.missionFieldData);
                      var context = _this.serializationService.deserialize(_this.componentData.objectId).missionCode;
                      _this.displayComponentContext(context, _this.isCreateOpenMode);
                    }
                    _this.addedFlights = [];
                    _this.deletedFlights = [];
                    _this.updatedFlights = [];
                    _this.selectedFlights = [];
                    _this.reloadMissionFrom();
                    _this.updateOpenMode(
                      _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
                    );
                    _this.componentData.openMode =
                      _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read;
                  }
                  _this.showSaveSpinner = false;
                },
                function(error) {
                  var subStringNumber = 16;
                  if (error.error) {
                    _this.messageService.showErrorMessage(error.error.errorDetail.substring(subStringNumber));
                  } else {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSaveMission'));
                  }
                  _this.showSaveSpinner = false;
                }
              );
            } else {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            }
          };
          MissionFormComponent.prototype.getActTimeZone = function() {
            var _this = this;
            if (!!this.selectedTimeZone) {
              var selectedZone = this.timeZoneList.filter(function(res) {
                return res.value === _this.selectedTimeZone;
              });
              return !!selectedZone ? selectedZone[0].actValue : this.selectedTimeZone;
            }
          };
          MissionFormComponent.prototype.setTableCols = function() {
            this.flightTabTableCols = [
              { field: 'familyVariantCode', alignment: 'left', width: '10%' },
              { field: 'assetCodeText', alignment: 'left', width: '21%' },
              { field: 'chronoNumber', alignment: 'left', width: '11%' },
              { field: 'flightStatus', alignment: 'left', width: '9%' },
              { field: 'startDate', alignment: 'left', width: '14%' },
              { field: 'endDate', alignment: 'left', width: '14%' },
              { field: 'duration', alignment: 'center', width: '7%' },
              { field: 'ifrDuration', alignment: 'center', width: '7%' },
              { field: 'cycleNumber', alignment: 'center', width: '7%' }
            ];
          };
          MissionFormComponent.prototype.setSubTableCols = function() {
            this.flightSubTableCols = [
              { field: 'engineStartDate', alignment: 'left', width: '12%' },
              { field: 'engineStopDate', alignment: 'left', width: '12%' },
              { field: 'fuelUsed', alignment: 'left', width: '10%' },
              { field: 'passengers', alignment: 'center', width: '12%' },
              { field: 'shipment', alignment: 'center', width: '10%' },
              { field: 'pilot', alignment: 'left', width: '12%' },
              { field: 'copilot', alignment: 'left', width: '12%' },
              { field: 'dayMission', alignment: 'left', width: '10%' },
              { field: 'nightMission', alignment: 'left', width: '10%' }
            ];
          };
          MissionFormComponent.prototype.init = function() {
            this.isMenuOverlayVisible = false;
            this.isNavigationOverlayVisible = false;
            this.topMenuOffsetTop = 0;
            this.topMenuOffsetLeft = 0;
          };
          MissionFormComponent.prototype.loadFlightCustomerList = function() {
            var _this = this;
            var criteria = {
              isOperator: true
            };
            this.missionFormService.findAllBidoCustomerBySearchCriteria(criteria).subscribe(function(results) {
              _this.flightCustomerList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__['ListUtils']
                .orEmpty(results)
                .filter(function(result) {
                  return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__['StringUtils'].isNullOrEmpty(
                    result.customerCode
                  );
                })
                .map(function(result) {
                  var label = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__['StringUtils'].isNullOrEmpty(
                    result.customerName
                  )
                    ? result.customerCode
                    : result.customerName + ' (' + result.customerCode + ')';
                  return {
                    label: label,
                    value: result.customerCode
                  };
                });
            });
          };
          MissionFormComponent.prototype.loadStatus = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                  .FUNC_OBJECT_STATUS_MAP
              )
              .subscribe(function(results) {
                _this.status = results;
              });
          };
          MissionFormComponent.prototype.loadMission = function() {
            var _this = this;
            this.isLoading = true;
            var missionTemp = {
              missionCode: this.componentData.objectId
                ? // tslint:disable-next-line: no-unsafe-any
                  this.serializationService.deserialize(this.componentData.objectId).missionCode
                : ''
            };
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['forkJoin'])([
              this.missionFormService.findBidoMissionsByMissionCode(missionTemp),
              this.missionFormService.findBidoMissionEquipments(missionTemp)
            ]).subscribe(function(_a) {
              var _b = __read(_a, 2),
                mission = _b[0],
                flights = _b[1];
              if (!!mission) {
                _this.missionFieldData = mission;
                _this.missionFieldFromDb = __assign({}, _this.missionFieldData); // keep backup to add flight
              }
              _this.getFlightTableData(flights);
              _this.updateMissionDates();
              _this.isLoading = false;
            });
          };
          MissionFormComponent.prototype.getFlightTableData = function(results) {
            var _this = this;
            this.flightTableData = results.map(function(flight) {
              var flightRow = {
                familyVariantCode: flight.familyVariantCode,
                asset: flight.asset,
                chronoNumber: flight.chronoNumber,
                flightStatus: flight.flightStatus,
                startDate: _this.dateService.dateWithHourToString(flight.startDate),
                endDate: _this.dateService.dateWithHourToString(flight.endDate),
                ifrDuration: flight.ifrDuration,
                duration: flight.duration,
                cycleNumber: flight.cycleNumber,
                engineStartDate: flight.engineStartDate,
                engineStopDate: flight.engineStopDate,
                fuelUsed: flight.fuelUsed,
                passengers: flight.passengers,
                shipment: flight.shipment,
                pilot: flight.pilot,
                copilot: flight.copilot,
                dayMission: flight.dayMission,
                nightMission: flight.nightMission,
                assetCodeText: flight.assetCodeText,
                missionCode: flight.missionCode,
                equipmentCode: flight.equipmentCode,
                occurence: flight.occurence,
                dataKeyId: flight.dataKeyId
              };
              return flightRow;
            });
            this.flightTableData.forEach(function(res) {
              res.dataKeyId = res.chronoNumber;
              if (res.asset) {
                res.asset.forEach(function(asset) {
                  if (res.assetCodeText === asset.value) {
                    res.assetCodeText = asset.label;
                  }
                });
              }
            });
            this.numberOfFlights = this.flightTableData.length;
          };
          MissionFormComponent.prototype.updateMissionDates = function() {
            var _this = this;
            var previousTimezoneValue = Number(this.previousTimezone);
            var currentTimeZoneValue = Number(this.selectedTimeZone);
            if (currentTimeZoneValue !== previousTimezoneValue) {
              var gap_1 =
                Math.abs(previousTimezoneValue) >= 0 && Math.abs(currentTimeZoneValue)
                  ? Math.abs(Math.abs(previousTimezoneValue) - Math.abs(currentTimeZoneValue))
                  : Math.abs(previousTimezoneValue) + Math.abs(currentTimeZoneValue);
              var isGapPositive_1 = currentTimeZoneValue >= previousTimezoneValue;
              if (!!this.missionFieldData) {
                if (!!this.missionFieldData.startDate) {
                  var newDate = '';
                  newDate = this.updateDate(
                    gap_1,
                    isGapPositive_1,
                    this.sessionService.dateTimeFormatMomentJS,
                    String(this.missionFieldData.startDate)
                  );
                  this.missionFieldData.startDate = new Date(newDate);
                }
                if (!!this.missionFieldData.endDate) {
                  var newDate = '';
                  newDate = this.updateDate(
                    gap_1,
                    isGapPositive_1,
                    this.sessionService.dateTimeFormatMomentJS,
                    String(this.missionFieldData.endDate)
                  );
                  this.missionFieldData.endDate = new Date(newDate);
                }
                if (!!this.missionFieldData.periodicityLimitDate) {
                  var newDate = '';
                  newDate = this.updateDate(
                    gap_1,
                    isGapPositive_1,
                    this.sessionService.dateFormatMomentJS,
                    String(this.missionFieldData.periodicityLimitDate)
                  );
                  this.missionFieldData.periodicityLimitDate = new Date(newDate);
                }
              }
              this.flightTableData.forEach(function(res) {
                res.startDate = _this.updateDate(
                  gap_1,
                  isGapPositive_1,
                  _this.sessionService.dateTimeFormatMomentJS,
                  String(res.startDate)
                );
                res.endDate = _this.updateDate(
                  gap_1,
                  isGapPositive_1,
                  _this.sessionService.dateTimeFormatMomentJS,
                  String(res.endDate)
                );
              });
              this.previousTimezone = this.selectedTimeZone;
            }
          };
          MissionFormComponent.prototype.updateDate = function(gap, isGapPositive, dateFormat, date) {
            if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__['StringUtils'].isNullOrEmpty(date)) {
              return '';
            } else {
              var dateValue = new Date(date);
              var updatedDate = isGapPositive
                ? moment__WEBPACK_IMPORTED_MODULE_2__(dateValue).add(gap, 'hours')
                : moment__WEBPACK_IMPORTED_MODULE_2__(dateValue).subtract(gap, 'hours');
              return updatedDate.format(dateFormat);
            }
          };
          MissionFormComponent.prototype.loadDropDowns = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                  .EVENT_MISSION_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.missionTypeList = !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_21__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              });
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                  .FLIGHT_BASE_MAP
              )
              .subscribe(function(results) {
                _this.flightLocationList = !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_21__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              });
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                  .MISSION_PERIODICITY_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.periodicityList = !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_21__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              });
            this.missionFormService.findAllBidoOperations({}).subscribe(function(result) {
              _this.operationCode = result;
            });
            this.missionFormService.getOperationalMissionCodeMap().subscribe(function(results) {
              _this.operationalMissionList = !!results
                ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_21__['SelectItemUtils'].fromLabelValues(
                    results
                  )
                : [];
            });
            this.loadTimeZoneList();
          };
          MissionFormComponent.prototype.loadTimeZoneList = function() {
            var _this = this;
            this.propertiesService.getTimeZones().subscribe(function(results) {
              _this.timeZoneList = results
                .map(function(result) {
                  return {
                    label: result.label,
                    value: _this.dateService.getTimeZoneValue(result.value),
                    actValue: result.value
                  };
                })
                .filter(function(timezone) {
                  return !!timezone.value;
                });
              _this.propertiesService.getDefaultTimeZoneCode().subscribe(function(result) {
                _this.defaultTimeZone = _this.dateService.getTimeZoneValue(result);
                // this.defaultTimeZone = result;
                _this.resetTimezone();
              });
              _this.loadMission();
            });
          };
          MissionFormComponent.prototype.resetTimezone = function() {
            this.selectedTimeZone = this.defaultTimeZone;
            this.previousTimezone = this.defaultTimeZone;
          };
          MissionFormComponent.prototype.createFlightData = function() {
            if (this.missionFieldData.startDate && this.missionFieldData.endDate) {
              this.isReadOnlyFlightDialog = false;
              this.showFlightDialog = true;
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnAddFlights'));
            }
          };
          MissionFormComponent.prototype.maxLengthCheck = function(event, percent) {
            var min = -99999999.99;
            var max = 99999999.99;
            if (percent < min || percent > max) {
              event.preventDefault();
            }
          };
          MissionFormComponent.prototype.editFlights = function() {
            this.isReadOnlyFlightEditDialog = false;
            this.showFlightEditDialog = true;
            this.editFlightSelect = __assign({}, this.selectedFlights[0]);
          };
          MissionFormComponent.prototype.deleteFlights = function() {
            var _this = this;
            var partialMessageKey =
              this.selectedFlights.length > 1 ? 'confirmDeleteSelectedFlights' : 'confirmDeleteSelectedFlight';
            var flights = [];
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.selectedFlights.forEach(function(sel, index) {
                  _this.flightTableData.forEach(function(res, index1) {
                    if (sel.dataKeyId === res.dataKeyId) {
                      if (sel.chronoNumber) {
                        _this.deletedFlights.push(sel);
                        _this.updatedFlights = _this.updatedFlights.filter(function(updatedFlight) {
                          return sel.chronoNumber !== updatedFlight.chronoNumber;
                        });
                        _this.flightTableData.splice(index1, 1);
                      } else {
                        _this.flightTableData.splice(index1, 1);
                        _this.addedFlights.forEach(function(result, indexF) {
                          if (sel.familyVariantCode === result.familyVariantCode) {
                            result.nbFlightsToCreate = result.nbFlightsToCreate && result.nbFlightsToCreate - 1;
                            if (result.nbFlightsToCreate === 0) {
                              _this.addedFlights.splice(indexF, 1);
                            }
                          }
                        });
                      }
                    }
                  });
                });
                if (_this.deletedFlights.length > 0) {
                  _this.deletedFlights.forEach(function(flight) {
                    if (flight) {
                      var flightId = {
                        missionCode: flight.missionCode ? flight.missionCode : '',
                        equipmentCode: flight.equipmentCode ? flight.equipmentCode : '',
                        occurrence: flight.occurence
                      };
                      flights.push(flightId);
                    }
                  });
                  _this.missionFormService.removeBidoMissionEquipment(flights).subscribe(
                    function(result) {
                      _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteMission'));
                      if (_this.selectedFlights) {
                        _this.selectedFlights = [];
                      }
                      _this.numberOfFlights = _this.flightTableData.length;
                    },
                    function(error) {
                      _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDeleteMission'));
                    }
                  );
                }
              }
            });
          };
          MissionFormComponent.prototype.onAddOperation = function(event) {
            var _this = this;
            this.isLoading = true;
            var editMissionEquipmentFromExistingMissionDto = {
              nbFlightsToCreate: event.nbFlightsToCreate
            };
            this.addedFlights = __spread(this.addedFlights, [editMissionEquipmentFromExistingMissionDto]);
            var saveMissionId = {
              bidoMissionDTO: this.missionFieldData,
              addedFlights: this.addedFlights,
              isForUpdate: false
            };
            this.missionFormService.addBidoFlights(saveMissionId).subscribe(
              function(result) {
                _this.addedFlights = [];
                if (result) {
                  result.forEach(function(res) {
                    if (res.asset) {
                      res.asset.forEach(function(asset) {
                        if (res.assetCodeText === asset.value) {
                          res.assetCodeText = asset.label;
                        }
                      });
                    }
                  });
                  _this.flightTableData = result.map(function(flight) {
                    var flightRow = {
                      familyVariantCode: flight.familyVariantCode,
                      asset: flight.asset,
                      chronoNumber: flight.chronoNumber,
                      flightStatus: flight.flightStatus,
                      startDate: !!_this.missionFieldData.startDate
                        ? _this.dateService.dateWithHourToString(_this.missionFieldData.startDate)
                        : _this.dateService.dateWithHourToString(flight.startDate),
                      endDate: !!_this.missionFieldData.endDate
                        ? _this.dateService.dateWithHourToString(_this.missionFieldData.endDate)
                        : _this.dateService.dateWithHourToString(flight.endDate),
                      ifrDuration: flight.ifrDuration,
                      duration: flight.duration,
                      cycleNumber: flight.cycleNumber,
                      engineStartDate: flight.engineStartDate,
                      engineStopDate: flight.engineStopDate,
                      fuelUsed: flight.fuelUsed,
                      passengers: flight.passengers,
                      shipment: flight.shipment,
                      pilot: flight.pilot,
                      copilot: flight.copilot,
                      dayMission: flight.dayMission,
                      nightMission: flight.nightMission,
                      assetCodeText: flight.assetCodeText,
                      missionCode: flight.missionCode,
                      equipmentCode: flight.equipmentCode,
                      occurence: flight.occurence,
                      dataKeyId: flight.dataKeyId
                    };
                    return flightRow;
                  });
                  _this.flightTableData.forEach(function(res) {
                    res.dataKeyId = res.chronoNumber;
                    if (res.asset) {
                      res.asset.forEach(function(asset) {
                        if (res.assetCodeText === asset.value) {
                          res.assetCodeText = asset.label;
                        }
                      });
                    }
                  });
                  _this.numberOfFlights = _this.flightTableData.length;
                  _this.isLoading = false;
                }
              },
              function(error) {
                _this.isLoading = false;
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnValidateFlights'));
              }
            );
          };
          MissionFormComponent.prototype.onEditOperation = function(event) {
            var _this = this;
            if (event.familyVariantCode) {
              event.asset.forEach(function(res) {
                if (event.assetCodeText === res.value) {
                  _this.selectedFlights[0].assetCodeText = res.label;
                }
              });
              this.selectedFlights[0].familyVariantCode = event.familyVariantCode;
              this.selectedFlights[0].asset = event.asset;
              if (this.selectedFlights[0].chronoNumber !== '') {
                this.selectedFlights[0].startDate = this.missionFieldData.startDate;
                this.selectedFlights[0].endDate = this.missionFieldData.endDate;
                var selectedFlights = __assign({}, this.selectedFlights[0]);
                this.updatedFilghtsAsset = selectedFlights;
                if (!!this.updatedFilghtsAsset.asset) {
                  this.updatedFilghtsAsset.asset.forEach(function(res) {
                    if (event.assetCodeText === res.value) {
                      _this.updatedFilghtsAsset.assetCodeText = event.assetCodeText;
                    }
                  });
                }
                this.updatedFlights.forEach(function(res, index) {
                  if (res.chronoNumber === event.chronoNumber) {
                    _this.updatedFlights.splice(index, 1);
                  }
                });
                this.updatedFlights.push(this.updatedFilghtsAsset);
              }
            }
          };
          MissionFormComponent.prototype.openFlightForm = function(rows) {
            var _this = this;
            rows.forEach(function(row) {
              _this.openFlightScreen(
                row,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
              );
            });
          };
          MissionFormComponent.prototype.openFlightScreen = function(row, openMode) {
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
                occurrence: Number(row.occurence),
                chronoNumber: row.chronoNumber
              };
              data.objectId = this.serializationService.serialize(missionEquipmentId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          MissionFormComponent.prototype.isFlightEditable = function() {
            return this.selectedFlights[0].chronoNumber !== '';
          };
          MissionFormComponent.prototype.toggleExpandCollapse = function(row) {
            row._expand = !row._expand;
          };
          MissionFormComponent.prototype.setTableOfContent = function() {
            var _this = this;
            var mainInfoKey = 'page.mainData';
            var additionalInfoKey = 'global.general';
            var scheduleKey = this.getTranslateKey('schedule');
            var flightsKey = this.getTranslateKey('flights');
            this.translateService
              .get([mainInfoKey, additionalInfoKey, scheduleKey, flightsKey])
              .subscribe(function(results) {
                var mainInfoLabel = !!results ? results[mainInfoKey] : 'Main Information';
                var additionalInfoLabel = !!results ? results[additionalInfoKey] : 'Additional Information';
                var scheduleLabel = !!results ? results[scheduleKey] : 'Schedule';
                var flightsLabel = !!results ? results[flightsKey] : 'Flights';
                _this.toc = [
                  {
                    id: 'mainInformationAnchor',
                    anchor: _this.mainInformationEltRef,
                    label: mainInfoLabel
                  },
                  {
                    id: 'additionalInformationAnchor',
                    anchor: _this.additionalInformationEltRef,
                    label: additionalInfoLabel
                  },
                  {
                    id: 'scheduleAnchor',
                    anchor: _this.scheduleEltRef,
                    label: scheduleLabel
                  },
                  {
                    id: 'flightsAnchor',
                    anchor: _this.flightsEltRef,
                    label: flightsLabel
                  }
                ];
                _super.prototype.selectPageTocEntry.call(_this, _this.component.MAIN_INFORMATION_ANCHOR_ID);
              });
          };
          MissionFormComponent.prototype.openStatusUpdatesPopup = function() {
            this.showStatusUpdatesPopup = true;
          };
          MissionFormComponent.prototype.onSelectMissionDate = function() {
            if (this.isCreateOpenMode && !!this.missionFieldData.startDate && !!this.missionFieldData.endDate) {
              var diff = this.dateService.getDurationBetweenDatesInHour(
                this.missionFieldData.startDate,
                this.missionFieldData.endDate
              );
              this.missionFieldData.missionDuration = _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_20__[
                'NumberUtils'
              ].toString(diff);
            }
          };
          var MissionFormComponent_1;
          MissionFormComponent.MAIN_INFORMATION_ANCHOR_ID = 'mainInformationAnchor';
          MissionFormComponent.ADDITIONAL_ANCHOR_ID = 'additionalInformationAnchor';
          MissionFormComponent.SCHEDULE_ANCHOR_ID = 'scheduleAnchor';
          MissionFormComponent.FLIGHTS_ANCHOR_ID = 'flightsAnchor';
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                MissionFormComponent_1.MAIN_INFORMATION_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            MissionFormComponent.prototype,
            'mainInformationEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                MissionFormComponent_1.ADDITIONAL_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            MissionFormComponent.prototype,
            'additionalInformationEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                MissionFormComponent_1.SCHEDULE_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            MissionFormComponent.prototype,
            'scheduleEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(MissionFormComponent_1.FLIGHTS_ANCHOR_ID),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            MissionFormComponent.prototype,
            'flightsEltRef',
            void 0
          );
          MissionFormComponent = MissionFormComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-mission-form',
                template: __webpack_require__(
                  /*! ./mission-form.component.html */ './src/app/main/flight-operations/mission-form/mission-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./mission-form.component.scss */ './src/app/main/flight-operations/mission-form/mission-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_15__['SerializationService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_17__['TabService'],
                _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_11__['InputValidationService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_16__['SessionService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__['ConfirmationService'],
                _mission_form_service__WEBPACK_IMPORTED_MODULE_23__['MissionFormService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_14__['PropertiesService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_9__['DateService'],
                _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__['PageTocService']
              ])
            ],
            MissionFormComponent
          );
          return MissionFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_18__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/flight-operations/mission-form/mission-form.service.ts':
      /*!*****************************************************************************!*\
  !*** ./src/app/main/flight-operations/mission-form/mission-form.service.ts ***!
  \*****************************************************************************/
      /*! exports provided: MissionFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MissionFormService', function() {
          return MissionFormService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

        var MissionFormService = /** @class */ (function(_super) {
          __extends(MissionFormService, _super);
          function MissionFormService(
            http,
            appConfigService,
            fleetManagementApi,
            propertiesService,
            productStructureManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            _this.propertiesService = propertiesService;
            _this.productStructureManagementApi = productStructureManagementApi;
            return _this;
          }
          MissionFormService.prototype.findBidoMissionsByMissionCode = function(criteria) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoMissionsByMissionCode, criteria);
          };
          MissionFormService.prototype.findBidoMissionEquipments = function(criteria) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoMissionEquipments, criteria);
          };
          MissionFormService.prototype.findAllBidoCustomerBySearchCriteria = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoCustomerBySearchCriteria, input);
          };
          MissionFormService.prototype.getOperationalMissionCodeMap = function() {
            return this.propertiesService.getValue('getOperationalMissionCodeMap');
          };
          MissionFormService.prototype.getFamilyVariantCodeMap = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireVariantVersionsByFamilyFunctionConfigurationEvent,
              criteria
            );
          };
          MissionFormService.prototype.removeBidoMissionEquipment = function(bidoMissionEquipmentDTOId) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.removeBidoMissionEquipment,
              bidoMissionEquipmentDTOId
            );
          };
          MissionFormService.prototype.saveBidoMission = function(mission) {
            return _super.prototype.post.call(this, this.fleetManagementApi.saveBidoMission, mission);
          };
          MissionFormService.prototype.findAllBidoOperations = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoOperations, input);
          };
          MissionFormService.prototype.getAssetListBySearchCriteria = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.getAssetListBySearchCriteria, input);
          };
          MissionFormService.prototype.addBidoFlights = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.addBidoFlights, input);
          };
          MissionFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__['PropertiesService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__[
                  'ProductStructureManagementApi'
                ]
              ])
            ],
            MissionFormService
          );
          return MissionFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/flight-operations/mission-form/mission-table-remaining-values/mission-table-remaining-values.component.html':
      /*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/mission-form/mission-table-remaining-values/mission-table-remaining-values.component.html ***!
  \**********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="column">\r\n  <div class="row">\r\n    <p-table [resizableColumns]="true" #ptable class="aw-table2" [columns]="tableCols" [value]="table" [scrollable]="true">\r\n      <ng-template pTemplate="emptymessage">\r\n        <span *ngIf="!remainingTableLoading"> &nbsp;</span>\r\n\r\n        <div *ngIf="remainingTableLoading" class="aw-table-loading-indicator">\r\n          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n          <div class="lds-hourglass"></div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="colgroup" let-columns>\r\n        <colgroup>\r\n          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n        </colgroup>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="header" let-columns>\r\n        <tr>\r\n          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment, width: col.width }">\r\n            {{ getComponentName() + "." + col.field | translate }}\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n          <td\r\n            *ngFor="let col of columns"\r\n            [ngSwitch]="col.field"\r\n            [ngStyle]="{ \'text-align\': col.alignment, width: col.width }"\r\n          >\r\n            <span *ngSwitchCase="\'engineStartDate\'"> {{ rowData[col.field] | date: "yyyy/MM/dd" }} </span>\r\n\r\n            <span *ngSwitchCase="\'engineStopDate\'"> {{ rowData[col.field] | date: "yyyy/MM/dd" }} </span>\r\n            <span *ngSwitchCase="\'dayMission\'">\r\n              <i\r\n                *ngIf="rowData[col.field] !== null && rowData[col.field]"\r\n                class="fa fa-fw fa-check"\r\n                aria-hidden="true"\r\n              ></i>\r\n            </span>\r\n\r\n            <span *ngSwitchCase="\'nightMission\'">\r\n              <i\r\n                *ngIf="rowData[col.field] !== null && rowData[col.field]"\r\n                class="fa fa-fw fa-check"\r\n                aria-hidden="true"\r\n              ></i>\r\n            </span>\r\n            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/flight-operations/mission-form/mission-table-remaining-values/mission-table-remaining-values.component.ts':
      /*!********************************************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/mission-form/mission-table-remaining-values/mission-table-remaining-values.component.ts ***!
  \********************************************************************************************************************************/
      /*! exports provided: MissionTableRemainingValuesComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MissionTableRemainingValuesComponent',
          function() {
            return MissionTableRemainingValuesComponent;
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
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
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

        var MissionTableRemainingValuesComponent = /** @class */ (function(_super) {
          __extends(MissionTableRemainingValuesComponent, _super);
          function MissionTableRemainingValuesComponent() {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write
              ) || this;
            _this.remainingTableLoading = true;
            return _this;
          }
          MissionTableRemainingValuesComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
              .FLI_FLIGHTS_MISSION_FORM;
          };
          MissionTableRemainingValuesComponent.prototype.ngOnInit = function() {
            this.setRemainingTableColumnList();
            this.load();
          };
          MissionTableRemainingValuesComponent.prototype.load = function() {
            this.table = this.remainingTable;
            this.remainingTableLoading = false;
          };
          MissionTableRemainingValuesComponent.prototype.setRemainingTableColumnList = function() {
            this.tableCols = this.remainingTableCols;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            MissionTableRemainingValuesComponent.prototype,
            'remainingTable',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            MissionTableRemainingValuesComponent.prototype,
            'remainingTableCols',
            void 0
          );
          MissionTableRemainingValuesComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-mission-table-remaining-values',
                template: __webpack_require__(
                  /*! ./mission-table-remaining-values.component.html */ './src/app/main/flight-operations/mission-form/mission-table-remaining-values/mission-table-remaining-values.component.html'
                )
              }),
              __metadata('design:paramtypes', [])
            ],
            MissionTableRemainingValuesComponent
          );
          return MissionTableRemainingValuesComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_3__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/flight-operations/mission-search/mission-search.component.html':
      /*!*************************************************************************************!*\
  !*** ./src/app/main/flight-operations/mission-search/mission-search.component.html ***!
  \*************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        {{ "page.searchPage" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-primary-actions">\r\n    <button\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="openCreateMission()"\r\n      *ngIf="hasUpdateAccessRight && hasCreateButton"\r\n    >\r\n      {{ "global.create" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row search-criteria-header">\r\n                  <i\r\n                    class="fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action"\r\n                    aria-hidden="true"\r\n                    pTooltip="{{ \'global.reset\' | translate }}"\r\n                    tooltipPosition="top"\r\n                    (click)="resetSearchCriteria()"\r\n                  ></i>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{\r\n                        componentData.componentId + "." + componentData.componentId + "Field" + ".missionCode"\r\n                          | translate\r\n                      }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="searchFields.missionCode" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{\r\n                        componentData.componentId + "." + componentData.componentId + "Field" + ".missionType"\r\n                          | translate\r\n                      }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="missionTypeList"\r\n                        [(ngModel)]="searchFields.missionType"\r\n                        [showClear]="true"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{\r\n                        componentData.componentId + "." + componentData.componentId + "Field" + ".missionNumber"\r\n                          | translate\r\n                      }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="searchFields.missionNumber" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="row">\r\n                  <div id="operatorCode" class="form-group">\r\n                    <label class="form-label">\r\n                      {{ getComponentName() + ".customerOperatorCode" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="flightCustomerList"\r\n                        [(ngModel)]="searchFields.customerOperatorCode"\r\n                        [disabled]="isReadOpenMode"\r\n                        [showClear]="true"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".missionDateFrom" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="searchFields.startDate"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".missionDateTo" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="searchFields.endDate"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="advanced-criteria" [ngClass]="{ \'display--none\': !showAdvancedCriteria }">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{\r\n                          componentData.componentId + "." + componentData.componentId + "Field" + ".departureLocation"\r\n                            | translate\r\n                        }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [options]="flightLocationList"\r\n                          [(ngModel)]="searchFields.departureLocation"\r\n                          [showClear]="true"\r\n                          placeholder="&nbsp;"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{\r\n                          componentData.componentId + "." + componentData.componentId + "Field" + ".arrivalLocation"\r\n                            | translate\r\n                        }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [options]="flightLocationList"\r\n                          [(ngModel)]="searchFields.arrivalLocation"\r\n                          [showClear]="true"\r\n                          placeholder="&nbsp;"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{\r\n                          componentData.componentId + "." + componentData.componentId + "Field" + ".operation"\r\n                            | translate\r\n                        }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [options]="operationCode"\r\n                          [(ngModel)]="searchFields.operationCode"\r\n                          [showClear]="true"\r\n                          placeholder="&nbsp;"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="row search-criteria-footer">\r\n                  <button mat-button (click)="showAdvancedCriteria = !showAdvancedCriteria">\r\n                    <ng-container *ngIf="showAdvancedCriteria">\r\n                      <mat-icon>remove</mat-icon>\r\n                      {{ "global.collapseCriteria" | translate }}\r\n                    </ng-container>\r\n                    <ng-container *ngIf="!showAdvancedCriteria">\r\n                      <mat-icon>add</mat-icon>\r\n                      {{ "global.expandCriteria" | translate }}\r\n                    </ng-container>\r\n                  </button>\r\n\r\n                  <div class="search-actions">\r\n                    <button\r\n                      type="button"\r\n                      mat-raised-button\r\n                      (click)="search()"\r\n                      color="primary"\r\n                      appKeyPress\r\n                      [keyCode]="\'Enter\'"\r\n                      (keyPress)="search()"\r\n                    >\r\n                      {{ "global.toSearch" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "global.results" | translate }} ({{ resultsTable ? resultsTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #ptableResults\r\n                class="aw-table2"\r\n                [columns]="resultsTableCols"\r\n                [value]="resultsTable"\r\n                [(selection)]="selectedMissions"\r\n                [scrollable]="true"\r\n                dataKey="missionCode"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedMissions.length > 0 }">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableResultsGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptableResults.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="aw-table-actions">\r\n                      <button\r\n                        *ngIf="resultsTable && resultsTable.length > 0 && selectedMissions.length === 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="exportTable()"\r\n                      >\r\n                        {{ "global.export" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="hasManageAccessRight && selectedMissions.length > 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        color="warn"\r\n                        (click)="deleteMissions()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="selectedMissions.length > 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openSelectedMissions()"\r\n                      >\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                    <col class="row-expand-wrapper" />\r\n                    <col class="row-action-wrapper" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th class="aw-table-checkbox-wrapper">\r\n                      <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ componentData.componentId + "." + col.field | translate }}\r\n                    </th>\r\n                    <th class="row-expand-wrapper"></th>\r\n                    <th class="row-action-wrapper"></th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td class="aw-table-checkbox-wrapper">\r\n                      <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <span *ngSwitchCase="\'isOperator\'">\r\n                        <i\r\n                          *ngIf="rowData[col.field] !== null && rowData[col.field]"\r\n                          class="fa fa-fw fa-check"\r\n                          aria-hidden="true"\r\n                        ></i>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase="\'isOwner\'">\r\n                        <i\r\n                          *ngIf="rowData[col.field] !== null && rowData[col.field]"\r\n                          class="fa fa-fw fa-check"\r\n                          aria-hidden="true"\r\n                        ></i>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase="\'missionCode\'">\r\n                        <a (click)="openMissionScreen(rowData)"> {{ rowData["missionCode"] }}</a>\r\n                      </span>\r\n                      <span *ngSwitchCase="\'customerOperatorCode\'">\r\n                        {{ rowData["customerOperatorCode"] | formatSelectOption: flightCustomerList }}\r\n                      </span>\r\n                      <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                    </td>\r\n                    <td class="row-expand-wrapper" [pRowToggler]="rowData">\r\n                      <i\r\n                        class="fa fa-fw aw-icon aw-icon-with-border"\r\n                        [ngClass]="rowData._expand ? \'fa-minus\' : \'fa-plus\'"\r\n                        aria-hidden="true"\r\n                        pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                        tooltipPosition="top"\r\n                        (click)="toggleWorkPackageExpand(rowData)"\r\n                      ></i>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate="rowexpansion" let-rowData let-columns="columns">\r\n                  <tr class="row-expanded" *ngIf="rowData._expand">\r\n                    <td [attr.colspan]="columns.length + 2">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label"> {{ getComponentName() + ".missionDuration" | translate }} </label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              class="aw-input"\r\n                              type="text"\r\n                              [(ngModel)]="rowData.missionDuration"\r\n                              [disabled]="true"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".cycleNumber" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <input class="aw-input" type="text" [(ngModel)]="rowData.cycleNumber" [disabled]="true" />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".periodicityType" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              class="aw-input"\r\n                              type="text"\r\n                              [(ngModel)]="rowData.periodicityType"\r\n                              [disabled]="true"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".periodicityLimitDate" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              class="aw-input"\r\n                              type="text"\r\n                              [(ngModel)]="rowData.periodicityLimitDate"\r\n                              [disabled]="true"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/flight-operations/mission-search/mission-search.component.ts':
      /*!***********************************************************************************!*\
  !*** ./src/app/main/flight-operations/mission-search/mission-search.component.ts ***!
  \***********************************************************************************/
      /*! exports provided: MissionSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MissionSearchComponent', function() {
          return MissionSearchComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _mission_form_mission_form_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../mission-form/mission-form.service */ './src/app/main/flight-operations/mission-form/mission-form.service.ts'
        );
        /* harmony import */ var _mission_search_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./mission-search.service */ './src/app/main/flight-operations/mission-search/mission-search.service.ts'
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

        var MissionSearchComponent = /** @class */ (function(_super) {
          __extends(MissionSearchComponent, _super);
          /* ***************************************************************************/
          function MissionSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            translateService,
            missionSearchService,
            missionFormService,
            exportService,
            confirmationService,
            dateService,
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
            _this.translateService = translateService;
            _this.missionSearchService = missionSearchService;
            _this.missionFormService = missionFormService;
            _this.exportService = exportService;
            _this.confirmationService = confirmationService;
            _this.dateService = dateService;
            _this.sessionService = sessionService;
            _this.isLoading = false;
            _this.resultsTableExportName = 'mission-list';
            _this.showAdvancedCriteria = false;
            _this.resultsTable = [];
            _this.selectedMissions = [];
            _this.missionTypeList = [];
            _this.flightLocationList = [];
            _this.periodicityType = [];
            _this.flightCustomerList = [];
            _this.keyMap = new Map();
            _this.resetSearchCriteria();
            _this.initTableCols();
            _this.fillDropDown();
            _this.initHasCreateButton();
            _this.fillDropDown();
            return _this;
          }
          MissionSearchComponent.prototype.initTableCols = function() {
            this.resultsTableCols = [
              { field: 'missionCode', alignment: 'left', width: '10%' },
              { field: 'missionType', alignment: 'left', width: '11%' },
              { field: 'missionNumber', alignment: 'left', width: '8%' },
              { field: 'operationalMissionCode', alignment: 'left', width: '12%' },
              { field: 'customerOperatorCode', alignment: 'left', width: '13%' },
              { field: 'departureLocation', alignment: 'left', width: '10%' },
              { field: 'arrivalLocation', alignment: 'left', width: '10%' },
              { field: 'startDate', alignment: 'left', width: '13%' },
              { field: 'endDate', alignment: 'left', width: '13%' }
            ];
          };
          MissionSearchComponent.prototype.initHasCreateButton = function() {
            this.hasCreateButton = true;
          };
          MissionSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .FLI_FLIGHTS_MISSION_SEARCH;
          };
          MissionSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          MissionSearchComponent.prototype.deleteMissions = function() {
            var _this = this;
            var partialMessageKey =
              this.selectedMissions.length > 1 ? 'confirmDeleteSelectedMissions' : 'confirmDeleteSelectedMission';
            var missions = [];
            this.selectedMissions.forEach(function(mission) {
              if (mission && mission.missionCode) {
                var missionId = {
                  missionCode: mission.missionCode
                };
                missions.push(missionId);
              }
            });
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.missionSearchService.removeBidoMission(missions).subscribe(
                  function(result) {
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteMission'));
                    _this.selectedMissions = [];
                    _this.search();
                  },
                  function(error) {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDeleteMission'));
                  }
                );
              }
            });
          };
          MissionSearchComponent.prototype.exportTable = function() {
            var missionExportData = this.resultsTable.map(function(mission) {
              var missionRowExport = {
                missionCode: mission.missionCode,
                missionType: mission.missionType,
                missionNumber: mission.missionNumber,
                operationalMissionCode: mission.operationalMissionCode,
                departureLocation: mission.departureLocation,
                arrivalLocation: mission.arrivalLocation,
                startDate: mission.startDate,
                endDate: mission.endDate,
                missionDuration: mission.missionDuration,
                cycleNumber: mission.cycleNumber,
                periodicityType: mission.periodicityType,
                periodicityLimitDate: mission.periodicityLimitDate
              };
              return missionRowExport;
            });
            this.exportService.toExcel(missionExportData, this.resultsTableExportName, this.componentData.componentId);
          };
          MissionSearchComponent.prototype.openCreateMission = function() {
            this.openMission(
              undefined,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Create
            );
          };
          MissionSearchComponent.prototype.openMissionScreen = function(missionRow) {
            this.openMission(
              missionRow,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read
            );
          };
          MissionSearchComponent.prototype.openSelectedMissions = function() {
            var _this = this;
            this.selectedMissions.forEach(function(mission) {
              if (mission) {
                if (
                  _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__['StringUtils'].isNullOrEmpty(
                    mission.missionCode
                  )
                ) {
                  _this.messageService.showWarningMessage(_this.getTranslateKey('errorOnMissingCustomerCode'));
                } else {
                  _this.openMission(
                    mission,
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read
                  );
                }
              }
            });
          };
          MissionSearchComponent.prototype.resetResultsTable = function(table) {
            table.reset();
            table.filters = {};
          };
          MissionSearchComponent.prototype.resetSearchCriteria = function() {
            this.searchFields = {};
          };
          MissionSearchComponent.prototype.search = function() {
            var _this = this;
            this.isLoading = true;
            _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
            this.missionSearchService.findBidoMissionsBySearchCriteria(this.searchFields).subscribe(
              function(results) {
                _this.isLoading = false;
                if (results) {
                  _this.resultsTable = results.list.map(function(mission) {
                    var matchingOperationCode = _this.operationCode.find(function(elt) {
                      return elt.value === mission.operationCode;
                    });
                    var missionRow = {
                      missionCode: mission.missionCode,
                      missionType: mission.missionType,
                      missionNumber: mission.missionNumber,
                      operationalMissionCode: matchingOperationCode ? matchingOperationCode.label : '',
                      customerOperatorCode: mission.customerOperatorCode,
                      departureLocation: mission.departureLocation,
                      arrivalLocation: mission.arrivalLocation,
                      startDate: _this.dateService.dateWithHourToString(mission.startDate),
                      endDate: _this.dateService.dateWithHourToString(mission.endDate),
                      missionDuration: mission.missionDuration,
                      cycleNumber: mission.cycleNumber,
                      periodicityType: mission.periodicityType,
                      periodicityLimitDate: _this.dateService.dateToString(mission.periodicityLimitDate),
                      _obj: mission
                    };
                    return missionRow;
                  });
                  _this.resultsTable.forEach(function(element) {
                    _this.missionTypeList.forEach(function(result) {
                      if (result.value === element.missionType) {
                        element.missionType = result.label;
                      }
                    });
                    _this.flightLocationList.forEach(function(result) {
                      if (result.value === element.arrivalLocation) {
                        element.arrivalLocation = result.label;
                      }
                    });
                    _this.flightLocationList.forEach(function(result) {
                      if (result.value === element.departureLocation) {
                        element.departureLocation = result.label;
                      }
                    });
                    _this.periodicityType.forEach(function(result) {
                      if (result.value === element.periodicityType) {
                        element.periodicityType = result.label;
                      }
                    });
                  });
                }
              },
              function() {
                _this.isLoading = false;
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetResults'));
              }
            );
            this.selectedMissions = [];
          };
          MissionSearchComponent.prototype.toggleWorkPackageExpand = function(row) {
            row._expand = !row._expand;
          };
          MissionSearchComponent.prototype.openMission = function(object, openMode) {
            var labelKey = 'transaction.MissionFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'MissionFormComponent',
              objectId: this.serializationService.serialize(object),
              openMode: openMode
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          MissionSearchComponent.prototype.fillDropDown = function() {
            var _this = this;
            this.loadFlightCustomerList();
            this.missionSearchService.getMissionTypeMap().subscribe(function(results) {
              _this.missionTypeList = results;
            });
            this.missionSearchService.getLocationTypeMap().subscribe(function(results) {
              _this.flightLocationList = results;
            });
            this.missionSearchService.getPeriodicityTypeMap().subscribe(function(result) {
              _this.periodicityType = result;
            });
            this.missionSearchService.findAllBidoOperations({}).subscribe(function(result) {
              _this.operationCode = result;
            });
          };
          MissionSearchComponent.prototype.loadFlightCustomerList = function() {
            var _this = this;
            var criteria = {
              isOperator: true
            };
            this.missionFormService.findAllBidoCustomerBySearchCriteria(criteria).subscribe(function(results) {
              _this.flightCustomerList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__['ListUtils']
                .orEmpty(results)
                .filter(function(result) {
                  return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__['StringUtils'].isNullOrEmpty(
                    result.customerCode
                  );
                })
                .map(function(result) {
                  var label = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__['StringUtils'].isNullOrEmpty(
                    result.customerName
                  )
                    ? result.customerCode
                    : result.customerName + ' (' + result.customerCode + ')';
                  return {
                    label: label,
                    value: result.customerCode
                  };
                });
            });
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('resultsContainerAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            MissionSearchComponent.prototype,
            'resultsContainerAnchor',
            void 0
          );
          MissionSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-mission-search',
                template: __webpack_require__(
                  /*! ./mission-search.component.html */ './src/app/main/flight-operations/mission-search/mission-search.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__['TabService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _mission_search_service__WEBPACK_IMPORTED_MODULE_17__['MissionSearchService'],
                _mission_form_mission_form_service__WEBPACK_IMPORTED_MODULE_16__['MissionFormService'],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_6__['ExportService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__['ConfirmationService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__['DateService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__['SessionService']
              ])
            ],
            MissionSearchComponent
          );
          return MissionSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_13__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/flight-operations/mission-search/mission-search.service.ts':
      /*!*********************************************************************************!*\
  !*** ./src/app/main/flight-operations/mission-search/mission-search.service.ts ***!
  \*********************************************************************************/
      /*! exports provided: MissionSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MissionSearchService', function() {
          return MissionSearchService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

        var MissionSearchService = /** @class */ (function(_super) {
          __extends(MissionSearchService, _super);
          function MissionSearchService(http, appConfigService, fleetManagementApi, propertiesService) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            _this.propertiesService = propertiesService;
            return _this;
          }
          MissionSearchService.prototype.findBidoMissionsBySearchCriteria = function(criteria) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoMissionsBySearchCriteria, criteria);
          };
          MissionSearchService.prototype.findAllBidoOperations = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoOperations, input);
          };
          MissionSearchService.prototype.removeBidoMission = function(bidoMissionDTOId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoMission, bidoMissionDTOId);
          };
          MissionSearchService.prototype.getPeriodicityTypeMap = function() {
            return this.propertiesService.getValue('getMissionPeriodicityTypeMap');
          };
          MissionSearchService.prototype.getMissionTypeMap = function() {
            return this.propertiesService.getValue('getEventMissionTypeMap');
          };
          MissionSearchService.prototype.getLocationTypeMap = function() {
            return this.propertiesService.getValue('getFlightBaseMap');
          };
          MissionSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__['PropertiesService']
              ])
            ],
            MissionSearchService
          );
          return MissionSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/flight-operations/operation-search/dialog-operation/dialog-operation.component.html':
      /*!**********************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/operation-search/dialog-operation/dialog-operation.component.html ***!
  \**********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">{{ getComponentName() + ".operationCode" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <input\r\n          type="text"\r\n          name="operationCode"\r\n          class="aw-input"\r\n          maxlength="50"\r\n          [(ngModel)]="flightOperationOutputDTO.bidoOpearationDTO.operationCode"\r\n          [disabled]="isReadOpenMode || isWriteOpenMode"\r\n          required\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".operationName" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <input\r\n          type="text"\r\n          name="operationName"\r\n          maxlength="100"\r\n          class="aw-input"\r\n          [(ngModel)]="flightOperationOutputDTO.bidoOpearationDTO.operationName"\r\n          [disabled]="isReadOpenMode"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".operationDescription" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <textarea\r\n          class="aw-textarea"\r\n          [rows]="3"\r\n          pInputTextarea\r\n          maxlength="300"\r\n          [(ngModel)]="flightOperationOutputDTO.bidoOpearationDTO.operationDescription"\r\n          [disabled]="isReadOpenMode"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf="!isCreateOpenMode" class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".startDate" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-calendar\r\n          showButtonBar="true"\r\n          [monthNavigator]="true"\r\n          [yearNavigator]="true"\r\n          [yearRange]="sessionService.calendarYearRange"\r\n          class="aw-calendar"\r\n          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n          [locale]="sessionService.calendarFormat"\r\n          [(ngModel)]="flightOperationOutputDTO.startDate"\r\n          [disabled]="true"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf="!isCreateOpenMode" class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".endDate" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-calendar\r\n          showButtonBar="true"\r\n          [monthNavigator]="true"\r\n          [yearNavigator]="true"\r\n          [yearRange]="sessionService.calendarYearRange"\r\n          class="aw-calendar"\r\n          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n          [locale]="sessionService.calendarFormat"\r\n          [(ngModel)]="flightOperationOutputDTO.endDate"\r\n          [disabled]="true"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      [disabled]="\r\n        flightOperationOutputDTO.bidoOpearationDTO.operationCode === null ||\r\n        flightOperationOutputDTO.bidoOpearationDTO.operationCode === undefined ||\r\n        flightOperationOutputDTO.bidoOpearationDTO.operationCode.trim() === \'\'\r\n      "\r\n      (click)="validate()"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      {{ "global.close" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/flight-operations/operation-search/dialog-operation/dialog-operation.component.scss':
      /*!**********************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/operation-search/dialog-operation/dialog-operation.component.scss ***!
  \**********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZmxpZ2h0LW9wZXJhdGlvbnMvb3BlcmF0aW9uLXNlYXJjaC9kaWFsb2ctb3BlcmF0aW9uL2RpYWxvZy1vcGVyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */';

        /***/
      },

    /***/ './src/app/main/flight-operations/operation-search/dialog-operation/dialog-operation.component.ts':
      /*!********************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/operation-search/dialog-operation/dialog-operation.component.ts ***!
  \********************************************************************************************************/
      /*! exports provided: DialogOperationComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogOperationComponent',
          function() {
            return DialogOperationComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _operation_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../operation-search.service */ './src/app/main/flight-operations/operation-search/operation-search.service.ts'
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

        var DialogOperationComponent = /** @class */ (function(_super) {
          __extends(DialogOperationComponent, _super);
          function DialogOperationComponent(sessionService, messageService, operationSearchService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'DialogOperationComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.messageService = messageService;
            _this.operationSearchService = operationSearchService;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.flightOperationOutputDTO = { bidoOpearationDTO: {} };
            return _this;
          }
          DialogOperationComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.updateOpenMode(this.openMode);
            if (!this.operation) {
              this.operation = {};
            } else {
              this.operationSearchService.findBidoOperation(this.operation.operationCode).subscribe(
                function(result) {
                  _this.flightOperationOutputDTO = result;
                },
                function() {
                  _this.flightOperationOutputDTO.bidoOpearationDTO = _this.operation;
                }
              );
            }
          };
          DialogOperationComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogOperationComponent.prototype.validate = function() {
            if (
              !!this.flightOperationOutputDTO.bidoOpearationDTO &&
              (!this.flightOperationOutputDTO.bidoOpearationDTO.operationCode ||
                this.flightOperationOutputDTO.bidoOpearationDTO.operationCode.length === 0)
            ) {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            } else {
              this.onValidated.emit(this.flightOperationOutputDTO.bidoOpearationDTO);
              this.display = false;
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogOperationComponent.prototype,
            'operation',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogOperationComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogOperationComponent.prototype,
            'isNew',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogOperationComponent.prototype,
            'onValidated',
            void 0
          );
          DialogOperationComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-operation',
                template: __webpack_require__(
                  /*! ./dialog-operation.component.html */ './src/app/main/flight-operations/operation-search/dialog-operation/dialog-operation.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-operation.component.scss */ './src/app/main/flight-operations/operation-search/dialog-operation/dialog-operation.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__['SessionService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService'],
                _operation_search_service__WEBPACK_IMPORTED_MODULE_5__['OperationSearchService']
              ])
            ],
            DialogOperationComponent
          );
          return DialogOperationComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/flight-operations/operation-search/operation-search.component.html':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/flight-operations/operation-search/operation-search.component.html ***!
  \*****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "page.searchPage" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" class="btn-with-spinner" color="primary" mat-raised-button (click)="saveOperation()">\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button type="button" mat-menu-item (click)="reloadOperation()">{{ "global.refresh" | translate }}</button>\r\n\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "global.results" | translate }} ({{ resultsTable.list ? resultsTable.list.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #ptableOperation\r\n                class="aw-table2"\r\n                [columns]="resultsTableCols"\r\n                [value]="resultsTable.list"\r\n                [(selection)]="selectedOperation"\r\n                [scrollable]="true"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedOperation.length > 0 }">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableOperationGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptableOperation.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="aw-table-actions">\r\n                      <button\r\n                        *ngIf="resultsTable.list && resultsTable.list.length > 0 && selectedOperation.length === 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="exportTable()"\r\n                      >\r\n                        {{ "global.export" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf="selectedOperation.length === 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="createOperation()"\r\n                      >\r\n                        {{ "global.add" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf="hasManageAccessRight && selectedOperation.length > 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        color="warn"\r\n                        (click)="deleteOperation()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf="selectedOperation.length === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="editOperation()"\r\n                      >\r\n                        {{ "global.edit" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf="selectedOperation.length === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openOperation()"\r\n                      >\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th class="aw-table-checkbox-wrapper">\r\n                      <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ componentData.componentId + "." + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td class="aw-table-checkbox-wrapper">\r\n                      <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td\r\n                      *ngFor="let col of columns"\r\n                      [ngSwitch]="col.field"\r\n                      [ngClass]="{ \'text-align-center\': col.field === \'isOwner\' || col.field === \'isOperator\' }"\r\n                      [ngStyle]="{ \'text-align\': col.alignment }"\r\n                    >\r\n                      <span *ngSwitchCase="\'operationDescription\'">\r\n                        {{\r\n                          rowData[col.field]?.length > 35\r\n                            ? (rowData[col.field] | slice: 0:35) + "[...]"\r\n                            : rowData[col.field]\r\n                        }}\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase="\'operationCode\'">\r\n                        <a (click)="openOperationLink(rowData)"> {{ rowData["operationCode"] }}</a>\r\n                      </span>\r\n\r\n                      <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-operation\r\n  *ngIf="showOperationDialog"\r\n  [operation]="currentOperation"\r\n  [isNew]="isNew"\r\n  [(display)]="showOperationDialog"\r\n  [openMode]="operationDialogOpenMode"\r\n  (onValidated)="onAddOperation($event)"\r\n></aw-dialog-operation>\r\n';

        /***/
      },

    /***/ './src/app/main/flight-operations/operation-search/operation-search.component.scss':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/flight-operations/operation-search/operation-search.component.scss ***!
  \*****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .criteria-checkboxes,\n:host .form-group {\n  margin-right: 20px;\n  max-width: 15rem;\n  min-width: 10rem;\n  width: 20%; }\n  :host .criteria-checkboxes:last-of-type,\n  :host .form-group:last-of-type {\n    margin-right: 0; }\n  :host .search-criteria-primary {\n  justify-content: flex-start; }\n  :host .search-criteria-primary .criteria-checkboxes {\n    display: flex;\n    flex-direction: column; }\n  :host .search-criteria-primary .criteria-checkboxes p-checkbox:first-of-type {\n      margin-bottom: 5px; }\n  :host .search-criteria-primary .criteria-checkboxes p-checkbox:nth-of-type(2) {\n      margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mbGlnaHQtb3BlcmF0aW9ucy9vcGVyYXRpb24tc2VhcmNoL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxmbGlnaHQtb3BlcmF0aW9uc1xcb3BlcmF0aW9uLXNlYXJjaFxcb3BlcmF0aW9uLXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFHSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7RUFOZDs7SUFTTSxlQUFlLEVBQUE7RUFUckI7RUFjSSwyQkFBMkIsRUFBQTtFQWQvQjtJQWlCTSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFsQjVCO01BcUJRLGtCQUFrQixFQUFBO0VBckIxQjtNQXlCUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2ZsaWdodC1vcGVyYXRpb25zL29wZXJhdGlvbi1zZWFyY2gvb3BlcmF0aW9uLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuY3JpdGVyaWEtY2hlY2tib3hlcyxcclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xyXG4gICAgbWluLXdpZHRoOiAxMHJlbTtcclxuICAgIHdpZHRoOiAyMCU7XHJcblxyXG4gICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLXByaW1hcnkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIC5jcml0ZXJpYS1jaGVja2JveGVzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIHAtY2hlY2tib3g6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwLWNoZWNrYm94Om50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/flight-operations/operation-search/operation-search.component.ts':
      /*!***************************************************************************************!*\
  !*** ./src/app/main/flight-operations/operation-search/operation-search.component.ts ***!
  \***************************************************************************************/
      /*! exports provided: OperationSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OperationSearchComponent',
          function() {
            return OperationSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
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
        /* harmony import */ var _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/utils/dto-utils */ './src/app/shared/utils/dto-utils.ts'
        );
        /* harmony import */ var _operation_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./operation-search.service */ './src/app/main/flight-operations/operation-search/operation-search.service.ts'
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

        var OperationSearchComponent = /** @class */ (function(_super) {
          __extends(OperationSearchComponent, _super);
          function OperationSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            operationSearchService,
            confirmationService,
            exportService
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
            _this.operationSearchService = operationSearchService;
            _this.confirmationService = confirmationService;
            _this.exportService = exportService;
            _this.filteredRowsNb = 0;
            _this.resultsTable = { list: [], moreResults: false };
            _this.selectedOperation = [];
            _this.isNavigationOverlayVisible = false;
            _this.currentOperation = undefined;
            _this.currentOperationIndex = -1;
            _this.operationDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read;
            _this.showOperationDialog = false;
            _this.isNew = false;
            _this.isLoading = false;
            _this.operationAdded = [];
            _this.databaseData = [];
            _this.resultsTableCols = [
              { field: 'operationCode', alignment: 'center' },
              { field: 'operationName', alignment: 'center' },
              { field: 'operationDescription', alignment: 'center' }
            ];
            return _this;
          }
          OperationSearchComponent_1 = OperationSearchComponent;
          OperationSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
              .FLI_OPERATION_SEARCH;
          };
          OperationSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.search();
            this.displayComponentContext('global.search', true);
          };
          OperationSearchComponent.prototype.deleteOperation = function() {
            var _this = this;
            if (this.selectedOperation.length > 0) {
              this.confirmationService.confirmDelete({
                messageKey: 'global.deleteConfirmationMsg',
                accept: function() {
                  var selectedBireOperationDTOIdInAddedList = new Array();
                  var selectedBireOperationDTOIdInDatabase = new Array();
                  _this.selectedOperation.forEach(function(operation) {
                    if (operation) {
                      var bireOperationDTOId = {
                        operationCode: operation.operationCode
                      };
                      var inAddedList = _this.operationAdded.some(function(op) {
                        return op.operationCode === operation.operationCode;
                      });
                      if (inAddedList) {
                        selectedBireOperationDTOIdInAddedList.push(bireOperationDTOId);
                        _this.operationAdded = _this.operationAdded.filter(function(op) {
                          return op.operationCode !== operation.operationCode;
                        });
                      } else {
                        selectedBireOperationDTOIdInDatabase.push(bireOperationDTOId);
                        _this.databaseData = _this.databaseData.filter(function(op) {
                          return op.operationCode !== operation.operationCode;
                        });
                      }
                      _this.resultsTable.list = _this.resultsTable.list.filter(function(op) {
                        return op.operationCode !== operation.operationCode;
                      });
                      _this.selectedOperation = [];
                    }
                  });
                  if (selectedBireOperationDTOIdInDatabase.length > 0) {
                    _this.operationSearchService.removeBidoOperation(selectedBireOperationDTOIdInDatabase).subscribe(
                      function(result) {
                        _this.messageService.showSuccessMessage('global.deleteSuccessMsg');
                        // this.search();
                        _this.selectedOperation = [];
                      },
                      function() {
                        _this.messageService.showErrorMessage('global.deleteErrorMsg');
                      }
                    );
                  }
                }
              });
            }
          };
          OperationSearchComponent.prototype.exportTable = function() {
            this.exportService.toExcel(
              this.databaseData,
              OperationSearchComponent_1.RESULTS_TABLE_EXPORT_NAME,
              this.componentData.componentId
            );
          };
          // tslint:disable-next-line:no-any
          OperationSearchComponent.prototype.onFilter = function(event) {
            this.filteredRowsNb = event.filteredValue.length;
          };
          OperationSearchComponent.prototype.createOperation = function() {
            this.currentOperation = undefined;
            this.operationDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Create;
            this.showOperationDialog = true;
            this.currentOperationIndex = undefined;
          };
          OperationSearchComponent.prototype.openOperationLink = function(object) {
            this.currentOperation = object;
            this.currentOperationIndex = undefined;
            this.operationDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read;
            this.showOperationDialog = true;
          };
          OperationSearchComponent.prototype.openOperation = function() {
            if (this.selectedOperation.length === 1) {
              this.currentOperation = this.selectedOperation[0];
              this.currentOperationIndex = undefined;
              this.operationDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read;
              this.showOperationDialog = true;
            }
          };
          OperationSearchComponent.prototype.editOperation = function() {
            var _this = this;
            this.currentOperation = __assign({}, this.selectedOperation[0]);
            if (!!this.currentOperation) {
              this.currentOperationIndex = this.resultsTable.list.findIndex(function(operation) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_11__['DTOUtils'].equalsBidoOperationDTO(
                  operation,
                  _this.currentOperation
                );
              });
            }
            this.operationDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write;
            this.showOperationDialog = true;
          };
          OperationSearchComponent.prototype.onAddOperation = function(operation) {
            if (!!operation) {
              var operationCodeExists = this.resultsTable.list.some(function(op) {
                return op.operationCode === operation.operationCode;
              });
              if (
                this.currentOperationIndex !== null &&
                this.currentOperationIndex !== undefined &&
                this.currentOperationIndex !== -1
              ) {
                // edit mode
                var indexInTable = this.resultsTable.list.findIndex(function(op) {
                  return op.operationCode === operation.operationCode;
                });
                this.resultsTable.list[indexInTable] = operation;
                var inAddedList = this.operationAdded.some(function(op) {
                  return op.operationCode === operation.operationCode;
                });
                if (inAddedList) {
                  var indexInAddedList = this.operationAdded.findIndex(function(op) {
                    return op.operationCode === operation.operationCode;
                  });
                  this.operationAdded[indexInAddedList] = operation;
                } else {
                  this.operationAdded.push(operation);
                }
              } else {
                // creation mode
                if (operationCodeExists) {
                  this.messageService.showWarningMessage(this.getTranslateKey('warningOnOperationExists'));
                } else {
                  this.resultsTable.list.push(operation);
                  this.operationAdded.push(operation);
                }
              }
            }
            this.selectedOperation = [];
          };
          OperationSearchComponent.prototype.saveOperation = function() {
            var _this = this;
            this.showSaveSpinner = true;
            this.operationSearchService.saveFlightOperation(this.operationAdded).subscribe(
              function(result) {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSave'));
                _this.search();
                _this.operationAdded = [];
                _this.currentOperationIndex = -1;
                _this.selectedOperation = [];
                _this.showSaveSpinner = false;
              },
              function(error) {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSave'));
                _this.showSaveSpinner = false;
              }
            );
          };
          OperationSearchComponent.prototype.search = function() {
            var _this = this;
            this.isLoading = true;
            _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
            this.operationSearchService.findBidoOperationsBySearchCriteria().subscribe(function(result) {
              _this.isLoading = false;
              _this.setResultsTable(result);
            });
          };
          OperationSearchComponent.prototype.setResultsTable = function(result) {
            var _this = this;
            if (!!result) {
              this.databaseData = [];
              this.resultsTable.moreResults = result.moreResults;
              this.resultsTable.list = result.list.map(function(operation) {
                var operationRow = {
                  operationCode: operation.operationCode,
                  operationName: operation.operationName,
                  operationDescription: operation.operationDescription
                };
                _this.databaseData.push(operationRow);
                return operationRow;
              });
              this.filteredRowsNb = this.resultsTable.list.length;
            }
            this.selectedOperation = [];
          };
          OperationSearchComponent.prototype.reloadOperation = function() {
            this.search();
            this.operationAdded = [];
            this.currentOperationIndex = -1;
            this.selectedOperation = [];
          };
          var OperationSearchComponent_1;
          OperationSearchComponent.RESULTS_TABLE_EXPORT_NAME = 'operation-list';
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('resultsContainerAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            OperationSearchComponent.prototype,
            'resultsContainerAnchor',
            void 0
          );
          OperationSearchComponent = OperationSearchComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-operation-search',
                template: __webpack_require__(
                  /*! ./operation-search.component.html */ './src/app/main/flight-operations/operation-search/operation-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./operation-search.component.scss */ './src/app/main/flight-operations/operation-search/operation-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__['TabService'],
                _operation_search_service__WEBPACK_IMPORTED_MODULE_12__['OperationSearchService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__['ConfirmationService'],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_4__['ExportService']
              ])
            ],
            OperationSearchComponent
          );
          return OperationSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__['PageComponent']);

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
      }
  }
]);
//# sourceMappingURL=flight-operations-flight-operations-module.js.map
