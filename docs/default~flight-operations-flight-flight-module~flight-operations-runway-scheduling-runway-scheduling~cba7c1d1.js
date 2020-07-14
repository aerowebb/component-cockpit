(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~flight-operations-flight-flight-module~flight-operations-runway-scheduling-runway-scheduling~cba7c1d1'],
  {
    /***/ './src/app/main/flight-operations/flight/form/flight/flight-form.service.ts':
      /*!**********************************************************************************!*\
  !*** ./src/app/main/flight-operations/flight/form/flight/flight-form.service.ts ***!
  \**********************************************************************************/
      /*! exports provided: FlightFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FlightFormService', function() {
          return FlightFormService;
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
        /* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/api/airworthiness-management.api */ './src/app/shared/api/airworthiness-management.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/api/bidt-employee.api */ './src/app/shared/api/bidt-employee.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/api/fleet-business.api */ './src/app/shared/api/fleet-business.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_history_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/api/fleet-history.api */ './src/app/shared/api/fleet-history.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/api/user-profile-management.api */ './src/app/shared/api/user-profile-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
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

        var FlightFormService = /** @class */ (function(_super) {
          __extends(FlightFormService, _super);
          function FlightFormService(
            http,
            appConfigService,
            airworthinessManagementApi,
            bidtEmployeeApi,
            fleetBusinessApi,
            fleetHistoryApi,
            fleetManagementApi,
            productStructureManagementApi,
            propertiesService,
            userProfileManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.airworthinessManagementApi = airworthinessManagementApi;
            _this.bidtEmployeeApi = bidtEmployeeApi;
            _this.fleetBusinessApi = fleetBusinessApi;
            _this.fleetHistoryApi = fleetHistoryApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.propertiesService = propertiesService;
            _this.userProfileManagementApi = userProfileManagementApi;
            _this.fuelUpdatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__['Subject']();
            _this._fuelUpdated$ = _this.fuelUpdatedSource.asObservable();
            return _this;
          }
          Object.defineProperty(FlightFormService.prototype, 'fuelUpdated$', {
            get: function() {
              return this._fuelUpdated$;
            },
            enumerable: true,
            configurable: true
          });
          FlightFormService.prototype.updateFuelValue = function(newValue) {
            this.fuelUpdatedSource.next(newValue);
          };
          /**************************************************************************
           * Airworthiness management api
           *************************************************************************/
          FlightFormService.prototype.applyTaskForFlight = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.applyTaskForFlight, input);
          };
          /**************************************************************************
           * Bidt employee api
           *************************************************************************/
          FlightFormService.prototype.findAllEmployeeByQualificationCode = function(input) {
            return _super.prototype.post.call(this, this.bidtEmployeeApi.findAllEmployeeByQualificationCode, input);
          };
          FlightFormService.prototype.findAllEmployeeByQualificationType = function(input) {
            return _super.prototype.post.call(this, this.bidtEmployeeApi.findAllEmployeeByQualificationType, input);
          };
          /**************************************************************************
           * Fleet business api
           *************************************************************************/
          FlightFormService.prototype.calculatePostFlightRecordsInformations = function(input) {
            return _super.prototype.post.call(
              this,
              this.fleetBusinessApi.calculatePostFlightRecordsInformations,
              input
            );
          };
          FlightFormService.prototype.createDefect = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.createDefect, input);
          };
          FlightFormService.prototype.cancelFlightReplenishmentValidation = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.cancelFlightReplenishmentValidation, input);
          };
          FlightFormService.prototype.findAllBireMeasureReferenceOfStructureByEquipmentCode = function(input) {
            return _super.prototype.post.call(
              this,
              this.fleetBusinessApi.findBireMeasureReferencesOfStructureByEquipmentCode,
              input
            );
          };
          FlightFormService.prototype.findAllEquipmentInStructureByEquipmentCode = function(input) {
            return _super.prototype.post.call(
              this,
              this.fleetBusinessApi.findAllEquipmentsInStructureByEquipmentCode,
              input
            );
          };
          FlightFormService.prototype.saveFlight = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.saveFlight, input);
          };
          FlightFormService.prototype.updateFlightEquipment = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.updateFlightEquipment, input);
          };
          FlightFormService.prototype.validateFlightReplenishment = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.validateFlightReplenishment, input);
          };
          /**************************************************************************
           * Fleet history api
           *************************************************************************/
          FlightFormService.prototype.findGoNoGoValidationStatus = function(input) {
            return _super.prototype.post.call(this, this.fleetHistoryApi.findGoNoGoValidationStatus, input);
          };
          /**************************************************************************
           * Fleet management api
           *************************************************************************/
          FlightFormService.prototype.findAllBidoCustomerBySearchCriteria = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoCustomerBySearchCriteria, input);
          };
          FlightFormService.prototype.findAllBidoFlightLoadByFlight = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoFlightLoadByFlight, input);
          };
          FlightFormService.prototype.findAllBidoEquipmentEngineByEquipmentCode = function(input) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findEquipmentEngineListByEquipmentCode,
              input
            );
          };
          FlightFormService.prototype.findAllBidoFlightMeasureByFlight = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoFlightMeasuresByFlight, input);
          };
          FlightFormService.prototype.findAllBidoMeasureByFlight = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoMeasureByFlightForFlight, input);
          };
          FlightFormService.prototype.findAllBidoNotificationAttributeByNotificationCode = function(input) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findAllBidoNotificationAttributeByNotificationCode,
              input
            );
          };
          FlightFormService.prototype.findAllBidoNotificationTypesByTypeCategory = function(input) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findAllBidoNotificationTypeByTypeCategory,
              input
            );
          };
          FlightFormService.prototype.findBidoEquipment = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, input);
          };
          FlightFormService.prototype.findBidoFlightAttribute = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoFlightAttribute, input);
          };
          FlightFormService.prototype.findBidoMission = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoMission, input);
          };
          FlightFormService.prototype.findBidoMissionEquipment = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoMissionEquipment, input);
          };
          FlightFormService.prototype.getSourceSystemIdList = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.getSourceSystemIdList);
          };
          FlightFormService.prototype.saveBidoFlightAttribute = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.saveBidoFlightAttribute, input);
          };
          FlightFormService.prototype.getCountryZoneMap = function() {
            return this.propertiesService.getValue('getCountryZoneMap');
          };
          FlightFormService.prototype.getFlightArea = function(propertiesId) {
            return _super.prototype.post.call(
              this,
              this.userProfileManagementApi.findBidoPropertiesValuesByPropertiesId,
              propertiesId
            );
          };
          FlightFormService.prototype.getPropertyCatalogIdNameMapping = function() {
            return _super.prototype.post.call(this, this.userProfileManagementApi.findAllBidoProperties);
          };
          /**************************************************************************
           * Product structure management api
           *************************************************************************/
          FlightFormService.prototype.findAllBireUnitMeasure = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireUnitMeasure);
          };
          FlightFormService.prototype.findBireMeasureReference = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireMeasureReference, input);
          };
          FlightFormService.prototype.findBireUnitMeasure = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireUnitMeasure, input);
          };
          /**************************************************************************
           * Fleet history api
           *************************************************************************/
          // tslint:disable-next-line: max-line-length
          FlightFormService.prototype.findHBidoMissionEquipments = function(objId) {
            return _super.prototype.post.call(this, this.fleetHistoryApi.findHBidoMissionEquipments, objId);
          };
          FlightFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_11__['AppConfigService'],
                _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_3__['AirworthinessManagementApi'],
                _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_4__['BidtEmployeeApi'],
                _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_5__['FleetBusinessApi'],
                _shared_api_fleet_history_api__WEBPACK_IMPORTED_MODULE_6__['FleetHistoryApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_7__['FleetManagementApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_8__[
                  'ProductStructureManagementApi'
                ],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__['PropertiesService'],
                _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_9__['UserProfileManagementApi']
              ])
            ],
            FlightFormService
          );
          return FlightFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_10__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/flight-operations/flight/search/search.service.ts':
      /*!************************************************************************!*\
  !*** ./src/app/main/flight-operations/flight/search/search.service.ts ***!
  \************************************************************************/
      /*! exports provided: SearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SearchService', function() {
          return SearchService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-employee.api */ './src/app/shared/api/bidt-employee.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-business.api */ './src/app/shared/api/fleet-business.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

        var SearchService = /** @class */ (function(_super) {
          __extends(SearchService, _super);
          function SearchService(http, appConfigService, bidtEmployeeApi, fleetBusinessApi, fleetManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtEmployeeApi = bidtEmployeeApi;
            _this.fleetBusinessApi = fleetBusinessApi;
            _this.fleetManagementApi = fleetManagementApi;
            return _this;
          }
          /**************************************************************************
           * Bidt employee api
           *************************************************************************/
          SearchService.prototype.findAllEmployeeByQualificationCode = function(qualificationCode) {
            return _super.prototype.post.call(
              this,
              this.bidtEmployeeApi.findAllEmployeeByQualificationCode,
              qualificationCode
            );
          };
          SearchService.prototype.findAllBidoCustomerBySearchCriteria = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoCustomerBySearchCriteria, input);
          };
          /**************************************************************************
           * Fleet business api
           *************************************************************************/
          SearchService.prototype.generateFlightLogbookPDF = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.generateFlightLogbookPDF, input);
          };
          /**************************************************************************
           * Fleet management api
           *************************************************************************/
          SearchService.prototype.findAllBidoMissionEquipmentByCriteria = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findAllBidoMissionEquipmentLwoByCriteria,
              criteria
            );
          };
          SearchService.prototype.findEquipmentEngineListByEquipmentCode = function(input) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findEquipmentEngineListByEquipmentCode,
              input
            );
          };
          SearchService.prototype.findReplenishmentByMissionEquipmentAndTypeAndEquipmentCode = function(input) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findReplenishmentByMissionEquipmentAndTypeAndEquipmentCode,
              input
            );
          };
          SearchService.prototype.getSourceSystemIdList = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.getSourceSystemIdList);
          };
          SearchService.prototype.getEquipmentRepresentation = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.getEquipmentRepresentation, input);
          };
          SearchService.prototype.removeBidoMissionEquipment = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoMissionEquipment, input);
          };
          SearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__['AppConfigService'],
                _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_2__['BidtEmployeeApi'],
                _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_3__['FleetBusinessApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__['FleetManagementApi']
              ])
            ],
            SearchService
          );
          return SearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=default~flight-operations-flight-flight-module~flight-operations-runway-scheduling-runway-scheduling~cba7c1d1.js.map
