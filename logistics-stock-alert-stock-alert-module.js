(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-stock-alert-stock-alert-module"],{

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

/***/ "./src/app/main/logistics/stock-alert/form/stock-alert-form.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/main/logistics/stock-alert/form/stock-alert-form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ \"page.searchPage\" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"newCalculation()\">\r\n      {{ componentData.componentId + \".newCalculation\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"page.mainData\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ componentData.componentId + \".startDate\" | translate }}</label>\r\n\r\n                  <div *ngIf=\"!!searchObject && !!searchObject.startDate\" class=\"form-control\">\r\n                    <p-calendar\r\n                      showButtonBar=\"true\"\r\n                      [monthNavigator]=\"true\"\r\n                      [yearNavigator]=\"true\"\r\n                      [yearRange]=\"sessionService.calendarYearRange\"\r\n                      class=\"aw-calendar\"\r\n                      [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                      [locale]=\"sessionService.calendarFormat\"\r\n                      [(ngModel)]=\"searchObject.startDate\"\r\n                      disabled\r\n                    ></p-calendar>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ componentData.componentId + \".endDate\" | translate }}</label>\r\n\r\n                  <div *ngIf=\"!!searchObject && !!searchObject.endDate\" class=\"form-control\">\r\n                    <p-calendar\r\n                      showButtonBar=\"true\"\r\n                      [monthNavigator]=\"true\"\r\n                      [yearNavigator]=\"true\"\r\n                      [yearRange]=\"sessionService.calendarYearRange\"\r\n                      class=\"aw-calendar\"\r\n                      [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                      [locale]=\"sessionService.calendarFormat\"\r\n                      [(ngModel)]=\"searchObject.endDate\"\r\n                      disabled\r\n                    ></p-calendar>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ componentData.componentId + \".productCode\" | translate }} </label>\r\n\r\n                  <div *ngIf=\"!!searchObject && !!searchObject.productCode\" class=\"form-control\">\r\n                    <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.productCode\" [disabled]=\"true\" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\"> {{ componentData.componentId + \".warehouseId\" | translate }} </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"warehouse\" [disabled]=\"true\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #documentTableAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".alertList\" | translate }} ({{\r\n                    alertsListTable ? alertsListTable.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableAlerts\r\n                class=\"aw-table2\"\r\n                [columns]=\"alertsListTableCols\"\r\n                [value]=\"alertsListTableForDisplay\"\r\n                [(selection)]=\"selectedAlerts\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedAlerts.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableAlertsGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableAlerts.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <!-- <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"selectedAlerts.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openStockOperation()\"\r\n                      >\r\n                        {{ componentData.componentId + \".goToStock\" | translate }}\r\n                      </button>\r\n                      &nbsp;&nbsp;\r\n\r\n                      <p-splitButton\r\n                        *ngIf=\"selectedAlerts.length === 1\"\r\n                        class=\"aw-table-btn aw-split-btn\"\r\n                        label=\"{{ getComponentName() + '.openDocument' | translate }}\"\r\n                        [model]=\"openDocumentList\"\r\n                      ></p-splitButton>\r\n\r\n                      <p-selectButton\r\n                        *ngIf=\"selectedAlerts.length === 0\"\r\n                        class=\"aw-table-btn\"\r\n                        [(ngModel)]=\"selectedFilterAlert\"\r\n                        [options]=\"filterAlertList\"\r\n                        (onChange)=\"onChangeFilterAlert($event)\"\r\n                      ></p-selectButton>\r\n                    </div> -->\r\n                    <div class=\"aw-table-actions\">\r\n                      <p-splitButton\r\n                        *ngIf=\"selectedAlerts.length === 1\"\r\n                        class=\"aw-table-btn aw-split-btn\"\r\n                        label=\"{{ getComponentName() + '.navigate' | translate }}\"\r\n                        [model]=\"navigateList\"\r\n                      ></p-splitButton>\r\n                      &nbsp;&nbsp;\r\n\r\n                      <button *ngIf=\"selectedAlerts.length === 1\" type=\"button\" mat-raised-button>\r\n                        {{ componentData.componentId + \".createOrder\" | translate }}\r\n                      </button>\r\n\r\n                      <p-selectButton\r\n                        *ngIf=\"selectedAlerts.length === 0\"\r\n                        class=\"aw-table-btn\"\r\n                        [(ngModel)]=\"selectedFilterAlert\"\r\n                        [options]=\"filterAlertList\"\r\n                        (onChange)=\"onChangeFilterAlert($event)\"\r\n                      ></p-selectButton>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td\r\n                      *ngFor=\"let col of columns\"\r\n                      [ngSwitch]=\"col.field\"\r\n                      [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                      [ngClass]=\"{\r\n                        'critical-value-dark':\r\n                          (col.field === 'alertType' ||\r\n                            col.field === 'description' ||\r\n                            col.field === 'alertEndDateText') &&\r\n                          rowData.alertDesign === 'CRITICALVALUE_DARK',\r\n                        'critical-value-light':\r\n                          (col.field === 'alertType' ||\r\n                            col.field === 'description' ||\r\n                            col.field === 'alertEndDateText') &&\r\n                          rowData.alertDesign === 'CRITICALVALUE_LIGHT',\r\n                        'calendar-yellow':\r\n                          (col.field === 'alertType' ||\r\n                            col.field === 'description' ||\r\n                            col.field === 'alertEndDateText') &&\r\n                          rowData.alertDesign === 'CALENDAR_YELLOW',\r\n                        'bad-value-dark':\r\n                          (col.field === 'alertType' ||\r\n                            col.field === 'description' ||\r\n                            col.field === 'alertEndDateText') &&\r\n                          rowData.alertDesign === 'BADVALUE_DARK'\r\n                      }\"\r\n                    >\r\n                      <span *ngSwitchCase=\"'alertType'\"\r\n                        ><span *ngIf=\"rowData.showTooltip === 'yes'\" title=\"{{ rowData.tooltip }}\">{{\r\n                          rowData[col.field]\r\n                        }}</span\r\n                        ><span *ngIf=\"rowData.showTooltip !== 'yes'\">{{ rowData[col.field] }}</span></span\r\n                      >\r\n                      <span *ngSwitchCase=\"'description'\" title=\"{{ rowData[col.field] }}\">{{\r\n                        rowData[col.field]\r\n                      }}</span>\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/stock-alert/form/stock-alert-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main/logistics/stock-alert/form/stock-alert-form.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .critical-value-dark {\n  background-color: #fba643 !important; }\n\n:host .critical-value-light {\n  background-color: #fecc8e !important; }\n\n:host .calendar-yellow {\n  background-color: #efefb0 !important; }\n\n:host .bad-value-dark {\n  background-color: #ff6758 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stYWxlcnQvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfbW9kaWZpZXJzLnNjc3MiLCJzcmMvYXBwL21haW4vbG9naXN0aWNzL3N0b2NrLWFsZXJ0L2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxzdG9jay1hbGVydFxcZm9ybVxcc3RvY2stYWxlcnQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUNBQWlDO0VBQWpDLHNDQUFpQztFQUFqQyxpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxvQ0FBNEI7S0FBNUIsaUNBQTRCO01BQTVCLGdDQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUE7O0FBS2I7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxzQ0FBc0MsRUFBQTs7QUN6SHhDO0VBRUksb0NBQWlELEVBQUE7O0FBRnJEO0VBTUksb0NBQWtELEVBQUE7O0FBTnREO0VBVUksb0NBQTZDLEVBQUE7O0FBVmpEO0VBY0ksb0NBQTRDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1hbGVydC9mb3JtL3N0b2NrLWFsZXJ0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS0tZmxleC1jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5LS1mbGV4LXJvdyB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlaWdodC0tMTAwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taW4td2lkdGgtLWZpdC1jb250ZW50IHtcclxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi0tcmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Nyb2xsLXktLW5vbmUge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC0tdW5zZWxlY3RhYmxlIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlzaWJpbGl0eS0taGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLS0xMCB7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLndpZHRoLS0yMCB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLndpZHRoLS0zMCB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLndpZHRoLS00MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS01MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS02MCB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLndpZHRoLS03MCB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLndpZHRoLS04MCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLndpZHRoLS05MCB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLndpZHRoLS0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4uZmxleC0tMSB7XHJcbiAgZmxleDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMiB7XHJcbiAgZmxleDogMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMyB7XHJcbiAgZmxleDogMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNCB7XHJcbiAgZmxleDogNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNSB7XHJcbiAgZmxleDogNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tYXV0byB7XHJcbiAgZmxleDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWVuZCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tc3RhcnQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1lbmQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LXN0YXJ0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG4iLCJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcIm1vZGlmaWVyc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5jcml0aWNhbC12YWx1ZS1kYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjcml0aWNhbC12YWx1ZS1kYXJrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY3JpdGljYWwtdmFsdWUtbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNyaXRpY2FsLXZhbHVlLWxpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2FsZW5kYXIteWVsbG93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYWxlbmRhci15ZWxsb3cgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5iYWQtdmFsdWUtZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFkLXZhbHVlLWRhcmsgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/logistics/stock-alert/form/stock-alert-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/logistics/stock-alert/form/stock-alert-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: StockAlertFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockAlertFormComponent", function() { return StockAlertFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/@ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _search_stock_alert_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../search/stock-alert-search.service */ "./src/app/main/logistics/stock-alert/search/stock-alert-search.service.ts");
/* harmony import */ var _stock_alert_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stock-alert-form.service */ "./src/app/main/logistics/stock-alert/form/stock-alert-form.service.ts");
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














var FilterAlert;
(function (FilterAlert) {
    FilterAlert["Empty"] = "MSG_TXT_EMPTY_STOCK";
    FilterAlert["Low"] = "MSG_TXT_LOW_THRESHOLD_REACHED";
    FilterAlert["High"] = "MSG_TXT_HIGH_THRESHOLD_REACHED";
    FilterAlert["Expiration"] = "MSG_TXT_EXPIRATION";
    FilterAlert["Reset"] = "Reset";
})(FilterAlert || (FilterAlert = {}));
var StockAlertFormComponent = /** @class */ (function (_super) {
    __extends(StockAlertFormComponent, _super);
    function StockAlertFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, stockAlertFormService, dateService, stockAlertSearchService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.stockAlertFormService = stockAlertFormService;
        _this.dateService = dateService;
        _this.stockAlertSearchService = stockAlertSearchService;
        _this.translateService = translateService;
        _this.filterAlert = FilterAlert;
        _this.init();
        _this.setFilterAssetList();
        _this.setOpenDocumentList();
        _this.setNavigateList();
        _this.loadWarehouses();
        _this.getTooltipTranslation();
        return _this;
    }
    StockAlertFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.searchObject =
            this.componentData.objectId && this.serializationService.deserialize(this.componentData.objectId);
        this.searchObject.startDate = new Date(this.searchObject.startDate);
        this.searchObject.endDate = new Date(this.searchObject.endDate);
        this.calculate();
    };
    StockAlertFormComponent.prototype.init = function () {
        this.warehouses = [];
        this.warehouse = '';
        this.alertsListTable = [];
        this.alertsListTableForDisplay = [];
        this.selectedAlerts = [];
        this.highThresholdTooltipText = '';
        this.lowThresholdTooltipText = '';
        this.selectedFilterAlert = FilterAlert.Reset;
        this.setTableCols();
    };
    StockAlertFormComponent.prototype.setFilterAssetList = function () {
        var _this = this;
        var emptyKey = this.getComponentName() + ".emptyStock";
        var lowKey = this.getComponentName() + ".alertsOnLowThresholds";
        var highKey = this.getComponentName() + ".alertsOnHighThresholds";
        var expirationKey = this.getComponentName() + ".alertsOnExpiration";
        var resetKey = this.getComponentName() + ".reset";
        this.translateService.get([emptyKey, lowKey, highKey, expirationKey, resetKey]).subscribe(function (results) {
            var emptyLabel = !!results ? results[emptyKey] : 'Empty Stock';
            var lowLabel = !!results ? results[lowKey] : 'Alerts on Low Thresholds';
            var highLabel = !!results ? results[highKey] : 'Alerts on High Thresholds';
            var expirationLabel = !!results ? results[expirationKey] : 'Alerts on Expiration';
            var resetLabel = !!results ? results[resetKey] : '';
            _this.filterAlertList = [
                { label: emptyLabel, value: FilterAlert.Empty },
                { label: lowLabel, value: FilterAlert.Low },
                { label: highLabel, value: FilterAlert.High },
                { label: expirationLabel, value: FilterAlert.Expiration },
                { label: resetLabel, value: FilterAlert.Reset, icon: 'fa fa-fw fa-undo', title: 'Reset' }
            ];
        });
    };
    StockAlertFormComponent.prototype.setNavigateList = function () {
        var _this = this;
        var stockStatusKey = this.getTranslateKey('stockStatus');
        var stockConsultKey = this.getTranslateKey('stockConsult');
        this.translateService.get([stockStatusKey, stockConsultKey]).subscribe(function (results) {
            var stockStatusLabel = results ? results[stockStatusKey] : 'Stock Status';
            var stockConsultLabel = results ? results[stockConsultKey] : 'Stock Consult';
            _this.navigateList = [
                {
                    label: stockStatusLabel,
                    command: function () {
                        var alert = _this.selectedAlerts[0];
                        // Values to replace with correct ones
                        _this.stockStatus = {
                            pnCode: alert.materialCode,
                            stockOwnerCode: '',
                            warehouseId: alert.warehouseId,
                            siteId: alert.siteId,
                            startDate: alert.date ? alert.date : new Date(),
                            endDate: alert.date ? alert.date : new Date()
                        };
                        var data = {
                            id: _this.tabService.generateId(),
                            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_STOCK_STATUS_SEARCH,
                            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Read,
                            objectId: _this.serializationService.serialize(_this.stockStatus)
                        };
                        var labelKey = 'transaction.' + data.componentId;
                        _this.tabService.open(_this.tabService.create(data, labelKey, true));
                    }
                },
                {
                    label: stockConsultLabel,
                    command: function () {
                        // Values to replace with correct ones
                        _this.stockConsult = {
                            pn: '',
                            withItsAlternatives: false,
                            siteId: 0,
                            warehouseId: 0,
                            storageBinId: 0,
                            warehouseTypeId: '',
                            stockTypeId: 0,
                            valuationGroupId: 0,
                            issuePeriod: '' // ?
                        };
                        var data = {
                            id: _this.tabService.generateId(),
                            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_STOCK_CONSULT_FORM,
                            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Read,
                            objectId: _this.serializationService.serialize(_this.stockConsult)
                        };
                        var labelKey = 'transaction.' + data.componentId;
                        _this.tabService.open(_this.tabService.create(data, labelKey, true));
                    }
                }
            ];
        });
    };
    StockAlertFormComponent.prototype.setOpenDocumentList = function () {
        var _this = this;
        var purchaseRequestKey = this.getTranslateKey('purchaseRequest');
        var requestForQuotationKey = this.getTranslateKey('quotationRequest');
        var purchaseOrderKey = this.getTranslateKey('purchaseOrder');
        this.translateService.get([purchaseRequestKey, requestForQuotationKey, purchaseOrderKey]).subscribe(function (results) {
            var purchaseRequestLabel = results ? results[purchaseRequestKey] : 'Purchase Request';
            var requestForQuotationLabel = results ? results[requestForQuotationKey] : 'Request for Quotation';
            var purchaseOrderLabel = results ? results[purchaseOrderKey] : 'Purchase Order';
            _this.openDocumentList = [
                {
                    label: purchaseRequestLabel,
                    command: function () {
                        // todo
                    }
                },
                {
                    label: requestForQuotationLabel,
                    command: function () {
                        // todo
                    }
                },
                {
                    label: purchaseOrderLabel,
                    command: function () {
                        // todo
                    }
                }
            ];
        });
    };
    StockAlertFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_STOCK_ALERT_FORM;
    };
    StockAlertFormComponent.prototype.setTableCols = function () {
        this.alertsListTableCols = [
            { field: 'alertDate', alignment: 'left', width: '7%' },
            { field: 'materialCode', alignment: 'left', width: '10%' },
            { field: 'alertSNBN', alignment: 'left', width: '5%' },
            { field: 'alertDescription', alignment: 'left', width: '20%' },
            { field: 'warehouse', alignment: 'left', width: '15%' },
            { field: 'alertType', alignment: 'left', width: '13%' },
            { field: 'description', alignment: 'left', width: '13%' },
            // { field: 'alertThresholdLow', alignment: 'left', width: '6%' },
            // { field: 'alertThresholdHigh', alignment: 'left', width: '6%' },
            { field: 'alertEndDateText', alignment: 'left', width: '7%' }
        ];
    };
    // loads warehouse dropdown
    StockAlertFormComponent.prototype.loadWarehouses = function () {
        var _this = this;
        this.stockAlertSearchService.findAll().subscribe(function (results) {
            results.forEach(function (res) {
                var warehouse = { label: '', value: '' };
                warehouse = {
                    label: res.whCode + " - " + res.whName,
                    value: "" + res.wareHouseId
                };
                _this.warehouses.push(warehouse);
            });
            var ware = _this.warehouses.filter(function (w) { return _this.searchObject.warehouseId && w.value === _this.searchObject.warehouseId.toString(); });
            _this.warehouse = ware[0] && ware[0].label;
        });
    };
    StockAlertFormComponent.prototype.getTooltipTranslation = function () {
        var _this = this;
        var high = this.getComponentName() + ".highThreshold";
        var low = this.getComponentName() + ".lowThreshold";
        this.translateService.get([high, low]).subscribe(function (results) {
            _this.highThresholdTooltipText = results[high];
            _this.lowThresholdTooltipText = results[low];
        });
    };
    // tslint:disable-next-line:no-any
    StockAlertFormComponent.prototype.onChangeFilterAlert = function (event) {
        switch (event.value) {
            case 'Reset':
                this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable));
                break;
            case 'MSG_TXT_EXPIRATION':
                this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable)).filter(function (alert) {
                    return alert.alertListRow &&
                        (alert.alertListRow.alertType === 'MSG_TXT_EXPIRATION' ||
                            alert.alertListRow.alertType === 'MSG_ERROR_EXPIRATION' ||
                            alert.alertListRow.alertType === 'MSG_WARNING_EXPIRATION');
                });
                break;
            default:
                this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable)).filter(function (alert) { return alert.alertListRow && alert.alertListRow.alertType === event.value; });
                break;
        }
    };
    StockAlertFormComponent.prototype.calculate = function () {
        var _this = this;
        this.isLoading = true;
        this.stockAlertFormService.calculate(this.searchObject).subscribe(function (results) {
            results.forEach(function (res) {
                var alertRow = {};
                alertRow.alertDate = _this.dateService.dateToString(res.alertDate);
                var endDate = res.alertEndDateText && new Date(res.alertEndDateText);
                if (!!endDate) {
                    alertRow.alertEndDateText = _this.dateService.dateToString(endDate);
                }
                alertRow.materialCode = res.materialCode;
                if (!!res.alertSN) {
                    alertRow.alertSNBN = res.alertSN;
                }
                else if (!!res.alertBN) {
                    alertRow.alertSNBN = res.alertBN;
                }
                alertRow.alertDescription = res.alertDescription;
                if (!!res.alertWarehouseData && !!res.alertWarehouseData.whCode && !!res.alertWarehouseData.whName) {
                    alertRow.warehouse = res.alertWarehouseData.whCode + " - " + res.alertWarehouseData.whName;
                }
                if (!!res.alertType) {
                    var alertType = _this.getComponentName() + "." + res.alertType;
                    _this.translateService.get(alertType).subscribe(function (result) {
                        if (!!result) {
                            alertRow.alertType = result;
                        }
                    });
                }
                if (!!res.alertTextCode) {
                    var alertTextCode = _this.getComponentName() + "." + res.alertTextCode;
                    _this.translateService.get(alertTextCode).subscribe(function (result) {
                        if (!!result) {
                            alertRow.description = result + " : " + res.alertText;
                        }
                    });
                }
                if (res.alertThresholdLow !== null && res.alertThresholdLow !== undefined) {
                    alertRow.alertThresholdLow = res.alertThresholdLow.toString();
                }
                if (res.alertThresholdHigh !== null && res.alertThresholdHigh !== undefined) {
                    alertRow.alertThresholdHigh = res.alertThresholdHigh.toString();
                }
                if (!!res.alertType &&
                    res.alertType === 'MSG_TXT_LOW_THRESHOLD_REACHED' &&
                    res.alertThresholdLow !== null &&
                    res.alertThresholdLow !== undefined) {
                    alertRow.showTooltip = 'yes';
                    alertRow.tooltip = _this.lowThresholdTooltipText + " : " + res.alertThresholdLow;
                }
                else if (!!res.alertType &&
                    res.alertType === 'MSG_TXT_HIGH_THRESHOLD_REACHED' &&
                    res.alertThresholdHigh !== null &&
                    res.alertThresholdHigh !== undefined) {
                    alertRow.showTooltip = 'yes';
                    alertRow.tooltip = _this.lowThresholdTooltipText + " : " + res.alertThresholdLow;
                }
                else {
                    alertRow.showTooltip = 'no';
                }
                alertRow.alertDesign = res.alertDesign;
                alertRow.alertListRow = res;
                _this.alertsListTable.push(alertRow);
            });
            _this.isLoading = false;
            _this.alertsListTableForDisplay = JSON.parse(JSON.stringify(_this.alertsListTable));
        });
    };
    StockAlertFormComponent.prototype.openStockOperation = function () {
        // todo
    };
    StockAlertFormComponent.prototype.newCalculation = function () {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_STOCK_ALERT_SEARCH,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    StockAlertFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-stock-alert-form',
            template: __webpack_require__(/*! ./stock-alert-form.component.html */ "./src/app/main/logistics/stock-alert/form/stock-alert-form.component.html"),
            styles: [__webpack_require__(/*! ./stock-alert-form.component.scss */ "./src/app/main/logistics/stock-alert/form/stock-alert-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"],
            _stock_alert_form_service__WEBPACK_IMPORTED_MODULE_13__["StockAlertFormService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"],
            _search_stock_alert_search_service__WEBPACK_IMPORTED_MODULE_12__["StockAlertSearchService"],
            _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], StockAlertFormComponent);
    return StockAlertFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-alert/form/stock-alert-form.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/logistics/stock-alert/form/stock-alert-form.service.ts ***!
  \*****************************************************************************/
/*! exports provided: StockAlertFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockAlertFormService", function() { return StockAlertFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-stock-mvt.api */ "./src/app/shared/api/bidt-stock-mvt.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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





var StockAlertFormService = /** @class */ (function (_super) {
    __extends(StockAlertFormService, _super);
    function StockAlertFormService(http, appConfigService, bidtStockMvt) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtStockMvt = bidtStockMvt;
        return _this;
    }
    StockAlertFormService.prototype.calculate = function (input) {
        return _super.prototype.post.call(this, this.bidtStockMvt.findAlerts, input);
    };
    StockAlertFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_2__["BidtStockMvtApi"]])
    ], StockAlertFormService);
    return StockAlertFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-alert/search/stock-alert-search.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-alert/search/stock-alert-search.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ criteriaName }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"onClickNewCalculation()\" *ngIf=\"hasBeenCalculated\">\r\n      <span>{{ componentData.componentId + \".newCalculation\" | translate }}</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <!-- Form -->\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ componentData.componentId + \".mainInformation\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <aw-manage-search-criteria\r\n                    [componentId]=\"SEARCH_CRITERIA_ID\"\r\n                    (onSelected)=\"loadSearchCriteria($event)\"\r\n                    (onSavedAsked)=\"saveSearchCriteriaAsked()\"\r\n                    [objectFromPage]=\"criteriaToSave\"\r\n                    [canChange]=\"!hasBeenCalculated\"\r\n                  ></aw-manage-search-criteria>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group required\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".startDate\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-calendar\r\n                        showButtonBar=\"true\"\r\n                        [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\"\r\n                        [yearRange]=\"sessionService.calendarYearRange\"\r\n                        class=\"aw-calendar\"\r\n                        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                        [locale]=\"sessionService.calendarFormat\"\r\n                        [(ngModel)]=\"searchObject.startDate\"\r\n                        [disabled]=\"hasBeenCalculated\"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group required\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".endDate\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-calendar\r\n                        showButtonBar=\"true\"\r\n                        [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\"\r\n                        [yearRange]=\"sessionService.calendarYearRange\"\r\n                        class=\"aw-calendar\"\r\n                        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                        [locale]=\"sessionService.calendarFormat\"\r\n                        [(ngModel)]=\"searchObject.endDate\"\r\n                        [disabled]=\"hasBeenCalculated\"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".productCode\" | translate }} </label>\r\n\r\n                    <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: hasBeenCalculated }\">\r\n                      <div class=\"form-control-data\" (click)=\"quickSearchMaterial()\">\r\n                        {{ searchObject.productCode }}\r\n                      </div>\r\n\r\n                      <div *ngIf=\"searchObject.productCode\" class=\"btn-clear-wrapper\">\r\n                        <i\r\n                          class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"searchObject.productCode = undefined\"\r\n                        ></i>\r\n                      </div>\r\n                      <div class=\"btn-search-wrapper\">\r\n                        <i\r\n                          class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"quickSearchMaterial()\"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".warehouseId\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"warehouses\"\r\n                        [(ngModel)]=\"searchObject.warehouseId\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [disabled]=\"hasBeenCalculated\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\"></div>\r\n\r\n                  <div class=\"form-group\"></div>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <div class=\"search-actions\">\r\n                    <button type=\"button\" mat-raised-button (click)=\"calculate()\" [disabled]=\"hasBeenCalculated\">\r\n                      {{ componentData.componentId + \".toCalculate\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Table -->\r\n      <div class=\"grid-row\" *ngIf=\"hasBeenCalculated\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #documentTableAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".alertList\" | translate }} ({{\r\n                    alertsListTable ? alertsListTable.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableAlerts\r\n                class=\"aw-table2\"\r\n                [columns]=\"alertsListTableCols\"\r\n                [value]=\"alertsListTableForDisplay\"\r\n                [(selection)]=\"selectedAlerts\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedAlerts.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableAlertsGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableAlerts.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <p-splitButton\r\n                        *ngIf=\"selectedAlerts.length === 1\"\r\n                        class=\"aw-table-btn aw-split-btn\"\r\n                        label=\"{{ getComponentName() + '.goTo' | translate }}\"\r\n                        [model]=\"navigateList\"\r\n                      ></p-splitButton>\r\n                      &nbsp;&nbsp;\r\n\r\n                      <button\r\n                        *ngIf=\"selectedAlerts.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"onClickCreateOrder()\"\r\n                      >\r\n                        {{ componentData.componentId + \".createRequest\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <span\r\n                        *ngSwitchCase=\"'control'\"\r\n                        [class.warning]=\"isWarning(rowData.alertDesign)\"\r\n                        [class.nok]=\"isNok(rowData.alertDesign)\"\r\n                      >\r\n                        <b>\r\n                          <span *ngIf=\"isWarning(rowData.alertDesign)\">{{ \"table.warning\" | translate }}</span>\r\n                          <span *ngIf=\"isNok(rowData.alertDesign)\">{{ \"table.nok\" | translate }}</span>\r\n                        </b>\r\n                      </span>\r\n                      <span *ngSwitchCase=\"'alertType'\" pTooltip=\"{{ rowData.description }}\"\r\n                        >{{ rowData[col.field] }}\r\n                      </span>\r\n                      <span *ngSwitchCase=\"'description'\" title=\"{{ rowData[col.field] }}\">{{\r\n                        rowData[col.field]\r\n                      }}</span>\r\n                      <a\r\n                        *ngSwitchCase=\"'materialCode'\"\r\n                        title=\"{{ rowData[col.field] }}\"\r\n                        (click)=\"openMaterialUC(rowData)\"\r\n                        >{{ rowData[col.field] }}</a\r\n                      >\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-search-material\r\n  *ngIf=\"showQuickSearchMaterialPopup\"\r\n  [(display)]=\"showQuickSearchMaterialPopup\"\r\n  [material-code]=\"searchObject.productCode\"\r\n  (onSelected)=\"setSelectedMaterial($event)\"\r\n></aw-dialog-search-material>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/stock-alert/search/stock-alert-search.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-alert/search/stock-alert-search.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .critical-value-dark {\n  background-color: #fba643 !important; }\n\n:host .critical-value-light {\n  background-color: #fecc8e !important; }\n\n:host .calendar-yellow {\n  background-color: #efefb0 !important; }\n\n:host .bad-value-dark {\n  background-color: #ff6758 !important; }\n\n:host td > span {\n  display: block; }\n\n:host td > span.warning {\n    background-color: #ffc107; }\n\n:host td > span.nok {\n    background-color: #f6685e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stYWxlcnQvc2VhcmNoL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9tb2RpZmllcnMuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stYWxlcnQvc2VhcmNoL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcc3RvY2stYWxlcnRcXHNlYXJjaFxcc3RvY2stYWxlcnQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1hbGVydC9zZWFyY2gvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5Q0FBaUM7RUFBakMsc0NBQWlDO0VBQWpDLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLG9DQUE0QjtLQUE1QixpQ0FBNEI7TUFBNUIsZ0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQTs7QUFLYjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLHNDQUFzQyxFQUFBOztBQ3pIeEM7RUFFSSxvQ0FBaUQsRUFBQTs7QUFGckQ7RUFNSSxvQ0FBa0QsRUFBQTs7QUFOdEQ7RUFVSSxvQ0FBNkMsRUFBQTs7QUFWakQ7RUFjSSxvQ0FBNEMsRUFBQTs7QUFkaEQ7RUFrQkksY0FBYyxFQUFBOztBQWxCbEI7SUFxQk0seUJDSFUsRUFBQTs7QURsQmhCO0lBd0JNLHlCQ0pjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1hbGVydC9zZWFyY2gvc3RvY2stYWxlcnQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXktLWZsZXgtY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzcGxheS0tZmxleC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5LS1ub25lIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWlnaHQtLTEwMCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWluLXdpZHRoLS1maXQtY29udGVudCB7XHJcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9zaXRpb24tLXJlbGF0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjcm9sbC15LS1ub25lIHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtLXVuc2VsZWN0YWJsZSB7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpc2liaWxpdHktLWhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC0tMTAge1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi53aWR0aC0tMjAge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi53aWR0aC0tMzAge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNDAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNTAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNjAge1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tNzAge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tODAge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tOTAge1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi53aWR0aC0tMTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLmZsZXgtLTEge1xyXG4gIGZsZXg6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTIge1xyXG4gIGZsZXg6IDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTMge1xyXG4gIGZsZXg6IDMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTQge1xyXG4gIGZsZXg6IDQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLTUge1xyXG4gIGZsZXg6IDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtLWF1dG8ge1xyXG4gIGZsZXg6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1lbmQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLXN0YXJ0IHtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktZW5kIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1zdGFydCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJtb2RpZmllcnNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuY3JpdGljYWwtdmFsdWUtZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JpdGljYWwtdmFsdWUtZGFyayAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNyaXRpY2FsLXZhbHVlLWxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjcml0aWNhbC12YWx1ZS1saWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNhbGVuZGFyLXllbGxvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FsZW5kYXIteWVsbG93ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYmFkLXZhbHVlLWRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhZC12YWx1ZS1kYXJrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICB0ZCA+IHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBwYWRkaW5nOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLSA0cHgpO1xyXG4gICAgJi53YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICAgICYubm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/logistics/stock-alert/search/stock-alert-search.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/logistics/stock-alert/search/stock-alert-search.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StockAlertSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockAlertSearchComponent", function() { return StockAlertSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _stock_alert_search_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stock-alert-search.service */ "./src/app/main/logistics/stock-alert/search/stock-alert-search.service.ts");
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














var StockAlertSearchComponent = /** @class */ (function (_super) {
    __extends(StockAlertSearchComponent, _super);
    function StockAlertSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, stockAlertSearchService, translateService, dateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.stockAlertSearchService = stockAlertSearchService;
        _this.translateService = translateService;
        _this.dateService = dateService;
        _this.SEARCH_CRITERIA_ID = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].STOCK_ALERT_SEARCH_CRITERIA_ID;
        _this.warehouses = [];
        _this.initData();
        _this.initTables();
        _this.init();
        _this.loadWarehouses();
        _this.showQuickSearchMaterialPopup = false;
        return _this;
    }
    StockAlertSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        // this.displayComponentContext('global.search', true);
    };
    StockAlertSearchComponent.prototype.init = function () {
        this.getTooltipTranslation();
        this.getNavigateList();
        var week = 7;
        this.searchObject = {
            startDate: new Date(),
            endDate: new Date()
        };
        this.searchObject.startDate = new Date();
        this.searchObject.endDate.setDate(this.searchObject.startDate.getDate() + week);
    };
    StockAlertSearchComponent.prototype.initData = function () {
        this.isLoading = false;
        this.lowThresholdTooltipText = '';
        this.highThresholdTooltipText = '';
        this.alertsListTable = [];
        this.alertsListTableForDisplay = [];
        this.selectedAlerts = [];
        this.navigateList = [];
        this.hasBeenCalculated = false;
    };
    StockAlertSearchComponent.prototype.initTables = function () {
        this.alertsListTableCols = [
            { field: 'control', alignment: 'center', width: '5%' },
            { field: 'alertType', alignment: 'left', width: '10%' },
            { field: 'alertDate', alignment: 'left', width: '10%' },
            { field: 'materialCode', alignment: 'left', width: '10%' },
            { field: 'alertSNBN', alignment: 'left', width: '5%' },
            { field: 'alertDescription', alignment: 'left', width: '20%' },
            { field: 'warehouse', alignment: 'left', width: '15%' },
            { field: 'alertEndDateText', alignment: 'left', width: '7%' }
        ];
    };
    StockAlertSearchComponent.prototype.getTooltipTranslation = function () {
        var _this = this;
        var high = this.getComponentName() + ".highThreshold";
        var low = this.getComponentName() + ".lowThreshold";
        this.translateService.get([high, low]).subscribe(function (results) {
            _this.highThresholdTooltipText = results[high];
            _this.lowThresholdTooltipText = results[low];
        });
    };
    StockAlertSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].LOG_STOCK_ALERT_SEARCH;
    };
    // opens material popup in search criteria
    StockAlertSearchComponent.prototype.quickSearchMaterial = function () {
        if (this.hasBeenCalculated) {
            return;
        }
        this.showQuickSearchMaterialPopup = true;
    };
    // loads warehouse dropdown
    StockAlertSearchComponent.prototype.loadWarehouses = function () {
        var _this = this;
        this.stockAlertSearchService.findAllWarehouseByUserRights().subscribe(function (results) {
            _this.warehouses = results;
        });
    };
    // calculates stocks on the basis of search criteria
    StockAlertSearchComponent.prototype.calculate = function () {
        // Check for date.
        if (!!this.searchObject.startDate && !!this.searchObject.endDate) {
            // check for third property
            if (!!this.searchObject.productCode || !!this.searchObject.warehouseId) {
                this.hasBeenCalculated = true;
                this.getStockAlertList();
            }
            else {
                this.messageService.showErrorMessage(this.getTranslateKey('enterSearchCriteria'));
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('enterSearchCriteria'));
        }
    };
    StockAlertSearchComponent.prototype.getNavigateList = function () {
        var _this = this;
        var stockStatusKey = this.getTranslateKey('stockStatus');
        var stockConsultKey = this.getTranslateKey('stockConsult');
        this.translateService.get([stockStatusKey, stockConsultKey]).subscribe(function (results) {
            var stockStatusLabel = results ? results[stockStatusKey] : 'Stock Status';
            var stockConsultLabel = results ? results[stockConsultKey] : 'Stock Consult';
            _this.navigateList = [
                {
                    label: stockStatusLabel,
                    command: function () {
                        var alert = _this.selectedAlerts[0];
                        // Values to replace with correct ones
                        _this.stockStatus = {
                            pnCode: alert.materialCode,
                            stockOwnerCode: '',
                            warehouseId: alert.warehouseId,
                            siteId: alert.siteId,
                            startDate: alert.date ? alert.date : new Date(),
                            endDate: alert.date ? alert.date : new Date()
                        };
                        var data = {
                            id: _this.tabService.generateId(),
                            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].LOG_STOCK_STATUS_SEARCH,
                            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read,
                            objectId: _this.serializationService.serialize(_this.stockStatus)
                        };
                        var labelKey = 'transaction.' + data.componentId;
                        _this.tabService.open(_this.tabService.create(data, labelKey, true));
                    }
                },
                {
                    label: stockConsultLabel,
                    command: function () {
                        // Values to replace with correct ones
                        var alert = _this.selectedAlerts[0];
                        _this.stockConsult = {
                            pn: alert.materialCode,
                            withItsAlternatives: false,
                            siteId: alert.siteId,
                            warehouseId: alert.warehouseId
                        };
                        var data = {
                            id: _this.tabService.generateId(),
                            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].LOG_STOCK_CONSULT_SEARCH,
                            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read,
                            objectId: _this.serializationService.serialize(_this.stockConsult)
                        };
                        var labelKey = 'transaction.' + data.componentId;
                        _this.tabService.open(_this.tabService.create(data, labelKey, true));
                    }
                }
            ];
        });
    };
    StockAlertSearchComponent.prototype.getStockAlertList = function () {
        var _this = this;
        this.isLoading = true;
        this.alertsListTableForDisplay = [];
        this.alertsListTable = [];
        this.stockAlertSearchService.calculate(this.searchObject).subscribe(function (results) {
            results.forEach(function (res) {
                var alertRow = {};
                alertRow.alertDate = _this.dateService.dateToString(res.alertDate);
                var endDate = res.alertEndDateText && new Date(res.alertEndDateText);
                if (!!endDate) {
                    alertRow.alertEndDateText = _this.dateService.dateToString(endDate);
                }
                alertRow.materialCode = res.alertMaterial;
                if (!!res.alertSN) {
                    alertRow.alertSNBN = res.alertSN;
                }
                else if (!!res.alertBN) {
                    alertRow.alertSNBN = res.alertBN;
                }
                alertRow.alertDescription = res.alertDescription;
                if (!!res.alertWarehouseData && !!res.alertWarehouseData.whCode && !!res.alertWarehouseData.whName) {
                    alertRow.warehouse = res.alertWarehouseData.whCode + " - " + res.alertWarehouseData.whName;
                    alertRow.warehouseId = res.alertWarehouseData.wareHouseId;
                    alertRow.siteId = res.alertWarehouseData.bidtSiteId;
                }
                if (!!res.alertType) {
                    var alertType = _this.getComponentName() + "." + res.alertType;
                    _this.translateService.get(alertType).subscribe(function (result) {
                        if (!!result) {
                            alertRow.alertType = result;
                        }
                    });
                }
                if (!!res.alertTextCode) {
                    var alertTextCode = _this.getComponentName() + "." + res.alertTextCode;
                    _this.translateService.get(alertTextCode).subscribe(function (result) {
                        if (!!result) {
                            alertRow.description = result + " : " + res.alertText;
                        }
                    });
                }
                if (res.alertThresholdLow !== null && res.alertThresholdLow !== undefined) {
                    alertRow.alertThresholdLow = res.alertThresholdLow.toString();
                }
                if (res.alertThresholdHigh !== null && res.alertThresholdHigh !== undefined) {
                    alertRow.alertThresholdHigh = res.alertThresholdHigh.toString();
                }
                if (!!res.alertType &&
                    res.alertType === 'MSG_TXT_LOW_THRESHOLD_REACHED' &&
                    res.alertThresholdLow !== null &&
                    res.alertThresholdLow !== undefined) {
                    alertRow.showTooltip = 'yes';
                    alertRow.tooltip = _this.lowThresholdTooltipText + " : " + res.alertThresholdLow;
                }
                else if (!!res.alertType &&
                    res.alertType === 'MSG_TXT_HIGH_THRESHOLD_REACHED' &&
                    res.alertThresholdHigh !== null &&
                    res.alertThresholdHigh !== undefined) {
                    alertRow.showTooltip = 'yes';
                    alertRow.tooltip = _this.lowThresholdTooltipText + " : " + res.alertThresholdLow;
                }
                else {
                    alertRow.showTooltip = 'no';
                }
                alertRow.alertDesign = res.alertDesign;
                alertRow.alertListRow = res;
                _this.alertsListTable.push(alertRow);
            });
            _this.isLoading = false;
            _this.alertsListTableForDisplay = JSON.parse(JSON.stringify(_this.alertsListTable));
        });
    };
    StockAlertSearchComponent.prototype.onClickCreateOrder = function () {
        var _this = this;
        var selectedAlert = this.selectedAlerts[0];
        this.stockAlertSearchService.getCreateOrderNameFormStockAlert().subscribe(function (data) {
            var orderDocumentRow = {
                pnCode: selectedAlert.materialCode,
                materialName: selectedAlert.alertDescription,
                warehouseId: selectedAlert.warehouseId,
                warehouse: selectedAlert.warehouse,
                orderName: data + " " + selectedAlert.materialCode
            };
            _this.openOrderDocument(orderDocumentRow, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Create);
        });
    };
    StockAlertSearchComponent.prototype.openOrderDocument = function (object, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].LOG_ORDER_DOCUMENT_FORM,
            openMode: openMode
        };
        if (!!object) {
            data.objectId = this.serializationService.serialize(object);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    StockAlertSearchComponent.prototype.setSelectedMaterial = function (event) {
        this.showQuickSearchMaterialPopup = false;
        this.searchObject.productCode = event.pnCode;
    };
    StockAlertSearchComponent.prototype.resetSearchCriteria = function () {
        this.criteriaName = undefined;
        this.searchObject = {
            startDate: new Date(),
            endDate: new Date()
        };
    };
    StockAlertSearchComponent.prototype.loadSearchCriteria = function (event) {
        var criteria = event.criteria;
        if (!criteria) {
            this.resetSearchCriteria();
            return;
        }
        this.criteriaName = event.name;
        this.searchObject = criteria || {};
    };
    StockAlertSearchComponent.prototype.saveSearchCriteriaAsked = function () {
        var criteriaToSave = this.searchObject;
        this.criteriaToSave = criteriaToSave;
    };
    StockAlertSearchComponent.prototype.onClickNewCalculation = function () {
        this.hasBeenCalculated = false;
    };
    StockAlertSearchComponent.prototype.isWarning = function (alertDesign) {
        return (alertDesign === 'CALENDAR_YELLOW' || alertDesign === 'CRITICALVALUE_DARK' || alertDesign === 'CRITICALVALUE_LIGHT');
    };
    StockAlertSearchComponent.prototype.isNok = function (alertDesign) {
        return alertDesign === 'BADVALUE_DARK';
    };
    StockAlertSearchComponent.prototype.openMaterialUC = function (rowData) {
        var materialFormId = {
            pnCode: rowData.materialCode
        };
        var labelKey = 'transaction.MaterialFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'MaterialFormComponent',
            objectId: this.serializationService.serialize(materialFormId),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read
        };
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    StockAlertSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-stock-alert-search',
            template: __webpack_require__(/*! ./stock-alert-search.component.html */ "./src/app/main/logistics/stock-alert/search/stock-alert-search.component.html"),
            styles: [__webpack_require__(/*! ./stock-alert-search.component.scss */ "./src/app/main/logistics/stock-alert/search/stock-alert-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"],
            _stock_alert_search_service__WEBPACK_IMPORTED_MODULE_13__["StockAlertSearchService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]])
    ], StockAlertSearchComponent);
    return StockAlertSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-alert/search/stock-alert-search.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main/logistics/stock-alert/search/stock-alert-search.service.ts ***!
  \*********************************************************************************/
/*! exports provided: StockAlertSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockAlertSearchService", function() { return StockAlertSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_api_bidt_purchase_request_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-purchase-request.api */ "./src/app/shared/api/bidt-purchase-request.api.ts");
/* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-stock-mvt.api */ "./src/app/shared/api/bidt-stock-mvt.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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







var StockAlertSearchService = /** @class */ (function (_super) {
    __extends(StockAlertSearchService, _super);
    function StockAlertSearchService(http, appConfigService, bidtWarehouse, bidtStockMvt, bidtPurchaseRequestApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtWarehouse = bidtWarehouse;
        _this.bidtStockMvt = bidtStockMvt;
        _this.bidtPurchaseRequestApi = bidtPurchaseRequestApi;
        return _this;
    }
    // fetches the list of all the warehouses
    StockAlertSearchService.prototype.findAll = function () {
        return _super.prototype.post.call(this, this.bidtWarehouse.findAll);
    };
    // fetches the list of all the warehouses by user rights
    StockAlertSearchService.prototype.findAllWarehouseByUserRights = function () {
        return _super.prototype.post.call(this, this.bidtWarehouse.findAllWarehouseByUserRights);
    };
    StockAlertSearchService.prototype.calculate = function (input) {
        return _super.prototype.post.call(this, this.bidtStockMvt.findAlerts, input);
    };
    StockAlertSearchService.prototype.getCreateOrderNameFormStockAlert = function () {
        return _super.prototype.post.call(this, this.bidtPurchaseRequestApi.getCreateOrderNameFormStockAlert);
    };
    StockAlertSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__["BidtWarehouseApi"],
            _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_3__["BidtStockMvtApi"],
            _shared_api_bidt_purchase_request_api__WEBPACK_IMPORTED_MODULE_2__["BidtPurchaseRequestApi"]])
    ], StockAlertSearchService);
    return StockAlertSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-alert/stock-alert.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/logistics/stock-alert/stock-alert.module.ts ***!
  \******************************************************************/
/*! exports provided: StockAlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockAlertModule", function() { return StockAlertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../node_modules/primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var _node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/dialog-search-material/dialog-search-material.module */ "./src/app/shared/components/dialog-search-material/dialog-search-material.module.ts");
/* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/dialog-table/dialog-table.module */ "./src/app/shared/components/dialog-table/dialog-table.module.ts");
/* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ "./src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_stock_alert_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form/stock-alert-form.component */ "./src/app/main/logistics/stock-alert/form/stock-alert-form.component.ts");
/* harmony import */ var _form_stock_alert_form_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form/stock-alert-form.service */ "./src/app/main/logistics/stock-alert/form/stock-alert-form.service.ts");
/* harmony import */ var _search_stock_alert_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./search/stock-alert-search.component */ "./src/app/main/logistics/stock-alert/search/stock-alert-search.component.ts");
/* harmony import */ var _search_stock_alert_search_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./search/stock-alert-search.service */ "./src/app/main/logistics/stock-alert/search/stock-alert-search.service.ts");
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
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
    primeng_chart__WEBPACK_IMPORTED_MODULE_2__["ChartModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__["SelectButtonModule"],
    _node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_7__["SplitButtonModule"]
];
var INTERNAL_MODULES = [_shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_12__["DialogTableModule"], _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_13__["DynamicAttributesModule"], _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_15__["ModalModule"], _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_11__["DialogSearchMaterialModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [_search_stock_alert_search_component__WEBPACK_IMPORTED_MODULE_19__["StockAlertSearchComponent"], _form_stock_alert_form_component__WEBPACK_IMPORTED_MODULE_17__["StockAlertFormComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_search_stock_alert_search_service__WEBPACK_IMPORTED_MODULE_20__["StockAlertSearchService"], _form_stock_alert_form_service__WEBPACK_IMPORTED_MODULE_18__["StockAlertFormService"]];
var StockAlertModule = /** @class */ (function () {
    function StockAlertModule() {
    }
    StockAlertModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_16__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS),
                _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_14__["ManageSearchCriteriaModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], StockAlertModule);
    return StockAlertModule;
}());



/***/ })

}]);
//# sourceMappingURL=logistics-stock-alert-stock-alert-module.js.map