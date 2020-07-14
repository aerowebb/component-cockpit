(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main-main-module'],
  {
    /***/ './src/app/guards/can-deactivate-guard.service.ts':
      /*!********************************************************!*\
  !*** ./src/app/guards/can-deactivate-guard.service.ts ***!
  \********************************************************/
      /*! exports provided: CanDeactivateGuard */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'CanDeactivateGuard', function() {
          return CanDeactivateGuard;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
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

        var CanDeactivateGuard = /** @class */ (function() {
          function CanDeactivateGuard(router, sessionService, tabService) {
            this.router = router;
            this.sessionService = sessionService;
            this.tabService = tabService;
          }
          CanDeactivateGuard.prototype.canDeactivate = function(component) {
            if (this.sessionService.loggedUser === undefined) {
              return true;
            } else {
              // Push an empty route into browser history
              window.history.pushState({}, '', this.router.url);
              // Hide overlays
              component.showMenuEntry = false;
              component.currentMenuEntry = undefined;
              // Show previous page
              var previousPage =
                this.tabService.breadcrumbs.length > 1
                  ? this.tabService.breadcrumbs[this.tabService.breadcrumbs.length - 2]
                  : component.homeTab;
              if (previousPage) {
                this.tabService.open(previousPage, { shouldReuse: true });
              }
              return false;
            }
          };
          CanDeactivateGuard = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__['SessionService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_3__['TabService']
              ])
            ],
            CanDeactivateGuard
          );
          return CanDeactivateGuard;
        })();

        /***/
      },

    /***/ './src/app/main/confirm-dialog/confirm-dialog.component.html':
      /*!*******************************************************************!*\
  !*** ./src/app/main/confirm-dialog/confirm-dialog.component.html ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" (modalClosed)="onModalClosed($event)">\r\n  <a-header>\r\n    <div class="modal-title">{{ title | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    {{ mainMessage }}\r\n\r\n    <p *ngFor="let contextKey of contextMessages">{{ contextKey }}</p>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="reject()">\r\n      <span>{{ "global.no" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="accept()">\r\n      {{ "global.yes" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/confirm-dialog/confirm-dialog.component.ts':
      /*!*****************************************************************!*\
  !*** ./src/app/main/confirm-dialog/confirm-dialog.component.ts ***!
  \*****************************************************************/
      /*! exports provided: ConfirmDialogComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ConfirmDialogComponent', function() {
          return ConfirmDialogComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
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

        var ConfirmDialogComponent = /** @class */ (function(_super) {
          __extends(ConfirmDialogComponent, _super);
          function ConfirmDialogComponent(confirmationService, translateService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write
              ) || this;
            _this.confirmationService = confirmationService;
            _this.translateService = translateService;
            _this.contextMessages = [];
            _this.display = false;
            _this.mainMessage = '';
            _this.registerObservables();
            return _this;
          }
          ConfirmDialogComponent.prototype.getComponentName = function() {
            return 'ConfirmDialogComponent';
          };
          ConfirmDialogComponent.prototype.onModalClosed = function(visible) {
            this.display = visible;
            if (!visible && this.confirmation.delayCallback && this.delayedEvent) {
              this.delayedEvent.emit();
              this.delayedEvent = undefined;
            }
          };
          ConfirmDialogComponent.prototype.accept = function() {
            if (this.confirmation.delayCallback) {
              this.delayedEvent = this.acceptEvent;
            } else {
              this.acceptEvent.emit();
            }
            this.close();
          };
          ConfirmDialogComponent.prototype.close = function() {
            this.display = false;
          };
          ConfirmDialogComponent.prototype.reject = function() {
            if (this.rejectEvent) {
              if (this.confirmation.delayCallback) {
                this.delayedEvent = this.rejectEvent;
              } else {
                this.rejectEvent.emit();
              }
            }
            this.close();
          };
          ConfirmDialogComponent.prototype.createMessage = function() {
            var _this = this;
            this.mainMessage = this.translateService.instant(
              this.confirmation.messageKey,
              this.confirmation.interpolateParams
            );
            if (!!this.confirmation.contextKeys && this.confirmation.contextKeys.length > 0) {
              this.contextMessages = this.confirmation.contextKeys.map(function(key) {
                return _this.translateService.instant(key, _this.confirmation.interpolateParams);
              });
            } else {
              this.contextMessages = [];
            }
          };
          ConfirmDialogComponent.prototype.handleConfirmation = function(confirmation) {
            if (!!confirmation) {
              this.confirmation = confirmation;
              this.delayedEvent = undefined;
              if (this.confirmation.accept) {
                this.acceptEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
                this.acceptEvent.subscribe(this.confirmation.accept);
              }
              if (this.confirmation.reject) {
                this.rejectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
                this.rejectEvent.subscribe(this.confirmation.reject);
              }
              this.createMessage();
              this.display = true;
            }
          };
          ConfirmDialogComponent.prototype.registerObservables = function() {
            var _this = this;
            this.confirmationService.requireConfirmation$
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['takeUntil'])(this.unsubscribe))
              .subscribe(function(confirmation) {
                _this.handleConfirmation(confirmation);
                _this.title = 'global.confirm';
              });
            this.confirmationService.requireDeleteConfirmation$
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['takeUntil'])(this.unsubscribe))
              .subscribe(function(confirmation) {
                _this.handleConfirmation(confirmation);
                _this.title = 'global.confirmDelete';
              });
          };
          ConfirmDialogComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-confirm-dialog',
                template: __webpack_require__(
                  /*! ./confirm-dialog.component.html */ './src/app/main/confirm-dialog/confirm-dialog.component.html'
                ),
                styles: [':host { white-space: pre-line }']
              }),
              __metadata('design:paramtypes', [
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__['ConfirmationService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            ConfirmDialogComponent
          );
          return ConfirmDialogComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_5__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/dynamic-component-loader/dynamic-component-constants.ts':
      /*!******************************************************************************!*\
  !*** ./src/app/main/dynamic-component-loader/dynamic-component-constants.ts ***!
  \******************************************************************************/
      /*! exports provided: DynamicComponentsConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DynamicComponentsConstants',
          function() {
            return DynamicComponentsConstants;
          }
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        // tslint:disable:max-line-length

        var DynamicComponentsConstants = /** @class */ (function() {
          function DynamicComponentsConstants() {}
          // This array defines which "componentId" maps to which lazy-loaded module.
          DynamicComponentsConstants.MANIFEST = [
            {
              componentId: 'HomeComponent',
              path: 'dynamic-home-component',
              loadChildren: './home/home.module#HomeModule'
            },
            /**************************************************************************
             * Airworthiness Control
             *************************************************************************/
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM,
              path: 'dynamic-maintenance-airworthiness-control-for-asset-form-component',
              loadChildren:
                './maintenance/airworthiness-control/airworthiness-control.module#AirworthinessControlModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_AIRWORTHINESS_CONTROL_FOR_FLEET_FORM,
              path: 'dynamic-maintenance-airworthiness-control-for-fleet-form-component',
              loadChildren:
                './maintenance/airworthiness-control/airworthiness-control.module#AirworthinessControlModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_AIRWORTHINESS_CONTROL_SEARCH,
              path: 'dynamic-maintenance-airworthiness-control-search-component',
              loadChildren:
                './maintenance/airworthiness-control/airworthiness-control.module#AirworthinessControlModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM,
              path: 'dynamic-maintenance-schedule-maintenance-form-component',
              loadChildren:
                './maintenance/airworthiness-control/airworthiness-control.module#AirworthinessControlModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_SEARCH,
              path: 'dynamic-maintenance-schedule-maintenance-search-component',
              loadChildren:
                './maintenance/airworthiness-control/airworthiness-control.module#AirworthinessControlModule'
            },
            /**************************************************************************
             * Applicable Configuration
             *************************************************************************/
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_APPLICABLE_CONFIGURATION_FORM,
              path: 'dynamic-engineering-management-applicable-configuration-form-component',
              loadChildren:
                './engineering-management/applicable-configuration/applicable-configuration.module#ApplicableConfigurationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_APPLICABLE_CONFIGURATION_SEARCH,
              path: 'dynamic-engineering-management-applicable-configuration-search-component',
              loadChildren:
                './engineering-management/applicable-configuration/applicable-configuration.module#ApplicableConfigurationModule'
            },
            /**************************************************************************
             * Collaborative Cockpit
             *************************************************************************/
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .COL_DATA_ENRICHMENT_FORM,
              path: 'dynamic-data-enrichment-form-component',
              loadChildren: './collaborative-cockpit/data-enrichment/data-enrichment.module#DataEnrichmentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .COL_ENGINEERING_DATA_EXCHANGE_SEARCH,
              path: 'dynamic-engineering-data-exchange-search-component',
              loadChildren: './collaborative-cockpit/collaborative-cockpit.module#CollaborativeCockpitModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .COL_FLEET_DATA_EXCHANGE,
              path: 'dynamic-fleet-data-exchange-component',
              loadChildren: './collaborative-cockpit/collaborative-cockpit.module#CollaborativeCockpitModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .COL_FLIGHT_DATA_EXCHANGE,
              path: 'dynamic-flight-data-exchange-component',
              loadChildren: './collaborative-cockpit/collaborative-cockpit.module#CollaborativeCockpitModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .COL_HR_DATA_EXCHANGE,
              path: 'dynamic-hr-data-exchange-component',
              loadChildren: './collaborative-cockpit/collaborative-cockpit.module#CollaborativeCockpitModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .COL_LOGISTIC_DATA_EXCHANGE,
              path: 'dynamic-logistic-data-exchange-component',
              loadChildren: './collaborative-cockpit/collaborative-cockpit.module#CollaborativeCockpitModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .COL_PART_NUMBER_EXPORT_FORM,
              path: 'dynamic-part-number-export-form-component',
              loadChildren:
                './collaborative-cockpit/part-number-export/part-number-export.module#PartNumberExportModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .COL_XML_DATA_LOADING_FORM,
              path: 'dynamic-xml-data-loading-component',
              loadChildren: './collaborative-cockpit/xml-data-loading/xml-data-loading.module#XmlDataLoadingModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .COL_SBAD_EXPORT_FORM,
              path: 'dynamic-sbad-export-form-component',
              loadChildren: './collaborative-cockpit/sbad-export/sbad-export.module#SbadExportModule'
            },
            /**************************************************************************
             * Configuration Diagram
             *************************************************************************/
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_CONFIGURATION_DIAGRAM_FORM,
              path: 'dynamic-engineering-management-configuration-diagram-form-component',
              loadChildren:
                './engineering-management/configuration-diagram/configuration-diagram.module#ConfigurationDiagramModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_CONFIGURATION_DIAGRAM_SEARCH,
              path: 'dynamic-engineering-management-configuration-diagram-search-component',
              loadChildren:
                './engineering-management/configuration-diagram/configuration-diagram.module#ConfigurationDiagramModule'
            },
            /**************************************************************************
             * Employee Planning
             *************************************************************************/
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .HR_EMPLOYEE_PLANNING_FORM,
              path: 'dynamic-human-resources-employee-planning-form-component',
              loadChildren: './human-resources/employee-planning/employee-planning.module#EmployeePlanningModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .HR_EMPLOYEE_PLANNING_SEARCH,
              path: 'dynamic-human-resources-employee-planning-search-component',
              loadChildren: './human-resources/employee-planning/employee-planning.module#EmployeePlanningModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .HR_VIEW_BY_COMPANY_FORM,
              path: 'dynamic-human-resources-view-by-company-form-component',
              loadChildren: './human-resources/employee-planning/employee-planning.module#EmployeePlanningModule'
            },
            /**************************************************************************
             * Flight
             *************************************************************************/
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLI_FLIGHT_FORM,
              path: 'dynamic-flight-operations-flight-form-component',
              loadChildren: './flight-operations/flight/flight.module#FlightModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLI_FLIGHT_SEARCH,
              path: 'dynamic-flight-operations-flight-search-component',
              loadChildren: './flight-operations/flight/flight.module#FlightModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLI_GONOGO_VALIDATION_FORM,
              path: 'dynamic-flight-operations-gonogo-validation-form-component',
              loadChildren: './flight-operations/flight/flight.module#FlightModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLI_LINE_MAINTENANCE_FORM,
              path: 'dynamic-flight-operations-line-maintenance-form-component',
              loadChildren: './flight-operations/flight/flight.module#FlightModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLI_LINE_MAINTENANCE_SEARCH,
              path: 'dynamic-flight-operations-line-maintenance-search-component',
              loadChildren: './flight-operations/flight/flight.module#FlightModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLI_FLIGHT_SCHEDULING_FORM,
              path: 'dynamic-flight-operations-flight-scheduling-form-component',
              loadChildren: './flight-operations/flight-scheduling/flight-scheduling.module#FlightSchedulingModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLI_FLIGHT_SCHEDULING_SEARCH,
              path: 'dynamic-flight-operations-flight-scheduling-search-component',
              loadChildren: './flight-operations/flight-scheduling/flight-scheduling.module#FlightSchedulingModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLI_OPERATIONAL_CONFIGURATION_SETTLING,
              path: 'dynamic-flight-operations-operational-configuration-settling-component',
              loadChildren: './flight-operations/flight/flight.module#FlightModule'
            },
            /**************************************************************************
             * Forecast maintenance
             *************************************************************************/
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_FORECAST_FORM,
              path: 'dynamic-maintenance-forecast-form-component',
              loadChildren: './maintenance/forecast/forecast.module#ForecastModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_FORECAST_SEARCH,
              path: 'dynamic-maintenance-forecast-search-component',
              loadChildren: './maintenance/forecast/forecast.module#ForecastModule'
            },
            /**************************************************************************
             * Goods Movement
             *************************************************************************/
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_GOODS_MOVEMENT_FORM,
              path: 'dynamic-logistics-goods-movement-form-component',
              loadChildren: './logistics/goods-movement/goods-movement.module#GoodsMovementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_MATERIAL_AVAILABILITY_WORK_PACKAGE_FORM,
              path: 'dynamic-material-availability-work-package-form-component',
              loadChildren: './logistics/goods-movement/goods-movement.module#GoodsMovementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_MATERIAL_AVAILABILITY_WORK_ORDER_FORM,
              path: 'dynamic-material-availability-work-order-form-component',
              loadChildren: './logistics/goods-movement/goods-movement.module#GoodsMovementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_MATERIAL_AVAILABILITY_FORECASTING_FORM,
              path: 'dynamic-material-availability-forecasting-form-component',
              loadChildren: './logistics/goods-movement/goods-movement.module#GoodsMovementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_GOODS_MOVEMENT_PURCHASE_REQUEST_FORM,
              path: 'dynamic-goods-movement-purchase-request-form-component',
              loadChildren: './logistics/goods-movement/goods-movement.module#GoodsMovementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_GOODS_MOVEMENT_WORK_PACKAGE_FORM,
              path: 'dynamic-goods-movement-work-package-form-component',
              loadChildren: './logistics/goods-movement/goods-movement.module#GoodsMovementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_GOODS_MOVEMENT_WORK_ORDER_FORM,
              path: 'dynamic-goods-movement-work-order-form-component',
              loadChildren: './logistics/goods-movement/goods-movement.module#GoodsMovementModule'
            },
            /**************************************************************************
             * Material Availability
             *************************************************************************/
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_MATERIAL_AVAILABILITY_FORM,
              path: 'dynamic-material-availability-form-component',
              loadChildren: './logistics/material-availability/material-availability.module#MaterialAvailabilityModule'
            },
            /**************************************************************************
             * Task
             *************************************************************************/
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants'].ENG_TASK_FORM,
              path: 'dynamic-engineering-management-task-form-component',
              loadChildren: './engineering-management/task/task.module#TaskModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_TASK_SEARCH,
              path: 'dynamic-engineering-management-task-search-component',
              loadChildren: './engineering-management/task/task.module#TaskModule'
            },
            /**************************************************************************
             * Administration
             *************************************************************************/
            /* Business Partner */
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_BUSINESS_PARTNER_FORM,
              path: 'dynamic-administration-business-partner-form-component',
              loadChildren: './administration/business-partner/business-partner.module#BusinessPartnerModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_BUSINESS_PARTNER_SEARCH,
              path: 'dynamic-administration-business-partner-search-component',
              loadChildren: './administration/business-partner/business-partner.module#BusinessPartnerModule'
            },
            /* Contact */
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_CONTACT_FORM,
              path: 'dynamic-administration-contact-form-component',
              loadChildren: './administration/contact/contact.module#ContactModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_CONTACT_SEARCH,
              path: 'dynamic-administration-contact-search-component',
              loadChildren: './administration/contact/contact.module#ContactModule'
            },
            /* Enterprise definition */
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_ENTERPRISE_DEFINITION,
              path: 'dynamic-administration-enterprise-definition-component',
              loadChildren:
                './administration/enterprise-definition/enterprise-definition.module#EnterpriseDefinitionModule'
            },
            /* Enterprise map */
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_ENTERPRISE_MAP,
              path: 'dynamic-administration-enterprise-map-component',
              loadChildren: './administration/enterprise-map/enterprise-map.module#EnterpriseMapModule'
            },
            /* Event subscription */
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_EVENT_SUBSCRIPTION_FORM,
              path: 'dynamic-administration-event-subscription-form-component',
              loadChildren: './administration/event-subscription/event-subscription.module#EventSubscriptionModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_EVENT_SUBSCRIPTION_SEARCH,
              path: 'dynamic-administration-event-partner-search-component',
              loadChildren: './administration/event-subscription/event-subscription.module#EventSubscriptionModule'
            },
            /* Site */
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_SITE_SEARCH,
              path: 'dynamic-administration-site-search-component',
              loadChildren: './administration/site/site.module#SiteModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants'].ADM_SITE_FORM,
              path: 'dynamic-administration-site-form-component',
              loadChildren: './administration/site/site.module#SiteModule'
            },
            /* Warehouse */
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_WAREHOUSE_SEARCH,
              path: 'dynamic-administration-warehouse-search-component',
              loadChildren: './administration/warehouse/warehouse.module#WarehouseModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_WAREHOUSE_FORM,
              path: 'dynamic-administration-warehouse-form-component',
              loadChildren: './administration/warehouse/warehouse.module#WarehouseModule'
            },
            /* Workshop */
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_WORKSHOP_SEARCH,
              path: 'dynamic-administration-workshop-search-component',
              loadChildren: './administration/workshop/workshop.module#WorkshopModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_WORKSHOP_FORM,
              path: 'dynamic-administration-workshop-form-component',
              loadChildren: './administration/workshop/workshop.module#WorkshopModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants'].ADM_CATALOG,
              path: 'dynamic-contact-form-component',
              loadChildren: './administration/administration.module#AdministrationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_CATALOG_WORK_TEMPLATE_FORM,
              path: 'dynamic-work-template-form-component',
              loadChildren: './administration/administration.module#AdministrationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_CATALOG_EVENT_CONTEXT_FORM,
              path: 'dynamic-event-context-form-component',
              loadChildren: './administration/administration.module#AdministrationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_CATALOG_EVENT_SYMPTOM_FORM,
              path: 'dynamic-event-symptom-form-component',
              loadChildren: './administration/administration.module#AdministrationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_PROFILES_FORM,
              path: 'dynamic-profiles-form-component',
              loadChildren: './administration/administration.module#AdministrationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_PROFILES_SEARCH,
              path: 'dynamic-profiles-search-component',
              loadChildren: './administration/administration.module#AdministrationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_USERS_SEARCH,
              path: 'dynamic-users-search-component',
              loadChildren: './administration/administration.module#AdministrationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants'].ADM_USERS_FORM,
              path: 'dynamic-users-form-component',
              loadChildren: './administration/administration.module#AdministrationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_ATTRIBUTES_SEARCH,
              path: 'dynamic-administration-attributes-search-component',
              loadChildren: './administration/attributes/attributes.module#AttributesModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_ATTRIBUTES_FORM,
              path: 'dynamic-administration-attributes-form-component',
              loadChildren: './administration/attributes/attributes.module#AttributesModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_BACKGROUND_JOBS,
              path: 'dynamic-administration-background-jobs-component',
              loadChildren: './administration/administration.module#AdministrationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_SETTINGS_FORM,
              path: 'dynamic-administration-settings-form-component',
              loadChildren: './administration/settings/settings.module#SettingsModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_STOCK_TYPE_FORM,
              path: 'dynamic-administration-stock-type-form-component',
              loadChildren: './administration/administration.module#AdministrationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_WORKFLOW_MANAGEMENT_SEARCH,
              path: 'dynamic-administration-workflow-management-search-component',
              loadChildren: './administration/workflow-management/workflow-management.module#WorkflowManagementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_WORKFLOW_MANAGEMENT_FORM,
              path: 'dynamic-administration-workflow-management-form-component',
              loadChildren: './administration/workflow-management/workflow-management.module#WorkflowManagementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants'].ADM_MONITORING,
              path: 'dynamic-monitoring-form-component',
              loadChildren: './administration/monitoring/monitoring.module#MonitoringModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_LICENSING_SEARCH,
              path: 'dynamic-licensing-search-component',
              loadChildren: './administration/licensing/licensing.module#LicensingModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ADM_TODO_LIST_SEARCH,
              path: 'dynamic-todo-list-search-component',
              loadChildren: './administration/todo-list/todo-list.module#TodoListModule'
            },
            /**************************************************************************
             * Engineering Managament
             *************************************************************************/
            /* Operation */
            {
              componentId: 'OperationFormComponent',
              path: 'dynamic-engineering-management-operation-form-component',
              loadChildren: './engineering-management/operation/operation.module#OperationModule'
            },
            {
              componentId: 'OperationSearchComponent',
              path: 'dynamic-engineering-management-operation-search-component',
              loadChildren: './engineering-management/operation/operation.module#OperationModule'
            },
            {
              componentId: 'EvolutionFormComponent',
              path: 'dynamic-evolution-form-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId: 'EvolutionSearchComponent',
              path: 'dynamic-evolution-search-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId: 'FamilyFormComponent',
              path: 'dynamic-family-form-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId: 'FamilySearchComponent',
              path: 'dynamic-family-search-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId: 'FunctionalLocationFormComponent',
              path: 'dynamic-functional-location-form-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId: 'FunctionalLocationSearchComponent',
              path: 'dynamic-functional-location-search-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId: 'ModificationFormComponent',
              path: 'dynamic-modification-form-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId: 'ModificationSearchComponent',
              path: 'dynamic-modification-search-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId: 'PartNumberFormComponent',
              path: 'dynamic-part-number-form-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId: 'PartNumberSearchComponent',
              path: 'dynamic-part-number-search-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_DEA_DIA_FORM,
              path: 'dynamic-dea-dia-form-component',
              loadChildren: './engineering-management/dea-dia/dea-dia.module#DeaDiaModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_DEA_DIA_SEARCH,
              path: 'dynamic-dea-dia-search-component',
              loadChildren: './engineering-management/dea-dia/dea-dia.module#DeaDiaModule'
            },
            {
              componentId: 'SbadFormComponent',
              path: 'dynamic-sbad-form-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_SBAD_SEARCH,
              path: 'dynamic-sbad-search-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId: 'VisitFormComponent',
              path: 'dynamic-visit-form-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId: 'VisitSearchComponent',
              path: 'dynamic-visit-search-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_MAINTENANCE_PROGRAM_SEARCH,
              path: 'dynamic-maintenance-program-search-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_MAINTENANCE_PROGRAM_FORM,
              path: 'dynamic-maintenance-program-form-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_MAINTENANCE_PROGRAM_UPDATES_LIST,
              path: 'dynamic-maintenance-program-updates-list-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_ADDITIONAL_MAINTENANCE_GUIDELINE_SEARCH,
              path: 'dynamic-additional-maintenance-guideline-search-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_ADDITIONAL_MAINTENANCE_GUIDELINE_FORM,
              path: 'dynamic-additional-maintenance-guideline-form-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_AIRWORTHINESS_DIRECTIVE_SEARCH,
              path: 'dynamic-airworthiness-directive-search-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_AIRWORTHINESS_DIRECTIVE_FORM,
              path: 'dynamic-airworthiness-directive-form-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_ITEM_SEARCH,
              path: 'dynamic-engineering-management-item-search-component',
              loadChildren: './engineering-management/item/item.module#ItemModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants'].ENG_ITEM_FORM,
              path: 'dynamic-engineering-management-item-form-component',
              loadChildren: './engineering-management/item/item.module#ItemModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_ITEM_PART_NUMBER_FORM,
              path: 'dynamic-engineering-management-item-part-number-component',
              loadChildren:
                './engineering-management/item-part-number-form/item-part-number-form.module#ItemPartNumberFormModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_SHOP_MANUAL,
              path: 'dynamic-engineering-management-shop-manual-component',
              loadChildren: './engineering-management/shop-manual/shop-manual.module#ShopManualModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_MAI_UNIT_CONVERSION_MATRIX_SEARCH,
              path: 'dynamic-unit-conversion-matrix-search-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_MAI_UNIT_CONVERSION_MATRIX_FORM,
              path: 'dynamic-unit-conversion-matrix-form-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_CHANGE_RECORD_FORM,
              path: 'dynamic-change-record-form-component',
              loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
            },
            /**************************************************************************
             * Fleet Management
             *************************************************************************/
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_FDM_EVENT_FORM,
              path: 'dynamic-fdm-event-form-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_DEFECT_FORM,
              path: 'dynamic-defect-form-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_TOOL_SEARCH,
              path: 'dynamic-fleet-management-tool-search-component',
              loadChildren: './fleet-management/asset/asset.module#AssetModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants'].LOG_TOOL_FORM,
              path: 'dynamic-fleet-management-tool-form-component',
              loadChildren: './fleet-management/asset/asset.module#AssetModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_TRANSFER_ORDER_FORM,
              path: 'dynamic-transfer-order-form-component',
              loadChildren: './logistics/transfer-order/transfer-order.module#TransferOrderModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_TRANSFER_ORDER_SEARCH,
              path: 'dynamic-transfer-order-search-component',
              loadChildren: './logistics/transfer-order/transfer-order.module#TransferOrderModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_AIRCRAFT_SEARCH,
              path: 'dynamic-fleet-management-aircraft-search-component',
              loadChildren: './fleet-management/asset/asset.module#AssetModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_AIRCRAFT_FORM,
              path: 'dynamic-fleet-management-aircraft-form-component',
              loadChildren: './fleet-management/asset/asset.module#AssetModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_ENGINE_SEARCH,
              path: 'dynamic-fleet-management-engine-search-component',
              loadChildren: './fleet-management/asset/asset.module#AssetModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_ENGINE_FORM,
              path: 'dynamic-fleet-management-engine-form-component',
              loadChildren: './fleet-management/asset/asset.module#AssetModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_EQUIPMENT_SEARCH,
              path: 'dynamic-fleet-management-equipment-search-component',
              loadChildren: './fleet-management/asset/asset.module#AssetModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_EQUIPMENT_FORM,
              path: 'dynamic-fleet-management-equipment-form-component',
              loadChildren: './fleet-management/asset/asset.module#AssetModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_EVENT_SEARCH,
              path: 'dynamic-event-search-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_EVENT_CREATE,
              path: 'dynamic-event-create-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId: 'FleetSearchComponent',
              path: 'dynamic-fleet-search-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId: 'FleetFormComponent',
              path: 'dynamic-fleet-form-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId: 'InstallAssetComponent',
              path: 'dynamic-install-asset-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId: 'RemoveAssetComponent',
              path: 'dynamic-remove-asset-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants'].FLE_DATA_COPY,
              path: 'dynamic-fleet-data-copy-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_DATA_TRANSFER_SEARCH,
              path: 'dynamic-fleet-data-transfer-search-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_ASSET_LOG_FORM,
              path: 'dynamic-asset-log-form-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_ASSET_MEASURE_LOG_FORM,
              path: 'dynamic-asset-measure-log-form-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId: 'AssetMaintenancePlanComponent',
              path: 'dynamic-asset-maintenance-plan-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId: 'FunctionalLocationAssignmentComponent',
              path: 'dynamic-functional-location-assignment-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_ASSET_AT_DATE_SEARCH,
              path: 'dynamic-asset-at-date-search-component',
              loadChildren: './fleet-management/asset-at-date/asset-at-date.module#AssetAtDateModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_ASSET_AT_DATE_FORM,
              path: 'dynamic-asset-at-date-form-component',
              loadChildren: './fleet-management/asset-at-date/asset-at-date.module#AssetAtDateModule'
            },
            /**************************************************************************
             * Flight Operations
             *************************************************************************/
            {
              componentId: 'FLIOperationSearchComponent',
              path: 'dynamic-operation-search-component',
              loadChildren: './flight-operations/flight-operations.module#FlightOperationsModule'
            },
            {
              componentId: 'MissionSearchComponent',
              path: 'dynamic-mission-search-component',
              loadChildren: './flight-operations/flight-operations.module#FlightOperationsModule'
            },
            {
              componentId: 'MissionFormComponent',
              path: 'dynamic-mission-form-component',
              loadChildren: './flight-operations/flight-operations.module#FlightOperationsModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLI_RUNWAY_SCHEDULING_FORM,
              path: 'dynamic-runway-scheduling-component',
              loadChildren: './flight-operations/runway-scheduling/runway-scheduling.module#RunwaySchedulingModule'
            },
            /**************************************************************************
             *  Human Resources
             *************************************************************************/
            {
              componentId: 'EmployeeSearchComponent',
              path: 'dynamic-employee-search-component',
              loadChildren: './human-resources/human-resources.module#HumanResourcesModule'
            },
            {
              componentId: 'EmployeeFormComponent',
              path: 'dynamic-employee-form-component',
              loadChildren: './human-resources/human-resources.module#HumanResourcesModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .HR_STAFF_ALERT_SEARCH,
              path: 'dynamic-staff-alert-search-component',
              loadChildren: './human-resources/staff-alert/staff-alert.module#StaffAlertModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .HR_STAFF_ALERT_FORM,
              path: 'dynamic-staff-alert-form-component',
              loadChildren: './human-resources/staff-alert/staff-alert.module#StaffAlertModule'
            },
            /**************************************************************************
             *  Logistics
             *************************************************************************/
            {
              componentId: 'MaterialSearchComponent',
              path: 'dynamic-material-search-component',
              loadChildren: './logistics/material/material.module#MaterialModule'
            },
            {
              componentId: 'MaterialFormComponent',
              path: 'dynamic-material-form-component',
              loadChildren: './logistics/material/material.module#MaterialModule'
            },
            {
              componentId: 'InventoryByWarehouseSearchComponent',
              path: 'dynamic-logistics-inventory-by-warehouse-search-component',
              loadChildren:
                './logistics/inventory-by-warehouse/inventory-by-warehouse.module#InventoryByWareHouseModule'
            },
            {
              componentId: 'InventoryByWarehouseFormComponent',
              path: 'dynamic-logistics-inventory-by-warehouse-form-component',
              loadChildren:
                './logistics/inventory-by-warehouse/inventory-by-warehouse.module#InventoryByWareHouseModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_LOCAL_GOODS_RECEIPT_SEARCH,
              path: 'dynamic-local-goods-receipt-search-component',
              loadChildren: './logistics/goods-receipt/goods-receipt.module#GoodsReceiptModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_EXTERNAL_GOODS_RECEIPT_SEARCH,
              path: 'dynamic-external-goods-receipt-search-component',
              loadChildren: './logistics/goods-receipt/goods-receipt.module#GoodsReceiptModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_GOODS_RECEIPT_FORM,
              path: 'dynamic-goods-receipt-search-component',
              loadChildren: './logistics/goods-receipt/goods-receipt.module#GoodsReceiptModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_GOODS_EXTERNAL_SHIPMENT_SEARCH,
              path: 'dynamic-local-shipment-search-component',
              loadChildren: './logistics/shipment-folder/shipment-folder.module#ShipmentFolderModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_GOODS_LOCAL_SHIPMENT_SEARCH,
              path: 'dynamic-external-shipment-search-component',
              loadChildren: './logistics/shipment-folder/shipment-folder.module#ShipmentFolderModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_GOODS_SHIPMENT_FORM,
              path: 'dynamic-shipment-folder-form-component',
              loadChildren: './logistics/shipment-folder/shipment-folder.module#ShipmentFolderModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_GOODS_MATERIAL_SHIPMENT_FORM,
              path: 'dynamic-material-shipment-form-component',
              loadChildren: './logistics/shipment-folder/shipment-folder.module#ShipmentFolderModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_PACKAGE_SEARCH_COMPONENT,
              path: 'dynamic-package-search-component',
              loadChildren: './logistics/package/package.module#PackageModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_PACKAGE_FORM_COMPONENT,
              path: 'dynamic-package-form-component',
              loadChildren: './logistics/package/package.module#PackageModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_PACKAGING_BATCH_SEARCH,
              path: 'dynamic-packaging-batch-search-component',
              loadChildren: './logistics/packaging-batch/packaging-batch.module#PackagingBatchModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_PACKAGING_BATCH_FORM,
              path: 'dynamic-packaging-batch-search-component',
              loadChildren: './logistics/packaging-batch/packaging-batch.module#PackagingBatchModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_PROCUREMENT_REQUEST_SEARCH,
              path: 'dynamic-procurement-request-search-component',
              loadChildren: './logistics/procurement-request/procurement-request.module#ProcurementRequestModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_PROCUREMENT_REQUEST_FORM,
              path: 'dynamic-procurement-request-form-component',
              loadChildren: './logistics/procurement-request/procurement-request.module#ProcurementRequestModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_VALUATION_SEARCH,
              path: 'dynamic-stock-valuation-search-component',
              loadChildren: './logistics/stock-valuation/stock-valuation.module#StockValuationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_VALUATION_FORM,
              path: 'dynamic-stock-valuation-form-component',
              loadChildren: './logistics/stock-valuation/stock-valuation.module#StockValuationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_ALERT_SEARCH,
              path: 'dynamic-stock-alert-search-component',
              loadChildren: './logistics/stock-alert/stock-alert.module#StockAlertModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_ALERT_FORM,
              path: 'dynamic-stock-alert-form-component',
              loadChildren: './logistics/stock-alert/stock-alert.module#StockAlertModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_STATUS_FORM,
              path: 'dynamic-stock-status-form-component',
              loadChildren: './logistics/stock-status/stock-status.module#StockStatusModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_STATUS_SEARCH,
              path: 'dynamic-stock-status-search-component',
              loadChildren: './logistics/stock-status/stock-status.module#StockStatusModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_CONSULT_SEARCH,
              path: 'dynamic-stock-consult-search-component',
              loadChildren: './logistics/stock-consult/stock-consult.module#StockConsultModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_CONSULT_FORM,
              path: 'dynamic-stock-consult-form-component',
              loadChildren: './logistics/stock-consult/stock-consult.module#StockConsultModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_MOVEMENTS_SEARCH,
              path: 'dynamic-stock-movements-search-component',
              loadChildren: './logistics/stock-movements/stock-movements.module#StockMovementsModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_MOVEMENTS_SEARCH_PICKING,
              path: 'dynamic-stock-movements-search-component',
              loadChildren: './logistics/stock-movements/stock-movements.module#StockMovementsModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_MOVEMENTS_SEARCH_STOCKPILLING,
              path: 'dynamic-stock-movements-search-component',
              loadChildren: './logistics/stock-movements/stock-movements.module#StockMovementsModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_MOVEMENTS_FORM_STOCKPILLING,
              path: 'dynamic-stock-movements-form-component',
              loadChildren: './logistics/stock-movements/stock-movements.module#StockMovementsModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_MOVEMENTS_FORM_PICKING,
              path: 'dynamic-stock-movements-form-component',
              loadChildren: './logistics/stock-movements/stock-movements.module#StockMovementsModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_MOVEMENTS_FORM,
              path: 'dynamic-stock-movements-form-component',
              loadChildren: './logistics/stock-movements/stock-movements.module#StockMovementsModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_MOVEMENT_FORM,
              path: 'dynamic-stock-movement-form-component',
              loadChildren: './logistics/stock-movement/stock-movement.module#StockMovementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_ORDER_DOCUMENT_SEARCH,
              path: 'dynamic-order-document-search-component',
              loadChildren: './logistics/order-document/order-document.module#OrderDocumentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_ORDER_DOCUMENT_FORM,
              path: 'dynamic-order-document-form-component',
              loadChildren: './logistics/order-document/order-document.module#OrderDocumentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_SALES_DOCUMENT_SEARCH,
              path: 'dynamic-sales-document-search-component',
              loadChildren: './logistics/sales-document/sales-document.module#SalesDocumentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_SALES_DOCUMENT_FORM,
              path: 'dynamic-sales-document-form-component',
              loadChildren: './logistics/sales-document/sales-document.module#SalesDocumentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_TECHNICAL_RECEIPT_SEARCH,
              path: 'dynamic-technical-receipt-search-component',
              loadChildren: './logistics/technical-receipt/technical-receipt.module#TechnicalReceiptModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_TECHNICAL_RECEIPT_FORM,
              path: 'dynamic-technical-receipt-form-component',
              loadChildren: './logistics/technical-receipt/technical-receipt.module#TechnicalReceiptModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_TOOLS_MAINTENANCE_STATUS_SEARCH,
              path: 'dynamic-tools-maintenance-status-search-component',
              loadChildren:
                './logistics/tools-maintenance-status/tools-maintenance-status.module#ToolsMaintenanceStatusModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_TOOLS_MAINTENANCE_STATUS_FORM,
              path: 'dynamic-tools-maintenance-status-form-component',
              loadChildren:
                './logistics/tools-maintenance-status/tools-maintenance-status.module#ToolsMaintenanceStatusModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_TOOLS_MAINTENANCE_PLANNING_SEARCH,
              path: 'dynamic-tools-maintenance-planning-search-component',
              loadChildren:
                './logistics/tools-maintenance-planning/tools-maintenance-planning.module#ToolsMaintenancePlanningModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_TOOLS_MAINTENANCE_PLANNING_FORM,
              path: 'dynamic-tools-maintenance-planning-form-component',
              loadChildren:
                './logistics/tools-maintenance-planning/tools-maintenance-planning.module#ToolsMaintenancePlanningModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_TOOLS_CONTROL_GROUND_EQUIPMENT,
              path: 'dynamic-control-ground-equipment-component',
              loadChildren:
                './logistics/control-ground-equipment/control-ground-equipment.module#ControlGroundEquipmentModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_MATERIAL_REQUEST_MANAGEMENT_SEARCH,
              path: 'dynamic-material-request-management-search-component',
              loadChildren:
                './logistics/material-request-management/material-request-management.module#MaterialRequestManagementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_MATERIAL_REQUEST_MANAGEMENT_FORM,
              path: 'dynamic-material-request-management-form-component',
              loadChildren:
                './logistics/material-request-management/material-request-management.module#MaterialRequestManagementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_MATERIAL_REQUEST_TRANSFER_ORDER_MANAGEMENT_FORM,
              path: 'dynamic-material-request-transfer-order-management-form-component',
              loadChildren:
                './logistics/material-request-transfer-order-management/material-request-transfer-order-management.module#MaterialRequestTransferOrderManagementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_LITIGATION_FILE_SEARCH,
              path: 'dynamic-litigation-file-search-component',
              loadChildren: './logistics/litigation-file/litigation-file.module#LitigationFileModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_LITIGATION_FILE_FORM,
              path: 'dynamic-litigation-file-form-component',
              loadChildren: './logistics/litigation-file/litigation-file.module#LitigationFileModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_MANUFACTURING_BATCH_SEARCH,
              path: 'dynamic-manufacturing-batch-search-component',
              loadChildren: './logistics/manufacturing-batch/manufacturing-batch.module#ManufacturingBatchModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_MANUFACTURING_BATCH_FORM,
              path: 'dynamic-manufacturing-batch-form-component',
              loadChildren: './logistics/manufacturing-batch/manufacturing-batch.module#ManufacturingBatchModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_VIEW_SEARCH,
              path: 'dynamic-stock-view-search-component',
              loadChildren: './logistics/stock-view/stock-view.module#StockViewModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .LOG_STOCK_VIEW_FORM,
              path: 'dynamic-stock-view-form-component',
              loadChildren: './logistics/stock-view/stock-view.module#StockViewModule'
            },
            /**************************************************************************
             *  Maintenance
             *************************************************************************/
            {
              componentId: 'UnitConversionMatrixComponent',
              path: 'dynamic-unit-conversion-matrix-component',
              loadChildren: './maintenance/maintenance.module#MaintenanceModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .DAS_WORKSHOP_HOME,
              path: 'dynamic-workshop-home-component',
              loadChildren: './maintenance/maintenance.module#MaintenanceModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .DAS_REFERENTIAL,
              path: 'dynamic-referential-dashboard-component',
              loadChildren: './maintenance/maintenance.module#MaintenanceModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_ASSET_REVIEW_SEARCH,
              path: 'dynamic-asset-review-search-component',
              loadChildren: './maintenance/asset-review/asset-review.module#AssetReviewModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_ASSET_REVIEW_FORM,
              path: 'dynamic-asset-review-form-component',
              loadChildren: './maintenance/asset-review/asset-review.module#AssetReviewModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_EXTRACT_TASKS_APPLICATIONS,
              path: 'dynamic-extract-tasks-applications-component',
              loadChildren:
                './maintenance/extract-tasks-applications/extract-tasks-applications.module#ExtractTasksApplicationsModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_FLIGHT_OPERATIONS,
              path: 'dynamic-flight-operations-validation-component',
              loadChildren: './maintenance/asset-review/asset-review.module#AssetReviewModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_CONFIGURATION_CONTROL_SEARCH,
              path: 'dynamic-configuration-control-search-component',
              loadChildren:
                './maintenance/configuration-control/configuration-control.module#ConfigurationControlModule'
            },
            /* Work Package */
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_WORK_PACKAGE_FORM,
              path: 'work-package-form-component',
              loadChildren: './maintenance/work-package/work-package.module#WorkPackageModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_WORK_PACKAGE_SEARCH,
              path: 'work-package-search-component',
              loadChildren: './maintenance/work-package/work-package.module#WorkPackageModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_WORK_ORDERS_FORM,
              path: 'work-orders-form-component',
              loadChildren: './maintenance/work-orders/work-orders.module#WorkOrdersModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_WORK_ORDERS_CALENDAR_FORM,
              path: 'work-orders-calendar-form-component',
              loadChildren: './maintenance/work-orders-calendar/work-orders-calendar.module#WorkOrdersCalendarModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_UPDATE_LOGBOOK_FORM,
              path: 'dynamic-update-logbook-form-component',
              loadChildren: './maintenance/update-logbook/update-logbook.module#UpdateLogbookModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_CONFIGURATION_CONTROL,
              path: 'dynamic-configuration-control-component',
              loadChildren:
                './maintenance/configuration-control/configuration-control.module#ConfigurationControlModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_COMPONENT_WORK_PACKAGE_SCHEDULING,
              path: 'dynamic-work-package-scheduling-component',
              loadChildren: './maintenance/maintenance.module#MaintenanceModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_COMPONENT_WORKS_MANAGEMENT,
              path: 'dynamic-works-management-component',
              loadChildren: './maintenance/works-management/works-management.module#WorksManagementModule'
            },
            /* Component Cockpit  */
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_COMPONENT_COCKPIT_FORM,
              path: 'dynamic-maintenance-component-cockpit-form-component',
              loadChildren: './maintenance/component-cockpit/component-cockpit.module#ComponentCockpitModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_COMPONENT_COCKPIT_SEARCH,
              path: 'dynamic-maintenance-component-cockpit-search-component',
              loadChildren: './maintenance/component-cockpit/component-cockpit.module#ComponentCockpitModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_COMPONENT_COCKPIT_MATRIX,
              path: 'dynamic-component-cockpit-matrix-component',
              loadChildren:
                './maintenance/component-cockpit-matrix/component-cockpit-matrix.module#ComponentCockpitMatrixModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_WORK_ORDER_FORM,
              path: 'work-order-form-component',
              loadChildren: './maintenance/work-order/work-order.module#WorkOrderModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_COMPONENT_COCKPIT_OPERATION_SEARCH,
              path: 'dynamic-component-cockpit-operation-component',
              loadChildren:
                './maintenance/component-cockpit-operation/component-cockpit-operation.module#ComponentCockpitOperationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_COMPONENT_COCKPIT_OPERATION_FORM,
              path: 'dynamic-component-cockpit-operation-form-component',
              loadChildren:
                './maintenance/component-cockpit-operation/component-cockpit-operation.module#ComponentCockpitOperationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_COCKPIT_INSPECTION_FORM,
              path: 'dynamic-cockpit-inspection-form-component',
              loadChildren: './maintenance/cockpit-inspection/cockpit-inspection.module#CockpitInspectionModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_COCKPIT_WORKSCOPE_FORM,
              path: 'dynamic-cockpit-workscope-form-component',
              loadChildren: './maintenance/cockpit-workscope/cockpit-workscope.module#CockpitWorkscopeModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_INFO_SUB_ASSEMBLY_FORM,
              path: 'dynamic-item-sub-assembly-form-component',
              loadChildren: './maintenance/cockpit-inspection/cockpit-inspection.module#CockpitInspectionModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_ITEM_INVENTORY,
              path: 'dynamic-item-inventory-form-component',
              loadChildren: '../shared/components/add-edit-inventory/add-edit-inventory.module#AddEditInventoryModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_MANAGE_CONFIGURATION_FORM,
              path: 'dynamic-manage-configuration-form-component',
              loadChildren: './maintenance/cockpit-workscope/cockpit-workscope.module#CockpitWorkscopeModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_MANAGE_REMOVAL_CAUSES_FORM,
              path: 'dynamic-manage-removal-cause-form-component',
              loadChildren: './maintenance/cockpit-workscope/cockpit-workscope.module#CockpitWorkscopeModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_MEASURE_COMPONENT,
              path: 'dynamic-mesaure-component',
              loadChildren: '../shared/components/component-measure/component-measure.module#ComponentMeasureModule'
            },
            /* My Job Cards */
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .MAI_MY_JOBS_CARDS_FORM,
              path: 'dynamic-my-jobs-cards-form-component',
              loadChildren: './maintenance/my-jobs-cards/my-jobs-cards.module#MyJobsCardsModule'
            },
            /* Purchase & Contract */
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .PCT_PURCHASE_CONTRACT_FORM,
              path: 'dynamic-purchase-contract-form-component',
              loadChildren:
                '../modules/purchase-contract/components/purchase-contract/purchase-contract.module#PurchaseContractModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .PCT_PURCHASE_CONTRACT_SEARCH,
              path: 'dynamic-purchase-contract-search-component',
              loadChildren:
                '../modules/purchase-contract/components/purchase-contract/purchase-contract.module#PurchaseContractModule'
            },
            /* Work package global search */
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .FLE_SEARCH_WORK_PACKAGE,
              path: 'dynamic-search-work-package-component',
              loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_OPERATIONAL_CONFIGURATION_FORM,
              path: 'dynamic-engineering-management-operational-configuration-form-component',
              loadChildren:
                './engineering-management/operational-configuration/operational-configuration.module#OperationalConfigurationModule'
            },
            {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_0__['ComponentConstants']
                  .ENG_OPERATIONAL_CONFIGURATION_SEARCH,
              path: 'dynamic-engineering-management-operational-configuration-search-component',
              loadChildren:
                './engineering-management/operational-configuration/operational-configuration.module#OperationalConfigurationModule'
            }
          ];
          return DynamicComponentsConstants;
        })();

        /***/
      },

    /***/ './src/app/main/fleet-management/asset/search/asset-search.service.ts':
      /*!****************************************************************************!*\
  !*** ./src/app/main/fleet-management/asset/search/asset-search.service.ts ***!
  \****************************************************************************/
      /*! exports provided: AssetSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AssetSearchService', function() {
          return AssetSearchService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/asset-management.api */ './src/app/shared/api/asset-management.api.ts'
        );
        /* harmony import */ var _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/bido-equipment.api */ './src/app/shared/api/bido-equipment.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-df-type.api */ './src/app/shared/api/bidt-df-type.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_product_customer_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-product-customer.api */ './src/app/shared/api/bidt-product-customer.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-site.api */ './src/app/shared/api/bidt-site.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_transfer_order_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-transfer-order.api */ './src/app/shared/api/bidt-transfer-order.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-business.api */ './src/app/shared/api/fleet-business.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
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

        var AssetSearchService = /** @class */ (function(_super) {
          __extends(AssetSearchService, _super);
          function AssetSearchService(
            http,
            appConfigService,
            fleetBusinessApi,
            fleetManagementApi,
            propertiesService,
            productStructureManagementApi,
            assetManagementApi,
            bidtWarehouseApi,
            bidtSiteApi,
            bidtProductCustomerApi,
            bidtDfTypeApi,
            bidoEquipmentApi,
            bidtTransferOrderApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetBusinessApi = fleetBusinessApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.propertiesService = propertiesService;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.assetManagementApi = assetManagementApi;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.bidtSiteApi = bidtSiteApi;
            _this.bidtProductCustomerApi = bidtProductCustomerApi;
            _this.bidtDfTypeApi = bidtDfTypeApi;
            _this.bidoEquipmentApi = bidoEquipmentApi;
            _this.bidtTransferOrderApi = bidtTransferOrderApi;
            return _this;
          }
          AssetSearchService.prototype.findBidoEquipmentsDTOBySearchCriteria = function(
            findBidoEquipmentsBySearchCriteriaInput
          ) {
            return _super.prototype.post.call(
              this,
              this.assetManagementApi.searchEquipmentList,
              findBidoEquipmentsBySearchCriteriaInput
            );
          };
          AssetSearchService.prototype.removeBidoEquipment = function(pnId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoEquipmentList, pnId);
          };
          AssetSearchService.prototype.getFamilyVariant = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.initializeFamilyVariantList,
              input
            );
          };
          AssetSearchService.prototype.getAssetSourceSystemIdList = function(bireId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.getAssetSourceSystemIdList, bireId);
          };
          AssetSearchService.prototype.getEquipmentLocationList = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.getEquipmentLocationList);
          };
          AssetSearchService.prototype.getEquipmentFunctionList = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                .ITEM_FAMILY_CODE_MAP
            );
          };
          AssetSearchService.prototype.getOperationalStatusMap = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.initializeOperationalStatusList,
              input
            );
          };
          AssetSearchService.prototype.findBidoCustomersBySearchCriteria = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoCustomersBySearchCriteria,
              criteria
            );
          };
          AssetSearchService.prototype.findBidoAttributesByAttributeCategory = function(attributeCategory) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoAttributesByAttributeCategory,
              attributeCategory
            );
          };
          AssetSearchService.prototype.fetchGroundEquipmentFunctionList = function() {
            return _super.prototype.post.call(this, this.assetManagementApi.fetchGroundEquipmentFunctionList);
          };
          AssetSearchService.prototype.findAll = function() {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findAll);
          };
          AssetSearchService.prototype.lockTool = function(equipmentId) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.lockEquipmentStructure, equipmentId);
          };
          AssetSearchService.prototype.unlockTool = function(equipmentId) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.unlockEquipmentStructure, equipmentId);
          };
          AssetSearchService.prototype.findBidoEquipment = function(bidoEquipmentDTOId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, bidoEquipmentDTOId);
          };
          AssetSearchService.prototype.findAircraftListLabelValue = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAircraftListLabelValue);
          };
          AssetSearchService.prototype.findAllBireSite = function() {
            return _super.prototype.post.call(this, this.bidtSiteApi.findAll);
          };
          AssetSearchService.prototype.getWarehousesBySiteId = function(siteId) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, siteId);
          };
          AssetSearchService.prototype.findCustomersByProduct = function(pnCode) {
            return _super.prototype.post.call(this, this.bidtProductCustomerApi.findByProduct, pnCode);
          };
          AssetSearchService.prototype.findShipmentDfTypeById = function(id) {
            return _super.prototype.post.call(this, this.bidtDfTypeApi.findShipmentDfTypeById, id);
          };
          AssetSearchService.prototype.getStockInformationByAsset = function(bidoEquipmentDTO) {
            return _super.prototype.post.call(this, this.bidoEquipmentApi.getStockInformationByAsset, bidoEquipmentDTO);
          };
          AssetSearchService.prototype.findBirePn = function(pn) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBirePn, pn);
          };
          AssetSearchService.prototype.findBidtWarehouseById = function(id) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findBidtWarehouseById, id);
          };
          AssetSearchService.prototype.validateSendToRepair = function(sendToRepair) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.validateSendToRepair, sendToRepair);
          };
          AssetSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_14__['AppConfigService'],
                _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_9__['FleetBusinessApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_10__['FleetManagementApi'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_15__['PropertiesService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_11__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__['AssetManagementApi'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_8__['BidtWarehouseApi'],
                _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_6__['BidtSiteApi'],
                _shared_api_bidt_product_customer_api__WEBPACK_IMPORTED_MODULE_5__['BidtProductCustomerApi'],
                _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_4__['BidtDfTypeApi'],
                _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_3__['BidoEquipmentApi'],
                _shared_api_bidt_transfer_order_api__WEBPACK_IMPORTED_MODULE_7__['BidtTransferOrderApi']
              ])
            ],
            AssetSearchService
          );
          return AssetSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_13__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/main-routing.module.ts':
      /*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
      /*! exports provided: MainRoutingModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MainRoutingModule', function() {
          return MainRoutingModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _guards_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../guards/can-activate-guard.service */ './src/app/guards/can-activate-guard.service.ts'
        );
        /* harmony import */ var _guards_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../guards/can-deactivate-guard.service */ './src/app/guards/can-deactivate-guard.service.ts'
        );
        /* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./main.component */ './src/app/main/main.component.ts'
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

        var mainRoutes = [
          {
            path: ':object/:id',
            component: _main_component__WEBPACK_IMPORTED_MODULE_4__['MainComponent'],
            canActivate: [_guards_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_2__['CanActivateGuard']],
            canDeactivate: [_guards_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_3__['CanDeactivateGuard']]
          },
          {
            path: '',
            component: _main_component__WEBPACK_IMPORTED_MODULE_4__['MainComponent'],
            canDeactivate: [_guards_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_3__['CanDeactivateGuard']]
          }
        ];
        var MainRoutingModule = /** @class */ (function() {
          function MainRoutingModule() {}
          MainRoutingModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(mainRoutes)],
                providers: [_guards_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_3__['CanDeactivateGuard']]
              })
            ],
            MainRoutingModule
          );
          return MainRoutingModule;
        })();

        /***/
      },

    /***/ './src/app/main/main.component.html':
      /*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="layout-page">\r\n  <div class="tab-container-wrapper">\r\n    <!-- ********************************************************************** -->\r\n    <!-- Top bar -->\r\n    <!-- ********************************************************************** -->\r\n    <div class="topbar">\r\n      <button class="logo-wrapper" (click)="showHomeTab()">\r\n        <img src="assets/img/logo.svg" />\r\n      </button>\r\n\r\n      <ul class="list--unstyled nav-container">\r\n        <li\r\n          #menuEntryList\r\n          *ngFor="let menuEntry of menuService.menuEntries"\r\n          class="nav-dropdown-toggle"\r\n          [ngClass]="{\r\n            selected: selectedMenuEntryKey && menuEntry.key === selectedMenuEntryKey\r\n          }"\r\n        >\r\n          <button\r\n            [ngClass]="{\r\n              active: currentMenuEntry && menuEntry.key === currentMenuEntry.key\r\n            }"\r\n            class="with-dropdown"\r\n            (click)="onClickMenuEntry($event, menuEntry)"\r\n            (mouseenter)="onHoverMenuEntry($event, menuEntry)"\r\n          >\r\n            {{ "menu." + menuEntry.key | translate }}\r\n            <i class="material-icons">keyboard_arrow_down</i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n\r\n      <div #originGlobalSearch class="search-input-container">\r\n        <div class="search-input-inner" [ngClass]="{ active: overlayGlobalSearchActive$ | async }">\r\n          <input\r\n            class="app-input"\r\n            placeholder="{{ \'searchInMenuEntries\' | translate }}"\r\n            type="text"\r\n            [(ngModel)]="searchvalue"\r\n            (focus)="showGlobalSearchOverlay(originGlobalSearch); search()"\r\n            (keyup)="search()"\r\n          />\r\n        </div>\r\n      </div>\r\n\r\n      <div #todoList class="todo-list">\r\n        <button\r\n          aria-hidden="false"\r\n          aria-label="Todo list"\r\n          matTooltip="{{ \'leftsidebar.todoList\' | translate }}"\r\n          matTooltipPosition="below"\r\n          (click)="openTodoList()"\r\n        >\r\n          <mat-icon *ngIf="todoListLength > 0" matBadge="{{ todoListLength }}" matBadgeColor="warn">\r\n            mail\r\n          </mat-icon>\r\n          <mat-icon *ngIf="todoListLength == 0">mail</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n      <div #originDashboards class="header-user-container" *ngIf="menuService.dashboardEntries.length > 0">\r\n        <button\r\n          [ngClass]="{\r\n            active: overlayDashboardsActive$ | async,\r\n            \'with-dropdown\': menuService.dashboardEntries.length > 1\r\n          }"\r\n          (click)="showDashboards(originDashboards)"\r\n        >\r\n          <mat-icon aria-hidden="false" aria-label="Main menu">dashboard</mat-icon>\r\n          <i class="material-icons" *ngIf="menuService.dashboardEntries.length > 1">keyboard_arrow_down</i>\r\n        </button>\r\n      </div>\r\n\r\n      <div #originHeaderUser class="header-user-container">\r\n        <button\r\n          class="with-dropdown"\r\n          [ngClass]="{ active: overlayHeaderUserActive$ | async }"\r\n          (click)="showHeaderUserOverlay(originHeaderUser)"\r\n        >\r\n          <mat-icon aria-hidden="false" aria-label="Main menu">account_circle</mat-icon>\r\n          <i class="material-icons">keyboard_arrow_down</i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class="back"\r\n      aria-label="Back to previous page"\r\n      (click)="openPreviousTab()"\r\n      *ngIf="tabService.currentTabLoaded && tabService.breadcrumbs.length > 1"\r\n    >\r\n      <mat-icon>arrow_back</mat-icon>\r\n    </button>\r\n    <aw-breadcrumb\r\n      *ngIf="currentTab && (!homeTab || currentTab.id !== homeTab.id)"\r\n      [ngClass]="{ \'visibility--hidden\': !tabService.currentTabLoaded }"\r\n    ></aw-breadcrumb>\r\n\r\n    <aw-tab-container\r\n      *ngFor="let tab of tabs"\r\n      [tab]="tab"\r\n      [ngClass]="{ \'display--none\': !currentTab || tab.id !== currentTab.id }"\r\n    >\r\n    </aw-tab-container>\r\n  </div>\r\n\r\n  <!-- ********************************************************************** -->\r\n  <!-- Overlays -->\r\n  <!-- ********************************************************************** -->\r\n\r\n  <div\r\n    #menuContainer\r\n    *ngIf="showMenuEntry"\r\n    class="mega-menu-overlay"\r\n    [style.max-width]="megaMenuWidth"\r\n    [style.min-width]="megaMenuWidth"\r\n    [style.left]="megaMenuOffsetLeft"\r\n  >\r\n    <div *ngFor="let submenuEntry of currentMenuEntry.submenus" class="menu-entry-wrapper">\r\n      <div class="menu-entry">{{ "menu." + submenuEntry.key | translate }}</div>\r\n\r\n      <div *ngFor="let subsubmenuEntry of submenuEntry.submenus" class="submenu-entry-wrapper">\r\n        <span class="submenu-entry" (click)="menuService.openMenuEntry(subsubmenuEntry.key)">\r\n          {{ "transaction." + subsubmenuEntry.key | translate }}\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class="scroll-to-top-wrapper" [ngClass]="{ \'display--none\': !scrollToTopButtonVisible }" (click)="scrollToTop()">\r\n    <i class="fa fa-fw fa-chevron-up" aria-hidden="true"></i>\r\n  </div> -->\r\n\r\n  <aw-dialog-menu-search\r\n    *ngIf="searchMenuDialogVisible"\r\n    [(display)]="searchMenuDialogVisible"\r\n    [currentTab]="currentTab"\r\n    [menuEntries]="menuService.menuEntries"\r\n  ></aw-dialog-menu-search>\r\n</div>\r\n\r\n<aw-confirm-dialog></aw-confirm-dialog>\r\n';

        /***/
      },

    /***/ './src/app/main/main.component.scss':
      /*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .layout-page .topbar {\n  align-items: center;\n  background-color: #01579b;\n  color: #fff;\n  display: flex;\n  flex-direction: row;\n  height: 40px;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 2000; }\n  :host .layout-page .topbar app-global-alerts,\n  :host .layout-page .topbar app-global-search,\n  :host .layout-page .topbar app-header-menu,\n  :host .layout-page .topbar app-header-user,\n  :host .layout-page .topbar app-navigation-history {\n    height: 40px; }\n  :host .layout-page .topbar app-header-menu {\n    flex-grow: 1; }\n  :host .layout-page .topbar button.with-dropdown {\n    align-items: center;\n    display: flex;\n    flex-direction: row; }\n  :host .layout-page .topbar button.with-dropdown i {\n      font-size: 16px; }\n  :host .layout-page .topbar .logo-wrapper {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin-left: 0;\n    max-width: 50px;\n    min-width: 50px; }\n  :host .layout-page .topbar ul {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    height: 100%;\n    padding-left: 0; }\n  :host .layout-page .topbar ul li {\n      align-items: center;\n      display: flex;\n      flex-direction: row;\n      position: relative; }\n  :host .layout-page .topbar ul li button {\n        opacity: 0.8; }\n  :host .layout-page .topbar ul li button:focus {\n        outline: none; }\n  :host .layout-page .topbar ul li.selected button {\n        background-color: #fff;\n        color: #01579b;\n        opacity: 1; }\n  :host .layout-page .topbar button {\n    background: transparent;\n    color: currentColor;\n    border: 0;\n    border-radius: 4px;\n    font-weight: 500;\n    height: 32px;\n    margin: 0 2px;\n    padding: 6px 8px;\n    cursor: pointer; }\n  :host .layout-page .topbar button:hover {\n      outline: 0; }\n  :host .layout-page .topbar button:hover {\n      color: #fff; }\n  :host .layout-page .topbar .search-input-container .search-input-inner,\n  :host .layout-page .topbar button:hover,\n  :host .layout-page .topbar button.active {\n    background-color: rgba(209, 209, 240, 0.2); }\n  :host .layout-page .topbar .search-input-container .search-input-inner.active {\n    background-color: #fff; }\n  :host .layout-page .topbar .search-input-container .search-input-inner input {\n    background: none;\n    color: #fff; }\n  :host .layout-page .topbar .search-input-container .search-input-inner input:focus {\n      color: #000; }\n  :host .layout-page .topbar .search-input-container .search-input-inner input::-webkit-input-placeholder {\n      color: #fff; }\n  :host .layout-page .topbar .search-input-container .search-input-inner input:-moz-placeholder {\n      color: #fff; }\n  :host .layout-page .topbar .search-input-container .search-input-inner input::-moz-placeholder {\n      color: #fff; }\n  :host .layout-page .topbar .search-input-container .search-input-inner input:-ms-input-placeholder {\n      color: #fff; }\n  :host .layout-page .search-input-container {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  height: 100%; }\n  :host .layout-page .search-input-container .search-input-inner {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    border-radius: 4px;\n    height: 32px;\n    position: relative;\n    width: 200px;\n    transition: background-color ease-in-out 0.15s, border-color ease-in-out 0.15s, width ease-in-out 0.15s; }\n  :host .layout-page .search-input-container .search-input-inner.active {\n      width: 300px; }\n  :host .layout-page .search-input-container .search-input-inner input {\n      border: 0;\n      margin-left: 5px;\n      outline: 0;\n      padding: 4px 20px 4px 0;\n      width: 98%;\n      transition: color ease-in-out 0.15s; }\n  :host .layout-page .header-user-container {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  position: relative; }\n  :host .layout-page .header-user-container button {\n    margin-right: 0; }\n  :host .layout-page .mega-menu-overlay {\n  outline: 1px solid #f0f0f0;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-top: calc(8px / 2);\n  position: fixed;\n  top: 40px;\n  z-index: 11;\n  display: flex;\n  flex-direction: row;\n  background-color: #01579b;\n  color: #fff;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  z-index: 30; }\n  :host .layout-page .mega-menu-overlay .menu-entry-wrapper {\n    display: flex;\n    flex-direction: column;\n    padding: calc(8px * 3);\n    width: 19rem; }\n  :host .layout-page .mega-menu-overlay .menu-entry-wrapper .menu-entry {\n      display: flex;\n      flex-direction: row;\n      align-items: flex-end;\n      border-bottom: 2px solid #fff;\n      font-size: 1rem;\n      font-weight: 600;\n      line-height: 1;\n      margin-bottom: 8px;\n      max-width: -webkit-fit-content;\n      max-width: -moz-fit-content;\n      max-width: fit-content;\n      padding-bottom: 8px; }\n  :host .layout-page .mega-menu-overlay .menu-entry-wrapper .submenu-entry-wrapper {\n      display: flex;\n      flex-direction: row;\n      padding-top: 8px; }\n  :host .layout-page .mega-menu-overlay .menu-entry-wrapper .submenu-entry-wrapper .submenu-entry {\n        border-bottom-color: transparent;\n        border-bottom-style: solid;\n        border-bottom-width: 1px;\n        cursor: pointer;\n        transition: border-color 100ms linear; }\n  :host .layout-page .mega-menu-overlay .menu-entry-wrapper .submenu-entry-wrapper .submenu-entry:hover {\n          border-bottom-color: #fff; }\n  :host .layout-page .scroll-to-top-wrapper {\n  background-color: #01579b;\n  border-color: #fff;\n  color: #fff;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 1px;\n  bottom: 30px;\n  cursor: pointer;\n  padding: 8px;\n  position: fixed;\n  right: 30px;\n  z-index: 11;\n  transition: background-color 0.2s, color 0.2s; }\n  :host .layout-page .scroll-to-top-wrapper:not(:disabled):hover, :host .layout-page .scroll-to-top-wrapper:not(:disabled).active {\n    background-color: #fff;\n    border-color: #01579b;\n    color: #01579b; }\n  :host .breadcrumbs {\n  background-color: #fff;\n  margin-top: 40px;\n  padding: 8px 56px; }\n  :host .breadcrumbs a:not(.last) {\n    text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tYWluL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiLCJzcmMvYXBwL21haW4vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFPTSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlDb0ZjO0VEbkZkLE9BQU87RUFDUCxlQUFlO0VBQ2YsUUFBUTtFQUNSLE1BQU07RUFDTixhQUFhLEVBQUE7RUFqQm5COzs7OztJQXdCUSxZQ3dFWSxFQUFBO0VEaEdwQjtJQTRCUSxZQUFZLEVBQUE7RUE1QnBCO0lBZ0NRLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7RUFsQzNCO01BcUNVLGVBQWUsRUFBQTtFQXJDekI7SUEwQ1EsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQytDWTtJRDlDWixlQzhDWSxFQUFBO0VEOUZwQjtJQW9EUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZSxFQUFBO0VBeER2QjtNQTJEVSxtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixrQkFBa0IsRUFBQTtFQTlENUI7UUFpRVksWUFBWSxFQUFBO0VBakV4QjtRQXFFWSxhQUFhLEVBQUE7RUFyRXpCO1FBMEVjLHNCQUFzQjtRQUN0QixjRTFGUTtRRjJGUixVQUFVLEVBQUE7RUE1RXhCO0lBbUZRLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQ01XO0lETFgsZ0JDcENjO0lEcUNkLFlDU2lCO0lEUmpCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0VBM0Z2QjtNQThGVSxVQUFVLEVBQUE7RUE5RnBCO01Ba0dVLFdBQVcsRUFBQTtFQWxHckI7OztJQXlHUSwwQ0FBMEMsRUFBQTtFQXpHbEQ7SUE4R1Usc0JBQXNCLEVBQUE7RUE5R2hDO0lBa0hVLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7RUFuSHJCO01Bc0hZLFdBQVcsRUFBQTtFQXRIdkI7TUEwSFksV0FBVyxFQUFBO0VBMUh2QjtNQTBIWSxXQUFXLEVBQUE7RUExSHZCO01BMEhZLFdBQVcsRUFBQTtFQTFIdkI7TUEwSFksV0FBVyxFQUFBO0VBMUh2QjtFQWlJTSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7RUFwSWxCO0lBdUlRLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQzlDVztJRCtDWCxZQzFDaUI7SUQyQ2pCLGtCQUFrQjtJQUNsQixZQTFKd0I7SUE0SnhCLHVHQUF1RyxFQUFBO0VBL0kvRztNQWtKVSxZQTlKd0QsRUFBQTtFQVlsRTtNQXNKVSxTQUFTO01BQ1QsZ0JBQWdCO01BQ2hCLFVBQVU7TUFDVix1QkFBdUI7TUFDdkIsVUFBVTtNQUVWLG1DQUFtQyxFQUFBO0VBNUo3QztFQWtLTSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7RUF0S3hCO0lBeUtRLGVBQWUsRUFBQTtFQXpLdkI7RUFURSwwQkVUa0M7RUZVbEMsa0JDb0dpQjtFRG5HakIsd0NBQXdDO0VBQ3hDLHlCQUFzQztFQUN0QyxlQUFlO0VBQ2YsU0NvR2tCO0VEbkdsQixXQUFXO0VHT1gsYUFBYTtFQUNiLG1CQUFtQjtFSGdMZix5QkVwTWdCO0VGcU1oQixXRXpNeUI7RUYwTXpCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsV0FBVyxFQUFBO0VBekxqQjtJR0RFLGFBQWE7SUFDYixzQkFBc0I7SUg4TGhCLHNCQUFtQztJQUNuQyxZQUFZLEVBQUE7RUEvTHBCO01HSUUsYUFBYTtNQUNiLG1CQUFtQjtNSCtMWCxxQkFBcUI7TUFDckIsNkJFeE5xQjtNRnlOckIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixjQUFjO01BQ2Qsa0JFaExRO01GaUxSLDhCQUFzQjtNQUF0QiwyQkFBc0I7TUFBdEIsc0JBQXNCO01BQ3RCLG1CRWxMUSxFQUFBO0VGekJsQjtNR0lFLGFBQWE7TUFDYixtQkFBbUI7TUg0TVgsZ0JFeExRLEVBQUE7RUZ6QmxCO1FBb05ZLGdDQUFnQztRQUNoQywwQkVsTVE7UUZtTVIsd0JFbE1NO1FGbU1OLGVBQWU7UUFFZixxQ0FBcUMsRUFBQTtFQXpOakQ7VUE0TmMseUJFL09pQixFQUFBO0VGbUIvQjtFR2RFLHlCRERvQjtFQ0VwQixrQkRONkI7RUNPN0IsV0RQNkI7RUY2UHpCLGtCQzlJYTtFRCtJYixtQkV4TmM7RUZ5TmQsaUJFeE5ZO0VGeU5aLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUV0Tlk7RUZ1TlosZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBRVgsNkNBQTZDLEVBQUE7RUFwUG5EO0lHUkksc0JEWDJCO0lDWTNCLHFCRFJrQjtJQ1NsQixjRFRrQixFQUFBO0VGZXRCO0VBeVBJLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7RUEzUHJCO0lBOFBNLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbiR0YWItY2xvc2Utd3JhcHBlci13aWR0aDogMThweDtcclxuJGxvZ28tY29udGFpbmVyLWhlaWdodDogJHRvcGJhci1oZWlnaHQgLSAycHg7XHJcbiRzZWFyY2gtaW5wdXQtaW5uZXItd2lkdGg6IDIwMHB4O1xyXG4kc2VhcmNoLWlucHV0LWlubmVyLXdpZHRoLS1hY3RpdmU6ICRzZWFyY2gtaW5wdXQtaW5uZXItd2lkdGggKiAxLjU7XHJcblxyXG5AbWl4aW4gb3ZlcmxheSgpIHtcclxuICBvdXRsaW5lOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogJHRvcGJhci1oZWlnaHQ7XHJcbiAgei1pbmRleDogMTE7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAubGF5b3V0LXBhZ2Uge1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gVG9wIGJhciAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC50b3BiYXIge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1NzliO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgaGVpZ2h0OiAkdG9wYmFyLWhlaWdodDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB6LWluZGV4OiAyMDAwO1xyXG5cclxuICAgICAgYXBwLWdsb2JhbC1hbGVydHMsXHJcbiAgICAgIGFwcC1nbG9iYWwtc2VhcmNoLFxyXG4gICAgICBhcHAtaGVhZGVyLW1lbnUsXHJcbiAgICAgIGFwcC1oZWFkZXItdXNlcixcclxuICAgICAgYXBwLW5hdmlnYXRpb24taGlzdG9yeSB7XHJcbiAgICAgICAgaGVpZ2h0OiAkdG9wYmFyLWhlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXBwLWhlYWRlci1tZW51IHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbi53aXRoLWRyb3Bkb3duIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9nby13cmFwcGVyIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBtYXgtd2lkdGg6ICRzaWRlYmFyLXdpZHRoO1xyXG4gICAgICAgIG1pbi13aWR0aDogJHNpZGViYXItd2lkdGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xyXG4gICAgICAgIGhlaWdodDogJHRvcGJhci1pdGVtLWhlaWdodDtcclxuICAgICAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA4cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlYXJjaC1pbnB1dC1jb250YWluZXIgLnNlYXJjaC1pbnB1dC1pbm5lcixcclxuICAgICAgYnV0dG9uOmhvdmVyLFxyXG4gICAgICBidXR0b24uYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjA5LCAyNDAsIDAuMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZWFyY2gtaW5wdXQtY29udGFpbmVyIC5zZWFyY2gtaW5wdXQtaW5uZXIge1xyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1pbnB1dC1jb250YWluZXIge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAuc2VhcmNoLWlucHV0LWlubmVyIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgICBoZWlnaHQ6ICR0b3BiYXItaXRlbS1oZWlnaHQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAkc2VhcmNoLWlucHV0LWlubmVyLXdpZHRoO1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIHdpZHRoIGVhc2UtaW4tb3V0IDAuMTVzO1xyXG5cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICB3aWR0aDogJHNlYXJjaC1pbnB1dC1pbm5lci13aWR0aC0tYWN0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMjBweCA0cHggMDtcclxuICAgICAgICAgIHdpZHRoOiA5OCU7XHJcblxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbi1vdXQgMC4xNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlci11c2VyLWNvbnRhaW5lciB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBNZWdhIG1lbnUgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAubWVnYS1tZW51LW92ZXJsYXkge1xyXG4gICAgICBAaW5jbHVkZSBvdmVybGF5KCk7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIHotaW5kZXg6IDMwO1xyXG5cclxuICAgICAgLm1lbnUtZW50cnktd3JhcHBlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgICAgcGFkZGluZzogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMyk7XHJcbiAgICAgICAgd2lkdGg6IDE5cmVtO1xyXG5cclxuICAgICAgICAubWVudS1lbnRyeSB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCAkYm9yZGVyLXN0eWxlICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1Ym1lbnUtZW50cnktd3JhcHBlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgIC5zdWJtZW51LWVudHJ5IHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAxMDBtcyBsaW5lYXI7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBidXR0b24gLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAuc2Nyb2xsLXRvLXRvcC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgYnV0dG9uLWNvbG9yKCRhY2NlbnQtY29sb3IsICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3IsICRhY2NlbnQtY29sb3IpO1xyXG5cclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgICBib3R0b206IDMwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICByaWdodDogMzBweDtcclxuICAgICAgei1pbmRleDogMTE7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGNvbG9yIDAuMnM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnJlYWRjcnVtYnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggNTZweDtcclxuXHJcbiAgICBhOm5vdCgubGFzdCkge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBWYXJpYWJsZXNcclxuLy9cclxuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXHJcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxyXG4vL1xyXG4vLyBNYW51YWxseSBmb3JrZWQgZnJvbSBCb290c3RyYXBcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9yZnMvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gR3JpZCBicmVha3BvaW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA1NzZweCxcclxuICBtZDogNzY4cHgsXHJcbiAgbGc6IDk5MnB4LFxyXG4gIHhsOiAxMjAwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIEdyaWQgY29udGFpbmVyc1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxyXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcclxuICBzbTogNTQwcHgsXHJcbiAgbWQ6IDcyMHB4LFxyXG4gIGxnOiA5NjBweCxcclxuICB4bDogbm9uZVxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcblxyXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcclxuXHJcbi8vIFNwYWNpbmdcclxuXHJcbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBMaW5rc1xyXG5cclxuJGxpbmstZGVjb3JhdGlvbjogbm9uZSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogdW5kZXJsaW5lICFkZWZhdWx0O1xyXG5cclxuLy8gUGFyYWdyYXBoc1xyXG5cclxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5cclxuJGJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG5cclxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLFxyXG4gIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIiAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xyXG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxyXG5cclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcclxuJGZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlICogMC44NzUgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC13ZWlnaHQtbGlnaHRlcjogbGlnaHRlciAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDUwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJvbGRlcjogYm9sZGVyICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjUgIWRlZmF1bHQ7XHJcblxyXG4kaDEtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjc1ICFkZWZhdWx0O1xyXG4kaDItZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XHJcbiRoMy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XHJcbiRoNC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcclxuJGg1LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xyXG4kaDYtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XHJcblxyXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogbnVsbCAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtc3R5bGU6IG51bGwgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNTAwICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuMiAhZGVmYXVsdDtcclxuXHJcbiRzbWFsbC1mb250LXNpemU6IDgwJSAhZGVmYXVsdDtcclxuXHJcbiRoci1jb2xvcjogaW5oZXJpdCAhZGVmYXVsdDtcclxuJGhyLWhlaWdodDogJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuJGhyLW9wYWNpdHk6IDAuMjUgIWRlZmF1bHQ7XHJcblxyXG4kbWFyay1wYWRkaW5nOiAwLjJlbSAhZGVmYXVsdDtcclxuXHJcbiRkdC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XHJcblxyXG4kaHItbWFyZ2luLXk6ICRzcGFjZXIgIWRlZmF1bHQ7XHJcblxyXG4vLyBUYWJsZXNcclxuXHJcbiR0YWJsZS1jZWxsLXBhZGRpbmc6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBGb3Jtc1xyXG5cclxuJGxhYmVsLW1hcmdpbi1ib3R0b206IDAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE1pc2NcclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRwYWdlLWVkaXRvci13aWR0aDogMjAwcHg7XHJcbiRzaWRlYmFyLXdpZHRoOiA1MHB4O1xyXG4kdG9jLWNvbnRhaW5lci13aWR0aDogMjUwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kdG9wYmFyLWl0ZW0taGVpZ2h0OiAzMnB4O1xyXG4kdmlld3BvcnQtbWF4LXdpZHRoOiAxOTIwcHg7XHJcblxyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBCYWRnZXNcclxuXHJcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGJhZGdlLWZvbnQtc2l6ZTogNzUlICFkZWZhdWx0O1xyXG4kYmFkZ2UtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy14OiAwLjVlbSAhZGVmYXVsdDtcclxuJGJhZGdlLXBhZGRpbmcteTogMC4yNWVtICFkZWZhdWx0O1xyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVdGlscyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gYnV0dG9uLWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCAkY29sb3IsICRib3JkZXItY29sb3I6IG51bGwpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyLFxyXG4gICY6bm90KDpkaXNhYmxlZCkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogaWYoJGJvcmRlci1jb2xvciA9PSBudWxsLCAkY29sb3IsICRib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgtY29sdW1uKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtcm93KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQG1peGluIGlucHV0KCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1kaXNhYmxlZCgpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZm9jdXMoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1ob3ZlcigpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlYXJjaC1jcml0ZXJpYS1jb250YWluZXIge1xyXG4gIC5hZHZhbmNlZC1jcml0ZXJpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgICYucmVxdWlyZWQge1xyXG4gICAgICBAaW5jbHVkZSBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCgpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHcmlkIGZvcm0gY29udHJvbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViTWVkaXVtXCI7XHJcblxyXG4gICYgPiBpbnB1dCArIHAtbWVzc2FnZSA+IC51aS1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyNTUsIDI1NSwgMjU1KSA2MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAuYXctaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuLFxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG5cclxuICAgICAgJi5hdy1jYWxlbmRhciAudWktaW5wdXR0ZXh0LFxyXG4gICAgICAmLmF3LWRyb3Bkb3duIC51aS1kcm9wZG93bixcclxuICAgICAgJi5hdy1pbnB1dCxcclxuICAgICAgJi5hdy10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctY2FsZW5kYXIge1xyXG4gICAgICAvLyBGSVhNRTogZml4IGFuIFVJIGlzc3VlIG9uIFByaW1lTkcgY2FsZW5kYXIgY29tcG9uZW50OyB0byByZW1vdmUgd2hlbiBpc3N1ZSB3aWxsIGJlIGZpeGVkIHVwc3RyZWFtXHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAuYXctaWNvbjpub3QoLnJlYWQtb25seS1saW5rKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIG5vbmVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW5pbXAsXHJcbiAgICAuYnRuLWV4dGVybmFsLWxpbmstd3JhcHBlcixcclxuICAgIC5idG4tY2xlYXItd3JhcHBlcixcclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlcixcclxuICAgIC5idG4tc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgICAuYXctZmlsZXVwbG9hZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudWktYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWNsZWFyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtcmFkaW9idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAmID4gLmF3LXJhZGlvYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jYWxlbmRhciB7XHJcbiAgJi51aS1pbnB1dHdyYXBwZXItZm9jdXMge1xyXG4gICAgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkY2hlY2tib3gtaGVpZ2h0O1xyXG4gIHdpZHRoOiAkY2hlY2tib3gtaGVpZ2h0O1xyXG5cclxuICAudWktY2hrYm94IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1jaGtib3gtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZHJvcGRvd24ge1xyXG4gIC51aS1kcm9wZG93biB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1mb2N1cyB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbixcclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gICAgICByaWdodDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDEuNzVyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5maXhlZC13aWR0aCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZpbGV1cGxvYWQge1xyXG4gIEBleHRlbmQgLmF3LWJ0bjtcclxuXHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnVpLWZpbGV1cGxvYWQtY2hvb3NlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudWktYnV0dG9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWlucHV0KCkge1xyXG4gIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZXh0YXJlYSB7XHJcbiAgQGluY2x1ZGUgZ3JpZC1pbnB1dCgpO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1yYWRpb2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuICB3aWR0aDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuXHJcbiAgLnVpLXJhZGlvYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAudWktcmFkaW9idXR0b24taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGNhbGVuZGFyLXBhbmVsIHtcclxuICAudWktZGF0ZXBpY2tlcjpub3QoLnVpLWRhdGVwaWNrZXItaW5saW5lKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcm9wZG93bi1wYW5lbCB7XHJcbiAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciAudWktZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgIC51aS1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/main.component.ts':
      /*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
      /*! exports provided: MainComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MainComponent', function() {
          return MainComponent;
        });
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
          /*! ../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../shared/constants/lang-constants */ './src/app/shared/constants/lang-constants.ts'
        );
        /* harmony import */ var _shared_constants_menu_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../shared/constants/menu-constants */ './src/app/shared/constants/menu-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_sidebar_visibility_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../shared/enums/sidebar-visibility.enum */ './src/app/shared/enums/sidebar-visibility.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_dom_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../shared/services/dom-handler.service */ './src/app/shared/services/dom-handler.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
        );
        /* harmony import */ var _shared_utils_base64_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../shared/utils/base64-utils */ './src/app/shared/utils/base64-utils.ts'
        );
        /* harmony import */ var _shared_utils_dom_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../shared/utils/dom-utils */ './src/app/shared/utils/dom-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _storage_local_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../storage/local-storage */ './src/app/storage/local-storage.ts'
        );
        /* harmony import */ var _storage_local_storage_keys__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../storage/local-storage-keys */ './src/app/storage/local-storage-keys.ts'
        );
        /* harmony import */ var _administration_todo_list_search_todo_list_search_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./administration/todo-list/search/todo-list-search.service */ './src/app/main/administration/todo-list/search/todo-list-search.service.ts'
        );
        /* harmony import */ var _global_search_overlay_global_search_overlay_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./global-search-overlay/global-search-overlay.component */ './src/app/main/global-search-overlay/global-search-overlay.component.ts'
        );
        /* harmony import */ var _header_dashboards_overlay_header_dashboards_overlay_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./header-dashboards-overlay/header-dashboards-overlay.component */ './src/app/main/header-dashboards-overlay/header-dashboards-overlay.component.ts'
        );
        /* harmony import */ var _header_user_overlay_header_user_overlay_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./header-user-overlay/header-user-overlay.component */ './src/app/main/header-user-overlay/header-user-overlay.component.ts'
        );
        /* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./menu/menu.service */ './src/app/main/menu/menu.service.ts'
        );
        /* harmony import */ var _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./overlay/overlay.service */ './src/app/main/overlay/overlay.service.ts'
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

        var MainComponent = /** @class */ (function(_super) {
          __extends(MainComponent, _super);
          function MainComponent(
            menuService,
            sessionService,
            tabService,
            translateService,
            confirmationService,
            domHandler,
            loaderService,
            localStorage,
            messageService,
            serializationService,
            todoListSearchService,
            _overlayService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__['ComponentOpenMode'].Write
              ) || this;
            _this.menuService = menuService;
            _this.sessionService = sessionService;
            _this.tabService = tabService;
            _this.translateService = translateService;
            _this.confirmationService = confirmationService;
            _this.domHandler = domHandler;
            _this.loaderService = loaderService;
            _this.localStorage = localStorage;
            _this.messageService = messageService;
            _this.serializationService = serializationService;
            _this.todoListSearchService = todoListSearchService;
            _this._overlayService = _overlayService;
            _this.langConstant = _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_6__['LangConstants'];
            _this.overlayHeaderUserActive$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__['BehaviorSubject'](false);
            _this.overlayDashboardsActive$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__['BehaviorSubject'](false);
            _this.overlayGlobalSearchActive$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__['BehaviorSubject'](false);
            _this._searchTextChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__['Subject']();
            _this._menuEntries$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__['BehaviorSubject']([]);
            _this.searchvalue = '';
            _this.currentTab = undefined;
            _this.homeTab = undefined;
            _this.megaMenuOffsetLeft = undefined;
            _this.megaMenuWidth = undefined;
            _this.scrollToTopButtonVisible = false;
            _this.searchMenuDialogVisible = false;
            _this.selectedMenuEntryKey = undefined;
            _this.showLoadingBar = false;
            _this.sidebarOverlayVisible = false;
            _this.tabs = [];
            _this.tabsHistory = [];
            _this.sessionService.initSpecificClient();
            _this.sessionService.open();
            _this.initSidebarVisibility();
            _this.menuService.load();
            _this.menuService.loadDashboards();
            _this.hideMenuEntry();
            _this.registerHomeTabObservable();
            _this.registerLoaderObservable();
            _this.registerTabContextObservable();
            _this.registerTabObservable();
            _this.setSeachTextChanged();
            return _this;
          }
          MainComponent_1 = MainComponent;
          MainComponent.prototype.getComponentName = function() {
            return 'MainComponent';
          };
          MainComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.menuService.openHome();
            this.todoListSearchService.refreshWholeTodoList();
            _administration_todo_list_search_todo_list_search_service__WEBPACK_IMPORTED_MODULE_23__[
              'TodoListSearchService'
            ].todoList$.subscribe(function(result) {
              _this.todoListLength = result ? result.length : 0;
            });
            this.handleRequestedUrl();
          };
          Object.defineProperty(MainComponent.prototype, 'sidebarCollapsed', {
            get: function() {
              return (
                this.sidebarVisibility ===
                _shared_enums_sidebar_visibility_enum__WEBPACK_IMPORTED_MODULE_9__['SidebarVisibility'].Collapsed
              );
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(MainComponent.prototype, 'sidebarExpanded', {
            get: function() {
              return (
                this.sidebarVisibility ===
                _shared_enums_sidebar_visibility_enum__WEBPACK_IMPORTED_MODULE_9__['SidebarVisibility'].Expanded
              );
            },
            enumerable: true,
            configurable: true
          });
          MainComponent.prototype.onClick = function(event) {
            if (
              this.showMenuEntry &&
              !!this.menuContainer &&
              !this.menuContainer.nativeElement.contains(event.target)
            ) {
              this.hideMenuEntry();
            }
          };
          MainComponent.prototype.onScroll = function() {
            this.scrollToTopButtonVisible =
              window.scrollY >
              _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants'].TOP_BAR_HEIGHT;
          };
          MainComponent.prototype.hideSidebarOverlay = function() {
            this.sidebarOverlayVisible = false;
          };
          MainComponent.prototype.onClickMenuEntry = function(event, menuEntry) {
            this.positionMegaMenu(event, menuEntry);
            this.showMenuEntry = !this.showMenuEntry;
            this.toggleMenuEntry(menuEntry);
            event.stopPropagation();
          };
          MainComponent.prototype.onHoverMenuEntry = function(event, menuEntry) {
            this.positionMegaMenu(event, menuEntry);
            this.toggleMenuEntry(menuEntry);
          };
          MainComponent.prototype.openHelp = function() {
            this.messageService.showRawWarningMessage('An online help will be available soon.');
          };
          MainComponent.prototype.openSearchMenuDialog = function() {
            this.searchMenuDialogVisible = true;
          };
          MainComponent.prototype.scrollToTop = function() {
            _shared_utils_dom_utils__WEBPACK_IMPORTED_MODULE_19__['DomUtils'].scrollToPosition(0);
          };
          MainComponent.prototype.showHomeTab = function() {
            if (!!this.homeTab) {
              this.tabService.open(this.homeTab, { shouldReuse: true });
            }
          };
          MainComponent.prototype.showSidebarOverlay = function() {
            this.sidebarOverlayVisible = true;
          };
          MainComponent.prototype.showTab = function(requestedTab) {
            var _this = this;
            this.hideMenuEntry();
            this.hideSidebarOverlay();
            this.saveTabData(this.currentTab);
            this.currentTab = requestedTab;
            this.tabs.forEach(function(tab) {
              _this.tabService.hide(tab);
            });
            this.tabService.show(requestedTab);
            this.tabsHistory = __spread(this.tabsHistory, [requestedTab]);
            var menuEntryKey =
              _shared_constants_menu_constants__WEBPACK_IMPORTED_MODULE_7__['MenuConstants'].COMPONENTS_ROOT[
                requestedTab.data.componentId
              ];
            this.selectedMenuEntryKey = !!menuEntryKey ? menuEntryKey : undefined;
          };
          MainComponent.prototype.signOut = function() {
            var _this = this;
            this.confirmationService.confirm({
              messageKey: 'global.confirmSignOut',
              accept: function() {
                _this.tabs.forEach(function(tab) {
                  _this.tabService.delete(tab);
                });
                _this.sessionService.close();
              }
            });
          };
          MainComponent.prototype.toggleSidebarVisibility = function() {
            this.sidebarVisibility =
              this.sidebarVisibility ===
              _shared_enums_sidebar_visibility_enum__WEBPACK_IMPORTED_MODULE_9__['SidebarVisibility'].Collapsed
                ? _shared_enums_sidebar_visibility_enum__WEBPACK_IMPORTED_MODULE_9__['SidebarVisibility'].Expanded
                : _shared_enums_sidebar_visibility_enum__WEBPACK_IMPORTED_MODULE_9__['SidebarVisibility'].Collapsed;
          };
          MainComponent.prototype.computeMegaMenuWidth = function(menuEntry) {
            if (menuEntry.submenus.length >= MainComponent_1.SUBMENU_NB_HIGH_THRESHOLD) {
              return MainComponent_1.SUBMENU_WIDTH * MainComponent_1.SUBMENU_NB_HIGH_THRESHOLD;
            } else if (menuEntry.submenus.length <= MainComponent_1.SUBMENU_NB_LOW_THRESHOLD) {
              return MainComponent_1.SUBMENU_WIDTH * (MainComponent_1.SUBMENU_NB_LOW_THRESHOLD + 1);
            } else {
              return MainComponent_1.SUBMENU_WIDTH * menuEntry.submenus.length;
            }
          };
          MainComponent.prototype.initSidebarVisibility = function() {
            this.sidebarVisibility =
              document.body.getBoundingClientRect().right >=
              _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants'].PAGE_MAX_WIDTH
                ? _shared_enums_sidebar_visibility_enum__WEBPACK_IMPORTED_MODULE_9__['SidebarVisibility'].Expanded
                : _shared_enums_sidebar_visibility_enum__WEBPACK_IMPORTED_MODULE_9__['SidebarVisibility'].Collapsed;
          };
          MainComponent.prototype.handleRequestedUrl = function() {
            // Check if a requested url exists in local storage
            var requestedUrl = this.localStorage.load(
              _storage_local_storage_keys__WEBPACK_IMPORTED_MODULE_22__['LocalStorageKeys'].REQUESTED_URL
            );
            if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].isNullOrEmpty(requestedUrl)) {
              var params = this.serializationService.deserialize(requestedUrl);
              this.openRequestedUrl(params);
              this.localStorage.remove(
                _storage_local_storage_keys__WEBPACK_IMPORTED_MODULE_22__['LocalStorageKeys'].REQUESTED_URL
              );
            }
          };
          MainComponent.prototype.hideMenuEntry = function() {
            this.showMenuEntry = false;
            this.currentMenuEntry = undefined;
          };
          MainComponent.prototype.openMenuEntry = function(menuEntry) {
            this.currentMenuEntry = menuEntry;
            this.showMenuEntry = true;
          };
          MainComponent.prototype.openRequestedUrl = function(params) {
            var component =
              _shared_utils_base64_utils__WEBPACK_IMPORTED_MODULE_18__['Base64Utils'].decodeUrl(params.object) +
              'Component';
            var labelKey = 'transaction.' + component;
            var data = {
              id: this.tabService.generateId(),
              componentId: component,
              objectId: _shared_utils_base64_utils__WEBPACK_IMPORTED_MODULE_18__['Base64Utils'].decodeUrl(params.id),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          MainComponent.prototype.positionMegaMenu = function(event, menuEntry) {
            /*tslint:disable:no-magic-numbers*/
            var leftSidebarElements = document.getElementsByClassName('left-sidebar');
            var leftSidebarOffset = leftSidebarElements.length === 1 ? leftSidebarElements[0].offsetWidth : 0;
            var eventTarget = event.target.parentElement;
            var targetOffsetLeft = eventTarget.offsetLeft + leftSidebarOffset;
            var targetWidth = eventTarget.offsetWidth;
            var targetMidPosition = targetOffsetLeft + targetWidth / 2;
            var megaMenuWidth = this.computeMegaMenuWidth(menuEntry);
            var viewportWidth = this.domHandler.getViewport().width - this.domHandler.getScrollbarWidth();
            var offsetLeft;
            if (targetMidPosition + megaMenuWidth / 2 <= viewportWidth && targetMidPosition - megaMenuWidth / 2 >= 0) {
              offsetLeft = targetMidPosition - megaMenuWidth / 2;
            } else if (targetOffsetLeft + megaMenuWidth <= viewportWidth) {
              offsetLeft = targetOffsetLeft;
            } else if (targetOffsetLeft + targetWidth - megaMenuWidth >= 0) {
              offsetLeft = targetOffsetLeft + targetWidth - megaMenuWidth;
            } else {
              offsetLeft = (viewportWidth - megaMenuWidth) / 2;
            }
            this.megaMenuOffsetLeft = offsetLeft + 'px';
            this.megaMenuWidth = megaMenuWidth + 'px';
            /*tslint:enable:no-magic-numbers*/
          };
          MainComponent.prototype.registerHomeTabObservable = function() {
            var _this = this;
            this.homeTabSubscription = this.tabService.tabHome$.subscribe(function(requestedTab) {
              _this.homeTab = requestedTab;
              _this.tabs = __spread([_this.homeTab], _this.tabs);
              _this.showHomeTab();
              _this.homeTabSubscription.unsubscribe();
            });
          };
          MainComponent.prototype.registerLoaderObservable = function() {
            var _this = this;
            this.loaderService.moduleLoadingStatus$
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['takeUntil'])(this.unsubscribe))
              .subscribe(function(status) {
                setTimeout(function() {
                  _this.showLoadingBar = status;
                });
              });
          };
          MainComponent.prototype.registerTabContextObservable = function() {
            var _this = this;
            this.tabService.tabContexts$
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['takeUntil'])(this.unsubscribe))
              .subscribe(function(tabContextData) {
                var targetedTab = _this.tabs.find(function(tab) {
                  return tab.data.id === tabContextData.id;
                });
                if (!!targetedTab) {
                  targetedTab.context = tabContextData.context;
                  targetedTab.translatedContext = tabContextData.translate;
                }
              });
          };
          MainComponent.prototype.registerTabObservable = function() {
            var _this = this;
            this.tabService.tabs$
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['takeUntil'])(this.unsubscribe))
              .subscribe(function(_a) {
                var tab = _a.tab,
                  shouldReuse = _a.shouldReuse;
                if (shouldReuse) {
                  var openedTab = _this.tabs.find(function(existingTab) {
                    return existingTab.id === tab.id;
                  });
                  if (openedTab) {
                    _this.showTab(openedTab);
                  } else {
                    // FIXME Workaround mantis 3102
                    _this.messageService.showErrorMessage('tab.errorOnShow');
                  }
                } else {
                  _this.tabs = __spread([tab], _this.tabs);
                  _this.showTab(tab);
                }
              });
          };
          MainComponent.prototype.saveTabData = function(tab) {
            if (tab) {
              tab.scrollY = window.scrollY;
            }
          };
          MainComponent.prototype.toggleMenuEntry = function(menuEntry) {
            if (this.showMenuEntry) {
              this.openMenuEntry(menuEntry);
            } else {
              this.hideMenuEntry();
            }
          };
          MainComponent.prototype.openTodoList = function() {
            var component =
              _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
                .ADM_TODO_LIST_SEARCH;
            var labelKey = 'transaction.' + component;
            var data = {
              id: this.tabService.generateId(),
              componentId: component,
              objectId: undefined,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /**************************************************************************
           * Utils
           *************************************************************************/
          // Method used to prevent back button default behavior
          MainComponent.prototype.canDeactivate = function() {
            return false;
          };
          MainComponent.prototype.showHeaderUserOverlay = function(origin) {
            var _this = this;
            this.overlayHeaderUserActive$.next(true);
            var overlayRef = this._overlayService.openWithPositionRelative({
              origin: origin,
              content:
                _header_user_overlay_header_user_overlay_component__WEBPACK_IMPORTED_MODULE_26__[
                  'HeaderUserOverlayComponent'
                ],
              positions: [{ originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' }]
            });
            overlayRef.afterClosed$.subscribe({
              complete: function() {
                _this.overlayHeaderUserActive$.next(false);
              }
            });
          };
          MainComponent.prototype.showDashboards = function(origin) {
            var _this = this;
            if (this.menuService.dashboardEntries.length === 1) {
              this.menuService.openMenuEntry(this.menuService.dashboardEntries[0].key);
            } else {
              this.overlayDashboardsActive$.next(true);
              var overlayRef = this._overlayService.openWithPositionRelative({
                origin: origin,
                content:
                  _header_dashboards_overlay_header_dashboards_overlay_component__WEBPACK_IMPORTED_MODULE_25__[
                    'HeaderDashboardsOverlayComponent'
                  ],
                positions: [{ originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' }]
              });
              overlayRef.afterClosed$.subscribe({
                complete: function() {
                  _this.overlayDashboardsActive$.next(false);
                }
              });
            }
          };
          MainComponent.prototype.search = function() {
            this._searchTextChanged.next(this.searchvalue);
          };
          MainComponent.prototype.showGlobalSearchOverlay = function(origin) {
            var _this = this;
            this.overlayGlobalSearchActive$.next(true);
            var overlayRef = this._overlayService.openWithPositionRelative({
              origin: origin,
              content:
                _global_search_overlay_global_search_overlay_component__WEBPACK_IMPORTED_MODULE_24__[
                  'GlobalSearchOverlayComponent'
                ],
              data: this._menuEntries$,
              positions: [{ originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' }]
            });
            overlayRef.afterClosed$.subscribe({
              complete: function() {
                _this.searchvalue = '';
                _this.overlayGlobalSearchActive$.next(false);
              }
            });
          };
          MainComponent.prototype.setSeachTextChanged = function() {
            var _this = this;
            this._searchTextChanged
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['debounceTime'])(
                  MainComponent_1.SEARCH_TEXT_DEBOUNCE_TIME
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['distinctUntilChanged'])(),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['takeUntil'])(this.unsubscribe)
              )
              .subscribe({
                next: function(searchText) {
                  var formattedSearchText = searchText.toUpperCase();
                  var regexSearchText = new RegExp('(' + searchText + ')', 'gi');
                  var matchingMenuEntries = _this.menuService.menuEntries
                    .map(function(menuEntry) {
                      return menuEntry.submenus;
                    })
                    .reduce(function(acc, x) {
                      return acc.concat(x);
                    }, [])
                    .map(function(menuEntry) {
                      return menuEntry.submenus;
                    })
                    .reduce(function(acc, x) {
                      return acc.concat(x);
                    }, [])
                    .map(function(menuEntry) {
                      return {
                        label: _this.translateService.instant('transaction.' + menuEntry.key),
                        value: menuEntry.key
                      };
                    })
                    .filter(function(selectOption) {
                      return selectOption.label.toUpperCase().includes(formattedSearchText);
                    })
                    .sort(function(a, b) {
                      return a.label.localeCompare(b.label);
                    })
                    .map(function(selectOption) {
                      var label = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].isEmpty(
                        searchText
                      )
                        ? selectOption.label
                        : selectOption.label.replace(regexSearchText, '<b>$1</b>');
                      return __assign({}, selectOption, { label: label });
                    });
                  _this._menuEntries$.next(matchingMenuEntries);
                }
              });
          };
          MainComponent.prototype.openPreviousTab = function() {
            var tabToShow = this.tabService.breadcrumbs[this.tabService.breadcrumbs.length - 2];
            this.tabService.open(tabToShow, { shouldReuse: true });
          };
          var MainComponent_1;
          MainComponent.SEARCH_TEXT_DEBOUNCE_TIME = 500;
          MainComponent.SUBMENU_WIDTH = 304;
          MainComponent.SUBMENU_NB_HIGH_THRESHOLD = 4;
          MainComponent.SUBMENU_NB_LOW_THRESHOLD = 1;
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('menuContainer'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            MainComponent.prototype,
            'menuContainer',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['HostListener'])('click', ['$event']),
              __metadata('design:type', Function),
              __metadata('design:paramtypes', [Event]),
              __metadata('design:returntype', void 0)
            ],
            MainComponent.prototype,
            'onClick',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['HostListener'])('window:scroll'),
              __metadata('design:type', Function),
              __metadata('design:paramtypes', []),
              __metadata('design:returntype', void 0)
            ],
            MainComponent.prototype,
            'onScroll',
            null
          );
          MainComponent = MainComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-main',
                template: __webpack_require__(/*! ./main.component.html */ './src/app/main/main.component.html'),
                styles: [__webpack_require__(/*! ./main.component.scss */ './src/app/main/main.component.scss')]
              }),
              __metadata('design:paramtypes', [
                _menu_menu_service__WEBPACK_IMPORTED_MODULE_27__['MenuService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__['SessionService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__['TabService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__['ConfirmationService'],
                _shared_services_dom_handler_service__WEBPACK_IMPORTED_MODULE_11__['DomHandler'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__['LoaderService'],
                _storage_local_storage__WEBPACK_IMPORTED_MODULE_21__['LocalStorage'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__['SerializationService'],
                _administration_todo_list_search_todo_list_search_service__WEBPACK_IMPORTED_MODULE_23__[
                  'TodoListSearchService'
                ],
                _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_28__['OverlayService']
              ])
            ],
            MainComponent
          );
          return MainComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_17__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/main.module.ts':
      /*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
      /*! exports provided: MainModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MainModule', function() {
          return MainModule;
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
          /*! ../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_pipes_filter_by_value_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../shared/pipes/filter-by-value.pipe */ './src/app/shared/pipes/filter-by-value.pipe.ts'
        );
        /* harmony import */ var _administration_todo_list_todo_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./administration/todo-list/todo-list.module */ './src/app/main/administration/todo-list/todo-list.module.ts'
        );
        /* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./confirm-dialog/confirm-dialog.component */ './src/app/main/confirm-dialog/confirm-dialog.component.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./dynamic-component-loader/dynamic-component-constants */ './src/app/main/dynamic-component-loader/dynamic-component-constants.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _fleet_management_asset_search_asset_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./fleet-management/asset/search/asset-search.service */ './src/app/main/fleet-management/asset/search/asset-search.service.ts'
        );
        /* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./main-routing.module */ './src/app/main/main-routing.module.ts'
        );
        /* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./main.component */ './src/app/main/main.component.ts'
        );
        /* harmony import */ var _maintenance_work_package_search_work_package_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./maintenance/work-package/search/work-package-search.service */ './src/app/main/maintenance/work-package/search/work-package-search.service.ts'
        );
        /* harmony import */ var _maintenance_work_package_work_package_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./maintenance/work-package/work-package.service */ './src/app/main/maintenance/work-package/work-package.service.ts'
        );
        /* harmony import */ var _menu_dialog_menu_search_dialog_menu_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./menu/dialog-menu-search/dialog-menu-search.component */ './src/app/main/menu/dialog-menu-search/dialog-menu-search.component.ts'
        );
        /* harmony import */ var _tab_container_tab_container_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./tab-container/tab-container.component */ './src/app/main/tab-container/tab-container.component.ts'
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
        var INTERNAL_MODULES = [
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_5__['ModalModule'],
          _administration_todo_list_todo_list_module__WEBPACK_IMPORTED_MODULE_7__['TodoListModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__['ConfirmDialogComponent'],
          _menu_dialog_menu_search_dialog_menu_search_component__WEBPACK_IMPORTED_MODULE_16__[
            'DialogMenuSearchComponent'
          ],
          _main_component__WEBPACK_IMPORTED_MODULE_13__['MainComponent'],
          _tab_container_tab_container_component__WEBPACK_IMPORTED_MODULE_17__['TabContainerComponent']
        ];
        /******************************************************************************
         * Pipes
         *************************************************************************** */
        var PIPES = [_shared_pipes_filter_by_value_pipe__WEBPACK_IMPORTED_MODULE_6__['FilterByValuePipe']];
        var SERVICES = [
          _maintenance_work_package_work_package_service__WEBPACK_IMPORTED_MODULE_15__['WorkPackageService'],
          _maintenance_work_package_search_work_package_search_service__WEBPACK_IMPORTED_MODULE_14__[
            'WorkPackageSearchService'
          ],
          _fleet_management_asset_search_asset_search_service__WEBPACK_IMPORTED_MODULE_11__['AssetSearchService']
        ];
        var MainModule = /** @class */ (function() {
          function MainModule() {}
          MainModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, PIPES),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__['AppCommonSharedModule'],
                    _main_routing_module__WEBPACK_IMPORTED_MODULE_12__['MainRoutingModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_10__[
                      'DynamicComponentLoaderModule'
                    ].forRoot(
                      _dynamic_component_loader_dynamic_component_constants__WEBPACK_IMPORTED_MODULE_9__[
                        'DynamicComponentsConstants'
                      ].MANIFEST
                    )
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            MainModule
          );
          return MainModule;
        })();

        /***/
      },

    /***/ './src/app/main/maintenance/work-package/work-package.service.ts':
      /*!***********************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/work-package.service.ts ***!
  \***********************************************************************/
      /*! exports provided: WorkPackageService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'WorkPackageService', function() {
          return WorkPackageService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./../../../shared/api/user-profile-management.api */ './src/app/shared/api/user-profile-management.api.ts'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./../../../shared/utils/array-utils */ './src/app/shared/utils/array-utils.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
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

        var WorkPackageService = /** @class */ (function(_super) {
          __extends(WorkPackageService, _super);
          function WorkPackageService(
            http,
            appConfigService,
            propertiesService,
            productStructureManagementApi,
            fleetManagementApi,
            userProfileManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.propertiesService = propertiesService;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.userProfileManagementApi = userProfileManagementApi;
            return _this;
          }
          WorkPackageService.prototype.findAuthorizedBireSite = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAuthorizedBireSite);
          };
          WorkPackageService.prototype.findAuthorizedBidoOperations = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAuthorizedBidoOperations);
          };
          WorkPackageService.prototype.findUsersWithUseCase = function() {
            return _super.prototype.post.call(
              this,
              this.userProfileManagementApi.findBidoUsersWithUseCase,
              _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_8__['BidoFunctionTypeConstants']
                .UC_AIRM_RECEPTION
            );
          };
          WorkPackageService.prototype.loadGenProps = function(key) {
            return this.propertiesService.getValue(key).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                return !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_12__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              })
            );
          };
          WorkPackageService.prototype.loadStatusList = function(removedStatuses) {
            return this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .AIRM_PROJECT_STATUS_MAP
              )
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                  var statusList = !!results
                    ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_12__['SelectItemUtils'].fromLabelValues(
                        results
                      )
                    : [];
                  return statusList.filter(function(status) {
                    return !removedStatuses.includes(status.value);
                  });
                })
              );
          };
          WorkPackageService.prototype.loadMROCenterList = function() {
            return this.findAuthorizedBireSite().pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                var mroCenterList = !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_12__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
                return mroCenterList.map(function(mro) {
                  mro.label = mro.label ? mro.label + ' (' + mro.value + ')' : mro.value;
                  return mro;
                });
              })
            );
          };
          WorkPackageService.prototype.loadOperationList = function() {
            return this.findAuthorizedBidoOperations().pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                return !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_12__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              })
            );
          };
          WorkPackageService.prototype.loadUserList = function() {
            return this.findUsersWithUseCase().pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                return !!results
                  ? results
                      .map(function(user) {
                        return {
                          label: user.lastname + ' ' + user.firstname,
                          value: user.userId
                        };
                      })
                      .sort(
                        _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_11__['ArrayUtils'].compareValues('label')
                      )
                  : [];
              })
            );
          };
          WorkPackageService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__['PropertiesService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_6__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__['FleetManagementApi'],
                _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_7__['UserProfileManagementApi']
              ])
            ],
            WorkPackageService
          );
          return WorkPackageService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/menu/dialog-menu-search/dialog-menu-search.component.html':
      /*!********************************************************************************!*\
  !*** ./src/app/main/menu/dialog-menu-search/dialog-menu-search.component.html ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="close-wrapper">\r\n      <i class="aw-icon aw-icon-with-border material-icons" (click)="closeDialog()">close</i>\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="menu column">\r\n      <div class="menu-filter-wrapper">\r\n        <div class="form-group">\r\n          <label class="form-label"> {{ getComponentName() + ".searchMenu" | translate }} </label>\r\n\r\n          <div class="form-control">\r\n            <input #searchTextElement type="text" class="aw-input" [(ngModel)]="searchText" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="!searchText || searchText.trim().length === 0" class="menu-wrapper">\r\n        <div class="top-menu-entry-list">\r\n          <div\r\n            *ngFor="let menu of menuEntryList"\r\n            [ngClass]="{ active: currentSubMenuEntrySelected && menu.key === currentSubMenuEntrySelected.key }"\r\n            (click)="selectTopMenuEntry(menu)"\r\n          >\r\n            {{ "menu." + menu.key | translate }}\r\n          </div>\r\n        </div>\r\n\r\n        <div class="sub-menu-entry-list" [ngClass]="{ \'visibility--hidden\': currentSubMenuEntryList.length === 0 }">\r\n          <div *ngFor="let menu of currentSubMenuEntryList" class="menu-entry-wrapper">\r\n            <div class="menu-entry">{{ "menu." + menu.key | translate }}</div>\r\n\r\n            <div *ngFor="let submenu of menu.submenus" class="sub-menu-entry-wrapper">\r\n              <span class="sub-menu-entry" (click)="onSelectMenuEntry(submenu.key)">\r\n                {{ "transaction." + submenu.key | translate }}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="searchText && searchText.trim().length > 0" class="filtered-menu-list">\r\n        <ul class="list--unstyled">\r\n          <li\r\n            *ngFor="let component of componentList | filterByValue: searchText"\r\n            (click)="onSelectMenuEntry(component.key)"\r\n          >\r\n            <div class="search-result">{{ component.value }}</div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/menu/dialog-menu-search/dialog-menu-search.component.scss':
      /*!********************************************************************************!*\
  !*** ./src/app/main/menu/dialog-menu-search/dialog-menu-search.component.scss ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host a-content .menu {\n  max-width: 50vw;\n  min-width: 50vw; }\n  @media screen and (max-width: 1600px) {\n    :host a-content .menu {\n      max-width: 75vw;\n      min-width: 75vw; } }\n  :host a-content .filtered-menu-list {\n  font-size: 1rem;\n  margin: calc(8px * 0.5) auto 0 auto;\n  max-height: 100%;\n  max-width: 25rem;\n  min-width: 25rem;\n  overflow-y: auto; }\n  :host a-content .filtered-menu-list ul {\n    margin: 0 8px; }\n  :host a-content .filtered-menu-list ul li {\n      transition-duration: 0.3s;\n      transition-property: background-color, color; }\n  :host a-content .filtered-menu-list ul li:hover {\n        background-color: rgba(0, 0, 0, 0.1);\n        color: #01579b;\n        cursor: pointer; }\n  :host a-content .filtered-menu-list ul li .search-result {\n        margin: 0 auto;\n        padding: calc(8px * 1.5); }\n  :host a-content .menu-filter-wrapper {\n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  font-size: 1.25rem;\n  justify-content: center;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n  :host a-content .menu-filter-wrapper > .form-group {\n    max-width: 25rem; }\n  :host a-content .menu-wrapper {\n  display: flex;\n  flex-direction: row;\n  margin-top: calc(8px * 2);\n  max-height: 30rem;\n  min-height: 30rem; }\n  :host a-content .menu-wrapper .sub-menu-entry-list {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    flex-wrap: wrap; }\n  :host a-content .menu-wrapper .sub-menu-entry-list .menu-entry-wrapper {\n      display: flex;\n      flex-direction: column;\n      padding: calc(8px * 2);\n      width: 19rem; }\n  :host a-content .menu-wrapper .sub-menu-entry-list .menu-entry-wrapper .menu-entry {\n        display: flex;\n        flex-direction: row;\n        align-items: flex-end;\n        font-size: 1.125rem;\n        font-variant: small-caps;\n        font-weight: 600;\n        line-height: 1;\n        max-width: -webkit-fit-content;\n        max-width: -moz-fit-content;\n        max-width: fit-content;\n        padding-bottom: 8px; }\n  :host a-content .menu-wrapper .sub-menu-entry-list .menu-entry-wrapper .sub-menu-entry-wrapper {\n        display: flex;\n        flex-direction: row;\n        padding-top: 8px; }\n  :host a-content .menu-wrapper .sub-menu-entry-list .menu-entry-wrapper .sub-menu-entry-wrapper .sub-menu-entry {\n          cursor: pointer;\n          transition: color 0.3s; }\n  :host a-content .menu-wrapper .sub-menu-entry-list .menu-entry-wrapper .sub-menu-entry-wrapper .sub-menu-entry:hover {\n            color: #01579b; }\n  :host a-content .menu-wrapper .top-menu-entry-list {\n    font-size: 1.25rem;\n    font-variant: small-caps;\n    margin-right: calc(8px * 4);\n    max-width: 15rem;\n    min-width: 15rem; }\n  :host a-content .menu-wrapper .top-menu-entry-list > div {\n      cursor: pointer;\n      padding: calc(8px * 2) 8px;\n      text-align: right;\n      transition-duration: 0.3s;\n      transition-property: background-color, color; }\n  :host a-content .menu-wrapper .top-menu-entry-list > div:hover {\n        background-color: rgba(0, 0, 0, 0.1);\n        color: #01579b; }\n  :host a-content .menu-wrapper .top-menu-entry-list > div.active {\n        background-color: #01579b;\n        color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tZW51L2RpYWxvZy1tZW51LXNlYXJjaC9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbWVudVxcZGlhbG9nLW1lbnUtc2VhcmNoXFxkaWFsb2ctbWVudS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWVudS9kaWFsb2ctbWVudS1zZWFyY2gvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvbWFpbi9tZW51L2RpYWxvZy1tZW51LXNlYXJjaC9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBR00sZUFBZTtFQUNmLGVBQWUsRUFBQTtFQUVmO0lBTk47TUFPUSxlQUFlO01BQ2YsZUFBZSxFQUFBLEVBRWxCO0VBVkw7RUFhTSxlQUFlO0VBQ2YsbUNBQWdEO0VBQ2hELGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0VBbEJ0QjtJQXFCUSxhQ29CVSxFQUFBO0VEekNsQjtNQXdCVSx5QkFBeUI7TUFDekIsNENBQTRDLEVBQUE7RUF6QnREO1FBNEJZLG9DQUFvQztRQUNwQyxjQzVCVTtRRDZCVixlQUFlLEVBQUE7RUE5QjNCO1FBa0NZLGNBQWM7UUFDZCx3QkFBcUMsRUFBQTtFQW5DakQ7RUVvQkUsYUFBYTtFQUNiLG1CQUFtQjtFRnVCZixzQkMvQ3lCO0VEZ0R6QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTSxFQUFBO0VBaERaO0lBbURRLGdCQUFnQixFQUFBO0VBbkR4QjtFRW9CRSxhQUFhO0VBQ2IsbUJBQW1CO0VGcUNmLHlCQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7RUE1RHZCO0lFb0JFLGFBQWE7SUFDYixtQkFBbUI7SUY0Q2IsWUFBWTtJQUNaLGVBQWUsRUFBQTtFQWxFdkI7TUVlRSxhQUFhO01BQ2Isc0JBQXNCO01GdURkLHNCQUFtQztNQUNuQyxZQUFZLEVBQUE7RUF4RXRCO1FFb0JFLGFBQWE7UUFDYixtQkFBbUI7UUZ3RFQscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQix3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCw4QkFBc0I7UUFBdEIsMkJBQXNCO1FBQXRCLHNCQUFzQjtRQUN0QixtQkMxQ00sRUFBQTtFRHpDbEI7UUVvQkUsYUFBYTtRQUNiLG1CQUFtQjtRRm9FVCxnQkNoRE0sRUFBQTtFRHpDbEI7VUE0RmMsZUFBZTtVQUVmLHNCQUFzQixFQUFBO0VBOUZwQztZQWlHZ0IsY0NoR00sRUFBQTtFRER0QjtJQXlHUSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDJCQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7RUE3R3hCO01BZ0hVLGVBQWU7TUFDZiwwQkN4RVE7TUR5RVIsaUJBQWlCO01BRWpCLHlCQUF5QjtNQUN6Qiw0Q0FBNEMsRUFBQTtFQXJIdEQ7UUF3SFksb0NBQW9DO1FBQ3BDLGNDeEhVLEVBQUE7RUREdEI7UUE2SFkseUJDNUhVO1FENkhWLFdDakltQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tZW51L2RpYWxvZy1tZW51LXNlYXJjaC9kaWFsb2ctbWVudS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbjpob3N0IHtcclxuICBhLWNvbnRlbnQge1xyXG4gICAgLm1lbnUge1xyXG4gICAgICBtYXgtd2lkdGg6IDUwdnc7XHJcbiAgICAgIG1pbi13aWR0aDogNTB2dztcclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgIG1heC13aWR0aDogNzV2dztcclxuICAgICAgICBtaW4td2lkdGg6IDc1dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyZWQtbWVudS1saXN0IHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBtYXJnaW46IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDAuNSkgYXV0byAwIGF1dG87XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMjVyZW07XHJcbiAgICAgIG1pbi13aWR0aDogMjVyZW07XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbWFyZ2luOiAwICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvcjtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWFyY2gtcmVzdWx0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDEuNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtZmlsdGVyLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgJiA+IC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDI1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtd3JhcHBlciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgbWF4LWhlaWdodDogMzByZW07XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDMwcmVtO1xyXG5cclxuICAgICAgLnN1Yi1tZW51LWVudHJ5LWxpc3Qge1xyXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIC5tZW51LWVudHJ5LXdyYXBwZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgICAgIHdpZHRoOiAxOXJlbTtcclxuXHJcbiAgICAgICAgICAubWVudS1lbnRyeSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdWItbWVudS1lbnRyeS13cmFwcGVyIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLnN1Yi1tZW51LWVudHJ5IHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudG9wLW1lbnUtZW50cnktbGlzdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG4gICAgICAgIG1heC13aWR0aDogMTVyZW07XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNXJlbTtcclxuXHJcbiAgICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKSAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFV0aWxzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBidXR0b24tY29sb3IoJGJhY2tncm91bmQtY29sb3IsICRjb2xvciwgJGJvcmRlci1jb2xvcjogbnVsbCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIsXHJcbiAgJjpub3QoOmRpc2FibGVkKS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpZigkYm9yZGVyLWNvbG9yID09IG51bGwsICRjb2xvciwgJGJvcmRlci1jb2xvcik7XHJcbiAgICBjb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleC1jb2x1bW4oKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1yb3coKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQoKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuXHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWRpc2FibGVkKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWRpc2FibGVkO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1mb2N1cygpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxufVxyXG5cclxuQG1peGluIGlucHV0LWhvdmVyKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VhcmNoLWNyaXRlcmlhLWNvbnRhaW5lciB7XHJcbiAgLmFkdmFuY2VkLWNyaXRlcmlhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtY3JpdGVyaWEtZm9vdGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAuYXctYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlY3Rpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiA0KTtcclxuXHJcbiAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgJi5yZXF1aXJlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkKCk7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hbGVydCB7XHJcbiAgICAgICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICYgPiBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LW92ZXJmbG93LWhpZGRlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdyaWQgZm9ybSBjb250cm9scyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJNZWRpdW1cIjtcclxuXHJcbiAgJiA+IGlucHV0ICsgcC1tZXNzYWdlID4gLnVpLW1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpmb2N1cyxcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDI1NSwgMjU1LCAyNTUpIDYwJSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIC5hdy1pY29uIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4sXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0biB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcblxyXG4gICAgICAmLmF3LWNhbGVuZGFyIC51aS1pbnB1dHRleHQsXHJcbiAgICAgICYuYXctZHJvcGRvd24gLnVpLWRyb3Bkb3duLFxyXG4gICAgICAmLmF3LWlucHV0LFxyXG4gICAgICAmLmF3LXRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1jYWxlbmRhciB7XHJcbiAgICAgIC8vIEZJWE1FOiBmaXggYW4gVUkgaXNzdWUgb24gUHJpbWVORyBjYWxlbmRhciBjb21wb25lbnQ7IHRvIHJlbW92ZSB3aGVuIGlzc3VlIHdpbGwgYmUgZml4ZWQgdXBzdHJlYW1cclxuICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgIC5hdy1pY29uOm5vdCgucmVhZC1vbmx5LWxpbmspIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgLy8gbm9uZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbC1kYXRhIHtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tbmltcCxcclxuICAgIC5idG4tZXh0ZXJuYWwtbGluay13cmFwcGVyLFxyXG4gICAgLmJ0bi1jbGVhci13cmFwcGVyLFxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyLFxyXG4gICAgLmJ0bi1zZWFyY2gtd3JhcHBlciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlciB7XHJcbiAgICAgIC5hdy1maWxldXBsb2FkIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51aS1idXR0b24ge1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlOTM0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tY2xlYXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tc2VhcmNoIHtcclxuICAgICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1yYWRpb2J1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICYgPiAuYXctcmFkaW9idXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMiAqICN7JG1hcmdpbi12YWx1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLWdlbmVyaWMge1xyXG4gIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG5cclxuICAmID4gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IC5hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcblxyXG4gICAgJi5hbGVydC0tbm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNhbGVuZGFyIHtcclxuICAmLnVpLWlucHV0d3JhcHBlci1mb2N1cyB7XHJcbiAgICAudWktY2FsZW5kYXIgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1peGluIGdyaWQtY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRjaGVja2JveC1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRjaGVja2JveC1oZWlnaHQ7XHJcblxyXG4gIC51aS1jaGtib3gge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLWNoa2JveC1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1kcm9wZG93biB7XHJcbiAgLnVpLWRyb3Bkb3duIHtcclxuICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWZvY3VzIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uLFxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbiB7XHJcbiAgICAgIHJpZ2h0OiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgQGluY2x1ZGUgdGV4dC1vdmVyZmxvdy1oaWRkZW4oKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyICogMS43NXJlbSk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZpeGVkLXdpZHRoIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZmlsZXVwbG9hZCB7XHJcbiAgQGV4dGVuZCAuYXctYnRuO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAudWktZmlsZXVwbG9hZC1jaG9vc2Uge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAwICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1idXR0b24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtaW5wdXQoKSB7XHJcbiAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRleHRhcmVhIHtcclxuICBAaW5jbHVkZSBncmlkLWlucHV0KCk7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi1oZWlnaHQ6ICRmb3JtLWNvbnRyb2wtaGVpZ2h0O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXJhZGlvYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG4gIHdpZHRoOiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG5cclxuICAudWktcmFkaW9idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLXJhZGlvYnV0dG9uLWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblxyXG4gICAgICAgIC51aS1yYWRpb2J1dHRvbi1pY29uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gY2FsZW5kYXItcGFuZWwge1xyXG4gIC51aS1kYXRlcGlja2VyOm5vdCgudWktZGF0ZXBpY2tlci1pbmxpbmUpIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRyb3Bkb3duLXBhbmVsIHtcclxuICAudWktZHJvcGRvd24tcGFuZWwge1xyXG4gICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICAgIC51aS1kcm9wZG93bi1pdGVtcy13cmFwcGVyIC51aS1kcm9wZG93bi1saXN0IHtcclxuICAgICAgLnVpLWRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnVpLXN0YXRlLWhpZ2hsaWdodCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/menu/dialog-menu-search/dialog-menu-search.component.ts':
      /*!******************************************************************************!*\
  !*** ./src/app/main/menu/dialog-menu-search/dialog-menu-search.component.ts ***!
  \******************************************************************************/
      /*! exports provided: DialogMenuSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogMenuSearchComponent',
          function() {
            return DialogMenuSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_menu_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/constants/menu-constants */ './src/app/shared/constants/menu-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../menu.service */ './src/app/main/menu/menu.service.ts'
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

        var DialogMenuSearchComponent = /** @class */ (function(_super) {
          __extends(DialogMenuSearchComponent, _super);
          function DialogMenuSearchComponent(menuService, translateService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write,
                'DialogMenuSearchComponent'
              ) || this;
            _this.menuService = menuService;
            _this.translateService = translateService;
            _this.init();
            return _this;
          }
          DialogMenuSearchComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.setMenuEntryList();
            this.setTopMenuEntryList();
            setTimeout(function() {
              _this.searchTextElement.nativeElement.focus();
            });
          };
          DialogMenuSearchComponent.prototype.onSelectMenuEntry = function(menuEntryKey) {
            this.menuService.openMenuEntry(menuEntryKey);
            this.closeDialog();
          };
          DialogMenuSearchComponent.prototype.selectTopMenuEntry = function(menuEntry) {
            this.currentSubMenuEntrySelected = menuEntry;
            this.currentSubMenuEntryList = this.currentSubMenuEntrySelected.submenus;
          };
          DialogMenuSearchComponent.prototype.extractAllComponentFromMenuEntryList = function(menuEntryList) {
            var results = [];
            var queue = __spread(menuEntryList);
            while (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_5__['ListUtils'].isEmpty(queue)) {
              var first = queue.shift();
              if (_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_5__['ListUtils'].isEmpty(first.submenus)) {
                results = __spread(results, [first.key]);
              } else {
                queue = __spread(queue, first.submenus);
              }
            }
            return results;
          };
          DialogMenuSearchComponent.prototype.init = function() {
            this.componentList = [];
            this.currentSubMenuEntryList = [];
            this.currentSubMenuEntrySelected = undefined;
            this.menuEntryList = [];
            this.searchText = undefined;
            this.topMenuEntryList = [];
          };
          DialogMenuSearchComponent.prototype.setMenuEntryList = function() {
            var _this = this;
            this.componentList = this.extractAllComponentFromMenuEntryList(this.menuEntryList)
              .map(function(key) {
                return { key: key, value: _this.translateService.instant('transaction.' + key) };
              })
              .sort(function(obj1, obj2) {
                return obj1.value.localeCompare(obj2.value);
              });
          };
          DialogMenuSearchComponent.prototype.setTopMenuEntryList = function() {
            this.topMenuEntryList = __spread(this.menuEntryList);
            if (this.topMenuEntryList.length === 1) {
              this.currentSubMenuEntrySelected = this.topMenuEntryList[0];
            } else if (!!this.currentTab) {
              var currentMenuEntryKey_1 =
                _shared_constants_menu_constants__WEBPACK_IMPORTED_MODULE_2__['MenuConstants'].COMPONENTS_ROOT[
                  this.currentTab.data.componentId
                ];
              if (!!currentMenuEntryKey_1) {
                this.currentSubMenuEntrySelected = this.topMenuEntryList.find(function(elt) {
                  return elt.key === currentMenuEntryKey_1;
                });
                if (!!this.currentSubMenuEntrySelected) {
                  this.selectTopMenuEntry(this.currentSubMenuEntrySelected);
                }
              }
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogMenuSearchComponent.prototype,
            'currentTab',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('menuEntries'),
              __metadata('design:type', Array)
            ],
            DialogMenuSearchComponent.prototype,
            'menuEntryList',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('searchTextElement'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            DialogMenuSearchComponent.prototype,
            'searchTextElement',
            void 0
          );
          DialogMenuSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-menu-search',
                template: __webpack_require__(
                  /*! ./dialog-menu-search.component.html */ './src/app/main/menu/dialog-menu-search/dialog-menu-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-menu-search.component.scss */ './src/app/main/menu/dialog-menu-search/dialog-menu-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _menu_service__WEBPACK_IMPORTED_MODULE_6__['MenuService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            DialogMenuSearchComponent
          );
          return DialogMenuSearchComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/tab-container/tab-container.component.ts':
      /*!***************************************************************!*\
  !*** ./src/app/main/tab-container/tab-container.component.ts ***!
  \***************************************************************/
      /*! exports provided: TabContainerComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TabContainerComponent', function() {
          return TabContainerComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../dynamic-component-loader/dynamic-component-loader.service */ './src/app/main/dynamic-component-loader/dynamic-component-loader.service.ts'
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

        var TabContainerComponent = /** @class */ (function() {
          function TabContainerComponent(ref, dynamicComponentLoader, tabService) {
            this.ref = ref;
            this.dynamicComponentLoader = dynamicComponentLoader;
            this.tabService = tabService;
            this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__['Subject']();
            this.registerTabToHideObservable();
            this.registerTabToShowObservable();
          }
          TabContainerComponent.prototype.ngOnDestroy = function() {
            this.unsubscribe.next();
            this.unsubscribe.complete();
          };
          TabContainerComponent.prototype.ngOnInit = function() {
            var _this = this;
            if (!!this.container && !!this.tab && !!this.tab.data && !!this.tab.data.componentId) {
              this.dynamicComponentLoader.getComponentFactory(this.tab.data.componentId).subscribe(
                function(componentFactory) {
                  var componentRef = _this.container.createComponent(componentFactory);
                  componentRef.instance.componentData = _this.tab.data;
                  _this.tabService.register(_this.tab, componentRef);
                },
                function(error) {
                  console.warn(error);
                }
              );
            }
          };
          TabContainerComponent.prototype.registerTabToHideObservable = function() {
            var _this = this;
            this.tabService.tabToHide$
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['takeUntil'])(this.unsubscribe))
              .subscribe(function(tab) {
                if (tab.id === _this.tab.id) {
                  _this.ref.detach();
                }
              });
          };
          TabContainerComponent.prototype.registerTabToShowObservable = function() {
            var _this = this;
            this.tabService.tabToShow$
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['takeUntil'])(this.unsubscribe))
              .subscribe(function(tab) {
                if (tab.id === _this.tab.id) {
                  _this.ref.reattach();
                }
              });
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            TabContainerComponent.prototype,
            'tab',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('container', {
                read: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewContainerRef']
              }),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewContainerRef'])
            ],
            TabContainerComponent.prototype,
            'container',
            void 0
          );
          TabContainerComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-tab-container',
                template: '\n    <ng-container #container></ng-container>\n  '
              }),
              __metadata('design:paramtypes', [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectorRef'],
                _dynamic_component_loader_dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_4__[
                  'DynamicComponentLoader'
                ],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_3__['TabService']
              ])
            ],
            TabContainerComponent
          );
          return TabContainerComponent;
        })();

        /***/
      },

    /***/ './src/app/shared/pipes/filter-by-value.pipe.ts':
      /*!******************************************************!*\
  !*** ./src/app/shared/pipes/filter-by-value.pipe.ts ***!
  \******************************************************/
      /*! exports provided: FilterByValuePipe */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FilterByValuePipe', function() {
          return FilterByValuePipe;
        });
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

        var FilterByValuePipe = /** @class */ (function() {
          function FilterByValuePipe() {}
          FilterByValuePipe.prototype.transform = function(list, searchText) {
            if (!list) {
              return [];
            }
            if (!searchText) {
              return list;
            }
            var formattedSearchText = searchText.toLowerCase();
            return list.filter(function(elt) {
              return elt.value.toLowerCase().includes(formattedSearchText);
            });
          };
          FilterByValuePipe = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Pipe'])({
                name: 'filterByValue'
              })
            ],
            FilterByValuePipe
          );
          return FilterByValuePipe;
        })();

        /***/
      },

    /***/ './src/app/shared/utils/array-utils.ts':
      /*!*********************************************!*\
  !*** ./src/app/shared/utils/array-utils.ts ***!
  \*********************************************/
      /*! exports provided: ArrayUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ArrayUtils', function() {
          return ArrayUtils;
        });
        var ArrayUtils = /** @class */ (function() {
          function ArrayUtils() {}
          ArrayUtils.compareValues = function(key, order) {
            if (order === void 0) {
              order = 'asc';
            }
            return function(a, b) {
              if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
              }
              var varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
              var varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
              var comparison = 0;
              if (varA > varB) {
                comparison = 1;
              } else if (varA < varB) {
                comparison = -1;
              }
              return order === 'desc' ? comparison * -1 : comparison;
            };
          };
          return ArrayUtils;
        })();

        /***/
      },

    /***/ './src/app/shared/utils/base64-utils.ts':
      /*!**********************************************!*\
  !*** ./src/app/shared/utils/base64-utils.ts ***!
  \**********************************************/
      /*! exports provided: Base64Utils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Base64Utils', function() {
          return Base64Utils;
        });
        // tslint:disable:no-magic-numbers
        var Base64Utils = /** @class */ (function() {
          function Base64Utils() {}
          Base64Utils.decodeUrl = function(encodedUrl) {
            return atob((encodedUrl + '==='.slice((encodedUrl.length + 3) % 4)).replace(/-/g, '+').replace(/_/g, '/'));
          };
          return Base64Utils;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=main-main-module.js.map
