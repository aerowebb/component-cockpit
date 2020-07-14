(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~maintenance-airworthiness-control-airworthiness-control-module~maintenance-maintenance-modul~2e17d431"],{

/***/ "./src/app/main/maintenance/work-orders/form/work-orders-form.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/maintenance/work-orders/form/work-orders-form.service.ts ***!
  \*******************************************************************************/
/*! exports provided: WorkOrdersFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrdersFormService", function() { return WorkOrdersFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/aircraft-maintenance.api */ "./src/app/shared/api/aircraft-maintenance.api.ts");
/* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/airworthiness-management.api */ "./src/app/shared/api/airworthiness-management.api.ts");
/* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/am-project-management.api */ "./src/app/shared/api/am-project-management.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
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











var WorkOrdersFormService = /** @class */ (function (_super) {
    __extends(WorkOrdersFormService, _super);
    function WorkOrdersFormService(http, appConfigService, airworthinessManagementApi, aircraftMaintenanceApi, amProjectManagementApi, fleetManagementApi, productStructureManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.airworthinessManagementApi = airworthinessManagementApi;
        _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
        _this.amProjectManagementApi = amProjectManagementApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this.productStructureManagementApi = productStructureManagementApi;
        return _this;
    }
    /**************************************************************************
     * Aircraft management api
     *************************************************************************/
    WorkOrdersFormService.prototype.calculateWorkOrderStatus = function (workOrderDetailInput) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.calculateWorkOrderStatus, workOrderDetailInput);
    };
    WorkOrdersFormService.prototype.removeBidmWorkOrderList = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.removeBidmWorkOrderList, input);
    };
    WorkOrdersFormService.prototype.updateBidmWorkOrders = function (bidmWorkOrderList) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.updateBidmWorkOrders, bidmWorkOrderList);
    };
    WorkOrdersFormService.prototype.moveWorkOrders = function (moveWorkOrders) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.moveWorkOrdersToProject, moveWorkOrders);
    };
    /**************************************************************************
     * AM project management api
     *************************************************************************/
    WorkOrdersFormService.prototype.generateJobcards = function (workOrderIdList) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.generateJobcards, workOrderIdList);
    };
    /**************************************************************************
     * Fleet management api
     *************************************************************************/
    WorkOrdersFormService.prototype.findBidoEquipmentById = function (bidoEquipementDtoId) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, bidoEquipementDtoId);
    };
    /**************************************************************************
     * Airworthiness management api
     *************************************************************************/
    WorkOrdersFormService.prototype.findWorkOrderOriginDetails = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.findWorkOrderOriginDetails, input);
    };
    WorkOrdersFormService.prototype.calculateBidmProjectStatus = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.calculateBidmProjectStatus, input);
    };
    /**************************************************************************
     * Reference list
     *************************************************************************/
    WorkOrdersFormService.prototype.findAuthorizedBireSite = function () {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAuthorizedBireSite);
    };
    WorkOrdersFormService.prototype.loadMROCenterList = function () {
        return this.findAuthorizedBireSite().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
            var mroCenterList = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_10__["SelectItemUtils"].fromLabelValues(results) : [];
            return mroCenterList.map(function (mro) {
                mro.label = mro.label ? mro.value + " (" + mro.label + ")" : mro.value;
                return mro;
            });
        }));
    };
    WorkOrdersFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfigService"],
            _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_4__["AirworthinessManagementApi"],
            _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__["AircraftMaintenanceApi"],
            _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_5__["AMProjectManagementApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__["FleetManagementApi"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_7__["ProductStructureManagementApi"]])
    ], WorkOrdersFormService);
    return WorkOrdersFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/services/file.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/file.service.ts ***!
  \*************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _api_document_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/document.api */ "./src/app/shared/api/document.api.ts");
/* harmony import */ var _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _utils_image_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/image-utils */ "./src/app/shared/utils/image-utils.ts");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-config.service */ "./src/app/shared/services/app-config.service.ts");
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








var FileService = /** @class */ (function (_super) {
    __extends(FileService, _super);
    function FileService(http, appConfigService, domSanitizer, productStructureManagementApi, documentApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.domSanitizer = domSanitizer;
        _this.productStructureManagementApi = productStructureManagementApi;
        _this.documentApi = documentApi;
        return _this;
    }
    FileService.prototype.findIllustration = function (bireItemDtoId, bidoEquipementDTO) {
        var bidoBireId = {
            bidoEquipmentDTOId: { equipmentCode: bidoEquipementDTO.equipmentCode },
            bireItemDTOId: bireItemDtoId,
            sn: bidoEquipementDTO.sn
        };
        return _super.prototype.post.call(this, this.documentApi.findBidoBireDoc, bidoBireId);
    };
    FileService.prototype.findBireDocItemByPnCode = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireDocItemByPnCode, input);
    };
    FileService.prototype.sanitizeAndGetBase64Prefix = function (illustrationDocument) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl("" + _utils_image_utils__WEBPACK_IMPORTED_MODULE_6__["ImageUtils"].getBase64Prefix(illustrationDocument.docType) + illustrationDocument.docFile);
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _app_config_service__WEBPACK_IMPORTED_MODULE_7__["AppConfigService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__["ProductStructureManagementApi"],
            _api_document_api__WEBPACK_IMPORTED_MODULE_3__["DocumentApi"]])
    ], FileService);
    return FileService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__["AbstractAwHttpService"]));



/***/ })

}]);
//# sourceMappingURL=default~maintenance-airworthiness-control-airworthiness-control-module~maintenance-maintenance-modul~2e17d431.js.map