(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~maintenance-cockpit-inspection-cockpit-inspection-module~shared-components-component-measure~d512c549"],{

/***/ "./node_modules/primeng/chart.js":
/*!***************************************!*\
  !*** ./node_modules/primeng/chart.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/chart/chart */ "./node_modules/primeng/components/chart/chart.js"));

/***/ }),

/***/ "./src/app/shared/components/component-measure/component-measure.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/component-measure/component-measure.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ getComponentName() + \".measureOfEquipment\" | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div class=\"page-subtitle\">\r\n          <span *ngIf=\"!!bidoEquipmentDTO\"> - P/N {{ bidoEquipmentDTO.pnCode }}</span>\r\n          <span *ngIf=\"!!bidoEquipmentDTO.sn\"> | S/N {{ bidoEquipmentDTO.sn }} </span>\r\n          <span *ngIf=\"!!equipment && !!equipment.bidoEquipmentDTO\">\r\n            | {{ equipment.bidoEquipmentDTO.equipmentDesignation }}</span\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button\r\n      id=\"actions\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button type=\"button\" mat-menu-item (click)=\"refresh()\">\r\n        {{ \"global.refresh\" | translate }}\r\n      </button>\r\n      <button id=\"favorites\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container grid-cell-scope  custom-height\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container  loading-indicator\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"transaction.\" + componentData.componentId | translate }}\r\n                  ({{ bidoMeasuresDisplayed ? bidoMeasuresDisplayed.length : 0 }})\r\n                  <div *ngIf=\"isLoadingMeasureTable\" class=\"lds-hourglass\"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Chart -->\r\n            <div class=\"grid-cell-content\" *ngIf=\"showMeasureChart\">\r\n              <div class=\"grid-cell-chart custom-width\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container loading-indicator\">\r\n                    <div class=\"grid-cell-title\">\r\n                      <div *ngIf=\"isLoadingMeasureTable\" class=\"lds-hourglass\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"form-group flex--2\">\r\n                    <label class=\"form-label\"> {{ tsnLabel }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input tsn\" [(ngModel)]=\"tsn\" [disabled]=\"true\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group flex--2\">\r\n                    <label class=\"form-label\"> {{ csnLabel }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input csn\" [(ngModel)]=\"csn\" [disabled]=\"true\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group flex--2\">\r\n                    <p-selectButton\r\n                      [options]=\"measureTypes\"\r\n                      [(ngModel)]=\"selectedMeasureType\"\r\n                      (onChange)=\"setMeasureChartData()\"\r\n                    ></p-selectButton>\r\n                  </div>\r\n\r\n                  <div class=\"form-group flex--2\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".from\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-calendar\r\n                        showButtonBar=\"true\"\r\n                        [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\"\r\n                        [yearRange]=\"sessionService.calendarYearRange\"\r\n                        class=\"aw-calendar\"\r\n                        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                        [locale]=\"sessionService.calendarFormat\"\r\n                        [(ngModel)]=\"startDate\"\r\n                        (onSelect)=\"setMeasureChartData()\"\r\n                        (onInput)=\"setMeasureChartData()\"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group flex--2\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".to\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-calendar\r\n                        showButtonBar=\"true\"\r\n                        [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\"\r\n                        [yearRange]=\"sessionService.calendarYearRange\"\r\n                        class=\"aw-calendar\"\r\n                        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                        [locale]=\"sessionService.calendarFormat\"\r\n                        [(ngModel)]=\"endDate\"\r\n                        (onSelect)=\"setMeasureChartData()\"\r\n                        (onInput)=\"setMeasureChartData()\"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row flex-row--justify-center\">\r\n                  <div class=\"chart-container flex--1\">\r\n                    <div class=\"chart-wrapper custom-width custom-height\">\r\n                      <p-chart\r\n                        type=\"line\"\r\n                        [data]=\"measureVariationData\"\r\n                        [options]=\"measureChartOptions\"\r\n                        width=\"100%\"\r\n                        height=\"100%\"\r\n                      ></p-chart>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Table -->\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">{{ getComponentName() + \".results\" | translate }}</h4>\r\n                <div class=\"section-content\">\r\n                  <p-table\r\n                    #ptableMeasures\r\n                    class=\"aw-table2\"\r\n                    [columns]=\"measuresTableCols\"\r\n                    [value]=\"bidoMeasuresDisplayed\"\r\n                    [(selection)]=\"selectedMeasure\"\r\n                    [scrollable]=\"true\"\r\n                    [paginator]=\"true\"\r\n                    [rows]=\"TABLE_PAGINATION_DEFAULT_ROWS\"\r\n                  >\r\n                    <ng-template pTemplate=\"emptymessage\">\r\n                      <span *ngIf=\"!isLoadingMeasureTable\"> &nbsp;</span>\r\n\r\n                      <div *ngIf=\"isLoadingMeasureTable\" class=\"aw-table-loading-indicator\">\r\n                        <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                        <div class=\"lds-hourglass\"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"caption\">\r\n                      <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedMeasure.length > 0 }\">\r\n                        <div class=\"aw-table-global-filter\">\r\n                          <label class=\"aw-table-global-filter-label\">\r\n                            <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableMeasuresGlobalFilter\r\n                            class=\"aw-table-global-filter-input\"\r\n                            type=\"text\"\r\n                            placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                            (input)=\"ptableMeasures.filterGlobal($event.target.value, 'contains')\"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class=\"aw-table-actions\"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"colgroup\" let-columns>\r\n                      <colgroup>\r\n                        <col class=\"aw-table-checkbox-wrapper\" />\r\n                        <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"header\" let-columns>\r\n                      <tr>\r\n                        <th class=\"aw-table-checkbox-wrapper\">\r\n                          <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                          {{ getComponentName() + \".\" + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                      <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                        <td class=\"aw-table-checkbox-wrapper\">\r\n                          <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td\r\n                          *ngFor=\"let col of columns\"\r\n                          [ngSwitch]=\"col.field\"\r\n                          [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                        >\r\n                          <span *ngSwitchCase=\"'counterCode'\">\r\n                            <span>\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n                          </span>\r\n                          <span\r\n                            class=\"custom-padding\"\r\n                            *ngSwitchCase=\"'remainingValue'\"\r\n                            [style.background-color]=\"getAlertIcon(rowData)\"\r\n                            pTooltip=\"{{ getAlertIconTooltip(rowData) }}\"\r\n                          >\r\n                            {{ rowData[col.field] }}\r\n                          </span>\r\n                          <span *ngSwitchDefault>\r\n                            {{ rowData[col.field] }}\r\n                          </span>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/component-measure/component-measure.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/component-measure/component-measure.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red {\n  background-color: #a82525 !important; }\n\n.green {\n  background-color: #4caf50 !important; }\n\n.yellow {\n  background-color: #ffc107 !important; }\n\n.green,\n.red,\n.yellow {\n  padding: 0.5em !important;\n  color: #fff !important; }\n\n.custom-padding {\n  padding: 0.5em !important; }\n\n.custom-width {\n  width: 100% !important; }\n\n.custom-height {\n  height: 17rem !important; }\n\n.tsn {\n  color: #d3c632; }\n\n.cns {\n  color: #42a5f5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29tcG9uZW50LW1lYXN1cmUvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxjb21wb25lbnQtbWVhc3VyZVxcY29tcG9uZW50LW1lYXN1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQ0FBdUMsRUFBQTs7QUFHekM7RUFDRSxvQ0FBMEMsRUFBQTs7QUFHNUM7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7OztFQUdFLHlCQUF5QjtFQUN6QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29tcG9uZW50LW1lYXN1cmUvY29tcG9uZW50LW1lYXN1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcblxyXG4ucmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWRhcmsxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ueWVsbG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmVlbixcclxuLnJlZCxcclxuLnllbGxvdyB7XHJcbiAgcGFkZGluZzogMC41ZW0gIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDAuNWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20td2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20taGVpZ2h0IHtcclxuICBoZWlnaHQ6IDE3cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50c24ge1xyXG4gIGNvbG9yOiAjZDNjNjMyO1xyXG59XHJcblxyXG4uY25zIHtcclxuICBjb2xvcjogIzQyYTVmNTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/component-measure/component-measure.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/component-measure/component-measure.component.ts ***!
  \************************************************************************************/
/*! exports provided: ComponentMeasureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentMeasureComponent", function() { return ComponentMeasureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _constants_component_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/control-config-constants */ "./src/app/shared/constants/control-config-constants.ts");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _services_serialization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _services_tab_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _types_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _component_measure_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component-measure.service */ "./src/app/shared/components/component-measure/component-measure.service.ts");
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
















var ComponentMeasureComponent = /** @class */ (function (_super) {
    __extends(ComponentMeasureComponent, _super);
    function ComponentMeasureComponent(favoriteService, loaderService, messageService, serializationService, tabService, dateService, componentMeasureService, translateService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.dateService = dateService;
        _this.componentMeasureService = componentMeasureService;
        _this.translateService = translateService;
        _this.TABLE_PAGINATION_DEFAULT_ROWS = _constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].TABLE_PAGINATION_DEFAULT_ROWS;
        return _this;
    }
    ComponentMeasureComponent_1 = ComponentMeasureComponent;
    ComponentMeasureComponent.prototype.ngOnInit = function () {
        this.bidoEquipmentDTO = {};
        this.selectedMeasure = [];
        this.measureChartDataObj = [];
        this.equipment = {
            bidoEquipmentDTO: {},
            measureTableDtos: [],
            bidoDocumentationTableOutputDTOs: [],
            stockOutputDto: {},
            superiorAsset: {},
            usageCounterCalculationDTO: {},
            saveUsageEquipment: {
                updateBidoEquipmentUsageDTOList: []
            }
        };
        this.init();
    };
    ComponentMeasureComponent.prototype.init = function () {
        var _this = this;
        this.bidoEquipmentDTO = !!this.componentData.objectId
            ? this.serializationService.deserialize(this.componentData.objectId)
            : undefined;
        var context = !!this.bidoEquipmentDTO.sn
            ? "P/N " + this.bidoEquipmentDTO.pnCode + " | S/N " + this.bidoEquipmentDTO.sn
            : "P/N " + this.bidoEquipmentDTO.pnCode;
        this.displayComponentContext(context, this.isCreateOpenMode);
        this.componentMeasureService.findFirstBidoEquipmentsByPnAndSnCodes(this.bidoEquipmentDTO).subscribe(function (res) {
            if (!!res) {
                _this.equipmentCode = res.equipmentCode;
            }
            _this.setMeasureChartOptions();
            _this.getBidoEquipment();
        });
    };
    ComponentMeasureComponent.prototype.getComponentName = function () {
        return _constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].MAI_MEASURE_COMPONENT;
    };
    ComponentMeasureComponent.prototype.refresh = function () {
        this.init();
    };
    ComponentMeasureComponent.prototype.getBidoEquipment = function () {
        var _this = this;
        var assetId = {
            bidoEquipmentDTOId: {
                equipmentCode: this.equipmentCode
            },
            assetfunction: ' '
        };
        this.componentMeasureService.findBidoEquipmentAlternative(assetId).subscribe(function (result) {
            if (result) {
                _this.equipment = __assign({}, result);
                _this.getMeasureTabData();
            }
        });
    };
    ComponentMeasureComponent.prototype.getMeasureTabData = function () {
        var _this = this;
        this.equipment.measureTableDtos = [];
        this.componentMeasureService.getMeasureTabData(this.equipment.bidoEquipmentDTO).subscribe(function (result) {
            if (result) {
                _this.equipment.measureTableDtos = result;
                _this.loadMeasureChartData();
            }
        });
    };
    ComponentMeasureComponent.prototype.transformMeasures = function (listMeasures) {
        var _this = this;
        return listMeasures.map(function (obj) {
            var measureDataRow = {
                _obj: obj,
                counterCode: obj.counterCode,
                counterUnit: obj.counterUnit,
                cumulatedCounterValue: obj.cumulatedCounterValue,
                ratingCounterValue: obj.ratingCounterValue,
                ratingText: obj.ratingText,
                readingDate: _this.dateService.dateWithHourToString(obj.counterDate),
                referenceValue: obj.referenceValue,
                remainingValue: obj.remainingValue,
                dateLimit: _this.dateService.dateToString(obj.dateLimit),
                source: obj.source
            };
            return measureDataRow;
        });
    };
    ComponentMeasureComponent.prototype.loadMeasureChartData = function () {
        var _this = this;
        this.isLoadingMeasureTable = true;
        this.counterMap = new Map();
        this.componentMeasureService
            .findAllBireMeasureReferences()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isLoadingMeasureTable = false); }))
            .subscribe(function (list) {
            list.forEach(function (element) {
                if (element.counterCode) {
                    _this.counterMap.set(element.counterCode, element);
                }
            });
            _this.setTableDynamicHeaders();
            // Load measure table here with dynamic columns
            _this.bidoMeasuresDisplayed = _this.transformMeasures(_this.equipment.measureTableDtos || []);
            _this.showMeasureChart = false;
            if (_this.bidoMeasuresDisplayed.length > 0) {
                var observables_1 = [];
                var setUpCounters_1 = [];
                _this.bidoMeasuresDisplayed
                    .filter(function (res) {
                    return res.counterCode === _this.tsnLabel || res.counterCode === _this.csnLabel;
                })
                    .forEach(function (res) {
                    if (res && res._obj && res._obj.bidoEquipmentCounterDto) {
                        var counterCode = res.counterCode || '';
                        if (setUpCounters_1.indexOf(counterCode) < 0) {
                            var bidoEquipmentCounterDTOId = {
                                equipmentCode: res._obj.bidoEquipmentCounterDto.equipmentCode,
                                counterCode: res._obj.bidoEquipmentCounterDto.counterCode,
                                ratingCode: res._obj.bidoEquipmentCounterDto.ratingCode
                                    ? res._obj.bidoEquipmentCounterDto.ratingCode
                                    : '_',
                                familyCode: res._obj.bidoEquipmentCounterDto.familyCode
                            };
                            if (counterCode === _this.tsnLabel) {
                                _this.tsn = !!res.cumulatedCounterValue ? res.cumulatedCounterValue + " " + res.counterUnit : '';
                            }
                            if (counterCode === _this.csnLabel) {
                                _this.csn = !!res.cumulatedCounterValue ? res.cumulatedCounterValue + " " + res.counterUnit : '';
                            }
                            observables_1.push(_this.componentMeasureService.getMeasureDetailTableData(bidoEquipmentCounterDTOId));
                            setUpCounters_1.push(counterCode || '');
                        }
                    }
                });
                if (observables_1.length > 0) {
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables_1).subscribe(function (results) {
                        _this.showMeasureChart = true;
                        _this.measureChartDataObj = results;
                        var allMeasures = [];
                        _this.measureChartDataObj.forEach(function (element) {
                            allMeasures = __spread(allMeasures, element);
                        });
                        _this.initDateValues(allMeasures);
                        _this.setMeasureChartData();
                        _this.isLoadingMeasureTable = false;
                    });
                }
            }
            else {
                _this.isLoadingMeasureTable = false;
            }
        });
    };
    ComponentMeasureComponent.prototype.setMeasureChartData = function () {
        var _this = this;
        var ALL = 'ALL';
        if (this.measureChartDataObj !== null &&
            this.measureChartDataObj !== undefined &&
            this.measureChartDataObj.length > 0) {
            this.measureVariationData.datasets = [];
            this.measureChartDataObj
                .filter(function (obj) {
                if (obj && obj.length > 0 && _this.selectedMeasureType && _this.selectedMeasureType !== ALL) {
                    return obj[0].counterCode === _this.selectedMeasureType;
                }
                return true;
            })
                .forEach(function (element) {
                var getFirstElement = element[0];
                if (getFirstElement) {
                    var data = [];
                    var datasetObj_1 = {
                        data: data,
                        label: getFirstElement.counterCode === _this.tsnLabel
                            ? _this.translateService.instant('hours')
                            : _this.translateService.instant('cycle'),
                        borderColor: getFirstElement.counterCode === _this.tsnLabel
                            ? ComponentMeasureComponent_1.COLOR_TSN
                            : ComponentMeasureComponent_1.COLOR_CSN,
                        backgroundColor: getFirstElement.counterCode === _this.tsnLabel
                            ? ComponentMeasureComponent_1.COLOR_TSN
                            : ComponentMeasureComponent_1.COLOR_CSN,
                        hoverBackgroundColor: getFirstElement.counterCode === _this.tsnLabel
                            ? ComponentMeasureComponent_1.COLOR_TSN
                            : ComponentMeasureComponent_1.COLOR_CSN,
                        fill: false,
                        cubicInterpolationMode: 'monotone'
                    };
                    _this.measureVariationData.datasets.push(datasetObj_1);
                    element.forEach(function (st) {
                        if (!!_this.startDate &&
                            !!_this.endDate &&
                            !!st.readingDate &&
                            st.readingDate >= _this.startDate &&
                            st.readingDate <= _this.endDate) {
                            if (st.cumulatedCounterValue !== null && st.cumulatedCounterValue !== undefined) {
                                datasetObj_1.data.push({
                                    x: new Date(st.readingDate),
                                    y: parseInt(st.cumulatedCounterValue, 10)
                                });
                            }
                        }
                    });
                }
            });
            this.measureVariationData = __assign({}, this.measureVariationData);
        }
    };
    ComponentMeasureComponent.prototype.setTableDynamicHeaders = function () {
        var _this = this;
        this.followedInRatingVisibility = false;
        if (!this.isAircraft &&
            !this.isTool &&
            this.equipment &&
            this.equipment.bidoEquipmentDTO &&
            this.equipment.bidoEquipmentDTO.familyVariantCode) {
            this.componentMeasureService.isFollowedInRating(this.equipment.bidoEquipmentDTO.familyVariantCode).subscribe(function (results) {
                _this.followedInRatingVisibility = results;
                var checkRatingExists = _this.bidoMeasuresDisplayed.filter(function (obj) {
                    return !!obj.counterCode ? _this.getRatingDataVisibility(_this.counterMap.get(obj.counterCode)) : false;
                })[0];
                var checkLimitDateExists = _this.bidoMeasuresDisplayed.filter(function (obj) {
                    return !!obj.dateLimit;
                })[0];
                _this.loadMeasureTableHeader(!!checkRatingExists, !!checkLimitDateExists);
            }, function (err) {
                _this.messageService.showErrorMessage(err.error.errorDetail);
                _this.loadMeasureTableHeader(false, false);
            });
        }
        else {
            this.loadMeasureTableHeader(false, false);
        }
    };
    ComponentMeasureComponent.prototype.getRatingDataVisibility = function (selectedBireMeasureReferenceDTO) {
        if (selectedBireMeasureReferenceDTO) {
            if (!selectedBireMeasureReferenceDTO.isCounter) {
                return false;
            }
        }
        return this.followedInRatingVisibility;
    };
    ComponentMeasureComponent.prototype.loadMeasureTableHeader = function (showRating, showDateLimit) {
        this.measuresTableCols = [
            { field: 'counterCode', alignment: 'left' },
            { field: 'cumulatedCounterValue', alignment: 'left' },
            { field: 'counterUnit', alignment: 'left' }
        ];
        if (showRating) {
            this.measuresTableCols.push({ field: 'ratingText', alignment: 'left' });
            this.measuresTableCols.push({ field: 'ratingCounterValue', alignment: 'left' });
        }
        this.measuresTableCols.push({ field: 'remainingValue', alignment: 'center' });
        this.measuresTableCols.push({ field: 'referenceValue', alignment: 'left' });
        if (showDateLimit) {
            this.measuresTableCols.push({ field: 'dateLimit', alignment: 'left' });
        }
        this.measuresTableCols.push({ field: 'readingDate', alignment: 'left' });
        this.measuresTableCols.push({ field: 'source', alignment: 'left' });
    };
    ComponentMeasureComponent.prototype.setMeasureChartOptions = function () {
        this.measureChartOptions = {
            scales: {
                xAxes: [
                    {
                        type: 'time',
                        time: {
                            unit: 'month',
                            displayFormats: {
                                month: _constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].MOMENTJS_DATE
                            }
                        }
                    }
                ],
                yAxes: [{}]
            },
            legend: {
                display: false
            },
            tooltips: {
                bodyFontColor: _constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].COLOR_BACKGROUND_PRIMARY
            }
        };
    };
    ComponentMeasureComponent.prototype.initDateValues = function (measures) {
        var dateArray = [];
        if (!!measures && measures.length > 0) {
            measures.forEach(function (st) {
                if (st.readingDate !== null && st.readingDate !== undefined) {
                    dateArray.push(st.readingDate);
                }
            });
            var lastYear = new Date();
            lastYear.setFullYear(lastYear.getFullYear() - 1);
            this.startDate = lastYear;
            this.endDate = new Date();
        }
    };
    ComponentMeasureComponent.prototype.getAlertIcon = function (obj) {
        var row = obj._obj;
        if (row &&
            row.aPotentialAlertData &&
            row.aPotentialAlertData.potentialAlertLevel !== null &&
            row.aPotentialAlertData.potentialAlertLevel !== undefined) {
            return this.getColorByIconCode(row.aPotentialAlertData.potentialAlertLevel);
        }
        return '';
    };
    ComponentMeasureComponent.prototype.getAlertIconTooltip = function (obj) {
        var row = obj._obj;
        if (row && row.aPotentialAlertData && row.aPotentialAlertData.alertTooltip) {
            return row.aPotentialAlertData.alertTooltip;
        }
        return '';
    };
    ComponentMeasureComponent.prototype.getMonthGapToolTip = function (obj) {
        var row = obj._obj;
        if (row && row.aPotentialAlertData && row.aPotentialAlertData.monthGapToolTip) {
            return row.aPotentialAlertData.monthGapToolTip;
        }
        return '';
    };
    ComponentMeasureComponent.prototype.getColorByIconCode = function (iconCode) {
        switch (iconCode) {
            case _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__["ControlConfigConstants"].ICON_GREEN_LIGHT_CODE:
                return _constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].COLOR_GREEN;
            case _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__["ControlConfigConstants"].ICON_YELLOW_LIGHT_CODE:
                return _constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].COLOR_YELLOW;
            case _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__["ControlConfigConstants"].ICON_RED_LIGHT_CODE:
                return _constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].COLOR_RED;
            case _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__["ControlConfigConstants"].ICON_NONE_LIGHT_CODE:
                return '';
            case _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__["ControlConfigConstants"].ICON_GREEN_LED_CODE:
                return _constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].COLOR_GREEN;
            case _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__["ControlConfigConstants"].ICON_YELLOW_LED_CODE:
                return _constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].COLOR_YELLOW;
            case _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__["ControlConfigConstants"].ICON_RED_LED_CODE:
                return _constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].COLOR_RED;
            case _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__["ControlConfigConstants"].ICON_NONE_LED_CODE:
                return '';
            default:
                return '';
        }
    };
    var ComponentMeasureComponent_1;
    ComponentMeasureComponent.COLOR_TSN = '#D3C632';
    ComponentMeasureComponent.COLOR_CSN = '#42A5F5';
    ComponentMeasureComponent = ComponentMeasureComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-component-measure',
            template: __webpack_require__(/*! ./component-measure.component.html */ "./src/app/shared/components/component-measure/component-measure.component.html"),
            styles: [__webpack_require__(/*! ./component-measure.component.scss */ "./src/app/shared/components/component-measure/component-measure.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__["FavoriteService"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"],
            _services_serialization_service__WEBPACK_IMPORTED_MODULE_12__["SerializationService"],
            _services_tab_service__WEBPACK_IMPORTED_MODULE_13__["TabService"],
            _services_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"],
            _component_measure_service__WEBPACK_IMPORTED_MODULE_15__["ComponentMeasureService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ComponentMeasureComponent);
    return ComponentMeasureComponent;
}(_types_page_component__WEBPACK_IMPORTED_MODULE_14__["PageComponent"]));



/***/ }),

/***/ "./src/app/shared/components/component-measure/component-measure.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/component-measure/component-measure.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ComponentMeasureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentMeasureModule", function() { return ComponentMeasureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _main_dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../main/dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialog-table/dialog-table.module */ "./src/app/shared/components/dialog-table/dialog-table.module.ts");
/* harmony import */ var _component_measure_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component-measure.component */ "./src/app/shared/components/component-measure/component-measure.component.ts");
/* harmony import */ var _component_measure_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component-measure.service */ "./src/app/shared/components/component-measure/component-measure.service.ts");
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
var EXTERNAL_MODULES = [primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"], primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__["SelectButtonModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_2__["ChartModule"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"]];
var INTERNAL_MODULES = [_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_10__["DialogTableModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_component_measure_component__WEBPACK_IMPORTED_MODULE_11__["ComponentMeasureComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_component_measure_service__WEBPACK_IMPORTED_MODULE_12__["ComponentMeasureService"]];
var ComponentMeasureModule = /** @class */ (function () {
    function ComponentMeasureModule() {
    }
    ComponentMeasureModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: __spread([
                _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__["AngularCommonSharedModule"],
                _app_common_shared_module__WEBPACK_IMPORTED_MODULE_9__["AppCommonSharedModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES, [
                _main_dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_7__["DynamicComponentLoaderModule"].forChild(COMPONENTS)
            ]),
            providers: __spread(SERVICES)
        })
    ], ComponentMeasureModule);
    return ComponentMeasureModule;
}());



/***/ }),

/***/ "./src/app/shared/components/component-measure/component-measure.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/component-measure/component-measure.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ComponentMeasureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentMeasureService", function() { return ComponentMeasureService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/asset-management.api */ "./src/app/shared/api/asset-management.api.ts");
/* harmony import */ var _api_fleet_business_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/fleet-business.api */ "./src/app/shared/api/fleet-business.api.ts");
/* harmony import */ var _api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _api_product_structure_business_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/product-structure-business.api */ "./src/app/shared/api/product-structure-business.api.ts");
/* harmony import */ var _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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









var ComponentMeasureService = /** @class */ (function (_super) {
    __extends(ComponentMeasureService, _super);
    function ComponentMeasureService(http, appConfigService, assetManagementApi, productStructureManagementApi, fleetBusinessApi, fleetManagementApi, productStructureBusinessApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.assetManagementApi = assetManagementApi;
        _this.productStructureManagementApi = productStructureManagementApi;
        _this.fleetBusinessApi = fleetBusinessApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this.productStructureBusinessApi = productStructureBusinessApi;
        return _this;
    }
    ComponentMeasureService.prototype.getMeasureTabData = function (bidoEquipmentDTO) {
        return _super.prototype.post.call(this, this.assetManagementApi.fetchMeasureTableData, bidoEquipmentDTO);
    };
    ComponentMeasureService.prototype.findAllBireMeasureReferencesMaintenanceProgram = function () {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireMeasureReferencesMaintenanceProgram);
    };
    ComponentMeasureService.prototype.getMeasureDetailTableData = function (bidoEquipmentCounterDTOId) {
        return _super.prototype.post.call(this, this.fleetBusinessApi.findBidoMeasuresByEquipmentAndCounterCodes, bidoEquipmentCounterDTOId);
    };
    ComponentMeasureService.prototype.findAllBireMeasureReferences = function () {
        return _super.prototype.post.call(this, this.fleetManagementApi.findAllBireMeasureReferences);
    };
    ComponentMeasureService.prototype.isFollowedInRating = function (followedRatingInput) {
        return _super.prototype.post.call(this, this.productStructureBusinessApi.isFollowedInRating, followedRatingInput);
    };
    ComponentMeasureService.prototype.findBidoEquipmentAlternative = function (asset) {
        return _super.prototype.post.call(this, this.assetManagementApi.getAssetByCode, asset);
    };
    ComponentMeasureService.prototype.findFirstBidoEquipmentsByPnAndSnCodes = function (woEquipement) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findFirstBidoEquipmentsByPnAndSnCodes, woEquipement);
    };
    ComponentMeasureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_8__["AppConfigService"],
            _api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__["AssetManagementApi"],
            _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_6__["ProductStructureManagementApi"],
            _api_fleet_business_api__WEBPACK_IMPORTED_MODULE_3__["FleetBusinessApi"],
            _api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__["FleetManagementApi"],
            _api_product_structure_business_api__WEBPACK_IMPORTED_MODULE_5__["ProductStructureBusinessApi"]])
    ], ComponentMeasureService);
    return ComponentMeasureService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__["AbstractAwHttpService"]));



/***/ })

}]);
//# sourceMappingURL=default~maintenance-cockpit-inspection-cockpit-inspection-module~shared-components-component-measure~d512c549.js.map