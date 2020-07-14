(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~logistics-control-ground-equipment-control-ground-equipment-module~logistics-tools-maintenan~86cdacee"],{

/***/ "./node_modules/primeng/message.js":
/*!*****************************************!*\
  !*** ./node_modules/primeng/message.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/message/message */ "./node_modules/primeng/components/message/message.js"));

/***/ }),

/***/ "./node_modules/primeng/selectbutton.js":
/*!**********************************************!*\
  !*** ./node_modules/primeng/selectbutton.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/selectbutton/selectbutton */ "./node_modules/primeng/components/selectbutton/selectbutton.js"));

/***/ }),

/***/ "./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <aw-manage-search-criteria\r\n                    [componentId]=\"SEARCH_CRITERIA_ID\"\r\n                    (onSelected)=\"loadSearchCriteria($event)\"\r\n                    (onSavedAsked)=\"saveSearchCriteriaAsked()\"\r\n                    [objectFromPage]=\"criteriaToSave\"\r\n                    [canChange]=\"!hasBeenCalculated\"\r\n                  ></aw-manage-search-criteria>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".function\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"groundEquipmentTypes\"\r\n                        [(ngModel)]=\"searchObject.equipmentFunction\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                      >\r\n                      </p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ getComponentName() + \".familyVariant\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"propertyVariant\"\r\n                        [(ngModel)]=\"searchObject.familyVariantCode\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                      >\r\n                      </p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".designation\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.designation\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".status\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"operationalStatusList\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [(ngModel)]=\"searchObject.operationalStatusCode\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".pnCode\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.pnCode\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".snCode\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.snCode\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".warehouseType\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"warehouseTypes\"\r\n                        [(ngModel)]=\"searchObject.warehouseCode\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                      >\r\n                      </p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ getComponentName() + \".maintenanceProgram\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.mpName\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ getComponentName() + \".revisionNumber\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.mpRevision\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ getComponentName() + \".equipmentCode\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.assetCode\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\"></div>\r\n                  <div class=\"form-group\"></div>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <div class=\"search-actions\">\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      (click)=\"search()\"\r\n                      appKeyPress\r\n                      color=\"primary\"\r\n                      [keyCode]=\"'Enter'\"\r\n                      (keyPress)=\"search()\"\r\n                    >\r\n                      {{ \"global.toSearch\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }} ({{ toolsList.list ? toolsList.list.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableResults\r\n                class=\"aw-table2\"\r\n                [columns]=\"toolSearchCols\"\r\n                [value]=\"toolsList.list\"\r\n                [(selection)]=\"selectedTools\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!showResultLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"showResultLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\" *ngIf=\"showResultLoading\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedTools.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableResultsGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableResults.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"toolsList.list && toolsList.list.length > 0 && selectedTools.length === 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"exportTable()\"\r\n                      >\r\n                        {{ \"global.export\" | translate }}\r\n                      </button>\r\n\r\n                      <button *ngIf=\"selectedTools.length > 0\" type=\"button\" mat-raised-button (click)=\"openForm()\">\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ getComponentName() + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3Rvb2xzLW1haW50ZW5hbmNlLXNlYXJjaC90b29scy1tYWludGVuYW5jZS1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ToolsMaintenanceSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsMaintenanceSearchComponent", function() { return ToolsMaintenanceSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/export.service */ "./src/app/shared/services/export.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/utils/label-value-utils */ "./src/app/shared/utils/label-value-utils.ts");
/* harmony import */ var _tools_maintenance_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tools-maintenance-search.service */ "./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.service.ts");
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



















var ToolsMaintenanceSearchComponent = /** @class */ (function (_super) {
    __extends(ToolsMaintenanceSearchComponent, _super);
    function ToolsMaintenanceSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, translateService, service, exportService, dateService, propertiesService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.service = service;
        _this.exportService = exportService;
        _this.dateService = dateService;
        _this.propertiesService = propertiesService;
        _this.SEARCH_CRITERIA_ID = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].TOOLS_MAINTENANCE_SEARCH_CRITERIA_ID;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ToolsMaintenanceSearchComponent_1 = ToolsMaintenanceSearchComponent;
    ToolsMaintenanceSearchComponent.prototype.ngOnInit = function () {
        this.displayComponentContext('global.search', true);
        this.toolsList = {
            list: [],
            moreResults: false
        };
        this.searchObject = {
            equipmentTypeSelected: false,
            aircraftTypeSelected: false,
            allAssetTypeSelected: false,
            engineTypeSelected: false
        };
        this.selectedTools = [];
        this.initTableCols();
        this.loadDropdown();
    };
    ToolsMaintenanceSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].LOG_TOOLS_MAINTENANCE_STATUS_SEARCH;
    };
    /*********************************
     * Init Table Cols
     *********************************/
    ToolsMaintenanceSearchComponent.prototype.initTableCols = function () {
        this.toolSearchCols = [
            { field: 'pnCode', alignment: 'left', width: '10%' },
            { field: 'designation', alignment: 'left', width: '30%' },
            { field: 'snCode', alignment: 'left', width: '10%' },
            { field: 'location', alignment: 'left', width: '13%' },
            { field: 'status', alignment: 'left', width: '10%' },
            { field: 'equipmentCode', alignment: 'left', width: '12%' },
            { field: 'function', alignment: 'left', width: '15%' }
        ];
    };
    /*********************************
     * load Dropdown
     *********************************/
    ToolsMaintenanceSearchComponent.prototype.loadDropdown = function () {
        var _this = this;
        this.service.fetchGroundEquipmentFunctionList().subscribe(function (results) {
            _this.groundEquipmentTypes = results;
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetGroundEquipmentTypes'));
        });
        var familyVariantInput = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].FAMILY_FUNCTION_GROUND_EQUIPMENT_KEY;
        this.service.getFamilyVariant(familyVariantInput).subscribe(function (results) {
            _this.propertyVariant = results;
        }, function () {
            _this.messageService.showSuccessMessage('global.errorOnGetResults');
        });
        this.service.findAll().subscribe(function (results) {
            _this.warehouseTypes = [];
            if (!!results) {
                results.forEach(function (res) {
                    _this.warehouseTypes.push({
                        label: res.whCode + " - " + res.whName,
                        value: !!res.wareHouseId ? res.wareHouseId.toString() : ''
                    });
                });
            }
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetWarehouseList'));
        });
        this.loadOperationalStatusList();
    };
    /*********************************
     * Search functionality
     *********************************/
    ToolsMaintenanceSearchComponent.prototype.search = function () {
        var _this = this;
        this.showResultLoading = true;
        this.service.findAllAssetForTools(this.searchObject).subscribe(function (result) {
            result.list.forEach(function (element) {
                if (!!element.location) {
                    _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_17__["LabelValueUtils"].stringValueToLabel(element, 'location', _this.warehouseTypes);
                }
            });
            _this.toolsList = result;
            _this.showResultLoading = false;
        }, function (error) {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSaveUsers'));
            _this.showResultLoading = false;
        });
    };
    /*********************************
     * Load operational status dropdown
     *********************************/
    ToolsMaintenanceSearchComponent.prototype.loadOperationalStatusList = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__["GenericPropertyConstants"].GROUND_EQUIPMENT_STATUS_MAP).subscribe(function (result) {
            _this.operationalStatusList = result;
        }, function (error) {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGettingStatusList'));
        });
    };
    /*********************************
     * Action performed on Open
     *********************************/
    ToolsMaintenanceSearchComponent.prototype.openForm = function () {
        var assetCodes = [];
        this.selectedTools.forEach(function (row) {
            if (!!row && !!row.equipmentCode) {
                assetCodes.push(row);
            }
        });
        this.onValidated.emit(assetCodes);
    };
    /*********************************
     * Reset Search Criteria
     *********************************/
    ToolsMaintenanceSearchComponent.prototype.resetSearchCriteria = function () {
        this.searchObject = {
            equipmentTypeSelected: false,
            aircraftTypeSelected: false,
            allAssetTypeSelected: false,
            engineTypeSelected: false
        };
    };
    ToolsMaintenanceSearchComponent.prototype.exportTable = function () {
        var table = this.toolsList.list.map(function (event) {
            return {
                pnCode: event.pnCode,
                designation: event.designation,
                snCode: event.snCode,
                location: event.location,
                status: event.status,
                equipmentCode: event.equipmentCode,
                function: event.function
            };
        });
        this.exportService.toExcel(table, ToolsMaintenanceSearchComponent_1.TOOLS_TABLE_EXPORT_NAME + "-" + this.dateService.dateToString(new Date()), 'ToolsMaintenanceSearchComponent');
    };
    /*********************************
     * Manage Search Criteria
     *********************************/
    ToolsMaintenanceSearchComponent.prototype.loadSearchCriteria = function (event) {
        var criteria = event.criteria;
        if (!criteria) {
            this.resetSearchCriteria();
            return;
        }
        else {
            this.criteriaName = event.name;
            this.searchObject = criteria || {};
        }
        this.search();
    };
    ToolsMaintenanceSearchComponent.prototype.saveSearchCriteriaAsked = function () {
        var criteriaToSave = this.searchObject;
        this.criteriaToSave = criteriaToSave;
    };
    var ToolsMaintenanceSearchComponent_1;
    ToolsMaintenanceSearchComponent.TOOLS_TABLE_EXPORT_NAME = 'Ground_Equipment_List';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ToolsMaintenanceSearchComponent.prototype, "onValidated", void 0);
    ToolsMaintenanceSearchComponent = ToolsMaintenanceSearchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-tools-maintenance-search',
            template: __webpack_require__(/*! ./tools-maintenance-search.component.html */ "./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.component.html"),
            styles: [__webpack_require__(/*! ./tools-maintenance-search.component.scss */ "./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _tools_maintenance_search_service__WEBPACK_IMPORTED_MODULE_18__["ToolMaintenanceSearchService"],
            _shared_services_export_service__WEBPACK_IMPORTED_MODULE_8__["ExportService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__["PropertiesService"]])
    ], ToolsMaintenanceSearchComponent);
    return ToolsMaintenanceSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_16__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ToolsMaintenanceSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsMaintenanceSearchModule", function() { return ToolsMaintenanceSearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _tools_maintenance_search_tools_maintenance_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tools-maintenance-search/tools-maintenance-search.component */ "./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.component.ts");
/* harmony import */ var _tools_maintenance_search_tools_maintenance_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tools-maintenance-search/tools-maintenance-search.service */ "./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.service.ts");
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
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
    primeng_chart__WEBPACK_IMPORTED_MODULE_2__["ChartModule"],
    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__["SplitButtonModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__["SelectButtonModule"],
    primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_12__["ManageSearchCriteriaModule"]
];
var INTERNAL_MODULES = [];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_tools_maintenance_search_tools_maintenance_search_component__WEBPACK_IMPORTED_MODULE_13__["ToolsMaintenanceSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_tools_maintenance_search_tools_maintenance_search_service__WEBPACK_IMPORTED_MODULE_14__["ToolMaintenanceSearchService"]];
var ToolsMaintenanceSearchModule = /** @class */ (function () {
    function ToolsMaintenanceSearchModule() {
    }
    ToolsMaintenanceSearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__["AppCommonSharedModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], ToolsMaintenanceSearchModule);
    return ToolsMaintenanceSearchModule;
}());



/***/ }),

/***/ "./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: ToolMaintenanceSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolMaintenanceSearchService", function() { return ToolMaintenanceSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api/airworthiness-management.api */ "./src/app/shared/api/airworthiness-management.api.ts");
/* harmony import */ var _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/api/asset-management.api */ "./src/app/shared/api/asset-management.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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








var ToolMaintenanceSearchService = /** @class */ (function (_super) {
    __extends(ToolMaintenanceSearchService, _super);
    function ToolMaintenanceSearchService(http, appConfigService, airworthinessManagementApi, productStructureManagementApi, assetManagementApi, bidtWarehouseApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.airworthinessManagementApi = airworthinessManagementApi;
        _this.productStructureManagementApi = productStructureManagementApi;
        _this.assetManagementApi = assetManagementApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        return _this;
    }
    /**************************************************************************
     * Tools Search
     *************************************************************************/
    ToolMaintenanceSearchService.prototype.findAllAssetForTools = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.findAllAssetForTools, input);
    };
    ToolMaintenanceSearchService.prototype.fetchGroundEquipmentFunctionList = function () {
        return _super.prototype.post.call(this, this.assetManagementApi.fetchGroundEquipmentFunctionList);
    };
    ToolMaintenanceSearchService.prototype.getFamilyVariant = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.initializeFamilyVariantList, input);
    };
    ToolMaintenanceSearchService.prototype.findAll = function () {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findAll);
    };
    ToolMaintenanceSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__["AppConfigService"],
            _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_2__["AirworthinessManagementApi"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__["ProductStructureManagementApi"],
            _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_3__["AssetManagementApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__["BidtWarehouseApi"]])
    ], ToolMaintenanceSearchService);
    return ToolMaintenanceSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__["AbstractAwHttpService"]));



/***/ })

}]);
//# sourceMappingURL=default~logistics-control-ground-equipment-control-ground-equipment-module~logistics-tools-maintenan~86cdacee.js.map