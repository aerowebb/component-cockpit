(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-stock-consult-stock-consult-module"],{

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

/***/ "./node_modules/primeng/components/selectbutton/selectbutton.js":
/*!**********************************************************************!*\
  !*** ./node_modules/primeng/components/selectbutton/selectbutton.js ***!
  \**********************************************************************/
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
var objectutils_1 = __webpack_require__(/*! ../utils/objectutils */ "./node_modules/primeng/components/utils/objectutils.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
exports.SELECTBUTTON_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return SelectButton; }),
    multi: true
};
var SelectButton = /** @class */ (function () {
    function SelectButton(cd) {
        this.cd = cd;
        this.tabindex = 0;
        this.onOptionClick = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Object.defineProperty(SelectButton.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (val) {
            var opts = this.optionLabel ? objectutils_1.ObjectUtils.generateSelectItems(val, this.optionLabel) : val;
            this._options = opts;
        },
        enumerable: true,
        configurable: true
    });
    SelectButton.prototype.writeValue = function (value) {
        this.value = value;
        this.cd.markForCheck();
    };
    SelectButton.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    SelectButton.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    SelectButton.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    SelectButton.prototype.onItemClick = function (event, option, index) {
        if (this.disabled || option.disabled) {
            return;
        }
        if (this.multiple) {
            var itemIndex_1 = this.findItemIndex(option);
            if (itemIndex_1 != -1)
                this.value = this.value.filter(function (val, i) { return i != itemIndex_1; });
            else
                this.value = (this.value || []).concat([option.value]);
        }
        else {
            this.value = option.value;
        }
        this.onOptionClick.emit({
            originalEvent: event,
            option: option,
            index: index
        });
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    SelectButton.prototype.onFocus = function (event) {
        this.focusedItem = event.target;
    };
    SelectButton.prototype.onBlur = function (event) {
        this.focusedItem = null;
        this.onModelTouched();
    };
    SelectButton.prototype.isSelected = function (option) {
        if (this.multiple)
            return this.findItemIndex(option) != -1;
        else
            return objectutils_1.ObjectUtils.equals(option.value, this.value, this.dataKey);
    };
    SelectButton.prototype.findItemIndex = function (option) {
        var index = -1;
        if (this.value) {
            for (var i = 0; i < this.value.length; i++) {
                if (this.value[i] == option.value) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], SelectButton.prototype, "tabindex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SelectButton.prototype, "multiple", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SelectButton.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SelectButton.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SelectButton.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SelectButton.prototype, "dataKey", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SelectButton.prototype, "optionLabel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SelectButton.prototype, "onOptionClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SelectButton.prototype, "onChange", void 0);
    __decorate([
        core_1.ContentChild(core_1.TemplateRef),
        __metadata("design:type", Object)
    ], SelectButton.prototype, "itemTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SelectButton.prototype, "options", null);
    SelectButton = __decorate([
        core_1.Component({
            selector: 'p-selectButton',
            template: "\n        <div [ngClass]=\"'ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-' + (options ? options.length : 0)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div *ngFor=\"let option of options; let i = index\" #btn class=\"ui-button ui-widget ui-state-default ui-button-text-only {{option.styleClass}}\"\n                [ngClass]=\"{'ui-state-active':isSelected(option), 'ui-state-disabled': disabled || option.disabled, 'ui-state-focus': btn == focusedItem, \n                'ui-button-text-icon-left': (option.icon != null), 'ui-button-icon-only': (option.icon && !option.label)}\" (click)=\"onItemClick($event,option,i)\" (keydown.enter)=\"onItemClick($event,option,i)\"\n                [attr.title]=\"option.title\" [attr.aria-label]=\"option.label\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [attr.tabindex]=\"tabindex\">\n                <ng-container *ngIf=\"!itemTemplate else customcontent\">\n                    <span [ngClass]=\"['ui-clickable', 'ui-button-icon-left']\" [class]=\"option.icon\" *ngIf=\"option.icon\"></span>\n                    <span class=\"ui-button-text ui-clickable\">{{option.label||'ui-btn'}}</span>\n                </ng-container>\n                <ng-template #customcontent>\n                    <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: option, index: i}\"></ng-container>\n                </ng-template>\n            </div>\n        </div>\n    ",
            providers: [exports.SELECTBUTTON_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], SelectButton);
    return SelectButton;
}());
exports.SelectButton = SelectButton;
var SelectButtonModule = /** @class */ (function () {
    function SelectButtonModule() {
    }
    SelectButtonModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [SelectButton],
            declarations: [SelectButton]
        })
    ], SelectButtonModule);
    return SelectButtonModule;
}());
exports.SelectButtonModule = SelectButtonModule;
//# sourceMappingURL=selectbutton.js.map

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

/***/ "./node_modules/primeng/treetable.js":
/*!*******************************************!*\
  !*** ./node_modules/primeng/treetable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/treetable/treetable */ "./node_modules/primeng/components/treetable/treetable.js"));

/***/ }),

/***/ "./src/app/main/logistics/stock-consult/form/stock-consult-form.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-consult/form/stock-consult-form.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ \"page.searchPage\" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"newCalculation()\">\r\n      {{ componentData.componentId + \".newCalculation\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"page.mainData\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\"> {{ componentData.componentId + \".site\" | translate }} </label>\r\n\r\n                  <div *ngIf=\"!!searchObject && !!searchObject.siteId\" class=\"form-control\">\r\n                    <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"site\" [disabled]=\"true\" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\"> {{ componentData.componentId + \".warehouseId\" | translate }} </label>\r\n\r\n                  <div *ngIf=\"!!searchObject && !!searchObject.warehouseId\" class=\"form-control\">\r\n                    <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"warehouse\" [disabled]=\"true\" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ componentData.componentId + \".warehouseType\" | translate }} </label>\r\n\r\n                  <div *ngIf=\"!!searchObject && !!searchObject.warehouseTypeId\" class=\"form-control\">\r\n                    <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"warehouseType\" [disabled]=\"true\" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\"> {{ componentData.componentId + \".storagebin\" | translate }} </label>\r\n\r\n                  <div *ngIf=\"!!searchObject && !!searchObject.storageBinId\" class=\"form-control\">\r\n                    <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"storageBin\" [disabled]=\"true\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ componentData.componentId + \".materialCode\" | translate }} </label>\r\n\r\n                  <div *ngIf=\"!!searchObject && !!searchObject.pn\" class=\"form-control\">\r\n                    <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.pn\" [disabled]=\"true\" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ componentData.componentId + \".stocktype\" | translate }} </label>\r\n\r\n                  <div *ngIf=\"!!searchObject && !!searchObject.stockTypeId\" class=\"form-control\">\r\n                    <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"stockType\" [disabled]=\"true\" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ componentData.componentId + \".valuationgroup\" | translate }} </label>\r\n\r\n                  <div *ngIf=\"!!searchObject && !!searchObject.valuationGroupId\" class=\"form-control\">\r\n                    <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"valuationGroup\" [disabled]=\"true\" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ componentData.componentId + \".issueplannedbefore\" | translate }} </label>\r\n\r\n                  <div *ngIf=\"!!searchObject && !!searchObject.issuePeriod\" class=\"form-control\">\r\n                    <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"issuePlannedBefore\" [disabled]=\"true\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #documentTableAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".stockList\" | translate }} ({{\r\n                    stockInformaionDtos ? stockInformaionDtos.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableAlerts\r\n                class=\"aw-table2\"\r\n                [columns]=\"stockListTableCols\"\r\n                [value]=\"stockInformaionDtos\"\r\n                [(selection)]=\"selectedStockDto\"\r\n                [scrollable]=\"true\"\r\n                dataKey=\"stockSn\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoadingStructureTable\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoadingStructureTable\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableAlertsGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableAlerts.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th\r\n                      pResizableColumn\r\n                      *ngFor=\"let col of columns\"\r\n                      [ngStyle]=\"{ 'text-align': col.alignment, width: col.width }\"\r\n                    >\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                    <th class=\"row-expand-wrapper\"></th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td\r\n                      *ngFor=\"let col of columns\"\r\n                      [ngSwitch]=\"col.field\"\r\n                      [ngStyle]=\"{ 'text-align': col.alignment, width: col.width }\"\r\n                    >\r\n                      <a *ngSwitchCase=\"'pn'\" (click)=\"openMaterialScreen(rowData['pn'])\">{{ rowData[col.field] }}</a>\r\n                      <a *ngSwitchCase=\"'stockSn'\" (click)=\"openSerailNumber(rowData)\">{{ rowData[col.field] }}</a>\r\n                      <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                    </td>\r\n                    <td class=\"row-expand-wrapper\" [pRowToggler]=\"rowData\">\r\n                      <i\r\n                        class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n                        [ngClass]=\"rowData.expand ? 'fa-minus' : 'fa-plus'\"\r\n                        aria-hidden=\"true\"\r\n                        pTooltip=\"{{ 'global.showTableRowDetails' | translate }}\"\r\n                        tooltipPosition=\"top\"\r\n                        (click)=\"toggleRowDetailsVisibility(rowData)\"\r\n                      ></i>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n                  <tr class=\"row-expanded\">\r\n                    <td [attr.colspan]=\"columns.length + 2\">\r\n                      <div class=\"row\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #ptable\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"remainingTableCols\"\r\n                          [value]=\"rowData.stockQuantityDtos\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div class=\"aw-table-header\">\r\n                              {{ componentData.componentId + \".receipt\" | translate }}\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ getComponentName() + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngSwitch]=\"col.field\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                <a\r\n                                  *ngSwitchCase=\"'stockReceiptWorkOrderWoCode'\"\r\n                                  (click)=\"openRecieptDocument(rowData)\"\r\n                                  >{{ rowData[col.field] }}</a\r\n                                >\r\n                                <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #ptable\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"remainingTableCols2\"\r\n                          [value]=\"rowData.stockIssueDtos\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div class=\"aw-table-header\">\r\n                              {{ componentData.componentId + \".issue\" | translate }}\r\n                            </div>\r\n                          </ng-template>\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ getComponentName() + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngSwitch]=\"col.field\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                <a *ngSwitchCase=\"'stockIssueWorkOrderWoCode'\" (click)=\"openIssueDocument(rowData)\">{{\r\n                                  rowData[col.field]\r\n                                }}</a>\r\n                                <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/stock-consult/form/stock-consult-form.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-consult/form/stock-consult-form.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3N0b2NrLWNvbnN1bHQvZm9ybS9zdG9jay1jb25zdWx0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/logistics/stock-consult/form/stock-consult-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/logistics/stock-consult/form/stock-consult-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StockConsultFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockConsultFormComponent", function() { return StockConsultFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _maintenance_airworthiness_control_search_search_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../maintenance/airworthiness-control/search/search.service */ "./src/app/main/maintenance/airworthiness-control/search/search.service.ts");
/* harmony import */ var _material_form_material_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../material/form/material-form.service */ "./src/app/main/logistics/material/form/material-form.service.ts");
/* harmony import */ var _search_stock_consult_search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../search/stock-consult-search.service */ "./src/app/main/logistics/stock-consult/search/stock-consult-search.service.ts");
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
















var StockConsultFormComponent = /** @class */ (function (_super) {
    __extends(StockConsultFormComponent, _super);
    function StockConsultFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, materialFormService, searchService, stockConsultSearchService, propertiesService, dateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.materialFormService = materialFormService;
        _this.searchService = searchService;
        _this.stockConsultSearchService = stockConsultSearchService;
        _this.propertiesService = propertiesService;
        _this.dateService = dateService;
        _this.init();
        return _this;
    }
    StockConsultFormComponent.prototype.init = function () {
        this.stockInformaionDtos = [];
        this.remainingTableCols = [];
        this.remainingTableCols2 = [];
        this.remainingTable = [];
        this.searchObject = {
            pn: undefined,
            withItsAlternatives: false,
            siteId: undefined,
            warehouseId: undefined,
            storageBinId: undefined,
            warehouseTypeId: undefined,
            stockTypeId: undefined,
            valuationGroupId: undefined,
            issuePeriod: undefined
        };
        this.setTableCols();
        this.searchEuipmentByPnAndSn = {
            pnCode: undefined,
            sn: undefined
        };
        this.equipmentDtos = [];
    };
    StockConsultFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.updateOpenMode(this.componentData.openMode);
        if (!!this.componentData.objectId) {
            this.searchObject = this.serializationService.deserialize(this.componentData.objectId);
        }
        this.loadSites();
        this.loadWareHouseList();
        this.loadStorageBinList();
        this.findAllStockTypeList();
        this.findAllValuationList();
        this.getWarehouseTypesList();
        this.getIssuePeriodDropDown();
        this.getStockInformationList();
    };
    StockConsultFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__["ComponentConstants"].LOG_STOCK_CONSULT_FORM;
    };
    StockConsultFormComponent.prototype.setTableCols = function () {
        this.stockListTableCols = [
            { field: 'pn', alignment: 'left', width: '13%' },
            { field: 'stockSn', alignment: 'left', width: '8%' },
            { field: 'designation', alignment: 'left', width: '18%' },
            { field: 'siteText', alignment: 'left', width: '15%' },
            { field: 'warehouseText', alignment: 'left', width: '18%' },
            { field: 'storageBinText', alignment: 'left', width: '9%' },
            { field: 'stockTypeText', alignment: 'left', width: '10%' },
            { field: 'valuationGroupText', alignment: 'left', width: '9%' }
        ];
        this.remainingTableCols = [
            { field: 'quantityDateStr', alignment: 'left' },
            { field: 'stockReceiptWorkOrderWoCode', alignment: 'left' },
            { field: 'stockReceiptQuantity', alignment: 'left' }
        ];
        this.remainingTableCols2 = [
            { field: 'issueDateStr', alignment: 'left' },
            { field: 'stockIssueWorkOrderWoCode', alignment: 'left' },
            { field: 'stockIssueQuantity', alignment: 'left' }
        ];
        this.isLoadingStructureTable = false;
    };
    StockConsultFormComponent.prototype.toggleFlightsExpand = function (row) {
        this.remainingTable = [];
        var stock = this.stockInformaionDtos.filter(function (fl) { return fl.pn === row.pn; });
        this.remainingTable.push(stock[0]);
    };
    StockConsultFormComponent.prototype.getStockInformationList = function () {
        var _this = this;
        this.isLoadingStructureTable = true;
        this.stockConsultSearchService.getStockInformationList(this.searchObject).subscribe(function (result) {
            _this.isLoadingStructureTable = false;
            if (!!result && result.length > 0) {
                result.forEach(function (res) {
                    res.stockIssueDtos = [];
                    res.stockQuantityDtos = [];
                    res.issueDateStr = _this.dateService.dateWithHourMinSecToString(res.stockIssueDate);
                    res.quantityDateStr = _this.dateService.dateWithHourMinSecToString(res.stockReceiptDate);
                    res.stockQuantityDtos.push(res);
                    res.stockIssueDtos.push(res);
                    _this.stockInformaionDtos.push(res);
                });
            }
        });
    };
    StockConsultFormComponent.prototype.loadSites = function () {
        var _this = this;
        this.materialFormService.findAllSites().subscribe(function (result) {
            result.forEach(function (res) {
                if (!!res && !!res.siteId) {
                    if (_this.searchObject.siteId === res.siteId) {
                        _this.site = res.siteCode + "-" + res.siteName;
                    }
                }
            });
        });
    };
    StockConsultFormComponent.prototype.loadWareHouseList = function () {
        var _this = this;
        this.searchService.findAllWarehouse().subscribe(function (results) {
            results.forEach(function (res) {
                if (!!res && !!res.wareHouseId) {
                    if (_this.searchObject.warehouseId === res.wareHouseId) {
                        _this.warehouse = res.whCode + " - " + res.whName;
                    }
                }
            });
        });
    };
    StockConsultFormComponent.prototype.loadStorageBinList = function () {
        var _this = this;
        this.stockConsultSearchService.findAllStorageBinsList().subscribe(function (result) {
            if (!!result && result.length > 0) {
                result.forEach(function (res) {
                    if (!!res && !!res.bidtStorageBinTypeId) {
                        if (_this.searchObject.storageBinId === res.bidtStorageBinTypeId) {
                            _this.storageBin = "" + res.sbNumber;
                        }
                    }
                });
            }
        });
    };
    // find all stock type list
    StockConsultFormComponent.prototype.findAllStockTypeList = function () {
        var _this = this;
        this.stockConsultSearchService.findAllStockTypeList().subscribe(function (result) {
            result.forEach(function (res) {
                if (!!res && !!res.id) {
                    if (_this.searchObject.stockTypeId === res.id) {
                        _this.stockType = res.stockTypeCode + " - " + res.stockTypeDescription;
                    }
                }
            });
        });
    };
    // find all valuation group list
    StockConsultFormComponent.prototype.findAllValuationList = function () {
        var _this = this;
        this.materialFormService.findAllValuation().subscribe(function (result) {
            result.forEach(function (res) {
                if (!!res && !!res.id) {
                    if (_this.searchObject.valuationGroupId === res.id) {
                        _this.valuationGroup = res.valuationGroupCode + "-" + res.valuationGroupName;
                    }
                }
            });
        });
    };
    StockConsultFormComponent.prototype.getWarehouseTypesList = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__["GenericPropertyConstants"].WAREHOUSE_TYPE_MAP).subscribe(function (results) {
            results.forEach(function (res) {
                if (!!res && !!res.value) {
                    if (_this.searchObject.warehouseTypeId === res.value) {
                        _this.warehouseType = res.label;
                    }
                }
            });
        });
    };
    StockConsultFormComponent.prototype.getIssuePeriodDropDown = function () {
        var _this = this;
        this.stockConsultSearchService.getIssuePeriodDropDown().subscribe(function (results) {
            results.forEach(function (res) {
                if (!!res && !!res.value) {
                    if (_this.searchObject.issuePeriod === res.value) {
                        _this.issuePlannedBefore = res.label;
                    }
                }
            });
        });
    };
    StockConsultFormComponent.prototype.newCalculation = function () {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__["ComponentConstants"].LOG_STOCK_CONSULT_SEARCH,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    StockConsultFormComponent.prototype.toggleRowDetailsVisibility = function (row) {
        // row.expand = !row.expand;
    };
    StockConsultFormComponent.prototype.openRecieptDocument = function (row) {
        // row.expand = !row.expand;
    };
    StockConsultFormComponent.prototype.openIssueDocument = function (row) {
        // row.expand = !row.expand;
    };
    StockConsultFormComponent.prototype.openMaterialScreen = function (code) {
        if (code) {
            this.openMaterial(code, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Read);
        }
    };
    StockConsultFormComponent.prototype.openMaterial = function (objectId, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__["ComponentConstants"].LOG_MATERIAL_FORM,
            openMode: openMode
        };
        if (!!objectId) {
            var materialFormId = {
                pnCode: objectId
            };
            data.objectId = this.serializationService.serialize(materialFormId);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    StockConsultFormComponent.prototype.openSerailNumber = function (selectedStockDto) {
        var _this = this;
        this.searchEuipmentByPnAndSn.pnCode = selectedStockDto.pn;
        this.searchEuipmentByPnAndSn.sn = selectedStockDto.stockSn;
        this.stockConsultSearchService.getEuipmentBYpnAndSN(this.searchEuipmentByPnAndSn).subscribe(function (results) {
            _this.equipmentDtos = results;
            if (!!_this.equipmentDtos && _this.equipmentDtos.length === 1) {
                _this.openEquipment(_this.equipmentDtos[0], _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Read);
            }
            else {
                _this.messageService.showWarningMessage("Asset not found ! : " + _this.searchEuipmentByPnAndSn.pnCode + "/" + _this.searchEuipmentByPnAndSn.sn);
            }
        });
    };
    StockConsultFormComponent.prototype.openEquipment = function (objectId, openMode) {
        var labelKey = 'transaction.EquipmentFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'EquipmentFormComponent',
            openMode: openMode
        };
        if (!!objectId) {
            var equipmentId = {
                equipmentCode: objectId.equipmentCode
            };
            data.objectId = this.serializationService.serialize(equipmentId);
        }
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    StockConsultFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-stock-consult-form',
            template: __webpack_require__(/*! ./stock-consult-form.component.html */ "./src/app/main/logistics/stock-consult/form/stock-consult-form.component.html"),
            styles: [__webpack_require__(/*! ./stock-consult-form.component.scss */ "./src/app/main/logistics/stock-consult/form/stock-consult-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"],
            _material_form_material_form_service__WEBPACK_IMPORTED_MODULE_14__["MaterialFormService"],
            _maintenance_airworthiness_control_search_search_service__WEBPACK_IMPORTED_MODULE_13__["SearchService"],
            _search_stock_consult_search_service__WEBPACK_IMPORTED_MODULE_15__["StockConsultSearchService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_8__["PropertiesService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]])
    ], StockConsultFormComponent);
    return StockConsultFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_12__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-consult/search/stock-consult-search.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-consult/search/stock-consult-search.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ criteriaName }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"onClickNewCalculation()\" *ngIf=\"hasBeenCalculated\">\r\n      <span>{{ componentData.componentId + \".newCalculation\" | translate }}</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <!-- Form -->\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ componentData.componentId + \".mainInformation\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <aw-manage-search-criteria\r\n                    [componentId]=\"SEARCH_CRITERIA_ID\"\r\n                    (onSelected)=\"loadSearchCriteria($event)\"\r\n                    (onSavedAsked)=\"saveSearchCriteriaAsked()\"\r\n                    [objectFromPage]=\"criteriaToSave\"\r\n                    [canChange]=\"!hasBeenCalculated\"\r\n                  ></aw-manage-search-criteria>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".site\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [options]=\"sites\"\r\n                        [(ngModel)]=\"searchObject.siteId\"\r\n                        (onChange)=\"loadWarehouseBySiteId()\"\r\n                        appendTo=\"body\"\r\n                        [showClear]=\"true\"\r\n                        [disabled]=\"hasBeenCalculated\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".warehouseId\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"warehouses\"\r\n                        [(ngModel)]=\"searchObject.warehouseId\"\r\n                        (onChange)=\"findStorageBinBYWarehouseId()\"\r\n                        [disabled]=\"hasBeenCalculated\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [showClear]=\"true\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".warehouseType\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        *ngIf=\"showWhTypeDropDown; else whTextBox\"\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"warehouseTypes\"\r\n                        [(ngModel)]=\"searchObject.warehouseTypeId\"\r\n                        [disabled]=\"hasBeenCalculated\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [showClear]=\"true\"\r\n                      ></p-dropdown>\r\n                      <ng-template #whTextBox>\r\n                        <input\r\n                          type=\"text\"\r\n                          [disabled]=\"isDisabled\"\r\n                          class=\"aw-input\"\r\n                          maxlength=\"50\"\r\n                          [(ngModel)]=\"whTypeName\"\r\n                        />\r\n                      </ng-template>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group \">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".storagebin\" | translate }} </label>\r\n\r\n                    <div style=\"width: 64%\" class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"storageBins\"\r\n                        [(ngModel)]=\"searchObject.storageBinId\"\r\n                        placeholder=\"&nbsp;\"\r\n                        appendTo=\"body\"\r\n                        [showClear]=\"true\"\r\n                        [disabled]=\"hasBeenCalculated\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group \">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".materialCode\" | translate }} </label>\r\n\r\n                    <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: hasBeenCalculated }\">\r\n                      <div class=\"form-control-data\" (click)=\"quickSearchMaterial()\">\r\n                        {{ searchObject.pn }}\r\n                      </div>\r\n\r\n                      <div *ngIf=\"searchObject.pn\" class=\"btn-clear-wrapper\">\r\n                        <i\r\n                          class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"searchObject.pn = undefined\"\r\n                        ></i>\r\n                      </div>\r\n                      <div class=\"btn-search-wrapper\">\r\n                        <i\r\n                          class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"quickSearchMaterial()\"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group \">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".stocktype\" | translate }} </label>\r\n\r\n                    <div style=\"width: 64%\" class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"stockTypes\"\r\n                        [(ngModel)]=\"searchObject.stockTypeId\"\r\n                        placeholder=\"&nbsp;\"\r\n                        appendTo=\"body\"\r\n                        [showClear]=\"true\"\r\n                        [disabled]=\"hasBeenCalculated\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group \">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".valuationgroup\" | translate }} </label>\r\n\r\n                    <div style=\"width: 64%\" class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"valuationGroups\"\r\n                        [(ngModel)]=\"searchObject.valuationGroupId\"\r\n                        placeholder=\"&nbsp;\"\r\n                        appendTo=\"body\"\r\n                        [showClear]=\"true\"\r\n                        [disabled]=\"hasBeenCalculated\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group \">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".issueplannedbefore\" | translate }}\r\n                    </label>\r\n\r\n                    <div style=\"width: 64%\" class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"issueplannedBefores\"\r\n                        [(ngModel)]=\"searchObject.issuePeriod\"\r\n                        placeholder=\"&nbsp;\"\r\n                        appendTo=\"body\"\r\n                        [showClear]=\"true\"\r\n                        [disabled]=\"hasBeenCalculated\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"form-control\">\r\n                      <p-checkbox\r\n                        class=\"aw-checkbox\"\r\n                        binary=\"true\"\r\n                        [(ngModel)]=\"searchObject.withItsAlternatives\"\r\n                        [disabled]=\"hasBeenCalculated\"\r\n                      ></p-checkbox>\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".itsAlternatives\" | translate }}</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\"></div>\r\n                  <div class=\"form-group\"></div>\r\n                  <div class=\"form-group\"></div>\r\n                </div>\r\n                <div class=\"row search-criteria-footer\">\r\n                  <div class=\"search-actions\">\r\n                    <button type=\"button\" mat-raised-button (click)=\"calculate()\" [disabled]=\"hasBeenCalculated\">\r\n                      {{ componentData.componentId + \".toCalculate\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Table -->\r\n      <div class=\"grid-row\" *ngIf=\"hasBeenCalculated\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #documentTableAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".stockList\" | translate }} ({{\r\n                    stockInformaionDtos ? stockInformaionDtos.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableAlerts\r\n                class=\"aw-table2\"\r\n                [columns]=\"stockListTableCols\"\r\n                [value]=\"stockInformaionDtos\"\r\n                [scrollable]=\"true\"\r\n                dataKey=\"stockSn\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoadingStructureTable\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoadingStructureTable\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableAlertsGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableAlerts.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                    <col class=\"row-expand-wrapper\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th\r\n                      pResizableColumn\r\n                      *ngFor=\"let col of columns\"\r\n                      [ngStyle]=\"{ 'text-align': col.alignment, width: col.width }\"\r\n                    >\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                    <th class=\"row-expand-wrapper\"></th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td\r\n                      *ngFor=\"let col of columns\"\r\n                      [ngSwitch]=\"col.field\"\r\n                      [ngStyle]=\"{ 'text-align': col.alignment, width: col.width }\"\r\n                    >\r\n                      <a *ngSwitchCase=\"'pn'\" (click)=\"openMaterialScreen(rowData['pn'])\">{{ rowData[col.field] }}</a>\r\n                      <span *ngSwitchCase=\"'stockSn'\"\r\n                        ><a\r\n                          *ngIf=\"rowData.stockBatchNumber === null || rowData.stockBatchNumber === undefined\"\r\n                          (click)=\"openSerialNumber(rowData)\"\r\n                          >{{ rowData[col.field] }}</a\r\n                        >\r\n                        <span *ngIf=\"!!rowData.stockBatchNumber\"> {{ rowData[col.field] }}</span></span\r\n                      >\r\n                      <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                    </td>\r\n                    <td class=\"row-expand-wrapper\" [pRowToggler]=\"rowData\">\r\n                      <i\r\n                        class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n                        [ngClass]=\"rowData._expand ? 'fa-minus' : 'fa-plus'\"\r\n                        aria-hidden=\"true\"\r\n                        pTooltip=\"{{ 'global.showTableRowDetails' | translate }}\"\r\n                        tooltipPosition=\"top\"\r\n                        (click)=\"toggleRowDetailsVisibility(rowData)\"\r\n                      ></i>\r\n                    </td>\r\n                  </tr>\r\n\r\n                  <tr *ngIf=\"rowData._expand\" class=\"row-expanded\">\r\n                    <td [attr.colspan]=\"columns.length + 1\">\r\n                      <div class=\"column\">\r\n                        <div class=\"aw-table-header\" style=\"font-weight: bold\">\r\n                          {{ getComponentName() + \".receipt\" | translate }}\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".quantityDateStr\" | translate }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                class=\"aw-input\"\r\n                                type=\"text\"\r\n                                [(ngModel)]=\"rowData.quantityDateStr\"\r\n                                [disabled]=\"true\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".stockReceiptWorkOrderWoCode\" | translate }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                class=\"aw-input\"\r\n                                type=\"text\"\r\n                                [(ngModel)]=\"rowData.stockReceiptWorkOrderWoCode\"\r\n                                [disabled]=\"true\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".stockReceiptQuantity\" | translate }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                class=\"aw-input\"\r\n                                type=\"text\"\r\n                                [(ngModel)]=\"rowData.stockReceiptQuantity\"\r\n                                [disabled]=\"true\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\"></div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"column\">\r\n                        <div class=\"aw-table-header\" style=\"font-weight: bold\">\r\n                          {{ getComponentName() + \".issue\" | translate }}\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".issueDateStr\" | translate }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                class=\"aw-input\"\r\n                                type=\"text\"\r\n                                [(ngModel)]=\"rowData.issueDateStr\"\r\n                                [disabled]=\"true\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".stockIssueWorkOrderWoCode\" | translate }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                class=\"aw-input\"\r\n                                type=\"text\"\r\n                                [(ngModel)]=\"rowData.stockIssueWorkOrderWoCode\"\r\n                                [disabled]=\"true\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".stockIssueQuantity\" | translate }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                class=\"aw-input\"\r\n                                type=\"text\"\r\n                                [(ngModel)]=\"rowData.stockIssueQuantity\"\r\n                                [disabled]=\"true\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <aw-dialog-search-material\r\n        *ngIf=\"showQuickSearchMaterialPopup\"\r\n        [(display)]=\"showQuickSearchMaterialPopup\"\r\n        [material-code]=\"searchObject.pn\"\r\n        (onSelected)=\"setSelectedMaterial($event)\"\r\n      ></aw-dialog-search-material>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/stock-consult/search/stock-consult-search.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-consult/search/stock-consult-search.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3N0b2NrLWNvbnN1bHQvc2VhcmNoL3N0b2NrLWNvbnN1bHQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/logistics/stock-consult/search/stock-consult-search.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-consult/search/stock-consult-search.component.ts ***!
  \***************************************************************************************/
/*! exports provided: StockConsultSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockConsultSearchComponent", function() { return StockConsultSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _maintenance_airworthiness_control_search_search_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../maintenance/airworthiness-control/search/search.service */ "./src/app/main/maintenance/airworthiness-control/search/search.service.ts");
/* harmony import */ var _material_form_material_form_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../material/form/material-form.service */ "./src/app/main/logistics/material/form/material-form.service.ts");
/* harmony import */ var _stock_consult_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stock-consult-search.service */ "./src/app/main/logistics/stock-consult/search/stock-consult-search.service.ts");
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



















var StockConsultSearchComponent = /** @class */ (function (_super) {
    __extends(StockConsultSearchComponent, _super);
    function StockConsultSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, materialFormService, searchService, stockConsultSearchService, propertiesService, dateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.materialFormService = materialFormService;
        _this.searchService = searchService;
        _this.stockConsultSearchService = stockConsultSearchService;
        _this.propertiesService = propertiesService;
        _this.dateService = dateService;
        _this.receipt = 'receipt';
        _this.issue = 'issue';
        _this.SEARCH_CRITERIA_ID = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].STOCK_CONSULT_SEARCH_CRITERIA_ID;
        return _this;
    }
    StockConsultSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_STOCK_CONSULT_SEARCH;
    };
    StockConsultSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.initData();
        this.initTables();
        this.init();
        if (!!this.componentData.objectId) {
            this.searchObject = this.serializationService.deserialize(this.componentData.objectId);
            if (!!this.serializationService.deserialize(this.componentData.objectId).pnCode) {
                this.searchObject.pn = this.serializationService.deserialize(this.componentData.objectId).pnCode;
            }
            this.calculate();
        }
    };
    // init screen
    StockConsultSearchComponent.prototype.init = function () {
        this.getSiteList();
        this.getWareHouseList();
        this.getValuationList();
        this.getWarehouseTypesList();
        this.getStockTypeList();
        this.getStorageBinList();
        this.getIssuePeriodDropDown();
    };
    // init data
    StockConsultSearchComponent.prototype.initData = function () {
        this.stockInformaionDtos = [];
        this.remainingTableCols = [];
        this.remainingTableCols2 = [];
        this.hasBeenCalculated = false;
        this.searchObject = {
            pn: undefined,
            withItsAlternatives: false,
            siteId: undefined,
            warehouseId: undefined,
            storageBinId: undefined,
            warehouseTypeId: undefined,
            stockTypeId: undefined,
            valuationGroupId: undefined,
            issuePeriod: undefined
        };
        this.bidtSiteDTOs = [];
        this.bidtWarehouseDTOs = [];
        this.bidtStorageBinDTOs = [];
        this.showWhTypeDropDown = true;
        this.isDisabled = true;
        this.whTypeName = undefined;
        this.whTypeList = [];
        this.showQuickSearchMaterialPopup = false;
    };
    // init tables
    StockConsultSearchComponent.prototype.initTables = function () {
        this.stockListTableCols = [
            { field: 'pn', alignment: 'left', width: '13%' },
            { field: 'stockSn', alignment: 'left', width: '8%' },
            { field: 'stockReceiptQuantity', alignment: 'left', width: '5%' },
            { field: 'designation', alignment: 'left', width: '16%' },
            { field: 'siteText', alignment: 'left', width: '16%' },
            { field: 'warehouseText', alignment: 'left', width: '15%' },
            { field: 'storageBinText', alignment: 'left', width: '9%' },
            { field: 'stockTypeText', alignment: 'left', width: '10%' },
            { field: 'valuationGroupText', alignment: 'left', width: '8%' }
        ];
        this.remainingTableCols = [
            { field: 'quantityDateStr', alignment: 'left' },
            { field: 'stockReceiptWorkOrderWoCode', alignment: 'left' },
            { field: 'stockReceiptQuantity', alignment: 'left' }
        ];
        this.remainingTableCols2 = [
            { field: 'issueDateStr', alignment: 'left' },
            { field: 'stockIssueWorkOrderWoCode', alignment: 'left' },
            { field: 'stockIssueQuantity', alignment: 'left' }
        ];
        this.isLoadingStructureTable = false;
    };
    // get data from server
    StockConsultSearchComponent.prototype.getSiteList = function () {
        var _this = this;
        this.materialFormService.findAllSites().subscribe(function (result) {
            _this.bidtSiteDTOs = result;
            _this.sites = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__["ListUtils"].orEmpty(result).map(function (site) {
                return {
                    label: site.siteCode + "-" + site.siteName,
                    value: site.siteId
                };
            });
        });
    };
    // get data from server
    StockConsultSearchComponent.prototype.getWareHouseList = function () {
        var _this = this;
        this.searchService.findAllWarehouse().subscribe(function (results) {
            _this.bidtWarehouseDTOs = results;
            _this.warehouses = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__["ListUtils"].orEmpty(results)
                .filter(function (warehouse) { return !!warehouse.whCode; })
                .map(function (warehouse) {
                return {
                    label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__["StringUtils"].isNullOrEmpty(warehouse.whName)
                        ? warehouse.whCode
                        : warehouse.whCode + " - " + warehouse.whName,
                    value: warehouse.wareHouseId
                };
            });
        });
    };
    // get data from server
    StockConsultSearchComponent.prototype.getStorageBinList = function () {
        var _this = this;
        this.stockConsultSearchService.findAllStorageBinsList().subscribe(function (result) {
            var labelValue = [];
            if (!!result && result.length > 0) {
                result.forEach(function (res) {
                    if (!!res && !!res.bidtStorageBinTypeId) {
                        labelValue.push({
                            label: res.sbNumber + " " + (res.sbDescription ? " - " + res.sbDescription : ''),
                            value: res.bidtStorageBinTypeId
                        });
                    }
                });
            }
            _this.storageBins = labelValue;
        });
    };
    StockConsultSearchComponent.prototype.setSelectedMaterial = function (event) {
        this.showQuickSearchMaterialPopup = false;
        this.searchObject.pn = event.pnCode;
    };
    // opens material popup in search criteria
    StockConsultSearchComponent.prototype.quickSearchMaterial = function () {
        if (this.hasBeenCalculated) {
            return;
        }
        this.showQuickSearchMaterialPopup = true;
    };
    // get data from server
    StockConsultSearchComponent.prototype.getStockTypeList = function () {
        var _this = this;
        this.stockConsultSearchService.findAllStockTypeList().subscribe(function (result) {
            var labelValue = [];
            result.forEach(function (res) {
                if (!!res && !!res.id) {
                    labelValue.push({
                        label: res.stockTypeCode + " - " + res.stockTypeDescription,
                        value: res.id
                    });
                }
            });
            _this.stockTypes = labelValue;
        });
    };
    // get data from server
    StockConsultSearchComponent.prototype.getValuationList = function () {
        var _this = this;
        this.materialFormService.findAllValuation().subscribe(function (result) {
            var labelValue = [];
            result.forEach(function (res) {
                if (!!res && !!res.id) {
                    labelValue.push({
                        label: res.valuationGroupCode + "-" + res.valuationGroupName,
                        value: res.id
                    });
                }
            });
            _this.valuationGroups = labelValue;
        });
    };
    // load warehouse by site Id
    StockConsultSearchComponent.prototype.loadWarehouseBySiteId = function () {
        var _this = this;
        if (!!this.searchObject.siteId) {
            var siteId = this.searchObject.siteId.toString();
            this.materialFormService.findWarehouseBySite(siteId).subscribe(function (result) {
                var labelValue = [];
                if (!!result && result.length > 0) {
                    result.forEach(function (res) {
                        if (!!res && !!res.wareHouseId) {
                            labelValue.push({
                                label: res.whCode + "-" + res.whName,
                                value: res.wareHouseId
                            });
                        }
                    });
                    _this.warehouses = labelValue;
                    if (labelValue.length === 1) {
                        _this.searchObject.warehouseId = labelValue[0].value;
                        _this.findStorageBinBYWarehouseId();
                    }
                }
                else {
                    _this.warehouses = [];
                    _this.searchObject.warehouseId = undefined;
                }
            });
        }
        else if (this.searchObject.siteId === null) {
            this.getWareHouseList();
            this.searchObject.warehouseId = undefined;
        }
        this.showWhTypeDropDown = true;
    };
    // get data from server
    StockConsultSearchComponent.prototype.getWarehouseTypesList = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__["GenericPropertyConstants"].WAREHOUSE_TYPE_MAP).subscribe(function (results) {
            _this.warehouseTypes = results;
            _this.whTypeList = results;
        });
    };
    // get data from server
    StockConsultSearchComponent.prototype.getIssuePeriodDropDown = function () {
        var _this = this;
        this.stockConsultSearchService.getIssuePeriodDropDown().subscribe(function (results) {
            _this.issueplannedBefores = results;
        });
    };
    StockConsultSearchComponent.prototype.findStorageBinBYWarehouseId = function () {
        var _this = this;
        if (!!this.searchObject.warehouseId) {
            this.stockConsultSearchService.findBinStorageByWarehouseId(this.searchObject.warehouseId).subscribe(function (result) {
                var labelValue = [];
                if (!!result && result.list && result.list.length > 0) {
                    result.list.forEach(function (res) {
                        if (!!res && !!res.bidtStorageBinTypeId) {
                            labelValue.push({
                                label: res.sbNumber + " " + (res.sbDescription ? " - " + res.sbDescription : ''),
                                value: res.bidtStorageBinTypeId
                            });
                        }
                    });
                }
                _this.storageBins = labelValue;
            });
            var site = this.bidtWarehouseDTOs.filter(function (warehouseId) { return warehouseId.wareHouseId === _this.searchObject.warehouseId; });
            if (site && site.length > 0) {
                this.searchObject.siteId = site[0].bidtSiteId;
            }
            var whType = this.bidtWarehouseDTOs.filter(function (warehouseId) { return warehouseId.wareHouseId === _this.searchObject.warehouseId; });
            if (whType && whType.length > 0 && whType[0].whType) {
                this.searchObject.warehouseTypeId = whType[0].whType;
                this.whTypeName = this.whTypeList.filter(function (wh) {
                    return wh.value === _this.searchObject.warehouseTypeId;
                })[0].label;
            }
            else {
                this.searchObject.warehouseTypeId = undefined;
                this.whTypeName = undefined;
            }
            this.showWhTypeDropDown = false;
        }
        else {
            this.getStorageBinList();
            this.getWarehouseTypesList();
            this.searchObject.storageBinId = undefined;
            // this.searchObject.siteId = undefined;
            this.searchObject.warehouseTypeId = undefined;
            this.showWhTypeDropDown = true;
        }
    };
    // calculates stocks on the basis of search criteria
    StockConsultSearchComponent.prototype.calculate = function () {
        // Check for date. No check for method required as some value is always selected in that dropdown.
        if (!!this.searchObject.siteId || !!this.searchObject.pn) {
            this.hasBeenCalculated = true;
            this.getStockInformationList();
        }
        else {
            this.messageService.showWarningMessage(this.getTranslateKey('siteandmatrialvalidation'));
        }
    };
    // get data from server
    StockConsultSearchComponent.prototype.getStockInformationList = function () {
        var _this = this;
        this.isLoadingStructureTable = true;
        this.stockInformaionDtos = [];
        this.stockConsultSearchService.getStockInformationList(this.searchObject).subscribe(function (result) {
            _this.isLoadingStructureTable = false;
            if (!!result && result.length > 0) {
                result.forEach(function (res) {
                    if (res.stockSn === null || res.stockSn === undefined) {
                        res.stockSn = res.stockBatchNumber;
                    }
                    res.stockIssueDtos = [];
                    res.stockQuantityDtos = [];
                    res.issueDateStr = _this.dateService.dateWithHourMinSecToString(res.stockIssueDate);
                    res.quantityDateStr = _this.dateService.dateWithHourMinSecToString(res.stockReceiptDate);
                    res.stockQuantityDtos.push(res);
                    res.stockIssueDtos.push(res);
                    _this.stockInformaionDtos.push(res);
                });
            }
        });
    };
    StockConsultSearchComponent.prototype.resetSearchCriteria = function () {
        this.criteriaName = undefined;
        this.searchObject = {};
    };
    StockConsultSearchComponent.prototype.loadSearchCriteria = function (event) {
        var criteria = event.criteria;
        if (!criteria) {
            this.resetSearchCriteria();
            return;
        }
        // do not load criteria first time if we come from stock alert page
        if (!this.componentData.objectId) {
            this.criteriaName = event.name;
            this.searchObject = criteria || {};
        }
        else {
            this.componentData.objectId = undefined;
        }
    };
    StockConsultSearchComponent.prototype.saveSearchCriteriaAsked = function () {
        var criteriaToSave = this.searchObject;
        this.criteriaToSave = criteriaToSave;
    };
    StockConsultSearchComponent.prototype.openMaterialScreen = function (code) {
        if (code) {
            this.openMaterial(code, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read);
        }
    };
    StockConsultSearchComponent.prototype.openSerialNumber = function (stockInfo) {
        var _this = this;
        this.stockConsultSearchService
            .getFirstEquipmentByPnAndSn(stockInfo.pn, stockInfo.stockSn)
            .subscribe(function (equipment) {
            var labelKey = 'transaction.EquipmentFormComponent';
            var data = {
                id: _this.tabService.generateId(),
                componentId: 'EquipmentFormComponent',
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read
            };
            if (!!equipment) {
                var equipmentId = {
                    equipmentCode: equipment.equipmentCode
                };
                data.objectId = _this.serializationService.serialize(equipmentId);
            }
            _this.tabService.open(_this.tabService.create(data, labelKey, true));
        });
    };
    StockConsultSearchComponent.prototype.openMaterial = function (objectId, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_MATERIAL_FORM,
            openMode: openMode
        };
        if (!!objectId) {
            var materialFormId = {
                pnCode: objectId
            };
            data.objectId = this.serializationService.serialize(materialFormId);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    StockConsultSearchComponent.prototype.onClickNewCalculation = function () {
        this.hasBeenCalculated = false;
    };
    StockConsultSearchComponent.prototype.toggleRowDetailsVisibility = function (row) {
        row._expand = !row._expand;
    };
    StockConsultSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-stock-consult-search',
            template: __webpack_require__(/*! ./stock-consult-search.component.html */ "./src/app/main/logistics/stock-consult/search/stock-consult-search.component.html"),
            styles: [__webpack_require__(/*! ./stock-consult-search.component.scss */ "./src/app/main/logistics/stock-consult/search/stock-consult-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"],
            _material_form_material_form_service__WEBPACK_IMPORTED_MODULE_17__["MaterialFormService"],
            _maintenance_airworthiness_control_search_search_service__WEBPACK_IMPORTED_MODULE_16__["SearchService"],
            _stock_consult_search_service__WEBPACK_IMPORTED_MODULE_18__["StockConsultSearchService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__["PropertiesService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]])
    ], StockConsultSearchComponent);
    return StockConsultSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_13__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-consult/search/stock-consult-search.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-consult/search/stock-consult-search.service.ts ***!
  \*************************************************************************************/
/*! exports provided: StockConsultSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockConsultSearchService", function() { return StockConsultSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-stock-mvt.api */ "./src/app/shared/api/bidt-stock-mvt.api.ts");
/* harmony import */ var _shared_api_bidt_stock_type_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-stock-type.api */ "./src/app/shared/api/bidt-stock-type.api.ts");
/* harmony import */ var _shared_api_bidt_storage_bin_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/bidt-storage-bin.api */ "./src/app/shared/api/bidt-storage-bin.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
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









var StockConsultSearchService = /** @class */ (function (_super) {
    __extends(StockConsultSearchService, _super);
    function StockConsultSearchService(http, appConfigService, bidtStorageBinApi, bidtStockTypeApi, bidtStockMvtApi, bidtWarehouseApi, fleetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtStorageBinApi = bidtStorageBinApi;
        _this.bidtStockTypeApi = bidtStockTypeApi;
        _this.bidtStockMvtApi = bidtStockMvtApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.fleetManagementApi = fleetManagementApi;
        return _this;
    }
    // Find all storage bin list
    StockConsultSearchService.prototype.findAllStorageBinsList = function () {
        return _super.prototype.post.call(this, this.bidtStorageBinApi.findAll);
    };
    // Find all stock type List
    StockConsultSearchService.prototype.findAllStockTypeList = function () {
        return _super.prototype.post.call(this, this.bidtStockTypeApi.findAll);
    };
    // find bin storage by warehouse Id
    StockConsultSearchService.prototype.findBinStorageByWarehouseId = function (input) {
        return _super.prototype.post.call(this, this.bidtStorageBinApi.findByWarehouseId, input);
    };
    // find all stock information
    StockConsultSearchService.prototype.getStockInformationList = function (searchInput) {
        return _super.prototype.post.call(this, this.bidtStockMvtApi.getStockInformationList, searchInput);
    };
    // get Target Days
    StockConsultSearchService.prototype.getIssuePeriodDropDown = function () {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.getTargetDays);
    };
    // get Euipment BY sn and pn
    StockConsultSearchService.prototype.getEuipmentBYpnAndSN = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes, input);
    };
    // get Euipment BY sn and pn
    StockConsultSearchService.prototype.getFirstEquipmentByPnAndSn = function (pn, sn) {
        var equipment = {
            pnCode: pn,
            sn: sn
        };
        return _super.prototype.post.call(this, this.fleetManagementApi.findFirstBidoEquipmentsByPnAndSnCodes, equipment);
    };
    StockConsultSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__["AppConfigService"],
            _shared_api_bidt_storage_bin_api__WEBPACK_IMPORTED_MODULE_4__["BidtStorageBinApi"],
            _shared_api_bidt_stock_type_api__WEBPACK_IMPORTED_MODULE_3__["BidtStockTypeApi"],
            _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_2__["BidtStockMvtApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__["BidtWarehouseApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__["FleetManagementApi"]])
    ], StockConsultSearchService);
    return StockConsultSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-consult/stock-consult.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/logistics/stock-consult/stock-consult.module.ts ***!
  \**********************************************************************/
/*! exports provided: StockConsultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockConsultModule", function() { return StockConsultModule; });
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
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/treetable.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_treetable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../node_modules/primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var _node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_api_bidt_storage_bin_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/api/bidt-storage-bin.api */ "./src/app/shared/api/bidt-storage-bin.api.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/dialog-search-material/dialog-search-material.module */ "./src/app/shared/components/dialog-search-material/dialog-search-material.module.ts");
/* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/dialog-table/dialog-table.module */ "./src/app/shared/components/dialog-table/dialog-table.module.ts");
/* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ "./src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _maintenance_airworthiness_control_search_search_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../maintenance/airworthiness-control/search/search.service */ "./src/app/main/maintenance/airworthiness-control/search/search.service.ts");
/* harmony import */ var _material_form_material_form_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../material/form/material-form.service */ "./src/app/main/logistics/material/form/material-form.service.ts");
/* harmony import */ var _stock_consult_form_stock_consult_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../stock-consult/form/stock-consult-form.component */ "./src/app/main/logistics/stock-consult/form/stock-consult-form.component.ts");
/* harmony import */ var _search_stock_consult_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./search/stock-consult-search.component */ "./src/app/main/logistics/stock-consult/search/stock-consult-search.component.ts");
/* harmony import */ var _search_stock_consult_search_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./search/stock-consult-search.service */ "./src/app/main/logistics/stock-consult/search/stock-consult-search.service.ts");
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
    primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
    primeng_chart__WEBPACK_IMPORTED_MODULE_2__["ChartModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
    primeng_treetable__WEBPACK_IMPORTED_MODULE_8__["TreeTableModule"],
    _node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__["SplitButtonModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__["SelectButtonModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"]
];
var INTERNAL_MODULES = [_shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_15__["DialogTableModule"], _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_16__["DynamicAttributesModule"], _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_18__["ModalModule"], _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_14__["DialogSearchMaterialModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [_search_stock_consult_search_component__WEBPACK_IMPORTED_MODULE_23__["StockConsultSearchComponent"], _stock_consult_form_stock_consult_form_component__WEBPACK_IMPORTED_MODULE_22__["StockConsultFormComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_material_form_material_form_service__WEBPACK_IMPORTED_MODULE_21__["MaterialFormService"], _maintenance_airworthiness_control_search_search_service__WEBPACK_IMPORTED_MODULE_20__["SearchService"], _search_stock_consult_search_service__WEBPACK_IMPORTED_MODULE_24__["StockConsultSearchService"], _shared_api_bidt_storage_bin_api__WEBPACK_IMPORTED_MODULE_12__["BidtStorageBinApi"]];
var StockConsultModule = /** @class */ (function () {
    function StockConsultModule() {
    }
    StockConsultModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS, [_stock_consult_form_stock_consult_form_component__WEBPACK_IMPORTED_MODULE_22__["StockConsultFormComponent"]]),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_10__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_11__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_19__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS),
                _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_17__["ManageSearchCriteriaModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], StockConsultModule);
    return StockConsultModule;
}());



/***/ })

}]);
//# sourceMappingURL=logistics-stock-consult-stock-consult-module.js.map