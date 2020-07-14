(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~human-resources-employee-planning-employee-planning-module~human-resources-human-resources-m~95477e71"],{

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

/***/ "./node_modules/primeng/slider.js":
/*!****************************************!*\
  !*** ./node_modules/primeng/slider.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/slider/slider */ "./node_modules/primeng/components/slider/slider.js"));

/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/employee-planning.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/employee-planning.module.ts ***!
  \************************************************************************************/
/*! exports provided: EmployeePlanningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePlanningModule", function() { return EmployeePlanningModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_scheduler_scheduler_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/scheduler/scheduler.module */ "./src/app/shared/components/scheduler/scheduler.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _search_employee_planning_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search/employee-planning-search.component */ "./src/app/main/human-resources/employee-planning/search/employee-planning-search.component.ts");
/* harmony import */ var _search_employee_planning_search_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./search/employee-planning-search.service */ "./src/app/main/human-resources/employee-planning/search/employee-planning-search.service.ts");
/* harmony import */ var _view_by_company_form_view_by_company_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view-by-company-form/view-by-company-form.component */ "./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.ts");
/* harmony import */ var _view_by_company_form_view_by_company_form_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./view-by-company-form/view-by-company-form.service */ "./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.service.ts");
/* harmony import */ var _view_by_site_form_employee_planning_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view-by-site-form/employee-planning-form.component */ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.ts");
/* harmony import */ var _view_by_site_form_employee_planning_form_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./view-by-site-form/employee-planning-form.service */ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.service.ts");
/* harmony import */ var _view_by_site_form_employee_planning_legend_dialog_employee_planning_legend_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component */ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.ts");
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
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
    primeng_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"],
    primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__["OverlayPanelModule"],
    primeng_chart__WEBPACK_IMPORTED_MODULE_3__["ChartModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__["SelectButtonModule"],
    primeng_slider__WEBPACK_IMPORTED_MODULE_8__["SliderModule"]
];
var INTERNAL_MODULES = [_shared_components_scheduler_scheduler_module__WEBPACK_IMPORTED_MODULE_16__["SchedulerModule"], _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_15__["ModalModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_view_by_site_form_employee_planning_legend_dialog_employee_planning_legend_dialog_component__WEBPACK_IMPORTED_MODULE_24__["EmployeePlanningLegendDialogComponent"]];
var DYNAMIC_COMPONENTS = [_view_by_site_form_employee_planning_form_component__WEBPACK_IMPORTED_MODULE_22__["EmployeePlanningFormComponent"], _search_employee_planning_search_component__WEBPACK_IMPORTED_MODULE_18__["EmployeePlanningSearchComponent"], _view_by_company_form_view_by_company_form_component__WEBPACK_IMPORTED_MODULE_20__["ViewByCompanyFormComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_view_by_site_form_employee_planning_form_service__WEBPACK_IMPORTED_MODULE_23__["EmployeePlanningFormService"], _search_employee_planning_search_service__WEBPACK_IMPORTED_MODULE_19__["EmployeePlanningSearchService"], _view_by_company_form_view_by_company_form_service__WEBPACK_IMPORTED_MODULE_21__["ViewByCompanyFormService"]];
var EmployeePlanningModule = /** @class */ (function () {
    function EmployeePlanningModule() {
    }
    EmployeePlanningModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__["AppCommonSharedModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__["InputTextareaModule"],
                _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_14__["ManageSearchCriteriaModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_17__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES, [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]])
        })
    ], EmployeePlanningModule);
    return EmployeePlanningModule;
}());



/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/search/employee-planning-search.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/search/employee-planning-search.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n\r\n        <i\r\n          class=\"fa fa-fw fa-info aw-icon aw-icon-with-border\"\r\n          aria-hidden=\"true\"\r\n          pTooltip=\"{{ 'page.info' | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\"></div>\r\n      {{ \"page.searchPage\" | translate }}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <aw-manage-search-criteria\r\n                    [componentId]=\"SEARCH_CRITERIA_ID\"\r\n                    (onSelected)=\"loadSearchCriteria($event)\"\r\n                    (onSavedAsked)=\"saveSearchCriteriaAsked()\"\r\n                    [objectFromPage]=\"criteriaToSave\"\r\n                  ></aw-manage-search-criteria>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group required\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".startDate\" | translate }}</label>\r\n                    <div class=\"form-control\">\r\n                      <p-calendar\r\n                        showButtonBar=\"true\"\r\n                        [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\"\r\n                        [yearRange]=\"sessionService.calendarYearRange\"\r\n                        class=\"aw-calendar\"\r\n                        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                        [locale]=\"sessionService.calendarFormat\"\r\n                        [(ngModel)]=\"searchObject.startDate\"\r\n                        [maxDate]=\"searchObject.endDate\"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group required\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".endDate\" | translate }}</label>\r\n                    <div class=\"form-control\">\r\n                      <p-calendar\r\n                        showButtonBar=\"true\"\r\n                        [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\"\r\n                        [yearRange]=\"sessionService.calendarYearRange\"\r\n                        class=\"aw-calendar\"\r\n                        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                        [locale]=\"sessionService.calendarFormat\"\r\n                        [(ngModel)]=\"searchObject.endDate\"\r\n                        [minDate]=\"searchObject.startDate\"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group flex--2\"></div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group required\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".bidtCompanyId\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"companies\"\r\n                        [showClear]=\"true\"\r\n                        [(ngModel)]=\"companyId\"\r\n                        (onChange)=\"onChangeCompany()\"\r\n                        placeholder=\"&nbsp;\"\r\n                        required\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".site\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"sites\"\r\n                        (onChange)=\"loadWarehousesBySite()\"\r\n                        [showClear]=\"true\"\r\n                        [(ngModel)]=\"siteId\"\r\n                        placeholder=\"&nbsp;\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".warehouseOrWorkshop\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"warehouses\"\r\n                        [(ngModel)]=\"warehouseId\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".qualification\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [options]=\"qualifications\"\r\n                        [(ngModel)]=\"qualificationId\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <div class=\"search-actions\">\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      (click)=\"search()\"\r\n                      color=\"primary\"\r\n                      appKeyPress\r\n                      [keyCode]=\"'Enter'\"\r\n                      (keyPress)=\"search()\"\r\n                    >\r\n                      {{ \"global.toSearch\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/search/employee-planning-search.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/search/employee-planning-search.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaHVtYW4tcmVzb3VyY2VzL2VtcGxveWVlLXBsYW5uaW5nL3NlYXJjaC9lbXBsb3llZS1wbGFubmluZy1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/search/employee-planning-search.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/search/employee-planning-search.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EmployeePlanningSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePlanningSearchComponent", function() { return EmployeePlanningSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/utils/number-utils */ "./src/app/shared/utils/number-utils.ts");
/* harmony import */ var _employee_planning_search_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee-planning-search.service */ "./src/app/main/human-resources/employee-planning/search/employee-planning-search.service.ts");
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














var EmployeePlanningSearchComponent = /** @class */ (function (_super) {
    __extends(EmployeePlanningSearchComponent, _super);
    function EmployeePlanningSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, employeePlanningSearchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.employeePlanningSearchService = employeePlanningSearchService;
        _this.SEARCH_CRITERIA_ID = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].EMPLOYEE_PLANNING_SEARCH_CRITERIA_ID;
        _this.radix = 10;
        _this.component = EmployeePlanningSearchComponent_1;
        _this.milisecondsInADay =
            _this.component.hoursInADay *
                _this.component.minutesInAnHour *
                _this.component.secondsInAMinute *
                _this.component.milisecondsInASecond;
        _this.init();
        _this.loadDropdowns();
        return _this;
    }
    EmployeePlanningSearchComponent_1 = EmployeePlanningSearchComponent;
    EmployeePlanningSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
    };
    EmployeePlanningSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].HR_EMPLOYEE_PLANNING_SEARCH;
    };
    EmployeePlanningSearchComponent.prototype.init = function () {
        // Search criteria
        this.searchObject = {
            startDate: new Date()
        };
        if (!!this.searchObject.startDate) {
            this.searchObject.startDate.setHours(0);
            this.searchObject.startDate.setMinutes(0);
            this.searchObject.startDate.setSeconds(0);
            this.searchObject.startDate.setMilliseconds(0);
            var fifteen = 15;
            var endDate = this.searchObject.startDate.getTime() + fifteen * this.milisecondsInADay;
            if (!!endDate) {
                this.searchObject.endDate = new Date(endDate);
            }
        }
        this.companyId = undefined;
        this.siteId = undefined;
        this.warehouseId = undefined;
        this.qualificationId = undefined;
        // Dropdowns
        this.companies = [];
        this.sites = [];
        this.warehouses = [];
        this.qualifications = [];
    };
    /***********
     * Dropdowns
     **********/
    EmployeePlanningSearchComponent.prototype.loadDropdowns = function () {
        this.loadCompany();
        this.loadQualifications();
    };
    EmployeePlanningSearchComponent.prototype.loadCompany = function () {
        var _this = this;
        this.employeePlanningSearchService.findBidtCompanyByCriteria({}).subscribe(function (results) {
            _this.companies = results;
        });
    };
    EmployeePlanningSearchComponent.prototype.onChangeCompany = function () {
        var _this = this;
        if (!!this.companyId) {
            var input = {
                bidtCompanyId: this.companyId
            };
            this.employeePlanningSearchService.findByCriteriaSP(input).subscribe(function (results) {
                _this.sites = results || [];
                if (_this.sites.length === 1 && _this.sites[0].value !== null && _this.sites[0].value !== undefined) {
                    _this.siteId = _this.sites[0].value;
                }
                else if (_this.sites.length > 1 && _this.criteriaLoaded.companyId !== _this.companyId) {
                    _this.siteId = undefined;
                }
                _this.loadWarehousesBySite();
            });
        }
        else {
            this.siteId = undefined;
            this.loadWarehousesBySite();
        }
    };
    EmployeePlanningSearchComponent.prototype.loadWarehousesBySite = function () {
        var _this = this;
        this.warehouses = [];
        if (!!this.siteId) {
            var siteId = this.siteId.toString();
            this.employeePlanningSearchService.findWarehousesBySite(siteId).subscribe(function (results) {
                if (!!results) {
                    _this.warehouses = results.map(function (bidtWarehouseDTO) {
                        return {
                            label: bidtWarehouseDTO.whName,
                            value: bidtWarehouseDTO.wareHouseId
                        };
                    });
                    if (_this.warehouses.length === 1) {
                        _this.warehouseId = _this.warehouses[0].value;
                    }
                }
            });
        }
        else {
            this.warehouseId = undefined;
        }
    };
    EmployeePlanningSearchComponent.prototype.loadQualifications = function () {
        var _this = this;
        this.employeePlanningSearchService.findByCriteriaQualification().subscribe(function (results) {
            _this.qualifications = results || [];
        });
    };
    /************
     * Go to form
     ************/
    EmployeePlanningSearchComponent.prototype.search = function () {
        if (!!this.searchObject.startDate && !!this.searchObject.endDate && !!this.companyId) {
            if (this.siteId !== null && this.siteId !== undefined) {
                this.viewBySiteForm();
            }
            else {
                this.viewByCompanyForm();
            }
        }
        else {
            this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
        }
    };
    EmployeePlanningSearchComponent.prototype.viewByCompanyForm = function () {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].HR_VIEW_BY_COMPANY_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read
        };
        this.navigate(data);
    };
    EmployeePlanningSearchComponent.prototype.viewBySiteForm = function () {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].HR_EMPLOYEE_PLANNING_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read
        };
        this.navigate(data);
    };
    EmployeePlanningSearchComponent.prototype.navigate = function (data) {
        var _this = this;
        var componentData = this.searchObject;
        if (!!this.companyId) {
            this.searchObject.companyId = this.companyId;
            var company = this.companies.find(function (comp) { return Number.parseInt(comp.value, _this.radix) === Number(_this.companyId); });
            if (!!company) {
                this.searchObject.companyName = company.label;
            }
        }
        else {
            this.searchObject.companyId = undefined;
            this.searchObject.companyName = undefined;
        }
        if (!!this.siteId) {
            this.searchObject.siteId = Number.parseInt(this.siteId, this.radix);
            var site = this.sites.find(function (s) { return s.value === _this.siteId; });
            if (!!site) {
                this.searchObject.siteName = site.label;
            }
        }
        else {
            this.searchObject.siteId = undefined;
            this.searchObject.siteName = undefined;
        }
        if (!!this.warehouseId) {
            this.searchObject.warehouseId = this.warehouseId;
            var warehouse = this.warehouses.find(function (s) { return s.value === _this.warehouseId; });
            if (!!warehouse) {
                this.searchObject.warehouseName = warehouse.label;
            }
        }
        else {
            this.searchObject.warehouseId = undefined;
            this.searchObject.warehouseName = undefined;
        }
        this.searchObject.qualificationId = !!this.qualificationId ? this.qualificationId : undefined;
        data.objectId = this.serializationService.serialize(componentData);
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    // Reset search criteria
    EmployeePlanningSearchComponent.prototype.resetSearchCriteria = function () {
        this.searchObject = {};
        this.companyId = undefined;
        this.siteId = undefined;
        this.warehouseId = undefined;
        this.qualificationId = undefined;
        this.criteriaName = undefined;
    };
    EmployeePlanningSearchComponent.prototype.loadSearchCriteria = function (event) {
        var criteria = event.criteria;
        if (!criteria) {
            this.resetSearchCriteria();
            return;
        }
        this.criteriaLoaded = Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(criteria);
        this.companyId = criteria.companyId;
        this.siteId = _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_12__["NumberUtils"].toString(criteria.siteId);
        this.warehouseId = criteria.warehouseId;
        this.qualificationId = criteria.qualificationId;
        this.criteriaName = event.name;
        this.onChangeCompany();
    };
    EmployeePlanningSearchComponent.prototype.saveSearchCriteriaAsked = function () {
        var criteriaToSave = {
            companyId: this.companyId,
            siteId: Number.parseInt(!!this.siteId ? this.siteId : '', this.radix),
            warehouseId: this.warehouseId,
            qualificationId: this.qualificationId
        };
        this.criteriaToSave = criteriaToSave;
    };
    var EmployeePlanningSearchComponent_1;
    // HMSMs constants
    EmployeePlanningSearchComponent.daysInAWeek = 7;
    EmployeePlanningSearchComponent.hoursInADay = 24;
    EmployeePlanningSearchComponent.minutesInAnHour = 60;
    EmployeePlanningSearchComponent.secondsInAMinute = 60;
    EmployeePlanningSearchComponent.milisecondsInASecond = 1000;
    EmployeePlanningSearchComponent = EmployeePlanningSearchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-employee-planning-search',
            template: __webpack_require__(/*! ./employee-planning-search.component.html */ "./src/app/main/human-resources/employee-planning/search/employee-planning-search.component.html"),
            styles: [__webpack_require__(/*! ./employee-planning-search.component.scss */ "./src/app/main/human-resources/employee-planning/search/employee-planning-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"],
            _employee_planning_search_service__WEBPACK_IMPORTED_MODULE_13__["EmployeePlanningSearchService"]])
    ], EmployeePlanningSearchComponent);
    return EmployeePlanningSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/search/employee-planning-search.service.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/search/employee-planning-search.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: EmployeePlanningSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePlanningSearchService", function() { return EmployeePlanningSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-company.api */ "./src/app/shared/api/bidt-company.api.ts");
/* harmony import */ var _shared_api_bidt_qualification_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-qualification.api */ "./src/app/shared/api/bidt-qualification.api.ts");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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








var EmployeePlanningSearchService = /** @class */ (function (_super) {
    __extends(EmployeePlanningSearchService, _super);
    function EmployeePlanningSearchService(http, appConfigService, bidtSiteApi, bidtCompanyApi, bidtWarehouseApi, bidtQualificationApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtSiteApi = bidtSiteApi;
        _this.bidtCompanyApi = bidtCompanyApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.bidtQualificationApi = bidtQualificationApi;
        return _this;
    }
    EmployeePlanningSearchService.prototype.findBidtCompanyByCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.bidtCompanyApi.findByCriteria, criteria);
    };
    EmployeePlanningSearchService.prototype.findByCriteriaSP = function (input) {
        return _super.prototype.post.call(this, this.bidtSiteApi.findByCriteriaSP, input);
    };
    EmployeePlanningSearchService.prototype.findByCriteriaQualification = function () {
        return _super.prototype.post.call(this, this.bidtQualificationApi.findByCriteriaQualification);
    };
    /**************************************************************************
     * Warehouse api
     *************************************************************************/
    EmployeePlanningSearchService.prototype.findWarehousesBySite = function (input) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, input);
    };
    EmployeePlanningSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__["AppConfigService"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_4__["BidtSiteApi"],
            _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__["BidtCompanyApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__["BidtWarehouseApi"],
            _shared_api_bidt_qualification_api__WEBPACK_IMPORTED_MODULE_3__["BidtQualificationApi"]])
    ], EmployeePlanningSearchService);
    return EmployeePlanningSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div *ngIf=\"componentData && componentData.objectId\" class=\"page-subtitle\">\r\n        {{ serializationService.deserialize(componentData.objectId).companyName }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"page.mainData\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div style=\"width: 50%\">\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"form-group flex--2\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".company\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"searchObject.companyName\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".startDate\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"startDate\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".endDate\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"endDate\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".delta\" | translate }} ({{\r\n                        componentData.componentId + \".days\" | translate\r\n                      }})\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"delta\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div style=\"width: 50%\">\r\n                <div class=\"grid-cell grid-cell-chart\" style=\"box-shadow: none\">\r\n                  <div class=\"grid-cell-content\">\r\n                    <div class=\"row flex-row--justify-center\">\r\n                      <div class=\"chart-container\">\r\n                        <div class=\"chart-wrapper\">\r\n                          <p-chart\r\n                            type=\"bar\"\r\n                            [data]=\"data\"\r\n                            [options]=\"chartOptions\"\r\n                            width=\"100%\"\r\n                            height=\"100%\"\r\n                          ></p-chart>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content\">\r\n                    <div class=\"row flex-row--justify-center\">\r\n                      <div class=\"chart-container\">\r\n                        <div class=\"chart-legend\">\r\n                          <div class=\"chart-legend-label\">\r\n                            <div class=\"chart-legend-label-color quantity\"></div>\r\n                            <span class=\"chart-value\">{{\r\n                              getComponentName() + \".employeeAvailability\" | translate\r\n                            }}</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".employeeAvailability\" | translate }}\r\n                  ({{ employeeAvailabilityTable ? employeeAvailabilityTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptable\r\n                class=\"aw-table2\"\r\n                [columns]=\"employeeAvailabilityTableCols\"\r\n                [value]=\"employeeAvailabilityTable\"\r\n                [scrollable]=\"true\"\r\n                [(selection)]=\"selectedEA\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!eaTableLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"eaTableLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedEA.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptable.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"selectedEA.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openViewBySite()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ col.field }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <span *ngIf=\"rowData[col.field] !== 'null'\">{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .table-border-left {\n  border-left: solid 1px #006ea9 !important; }\n\n:host .grid-cell.in-simulation {\n  border-left-color: #ffc107;\n  border-left-style: solid;\n  border-left-width: 8px; }\n\n:host .grid-cell-detail .form-control-potential-unit {\n  width: 4rem; }\n\n:host .grid-cell-scope .ancestor-actions,\n:host .grid-cell-scope .ancestor-data {\n  background-color: #f0f0f0; }\n\n:host .grid-cell-scope .ancestor-actions {\n  justify-content: flex-end;\n  padding: 8px; }\n\n:host .grid-cell-state-simulation {\n  background-color: #ffc107;\n  padding: 0; }\n\n:host .grid-cell-state-simulation .grid-cell-title {\n    color: #000; }\n\n:host .grid-cell-state-simulation .simulation-criterion:not(:last-of-type)::after {\n    content: \" | \"; }\n\n:host .grid-cell-chart .chart-container {\n  display: flex;\n  flex-direction: row; }\n\n@media screen and (max-width: 1280px) {\n    :host .grid-cell-chart .chart-container {\n      flex-direction: column; } }\n\n:host .grid-cell-chart .chart-container .chart-legend {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n        height: 0.75rem;\n        margin-right: 8px;\n        width: 2rem; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.quantity {\n          background-color: #006ea9; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.amount {\n          background-color: #d3c632; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-airworthy {\n          background-color: #f6685e; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-value {\n      font-weight: 700;\n      margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-wrapper {\n    position: relative;\n    height: 18rem;\n    width: 30rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtcGxhbm5pbmcvdmlldy1ieS1jb21wYW55LWZvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX21vZGlmaWVycy5zY3NzIiwic3JjL2FwcC9tYWluL2h1bWFuLXJlc291cmNlcy9lbXBsb3llZS1wbGFubmluZy92aWV3LWJ5LWNvbXBhbnktZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxodW1hbi1yZXNvdXJjZXNcXGVtcGxveWVlLXBsYW5uaW5nXFx2aWV3LWJ5LWNvbXBhbnktZm9ybVxcdmlldy1ieS1jb21wYW55LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vaHVtYW4tcmVzb3VyY2VzL2VtcGxveWVlLXBsYW5uaW5nL3ZpZXctYnktY29tcGFueS1mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtcGxhbm5pbmcvdmlldy1ieS1jb21wYW55LWZvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5Q0FBaUM7RUFBakMsc0NBQWlDO0VBQWpDLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLG9DQUE0QjtLQUE1QixpQ0FBNEI7TUFBNUIsZ0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQTs7QUFLYjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLHNDQUFzQyxFQUFBOztBQ3pIeEM7RUFFSSx5Q0FBeUMsRUFBQTs7QUFGN0M7RUFNSSwwQkNZWTtFRFhaLHdCQzJCZ0I7RUQxQmhCLHNCQ2dDYyxFQUFBOztBRHhDbEI7RUFhTSxXQUFXLEVBQUE7O0FBYmpCOztFQW9CTSx5QkN2QjhCLEVBQUE7O0FER3BDO0VBd0JNLHlCQUF5QjtFQUN6QixZQ2VZLEVBQUE7O0FEeENsQjtFQThCSSx5QkNaWTtFRGFaLFVBQVUsRUFBQTs7QUEvQmQ7SUFrQ00sV0NwQ21CLEVBQUE7O0FERXpCO0lBc0NNLGNBQWMsRUFBQTs7QUF0Q3BCO0VFbUJFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUYwQmY7SUE5Q047TUErQ1Esc0JBQXNCLEVBQUEsRUE0Q3pCOztBQTNGTDtJRWNFLGFBQWE7SUFDYixzQkFBc0I7SUZzQ2hCLHVCQUF1QjtJQUN2QixnQkNkVSxFQUFBOztBRHhDbEI7TUVtQkUsYUFBYTtNQUNiLG1CQUFtQjtNRnVDWCxtQkFBbUIsRUFBQTs7QUEzRDdCO1FBOERZLGVBQWU7UUFDZixpQkN2Qk07UUR3Qk4sV0FBVyxFQUFBOztBQWhFdkI7VUFtRWMseUJBQXlCLEVBQUE7O0FBbkV2QztVQXVFYyx5QkFBeUIsRUFBQTs7QUF2RXZDO1VBMkVjLHlCQ3ZETSxFQUFBOztBRHBCcEI7TUFpRlUsZ0JBQWdCO01BQ2hCLGdCQzFDUSxFQUFBOztBRHhDbEI7SUF1RlEsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2h1bWFuLXJlc291cmNlcy9lbXBsb3llZS1wbGFubmluZy92aWV3LWJ5LWNvbXBhbnktZm9ybS92aWV3LWJ5LWNvbXBhbnktZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LS1mbGV4LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLWZsZXgtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzcGxheS0tbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LS0xMDAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1pbi13aWR0aC0tZml0LWNvbnRlbnQge1xyXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvc2l0aW9uLS1yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwteS0tbm9uZSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LS11bnNlbGVjdGFibGUge1xyXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aXNpYmlsaXR5LS1oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtLTEwIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTIwIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTMwIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTQwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTUwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTYwIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTcwIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTgwIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTkwIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5mbGV4LS0xIHtcclxuICBmbGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0yIHtcclxuICBmbGV4OiAyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0zIHtcclxuICBmbGV4OiAzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS00IHtcclxuICBmbGV4OiA0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS01IHtcclxuICBmbGV4OiA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS1hdXRvIHtcclxuICBmbGV4OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tZW5kIHtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1zdGFydCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWVuZCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktc3RhcnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwibW9kaWZpZXJzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLnRhYmxlLWJvcmRlci1sZWZ0IHtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggIzAwNmVhOSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC5pbi1zaW11bGF0aW9uIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogJG1hcmdpbi12YWx1ZTtcclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtZGV0YWlsIHtcclxuICAgIC5mb3JtLWNvbnRyb2wtcG90ZW50aWFsLXVuaXQge1xyXG4gICAgICB3aWR0aDogNHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtc2NvcGUge1xyXG4gICAgLmFuY2VzdG9yLWFjdGlvbnMsXHJcbiAgICAuYW5jZXN0b3ItZGF0YSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuYW5jZXN0b3ItYWN0aW9ucyB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLXN0YXRlLXNpbXVsYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgLmdyaWQtY2VsbC10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaW11bGF0aW9uLWNyaXRlcmlvbjpub3QoOmxhc3Qtb2YtdHlwZSk6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCIgfCBcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtY2hhcnQge1xyXG4gICAgLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2hhcnQtbGVnZW5kIHtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgLmNoYXJ0LWxlZ2VuZC1sYWJlbCB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgLmNoYXJ0LWxlZ2VuZC1sYWJlbC1jb2xvciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMC43NXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgICAgICB3aWR0aDogMnJlbTtcclxuXHJcbiAgICAgICAgICAgICYucXVhbnRpdHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZlYTk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYW1vdW50IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNjNjMyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLm5vdC1haXJ3b3J0aHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhcnQtdmFsdWUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoYXJ0LXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDE4cmVtO1xyXG4gICAgICAgIHdpZHRoOiAzMHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVdGlscyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gYnV0dG9uLWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCAkY29sb3IsICRib3JkZXItY29sb3I6IG51bGwpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyLFxyXG4gICY6bm90KDpkaXNhYmxlZCkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogaWYoJGJvcmRlci1jb2xvciA9PSBudWxsLCAkY29sb3IsICRib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgtY29sdW1uKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtcm93KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQG1peGluIGlucHV0KCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1kaXNhYmxlZCgpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZm9jdXMoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1ob3ZlcigpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlYXJjaC1jcml0ZXJpYS1jb250YWluZXIge1xyXG4gIC5hZHZhbmNlZC1jcml0ZXJpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgICYucmVxdWlyZWQge1xyXG4gICAgICBAaW5jbHVkZSBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCgpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHcmlkIGZvcm0gY29udHJvbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViTWVkaXVtXCI7XHJcblxyXG4gICYgPiBpbnB1dCArIHAtbWVzc2FnZSA+IC51aS1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyNTUsIDI1NSwgMjU1KSA2MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAuYXctaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuLFxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG5cclxuICAgICAgJi5hdy1jYWxlbmRhciAudWktaW5wdXR0ZXh0LFxyXG4gICAgICAmLmF3LWRyb3Bkb3duIC51aS1kcm9wZG93bixcclxuICAgICAgJi5hdy1pbnB1dCxcclxuICAgICAgJi5hdy10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctY2FsZW5kYXIge1xyXG4gICAgICAvLyBGSVhNRTogZml4IGFuIFVJIGlzc3VlIG9uIFByaW1lTkcgY2FsZW5kYXIgY29tcG9uZW50OyB0byByZW1vdmUgd2hlbiBpc3N1ZSB3aWxsIGJlIGZpeGVkIHVwc3RyZWFtXHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAuYXctaWNvbjpub3QoLnJlYWQtb25seS1saW5rKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIG5vbmVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW5pbXAsXHJcbiAgICAuYnRuLWV4dGVybmFsLWxpbmstd3JhcHBlcixcclxuICAgIC5idG4tY2xlYXItd3JhcHBlcixcclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlcixcclxuICAgIC5idG4tc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgICAuYXctZmlsZXVwbG9hZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudWktYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWNsZWFyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtcmFkaW9idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAmID4gLmF3LXJhZGlvYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jYWxlbmRhciB7XHJcbiAgJi51aS1pbnB1dHdyYXBwZXItZm9jdXMge1xyXG4gICAgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkY2hlY2tib3gtaGVpZ2h0O1xyXG4gIHdpZHRoOiAkY2hlY2tib3gtaGVpZ2h0O1xyXG5cclxuICAudWktY2hrYm94IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1jaGtib3gtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZHJvcGRvd24ge1xyXG4gIC51aS1kcm9wZG93biB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1mb2N1cyB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbixcclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gICAgICByaWdodDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDEuNzVyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5maXhlZC13aWR0aCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZpbGV1cGxvYWQge1xyXG4gIEBleHRlbmQgLmF3LWJ0bjtcclxuXHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnVpLWZpbGV1cGxvYWQtY2hvb3NlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudWktYnV0dG9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWlucHV0KCkge1xyXG4gIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZXh0YXJlYSB7XHJcbiAgQGluY2x1ZGUgZ3JpZC1pbnB1dCgpO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1yYWRpb2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuICB3aWR0aDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuXHJcbiAgLnVpLXJhZGlvYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAudWktcmFkaW9idXR0b24taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGNhbGVuZGFyLXBhbmVsIHtcclxuICAudWktZGF0ZXBpY2tlcjpub3QoLnVpLWRhdGVwaWNrZXItaW5saW5lKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcm9wZG93bi1wYW5lbCB7XHJcbiAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciAudWktZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgIC51aS1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ViewByCompanyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewByCompanyFormComponent", function() { return ViewByCompanyFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _search_employee_planning_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../search/employee-planning-search.service */ "./src/app/main/human-resources/employee-planning/search/employee-planning-search.service.ts");
/* harmony import */ var _view_by_company_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-by-company-form.service */ "./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.service.ts");
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














var ViewByCompanyFormComponent = /** @class */ (function (_super) {
    __extends(ViewByCompanyFormComponent, _super);
    function ViewByCompanyFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, viewByCompanyFormService, employeePlanningSearchService, dateService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.viewByCompanyFormService = viewByCompanyFormService;
        _this.employeePlanningSearchService = employeePlanningSearchService;
        _this.dateService = dateService;
        _this.translateService = translateService;
        _this.init();
        _this.getSitesForCompany();
        _this.initChartOptions();
        _this.setEmployeeAvailabilityTableBasicCols();
        return _this;
    }
    ViewByCompanyFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (!!this.componentData.objectId) {
            this.searchObject = this.serializationService.deserialize(this.componentData.objectId);
            if (!!this.searchObject.companyName) {
                var context = "" + this.searchObject.companyName;
                this.displayComponentContext(context, this.isCreateOpenMode);
            }
            this.search();
            if (!!this.searchObject.startDate && !!this.searchObject.endDate) {
                this.startDate = this.dateService.dateToString(this.searchObject.startDate);
                this.endDate = this.dateService.dateToString(this.searchObject.endDate);
                this.delta = this.getNumberOfDays(this.searchObject.startDate, this.searchObject.endDate) + 1;
            }
        }
    };
    ViewByCompanyFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].HR_VIEW_BY_COMPANY_FORM;
    };
    ViewByCompanyFormComponent.prototype.init = function () {
        this.searchObject = {};
        this.startDate = undefined;
        this.endDate = undefined;
        this.delta = undefined;
        this.chartData = {
            labels: [],
            datasets: []
        };
        this.data = {
            labels: [],
            datasets: []
        };
        this.eaTableLoading = false;
        this.employeeAvailabilityTable = [];
        this.selectedEA = [];
        this.employeeAvailabilityTableCols = [];
        this.eaTableColsByCodeQualif = [];
    };
    ViewByCompanyFormComponent.prototype.getSitesForCompany = function () {
        var _this = this;
        var input = {
            bidtCompanyId: this.searchObject.companyId
        };
        this.employeePlanningSearchService.findByCriteriaSP(input).subscribe(function (results) {
            _this.sites = results || [];
        });
    };
    ViewByCompanyFormComponent.prototype.setEmployeeAvailabilityTableBasicCols = function () {
        var _this = this;
        var sitesLabel = this.getComponentName() + ".sites";
        var eaLabel = this.getComponentName() + ".employeeAvailability";
        var hoursLabel = this.getComponentName() + ".hours";
        this.translateService.get([sitesLabel, eaLabel, hoursLabel]).subscribe(function (results) {
            _this.employeeAvailabilityTableCols = [
                { field: results[sitesLabel] },
                { field: results[eaLabel] + " (" + results[hoursLabel] + ")" }
            ];
        });
    };
    ViewByCompanyFormComponent.prototype.search = function () {
        var _this = this;
        this.eaTableLoading = true;
        this.viewByCompanyFormService.getViewByCompanyData(this.searchObject).subscribe(function (results) {
            if (!!results[0].staffPlanningViewByCompanyTableOutput) {
                // Chart
                _this.initChartData(results[0].staffPlanningViewByCompanyTableOutput);
                // Employee Availability table
                _this.setEmployeeAvailabilityTable(results[0].staffPlanningViewByCompanyTableOutput);
                _this.eaTableLoading = false;
            }
        });
    };
    /******************
     * Initialize chart
     *****************/
    ViewByCompanyFormComponent.prototype.initChartData = function (staffPlanningViewByCompanyTableOutput) {
        var _this = this;
        var radix = 10;
        var dataset = {
            data: []
        };
        staffPlanningViewByCompanyTableOutput.forEach(function (output) {
            if (!!dataset.data) {
                // dataset.label = output.siteName;
                if (!!output.availabilityHours) {
                    dataset.data.push(Number.parseInt(output.availabilityHours.split(':')[0], radix));
                }
                else {
                    dataset.data.push(0);
                }
            }
            if (!!_this.chartData && !!_this.chartData.labels && !!output.siteName) {
                _this.chartData.labels.push(output.siteName);
            }
        });
        if (!!this.chartData.datasets) {
            this.chartData.datasets.push(dataset);
        }
        this.chartData.datasets.forEach(function (set) {
            set.backgroundColor = '#006ea9';
            set.borderColor = '#006ea9';
        });
        this.data = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.chartData);
    };
    ViewByCompanyFormComponent.prototype.initChartOptions = function () {
        this.chartOptions = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            },
            legend: {
                display: false
            }
        };
    };
    /**************
     * Set EA table
     *************/
    ViewByCompanyFormComponent.prototype.setEmployeeAvailabilityTable = function (results) {
        var _this = this;
        var sitesLabel = this.getComponentName() + ".sites";
        var eaLabel = this.getComponentName() + ".employeeAvailability";
        var hoursLabel = this.getComponentName() + ".hours";
        this.translateService.get([sitesLabel, eaLabel, hoursLabel]).subscribe(function (labels) {
            var tableJSON = '[';
            var counter = 0;
            results.forEach(function (res) {
                var keys = [];
                var values = [];
                counter++;
                if (!!res.codeQualif) {
                    Object.keys(res.codeQualif).forEach(function (key) {
                        var col = { field: key + " (" + labels[hoursLabel] + ")" };
                        _this.employeeAvailabilityTableCols.push(col); // sites, empAvailability, codeQualif(s)
                        _this.eaTableColsByCodeQualif.push(col); // codeQualif(s)
                        keys.push(key);
                    });
                    Object.values(res.codeQualif).forEach(function (value) {
                        values.push(value);
                    });
                }
                _this.employeeAvailabilityTableCols.forEach(function (col) {
                    col.alignment = 'left';
                });
                var json = "{\"" + labels[sitesLabel] + "\": \"" + res.siteName + "\",";
                json += " \"" + labels[eaLabel] + " (" + labels[hoursLabel] + ")\": \"" + res.availabilityHours + "\",";
                json += " \"" + keys[0] + " (" + labels[hoursLabel] + ")\": \"" + values[0] + "\",";
                json += " \"siteId\": \"" + res.siteId + "\"";
                if (keys.length >= 1) {
                    for (var i = 1; i < keys.length; i++) {
                        var pairing = ",\"" + keys[i] + " (" + labels[hoursLabel] + ")\": \"" + values[i] + "\"";
                        json = "" + json + pairing;
                    }
                }
                json = json + "}";
                tableJSON = counter === results.length ? "" + tableJSON + json : "" + tableJSON + json + ",";
            });
            tableJSON = tableJSON + "]";
            _this.employeeAvailabilityTable = _this.serializationService.deserialize(tableJSON);
        });
    };
    /*************************************
     * Employee Availability table actions
     ************************************/
    ViewByCompanyFormComponent.prototype.openViewBySite = function () {
        if (!!this.selectedEA && this.selectedEA.length === 1) {
            var componentData_1 = {
                startDate: this.searchObject.startDate,
                endDate: this.searchObject.endDate
            };
            componentData_1.siteId = this.selectedEA[0].siteId;
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].HR_EMPLOYEE_PLANNING_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read
            };
            componentData_1.siteName = this.sites.filter(function (site) { return site.value === "" + componentData_1.siteId; })[0].label;
            if (!!this.searchObject.companyId) {
                componentData_1.companyId = this.searchObject.companyId;
                componentData_1.companyName = this.searchObject.companyName;
            }
            data.objectId = this.serializationService.serialize(componentData_1);
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    /****************
     * Helper methods
     ***************/
    ViewByCompanyFormComponent.prototype.getNumberOfDays = function (startDate, endDate) {
        var hoursInADay = 24;
        var minutesInAnHour = 60;
        var secondsInAMinute = 60;
        var milisecondsInASecond = 1000;
        var oneDayMs = milisecondsInASecond * secondsInAMinute * minutesInAnHour * hoursInADay;
        var startDateMS = new Date(startDate).getTime();
        var endDateMS = new Date(endDate).getTime();
        var differenceMS = endDateMS - startDateMS;
        return Math.round(differenceMS / oneDayMs);
    };
    ViewByCompanyFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-view-by-company-form',
            template: __webpack_require__(/*! ./view-by-company-form.component.html */ "./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.html"),
            styles: [__webpack_require__(/*! ./view-by-company-form.component.scss */ "./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__["TabService"],
            _view_by_company_form_service__WEBPACK_IMPORTED_MODULE_13__["ViewByCompanyFormService"],
            _search_employee_planning_search_service__WEBPACK_IMPORTED_MODULE_12__["EmployeePlanningSearchService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ViewByCompanyFormComponent);
    return ViewByCompanyFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.service.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ViewByCompanyFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewByCompanyFormService", function() { return ViewByCompanyFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-employee.api */ "./src/app/shared/api/bidt-employee.api.ts");
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





var ViewByCompanyFormService = /** @class */ (function (_super) {
    __extends(ViewByCompanyFormService, _super);
    function ViewByCompanyFormService(http, appConfigService, 
    // private readonly bidtSiteApi: BidtSiteApi,
    // private readonly bidtCompanyApi: BidtCompanyApi,
    bidtEmployeeApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtEmployeeApi = bidtEmployeeApi;
        return _this;
    }
    ViewByCompanyFormService.prototype.getViewByCompanyData = function (input) {
        return _super.prototype.post.call(this, this.bidtEmployeeApi.getViewByCompanyData, input);
    };
    ViewByCompanyFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_2__["BidtEmployeeApi"]])
    ], ViewByCompanyFormService);
    return ViewByCompanyFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-subtitle-container\">\r\n        <div *ngIf=\"componentData && componentData.objectId\" class=\"page-subtitle\">\r\n          {{ componentContext }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button\r\n      id=\"actions\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button type=\"button\" mat-menu-item (click)=\"refresh()\">\r\n        {{ \"global.refresh\" | translate }}\r\n      </button>\r\n      <button id=\"favorites\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"page.mainData\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div style=\"width: 50%\">\r\n                <!-- <div class=\"grid-cell-content\"></div> -->\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".company\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"searchObject.companyName\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".site\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"aw-input\"\r\n                        disabled\r\n                        [(ngModel)]=\"searchObject.siteName\"\r\n                        title=\"{{ searchObject.siteName }}\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".warehouseOrWorkshop\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"aw-input\"\r\n                        disabled\r\n                        [(ngModel)]=\"searchObject.warehouseName\"\r\n                        title=\"{{ searchObject.warehouseName }}\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".period\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"period\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".totalAvailability\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"totalAvailability\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".delta\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"delta\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div style=\"width: 50%\">\r\n                <div class=\"grid-cell grid-cell-chart\" style=\"box-shadow: none\">\r\n                  <div class=\"grid-cell-content\">\r\n                    <div class=\"row flex-row--justify-center\">\r\n                      <div class=\"chart-container\">\r\n                        <div class=\"chart-wrapper\">\r\n                          <p-chart\r\n                            [type]=\"chartType\"\r\n                            [data]=\"cumulativeHoursData\"\r\n                            [options]=\"cumulativeHoursChartOptions\"\r\n                            width=\"100%\"\r\n                            height=\"100%\"\r\n                          ></p-chart>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content\">\r\n                    <div class=\"row flex-row--justify-center\">\r\n                      <div class=\"chart-container\">\r\n                        <div class=\"chart-legend\">\r\n                          <div class=\"chart-legend-label\">\r\n                            <div class=\"chart-legend-label-color quantity\"></div>\r\n                            <span class=\"chart-value\">{{\r\n                              getComponentName() + \".cumulativeHoursAvailable\" | translate\r\n                            }}</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".planning\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"row\">\r\n                <div class=\"scheduler-header\" [ngClass]=\"{ show: !eaTableLoading }\">\r\n                  <div class=\"scheduler-header-btn\" *ngIf=\"!dailyMode\">\r\n                    <p-selectButton\r\n                      [(ngModel)]=\"displayType\"\r\n                      [options]=\"displayTypeList\"\r\n                      (onChange)=\"onDisplayTypeChange()\"\r\n                    ></p-selectButton>\r\n                  </div>\r\n                  <div class=\"scheduler-header-btn\" *ngIf=\"dailyMode\">\r\n                    <button mat-raised-button (click)=\"backToEmployee()\">\r\n                      {{ getComponentName() + \".backToEmployee\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"qualificationList\"\r\n                        [showClear]=\"true\"\r\n                        [(ngModel)]=\"selectedQualification\"\r\n                        (onChange)=\"onQualificationChange()\"\r\n                        placeholder=\"{{ placeHolderQualification }}\"\r\n                        required\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"form-control\">\r\n                      <div class=\"italic-green\" *ngIf=\"qualificationHoursAvailability\">\r\n                        {{ getComponentName() + \".availability\" | translate }}: {{ qualificationHoursAvailability }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"time-resolution\">\r\n                    <p-slider\r\n                      [max]=\"component.TIME_RESOLUTION_MAX_ZOOM\"\r\n                      [min]=\"component.TIME_RESOLUTION_MIN_ZOOM\"\r\n                      [(ngModel)]=\"schedulerZoomLevel\"\r\n                      (onChange)=\"onChangeTimeResolution($event)\"\r\n                    ></p-slider>\r\n                  </div>\r\n\r\n                  <div class=\"scheduler-legend scheduler-header-btn-legend\" *ngIf=\"dailyMode\">\r\n                    <i\r\n                      class=\"fa fa-fw fa-info aw-icon aw-icon-with-border aw-icon-with-overlay\"\r\n                      aria-hidden=\"true\"\r\n                      pTooltip=\"{{ 'legend' | translate }}\"\r\n                      tooltipPosition=\"left\"\r\n                      (click)=\"openEmployeePlanningLegendDialog()\"\r\n                    ></i>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"scheduler-wrap\" [ngClass]=\"{ show: !eaTableLoading }\">\r\n                  <ng-template pTemplate=\"emptymessage\">\r\n                    <span *ngIf=\"!eaTableLoading\"> &nbsp;</span>\r\n\r\n                    <div *ngIf=\"eaTableLoading\" class=\"aw-table-loading-indicator\">\r\n                      <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                      <div class=\"lds-hourglass\"></div>\r\n                    </div>\r\n                  </ng-template>\r\n                  <bry-scheduler\r\n                    *ngIf=\"calendarMode\"\r\n                    #scheduler\r\n                    [barMargin]=\"barMargin\"\r\n                    [readOnly]=\"schedulerConfig['readOnly']\"\r\n                    [resourceMargin]=\"schedulerConfig['resourceMargin']\"\r\n                    [startDate]=\"schedulerConfig['startDate']\"\r\n                    [endDate]=\"schedulerConfig['endDate']\"\r\n                    [mode]=\"schedulerConfig['mode']\"\r\n                    [timeRanges]=\"schedulerConfig['timeRanges']\"\r\n                    [viewPreset]=\"schedulerConfig['viewPreset']\"\r\n                    [columns]=\"columnsEmployee\"\r\n                    [events]=\"events\"\r\n                    [resources]=\"resourcesEmployee\"\r\n                    [eventRenderer]=\"schedulerConfig['eventRenderer']\"\r\n                    (onSchedulerEvents)=\"onSchedulerEvents($event)\"\r\n                    [resourceTimeRanges]=\"resourceTimeRangesEmployee\"\r\n                    [contextMenuFeature]=\"schedulerConfig['scheduleContextMenu']\"\r\n                    [responsiveLevels]=\"schedulerConfig['responsiveLevels']\"\r\n                    [resourceTimeRangesFeature]=\"schedulerConfig['resourceTimeRangesFeatures']\"\r\n                    [zoomOnTimeAxisDoubleClick]=\"schedulerConfig['zoomOnTimeAxisDoubleClick']\"\r\n                    [zoomOnMouseWheel]=\"schedulerConfig['zoomOnMouseWheel']\"\r\n                  ></bry-scheduler>\r\n                  <bry-scheduler\r\n                    *ngIf=\"!calendarMode\"\r\n                    #scheduler\r\n                    [barMargin]=\"barMargin\"\r\n                    [readOnly]=\"schedulerConfig['readOnly']\"\r\n                    [resourceMargin]=\"schedulerConfig['resourceMargin']\"\r\n                    [tickSize]=\"schedulerConfig['tickSize']\"\r\n                    [startDate]=\"schedulerConfig['startDate']\"\r\n                    [endDate]=\"schedulerConfig['endDate']\"\r\n                    [mode]=\"schedulerConfig['mode']\"\r\n                    [timeRanges]=\"schedulerConfig['timeRanges']\"\r\n                    [viewPreset]=\"schedulerConfig['viewPreset']\"\r\n                    [columns]=\"columnsQualification\"\r\n                    [events]=\"events\"\r\n                    [resources]=\"resourcesQualification\"\r\n                    [eventRenderer]=\"schedulerConfig['eventRenderer']\"\r\n                    [resourceColumns]=\"schedulerConfig['resourceColumns']\"\r\n                    [resourceTimeRanges]=\"resourceTimeRangesQualification\"\r\n                    [contextMenuFeature]=\"schedulerConfig['scheduleContextMenu']\"\r\n                    [responsiveLevels]=\"schedulerConfig['responsiveLevels']\"\r\n                    [resourceTimeRangesFeature]=\"schedulerConfig['resourceTimeRangesFeatures']\"\r\n                    [zoomOnTimeAxisDoubleClick]=\"schedulerConfig['zoomOnTimeAxisDoubleClick']\"\r\n                    [zoomOnMouseWheel]=\"schedulerConfig['zoomOnMouseWheel']\"\r\n                  ></bry-scheduler>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-employee-planning-form-legend\r\n  *ngIf=\"showEmployeePlanningLegendDialog\"\r\n  [(display)]=\"showEmployeePlanningLegendDialog\"\r\n></aw-dialog-employee-planning-form-legend>\r\n"

/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .main-block {\n  display: none; }\n\n:host .main-block.show {\n    display: initial; }\n\n:host .main-block .action-list .aw-btn {\n    margin-left: 8px; }\n\n:host .main-block .action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n\n:host .row-actions {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: flex-end; }\n\n:host .row-actions > .aw-btn {\n    margin-left: 8px; }\n\n:host .row-actions > .aw-btn:first-of-type {\n      margin-left: 0; }\n\n:host .scheduler-wrap {\n  height: 55.5vh;\n  visibility: hidden; }\n\n:host .scheduler-wrap.show {\n    visibility: visible; }\n\n:host .scheduler-header-btn {\n  align-items: center;\n  display: flex;\n  flex-direction: row; }\n\n:host .scheduler-header-dropdown {\n  padding-left: 2rem;\n  align-items: center;\n  display: flex;\n  flex-direction: row; }\n\n:host .scheduler-header {\n  margin-top: 1rem;\n  margin-bottom: 1rem; }\n\n:host .scheduler-header .scheduler-filters {\n    margin-right: 8px; }\n\n:host .flex-row--justify-center {\n  max-width: 100%; }\n\n:host .italic-green {\n  font-style: italic;\n  color: green;\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  padding-left: 1rem;\n  padding-top: 1rem;\n  vertical-align: middle; }\n\n:host .scheduler-header-btn-legend {\n  align-content: flex-end;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end; }\n\n:host .table-border-left {\n  border-left: solid 1px #006ea9 !important; }\n\n:host .table-border-right {\n  border-right: solid 1px #006ea9 !important; }\n\n:host .cell-grey {\n  background-color: #f0f0f0 !important; }\n\n:host .grid-cell.in-simulation {\n  border-left-color: #ffc107;\n  border-left-style: solid;\n  border-left-width: 8px; }\n\n:host .grid-cell-detail .form-control-potential-unit {\n  width: 4rem; }\n\n:host .grid-cell-scope .ancestor-actions,\n:host .grid-cell-scope .ancestor-data {\n  background-color: #f0f0f0; }\n\n:host .grid-cell-scope .ancestor-actions {\n  justify-content: flex-end;\n  padding: 8px; }\n\n:host .grid-cell-state-simulation {\n  background-color: #ffc107;\n  padding: 0; }\n\n:host .grid-cell-state-simulation .grid-cell-title {\n    color: #000; }\n\n:host .grid-cell-state-simulation .simulation-criterion:not(:last-of-type)::after {\n    content: \" | \"; }\n\n:host .grid-cell-chart .chart-container {\n  display: flex;\n  flex-direction: row;\n  max-width: 100%; }\n\n@media screen and (max-width: 1280px) {\n    :host .grid-cell-chart .chart-container {\n      flex-direction: column; } }\n\n:host .grid-cell-chart .chart-container .chart-legend {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n        height: 0.75rem;\n        margin-right: 8px;\n        width: 2rem; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.quantity {\n          background-color: #006ea9; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.amount {\n          background-color: #d3c632; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-airworthy {\n          background-color: #f6685e; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-value {\n      font-weight: 700;\n      margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-wrapper {\n    position: relative;\n    height: 10rem;\n    width: 45rem;\n    max-width: 100%; }\n\n:host .availability-container {\n  display: flex;\n  flex-direction: column; }\n\n:host .availability-container > div {\n    margin-bottom: 0.5rem; }\n\n:host .availability-container .day {\n    width: 100%;\n    font-size: 1.3rem;\n    text-align: center; }\n\n:host .time-resolution {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  margin: 0 calc(2 * 8px);\n  justify-content: flex-end; }\n\n:host .time-resolution p-slider {\n    width: 10rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtcGxhbm5pbmcvdmlldy1ieS1zaXRlLWZvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX21vZGlmaWVycy5zY3NzIiwic3JjL2FwcC9tYWluL2h1bWFuLXJlc291cmNlcy9lbXBsb3llZS1wbGFubmluZy92aWV3LWJ5LXNpdGUtZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxodW1hbi1yZXNvdXJjZXNcXGVtcGxveWVlLXBsYW5uaW5nXFx2aWV3LWJ5LXNpdGUtZm9ybVxcZW1wbG95ZWUtcGxhbm5pbmctZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtcGxhbm5pbmcvdmlldy1ieS1zaXRlLWZvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIiwic3JjL2FwcC9tYWluL2h1bWFuLXJlc291cmNlcy9lbXBsb3llZS1wbGFubmluZy92aWV3LWJ5LXNpdGUtZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsaUNBQWlDLEVBQUE7O0FBR25DO0VBQ0Usd0JBQXdCO0VBQ3hCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlDQUFpQztFQUFqQyxzQ0FBaUM7RUFBakMsaUNBQWlDLEVBQUE7O0FBR25DO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0Usb0NBQTRCO0tBQTVCLGlDQUE0QjtNQUE1QixnQ0FBNEI7VUFBNUIsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVyxFQUFBOztBQUtiO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0Usa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0Usa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0Usb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0Usc0NBQXNDLEVBQUE7O0FDekh4QztFQUVJLGFBQWEsRUFBQTs7QUFGakI7SUFLTSxnQkFBZ0IsRUFBQTs7QUFMdEI7SUFVUSxnQkM4QlUsRUFBQTs7QUR4Q2xCO01BYVUsY0FBYyxFQUFBOztBQWJ4QjtFRW1CRSxhQUFhO0VBQ2IsbUJBQW1CO0VGRWpCLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTs7QUF2QjdCO0lBMEJNLGdCQ2NZLEVBQUE7O0FEeENsQjtNQTZCUSxjQUFjLEVBQUE7O0FBN0J0QjtFQWtDSSxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBbkN0QjtJQXNDTSxtQkFBbUIsRUFBQTs7QUF0Q3pCO0VBMkNJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBN0N2QjtFQWlESSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFwRHZCO0VBd0RJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUF6RHZCO0lBMkRNLGlCQ25CWSxFQUFBOztBRHhDbEI7RUFnRUksZUFBZSxFQUFBOztBQWhFbkI7RUFvRUksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQTNFMUI7RUErRUksdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUE7O0FBbEY3QjtFQXNGSSx5Q0FBeUMsRUFBQTs7QUF0RjdDO0VBMEZJLDBDQUEwQyxFQUFBOztBQTFGOUM7RUE4Rkksb0NBQW9DLEVBQUE7O0FBOUZ4QztFQWtHSSwwQkNoRlk7RURpRlosd0JDakVnQjtFRGtFaEIsc0JDNURjLEVBQUE7O0FEeENsQjtFQXlHTSxXQUFXLEVBQUE7O0FBekdqQjs7RUFnSE0seUJDbkg4QixFQUFBOztBREdwQztFQW9ITSx5QkFBeUI7RUFDekIsWUM3RVksRUFBQTs7QUR4Q2xCO0VBMEhJLHlCQ3hHWTtFRHlHWixVQUFVLEVBQUE7O0FBM0hkO0lBOEhNLFdDaEltQixFQUFBOztBREV6QjtJQWtJTSxjQUFjLEVBQUE7O0FBbElwQjtFRW1CRSxhQUFhO0VBQ2IsbUJBQW1CO0VGcUhmLGVBQWUsRUFBQTs7QUFDZjtJQTFJTjtNQTJJUSxzQkFBc0IsRUFBQSxFQTZDekI7O0FBeExMO0lFY0UsYUFBYTtJQUNiLHNCQUFzQjtJRmtJaEIsdUJBQXVCO0lBQ3ZCLGdCQzFHVSxFQUFBOztBRHhDbEI7TUVtQkUsYUFBYTtNQUNiLG1CQUFtQjtNRm1JWCxtQkFBbUIsRUFBQTs7QUF2SjdCO1FBMEpZLGVBQWU7UUFDZixpQkNuSE07UURvSE4sV0FBVyxFQUFBOztBQTVKdkI7VUErSmMseUJBQXlCLEVBQUE7O0FBL0p2QztVQW1LYyx5QkFBeUIsRUFBQTs7QUFuS3ZDO1VBdUtjLHlCQ25KTSxFQUFBOztBRHBCcEI7TUE2S1UsZ0JBQWdCO01BQ2hCLGdCQ3RJUSxFQUFBOztBRHhDbEI7SUFtTFEsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZSxFQUFBOztBQXRMdkI7RUE0TEksYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQTdMMUI7SUFnTU0scUJBQXFCLEVBQUE7O0FBaE0zQjtJQW9NTSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBOztBQXRNeEI7RUEyTUksbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQW9DO0VBQ3BDLHlCQUF5QixFQUFBOztBQS9NN0I7SUFrTk0sWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtcGxhbm5pbmcvdmlldy1ieS1zaXRlLWZvcm0vZW1wbG95ZWUtcGxhbm5pbmctZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LS1mbGV4LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLWZsZXgtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzcGxheS0tbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LS0xMDAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1pbi13aWR0aC0tZml0LWNvbnRlbnQge1xyXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvc2l0aW9uLS1yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwteS0tbm9uZSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LS11bnNlbGVjdGFibGUge1xyXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aXNpYmlsaXR5LS1oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtLTEwIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTIwIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTMwIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTQwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTUwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTYwIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTcwIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTgwIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTkwIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5mbGV4LS0xIHtcclxuICBmbGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0yIHtcclxuICBmbGV4OiAyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0zIHtcclxuICBmbGV4OiAzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS00IHtcclxuICBmbGV4OiA0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS01IHtcclxuICBmbGV4OiA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS1hdXRvIHtcclxuICBmbGV4OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tZW5kIHtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1zdGFydCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWVuZCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktc3RhcnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwibW9kaWZpZXJzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLm1haW4tYmxvY2sge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAmLnNob3cge1xyXG4gICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb24tbGlzdCB7XHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucm93LWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICYgPiAuYXctYnRuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zY2hlZHVsZXItd3JhcCB7XHJcbiAgICBoZWlnaHQ6IDU1LjV2aDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICAmLnNob3cge1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNjaGVkdWxlci1oZWFkZXItYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcblxyXG4gIC5zY2hlZHVsZXItaGVhZGVyLWRyb3Bkb3duIHtcclxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcblxyXG4gIC5zY2hlZHVsZXItaGVhZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgLnNjaGVkdWxlci1maWx0ZXJzIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZsZXgtcm93LS1qdXN0aWZ5LWNlbnRlciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaXRhbGljLWdyZWVuIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbiAgLnNjaGVkdWxlci1oZWFkZXItYnRuLWxlZ2VuZCB7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4gIC50YWJsZS1ib3JkZXItbGVmdCB7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICMwMDZlYTkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50YWJsZS1ib3JkZXItcmlnaHQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzAwNmVhOSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNlbGwtZ3JleSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLmluLXNpbXVsYXRpb24ge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAkbWFyZ2luLXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC1kZXRhaWwge1xyXG4gICAgLmZvcm0tY29udHJvbC1wb3RlbnRpYWwtdW5pdCB7XHJcbiAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC1zY29wZSB7XHJcbiAgICAuYW5jZXN0b3ItYWN0aW9ucyxcclxuICAgIC5hbmNlc3Rvci1kYXRhIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbmNlc3Rvci1hY3Rpb25zIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtc3RhdGUtc2ltdWxhdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAuZ3JpZC1jZWxsLXRpdGxlIHtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpbXVsYXRpb24tY3JpdGVyaW9uOm5vdCg6bGFzdC1vZi10eXBlKTo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIiB8IFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC1jaGFydCB7XHJcbiAgICAuY2hhcnQtY29udGFpbmVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2hhcnQtbGVnZW5kIHtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgLmNoYXJ0LWxlZ2VuZC1sYWJlbCB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgLmNoYXJ0LWxlZ2VuZC1sYWJlbC1jb2xvciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMC43NXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgICAgICB3aWR0aDogMnJlbTtcclxuXHJcbiAgICAgICAgICAgICYucXVhbnRpdHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZlYTk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYW1vdW50IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNjNjMyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLm5vdC1haXJ3b3J0aHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhcnQtdmFsdWUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoYXJ0LXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIHdpZHRoOiA0NXJlbTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hdmFpbGFiaWxpdHktY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICYgPiBkaXYge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRheSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRpbWUtcmVzb2x1dGlvbiB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW46IDAgY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgIHAtc2xpZGVyIHtcclxuICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVdGlscyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gYnV0dG9uLWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCAkY29sb3IsICRib3JkZXItY29sb3I6IG51bGwpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyLFxyXG4gICY6bm90KDpkaXNhYmxlZCkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogaWYoJGJvcmRlci1jb2xvciA9PSBudWxsLCAkY29sb3IsICRib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgtY29sdW1uKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtcm93KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQG1peGluIGlucHV0KCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1kaXNhYmxlZCgpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZm9jdXMoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1ob3ZlcigpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlYXJjaC1jcml0ZXJpYS1jb250YWluZXIge1xyXG4gIC5hZHZhbmNlZC1jcml0ZXJpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgICYucmVxdWlyZWQge1xyXG4gICAgICBAaW5jbHVkZSBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCgpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHcmlkIGZvcm0gY29udHJvbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViTWVkaXVtXCI7XHJcblxyXG4gICYgPiBpbnB1dCArIHAtbWVzc2FnZSA+IC51aS1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyNTUsIDI1NSwgMjU1KSA2MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAuYXctaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuLFxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG5cclxuICAgICAgJi5hdy1jYWxlbmRhciAudWktaW5wdXR0ZXh0LFxyXG4gICAgICAmLmF3LWRyb3Bkb3duIC51aS1kcm9wZG93bixcclxuICAgICAgJi5hdy1pbnB1dCxcclxuICAgICAgJi5hdy10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctY2FsZW5kYXIge1xyXG4gICAgICAvLyBGSVhNRTogZml4IGFuIFVJIGlzc3VlIG9uIFByaW1lTkcgY2FsZW5kYXIgY29tcG9uZW50OyB0byByZW1vdmUgd2hlbiBpc3N1ZSB3aWxsIGJlIGZpeGVkIHVwc3RyZWFtXHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAuYXctaWNvbjpub3QoLnJlYWQtb25seS1saW5rKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIG5vbmVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW5pbXAsXHJcbiAgICAuYnRuLWV4dGVybmFsLWxpbmstd3JhcHBlcixcclxuICAgIC5idG4tY2xlYXItd3JhcHBlcixcclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlcixcclxuICAgIC5idG4tc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgICAuYXctZmlsZXVwbG9hZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudWktYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWNsZWFyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtcmFkaW9idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAmID4gLmF3LXJhZGlvYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jYWxlbmRhciB7XHJcbiAgJi51aS1pbnB1dHdyYXBwZXItZm9jdXMge1xyXG4gICAgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkY2hlY2tib3gtaGVpZ2h0O1xyXG4gIHdpZHRoOiAkY2hlY2tib3gtaGVpZ2h0O1xyXG5cclxuICAudWktY2hrYm94IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1jaGtib3gtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZHJvcGRvd24ge1xyXG4gIC51aS1kcm9wZG93biB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1mb2N1cyB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbixcclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gICAgICByaWdodDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDEuNzVyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5maXhlZC13aWR0aCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZpbGV1cGxvYWQge1xyXG4gIEBleHRlbmQgLmF3LWJ0bjtcclxuXHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnVpLWZpbGV1cGxvYWQtY2hvb3NlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudWktYnV0dG9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWlucHV0KCkge1xyXG4gIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZXh0YXJlYSB7XHJcbiAgQGluY2x1ZGUgZ3JpZC1pbnB1dCgpO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1yYWRpb2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuICB3aWR0aDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuXHJcbiAgLnVpLXJhZGlvYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAudWktcmFkaW9idXR0b24taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGNhbGVuZGFyLXBhbmVsIHtcclxuICAudWktZGF0ZXBpY2tlcjpub3QoLnVpLWRhdGVwaWNrZXItaW5saW5lKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcm9wZG93bi1wYW5lbCB7XHJcbiAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciAudWktZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgIC51aS1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: EmployeePlanningFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePlanningFormComponent", function() { return EmployeePlanningFormComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/scheduler/scheduler.component */ "./src/app/shared/components/scheduler/scheduler.component.ts");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/constants/lang-constants */ "./src/app/shared/constants/lang-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _employee_planning_form_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./employee-planning-form.service */ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.service.ts");
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
var _a;























var EmployeePlanningFormComponent = /** @class */ (function (_super) {
    __extends(EmployeePlanningFormComponent, _super);
    function EmployeePlanningFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, employeePlanningFormService, dateService, translateService, datePipe) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.employeePlanningFormService = employeePlanningFormService;
        _this.dateService = dateService;
        _this.translateService = translateService;
        _this.datePipe = datePipe;
        _this.calendarMode = true;
        _this.dailyMode = false;
        _this.dateAbsences = [];
        _this.barMargin = 10;
        _this.resourceTimeRangesEmployee = [];
        _this.resourceTimeRangesEmployeeDaily = [];
        _this.resourceTimeRangesEmployeeSearch = [];
        _this.resourceTimeRangesQualification = [];
        _this.timeRanges = true;
        _this.init();
        _this.initChart();
        _this.setSchedulerConfig();
        _this.setSchedulerColumnEmployeeList();
        _this.setSchedulerColumnQualificationList();
        _this.loadQualificationsList();
        _this.component = EmployeePlanningFormComponent_1;
        _this.displayType = EmployeePlanningFormComponent_1.employees;
        _this.schedulerTimeResolutionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        _this.displayTypeList = [
            {
                label: _this.translateService.instant(_this.getTranslateKey('calendarEmployee')),
                value: EmployeePlanningFormComponent_1.employees
            },
            {
                label: _this.translateService.instant(_this.getTranslateKey('calendarQualification')),
                value: EmployeePlanningFormComponent_1.qualifications
            }
        ];
        _this.placeHolderQualification = _this.translateService.instant(_this.getTranslateKey('qualificationFilter'));
        _this.registerSchedulerTimeResolutionObservable();
        return _this;
    }
    EmployeePlanningFormComponent_1 = EmployeePlanningFormComponent;
    /****************
     * Initialization
     ***************/
    EmployeePlanningFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.eventCounter = 1;
        this.resourceTimeRangeEmployeeCounter = 1;
        this.resourceTimeRangeQualificationCounter = 1;
        this.milisecondsInADay =
            this.component.hoursInADay *
                this.component.minutesInAnHour *
                this.component.secondsInAMinute *
                this.component.milisecondsInASecond;
        this.schedulerLoading = false;
        this.schedulerZoomLevel = EmployeePlanningFormComponent_1.TIME_RESOLUTION_MIN_ZOOM;
        if (!!this.componentData.objectId) {
            this.searchObject = this.serializationService.deserialize(this.componentData.objectId);
            this.setSchedulerDate();
            this.setComponentContext();
            this.search();
            if (!!this.searchObject.startDate && !!this.searchObject.endDate) {
                this.startDate = this.dateService.dateToString(this.searchObject.startDate);
                this.endDate = this.dateService.dateToString(this.searchObject.endDate);
                this.period = this.startDate + ' - ' + this.endDate;
                var deltaNumber = this.getNumberOfDays(this.searchObject.startDate, this.searchObject.endDate) + 1;
                this.delta = deltaNumber.toString();
                this.delta += ' ';
                this.delta += this.translateService.instant(this.getTranslateKey('days'));
            }
        }
    };
    EmployeePlanningFormComponent.prototype.ngAfterViewInit = function () {
        if (this.translateService.currentLang === _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_10__["LangConstants"].FRENCH_CODE) {
            this.scheduler.schedulerEngine.localeManager.locale = 'Fr';
        }
        else {
            this.scheduler.schedulerEngine.localeManager.locale = 'En';
        }
    };
    EmployeePlanningFormComponent.prototype.refresh = function () {
        this.init();
        this.initChart();
        this.events = [];
        this.ngOnInit();
        var startDate = new Date(this.searchObject.startDate);
        var endDate = new Date(this.searchObject.endDate);
        this.switchViewPresetCustomDayAndWeek();
        this.scheduler.schedulerEngine.setTimeSpan(startDate, endDate);
        this.dailyMode = false;
    };
    EmployeePlanningFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].HR_EMPLOYEE_PLANNING_FORM;
    };
    EmployeePlanningFormComponent.prototype.init = function () {
        // General info
        this.searchObject = {};
        this.delta = undefined;
        this.milisecondsInADay = 0;
        this.eaTableLoading = true;
        this.selectedEA = [];
        this.qualificationTableLoading = false;
        this.calendarMode = true;
        this.dailyMode = false;
        this.events = [];
        this.resourcesEmployee = [];
        this.resourcesQualification = [];
        this.resourceTimeRangesEmployee = [];
        this.resourceTimeRangesEmployeeDaily = [];
        this.resourceTimeRangesEmployeeSearch = [];
        this.resourceTimeRangesQualification = [];
        this.qualificationList = [];
        this.showEmployeePlanningLegendDialog = false;
        this.columnEmployeeCounter = 1;
        this.columnQualificationCounter = 1;
        this.displayType = EmployeePlanningFormComponent_1.employees;
        this.componentContext = '';
    };
    EmployeePlanningFormComponent.prototype.initChart = function () {
        this.chartType = 'line';
        this.cumulativeHoursData = {
            datasets: [
                {
                    data: [],
                    label: 'Cumulative hours available',
                    borderColor: '#006ea9',
                    backgroundColor: '#006ea9',
                    hoverBackgroundColor: '#006ea9',
                    fill: false
                }
            ],
            labels: []
        };
        this.setChartOptions();
    };
    EmployeePlanningFormComponent.prototype.setChartOptions = function () {
        this.cumulativeHoursChartOptions = {
            elements: {
                line: {
                    tension: 0
                }
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            },
            legend: {
                display: false
            },
            tooltips: {
                bodyFontColor: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].COLOR_BACKGROUND_PRIMARY
            }
        };
    };
    EmployeePlanningFormComponent.prototype.setChartData = function (results) {
        var _this = this;
        this.translateService.get(this.getComponentName() + ".cumulativeHoursAvailable").subscribe(function (res) {
            var chartdata = {
                datasets: [
                    {
                        data: [],
                        label: res,
                        borderColor: '#006ea9',
                        backgroundColor: '#006ea9',
                        hoverBackgroundColor: '#006ea9',
                        fill: false
                    }
                ],
                labels: []
            };
            if (!!results) {
                if (!!results[0] && !!results[0].datedata) {
                    var keys_1 = Object.keys(results[0].datedata);
                    var sortedKeys_1 = keys_1.sort();
                    var data_1 = [];
                    if (!!results[0].datedata) {
                        for (var i = 0; i < Object.keys(keys_1).length; i++) {
                            data_1[i] = 0;
                        }
                        results.forEach(function (result) {
                            if (!!result && !!result.datedata) {
                                for (var y = 0; y < Object.keys(keys_1).length; y++) {
                                    var value = result.datedata[sortedKeys_1[y]];
                                    if (value !== null && value !== undefined) {
                                        data_1[y] = data_1[y] + value;
                                    }
                                }
                            }
                        });
                    }
                    data_1.forEach(function (value) {
                        chartdata.datasets[0].data.push(value);
                    });
                    _this.cumulativeHoursData = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(chartdata);
                    sortedKeys_1.forEach(function (key) {
                        _this.cumulativeHoursData.labels.push(_this.dateService.dateToString(new Date(key)));
                    });
                }
            }
        });
    };
    EmployeePlanningFormComponent.prototype.search = function () {
        var _this = this;
        this.schedulerLoading = !this.isCreateOpenMode;
        this.eaTableLoading = true;
        this.qualificationTableLoading = true;
        this.employeePlanningFormService.getViewByCompanyData(this.searchObject).subscribe(function (results) {
            if (!!results[0].staffPlanningViewByCompanyTableOutput &&
                !!results[0].staffPlanningViewByCompanyTableOutput[0].availabilityHours) {
                _this.totalAvailability = results[0].staffPlanningViewByCompanyTableOutput[0].availabilityHours.split(':')[0] + " H";
            }
            if (!!results[0].staffPlanningViewByCompanyTableOutput &&
                !!results[0].staffPlanningViewByCompanyTableOutput[0].codeQualif) {
                _this.hoursAvailabilityPerQualification = new Map();
                _this.hoursAvailabilityPerQualification = results[0].staffPlanningViewByCompanyTableOutput[0].codeQualif;
            }
            if (!!results[0].staffPlanningViewBySiteEmployeeAvailabilityTableOutput &&
                results[0].staffPlanningViewBySiteEmployeeAvailabilityTableOutput.length > 0) {
                // chart
                _this.setChartData(results[0].staffPlanningViewBySiteEmployeeAvailabilityTableOutput);
                _this.planningEmployeeAvailability = results[0].staffPlanningViewBySiteEmployeeAvailabilityTableOutput;
                // employee availability
                _this.setDateAbsences(_this.planningEmployeeAvailability);
                _this.buildSchedulerResourceEmployeeList(_this.planningEmployeeAvailability);
                _this.buildResourceTimeRangesEmployee(_this.planningEmployeeAvailability);
                _this.buildResourceTimeRangesEmployeeDaily(_this.planningEmployeeAvailability);
            }
            else {
                _this.eaTableLoading = false;
            }
            if (!!results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput &&
                results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput.length > 0) {
                _this.planningQualificationAvailability = results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput;
                // qualification
                _this.buildSchedulerResourceQualificationList(results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput);
                _this.buildResourceTimeRangesQualification(results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput);
                _this.buildQualificationList(results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput);
            }
            else {
                _this.qualificationTableLoading = false;
            }
        });
        setTimeout(function () {
            _this.scheduler.schedulerEngine.zoomToFit();
            _this.schedulerZoomLevel =
                _this.scheduler.schedulerEngine.zoomLevel > EmployeePlanningFormComponent_1.TIME_RESOLUTION_MAX_ZOOM
                    ? EmployeePlanningFormComponent_1.TIME_RESOLUTION_MAX_ZOOM
                    : _this.scheduler.schedulerEngine.zoomLevel < EmployeePlanningFormComponent_1.TIME_RESOLUTION_MIN_ZOOM
                        ? EmployeePlanningFormComponent_1.TIME_RESOLUTION_MIN_ZOOM
                        : _this.scheduler.schedulerEngine.zoomLevel;
            _this.schedulerLoading = false;
        });
    };
    EmployeePlanningFormComponent.prototype.buildQualificationList = function (qualificationAvailability) {
        var _this = this;
        qualificationAvailability.forEach(function (qualification) {
            _this.qualificationList.push({ label: qualification.qualification, value: qualification });
        });
    };
    EmployeePlanningFormComponent.prototype.setSchedulerColumnEmployeeList = function () {
        this.columnsEmployee = [
            {
                field: 'name',
                text: this.translateService.instant(this.getTranslateKey('name')),
                htmlEncode: false,
                renderer: function (_a) {
                    var record = _a.record;
                    return "\n        <div class=\"info\">\n                <a id =\"" + record.data.idGenerated + "\" class=\"employee-select\">" + record.data.name + "</a>\n                <div class=\"desc\" style=\"text-align:center;\">(" + record.data.hoursAvailability + " H)</div>\n        </div>\n        ";
                },
                sortable: false
            },
            {
                field: 'qualifications',
                text: this.translateService.instant(this.getTranslateKey('qualifications')),
                htmlEncode: false,
                width: 250,
                sortable: false,
                renderer: function (_a) {
                    var record = _a.record;
                    return "\n          <div class=\"info\">\n                  <div>\n                  " + record.data.qualification.join('<br>') + "\n                  </div>\n          </div>\n          ";
                }
            }
        ];
    };
    EmployeePlanningFormComponent.prototype.buildResourceTimeRangesEmployee = function (listeAvaibility) {
        var _this = this;
        listeAvaibility.forEach(function (currentAvailability) {
            if (currentAvailability.datedata) {
                var dateData_1 = currentAvailability.datedata;
                Object.keys(dateData_1).forEach(function (key) {
                    var startDateWorkTemplate = new Date(key);
                    if (currentAvailability.listBidtLaborTemplateHoursDTO) {
                        var workTemplate = currentAvailability.listBidtLaborTemplateHoursDTO.filter(function (laborTemplate) { return laborTemplate.thDayOfWeek === startDateWorkTemplate.getDay() + 1; });
                        if (workTemplate && workTemplate.length > 0) {
                            _this.resourceTimeRangesEmployeeSearch.push(_this.buildSchedulerResourceTimeRangeEmployee(currentAvailability.employeeId, new Date(key), dateData_1[key]));
                        }
                        else {
                            _this.resourceTimeRangesEmployeeSearch.push(_this.buildSchedulerResourceTimeRangeEmployeeWithCustomStyle(currentAvailability.employeeId, new Date(key)));
                        }
                    }
                });
            }
        });
        this.resourceTimeRangesEmployee = this.resourceTimeRangesEmployeeSearch;
    };
    EmployeePlanningFormComponent.prototype.buildSchedulerResourceTimeRangeEmployee = function (employeeId, startDate, hoursAvailability) {
        return {
            id: this.generateSchedulerResourceTimeRangeEmployeeId(),
            resourceId: employeeId.toString(),
            startDate: startDate,
            endDate: undefined,
            duration: 1,
            durationUnit: 'd',
            name: this.roundWithOneDigit(hoursAvailability).toString() + ' H',
            eventType: '',
            timeRangeColor: hoursAvailability === 0 ? 'red' : 'green'
        };
    };
    EmployeePlanningFormComponent.prototype.buildSchedulerResourceTimeRangeEmployeeWithCustomStyle = function (employeeId, startDate) {
        return {
            id: this.generateSchedulerResourceTimeRangeEmployeeId(),
            resourceId: employeeId.toString(),
            startDate: startDate,
            endDate: undefined,
            duration: 1,
            durationUnit: 'd',
            eventType: '',
            style: 'background : repeating-linear-gradient(45deg, rgba(155,155,155,0.5),' +
                ' rgba(155,155,155,0.5) 8px, transparent 8px, transparent 16px);color: #666'
        };
    };
    EmployeePlanningFormComponent.prototype.buildSchedulerResourceEmployeeList = function (listeAvaibility) {
        var _this = this;
        this.resourcesEmployee = listeAvaibility.map(function (element) {
            var hoursAvailability = 0;
            if (element.datedata) {
                var dateData_2 = element.datedata;
                Object.keys(element.datedata).forEach(function (key) { return (hoursAvailability += dateData_2[key]); });
            }
            return _this.buildSchedulerResourceEmployeeFromAsset(element, hoursAvailability);
        });
        this.sortResources(this.resourcesEmployee);
    };
    EmployeePlanningFormComponent.prototype.buildSchedulerResourceEmployeeFromAsset = function (element, hoursAvailability) {
        var _this = this;
        this.qualifications = [];
        if (!!element.qualificationsId) {
            element.qualificationsId.forEach(function (result) {
                _this.qualifications.push(_this.qualificationLists.filter(function (type) { return type.labelValueList.value === result.toString(); })[0].labelValueList
                    .label);
            });
        }
        return {
            id: element.employeeId ? element.employeeId.toString() : '',
            name: element.employee,
            qualification: !!this.qualifications ? this.qualifications : undefined,
            idGenerated: this.generateSchedulerColumnsEmployeeId(),
            hoursAvailability: this.roundWithOneDigit(hoursAvailability),
            children: []
        };
    };
    EmployeePlanningFormComponent.prototype.buildResourceTimeRangesEmployeeDaily = function (listeAvaibility) {
        var _this = this;
        var days = this.getDates(this.searchObject.startDate, this.searchObject.endDate);
        days.forEach(function (day) {
            listeAvaibility.forEach(function (result) {
                var startDate = new Date(day.getTime());
                startDate.setHours(0);
                startDate.setMinutes(0);
                startDate.setSeconds(0);
                if (result.listBidtLaborTemplateHoursDTO) {
                    var workTemplate = result.listBidtLaborTemplateHoursDTO.filter(function (laborTemplate) { return laborTemplate.thDayOfWeek === startDate.getDay() + 1; });
                    if (!!workTemplate) {
                        workTemplate.forEach(function (wt) {
                            var startDateWorkTemplate = new Date(startDate.getTime() + wt.thHourOfBeginning * _this.component.milisecondsInASecond);
                            var endDateWorkTemplate = new Date(startDate.getTime() + wt.thHourOfEnd * _this.component.milisecondsInASecond);
                            _this.resourceTimeRangesEmployeeDaily.push(_this.buildSchedulerResourceTimeRangeEmployeeDaily(result.employeeId, startDateWorkTemplate, endDateWorkTemplate));
                        });
                    }
                }
            });
        });
    };
    EmployeePlanningFormComponent.prototype.buildSchedulerResourceTimeRangeEmployeeDaily = function (employeeId, startDate, endDate) {
        return {
            id: this.generateSchedulerResourceTimeRangeEmployeeId(),
            resourceId: employeeId.toString(),
            startDate: startDate,
            endDate: endDate,
            eventType: '',
            timeRangeColor: 'green'
        };
    };
    EmployeePlanningFormComponent.prototype.buildResourceTimeRangesQualification = function (qualificationAvailability) {
        var _this = this;
        this.resourceTimeRangesQualification = [];
        qualificationAvailability.forEach(function (qualification) {
            if (qualification.datedata) {
                var dateData_3 = qualification.datedata;
                Object.keys(dateData_3).forEach(function (key) {
                    _this.resourceTimeRangesQualification.push(_this.buildSchedulerResourceTimeRangeQualification(qualification.qualification, new Date(key), dateData_3[key]));
                });
            }
        });
    };
    // Only for daily View
    EmployeePlanningFormComponent.prototype.buildSchedulerEventsList = function (listeAvaibility) {
        var _this = this;
        this.events = [];
        this.dateAbsences.forEach(function (element) {
            var startDateWorkTemplate = new Date(element.key);
            var workTemplate = listeAvaibility.find(function (result) { return result.employeeId === element.employeeId; });
            if (workTemplate && workTemplate.listBidtLaborTemplateHoursDTO) {
                var workTemplatefilter = workTemplate.listBidtLaborTemplateHoursDTO.filter(function (laborTemplate) { return laborTemplate.thDayOfWeek === startDateWorkTemplate.getDay() + 1; });
                if (!!workTemplatefilter) {
                    if (element.type === _employee_planning_form_service__WEBPACK_IMPORTED_MODULE_22__["UpcomingEventStatus"].WORKORDER && element.end != undefined) {
                        var endDateWorkTemplate = new Date(element.end);
                        startDateWorkTemplate = new Date(element.start);
                        _this.events.push(_this.buildSchedulerEventFromAsset(element, startDateWorkTemplate, endDateWorkTemplate));
                    }
                    else {
                        workTemplatefilter.forEach(function (wt) {
                            var endDateWorkTemplate = new Date(element.key);
                            startDateWorkTemplate = new Date(element.key);
                            startDateWorkTemplate = new Date(startDateWorkTemplate.getTime() + wt.thHourOfBeginning * _this.component.milisecondsInASecond);
                            endDateWorkTemplate = new Date(endDateWorkTemplate.getTime() + wt.thHourOfEnd * _this.component.milisecondsInASecond);
                            _this.events.push(_this.buildSchedulerEventFromAsset(element, startDateWorkTemplate, endDateWorkTemplate));
                        });
                    }
                }
            }
        });
    };
    EmployeePlanningFormComponent.prototype.buildSchedulerEventFromAsset = function (element, startDate, endDate) {
        var type = element.type ? element.type : '';
        return {
            id: this.generateSchedulerEventId(),
            resourceId: element.employeeId ? element.employeeId.toString() : '',
            name: element.type ? this.translateService.instant(this.getTranslateKey(element.type.toLowerCase())) : '',
            desc: element.name ? element.name : '',
            startDate: startDate,
            endDate: endDate,
            eventType: '',
            eventColor: EmployeePlanningFormComponent_1.EVENT_COLOR_EVENT[type],
            children: []
        };
    };
    EmployeePlanningFormComponent.prototype.setSchedulerColumnQualificationList = function () {
        this.columnsQualification = [
            {
                field: 'name',
                text: this.translateService.instant(this.getTranslateKey('qualifications')),
                htmlEncode: false,
                width: 150,
                renderer: function (_a) {
                    var record = _a.record;
                    return "\n        <div class=\"info\">\n                <div>" + record.data.name + "</div>\n                <div class=\"desc\">(" + record.data.hoursAvailability + " H)</div>\n        </div>\n        ";
                },
                sortable: false
            }
        ];
    };
    EmployeePlanningFormComponent.prototype.buildSchedulerResourceQualificationList = function (listeAvaibility) {
        var _this = this;
        this.resourcesQualification = listeAvaibility.map(function (element) {
            var hoursAvailability = 0;
            if (element.datedata) {
                var dateData_4 = element.datedata;
                Object.keys(element.datedata).forEach(function (key) { return (hoursAvailability += dateData_4[key]); });
            }
            return _this.buildSchedulerResourceQualificationFromAsset(element, hoursAvailability);
        });
        this.sortResources(this.resourcesQualification);
    };
    EmployeePlanningFormComponent.prototype.sortResources = function (tabToSort) {
        tabToSort.sort(function (a, b) { return b.hoursAvailability - a.hoursAvailability; });
    };
    EmployeePlanningFormComponent.prototype.buildSchedulerResourceQualificationFromAsset = function (element, hoursAvailability) {
        return {
            id: element.qualification ? element.qualification : '',
            name: element.qualification,
            idGenerated: this.generateSchedulerColumnsQualificationId(),
            hoursAvailability: this.roundWithOneDigit(hoursAvailability),
            children: []
        };
    };
    EmployeePlanningFormComponent.prototype.buildSchedulerResourceTimeRangeQualification = function (qualification, startDate, hoursAvailability) {
        return {
            id: this.generateSchedulerResourceTimeRangeQualificationId(),
            resourceId: qualification,
            startDate: startDate,
            duration: 1,
            durationUnit: 'd',
            name: this.roundWithOneDigit(hoursAvailability).toString() + 'H',
            eventType: '',
            timeRangeColor: hoursAvailability === 0 ? 'red' : 'green'
        };
    };
    EmployeePlanningFormComponent.prototype.generateSchedulerResourceTimeRangeEmployeeId = function () {
        return this.resourceTimeRangeEmployeeCounter++;
    };
    EmployeePlanningFormComponent.prototype.generateSchedulerResourceTimeRangeQualificationId = function () {
        return this.resourceTimeRangeQualificationCounter++;
    };
    EmployeePlanningFormComponent.prototype.generateSchedulerEventId = function () {
        return this.eventCounter++;
    };
    EmployeePlanningFormComponent.prototype.generateSchedulerColumnsEmployeeId = function () {
        return this.columnEmployeeCounter++;
    };
    EmployeePlanningFormComponent.prototype.generateSchedulerColumnsQualificationId = function () {
        return this.columnQualificationCounter++;
    };
    EmployeePlanningFormComponent.prototype.getDates = function (startDate, stopDate) {
        var dateArray = new Array();
        var currentDate = new Date(startDate.valueOf());
        var endDate = new Date(stopDate.valueOf());
        while (currentDate <= endDate) {
            dateArray.push(new Date(currentDate));
            currentDate = this.addDays(currentDate, 1);
        }
        return dateArray;
    };
    EmployeePlanningFormComponent.prototype.addDays = function (currentDate, days) {
        var date = new Date(currentDate.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };
    EmployeePlanningFormComponent.prototype.roundWithOneDigit = function (numberWithDigit) {
        if (Number.isInteger(numberWithDigit)) {
            return numberWithDigit;
        }
        else {
            return numberWithDigit.toFixed(1);
        }
    };
    EmployeePlanningFormComponent.prototype.setDateAbsences = function (results) {
        var _this = this;
        this.dateAbsences = [];
        if (!!results) {
            // set table data
            if (!!results[0].datedata) {
                results.forEach(function (result) {
                    _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__["ListUtils"].orEmpty(result.dateAbsences).forEach(function (resultFilter) {
                        resultFilter.employeeId = result.employeeId;
                        _this.dateAbsences.push(resultFilter);
                    });
                });
            }
        }
        this.eaTableLoading = false;
    };
    EmployeePlanningFormComponent.prototype.onQualificationChange = function () {
        if (this.selectedQualification) {
            if (this.selectedQualification.qualification && this.hoursAvailabilityPerQualification) {
                var hoursAvailability = this.hoursAvailabilityPerQualification[this.selectedQualification.qualification];
                if (hoursAvailability) {
                    this.qualificationHoursAvailability = this.roundWithOneDigit(hoursAvailability).toString() + ' H';
                }
            }
            this.buildSchedulerResourceQualificationListWithQualification();
            this.buildSchedulerResourceEMployeeListWithQualification();
        }
        else {
            this.qualificationHoursAvailability = undefined;
            this.buildSchedulerResourceEmployeeList(this.planningEmployeeAvailability);
            this.buildSchedulerResourceQualificationList(this.planningQualificationAvailability);
        }
    };
    EmployeePlanningFormComponent.prototype.buildSchedulerResourceEMployeeListWithQualification = function () {
        var _this = this;
        this.resourcesEmployee = this.planningEmployeeAvailability
            .filter(function (element) {
            if (element.qualificationsId &&
                _this.selectedQualification.idQualification &&
                element.qualificationsId.includes(_this.selectedQualification.idQualification)) {
                return true;
            }
            return false;
        })
            .map(function (element) {
            var hoursAvailability = 0;
            if (element.datedata) {
                var dateData_5 = element.datedata;
                Object.keys(element.datedata).forEach(function (key) { return (hoursAvailability += dateData_5[key]); });
            }
            return _this.buildSchedulerResourceEmployeeFromAsset(element, hoursAvailability);
        });
        this.sortResources(this.resourcesEmployee);
    };
    EmployeePlanningFormComponent.prototype.buildSchedulerResourceQualificationListWithQualification = function () {
        var _this = this;
        this.resourcesQualification = this.planningQualificationAvailability
            .filter(function (element) {
            if (element.idQualification === _this.selectedQualification.idQualification) {
                return true;
            }
            return false;
        })
            .map(function (element) {
            var hoursAvailability = 0;
            if (element.datedata) {
                var dateData_6 = element.datedata;
                Object.keys(element.datedata).forEach(function (key) { return (hoursAvailability += dateData_6[key]); });
            }
            return _this.buildSchedulerResourceQualificationFromAsset(element, hoursAvailability);
        });
    };
    // tslint:disable-next-line: no-any
    EmployeePlanningFormComponent.prototype.openEmployee = function (row) {
        var _this = this;
        var input = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__["ObjectUtils"].isDefined(row)
            ? Number(row.id)
            : _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__["ObjectUtils"].isDefined(this.selectedEA[0])
                ? Number(this.selectedEA[0].employeeId)
                : undefined;
        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__["ObjectUtils"].isDefined(input)) {
            this.employeePlanningFormService.getEmployeeDetails(input).subscribe(function (res) {
                if (res.length === 1 && !!res[0]) {
                    var labelKey = 'transaction.EmployeeFormComponent';
                    var data = {
                        id: _this.tabService.generateId(),
                        componentId: 'EmployeeFormComponent',
                        objectId: res[0].bidtEmployeeDTO && _this.serializationService.serialize(res[0].bidtEmployeeDTO),
                        openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read
                    };
                    _this.tabService.open(_this.tabService.create(data, labelKey, true));
                }
            });
        }
    };
    EmployeePlanningFormComponent.prototype.getNumberOfDays = function (startDate, endDate) {
        var startDateMS = new Date(startDate).getTime();
        var endDateMS = new Date(endDate).getTime();
        var differenceMS = endDateMS - startDateMS;
        return Math.round(differenceMS / this.milisecondsInADay);
    };
    EmployeePlanningFormComponent.prototype.getDate = function (isoString) {
        var date = new Date(isoString);
        var customDate = isNaN(new Date(date).getDate())
            ? isoString
            : "" + this.datePipe.transform(new Date(date), 'dd/MM');
        return customDate;
    };
    EmployeePlanningFormComponent.prototype.setComponentContext = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])({
            company: this.searchObject.companyName
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.searchObject.companyName)
                : this.employeePlanningFormService
                    .findBidtCompanyById(this.searchObject.companyId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (company) { return company.companyName; })),
            site: this.searchObject.siteName
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.searchObject.siteName)
                : this.employeePlanningFormService
                    .findBidtSiteById(this.searchObject.siteId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (site) { return site.siteName; })),
            warehouse: this.searchObject.warehouseName
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.searchObject.warehouseName)
                : this.searchObject.warehouseId
                    ? this.employeePlanningFormService
                        .getBidtWarehouseById(this.searchObject.warehouseId)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (warehouse) { return warehouse.whName; }))
                    : ' '
        }).subscribe(function (result) {
            _this.searchObject.companyName = result.company;
            _this.searchObject.siteName = result.site;
            if (!!_this.searchObject.warehouseId) {
                _this.searchObject.warehouseName = result.warehouse;
                _this.componentContext = result.company + " | " + result.site + " | " + result.warehouse;
            }
            else {
                _this.componentContext = result.company + " | " + result.site;
            }
            _this.displayComponentContext(_this.componentContext, _this.isCreateOpenMode);
        });
    };
    EmployeePlanningFormComponent.prototype.setSchedulerDate = function () {
        this.schedulerConfig = __assign({}, this.schedulerConfig, { startDate: this.searchObject.startDate, endDate: this.searchObject.endDate });
    };
    EmployeePlanningFormComponent.prototype.backToEmployee = function () {
        this.events = [];
        var startDate = new Date(this.searchObject.startDate);
        var endDate = new Date(this.searchObject.endDate);
        this.switchViewPresetCustomDayAndWeek();
        this.scheduler.schedulerEngine.setTimeSpan(startDate, endDate);
        this.resourceTimeRangesEmployee = this.resourceTimeRangesEmployeeSearch;
        this.dailyMode = !this.dailyMode;
    };
    EmployeePlanningFormComponent.prototype.onSchedulerEvents = function (event) {
        if (event.type === 'cellclick' && event.event.target.matches('.employee-select')) {
            var employee = this.resourcesEmployee.find(function (resource) {
                return (resource.idGenerated ? resource.idGenerated.toString() : '') === event.event.target.id;
            });
            if (!!employee) {
                this.openEmployee(employee);
            }
        }
        else if (event.type === 'timeaxisheaderclick' &&
            event.event.target.matches('.b-sch-header-timeaxis-cell') &&
            !this.dailyMode &&
            this.calendarMode) {
            this.dailyMode = !this.dailyMode;
            if (this.dailyMode) {
                var startDate = moment__WEBPACK_IMPORTED_MODULE_4__(event.event.target.innerHTML, 'DD/MM/YYYY').toDate();
                startDate.setHours(startDate.getHours());
                var endDate = new Date(startDate);
                var hoursPerDay = 24;
                endDate.setHours(startDate.getHours() + hoursPerDay);
                this.switchViewPresetHourAndDay();
                this.scheduler.schedulerEngine.setTimeSpan(startDate, endDate);
                this.buildSchedulerEventsList(this.planningEmployeeAvailability);
                this.resourceTimeRangesEmployee = this.resourceTimeRangesEmployeeDaily;
            }
        }
    };
    EmployeePlanningFormComponent.prototype.switchViewPresetHourAndDay = function () {
        this.schedulerConfig = __assign({}, this.schedulerConfig, { viewPreset: { name: EmployeePlanningFormComponent_1.hourAndDay } });
    };
    EmployeePlanningFormComponent.prototype.switchViewPresetCustomDayAndWeek = function () {
        this.schedulerConfig = __assign({}, this.schedulerConfig, { viewPreset: {
                name: EmployeePlanningFormComponent_1.dayAndWeek,
                displayDateFormat: EmployeePlanningFormComponent_1.displayDateFormat,
                timeResolution: {
                    unit: EmployeePlanningFormComponent_1.day,
                    increment: 1
                },
                headerConfig: {
                    middle: {
                        unit: EmployeePlanningFormComponent_1.day,
                        dateFormat: EmployeePlanningFormComponent_1.dateFormat
                    }
                }
            } });
    };
    EmployeePlanningFormComponent.prototype.openEmployeePlanningLegendDialog = function () {
        this.showEmployeePlanningLegendDialog = true;
    };
    EmployeePlanningFormComponent.prototype.onDisplayTypeChange = function () {
        this.calendarMode = this.displayType === EmployeePlanningFormComponent_1.employees;
    };
    EmployeePlanningFormComponent.prototype.setSchedulerConfig = function () {
        this.schedulerConfig = {
            appendTo: 'container',
            mode: 'horizontal',
            viewPreset: {
                name: EmployeePlanningFormComponent_1.dayAndWeek,
                displayDateFormat: EmployeePlanningFormComponent_1.displayDateFormat,
                timeResolution: {
                    unit: EmployeePlanningFormComponent_1.day,
                    increment: 1
                },
                headerConfig: {
                    middle: {
                        unit: EmployeePlanningFormComponent_1.day,
                        dateFormat: EmployeePlanningFormComponent_1.dateFormat
                    }
                }
            },
            responsiveLevels: {
                small: {
                    levelWidth: 800,
                    tickWidth: 65,
                    fillTicks: true,
                    rowHeight: 40
                },
                normal: {
                    levelWidth: '*',
                    tickWidth: 250,
                    fillTicks: false,
                    rowHeight: 50
                }
            },
            timeRanges: true,
            resourceMargin: 0,
            readOnly: true,
            tickSize: 90,
            resourceTimeRangesFeatures: { resourceTimeRanges: true },
            scheduleContextMenu: {
                items: {
                    addEvent: false
                },
                processHeaderItems: function () { return false; }
            },
            zoomOnTimeAxisDoubleClick: false,
            zoomOnMouseWheel: false,
            eventRenderer: function (_a) {
                var eventRecord = _a.eventRecord;
                return "\n            <div class=\"info\">\n                <div class=\"name\" style=\"font-weight:bold;\">" + eventRecord.name + "</div>\n                <div class=\"desc\">" + eventRecord.desc + "</div>\n            </div>\n          ";
            },
            timeRangesFeature: {
                showCurrentTimeLine: true
            },
            startDate: new Date(this.searchObject.startDate),
            endDate: new Date(this.searchObject.endDate)
        };
    };
    EmployeePlanningFormComponent.prototype.loadQualificationsList = function () {
        var _this = this;
        this.employeePlanningFormService.findQualificationTitle().subscribe(function (results) {
            _this.qualificationLists = results || [];
        });
    };
    EmployeePlanningFormComponent.prototype.onChangeTimeResolution = function (event) {
        this.schedulerTimeResolutionChanged.next(event.value);
    };
    EmployeePlanningFormComponent.prototype.registerSchedulerTimeResolutionObservable = function () {
        var _this = this;
        this.schedulerTimeResolutionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe)).subscribe({
            next: function (value) {
                _this.scheduler.schedulerEngine.zoomTo(value);
            }
        });
    };
    var EmployeePlanningFormComponent_1;
    EmployeePlanningFormComponent.EVENT_COLOR_EVENT = (_a = {},
        _a[_employee_planning_form_service__WEBPACK_IMPORTED_MODULE_22__["UpcomingEventStatus"].ABSENCES] = 'gray',
        _a[_employee_planning_form_service__WEBPACK_IMPORTED_MODULE_22__["UpcomingEventStatus"].HOLIDAYS] = 'gray',
        _a[_employee_planning_form_service__WEBPACK_IMPORTED_MODULE_22__["UpcomingEventStatus"].TRAINING] = 'orange',
        _a[_employee_planning_form_service__WEBPACK_IMPORTED_MODULE_22__["UpcomingEventStatus"].WORKORDER] = 'blue',
        _a);
    EmployeePlanningFormComponent.TIME_RESOLUTION_MAX_ZOOM = 15;
    EmployeePlanningFormComponent.TIME_RESOLUTION_MIN_ZOOM = 7;
    // Date constants
    EmployeePlanningFormComponent.MONDAY = 0;
    EmployeePlanningFormComponent.TUESDAY = 1;
    EmployeePlanningFormComponent.WEDNESDAY = 2;
    EmployeePlanningFormComponent.THURSDAY = 3;
    EmployeePlanningFormComponent.FRIDAY = 4;
    EmployeePlanningFormComponent.SATURDAY = 5;
    EmployeePlanningFormComponent.SUNDAY = 6;
    // Month constants
    EmployeePlanningFormComponent.JAN = 0;
    EmployeePlanningFormComponent.FEB = 1;
    EmployeePlanningFormComponent.MAR = 2;
    EmployeePlanningFormComponent.APR = 3;
    EmployeePlanningFormComponent.MAY = 4;
    EmployeePlanningFormComponent.JUN = 5;
    EmployeePlanningFormComponent.JUL = 6;
    EmployeePlanningFormComponent.AUG = 7;
    EmployeePlanningFormComponent.SEP = 8;
    EmployeePlanningFormComponent.OCT = 9;
    EmployeePlanningFormComponent.NOV = 10;
    EmployeePlanningFormComponent.DEC = 11;
    // HMSMs constants
    EmployeePlanningFormComponent.daysInAWeek = 7;
    EmployeePlanningFormComponent.hoursInADay = 24;
    EmployeePlanningFormComponent.minutesInAnHour = 60;
    EmployeePlanningFormComponent.secondsInAMinute = 60;
    EmployeePlanningFormComponent.milisecondsInASecond = 1000;
    // Types constants
    EmployeePlanningFormComponent.absences = 'ABSENCES';
    EmployeePlanningFormComponent.training = 'TRAINING';
    EmployeePlanningFormComponent.events = 'EVENT';
    EmployeePlanningFormComponent.jobs = 'JOBS';
    EmployeePlanningFormComponent.holidays = 'HOLIDAYS';
    EmployeePlanningFormComponent.employees = 'Employees';
    EmployeePlanningFormComponent.qualifications = 'Qualifications';
    EmployeePlanningFormComponent.dayAndWeek = 'dayAndWeek';
    EmployeePlanningFormComponent.hourAndDay = 'hourAndDay';
    EmployeePlanningFormComponent.day = 'day';
    EmployeePlanningFormComponent.dateFormat = 'DD/MM/YYYY';
    EmployeePlanningFormComponent.displayDateFormat = 'DD/MM/YYYY';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_7__["SchedulerComponent"]),
        __metadata("design:type", _shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_7__["SchedulerComponent"])
    ], EmployeePlanningFormComponent.prototype, "scheduler", void 0);
    EmployeePlanningFormComponent = EmployeePlanningFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aw-employee-planning-form',
            template: __webpack_require__(/*! ./employee-planning-form.component.html */ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.html"),
            styles: [__webpack_require__(/*! ./employee-planning-form.component.scss */ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_13__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_15__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_16__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_18__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_17__["SessionService"],
            _employee_planning_form_service__WEBPACK_IMPORTED_MODULE_22__["EmployeePlanningFormService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]])
    ], EmployeePlanningFormComponent);
    return EmployeePlanningFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_19__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.service.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.service.ts ***!
  \************************************************************************************************************/
/*! exports provided: UpcomingEventStatus, EmployeePlanningFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingEventStatus", function() { return UpcomingEventStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePlanningFormService", function() { return EmployeePlanningFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-company.api */ "./src/app/shared/api/bidt-company.api.ts");
/* harmony import */ var _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-employee.api */ "./src/app/shared/api/bidt-employee.api.ts");
/* harmony import */ var _shared_api_bidt_qualification_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/bidt-qualification.api */ "./src/app/shared/api/bidt-qualification.api.ts");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
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









var UpcomingEventStatus;
(function (UpcomingEventStatus) {
    UpcomingEventStatus["ABSENCES"] = "ABSENCES";
    UpcomingEventStatus["TRAINING"] = "TRAINING";
    UpcomingEventStatus["HOLIDAYS"] = "HOLIDAYS";
    UpcomingEventStatus["WORKORDER"] = "JOBS";
})(UpcomingEventStatus || (UpcomingEventStatus = {}));
var EmployeePlanningFormService = /** @class */ (function (_super) {
    __extends(EmployeePlanningFormService, _super);
    function EmployeePlanningFormService(http, appConfigService, bidtSiteApi, bidtCompanyApi, bidtEmployeeApi, bidtWarehouseApi, bidtQualificationApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtSiteApi = bidtSiteApi;
        _this.bidtCompanyApi = bidtCompanyApi;
        _this.bidtEmployeeApi = bidtEmployeeApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.bidtQualificationApi = bidtQualificationApi;
        return _this;
    }
    EmployeePlanningFormService.prototype.findBidtSiteById = function (siteId) {
        return _super.prototype.post.call(this, this.bidtSiteApi.getById, siteId);
    };
    EmployeePlanningFormService.prototype.findBidtCompanyById = function (companyId) {
        return _super.prototype.post.call(this, this.bidtCompanyApi.getById, companyId);
    };
    EmployeePlanningFormService.prototype.findBidtEmployeeBySearchCriteria = function (searchCriteria) {
        return _super.prototype.post.call(this, this.bidtEmployeeApi.findBidtEmployeeBySearchCriteria, searchCriteria);
    };
    EmployeePlanningFormService.prototype.getViewByCompanyData = function (input) {
        return _super.prototype.post.call(this, this.bidtEmployeeApi.getViewByCompanyData, input);
    };
    EmployeePlanningFormService.prototype.getEmployeeDetails = function (input) {
        return _super.prototype.post.call(this, this.bidtEmployeeApi.getEmployeeDetails, input);
    };
    EmployeePlanningFormService.prototype.getBidtWarehouseById = function (id) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.getById, id);
    };
    EmployeePlanningFormService.prototype.findQualificationTitle = function () {
        return _super.prototype.post.call(this, this.bidtQualificationApi.findQualificationTitle);
    };
    EmployeePlanningFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__["AppConfigService"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_5__["BidtSiteApi"],
            _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__["BidtCompanyApi"],
            _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_3__["BidtEmployeeApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_6__["BidtWarehouseApi"],
            _shared_api_bidt_qualification_api__WEBPACK_IMPORTED_MODULE_4__["BidtQualificationApi"]])
    ], EmployeePlanningFormService);
    return EmployeePlanningFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"section\">\r\n      <div class=\"section-content\">\r\n        <div class=\"legend-item\">\r\n          <div class=\"work-package availability\"></div>\r\n          <div class=\"label\">{{ getComponentName() + \".availability\" | translate }}</div>\r\n        </div>\r\n\r\n        <div class=\"legend-item\">\r\n          <div class=\"work-package jobs\"></div>\r\n          <div class=\"label\">{{ getComponentName() + \".workAssigned\" | translate }}</div>\r\n        </div>\r\n\r\n        <div class=\"legend-item\">\r\n          <div class=\"work-package training\"></div>\r\n          <div class=\"label\">{{ getComponentName() + \".training\" | translate }}</div>\r\n        </div>\r\n\r\n        <div class=\"legend-item\">\r\n          <div class=\"work-package absences\"></div>\r\n          <div class=\"label\">{{ getComponentName() + \".absent\" | translate }}</div>\r\n        </div>\r\n\r\n        <div class=\"legend-item\">\r\n          <div class=\"work-package holidays\"></div>\r\n          <div class=\"label\">{{ getComponentName() + \".holidays\" | translate }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"close\" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.scss ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .legend-item {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  height: 2.25rem; }\n  :host .legend-item .label {\n    margin-left: 1rem; }\n  :host .legend-item .flight {\n    width: calc(21.21px * 2); }\n  :host .legend-item .flight.real {\n      background-color: #42a5f5;\n      height: 6px; }\n  :host .legend-item .flight.simulated {\n      background-color: #42a5f5;\n      height: 2px; }\n  :host .legend-item .upcoming-event {\n    height: 21.21px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    width: 21.21px; }\n  :host .legend-item .upcoming-event.nok {\n      background-color: #e53935; }\n  :host .legend-item .upcoming-event.ok {\n      background-color: #43a047; }\n  :host .legend-item .upcoming-event.warn {\n      background-color: #fdd835; }\n  :host .legend-item .work-package {\n    height: 21.21px;\n    width: calc(21.21px * 2); }\n  :host .legend-item .work-package.absences {\n      background-color: #a0a0a0; }\n  :host .legend-item .work-package.holidays {\n      background-color: #a0a0a0; }\n  :host .legend-item .work-package.jobs {\n      background-color: #42a5f5; }\n  :host .legend-item .work-package.training {\n      background-color: #ffa726; }\n  :host .legend-item .work-package.availability {\n      background-color: #66bb6a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtcGxhbm5pbmcvdmlldy1ieS1zaXRlLWZvcm0vZW1wbG95ZWUtcGxhbm5pbmctbGVnZW5kLWRpYWxvZy9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxodW1hbi1yZXNvdXJjZXNcXGVtcGxveWVlLXBsYW5uaW5nXFx2aWV3LWJ5LXNpdGUtZm9ybVxcZW1wbG95ZWUtcGxhbm5pbmctbGVnZW5kLWRpYWxvZ1xcZW1wbG95ZWUtcGxhbm5pbmctbGVnZW5kLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTtFQUxuQjtJQVFNLGlCQUFpQixFQUFBO0VBUnZCO0lBWU0sd0JBQWdDLEVBQUE7RUFadEM7TUFlUSx5QkFBeUI7TUFDekIsV0FBVyxFQUFBO0VBaEJuQjtNQW9CUSx5QkFBeUI7TUFDekIsV0FBVyxFQUFBO0VBckJuQjtJQTBCTSxlQTVCZTtJQTZCZixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLGNBOUJlLEVBQUE7RUFFckI7TUErQlEseUJBQXlCLEVBQUE7RUEvQmpDO01BbUNRLHlCQUF5QixFQUFBO0VBbkNqQztNQXVDUSx5QkFBeUIsRUFBQTtFQXZDakM7SUE0Q00sZUE5Q2U7SUErQ2Ysd0JBQWdDLEVBQUE7RUE3Q3RDO01BZ0RRLHlCQUF5QixFQUFBO0VBaERqQztNQW9EUSx5QkFBeUIsRUFBQTtFQXBEakM7TUF3RFEseUJBQXlCLEVBQUE7RUF4RGpDO01BNERRLHlCQUF5QixFQUFBO0VBNURqQztNQWdFUSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vaHVtYW4tcmVzb3VyY2VzL2VtcGxveWVlLXBsYW5uaW5nL3ZpZXctYnktc2l0ZS1mb3JtL2VtcGxveWVlLXBsYW5uaW5nLWxlZ2VuZC1kaWFsb2cvZW1wbG95ZWUtcGxhbm5pbmctbGVnZW5kLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRldmVudC13aWR0aDogMjEuMjFweDtcclxuXHJcbjpob3N0IHtcclxuICAubGVnZW5kLWl0ZW0ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgaGVpZ2h0OiAyLjI1cmVtO1xyXG5cclxuICAgIC5sYWJlbCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5mbGlnaHQge1xyXG4gICAgICB3aWR0aDogY2FsYygjeyRldmVudC13aWR0aH0gKiAyKTtcclxuXHJcbiAgICAgICYucmVhbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyYTVmNTtcclxuICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zaW11bGF0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MmE1ZjU7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXBjb21pbmctZXZlbnQge1xyXG4gICAgICBoZWlnaHQ6ICRldmVudC13aWR0aDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB3aWR0aDogJGV2ZW50LXdpZHRoO1xyXG5cclxuICAgICAgJi5ub2sge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTM5MzU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYub2sge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0M2EwNDc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYud2FybiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDgzNTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53b3JrLXBhY2thZ2Uge1xyXG4gICAgICBoZWlnaHQ6ICRldmVudC13aWR0aDtcclxuICAgICAgd2lkdGg6IGNhbGMoI3skZXZlbnQtd2lkdGh9ICogMik7XHJcblxyXG4gICAgICAmLmFic2VuY2VzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhMGEwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmhvbGlkYXlzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhMGEwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmpvYnMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MmE1ZjU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYudHJhaW5pbmcge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE3MjY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYXZhaWxhYmlsaXR5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: EmployeePlanningLegendDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePlanningLegendDialogComponent", function() { return EmployeePlanningLegendDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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



var EmployeePlanningLegendDialogComponent = /** @class */ (function (_super) {
    __extends(EmployeePlanningLegendDialogComponent, _super);
    function EmployeePlanningLegendDialogComponent() {
        return _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'EmployeePlanningLegendDialogComponent') || this;
    }
    EmployeePlanningLegendDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-employee-planning-form-legend',
            template: __webpack_require__(/*! ./employee-planning-legend-dialog.component.html */ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.html"),
            styles: [__webpack_require__(/*! ./employee-planning-legend-dialog.component.scss */ "./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeePlanningLegendDialogComponent);
    return EmployeePlanningLegendDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ })

}]);
//# sourceMappingURL=default~human-resources-employee-planning-employee-planning-module~human-resources-human-resources-m~95477e71.js.map