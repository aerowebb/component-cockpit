(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~maintenance-asset-review-asset-review-module~maintenance-maintenance-module~maintenance-work~2188dff0"],{

/***/ "./src/app/main/maintenance/asset-review/form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column\">\r\n<div class=\"row\">\r\n  <p-table [resizableColumns]=\"true\" #ptable class=\"aw-table2\" [columns]=\"tableCols\" [value]=\"table\" [scrollable]=\"true\">\r\n    <ng-template pTemplate=\"emptymessage\">\r\n      <span *ngIf=\"!remainingTableLoading\"> &nbsp;</span>\r\n\r\n      <div *ngIf=\"remainingTableLoading\" class=\"aw-table-loading-indicator\">\r\n        <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n        <div class=\"lds-hourglass\"></div>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"colgroup\" let-columns>\r\n      <colgroup>\r\n        <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n      </colgroup>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr>\r\n        <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n          {{ getComponentName() + \".\" + col.field | translate }}\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n      <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n        <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n          <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/asset-review/form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: AirworthinessTableRemainingValuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirworthinessTableRemainingValuesComponent", function() { return AirworthinessTableRemainingValuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/constants/control-config-constants */ "./src/app/shared/constants/control-config-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/types/generic-component */ "./src/app/shared/types/generic-component.ts");
/* harmony import */ var _asset_review_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../asset-review-form.service */ "./src/app/main/maintenance/asset-review/form/asset-review-form.service.ts");
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






var AirworthinessTableRemainingValuesComponent = /** @class */ (function (_super) {
    __extends(AirworthinessTableRemainingValuesComponent, _super);
    function AirworthinessTableRemainingValuesComponent(assetReviewFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write) || this;
        _this.assetReviewFormService = assetReviewFormService;
        _this.controlConfigConstants = _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_2__["ControlConfigConstants"];
        _this.registerPotentialUnitObservable();
        _this.init();
        return _this;
    }
    Object.defineProperty(AirworthinessTableRemainingValuesComponent.prototype, "row", {
        get: function () {
            return this._row;
        },
        // tslint:disable-next-line:no-any
        set: function (value) {
            this._row = value;
            this.remainingTableLoading = true;
            if (!!this._row) {
                this.load();
            }
        },
        enumerable: true,
        configurable: true
    });
    AirworthinessTableRemainingValuesComponent.prototype.getComponentName = function () {
        return 'AssetReviewTableRemainingValuesComponent';
    };
    AirworthinessTableRemainingValuesComponent.prototype.ngOnInit = function () {
        this.setRemainingTableColumnList();
    };
    AirworthinessTableRemainingValuesComponent.prototype.init = function () {
        this.remainingTableLoading = true;
    };
    AirworthinessTableRemainingValuesComponent.prototype.load = function () {
        this.table = this.remainingTable;
        this.remainingTableLoading = false;
    };
    AirworthinessTableRemainingValuesComponent.prototype.registerPotentialUnitObservable = function () {
        var _this = this;
        this.assetReviewFormService.potentialUnit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe)).subscribe(function () {
            _this.load();
        });
    };
    AirworthinessTableRemainingValuesComponent.prototype.setRemainingTableColumnList = function () {
        this.tableCols = this.remainingTableCols;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AirworthinessTableRemainingValuesComponent.prototype, "remainingTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AirworthinessTableRemainingValuesComponent.prototype, "remainingTableCols", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AirworthinessTableRemainingValuesComponent.prototype, "row", null);
    AirworthinessTableRemainingValuesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-airworthiness-table-remaining-values',
            template: __webpack_require__(/*! ./airworthiness-table-remaining-values.component.html */ "./src/app/main/maintenance/asset-review/form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.html")
        }),
        __metadata("design:paramtypes", [_asset_review_form_service__WEBPACK_IMPORTED_MODULE_5__["AssetReviewFormService"]])
    ], AirworthinessTableRemainingValuesComponent);
    return AirworthinessTableRemainingValuesComponent;
}(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_4__["GenericComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/asset-review/form/asset-review-form.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main/maintenance/asset-review/form/asset-review-form.service.ts ***!
  \*********************************************************************************/
/*! exports provided: AssetReviewFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetReviewFormService", function() { return AssetReviewFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/airworthiness-management.api */ "./src/app/shared/api/airworthiness-management.api.ts");
/* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/am-project-management.api */ "./src/app/shared/api/am-project-management.api.ts");
/* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/fleet-business.api */ "./src/app/shared/api/fleet-business.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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









var AssetReviewFormService = /** @class */ (function (_super) {
    __extends(AssetReviewFormService, _super);
    function AssetReviewFormService(http, appConfigService, airworthinessManagementApi, amProjectManagementApi, fleetManagementApi, fleetBusinessApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.airworthinessManagementApi = airworthinessManagementApi;
        _this.amProjectManagementApi = amProjectManagementApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this.fleetBusinessApi = fleetBusinessApi;
        _this.potentialUnitSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this._potentialUnit$ = _this.potentialUnitSource.asObservable();
        return _this;
    }
    Object.defineProperty(AssetReviewFormService.prototype, "potentialUnit$", {
        get: function () {
            return this._potentialUnit$;
        },
        enumerable: true,
        configurable: true
    });
    /**************************************************************************
     * Airworthiness management api
     *************************************************************************/
    AssetReviewFormService.prototype.computeRemainingForAd = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.computeRemainingForAd, input);
    };
    AssetReviewFormService.prototype.computeRemainingForDefect = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.computeRemainingForDefect, input);
    };
    AssetReviewFormService.prototype.computeRemainingForDocument = function (equipmentCode) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.computeRemainingForDocument, equipmentCode);
    };
    AssetReviewFormService.prototype.computeRemainingForLlp = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.computeRemainingForLlp, input);
    };
    AssetReviewFormService.prototype.computeRemainingForTask = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.computeRemainingForTask, input);
    };
    AssetReviewFormService.prototype.checkEquipmentForAirworthinessControl = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.checkEquipmentForAirworthinessControl, input);
    };
    AssetReviewFormService.prototype.computePotentialForAirworthinessControlInput = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.computePotentialForAirworthinessControlInput, input);
    };
    AssetReviewFormService.prototype.generateAirworthinessControlTable = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.generateAirworthinessControlTable, input);
    };
    AssetReviewFormService.prototype.getCsnLabelForAirworthinessControl = function () {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.getCsnLabelForAirworthinessControl);
    };
    AssetReviewFormService.prototype.getTsnLabelForAirworthinessControl = function () {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.getTsnLabelForAirworthinessControl);
    };
    AssetReviewFormService.prototype.getPotentialEquivalentValues = function (topEquipmentCode) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.getPotentialEquivalentValues, topEquipmentCode);
    };
    AssetReviewFormService.prototype.getWorkPackageList = function (equipmentCode) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.getWorkPackageList, equipmentCode);
    };
    AssetReviewFormService.prototype.createAcrsEvent = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.createAcrsEvent, input);
    };
    AssetReviewFormService.prototype.getAssetFlightList = function (equipmentCode) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.getAssetFlightList, equipmentCode);
    };
    AssetReviewFormService.prototype.getPostponedWorkOrderList = function (equipmentCode) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.getAssetPostponedWorkOrderList, equipmentCode);
    };
    AssetReviewFormService.prototype.getAssetUpcomingEventsPotentialUnit = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.getAssetUpcomingEventsPotentialUnit, input);
    };
    AssetReviewFormService.prototype.getAssetAirworthinessDocuments = function (equipmentCode) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.getAssetAirworthinessDocuments, equipmentCode);
    };
    AssetReviewFormService.prototype.getAssetReviewTabsData = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.getAssetReviewTabsData, input);
    };
    AssetReviewFormService.prototype.findWorkOrderOriginDetails = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.findWorkOrderOriginDetails, input);
    };
    /**************************************************************************
     * Am project management api
     *************************************************************************/
    AssetReviewFormService.prototype.findBidmProject = function (projectId) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.findBidmProject, projectId);
    };
    /**************************************************************************
     * Fleet management api
     *************************************************************************/
    AssetReviewFormService.prototype.getEquipment = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, input);
    };
    AssetReviewFormService.prototype.findBidoNotification = function (notificationId) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoNotification, notificationId);
    };
    AssetReviewFormService.prototype.findBidoNotificationList = function (id) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoNotificationList, id);
    };
    AssetReviewFormService.prototype.findAllBidoMissionEquipmentByCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoMissionEquipmentLwoByCriteria, criteria);
    };
    /**************************************************************************
     * Fleet business api
     *************************************************************************/
    AssetReviewFormService.prototype.controlConfiguration = function (input) {
        return _super.prototype.post.call(this, this.fleetBusinessApi.controlConfiguration, input);
    };
    AssetReviewFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__["AppConfigService"],
            _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_3__["AirworthinessManagementApi"],
            _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_4__["AMProjectManagementApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__["FleetManagementApi"],
            _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_5__["FleetBusinessApi"]])
    ], AssetReviewFormService);
    return AssetReviewFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/components/defect-list/defect-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/defect-list/defect-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-cell-header\">\r\n  <div class=\"grid-cell-title-container\">\r\n    <h3 class=\"grid-cell-title\">\r\n      {{ getComponentName() + \".defects\" | translate }} ({{ defectsTable ? defectsTable.length : 0 }})\r\n    </h3>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"grid-cell-content\">\r\n  <div *ngIf=\"!isDefectTableLoading && _equipmentCode\" class=\"table-summary-wrapper\" style=\"width: 25%\">\r\n    <p-table\r\n      id=\"defectTableSummary\"\r\n      [resizableColumns]=\"true\"\r\n      class=\"table-control-summary\"\r\n      [columns]=\"defectSummaryTableCols\"\r\n      [value]=\"defectTableSummary\"\r\n    >\r\n      <ng-template pTemplate=\"colgroup\" let-columns>\r\n        <colgroup>\r\n          <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th\r\n            pResizableColumn\r\n            *ngFor=\"let col of columns\"\r\n            [ngSwitch]=\"col.field\"\r\n            [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n          >\r\n            <span *ngSwitchDefault> {{ getComponentName() + \".\" + col.field | translate }} </span>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"body\" let-columns=\"columns\" let-rowData>\r\n        <tr>\r\n          <td\r\n            *ngFor=\"let col of columns\"\r\n            [ngSwitch]=\"col.field\"\r\n            [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n            style=\"padding-right: 1%; width: 60%\"\r\n          >\r\n            <span *ngSwitchCase=\"'nok'\" [ngClass]=\"{ nok: rowData['nok'] > 0 }\">\r\n              {{ rowData[col.field] }}\r\n            </span>\r\n\r\n            <span *ngSwitchCase=\"'warning'\" [ngClass]=\"{ warning: rowData['nok'] == 0 && rowData['warning'] > 0 }\">\r\n              {{ rowData[col.field] }}\r\n            </span>\r\n\r\n            <span\r\n              *ngSwitchCase=\"'ok'\"\r\n              [ngClass]=\"{ ok: rowData['nok'] == 0 && rowData['warning'] == 0 && rowData['ok'] >= 0 }\"\r\n            >\r\n              {{ rowData[col.field] }}\r\n            </span>\r\n\r\n            <span *ngSwitchDefault>\r\n              <span>{{ rowData[col.field] }}</span>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n\r\n  <div class=\"table-wrapper\">\r\n    <p-table\r\n      id=\"defectsTableForDisplay\"\r\n      [resizableColumns]=\"true\"\r\n      #ptableDefects\r\n      class=\"aw-table2\"\r\n      [columns]=\"defectsTableCols\"\r\n      [value]=\"defectsTableForDisplay\"\r\n      [(selection)]=\"selectedDefects\"\r\n      [scrollable]=\"true\"\r\n      dataKey=\"rowId\"\r\n    >\r\n      <ng-template pTemplate=\"emptymessage\">\r\n        <span *ngIf=\"!isDefectTableLoading\"> &nbsp;</span>\r\n\r\n        <div *ngIf=\"isDefectTableLoading\" class=\"aw-table-loading-indicator\">\r\n          <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n          <div class=\"lds-hourglass\"></div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"caption\">\r\n        <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedDefects.length > 0 }\">\r\n          <div class=\"aw-table-global-filter\">\r\n            <label class=\"aw-table-global-filter-label\">\r\n              <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n            </label>\r\n\r\n            <input\r\n              #ptableGlobalFilter\r\n              class=\"aw-table-global-filter-input\"\r\n              type=\"text\"\r\n              placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n              (input)=\"ptableDefects.filterGlobal($event.target.value, 'contains')\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"aw-table-actions\">\r\n            <p-selectButton\r\n              *ngIf=\"selectedDefects.length === 0\"\r\n              class=\"aw-table-btn\"\r\n              [(ngModel)]=\"selectedFilterAlert\"\r\n              [options]=\"filterAlertList\"\r\n              (onChange)=\"onChangeFilterAlert($event)\"\r\n            ></p-selectButton>\r\n\r\n            <button\r\n              id=\"addToAcrsEventDefectsTableForDisplay\"\r\n              *ngIf=\"selectedDefects.length > 0 && acrsEventCodeList.length > 0 && enableDefectACRSButton()\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              (click)=\"addToAcrsEvent()\"\r\n            >\r\n              {{ getComponentName() + \".addToAcrsEvent\" | translate }}\r\n            </button>\r\n\r\n            <button\r\n              id=\"addDefectsTableForDisplay\"\r\n              *ngIf=\"!statusState && selectedDefects.length === 0 && isAddAvailable\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              (click)=\"addDefect()\"\r\n            >\r\n              {{ \"global.add\" | translate }}\r\n            </button>\r\n\r\n            <button\r\n              id=\"deleteDefectsTableForDisplay\"\r\n              *ngIf=\"!statusState && selectedDefects.length > 0\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              color=\"warn\"\r\n              (click)=\"deleteDfects()\"\r\n            >\r\n              {{ \"global.delete\" | translate }}\r\n            </button>\r\n\r\n            <button\r\n              id=\"closeDefectsTableForDisplay\"\r\n              *ngIf=\"selectedDefects.length === 1 && !_workDataDefect\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              (click)=\"closeDefect()\"\r\n            >\r\n              {{ \"global.close\" | translate }}\r\n            </button>\r\n\r\n            <button\r\n              id=\"refreshDefectsTableForDisplay\"\r\n              *ngIf=\"selectedDefects.length === 0\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              (click)=\"refreshDefectList()\"\r\n            >\r\n              {{ \"global.refresh\" | translate }}\r\n            </button>\r\n\r\n            <button\r\n              id=\"exportDefectsTableForDisplay\"\r\n              *ngIf=\"selectedDefects.length === 0\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              (click)=\"exportDefects()\"\r\n            >\r\n              {{ \"global.export\" | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"colgroup\" let-columns>\r\n        <colgroup>\r\n          <col class=\"aw-table-checkbox-wrapper\" />\r\n          <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n          <col class=\"row-expand-wrapper\" />\r\n          <col class=\"row-action-wrapper\" />\r\n        </colgroup>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th class=\"aw-table-checkbox-wrapper\">\r\n            <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n          </th>\r\n\r\n          <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n            {{ getComponentName() + \".\" + col.field | translate }}\r\n          </th>\r\n\r\n          <th class=\"row-expand-wrapper\"></th>\r\n          <th class=\"row-action-wrapper\"></th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n        <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n          <td class=\"aw-table-checkbox-wrapper\">\r\n            <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n          </td>\r\n\r\n          <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n            <span *ngSwitchCase=\"'control'\">\r\n              <span *ngIf=\"rowData.controlResultIcon === '9'\" class=\"airworthiness-alert airworthiness-alert--ok\"\r\n                ><span\r\n                  *ngIf=\"rowData.controlResultAlt !== null && rowData.controlResultAlt !== undefined\"\r\n                  title=\"{{ rowData.controlResultAlt }}\"\r\n                  >{{ rowData[col.field] }}</span\r\n                ><span *ngIf=\"rowData.controlResultAlt === null || rowData.controlResultAlt === undefined\">\r\n                  {{ rowData[col.field] }}\r\n                </span></span\r\n              >\r\n              <span *ngIf=\"rowData.controlResultIcon === '10'\" class=\"airworthiness-alert airworthiness-alert--nok\"\r\n                ><span\r\n                  *ngIf=\"rowData.controlResultAlt !== null && rowData.controlResultAlt !== undefined\"\r\n                  title=\"{{ rowData.controlResultAlt }}\"\r\n                  >{{ rowData[col.field] }}</span\r\n                ><span *ngIf=\"rowData.controlResultAlt === null || rowData.controlResultAlt === undefined\">\r\n                  {{ rowData[col.field] }}\r\n                </span></span\r\n              >\r\n              <span *ngIf=\"rowData.controlResultIcon === '11'\" class=\"airworthiness-alert airworthiness-alert--warning\"\r\n                ><span\r\n                  *ngIf=\"rowData.controlResultAlt !== null && rowData.controlResultAlt !== undefined\"\r\n                  title=\"{{ rowData.controlResultAlt }}\"\r\n                  >{{ rowData[col.field] }}</span\r\n                ><span *ngIf=\"rowData.controlResultAlt === null || rowData.controlResultAlt === undefined\">\r\n                  {{ rowData[col.field] }}\r\n                </span></span\r\n              >\r\n            </span>\r\n\r\n            <span *ngSwitchCase=\"'notificationLinkedEventCode'\"\r\n              ><a (click)=\"openLinkedEvent(rowData)\">{{ rowData[col.field] }}</a></span\r\n            >\r\n\r\n            <span *ngSwitchCase=\"'defectTitle'\"\r\n              ><a *ngIf=\"rowData[col.field]\" (click)=\"openDefect(rowData)\">{{ rowData[col.field] }}</a>\r\n              <a *ngIf=\"!rowData[col.field] && _workDataDefect\" (click)=\"openDefect(rowData)\">{{\r\n                rowData.bidoNotificationDTO.notificationCode\r\n              }}</a>\r\n            </span>\r\n\r\n            <span *ngSwitchCase=\"'isCriticalText'\">\r\n              <i\r\n                *ngIf=\"!!rowData[col.field] && rowData[col.field] === 'true'\"\r\n                class=\"fa fa-fw fa-check\"\r\n                aria-hidden=\"true\"\r\n              ></i>\r\n            </span>\r\n\r\n            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n          </td>\r\n\r\n          <td class=\"row-expand-wrapper\" [pRowToggler]=\"rowData\">\r\n            <i\r\n              class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n              [ngClass]=\"rowData._expand ? 'fa-minus' : 'fa-plus'\"\r\n              aria-hidden=\"true\"\r\n              pTooltip=\"{{ 'global.showTableRowDetails' | translate }}\"\r\n              tooltipPosition=\"top\"\r\n              (click)=\"toggleDefectsExpand(rowData)\"\r\n            ></i>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n        <tr class=\"row-expanded\" *ngIf=\"rowData._expand\">\r\n          <td [attr.colspan]=\"columns.length + 2\">\r\n            <div class=\"row\">\r\n              <div id=\"defectName\" class=\"form-group\">\r\n                <label class=\"form-label\"> {{ getComponentName() + \".defectName\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"rowData.defectName\" [disabled]=\"true\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"defectLastAuthor\" class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".defectLastAuthor\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"rowData.defectLastAuthor\" [disabled]=\"true\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"defectCALastAuthor\" class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".defectCALastAuthor\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"rowData.defectCALastAuthor\" [disabled]=\"true\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"deferralLastAuthor\" class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".deferralLastAuthor\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"rowData.deferralLastAuthor\" [disabled]=\"true\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n\r\n<!--******************************-->\r\n<!--Defect > Add ACRS event dialig-->\r\n<!--******************************-->\r\n<aw-dialog-table\r\n  *ngIf=\"showAddACRSEventDialog\"\r\n  [data]=\"eventTableData\"\r\n  [(display)]=\"showAddACRSEventDialog\"\r\n  (onSelected)=\"onSelectedEvent($event)\"\r\n></aw-dialog-table>\r\n\r\n<aw-create-event-form\r\n  *ngIf=\"showDefectPopup\"\r\n  [(display)]=\"showDefectPopup\"\r\n  [event]=\"currentDefect\"\r\n  [assetTitle]=\"assetTitle\"\r\n  [openMode]=\"defectPopupOpenMode\"\r\n  [defaultCategory]=\"defaultCategory\"\r\n  (onValidated)=\"onAddDefect($event)\"\r\n></aw-create-event-form>\r\n"

/***/ }),

/***/ "./src/app/shared/components/defect-list/defect-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/defect-list/defect-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .table-border-left {\n  border-left: solid 1px #006ea9 !important; }\n\n:host .ok {\n  background-color: #4caf50; }\n\n:host .warning {\n  background-color: #ffc107; }\n\n:host .nok {\n  background-color: #f6685e; }\n\n:host .aw-table-row-details .label-value-group > label {\n  min-width: 10rem; }\n\n:host .table-summary-wrapper {\n  margin: 0 auto;\n  width: 30rem; }\n\n:host .table-control-summary td,\n:host .table-control-summary th {\n  background-color: #fff;\n  border: 0;\n  line-height: 1.42857143;\n  vertical-align: middle;\n  color: #000; }\n\n:host .table-control-summary th {\n  color: #595959;\n  font-weight: 400; }\n\n:host .table-control-summary td {\n  color: #000; }\n\n:host .table-control-summary col,\n:host .table-control-summary td,\n:host .table-control-summary th {\n  padding: 4px; }\n\n:host .table-control-summary tr td,\n:host .table-control-summary tr th {\n  text-align: center; }\n\n:host .table-control-summary tr td:first-of-type,\n  :host .table-control-summary tr th:first-of-type {\n    padding-right: 5%;\n    text-align: right; }\n\n:host .table-control-summary .ui-table-tbody tr:nth-of-type(2) td {\n  padding-top: 8px; }\n\n:host .table-control-summary td > span {\n  background-color: #fff;\n  display: block;\n  padding: calc(8px - 4px); }\n\n:host .table-control-summary td > span:not(.category) {\n    background-color: #f0f0f0; }\n\n:host .table-control-summary td > span.ok {\n    background-color: #4caf50; }\n\n:host .table-control-summary td > span.warning {\n    background-color: #ffc107; }\n\n:host .table-control-summary td > span.nok {\n    background-color: #f6685e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGVmZWN0LWxpc3QvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX21vZGlmaWVycy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kZWZlY3QtbGlzdC9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGRlZmVjdC1saXN0XFxkZWZlY3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGVmZWN0LWxpc3QvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5Q0FBaUM7RUFBakMsc0NBQWlDO0VBQWpDLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLG9DQUE0QjtLQUE1QixpQ0FBNEI7TUFBNUIsZ0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQTs7QUFLYjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLHNDQUFzQyxFQUFBOztBQ3pIeEM7RUFFSSx5Q0FBeUMsRUFBQTs7QUFGN0M7RUFNSSx5QkNXa0IsRUFBQTs7QURqQnRCO0VBVUkseUJDUVksRUFBQTs7QURsQmhCO0VBY0kseUJDTWdCLEVBQUE7O0FEcEJwQjtFQW9CUSxnQkFBZ0IsRUFBQTs7QUFwQnhCO0VBMEJJLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBM0JoQjs7RUFpQ00sc0JDckN5QjtFRHNDekIsU0FBUztFQUNULHVCQ0ltQjtFREhuQixzQkFBc0I7RUFDdEIsV0N2Q21CLEVBQUE7O0FERXpCO0VBeUNNLGNDMUN3QjtFRDJDeEIsZ0JBQWdCLEVBQUE7O0FBMUN0QjtFQThDTSxXQ2hEbUIsRUFBQTs7QURFekI7OztFQXNETSxZQUFZLEVBQUE7O0FBdERsQjs7RUE0RFEsa0JBQWtCLEVBQUE7O0FBNUQxQjs7SUErRFUsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBOztBQWhFM0I7RUF1RVEsZ0JDL0JVLEVBQUE7O0FEeENsQjtFQTRFTSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHdCQUFxQyxFQUFBOztBQTlFM0M7SUFpRlEseUJBQXlCLEVBQUE7O0FBakZqQztJQXFGUSx5QkNwRWMsRUFBQTs7QURqQnRCO0lBeUZRLHlCQ3ZFUSxFQUFBOztBRGxCaEI7SUE2RlEseUJDekVZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kZWZlY3QtbGlzdC9kZWZlY3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LS1mbGV4LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLWZsZXgtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzcGxheS0tbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LS0xMDAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1pbi13aWR0aC0tZml0LWNvbnRlbnQge1xyXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvc2l0aW9uLS1yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwteS0tbm9uZSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LS11bnNlbGVjdGFibGUge1xyXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aXNpYmlsaXR5LS1oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtLTEwIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTIwIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTMwIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTQwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTUwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTYwIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTcwIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTgwIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTkwIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5mbGV4LS0xIHtcclxuICBmbGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0yIHtcclxuICBmbGV4OiAyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0zIHtcclxuICBmbGV4OiAzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS00IHtcclxuICBmbGV4OiA0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS01IHtcclxuICBmbGV4OiA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS1hdXRvIHtcclxuICBmbGV4OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tZW5kIHtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1zdGFydCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWVuZCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktc3RhcnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwibW9kaWZpZXJzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLnRhYmxlLWJvcmRlci1sZWZ0IHtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggIzAwNmVhOSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgfVxyXG5cclxuICAud2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgLm5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICB9XHJcblxyXG4gIC5hdy10YWJsZS1yb3ctZGV0YWlscyB7XHJcbiAgICAubGFiZWwtdmFsdWUtZ3JvdXAge1xyXG4gICAgICAmID4gbGFiZWwge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTByZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWJsZS1zdW1tYXJ5LXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgfVxyXG5cclxuICAudGFibGUtY29udHJvbC1zdW1tYXJ5IHtcclxuICAgIHRkLFxyXG4gICAgdGgge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhYmxlLWNvbnRyb2wtc3VtbWFyeSB7XHJcbiAgICBjb2wsXHJcbiAgICB0ZCxcclxuICAgIHRoIHtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRyIHtcclxuICAgICAgdGQsXHJcbiAgICAgIHRoIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS10YWJsZS10Ym9keSB7XHJcbiAgICAgIHRyOm50aC1vZi10eXBlKDIpIHRkIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRkID4gc3BhbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLSA0cHgpO1xyXG5cclxuICAgICAgJjpub3QoLmNhdGVnb3J5KSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5vayB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi53YXJuaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLm5vayB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/defect-list/defect-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/defect-list/defect-list.component.ts ***!
  \************************************************************************/
/*! exports provided: DefectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectListComponent", function() { return DefectListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/bido-attribute-constants */ "./src/app/shared/constants/bido-attribute-constants.ts");
/* harmony import */ var _constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/control-config-constants */ "./src/app/shared/constants/control-config-constants.ts");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/export.service */ "./src/app/shared/services/export.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _services_serialization_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _services_tab_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _types_generic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../types/generic-component */ "./src/app/shared/types/generic-component.ts");
/* harmony import */ var _defect_list_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./defect-list.service */ "./src/app/shared/components/defect-list/defect-list.service.ts");
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















var DefectListComponent = /** @class */ (function (_super) {
    __extends(DefectListComponent, _super);
    function DefectListComponent(messageService, exportService, dateService, defectListService, confirmationService, translateService, serializationService, tabService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write) || this;
        _this.messageService = messageService;
        _this.exportService = exportService;
        _this.dateService = dateService;
        _this.defectListService = defectListService;
        _this.confirmationService = confirmationService;
        _this.translateService = translateService;
        _this.serializationService = serializationService;
        _this.tabService = tabService;
        _this._equipmentCode = '';
        _this.defectsTable = [];
        _this.defaultCategory = '5-def';
        _this.defectsToExport = [];
        _this.isDefectTableLoading = false;
        _this.defectTableSummary = [];
        _this.defectSummaryTableCols = [
            { field: 'ok', alignment: 'center' },
            { field: 'warning', alignment: 'center' },
            { field: 'nok', alignment: 'center' }
        ];
        _this.init();
        // tslint:disable-next-line: no-unsafe-any
        _this.defectListService.setRefreshButton(_this.refreshDefectList.bind(_this));
        _this.awPropertiesConstants = _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"];
        return _this;
    }
    Object.defineProperty(DefectListComponent.prototype, "equipmentCode", {
        get: function () {
            return this._equipmentCode;
        },
        set: function (equipmentCode) {
            if (equipmentCode && this._equipmentCode !== equipmentCode) {
                this._equipmentCode = equipmentCode;
                this.refreshDefectTable();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefectListComponent.prototype, "workDataDefect", {
        get: function () {
            return this._workDataDefect;
        },
        set: function (workDataDefect) {
            if (workDataDefect && this._workDataDefect !== workDataDefect) {
                this._workDataDefect = workDataDefect;
                if (this._workDataDefect.workOrder && this._workDataDefect.workPackage) {
                    this.detectionContext =
                        "" + this._workDataDefect.workPackage.projectNumber + ("/" + this._workDataDefect.workOrder.woCode);
                }
                else if (this._workDataDefect.workPackage) {
                    this.detectionContext = "" + this._workDataDefect.workPackage.projectNumber;
                }
                if (!!this.detectionContext) {
                    this.refreshDefectTableWorkData();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DefectListComponent.prototype.init = function () {
        this.updateDefectSummary = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.defectsTableForDisplay = [];
        this.selectedDefects = [];
        this.initDefectSummary();
        this.initDefectsSummaryCount();
        this.setDefectExportFilename();
        this.setTableCols();
    };
    DefectListComponent.prototype.getComponentName = function () {
        return 'DefectListComponent';
    };
    DefectListComponent.prototype.refreshDefectTableWorkData = function () {
        this.getDefectsBydetectionContext();
    };
    DefectListComponent.prototype.getDefectsBydetectionContext = function () {
        var _this = this;
        this.selectedDefects = [];
        this.defectsTable = [];
        this.defectsTableBackup = [];
        this.defectsTableForDisplay = [];
        this.defectTableSummary = [];
        this.initDefectsSummaryCount();
        this.initDefectSummary();
        this.isDefectTableLoading = true;
        this.defectListService.findDefectsByDetectionContext(this.detectionContext).subscribe(function (defects) {
            _this.defectsTable = defects;
            _this.loadDefectsTable();
        });
    };
    // tslint:disable-next-line:no-any
    DefectListComponent.prototype.onChangeFilterAlert = function (event) {
        switch (event.value) {
            case 0:
                this.defectsTableForDisplay = JSON.parse(JSON.stringify(this.defectsTableBackup));
                break;
            case 1:
                this.defectsTableForDisplay = JSON.parse(JSON.stringify(this.defectsTableForDisplay)).filter(function (defect) { return defect.isCriticalText === 'true'; });
                break;
            default:
                break;
        }
    };
    DefectListComponent.prototype.setTableCols = function () {
        this.defectsTableCols = [
            { field: 'defectTitle', alignment: 'left', width: '10%' },
            { field: 'control', alignment: 'left', width: '7%' },
            { field: 'remainingText', alignment: 'left' },
            { field: 'formattedNotificationStartDate', alignment: 'left', width: '12%' },
            { field: 'defectDetectionContext', alignment: 'left' },
            { field: 'isCriticalText', alignment: 'left', width: '5%' },
            { field: 'notificationStatus', alignment: 'left' },
            { field: 'defectCADescriptionShort', alignment: 'left' },
            { field: 'notificationLinkedEventCode', alignment: 'left' }
        ];
    };
    DefectListComponent.prototype.enableDefectACRSButton = function () {
        var response = true;
        this.selectedDefects.forEach(function (defect) {
            response =
                defect.notificationLinkedEventCode === null || defect.notificationLinkedEventCode === undefined
                    ? response && true
                    : response && false;
        });
        return response;
    };
    DefectListComponent.prototype.addToAcrsEvent = function () {
        this.showAddACRSEventDialog = true;
    };
    DefectListComponent.prototype.addDefect = function () {
        this.currentDefect = {
            bidoNotificationDTO: {
                reportingPeriodStartDate: new Date(),
                bidoNotificationTypeDTO: {}
            }
        };
        this.defectPopupOpenMode = _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Create;
        this.showDefectPopup = true;
        this.assetTitle = this.equipmentName;
    };
    DefectListComponent.prototype.onAddDefect = function (event) {
        var _this = this;
        var isExistingEvent = false;
        event.bidoNotificationDTO.reportingPeriodStartDateStr = this.dateService.dateToString(event.bidoNotificationDTO.reportingPeriodStartDate);
        if (!!this.defectsTableForDisplay) {
            this.defectsTableForDisplay.forEach(function (eventDisplayed) {
                if (!!eventDisplayed.bidoNotificationDTO &&
                    !!event.bidoNotificationDTO &&
                    eventDisplayed.bidoNotificationDTO.typeCode === event.bidoNotificationDTO.typeCode &&
                    eventDisplayed.bidoNotificationDTO.reportingDateStr === event.bidoNotificationDTO.reportingPeriodStartDateStr) {
                    isExistingEvent = true;
                }
            });
        }
        if (isExistingEvent) {
            this.messageService.showWarningMessage(this.getTranslateKey('warningOnDefectExists'));
        }
        else if (this._workDataDefect) {
            event.bidoNotificationDTO.equipmentCode = this._workDataDefect.equipementCode;
            this.defectListService.createBidoNotification(event.bidoNotificationDTO).subscribe(function (notificationId) {
                var attribute = {
                    notificationCode: notificationId.notificationCode,
                    attributeValue: _this.detectionContext,
                    attributeId: _constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_3__["BidoAttributeConstants"].EVENT_DEFECT_DETECTION_CONTEXT.toString()
                };
                _this.defectListService.createBidoNotificationAttribute(attribute).subscribe(function (attributeId) {
                    _this.getDefectsBydetectionContext();
                    var timer = 10;
                    setTimeout(function () {
                        _this.openDefectAdd(notificationId.notificationCode);
                    }, timer);
                });
            });
        }
    };
    DefectListComponent.prototype.onSelectedEvent = function (event) {
        var _this = this;
        var bidoNotificationDTOList = [];
        this.selectedDefects.forEach(function (defect) {
            if (!!defect && !!defect._obj) {
                bidoNotificationDTOList.push(defect._obj.bidoNotificationDTO);
            }
        });
        if (!!event.notificationCode && bidoNotificationDTOList.length > 0) {
            var input = {
                eventCode: event.notificationCode,
                bidoNotificationDTOList: bidoNotificationDTOList
            };
            this.defectListService.associateDefectsAcrsEvent(input).subscribe(function () {
                _this.refreshDefectTable();
            });
        }
    };
    DefectListComponent.prototype.toggleDefectsExpand = function (row) {
        this.remainingTable = [];
        this.remainingTableCols = [
            { field: 'defectName', alignment: 'left' },
            { field: 'defectLastAuthor', alignment: 'left' },
            { field: 'defectCALastAuthor', alignment: 'left' },
            { field: 'deferralLastAuthor', alignment: 'left' }
        ];
        var remainingRow = {};
        var def = this.defectsTable.filter(function (defect) { return defect.defectName === row.defectName; });
        remainingRow.defectName = def[0].defectName;
        remainingRow.defectLastAuthor = def[0].defectLastAuthor;
        remainingRow.defectCALastAuthor = def[0].defectCALastAuthor;
        remainingRow.deferralLastAuthor = def[0].deferralLastAuthor;
        this.remainingTable.push(remainingRow);
        row._expand = !row._expand;
    };
    DefectListComponent.prototype.deleteDfects = function () {
        var _this = this;
        var confirmMessageKey = this.selectedDefects.length > 1 ? 'confirmDeleteSelectedDefects' : 'confirmDeleteSelectedDefect';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(confirmMessageKey),
            accept: function () {
                var eventIds = [];
                _this.selectedDefects.map(function (event) {
                    if (!!event && !!event.bidoNotificationDTO.notificationCode) {
                        var dto = {
                            notificationCode: event.bidoNotificationDTO.notificationCode
                        };
                        eventIds.push(dto);
                    }
                });
                _this.defectListService.removeBidoNotification(eventIds).subscribe(function (msg) {
                    var successMessageKey = _this.selectedDefects.length > 1 ? 'successOnDeleteDefects' : 'successOnDeleteDefect';
                    if (!msg) {
                        _this.messageService.showSuccessMessage(_this.getTranslateKey(successMessageKey));
                    }
                    else {
                        _this.messageService.showWarningMessage(msg);
                    }
                    _this.selectedDefects = [];
                    _this.refreshDefectTableWorkData();
                });
            }
        });
    };
    DefectListComponent.prototype.refreshDefectList = function () {
        if (this._workDataDefect) {
            this.refreshDefectTableWorkData();
        }
        else {
            this.refreshDefectTable();
        }
    };
    DefectListComponent.prototype.refreshDefectTable = function () {
        var _this = this;
        this.selectedDefects = [];
        this.defectsTable = [];
        this.defectsTableBackup = [];
        this.defectsTableForDisplay = [];
        this.defectTableSummary = [];
        this.initDefectsSummaryCount();
        this.initDefectSummary();
        this.isDefectTableLoading = true;
        this.defectListService.getDefectList(this._equipmentCode).subscribe(function (results) {
            _this.defectsTable = results;
            _this.loadDefectsTable();
        });
    };
    DefectListComponent.prototype.openDefect = function (row) {
        if (row.bidoNotificationDTO.notificationCode) {
            var defectId = {
                notificationCode: row.bidoNotificationDTO.notificationCode
            };
            var data = {
                id: this.tabService.generateId(),
                componentId: _constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].FLE_DEFECT_FORM,
                objectId: this.serializationService.serialize(defectId),
                openMode: _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    DefectListComponent.prototype.openDefectAdd = function (objectId) {
        if (!!objectId) {
            var data = {
                id: this.tabService.generateId(),
                componentId: _constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].FLE_DEFECT_FORM,
                openMode: _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write
            };
            var defectId = {
                notificationCode: objectId
            };
            data.objectId = this.serializationService.serialize(defectId);
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    DefectListComponent.prototype.closeDefect = function () {
        var _this = this;
        this.confirmationService.confirm({
            messageKey: this.getTranslateKey('confirmCloseDefect'),
            accept: function () {
                _this.selectedDefects.forEach(function (defect) {
                    _this.defectListService.closeAssetDefect(defect.bidoNotificationDTO).subscribe(function (result) {
                        _this.messageService.showSuccessMessage(result);
                        _this.refreshDefectTable();
                        // this.loadSummaryData();
                    }, function (error) {
                        _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnCloseDefect'));
                    });
                });
            }
        });
    };
    DefectListComponent.prototype.exportDefects = function () {
        this.exportService.toExcel(this.defectsToExport, this.defectResultsExportName, this.getComponentName());
    };
    DefectListComponent.prototype.initDefectsSummaryCount = function () {
        this.defectCounts = {
            ok: 0,
            nok: 0,
            warning: 0
        };
    };
    DefectListComponent.prototype.loadDefectsTable = function () {
        this.isDefectTableLoading = true;
        if (this.defectsTable.length > 0) {
            this.bindDefectsTable();
            this.defectCounts.ok = this.defectsTable.filter(function (def) { return def.controlResultIcon === _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_5__["ControlConfigConstants"].ICON_GREEN; }).length;
            this.defectCounts.nok = this.defectsTable.filter(function (def) { return def.controlResultIcon === _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_5__["ControlConfigConstants"].ICON_RED; }).length;
            this.defectCounts.warning = this.defectsTable.filter(function (def) { return def.controlResultIcon === _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_5__["ControlConfigConstants"].ICON_YELLOW; }).length;
            this.defectTableSummary[0].ok = this.defectCounts.ok;
            this.defectTableSummary[0].nok = this.defectCounts.nok;
            this.defectTableSummary[0].warning = this.defectCounts.warning;
            this.updateDefectSummary.emit(this.defectCounts);
        }
        else {
            this.isDefectTableLoading = false;
        }
    };
    DefectListComponent.prototype.bindDefectsTable = function () {
        var _this = this;
        this.defectsTable.forEach(function (def) {
            var defect = {
                defectIsCritical: false,
                bidoNotificationDTO: {
                    bidoNotificationTypeDTO: {}
                }
            };
            defect.rowId = Math.random();
            defect.defectName = def.defectName;
            defect.remainingText = def.remainingText;
            defect.formattedNotificationStartDate = def.formattedNotificationStartDate;
            defect.defectDetectionContext = def.defectDetectionContext;
            if (!!def.defectIsCritical) {
                defect.isCriticalText = "" + def.defectIsCritical;
            }
            defect.notificationStatus = def.notificationStatus;
            defect.defectCADescriptionShort = def.defectCADescriptionShort;
            defect.notificationLinkedEventCode = def.notificationLinkedEventCode;
            defect.defectLastAuthor = def.defectLastAuthor;
            defect.defectCALastAuthor = def.defectCALastAuthor;
            defect.deferralLastAuthor = def.deferralLastAuthor;
            defect.controlResultIcon = def.controlResultIcon;
            defect.control =
                def.controlResultIcon === _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_5__["ControlConfigConstants"].ICON_GREEN
                    ? _this.okString
                    : def.controlResultIcon === _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_5__["ControlConfigConstants"].ICON_RED
                        ? _this.nokString
                        : def.controlResultIcon === _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_5__["ControlConfigConstants"].ICON_YELLOW
                            ? _this.warningString
                            : '';
            defect.bidoNotificationDTO = def.bidoNotificationDTO;
            defect._obj = def;
            defect.defectTitle = def.defectTitle;
            _this.defectsTableForDisplay.push(defect);
        });
        this.defectsTableBackup = JSON.parse(JSON.stringify(this.defectsTableForDisplay));
        this.setDefectExportData();
        this.isDefectTableLoading = false;
    };
    DefectListComponent.prototype.initDefectSummary = function () {
        this.defectTableSummary = [
            {
                ok: 0,
                warning: 0,
                nok: 0
            }
        ];
    };
    DefectListComponent.prototype.setDefectExportData = function () {
        var _this = this;
        this.defectsToExport = [];
        this.defectsTableForDisplay.forEach(function (defect) {
            var defectToExport = {
                defectTitle: defect.defectTitle,
                control: defect.control,
                remainingText: defect.remainingText,
                formattedNotificationStartDate: defect.formattedNotificationStartDate,
                defectDetectionContext: defect.defectDetectionContext,
                isCriticalText: defect.isCriticalText,
                notificationStatus: defect.notificationStatus,
                defectCADescriptionShort: defect.defectCADescriptionShort,
                notificationLinkedEventCode: defect.notificationLinkedEventCode
            };
            _this.defectsToExport.push(defectToExport);
        });
    };
    DefectListComponent.prototype.setDefectExportFilename = function () {
        var _this = this;
        var filename = this.getComponentName() + ".defectExportFileName";
        this.translateService.get(filename).subscribe(function (result) {
            _this.defectResultsExportName = result;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DefectListComponent.prototype, "acrsEventCodeList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DefectListComponent.prototype, "statusState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DefectListComponent.prototype, "equipmentCode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DefectListComponent.prototype, "workDataDefect", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DefectListComponent.prototype, "equipmentName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DefectListComponent.prototype, "isAddAvailable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DefectListComponent.prototype, "updateDefectSummary", void 0);
    DefectListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-defect-list',
            template: __webpack_require__(/*! ./defect-list.component.html */ "./src/app/shared/components/defect-list/defect-list.component.html"),
            styles: [__webpack_require__(/*! ./defect-list.component.scss */ "./src/app/shared/components/defect-list/defect-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"],
            _services_export_service__WEBPACK_IMPORTED_MODULE_9__["ExportService"],
            _services_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"],
            _defect_list_service__WEBPACK_IMPORTED_MODULE_14__["DefectListService"],
            _services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _services_serialization_service__WEBPACK_IMPORTED_MODULE_11__["SerializationService"],
            _services_tab_service__WEBPACK_IMPORTED_MODULE_12__["TabService"]])
    ], DefectListComponent);
    return DefectListComponent;
}(_types_generic_component__WEBPACK_IMPORTED_MODULE_13__["GenericComponent"]));



/***/ }),

/***/ "./src/app/shared/components/defect-list/defect-list.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/defect-list/defect-list.module.ts ***!
  \*********************************************************************/
/*! exports provided: DefectListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectListModule", function() { return DefectListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _create_event_form_create_event_form_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create-event-form/create-event-form.module */ "./src/app/shared/components/create-event-form/create-event-form.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _main_maintenance_asset_review_form_airworthiness_table_remaining_values_airworthiness_table_remaining_values_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../main/maintenance/asset-review/form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component */ "./src/app/main/maintenance/asset-review/form/airworthiness-table-remaining-values/airworthiness-table-remaining-values.component.ts");
/* harmony import */ var _dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../dialog-table/dialog-table.module */ "./src/app/shared/components/dialog-table/dialog-table.module.ts");
/* harmony import */ var _defect_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./defect-list.component */ "./src/app/shared/components/defect-list/defect-list.component.ts");
/* harmony import */ var _defect_list_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./defect-list.service */ "./src/app/shared/components/defect-list/defect-list.service.ts");
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
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_3__["SelectButtonModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
    _dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_12__["DialogTableModule"],
    _modal_modal_module__WEBPACK_IMPORTED_MODULE_10__["ModalModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__["DropdownModule"],
    primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"]
];
var INTERNAL_MODULES = [_create_event_form_create_event_form_module__WEBPACK_IMPORTED_MODULE_9__["CreateEventFormModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_defect_list_component__WEBPACK_IMPORTED_MODULE_13__["DefectListComponent"], _main_maintenance_asset_review_form_airworthiness_table_remaining_values_airworthiness_table_remaining_values_component__WEBPACK_IMPORTED_MODULE_11__["AirworthinessTableRemainingValuesComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_defect_list_service__WEBPACK_IMPORTED_MODULE_14__["DefectListService"]];
var DefectListModule = /** @class */ (function () {
    function DefectListModule() {
    }
    DefectListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: __spread([
                _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_6__["AngularCommonSharedModule"],
                _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_7__["AngularGenericTemplatesSharedModule"],
                _app_common_shared_module__WEBPACK_IMPORTED_MODULE_8__["AppCommonSharedModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], DefectListModule);
    return DefectListModule;
}());



/***/ }),

/***/ "./src/app/shared/components/defect-list/defect-list.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/defect-list/defect-list.service.ts ***!
  \**********************************************************************/
/*! exports provided: DefectListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectListService", function() { return DefectListService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../api/airworthiness-management.api */ "./src/app/shared/api/airworthiness-management.api.ts");
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







var DefectListService = /** @class */ (function (_super) {
    __extends(DefectListService, _super);
    function DefectListService(http, appConfigService, airworthinessManagementApi, fleetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.airworthinessManagementApi = airworthinessManagementApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this._refreshButtonSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this._refreshButton$ = _this._refreshButtonSource.asObservable();
        return _this;
    }
    Object.defineProperty(DefectListService.prototype, "refreshButton$", {
        get: function () {
            return this._refreshButton$;
        },
        enumerable: true,
        configurable: true
    });
    DefectListService.prototype.setRefreshButton = function (f) {
        this._refreshButtonSource.next(f);
    };
    DefectListService.prototype.getDefectList = function (equipmentCode) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.getAssetDefectList, equipmentCode);
    };
    DefectListService.prototype.closeAssetDefect = function (bidoNotificationDTO) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.closeAssetDefect, bidoNotificationDTO);
    };
    DefectListService.prototype.associateDefectsAcrsEvent = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.associateDefectsAcrsEvent, input);
    };
    /***********************
     * Fleet Managment Api
     **********************/
    DefectListService.prototype.findDefectsByDetectionContext = function (detectionContext) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findDefectsByDetectionContext, detectionContext);
    };
    DefectListService.prototype.findAllBidoNotificationAttributeByNotificationCode = function (bidoNotificationDTOId) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoNotificationAttributeByNotificationCode, bidoNotificationDTOId);
    };
    DefectListService.prototype.createBidoNotification = function (bidoNotificationDTO) {
        return _super.prototype.post.call(this, this.fleetManagementApi.createBidoNotification, bidoNotificationDTO);
    };
    DefectListService.prototype.createBidoNotificationAttribute = function (notification) {
        return _super.prototype.post.call(this, this.fleetManagementApi.createBidoNotificationAttribute, notification);
    };
    DefectListService.prototype.removeBidoNotification = function (bireId) {
        return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoNotification, bireId);
    };
    DefectListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"],
            _api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_6__["AirworthinessManagementApi"],
            _api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__["FleetManagementApi"]])
    ], DefectListService);
    return DefectListService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__["AbstractAwHttpService"]));



/***/ })

}]);
//# sourceMappingURL=default~maintenance-asset-review-asset-review-module~maintenance-maintenance-module~maintenance-work~2188dff0.js.map