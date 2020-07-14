(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-tools-maintenance-status-tools-maintenance-status-module"],{

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

/***/ "./node_modules/primeng/components/chart/chart.js":
/*!********************************************************!*\
  !*** ./node_modules/primeng/components/chart/chart.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var UIChart = /** @class */ (function () {
    function UIChart(el) {
        this.el = el;
        this.options = {};
        this.plugins = [];
        this.responsive = true;
        this.onDataSelect = new core_1.EventEmitter();
    }
    Object.defineProperty(UIChart.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (val) {
            this._data = val;
            this.reinit();
        },
        enumerable: true,
        configurable: true
    });
    UIChart.prototype.ngAfterViewInit = function () {
        this.initChart();
        this.initialized = true;
    };
    UIChart.prototype.onCanvasClick = function (event) {
        if (this.chart) {
            var element = this.chart.getElementAtEvent(event);
            var dataset = this.chart.getDatasetAtEvent(event);
            if (element && element[0] && dataset) {
                this.onDataSelect.emit({ originalEvent: event, element: element[0], dataset: dataset });
            }
        }
    };
    UIChart.prototype.initChart = function () {
        var opts = this.options || {};
        opts.responsive = this.responsive;
        // allows chart to resize in responsive mode
        if (opts.responsive && (this.height || this.width)) {
            opts.maintainAspectRatio = false;
        }
        this.chart = new Chart(this.el.nativeElement.children[0].children[0], {
            type: this.type,
            data: this.data,
            options: this.options,
            plugins: this.plugins
        });
    };
    UIChart.prototype.getCanvas = function () {
        return this.el.nativeElement.children[0].children[0];
    };
    UIChart.prototype.getBase64Image = function () {
        return this.chart.toBase64Image();
    };
    UIChart.prototype.generateLegend = function () {
        if (this.chart) {
            return this.chart.generateLegend();
        }
    };
    UIChart.prototype.refresh = function () {
        if (this.chart) {
            this.chart.update();
        }
    };
    UIChart.prototype.reinit = function () {
        if (this.chart) {
            this.chart.destroy();
            this.initChart();
        }
    };
    UIChart.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.initialized = false;
            this.chart = null;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], UIChart.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UIChart.prototype, "options", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], UIChart.prototype, "plugins", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], UIChart.prototype, "width", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], UIChart.prototype, "height", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], UIChart.prototype, "responsive", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], UIChart.prototype, "onDataSelect", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UIChart.prototype, "data", null);
    UIChart = __decorate([
        core_1.Component({
            selector: 'p-chart',
            template: "\n        <div style=\"position:relative\" [style.width]=\"responsive && !width ? null : width\" [style.height]=\"responsive && !height ? null : height\">\n            <canvas [attr.width]=\"responsive && !width ? null : width\" [attr.height]=\"responsive && !height ? null : height\" (click)=\"onCanvasClick($event)\"></canvas>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], UIChart);
    return UIChart;
}());
exports.UIChart = UIChart;
var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    ChartModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [UIChart],
            declarations: [UIChart]
        })
    ], ChartModule);
    return ChartModule;
}());
exports.ChartModule = ChartModule;
//# sourceMappingURL=chart.js.map

/***/ }),

/***/ "./node_modules/primeng/components/inputtextarea/inputtextarea.js":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/components/inputtextarea/inputtextarea.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var InputTextarea = /** @class */ (function () {
    function InputTextarea(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
        this.onResize = new core_1.EventEmitter();
    }
    InputTextarea.prototype.ngDoCheck = function () {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize();
        }
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    InputTextarea.prototype.onInput = function (e) {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.updateFilledState = function () {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) || (this.ngModel && this.ngModel.model);
    };
    InputTextarea.prototype.onFocus = function (e) {
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.onBlur = function (e) {
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.resize = function (event) {
        this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
        if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
            this.el.nativeElement.style.overflowY = "scroll";
            this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
        }
        else {
            this.el.nativeElement.style.overflow = "hidden";
        }
        this.onResize.emit(event || {});
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InputTextarea.prototype, "autoResize", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InputTextarea.prototype, "onResize", void 0);
    __decorate([
        core_1.HostListener('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputTextarea.prototype, "onInput", null);
    __decorate([
        core_1.HostListener('focus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputTextarea.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputTextarea.prototype, "onBlur", null);
    InputTextarea = __decorate([
        core_1.Directive({
            selector: '[pInputTextarea]',
            host: {
                '[class.ui-inputtext]': 'true',
                '[class.ui-corner-all]': 'true',
                '[class.ui-inputtextarea-resizable]': 'autoResize',
                '[class.ui-state-default]': 'true',
                '[class.ui-widget]': 'true',
                '[class.ui-state-filled]': 'filled'
            }
        }),
        __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, forms_1.NgModel])
    ], InputTextarea);
    return InputTextarea;
}());
exports.InputTextarea = InputTextarea;
var InputTextareaModule = /** @class */ (function () {
    function InputTextareaModule() {
    }
    InputTextareaModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [InputTextarea],
            declarations: [InputTextarea]
        })
    ], InputTextareaModule);
    return InputTextareaModule;
}());
exports.InputTextareaModule = InputTextareaModule;
//# sourceMappingURL=inputtextarea.js.map

/***/ }),

/***/ "./node_modules/primeng/inputtextarea.js":
/*!***********************************************!*\
  !*** ./node_modules/primeng/inputtextarea.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputtextarea/inputtextarea */ "./node_modules/primeng/components/inputtextarea/inputtextarea.js"));

/***/ }),

/***/ "./node_modules/primeng/splitbutton.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/splitbutton.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/splitbutton/splitbutton */ "./node_modules/primeng/components/splitbutton/splitbutton.js"));

/***/ }),

/***/ "./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div class=\"page-subtitle\">- {{ displayToolInfo(familyVariantList) }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button *ngIf=\"simulationCriteria !== undefined\" type=\"button\" mat-raised-button (click)=\"resetSimulation()\">\r\n      {{ getComponentName() + \".resetSimulation\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" mat-raised-button (click)=\"simulate()\">\r\n      {{ getComponentName() + \".simulate\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item [matMenuTriggerFor]=\"potentialUnitSelection\">\r\n        {{ getComponentName() + \".potentialUnit\" | translate }}({{ potentialUnitSelected }})\r\n      </button>\r\n\r\n      <button mat-menu-item (click)=\"reload()\">{{ \"global.refresh\" | translate }}</button>\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n    <mat-menu #potentialUnitSelection=\"matMenu\">\r\n      <div *ngFor=\"let potentialUnit of potentialUnitList\">\r\n        <button *ngIf=\"!isCreateOpenMode\" type=\"button\" mat-menu-item (click)=\"potentialUnit.command()\">\r\n          {{ potentialUnit.label | translate }}\r\n        </button>\r\n      </div>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"tools-control-form\" class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <!-- SIMULATION PANEL-->\r\n        <div *ngIf=\"simulationCriteria !== undefined\" class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container grid-cell-state-simulation\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".ageingSimulation\" | translate }}:\r\n                  <span\r\n                    *ngIf=\"simulationCriteria.inHours && simulationCriteria.inHours <= 1\"\r\n                    class=\"simulation-criterion\"\r\n                  >\r\n                    {{\r\n                      getComponentName() + \".simulateInHour\"\r\n                        | translate: { value: simulationCriteria.inHours.toString() }\r\n                    }}\r\n                  </span>\r\n                  <span\r\n                    *ngIf=\"simulationCriteria.inHours && simulationCriteria.inHours > 1\"\r\n                    class=\"simulation-criterion\"\r\n                  >\r\n                    {{\r\n                      getComponentName() + \".simulateInHours\"\r\n                        | translate: { value: simulationCriteria.inHours.toString() }\r\n                    }}\r\n                  </span>\r\n                  <span\r\n                    *ngIf=\"simulationCriteria.inCycles && simulationCriteria.inCycles <= 1\"\r\n                    class=\"simulation-criterion\"\r\n                  >\r\n                    {{\r\n                      getComponentName() + \".simulateInCycle\"\r\n                        | translate: { value: simulationCriteria.inCycles.toString() }\r\n                    }}\r\n                  </span>\r\n                  <span\r\n                    *ngIf=\"simulationCriteria.inCycles && simulationCriteria.inCycles > 1\"\r\n                    class=\"simulation-criterion\"\r\n                  >\r\n                    {{\r\n                      getComponentName() + \".simulateInCycles\"\r\n                        | translate: { value: simulationCriteria.inCycles.toString() }\r\n                    }}\r\n                  </span>\r\n                  <span *ngIf=\"simulationCriteria.atDate\" class=\"simulation-criterion\">\r\n                    {{\r\n                      getComponentName() + \".simulateAtDate\"\r\n                        | translate: { value: dateService.dateToString(simulationCriteria.atDate) }\r\n                    }}\r\n                  </span>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- TOOLS SECTION -->\r\n        <div class=\"grid-cell--6\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container grid-cell-scope\"\r\n            [ngClass]=\"{\r\n              'in-simulation': simulationCriteria !== undefined\r\n            }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container  loading-indicator\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".tools\" | translate }}\r\n                  <div *ngIf=\"panelLoading\" class=\"lds-hourglass\"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ getComponentName() + \".pnCode\" | translate }} </label>\r\n\r\n                    <div class=\"form-control paddingClass\">\r\n                      {{ displayToolInfo(pnCodeList) }}\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ \"global.sn\" | translate }} </label>\r\n\r\n                    <div class=\"form-control paddingClass\">\r\n                      {{ displayToolInfo(snCodeList) }}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ \"global.familyVariant\" | translate }} </label>\r\n\r\n                    <div class=\"form-control paddingClass\">\r\n                      {{ displayToolInfo(familyVariantList) }}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ getComponentName() + \".designation\" | translate }} </label>\r\n\r\n                    <div class=\"form-control paddingClass\">\r\n                      {{ displayToolInfo(designationList) }}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"!!toolsTreeTable && toolsTreeTable.length > 0\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".function\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"groundEquipmentTypes\"\r\n                        [(ngModel)]=\"toolsTreeTable[0].bidoEquipment.equipmentFunction\"\r\n                        [showClear]=\"true\"\r\n                        disabled\r\n                        placeholder=\"&nbsp;\"\r\n                      >\r\n                      </p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- AVAILABILITY SECTION -->\r\n        <div class=\"grid-cell--6  grid-cell--no-padding\">\r\n          <div class=\"grid-cell--12 grid-cell--no-padding\">\r\n            <div class=\"grid-cell--12\">\r\n              <div\r\n                class=\"grid-cell grid-cell--container grid-cell-summary\"\r\n                [ngClass]=\"{\r\n                  'in-simulation': simulationCriteria !== undefined\r\n                }\"\r\n              >\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container loading-indicator\">\r\n                    <div class=\"grid-cell-title\">\r\n                      {{ getComponentName() + \".availabilitySummary\" | translate }}\r\n                      <div *ngIf=\"panelLoading\" class=\"lds-hourglass\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <br /><br />\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"row flex-row--justify-center\">\r\n                    <div class=\"chart-container\">\r\n                      <div class=\"chart-wrapper\">\r\n                        <p-chart\r\n                          [type]=\"chartType\"\r\n                          [data]=\"chartData\"\r\n                          [options]=\"chartOptions\"\r\n                          width=\"100%\"\r\n                          height=\"100%\"\r\n                        ></p-chart>\r\n                      </div>\r\n\r\n                      <div class=\"chart-legend\">\r\n                        <div class=\"chart-legend-label\">\r\n                          <div class=\"chart-legend-label-color airworthy\"></div>\r\n                          {{ chartData.labels[0] }} <span class=\"chart-value\">{{ servicableEquipmentNb }} </span>\r\n                        </div>\r\n\r\n                        <div class=\"chart-legend-label\">\r\n                          <div class=\"chart-legend-label-color airworthy-with-alerts\"></div>\r\n                          {{ chartData.labels[1] }}\r\n                          <span class=\"chart-value\">{{ servicableWithAlertEquipmentNb }} </span>\r\n                        </div>\r\n\r\n                        <div class=\"chart-legend-label\">\r\n                          <div class=\"chart-legend-label-color not-airworthy\"></div>\r\n                          {{ chartData.labels[2] }} <span class=\"chart-value\">{{ notservicableEquipmentNb }}</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <br /><br />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Maintenance Status SECTION -->\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container grid-cell-detail\"\r\n            [ngClass]=\"{\r\n              'in-simulation': simulationCriteria !== undefined\r\n            }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container  loading-indicator\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  <h3 *ngIf=\"!toolsTableOnlyAlertsVisible\" class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".maintenanceStatus\" | translate }}\r\n                    ({{ toolsTable ? toolsTable.length : 0 }})\r\n                  </h3>\r\n                  <h3 *ngIf=\"toolsTableOnlyAlertsVisible\" class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".maintenanceStatus\" | translate }}\r\n                    ({{ toolsTableDisplayedRowNb }} / {{ toolsTable ? toolsTable.length : 0 }})\r\n                  </h3>\r\n                  <div *ngIf=\"panelLoading\" class=\"lds-hourglass\"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <p-table\r\n                  [resizableColumns]=\"true\"\r\n                  #ptableTools\r\n                  class=\"aw-table2\"\r\n                  [columns]=\"toolsTableCols\"\r\n                  [value]=\"toolsTable\"\r\n                  [(selection)]=\"toolsTableSelection\"\r\n                  dataKey=\"_id\"\r\n                  [scrollable]=\"true\"\r\n                >\r\n                  <ng-template pTemplate=\"emptymessage\">\r\n                    <span *ngIf=\"!toolsTableLoading\"> &nbsp;</span>\r\n\r\n                    <div *ngIf=\"toolsTableLoading\" class=\"aw-table-loading-indicator\">\r\n                      <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                      <div class=\"lds-hourglass\"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"caption\">\r\n                    <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': toolsTableSelection.length > 0 }\">\r\n                      <div class=\"aw-table-global-filter\">\r\n                        <label class=\"aw-table-global-filter-label\">\r\n                          <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableAirworthinessGlobalFilter\r\n                          class=\"aw-table-global-filter-input\"\r\n                          type=\"text\"\r\n                          placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                          (input)=\"ptableTools.filterGlobal($event.target.value, 'contains')\"\r\n                        />\r\n                      </div>\r\n\r\n                      <div class=\"aw-table-actions\">\r\n                        <p-selectButton\r\n                          *ngIf=\"!toolsTableLoading\"\r\n                          class=\"aw-table-action custom-margin\"\r\n                          [(ngModel)]=\"toolsTableVisibilitySelected\"\r\n                          [options]=\"toolsTableVisibilityList\"\r\n                          (onChange)=\"onChangeToolsTableVisibility()\"\r\n                        ></p-selectButton>\r\n\r\n                        <button\r\n                          *ngIf=\"!toolsTableLoading && toolsTableSelection.length === 0\"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                          (click)=\"exportToolsTable()\"\r\n                        >\r\n                          <div *ngIf=\"exportingFlag\" class=\"lds-hourglass\"></div>\r\n                          {{ \"global.export\" | translate }}\r\n                        </button>\r\n                      </div>\r\n\r\n                      <div *ngIf=\"!toolsTableLoading\" class=\"aw-table-icon-actions\">\r\n                        <i\r\n                          *ngIf=\"isFleetViewMode\"\r\n                          class=\"fa fa-fw fa-calendar aw-icon aw-icon-with-border\"\r\n                          aria-hidden=\"true\"\r\n                          pTooltip=\"{{ componentName + '.showCalendar' | translate }}\"\r\n                          tooltipPosition=\"top\"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"colgroup\" let-columns>\r\n                    <colgroup>\r\n                      <!-- <col class=\"aw-table-checkbox-wrapper\" /> -->\r\n                      <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                      <col class=\"row-expand-wrapper\" />\r\n                      <col class=\"row-action-wrapper\" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"header\" let-columns>\r\n                    <tr>\r\n                      <!-- <th class=\"aw-table-checkbox-wrapper\">\r\n                        <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                      </th> -->\r\n\r\n                      <th\r\n                        pResizableColumn\r\n                        *ngFor=\"let col of columns\"\r\n                        [ngSwitch]=\"col.field\"\r\n                        [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                      >\r\n                        <span *ngSwitchDefault> {{ getComponentName() + \".\" + col.field | translate }} </span>\r\n                      </th>\r\n\r\n                      <th class=\"row-expand-wrapper\"></th>\r\n                      <th class=\"row-action-wrapper\"></th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template\r\n                    pTemplate=\"body\"\r\n                    let-rowData\r\n                    let-expanded=\"expanded\"\r\n                    let-columns=\"columns\"\r\n                    let-rowIndex=\"rowIndex\"\r\n                  >\r\n                    <tr\r\n                      *ngIf=\"\r\n                        toolsTableOnlyAlertsVisible\r\n                          ? rowData['alert'] !== undefined &&\r\n                            rowData['alert'] !== null &&\r\n                            (rowData['alert'] === controlConfigConstants.ICON_RED ||\r\n                              rowData['alert'] === controlConfigConstants.ICON_YELLOW)\r\n                          : true\r\n                      \"\r\n                      [pSelectableRow]=\"rowData\"\r\n                      [pSelectableRowIndex]=\"rowIndex\"\r\n                    >\r\n                      <!-- <td class=\"aw-table-checkbox-wrapper\">\r\n                        <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                      </td> -->\r\n\r\n                      <td\r\n                        *ngFor=\"let col of columns\"\r\n                        [ngSwitch]=\"col.field\"\r\n                        [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                      >\r\n                        <span *ngSwitchCase=\"'alert'\" pTooltip=\"{{ rowData['_alertTooltip'] }}\" tooltipPosition=\"top\">\r\n                          <div\r\n                            *ngIf=\"rowData['_alertLoading']\"\r\n                            class=\"lds-hourglass display--flex-row\"\r\n                            [ngClass]=\"{\r\n                              'flex-row--justify-center': col.alignment === 'center',\r\n                              'flex-row--justify-left': col.alignment === 'left',\r\n                              'flex-row--justify-right': col.alignment === 'right'\r\n                            }\"\r\n                          ></div>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              !rowData['_alertLoading'] &&\r\n                              rowData[col.field] !== undefined &&\r\n                              rowData[col.field] !== null &&\r\n                              rowData[col.field] === controlConfigConstants.ICON_GREEN\r\n                            \"\r\n                            class=\"alert alert--ok\"\r\n                          >\r\n                            {{ getComponentName() + \".alertOk\" | translate }}\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              !rowData['_alertLoading'] &&\r\n                              rowData[col.field] !== undefined &&\r\n                              rowData[col.field] !== null &&\r\n                              rowData[col.field] === controlConfigConstants.ICON_RED\r\n                            \"\r\n                            class=\"alert alert--nok\"\r\n                          >\r\n                            {{ getComponentName() + \".alertNok\" | translate }}\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              !rowData['_alertLoading'] &&\r\n                              rowData[col.field] !== undefined &&\r\n                              rowData[col.field] !== null &&\r\n                              rowData[col.field] === controlConfigConstants.ICON_YELLOW\r\n                            \"\r\n                            class=\"alert alert--warning\"\r\n                          >\r\n                            {{ getComponentName() + \".alertWarning\" | translate }}\r\n                          </span>\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngSwitchCase=\"'potential'\"\r\n                          pTooltip=\"{{ rowData['_obj'].remainingEquivalentTooltip }}\"\r\n                          tooltipPosition=\"top\"\r\n                        >\r\n                          <div\r\n                            *ngIf=\"rowData['_potentialLoading']\"\r\n                            class=\"lds-hourglass display--flex-row\"\r\n                            [ngClass]=\"{\r\n                              'flex-row--justify-center': col.alignment === 'center',\r\n                              'flex-row--justify-left': col.alignment === 'left',\r\n                              'flex-row--justify-right': col.alignment === 'right'\r\n                            }\"\r\n                          ></div>\r\n\r\n                          <i\r\n                            *ngIf=\"\r\n                              !rowData['_potentialLoading'] &&\r\n                              rowData['_obj'].remainingEquivalentIcon !== undefined &&\r\n                              rowData['_obj'].remainingEquivalentIcon !== null &&\r\n                              rowData['_obj'].remainingEquivalentIcon.length > 0 &&\r\n                              (rowData['_obj'].remainingEquivalentIcon === controlConfigConstants.ICON_RED ||\r\n                                rowData['_obj'].remainingEquivalentIcon === controlConfigConstants.ICON_YELLOW)\r\n                            \"\r\n                            class=\"fa fa-fw fa-exclamation-triangle\"\r\n                            aria-hidden=\"true\"\r\n                          ></i>\r\n                          <span *ngIf=\"!rowData['_potentialLoading']\">{{ rowData[col.field] }}</span>\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngSwitchCase=\"'asset'\"\r\n                          pTooltip=\"{{ rowData['_obj'].counterAlertTooltip }}\"\r\n                          tooltipPosition=\"top\"\r\n                        >\r\n                          <i\r\n                            *ngIf=\"\r\n                              rowData['_obj'].counterAlertStatus !== undefined &&\r\n                              rowData['_obj'].counterAlertStatus !== null &&\r\n                              rowData['_obj'].counterAlertStatus.length > 0 &&\r\n                              (rowData['_obj'].counterAlertStatus === controlConfigConstants.ICON_RED ||\r\n                                rowData['_obj'].counterAlertStatus === controlConfigConstants.ICON_YELLOW)\r\n                            \"\r\n                            class=\"fa fa-fw fa-exclamation-triangle\"\r\n                            aria-hidden=\"true\"\r\n                          ></i>\r\n                          <a (click)=\"openSubAsset(rowData)\">{{ rowData[col.field] }}</a>\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'mp'\">\r\n                          <a (click)=\"openMaintenanceProgram(rowData[col.field])\">{{ rowData[col.field] }}</a>\r\n                        </span>\r\n                        <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                      </td>\r\n\r\n                      <td class=\"row-expand-wrapper\" [pRowToggler]=\"rowData\">\r\n                        <i\r\n                          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n                          [ngClass]=\"rowData['_expand'] ? 'fa-minus' : 'fa-plus'\"\r\n                          aria-hidden=\"true\"\r\n                          pTooltip=\"{{ 'global.showTableRowDetails' | translate }}\"\r\n                          tooltipPosition=\"top\"\r\n                          (click)=\"toggleToolsTableRowDetailsVisibility(rowData)\"\r\n                        ></i>\r\n                      </td>\r\n\r\n                      <td class=\"row-action-wrapper\">\r\n                        <i\r\n                          *ngIf=\"rowData['hasChildren']\"\r\n                          class=\"fa fa-fw fa-chevron-right aw-icon aw-icon-with-border\"\r\n                          aria-hidden=\"true\"\r\n                          pTooltip=\"{{ componentName + '.goDown' | translate }}\"\r\n                          tooltipPosition=\"top\"\r\n                        ></i>\r\n                      </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"!!rowData._expand\" class=\"row-expanded\">\r\n                      <td [attr.colspan]=\"columns.length + 2\">\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".remainingDays\" | translate }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                *ngIf=\"!!rowData.remainingDays\"\r\n                                class=\"aw-input\"\r\n                                type=\"text\"\r\n                                [(ngModel)]=\"rowData.remainingDays\"\r\n                                [disabled]=\"true\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".tasks\" | translate }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <span\r\n                                *ngIf=\"!!rowData.tasks\"\r\n                                class=\"form-control-generic\"\r\n                                title=\"{{ rowData._airworthinessAlertTooltip }}\"\r\n                              >\r\n                                <span\r\n                                  *ngIf=\"\r\n                                    !rowData['_alertLoading'] &&\r\n                                    rowData.tasks !== undefined &&\r\n                                    rowData.tasks !== null &&\r\n                                    rowData.tasks === controlConfigConstants.ICON_GREEN\r\n                                  \"\r\n                                  class=\"alert alert--ok\"\r\n                                  style=\"text-align: center\"\r\n                                >\r\n                                  {{ getComponentName() + \".alertOk\" | translate }}\r\n                                </span>\r\n\r\n                                <span\r\n                                  *ngIf=\"\r\n                                    !rowData['_alertLoading'] &&\r\n                                    rowData.tasks !== undefined &&\r\n                                    rowData.tasks !== null &&\r\n                                    rowData.tasks === controlConfigConstants.ICON_RED\r\n                                  \"\r\n                                  class=\"alert alert--nok\"\r\n                                >\r\n                                  {{ getComponentName() + \".alertNok\" | translate }}\r\n                                </span>\r\n\r\n                                <span\r\n                                  *ngIf=\"\r\n                                    !rowData['_alertLoading'] &&\r\n                                    rowData.tasks !== undefined &&\r\n                                    rowData.tasks !== null &&\r\n                                    rowData.tasks === controlConfigConstants.ICON_YELLOW\r\n                                  \"\r\n                                  class=\"alert alert--warning\"\r\n                                >\r\n                                  {{ getComponentName() + \".alertWarning\" | translate }}\r\n                                </span>\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\"></div>\r\n                          <div class=\"form-group\"></div>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-control-simulation\r\n  *ngIf=\"simulationDialogVisible\"\r\n  [(display)]=\"simulationDialogVisible\"\r\n  (onValidated)=\"onSimulate($event)\"\r\n></aw-dialog-control-simulation>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host #tools-control-form .in-simulation {\n  border-left-color: #ffc107 !important;\n  border-left-style: solid;\n  border-left-width: 8px !important; }\n\n:host #tools-control-form .grid-cell-detail .form-control-potential-unit {\n  width: 4rem; }\n\n:host #tools-control-form .grid-cell-state-simulation {\n  background-color: #ffc107;\n  padding: 0; }\n\n:host #tools-control-form .grid-cell-state-simulation .grid-cell-title {\n    color: #000; }\n\n:host #tools-control-form .grid-cell-state-simulation .simulation-criterion:not(:last-of-type)::after {\n    content: \" | \"; }\n\n:host #tools-control-form .grid-cell-remaining-values {\n  min-height: 14rem; }\n\n:host #tools-control-form .grid-cell-summary {\n  min-height: 12rem; }\n\n:host #tools-control-form .grid-cell-summary .chart-container {\n    display: flex;\n    flex-direction: row; }\n\n@media screen and (max-width: 1280px) {\n      :host #tools-control-form .grid-cell-summary .chart-container {\n        flex-direction: column; } }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-legend {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      margin-left: 8px; }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label {\n        display: flex;\n        flex-direction: row;\n        align-items: center; }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n          height: 0.75rem;\n          margin-right: 8px;\n          width: 2rem; }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.airworthy {\n            background-color: #4caf50; }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.airworthy-with-alerts {\n            background-color: #ffc107; }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-airworthy {\n            background-color: #f6685e; }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-legend .chart-value {\n        font-weight: 700;\n        margin-left: 8px; }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-wrapper {\n      position: relative;\n      height: 12rem;\n      width: 14rem; }\n\n:host #tools-control-form .custom-margin {\n  margin-right: 5px; }\n\n:host #tools-control-form .paddingClass {\n  padding-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvdG9vbHMtbWFpbnRlbmFuY2Utc3RhdHVzL2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX21vZGlmaWVycy5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy90b29scy1tYWludGVuYW5jZS1zdGF0dXMvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXHRvb2xzLW1haW50ZW5hbmNlLXN0YXR1c1xcZm9ybVxcdG9vbHMtbWFpbnRlbmFuY2Utc3RhdHVzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbG9naXN0aWNzL3Rvb2xzLW1haW50ZW5hbmNlLXN0YXR1cy9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvdG9vbHMtbWFpbnRlbmFuY2Utc3RhdHVzL2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5Q0FBaUM7RUFBakMsc0NBQWlDO0VBQWpDLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLG9DQUE0QjtLQUE1QixpQ0FBNEI7TUFBNUIsZ0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQTs7QUFLYjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLHNDQUFzQyxFQUFBOztBQ3pIeEM7RUFFSSxxQ0FBcUM7RUFDckMsd0JBQXdCO0VBQ3hCLGlDQUFpQyxFQUFBOztBQUpyQztFQVNNLFdBQVcsRUFBQTs7QUFUakI7RUFjSSx5QkNJWTtFREhaLFVBQVUsRUFBQTs7QUFmZDtJQWtCTSxXQ3BCbUIsRUFBQTs7QURFekI7SUFzQk0sY0FBYyxFQUFBOztBQXRCcEI7RUEyQkksaUJBQWlCLEVBQUE7O0FBM0JyQjtFQStCSSxpQkFBaUIsRUFBQTs7QUEvQnJCO0lFbUJFLGFBQWE7SUFDYixtQkFBbUIsRUFBQTs7QUZnQmY7TUFwQ047UUFxQ1Esc0JBQXNCLEVBQUEsRUE0Q3pCOztBQWpGTDtNRWNFLGFBQWE7TUFDYixzQkFBc0I7TUY0QmhCLHVCQUF1QjtNQUN2QixnQkNKVSxFQUFBOztBRHhDbEI7UUVtQkUsYUFBYTtRQUNiLG1CQUFtQjtRRjZCWCxtQkFBbUIsRUFBQTs7QUFqRDdCO1VBb0RZLGVBQWU7VUFDZixpQkNiTTtVRGNOLFdBQVcsRUFBQTs7QUF0RHZCO1lBeURjLHlCQ3hDUSxFQUFBOztBRGpCdEI7WUE2RGMseUJDM0NFLEVBQUE7O0FEbEJoQjtZQWlFYyx5QkM3Q00sRUFBQTs7QURwQnBCO1FBdUVVLGdCQUFnQjtRQUNoQixnQkNoQ1EsRUFBQTs7QUR4Q2xCO01BNkVRLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsWUFBWSxFQUFBOztBQS9FcEI7RUFxRkksaUJBQWlCLEVBQUE7O0FBckZyQjtFQXlGSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3Rvb2xzLW1haW50ZW5hbmNlLXN0YXR1cy9mb3JtL3Rvb2xzLW1haW50ZW5hbmNlLXN0YXR1cy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXktLWZsZXgtY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzcGxheS0tZmxleC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5LS1ub25lIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWlnaHQtLTEwMCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWluLXdpZHRoLS1maXQtY29udGVudCB7XHJcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9zaXRpb24tLXJlbGF0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjcm9sbC15LS1ub25lIHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtLXVuc2VsZWN0YWJsZSB7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpc2liaWxpdHktLWhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC0tMTAge1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi53aWR0aC0tMjAge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi53aWR0aC0tMzAge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNDAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNTAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNjAge1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNzAge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tODAge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tOTAge1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tMTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLmZsZXgtLTEge1xyXG4gIGZsZXg6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTIge1xyXG4gIGZsZXg6IDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTMge1xyXG4gIGZsZXg6IDMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTQge1xyXG4gIGZsZXg6IDQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTUge1xyXG4gIGZsZXg6IDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLWF1dG8ge1xyXG4gIGZsZXg6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1lbmQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLXN0YXJ0IHtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktZW5kIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1zdGFydCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJtb2RpZmllcnNcIjtcclxuXHJcbjpob3N0ICN0b29scy1jb250cm9sLWZvcm0ge1xyXG4gIC5pbi1zaW11bGF0aW9uIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLWRldGFpbCB7XHJcbiAgICAuZm9ybS1jb250cm9sLXBvdGVudGlhbC11bml0IHtcclxuICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLXN0YXRlLXNpbXVsYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgLmdyaWQtY2VsbC10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaW11bGF0aW9uLWNyaXRlcmlvbjpub3QoOmxhc3Qtb2YtdHlwZSk6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCIgfCBcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtcmVtYWluaW5nLXZhbHVlcyB7XHJcbiAgICBtaW4taGVpZ2h0OiAxNHJlbTtcclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtc3VtbWFyeSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMnJlbTtcclxuXHJcbiAgICAuY2hhcnQtY29udGFpbmVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGFydC1sZWdlbmQge1xyXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcblxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAuY2hhcnQtbGVnZW5kLWxhYmVsIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAuY2hhcnQtbGVnZW5kLWxhYmVsLWNvbG9yIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwLjc1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG5cclxuICAgICAgICAgICAgJi5haXJ3b3J0aHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYWlyd29ydGh5LXdpdGgtYWxlcnRzIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLm5vdC1haXJ3b3J0aHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhcnQtdmFsdWUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoYXJ0LXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgICAgIHdpZHRoOiAxNHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAucGFkZGluZ0NsYXNzIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVdGlscyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gYnV0dG9uLWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCAkY29sb3IsICRib3JkZXItY29sb3I6IG51bGwpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyLFxyXG4gICY6bm90KDpkaXNhYmxlZCkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogaWYoJGJvcmRlci1jb2xvciA9PSBudWxsLCAkY29sb3IsICRib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgtY29sdW1uKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtcm93KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQG1peGluIGlucHV0KCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1kaXNhYmxlZCgpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZm9jdXMoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1ob3ZlcigpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlYXJjaC1jcml0ZXJpYS1jb250YWluZXIge1xyXG4gIC5hZHZhbmNlZC1jcml0ZXJpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgICYucmVxdWlyZWQge1xyXG4gICAgICBAaW5jbHVkZSBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCgpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHcmlkIGZvcm0gY29udHJvbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViTWVkaXVtXCI7XHJcblxyXG4gICYgPiBpbnB1dCArIHAtbWVzc2FnZSA+IC51aS1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyNTUsIDI1NSwgMjU1KSA2MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAuYXctaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuLFxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG5cclxuICAgICAgJi5hdy1jYWxlbmRhciAudWktaW5wdXR0ZXh0LFxyXG4gICAgICAmLmF3LWRyb3Bkb3duIC51aS1kcm9wZG93bixcclxuICAgICAgJi5hdy1pbnB1dCxcclxuICAgICAgJi5hdy10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctY2FsZW5kYXIge1xyXG4gICAgICAvLyBGSVhNRTogZml4IGFuIFVJIGlzc3VlIG9uIFByaW1lTkcgY2FsZW5kYXIgY29tcG9uZW50OyB0byByZW1vdmUgd2hlbiBpc3N1ZSB3aWxsIGJlIGZpeGVkIHVwc3RyZWFtXHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAuYXctaWNvbjpub3QoLnJlYWQtb25seS1saW5rKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIG5vbmVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW5pbXAsXHJcbiAgICAuYnRuLWV4dGVybmFsLWxpbmstd3JhcHBlcixcclxuICAgIC5idG4tY2xlYXItd3JhcHBlcixcclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlcixcclxuICAgIC5idG4tc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgICAuYXctZmlsZXVwbG9hZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudWktYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWNsZWFyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtcmFkaW9idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAmID4gLmF3LXJhZGlvYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jYWxlbmRhciB7XHJcbiAgJi51aS1pbnB1dHdyYXBwZXItZm9jdXMge1xyXG4gICAgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkY2hlY2tib3gtaGVpZ2h0O1xyXG4gIHdpZHRoOiAkY2hlY2tib3gtaGVpZ2h0O1xyXG5cclxuICAudWktY2hrYm94IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1jaGtib3gtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZHJvcGRvd24ge1xyXG4gIC51aS1kcm9wZG93biB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1mb2N1cyB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbixcclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gICAgICByaWdodDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDEuNzVyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5maXhlZC13aWR0aCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZpbGV1cGxvYWQge1xyXG4gIEBleHRlbmQgLmF3LWJ0bjtcclxuXHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnVpLWZpbGV1cGxvYWQtY2hvb3NlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudWktYnV0dG9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWlucHV0KCkge1xyXG4gIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZXh0YXJlYSB7XHJcbiAgQGluY2x1ZGUgZ3JpZC1pbnB1dCgpO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1yYWRpb2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuICB3aWR0aDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuXHJcbiAgLnVpLXJhZGlvYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAudWktcmFkaW9idXR0b24taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGNhbGVuZGFyLXBhbmVsIHtcclxuICAudWktZGF0ZXBpY2tlcjpub3QoLnVpLWRhdGVwaWNrZXItaW5saW5lKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcm9wZG93bi1wYW5lbCB7XHJcbiAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciAudWktZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgIC51aS1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ToolsMaintenanceStatusFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsMaintenanceStatusFormComponent", function() { return ToolsMaintenanceStatusFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/bire-unit-measure-constants */ "./src/app/shared/constants/bire-unit-measure-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/constants/control-config-constants */ "./src/app/shared/constants/control-config-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/export.service */ "./src/app/shared/services/export.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/utils/bido-equipment-utils */ "./src/app/shared/utils/bido-equipment-utils.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _tools_maintenance_status_form_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tools-maintenance-status-form.service */ "./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.service.ts");
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
























var ToolsMaintenanceStatusFormComponent = /** @class */ (function (_super) {
    __extends(ToolsMaintenanceStatusFormComponent, _super);
    function ToolsMaintenanceStatusFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, dateService, translateService, toolsMaintenanceStatusFormService, exportService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.dateService = dateService;
        _this.translateService = translateService;
        _this.toolsMaintenanceStatusFormService = toolsMaintenanceStatusFormService;
        _this.exportService = exportService;
        _this.controlConfigConstants = _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"];
        _this.setPotentialUnitList();
        return _this;
    }
    ToolsMaintenanceStatusFormComponent_1 = ToolsMaintenanceStatusFormComponent;
    ToolsMaintenanceStatusFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__["ComponentConstants"].LOG_TOOLS_MAINTENANCE_STATUS_FORM;
    };
    ToolsMaintenanceStatusFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.topEquipmentCodeList =
            !!this.componentData.objectId &&
                !!this.serializationService.deserialize(this.componentData.objectId)
                ? this.serializationService.deserialize(this.componentData.objectId)
                : [];
        this.potentialUnitSelected = _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__["BireUnitMeasureConstants"].HOUR;
        this.init();
    };
    /**********************************
     * PAGE OPERATIONS
     **********************************/
    ToolsMaintenanceStatusFormComponent.prototype.reload = function () {
        this.init();
    };
    ToolsMaintenanceStatusFormComponent.prototype.simulate = function () {
        this.simulationDialogVisible = true;
    };
    /**********************************
     * INITIALIZATION
     **********************************/
    ToolsMaintenanceStatusFormComponent.prototype.init = function () {
        var _this = this;
        this.toolsTable = [];
        this.toolsTableSelection = [];
        this.toolsTableVisibilitySelected = 0;
        this.designationList = [];
        this.pnCodeList = [];
        this.snCodeList = [];
        this.familyVariantList = [];
        this.toolsTreeTable = [];
        this.toolsMap = new Map();
        this.minimumRemainingEquivalentMap = new Map();
        this.initChart();
        this.initTableHeader();
        this.setToolsTableVisibilityList();
        this.toolsMaintenanceStatusFormService.fetchGroundEquipmentFunctionList().subscribe(function (results) {
            _this.groundEquipmentTypes = results;
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetGroundEquipmentTypes'));
        });
        this.load();
    };
    ToolsMaintenanceStatusFormComponent.prototype.setPotentialUnitList = function () {
        var _this = this;
        var cyclesKey = this.getTranslateKey('cycles');
        var daysKey = this.getTranslateKey('days');
        var hoursKey = this.getTranslateKey('hours');
        this.translateService.get([daysKey, cyclesKey, hoursKey]).subscribe(function (results) {
            var cyclesLabel = results ? results[cyclesKey] : 'Cycles';
            var daysLabel = results ? results[daysKey] : 'Days';
            var hoursLabel = results ? results[hoursKey] : 'Hours';
            _this.potentialUnitList = [
                {
                    label: cyclesLabel,
                    command: function () {
                        _this.updatePotentialUnit(_shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__["BireUnitMeasureConstants"].CYCLE);
                    }
                },
                {
                    label: daysLabel,
                    command: function () {
                        _this.updatePotentialUnit(_shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__["BireUnitMeasureConstants"].DAY);
                    }
                },
                {
                    label: hoursLabel,
                    command: function () {
                        _this.updatePotentialUnit(_shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__["BireUnitMeasureConstants"].HOUR);
                    }
                }
            ];
        });
    };
    /**********************************
     * TOOLS TABLE HEADER
     **********************************/
    ToolsMaintenanceStatusFormComponent.prototype.initTableHeader = function () {
        this.toolsTableCols = [
            { field: 'alert', alignment: 'center', width: '10%' },
            { field: 'asset', alignment: 'left', width: '15%' },
            { field: 'designation', alignment: 'left', width: '30%' },
            { field: 'potential', alignment: 'left', width: '15%' },
            { field: 'status', alignment: 'left', width: '20%' },
            { field: 'mp', alignment: 'left', width: '10%' }
        ];
    };
    /**********************************
     * CHART OPERATIONS
     **********************************/
    ToolsMaintenanceStatusFormComponent.prototype.initChart = function () {
        this.chartType = 'pie';
        this.chartVisible = false;
        this.chartData = {
            datasets: [
                {
                    data: [0, 0, 0],
                    backgroundColor: [_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].COLOR_GREEN, _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].COLOR_ORANGE, _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].COLOR_RED],
                    hoverBackgroundColor: [_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].COLOR_GREEN, _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].COLOR_ORANGE, _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].COLOR_RED]
                }
            ],
            labels: []
        };
        this.servicableEquipmentNb = 0;
        this.servicableWithAlertEquipmentNb = 0;
        this.notservicableEquipmentNb = 0;
        this.setChartLabels();
        this.setChartOptions();
    };
    ToolsMaintenanceStatusFormComponent.prototype.setChartLabels = function () {
        var _this = this;
        var servicableKey = this.getTranslateKey('servicable');
        var serviceableWithAlertsKey = this.getTranslateKey('serviceableWithAlerts');
        var notServiceableKey = this.getTranslateKey('notServiceable');
        this.translateService.get([servicableKey, serviceableWithAlertsKey, notServiceableKey]).subscribe(function (results) {
            var servicableLabel = results ? results[servicableKey] : '';
            var serviceableWithAlertsLabel = results ? results[serviceableWithAlertsKey] : 'Serviceable with alerts';
            var notServiceableLabel = results ? results[notServiceableKey] : 'Not serviceable';
            _this.chartData.labels = [servicableLabel, serviceableWithAlertsLabel, notServiceableLabel];
        });
    };
    ToolsMaintenanceStatusFormComponent.prototype.setChartOptions = function () {
        this.chartOptions = {
            legend: {
                display: false
            },
            tooltips: {
                bodyFontColor: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].COLOR_BACKGROUND_PRIMARY
            }
        };
    };
    ToolsMaintenanceStatusFormComponent.prototype.clearChartData = function () {
        this.chartData.datasets[0].data = [0, 0, 0];
        this.servicableEquipmentNb = 0;
        this.servicableWithAlertEquipmentNb = 0;
        this.notservicableEquipmentNb = 0;
    };
    ToolsMaintenanceStatusFormComponent.prototype.updateChartData = function () {
        var _this = this;
        this.toolsTable.forEach(function (row) {
            if (row.alert) {
                var SERVICABLE_VALUES_INDEX = 0;
                var SERVICABLE_WITH_ALERTS_VALUES_INDEX = 1;
                var NOT_SERVICABLE_VALUES_INDEX = 2;
                if (row.alert === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"].ICON_GREEN) {
                    _this.chartData.datasets[0].data[SERVICABLE_VALUES_INDEX]++;
                    _this.servicableEquipmentNb = _this.chartData.datasets[0].data[SERVICABLE_VALUES_INDEX];
                }
                if (row.alert === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"].ICON_YELLOW) {
                    _this.chartData.datasets[0].data[SERVICABLE_WITH_ALERTS_VALUES_INDEX]++;
                    _this.servicableWithAlertEquipmentNb = _this.chartData.datasets[0].data[SERVICABLE_WITH_ALERTS_VALUES_INDEX];
                }
                if (row.alert === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"].ICON_RED) {
                    _this.chartData.datasets[0].data[NOT_SERVICABLE_VALUES_INDEX]++;
                    _this.notservicableEquipmentNb = _this.chartData.datasets[0].data[NOT_SERVICABLE_VALUES_INDEX];
                }
                _this.chartData = __assign({}, _this.chartData);
                _this.chartVisible = _this.chartData.datasets[0].data.some(function (elt) { return elt > 0; });
            }
        });
    };
    /**********************************
     * Generate Table data
     **********************************/
    ToolsMaintenanceStatusFormComponent.prototype.setToolsTableVisibilityList = function () {
        var _this = this;
        var allKey = this.getTranslateKey('showAll');
        var onlyAlertsKey = this.getTranslateKey('showOnlyAlerts');
        this.translateService.get([allKey, onlyAlertsKey]).subscribe(function (results) {
            var allLabel = !!results ? results[allKey] : 'Show All';
            var onlyAlertsLabel = !!results ? results[onlyAlertsKey] : 'Show Only Alerts';
            _this.toolsTableVisibilityList = [
                { label: allLabel, value: 0 },
                { label: onlyAlertsLabel, value: 1 }
            ];
        });
    };
    ToolsMaintenanceStatusFormComponent.prototype.onChangeToolsTableVisibility = function () {
        this.toolsTableOnlyAlertsVisible = this.toolsTableVisibilitySelected === 1;
        if (this.toolsTableOnlyAlertsVisible) {
            this.toolsTableDisplayedRowNb = this.toolsTable.filter(function (elt) {
                return elt.alert !== undefined &&
                    elt.alert !== null &&
                    (elt.alert === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"].ICON_RED || elt.alert === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"].ICON_YELLOW);
            }).length;
        }
    };
    ToolsMaintenanceStatusFormComponent.prototype.load = function () {
        var _this = this;
        this.toolsTableLoading = true;
        this.panelLoading = true;
        this.toolsTable = [];
        this.chartVisible = false;
        this.designationList = [];
        this.pnCodeList = [];
        this.snCodeList = [];
        this.familyVariantList = [];
        this.clearChartData();
        var airworthinessTableParams = {
            equipmentCodeList: this.topEquipmentCodeList,
            simulation: this.simulationCriteria !== undefined,
            simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
            simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
            simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
            unitEquivalent: this.potentialUnitSelected
        };
        this.toolsMaintenanceStatusFormService.generateAirworthinessControlTable(airworthinessTableParams).subscribe(function (results) {
            _this.toolsTableLoading = false;
            _this.toolsTreeTable = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__["ListUtils"].orEmpty(results).filter(function (elt) { return elt.bidoEquipment && !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__["StringUtils"].isNullOrEmpty(elt.bidoEquipment.equipmentCode); });
            _this.createAllToolsRow(_this.toolsTreeTable);
            _this.createDataForToolsPanel(results);
            _this.toolsTable = _this.toolsTreeTable.map(function (elt) { return _this.toolsMap.get(elt.bidoEquipment.equipmentCode); });
            _this.computeGlobalAlertForEachTopEquipment(_this.toolsTable);
            _this.toolsTableLoading = false;
            _this.panelLoading = false;
        }, function (error) {
            _this.toolsTableLoading = false;
            _this.panelLoading = false;
        });
    };
    ToolsMaintenanceStatusFormComponent.prototype.createDataForToolsPanel = function (results) {
        var _this = this;
        // Setting data for First Panel
        results.forEach(function (res) {
            if (!!res && !!res.bidoEquipment) {
                if (!!res.bidoEquipment.equipmentDesignation &&
                    _this.designationList.indexOf(res.bidoEquipment.equipmentDesignation) === -1) {
                    _this.designationList.push(res.bidoEquipment.equipmentDesignation);
                }
                if (!!res.bidoEquipment.pnCode && _this.pnCodeList.indexOf(res.bidoEquipment.pnCode) === -1) {
                    _this.pnCodeList.push(res.bidoEquipment.pnCode);
                }
                if (!!res.bidoEquipment.sn && _this.snCodeList.indexOf(res.bidoEquipment.sn) === -1) {
                    _this.snCodeList.push(res.bidoEquipment.sn);
                }
                if (!!res.bidoEquipment.familyVariantCode &&
                    _this.familyVariantList.indexOf(res.bidoEquipment.familyVariantCode) === -1) {
                    _this.familyVariantList.push(res.bidoEquipment.familyVariantCode);
                }
                _this.displayComponentContext(_this.displayToolInfo(_this.familyVariantList), _this.isCreateOpenMode);
            }
        });
    };
    ToolsMaintenanceStatusFormComponent.prototype.createAllToolsRow = function (list) {
        var _this = this;
        if (list.length > 0) {
            list.forEach(function (elt) {
                _this.toolsMap.set(elt.bidoEquipment.equipmentCode, _this.createAirworthinessRow(elt));
                _this.createAllToolsRow(elt.children);
            });
        }
    };
    ToolsMaintenanceStatusFormComponent.prototype.computeGlobalAlertForEachTopEquipment = function (topEquipmentList) {
        var _this = this;
        this.clearChartData();
        topEquipmentList.forEach(function (equipment) {
            equipment._alertLoading = true;
        });
        this.togglePotentialLoadingIndicator(true);
        var observables = topEquipmentList.map(function (equipment) {
            var input = {
                equipmentCodeList: _this.topEquipmentCodeList,
                simulation: _this.simulationCriteria !== undefined,
                simulationCyclesValue: _this.simulationCriteria ? _this.simulationCriteria.inCycles : undefined,
                simulationDateValue: _this.simulationCriteria ? _this.simulationCriteria.atDate : undefined,
                simulationHoursValue: _this.simulationCriteria ? _this.simulationCriteria.inHours : undefined,
                equipmentToCheck: equipment._obj.bidoEquipment.equipmentCode
            };
            return _this.toolsMaintenanceStatusFormService.checkEquipmentForAirworthinessControl(input);
        });
        rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, __spread(observables)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.updateChartData();
            _this.setPotentialForAllEquipment(_this.toolsTreeTable);
        }))
            .subscribe(function (result) {
            var matchingEquipment = topEquipmentList.find(function (equipment) { return equipment._obj.bidoEquipment.equipmentCode === result.bidoEquipment.equipmentCode; });
            if (!!matchingEquipment) {
                matchingEquipment._alertLoading = false;
                matchingEquipment.alert = result.airworthinessAlertIcon;
            }
        });
    };
    /**********************************
     * UPDATE POTENTIAL
     **********************************/
    ToolsMaintenanceStatusFormComponent.prototype.updatePotentialUnit = function (unit) {
        var _this = this;
        this.potentialUnitSelected = unit;
        this.togglePotentialLoadingIndicator(true);
        var params = {
            equipmentCodeList: this.topEquipmentCodeList,
            simulation: this.simulationCriteria !== undefined,
            simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
            simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
            simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
            unitEquivalent: this.potentialUnitSelected
        };
        this.toolsMaintenanceStatusFormService.computePotentialForAirworthinessControlInput(params).subscribe(function (results) {
            _this.setPotentialForAllEquipment(results);
        });
    };
    ToolsMaintenanceStatusFormComponent.prototype.setPotentialForAllEquipment = function (results) {
        var _this = this;
        // Compute minimum remaining equivalent for each equipment
        _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__["ListUtils"].orEmpty(results).forEach(function (result) {
            var minimumRemainingEquivalent = _this.findMinimumRemainingEquivalent(result.children);
            if (result.code && minimumRemainingEquivalent) {
                _this.minimumRemainingEquivalentMap.set(result.code, minimumRemainingEquivalent);
            }
        });
        // if (this.isAssetViewMode) {
        //   this.topAssetAirworthinessTableRemainingValuesComponent.load();
        // }
        var treeNodeMap = this.mapTreeNodeByEquipmentCode(results);
        treeNodeMap.forEach(function (_, key) {
            var treeNode = treeNodeMap.get(key);
            var matchingElt = _this.toolsMap.get(key);
            if (!!treeNode) {
                matchingElt.potential = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__["StringUtils"].orEmpty(treeNode.remainingEquivalent);
                matchingElt._obj.remainingEquivalent = treeNode.remainingEquivalent;
                matchingElt._obj.remainingEquivalentIcon = treeNode.remainingEquivalentIcon;
                matchingElt._obj.remainingEquivalentTooltip = treeNode.remainingEquivalentTooltip;
                if (matchingElt.alert === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"].ICON_YELLOW) {
                    var lowRemainingKey = _this.getTranslateKey('lowRemaining');
                    _this.translateService.get(lowRemainingKey).subscribe(function (translatedKey) {
                        matchingElt._alertTooltip = translatedKey || 'Low remaining';
                    });
                }
                else if (matchingElt.alert === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"].ICON_RED) {
                    var missingAssetInAppliedConfigurationKey_1 = _this.getTranslateKey('missingAssetInAppliedConfiguration');
                    var overPotentialKey_1 = _this.getTranslateKey('overduePotential');
                    var overPotentialSubassemblyKey_1 = _this.getTranslateKey('overduePotentialSubAssembly');
                    _this.translateService
                        .get([missingAssetInAppliedConfigurationKey_1, overPotentialKey_1, overPotentialSubassemblyKey_1])
                        .subscribe(function (translatedKeys) {
                        var missingAssetInAppliedConfigurationLabel = !!translatedKeys
                            ? translatedKeys[missingAssetInAppliedConfigurationKey_1]
                            : 'Missing asset in the applied configuration';
                        var overPotentialLabel = !!translatedKeys ? translatedKeys[overPotentialKey_1] : 'Overdue potential';
                        var overPotentialSubassemblyLabel = !!translatedKeys
                            ? translatedKeys[overPotentialSubassemblyKey_1]
                            : 'Overdue potential on sub-assemblies';
                        var alertList = [];
                        if (!!matchingElt.potential && matchingElt.potential.startsWith('-')) {
                            alertList = __spread(alertList, [overPotentialLabel]);
                        }
                        var overduePotentialSubAssembly = matchingElt._obj.children.some(function (child) {
                            return _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__["StringUtils"].orEmpty(child.remainingEquivalent).startsWith('-');
                        });
                        if (overduePotentialSubAssembly) {
                            alertList = __spread(alertList, [overPotentialSubassemblyLabel]);
                        }
                        if (treeNode.checkResultIcon === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"].ICON_RED) {
                            alertList = __spread(alertList, [missingAssetInAppliedConfigurationLabel]);
                        }
                        matchingElt._alertTooltip = alertList.join(' & ');
                    });
                }
            }
        });
        this.togglePotentialLoadingIndicator(false);
    };
    ToolsMaintenanceStatusFormComponent.prototype.mapTreeNodeByEquipmentCode = function (list) {
        var map = new Map();
        var queue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(list);
        while (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__["ListUtils"].isEmpty(queue)) {
            var first = queue.shift();
            queue = __spread(queue, first.children);
            map.set(first.bidoEquipment.equipmentCode, first);
        }
        return map;
    };
    ToolsMaintenanceStatusFormComponent.prototype.findMinimumRemainingEquivalent = function (list) {
        var remainingEquivalent;
        var queue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(list);
        while (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__["ListUtils"].isEmpty(queue)) {
            var first = queue.shift();
            queue = __spread(queue, first.children);
            if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__["ObjectUtils"].isDefined(first.remainingEquivalentValue)) {
                if (!remainingEquivalent) {
                    remainingEquivalent = first;
                }
                else {
                    var currMin = remainingEquivalent
                        .remainingEquivalentValue;
                    var newMin = first.remainingEquivalentValue;
                    if (newMin < currMin) {
                        remainingEquivalent = first;
                    }
                }
            }
        }
        return remainingEquivalent;
    };
    ToolsMaintenanceStatusFormComponent.prototype.togglePotentialLoadingIndicator = function (newStatus) {
        this.toolsTable.forEach(function (elt) {
            elt._potentialLoading = newStatus;
        });
    };
    /**********************************
     * RENDER TOOLS TABLE ROW
     **********************************/
    ToolsMaintenanceStatusFormComponent.prototype.createAirworthinessRow = function (elt) {
        return {
            alert: elt.airworthinessAlertIcon,
            asset: _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_19__["BidoEquipmentUtils"].createAssetName(elt.bidoEquipment),
            designation: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__["StringUtils"].orEmpty(elt.assetDesignation),
            remainingDays: elt.remainingDays,
            mp: elt.maintenanceProgram,
            potential: '',
            status: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__["StringUtils"].orEmpty(elt.status),
            hasChildren: elt.children.length > 0,
            tasks: elt.airworthinessAlertIcon,
            _id: elt.bidoEquipment.equipmentCode,
            _obj: elt,
            _alertLoading: false,
            _alertTooltip: '',
            _airworthinessAlertTooltip: elt.airworthinessAlertTooltip,
            _expand: false,
            _potentialLoading: false
        };
    };
    ToolsMaintenanceStatusFormComponent.prototype.toggleToolsTableRowDetailsVisibility = function (row) {
        row._expand = !row._expand;
    };
    /**********************************
     * OPENING ASSET UC
     **********************************/
    ToolsMaintenanceStatusFormComponent.prototype.openSubAsset = function (subAssembly) {
        if (subAssembly._obj.bidoEquipment.equipmentCode && subAssembly._obj.bidoEquipment.equipmentFunction) {
            switch (subAssembly._obj.bidoEquipment.equipmentFunction) {
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY:
                    this.openAircraft(subAssembly._obj.bidoEquipment.equipmentCode);
                    break;
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY:
                    this.openEngine(subAssembly._obj.bidoEquipment.equipmentCode);
                    break;
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].ITEM_FAMILY_CODE_TOOL_KEY:
                    this.openTool(subAssembly._obj.bidoEquipment.equipmentCode);
                    break;
                default:
                    this.openEquipment(subAssembly._obj.bidoEquipment.equipmentCode);
                    break;
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnOpenSubAssembly'));
        }
    };
    ToolsMaintenanceStatusFormComponent.prototype.openAircraft = function (equipmentCode) {
        var objectId = {
            equipmentCode: equipmentCode
        };
        var data = {
            id: this.tabService.generateId(),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read,
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__["ComponentConstants"].FLE_AIRCRAFT_FORM,
            objectId: this.serializationService.serialize(objectId)
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ToolsMaintenanceStatusFormComponent.prototype.openEngine = function (equipmentCode) {
        var objectId = {
            equipmentCode: equipmentCode
        };
        var data = {
            id: this.tabService.generateId(),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read,
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__["ComponentConstants"].FLE_ENGINE_FORM,
            objectId: this.serializationService.serialize(objectId)
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ToolsMaintenanceStatusFormComponent.prototype.openEquipment = function (equipmentCode) {
        var objectId = {
            equipmentCode: equipmentCode
        };
        var data = {
            id: this.tabService.generateId(),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read,
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__["ComponentConstants"].FLE_EQUIPMENT_FORM,
            objectId: this.serializationService.serialize(objectId)
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ToolsMaintenanceStatusFormComponent.prototype.openTool = function (equipmentCode) {
        var objectId = {
            equipmentCode: equipmentCode
        };
        var data = {
            id: this.tabService.generateId(),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read,
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__["ComponentConstants"].LOG_TOOL_FORM,
            objectId: this.serializationService.serialize(objectId)
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ToolsMaintenanceStatusFormComponent.prototype.openMaintenanceProgram = function (mp) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__["ComponentConstants"].ENG_MAINTENANCE_PROGRAM_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read
        };
        if (!!mp) {
            var birePlanDTOId = {
                planCode: mp
            };
            data.objectId = this.serializationService.serialize(birePlanDTOId);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    /**********************************
     * TOOLS PANEL INFORMATION RENDER
     **********************************/
    ToolsMaintenanceStatusFormComponent.prototype.displayToolInfo = function (arr) {
        var str = '';
        if (arr.length > 0) {
            arr.forEach(function (res, index) {
                if (arr.length - 1 === index) {
                    str = str + res;
                }
                else {
                    str = "" + str + res + ", ";
                }
            });
        }
        return str;
    };
    /**********************************
     * SIMULATION OPERATIONS
     **********************************/
    ToolsMaintenanceStatusFormComponent.prototype.onSimulate = function (criteria) {
        this.simulationCriteria = criteria;
        this.reloadFromCache();
    };
    ToolsMaintenanceStatusFormComponent.prototype.reloadFromCache = function () {
        this.load();
        this.loadConfigurationControl();
    };
    ToolsMaintenanceStatusFormComponent.prototype.loadConfigurationControl = function () {
        // TODO
    };
    ToolsMaintenanceStatusFormComponent.prototype.resetSimulation = function () {
        this.simulationCriteria = undefined;
        this.reloadFromCache();
    };
    /**********************************
     * EXPORT TOOLS TABLE
     **********************************/
    ToolsMaintenanceStatusFormComponent.prototype.exportToolsTable = function () {
        var _this = this;
        this.exportingFlag = true;
        var translateKey = ToolsMaintenanceStatusFormComponent_1.EXPORT_TRANSLATE_KEY;
        var alert = _super.prototype.getTranslateKey.call(this, 'alert', translateKey);
        var alertNokKey = _super.prototype.getTranslateKey.call(this, 'alertNok', translateKey);
        var alertOkKey = _super.prototype.getTranslateKey.call(this, 'alertOk', translateKey);
        var alertWarningKey = _super.prototype.getTranslateKey.call(this, 'alertWarning', translateKey);
        var assetKey = _super.prototype.getTranslateKey.call(this, 'asset', translateKey);
        var potential = _super.prototype.getTranslateKey.call(this, 'potential', translateKey);
        var designationKey = _super.prototype.getTranslateKey.call(this, 'designation', translateKey);
        var eventStatus = _super.prototype.getTranslateKey.call(this, 'eventStatus', translateKey);
        var tasks = _super.prototype.getTranslateKey.call(this, 'tasks', translateKey);
        var remainingDays = _super.prototype.getTranslateKey.call(this, 'remainingDays', translateKey);
        var mp = _super.prototype.getTranslateKey.call(this, 'mp', translateKey);
        var statusKey = _super.prototype.getTranslateKey.call(this, 'status', translateKey);
        var fileNamePrefixKey = _super.prototype.getTranslateKey.call(this, 'fileNamePrefix', translateKey);
        this.translateService
            .get([
            alert,
            alertNokKey,
            alertOkKey,
            alertWarningKey,
            assetKey,
            potential,
            designationKey,
            eventStatus,
            remainingDays,
            tasks,
            statusKey,
            fileNamePrefixKey,
            mp
        ])
            .subscribe(function (results) {
            if (results) {
                var listToExport = _this.toolsTable.map(function (element) {
                    var _a;
                    var alertStr;
                    switch (element.alert) {
                        case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"].ICON_GREEN:
                            alertStr = results[alertOkKey];
                            break;
                        case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"].ICON_RED:
                            alertStr = results[alertNokKey];
                            break;
                        case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"].ICON_YELLOW:
                            alertStr = results[alertWarningKey];
                            break;
                        default:
                            alertStr = '';
                            break;
                    }
                    var tasksStr;
                    switch (element.tasks) {
                        case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"].ICON_GREEN:
                            tasksStr = results[alertOkKey];
                            break;
                        case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"].ICON_RED:
                            tasksStr = results[alertNokKey];
                            break;
                        case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__["ControlConfigConstants"].ICON_YELLOW:
                            tasksStr = results[alertWarningKey];
                            break;
                        default:
                            tasksStr = '';
                            break;
                    }
                    return _a = {},
                        _a[results[alert]] = alertStr,
                        _a[results[assetKey]] = element.asset,
                        _a[results[designationKey]] = element.designation,
                        _a[results[potential]] = element.potential,
                        _a[results[eventStatus]] = element.status,
                        _a[results[mp]] = element.mp,
                        _a[results[remainingDays]] = element.remainingDays,
                        _a[results[tasks]] = tasksStr,
                        _a;
                });
                var fileNameToExport = results[fileNamePrefixKey] + '__' + _this.dateService.dateWithHourToString(new Date());
                var exportOpts = {
                    header: [
                        results[alert],
                        results[assetKey],
                        results[designationKey],
                        results[potential],
                        results[eventStatus],
                        results[mp],
                        results[remainingDays],
                        results[tasks]
                    ]
                };
                _this.exportService.toExcel(listToExport, fileNameToExport, undefined, exportOpts);
                _this.exportingFlag = false;
            }
        }, function (error) {
            _this.exportingFlag = false;
        });
    };
    var ToolsMaintenanceStatusFormComponent_1;
    ToolsMaintenanceStatusFormComponent.EXPORT_TRANSLATE_KEY = 'ToolsMaintenanceStatusFormComponent';
    ToolsMaintenanceStatusFormComponent = ToolsMaintenanceStatusFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-tools-maintenance-status-form',
            template: __webpack_require__(/*! ./tools-maintenance-status-form.component.html */ "./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.html"),
            styles: [__webpack_require__(/*! ./tools-maintenance-status-form.component.scss */ "./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_13__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_15__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_16__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_17__["TabService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _tools_maintenance_status_form_service__WEBPACK_IMPORTED_MODULE_23__["ToolsMaintenanceStatusFormService"],
            _shared_services_export_service__WEBPACK_IMPORTED_MODULE_12__["ExportService"]])
    ], ToolsMaintenanceStatusFormComponent);
    return ToolsMaintenanceStatusFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_18__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.service.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ToolsMaintenanceStatusFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsMaintenanceStatusFormService", function() { return ToolsMaintenanceStatusFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/airworthiness-management.api */ "./src/app/shared/api/airworthiness-management.api.ts");
/* harmony import */ var _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/asset-management.api */ "./src/app/shared/api/asset-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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






var ToolsMaintenanceStatusFormService = /** @class */ (function (_super) {
    __extends(ToolsMaintenanceStatusFormService, _super);
    function ToolsMaintenanceStatusFormService(http, appConfigService, airworthinessManagementApi, assetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.airworthinessManagementApi = airworthinessManagementApi;
        _this.assetManagementApi = assetManagementApi;
        return _this;
    }
    /**************************************************************************
     * Airworthiness management api
     *************************************************************************/
    ToolsMaintenanceStatusFormService.prototype.generateAirworthinessControlTable = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.generateAirworthinessControlTable, input);
    };
    ToolsMaintenanceStatusFormService.prototype.checkEquipmentForAirworthinessControl = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.checkEquipmentForAirworthinessControl, input);
    };
    ToolsMaintenanceStatusFormService.prototype.computePotentialForAirworthinessControlInput = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.computePotentialForAirworthinessControlInput, input);
    };
    ToolsMaintenanceStatusFormService.prototype.fetchGroundEquipmentFunctionList = function () {
        return _super.prototype.post.call(this, this.assetManagementApi.fetchGroundEquipmentFunctionList);
    };
    ToolsMaintenanceStatusFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"],
            _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_2__["AirworthinessManagementApi"],
            _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_3__["AssetManagementApi"]])
    ], ToolsMaintenanceStatusFormService);
    return ToolsMaintenanceStatusFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">{{ \"page.searchPage\" | translate }}</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\"><!-- Remove enclosing tag if empty --></div>\r\n</div>\r\n\r\n<!-- SEARCH SCREEN -->\r\n<aw-tools-maintenance-search (onValidated)=\"openToolForm($event)\"></aw-tools-maintenance-search>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3Rvb2xzLW1haW50ZW5hbmNlLXN0YXR1cy9zZWFyY2gvdG9vbHMtbWFpbnRlbmFuY2Utc3RhdHVzLXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ToolsMaintenanceStatusSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsMaintenanceStatusSearchComponent", function() { return ToolsMaintenanceStatusSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
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









var ToolsMaintenanceStatusSearchComponent = /** @class */ (function (_super) {
    __extends(ToolsMaintenanceStatusSearchComponent, _super);
    function ToolsMaintenanceStatusSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService) {
        return _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
    }
    ToolsMaintenanceStatusSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__["ComponentConstants"].LOG_TOOLS_MAINTENANCE_STATUS_SEARCH;
    };
    ToolsMaintenanceStatusSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
    };
    /****************************
     * Opens TOOLS Form
     ****************************/
    ToolsMaintenanceStatusSearchComponent.prototype.openToolForm = function (event) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__["ComponentConstants"].LOG_TOOLS_MAINTENANCE_STATUS_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Read
        };
        if (!!event) {
            var toolsList_1 = [];
            event.forEach(function (obj) {
                if (obj.equipmentCode) {
                    toolsList_1.push(obj.equipmentCode);
                }
            });
            data.objectId = this.serializationService.serialize(toolsList_1);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ToolsMaintenanceStatusSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-tools-maintenance-status-search',
            template: __webpack_require__(/*! ./tools-maintenance-status-search.component.html */ "./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.html"),
            styles: [__webpack_require__(/*! ./tools-maintenance-status-search.component.scss */ "./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__["TabService"]])
    ], ToolsMaintenanceStatusSearchComponent);
    return ToolsMaintenanceStatusSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.service.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ToolsMaintenanceStatusSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsMaintenanceStatusSearchService", function() { return ToolsMaintenanceStatusSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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




var ToolsMaintenanceStatusSearchService = /** @class */ (function (_super) {
    __extends(ToolsMaintenanceStatusSearchService, _super);
    function ToolsMaintenanceStatusSearchService(http, appConfigService) {
        return _super.call(this, http, appConfigService) || this;
    }
    ToolsMaintenanceStatusSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"]])
    ], ToolsMaintenanceStatusSearchService);
    return ToolsMaintenanceStatusSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/tools-maintenance-status/tools-maintenance-status.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/tools-maintenance-status.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ToolsMaintenanceStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsMaintenanceStatusModule", function() { return ToolsMaintenanceStatusModule; });
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
/* harmony import */ var _shared_components_dialog_control_simulation_dialog_control_simulation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/dialog-control-simulation/dialog-control-simulation.module */ "./src/app/shared/components/dialog-control-simulation/dialog-control-simulation.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _tools_maintenance_search_tools_maintenance_search_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../tools-maintenance-search/tools-maintenance-search.module */ "./src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.module.ts");
/* harmony import */ var _form_tools_maintenance_status_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form/tools-maintenance-status-form.component */ "./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.ts");
/* harmony import */ var _form_tools_maintenance_status_form_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form/tools-maintenance-status-form.service */ "./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.service.ts");
/* harmony import */ var _search_tools_maintenance_status_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./search/tools-maintenance-status-search.component */ "./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.ts");
/* harmony import */ var _search_tools_maintenance_status_search_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./search/tools-maintenance-status-search.service */ "./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.service.ts");
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
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_14__["ModalModule"],
    _shared_components_dialog_control_simulation_dialog_control_simulation_module__WEBPACK_IMPORTED_MODULE_12__["DialogControlSimulationModule"],
    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_13__["ManageSearchCriteriaModule"],
    _tools_maintenance_search_tools_maintenance_search_module__WEBPACK_IMPORTED_MODULE_16__["ToolsMaintenanceSearchModule"]
];
var INTERNAL_MODULES = [];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [_form_tools_maintenance_status_form_component__WEBPACK_IMPORTED_MODULE_17__["ToolsMaintenanceStatusFormComponent"], _search_tools_maintenance_status_search_component__WEBPACK_IMPORTED_MODULE_19__["ToolsMaintenanceStatusSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_tools_maintenance_status_form_service__WEBPACK_IMPORTED_MODULE_18__["ToolsMaintenanceStatusFormService"], _search_tools_maintenance_status_search_service__WEBPACK_IMPORTED_MODULE_20__["ToolsMaintenanceStatusSearchService"]];
var ToolsMaintenanceStatusModule = /** @class */ (function () {
    function ToolsMaintenanceStatusModule() {
    }
    ToolsMaintenanceStatusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_15__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], ToolsMaintenanceStatusModule);
    return ToolsMaintenanceStatusModule;
}());



/***/ }),

/***/ "./src/app/shared/constants/control-config-constants.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/constants/control-config-constants.ts ***!
  \**************************************************************/
/*! exports provided: ControlConfigConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlConfigConstants", function() { return ControlConfigConstants; });
var ControlConfigConstants = /** @class */ (function () {
    function ControlConfigConstants() {
    }
    ControlConfigConstants.ICON_GREEN = '9';
    ControlConfigConstants.ICON_RED = '10';
    ControlConfigConstants.ICON_YELLOW = '11';
    ControlConfigConstants.ICON_NONE = '12';
    ControlConfigConstants.CUSTOMIZATION_STATUS_NONE = '0';
    ControlConfigConstants.CUSTOMIZATION_STATUS_OK_ASSUMED = '10';
    ControlConfigConstants.CUSTOMIZATION_STATUS_OK_CUSTOMIZED = '11';
    ControlConfigConstants.CUSTOMIZATION_STATUS_WARNING_NO_ALTERNATIVE = '21';
    ControlConfigConstants.ICON_GREEN_LIGHT_CODE = '0';
    ControlConfigConstants.ICON_RED_LIGHT_CODE = '1';
    ControlConfigConstants.ICON_YELLOW_LIGHT_CODE = '2';
    ControlConfigConstants.ICON_NONE_LIGHT_CODE = '3';
    ControlConfigConstants.ICON_EQUIPMENT_CODE = '5';
    ControlConfigConstants.ICON_GREEN_ROUND_CODE = '6';
    ControlConfigConstants.ICON_ITEM_CODE = '4';
    ControlConfigConstants.ICON_YELLOW_TRIANGLE_CODE = '7';
    ControlConfigConstants.ICON_RED_SQUARE_CODE = '8';
    ControlConfigConstants.ICON_GREEN_LED_CODE = '9';
    ControlConfigConstants.ICON_YELLOW_LED_CODE = '11';
    ControlConfigConstants.ICON_RED_LED_CODE = '10';
    ControlConfigConstants.ICON_NONE_LED_CODE = '12';
    ControlConfigConstants.OME_CHECK_EQUIPMENT_MISSING = 'MISSING';
    ControlConfigConstants.OME_CHECK_EQUIPMENT_TO_REMOVE = 'REMOVE';
    ControlConfigConstants.OME_CHECK_EQUIPMENT_TO_REPLACE = 'REPLACE';
    ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_SUGGESTED = 'SUGGESTED';
    ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_VALIDATED = 'VALIDATED';
    ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_ON_GOING = 'ON_GOING';
    return ControlConfigConstants;
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



/***/ }),

/***/ "./src/app/shared/utils/bido-family-variant-utils.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/utils/bido-family-variant-utils.ts ***!
  \***********************************************************/
/*! exports provided: BidoFamilyVariantUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidoFamilyVariantUtils", function() { return BidoFamilyVariantUtils; });
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");

var BidoFamilyVariantUtils = /** @class */ (function () {
    function BidoFamilyVariantUtils() {
    }
    BidoFamilyVariantUtils.buildFamilyVariantCode = function (familyCode, variantCode) {
        if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(familyCode) || _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(variantCode)) {
            return undefined;
        }
        else {
            return familyCode + "-" + variantCode;
        }
    };
    BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode = function (familyVariantCode) {
        return !!familyVariantCode && familyVariantCode.indexOf('-') > -1
            ? familyVariantCode.substring(0, familyVariantCode.indexOf('-'))
            : undefined;
    };
    BidoFamilyVariantUtils.getVariantCodeFromFamilyVariantCode = function (familyVariantCode) {
        return !!familyVariantCode && familyVariantCode.indexOf('-') > -1
            ? familyVariantCode.substring(familyVariantCode.indexOf('-') + 1)
            : undefined;
    };
    return BidoFamilyVariantUtils;
}());



/***/ })

}]);
//# sourceMappingURL=logistics-tools-maintenance-status-tools-maintenance-status-module.js.map