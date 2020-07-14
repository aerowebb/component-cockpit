(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~fleet-management-fleet-management-module~maintenance-maintenance-module~maintenance-work-ord~6c43a30c"],{

/***/ "./src/app/main/fleet-management/asset/search/asset-search.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/fleet-management/asset/search/asset-search.service.ts ***!
  \****************************************************************************/
/*! exports provided: AssetSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetSearchService", function() { return AssetSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/asset-management.api */ "./src/app/shared/api/asset-management.api.ts");
/* harmony import */ var _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bido-equipment.api */ "./src/app/shared/api/bido-equipment.api.ts");
/* harmony import */ var _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/bidt-df-type.api */ "./src/app/shared/api/bidt-df-type.api.ts");
/* harmony import */ var _shared_api_bidt_product_customer_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/bidt-product-customer.api */ "./src/app/shared/api/bidt-product-customer.api.ts");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_api_bidt_transfer_order_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/api/bidt-transfer-order.api */ "./src/app/shared/api/bidt-transfer-order.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/api/fleet-business.api */ "./src/app/shared/api/fleet-business.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
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
















var AssetSearchService = /** @class */ (function (_super) {
    __extends(AssetSearchService, _super);
    function AssetSearchService(http, appConfigService, fleetBusinessApi, fleetManagementApi, propertiesService, productStructureManagementApi, assetManagementApi, bidtWarehouseApi, bidtSiteApi, bidtProductCustomerApi, bidtDfTypeApi, bidoEquipmentApi, bidtTransferOrderApi) {
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
    AssetSearchService.prototype.findBidoEquipmentsDTOBySearchCriteria = function (findBidoEquipmentsBySearchCriteriaInput) {
        return _super.prototype.post.call(this, this.assetManagementApi.searchEquipmentList, findBidoEquipmentsBySearchCriteriaInput);
    };
    AssetSearchService.prototype.removeBidoEquipment = function (pnId) {
        return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoEquipmentList, pnId);
    };
    AssetSearchService.prototype.getFamilyVariant = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.initializeFamilyVariantList, input);
    };
    AssetSearchService.prototype.getAssetSourceSystemIdList = function (bireId) {
        return _super.prototype.post.call(this, this.fleetManagementApi.getAssetSourceSystemIdList, bireId);
    };
    AssetSearchService.prototype.getEquipmentLocationList = function () {
        return _super.prototype.post.call(this, this.fleetManagementApi.getEquipmentLocationList);
    };
    AssetSearchService.prototype.getEquipmentFunctionList = function () {
        return this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__["GenericPropertyConstants"].ITEM_FAMILY_CODE_MAP);
    };
    AssetSearchService.prototype.getOperationalStatusMap = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.initializeOperationalStatusList, input);
    };
    AssetSearchService.prototype.findBidoCustomersBySearchCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoCustomersBySearchCriteria, criteria);
    };
    AssetSearchService.prototype.findBidoAttributesByAttributeCategory = function (attributeCategory) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoAttributesByAttributeCategory, attributeCategory);
    };
    AssetSearchService.prototype.fetchGroundEquipmentFunctionList = function () {
        return _super.prototype.post.call(this, this.assetManagementApi.fetchGroundEquipmentFunctionList);
    };
    AssetSearchService.prototype.findAll = function () {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findAll);
    };
    AssetSearchService.prototype.lockTool = function (equipmentId) {
        return _super.prototype.post.call(this, this.fleetBusinessApi.lockEquipmentStructure, equipmentId);
    };
    AssetSearchService.prototype.unlockTool = function (equipmentId) {
        return _super.prototype.post.call(this, this.fleetBusinessApi.unlockEquipmentStructure, equipmentId);
    };
    AssetSearchService.prototype.findBidoEquipment = function (bidoEquipmentDTOId) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, bidoEquipmentDTOId);
    };
    AssetSearchService.prototype.findAircraftListLabelValue = function () {
        return _super.prototype.post.call(this, this.fleetManagementApi.findAircraftListLabelValue);
    };
    AssetSearchService.prototype.findAllBireSite = function () {
        return _super.prototype.post.call(this, this.bidtSiteApi.findAll);
    };
    AssetSearchService.prototype.getWarehousesBySiteId = function (siteId) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, siteId);
    };
    AssetSearchService.prototype.findCustomersByProduct = function (pnCode) {
        return _super.prototype.post.call(this, this.bidtProductCustomerApi.findByProduct, pnCode);
    };
    AssetSearchService.prototype.findShipmentDfTypeById = function (id) {
        return _super.prototype.post.call(this, this.bidtDfTypeApi.findShipmentDfTypeById, id);
    };
    AssetSearchService.prototype.getStockInformationByAsset = function (bidoEquipmentDTO) {
        return _super.prototype.post.call(this, this.bidoEquipmentApi.getStockInformationByAsset, bidoEquipmentDTO);
    };
    AssetSearchService.prototype.findBirePn = function (pn) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBirePn, pn);
    };
    AssetSearchService.prototype.findBidtWarehouseById = function (id) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findBidtWarehouseById, id);
    };
    AssetSearchService.prototype.validateSendToRepair = function (sendToRepair) {
        return _super.prototype.post.call(this, this.bidtTransferOrderApi.validateSendToRepair, sendToRepair);
    };
    AssetSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_14__["AppConfigService"],
            _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_9__["FleetBusinessApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_10__["FleetManagementApi"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_15__["PropertiesService"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_11__["ProductStructureManagementApi"],
            _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__["AssetManagementApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_8__["BidtWarehouseApi"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_6__["BidtSiteApi"],
            _shared_api_bidt_product_customer_api__WEBPACK_IMPORTED_MODULE_5__["BidtProductCustomerApi"],
            _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_4__["BidtDfTypeApi"],
            _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_3__["BidoEquipmentApi"],
            _shared_api_bidt_transfer_order_api__WEBPACK_IMPORTED_MODULE_7__["BidtTransferOrderApi"]])
    ], AssetSearchService);
    return AssetSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_13__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/search/work-package-search.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/search/work-package-search.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div class=\"page-subtitle\">- {{ \"global.search\" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"openNewWorkPackage()\" *ngIf=\"hasUpdateAccessRight\">\r\n      {{ \"global.create\" | translate }}\r\n    </button>\r\n    <button\r\n      id=\"actions\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show All Actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button id=\"favorites\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <i\r\n                    class=\"fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action\"\r\n                    aria-hidden=\"true\"\r\n                    pTooltip=\"{{ 'global.reset' | translate }}\"\r\n                    tooltipPosition=\"top\"\r\n                    (click)=\"resetSearchCriteria()\"\r\n                  ></i>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".number\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.projectNumber\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".name\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.projectName\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".type\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"typeList\"\r\n                        [(ngModel)]=\"searchObject.projectType\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        (keyup.enter)=\"search()\"\r\n                        appendTo=\"body\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".asset\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n                      <div class=\"form-control-data\" (click)=\"openEquipmentDialog()\">\r\n                        {{ searchObject.assetCode }}\r\n                      </div>\r\n\r\n                      <div *ngIf=\"searchObject.assetCode\" class=\"btn-clear-wrapper\">\r\n                        <i\r\n                          class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"searchObject.assetCode = ''\"\r\n                        ></i>\r\n                      </div>\r\n                      <div class=\"btn-search-wrapper\">\r\n                        <i\r\n                          class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"openEquipmentDialog()\"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".status\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"statusList\"\r\n                        [(ngModel)]=\"searchObject.statusState\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        (keyup.enter)=\"search()\"\r\n                        appendTo=\"body\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".mroCenter\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"mroCenterList\"\r\n                        [(ngModel)]=\"searchObject.bireRepairCenterCode\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        (keyup.enter)=\"search()\"\r\n                        appendTo=\"body\"\r\n                        (onChange)=\"getWorkShops()\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".workshop\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"workShopList\"\r\n                        [(ngModel)]=\"searchObject.bidtWarehouseId\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        appendTo=\"body\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".assignedTo\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"userList\"\r\n                        [(ngModel)]=\"searchObject.receivingAssignedTo\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        (keyup.enter)=\"search()\"\r\n                        appendTo=\"body\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!--div class=\"form-group flex--1\"></div-->\r\n                </div>\r\n\r\n                <div class=\"advanced-criteria\" [ngClass]=\"{ 'display--none': !showAdvancedCriteria }\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".operation\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [options]=\"operationList\"\r\n                            [(ngModel)]=\"searchObject.bidoOperationCode\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            (keyup.enter)=\"search()\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".description\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.projectDescription\" />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".receivingNumber\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.receivingNumber\" />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex--1\"></div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".startDate\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [options]=\"dateCriteriaList\"\r\n                            [(ngModel)]=\"searchObject.startDateCriteria\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            (onChange)=\"onStartDateCriteriaChange()\"\r\n                            (keyup.enter)=\"search()\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">&nbsp;</label>\r\n                        <div class=\"form-control\">\r\n                          <p-calendar\r\n                            showButtonBar=\"true\"\r\n                            [monthNavigator]=\"true\"\r\n                            [yearNavigator]=\"true\"\r\n                            [yearRange]=\"sessionService.calendarYearRange\"\r\n                            class=\"aw-calendar\"\r\n                            [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                            [locale]=\"sessionService.calendarFormat\"\r\n                            [(ngModel)]=\"searchObject.projectStartDate\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          ></p-calendar>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".endDate\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [options]=\"dateCriteriaList\"\r\n                            [(ngModel)]=\"searchObject.endDateCriteria\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            (onChange)=\"onEndDateCriteriaChange()\"\r\n                            (keyup.enter)=\"search()\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">&nbsp;</label>\r\n                        <div class=\"form-control\">\r\n                          <p-calendar\r\n                            showButtonBar=\"true\"\r\n                            [monthNavigator]=\"true\"\r\n                            [yearNavigator]=\"true\"\r\n                            [yearRange]=\"sessionService.calendarYearRange\"\r\n                            class=\"aw-calendar\"\r\n                            [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                            [locale]=\"sessionService.calendarFormat\"\r\n                            [(ngModel)]=\"searchObject.projectEndDate\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          ></p-calendar>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".sourceSystemId\" | translate }}\r\n                        </label>\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [options]=\"propertySourceSystemId\"\r\n                            [(ngModel)]=\"searchObject.sourceSystemId\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            (keyup.enter)=\"search()\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".sourceSystemReference\" | translate }}\r\n                        </label>\r\n                        <div class=\"form-control\">\r\n                          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.sourceSystemReference\" />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group flex--4\"></div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <button mat-button (click)=\"showAdvancedCriteria = !showAdvancedCriteria\">\r\n                    <ng-container *ngIf=\"showAdvancedCriteria\">\r\n                      <mat-icon>remove</mat-icon>\r\n                      {{ \"global.collapseCriteria\" | translate }}\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"!showAdvancedCriteria\">\r\n                      <mat-icon>add</mat-icon>\r\n                      {{ \"global.expandCriteria\" | translate }}\r\n                    </ng-container>\r\n                  </button>\r\n\r\n                  <div class=\"search-actions\">\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      class=\"btn-with-spinner\"\r\n                      (click)=\"search()\"\r\n                      appKeyPress\r\n                      color=\"primary\"\r\n                      [keyCode]=\"'Enter'\"\r\n                      (keyPress)=\"search()\"\r\n                    >\r\n                      <span *ngIf=\"isTableLoading\" class=\"lds-hourglass\"></span>\r\n                      {{ \"global.toSearch\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }} ({{ resultTable.list ? resultTable.list.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableResults\r\n                class=\"aw-table2\"\r\n                [columns]=\"resultTableCols\"\r\n                [value]=\"resultTable.list\"\r\n                [(selection)]=\"selectedWorkPackages\"\r\n                dataKey=\"number\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isTableLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isTableLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedWorkPackages.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableResultsGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableResults.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"hasManageAccessRight && hasPMRights && selectedWorkPackages.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteWorkPackages()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedWorkPackages.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openSelectedWorkPackages()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th\r\n                      pResizableColumn\r\n                      *ngFor=\"let col of columns\"\r\n                      [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                      [pSortableColumn]=\"col.field\"\r\n                    >\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template\r\n                  pTemplate=\"body\"\r\n                  let-rowData\r\n                  let-columns=\"columns\"\r\n                  let-rowIndex=\"rowIndex\"\r\n                  let-expanded=\"expanded\"\r\n                >\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n                    <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\" [ngSwitch]=\"col.field\">\r\n                      <a *ngSwitchCase=\"'number'\" (click)=\"openSelectedWorkPackages(rowData)\">{{\r\n                        rowData[col.field]\r\n                      }}</a>\r\n                      <a *ngSwitchCase=\"'asset'\" (click)=\"openAsset(rowData.workPackage)\">{{ rowData[col.field] }}</a>\r\n\r\n                      <span *ngSwitchCase=\"'startDate'\">\r\n                        {{ rowData[col.field] | date: \"shortDate\":\"\":currentLang }}\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'dueDate'\">\r\n                        {{ rowData[col.field] | date: \"shortDate\":\"\":currentLang }}\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'endDate'\">\r\n                        {{ rowData[col.field] | date: \"shortDate\":\"\":currentLang }}\r\n                      </span>\r\n\r\n                      <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                    </td>\r\n                    <td class=\"row-expand-wrapper\" [pRowToggler]=\"rowData\">\r\n                      <i\r\n                        class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n                        [ngClass]=\"expanded ? 'fa-minus' : 'fa-plus'\"\r\n                        aria-hidden=\"true\"\r\n                        pTooltip=\"{{ 'global.showTableRowDetails' | translate }}\"\r\n                        tooltipPosition=\"top\"\r\n                      ></i>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n                  <tr class=\"row-expanded\">\r\n                    <td [attr.colspan]=\"columns.length + 2\">\r\n                      <div class=\"row\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".mroCenter\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"rowData.mroCenter\" [disabled]=\"true\" />\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".workshop\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"rowData.workshop\" [disabled]=\"true\" />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-search-equipment\r\n    *ngIf=\"showEquipmentDialog\"\r\n    [(display)]=\"showEquipmentDialog\"\r\n    [equipment-code]=\"searchObject.assetCode\"\r\n    [selectionMultiple]=\"false\"\r\n    [searchAllEquipment]=\"true\"\r\n    (onSelected)=\"onSelectEquipment($event)\"\r\n  ></aw-dialog-search-equipment>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/search/work-package-search.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/search/work-package-search.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2Uvd29yay1wYWNrYWdlL3NlYXJjaC93b3JrLXBhY2thZ2Utc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/search/work-package-search.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/search/work-package-search.component.ts ***!
  \***************************************************************************************/
/*! exports provided: WorkPackageSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPackageSearchComponent", function() { return WorkPackageSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _main_fleet_management_asset_search_asset_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../main/fleet-management/asset/search/asset-search.service */ "./src/app/main/fleet-management/asset/search/asset-search.service.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/bido-attribute-constants */ "./src/app/shared/constants/bido-attribute-constants.ts");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_page_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/page.service */ "./src/app/shared/services/page.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _form_popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../form/popups/dialog-work-order-edition/dialog-work-order-edition.service */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts");
/* harmony import */ var _work_package_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../work-package.service */ "./src/app/main/maintenance/work-package/work-package.service.ts");
/* harmony import */ var _work_package_search_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./work-package-search.service */ "./src/app/main/maintenance/work-package/search/work-package-search.service.ts");
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
























var WorkPackageSearchComponent = /** @class */ (function (_super) {
    __extends(WorkPackageSearchComponent, _super);
    /* ***************************************************************************/
    function WorkPackageSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, translateService, confirmationService, pageService, wpSearchService, wpService, assetSearchService, dialogWorkOrderEditService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.confirmationService = confirmationService;
        _this.pageService = pageService;
        _this.wpSearchService = wpSearchService;
        _this.wpService = wpService;
        _this.assetSearchService = assetSearchService;
        _this.dialogWorkOrderEditService = dialogWorkOrderEditService;
        _this.showEquipmentDialog = false;
        _this.hasPMRights = false;
        _this.globalSearch = false;
        _this.checkPMRights();
        _this.resultTable = { list: [], moreResults: false };
        _this.selectedWorkPackages = [];
        _this.propertySourceSystemId = [];
        _this.workShopList = [];
        _this.showAdvancedCriteria = false;
        _this.initResultTableCols();
        _this.resetSearchCriteria();
        _this.wpService.loadMROCenterList().subscribe(function (result) { return (_this.mroCenterList = result); });
        _this.wpService.loadGenProps(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].WORK_PACKAGE_TYPE_MAP).subscribe(function (r) { return (_this.typeList = r); });
        _this.wpService.loadOperationList().subscribe(function (result) { return (_this.operationList = result); });
        _this.wpService.loadUserList().subscribe(function (result) { return (_this.userList = result); });
        _this.wpSearchService.loadDateCriteriaList().subscribe(function (result) { return (_this.dateCriteriaList = result); });
        _this.dialogWorkOrderEditService.loadWareHouses().subscribe(function (result) {
            _this.workShopList = result.map(function (warehouse) {
                return {
                    label: warehouse.whName,
                    value: warehouse.wareHouseId
                };
            });
        });
        var bireId = {
            attributeId: _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_5__["BidoAttributeConstants"].ASSET_SYSTEM_SOURCE_ID.toString()
        };
        _this.assetSearchService.getAssetSourceSystemIdList(bireId).subscribe(function (results) {
            _this.propertySourceSystemId = results;
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetOperationalStatus'));
        });
        _this.currentLang = _this.translateService.currentLang;
        return _this;
    }
    WorkPackageSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].MAI_WORK_PACKAGE_SEARCH;
    };
    WorkPackageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
        var removedstatuses = [];
        if (!this.globalSearch) {
            removedstatuses.push(_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SCHEDULED);
            removedstatuses.push(_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SIMULATED);
        }
        this.wpService.loadStatusList(removedstatuses).subscribe(function (result) { return (_this.statusList = result); });
    };
    WorkPackageSearchComponent.prototype.checkPMRights = function () {
        var _this = this;
        this.wpSearchService
            .hasManagePMRights({ useCaseCode: _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__["BidoFunctionTypeConstants"].UC_AIRM_WP_MANAGEMENT })
            .subscribe(function (hasPMRights) {
            _this.hasPMRights = hasPMRights;
        });
    };
    WorkPackageSearchComponent.prototype.initResultTableCols = function () {
        this.resultTableCols = [
            { field: 'number', alignment: 'left', width: '7%' },
            { field: 'name', alignment: 'left', width: '18%' },
            { field: 'type', alignment: 'left', width: '5%' },
            { field: 'asset', alignment: 'left', width: '15%' },
            { field: 'status', alignment: 'left', width: '10%' },
            { field: 'assignedTo', alignment: 'left', width: '15%' },
            { field: 'startDate', alignment: 'left', width: '10%' },
            { field: 'dueDate', alignment: 'left', width: '10%' },
            { field: 'endDate', alignment: 'left', width: '10%' }
        ];
    };
    WorkPackageSearchComponent.prototype.resetSearchCriteria = function () {
        this.searchObject = {};
    };
    WorkPackageSearchComponent.prototype.search = function () {
        var _this = this;
        this.isTableLoading = true;
        _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
        this.searchObject.defaultStatusFilter = !this.globalSearch;
        this.wpSearchService.findBidmProjectsBySearchCriteria(this.searchObject).subscribe(function (result) {
            _this.isTableLoading = false;
            _this.setResultTable(result);
            _super.prototype.differ.call(_this, function () {
                _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
            });
        });
    };
    WorkPackageSearchComponent.prototype.setResultTable = function (result) {
        var _this = this;
        if (!!result) {
            this.resultTable.moreResults = result.moreResults;
            this.resultTable.list = result.list.map(function (workPackage) {
                var resultRow = {
                    id: workPackage.projectId,
                    number: workPackage.projectNumber,
                    name: workPackage.projectName,
                    type: _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_19__["SelectItemUtils"].formatSelectItem(workPackage.projectType, _this.typeList),
                    asset: workPackage.assetName,
                    status: _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_19__["SelectItemUtils"].formatSelectItem(workPackage.statusState, _this.statusList),
                    mroCenter: _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_19__["SelectItemUtils"].formatSelectItem(workPackage.bireRepairCenterCode, _this.mroCenterList),
                    workshop: _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_19__["SelectItemUtils"].formatNumberSelectItem(workPackage.bidtWarehouseId, _this.workShopList),
                    assignedTo: _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_19__["SelectItemUtils"].formatSelectItem(workPackage.receivingAssignedTo, _this.userList),
                    operation: _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_19__["SelectItemUtils"].formatSelectItem(workPackage.bidoOperationCode, _this.operationList),
                    description: workPackage.projectDescription,
                    startDate: workPackage.projectStartDate,
                    endDate: workPackage.projectEndDate,
                    dueDate: workPackage.projectDueDate,
                    receivingNumber: workPackage.receivingNumber,
                    workPackage: workPackage
                };
                return resultRow;
            });
        }
        this.selectedWorkPackages = [];
    };
    WorkPackageSearchComponent.prototype.openNewWorkPackage = function () {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].MAI_WORK_PACKAGE_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Create,
            objectId: undefined
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorkPackageSearchComponent.prototype.openSelectedWorkPackages = function (curWorkPackage) {
        var _this = this;
        var selectedWorkPackages = curWorkPackage ? [curWorkPackage] : this.selectedWorkPackages;
        selectedWorkPackages.forEach(function (wp) {
            var data = {
                id: _this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].MAI_WORK_PACKAGE_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read,
                objectId: _this.serializationService.serialize({ wpId: wp.id })
            };
            var labelKey = 'transaction.' + data.componentId;
            _this.tabService.open(_this.tabService.create(data, labelKey, true));
        });
    };
    WorkPackageSearchComponent.prototype.deleteWorkPackages = function () {
        var _this = this;
        var partialMessageKey = this.selectedWorkPackages.length > 1 ? 'confirmDeleteSelectedWorkPackages' : 'confirmDeleteSelectedWorkPackage';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                var observables = _this.selectedWorkPackages
                    .map(function (row) { return row.workPackage; })
                    .map(function (workPackage) { return _this.wpSearchService.removeBidmProject({ projectId: workPackage.projectId }); });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).subscribe(function () {
                    _this.messageService.showSuccessMessage(_this.getTranslateKey(_this.selectedWorkPackages.length > 1 ? 'successOnRemoveWorkPackages' : 'successOnRemoveWorkPackage'));
                    _this.selectedWorkPackages = [];
                    _this.search();
                });
            }
        });
    };
    WorkPackageSearchComponent.prototype.openEquipmentDialog = function () {
        this.showEquipmentDialog = true;
    };
    WorkPackageSearchComponent.prototype.onSelectEquipment = function (equipment) {
        this.searchObject.assetCode = equipment.equipmentCode;
    };
    WorkPackageSearchComponent.prototype.onStartDateCriteriaChange = function () {
        if (!this.searchObject.startDateCriteria) {
            this.searchObject.projectStartDate = undefined;
        }
    };
    WorkPackageSearchComponent.prototype.onEndDateCriteriaChange = function () {
        if (!this.searchObject.endDateCriteria) {
            this.searchObject.projectEndDate = undefined;
        }
    };
    WorkPackageSearchComponent.prototype.openAsset = function (workPackage) {
        if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(workPackage.assetCode)) {
            this.pageService.openAsset(workPackage.assetCode, workPackage.equipmentFunction);
        }
    };
    /**
     * To get the list of workshops on selection of MRO center
     */
    WorkPackageSearchComponent.prototype.getWorkShops = function () {
        var _this = this;
        if (!!this.searchObject.bireRepairCenterCode && !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isEmpty(this.searchObject.bireRepairCenterCode)) {
            this.dialogWorkOrderEditService.loadWarehouseList(this.searchObject.bireRepairCenterCode).subscribe(function (result) {
                _this.workShopList = result.map(function (workCenter) {
                    return {
                        label: workCenter.label,
                        value: Number(workCenter.value)
                    };
                });
            });
        }
        else {
            this.searchObject.bidtWarehouseId = undefined;
            this.dialogWorkOrderEditService.loadWareHouses().subscribe(function (result) {
                _this.workShopList = result.map(function (warehouse) {
                    return {
                        label: warehouse.whName,
                        value: warehouse.wareHouseId
                    };
                });
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resultsContainerAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WorkPackageSearchComponent.prototype, "resultsContainerAnchor", void 0);
    WorkPackageSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-work-package-search',
            template: __webpack_require__(/*! ./work-package-search.component.html */ "./src/app/main/maintenance/work-package/search/work-package-search.component.html"),
            styles: [__webpack_require__(/*! ./work-package-search.component.scss */ "./src/app/main/maintenance/work-package/search/work-package-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_11__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_15__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_17__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_16__["SessionService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"],
            _shared_services_page_service__WEBPACK_IMPORTED_MODULE_14__["PageService"],
            _work_package_search_service__WEBPACK_IMPORTED_MODULE_23__["WorkPackageSearchService"],
            _work_package_service__WEBPACK_IMPORTED_MODULE_22__["WorkPackageService"],
            _main_fleet_management_asset_search_asset_search_service__WEBPACK_IMPORTED_MODULE_3__["AssetSearchService"],
            _form_popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_21__["DialogWorkOrderEditService"]])
    ], WorkPackageSearchComponent);
    return WorkPackageSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_18__["PageComponent"]));



/***/ }),

/***/ "./src/app/shared/components/dialog-bido-customer/dialog-bido-customer.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-bido-customer/dialog-bido-customer.service.ts ***!
  \****************************************************************************************/
/*! exports provided: DialogBidoCustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBidoCustomerService", function() { return DialogBidoCustomerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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





var DialogBidoCustomerService = /** @class */ (function (_super) {
    __extends(DialogBidoCustomerService, _super);
    function DialogBidoCustomerService(http, appConfigService, fleetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.fleetManagementApi = fleetManagementApi;
        return _this;
    }
    DialogBidoCustomerService.prototype.findBidoCustomersBySearchCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoCustomersBySearchCriteria, criteria);
    };
    DialogBidoCustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__["FleetManagementApi"]])
    ], DialogBidoCustomerService);
    return DialogBidoCustomerService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ })

}]);
//# sourceMappingURL=default~fleet-management-fleet-management-module~maintenance-maintenance-module~maintenance-work-ord~6c43a30c.js.map