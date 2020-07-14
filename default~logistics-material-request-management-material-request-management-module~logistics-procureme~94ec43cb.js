(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~logistics-material-request-management-material-request-management-module~logistics-procureme~94ec43cb"],{

/***/ "./node_modules/primeng/overlaypanel.js":
/*!**********************************************!*\
  !*** ./node_modules/primeng/overlaypanel.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/overlaypanel/overlaypanel */ "./node_modules/primeng/components/overlaypanel/overlaypanel.js"));

/***/ }),

/***/ "./src/app/main/logistics/procurement-request/search/procurement-request-search.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/search/procurement-request-search.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProcurementRequestSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcurementRequestSearchService", function() { return ProcurementRequestSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_procurement_request_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-procurement-request.api */ "./src/app/shared/api/bidt-procurement-request.api.ts");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
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











var ProcurementRequestSearchService = /** @class */ (function (_super) {
    __extends(ProcurementRequestSearchService, _super);
    function ProcurementRequestSearchService(http, propertiesService, appConfigService, bidtSiteApi, bidtWarehouseApi, productStructureManagementApi, bidtProcurementRequestApi, fleetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.propertiesService = propertiesService;
        _this.bidtSiteApi = bidtSiteApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.productStructureManagementApi = productStructureManagementApi;
        _this.bidtProcurementRequestApi = bidtProcurementRequestApi;
        _this.fleetManagementApi = fleetManagementApi;
        return _this;
    }
    ProcurementRequestSearchService.prototype.loadTableCols = function () {
        return [
            { field: 'procurementRequest', alignment: 'left', width: '15%' },
            { field: 'referenceDocument', alignment: 'left', width: '14%' },
            { field: 'shipper', alignment: 'left', width: '10%' },
            { field: 'recipient', alignment: 'left', width: '10%' },
            { field: 'assetRecipient', alignment: 'left', width: '10%' },
            { field: 'materials', alignment: 'left', width: '10%' },
            { field: 'quantity', alignment: 'right', width: '5%' },
            { field: 'quantityUnit', alignment: 'left', width: '5%' },
            { field: 'expectedOn', alignment: 'left', width: '7%' },
            { field: 'status', alignment: 'left', width: '7%' },
            { field: 'criticity', alignment: 'left', width: '7%' }
        ];
    };
    ProcurementRequestSearchService.prototype.findBidoCounterReferencesByPnCode = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBidoCounterReferencesByPnCode, input);
    };
    ProcurementRequestSearchService.prototype.loadCriticalityList = function () {
        return this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].LOGISTICAL_CRITICALITY_MAP);
    };
    ProcurementRequestSearchService.prototype.getWarehouseCategoryMap = function () {
        return this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].WAREHOUSE_CATEGORY_MAP);
    };
    ProcurementRequestSearchService.prototype.findAllBireSite = function () {
        return _super.prototype.post.call(this, this.bidtSiteApi.findAll);
    };
    ProcurementRequestSearchService.prototype.getWarehousesBySiteId = function (siteId) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, siteId);
    };
    ProcurementRequestSearchService.prototype.loadStatusList = function () {
        return this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].PROCUREMENT_REQUEST_STATUS_MAP);
    };
    ProcurementRequestSearchService.prototype.findAllBireMeasureReferencesMaintenanceProgram = function () {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireMeasureReferencesMaintenanceProgram);
    };
    ProcurementRequestSearchService.prototype.findAllBidoCustomer = function () {
        return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoCustomer);
    };
    ProcurementRequestSearchService.prototype.addOrUpdate = function (input) {
        return _super.prototype.post.call(this, this.bidtProcurementRequestApi.addOrUpdate, input);
    };
    ProcurementRequestSearchService.prototype.createProcurementRequest = function (input) {
        return _super.prototype.post.call(this, this.bidtProcurementRequestApi.createProcurementRequest, input);
    };
    ProcurementRequestSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__["PropertiesService"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfigService"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__["BidtSiteApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__["BidtWarehouseApi"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_6__["ProductStructureManagementApi"],
            _shared_api_bidt_procurement_request_api__WEBPACK_IMPORTED_MODULE_2__["BidtProcurementRequestApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__["FleetManagementApi"]])
    ], ProcurementRequestSearchService);
    return ProcurementRequestSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/constants/bidt-stock-mvt-type-constants.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/constants/bidt-stock-mvt-type-constants.ts ***!
  \*******************************************************************/
/*! exports provided: BidtStockMvtTypeConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidtStockMvtTypeConstant", function() { return BidtStockMvtTypeConstant; });
var BidtStockMvtTypeConstant = /** @class */ (function () {
    function BidtStockMvtTypeConstant() {
    }
    BidtStockMvtTypeConstant.RECEIPT = 10;
    BidtStockMvtTypeConstant.STORAGE = 11;
    BidtStockMvtTypeConstant.LOCATION_CHANGE = 12;
    BidtStockMvtTypeConstant.QUARANTINE = 13;
    BidtStockMvtTypeConstant.CROSS_DOCKING = 18;
    BidtStockMvtTypeConstant.PICKING = 19;
    BidtStockMvtTypeConstant.SHIPMENT = 20;
    BidtStockMvtTypeConstant.BATCH_SPLITTING_PLUS = 22;
    BidtStockMvtTypeConstant.BATCH_SPLITTING_MINUS = 23;
    BidtStockMvtTypeConstant.INVENTORY_CORRECTION_PLUS = 24;
    BidtStockMvtTypeConstant.INVENTORY_CORRECTION_MINUS = 25;
    BidtStockMvtTypeConstant.WORKSHOP_ENTRY = 30;
    BidtStockMvtTypeConstant.INSTALLATION = 40;
    BidtStockMvtTypeConstant.REMOVAL = 50;
    BidtStockMvtTypeConstant.WORKSHOP_ISSUE = 60;
    return BidtStockMvtTypeConstant;
}());



/***/ }),

/***/ "./src/app/shared/utils/bido-equipment-utils.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/utils/bido-equipment-utils.ts ***!
  \******************************************************/
/*! exports provided: BidoEquipmentUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidoEquipmentUtils", function() { return BidoEquipmentUtils; });
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bido-family-variant-utils */ "./src/app/shared/utils/bido-family-variant-utils.ts");



var BidoEquipmentUtils = /** @class */ (function () {
    function BidoEquipmentUtils() {
    }
    BidoEquipmentUtils.createAssetName = function (equipment) {
        if (!equipment) {
            return '';
        }
        else {
            var designation = void 0;
            switch (equipment.equipmentFunction) {
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY:
                    designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.registration);
                    break;
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY:
                    designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn);
                    break;
                default:
                    designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.pnCode) + '/' + _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn);
                    break;
            }
            return designation;
        }
    };
    BidoEquipmentUtils.createAircraftRepresentation = function (equipment) {
        var aircraftRepresentation = '';
        if (!equipment) {
            return '';
        }
        else {
            if (BidoEquipmentUtils.createAssetName(equipment) !== '') {
                aircraftRepresentation =
                    'MSN ' + _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn) + ' | ' + BidoEquipmentUtils.createAssetName(equipment);
            }
            if (BidoEquipmentUtils.createAssetName(equipment) === '' && _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn) !== '') {
                aircraftRepresentation = 'MSN ' + _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn);
            }
            return aircraftRepresentation;
        }
    };
    BidoEquipmentUtils.createAssetRepresentation = function (equipment) {
        var assetRepresentation = '';
        if (equipment) {
            var designation = void 0;
            switch (equipment.equipmentFunction) {
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY:
                    assetRepresentation =
                        _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.familyVariantCode) +
                            ' | MSN ' +
                            _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn) +
                            ' | ' +
                            _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.registration);
                    designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.registration);
                    break;
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY:
                    assetRepresentation =
                        _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.familyVariantCode) +
                            ' | MSN ' +
                            _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn) +
                            ' | ' +
                            _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.registration);
                    designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.registration);
                    break;
                default:
                    assetRepresentation =
                        _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.familyVariantCode) + ' | SN ' + _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn);
                    designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn);
                    break;
            }
        }
        return assetRepresentation;
    };
    BidoEquipmentUtils.getBireItemPK = function (equipment) {
        if (!!equipment.chapter &&
            !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isEmpty(equipment.chapter) &&
            !!equipment.marks &&
            !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isEmpty(equipment.marks) &&
            !!equipment.section &&
            !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isEmpty(equipment.section) &&
            !!equipment.sheet &&
            !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isEmpty(equipment.sheet) &&
            !!equipment.subject &&
            !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isEmpty(equipment.subject)) {
            var itemId = {
                familyCode: _bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_2__["BidoFamilyVariantUtils"].getFamilyCodeFromFamilyVariantCode(equipment.familyVariantCode),
                chapter: equipment.chapter,
                subject: equipment.subject,
                variantCode: _bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_2__["BidoFamilyVariantUtils"].getVariantCodeFromFamilyVariantCode(equipment.familyVariantCode),
                section: equipment.section,
                sheet: equipment.sheet,
                marks: equipment.marks,
                structureType: _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].STRUCTURE_TYPE_IPC_KEY
            };
            return itemId;
        }
        else {
            return undefined;
        }
    };
    BidoEquipmentUtils.toString = function (asset, withFamilyVariantCode) {
        if (withFamilyVariantCode === void 0) { withFamilyVariantCode = true; }
        if (!asset) {
            return '';
        }
        var equipmentCode = asset.equipmentCode;
        var equipmentFunction = asset.equipmentFunction;
        var familyVariantCode = withFamilyVariantCode ? asset.familyVariantCode + " | " : '';
        var pn = asset.pnCode;
        var registration = asset.registration;
        var sn = asset.sn;
        if (equipmentFunction === _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
            var formattedMsn = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(sn) ? "MSN " + sn : '';
            var formattedRegistration = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(registration) ? " | " + registration : '';
            return "" + familyVariantCode + formattedMsn + formattedRegistration;
        }
        else if (equipmentFunction === _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY) {
            var formattedEsn = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(sn) ? "ESN " + sn : '';
            return "" + familyVariantCode + formattedEsn;
        }
        else {
            if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(pn)) {
                if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(sn)) {
                    return "P/N " + pn + " | S/N " + sn;
                }
                else {
                    return "P/N " + pn;
                }
            }
            else if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(sn)) {
                return "S/N " + sn;
            }
            else {
                return _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipmentCode);
            }
        }
    };
    return BidoEquipmentUtils;
}());



/***/ })

}]);
//# sourceMappingURL=default~logistics-material-request-management-material-request-management-module~logistics-procureme~94ec43cb.js.map