(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~engineering-management-engineering-management-module~maintenance-forecast-forecast-module"],{

/***/ "./src/app/main/engineering-management/unit-conversion-matrix/unit-conversion-matrix.service.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/unit-conversion-matrix/unit-conversion-matrix.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: UnitConversionMatrixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitConversionMatrixService", function() { return UnitConversionMatrixService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api/fleet-business.api */ "./src/app/shared/api/fleet-business.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_standard_import_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api/standard-import.api */ "./src/app/shared/api/standard-import.api.ts");
/* harmony import */ var _shared_api_unit_matrix_conversion_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/api/unit-matrix-conversion.api */ "./src/app/shared/api/unit-matrix-conversion.api.ts");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UnitConversionMatrixService = /** @class */ (function (_super) {
    __extends(UnitConversionMatrixService, _super);
    function UnitConversionMatrixService(http, appConfigService, unitMatrixConversionApi, fleetManagementApi, fleetBusinessApi, standardImportApi, userProfileManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.unitMatrixConversionApi = unitMatrixConversionApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this.fleetBusinessApi = fleetBusinessApi;
        _this.standardImportApi = standardImportApi;
        _this.userProfileManagementApi = userProfileManagementApi;
        return _this;
    }
    UnitConversionMatrixService.prototype.searchUnitMatrixConversion = function (input) {
        return _super.prototype.post.call(this, this.unitMatrixConversionApi.searchUnitMatrixConversion, input);
    };
    UnitConversionMatrixService.prototype.getUnitConversionMatrix = function (id) {
        return _super.prototype.post.call(this, this.unitMatrixConversionApi.getUnitMatrixConversion, id);
    };
    UnitConversionMatrixService.prototype.getDefaultMatrixByFamilyVariant = function (familyVariant) {
        return _super.prototype.post.call(this, this.unitMatrixConversionApi.getDefaultMatrixByFamilyVariant, familyVariant);
    };
    UnitConversionMatrixService.prototype.deleteUnitConversionMatrix = function (ids) {
        return _super.prototype.post.call(this, this.unitMatrixConversionApi.deleteUnitMatrixConversion, ids);
    };
    UnitConversionMatrixService.prototype.saveConversionMatrix = function (input) {
        return _super.prototype.post.call(this, this.unitMatrixConversionApi.saveConversionMatrix, input);
    };
    UnitConversionMatrixService.prototype.getUnitConversionMatrixRows = function () {
        return _super.prototype.post.call(this, this.fleetManagementApi.getUnitConversionMatrixRows);
    };
    UnitConversionMatrixService.prototype.getExcelTemplate = function () {
        return _super.prototype.post.call(this, this.fleetBusinessApi.getXlsUnitConversionMatrixWithVariantReport);
    };
    UnitConversionMatrixService.prototype.importUnitConversionMatrixFromExcel = function (input) {
        return _super.prototype.post.call(this, this.standardImportApi.importUnitConversionMatrixWithVariantFromExcel, input);
    };
    UnitConversionMatrixService.prototype.loadArchivedImportReports = function () {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoReportsUnitMatrixConversion);
    };
    UnitConversionMatrixService.prototype.openImportReportContent = function (reportId) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoReportContentOfBidoReport, reportId);
    };
    UnitConversionMatrixService.prototype.deleteReportEntry = function (reports) {
        return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoReport, reports);
    };
    UnitConversionMatrixService.prototype.saveBidoPreferenceUser = function (rowList) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.saveBidoPreferenceUser, rowList);
    };
    UnitConversionMatrixService.prototype.removeBidoPreferenceUser = function (id) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.removeBidoPreferenceUser, id);
    };
    UnitConversionMatrixService.prototype.findAllBireMeasureReferences = function () {
        return _super.prototype.post.call(this, this.fleetManagementApi.findAllBireMeasureReferences);
    };
    UnitConversionMatrixService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__["AppConfigService"],
            _shared_api_unit_matrix_conversion_api__WEBPACK_IMPORTED_MODULE_5__["UnitConversionMatrixApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__["FleetManagementApi"],
            _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_2__["FleetBusinessApi"],
            _shared_api_standard_import_api__WEBPACK_IMPORTED_MODULE_4__["StandardImportApi"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_6__["UserProfileManagementApi"]])
    ], UnitConversionMatrixService);
    return UnitConversionMatrixService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: DialogWorkOrderEditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogWorkOrderEditService", function() { return DialogWorkOrderEditService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/api/aircraft-maintenance.api */ "./src/app/shared/api/aircraft-maintenance.api.ts");
/* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/api/airworthiness-management.api */ "./src/app/shared/api/airworthiness-management.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/api/task-management.api */ "./src/app/shared/api/task-management.api.ts");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DialogWorkOrderEditService = /** @class */ (function (_super) {
    __extends(DialogWorkOrderEditService, _super);
    function DialogWorkOrderEditService(http, appConfigService, aircraftMaintenanceApi, airworthinessManagementApi, taskManagementApi, bidtWarehouseApi, fleetManagementApi, userProfileManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
        _this.airworthinessManagementApi = airworthinessManagementApi;
        _this.taskManagementApi = taskManagementApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this.userProfileManagementApi = userProfileManagementApi;
        return _this;
    }
    /**************************************************************************
     * Fleet management api
     *************************************************************************/
    DialogWorkOrderEditService.prototype.findBidoCustomer = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoCustomer, input);
    };
    DialogWorkOrderEditService.prototype.createOrUpdateBidmWorkOrder = function (bidmWorkOrder) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.createOrUpdateBidmWorkOrder, bidmWorkOrder);
    };
    DialogWorkOrderEditService.prototype.findRelatedItemsFromTask = function (bireTaskDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findRelatedItemsFromTask, bireTaskDTOId);
    };
    DialogWorkOrderEditService.prototype.findRelatedItemsFromEvolution = function (bireEvolutionDTO) {
        return _super.prototype.post.call(this, this.taskManagementApi.findRelatedItemsFromEvolution, bireEvolutionDTO);
    };
    DialogWorkOrderEditService.prototype.findRelatedAssets = function (findRelatedAssetsInput) {
        return _super.prototype.post.call(this, this.taskManagementApi.findRelatedAssets, findRelatedAssetsInput);
    };
    DialogWorkOrderEditService.prototype.findOperationsFromTaskAndRelatedTasks = function (bireTaskDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findOperationsFromTaskAndRelatedTasks, bireTaskDTOId);
    };
    DialogWorkOrderEditService.prototype.findOperationsFromEvolution = function (bireEvolutionDTO) {
        return _super.prototype.post.call(this, this.taskManagementApi.findOperationsFromEvolution, bireEvolutionDTO);
    };
    DialogWorkOrderEditService.prototype.findWorkOrder = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmWorkOrder, input);
    };
    DialogWorkOrderEditService.prototype.findBidmWorkOrder = function (bidmWorkOrderDTOId) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmWorkOrderData, bidmWorkOrderDTOId);
    };
    DialogWorkOrderEditService.prototype.calculateWorkOrderStatus = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.calculateWorkOrderStatus, input);
    };
    DialogWorkOrderEditService.prototype.findWorkOrderOriginDetails = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.findWorkOrderOriginDetails, input);
    };
    DialogWorkOrderEditService.prototype.findBidmOperationsByWorkOrder = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmOperationsByWorkOrder, input);
    };
    DialogWorkOrderEditService.prototype.loadWarehouseList = function (input) {
        if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__["StringUtils"].isNullOrEmpty(input)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        else {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findByMandantAndSiteCode, input);
        }
    };
    DialogWorkOrderEditService.prototype.loadWareHouses = function () {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findAll);
    };
    DialogWorkOrderEditService.prototype.findUsersWithUseCaseForWorkOrder = function (input) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findUsersWithUseCaseForWorkOrder, input);
    };
    DialogWorkOrderEditService.prototype.findBireOperationPnsByOperation = function (p) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireOperationPnsByOperation, p);
    };
    DialogWorkOrderEditService.prototype.findBirePn = function (input) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBirePn, input);
    };
    DialogWorkOrderEditService.prototype.initalizeWoProcurementRequestInput = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.initializeProcurementRequest, input);
    };
    DialogWorkOrderEditService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__["AppConfigService"],
            _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__["AircraftMaintenanceApi"],
            _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_4__["AirworthinessManagementApi"],
            _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_7__["TaskManagementApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__["BidtWarehouseApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__["FleetManagementApi"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_8__["UserProfileManagementApi"]])
    ], DialogWorkOrderEditService);
    return DialogWorkOrderEditService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/api/unit-matrix-conversion.api.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/api/unit-matrix-conversion.api.ts ***!
  \**********************************************************/
/*! exports provided: UnitConversionMatrixApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitConversionMatrixApi", function() { return UnitConversionMatrixApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.api */ "./src/app/shared/api/abstract.api.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnitConversionMatrixApi = /** @class */ (function (_super) {
    __extends(UnitConversionMatrixApi, _super);
    function UnitConversionMatrixApi() {
        var _this = _super.call(this, UnitConversionMatrixApi_1.baseUrl) || this;
        _this.searchUnitMatrixConversion = _super.prototype.appendToBaseUrl.call(_this, '/search');
        _this.getUnitMatrixConversion = _super.prototype.appendToBaseUrl.call(_this, '/get_by_id');
        _this.getDefaultMatrixByFamilyVariant = _super.prototype.appendToBaseUrl.call(_this, '/get_default_by_family_variant');
        _this.deleteUnitMatrixConversion = _super.prototype.appendToBaseUrl.call(_this, '/delete');
        _this.saveConversionMatrix = _super.prototype.appendToBaseUrl.call(_this, '/save');
        return _this;
    }
    UnitConversionMatrixApi_1 = UnitConversionMatrixApi;
    var UnitConversionMatrixApi_1;
    UnitConversionMatrixApi.baseUrl = '/bire_conversion_matrix';
    UnitConversionMatrixApi = UnitConversionMatrixApi_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UnitConversionMatrixApi);
    return UnitConversionMatrixApi;
}(_abstract_api__WEBPACK_IMPORTED_MODULE_1__["AbstractApi"]));



/***/ })

}]);
//# sourceMappingURL=default~engineering-management-engineering-management-module~maintenance-forecast-forecast-module.js.map