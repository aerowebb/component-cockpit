(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-shipment-folder-shipment-folder-module"],{

/***/ "./src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts ***!
  \********************************************************************************/
/*! exports provided: DeliveryFolderSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryFolderSearchService", function() { return DeliveryFolderSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_api_bidt_delivery_folder_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/api/bidt-delivery-folder.api */ "./src/app/shared/api/bidt-delivery-folder.api.ts");
/* harmony import */ var _shared_api_bidt_df_type_operation_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api/bidt-df-type-operation.api */ "./src/app/shared/api/bidt-df-type-operation.api.ts");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
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












var DeliveryFolderSearchService = /** @class */ (function (_super) {
    __extends(DeliveryFolderSearchService, _super);
    function DeliveryFolderSearchService(http, appConfigService, propertiesService, bidtSiteApi, bidtWarehouseApi, bidtDeliveryFolderApi, translateService, bidtDfTypeOperationApi, fleetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.propertiesService = propertiesService;
        _this.bidtSiteApi = bidtSiteApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.bidtDeliveryFolderApi = bidtDeliveryFolderApi;
        _this.translateService = translateService;
        _this.bidtDfTypeOperationApi = bidtDfTypeOperationApi;
        _this.fleetManagementApi = fleetManagementApi;
        return _this;
    }
    DeliveryFolderSearchService.prototype.addOrUpdateReceiptFolder = function (input) {
        return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.addOrUpdateReceiptFolder, input);
    };
    DeliveryFolderSearchService.prototype.findAllBireSite = function () {
        return _super.prototype.post.call(this, this.bidtSiteApi.findAll);
    };
    DeliveryFolderSearchService.prototype.findAllSiteList = function () {
        return _super.prototype.post.call(this, this.bidtSiteApi.findSiteByUseCaseMmReceipt);
    };
    DeliveryFolderSearchService.prototype.loadStatusList = function (folderStatusMap) {
        return this.propertiesService.getValue(folderStatusMap);
    };
    DeliveryFolderSearchService.prototype.loadCriticalityList = function () {
        return this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].LOGISTICAL_CRITICALITY_MAP);
    };
    DeliveryFolderSearchService.prototype.getWarehouseCategoryMap = function () {
        return this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].WAREHOUSE_CATEGORY_MAP);
    };
    DeliveryFolderSearchService.prototype.getWorkshopTypeMap = function () {
        return this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].WORKSHOP_TYPE_MAP);
    };
    DeliveryFolderSearchService.prototype.getWarehousesBySiteId = function (siteId) {
        if (siteId) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, siteId);
        }
        else {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findAll);
        }
    };
    DeliveryFolderSearchService.prototype.loadProviderList = function () {
        return [
            { value: '0', label: "" + this.translateService.instant('GoodsReceiptFormComponent.internal') },
            { value: '1', label: "" + this.translateService.instant('GoodsReceiptFormComponent.external') }
        ];
    };
    DeliveryFolderSearchService.prototype.loadCreationChoiceList = function () {
        return [
            { value: '0', label: "" + this.translateService.instant('GoodsReceiptFormComponent.currentPackage') },
            { value: '1', label: "" + this.translateService.instant('GoodsReceiptFormComponent.newPackage') },
            { value: '2', label: "" + this.translateService.instant('GoodsReceiptFormComponent.without') }
        ];
    };
    DeliveryFolderSearchService.prototype.loadShipmentPackageChoiceList = function () {
        return [
            { value: '0', label: "" + this.translateService.instant('GoodsReceiptFormComponent.newPackage') },
            { value: '1', label: "" + this.translateService.instant('GoodsReceiptFormComponent.without') }
        ];
    };
    DeliveryFolderSearchService.prototype.loadCreationChoiceListPackage = function () {
        return [
            { value: '0', label: "" + this.translateService.instant('GoodsReceiptFormComponent.generated') },
            { value: '1', label: "" + this.translateService.instant('GoodsReceiptFormComponent.enter') }
        ];
    };
    DeliveryFolderSearchService.prototype.loadCreationChoiceListPackageNumber = function () {
        return [
            { value: '0', label: "" + this.translateService.instant('GoodsReceiptFormComponent.generatedPackage') },
            { value: '1', label: "" + this.translateService.instant('GoodsReceiptFormComponent.enterPackage') }
        ];
    };
    DeliveryFolderSearchService.prototype.loadCreationChoiceListPackagingNumber = function () {
        return [
            { value: '0', label: "" + this.translateService.instant('GoodsReceiptFormComponent.generatedPackaging') },
            { value: '1', label: "" + this.translateService.instant('GoodsReceiptFormComponent.enterPackagingNumber') }
        ];
    };
    DeliveryFolderSearchService.prototype.loadCreationChoiceListItem = function () {
        return [
            { value: '0', label: "" + this.translateService.instant('GoodsReceiptFormComponent.currentItem') },
            { value: '1', label: "" + this.translateService.instant('GoodsReceiptFormComponent.newItem') }
        ];
    };
    DeliveryFolderSearchService.prototype.loadCreationAssetChoice = function () {
        return [
            { value: '0', label: "" + this.translateService.instant('GoodsReceiptFormComponent.unknowAsset') },
            { value: '1', label: "" + this.translateService.instant('GoodsReceiptFormComponent.knowAsset') }
        ];
    };
    DeliveryFolderSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__["AppConfigService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__["PropertiesService"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_5__["BidtSiteApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_6__["BidtWarehouseApi"],
            _shared_api_bidt_delivery_folder_api__WEBPACK_IMPORTED_MODULE_3__["BidtDeliveryFolderApi"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _shared_api_bidt_df_type_operation_api__WEBPACK_IMPORTED_MODULE_4__["BidtDfTypeOperationApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_7__["FleetManagementApi"]])
    ], DeliveryFolderSearchService);
    return DeliveryFolderSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/form/dialog-assign-package/dialog-assign-package.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/form/dialog-assign-package/dialog-assign-package.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <div class=\"form-control aw-selectbutton-wrapper\">\r\n            <p-selectButton\r\n              [(ngModel)]=\"selectedChoice\"\r\n              [options]=\"choiceList\"\r\n              (onChange)=\"resetChoice()\"\r\n              [disabled]=\"selectedPackage\"\r\n            ></p-selectButton>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group required\" *ngIf=\"selectedChoice === component.ENTER\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".packageNumber\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"externalPackageCode\" [disabled]=\"selectedPackage\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".packageType\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              [showClear]=\"true\"\r\n              placeholder=\"&nbsp;\"\r\n              [(ngModel)]=\"selectedPackageType\"\r\n              [options]=\"packagesTypesList\"\r\n              (onChange)=\"packageTypeChange()\"\r\n              appendTo=\"body\"\r\n              [disabled]=\"selectedPackage\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"form-group\"\r\n          [ngClass]=\"{\r\n            required: selectedPackage && !isEditContext\r\n          }\"\r\n        >\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".weight\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input type=\"number\" class=\"aw-input\" [(ngModel)]=\"packageInput.weight\" />\r\n          </div>\r\n        </div>\r\n        <div\r\n          class=\"form-group\"\r\n          [ngClass]=\"{\r\n            required: selectedPackage && !isEditContext\r\n          }\"\r\n        >\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".unit\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              [showClear]=\"true\"\r\n              placeholder=\"&nbsp;\"\r\n              [(ngModel)]=\"packageInput.weightUnit\"\r\n              [options]=\"unitWeightList\"\r\n              appendTo=\"body\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"form-group\"\r\n          [ngClass]=\"{\r\n            required: selectedPackage && !isEditContext\r\n          }\"\r\n        >\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".length\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input type=\"number\" class=\"aw-input\" [disabled]=\"disableLength\" [(ngModel)]=\"packageInput.length\" />\r\n          </div>\r\n        </div>\r\n        <div\r\n          class=\"form-group\"\r\n          [ngClass]=\"{\r\n            required: selectedPackage && !isEditContext\r\n          }\"\r\n        >\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".unit\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              [showClear]=\"true\"\r\n              placeholder=\"&nbsp;\"\r\n              [(ngModel)]=\"packageInput.lengthUnit\"\r\n              [options]=\"unitLengthList\"\r\n              [disabled]=\"disableLength\"\r\n              appendTo=\"body\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"form-group\"\r\n          [ngClass]=\"{\r\n            required: selectedPackage && !isEditContext\r\n          }\"\r\n        >\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".width\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input type=\"number\" class=\"aw-input\" [disabled]=\"disableWidth\" [(ngModel)]=\"packageInput.width\" />\r\n          </div>\r\n        </div>\r\n        <div\r\n          class=\"form-group\"\r\n          [ngClass]=\"{\r\n            required: selectedPackage && !isEditContext\r\n          }\"\r\n        >\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".unit\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              [showClear]=\"true\"\r\n              placeholder=\"&nbsp;\"\r\n              [(ngModel)]=\"packageInput.widthUnit\"\r\n              [options]=\"unitLengthList\"\r\n              [disabled]=\"disableWidth\"\r\n              appendTo=\"body\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"form-group\"\r\n          [ngClass]=\"{\r\n            required: selectedPackage && !isEditContext\r\n          }\"\r\n        >\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".height\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input type=\"number\" class=\"aw-input\" [disabled]=\"disableHeight\" [(ngModel)]=\"packageInput.height\" />\r\n          </div>\r\n        </div>\r\n        <div\r\n          class=\"form-group\"\r\n          [ngClass]=\"{\r\n            required: selectedPackage && !isEditContext\r\n          }\"\r\n        >\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".unit\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              [showClear]=\"true\"\r\n              placeholder=\"&nbsp;\"\r\n              [(ngModel)]=\"packageInput.heightUnit\"\r\n              [options]=\"unitLengthList\"\r\n              [disabled]=\"disableHeight\"\r\n              appendTo=\"body\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section-content\" *ngIf=\"packageInput.lengthUnit && calculateVolume() && showVolume()\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <h3>\r\n              <span class=\"bold italic\">\r\n                {{ getComponentName() + \".volume\" | translate }}: {{ calculateVolume() }} {{ getVolumnUnit() }}\r\n                <sup>{{ component.ROOTS_VALUE }}</sup>\r\n              </span>\r\n            </h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"onCancelPopup()\">{{ \"global.cancel\" | translate }}</button>\r\n\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\" [disabled]=\"enableAddPackageButton()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/form/dialog-assign-package/dialog-assign-package.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/form/dialog-assign-package/dialog-assign-package.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .custom-icon {\n  font-size: 10em;\n  cursor: pointer; }\n\n:host .custom-align {\n  text-align: center; }\n\n:host .custom-margin {\n  margin-left: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc2hpcG1lbnQtZm9sZGVyL2Zvcm0vZGlhbG9nLWFzc2lnbi1wYWNrYWdlL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcc2hpcG1lbnQtZm9sZGVyXFxmb3JtXFxkaWFsb2ctYXNzaWduLXBhY2thZ2VcXGRpYWxvZy1hc3NpZ24tcGFja2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBSG5CO0VBT0ksa0JBQWtCLEVBQUE7O0FBUHRCO0VBVUksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zaGlwbWVudC1mb2xkZXIvZm9ybS9kaWFsb2ctYXNzaWduLXBhY2thZ2UvZGlhbG9nLWFzc2lnbi1wYWNrYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jdXN0b20taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEwZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmN1c3RvbS1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/form/dialog-assign-package/dialog-assign-package.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/form/dialog-assign-package/dialog-assign-package.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: DialogAssignPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAssignPackageComponent", function() { return DialogAssignPackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../goods-receipt/delivery-folder-search.service */ "./src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DialogAssignPackageComponent = /** @class */ (function (_super) {
    __extends(DialogAssignPackageComponent, _super);
    function DialogAssignPackageComponent(sessionService, propertiesService, logisticsService, deliveryFolderSearchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Read, 'DialogAssignPackageComponent') || this;
        _this.sessionService = sessionService;
        _this.propertiesService = propertiesService;
        _this.logisticsService = logisticsService;
        _this.deliveryFolderSearchService = deliveryFolderSearchService;
        _this.component = DialogAssignPackageComponent_1;
        _this.onCreateOrUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogAssignPackageComponent_1 = DialogAssignPackageComponent;
    DialogAssignPackageComponent.prototype.validate = function () {
        var packageDTO = {
            externalPackageCode: this.selectedPackage ? this.selectedPackage.externalPackageCode : this.externalPackageCode,
            packageType: this.selectedPackage ? this.selectedPackage.packageType : this.selectedPackageType,
            bidtDeliveryFolderId: this.bidtDeliveryFolder.id,
            height: this.packageInput.height,
            heightUnit: this.packageInput.heightUnit,
            width: this.packageInput.width,
            widthUnit: this.packageInput.widthUnit,
            length: this.packageInput.length,
            lengthUnit: this.packageInput.lengthUnit,
            weight: this.packageInput.weight,
            weightUnit: this.packageInput.weightUnit,
            volume: this.showVolume() ? this.calculateVolume().toString() : undefined
        };
        if (this.selectedPackage) {
            packageDTO = __assign({}, this.selectedPackage, packageDTO);
        }
        var input = {
            bidtPackageDTO: packageDTO,
            isGenerated: this.isGenerated,
            bidtDeliveryFolderDTO: this.bidtDeliveryFolder,
            createWithPackage: this.createWithPackage
        };
        this.onCreateOrUpdate.emit(input);
        this.closeDialog();
    };
    DialogAssignPackageComponent.prototype.ngOnInit = function () {
        this.packageInput = {};
        this.disableLength = false;
        this.disableWidth = false;
        this.disableHeight = false;
        this.loadDropDowns();
        if (this.selectedPackage) {
            this.packageInput = __assign({}, this.selectedPackage);
            this.selectedPackageType = this.selectedPackage.packageType || '';
        }
    };
    DialogAssignPackageComponent.prototype.loadDropDowns = function () {
        var _this = this;
        var packageTypes = this.propertiesService.getFullPackageTypeMap();
        var lengthUnit = this.logisticsService.fetchLengthUnitMap();
        var weightUnit = this.logisticsService.fetchWeightUnitMap();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({ packageTypes: packageTypes, lengthUnit: lengthUnit, weightUnit: weightUnit }).subscribe({
            next: function (results) {
                _this.getPackageTypeList(results.packageTypes);
                _this.fullPackagesTypesList = results.packageTypes;
                _this.unitLengthList = results.lengthUnit;
                _this.unitWeightList = results.weightUnit;
                _this.choiceList = _this.deliveryFolderSearchService.loadCreationChoiceListPackage();
                _this.selectedChoice = _this.choiceList && _this.choiceList.length ? _this.choiceList[0].value : '';
                _this.choiceListPackage = _this.deliveryFolderSearchService.loadCreationChoiceList();
                _this.selectedChoicePackage =
                    _this.choiceListPackage && _this.choiceListPackage.length ? _this.choiceListPackage[1].value : '';
            }
        });
    };
    DialogAssignPackageComponent.prototype.getPackageTypeList = function (results) {
        var _this = this;
        this.packagesTypesList = [];
        if (results.length) {
            results.forEach(function (element) {
                _this.packagesTypesList.push({ label: element.label, value: element.value.packageType });
            });
        }
    };
    DialogAssignPackageComponent.prototype.packageTypeChange = function () {
        var _this = this;
        var selectedType = this.fullPackagesTypesList.find(function (item) { return _this.selectedPackageType === item.value.packageType; });
        if (selectedType && selectedType.value) {
            this.packageInput = {
                length: selectedType.value.length,
                lengthUnit: selectedType.value.unit,
                width: selectedType.value.width,
                widthUnit: selectedType.value.unit,
                height: selectedType.value.height,
                heightUnit: selectedType.value.unit
            };
            this.disableLength = selectedType.value.length ? true : false;
            this.disableWidth = selectedType.value.width ? true : false;
            this.disableHeight = selectedType.value.height ? true : false;
        }
    };
    DialogAssignPackageComponent.prototype.resetChoice = function () {
        this.changeMode();
    };
    DialogAssignPackageComponent.prototype.calculateVolume = function () {
        return this.packageInput.width && this.packageInput.length && this.packageInput.height
            ? this.packageInput.height * this.packageInput.length * this.packageInput.width
            : 0;
    };
    DialogAssignPackageComponent.prototype.showVolume = function () {
        return (this.packageInput.lengthUnit === this.packageInput.widthUnit &&
            this.packageInput.lengthUnit === this.packageInput.heightUnit);
    };
    DialogAssignPackageComponent.prototype.getVolumnUnit = function () {
        var _this = this;
        var selectedUnit = this.unitLengthList.find(function (item) { return item.value === _this.packageInput.lengthUnit; });
        return selectedUnit ? selectedUnit.label : '';
    };
    DialogAssignPackageComponent.prototype.enableAddPackageButton = function () {
        if (!this.isEditContext && this.selectedPackage) {
            return this.packageInput.width &&
                this.packageInput.length &&
                this.packageInput.height &&
                this.packageInput.weight &&
                this.packageInput.lengthUnit &&
                this.packageInput.widthUnit &&
                this.packageInput.heightUnit &&
                this.packageInput.weightUnit &&
                this.selectedPackageType &&
                (this.selectedChoice === this.component.GENERATE || this.externalPackageCode)
                ? false
                : true;
        }
        else {
            return this.selectedPackageType && (this.selectedChoice === this.component.GENERATE || this.externalPackageCode)
                ? false
                : true;
        }
    };
    DialogAssignPackageComponent.prototype.changeMode = function () {
        switch (this.selectedChoice) {
            case this.component.GENERATE:
                this.isGenerated = true;
                break;
            case this.component.ENTER:
                this.isGenerated = false;
                break;
            default:
                break;
        }
    };
    DialogAssignPackageComponent.prototype.onCancelPopup = function () {
        this.onCancel.emit();
        this.closeDialog();
    };
    var DialogAssignPackageComponent_1;
    DialogAssignPackageComponent.GENERATE = '0';
    DialogAssignPackageComponent.ENTER = '1';
    DialogAssignPackageComponent.ROOTS_VALUE = '3';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogAssignPackageComponent.prototype, "bidtDeliveryFolder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogAssignPackageComponent.prototype, "selectedPackage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogAssignPackageComponent.prototype, "isEditContext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogAssignPackageComponent.prototype, "onCreateOrUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogAssignPackageComponent.prototype, "onCancel", void 0);
    DialogAssignPackageComponent = DialogAssignPackageComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-assign-package',
            template: __webpack_require__(/*! ./dialog-assign-package.component.html */ "./src/app/main/logistics/shipment-folder/form/dialog-assign-package/dialog-assign-package.component.html"),
            styles: [__webpack_require__(/*! ./dialog-assign-package.component.scss */ "./src/app/main/logistics/shipment-folder/form/dialog-assign-package/dialog-assign-package.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_3__["PropertiesService"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_7__["LogisticsService"],
            _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_6__["DeliveryFolderSearchService"]])
    ], DialogAssignPackageComponent);
    return DialogAssignPackageComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/form/dialog-validate-package/dialog-validate-package.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/form/dialog-validate-package/dialog-validate-package.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".packageNumber\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" name=\"docName\" class=\"aw-input\" disabled [(ngModel)]=\"bidtPackageDTO.packageCode\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".pn\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <b>{{ partNumer }}</b>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".designation\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" name=\"docName\" class=\"aw-input\" disabled [(ngModel)]=\"designation\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".label\" | translate }}</label>\r\n        <div>\r\n          <ul class=\"form-label\">\r\n            <li>{{ getComponentName() + \".subLabel1\" | translate }}</li>\r\n            <li>{{ getComponentName() + \".subLabel2\" | translate }}</li>\r\n            <li>{{ getComponentName() + \".subLabel3\" | translate }}</li>\r\n            <li>{{ getComponentName() + \".subLabel4\" | translate }}</li>\r\n            <li>{{ getComponentName() + \".subLabel5\" | translate }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" class=\"aw-btn\" (click)=\"createLitigation()\">\r\n      {{ getComponentName() + \".createLitigation\" | translate }}\r\n    </button>\r\n    <button type=\"button\" class=\"aw-btn\" (click)=\"validate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/form/dialog-validate-package/dialog-validate-package.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/form/dialog-validate-package/dialog-validate-package.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: DialogValidatePackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogValidatePackageComponent", function() { return DialogValidatePackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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




var DialogValidatePackageComponent = /** @class */ (function (_super) {
    __extends(DialogValidatePackageComponent, _super);
    function DialogValidatePackageComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'DialogValidatePackageComponent') || this;
        _this.sessionService = sessionService;
        _this.onValidatePackage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogValidatePackageComponent.prototype.ngOnInit = function () {
        if (!!this.bidtPackageDTO) {
            if (!!this.bidtPackageDTO.bidtDfItems && this.bidtPackageDTO.bidtDfItems.length > 0) {
                if (!!this.bidtPackageDTO.bidtDfItems[0].birePn) {
                    this.partNumer = this.bidtPackageDTO.bidtDfItems[0].birePn.pnCode;
                    this.designation = this.bidtPackageDTO.bidtDfItems[0].birePn.articleDesignation;
                }
            }
        }
        else {
            this.bidtPackageDTO = {};
        }
    };
    DialogValidatePackageComponent.prototype.validate = function () {
        this.display = false;
        this.onValidatePackage.emit();
    };
    DialogValidatePackageComponent.prototype.createLitigation = function () {
        this.display = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('packageData'),
        __metadata("design:type", Object)
    ], DialogValidatePackageComponent.prototype, "bidtPackageDTO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogValidatePackageComponent.prototype, "onValidatePackage", void 0);
    DialogValidatePackageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-validate-package',
            template: __webpack_require__(/*! ./dialog-validate-package.component.html */ "./src/app/main/logistics/shipment-folder/form/dialog-validate-package/dialog-validate-package.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DialogValidatePackageComponent);
    return DialogValidatePackageComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/form/material-shipment/material-shipment-form.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/form/material-shipment/material-shipment-form.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">{{ materialInfo.obj.dfCode }}</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" class=\"aw-btn\" (click)=\"refresh()\">\r\n      {{ \"global.refresh\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12 custom-breadcrumb-padding\">\r\n          <div class=\"grid-cell grid-cell--container bread-crumb-custom-cell\">\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"row\">\r\n                <div class=\"grid-cell--12\">\r\n                  <div class=\"breadcrumbs flex-row\">\r\n                    <ul id=\"breadcrumbs-status\">\r\n                      <li [class.current]=\"true\">\r\n                        <div class=\"statusLabel\">\r\n                          <div class=\"title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n                          <div class=\"subtitle\">\r\n                            {{ subtitle }} - <i>{{ whName }}</i>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ getComponentName() + \".criteria\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".shipmentNo\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"materialInfo.obj.dfCode\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".type\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          class=\"aw-input\"\r\n                          type=\"text\"\r\n                          disabled\r\n                          [(ngModel)]=\"materialInfo.bidtDfType.dftDesignation\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".plannedDate\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-calendar\r\n                          showButtonBar=\"true\"\r\n                          [monthNavigator]=\"true\"\r\n                          [yearNavigator]=\"true\"\r\n                          [yearRange]=\"sessionService.calendarYearRange\"\r\n                          class=\"aw-calendar\"\r\n                          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                          [locale]=\"sessionService.calendarFormat\"\r\n                          appendTo=\"body\"\r\n                          [(ngModel)]=\"materialInfo.obj.plannedDate\"\r\n                          disabled\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- RECEPTION -->\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">{{ getComponentName() + \".location\" | translate }}</h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"senderSiteName\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".workShop\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          class=\"aw-input\"\r\n                          type=\"text\"\r\n                          disabled\r\n                          [(ngModel)]=\"materialInfo.bidtWarehouseSender.whName\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".partner\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          class=\"aw-input\"\r\n                          type=\"text\"\r\n                          disabled\r\n                          [(ngModel)]=\"materialInfo.bidoCustomerReceiver.customerName\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          class=\"aw-input\"\r\n                          type=\"text\"\r\n                          disabled\r\n                          [(ngModel)]=\"materialInfo.bidtWarehouseSender.whName\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".materials\" | translate }} ({{\r\n                    materialShipmentTableDataSource.dataCount\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <a-table [dataSource]=\"materialShipmentTableDataSource\">\r\n                <ng-template tableActionsDef>\r\n                  <div class=\"aw-table-icon-actions\">\r\n                    <i\r\n                      class=\"fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay\"\r\n                      aria-hidden=\"true\"\r\n                      tooltipPosition=\"top\"\r\n                    ></i>\r\n                  </div>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/form/material-shipment/material-shipment-form.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/form/material-shipment/material-shipment-form.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #breadcrumbs-status {\n  overflow: hidden;\n  display: flex; }\n\n:host ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n:host .breadcrumbs {\n  display: flex;\n  flex-grow: 1; }\n\n:host .bread-crumb-custom-cell {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n  padding-bottom: 0 !important; }\n\n:host #breadcrumbs-status li {\n  float: left;\n  margin: 0 1em 0 1em; }\n\n:host #breadcrumbs-status .current {\n  float: left;\n  margin: 0 1em 0 1em; }\n\n:host #breadcrumbs-status .statusLabel {\n  background: #ffffff;\n  padding: 0.3em 1em;\n  float: left;\n  text-decoration: none;\n  color: #000;\n  position: relative;\n  white-space: nowrap;\n  min-height: 3em; }\n\n:host #breadcrumbs-status .current .statusLabel {\n  background: #01579b; }\n\n:host #breadcrumbs-status .statusLabel::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-width: 1.5em 0 1.5em 1em;\n  border-style: solid;\n  border-color: #ffffff #ffffff #ffffff transparent;\n  left: -1em; }\n\n:host #breadcrumbs-status .current .statusLabel::before {\n  border-color: #01579b #01579b #01579b transparent; }\n\n:host #breadcrumbs-status .statusLabel::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-top: 1.5em solid transparent;\n  border-bottom: 1.5em solid transparent;\n  border-left: 1em solid #ffffff;\n  right: -1em; }\n\n:host #breadcrumbs-status .current .statusLabel::after {\n  border-left-color: #01579b; }\n\n:host #breadcrumbs-status .current .statusLabel {\n  color: white;\n  font-weight: bold; }\n\n:host #breadcrumbs-status .current::after,\n:host #breadcrumbs-status .current::before {\n  content: normal; }\n\n:host .illustration {\n  text-align: center; }\n\n:host .img-class {\n  max-height: 10rem;\n  cursor: pointer; }\n\n:host .margin-class {\n  margin-top: 1em; }\n\n:host .breadcrumb-cursor {\n  cursor: pointer; }\n\n:host .disable-pointer {\n  cursor: none;\n  pointer-events: none; }\n\n:host .custom-breadcrumb-padding {\n  padding: 0 !important; }\n\n:host .sibling-list {\n  float: right; }\n\n:host .subtitle {\n  word-wrap: break-word;\n  text-overflow: ellipsis; }\n\n:host .aw-table-icon-actions {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-left: calc(8px * 2); }\n\n:host .aw-table-icon-actions .aw-icon {\n    font-size: 1.125rem;\n    line-height: 2rem;\n    width: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc2hpcG1lbnQtZm9sZGVyL2Zvcm0vbWF0ZXJpYWwtc2hpcG1lbnQvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxzaGlwbWVudC1mb2xkZXJcXGZvcm1cXG1hdGVyaWFsLXNoaXBtZW50XFxtYXRlcmlhbC1zaGlwbWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zaGlwbWVudC1mb2xkZXIvZm9ybS9tYXRlcmlhbC1zaGlwbWVudC9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiLCJzcmMvYXBwL21haW4vbG9naXN0aWNzL3NoaXBtZW50LWZvbGRlci9mb3JtL21hdGVyaWFsLXNoaXBtZW50L0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVJLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBSGpCO0VBT0ksU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFUcEI7RUFhSSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQWRoQjtFQWtCSSx3Q0FBd0M7RUFDeEMsb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQiw0QkFBNEIsRUFBQTs7QUFyQmhDO0VBeUJJLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUExQnZCO0VBOEJJLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUEvQnZCO0VBbUNJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixXQ3hDcUI7RUR5Q3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQTFDbkI7RUE4Q0ksbUJDN0NrQixFQUFBOztBRER0QjtFQWtESSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixpREFBaUQ7RUFDakQsVUFBVSxFQUFBOztBQXpEZDtFQTZESSxpREFBbUUsRUFBQTs7QUE3RHZFO0VBaUVJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDhCQUE4QjtFQUM5QixXQUFXLEVBQUE7O0FBeEVmO0VBNEVJLDBCQzNFa0IsRUFBQTs7QUREdEI7RUFnRkksWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQWpGckI7O0VBc0ZJLGVBQWUsRUFBQTs7QUF0Rm5CO0VBMEZJLGtCQUFrQixFQUFBOztBQTFGdEI7RUE4RkksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUEvRm5CO0VBbUdJLGVBQWUsRUFBQTs7QUFuR25CO0VBdUdJLGVBQWUsRUFBQTs7QUF2R25CO0VBMkdJLFlBQVk7RUFDWixvQkFBb0IsRUFBQTs7QUE1R3hCO0VBZ0hJLHFCQUFxQixFQUFBOztBQWhIekI7RUFvSEksWUFBWSxFQUFBOztBQXBIaEI7RUF1SEkscUJBQXFCO0VBQ3JCLHVCQUF1QixFQUFBOztBQXhIM0I7RUVvQkUsYUFBYTtFQUNiLG1CQUFtQjtFRndHakIseUJBQXlCO0VBQ3pCLDBCQUF1QyxFQUFBOztBQTlIM0M7SUFpSU0sbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zaGlwbWVudC1mb2xkZXIvZm9ybS9tYXRlcmlhbC1zaGlwbWVudC9tYXRlcmlhbC1zaGlwbWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmJyZWFkY3J1bWJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG5cclxuICAuYnJlYWQtY3J1bWItY3VzdG9tLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIDFlbSAwIDFlbTtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgMWVtIDAgMWVtO1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyAuc3RhdHVzTGFiZWwge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDAuM2VtIDFlbTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWluLWhlaWdodDogM2VtO1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyAuY3VycmVudCAuc3RhdHVzTGFiZWwge1xyXG4gICAgYmFja2dyb3VuZDogJGFjY2VudC1jb2xvcjtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLnN0YXR1c0xhYmVsOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNWVtO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxLjVlbSAwIDEuNWVtIDFlbTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmYgI2ZmZmZmZiAjZmZmZmZmIHRyYW5zcGFyZW50O1xyXG4gICAgbGVmdDogLTFlbTtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQgLnN0YXR1c0xhYmVsOjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yICRhY2NlbnQtY29sb3IgJGFjY2VudC1jb2xvciB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLnN0YXR1c0xhYmVsOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMS41ZW07XHJcbiAgICBib3JkZXItdG9wOiAxLjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDEuNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFlbSBzb2xpZCAjZmZmZmZmO1xyXG4gICAgcmlnaHQ6IC0xZW07XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5jdXJyZW50IC5zdGF0dXNMYWJlbDo6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5jdXJyZW50IC5zdGF0dXNMYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQ6OmFmdGVyLFxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAuaWxsdXN0cmF0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5pbWctY2xhc3Mge1xyXG4gICAgbWF4LWhlaWdodDogMTByZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWFyZ2luLWNsYXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICB9XHJcblxyXG4gIC5icmVhZGNydW1iLWN1cnNvciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZGlzYWJsZS1wb2ludGVyIHtcclxuICAgIGN1cnNvcjogbm9uZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1icmVhZGNydW1iLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNpYmxpbmctbGlzdCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbiAgLmF3LXRhYmxlLWljb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFV0aWxzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBidXR0b24tY29sb3IoJGJhY2tncm91bmQtY29sb3IsICRjb2xvciwgJGJvcmRlci1jb2xvcjogbnVsbCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIsXHJcbiAgJjpub3QoOmRpc2FibGVkKS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpZigkYm9yZGVyLWNvbG9yID09IG51bGwsICRjb2xvciwgJGJvcmRlci1jb2xvcik7XHJcbiAgICBjb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleC1jb2x1bW4oKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1yb3coKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQoKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuXHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWRpc2FibGVkKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWRpc2FibGVkO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1mb2N1cygpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxufVxyXG5cclxuQG1peGluIGlucHV0LWhvdmVyKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VhcmNoLWNyaXRlcmlhLWNvbnRhaW5lciB7XHJcbiAgLmFkdmFuY2VkLWNyaXRlcmlhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtY3JpdGVyaWEtZm9vdGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAuYXctYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlY3Rpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiA0KTtcclxuXHJcbiAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgJi5yZXF1aXJlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkKCk7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hbGVydCB7XHJcbiAgICAgICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICYgPiBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LW92ZXJmbG93LWhpZGRlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdyaWQgZm9ybSBjb250cm9scyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJNZWRpdW1cIjtcclxuXHJcbiAgJiA+IGlucHV0ICsgcC1tZXNzYWdlID4gLnVpLW1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpmb2N1cyxcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDI1NSwgMjU1LCAyNTUpIDYwJSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIC5hdy1pY29uIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4sXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0biB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcblxyXG4gICAgICAmLmF3LWNhbGVuZGFyIC51aS1pbnB1dHRleHQsXHJcbiAgICAgICYuYXctZHJvcGRvd24gLnVpLWRyb3Bkb3duLFxyXG4gICAgICAmLmF3LWlucHV0LFxyXG4gICAgICAmLmF3LXRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1jYWxlbmRhciB7XHJcbiAgICAgIC8vIEZJWE1FOiBmaXggYW4gVUkgaXNzdWUgb24gUHJpbWVORyBjYWxlbmRhciBjb21wb25lbnQ7IHRvIHJlbW92ZSB3aGVuIGlzc3VlIHdpbGwgYmUgZml4ZWQgdXBzdHJlYW1cclxuICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgIC5hdy1pY29uOm5vdCgucmVhZC1vbmx5LWxpbmspIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgLy8gbm9uZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbC1kYXRhIHtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tbmltcCxcclxuICAgIC5idG4tZXh0ZXJuYWwtbGluay13cmFwcGVyLFxyXG4gICAgLmJ0bi1jbGVhci13cmFwcGVyLFxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyLFxyXG4gICAgLmJ0bi1zZWFyY2gtd3JhcHBlciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlciB7XHJcbiAgICAgIC5hdy1maWxldXBsb2FkIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51aS1idXR0b24ge1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlOTM0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tY2xlYXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tc2VhcmNoIHtcclxuICAgICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1yYWRpb2J1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICYgPiAuYXctcmFkaW9idXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMiAqICN7JG1hcmdpbi12YWx1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLWdlbmVyaWMge1xyXG4gIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG5cclxuICAmID4gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IC5hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcblxyXG4gICAgJi5hbGVydC0tbm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNhbGVuZGFyIHtcclxuICAmLnVpLWlucHV0d3JhcHBlci1mb2N1cyB7XHJcbiAgICAudWktY2FsZW5kYXIgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1peGluIGdyaWQtY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRjaGVja2JveC1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRjaGVja2JveC1oZWlnaHQ7XHJcblxyXG4gIC51aS1jaGtib3gge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLWNoa2JveC1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1kcm9wZG93biB7XHJcbiAgLnVpLWRyb3Bkb3duIHtcclxuICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWZvY3VzIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uLFxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbiB7XHJcbiAgICAgIHJpZ2h0OiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgQGluY2x1ZGUgdGV4dC1vdmVyZmxvdy1oaWRkZW4oKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyICogMS43NXJlbSk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZpeGVkLXdpZHRoIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZmlsZXVwbG9hZCB7XHJcbiAgQGV4dGVuZCAuYXctYnRuO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAudWktZmlsZXVwbG9hZC1jaG9vc2Uge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAwICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1idXR0b24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtaW5wdXQoKSB7XHJcbiAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRleHRhcmVhIHtcclxuICBAaW5jbHVkZSBncmlkLWlucHV0KCk7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi1oZWlnaHQ6ICRmb3JtLWNvbnRyb2wtaGVpZ2h0O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXJhZGlvYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG4gIHdpZHRoOiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG5cclxuICAudWktcmFkaW9idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLXJhZGlvYnV0dG9uLWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblxyXG4gICAgICAgIC51aS1yYWRpb2J1dHRvbi1pY29uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gY2FsZW5kYXItcGFuZWwge1xyXG4gIC51aS1kYXRlcGlja2VyOm5vdCgudWktZGF0ZXBpY2tlci1pbmxpbmUpIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRyb3Bkb3duLXBhbmVsIHtcclxuICAudWktZHJvcGRvd24tcGFuZWwge1xyXG4gICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICAgIC51aS1kcm9wZG93bi1pdGVtcy13cmFwcGVyIC51aS1kcm9wZG93bi1saXN0IHtcclxuICAgICAgLnVpLWRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnVpLXN0YXRlLWhpZ2hsaWdodCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/form/material-shipment/material-shipment-form.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/form/material-shipment/material-shipment-form.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: MaterialShipmentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialShipmentFormComponent", function() { return MaterialShipmentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../goods-receipt/delivery-folder-search.service */ "./src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
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
















var MaterialShipmentFormComponent = /** @class */ (function (_super) {
    __extends(MaterialShipmentFormComponent, _super);
    function MaterialShipmentFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, translateService, logisticsService, deliveryFolderSearchService, confirmationService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.logisticsService = logisticsService;
        _this.deliveryFolderSearchService = deliveryFolderSearchService;
        _this.confirmationService = confirmationService;
        _this.awPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"];
        _this.component = MaterialShipmentFormComponent_1;
        _this.loadTableCols();
        _this.init();
        return _this;
    }
    MaterialShipmentFormComponent_1 = MaterialShipmentFormComponent;
    MaterialShipmentFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        // Fetching component data
        if (!!this.componentData.objectId) {
            this.loadMaterialShipment(this.serializationService.deserialize(this.componentData.objectId));
        }
    };
    MaterialShipmentFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].LOG_GOODS_MATERIAL_SHIPMENT_FORM;
    };
    MaterialShipmentFormComponent.prototype.init = function () {
        this.materialInfo = {
            bidtDfType: {},
            bidtWarehouseSender: {},
            bidoCustomerReceiver: {},
            obj: {}
        };
        this.subtitle = 'BA 118 - MDM';
        this.whName = 'Magasin General';
        this.senderSiteName = '';
        this.receiverSiteName = '';
    };
    /*************************************************
     * Function to fetch page data
     *************************************************/
    MaterialShipmentFormComponent.prototype.loadMaterialShipment = function (dtoId) {
        var _this = this;
        this.logisticsService.findShipmentMaterial(dtoId).subscribe(function (results) {
            if (!!results) {
                var materialInfo = results;
                _this.subtitle = !!materialInfo.bidtSiteSender
                    ? materialInfo.bidtSiteSender.siteCode + " - " + materialInfo.bidtSiteSender.siteName
                    : '';
                _this.senderSiteName = _this.subtitle;
                _this.receiverSiteName = !!materialInfo.bidtSiteReceiver
                    ? materialInfo.bidtSiteReceiver.siteCode + " - " + materialInfo.bidtSiteReceiver.siteName
                    : '';
                _this.whName =
                    !!materialInfo.bidtWarehouseSender && !!materialInfo.bidtWarehouseSender.whName
                        ? materialInfo.bidtWarehouseSender.whName
                        : '';
                _this.materialInfo = {
                    bidtDfType: !!materialInfo.bidtDfType ? materialInfo.bidtDfType : {},
                    bidtWarehouseSender: !!materialInfo.bidtWarehouseSender
                        ? materialInfo.bidtWarehouseSender
                        : {},
                    bidoCustomerReceiver: !!materialInfo.bidoCustomerReceiver
                        ? materialInfo.bidoCustomerReceiver
                        : {},
                    obj: materialInfo
                };
                if (!!materialInfo.dfCode) {
                    _this.displayComponentContext(materialInfo.dfCode, _this.isReadOpenMode);
                }
            }
        });
    };
    /************************************
     * Initialize Shiipment Table Columns
     ************************************/
    MaterialShipmentFormComponent.prototype.loadTableCols = function () {
        this.materialShipmentTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                { field: 'article', translateKey: this.getTranslateKey('article') },
                { field: 'snLot', translateKey: this.getTranslateKey('snLot') },
                { field: 'quantity', translateKey: this.getTranslateKey('quantity') },
                { field: 'mvtStatus', translateKey: this.getTranslateKey('mvtStatus') },
                { field: 'materialLocation', translateKey: this.getTranslateKey('materialLocation') },
                { field: 'container', translateKey: this.getTranslateKey('container') },
                { field: 'originalDocument', translateKey: this.getTranslateKey('originalDocument') },
                { field: 'finalReceipt', translateKey: this.getTranslateKey('finalReceipt') },
                { field: 'expectedDate', translateKey: this.getTranslateKey('expectedDate') }
            ],
            data: []
        });
    };
    MaterialShipmentFormComponent.prototype.refresh = function () {
        if (!!this.componentData.objectId) {
            this.loadMaterialShipment(this.serializationService.deserialize(this.componentData.objectId));
        }
    };
    var MaterialShipmentFormComponent_1;
    MaterialShipmentFormComponent.ALL = 'ALL';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resultsContainerAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MaterialShipmentFormComponent.prototype, "resultsContainerAnchor", void 0);
    MaterialShipmentFormComponent = MaterialShipmentFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-material-shipment-form',
            template: __webpack_require__(/*! ./material-shipment-form.component.html */ "./src/app/main/logistics/shipment-folder/form/material-shipment/material-shipment-form.component.html"),
            styles: [__webpack_require__(/*! ./material-shipment-form.component.scss */ "./src/app/main/logistics/shipment-folder/form/material-shipment/material-shipment-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_15__["LogisticsService"],
            _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_14__["DeliveryFolderSearchService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]])
    ], MaterialShipmentFormComponent);
    return MaterialShipmentFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_13__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/form/shipment-folder-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/form/shipment-folder-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div *ngIf=\"!isCreateOpenMode && deliveryFolder.dfCode\" class=\"page-subtitle\">\r\n          - {{ deliveryFolder.dfCode }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"object-status\" *ngIf=\"deliveryFolder.dfStatus\" (click)=\"showStatus()\">\r\n      {{ deliveryFolder.dfStatus | formatSelectOption: deliveryFolderStatuses }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"refresh()\">\r\n        {{ \"global.refresh\" | translate }}\r\n      </button>\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <mat-tab-group animationDuration=\"0ms\" dynamicHeight>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ \"home\" | translate }}\r\n        </ng-template>\r\n\r\n        <div class=\"grid-row\">\r\n          <div class=\"grid-cell--6\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ \"page.mainData\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                <div class=\"column\">\r\n                  <div class=\"section\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".folderNum\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <div class=\"form-control-generic\">\r\n                            {{ deliveryFolder.dfCode }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".type\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <div class=\"form-control-generic\">\r\n                            {{ deliveryFolder.bidtDfType?.dftDesignation | extractTranslation }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".control\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <div\r\n                            class=\"alert alert--nok\"\r\n                            *ngIf=\"\r\n                              deliveryFolder.criticality === awPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE\r\n                            \"\r\n                          >\r\n                            {{ componentData.componentId + \".immediate\" | translate }}\r\n                          </div>\r\n\r\n                          <div\r\n                            class=\"alert alert--warning\"\r\n                            *ngIf=\"deliveryFolder.criticality === awPropertiesConstants.LOGISTICAL_CRITICALITY_URGENT\"\r\n                          >\r\n                            {{ componentData.componentId + \".urgent\" | translate }}\r\n                          </div>\r\n\r\n                          <div\r\n                            class=\"alert alert--ok\"\r\n                            *ngIf=\"deliveryFolder.criticality === awPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE\"\r\n                          >\r\n                            {{ componentData.componentId + \".routine\" | translate }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".created\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <div class=\"form-control-generic\">\r\n                            {{ deliveryFolder.statusDate | date: \"shortDate\":\"\":translateService.currentLang }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"section\">\r\n                    <h4 class=\"section-title\">\r\n                      {{ \"origin\" | translate }}\r\n                    </h4>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".refDocumentNum\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          <a>{{ deliveryFolder.bidtTransferOrder?.torCode }}</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".refDocType\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          <a>{{ deliveryFolder.bidtTransferOrder?.torType }}</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".refStatus\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          <a>{{ deliveryFolder.bidtTransferOrder?.torStatus }}</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-cell--3\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".provider\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <div class=\"column\">\r\n                  <div class=\"row\" *ngIf=\"deliveryFolder.bidoCustomerSender?.customerCode\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".partner\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          {{ deliveryFolder.bidoCustomerSender?.customerCode }}\r\n                          <ng-container *ngIf=\"deliveryFolder.bidoCustomerSender?.customerName\">\r\n                            <span style=\"padding: 0 8px\">-</span>\r\n                            {{ deliveryFolder.bidoCustomerSender?.customerName }}\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\" *ngIf=\"deliveryFolder.bidtSiteSender?.siteCode\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          {{ deliveryFolder.bidtSiteSender?.siteCode }}\r\n                          <ng-container *ngIf=\"deliveryFolder.bidtSiteSender?.siteName\">\r\n                            <span style=\"padding: 0 8px\">-</span>\r\n                            {{ deliveryFolder.bidtSiteSender?.siteName }}\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\" *ngIf=\"deliveryFolder.bidtWarehouseSender?.whCode\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".shop\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          {{ deliveryFolder.bidtWarehouseSender?.whCode }}\r\n                          <ng-container *ngIf=\"deliveryFolder.bidtWarehouseSender?.whName\">\r\n                            <span style=\"padding: 0 8px\">-</span>\r\n                            {{ deliveryFolder.bidtWarehouseSender?.whName }}\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div #receipentAnchor class=\"grid-cell--3\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".recipient\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <div class=\"column\">\r\n                  <div class=\"row\" *ngIf=\"deliveryFolder.bidoCustomerReceiver?.customerCode\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".partner\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          {{ deliveryFolder.bidoCustomerReceiver?.customerCode }}\r\n                          <ng-container *ngIf=\"deliveryFolder.bidoCustomerReceiver?.customerName\">\r\n                            <span style=\"padding: 0 8px\">-</span>\r\n                            {{ deliveryFolder.bidoCustomerReceiver?.customerName }}\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\" *ngIf=\"deliveryFolder.bidtSiteReceiver?.siteCode\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          {{ deliveryFolder.bidtSiteReceiver?.siteCode }}\r\n                          <ng-container *ngIf=\"deliveryFolder.bidtSiteReceiver?.siteName\">\r\n                            <span style=\"padding: 0 8px\">-</span>\r\n                            {{ deliveryFolder.bidtSiteReceiver?.siteName }}\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\" *ngIf=\"deliveryFolder.bidtWarehouseReceiver?.whCode\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".shop\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          {{ deliveryFolder.bidtWarehouseReceiver?.whCode }}\r\n                          <ng-container *ngIf=\"deliveryFolder.bidtWarehouseReceiver?.whName\">\r\n                            <span style=\"padding: 0 8px\">-</span>\r\n                            {{ deliveryFolder.bidtWarehouseReceiver?.whName }}\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".expectedDate\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          {{ deliveryFolder.plannedDate | date: \"shortDate\":\"\":translateService.currentLang }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"grid-row\">\r\n          <div #parcelAnchor class=\"grid-cell--12\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ componentData.componentId + \".parcel\" | translate }} ({{\r\n                      parcelTableData ? parcelTableData.length : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                <div class=\"section\">\r\n                  <div class=\"section-content\">\r\n                    <!-- Table -->\r\n                    <p-table\r\n                      [resizableColumns]=\"true\"\r\n                      #ptableParcels\r\n                      class=\"aw-table2\"\r\n                      [columns]=\"parcelTableCols\"\r\n                      [value]=\"parcelTableData\"\r\n                      [(selection)]=\"selectedParcels\"\r\n                      [scrollable]=\"true\"\r\n                    >\r\n                      <ng-template pTemplate=\"emptymessage\">\r\n                        <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                        <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                          <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                          <div class=\"lds-hourglass\"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"caption\">\r\n                        <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedParcels.length > 0 }\">\r\n                          <div class=\"aw-table-global-filter\">\r\n                            <label class=\"aw-table-global-filter-label\">\r\n                              <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableMeasuresGlobalFilter\r\n                              class=\"aw-table-global-filter-input\"\r\n                              type=\"text\"\r\n                              placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                              (input)=\"ptableParcels.filterGlobal($event.target.value, 'contains')\"\r\n                            />\r\n                          </div>\r\n                          <div class=\"aw-table-actions\">\r\n                            <button\r\n                              *ngIf=\"\r\n                                selectedParcels.length > 0 &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                !isDeliveryFolderEditable()\r\n                              \"\r\n                              type=\"button\"\r\n                              mat-raised-button\r\n                              color=\"warn\"\r\n                              (click)=\"deleteShipmentPackage()\"\r\n                            >\r\n                              {{ \"global.delete\" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf=\"\r\n                                selectedParcels.length === 1 &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                !isDeliveryFolderEditable()\r\n                              \"\r\n                              type=\"button\"\r\n                              mat-raised-button\r\n                              (click)=\"editPackageDialog()\"\r\n                            >\r\n                              {{ componentData.componentId + \".edit\" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf=\"\r\n                                selectedParcels.length === 1 &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                !isDeliveryFolderEditable() &&\r\n                                !isPackageValidated()\r\n                              \"\r\n                              type=\"button\"\r\n                              mat-raised-button\r\n                              (click)=\"addMaterialDialogToPackage()\"\r\n                            >\r\n                              {{ componentData.componentId + \".addMaterial\" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf=\"\r\n                                selectedParcels.length === 0 &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                !isDeliveryFolderEditable()\r\n                              \"\r\n                              type=\"button\"\r\n                              mat-raised-button\r\n                              (click)=\"addPackageDialog()\"\r\n                            >\r\n                              {{ componentData.componentId + \".addPackage\" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf=\"selectedParcels.length > 0 && isUserCanAddHaveRightOnDeliveryFolder()\"\r\n                              type=\"button\"\r\n                              mat-raised-button\r\n                              (click)=\"openSelectedGoods()\"\r\n                            >\r\n                              {{ componentData.componentId + \".createLitigation\" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf=\"\r\n                                selectedParcels.length > 0 &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                !isDeliveryFolderEditable()\r\n                              \"\r\n                              type=\"button\"\r\n                              mat-raised-button\r\n                              (click)=\"validateOperations()\"\r\n                            >\r\n                              {{ componentData.componentId + \".validateOperations\" | translate }}\r\n                            </button>\r\n\r\n                            <div class=\"aw-table-icon-actions\">\r\n                              <i\r\n                                class=\"fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay\"\r\n                                aria-hidden=\"true\"\r\n                                tooltipPosition=\"top\"\r\n                              ></i>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"colgroup\" let-columns>\r\n                        <colgroup>\r\n                          <col class=\"aw-table-checkbox-wrapper\" />\r\n                          <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"header\" let-columns>\r\n                        <tr>\r\n                          <th class=\"aw-table-checkbox-wrapper\">\r\n                            <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                          </th>\r\n                          <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                            <div *ngIf=\"col.isDynamic\">\r\n                              {{ col.value }}\r\n                            </div>\r\n                            <div *ngIf=\"!col.isDynamic\">\r\n                              {{ componentData.componentId + \".\" + col.field | translate }}\r\n                            </div>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                        <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                          <td class=\"aw-table-checkbox-wrapper\">\r\n                            <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                          </td>\r\n                          <td\r\n                            *ngFor=\"let col of columns\"\r\n                            [ngSwitch]=\"col.field\"\r\n                            [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                          >\r\n                            <span *ngSwitchCase=\"'packageNum'\">\r\n                              {{ rowData[\"packageCode\"] }}\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase=\"'status'\">\r\n                              {{ rowData[\"packageStatus\"] }}\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase=\"'progress'\">\r\n                              <p-progressBar\r\n                                [ngClass]=\"{ green: rowData[col.field] === component.PROGRESS_MAX }\"\r\n                                [value]=\"rowData[col.field]\"\r\n                              ></p-progressBar>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase=\"awPropertiesConstants.LOGISTICAL_OPERATION_PACKAGING_CONTROL\">\r\n                              <p-checkbox\r\n                                *ngIf=\"\r\n                                  !isDeliveryFolderDraftStatus() &&\r\n                                  !isDeliveryFolderEditable() &&\r\n                                  isUserCanAddHaveRightOnDeliveryFolder()\r\n                                \"\r\n                                [(ngModel)]=\"rowData['packagingCtrl']\"\r\n                                (onChange)=\"onChangeReceivedAndCompliance(rowData, col.field)\"\r\n                                binary=\"true\"\r\n                                [disabled]=\"rowData['isDisable']\"\r\n                              ></p-checkbox>\r\n                            </span>\r\n\r\n                            <span *ngSwitchDefault>\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ componentData.componentId + \".posts\" | translate }}\r\n        </ng-template>\r\n\r\n        <div class=\"grid-row\">\r\n          <div #postsAnchor class=\"grid-cell--12\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ componentData.componentId + \".posts\" | translate }} ({{\r\n                      postsTableData ? postsTableData.length : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                <div class=\"section\">\r\n                  <div class=\"section-content\">\r\n                    <p-table\r\n                      [resizableColumns]=\"true\"\r\n                      #ptablePosts\r\n                      class=\"aw-table2\"\r\n                      [columns]=\"postsTableCols\"\r\n                      [value]=\"postsTableData\"\r\n                      [(selection)]=\"selectedPost\"\r\n                      [scrollable]=\"true\"\r\n                      [paginator]=\"false\"\r\n                    >\r\n                      <ng-template pTemplate=\"emptymessage\">\r\n                        <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                        <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                          <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                          <div class=\"lds-hourglass\"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"caption\">\r\n                        <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': isEmpty(selectedPost) > 0 }\">\r\n                          <div class=\"aw-table-global-filter\">\r\n                            <label class=\"aw-table-global-filter-label\">\r\n                              <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableMeasuresGlobalFilter\r\n                              class=\"aw-table-global-filter-input\"\r\n                              type=\"text\"\r\n                              placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                              (input)=\"ptablePosts.filterGlobal($event.target.value, 'contains')\"\r\n                            />\r\n                          </div>\r\n                          <div class=\"aw-table-actions\">\r\n                            <button\r\n                              *ngIf=\"\r\n                                selectedPost.length > 0 &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                !isDeliveryFolderEditable()\r\n                              \"\r\n                              type=\"button\"\r\n                              mat-raised-button\r\n                              color=\"warn\"\r\n                              (click)=\"deleteReceiptItem()\"\r\n                            >\r\n                              {{ \"global.delete\" | translate }}\r\n                            </button>\r\n\r\n                            <div class=\"aw-table-icon-actions\">\r\n                              <i\r\n                                class=\"fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay\"\r\n                                aria-hidden=\"true\"\r\n                                tooltipPosition=\"top\"\r\n                              ></i>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"colgroup\" let-columns>\r\n                        <colgroup>\r\n                          <col class=\"aw-table-checkbox-wrapper\" />\r\n                          <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"header\" let-columns>\r\n                        <tr>\r\n                          <th class=\"aw-table-checkbox-wrapper\">\r\n                            <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                          </th>\r\n                          <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                            <div *ngIf=\"col.isDynamic\">\r\n                              {{ col.value }}\r\n                            </div>\r\n                            <div *ngIf=\"!col.isDynamic\">\r\n                              {{ componentData.componentId + \".\" + col.field | translate }}\r\n                            </div>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                        <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                          <td class=\"aw-table-checkbox-wrapper\">\r\n                            <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                          </td>\r\n                          <td\r\n                            *ngFor=\"let col of columns\"\r\n                            [ngSwitch]=\"col.field\"\r\n                            [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                          >\r\n                            <span *ngSwitchCase=\"'refeArticle'\">\r\n                              <div>\r\n                                <a (click)=\"openPartNumberLink(rowData)\">{{ rowData[\"birePnPnCode\"] }}</a>\r\n                              </div>\r\n                              <div>\r\n                                <i>{{ rowData[\"articleDesignation\"] }}</i>\r\n                              </div>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase=\"'quantity'\">\r\n                              <span>\r\n                                {{ rowData[col.field] | formatNumber }}\r\n                              </span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase=\"awPropertiesConstants.LOGISTICAL_OPERATION_QUALITY_CONTROL\">\r\n                              <p-checkbox\r\n                                *ngIf=\"\r\n                                  (!isDeliveryFolderEditable() && !isDeliveryFolderDraftStatus()) ||\r\n                                  (rowData['isHide'] && isUserCanAddHaveRightOnDeliveryFolder())\r\n                                \"\r\n                                [(ngModel)]=\"rowData['controlQuantity']\"\r\n                                (onChange)=\"onChangeItemControl(rowData, col.field)\"\r\n                                binary=\"true\"\r\n                                [disabled]=\"rowData['isDisable']\"\r\n                              ></p-checkbox>\r\n                            </span>\r\n                            <span *ngSwitchCase=\"'progress'\">\r\n                              <p-progressBar\r\n                                [ngClass]=\"{ green: rowData[col.field] === component.PROGRESS_MAX }\"\r\n                                [value]=\"rowData[col.field]\"\r\n                              ></p-progressBar>\r\n                            </span>\r\n                            <span *ngSwitchDefault>\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ getComponentName() + \".materials\" | translate }}\r\n        </ng-template>\r\n\r\n        <div class=\"grid-row\">\r\n          <div #materialsAnchor class=\"grid-cell--12\">\r\n            <div class=\"grid-cell grid-cell--container \">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".materials\" | translate }} ({{\r\n                      materialTableData ? materialTableData.length : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <!-- MATERIAL TABLE -->\r\n                <p-table\r\n                  [resizableColumns]=\"true\"\r\n                  #ptableMaterials\r\n                  class=\"aw-table2\"\r\n                  [columns]=\"materialTableCols\"\r\n                  [value]=\"materialTableData\"\r\n                  [(selection)]=\"selectedMaterials\"\r\n                  [scrollable]=\"true\"\r\n                >\r\n                  <ng-template pTemplate=\"emptymessage\">\r\n                    <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                    <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                      <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                      <div class=\"lds-hourglass\"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"caption\">\r\n                    <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedMaterials.length > 0 }\">\r\n                      <div class=\"aw-table-global-filter\">\r\n                        <label class=\"aw-table-global-filter-label\">\r\n                          <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableMeasuresGlobalFilter\r\n                          class=\"aw-table-global-filter-input\"\r\n                          type=\"text\"\r\n                          placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                          (input)=\"ptableMaterials.filterGlobal($event.target.value, 'contains')\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"aw-table-actions\">\r\n                        <button\r\n                          *ngIf=\"\r\n                            selectedMaterials.length > 0 &&\r\n                            isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                            !isDeliveryFolderEditable() &&\r\n                            isAllPackageInGoodStatus()\r\n                          \"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                          color=\"warn\"\r\n                          (click)=\"deleteShipmentMaterial()\"\r\n                        >\r\n                          {{ \"global.delete\" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf=\"\r\n                            selectedMaterials.length === 0 &&\r\n                            isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                            !isDeliveryFolderEditable()\r\n                          \"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                          (click)=\"addMaterialDialog()\"\r\n                        >\r\n                          {{ componentData.componentId + \".addMaterial\" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf=\"\r\n                            selectedMaterials.length > 0 &&\r\n                            isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                            !isDeliveryFolderEditable()\r\n                          \"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                          (click)=\"openLitigationDialog()\"\r\n                        >\r\n                          {{ componentData.componentId + \".createLitigation\" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf=\"\r\n                            selectedMaterials.length > 0 &&\r\n                            isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                            !isDeliveryFolderEditable()\r\n                          \"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                          (click)=\"validateMaterialOperations()\"\r\n                        >\r\n                          {{ componentData.componentId + \".validateOperations\" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"colgroup\" let-columns>\r\n                    <colgroup>\r\n                      <col class=\"aw-table-checkbox-wrapper\" />\r\n                      <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"header\" let-columns>\r\n                    <tr>\r\n                      <th class=\"aw-table-checkbox-wrapper\">\r\n                        <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                      </th>\r\n                      <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                        <div *ngIf=\"col.isDynamic\">\r\n                          {{ col.value }}\r\n                        </div>\r\n                        <div *ngIf=\"!col.isDynamic\">\r\n                          {{ componentData.componentId + \".\" + col.field | translate }}\r\n                        </div>\r\n                      </th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                    <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                      <td class=\"aw-table-checkbox-wrapper\">\r\n                        <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                      </td>\r\n                      <td\r\n                        *ngFor=\"let col of columns\"\r\n                        [ngSwitch]=\"col.field\"\r\n                        [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                      >\r\n                        <span *ngSwitchCase=\"'refeArticle'\">\r\n                          <div>\r\n                            <a (click)=\"openPartNumberLink(rowData['item'])\">{{ rowData[\"pnCode\"] }}</a>\r\n                          </div>\r\n                          <div>\r\n                            <i>{{ rowData[\"pnDesignation\"] }}</i>\r\n                          </div>\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'batchNumber'\">\r\n                          <div *ngIf=\"rowData['batchNumber']\">\r\n                            <a (click)=\"openLink(rowData['bidoEquipment'])\">{{ rowData[\"batchNumber\"] }} </a>\r\n                          </div>\r\n                          <div *ngIf=\"rowData['batchNumber']\">\r\n                            <i>{{ rowData[\"equipmentStatus\"] }} </i>\r\n                          </div>\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'SnAndManufactoring'\">\r\n                          <div\r\n                            *ngIf=\"\r\n                              !rowData['manufacturingBatch'] && rowData['bidoEquipment'] && rowData['bidoEquipment'].sn\r\n                            \"\r\n                          >\r\n                            <a (click)=\"openLinkEquipment(rowData['bidoEquipment'].equipmentCode)\"\r\n                              >{{ rowData[\"bidoEquipment\"].sn }}\r\n                            </a>\r\n                          </div>\r\n                          <div *ngIf=\"rowData['manufacturingBatch']\">\r\n                            <a (click)=\"openMfgBatch(rowData['manufacturingBatch'].equipmentCode)\"\r\n                              >{{ rowData[\"manufacturingBatch\"].batchNumber }}\r\n                            </a>\r\n                          </div>\r\n                          <div *ngIf=\"!rowData['batchNumber']\">\r\n                            <i>{{ rowData[\"equipmentStatus\"] }} </i>\r\n                          </div>\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'qty'\">\r\n                          {{ rowData[\"quantity\"] | formatNumber }}\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'packageNum'\">\r\n                          <div *ngIf=\"rowData.isContener\">\r\n                            <a>{{ rowData[col.field] }}</a>\r\n                          </div>\r\n                          <div *ngIf=\"rowData.isContener\">\r\n                            <i> {{ rowData[\"bidtpackageStatus\"] }}</i>\r\n                          </div>\r\n\r\n                          <div *ngIf=\"!rowData.isContener\">{{ rowData[col.field] }}</div>\r\n                        </span>\r\n                        <span *ngSwitchCase=\"awPropertiesConstants.LOGISTICAL_OPERATION_DOCUMENT_CONTROL\">\r\n                          <p-checkbox\r\n                            *ngIf=\"\r\n                              !isDeliveryFolderDraftStatus() &&\r\n                              !rowData['isDisable'] &&\r\n                              !isDeliveryFolderEditable() &&\r\n                              isUserCanAddHaveRightOnDeliveryFolder()\r\n                            \"\r\n                            [(ngModel)]=\"rowData['documentary']\"\r\n                            (onChange)=\"onChangeMaterialControl(rowData, col.field)\"\r\n                            binary=\"true\"\r\n                          ></p-checkbox>\r\n                        </span>\r\n                        <span *ngSwitchCase=\"awPropertiesConstants.LOGISTICAL_OPERATION_VISUAL_CONTROL\">\r\n                          <p-checkbox\r\n                            *ngIf=\"\r\n                              !isDeliveryFolderDraftStatus() &&\r\n                              !rowData['isDisable'] &&\r\n                              !isDeliveryFolderEditable() &&\r\n                              isUserCanAddHaveRightOnDeliveryFolder()\r\n                            \"\r\n                            [(ngModel)]=\"rowData['visual']\"\r\n                            (onChange)=\"onChangeMaterialControl(rowData, col.field)\"\r\n                            binary=\"true\"\r\n                          ></p-checkbox>\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'progress'\">\r\n                          <p-progressBar\r\n                            [ngClass]=\"{ green: rowData[col.field] === component.PROGRESS_MAX }\"\r\n                            [value]=\"rowData[col.field]\"\r\n                          ></p-progressBar>\r\n                        </span>\r\n                        <span *ngSwitchDefault>\r\n                          {{ rowData[col.field] }}\r\n                        </span>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ componentData.componentId + \".documents\" | translate }}\r\n        </ng-template>\r\n\r\n        <div class=\"grid-row\">\r\n          <div class=\"grid-cell--12\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ componentData.componentId + \".documents\" | translate }} ({{ documentTableDataSource.dataCount }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                <div class=\"section\">\r\n                  <div class=\"section-content\">\r\n                    <a-table [dataSource]=\"documentTableDataSource\">\r\n                      <ng-template tableActionsDef>\r\n                        <p-fileUpload\r\n                          #fileUploader\r\n                          auto=\"true\"\r\n                          chooseLabel=\"{{ 'global.upload' | translate }}\"\r\n                          customUpload=\"true\"\r\n                          mode=\"basic\"\r\n                          name=\"document[]\"\r\n                          (uploadHandler)=\"uploadDocument($event, fileUploader)\"\r\n                          *ngIf=\"!documentTableDataSource.hasDataSelection && isUserCanAddHaveRightOnDeliveryFolder()\"\r\n                        >\r\n                        </p-fileUpload>\r\n\r\n                        <button\r\n                          *ngIf=\"documentTableDataSource.hasDataSelection && isUserCanAddHaveRightOnDeliveryFolder()\"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                          (click)=\"downloadFiles()\"\r\n                        >\r\n                          {{ \"global.download\" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf=\"documentTableDataSource.hasDataSelection && isUserCanAddHaveRightOnDeliveryFolder()\"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                          color=\"warn\"\r\n                          (click)=\"deleteDocuments()\"\r\n                        >\r\n                          {{ \"global.delete\" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n\r\n                      <ng-template columnDef=\"documentPublicationDate\" let-rowData=\"rowData\">\r\n                        {{ rowData[\"documentPublicationDate\"] | date: \"shortDate\":\"\":translateService.currentLang }}\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n  <aw-dialog-assign-package\r\n    *ngIf=\"openAddPackageDialog\"\r\n    [(display)]=\"openAddPackageDialog\"\r\n    [bidtDeliveryFolder]=\"deliveryFolder\"\r\n    [isEditContext]=\"editPackage\"\r\n    [selectedPackage]=\"selectedRowForComplience && selectedRowForComplience._obj\"\r\n    (onCreateOrUpdate)=\"addorUpdatePackageShipment($event)\"\r\n    (onCancel)=\"cancelPackageEdit()\"\r\n  ></aw-dialog-assign-package>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/form/shipment-folder-form.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/form/shipment-folder-form.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .alert {\n  display: inline-block;\n  text-transform: uppercase;\n  font-weight: 600;\n  width: 8em;\n  text-align: center; }\n  :host .alert.alert--ok {\n    background-color: #4caf50; }\n  :host .alert.alert--warning {\n    background-color: #ffc107; }\n  :host .alert.alert--nok {\n    background-color: #f6685e; }\n  :host .alert.alert--none {\n    background-color: #c8d4d6; }\n  :host .custom-width {\n  width: 50%; }\n  :host .padding-class {\n  padding-left: 0.5em; }\n  :host .label-class {\n  padding-right: 0.5em;\n  display: inline-block;\n  width: 2.5em; }\n  :host .span-label {\n  color: #007ad9; }\n  :host .custom-div {\n  padding-left: 1.2em; }\n  :host .custom-anchor {\n  padding: 0.7em 0; }\n  :host .custom-control {\n  padding-top: 0.4em; }\n  :host .aw-table-icon-actions {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-left: calc(8px * 2); }\n  :host .aw-table-icon-actions .aw-icon {\n    font-size: 1.125rem;\n    line-height: 2rem;\n    width: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc2hpcG1lbnQtZm9sZGVyL2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxzaGlwbWVudC1mb2xkZXJcXGZvcm1cXHNoaXBtZW50LWZvbGRlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zaGlwbWVudC1mb2xkZXIvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiLCJzcmMvYXBwL21haW4vbG9naXN0aWNzL3NoaXBtZW50LWZvbGRlci9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0IsRUFBQTtFQU50QjtJQVNNLHlCQ1VnQixFQUFBO0VEbkJ0QjtJQWFNLHlCQ09VLEVBQUE7RURwQmhCO0lBaUJNLHlCQ0tjLEVBQUE7RUR0QnBCO0lBcUJNLHlCQ0lTLEVBQUE7RUR6QmY7RUEwQkksVUFBVSxFQUFBO0VBMUJkO0VBOEJJLG1CQUFtQixFQUFBO0VBOUJ2QjtFQWtDSSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTtFQXBDaEI7RUF3Q0ksY0FBYyxFQUFBO0VBeENsQjtFQTRDSSxtQkFBbUIsRUFBQTtFQTVDdkI7RUFnREksZ0JBQWdCLEVBQUE7RUFoRHBCO0VBb0RJLGtCQUFrQixFQUFBO0VBcER0QjtFRXFCRSxhQUFhO0VBQ2IsbUJBQW1CO0VGb0NqQix5QkFBeUI7RUFDekIsMEJBQXVDLEVBQUE7RUEzRDNDO0lBOERNLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc2hpcG1lbnQtZm9sZGVyL2Zvcm0vc2hpcG1lbnQtZm9sZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuOmhvc3Qge1xyXG4gIC5hbGVydCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHdpZHRoOiA4ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW5vbmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXdpZHRoIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAucGFkZGluZy1jbGFzcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xyXG4gIH1cclxuXHJcbiAgLmxhYmVsLWNsYXNzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gIH1cclxuXHJcbiAgLnNwYW4tbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDdhZDk7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWRpdiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMmVtO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1hbmNob3Ige1xyXG4gICAgcGFkZGluZzogMC43ZW0gMDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC40ZW07XHJcbiAgfVxyXG5cclxuICAuYXctdGFibGUtaWNvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICB3aWR0aDogMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/form/shipment-folder-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/form/shipment-folder-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ShipmentFolderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentFolderFormComponent", function() { return ShipmentFolderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/bidt-stock-mvt-type-constants */ "./src/app/shared/constants/bidt-stock-mvt-type-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _administration_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../administration/catalog/catalog.service */ "./src/app/main/administration/catalog/catalog.service.ts");
/* harmony import */ var _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../overlay/overlay.service */ "./src/app/main/overlay/overlay.service.ts");
/* harmony import */ var _goods_receipt_form_goods_receipt_form_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../goods-receipt/form/goods-receipt-form.service */ "./src/app/main/logistics/goods-receipt/form/goods-receipt-form.service.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
/* harmony import */ var _stock_movements_search_search_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../stock-movements/search/search.service */ "./src/app/main/logistics/stock-movements/search/search.service.ts");
/* harmony import */ var _status_shipment_folder_status_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./status/shipment-folder-status.component */ "./src/app/main/logistics/shipment-folder/form/status/shipment-folder-status.component.ts");
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};































var ShipmentFolderFormComponent = /** @class */ (function (_super) {
    __extends(ShipmentFolderFormComponent, _super);
    function ShipmentFolderFormComponent(favoriteService, loaderService, messageService, pageTocService, serializationService, tabService, translateService, sessionService, confirmationService, logisticService, propertiesService, catalogService, overlayService, goodsReceiptFormService, searchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.translateService = translateService;
        _this.sessionService = sessionService;
        _this.confirmationService = confirmationService;
        _this.logisticService = logisticService;
        _this.propertiesService = propertiesService;
        _this.catalogService = catalogService;
        _this.overlayService = overlayService;
        _this.goodsReceiptFormService = goodsReceiptFormService;
        _this.searchService = searchService;
        _this.LOG_TYPE_MAP = 138;
        // Package Counters
        _this.pExpected = 0;
        _this.pReceived = 0;
        _this.pAccepted = 0;
        _this.pDispute = 0;
        // Item Counters
        _this.iPlanned = 0;
        _this.iProgress = 0;
        _this.iReleased = 0;
        _this.iDispute = 0;
        // Material Counters
        _this.mExpected = 0;
        _this.mOK = 0;
        _this.mDispute = 0;
        _this.component = ShipmentFolderFormComponent_1;
        _this.getAllMaps();
        _this.init();
        return _this;
    }
    ShipmentFolderFormComponent_1 = ShipmentFolderFormComponent;
    ShipmentFolderFormComponent.prototype.getAllMaps = function () {
        var _this = this;
        var deliveryFolderStatuses$ = this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__["GenericPropertyConstants"].SHIPMENT_FOLDER_STATUS_MAP);
        var packageStatusMap$ = this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__["GenericPropertyConstants"].PACKAGE_STATUS_MAP);
        var documentTypes$ = this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__["GenericPropertyConstants"].DOC_PARTNER_CATEGORY_MAP);
        // status equipment maps
        var opeartionalStatusMap$ = this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__["GenericPropertyConstants"].OPERATIONAL_STATUS_MAP);
        var batchStatusMap$ = this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__["GenericPropertyConstants"].BATCH_EQUIPMENT_STATUS_MAP);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            deliveryFolderStatuses$,
            packageStatusMap$,
            documentTypes$,
            opeartionalStatusMap$,
            batchStatusMap$
        ]).subscribe({
            next: function (_a) {
                var _b = __read(_a, 5), deliveryFolderStatuses = _b[0], packageStatusMap = _b[1], documentTypes = _b[2], opeartionalStatusMap = _b[3], batchStatusMap = _b[4];
                _this.deliveryFolderStatuses = deliveryFolderStatuses;
                _this.packageStatusMap = packageStatusMap;
                _this.documentTypes = !!documentTypes ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_23__["SelectItemUtils"].fromLabelValues(documentTypes) : [];
                _this.opeartionalStatusMap = !!opeartionalStatusMap ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_23__["SelectItemUtils"].fromLabelValues(opeartionalStatusMap) : [];
                _this.opeartionalStatusMap = _this.opeartionalStatusMap.concat(!!batchStatusMap ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_23__["SelectItemUtils"].fromLabelValues(batchStatusMap) : []);
            }
        });
    };
    ShipmentFolderFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_GOODS_SHIPMENT_FORM;
    };
    ShipmentFolderFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.awPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"];
        if (this.componentData.objectId) {
            this.deliveryFolderId = this.serializationService.deserialize(this.componentData.objectId);
            this.logisticService.findShipmentFolderWithAllObjectsById(this.deliveryFolderId).subscribe(function (deliveryFolder) {
                _this.deliveryFolder = deliveryFolder.bidtDeliveryFolderDTO;
                if (_this.deliveryFolder.bidtDfItems) {
                    _this.deliveryFolder.bidtDfItems = _this.deliveryFolder.bidtDfItems.sort(function (a, b) {
                        return a.dfiCode.localeCompare(b.dfiCode);
                    });
                }
                _this.packageListWithOutItem = deliveryFolder.packageList;
                _this.goodsReceiptFormService
                    .findDocumentByDeliveryFolderId(deliveryFolder.bidtDeliveryFolderDTO.id)
                    .subscribe(function (documentDtolist) {
                    _this.deliveryFolder.bidtDocuments = documentDtolist;
                    _this.documentTableDataSource.setData(_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(_this.deliveryFolder.bidtDocuments));
                });
                var logTypes = _this.catalogService.fetchPropertyValuesTableData(_this.LOG_TYPE_MAP);
                var pnTypes = _this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__["GenericPropertyConstants"].PN_TYPE_MAP);
                var packageTypes = _this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__["GenericPropertyConstants"].PACKAGE_TYPE_MAP);
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({ logTypes: logTypes, pnTypes: pnTypes, packageTypes: packageTypes }).subscribe({
                    next: function (results) {
                        _this.pnTypeList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(results.pnTypes);
                        _this.catalogPropertiesTableDTO = results.logTypes;
                        _this.packageTypeList = results.packageTypes;
                        _this.loadTableData();
                    }
                });
            });
        }
    };
    ShipmentFolderFormComponent.prototype.init = function () {
        this.deliveryFolder = {};
        this.parcelColsDynamicNumber = 0;
        this.postsColsDynamicNumber = 0;
        this.materialsColsDynamicNumber = 0;
        this.deleteDocument = [];
        this.assetWithOT = false;
        this.haveAsset = false;
        this.editPackage = false;
        this.packageList = [];
        this.itemsList = [];
        this.selectedPost = [];
        this.selectedParcels = [];
        this.postsTableData = [];
        this.parcelTableData = [];
        this.selectedMaterials = [];
        this.materialTableData = [];
        this.pakcageIdWithOutItem = new Set();
        this.loadTableColumns();
        this.documentTableDataSource.setData([]);
    };
    ///////////////////////////////////////////////////////////////////////////////
    /********************************
     * Load Table Columns
     ********************************/
    ShipmentFolderFormComponent.prototype.loadTableColumns = function () {
        this.parcelTableCols = [
            { field: 'packageNum', alignment: 'left', isDynamic: false, width: '10%' },
            { field: 'packageType', alignment: 'left', isDynamic: false, width: '10%' },
            { field: 'status', alignment: 'left', isDynamic: false, width: '10%' }
        ];
        this.postsTableCols = [
            { field: 'dfiCode', alignment: 'left', isDynamic: false, width: '10%' },
            { field: 'refeArticle', alignment: 'left', isDynamic: false },
            { field: 'quantity', alignment: 'right', isDynamic: false, width: '10%' },
            { field: 'unit', alignment: 'left', isDynamic: false, width: '5%' },
            { field: 'dfiStatus', alignment: 'left', isDynamic: false, width: '10%' },
            { field: 'packageNumber', alignment: 'left', isDynamic: false, width: '10%' },
            { field: 'litigate', alignment: 'left', isDynamic: false, width: '10%' }
        ];
        this.materialTableCols = [
            { field: 'dfiCode', alignment: 'left', isDynamic: false, width: '5%' },
            { field: 'refeArticle', alignment: 'left', isDynamic: false, width: '20%' },
            { field: 'batchNumber', alignment: 'left', isDynamic: false, width: '10%' },
            { field: 'SnAndManufactoring', alignment: 'left', isDynamic: false, width: '10%' },
            { field: 'qty', alignment: 'left', isDynamic: false, width: '5%' },
            { field: 'unit', alignment: 'left', isDynamic: false, width: '5%' },
            { field: 'packageNum', alignment: 'left', isDynamic: false, width: '10%' },
            { field: 'litigate', alignment: 'left', isDynamic: false, width: '10%' }
        ];
        this.documentTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                { field: 'documentName', translateKey: this.getTranslateKey('name'), width: '90%' },
                { field: 'documentPublicationDate', translateKey: this.getTranslateKey('dateAdded'), width: '10%' }
            ],
            data: []
        });
    };
    ShipmentFolderFormComponent.prototype.refresh = function () {
        var _this = this;
        this.parcelColsDynamicNumber = 0;
        this.postsColsDynamicNumber = 0;
        this.materialsColsDynamicNumber = 0;
        this.deleteDocument = [];
        this.documentTableDataSource.setData([]);
        this.deliveryFolder = {};
        this.packageList = [];
        this.packageList = [];
        this.itemsList = [];
        this.parcelTableData = [];
        this.parcelTableCols = [];
        this.postsTableData = [];
        this.postsTableCols = [];
        this.materialTableData = [];
        this.materialTableCols = [];
        this.selectedPost = [];
        this.postsTableData = [];
        this.workOrderLinkToAssetId = undefined;
        this.loadTableColumns();
        this.isLoading = true;
        this.assetWithOT = false;
        this.haveAsset = false;
        this.logisticService
            .findShipmentFolderWithAllObjectsById(this.deliveryFolderId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.isLoading = false;
        }))
            .subscribe(function (deliveryFolder) {
            _this.deliveryFolder = deliveryFolder.bidtDeliveryFolderDTO;
            if (_this.deliveryFolder.bidtDfItems) {
                _this.deliveryFolder.bidtDfItems = _this.deliveryFolder.bidtDfItems.sort(function (a, b) {
                    return a.dfiCode.localeCompare(b.dfiCode);
                });
            }
            _this.packageListWithOutItem = deliveryFolder.packageList;
            _this.goodsReceiptFormService
                .findDocumentByDeliveryFolderId(deliveryFolder.bidtDeliveryFolderDTO.id)
                .subscribe(function (documentDtolist) {
                _this.deliveryFolder.bidtDocuments = documentDtolist;
                _this.documentTableDataSource.setData(_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(_this.deliveryFolder.bidtDocuments));
                _this.loadTableData();
            });
        });
    };
    /********************************
     * Load Table Date
     ********************************/
    ShipmentFolderFormComponent.prototype.loadTableData = function () {
        // Fetch Package Table Data
        this.renderPackageTableData();
        // Fetch Items Table Data
        this.renderItemsTableData();
        this.sortTables();
    };
    ShipmentFolderFormComponent.prototype.sortTables = function () {
        if (this.parcelTableData && this.parcelTableData.length > 0) {
            this.parcelTableData.sort(function (a, b) { return a.packageCode.localeCompare(b.packageCode); });
        }
        if (this.postsTableData && this.postsTableData.length > 0) {
            this.postsTableData.sort(function (a, b) { return Number(a.dfiCode) - Number(b.dfiCode); });
        }
        if (this.materialTableData && this.materialTableData.length > 0) {
            this.materialTableData.sort(function (a, b) {
                if (a.dfiCode.localeCompare(b.dfiCode) === 0 && a.bidoEquipment && b.bidoEquipment) {
                    if (a.bidoEquipment.sn && b.bidoEquipment.sn) {
                        return a.bidoEquipment.sn.localeCompare(b.bidoEquipment.sn);
                    }
                    else {
                        return a.bidoEquipment.batchNumber.localeCompare(b.bidoEquipment.batchNumber);
                    }
                }
                else {
                    return Number(a.dfiCode) - Number(b.dfiCode);
                }
            });
        }
    };
    ShipmentFolderFormComponent.prototype.getPackageStatus = function (key) {
        return this.packageStatusMap.filter(function (status) { return status.value === key; })[0].label;
    };
    ShipmentFolderFormComponent.prototype.getItemStatus = function (key) {
        return this.deliveryFolderStatuses.filter(function (status) { return status.value === key; })[0].label;
    };
    ShipmentFolderFormComponent.prototype.getOperationnalStatus = function (key) {
        return this.opeartionalStatusMap.filter(function (status) { return status.value === key; })[0].label;
    };
    ShipmentFolderFormComponent.prototype.getPackageType = function (key) {
        return this.packageTypeList.filter(function (type) { return type.value === key; })[0].label;
    };
    /********************************
     * Fetch Package Table data
     ********************************/
    ShipmentFolderFormComponent.prototype.renderPackageTableData = function () {
        var _this = this;
        var packageList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(this.deliveryFolder.bidtDfItems)
            .filter(function (item) { return !!item.bidtPackage; })
            .map(function (item) {
            return item.bidtPackage;
        });
        if (this.packageListWithOutItem && this.packageListWithOutItem.length > 0) {
            packageList = packageList.concat(this.packageListWithOutItem);
        }
        var operationsList = packageList
            .filter(function (packageRow) { return !!packageRow.bidtPackageOperations; })
            .map(function (packageRow) { return packageRow.bidtPackageOperations; })
            .reduce(function (acc, val) { return acc.concat(val); }, []);
        var input = {
            operations: operationsList,
            bidtDfTypeDTOId: this.deliveryFolder.bidtDfType.id
        };
        this.goodsReceiptFormService.getBidtDfTypeOperationsByDfType(input).subscribe(function (operationsResult) {
            var operations = operationsResult.map(function (operation) {
                var operationList = _this.catalogPropertiesTableDTO.filter(function (ope) { return ope.propertiesKey === operation.packopeDesignation; });
                var tableColumn = {
                    field: "" + operation.packopeDesignation,
                    alignment: 'center',
                    value: _this.translateService.currentLang.toUpperCase() === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].PROPERTY_EN
                        ? operationList[0].enPropertiesValue
                        : operationList[0].frPropertiesValue,
                    isDynamic: true,
                    sequenceCode: Number(operation.packopeCode),
                    width: '10%'
                };
                _this.parcelColsDynamicNumber++;
                return tableColumn;
            });
            operations.sort(function (a, b) { return a.sequenceCode - b.sequenceCode; });
            _this.parcelTableCols = _this.parcelTableCols.concat(operations);
            _this.parcelTableCols = __spread(_this.parcelTableCols, [
                { field: 'progress', alignment: 'center', isDynamic: false, width: '10%' }
            ]);
            _this.parcelTableCols = _this.parcelTableCols.reduce(function (unique, column) {
                return unique.every(function (elt) { return elt.field !== column.field; }) ? __spread(unique, [column]) : unique;
            }, []);
            if (_this.deliveryFolder.bidtDfItems && _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(_this.deliveryFolder.bidtDfItems)) {
                _this.deliveryFolder.bidtDfItems.forEach(function (items) {
                    if (!!items.bidtPackage) {
                        var bidtPackage_1 = items.bidtPackage;
                        var operationRowList = operationsResult.filter(function (opeDTO) { return opeDTO.bidtPackageId === bidtPackage_1.id; });
                        var operationQuality = _this.getPackageOperation(operationRowList, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_QUALITY_CONTROL);
                        var operationReceived = _this.getPackageOperation(operationRowList, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_PHYSICAL_RECEIPT);
                        var operationPackaging = _this.getPackageOperation(operationRowList, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_PACKAGING_CONTROL);
                        _this.packageList.push(bidtPackage_1);
                        var packageData = {
                            id: bidtPackage_1.id,
                            isDisable: _this.isItemOnGoingOrPerformed(items),
                            packageCode: bidtPackage_1.externalPackageCode ? bidtPackage_1.externalPackageCode : bidtPackage_1.packageCode,
                            packageStatus: _this.getPackageStatus(bidtPackage_1.packageStatus),
                            packageType: bidtPackage_1.packageType ? _this.getPackageType(bidtPackage_1.packageType) : undefined,
                            bidtPackageOperations: operationRowList,
                            quality: !!operationQuality
                                ? _this.isStatusPerformed(operationQuality.packopeStatus)
                                    ? true
                                    : false
                                : undefined,
                            packagingCtrl: !!operationPackaging
                                ? _this.isStatusPerformed(operationPackaging.packopeStatus)
                                    ? true
                                    : false
                                : undefined,
                            progress: 0,
                            received: !!operationReceived
                                ? _this.isStatusPerformed(operationReceived.packopeStatus)
                                    ? true
                                    : false
                                : undefined,
                            _item: items,
                            _obj: bidtPackage_1
                        };
                        packageData.progress = _this.calculateProgress([
                            packageData.packagingCtrl,
                            packageData.received,
                            packageData.quality
                        ]);
                        _this.parcelTableData.push(packageData);
                    }
                });
                _this.createRowForPackageWithoutItem(operationsResult);
                _this.parcelTableData = _this.parcelTableData.reduce(function (unique, bidtPackage) {
                    return unique.every(function (elt) { return elt.packageCode !== bidtPackage.packageCode; }) ? __spread(unique, [bidtPackage]) : unique;
                }, []);
                _this.packageList = _this.packageList.reduce(function (unique, bidtPackage) {
                    return unique.every(function (elt) { return elt.packageCode !== bidtPackage.packageCode; }) ? __spread(unique, [bidtPackage]) : unique;
                }, []);
            }
        });
    };
    ShipmentFolderFormComponent.prototype.createRowForPackageWithoutItem = function (operationsResult) {
        var _this = this;
        if (this.packageListWithOutItem && this.packageListWithOutItem.length > 0) {
            this.packageListWithOutItem.forEach(function (bidtPackageInput) {
                var bidtPackage = bidtPackageInput;
                _this.pakcageIdWithOutItem.add(bidtPackageInput.id);
                var operationRowList = operationsResult.filter(function (opeDTO) { return opeDTO.bidtPackageId === bidtPackage.id; });
                var operationQuality = _this.getPackageOperation(operationRowList, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_QUALITY_CONTROL);
                var operationReceived = _this.getPackageOperation(operationRowList, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_PHYSICAL_RECEIPT);
                var operationPackaging = _this.getPackageOperation(operationRowList, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_PACKAGING_CONTROL);
                _this.packageList.push(bidtPackage);
                var packageData = {
                    id: bidtPackage.id,
                    isDisable: false,
                    packageCode: bidtPackage.externalPackageCode ? bidtPackage.externalPackageCode : bidtPackage.packageCode,
                    packageStatus: _this.getPackageStatus(bidtPackage.packageStatus),
                    packageType: bidtPackage.packageType ? _this.getPackageType(bidtPackage.packageType) : undefined,
                    bidtPackageOperations: operationRowList,
                    quality: !!operationQuality
                        ? _this.isStatusPerformed(operationQuality.packopeStatus)
                            ? true
                            : false
                        : undefined,
                    packagingCtrl: !!operationPackaging
                        ? _this.isStatusPerformed(operationPackaging.packopeStatus)
                            ? true
                            : false
                        : undefined,
                    progress: 0,
                    received: !!operationReceived
                        ? _this.isStatusPerformed(operationReceived.packopeStatus)
                            ? true
                            : false
                        : undefined,
                    _obj: bidtPackage
                };
                packageData.progress = _this.calculateProgress([
                    packageData.packagingCtrl,
                    packageData.received,
                    packageData.quality
                ]);
                _this.parcelTableData.push(packageData);
            });
        }
    };
    ShipmentFolderFormComponent.prototype.isItemOnGoingOrPerformed = function (item) {
        if (item.bidtDfItemOperations && item.bidtDfItemOperations.length > 0) {
            return (item.dfiStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].RECEIPT_FOLDER_STATUS_ON_GOING ||
                item.dfiStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].RECEIPT_FOLDER_STATUS_PERFORMED);
        }
        else {
            return this.isOneMaterialOperationPerformed(item);
        }
    };
    ShipmentFolderFormComponent.prototype.getPackageOperation = function (bidtPackageOperationDTOList, colField) {
        var bidtPackageOperation = bidtPackageOperationDTOList.filter(function (operation) { return operation.packopeDesignation === colField; });
        if (bidtPackageOperation.length > 0) {
            return bidtPackageOperation[0];
        }
        else {
            return undefined;
        }
    };
    ShipmentFolderFormComponent.prototype.isStatusPerformed = function (key) {
        if (key === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_STATUS_PERFORMED) {
            return true;
        }
        else {
            return false;
        }
    };
    /********************************
     * Fetch Items Table data
     ********************************/
    ShipmentFolderFormComponent.prototype.renderItemsTableData = function () {
        var _this = this;
        var operations = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(this.deliveryFolder.bidtDfItems)
            .filter(function (item) { return !!item.bidtDfItemOperations; })
            .map(function (item) { return item.bidtDfItemOperations; })
            .reduce(function (acc, val) { return acc.concat(val); }, []).map(function (operation) {
            var operationList = _this.catalogPropertiesTableDTO.filter(function (ope) { return ope.propertiesKey === operation.dfioDesignation; });
            var tableColumn = {
                field: "" + operation.dfioDesignation,
                alignment: 'center',
                value: _this.translateService.currentLang.toUpperCase() === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].PROPERTY_EN
                    ? operationList[0].enPropertiesValue
                    : operationList[0].frPropertiesValue,
                isDynamic: true,
                sequenceCode: Number(operation.dfioCode),
                width: '10%'
            };
            _this.postsColsDynamicNumber++;
            return tableColumn;
        });
        operations.sort(function (a, b) { return a.sequenceCode - b.sequenceCode; });
        this.postsTableCols = this.postsTableCols.concat(operations);
        this.postsTableCols = __spread(this.postsTableCols, [
            { field: 'progress', alignment: 'center', isDynamic: false, width: '10%' }
        ]);
        this.postsTableCols = this.postsTableCols.reduce(function (unique, column) {
            return unique.every(function (elt) { return elt.field !== column.field; }) ? __spread(unique, [column]) : unique;
        }, []);
        this.postsTableData = [];
        this.materialTableData = [];
        if (!!this.deliveryFolder && !!this.deliveryFolder.bidtDfItems && this.deliveryFolder.bidtDfItems.length > 0) {
            var cloneItemList = __spread(this.deliveryFolder.bidtDfItems);
            cloneItemList.sort(function (a, b) {
                if (!!a.dfiCode && !!b.dfiCode) {
                    return parseInt(a.dfiCode, 10) - parseInt(b.dfiCode, 10);
                }
                return -1;
            });
            this.itemsList = [];
            cloneItemList.forEach(function (item, index) {
                var _a;
                var i = index;
                _this.itemsList.push(item);
                var operationQuality = _this.getItemOperation(item.bidtDfItemOperations, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_QUALITY_CONTROL);
                var disable = _this.isOneMaterialOperationPerformed(item);
                var hide = false;
                if (item.bidtPackage) {
                    hide = true;
                    if (item.bidtPackage.packageStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].PACKAGE_STATUS_DELIVERED) {
                        hide = false;
                    }
                }
                var postData = {
                    item: i++,
                    id: item.id,
                    bidtDeliveryFolder: item.bidtDeliveryFolder,
                    articleDesignation: !!item.birePn ? item.birePn.articleDesignation : undefined,
                    birePnPnCode: item.birePnPnCode,
                    bidtDfItemOperations: item.bidtDfItemOperations,
                    quantity: item.quantity,
                    unit: item.birePn ? item.birePn.quantityUnit : undefined,
                    dfiCode: item.dfiCode,
                    isHide: hide,
                    isDisable: disable,
                    dfiStatus: _this.getItemStatus(item.dfiStatus),
                    packageNumber: !!item.bidtPackage
                        ? item.bidtPackage.externalPackageCode
                            ? item.bidtPackage.externalPackageCode
                            : item.bidtPackage.packageCode
                        : undefined,
                    progress: 0,
                    controlQuantity: !!operationQuality
                        ? _this.isStatusPerformed(operationQuality.dfioStatus)
                            ? true
                            : false
                        : undefined,
                    _obj: item
                };
                postData.progress = _this.calculateProgresssItem(item);
                _this.postsTableData.push(postData);
                if (!!item.bidtStockMvts && item.bidtStockMvts.length > 0) {
                    (_a = _this.materialTableData).push.apply(_a, __spread(_this.renderMaterialsTableData(item)));
                }
            });
            this.materialTableData.forEach(function (material) {
                if (material.item && material.item.birePn && material.sn) {
                    var equipmentInput = {
                        sn: material.sn,
                        pnCode: material.item.birePn.pnCode
                    };
                    _this.goodsReceiptFormService.findBidoEquipmentsByPnAndSn(equipmentInput).subscribe(function (equipment) {
                        material.bidoEquipment = equipment[0];
                        if (equipment[0].operationalStatus) {
                            material.equipmentStatus = _this.getOperationnalStatus(equipment[0].operationalStatus);
                        }
                        _this.sortTables();
                    });
                }
                else if (material.item && material.item.birePn && material._obj.stockMvtBatchNumber) {
                    var equipmentInput = {
                        batchNumber: material._obj.stockMvtBatchNumber,
                        pnCode: material.item.birePn.pnCode
                    };
                    _this.goodsReceiptFormService.findBidoEquipmentByPnAndBatchNumber(equipmentInput).subscribe(function (equipment) {
                        if (material.item.birePn.traceability ===
                            _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].PN_TRACEABILITY_BY_BATCH) {
                            _this.goodsReceiptFormService
                                .getManufacturingBatchByEquipment(equipment)
                                .subscribe(function (manufacturingBatch) {
                                material.bidoEquipment = equipment;
                                material.manufacturingBatch = manufacturingBatch;
                                if (equipment.operationalStatus) {
                                    material.equipmentStatus = _this.getOperationnalStatus(equipment.operationalStatus);
                                }
                            });
                        }
                    });
                    _this.sortTables();
                }
            });
            if (this.materialTableData && this.materialTableData.length > 0) {
                this.goodsReceiptFormService
                    .calculateShipmentFolderCriticality(this.deliveryFolder)
                    .subscribe(function (criticality) {
                    _this.deliveryFolder.criticality = criticality;
                });
            }
            if (!this.workOrderLinkToAssetId &&
                this.materialTableData &&
                this.materialTableData.length > 0 &&
                this.deliveryFolder.bidtWarehouseReceiver &&
                this.deliveryFolder.bidtWarehouseReceiver.whCategory === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].WAREHOUSE_CATEGORY_WORKSHOP) {
                this.goodsReceiptFormService
                    .findWorkOrderByMvts([this.materialTableData[0]._obj])
                    .subscribe(function (workOrderList) {
                    if (workOrderList && workOrderList.length > 0) {
                        _this.assetWithOT = true;
                        if (workOrderList[0] && workOrderList[0].woId) {
                            _this.workOrderLinkToAssetId = workOrderList[0].woId;
                        }
                    }
                });
            }
        }
    };
    ShipmentFolderFormComponent.prototype.getItemOperation = function (bidtPackageOperationDTOList, colField) {
        var bidtDfItemOperation = bidtPackageOperationDTOList.filter(function (operation) { return operation.dfioDesignation === colField; });
        if (bidtDfItemOperation.length > 0) {
            return bidtDfItemOperation[0];
        }
        else {
            return undefined;
        }
    };
    ShipmentFolderFormComponent.prototype.isOneMaterialOperationPerformed = function (item) {
        var state = false;
        if (item.bidtStockMvts && item.bidtStockMvts.length > 0) {
            item.bidtStockMvts
                .filter(function (stock) { return !!stock.bidtStockMvtOperations && stock.bidtStockMvtOperations.length > 0; })
                .forEach(function (stockWithOperation) {
                stockWithOperation.bidtStockMvtOperations.forEach(function (operation) {
                    if (operation.smoStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_STATUS_PERFORMED) {
                        state = true;
                    }
                });
            });
        }
        return state;
    };
    /********************************
     * Fetch Material Table data
     ********************************/
    ShipmentFolderFormComponent.prototype.renderMaterialsTableData = function (rowData) {
        var _this = this;
        var operations = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(rowData.bidtStockMvts)
            .filter(function (material) { return !!material.bidtStockMvtOperations; })
            .map(function (material) { return material.bidtStockMvtOperations; })
            .reduce(function (acc, val) { return acc.concat(val); }, []).map(function (operation) {
            var operationList = _this.catalogPropertiesTableDTO.filter(function (ope) { return ope.propertiesKey === operation.smoDesignation; });
            var tableColumn = {
                field: "" + operation.smoDesignation,
                alignment: 'center',
                value: _this.translateService.currentLang.toUpperCase() === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].PROPERTY_EN
                    ? operationList[0].enPropertiesValue
                    : operationList[0].frPropertiesValue,
                isDynamic: true,
                sequenceCode: Number(operation.smoCode),
                width: '10%'
            };
            _this.materialsColsDynamicNumber++;
            return tableColumn;
        });
        operations.sort(function (a, b) { return a.sequenceCode - b.sequenceCode; });
        this.materialTableCols = this.materialTableCols.concat(operations);
        this.materialTableCols = __spread(this.materialTableCols, [
            { field: 'progress', alignment: 'center', isDynamic: false, width: '10%' }
        ]);
        this.materialTableCols = this.materialTableCols.reduce(function (unique, column) {
            return unique.every(function (elt) { return elt.field !== column.field; }) ? __spread(unique, [column]) : unique;
        }, []);
        var materialList = [];
        if (!!rowData.bidtStockMvts && rowData.bidtStockMvts.length > 0) {
            this.haveAsset = true;
            rowData.bidtStockMvts.forEach(function (material) {
                var operationDocumentary = _this.getMaterialOperation(material.bidtStockMvtOperations, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_DOCUMENT_CONTROL);
                var operationVisual = _this.getMaterialOperation(material.bidtStockMvtOperations, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_VISUAL_CONTROL);
                var disable = false;
                if (material.bidtStockMvtOperations && material.bidtStockMvtOperations.length > 0) {
                    if (rowData.bidtDfItemOperations && rowData.bidtDfItemOperations.length > 0) {
                        disable = _this.isItemOperationNotPerformed(rowData);
                    }
                    else if (rowData.bidtPackage) {
                        disable = true;
                        if (rowData.bidtPackage.packageStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].PACKAGE_STATUS_DELIVERED) {
                            disable = false;
                        }
                    }
                }
                var materialCustom = {
                    _obj: material,
                    item: rowData,
                    isDisable: disable,
                    pnCode: rowData.birePn ? rowData.birePn.pnCode : undefined,
                    pnDesignation: rowData.birePn ? rowData.birePn.articleDesignation : undefined,
                    sn: material.stockMvtSn ? material.stockMvtSn : undefined,
                    batchNumber: material.stockMvtBatchNumber ? material.stockMvtBatchNumber : undefined,
                    unit: rowData.birePn ? rowData.birePn.quantityUnit : undefined,
                    quantity: material.stockMvtQuantity,
                    packageNum: rowData.bidtPackage
                        ? rowData.bidtPackage.externalPackageCode
                            ? rowData.bidtPackage.externalPackageCode
                            : rowData.bidtPackage.packageCode
                        : undefined,
                    bidtpackageStatus: rowData.bidtPackage
                        ? _this.getPackageStatus(rowData.bidtPackage.packageStatus)
                        : undefined,
                    dfiCode: rowData.dfiCode,
                    isContener: rowData.bidtPackage ? true : false,
                    documentary: !!operationDocumentary
                        ? _this.isStatusPerformed(operationDocumentary.smoStatus)
                            ? true
                            : false
                        : undefined,
                    visual: !!operationVisual
                        ? _this.isStatusPerformed(operationVisual.smoStatus)
                            ? true
                            : false
                        : undefined,
                    correctPackageStatus: rowData.bidtPackage
                        ? _this.isPackageCorectStatus(rowData.bidtPackage.packageStatus)
                        : undefined
                };
                materialCustom.progress = _this.calculateProgress([materialCustom.documentary, materialCustom.visual]);
                materialList.push(materialCustom);
            });
        }
        return materialList;
    };
    ShipmentFolderFormComponent.prototype.isPackageCorectStatus = function (key) {
        return key === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].PACKAGE_STATUS_PLANNED;
    };
    ShipmentFolderFormComponent.prototype.isItemOperationNotPerformed = function (item) {
        var count = 0;
        item.bidtDfItemOperations.forEach(function (itemOperation) {
            if (itemOperation.dfioStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_STATUS_PERFORMED) {
                count++;
            }
        });
        return item.bidtDfItemOperations.length === count ? false : true;
    };
    ShipmentFolderFormComponent.prototype.getMaterialOperation = function (bidtPackageOperationDTOList, colField) {
        var bidtStockMvtOperation = bidtPackageOperationDTOList.filter(function (operation) { return operation.smoDesignation === colField; });
        if (bidtStockMvtOperation.length > 0) {
            return bidtStockMvtOperation[0];
        }
        else {
            return undefined;
        }
    };
    ShipmentFolderFormComponent.prototype.calculateProgress = function (boolList) {
        var maxProgress = 100;
        var specificCase = 3;
        var numberCol = 0;
        boolList.forEach(function (bool) {
            if (bool !== undefined) {
                numberCol++;
            }
        });
        var progressForOneOpe = Math.floor(maxProgress / numberCol);
        var count = numberCol === specificCase ? 1 : 0;
        boolList.forEach(function (bool) {
            if (bool) {
                count = count + progressForOneOpe;
            }
        });
        return count;
    };
    ShipmentFolderFormComponent.prototype.calculateProgresssItem = function (item) {
        var waitingQuantity = Number(item.quantity);
        var receiptQuantity = 0;
        var multiplier = 100;
        if (item.bidtStockMvts && item.bidtStockMvts.length > 0) {
            item.bidtStockMvts
                .filter(function (stockMvt) { return !!stockMvt.bidtStockMvtOperations && stockMvt.bidtStockMvtOperations.length > 0; })
                .forEach(function (stockMvt) {
                var nbOperation = stockMvt.bidtStockMvtOperations.length;
                var nbOperationDone = 0;
                stockMvt.bidtStockMvtOperations.forEach(function (operation) {
                    if (operation.smoStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_STATUS_PERFORMED) {
                        nbOperationDone++;
                    }
                });
                if (nbOperation === nbOperationDone) {
                    receiptQuantity = receiptQuantity + Number(stockMvt.stockMvtQuantity);
                }
            });
        }
        return Math.floor((receiptQuantity / waitingQuantity) * multiplier);
    };
    /********************************
     * Validate Operations
     ********************************/
    ShipmentFolderFormComponent.prototype.validateOperations = function () {
        var _this = this;
        var partialMessageKey = this.getTranslateKey('validateParcel');
        this.confirmationService.confirm({
            messageKey: partialMessageKey,
            accept: function () {
                var imputList = [];
                _this.selectedParcels.forEach(function (packageCustom) {
                    packageCustom.bidtPackageOperations.forEach(function (operation) {
                        var updatepackageInput = {
                            operationId: Number(operation.id),
                            bidtDeliveryFolderDto: _this.deliveryFolder,
                            newStatus: _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_STATUS_PERFORMED
                        };
                        imputList.push(updatepackageInput);
                    });
                });
                _this.performPackageOperations(imputList);
            }
        });
    };
    /********************************
     * Open Selected Posts
     ********************************/
    ShipmentFolderFormComponent.prototype.openLitigationDialog = function () {
        this.showLitigation = true;
    };
    /********************************
     * Is Object Empty
     ********************************/
    ShipmentFolderFormComponent.prototype.isEmpty = function (obj) {
        return !!obj && Object.keys(obj).length > 0 ? Object.keys(obj).length : 0;
    };
    ShipmentFolderFormComponent.prototype.onChangeReceivedAndCompliance = function (rowData, colField) {
        var operationCheck = this.getPackageOperation(rowData.bidtPackageOperations, colField);
        this.selectedRowForComplience = undefined;
        this.selectedComplienceCol = '';
        if (operationCheck &&
            !this.isStatusPerformed(operationCheck.packopeStatus) &&
            !(rowData._obj.length && rowData._obj.width && rowData._obj.height && rowData._obj.weight) &&
            this.deliveryFolder.bidtDfType &&
            (this.deliveryFolder.bidtDfType.transferType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].MM_TRANSFER_TYPE_INTER_SITE_KEY ||
                this.deliveryFolder.bidtDfType.transferType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].MM_TRANSFER_TYPE_EXTERNAL_KEY)) {
            this.selectedRowForComplience = rowData;
            this.selectedComplienceCol = colField;
            this.openAddPackageDialog = true;
            return;
        }
        if (rowData.bidtPackageOperations) {
            this.updatePackageOperations(rowData.bidtPackageOperations, colField);
        }
    };
    ShipmentFolderFormComponent.prototype.updatePackageOperations = function (bidtPackageOperations, colField) {
        var operationCheck = this.getPackageOperation(bidtPackageOperations, colField);
        if (operationCheck) {
            if (this.isStatusPerformed(operationCheck.packopeStatus)) {
                operationCheck.packopeStatus = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_STATUS_PLANNED;
            }
            else {
                operationCheck.packopeStatus = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_STATUS_PERFORMED;
            }
            var updatepackageInput = {
                operationId: Number(operationCheck.id),
                bidtDeliveryFolderDto: this.deliveryFolder,
                newStatus: operationCheck.packopeStatus
            };
            this.performPackageOperations([updatepackageInput]);
        }
    };
    /**********************************************
     * Operation on Package
     **********************************************/
    ShipmentFolderFormComponent.prototype.performPackageOperations = function (operationCheckList) {
        var _this = this;
        this.logisticService.performPackageOperations(operationCheckList).subscribe(function (res) {
            _this.selectedParcels = [];
            _this.refresh();
        });
    };
    ShipmentFolderFormComponent.prototype.onChangeItemControl = function (rowData, colField) {
        var operationCheck = this.getItemOperation(rowData.bidtDfItemOperations, colField);
        if (operationCheck) {
            if (this.isStatusPerformed(operationCheck.dfioStatus)) {
                operationCheck.dfioStatus = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_STATUS_PLANNED;
            }
            else {
                operationCheck.dfioStatus = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_STATUS_PERFORMED;
            }
            var updateBidtDfItemOperationInput = {
                operationId: operationCheck.id,
                newStatus: operationCheck.dfioStatus
            };
            this.performItemOperations([updateBidtDfItemOperationInput]);
        }
    };
    /**********************************************
     * Operation on Item
     **********************************************/
    ShipmentFolderFormComponent.prototype.performItemOperations = function (res) {
        var _this = this;
        this.logisticService.performItemOperations(res).subscribe(function (result) {
            _this.selectedPost = [];
            _this.refresh();
        });
    };
    ShipmentFolderFormComponent.prototype.onChangeMaterialControl = function (rowData, colField) {
        var operationCheck = this.getMaterialOperation(rowData._obj.bidtStockMvtOperations, colField);
        if (operationCheck) {
            if (this.isStatusPerformed(operationCheck.smoStatus)) {
                operationCheck.smoStatus = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_STATUS_PLANNED;
            }
            else {
                operationCheck.smoStatus = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_STATUS_PERFORMED;
            }
            var input = {
                bidtStockMvt: rowData._obj,
                operationId: operationCheck.id,
                bidtDfItem: rowData.item,
                newStatus: operationCheck.smoStatus
            };
            this.performStockMovementOperations([input]);
        }
    };
    /**********************************************
     * Operation on Material
     **********************************************/
    ShipmentFolderFormComponent.prototype.performStockMovementOperations = function (input) {
        var _this = this;
        this.logisticService.performStockMovementOperations(input).subscribe(function () {
            _this.selectedMaterials = [];
            _this.refresh();
        });
    };
    /********************************
     * Validate Operations
     ********************************/
    ShipmentFolderFormComponent.prototype.validateMaterialOperations = function () {
        var _this = this;
        var partialMessageKey = this.getTranslateKey('validateAsset');
        this.confirmationService.confirm({
            messageKey: partialMessageKey,
            accept: function () {
                var imputList = [];
                _this.selectedMaterials.forEach(function (material) {
                    material._obj.bidtStockMvtOperations.forEach(function (operation) {
                        var updatepackageInput = {
                            bidtStockMvt: material._obj,
                            operationId: operation.id,
                            bidtDfItem: material.item,
                            newStatus: _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].LOGISTICAL_OPERATION_STATUS_PERFORMED
                        };
                        imputList.push(updatepackageInput);
                    });
                });
                _this.performStockMovementOperations(imputList);
            }
        });
    };
    ShipmentFolderFormComponent.prototype.addPackageDialog = function () {
        this.selectedRowForComplience = undefined;
        this.selectedComplienceCol = '';
        this.openAddPackageDialog = true;
    };
    ShipmentFolderFormComponent.prototype.editPackageDialog = function () {
        this.selectedRowForComplience = this.selectedParcels[0];
        this.selectedComplienceCol = '';
        this.editPackage = true;
        this.openAddPackageDialog = true;
    };
    ShipmentFolderFormComponent.prototype.getSearchCriteria = function () {
        var searchCriteria = {
            mvtStatus: [],
            mvtStatusExcluded: [
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].MM_MVT_STATUS_CANCELED_KEY,
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY
            ],
            untilPlannedDate: new Date(),
            untilRealDate: undefined,
            stockMvt: {
                bidtSiteByBidtSiteIssueId: this.deliveryFolder.bidtSiteSender
                    ? this.deliveryFolder.bidtSiteSender.siteId
                    : undefined,
                bidtSiteByBidtSiteReceiptId: undefined,
                bidtWarehouseByBidtWarehouseIssueId: this.deliveryFolder.bidtWarehouseSender
                    ? this.deliveryFolder.bidtWarehouseSender.wareHouseId
                    : undefined,
                bidtWarehouseByBidtWarehouseReceiptId: undefined,
                bidtStockMvtTypeId: _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_8__["BidtStockMvtTypeConstant"].SHIPMENT
            },
            finalReceiverCustomerCode: undefined,
            finalReceiverSiteId: undefined,
            finalReceiverWarehouseId: undefined,
            pnCode: undefined,
            withAlternatives: false,
            criticality: undefined,
            dfShipmentSearch: true
        };
        return searchCriteria;
    };
    ShipmentFolderFormComponent.prototype.addMaterialDialog = function () {
        var _this = this;
        this.searchService.findByCriteria(this.getSearchCriteria()).subscribe(function (mvtList) {
            var params = {
                searchParameters: _this.getSearchCriteria(),
                bidtStockList: mvtList,
                bidtShipmentFolder: _this.deliveryFolder,
                workOrderLinkToAssetId: _this.workOrderLinkToAssetId ? _this.workOrderLinkToAssetId : undefined,
                assetWithOT: _this.assetWithOT,
                folderHaveAsset: _this.haveAsset
            };
            var data = {
                id: _this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_STOCK_MOVEMENTS_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read,
                objectId: _this.serializationService.serialize(params)
            };
            var labelKey = 'transaction.' + data.componentId;
            _this.tabService.open(_this.tabService.create(data, labelKey, true));
        });
    };
    ShipmentFolderFormComponent.prototype.addMaterialDialogToPackage = function () {
        var _this = this;
        this.searchService.findByCriteria(this.getSearchCriteria()).subscribe(function (mvtList) {
            var params = {
                searchParameters: _this.getSearchCriteria(),
                bidtStockList: mvtList,
                bidtShipmentFolder: _this.deliveryFolder,
                bidtPackageDTO: _this.selectedParcels[0]._obj,
                workOrderLinkToAssetId: _this.workOrderLinkToAssetId ? _this.workOrderLinkToAssetId : undefined,
                assetWithOT: _this.assetWithOT,
                folderHaveAsset: _this.haveAsset
            };
            var data = {
                id: _this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_STOCK_MOVEMENTS_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read,
                objectId: _this.serializationService.serialize(params)
            };
            var labelKey = 'transaction.' + data.componentId;
            _this.tabService.open(_this.tabService.create(data, labelKey, true));
        });
    };
    ShipmentFolderFormComponent.prototype.openSelectedGoods = function () {
        // TODO
    };
    /***********************************************
     * Control Quantity Visibility
     ***********************************************/
    ShipmentFolderFormComponent.prototype.getControlQuantityVisibility = function (rowData) {
        var COMPLETED = 100;
        var isQuantityEnabled = false;
        this.parcelTableData.filter(function (res) {
            if (res.progress === COMPLETED && rowData.packageNumber === res.packageCode) {
                isQuantityEnabled = true;
            }
        });
        return isQuantityEnabled;
    };
    ShipmentFolderFormComponent.prototype.getPresentialVisibility = function (rowData) {
        var isPresentialEnabled = false;
        this.postsTableData.filter(function (res) {
            if (res.controlQuantity && rowData.packageNum === res.bidtPackageId) {
                isPresentialEnabled = true;
            }
        });
        return isPresentialEnabled;
    };
    /************************************
     * Delete Package
     ************************************/
    ShipmentFolderFormComponent.prototype.deleteShipmentPackage = function () {
        var _this = this;
        var listItem = [];
        this.selectedParcels.forEach(function (res) {
            if (res._item) {
                listItem = listItem.concat(_this.itemsList.filter(function (item) { return !!item.bidtPackage && item.bidtPackage.id === res.id; }));
            }
            if (_this.pakcageIdWithOutItem.has(res._obj.id)) {
                var input = {
                    id: res.id
                };
                // C54
                _this.logisticService.deleteReceiptPackage(input).subscribe(function (data) {
                    if (listItem.length > 0) {
                        _this.logisticService.deleteShipmentItem(listItem).subscribe(function (dataSupr) {
                            _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeletePackages'));
                            _this.selectedParcels = [];
                            _this.refresh();
                        });
                    }
                    else {
                        _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeletePackages'));
                        _this.selectedParcels = [];
                        _this.refresh();
                    }
                });
            }
            else {
                if (listItem.length > 0) {
                    _this.logisticService.deleteShipmentItem(listItem).subscribe(function (dataSupr) {
                        _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeletePackages'));
                        _this.selectedParcels = [];
                        _this.refresh();
                    });
                }
            }
        });
    };
    /************************************
     * Delete Item
     ************************************/
    ShipmentFolderFormComponent.prototype.deleteReceiptItem = function () {
        var _this = this;
        var itemsInput = this.selectedPost.map(function (item) {
            return item._obj;
        });
        this.logisticService.deleteShipmentItem(itemsInput).subscribe(function (data) {
            _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteItems'));
            _this.selectedPost = [];
            _this.refresh();
        });
    };
    /************************************
     * Delete Materials
     ************************************/
    ShipmentFolderFormComponent.prototype.deleteShipmentMaterial = function () {
        var _this = this;
        var bidtStockList = this.selectedMaterials.map(function (row) {
            return row._obj;
        });
        this.goodsReceiptFormService.deleteShipmentAsset(bidtStockList).subscribe(function (data) {
            _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteMaterial'));
            _this.selectedMaterials = [];
            _this.refresh();
        });
    };
    // on create package
    ShipmentFolderFormComponent.prototype.onCreatePackage = function (event) {
        this.refresh();
    };
    // on create item
    ShipmentFolderFormComponent.prototype.onCreateItem = function (event) {
        this.refresh();
    };
    // on create material
    ShipmentFolderFormComponent.prototype.onCreateMaterial = function (event) {
        this.refresh();
    };
    ShipmentFolderFormComponent.prototype.showStatus = function () {
        var _this = this;
        if (this.deliveryFolder.dfStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].SHIPMENT_FOLDER_STATUS_CANCELED) {
            var input = {
                deliveryFolder: this.deliveryFolder,
                isAllPackageValidated: this.isAllPackageValidated()
            };
            var overlayRef = this.overlayService.openWithPositionCenter({
                content: _status_shipment_folder_status_component__WEBPACK_IMPORTED_MODULE_30__["ShipmentFolderStatusComponent"],
                data: input
            });
            overlayRef.afterClosed$.subscribe({
                next: function (event) {
                    if (event.data) {
                        if (_this.deliveryFolder.bidtDfItems && _this.deliveryFolder.bidtDfItems.length > 0) {
                            var updateItemsStatusInput = _this.deliveryFolder.bidtDfItems.map(function (item) {
                                var row = {
                                    bidtDfItemDTO: item,
                                    newStatus: event.data
                                };
                                return row;
                            });
                            _this.goodsReceiptFormService.updateItemsStatus(updateItemsStatusInput).subscribe(function (result) {
                                _this.changeStatus(event.data);
                            });
                        }
                        else {
                            _this.changeStatus(event.data);
                        }
                    }
                }
            });
        }
    };
    ShipmentFolderFormComponent.prototype.changeStatus = function (status) {
        if (status === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].SHIPMENT_FOLDER_STATUS_AWAITING) {
            this.waitValidate();
        }
        else if (status === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].SHIPMENT_FOLDER_STATUS_ON_GOING &&
            this.deliveryFolder.dfStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].SHIPMENT_FOLDER_STATUS_AWAITING) {
            this.cancelWait();
        }
        else if (status === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].SHIPMENT_FOLDER_STATUS_TAKEN_IN_CHARGE) {
            this.waitValidate();
        }
        else {
            this.deliveryFolder.dfStatus = status;
            this.save();
        }
    };
    ShipmentFolderFormComponent.prototype.save = function () {
        var _this = this;
        this.goodsReceiptFormService.addOrUpdateShipmentFolder(this.deliveryFolder).subscribe({
            next: function (deliveryFolder) {
                _this.deliveryFolderId = {
                    id: deliveryFolder.id
                };
                _this.refresh();
            }
        });
    };
    ShipmentFolderFormComponent.prototype.openLinkEquipment = function (code) {
        if (code) {
            this.openEquipment(code, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read);
        }
    };
    ShipmentFolderFormComponent.prototype.openEquipment = function (objectId, openMode) {
        var labelKey = 'transaction.EquipmentFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'EquipmentFormComponent',
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
    ShipmentFolderFormComponent.prototype.openLink = function (equipment) {
        if (equipment.sn) {
            this.openEquipment(equipment.equipmentCode, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read);
        }
        else {
            this.openSelectedBatch(equipment.equipmentCode);
        }
    };
    ShipmentFolderFormComponent.prototype.openSelectedBatch = function (code) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_PACKAGING_BATCH_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read
        };
        data.objectId = code;
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ShipmentFolderFormComponent.prototype.uploadDocument = function (event, fileUploader) {
        var _this = this;
        if (!!event.files) {
            var file_1 = event.files[0];
            // Check if the file already exists
            var fileExists = this.documentTableDataSource.data.some(function (document) { return document.documentName === file_1.name; });
            if (fileExists) {
                this.messageService.showWarningMessage('global.warningOnFileExists');
            }
            else {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_21__["FileUtils"].getFileContentAsBase64(file_1, function (fileContent) {
                    if (!!fileContent) {
                        var selectedDocumentType = _this.documentTypes.find(function (documentType) { return !!file_1.type && documentType.value === file_1.type; });
                        var document_1 = {
                            documentContent: fileContent,
                            documentName: file_1.name,
                            documentType: !!selectedDocumentType ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_24__["StringUtils"].orEmpty(selectedDocumentType.label) : '',
                            documentPublicationDate: new Date()
                        };
                        _this.deliveryFolder.bidtDocuments = __spread(_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(_this.deliveryFolder.bidtDocuments), [document_1]);
                        _this.documentTableDataSource.addData([document_1]);
                        _this.saveBidtDocuments();
                    }
                });
            }
            fileUploader.clear();
        }
    };
    ShipmentFolderFormComponent.prototype.downloadFiles = function () {
        this.documentTableDataSource.dataSelection.forEach(function (documentRow) {
            if (!!documentRow) {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_21__["FileUtils"].downloadFile(documentRow.documentContent, documentRow.documentName);
            }
        });
    };
    ShipmentFolderFormComponent.prototype.saveBidtDocuments = function () {
        var _this = this;
        if (this.deliveryFolder.bidtDocuments) {
            var saveDocumentDeliveryFolderInput = {
                deliveryFolderDTO: this.deliveryFolder,
                documentList: this.deliveryFolder.bidtDocuments
            };
            this.goodsReceiptFormService.saveDocuments(saveDocumentDeliveryFolderInput).subscribe(function (document) {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCreateDocument'));
            });
        }
    };
    ShipmentFolderFormComponent.prototype.deleteDocuments = function () {
        var _this = this;
        this.documentTableDataSource.dataSelection.forEach(function (selection) {
            _this.deleteDocument.push(_this.goodsReceiptFormService.deleteByid(selection.id));
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.deleteDocument).subscribe(function (result) {
            _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteDocument'));
            _this.refresh();
        });
    };
    ShipmentFolderFormComponent.prototype.isDeliveryFolderDraftStatus = function () {
        if (this.deliveryFolder.dfStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].SHIPMENT_FOLDER_STATUS_DRAFT) {
            return true;
        }
        else {
            return false;
        }
    };
    ShipmentFolderFormComponent.prototype.isDeliveryFolderEditable = function () {
        if (this.deliveryFolder.dfStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].SHIPMENT_FOLDER_STATUS_AWAITING ||
            this.deliveryFolder.dfStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].SHIPMENT_FOLDER_STATUS_TAKEN_IN_CHARGE ||
            this.deliveryFolder.dfStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].SHIPMENT_FOLDER_STATUS_PERFORMED) {
            return true;
        }
        else {
            return false;
        }
    };
    ShipmentFolderFormComponent.prototype.isDeliveryFolderWaiting = function () {
        if (this.deliveryFolder.dfStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].SHIPMENT_FOLDER_STATUS_AWAITING) {
            return true;
        }
        else {
            return false;
        }
    };
    ShipmentFolderFormComponent.prototype.isDeliveryFoldertaken = function () {
        if (this.deliveryFolder.dfStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].SHIPMENT_FOLDER_STATUS_TAKEN_IN_CHARGE) {
            return true;
        }
        else {
            return false;
        }
    };
    ShipmentFolderFormComponent.prototype.isUserCanAddHaveRightOnDeliveryFolder = function () {
        return this.sessionService.hasUserRightByUseCase(_shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__["BidoFunctionTypeConstants"].UC_MM_RECEIVING, _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__["BidoFunctionTypeConstants"].DEGREE_MANAGE);
    };
    ShipmentFolderFormComponent.prototype.openMfgBatch = function (objectId) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_MANUFACTURING_BATCH_FORM,
            objectId: objectId ? this.serializationService.serialize({ customerCode: objectId }) : undefined,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    /**********************************
     * OPEN PART NUMBER UC
     **********************************/
    ShipmentFolderFormComponent.prototype.openPartNumberLink = function (item) {
        this.openPN(item.birePnPnCode, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read);
    };
    ShipmentFolderFormComponent.prototype.openPN = function (objectId, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].ENG_PART_NUMBER_FORM,
            objectId: objectId,
            openMode: openMode
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ShipmentFolderFormComponent.prototype.addorUpdatePackageShipment = function (input) {
        var _this = this;
        var observables = [];
        if ((this.selectedRowForComplience && this.selectedComplienceCol) || this.editPackage) {
            observables.push(this.goodsReceiptFormService.updateShipmentPackage(input.bidtPackageDTO));
        }
        else {
            observables.push(this.goodsReceiptFormService.addShipmentPackage(input));
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).subscribe(function (output) {
            if (!_this.editPackage) {
                if (!!_this.selectedRowForComplience) {
                    var ackageOperationsList = _this.selectedRowForComplience.bidtPackageOperations || [];
                    _this.updatePackageOperations(ackageOperationsList, _this.selectedComplienceCol);
                }
                else {
                    _this.selectedRowForComplience = undefined;
                    _this.selectedComplienceCol = '';
                    _this.refresh();
                }
            }
            else {
                _this.editPackage = false;
                _this.selectedRowForComplience = undefined;
                _this.selectedComplienceCol = '';
                _this.refresh();
            }
        });
    };
    ShipmentFolderFormComponent.prototype.cancelPackageEdit = function () {
        this.selectedParcels = [];
        this.editPackage = false;
        this.selectedRowForComplience = undefined;
        this.selectedComplienceCol = '';
        this.refresh();
    };
    ShipmentFolderFormComponent.prototype.isPackageValidated = function () {
        return (this.selectedParcels[0].packageStatus === this.getPackageStatus(_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].PACKAGE_STATUS_VALIDATED));
    };
    ShipmentFolderFormComponent.prototype.isAllPackageValidated = function () {
        var _this = this;
        if (this.parcelTableData && this.parcelTableData.length > 0) {
            var nbRowValidated_1 = 0;
            this.parcelTableData.forEach(function (packageRow) {
                if (packageRow.packageStatus === _this.getPackageStatus(_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].PACKAGE_STATUS_VALIDATED)) {
                    nbRowValidated_1++;
                }
            });
            if (nbRowValidated_1 === this.parcelTableData.length) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    ShipmentFolderFormComponent.prototype.waitValidate = function () {
        var _this = this;
        var input = {
            bidtDeliveryFolderDTO: this.deliveryFolder,
            needCancel: false
        };
        this.goodsReceiptFormService.updateShipmentFolderStatus(input).subscribe(function (updatedFolder) {
            _this.refresh();
        });
    };
    ShipmentFolderFormComponent.prototype.cancelWait = function () {
        var _this = this;
        var input = {
            bidtDeliveryFolderDTO: this.deliveryFolder,
            needCancel: true
        };
        this.goodsReceiptFormService.updateShipmentFolderStatus(input).subscribe(function (updatedFolder) {
            _this.refresh();
        });
    };
    ShipmentFolderFormComponent.prototype.isAllPackageInGoodStatus = function () {
        return (this.selectedMaterials.filter(function (row) { return row.correctPackageStatus === true || row.correctPackageStatus === undefined; }).length === this.selectedMaterials.length);
    };
    var ShipmentFolderFormComponent_1;
    ShipmentFolderFormComponent.PROGRESS_MAX = 100;
    ShipmentFolderFormComponent = ShipmentFolderFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-shipment-folder-form',
            template: __webpack_require__(/*! ./shipment-folder-form.component.html */ "./src/app/main/logistics/shipment-folder/form/shipment-folder-form.component.html"),
            styles: [__webpack_require__(/*! ./shipment-folder-form.component.scss */ "./src/app/main/logistics/shipment-folder/form/shipment-folder-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_13__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_15__["MessageService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__["PageTocService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_17__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_19__["TabService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_18__["SessionService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_28__["LogisticsService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_16__["PropertiesService"],
            _administration_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_25__["CatalogService"],
            _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_26__["OverlayService"],
            _goods_receipt_form_goods_receipt_form_service__WEBPACK_IMPORTED_MODULE_27__["GoodsReceiptFormService"],
            _stock_movements_search_search_service__WEBPACK_IMPORTED_MODULE_29__["SearchService"]])
    ], ShipmentFolderFormComponent);
    return ShipmentFolderFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_20__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/search/dialog-create-shipment/dialog-create-shipment.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/search/dialog-create-shipment/dialog-create-shipment.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"75\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"section\">\r\n      <div class=\"section-content\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group required\">\r\n            <label class=\"form-label\">{{ getComponentName() + \".shipmentType\" | translate }}</label>\r\n\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                appendTo=\"body\"\r\n                class=\"aw-dropdown fixed-width\"\r\n                placeholder=\"&nbsp;\"\r\n                [options]=\"dfTypes\"\r\n                [showClear]=\"true\"\r\n                [(ngModel)]=\"selectedDfType\"\r\n                (onChange)=\"onSelectedDfTypeChange()\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group required\">\r\n            <label class=\"form-label\">{{ getComponentName() + \".expectedDate\" | translate }}</label>\r\n\r\n            <div class=\"form-control\">\r\n              <p-calendar\r\n                showButtonBar=\"true\"\r\n                [monthNavigator]=\"true\"\r\n                [yearNavigator]=\"true\"\r\n                [yearRange]=\"sessionService.calendarYearRange\"\r\n                appendTo=\"body\"\r\n                class=\"aw-calendar\"\r\n                [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                [locale]=\"sessionService.calendarFormat\"\r\n                [(ngModel)]=\"selectedPlannedDate\"\r\n              ></p-calendar>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"section\">\r\n      <h4 class=\"section-title\">{{ getComponentName() + \".sender\" | translate }}</h4>\r\n\r\n      <div class=\"section-content\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group required\">\r\n            <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                appendTo=\"body\"\r\n                class=\"aw-dropdown fixed-width\"\r\n                placeholder=\"&nbsp;\"\r\n                [options]=\"sites\"\r\n                [showClear]=\"true\"\r\n                [(ngModel)]=\"selectedShipperSite\"\r\n                (onChange)=\"onChangeShipperSite()\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group flex--2\" style=\"height: 47px;\">\r\n            <label class=\"form-label\">\r\n              {{ selectedShipperWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n            </label>\r\n\r\n            <div class=\"form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown\">\r\n              <p-selectButton\r\n                [options]=\"warehouseCategories\"\r\n                [(ngModel)]=\"selectedShipperWarehouseCategory\"\r\n                (onChange)=\"onChangeShipperWarehouseCategory()\"\r\n              ></p-selectButton>\r\n\r\n              <p-dropdown\r\n                appendTo=\"body\"\r\n                class=\"aw-dropdown\"\r\n                placeholder=\"&nbsp;\"\r\n                [options]=\"shipperWarehouses\"\r\n                [showClear]=\"true\"\r\n                [(ngModel)]=\"selectedShipperWarehouse\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"section\">\r\n      <h4 class=\"section-title\">{{ getComponentName() + \".recipient\" | translate }}</h4>\r\n\r\n      <div class=\"section-content\">\r\n        <div class=\"row\" *ngIf=\"!showPartnerDropdown || contextComponent == componentContext.LOCALE\">\r\n          <div class=\"form-group required\">\r\n            <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                appendTo=\"body\"\r\n                class=\"aw-dropdown fixed-width\"\r\n                placeholder=\"&nbsp;\"\r\n                [options]=\"sites\"\r\n                [showClear]=\"true\"\r\n                [(ngModel)]=\"selectedRecipientSite\"\r\n                (onChange)=\"onChangeRecipientSite()\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group flex--2\" style=\"height: 47px;\">\r\n            <label class=\"form-label\">\r\n              {{ selectedRecipientWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n            </label>\r\n\r\n            <div class=\"form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown\">\r\n              <p-selectButton\r\n                [options]=\"warehouseCategories\"\r\n                [(ngModel)]=\"selectedRecipientWarehouseCategory\"\r\n                (onChange)=\"onChangeRecipientWarehouseCategory()\"\r\n              ></p-selectButton>\r\n\r\n              <p-dropdown\r\n                appendTo=\"body\"\r\n                class=\"aw-dropdown\"\r\n                placeholder=\"&nbsp;\"\r\n                [options]=\"recipientWarehouses\"\r\n                [showClear]=\"true\"\r\n                [(ngModel)]=\"selectedRecipientWarehouse\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"showPartnerDropdown && contextComponent == componentContext.EXTERNAL\">\r\n          <div class=\"form-group required\">\r\n            <label class=\"form-label\">{{ getComponentName() + \".partner\" | translate }}</label>\r\n\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                appendTo=\"body\"\r\n                class=\"aw-dropdown fixed-width\"\r\n                placeholder=\"&nbsp;\"\r\n                [options]=\"businessPartnerList\"\r\n                [showClear]=\"true\"\r\n                [(ngModel)]=\"bidoCustomerReceiver\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\"></div>\r\n          <div class=\"form-group\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button mat-raised-button type=\"button\" (click)=\"closeDialog()\">{{ \"global.cancel\" | translate }}</button>\r\n\r\n    <button\r\n      mat-raised-button\r\n      type=\"button\"\r\n      color=\"primary\"\r\n      [disabled]=\"!canValidate() || !isSitesOk()\"\r\n      (click)=\"validate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/search/dialog-create-shipment/dialog-create-shipment.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/search/dialog-create-shipment/dialog-create-shipment.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ComponentContext, DialogCreateShipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentContext", function() { return ComponentContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogCreateShipmentComponent", function() { return DialogCreateShipmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/pipes/extract-translation.pipe */ "./src/app/shared/pipes/extract-translation.pipe.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../goods-receipt/delivery-folder-search.service */ "./src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
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














var ComponentContext;
(function (ComponentContext) {
    ComponentContext[ComponentContext["LOCALE"] = 0] = "LOCALE";
    ComponentContext[ComponentContext["EXTERNAL"] = 1] = "EXTERNAL";
})(ComponentContext || (ComponentContext = {}));
var DialogCreateShipmentComponent = /** @class */ (function (_super) {
    __extends(DialogCreateShipmentComponent, _super);
    function DialogCreateShipmentComponent(sessionService, extractTranslationPipe, dfSearchService, logisticsService, messageService, propertiesService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read, 'DialogCreateShipmentComponent') || this;
        _this.sessionService = sessionService;
        _this.extractTranslationPipe = extractTranslationPipe;
        _this.dfSearchService = dfSearchService;
        _this.logisticsService = logisticsService;
        _this.messageService = messageService;
        _this.propertiesService = propertiesService;
        _this.componentContext = ComponentContext;
        _this.onValidate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.init();
        _this.loadSites();
        _this.loadWarehouseCategories();
        return _this;
    }
    ///////////////////////////////////////////////////////////////////////////////
    DialogCreateShipmentComponent.prototype.getComponentName = function () {
        return 'DialogCreateShipmentComponent';
    };
    DialogCreateShipmentComponent.prototype.canValidate = function () {
        return this.selectedDfType &&
            (this.selectedRecipientWarehouse || (this.bidoCustomerReceiver && this.bidoCustomerReceiver.customerCode)) &&
            (this.selectedShipperWarehouse || (this.bidoCustomerSender && this.bidoCustomerSender.customerCode)) &&
            this.selectedRecipientWarehouse !== this.selectedShipperWarehouse
            ? true
            : false;
    };
    DialogCreateShipmentComponent.prototype.onChangeRecipientSite = function () {
        this.onChangeRecipientWarehouseCategory();
    };
    DialogCreateShipmentComponent.prototype.onChangeRecipientWarehouseCategory = function () {
        var _this = this;
        this.unselectRecipientWarehouse();
        if (this.selectedRecipientSite) {
            this.loadWareHouses(this.selectedRecipientSite, this.selectedRecipientWarehouseCategory).subscribe({
                next: function (warehouses) {
                    _this.recipientWarehouses = warehouses;
                }
            });
        }
    };
    DialogCreateShipmentComponent.prototype.onChangeShipperSite = function () {
        this.onChangeShipperWarehouseCategory();
    };
    DialogCreateShipmentComponent.prototype.onChangeShipperWarehouseCategory = function () {
        var _this = this;
        this.unselectShipperWarehouse();
        if (this.selectedShipperSite) {
            this.loadWareHouses(this.selectedShipperSite, this.selectedShipperWarehouseCategory).subscribe({
                next: function (warehouses) {
                    _this.shipperWarehouses = warehouses;
                }
            });
        }
    };
    DialogCreateShipmentComponent.prototype.validate = function () {
        var _this = this;
        var input = {
            bidtDfTypeId: this.selectedDfType && this.selectedDfType.id,
            bidtSiteByBidtSiteReceiverId: this.selectedRecipientSite,
            bidtSiteByBidtSiteSenderId: this.selectedShipperSite,
            bidtWarehouseByBidtWarehouseReceiverId: this.selectedRecipientWarehouse,
            bidtWarehouseByBidtWarehouseSenderId: this.selectedShipperWarehouse,
            criticality: undefined,
            plannedDate: this.selectedPlannedDate,
            bidoCustomerReceiver: this.bidoCustomerReceiver,
            bidoCustomerSender: this.bidoCustomerSender
        };
        this.logisticsService.addOrUpdateShipmentFolder(input).subscribe(function (res) {
            _this.onValidate.emit(res);
            _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCreate'));
            _this.closeDialog();
        });
    };
    ///////////////////////////////////////////////////////////////////////////////
    DialogCreateShipmentComponent.prototype.init = function () {
        this.criticalities = [];
        this.dfTypes = [];
        this.recipientWarehouses = [];
        this.shipperWarehouses = [];
        this.sites = [];
        this.warehouseCategories = [];
        this.businessPartnerList = [];
        this.selectedCriticality = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].LOGISTICAL_CRITICALITY_ROUTINE;
        this.selectedDfType = undefined;
        this.selectedPlannedDate = new Date();
        this.selectedRecipientSite = undefined;
        this.selectedRecipientWarehouse = undefined;
        this.selectedRecipientWarehouseCategory = undefined;
        this.selectedShipperSite = undefined;
        this.selectedShipperWarehouse = undefined;
        this.selectedShipperWarehouseCategory = undefined;
        this.showPartnerDropdown = false;
        this.loadCriticalities();
        this.loadDfTypes();
        this.loadSites();
        this.loadWarehouseCategories();
        this.loadUserSiteId();
        this.LoadUserWarehouseId();
        this.loadBusinessPartnerList();
    };
    DialogCreateShipmentComponent.prototype.LoadUserWarehouseId = function () {
        var _this = this;
        this.sessionService.getUserWarehouseId().subscribe({
            next: function (warehouse) {
                _this.loadWareHouses(_this.selectedShipperSite, _this.selectedShipperWarehouseCategory).subscribe({
                    next: function (warehouses) {
                        _this.shipperWarehouses = warehouses;
                        if (warehouse && warehouse.wareHouseId) {
                            _this.selectedShipperWarehouse = warehouse ? warehouse.wareHouseId : undefined;
                        }
                    }
                });
            }
        });
    };
    DialogCreateShipmentComponent.prototype.loadBusinessPartnerList = function () {
        var _this = this;
        this.logisticsService.findAllBidoCustomer().subscribe(function (results) {
            _this.businessPartnerList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__["ListUtils"].orEmpty(results)
                .filter(function (customer) { return !!customer.customerCode; })
                .map(function (customer) {
                return {
                    label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__["StringUtils"].isNullOrEmpty(customer.customerName)
                        ? customer.customerCode
                        : customer.customerName + " (" + customer.customerCode + ")",
                    value: customer
                };
            });
        });
    };
    DialogCreateShipmentComponent.prototype.isSitesOk = function () {
        if (this.selectedDfType &&
            this.selectedDfType.transferType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].MM_TRANSFER_TYPE_INTRA_SITE_KEY) {
            return this.selectedRecipientSite === this.selectedShipperSite;
        }
        else if (this.selectedDfType &&
            this.selectedDfType.transferType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].MM_TRANSFER_TYPE_INTER_SITE_KEY) {
            return this.selectedRecipientSite !== this.selectedShipperSite;
        }
        else {
            return true;
        }
    };
    DialogCreateShipmentComponent.prototype.onSelectedDfTypeChange = function () {
        this.showPartnerDropdown =
            (this.selectedDfType &&
                this.selectedDfType.transferType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].MM_TRANSFER_TYPE_INTRA_SITE_KEY) ||
                (this.selectedDfType &&
                    this.selectedDfType.transferType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].MM_TRANSFER_TYPE_INTER_SITE_KEY)
                ? false
                : true;
    };
    DialogCreateShipmentComponent.prototype.loadUserSiteId = function () {
        var _this = this;
        this.sessionService.getUserSiteId().subscribe({
            next: function (site) {
                _this.selectedShipperSite = site ? site.siteId : undefined;
            }
        });
    };
    DialogCreateShipmentComponent.prototype.loadCriticalities = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__["GenericPropertyConstants"].LOGISTICAL_CRITICALITY_MAP).subscribe({
            next: function (criticalities) {
                _this.criticalities = criticalities.map(function (criticality) {
                    return {
                        label: criticality.label,
                        value: criticality.value
                    };
                });
            }
        });
    };
    DialogCreateShipmentComponent.prototype.loadDfTypes = function () {
        var _this = this;
        this.logisticsService.findShipmentDfTypes().subscribe({
            next: function (dfTypes) {
                if (_this.contextComponent === _this.componentContext.LOCALE) {
                    _this.dfTypes = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__["ListUtils"].orEmpty(dfTypes)
                        .filter(function (dfType) { return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__["StringUtils"].isNullOrEmpty(dfType.dftDesignation); })
                        .filter(function (dfType) { return dfType.transferType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].MM_TRANSFER_TYPE_INTRA_SITE_KEY; })
                        .map(function (dfType) {
                        return {
                            label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__["StringUtils"].orEmpty(_this.extractTranslationPipe.transform(dfType.dftDesignation)),
                            value: dfType
                        };
                    })
                        .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
                    _this.selectedDfType = _this.dfTypes.length === 1 ? _this.dfTypes[0].value : undefined;
                }
                else {
                    _this.dfTypes = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__["ListUtils"].orEmpty(dfTypes)
                        .filter(function (dfType) { return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__["StringUtils"].isNullOrEmpty(dfType.dftDesignation); })
                        .filter(function (dfType) {
                        return dfType.transferType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].MM_TRANSFER_TYPE_INTER_SITE_KEY ||
                            dfType.transferType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].MM_TRANSFER_TYPE_EXTERNAL_KEY;
                    })
                        .map(function (dfType) {
                        return {
                            label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__["StringUtils"].orEmpty(_this.extractTranslationPipe.transform(dfType.dftDesignation)),
                            value: dfType
                        };
                    })
                        .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
                    _this.selectedDfType = _this.dfTypes.length === 1 ? _this.dfTypes[0].value : undefined;
                }
            }
        });
    };
    DialogCreateShipmentComponent.prototype.loadSites = function () {
        var _this = this;
        this.dfSearchService.findAllSiteList().subscribe({
            next: function (sites) {
                _this.sites = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__["ListUtils"].orEmpty(sites)
                    .map(function (site) {
                    return {
                        label: site.siteCode + " - " + site.siteName,
                        value: site.siteId
                    };
                })
                    .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
            }
        });
    };
    DialogCreateShipmentComponent.prototype.loadWarehouseCategories = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__["GenericPropertyConstants"].WAREHOUSE_CATEGORY_MAP).subscribe({
            next: function (warehouseCategories) {
                _this.warehouseCategories = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__["ListUtils"].orEmpty(warehouseCategories).sort(function (s1, s2) {
                    return s1.value.localeCompare(s2.value);
                });
                var warehouseCategory = _this.warehouseCategories.length > 0 ? _this.warehouseCategories[0].value : undefined;
                _this.selectedRecipientWarehouseCategory = warehouseCategory;
                _this.selectedShipperWarehouseCategory = warehouseCategory;
            }
        });
    };
    DialogCreateShipmentComponent.prototype.loadWareHouses = function (site, warehouseCategory) {
        return this.dfSearchService.getWarehousesBySiteId(site).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (warehouses) {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__["ListUtils"].orEmpty(warehouses)
                .filter(function (warehouse) { return warehouse.whCategory === warehouseCategory; })
                .map(function (warehouse) {
                return {
                    label: warehouse.whCode + " - " + warehouse.whName,
                    value: warehouse.wareHouseId
                };
            })
                .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
        }));
    };
    DialogCreateShipmentComponent.prototype.unselectRecipientWarehouse = function () {
        this.recipientWarehouses = [];
        this.selectedRecipientWarehouse = undefined;
    };
    DialogCreateShipmentComponent.prototype.unselectShipperWarehouse = function () {
        this.shipperWarehouses = [];
        this.selectedShipperWarehouse = undefined;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DialogCreateShipmentComponent.prototype, "contextComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogCreateShipmentComponent.prototype, "onValidate", void 0);
    DialogCreateShipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-create-shipment',
            template: __webpack_require__(/*! ./dialog-create-shipment.component.html */ "./src/app/main/logistics/shipment-folder/search/dialog-create-shipment/dialog-create-shipment.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"],
            _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_5__["ExtractTranslationPipe"],
            _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_12__["DeliveryFolderSearchService"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_13__["LogisticsService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__["PropertiesService"]])
    ], DialogCreateShipmentComponent);
    return DialogCreateShipmentComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/search/external-shipment-search.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/search/external-shipment-search.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ExternalShipmentSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalShipmentSearchComponent", function() { return ExternalShipmentSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/pipes/extract-translation.pipe */ "./src/app/shared/pipes/extract-translation.pipe.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../goods-receipt/delivery-folder-search.service */ "./src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
/* harmony import */ var _shipment_folder_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shipment-folder-search.component */ "./src/app/main/logistics/shipment-folder/search/shipment-folder-search.component.ts");
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














var ExternalShipmentSearchComponent = /** @class */ (function (_super) {
    __extends(ExternalShipmentSearchComponent, _super);
    function ExternalShipmentSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, translateService, dfSearchService, logisticsService, propertiesService, extractTranslationPipe) {
        var _this = _super.call(this, favoriteService, loaderService, messageService, serializationService, tabService, sessionService, translateService, dfSearchService, logisticsService, propertiesService, extractTranslationPipe) || this;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.dfSearchService = dfSearchService;
        _this.logisticsService = logisticsService;
        _this.propertiesService = propertiesService;
        _this.extractTranslationPipe = extractTranslationPipe;
        return _this;
    }
    ExternalShipmentSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_GOODS_EXTERNAL_SHIPMENT_SEARCH;
    };
    Object.defineProperty(ExternalShipmentSearchComponent.prototype, "getCurrentComponentContext", {
        get: function () {
            return _shipment_folder_search_component__WEBPACK_IMPORTED_MODULE_13__["ComponentContext"].EXTERNAL;
        },
        enumerable: true,
        configurable: true
    });
    ExternalShipmentSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-external-shipment-search',
            template: __webpack_require__(/*! ./shipment-folder-search.component.html */ "./src/app/main/logistics/shipment-folder/search/shipment-folder-search.component.html"),
            styles: [__webpack_require__(/*! ./shipment-folder-search.component.scss */ "./src/app/main/logistics/shipment-folder/search/shipment-folder-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_11__["DeliveryFolderSearchService"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_12__["LogisticsService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__["PropertiesService"],
            _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_3__["ExtractTranslationPipe"]])
    ], ExternalShipmentSearchComponent);
    return ExternalShipmentSearchComponent;
}(_shipment_folder_search_component__WEBPACK_IMPORTED_MODULE_13__["ShipmentFolderSearchComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/search/local-shipment-search.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/search/local-shipment-search.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LocalShipmentSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalShipmentSearchComponent", function() { return LocalShipmentSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/pipes/extract-translation.pipe */ "./src/app/shared/pipes/extract-translation.pipe.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../goods-receipt/delivery-folder-search.service */ "./src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
/* harmony import */ var _shipment_folder_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shipment-folder-search.component */ "./src/app/main/logistics/shipment-folder/search/shipment-folder-search.component.ts");
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














var LocalShipmentSearchComponent = /** @class */ (function (_super) {
    __extends(LocalShipmentSearchComponent, _super);
    function LocalShipmentSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, translateService, dfSearchService, logisticsService, propertiesService, extractTranslationPipe) {
        var _this = _super.call(this, favoriteService, loaderService, messageService, serializationService, tabService, sessionService, translateService, dfSearchService, logisticsService, propertiesService, extractTranslationPipe) || this;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.dfSearchService = dfSearchService;
        _this.logisticsService = logisticsService;
        _this.propertiesService = propertiesService;
        _this.extractTranslationPipe = extractTranslationPipe;
        return _this;
    }
    LocalShipmentSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_GOODS_LOCAL_SHIPMENT_SEARCH;
    };
    Object.defineProperty(LocalShipmentSearchComponent.prototype, "getCurrentComponentContext", {
        get: function () {
            return _shipment_folder_search_component__WEBPACK_IMPORTED_MODULE_13__["ComponentContext"].LOCALE;
        },
        enumerable: true,
        configurable: true
    });
    LocalShipmentSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-local-shipment-search',
            template: __webpack_require__(/*! ./shipment-folder-search.component.html */ "./src/app/main/logistics/shipment-folder/search/shipment-folder-search.component.html"),
            styles: [__webpack_require__(/*! ./shipment-folder-search.component.scss */ "./src/app/main/logistics/shipment-folder/search/shipment-folder-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_11__["DeliveryFolderSearchService"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_12__["LogisticsService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__["PropertiesService"],
            _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_3__["ExtractTranslationPipe"]])
    ], LocalShipmentSearchComponent);
    return LocalShipmentSearchComponent;
}(_shipment_folder_search_component__WEBPACK_IMPORTED_MODULE_13__["ShipmentFolderSearchComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/search/shipment-folder-search.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/search/shipment-folder-search.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button *ngIf=\"isCreateButtonnIsVisible()\" type=\"button\" mat-raised-button (click)=\"create()\">\r\n      {{ \"global.create\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">{{ \"addToFavorite\" | translate }}</button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">{{ componentData.componentId + \".sender\" | translate }}</h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group required\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".site\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [options]=\"shipperSites\"\r\n                          [showClear]=\"true\"\r\n                          [(ngModel)]=\"selectedShipperSite\"\r\n                          (onChange)=\"onChangeShipperSite()\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex--2\" style=\"height: 47px;\">\r\n                      <label class=\"form-label\">\r\n                        {{ selectedShipperWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown\">\r\n                        <p-selectButton\r\n                          [options]=\"warehouseCategories\"\r\n                          [(ngModel)]=\"selectedShipperWarehouseCategory\"\r\n                          (onChange)=\"onChangeShipperWarehouseCategory()\"\r\n                        ></p-selectButton>\r\n\r\n                        <p-dropdown\r\n                          appendTo=\"body\"\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [options]=\"shipperWarehouses\"\r\n                          [showClear]=\"true\"\r\n                          [(ngModel)]=\"selectedShipperWarehouse\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">{{ componentData.componentId + \".recipient\" | translate }}</h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".site\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [options]=\"recipientSites\"\r\n                          [showClear]=\"true\"\r\n                          [(ngModel)]=\"selectedRecipientSite\"\r\n                          (onChange)=\"onChangeRecipientSite()\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex--2\" style=\"height: 47px;\">\r\n                      <label class=\"form-label\">\r\n                        {{ selectedRecipientWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown\">\r\n                        <p-selectButton\r\n                          [options]=\"warehouseCategories\"\r\n                          [(ngModel)]=\"selectedRecipientWarehouseCategory\"\r\n                          (onChange)=\"onChangeRecipientWarehouseCategory()\"\r\n                        ></p-selectButton>\r\n\r\n                        <p-dropdown\r\n                          appendTo=\"body\"\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [options]=\"recipientWarehouses\"\r\n                          [showClear]=\"true\"\r\n                          [(ngModel)]=\"selectedRecipientWarehouse\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">{{ componentData.componentId + \".shipmentFolder\" | translate }}</h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".folderNumber\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"selectedDfCode\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".shipmentType\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [options]=\"dfTypes\"\r\n                          [showClear]=\"true\"\r\n                          [(ngModel)]=\"selectedDfType\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" style=\"height: 47px;\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".critical\" | translate }} </label>\r\n\r\n                      <div class=\"form-control aw-selectbutton-wrapper\">\r\n                        <p-selectButton [options]=\"criticalities\" [(ngModel)]=\"selectedCriticality\"></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".status\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [options]=\"dfStatuses\"\r\n                          [showClear]=\"true\"\r\n                          [(ngModel)]=\"selectedStatus\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".expectedDate\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-calendar\r\n                          showButtonBar=\"true\"\r\n                          [monthNavigator]=\"true\"\r\n                          [yearNavigator]=\"true\"\r\n                          [yearRange]=\"sessionService.calendarYearRange\"\r\n                          class=\"aw-calendar\"\r\n                          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                          [locale]=\"sessionService.calendarFormat\"\r\n                          [(ngModel)]=\"selectedPlannedDate\"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".packageNumber\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"selectedPackageCode\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".pn\" | translate }}</label>\r\n\r\n                      <div class=\"form-control form-control-with-modal\">\r\n                        <div class=\"form-control-data\" (click)=\"openItemPnDialog()\">\r\n                          {{ selectedItemPn?.pnCode }}\r\n                        </div>\r\n\r\n                        <div *ngIf=\"selectedItemPn\" class=\"btn-clear-wrapper\">\r\n                          <i\r\n                            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"clearItemPn()\"\r\n                          ></i>\r\n                        </div>\r\n                        <div class=\"btn-search-wrapper\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"openItemPnDialog()\"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">{{ componentData.componentId + \".asset\" | translate }}</h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".pn\" | translate }}</label>\r\n\r\n                      <div class=\"form-control form-control-with-modal\">\r\n                        <div class=\"form-control-data\" (click)=\"openAssetPnDialog()\">\r\n                          {{ selectedAssetPn?.pnCode }}\r\n                        </div>\r\n\r\n                        <div *ngIf=\"selectedAssetPn\" class=\"btn-clear-wrapper\">\r\n                          <i\r\n                            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"clearAssetPn()\"\r\n                          ></i>\r\n                        </div>\r\n                        <div class=\"btn-search-wrapper\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"openAssetPnDialog()\"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".sn\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"selectedSn\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".packagingNumber\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"selectedBatchNumber\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group flex--3\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".designation\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"selectedDesignation\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div class=\"advanced-criteria\" [ngClass]=\"{ 'display--none': !advancedCriteriaVisible }\">\r\n                    <div class=\"section\">\r\n                      <h4 class=\"section-title\">{{ componentData.componentId + \".referenceDocument\" | translate }}</h4>\r\n\r\n                      <div class=\"section-content\">\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{ getComponentName() + \".documentType\" | translate }} </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <p-dropdown\r\n                                class=\"aw-dropdown fixed-width\"\r\n                                placeholder=\"&nbsp;\"\r\n                                [options]=\"documentTypes\"\r\n                                [showClear]=\"true\"\r\n                                [(ngModel)]=\"selectedDocumentType\"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ componentData.componentId + \".documentNumber\" | translate }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                class=\"aw-input\"\r\n                                type=\"text\"\r\n                                [disabled]=\"!selectedDocumentType\"\r\n                                [(ngModel)]=\"selectedDocumentCode\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group flex--2\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div class=\"row search-criteria-footer\">\r\n                    <button mat-button (click)=\"advancedCriteriaVisible = !advancedCriteriaVisible\">\r\n                      <ng-container *ngIf=\"advancedCriteriaVisible\">\r\n                        <mat-icon>remove</mat-icon>\r\n                        {{ \"global.collapseCriteria\" | translate }}\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"!advancedCriteriaVisible\">\r\n                        <mat-icon>add</mat-icon>\r\n                        {{ \"global.expandCriteria\" | translate }}\r\n                      </ng-container>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div class=\"row search-criteria-footer\">\r\n                    <div class=\"search-actions\">\r\n                      <button type=\"button\" mat-raised-button (click)=\"scan()\">\r\n                        {{ componentData.componentId + \".scan\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        appKeyPress\r\n                        mat-raised-button\r\n                        color=\"primary\"\r\n                        type=\"button\"\r\n                        [disabled]=\"!canSearch()\"\r\n                        [keyCode]=\"'Enter'\"\r\n                        (click)=\"search()\"\r\n                        (keyPress)=\"search()\"\r\n                      >\r\n                        {{ \"global.toSearch\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.results\" | translate }} ({{ dfTable ? dfTable.length : 0 }})</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                #ptableResult\r\n                class=\"aw-table2\"\r\n                [columns]=\"dfTableColumns\"\r\n                [resizableColumns]=\"true\"\r\n                [scrollable]=\"true\"\r\n                [value]=\"dfTable\"\r\n                [(selection)]=\"selectedDfs\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!dfTableLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"dfTableLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedDfs.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableResult.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        type=\"button\"\r\n                        (click)=\"deleteDf()\"\r\n                        *ngIf=\"selectedDfs.length > 0\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        mat-raised-button\r\n                        type=\"button\"\r\n                        (click)=\"openDf(selectedDfs[0]._obj)\"\r\n                        *ngIf=\"selectedDfs.length == 1\"\r\n                      >\r\n                        {{ \"open\" | translate }}\r\n                      </button>\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-icon-actions\">\r\n                      <i\r\n                        aria-hidden=\"true\"\r\n                        class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n                        [ngClass]=\"{\r\n                          'fa-th-list': dfTableViewMode == viewMode.COLLAPSE,\r\n                          'fa-list': dfTableViewMode == viewMode.EXPAND\r\n                        }\"\r\n                        (click)=\"toogleViewMode()\"\r\n                        *ngIf=\"dfTable.length > 0\"\r\n                        pTooltip=\"{{ 'GoodsReceiptSearchComponent.changedView' | translate }}\"\r\n                        tooltipPosition=\"top\"\r\n                      ></i>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <ng-container *ngSwitchCase=\"'receptionFile'\">\r\n                        <div class=\"bold\">\r\n                          <a (click)=\"openDf(rowData['_obj'])\">{{ rowData[\"code\"] }}</a>\r\n                        </div>\r\n\r\n                        <div class=\"italic\">\r\n                          {{ rowData[\"designation\"] | extractTranslation }}\r\n                        </div>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase=\"'referenceDocument'\">\r\n                        <div class=\"bold\">\r\n                          <a (click)=\"openDocument(rowData)\">{{ rowData[\"docCode\"] }}</a>\r\n                        </div>\r\n\r\n                        <div class=\"italic\">\r\n                          {{ rowData[\"docType\"] }}\r\n                        </div>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase=\"'sender'\">\r\n                        <div class=\"bold\">\r\n                          {{ rowData[\"shipperSiteName\"] }}\r\n                        </div>\r\n\r\n                        <div class=\"italic\">\r\n                          {{ rowData[\"shipperWarehouseName\"] }}\r\n                        </div>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase=\"'recipient'\">\r\n                        <div class=\"bold\">\r\n                          {{ rowData[\"recipientSiteName\"] }}\r\n                        </div>\r\n\r\n                        <div class=\"italic\">\r\n                          {{ rowData[\"recipientWarehouseName\"] }}\r\n                        </div>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase=\"'articles'\">\r\n                        <ng-container\r\n                          *ngIf=\"dfTableViewMode == viewMode.COLLAPSE && rowData['itemsNb'] > 1; else articleTemplate\"\r\n                        >\r\n                          {{ rowData[\"itemsNb\"] }} {{ \"items\" | translate }}\r\n                        </ng-container>\r\n                        <ng-template #articleTemplate>\r\n                          <div class=\"bold\">\r\n                            <a (click)=\"openArticle(rowData['itemPn'])\">{{ rowData[\"itemPn\"] }}</a>\r\n                          </div>\r\n\r\n                          <div class=\"italic\">\r\n                            {{ rowData[\"itemDesignation\"] }}\r\n                          </div>\r\n                        </ng-template>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase=\"'quantity'\">\r\n                        <span class=\"bold\">\r\n                          {{ rowData[\"quantity\"] }}\r\n                        </span>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase=\"'status'\">\r\n                        <div class=\"bold\">\r\n                          {{ rowData[\"status\"] | formatSelectOption: dfStatuses }}\r\n                        </div>\r\n\r\n                        <div>\r\n                          {{ rowData[\"statusDate\"] | date: appConstants.JS_DATE }}\r\n                        </div>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase=\"'expectedOn'\">\r\n                        <span class=\"bold\">\r\n                          {{ rowData[\"plannedDate\"] | date: appConstants.JS_DATE }}\r\n                        </span>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase=\"'situation'\">\r\n                        <span\r\n                          class=\"alert alert--nok\"\r\n                          *ngIf=\"rowData['criticality'] === awPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE\"\r\n                        >\r\n                          {{ componentData.componentId + \".immediate\" | translate }}\r\n                        </span>\r\n                        <span\r\n                          class=\"alert alert--warning\"\r\n                          *ngIf=\"rowData['criticality'] === awPropertiesConstants.LOGISTICAL_CRITICALITY_URGENT\"\r\n                        >\r\n                          {{ componentData.componentId + \".urgent\" | translate }}\r\n                        </span>\r\n                        <span\r\n                          class=\"alert alert--ok\"\r\n                          *ngIf=\"rowData['criticality'] === awPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE\"\r\n                        >\r\n                          {{ componentData.componentId + \".routine\" | translate }}\r\n                        </span>\r\n                      </ng-container>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <aw-dialog-create-shipment\r\n    [(display)]=\"createDialogVisible\"\r\n    (onValidate)=\"openDf($event)\"\r\n    [contextComponent]=\"getCurrentComponentContext\"\r\n    *ngIf=\"createDialogVisible\"\r\n  ></aw-dialog-create-shipment>\r\n</div>\r\n\r\n<!-- <aw-dialog-search-customer\r\n    *ngIf=\"showCustomerDialog\"\r\n    [(display)]=\"showCustomerDialog\"\r\n    [customer-code]=\"selectedPartnerCode\"\r\n    (onSelected)=\"onSelectedCustomer($event)\"\r\n  ></aw-dialog-search-customer> -->\r\n\r\n<!-- <div class=\"row\" *ngIf=\"selectedProvider === component.EXTERNAL_SENDER\">\r\n  <div class=\"form-group\">\r\n    <label class=\"form-label\">{{ componentData.componentId + \".partner\" | translate }}</label>\r\n\r\n    <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n      <div class=\"form-control-data\" (click)=\"openCustomerDialog()\">\r\n        {{ selectedPartner }}\r\n        <span *ngIf=\"selectedPartner\">({{ selectedPartner }})</span>\r\n      </div>\r\n\r\n      <div *ngIf=\"selectedPartnerCode\" class=\"btn-clear-wrapper\">\r\n        <i\r\n          class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"resetCustomerCode()\"\r\n        ></i>\r\n      </div>\r\n      <div class=\"btn-search-wrapper\">\r\n        <i\r\n          class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"openCustomerDialog()\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/search/shipment-folder-search.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/search/shipment-folder-search.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .alert {\n  display: inline-block;\n  max-width: 7rem;\n  text-transform: uppercase;\n  width: 100%;\n  font-weight: 600;\n  text-align: center;\n  width: 5rem; }\n  :host .alert.alert--ok {\n    background-color: #4caf50; }\n  :host .alert.alert--warning {\n    background-color: #ffc107; }\n  :host .alert.alert--nok {\n    background-color: #f6685e; }\n  :host .alert.alert--none {\n    background-color: #c8d4d6; }\n  :host .padding-class {\n  padding-left: 0.5em; }\n  :host .label-class {\n  padding-right: 0.5em;\n  display: inline-block;\n  width: 5.5em; }\n  :host .situation-label-class {\n  padding-right: 0.5em;\n  display: inline-block;\n  width: 7em; }\n  :host .custom-width {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content; }\n  :host .group-control {\n  display: flex; }\n  :host .group-control .form-sub-control {\n    flex-direction: column;\n    width: 100%; }\n  :host .group-control .form-sub-control > p-selectButton {\n      display: flex;\n      align-items: flex-end;\n      height: 2.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc2hpcG1lbnQtZm9sZGVyL3NlYXJjaC9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXHNoaXBtZW50LWZvbGRlclxcc2VhcmNoXFxzaGlwbWVudC1mb2xkZXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zaGlwbWVudC1mb2xkZXIvc2VhcmNoL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTtFQVJmO0lBV00seUJDUWdCLEVBQUE7RURuQnRCO0lBZU0seUJDS1UsRUFBQTtFRHBCaEI7SUFtQk0seUJDR2MsRUFBQTtFRHRCcEI7SUF1Qk0seUJDRVMsRUFBQTtFRHpCZjtFQTRCSSxtQkFBbUIsRUFBQTtFQTVCdkI7RUFnQ0ksb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7RUFsQ2hCO0VBc0NJLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsVUFBVSxFQUFBO0VBeENkO0VBNENJLDhCQUFzQjtFQUF0QiwyQkFBc0I7RUFBdEIsc0JBQXNCLEVBQUE7RUE1QzFCO0VBZ0RJLGFBQWEsRUFBQTtFQWhEakI7SUFrRE0sc0JBQXNCO0lBQ3RCLFdBQVcsRUFBQTtFQW5EakI7TUFxRFEsYUFBYTtNQUNiLHFCQUFxQjtNQUNyQixjQ0dvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc2hpcG1lbnQtZm9sZGVyL3NlYXJjaC9zaGlwbWVudC1mb2xkZXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5hbGVydCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDdyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW5vbmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFkZGluZy1jbGFzcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xyXG4gIH1cclxuXHJcbiAgLmxhYmVsLWNsYXNzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUuNWVtO1xyXG4gIH1cclxuXHJcbiAgLnNpdHVhdGlvbi1sYWJlbC1jbGFzcyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA3ZW07XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXdpZHRoIHtcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAuZ3JvdXAtY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmZvcm0tc3ViLWNvbnRyb2wge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgJiA+IHAtc2VsZWN0QnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBoZWlnaHQ6ICRmb3JtLWNvbnRyb2wtaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/search/shipment-folder-search.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/search/shipment-folder-search.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ComponentContext, ShipmentFolderSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentContext", function() { return ComponentContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentFolderSearchComponent", function() { return ShipmentFolderSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/utils/number-utils */ "./src/app/shared/utils/number-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};















var ComponentContext;
(function (ComponentContext) {
    ComponentContext[ComponentContext["LOCALE"] = 0] = "LOCALE";
    ComponentContext[ComponentContext["EXTERNAL"] = 1] = "EXTERNAL";
})(ComponentContext || (ComponentContext = {}));
var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["DOCUMENT_TYPE_SHIPPING_FOLDER"] = 0] = "DOCUMENT_TYPE_SHIPPING_FOLDER";
    DocumentType[DocumentType["DOCUMENT_TYPE_TRANSFER_ORDER"] = 1] = "DOCUMENT_TYPE_TRANSFER_ORDER";
})(DocumentType || (DocumentType = {}));
var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["COLLAPSE"] = 0] = "COLLAPSE";
    ViewMode[ViewMode["EXPAND"] = 1] = "EXPAND";
})(ViewMode || (ViewMode = {}));
var ShipmentFolderSearchComponent = /** @class */ (function (_super) {
    __extends(ShipmentFolderSearchComponent, _super);
    function ShipmentFolderSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, translateService, dfSearchService, logisticsService, propertiesService, extractTranslationPipe) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.dfSearchService = dfSearchService;
        _this.logisticsService = logisticsService;
        _this.propertiesService = propertiesService;
        _this.extractTranslationPipe = extractTranslationPipe;
        _this.appConstants = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"];
        _this.awPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"];
        _this.viewMode = ViewMode;
        _this.init();
        return _this;
    }
    ShipmentFolderSearchComponent.prototype.canSearch = function () {
        return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_13__["ObjectUtils"].isDefined(this.selectedShipperSite);
    };
    ShipmentFolderSearchComponent.prototype.clearAssetPn = function () {
        this.selectedAssetPn = undefined;
    };
    ShipmentFolderSearchComponent.prototype.clearItemPn = function () {
        this.selectedItemPn = undefined;
    };
    ShipmentFolderSearchComponent.prototype.create = function () {
        this.createDialogVisible = true;
    };
    ShipmentFolderSearchComponent.prototype.deleteDf = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.selectedDfs.map(function (df) {
            return _this.logisticsService.deleteDeliveryFolder({
                id: df._obj.id
            });
        })).subscribe({
            next: function () {
                _this.search();
            }
        });
    };
    ShipmentFolderSearchComponent.prototype.onChangeRecipientSite = function () {
        this.onChangeRecipientWarehouseCategory();
    };
    ShipmentFolderSearchComponent.prototype.onChangeRecipientWarehouseCategory = function () {
        var _this = this;
        this.unselectRecipientWarehouse();
        if (this.selectedRecipientSite) {
            this.loadWareHouses(this.selectedRecipientSite, this.selectedRecipientWarehouseCategory).subscribe({
                next: function (warehouses) {
                    _this.recipientWarehouses = warehouses;
                }
            });
        }
    };
    ShipmentFolderSearchComponent.prototype.onChangeShipperSite = function () {
        this.onChangeShipperWarehouseCategory();
    };
    ShipmentFolderSearchComponent.prototype.onChangeShipperWarehouseCategory = function () {
        var _this = this;
        this.unselectShipperWarehouse();
        if (this.selectedShipperSite) {
            this.loadWareHouses(this.selectedShipperSite, this.selectedShipperWarehouseCategory).subscribe({
                next: function (warehouses) {
                    _this.shipperWarehouses = warehouses;
                }
            });
        }
    };
    ShipmentFolderSearchComponent.prototype.onScanDf = function (dfCode) {
        var _this = this;
        this.logisticsService
            .findDeliveryFoldersByCriteria({ deliveryFolder: { dfCode: dfCode }, folderStatusExcluded: [] })
            .subscribe({
            next: function (dfs) {
                if (dfs.length === 1) {
                    var data = {
                        id: _this.tabService.generateId(),
                        componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_GOODS_SHIPMENT_FORM,
                        openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read,
                        objectId: _this.serializationService.serialize({ id: dfs[0].id })
                    };
                    var labelKey = 'transaction.' + data.componentId;
                    _this.tabService.open(_this.tabService.create(data, labelKey, true));
                }
                else {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnOpenDeliveryFolder'));
                }
            }
        });
    };
    ShipmentFolderSearchComponent.prototype.onSelectAssetPn = function (pn) {
        this.selectedAssetPn = pn;
    };
    ShipmentFolderSearchComponent.prototype.onSelectItemPn = function (pn) {
        this.selectedItemPn = pn;
    };
    ShipmentFolderSearchComponent.prototype.openArticle = function (pn) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_MATERIAL_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read,
            objectId: this.serializationService.serialize({ pnCode: pn })
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ShipmentFolderSearchComponent.prototype.openAssetPnDialog = function () {
        this.assetPnDialogVisible = true;
    };
    ShipmentFolderSearchComponent.prototype.openDf = function (df) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_GOODS_SHIPMENT_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read,
            objectId: this.serializationService.serialize({ id: df.id })
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ShipmentFolderSearchComponent.prototype.openItemPnDialog = function () {
        this.itemPnDialogVisible = true;
    };
    ShipmentFolderSearchComponent.prototype.openDocument = function (dfRow) {
        if (dfRow._obj.bidtTransferOrder) {
            // Transfer Order
            // TODO: add objectId
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_TRANSFER_ORDER_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
        else if (dfRow._obj.bidtDfItems &&
            dfRow._obj.bidtDfItems.length === 1 &&
            dfRow._obj.bidtDfItems[0].bidtDeliveryFolder) {
            // Delivery Folder
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_GOODS_SHIPMENT_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read,
                objectId: this.serializationService.serialize({ id: dfRow._obj.bidtDfItems[0].bidtDeliveryFolder })
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    ShipmentFolderSearchComponent.prototype.scan = function () {
        this.scanDialogVisible = true;
    };
    ShipmentFolderSearchComponent.prototype.search = function () {
        var _this = this;
        this.dfs = [];
        this.dfTableLoading = true;
        this.selectedDfs = [];
        var searchCriteria = {
            assetDesignation: this.selectedDesignation,
            assetPn: this.selectedAssetPn ? this.selectedAssetPn.pnCode : undefined,
            batchNumber: this.selectedBatchNumber,
            folderStatusExcluded: this.selectedStatus ? [] : [_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].SHIPMENT_FOLDER_STATUS_PERFORMED],
            itemPn: this.selectedItemPn ? this.selectedItemPn.pnCode : undefined,
            packageCode: this.selectedPackageCode,
            sn: this.selectedSn,
            shippingFolderCode: this.selectedDocumentType === DocumentType.DOCUMENT_TYPE_SHIPPING_FOLDER
                ? this.selectedDocumentCode
                : undefined,
            torCode: this.selectedDocumentType === DocumentType.DOCUMENT_TYPE_TRANSFER_ORDER ? this.selectedDocumentCode : undefined,
            deliveryFolder: {
                bidtDfTypeId: this.selectedDfType,
                bidtSiteByBidtSiteReceiverId: this.selectedRecipientSite,
                bidtSiteByBidtSiteSenderId: this.selectedShipperSite,
                bidtWarehouseByBidtWarehouseReceiverId: this.selectedRecipientWarehouse,
                bidtWarehouseByBidtWarehouseSenderId: this.selectedShipperWarehouse,
                criticality: this.selectedCriticality,
                dfCode: this.selectedDfCode,
                dfStatus: this.selectedStatus,
                plannedDate: this.selectedPlannedDate
                    ? moment__WEBPACK_IMPORTED_MODULE_1__(this.selectedPlannedDate)
                        .endOf('day')
                        .toDate()
                    : undefined
            },
            folderCategorie: this.selectedDfType ? undefined : _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].DELIVERY_CATEGORY_SHIPMENT,
            transferType: this.getCurrentComponentContext === ComponentContext.LOCALE
                ? [_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].MM_TRANSFER_TYPE_INTRA_SITE_KEY]
                : [_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].MM_TRANSFER_TYPE_INTER_SITE_KEY, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].MM_TRANSFER_TYPE_EXTERNAL_KEY]
        };
        this.logisticsService
            .findDeliveryFoldersByCriteria(searchCriteria)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.dfTableLoading = false;
        }))
            .subscribe({
            next: function (dfs) {
                _this.dfs = dfs;
                _this.createDfTable();
                _super.prototype.differ.call(_this, function () {
                    _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
                });
            }
        });
    };
    ShipmentFolderSearchComponent.prototype.toogleViewMode = function () {
        this.dfTableViewMode = this.dfTableViewMode === ViewMode.COLLAPSE ? ViewMode.EXPAND : ViewMode.COLLAPSE;
        this.createDfTable();
    };
    // ////////////////////////////////////////////////////////////////////////////
    ShipmentFolderSearchComponent.prototype.createDfTable = function () {
        var _this = this;
        if (this.dfTableViewMode === ViewMode.COLLAPSE) {
            this.dfTable = this.dfs.map(function (df) { return _this.createDfTableRowForCollapseView(df); });
        }
        else {
            this.dfTable = this.dfs
                .map(function (df) { return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].orEmpty(df.bidtDfItems).map(function (dfItem) { return _this.createDfTableRowForExpandView(df, dfItem); }); })
                .reduce(function (acc, curr) { return acc.concat(curr); }, []);
        }
    };
    ShipmentFolderSearchComponent.prototype.createDfTableRow = function (df) {
        var dfRow = {
            code: df.dfCode,
            criticality: df.criticality,
            designation: df.bidtDfType ? df.bidtDfType.dftDesignation : '',
            plannedDate: df.plannedDate,
            recipientSiteName: df.bidtSiteReceiver ? df.bidtSiteReceiver.siteName : '',
            recipientWarehouseName: df.bidtWarehouseReceiver ? df.bidtWarehouseReceiver.whName : '',
            shipperSiteName: df.bidtSiteSender ? df.bidtSiteSender.siteName : '',
            shipperWarehouseName: df.bidtWarehouseSender ? df.bidtWarehouseSender.whName : '',
            status: df.dfStatus,
            statusDate: df.statusDate,
            _obj: df
        };
        this.retrieveDocData(df, dfRow);
        return dfRow;
    };
    ShipmentFolderSearchComponent.prototype.createDfTableRowForCollapseView = function (df) {
        var items = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].orEmpty(df.bidtDfItems);
        var quantity = items
            .filter(function (item) { return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].isNullOrEmpty(item.quantity); })
            .map(function (item) { return _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_12__["NumberUtils"].fromString(item.quantity); })
            .reduce(function (a, b) { return a + b; }, 0);
        var itemDesignation;
        var itemPn;
        if (items.length === 1 && items[0] && items[0].birePn) {
            itemDesignation = items[0].birePn.articleDesignation;
            itemPn = items[0].birePn.pnCode;
        }
        return __assign({ itemDesignation: itemDesignation, itemPn: itemPn, quantity: quantity, itemsNb: items.length }, this.createDfTableRow(df));
    };
    ShipmentFolderSearchComponent.prototype.createDfTableRowForExpandView = function (df, dfItem) {
        var itemDesignation;
        var itemPn;
        var quantity = 0;
        if (dfItem && dfItem.birePn) {
            itemDesignation = dfItem.birePn.articleDesignation;
            itemPn = dfItem.birePn.pnCode;
            quantity = dfItem.quantity ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_12__["NumberUtils"].fromString(dfItem.quantity) : 0;
        }
        return __assign({ itemDesignation: itemDesignation, itemPn: itemPn, quantity: quantity }, this.createDfTableRow(df));
    };
    ShipmentFolderSearchComponent.prototype.formatSites = function (sites) {
        return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].orEmpty(sites)
            .map(function (site) {
            return {
                label: site.siteCode + " - " + site.siteName,
                value: site.siteId
            };
        })
            .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
    };
    ShipmentFolderSearchComponent.prototype.init = function () {
        var _this = this;
        this.criticalities = [];
        this.dfs = [];
        this.dfStatuses = [];
        this.dfTypes = [];
        this.documentTypes = [];
        this.recipientSites = [];
        this.recipientWarehouses = [];
        this.shipperSites = [];
        this.shipperWarehouses = [];
        this.warehouseCategories = [];
        this.selectedAssetPn = undefined;
        this.selectedBatchNumber = undefined;
        this.selectedCriticality = undefined;
        this.selectedDesignation = undefined;
        this.selectedDfCode = undefined;
        this.selectedDfType = undefined;
        this.selectedDocumentCode = undefined;
        this.selectedDocumentType = undefined;
        this.selectedItemPn = undefined;
        this.selectedPackageCode = undefined;
        this.selectedPlannedDate = undefined;
        this.selectedRecipientSite = undefined;
        this.selectedRecipientWarehouse = undefined;
        this.selectedRecipientWarehouseCategory = undefined;
        this.selectedShipperSite = undefined;
        this.selectedShipperWarehouse = undefined;
        this.selectedShipperWarehouseCategory = undefined;
        this.selectedSn = undefined;
        this.selectedStatus = undefined;
        this.dfTable = [];
        this.dfTableLoading = false;
        this.dfTableViewMode = ViewMode.COLLAPSE;
        this.selectedDfs = [];
        this.advancedCriteriaVisible = false;
        this.assetPnDialogVisible = false;
        this.createDialogVisible = false;
        this.itemPnDialogVisible = false;
        this.scanDialogVisible = false;
        this.sessionService.getUserSiteId().subscribe({
            next: function (site) {
                _this.selectedShipperSite = site ? site.siteId : undefined;
            }
        });
        this.sessionService.getUserWarehouseId().subscribe({
            next: function (warehouse) {
                _this.selectedRecipientWarehouseCategory = warehouse ? warehouse.whCategory : undefined;
                _this.loadWareHouses(_this.selectedShipperSite, _this.selectedShipperWarehouseCategory).subscribe({
                    next: function (warehouses) {
                        _this.shipperWarehouses = warehouses;
                        if (warehouse && warehouse.wareHouseId) {
                            _this.selectedShipperWarehouse = warehouse ? warehouse.wareHouseId : undefined;
                        }
                    }
                });
            }
        });
        this.loadCriticalities();
        this.loadDfStatuses();
        this.loadDfTypes();
        this.loadDocumentTypes();
        this.loadRecipientSites();
        this.loadShipperSites();
        this.loadWarehouseCategories();
        this.setDfTableColumns();
    };
    ShipmentFolderSearchComponent.prototype.loadCriticalities = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].LOGISTICAL_CRITICALITY_MAP).subscribe({
            next: function (criticalities) {
                _this.criticalities = __spread([
                    {
                        label: _this.translateService.instant(_this.getTranslateKey('all')),
                        value: undefined
                    }
                ], criticalities.map(function (criticality) {
                    return {
                        label: criticality.label,
                        value: criticality.value
                    };
                }));
            }
        });
    };
    ShipmentFolderSearchComponent.prototype.loadDfStatuses = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].SHIPMENT_FOLDER_STATUS_MAP).subscribe({
            next: function (dfStatuses) {
                _this.dfStatuses = dfStatuses;
            }
        });
    };
    ShipmentFolderSearchComponent.prototype.loadDfTypes = function () {
        var _this = this;
        if (this.getCurrentComponentContext === ComponentContext.LOCALE) {
            this.logisticsService.findShipmentDfTypes().subscribe({
                next: function (dfTypes) {
                    _this.dfTypes = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].orEmpty(dfTypes)
                        .filter(function (dfType) { return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].isNullOrEmpty(dfType.dftDesignation); })
                        .filter(function (dfType) { return dfType.transferType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].MM_TRANSFER_TYPE_INTRA_SITE_KEY; })
                        .map(function (dfType) {
                        return {
                            label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].orEmpty(_this.extractTranslationPipe.transform(dfType.dftDesignation)),
                            value: dfType.id
                        };
                    })
                        .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
                    _this.selectedDfType = _this.dfTypes.length === 1 ? _this.dfTypes[0].value : undefined;
                }
            });
        }
        else if (this.getCurrentComponentContext === ComponentContext.EXTERNAL) {
            this.logisticsService.findShipmentDfTypes().subscribe({
                next: function (dfTypes) {
                    _this.dfTypes = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].orEmpty(dfTypes)
                        .filter(function (dfType) { return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].isNullOrEmpty(dfType.dftDesignation); })
                        .filter(function (dfType) {
                        return dfType.transferType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].MM_TRANSFER_TYPE_INTER_SITE_KEY ||
                            dfType.transferType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].MM_TRANSFER_TYPE_EXTERNAL_KEY;
                    })
                        .map(function (dfType) {
                        return {
                            label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].orEmpty(_this.extractTranslationPipe.transform(dfType.dftDesignation)),
                            value: dfType.id
                        };
                    })
                        .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
                    _this.selectedDfType = _this.dfTypes.length === 1 ? _this.dfTypes[0].value : undefined;
                }
            });
        }
    };
    ShipmentFolderSearchComponent.prototype.loadDocumentTypes = function () {
        this.documentTypes = [
            {
                label: this.translateService.instant('transferOrder'),
                value: DocumentType.DOCUMENT_TYPE_TRANSFER_ORDER
            }
        ];
    };
    ShipmentFolderSearchComponent.prototype.loadRecipientSites = function () {
        var _this = this;
        this.dfSearchService.findAllBireSite().subscribe({
            next: function (sites) {
                _this.recipientSites = _this.formatSites(sites);
            }
        });
    };
    ShipmentFolderSearchComponent.prototype.loadShipperSites = function () {
        var _this = this;
        this.dfSearchService.findAllSiteList().subscribe({
            next: function (sites) {
                _this.shipperSites = _this.formatSites(sites);
            }
        });
    };
    ShipmentFolderSearchComponent.prototype.loadWarehouseCategories = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].WAREHOUSE_CATEGORY_MAP).subscribe({
            next: function (warehouseCategories) {
                _this.warehouseCategories = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].orEmpty(warehouseCategories).sort(function (s1, s2) {
                    return s1.value.localeCompare(s2.value);
                });
                var warehouseCategory = _this.warehouseCategories.length > 0 ? _this.warehouseCategories[0].value : undefined;
                _this.selectedRecipientWarehouseCategory = warehouseCategory;
                _this.selectedShipperWarehouseCategory = warehouseCategory;
            }
        });
    };
    ShipmentFolderSearchComponent.prototype.loadWareHouses = function (site, warehouseCategory) {
        return this.dfSearchService.getWarehousesBySiteId(site).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (warehouses) {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].orEmpty(warehouses)
                .filter(function (warehouse) { return warehouse.whCategory === warehouseCategory; })
                .map(function (warehouse) {
                return {
                    label: warehouse.whCode + " - " + warehouse.whName,
                    value: warehouse.wareHouseId
                };
            })
                .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
        }));
    };
    ShipmentFolderSearchComponent.prototype.retrieveDocData = function (df, dfRow) {
        if (df.bidtTransferOrder) {
            dfRow.docCode = df.bidtTransferOrder.torCode;
            dfRow.docType = df.bidtTransferOrder.torType;
        }
        else if (df.bidtDfItems && df.bidtDfItems.length === 1 && df.bidtDfItems[0].bidtDeliveryFolder) {
            this.logisticsService
                .findReceiptFolderWithAllObjectsById({ id: Number(df.bidtDfItems[0].bidtDeliveryFolder) })
                .subscribe({
                next: function (linkedDf) {
                    dfRow.docCode = linkedDf.dfCode;
                    dfRow.docType = linkedDf.bidtDfType ? linkedDf.bidtDfType.dftDesignation : '';
                }
            });
        }
    };
    ShipmentFolderSearchComponent.prototype.setDfTableColumns = function () {
        this.dfTableColumns = [
            { field: 'receptionFile', alignment: 'left', width: '12.5%' },
            { field: 'referenceDocument', alignment: 'left', width: '12.5%' },
            { field: 'sender', alignment: 'left', width: '12.5%' },
            { field: 'recipient', alignment: 'left', width: '12.5%' },
            { field: 'articles', alignment: 'left', width: '20%' },
            { field: 'quantity', alignment: 'left', width: '7.5%' },
            { field: 'status', alignment: 'left', width: '7.5%' },
            { field: 'expectedOn', alignment: 'left', width: '7.5%' },
            { field: 'situation', alignment: 'left', width: '7.5%' }
        ];
    };
    ShipmentFolderSearchComponent.prototype.unselectRecipientWarehouse = function () {
        this.recipientWarehouses = [];
        this.selectedRecipientWarehouse = undefined;
    };
    ShipmentFolderSearchComponent.prototype.unselectShipperWarehouse = function () {
        this.shipperWarehouses = [];
        this.selectedShipperWarehouse = undefined;
    };
    ShipmentFolderSearchComponent.prototype.isCreateButtonnIsVisible = function () {
        return this.sessionService.hasUserRightByUseCase(_shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__["BidoFunctionTypeConstants"].UC_MM_RECEIVING, _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__["BidoFunctionTypeConstants"].DEGREE_MANAGE);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resultsContainerAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ShipmentFolderSearchComponent.prototype, "resultsContainerAnchor", void 0);
    return ShipmentFolderSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/shipment-folder/shipment-folder.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/logistics/shipment-folder/shipment-folder.module.ts ***!
  \**************************************************************************/
/*! exports provided: ShipmentFolderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentFolderModule", function() { return ShipmentFolderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts");
/* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/dialog-search-customer/dialog-search-customer.module */ "./src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts");
/* harmony import */ var _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/dialog-search-equipment/dialog-search-equipment.module */ "./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.module.ts");
/* harmony import */ var _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/dialog-search-pn/dialog-search-pn.module */ "./src/app/shared/components/dialog-search-pn/dialog-search-pn.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _administration_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../administration/catalog/catalog.service */ "./src/app/main/administration/catalog/catalog.service.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../goods-receipt/delivery-folder-search.service */ "./src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts");
/* harmony import */ var _goods_receipt_form_goods_receipt_form_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../goods-receipt/form/goods-receipt-form.service */ "./src/app/main/logistics/goods-receipt/form/goods-receipt-form.service.ts");
/* harmony import */ var _stock_movements_search_search_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../stock-movements/search/search.service */ "./src/app/main/logistics/stock-movements/search/search.service.ts");
/* harmony import */ var _form_dialog_assign_package_dialog_assign_package_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./form/dialog-assign-package/dialog-assign-package.component */ "./src/app/main/logistics/shipment-folder/form/dialog-assign-package/dialog-assign-package.component.ts");
/* harmony import */ var _form_dialog_validate_package_dialog_validate_package_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./form/dialog-validate-package/dialog-validate-package.component */ "./src/app/main/logistics/shipment-folder/form/dialog-validate-package/dialog-validate-package.component.ts");
/* harmony import */ var _form_material_shipment_material_shipment_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./form/material-shipment/material-shipment-form.component */ "./src/app/main/logistics/shipment-folder/form/material-shipment/material-shipment-form.component.ts");
/* harmony import */ var _form_shipment_folder_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./form/shipment-folder-form.component */ "./src/app/main/logistics/shipment-folder/form/shipment-folder-form.component.ts");
/* harmony import */ var _search_dialog_create_shipment_dialog_create_shipment_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./search/dialog-create-shipment/dialog-create-shipment.component */ "./src/app/main/logistics/shipment-folder/search/dialog-create-shipment/dialog-create-shipment.component.ts");
/* harmony import */ var _search_external_shipment_search_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./search/external-shipment-search.component */ "./src/app/main/logistics/shipment-folder/search/external-shipment-search.component.ts");
/* harmony import */ var _search_local_shipment_search_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./search/local-shipment-search.component */ "./src/app/main/logistics/shipment-folder/search/local-shipment-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};































/******************************************************************************
 * Modules
 *************************************************************************** */
var EXTERNAL_MODULES = [
    primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
    primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
    _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_18__["TableModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__["SelectButtonModule"],
    primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
    primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["OverlayPanelModule"],
    primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__["ProgressBarModule"],
    primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["InputTextareaModule"],
    _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_12__["ComponentSidebarModule"],
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__["ModalModule"],
    _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_13__["DialogSearchCustomerModule"]
];
var INTERNAL_MODULES = [_shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_15__["DialogSearchPnModule"], _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_14__["DialogSearchEquipmentModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [
    _search_external_shipment_search_component__WEBPACK_IMPORTED_MODULE_29__["ExternalShipmentSearchComponent"],
    _search_local_shipment_search_component__WEBPACK_IMPORTED_MODULE_30__["LocalShipmentSearchComponent"],
    _search_dialog_create_shipment_dialog_create_shipment_component__WEBPACK_IMPORTED_MODULE_28__["DialogCreateShipmentComponent"],
    _form_shipment_folder_form_component__WEBPACK_IMPORTED_MODULE_27__["ShipmentFolderFormComponent"],
    _form_material_shipment_material_shipment_form_component__WEBPACK_IMPORTED_MODULE_26__["MaterialShipmentFormComponent"],
    _form_dialog_assign_package_dialog_assign_package_component__WEBPACK_IMPORTED_MODULE_24__["DialogAssignPackageComponent"],
    _form_dialog_validate_package_dialog_validate_package_component__WEBPACK_IMPORTED_MODULE_25__["DialogValidatePackageComponent"]
];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_goods_receipt_form_goods_receipt_form_service__WEBPACK_IMPORTED_MODULE_22__["GoodsReceiptFormService"], _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_21__["DeliveryFolderSearchService"], _administration_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_19__["CatalogService"], _stock_movements_search_search_service__WEBPACK_IMPORTED_MODULE_23__["SearchService"]];
var ShipmentFolderModule = /** @class */ (function () {
    function ShipmentFolderModule() {
    }
    ShipmentFolderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__["AppCommonSharedModule"],
                _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_16__["ManageSearchCriteriaModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_20__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], ShipmentFolderModule);
    return ShipmentFolderModule;
}());



/***/ }),

/***/ "./src/app/main/overlay/overlay.service.ts":
/*!*************************************************!*\
  !*** ./src/app/main/overlay/overlay.service.ts ***!
  \*************************************************/
/*! exports provided: OverlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayService", function() { return OverlayService; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _overlay_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay-ref */ "./src/app/main/overlay/overlay-ref.ts");
/* harmony import */ var _overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.component */ "./src/app/main/overlay/overlay.component.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OverlayService = /** @class */ (function () {
    function OverlayService(_injector, _overlay) {
        this._injector = _injector;
        this._overlay = _overlay;
    }
    // //////////////////////////////////////////////////////////////////////////
    OverlayService.prototype.openWithPositionAbsolute = function (params) {
        return this.open(params, this.getConfig(params, this.getPositionAbsolute(params)));
    };
    OverlayService.prototype.openWithPositionCenter = function (params) {
        return this.open(params, this.getConfig(__assign({}, params, { hasVisibleBackdrop: params.hasVisibleBackdrop !== undefined ? params.hasVisibleBackdrop : true }), this.getPositionCenter()));
    };
    OverlayService.prototype.openWithPositionRelative = function (params) {
        return this.open(params, this.getConfig(params, this.getPositionRelative(params)));
    };
    // //////////////////////////////////////////////////////////////////////////
    OverlayService.prototype.createInjector = function (overlayRef, injector) {
        var tokens = new WeakMap([[_overlay_ref__WEBPACK_IMPORTED_MODULE_3__["OverlayRef"], overlayRef]]);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](injector, tokens);
    };
    OverlayService.prototype.getConfig = function (params, positionStrategy) {
        var hasBackdrop = params.hasBackdrop !== undefined ? params.hasBackdrop : true;
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            hasBackdrop: hasBackdrop,
            positionStrategy: positionStrategy,
            backdropClass: hasBackdrop && params.hasVisibleBackdrop ? 'cdk-overlay-dark-backdrop' : '',
            height: params.height,
            scrollStrategy: this._overlay.scrollStrategies.reposition(),
            width: params.width
        });
    };
    OverlayService.prototype.getPositionAbsolute = function (params) {
        var positionStrategy = this._overlay
            .position()
            .global()
            .bottom(params.positions.bottom)
            .left(params.positions.left)
            .right(params.positions.right)
            .top(params.positions.top);
        return positionStrategy;
    };
    OverlayService.prototype.getPositionCenter = function () {
        var positionStrategy = this._overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        return positionStrategy;
    };
    OverlayService.prototype.getPositionRelative = function (params) {
        var positionStrategy = this._overlay
            .position()
            .flexibleConnectedTo(params.origin)
            .withPositions(params.positions || [])
            .withFlexibleDimensions(false)
            .withPush(false);
        return positionStrategy;
    };
    OverlayService.prototype.open = function (params, overlayConfig) {
        var cdkOverlayRef = this._overlay.create(overlayConfig);
        var overlayRef = new _overlay_ref__WEBPACK_IMPORTED_MODULE_3__["OverlayRef"](cdkOverlayRef, params.content, params.data);
        var injector = this.createInjector(overlayRef, this._injector);
        cdkOverlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](_overlay_component__WEBPACK_IMPORTED_MODULE_4__["OverlayComponent"], undefined, injector));
        return overlayRef;
    };
    OverlayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]])
    ], OverlayService);
    return OverlayService;
}());



/***/ })

}]);
//# sourceMappingURL=logistics-shipment-folder-shipment-folder-module.js.map