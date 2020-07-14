(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-technical-receipt-technical-receipt-module"],{

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

/***/ "./node_modules/primeng/components/progressbar/progressbar.js":
/*!********************************************************************!*\
  !*** ./node_modules/primeng/components/progressbar/progressbar.js ***!
  \********************************************************************/
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
var ProgressBar = /** @class */ (function () {
    function ProgressBar() {
        this.showValue = true;
        this.unit = '%';
        this.mode = 'determinate';
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProgressBar.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ProgressBar.prototype, "showValue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProgressBar.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressBar.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressBar.prototype, "unit", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressBar.prototype, "mode", void 0);
    ProgressBar = __decorate([
        core_1.Component({
            selector: 'p-progressBar',
            template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" role=\"progressbar\" aria-valuemin=\"0\" [attr.aria-valuenow]=\"value\" aria-valuemax=\"100\"\n            [ngClass]=\"{'ui-progressbar ui-widget ui-widget-content ui-corner-all': true, 'ui-progressbar-determinate': (mode === 'determinate'), 'ui-progressbar-indeterminate': (mode === 'indeterminate')}\">\n            <div class=\"ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all\" [style.width]=\"value + '%'\" style=\"display:block\"></div>\n            <div class=\"ui-progressbar-label\" [style.display]=\"value != null ? 'block' : 'none'\" *ngIf=\"showValue\">{{value}}{{unit}}</div>\n        </div>\n    "
        })
    ], ProgressBar);
    return ProgressBar;
}());
exports.ProgressBar = ProgressBar;
var ProgressBarModule = /** @class */ (function () {
    function ProgressBarModule() {
    }
    ProgressBarModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [ProgressBar],
            declarations: [ProgressBar]
        })
    ], ProgressBarModule);
    return ProgressBarModule;
}());
exports.ProgressBarModule = ProgressBarModule;
//# sourceMappingURL=progressbar.js.map

/***/ }),

/***/ "./node_modules/primeng/inputswitch.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/inputswitch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputswitch/inputswitch */ "./node_modules/primeng/components/inputswitch/inputswitch.js"));

/***/ }),

/***/ "./node_modules/primeng/progressbar.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/progressbar.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/progressbar/progressbar */ "./node_modules/primeng/components/progressbar/progressbar.js"));

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

/***/ "./src/app/main/logistics/technical-receipt/form/dialog-validate-technical-condition/dialog-validate-technical-condition.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/technical-receipt/form/dialog-validate-technical-condition/dialog-validate-technical-condition.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"25\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".validateTechnicalCondition\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"section\">\r\n      <h4 class=\"section-title\">\r\n        {{ getComponentName() + \".information\" | translate }}\r\n      </h4>\r\n\r\n      <div class=\"section-content\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".user\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"dialogFormData.user\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".date\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-calendar\r\n              showButtonBar=\"true\"\r\n              [monthNavigator]=\"true\"\r\n              [yearNavigator]=\"true\"\r\n              [yearRange]=\"sessionService.calendarYearRange\"\r\n              class=\"aw-calendar\"\r\n              [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n              [locale]=\"sessionService.calendarFormat\"\r\n              [(ngModel)]=\"dialogFormData.date\"\r\n              appendTo=\"body\"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"section\">\r\n      <h4 class=\"section-title\">\r\n        {{ getComponentName() + \".operationalStatus\" | translate }}\r\n      </h4>\r\n\r\n      <div class=\"section-content\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".oldValue\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"dialogFormData.oldValue\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".newValue\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"dialogFormData.newValue\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">{{ \"global.cancel\" | translate }}</button>\r\n\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/technical-receipt/form/dialog-validate-technical-condition/dialog-validate-technical-condition.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/technical-receipt/form/dialog-validate-technical-condition/dialog-validate-technical-condition.component.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3RlY2huaWNhbC1yZWNlaXB0L2Zvcm0vZGlhbG9nLXZhbGlkYXRlLXRlY2huaWNhbC1jb25kaXRpb24vZGlhbG9nLXZhbGlkYXRlLXRlY2huaWNhbC1jb25kaXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/logistics/technical-receipt/form/dialog-validate-technical-condition/dialog-validate-technical-condition.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/technical-receipt/form/dialog-validate-technical-condition/dialog-validate-technical-condition.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: DialogValidateTechnicalConditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogValidateTechnicalConditionComponent", function() { return DialogValidateTechnicalConditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _technical_receipt_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../technical-receipt-form.service */ "./src/app/main/logistics/technical-receipt/form/technical-receipt-form.service.ts");
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





var DialogValidateTechnicalConditionComponent = /** @class */ (function (_super) {
    __extends(DialogValidateTechnicalConditionComponent, _super);
    function DialogValidateTechnicalConditionComponent(sessionService, technicalReceiptFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'DialogValidateTechnicalConditionComponent') || this;
        _this.sessionService = sessionService;
        _this.technicalReceiptFormService = technicalReceiptFormService;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogValidateTechnicalConditionComponent.prototype.ngOnInit = function () {
        this.dialogFormData = {};
        this.dialogFormData = this.technicalReceiptFormService.loadDialogFormData();
    };
    DialogValidateTechnicalConditionComponent.prototype.validate = function () {
        this.onValidated.emit(this.dialogFormData.newValue);
        this.closeDialog();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogValidateTechnicalConditionComponent.prototype, "onValidated", void 0);
    DialogValidateTechnicalConditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-validate-technical-condition',
            template: __webpack_require__(/*! ./dialog-validate-technical-condition.component.html */ "./src/app/main/logistics/technical-receipt/form/dialog-validate-technical-condition/dialog-validate-technical-condition.component.html"),
            styles: [__webpack_require__(/*! ./dialog-validate-technical-condition.component.scss */ "./src/app/main/logistics/technical-receipt/form/dialog-validate-technical-condition/dialog-validate-technical-condition.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _technical_receipt_form_service__WEBPACK_IMPORTED_MODULE_4__["TechnicalReceiptFormService"]])
    ], DialogValidateTechnicalConditionComponent);
    return DialogValidateTechnicalConditionComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/technical-receipt/form/technical-receipt-form.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/technical-receipt/form/technical-receipt-form.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aw-component-sidebar\r\n  *ngIf=\"!isCreateOpenMode\"\r\n  [toc]=\"toc\"\r\n  [(visibility)]=\"rightSidebarVisibility\"\r\n  [ngClass]=\"{ collapsed: rightSidebarCollapsed, expanded: rightSidebarExpanded }\"\r\n></aw-component-sidebar>\r\n\r\n<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ mainInfo.partNumber }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"validateTechnicalCondition()\">\r\n      {{ componentData.componentId + \".validateTechnicalCondition\" | translate }}\r\n    </button>\r\n    <button type=\"button\" mat-raised-button (click)=\"refresh()\">\r\n      {{ \"global.refresh\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <!-- EQUIPMENT PANEL -->\r\n        <div #equipmentAnchor class=\"grid-cell--6\" (click)=\"selectPageTocEntry(component.EQUIPMENT_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.EQUIPMENT_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".equipment\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <!-- ROW 1 -->\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".partNumber\" | translate }}</label>\r\n\r\n                  <div class=\"form-control custom-control\">\r\n                    <a>{{ mainInfo.partNumber }}</a>\r\n                    <div>\r\n                      <i>{{ mainInfo.designation }}</i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".snLot\" | translate }}</label>\r\n\r\n                  <div class=\"form-control custom-control\">\r\n                    <a>{{ mainInfo.snLot }}</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".worthiness\" | translate }}</label>\r\n\r\n                  <div class=\"form-control custom-control\">\r\n                    <span class=\"alert alert--nok\">\r\n                      {{ mainInfo.worthiness }}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- ROW 2 -->\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".location\" | translate }}</label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"mainInfo.location\" />\r\n                    <i>{{ mainInfo.warehouse }}</i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".emplacement\" | translate }}</label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"mainInfo.emplacement\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".operationalStatus\" | translate }}</label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"mainInfo.operationalStatus\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- NEXT DUE DATE -->\r\n        <div #dueDate class=\"grid-cell--6\" (click)=\"selectPageTocEntry(component.DUE_DATE_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.DUE_DATE_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".nextDueDate\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableResult\r\n                class=\"aw-table2\"\r\n                [columns]=\"dueDateTableCols\"\r\n                [value]=\"dueDateTable\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- LOGISTICS RECEPTION -->\r\n        <div #reception class=\"grid-cell--6\" (click)=\"selectPageTocEntry(component.RECEPTION_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.RECEPTION_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".logisticsReception\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <!-- ROW 1 -->\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".fileNumber\" | translate }}</label>\r\n\r\n                  <div class=\"form-control custom-control\">\r\n                    <a>{{ mainInfo.fileNumber }}</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".type\" | translate }}</label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"mainInfo.type\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".status\" | translate }}</label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"mainInfo.status\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- ROW 2 -->\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".location\" | translate }}</label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"mainInfo.logisticLocation\" />\r\n                    <i>{{ mainInfo.warehouse }}</i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".releaseBy\" | translate }}</label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"mainInfo.releaseBy\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".date\" | translate }}</label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <p-calendar\r\n                      showButtonBar=\"true\"\r\n                      [monthNavigator]=\"true\"\r\n                      [yearNavigator]=\"true\"\r\n                      [yearRange]=\"sessionService.calendarYearRange\"\r\n                      class=\"aw-calendar\"\r\n                      [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                      [locale]=\"sessionService.calendarFormat\"\r\n                      [(ngModel)]=\"mainInfo.date\"\r\n                      disabled\r\n                      appendTo=\"body\"\r\n                    ></p-calendar>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- SUB ASSEMBLY AND APPLIED CONF -->\r\n        <div class=\"grid-cell--6\">\r\n          <div class=\"row\">\r\n            <div\r\n              #subAssembly\r\n              class=\"grid-cell--6 custom-height sub-assembly-padding\"\r\n              (click)=\"selectPageTocEntry(component.SUB_ASSEMBLY_ANCHOR_ID)\"\r\n            >\r\n              <div\r\n                class=\"grid-cell grid-cell--container\"\r\n                [ngClass]=\"{ active: isPageTocEntrySelected(component.SUB_ASSEMBLY_ANCHOR_ID) }\"\r\n              >\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ getComponentName() + \".subsets\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"column\">\r\n                    <div class=\"chart-container\">\r\n                      <div class=\"chart-wrapper\">\r\n                        <p-chart\r\n                          [type]=\"chartType\"\r\n                          [data]=\"chartData\"\r\n                          [options]=\"chartOptions\"\r\n                          width=\"100%\"\r\n                          height=\"100%\"\r\n                        ></p-chart>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"column legant-width\">\r\n                    <div class=\"chart-legend\">\r\n                      <div class=\"chart-legend-label\">\r\n                        <div class=\"chart-legend-label-color completed\"></div>\r\n                        {{ chartData.labels[0] }}\r\n                        <span class=\"chart-value\">{{ navigable }} </span>\r\n                      </div>\r\n\r\n                      <div class=\"chart-legend-label\">\r\n                        <div class=\"chart-legend-label-color warning\"></div>\r\n                        {{ chartData.labels[1] }}\r\n                        <span class=\"chart-value\">{{ navigableWithAlerts }} </span>\r\n                      </div>\r\n\r\n                      <div class=\"chart-legend-label\">\r\n                        <div class=\"chart-legend-label-color not-completed\"></div>\r\n                        {{ chartData.labels[2] }}\r\n                        <span class=\"chart-value\">{{ nonNavigable }} </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div\r\n              #appliedConf\r\n              class=\"grid-cell--6 custom-height applied-conf-padding\"\r\n              (click)=\"selectPageTocEntry(component.APPLIED_CONF_ANCHOR_ID)\"\r\n            >\r\n              <div\r\n                class=\"grid-cell grid-cell--container custom-width\"\r\n                [ngClass]=\"{ active: isPageTocEntrySelected(component.APPLIED_CONF_ANCHOR_ID) }\"\r\n              >\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ getComponentName() + \".applicableConfiguration\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row flex-row--justify-end\">\r\n                        <button type=\"button\" mat-raised-button (click)=\"openConfControl()\">\r\n                          {{ \"global.open\" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"column\">\r\n                    <div class=\"section margin-top-custom\">\r\n                      <div class=\"section-content\">\r\n                        <div class=\"row\">\r\n                          <div class=\"table-summary-wrapper\">\r\n                            <p-table\r\n                              [resizableColumns]=\"true\"\r\n                              class=\"aw-table-control-summary aw-table-control-summary-single-row\"\r\n                              [value]=\"configurationControlTable\"\r\n                            >\r\n                              <ng-template pTemplate=\"colgroup\">\r\n                                <colgroup>\r\n                                  <col [ngStyle]=\"{ width: '33%' }\" />\r\n                                  <col [ngStyle]=\"{ width: '33%' }\" />\r\n                                  <col [ngStyle]=\"{ width: '33%' }\" />\r\n                                </colgroup>\r\n                              </ng-template>\r\n\r\n                              <ng-template pTemplate=\"header\" let-columns>\r\n                                <tr>\r\n                                  <th [ngStyle]=\"{ 'text-align': 'center' }\">\r\n                                    {{ getComponentName() + \".ok\" | translate }}\r\n                                  </th>\r\n                                  <th [ngStyle]=\"{ 'text-align': 'center' }\">\r\n                                    {{ getComponentName() + \".warning\" | translate }}\r\n                                  </th>\r\n                                  <th [ngStyle]=\"{ 'text-align': 'center' }\">\r\n                                    {{ getComponentName() + \".nok\" | translate }}\r\n                                  </th>\r\n                                </tr>\r\n                              </ng-template>\r\n\r\n                              <ng-template pTemplate=\"body\" let-columns=\"columns\" let-rowData>\r\n                                <tr>\r\n                                  <td [ngStyle]=\"{ 'text-align': 'center' }\">\r\n                                    <span\r\n                                      class=\"control-result\"\r\n                                      [ngClass]=\"{\r\n                                        ok: rowData['nok'] == 0 && rowData['warning'] == 0 && rowData['ok'] >= 0\r\n                                      }\"\r\n                                    >\r\n                                      {{ rowData[\"ok\"] }}\r\n                                    </span>\r\n                                  </td>\r\n                                  <td [ngStyle]=\"{ 'text-align': 'center' }\">\r\n                                    <span\r\n                                      class=\"control-result\"\r\n                                      [ngClass]=\"{ warning: rowData['nok'] == 0 && rowData['warning'] > 0 }\"\r\n                                    >\r\n                                      {{ rowData[\"warning\"] }}\r\n                                    </span>\r\n                                  </td>\r\n                                  <td [ngStyle]=\"{ 'text-align': 'center' }\">\r\n                                    <span class=\"control-result\" [ngClass]=\"{ nok: rowData['nok'] > 0 }\">\r\n                                      {{ rowData[\"nok\"] }}\r\n                                    </span>\r\n                                  </td>\r\n                                </tr>\r\n                              </ng-template>\r\n                            </p-table>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Opearations -->\r\n        <div #operation class=\"grid-cell--12\" (click)=\"selectPageTocEntry(component.OPERATION_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.OPERATION_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".operations\" | translate }} ({{ operationTable.length }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".wp\" | translate }}</label>\r\n\r\n                  <div class=\"form-control custom-control\">\r\n                    <a>{{ mainInfo.wp }}</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".mroCenter\" | translate }}</label>\r\n\r\n                  <div class=\"form-control custom-control\">\r\n                    <b>{{ mainInfo.mroCenter }}</b>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".wo\" | translate }}</label>\r\n\r\n                  <div class=\"form-control custom-control\">\r\n                    <a>{{ mainInfo.wo }}</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".technicalAcceptanceTask\" | translate }}</label>\r\n\r\n                  <div class=\"form-control custom-control\">\r\n                    <a>{{ mainInfo.taskAcceptance }}</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".status\" | translate }}</label>\r\n\r\n                  <div class=\"form-control custom-control\">\r\n                    <b>{{ mainInfo.status }}</b>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".progress\" | translate }}</label>\r\n\r\n                  <div class=\"form-control custom-control\">\r\n                    <p-progressBar [value]=\"mainInfo.progress\"></p-progressBar>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableResults\r\n                class=\"aw-table2\"\r\n                [value]=\"operationTable\"\r\n                [columns]=\"operationTableCols\"\r\n                [scrollable]=\"true\"\r\n                selectionMode=\"checkbox\"\r\n                [(selection)]=\"selectedOperations\"\r\n                dataKey=\"bireOpeCode\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoadingOperationTable\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoadingOperationTable\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableResultsGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableResults.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"selectedOperations.length === 1 && !isReadOpenMode\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                      >\r\n                        {{ componentData.componentId + \".editDuration\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedOperations.length === 1 && !isReadOpenMode\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                      >\r\n                        {{ componentData.componentId + \".opeLog\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedOperations.length > 0 && !isReadOpenMode\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteOperation()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-selectButton\r\n                          class=\"woDisplayType-btn\"\r\n                          [(ngModel)]=\"tableDisplayType\"\r\n                          [options]=\"tableDisplayTypeList\"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                    <th [ngStyle]=\"{ width: '5%', 'text-align': 'center' }\" *ngIf=\"woStatus.isCritical === true\">\r\n                      {{ componentData.componentId + \".check\" | translate }}\r\n                    </th>\r\n                    <th [ngStyle]=\"{ width: '2.5%', 'text-align': 'left' }\"></th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\" [ngSwitch]=\"col.field\">\r\n                      <span *ngSwitchCase=\"'sequence'\">{{ rowData[\"opeSequence\"] }}</span>\r\n\r\n                      <a *ngSwitchCase=\"'bireOpeCode'\" (click)=\"openOperationUC(rowData)\"\r\n                        >{{ rowData[col.field] }}-{{ rowData[\"bireOpeVersion\"] }}</a\r\n                      >\r\n\r\n                      <span *ngSwitchCase=\"'opePerformedDuration'\">\r\n                        <span\r\n                          *ngIf=\"\r\n                            rowData['isOpeOnPerformed'] === false &&\r\n                            rowData['opeStatus'] !== awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&\r\n                            rowData['opeStatus'] !== awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                            !isReadOpenMode\r\n                          \"\r\n                          (click)=\"startOrEndDuration(rowData)\"\r\n                        >\r\n                          <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\r\n\r\n                          <a>\r\n                            {{ rowData[\"opePerformedDurationDisplay\"] }}\r\n                          </a>\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngIf=\"\r\n                            rowData['isOpeOnPerformed'] === true &&\r\n                            rowData['opeStatus'] !== awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&\r\n                            rowData['opeStatus'] !== awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE\r\n                          \"\r\n                          (click)=\"startOrEndDuration(rowData)\"\r\n                        >\r\n                          <i class=\"fa fa-stop\" aria-hidden=\"true\"></i>\r\n\r\n                          <a style=\"color: rgb(0, 200, 0); font-weight: bold\">\r\n                            {{ rowData[\"opePerformedDurationDisplay\"] }}\r\n                          </a>\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngIf=\"\r\n                            (rowData['isOpeOnPerformed'] === false &&\r\n                              (rowData['opeStatus'] === awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED ||\r\n                                rowData['opeStatus'] === awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE)) ||\r\n                            isReadOpenMode\r\n                          \"\r\n                        >\r\n                          <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\r\n\r\n                          <span>\r\n                            {{ rowData[\"opePerformedDurationDisplay\"] }}\r\n                          </span>\r\n                        </span>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'opePerformedElapsed'\">\r\n                        <span *ngIf=\"rowData['isOpeOnElapsed'] === false\">\r\n                          {{ rowData[\"opePerformedElapsedDisplay\"] }}\r\n                        </span>\r\n\r\n                        <span *ngIf=\"rowData['isOpeOnElapsed'] === true\" (click)=\"startOrEndElapsed(rowData)\">\r\n                          <i class=\"fa fa-stop\" aria-hidden=\"true\"></i>\r\n\r\n                          <a style=\"color: rgb(0, 200, 0); font-weight: bold\">\r\n                            {{ rowData[\"opePerformedElapsedDisplay\"] }}\r\n                          </a>\r\n                        </span>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'achievement'\">\r\n                        <span\r\n                          *ngIf=\"\r\n                            rowData['opeStatus'] !== awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&\r\n                            rowData['opeStatus'] !== awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                            woStatus.status !== awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE\r\n                          \"\r\n                        >\r\n                          <i class=\"fa fa-unlock\" aria-hidden=\"true\" *ngIf=\"isReadOpenMode\"></i>\r\n                          <i\r\n                            class=\"fa fa-unlock\"\r\n                            aria-hidden=\"true\"\r\n                            *ngIf=\"!isReadOpenMode\"\r\n                            (click)=\"performOperation(rowData, false)\"\r\n                          ></i>\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngIf=\"\r\n                            rowData['opeStatus'] === awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&\r\n                            woStatus.status !== awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                            woStatus.status !== awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED\r\n                          \"\r\n                        >\r\n                          <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\" *ngIf=\"isReadOpenMode\"></i>\r\n                          <i\r\n                            class=\"fa fa-unlock-alt\"\r\n                            aria-hidden=\"true\"\r\n                            *ngIf=\"!isReadOpenMode\"\r\n                            (click)=\"performOperation(rowData, false)\"\r\n                          ></i>\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngIf=\"\r\n                            rowData['opeStatus'] === awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                            woStatus.status !== awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                            woStatus.status !== awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED\r\n                          \"\r\n                        >\r\n                          <i class=\"fa fa-lock\" aria-hidden=\"true\" *ngIf=\"isReadOpenMode\"></i>\r\n                          <i\r\n                            class=\"fa fa-lock\"\r\n                            aria-hidden=\"true\"\r\n                            *ngIf=\"!isReadOpenMode\"\r\n                            (click)=\"performOperation(rowData, false)\"\r\n                          ></i>\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngIf=\"\r\n                            (rowData['opeStatus'] === awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE ||\r\n                              rowData['opeStatus'] === awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED) &&\r\n                            (woStatus.status === awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE ||\r\n                              woStatus.status === awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED)\r\n                          \"\r\n                        >\r\n                          <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                      </span>\r\n\r\n                      <p-progressBar\r\n                        *ngSwitchCase=\"'opeStatusDisplay'\"\r\n                        [ngClass]=\"rowData[col.field]\"\r\n                        [value]=\"rowData['opeStatusPercent']\"\r\n                      >\r\n                      </p-progressBar>\r\n\r\n                      <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                    </td>\r\n\r\n                    <td [ngStyle]=\"{ width: '5%', 'text-align': 'center' }\" *ngIf=\"woStatus.isCritical === true\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          rowData['opeStatus'] === awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&\r\n                          woStatus.status === awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&\r\n                          rowData['isCriticalTask'] === true\r\n                        \"\r\n                      >\r\n                        <i class=\"fa fa-times\" aria-hidden=\"true\" *ngIf=\"isReadOpenMode\"></i>\r\n                        <i\r\n                          class=\"fa fa-times\"\r\n                          aria-hidden=\"true\"\r\n                          *ngIf=\"!isReadOpenMode\"\r\n                          (click)=\"checkOperation(rowData, false)\"\r\n                        ></i>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          rowData['opeStatus'] === awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                          woStatus.status === awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&\r\n                          rowData['isCriticalTask'] === true\r\n                        \"\r\n                      >\r\n                        <i class=\"fa fa-check\" aria-hidden=\"true\" *ngIf=\"isReadOpenMode\"></i>\r\n                        <i\r\n                          class=\"fa fa-check\"\r\n                          aria-hidden=\"true\"\r\n                          *ngIf=\"!isReadOpenMode\"\r\n                          (click)=\"checkOperation(rowData, false)\"\r\n                        ></i>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          rowData['opeStatus'] === awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                          woStatus.status === awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                          rowData['isCriticalTask'] === true\r\n                        \"\r\n                      >\r\n                        <i class=\"fa fa-check\" aria-hidden=\"true\" *ngIf=\"isReadOpenMode\"></i>\r\n                        <i class=\"fa fa-check\" aria-hidden=\"true\" *ngIf=\"!isReadOpenMode\"></i>\r\n                      </span>\r\n                    </td>\r\n\r\n                    <td\r\n                      class=\"row-expand-wrapper\"\r\n                      [pRowToggler]=\"rowData\"\r\n                      [ngStyle]=\"{ width: '2.5%', 'text-align': 'center' }\"\r\n                    >\r\n                      <i\r\n                        class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n                        [ngClass]=\"rowData._expand ? 'fa-minus' : 'fa-plus'\"\r\n                        aria-hidden=\"true\"\r\n                        pTooltip=\"{{ 'global.showTableRowDetails' | translate }}\"\r\n                        tooltipPosition=\"top\"\r\n                        (click)=\"toggleWorkPackageExpand(rowData)\"\r\n                      ></i>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n                  <tr class=\"row-expanded\">\r\n                    <td [attr.colspan]=\"columns.length + 2\">\r\n                      <div class=\"column forced-backgroung\">\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".\" + \"startDate\" | translate }}\r\n                            </label>\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                type=\"text\"\r\n                                class=\"aw-input\"\r\n                                [disabled]=\"true\"\r\n                                [(ngModel)]=\"rowData.opeStartDateDisplay\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".\" + \"performedOn\" | translate }}\r\n                            </label>\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                type=\"text\"\r\n                                class=\"aw-input\"\r\n                                [disabled]=\"true\"\r\n                                [(ngModel)]=\"rowData.opePerformedOnDisplay\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".\" + \"performedBy\" | translate }}\r\n                            </label>\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                type=\"text\"\r\n                                class=\"aw-input\"\r\n                                [disabled]=\"true\"\r\n                                [(ngModel)]=\"rowData.opePerformedLastByDisplay\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".\" + \"checkedOn\" | translate }}\r\n                            </label>\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                type=\"text\"\r\n                                class=\"aw-input\"\r\n                                [disabled]=\"true\"\r\n                                [(ngModel)]=\"rowData.opeCheckOnDisplay\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".\" + \"checkedBy\" | translate }}\r\n                            </label>\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                type=\"text\"\r\n                                class=\"aw-input\"\r\n                                [disabled]=\"true\"\r\n                                [(ngModel)]=\"rowData.opeCheckByDisplay\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".\" + \"stdDuration\" | translate }}\r\n                            </label>\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                type=\"text\"\r\n                                class=\"aw-input\"\r\n                                [disabled]=\"true\"\r\n                                [(ngModel)]=\"rowData.opeStdDurationDisplay\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".\" + \"qualification\" | translate }}\r\n                            </label>\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                type=\"text\"\r\n                                class=\"aw-input\"\r\n                                [disabled]=\"true\"\r\n                                [(ngModel)]=\"rowData.opeQualification\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- COMMENTS -->\r\n        <div #comment class=\"grid-cell--6\" (click)=\"selectPageTocEntry(component.COMMENT_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.COMMENT_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".comments\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content  grid-cell-content-with-section\">\r\n              <div class=\"aw-table-actions action-list\">\r\n                <button\r\n                  *ngIf=\"!isCommentEdit && !isReadOpenMode\"\r\n                  type=\"button\"\r\n                  mat-raised-button\r\n                  (click)=\"editComments()\"\r\n                >\r\n                  {{ \"global.edit\" | translate }}\r\n                </button>\r\n\r\n                <button *ngIf=\"isCommentEdit\" type=\"button\" color=\"primary\" mat-raised-button (click)=\"saveComents()\">\r\n                  {{ \"global.save\" | translate }}\r\n                </button>\r\n              </div>\r\n              <div class=\"column\">\r\n                <div class=\"row\">\r\n                  <!-- Comments -->\r\n                  <div class=\"form-group  grid-cell--6\" [ngClass]=\"{ required: !isCommentEdit }\">\r\n                    <div class=\"form-control\">\r\n                      <textarea\r\n                        class=\"aw-textarea\"\r\n                        [rows]=\"2\"\r\n                        pInputTextarea\r\n                        [(ngModel)]=\"woComments\"\r\n                        [disabled]=\"!isCommentEdit\"\r\n                      ></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Additional Work -->\r\n        <div #additionalWork class=\"grid-cell--6\" (click)=\"selectPageTocEntry(component.ADDITIONAL_WORK_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.ADDITIONAL_WORK_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".additionalWork\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content  grid-cell-content-with-section\">\r\n              <div class=\"aw-table-actions action-list\">\r\n                <button\r\n                  *ngIf=\"!isCommentEdit && !isReadOpenMode\"\r\n                  type=\"button\"\r\n                  mat-raised-button\r\n                  (click)=\"editComments()\"\r\n                >\r\n                  {{ \"global.edit\" | translate }}\r\n                </button>\r\n\r\n                <button *ngIf=\"isCommentEdit\" type=\"button\" color=\"primary\" mat-raised-button (click)=\"saveComents()\">\r\n                  {{ \"global.save\" | translate }}\r\n                </button>\r\n              </div>\r\n              <div class=\"column\">\r\n                <div class=\"row\">\r\n                  <!-- Comments -->\r\n                  <div class=\"form-group  grid-cell--6\" [ngClass]=\"{ required: !isCommentEdit }\">\r\n                    <div class=\"form-control\">\r\n                      <textarea\r\n                        class=\"aw-textarea\"\r\n                        [rows]=\"2\"\r\n                        pInputTextarea\r\n                        [(ngModel)]=\"woComments\"\r\n                        [disabled]=\"!isCommentEdit\"\r\n                      ></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-validate-technical-condition\r\n  *ngIf=\"showValidateTechnicalConditionDialog\"\r\n  [(display)]=\"showValidateTechnicalConditionDialog\"\r\n  (onValidated)=\"onValidateTechnicalCondition($event)\"\r\n></aw-dialog-validate-technical-condition>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/technical-receipt/form/technical-receipt-form.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/technical-receipt/form/technical-receipt-form.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .alert {\n  display: inline-block;\n  text-transform: uppercase;\n  font-weight: 600;\n  width: 8em;\n  text-align: center; }\n  :host .alert.alert--ok {\n    background-color: #4caf50; }\n  :host .alert.alert--warning {\n    background-color: #ffc107; }\n  :host .alert.alert--nok {\n    background-color: #f6685e; }\n  :host .alert.alert--none {\n    background-color: #c8d4d6; }\n  :host .custom-control {\n  padding-top: 0.8em; }\n  :host .chart-container {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: auto;\n  margin-left: auto; }\n  @media screen and (max-width: 1280px) {\n    :host .chart-container {\n      flex-direction: column; } }\n  :host .chart-container .chart-legend {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 8px; }\n  :host .chart-container .chart-legend .chart-legend-label {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n  :host .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n        height: 0.75rem;\n        margin-right: 8px;\n        width: 2rem;\n        margin-top: 0.7em; }\n  :host .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.completed {\n          background-color: #4caf50; }\n  :host .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.warning {\n          background-color: #ffc107; }\n  :host .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-completed {\n          background-color: #f6685e; }\n  :host .chart-container .chart-legend .chart-value {\n      font-weight: 700;\n      margin-left: 8px; }\n  :host .chart-container .chart-wrapper {\n    position: relative;\n    height: 8rem;\n    width: 10rem; }\n  :host div.control-result span {\n  padding: calc(8px - 4px); }\n  :host div.control-result span.value {\n    background-color: #f0f0f0;\n    text-align: center;\n    float: right;\n    min-width: 3em;\n    font-weight: normal !important;\n    margin-right: 2em; }\n  :host div.control-result span.value.ok {\n      background-color: #4caf50; }\n  :host div.control-result span.value.warning {\n      background-color: #ffc107; }\n  :host div.control-result span.value.nok {\n      background-color: #f6685e; }\n  :host .custom-width {\n  height: 30.3em; }\n  :host .custom-height {\n  height: 19em; }\n  :host .action-list {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 2px; }\n  :host .action-list .aw-btn {\n    margin-left: 8px; }\n  :host .action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n  :host .margin-top-custom {\n  margin-top: 3em !important; }\n  :host .sub-assembly-padding {\n  padding: 0px !important; }\n  :host .applied-conf-padding {\n  padding: 0 0 0 16px !important; }\n  :host .legant-width {\n  width: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvdGVjaG5pY2FsLXJlY2VpcHQvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXHRlY2huaWNhbC1yZWNlaXB0XFxmb3JtXFx0ZWNobmljYWwtcmVjZWlwdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy90ZWNobmljYWwtcmVjZWlwdC9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvdGVjaG5pY2FsLXJlY2VpcHQvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7RUFOdEI7SUFTTSx5QkNTZ0IsRUFBQTtFRGxCdEI7SUFhTSx5QkNNVSxFQUFBO0VEbkJoQjtJQWlCTSx5QkNJYyxFQUFBO0VEckJwQjtJQXFCTSx5QkNHUyxFQUFBO0VEeEJmO0VBMEJJLGtCQUFrQixFQUFBO0VBMUJ0QjtFQTZFSSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7RUFqRGpCO0lBOUJKO01BK0JNLHNCQUFzQixFQUFBLEVBaUR6QjtFQWhGSDtJRWVFLGFBQWE7SUFDYixzQkFBc0I7SUZxQmxCLHVCQUF1QjtJQUN2QixnQkNHWSxFQUFBO0VEekNsQjtNRW9CRSxhQUFhO01BQ2IsbUJBQW1CO01Gc0JiLG1CQUFtQixFQUFBO0VBM0MzQjtRQThDVSxlQUFlO1FBQ2YsaUJDTlE7UURPUixXQUFXO1FBQ1gsaUJBQWlCLEVBQUE7RUFqRDNCO1VBb0RZLHlCQ2xDVSxFQUFBO0VEbEJ0QjtVQXdEWSx5QkNyQ0ksRUFBQTtFRG5CaEI7VUE0RFkseUJDdkNRLEVBQUE7RURyQnBCO01Ba0VRLGdCQUFnQjtNQUNoQixnQkMxQlUsRUFBQTtFRHpDbEI7SUF3RU0sa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZLEVBQUE7RUExRWxCO0VBb0ZNLHdCQUFxQyxFQUFBO0VBcEYzQztJQXVGUSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLGlCQUFpQixFQUFBO0VBNUZ6QjtNQStGVSx5QkM3RVksRUFBQTtFRGxCdEI7TUFtR1UseUJDaEZNLEVBQUE7RURuQmhCO01BdUdVLHlCQ2xGVSxFQUFBO0VEckJwQjtFQThHSSxjQUFjLEVBQUE7RUE5R2xCO0VBaUhJLFlBQVksRUFBQTtFQWpIaEI7RUFxSEksYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7RUF2SG5CO0lBMEhNLGdCQ2pGWSxFQUFBO0VEekNsQjtNQTZIUSxjQUFjLEVBQUE7RUE3SHRCO0VBbUlJLDBCQUEwQixFQUFBO0VBbkk5QjtFQXVJSSx1QkFBdUIsRUFBQTtFQXZJM0I7RUEySUksOEJBQThCLEVBQUE7RUEzSWxDO0VBK0lJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3RlY2huaWNhbC1yZWNlaXB0L2Zvcm0vdGVjaG5pY2FsLXJlY2VpcHQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5hbGVydCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHdpZHRoOiA4ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW5vbmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZy10b3A6IDAuOGVtO1xyXG4gIH1cclxuXHJcbiAgLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhcnQtbGVnZW5kIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgIC5jaGFydC1sZWdlbmQtbGFiZWwge1xyXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5jaGFydC1sZWdlbmQtbGFiZWwtY29sb3Ige1xyXG4gICAgICAgICAgaGVpZ2h0OiAwLjc1cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjdlbTtcclxuXHJcbiAgICAgICAgICAmLmNvbXBsZXRlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi53YXJuaW5nIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLm5vdC1jb21wbGV0ZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGFydC12YWx1ZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGFydC13cmFwcGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIH1cclxuXHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcblxyXG4gIGRpdi5jb250cm9sLXJlc3VsdCB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgcGFkZGluZzogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC0gNHB4KTtcclxuXHJcbiAgICAgICYudmFsdWUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtaW4td2lkdGg6IDNlbTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcblxyXG4gICAgICAgICYub2sge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYud2FybmluZyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5ub2sge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXdpZHRoIHtcclxuICAgIGhlaWdodDogMzAuM2VtO1xyXG4gIH1cclxuICAuY3VzdG9tLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDE5ZW07XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcblxyXG4gICAgLmF3LWJ0biB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hcmdpbi10b3AtY3VzdG9tIHtcclxuICAgIG1hcmdpbi10b3A6IDNlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnN1Yi1hc3NlbWJseS1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmFwcGxpZWQtY29uZi1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5sZWdhbnQtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/logistics/technical-receipt/form/technical-receipt-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/logistics/technical-receipt/form/technical-receipt-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TechnicalReceiptFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalReceiptFormComponent", function() { return TechnicalReceiptFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _technical_receipt_form_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./technical-receipt-form.service */ "./src/app/main/logistics/technical-receipt/form/technical-receipt-form.service.ts");
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


















var TechnicalReceiptFormComponent = /** @class */ (function (_super) {
    __extends(TechnicalReceiptFormComponent, _super);
    function TechnicalReceiptFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, pageTocService, sessionService, translateService, technicalReceiptFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.technicalReceiptFormService = technicalReceiptFormService;
        _this.navigable = 1;
        _this.navigableWithAlerts = 0;
        _this.nonNavigable = 0;
        _this.operationSelectedIndex = -1;
        _this.isCommentEdit = false;
        _this.workOrder = {};
        _super.prototype.registerPageTocEntryObservable.call(_this);
        _this.component = TechnicalReceiptFormComponent_1;
        _this.awPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"];
        return _this;
    }
    TechnicalReceiptFormComponent_1 = TechnicalReceiptFormComponent;
    TechnicalReceiptFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_TECHNICAL_RECEIPT_FORM;
    };
    TechnicalReceiptFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setTableOfContent();
        this.mainInfo = {};
        this.dueDateTable = [];
        this.operationTable = [];
        this.selectedOperations = [];
        this.configurationControlTable = [];
        this.woStatus = {
            costAndDuration: {}
        };
        this.chartData = {
            datasets: [],
            labels: []
        };
        this.initChart();
        this.dueDateTableCols = [
            { field: 'value', alignment: 'left', width: '10%' },
            { field: 'type', alignment: 'left', width: '15%' },
            { field: 'designation', alignment: 'left', width: '75%' }
        ];
        this.operationTableCols = [
            { field: 'sequence', alignment: 'center', width: '2.5%' },
            { field: 'bireOpeCode', alignment: 'center', width: '10%' },
            { field: 'opeDesignation', alignment: 'left', width: '30%' },
            { field: 'opePerformedDuration', alignment: 'center', width: '10%' },
            { field: 'opePerformedElapsed', alignment: 'center', width: '10%' },
            { field: 'achievement', alignment: 'center', width: '7.5%' },
            { field: 'opeStatusDisplay', alignment: 'center', width: '7.5%' }
        ];
        this.loadTechnicalRecepitData();
        this.bidmWorkOrderId = this.technicalReceiptFormService.loadBidmWorkOrderID();
        this.loadWorkOrder();
    };
    /***************************************
     * SETTING TOC
     ***************************************/
    TechnicalReceiptFormComponent.prototype.setTableOfContent = function () {
        var _this = this;
        var mainDataKey = this.getTranslateKey('equipment');
        var receptionKey = this.getTranslateKey('logisticsReception');
        var operationKey = this.getTranslateKey('operations');
        var dueDateKey = this.getTranslateKey('nextDueDate');
        var subAssemblyKey = this.getTranslateKey('subsets');
        var appliedConfKey = this.getTranslateKey('applicableConfiguration');
        var commentKey = this.getTranslateKey('comments');
        var additionalWorkKey = this.getTranslateKey('additionalWork');
        this.translateService
            .get([
            mainDataKey,
            receptionKey,
            operationKey,
            dueDateKey,
            subAssemblyKey,
            appliedConfKey,
            commentKey,
            additionalWorkKey
        ])
            .subscribe(function (results) {
            var equipmentLabel = !!results ? results[mainDataKey] : 'Equipment';
            var receptionLabel = !!results ? results[receptionKey] : 'Logistics Reception';
            var operationLabel = !!results ? results[operationKey] : 'Operations';
            var dueDateLabel = !!results ? results[dueDateKey] : 'Next Due Date';
            var subAssemblyLabel = !!results ? results[subAssemblyKey] : 'Sub-assemblies';
            var appliedConfLabel = !!results ? results[appliedConfKey] : 'Applied Configuration';
            var commentLabel = !!results ? results[commentKey] : 'Comment';
            var additionalWorkLabel = !!results ? results[additionalWorkKey] : 'Additional Work';
            _this.toc = [
                {
                    id: 'equipmentAnchor',
                    anchor: _this.equipmentAnchor,
                    label: equipmentLabel
                },
                {
                    id: 'dueDate',
                    anchor: _this.dueDate,
                    label: dueDateLabel
                },
                {
                    id: 'reception',
                    anchor: _this.reception,
                    label: receptionLabel
                },
                {
                    id: 'subAssembly',
                    anchor: _this.subAssembly,
                    label: subAssemblyLabel
                },
                {
                    id: 'appliedConf',
                    anchor: _this.appliedConf,
                    label: appliedConfLabel
                },
                {
                    id: 'operation',
                    anchor: _this.operation,
                    label: operationLabel
                },
                {
                    id: 'comment',
                    anchor: _this.comment,
                    label: commentLabel
                },
                {
                    id: 'additionalWork',
                    anchor: _this.additionalWork,
                    label: additionalWorkLabel
                }
            ];
            _super.prototype.selectPageTocEntry.call(_this, _this.component.EQUIPMENT_ANCHOR_ID);
        });
    };
    /**********************************
     * Load Form Data
     **********************************/
    TechnicalReceiptFormComponent.prototype.loadTechnicalRecepitData = function () {
        this.mainInfo = this.technicalReceiptFormService.loadTechnicalRecepitData();
        this.dueDateTable = this.technicalReceiptFormService.loadDueDateData();
        this.configurationControlTable = this.technicalReceiptFormService.loadConfigurationData();
        if (!!this.mainInfo.partNumber) {
            this.displayComponentContext(this.mainInfo.partNumber, this.isCreateOpenMode);
        }
    };
    /**********************************
     * CHART OPERATIONS
     **********************************/
    TechnicalReceiptFormComponent.prototype.initChart = function () {
        this.chartType = 'pie';
        this.chartVisible = false;
        this.chartData = {
            datasets: [
                {
                    data: [1, 0, 0],
                    backgroundColor: [_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].COLOR_GREEN, _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].COLOR_ORANGE, _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].COLOR_RED],
                    hoverBackgroundColor: [_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].COLOR_GREEN, _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].COLOR_ORANGE, _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].COLOR_RED]
                }
            ],
            labels: []
        };
        this.setChartLabels();
        this.setChartOptions();
    };
    TechnicalReceiptFormComponent.prototype.setChartLabels = function () {
        var _this = this;
        var navigable = this.getTranslateKey('navigable');
        var navigableWithAlerts = this.getTranslateKey('navigableWithAlerts');
        var nonNavigable = this.getTranslateKey('nonNavigable');
        this.translateService.get([navigable, navigableWithAlerts, nonNavigable]).subscribe(function (results) {
            var navigableLabel = results ? results[navigable] : 'Navigable';
            var navigableWithAlertsLabel = results ? results[navigableWithAlerts] : 'Navigable With Alerts';
            var nonNavigableLabel = results ? results[nonNavigable] : 'Non Navigable';
            _this.chartData.labels = [navigableLabel, navigableWithAlertsLabel, nonNavigableLabel];
        });
    };
    TechnicalReceiptFormComponent.prototype.setChartOptions = function () {
        this.chartOptions = {
            legend: {
                display: false
            },
            tooltips: {
                bodyFontColor: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].COLOR_BACKGROUND_PRIMARY
            }
        };
    };
    /**************************************************
     * LOAD WORK ORDER
     **************************************************/
    TechnicalReceiptFormComponent.prototype.loadWorkOrder = function () {
        var _this = this;
        this.isLoadingOperationsTable = true;
        this.technicalReceiptFormService.findBidmWorkOrder(this.bidmWorkOrderId).subscribe(function (result) {
            if (result === null) {
                _this.messageService.showErrorMessage(_this.getTranslateKey('notFound'));
            }
            else {
                _this.displayComponentContext(_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__["StringUtils"].orEmpty(result.bidmWorkOrder.woCode), false);
                _this.workOrder = result.bidmWorkOrder;
                _this.woAdditionalWork = result.bidmWorkOrder.woAdditionalWork;
                _this.woComments = result.bidmWorkOrder.woComments;
                _this.relatedItem = result.relatedItem;
                _this.woItemDTO = {
                    familyCode: _this.workOrder.bireItemFamilyCode,
                    variantCode: _this.workOrder.bireItemVariantCode,
                    chapter: _this.workOrder.bireItemChapter,
                    section: _this.workOrder.bireItemSection,
                    subject: _this.workOrder.bireItemSubject,
                    sheet: _this.workOrder.bireItemSheet,
                    marks: _this.workOrder.bireItemMarks,
                    structureType: _this.awPropertiesConstants.STRUCTURE_TYPE_IPC_KEY
                };
                var bireOperationDataDTO_1 = 'bireOperationData'; // #TODO: interface to be declared
                _this.operationTable = [];
                if (result.workOrderStatusDetail.bidmOperationDataList) {
                    result.workOrderStatusDetail.bidmOperationDataList.forEach(function (bidmOperation) {
                        var jobCardOperation = bidmOperation;
                        jobCardOperation.opeDesignation = bidmOperation[bireOperationDataDTO_1].ope_DESIGNATION;
                        jobCardOperation.opeQualification = bidmOperation[bireOperationDataDTO_1].ope_QUALIFICATION;
                        jobCardOperation.opeSequence = bidmOperation[bireOperationDataDTO_1].ope_SEQUENCE_NUMBER;
                        jobCardOperation.isOpeOnPerformed = false;
                        jobCardOperation.isOpeOnElapsed = false;
                        jobCardOperation.isCriticalTask = result.workOrderStatusDetail.isCritical;
                        _this.operationTable.push(jobCardOperation);
                    });
                }
                _this.initOperationTable();
                _this.isLoadingOperationsTable = false;
            }
        });
    };
    TechnicalReceiptFormComponent.prototype.initOperationTable = function () {
        var _this = this;
        var opeCheckUsers = [];
        var opePerformedUsers = [];
        var operationsList = [];
        this.operationTable.forEach(function (operationRow) {
            if (operationRow.opeStatus) {
                if (operationRow.opeStatus !== _this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE) {
                    _this.isWoNeedCheck = false;
                }
                operationRow.opeStatusDisplay = operationRow.opeStatus.slice(2);
            }
            if (operationRow.opeOpeningDate) {
                operationRow.opeStartDateDisplay = _this.getFullDateFormatWithDate(operationRow.opeOpeningDate);
            }
            if (operationRow.opeCheckedOn) {
                operationRow.opeCheckOnDisplay = _this.getFullDateFormatWithDate(operationRow.opeCheckedOn);
            }
            var bireOperationDataDTO = 'bireOperationData';
            if (operationRow[bireOperationDataDTO].ope_DURATION_TIME) {
                _this.changeOpeStdDurationDisplay(operationRow, operationRow[bireOperationDataDTO].ope_DURATION_TIME);
            }
            else {
                var noDurationTime = 0;
                _this.changeOpeStdDurationDisplay(operationRow, noDurationTime);
            }
            if (operationRow.opePerformedOn) {
                operationRow.opePerformedOnDisplay = _this.getFullDateFormatWithDate(operationRow.opePerformedOn);
            }
            // initialize performed Duration and Elapsed duration
            if (!operationRow.opePerformedDuration && !operationRow.opePerformedElapsed) {
                operationRow.opePerformedDuration = 0;
                operationRow.opePerformedElapsed = 0;
            }
            _this.changeOpePerformedDurationDisplay(operationRow);
            _this.changeOpePerformedElapsedDisplay(operationRow);
            // create list of userDTOId for checkBy
            if (operationRow.opeCheckedBy) {
                var userDtoId = {
                    userId: operationRow.opeCheckedBy
                };
                opeCheckUsers.push(userDtoId);
            }
            // create list of userDTOId for performedBy
            if (operationRow.opePerformedLastBy) {
                var userDtoId = {
                    userId: operationRow.opePerformedLastBy
                };
                opePerformedUsers.push(userDtoId);
            }
            // create list of operation
            if (operationRow) {
                operationsList.push(operationRow);
            }
        });
        var observableListCheckBy = [];
        var observableListPerformedBy = [];
        var observableListStatusPercent = [];
        opeCheckUsers.forEach(function (user) {
            observableListCheckBy.push(_this.technicalReceiptFormService.findUserById(user));
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(observableListCheckBy).subscribe(function (userCheckByList) {
            var _loop_1 = function (i) {
                _this.operationTable[i].opeCheckedBy = userCheckByList[i].userId;
                if (!!userCheckByList[i].employeeId) {
                    _this.technicalReceiptFormService
                        .getEmployeeById(Number(userCheckByList[i].employeeId))
                        .subscribe(function (employee) {
                        _this.operationTable[i].opeCheckByDisplay = _this.getEmployeeText(employee, userCheckByList[i]);
                    });
                }
                else {
                    _this.operationTable[i].opeCheckByDisplay = _this.getUserText(userCheckByList[i]);
                }
            };
            for (var i = 0; i < userCheckByList.length; i++) {
                _loop_1(i);
            }
        });
        opePerformedUsers.forEach(function (user) {
            observableListPerformedBy.push(_this.technicalReceiptFormService.findUserById(user));
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(observableListPerformedBy).subscribe(function (userPerformedByList) {
            var _loop_2 = function (i) {
                _this.operationTable[i].opePerformedLastBy = userPerformedByList[i].userId;
                if (!!userPerformedByList[i].employeeId) {
                    _this.technicalReceiptFormService
                        .getEmployeeById(Number(userPerformedByList[i].employeeId))
                        .subscribe(function (employee) {
                        _this.operationTable[i].opePerformedLastByDisplay = _this.getEmployeeText(employee, userPerformedByList[i]);
                    });
                }
                else {
                    _this.operationTable[i].opePerformedLastByDisplay = _this.getUserText(userPerformedByList[i]);
                }
            };
            for (var i = 0; i < userPerformedByList.length; i++) {
                _loop_2(i);
            }
        });
        operationsList.forEach(function (ope) {
            var bireOpeRow = 'bireOperationData';
            var bireOperationDtoRow = {
                opeDurationTime: ope[bireOpeRow].ope_DURATION_TIME
            };
            var progressFromOperationStatusInput = {
                bireOperationDto: bireOperationDtoRow,
                bidmOperationDto: ope
            };
            observableListStatusPercent.push(_this.technicalReceiptFormService.getProgressFromOperationStatus(progressFromOperationStatusInput));
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(observableListStatusPercent).subscribe(function (statusPercentList) {
            for (var i = 0; i < statusPercentList.length; i++) {
                _this.operationTable[i].opeStatusPercent = Math.floor(statusPercentList[i]).toString();
            }
        });
        this.operationTable.sort(function (a, b) {
            if (a.opeSequence !== undefined && b.opeSequence !== undefined && a.opeSequence !== b.opeSequence) {
                return a.opeSequence - b.opeSequence;
            }
            else {
                if (!!a.bireOpeCode && !!b.bireOpeCode) {
                    var boll = a.bireOpeCode.localeCompare(b.bireOpeCode);
                    return boll;
                }
                else {
                    return 0;
                }
            }
        });
    };
    TechnicalReceiptFormComponent.prototype.changeOpePerformedElapsedDisplay = function (row) {
        if (row.opePerformedElapsed !== undefined) {
            row.opePerformedElapsedDisplay = this.timeToDisplay(row.opePerformedElapsed);
        }
    };
    TechnicalReceiptFormComponent.prototype.changeOpePerformedDurationDisplay = function (row) {
        if (row.opePerformedDuration !== undefined) {
            row.opePerformedDurationDisplay = this.timeToDisplay(row.opePerformedDuration);
        }
    };
    TechnicalReceiptFormComponent.prototype.getEmployeeText = function (employee, user) {
        if (employee.employeeNumber) {
            var opeDisplay = employee.employeeNumber + " (" + user.firstname + " " + user.lastname + ")";
            return opeDisplay;
        }
        else {
            var opeDisplay = user.firstname + " " + user.lastname;
            return opeDisplay;
        }
    };
    TechnicalReceiptFormComponent.prototype.getUserText = function (user) {
        var opeDisplay = user.firstname + " " + user.lastname;
        return opeDisplay;
    };
    TechnicalReceiptFormComponent.prototype.changeOpeStdDurationDisplay = function (row, num) {
        if (num !== undefined) {
            var durationTimeInmillisecond = 3600000;
            row.opeStdDurationDisplay = this.timeToDisplay(num * durationTimeInmillisecond);
        }
    };
    TechnicalReceiptFormComponent.prototype.timeToDisplay = function (millisecond) {
        var secondInmillisecond = 1000;
        var hourInSecond = 3600;
        var minuteInSecond = 60;
        var secondModulo = 60;
        var check = 10;
        var second = Math.floor(millisecond / secondInmillisecond);
        var hours = Math.floor(second / hourInSecond);
        var minutes = Math.floor((second - hours * hourInSecond) / minuteInSecond);
        var seconds = second % secondModulo;
        var minutesDisplay = minutes.toString();
        var secondsDisplay = seconds.toString();
        if (minutes < check || seconds < check) {
            if (minutes < check) {
                minutesDisplay = "0" + minutes;
            }
            if (seconds < check) {
                secondsDisplay = "0" + seconds;
            }
            var displayLessTen = hours + ":" + minutesDisplay + ":" + secondsDisplay;
            return displayLessTen;
        }
        var display = hours + ":" + minutesDisplay + ":" + secondsDisplay;
        return display;
    };
    TechnicalReceiptFormComponent.prototype.getFullDateFormatWithDate = function (date) {
        var dateDisplay = moment__WEBPACK_IMPORTED_MODULE_2__(date);
        return dateDisplay.format('MM/DD/YYYY HH:mm');
    };
    TechnicalReceiptFormComponent.prototype.openConfControl = function () {
        // TODO
    };
    TechnicalReceiptFormComponent.prototype.validateTechnicalCondition = function () {
        this.showValidateTechnicalConditionDialog = true;
    };
    TechnicalReceiptFormComponent.prototype.onValidateTechnicalCondition = function (ev) {
        this.mainInfo.operationalStatus = ev;
    };
    TechnicalReceiptFormComponent.prototype.refresh = function () {
        // TODO
    };
    TechnicalReceiptFormComponent.prototype.deleteOperation = function () {
        // #TODO
    };
    TechnicalReceiptFormComponent.prototype.editComments = function () {
        this.isCommentEdit = true;
    };
    TechnicalReceiptFormComponent.prototype.saveComents = function () {
        // TODO
        this.isCommentEdit = false;
    };
    TechnicalReceiptFormComponent.prototype.saveWorkOrder = function () {
        // TODO
    };
    var TechnicalReceiptFormComponent_1;
    TechnicalReceiptFormComponent.EQUIPMENT_ANCHOR_ID = 'equipmentAnchor';
    TechnicalReceiptFormComponent.RECEPTION_ANCHOR_ID = 'reception';
    TechnicalReceiptFormComponent.OPERATION_ANCHOR_ID = 'operation';
    TechnicalReceiptFormComponent.DUE_DATE_ANCHOR_ID = 'dueDate';
    TechnicalReceiptFormComponent.SUB_ASSEMBLY_ANCHOR_ID = 'subAssembly';
    TechnicalReceiptFormComponent.APPLIED_CONF_ANCHOR_ID = 'appliedConf';
    TechnicalReceiptFormComponent.COMMENT_ANCHOR_ID = 'comment';
    TechnicalReceiptFormComponent.ADDITIONAL_WORK_ANCHOR_ID = 'additionalWork';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(TechnicalReceiptFormComponent_1.EQUIPMENT_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TechnicalReceiptFormComponent.prototype, "equipmentAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(TechnicalReceiptFormComponent_1.RECEPTION_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TechnicalReceiptFormComponent.prototype, "reception", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(TechnicalReceiptFormComponent_1.OPERATION_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TechnicalReceiptFormComponent.prototype, "operation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(TechnicalReceiptFormComponent_1.DUE_DATE_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TechnicalReceiptFormComponent.prototype, "dueDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(TechnicalReceiptFormComponent_1.SUB_ASSEMBLY_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TechnicalReceiptFormComponent.prototype, "subAssembly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(TechnicalReceiptFormComponent_1.APPLIED_CONF_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TechnicalReceiptFormComponent.prototype, "appliedConf", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(TechnicalReceiptFormComponent_1.COMMENT_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TechnicalReceiptFormComponent.prototype, "comment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(TechnicalReceiptFormComponent_1.ADDITIONAL_WORK_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TechnicalReceiptFormComponent.prototype, "additionalWork", void 0);
    TechnicalReceiptFormComponent = TechnicalReceiptFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-technical-receipt-form',
            template: __webpack_require__(/*! ./technical-receipt-form.component.html */ "./src/app/main/logistics/technical-receipt/form/technical-receipt-form.component.html"),
            styles: [__webpack_require__(/*! ./technical-receipt-form.component.scss */ "./src/app/main/logistics/technical-receipt/form/technical-receipt-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__["TabService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__["PageTocService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _technical_receipt_form_service__WEBPACK_IMPORTED_MODULE_17__["TechnicalReceiptFormService"]])
    ], TechnicalReceiptFormComponent);
    return TechnicalReceiptFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_15__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/technical-receipt/form/technical-receipt-form.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/technical-receipt/form/technical-receipt-form.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: TechnicalReceiptFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalReceiptFormService", function() { return TechnicalReceiptFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/aircraft-maintenance.api */ "./src/app/shared/api/aircraft-maintenance.api.ts");
/* harmony import */ var _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/bidt-employee.api */ "./src/app/shared/api/bidt-employee.api.ts");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/utils/array-utils */ "./src/app/shared/utils/array-utils.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
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














var TechnicalReceiptFormService = /** @class */ (function (_super) {
    __extends(TechnicalReceiptFormService, _super);
    function TechnicalReceiptFormService(http, appConfigService, aircraftMaintenanceApi, propertiesService, userProfileManagementApi, bidtEmployeeApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
        _this.propertiesService = propertiesService;
        _this.userProfileManagementApi = userProfileManagementApi;
        _this.bidtEmployeeApi = bidtEmployeeApi;
        _this._woTypeList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        _this.woTypeList$ = _this._woTypeList.asObservable();
        _this._userList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        _this.userList$ = _this._userList.asObservable();
        _this._woStatusList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        _this.woStatusList$ = _this._woStatusList.asObservable();
        return _this;
    }
    TechnicalReceiptFormService.prototype.loadTechnicalRecepitData = function () {
        return {
            partNumber: '0055215-100-01',
            designation: '### DESIGNATION DU P/N ###',
            snLot: '114621-11',
            worthiness: 'NOK',
            location: 'BA118-Monte-de-Marsan',
            warehouse: 'Magasin General',
            emplacement: 'Zone Bon Etat - AD984',
            operationalStatus: 'To Control',
            fileNumber: 'RF400092',
            type: 'Reception Pieces Nievues',
            status: 'Release',
            logisticLocation: 'BA118- Monte-de-Marsan',
            releaseBy: 'John MacClane',
            date: new Date(),
            wp: '17965',
            wo: 'WO000032332432',
            mroCenter: 'BA118-Mont-de-Marsan',
            progress: 50,
            taskAcceptance: '53-00-00-00-201-01-01A'
        };
    };
    TechnicalReceiptFormService.prototype.loadDueDateData = function () {
        return [
            {
                value: '230FH',
                type: 'SB/AD',
                designation: '2019-XXX- INSPECTION / MODIFICATION'
            }
        ];
    };
    TechnicalReceiptFormService.prototype.loadConfigurationData = function () {
        return [{ ok: 79, nok: 2, warning: 0 }];
    };
    TechnicalReceiptFormService.prototype.loadDialogFormData = function () {
        return {
            user: 'John McClane',
            date: new Date(),
            oldValue: 'A controller',
            newValue: 'Bon Etat'
        };
    };
    /***********************************
     Aircraft maintenace api
    ***********************************/
    TechnicalReceiptFormService.prototype.findBidmWorkOrder = function (bidmWorkOrderDTOId) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({
            woTypeList: this.loadGenProps(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].AIRM_WORK_ORDER_TYPES_MAP),
            woStatusList: this.loadGenProps(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].AIRM_OPERATION_STATUS_MAP),
            userList: this.loadUserList()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (_a) {
            var woTypeList = _a.woTypeList, woStatusList = _a.woStatusList, userList = _a.userList;
            _this._woTypeList.next(woTypeList);
            _this._woStatusList.next(woStatusList);
            _this._userList.next(userList);
            return _super.prototype.post.call(_this, _this.aircraftMaintenanceApi.findBidmWorkOrderData, bidmWorkOrderDTOId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
        }));
    };
    TechnicalReceiptFormService.prototype.loadUserList = function () {
        return this.findUsersWithUseCase().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (results) {
            return !!results
                ? results
                    .map(function (user) {
                    return {
                        label: user.firstname + " " + user.lastname,
                        value: user.userId
                    };
                })
                    .sort(_shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_12__["ArrayUtils"].compareValues('label'))
                : [];
        }));
    };
    TechnicalReceiptFormService.prototype.loadGenProps = function (key) {
        return this.propertiesService.getValue(key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (results) {
            return !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_13__["SelectItemUtils"].fromLabelValues(results) : [];
        }));
    };
    /***********************************
     user profile api
    ***********************************/
    TechnicalReceiptFormService.prototype.findUsersWithUseCase = function () {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findBidoUsersWithUseCase, _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__["BidoFunctionTypeConstants"].UC_AIRM_RECEPTION);
    };
    TechnicalReceiptFormService.prototype.loadBidmWorkOrderID = function () {
        return { projectId: '4907143953337775713', woId: '3438490147292885418' };
    };
    TechnicalReceiptFormService.prototype.getProgressFromOperationStatus = function (operation) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.getProgressFromOperationStatus, operation);
    };
    /***********************************
     employee api
    ***********************************/
    TechnicalReceiptFormService.prototype.getEmployeeById = function (id) {
        return _super.prototype.post.call(this, this.bidtEmployeeApi.getById, id);
    };
    TechnicalReceiptFormService.prototype.findUserById = function (userId) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findUser, userId);
    };
    TechnicalReceiptFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__["AppConfigService"],
            _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_4__["AircraftMaintenanceApi"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__["PropertiesService"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_6__["UserProfileManagementApi"],
            _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_5__["BidtEmployeeApi"]])
    ], TechnicalReceiptFormService);
    return TechnicalReceiptFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/technical-receipt/search/technical-receipt-search.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/logistics/technical-receipt/search/technical-receipt-search.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ \"page.searchPage\" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <div class=\"row search-criteria-header\">\r\n                <aw-manage-search-criteria\r\n                  [componentId]=\"SEARCH_CRITERIA_ID\"\r\n                  (onSelected)=\"loadSearchCriteria($event)\"\r\n                  (onSavedAsked)=\"saveSearchCriteriaAsked()\"\r\n                  [objectFromPage]=\"searchCriteriaToSave\"\r\n                  [canChange]=\"!searchCriteriaCalculated\"\r\n                ></aw-manage-search-criteria>\r\n              </div>\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">{{ componentData.componentId + \".location\" | translate }}</h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group required\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".site\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [showClear]=\"true\"\r\n                          [options]=\"siteList\"\r\n                          [(ngModel)]=\"searchCriteria.siteId\"\r\n                          (onChange)=\"loadWareHouseList()\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group custom-width\">\r\n                      <label class=\"form-label\">\r\n                        {{\r\n                          componentData.componentId +\r\n                            (selectedShopWorkshop === awPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE\r\n                              ? \".warehouse\"\r\n                              : \".workshop\") | translate\r\n                        }}\r\n                      </label>\r\n                      <div class=\"form-control aw-selectbutton-wrapper\">\r\n                        <p-selectButton\r\n                          [(ngModel)]=\"selectedShopWorkshop\"\r\n                          [options]=\"shopWorkshopItemList\"\r\n                          (onChange)=\"getSelectedWareHouseList()\"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> &nbsp;</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [showClear]=\"true\"\r\n                          [options]=\"shopWorkshopList\"\r\n                          [(ngModel)]=\"searchCriteria.warehouse\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Material -->\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">{{ componentData.componentId + \".material\" | translate }}</h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".partNumber\" | translate }} </label>\r\n\r\n                      <div class=\"form-control form-control-with-modal\">\r\n                        <div class=\"form-control-data\" (click)=\"onClickSearchMaterial()\">\r\n                          {{ searchCriteria.partNumber }}\r\n                        </div>\r\n\r\n                        <div *ngIf=\"searchCriteria.partNumber\" class=\"btn-clear-wrapper\">\r\n                          <i\r\n                            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"clearPnCodeClass()\"\r\n                          ></i>\r\n                        </div>\r\n                        <div class=\"btn-search-wrapper\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"onClickSearchMaterial()\"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".designation\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input type=\"text\" [(ngModel)]=\"searchCriteria.designation\" class=\"aw-input\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".snLot\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input type=\"text\" [(ngModel)]=\"searchCriteria.snLot\" class=\"aw-input\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Reception -->\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">{{ componentData.componentId + \".receptionFile\" | translate }}</h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".documentNumber\" | translate }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input type=\"text\" [(ngModel)]=\"searchCriteria.documentNumber\" class=\"aw-input\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".expectedDate\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-calendar\r\n                          showButtonBar=\"true\"\r\n                          [monthNavigator]=\"true\"\r\n                          [yearNavigator]=\"true\"\r\n                          [yearRange]=\"sessionService.calendarYearRange\"\r\n                          class=\"aw-calendar\"\r\n                          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                          [locale]=\"sessionService.calendarFormat\"\r\n                          [(ngModel)]=\"searchCriteria.expectedDate\"\r\n                          appendTo=\"body\"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".status\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [showClear]=\"true\"\r\n                          [options]=\"statusList\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".criticality\" | translate }} </label>\r\n\r\n                      <div class=\"form-control aw-selectbutton-wrapper\">\r\n                        <p-selectButton\r\n                          [options]=\"criticalityList\"\r\n                          [(ngModel)]=\"selectedCriticality\"\r\n                          (onChange)=\"changeCriticality()\"\r\n                          multiple=\"multiple\"\r\n                        >\r\n                        </p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Other Criteria -->\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">{{ componentData.componentId + \".otherCriteria\" | translate }}</h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".itemNumber\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input type=\"text\" [(ngModel)]=\"searchCriteria.itemNumber\" class=\"aw-input\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\"></div>\r\n\r\n                    <div class=\"form-group\"></div>\r\n\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- ACTION -->\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div class=\"row search-criteria-footer\">\r\n                    <div class=\"search-actions\">\r\n                      <button\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"search()\"\r\n                        appKeyPress\r\n                        color=\"primary\"\r\n                        [keyCode]=\"'Enter'\"\r\n                        (keyPress)=\"search()\"\r\n                      >\r\n                        {{ \"global.toSearch\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }} ({{ resultsTable ? resultsTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableResult\r\n                class=\"aw-table2\"\r\n                [columns]=\"resultTableCols\"\r\n                [value]=\"resultsTable\"\r\n                [(selection)]=\"selectedResults\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedResults.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableEquipmentGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableResult.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"selectedResults.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openSelectedReceipt()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <!-- Part Number -->\r\n                      <span *ngSwitchCase=\"'partNumber'\">\r\n                        <div class=\"code\">\r\n                          <div class=\"info\">\r\n                            <a (click)=\"openSelectedReceipt()\">{{ rowData[\"partNumber\"] }}</a>\r\n                          </div>\r\n\r\n                          <div class=\"info\">\r\n                            <i\r\n                              ><b>{{ rowData[\"designation\"] }}</b></i\r\n                            >\r\n                          </div>\r\n                        </div>\r\n                      </span>\r\n\r\n                      <!-- SN or Lot -->\r\n                      <span *ngSwitchCase=\"'snLot'\">\r\n                        <div class=\"code\">\r\n                          <div class=\"info\">\r\n                            <a>{{ rowData[\"sn\"] }}</a>\r\n                          </div>\r\n\r\n                          <div class=\"info\">\r\n                            <i\r\n                              ><b>{{ rowData[\"lot\"] }}</b></i\r\n                            >\r\n                          </div>\r\n                        </div>\r\n                      </span>\r\n\r\n                      <!-- Location -->\r\n                      <span *ngSwitchCase=\"'location'\">\r\n                        <div class=\"code\">\r\n                          <div class=\"info\">\r\n                            <b>{{ rowData[\"location\"] }}</b>\r\n                          </div>\r\n                          <div class=\"info\">\r\n                            <i\r\n                              ><b>{{ rowData[\"providerSite\"] }}</b></i\r\n                            >\r\n                          </div>\r\n                        </div>\r\n                      </span>\r\n\r\n                      <!-- Reception Folder -->\r\n                      <span *ngSwitchCase=\"'receptionFile'\">\r\n                        <div class=\"code\">\r\n                          <div class=\"info\">\r\n                            <a>{{ rowData[\"receptionFile\"] }}</a>\r\n                          </div>\r\n                          <div class=\"info\">\r\n                            <i\r\n                              ><b>{{ rowData[\"fileName\"] }}</b></i\r\n                            >\r\n                          </div>\r\n                        </div>\r\n                      </span>\r\n\r\n                      <!-- SITUATION -->\r\n                      <span *ngSwitchCase=\"'criticality'\">\r\n                        <div class=\"code\">\r\n                          <div class=\"info\">\r\n                            <span *ngIf=\"rowData['criticality'] === immediate\" class=\"alert alert--ok\">\r\n                              {{ rowData[\"criticality\"] }}\r\n                            </span>\r\n                            <span *ngIf=\"rowData['criticality'] === urgent\" class=\"alert alert--nok\">\r\n                              {{ rowData[\"criticality\"] }}\r\n                            </span>\r\n                            <span *ngIf=\"rowData['criticality'] === routine\" class=\"alert alert--warning\">\r\n                              {{ rowData[\"criticality\"] }}\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </span>\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-search-material\r\n  *ngIf=\"showQuickSearchMaterialPopup\"\r\n  [(display)]=\"showQuickSearchMaterialPopup\"\r\n  [material-code]=\"searchCriteria.partNumber\"\r\n  (onSelected)=\"setSelectedMaterial($event)\"\r\n></aw-dialog-search-material>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/technical-receipt/search/technical-receipt-search.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/logistics/technical-receipt/search/technical-receipt-search.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .alert {\n  display: inline-block;\n  max-width: 7rem;\n  text-transform: uppercase;\n  width: 100%;\n  font-weight: 600;\n  text-align: center;\n  width: 5rem; }\n  :host .alert.alert--ok {\n    background-color: #4caf50; }\n  :host .alert.alert--warning {\n    background-color: #ffc107; }\n  :host .alert.alert--nok {\n    background-color: #f6685e; }\n  :host .alert.alert--none {\n    background-color: #c8d4d6; }\n  :host .custom-width {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content; }\n  :host .code {\n  display: inline-table;\n  width: 100%; }\n  :host ::ng-deep .name {\n  font-style: italic;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 20em; }\n  :host ::ng-deep .info {\n  overflow: hidden;\n  padding-bottom: 0.4em;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvdGVjaG5pY2FsLXJlY2VpcHQvc2VhcmNoL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcdGVjaG5pY2FsLXJlY2VpcHRcXHNlYXJjaFxcdGVjaG5pY2FsLXJlY2VpcHQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy90ZWNobmljYWwtcmVjZWlwdC9zZWFyY2gvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUkscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0VBUmY7SUFXTSx5QkNRZ0IsRUFBQTtFRG5CdEI7SUFlTSx5QkNLVSxFQUFBO0VEcEJoQjtJQW1CTSx5QkNHYyxFQUFBO0VEdEJwQjtJQXVCTSx5QkNFUyxFQUFBO0VEekJmO0VBNEJJLDhCQUFzQjtFQUF0QiwyQkFBc0I7RUFBdEIsc0JBQXNCLEVBQUE7RUE1QjFCO0VBZ0NJLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7RUFqQ2Y7RUFxQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTtFQXpDbkI7RUE2Q0ksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy90ZWNobmljYWwtcmVjZWlwdC9zZWFyY2gvdGVjaG5pY2FsLXJlY2VpcHQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5hbGVydCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDdyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW5vbmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXdpZHRoIHtcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAuY29kZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAubmFtZSB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWF4LXdpZHRoOiAyMGVtO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5pbmZvIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40ZW07XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/logistics/technical-receipt/search/technical-receipt-search.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/logistics/technical-receipt/search/technical-receipt-search.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TechnicalReceiptSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalReceiptSearchComponent", function() { return TechnicalReceiptSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _technical_receipt_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./technical-receipt-search.service */ "./src/app/main/logistics/technical-receipt/search/technical-receipt-search.service.ts");
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













var TechnicalReceiptSearchComponent = /** @class */ (function (_super) {
    __extends(TechnicalReceiptSearchComponent, _super);
    function TechnicalReceiptSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, translateService, technicalReceiptSearchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.technicalReceiptSearchService = technicalReceiptSearchService;
        _this.immediate = 'Immediate';
        _this.urgent = 'Urgent';
        _this.routine = 'Routine';
        _this.isLoading = false;
        return _this;
    }
    TechnicalReceiptSearchComponent_1 = TechnicalReceiptSearchComponent;
    TechnicalReceiptSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].LOG_TECHNICAL_RECEIPT_SEARCH;
    };
    TechnicalReceiptSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.awPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"];
        this.displayComponentContext('global.search', true);
        this.searchCriteria = {};
        this.resultsTable = [];
        this.selectedResults = [];
        this.completeSiteList = [];
        this.showQuickSearchMaterialPopup = false;
        this.getSiteList();
        this.loadTableCols();
        this.getWarehouseList();
        this.statusList = [];
    };
    /************************************
     * Load Tech Receipt Table Columns
     ************************************/
    TechnicalReceiptSearchComponent.prototype.loadTableCols = function () {
        this.resultTableCols = [
            { field: 'partNumber', alignment: 'left' },
            { field: 'snLot', alignment: 'left' },
            { field: 'location', alignment: 'left' },
            { field: 'receptionFile', alignment: 'left' },
            { field: 'expectedDate', alignment: 'left' },
            { field: 'criticality', alignment: 'center' }
        ];
        this.loadDropdowns();
    };
    /************************************
     * Fetch Dropdown Data
     ************************************/
    TechnicalReceiptSearchComponent.prototype.loadDropdowns = function () {
        var _this = this;
        this.criticalityList = [];
        this.technicalReceiptSearchService.loadCriticalityList().subscribe(function (res) {
            res.forEach(function (criticity) {
                _this.criticalityList.push({
                    label: criticity.label,
                    value: criticity.value
                });
            });
            _this.criticalityList.unshift({
                label: _this.translateService.instant(_this.getTranslateKey('all')),
                value: TechnicalReceiptSearchComponent_1.ALL
            });
            _this.selectedCriticality = [_this.criticalityList[0].value];
        });
    };
    /************************************
     * Load Tech Receipt
     ************************************/
    TechnicalReceiptSearchComponent.prototype.search = function () {
        this.isLoading = true;
        this.resultsTable = this.technicalReceiptSearchService.loadTechincalReceipt();
        this.isLoading = false;
    };
    /************************************
     * Open Selected Tech Receipt
     ************************************/
    TechnicalReceiptSearchComponent.prototype.openSelectedReceipt = function () {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].LOG_TECHNICAL_RECEIPT_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    /**********************************
     * Search Criteria
     **********************************/
    TechnicalReceiptSearchComponent.prototype.loadSearchCriteria = function (event) {
        var criteria = event.criteria;
        if (criteria) {
            if (!this.componentData.objectId) {
                this.searchCriteria = criteria;
            }
            else {
                this.componentData.objectId = undefined;
            }
            this.search();
        }
        else {
            this.clearSearchCriteria();
        }
    };
    TechnicalReceiptSearchComponent.prototype.clearSearchCriteria = function () {
        this.searchCriteria = {};
    };
    TechnicalReceiptSearchComponent.prototype.saveSearchCriteriaAsked = function () {
        this.searchCriteriaToSave = this.searchCriteria;
    };
    /************************************
     * Load Warehouse List on change
     ************************************/
    TechnicalReceiptSearchComponent.prototype.loadWareHouseList = function () {
        var _this = this;
        this.shopWorkshopList = [];
        if (!!this.searchCriteria.siteId) {
            this.technicalReceiptSearchService
                .getWarehousesBySiteId(this.searchCriteria.siteId)
                .subscribe(function (res) {
                if (res && res.length) {
                    _this.completeSiteList = res;
                    _this.getSelectedWareHouseList();
                }
            });
        }
    };
    TechnicalReceiptSearchComponent.prototype.getSelectedWareHouseList = function () {
        var _this = this;
        if (this.completeSiteList && this.completeSiteList.length) {
            this.completeSiteList.forEach(function (siteObj) {
                if (siteObj && siteObj.whCategory === _this.selectedShopWorkshop) {
                    _this.shopWorkshopList.push({
                        label: siteObj.whName,
                        value: siteObj.whCode
                    });
                }
            });
        }
    };
    TechnicalReceiptSearchComponent.prototype.getSiteList = function () {
        var _this = this;
        this.technicalReceiptSearchService.findAllStockStatusSites().subscribe(function (result) {
            var labelValue = [];
            result.forEach(function (res) {
                if (!!res) {
                    labelValue.push({
                        label: res.label,
                        value: Number(res.value)
                    });
                }
            });
            _this.siteList = labelValue || [];
        });
    };
    TechnicalReceiptSearchComponent.prototype.getWarehouseList = function () {
        var _this = this;
        this.shopWorkshopItemList = [];
        this.technicalReceiptSearchService.loadWarehousesSelectItem().subscribe(function (res) {
            if (res && res.length) {
                _this.shopWorkshopItemList = res.sort(function (s1, s2) { return s1.value.localeCompare(s2.value); });
                _this.selectedShopWorkshop =
                    _this.shopWorkshopItemList && _this.shopWorkshopItemList.length ? _this.shopWorkshopItemList[0].value : '';
            }
        });
    };
    TechnicalReceiptSearchComponent.prototype.onClickSearchMaterial = function () {
        this.showQuickSearchMaterialPopup = true;
    };
    TechnicalReceiptSearchComponent.prototype.setSelectedMaterial = function (event) {
        this.showQuickSearchMaterialPopup = false;
        this.searchCriteria.partNumber = event.pnCode;
    };
    TechnicalReceiptSearchComponent.prototype.clearPnCodeClass = function () {
        this.searchCriteria.partNumber = undefined;
    };
    TechnicalReceiptSearchComponent.prototype.changeCriticality = function () {
        if (!!this.searchCriteria) {
            var isAllSelected = this.selectedCriticality.indexOf(TechnicalReceiptSearchComponent_1.ALL) !== -1 ? true : false;
            if (isAllSelected) {
                if (this.selectedCriticality.length === 1) {
                    this.selectedCriticality = [];
                    this.selectedCriticality = [TechnicalReceiptSearchComponent_1.ALL];
                }
                else if (this.selectedCriticality.length === this.criticalityList.length - 1) {
                    this.selectedCriticality = [];
                    this.selectedCriticality = [TechnicalReceiptSearchComponent_1.ALL];
                }
                else if (this.selectedCriticality.length > 1 &&
                    this.selectedCriticality.length < this.criticalityList.length) {
                    if (this.selectedCriticality[this.selectedCriticality.length - 1] !== TechnicalReceiptSearchComponent_1.ALL) {
                        this.selectedCriticality.splice(this.selectedCriticality.indexOf(TechnicalReceiptSearchComponent_1.ALL), 1);
                    }
                    else {
                        this.selectedCriticality = [];
                        this.selectedCriticality = [TechnicalReceiptSearchComponent_1.ALL];
                    }
                }
            }
            else if (!isAllSelected && this.selectedCriticality.length === this.criticalityList.length - 1) {
                this.selectedCriticality = [];
                this.selectedCriticality = [TechnicalReceiptSearchComponent_1.ALL];
            }
        }
    };
    var TechnicalReceiptSearchComponent_1;
    TechnicalReceiptSearchComponent.ALL = 'ALL';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resultsContainerAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TechnicalReceiptSearchComponent.prototype, "resultsContainerAnchor", void 0);
    TechnicalReceiptSearchComponent = TechnicalReceiptSearchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-technical-receipt-search',
            template: __webpack_require__(/*! ./technical-receipt-search.component.html */ "./src/app/main/logistics/technical-receipt/search/technical-receipt-search.component.html"),
            styles: [__webpack_require__(/*! ./technical-receipt-search.component.scss */ "./src/app/main/logistics/technical-receipt/search/technical-receipt-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _technical_receipt_search_service__WEBPACK_IMPORTED_MODULE_12__["TechnicalReceiptSearchService"]])
    ], TechnicalReceiptSearchComponent);
    return TechnicalReceiptSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/technical-receipt/search/technical-receipt-search.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/technical-receipt/search/technical-receipt-search.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: TechnicalReceiptSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalReceiptSearchService", function() { return TechnicalReceiptSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
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








var TechnicalReceiptSearchService = /** @class */ (function (_super) {
    __extends(TechnicalReceiptSearchService, _super);
    function TechnicalReceiptSearchService(http, bidtSiteApi, bidtWarehouseApi, propertiesService, appConfigService) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtSiteApi = bidtSiteApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.propertiesService = propertiesService;
        return _this;
    }
    TechnicalReceiptSearchService.prototype.loadTechincalReceipt = function () {
        return [
            {
                partNumber: '0055215-100-01',
                designation: '### DESINGATION DU P/N ###',
                sn: '114621-11',
                lot: 'Bon Etat',
                location: 'BA113- Mont-de-Marsan',
                providerSite: 'Magasin General',
                receptionFile: 'RF4000992',
                fileName: 'Reception Pieces Neuves',
                expectedDate: '23/11/2019',
                criticality: 'Immediate'
            },
            {
                partNumber: 'AA789-001',
                designation: '### DESINGATION DU P/N ###',
                sn: 'A6541-61',
                lot: 'Bon Etat',
                location: 'BA113- Mont-de-Marsan',
                providerSite: 'Magasin General',
                receptionFile: 'RF4001186',
                fileName: 'Retour de Reparation',
                expectedDate: '22/11/2019',
                criticality: 'Urgent'
            },
            {
                partNumber: '122-987-12-122',
                designation: '### DESINGATION DU P/N ###',
                sn: '121621-11',
                lot: 'Bon Etat',
                location: 'BA113- Mont-de-Marsan',
                providerSite: 'Magasin General',
                receptionFile: 'RF4003321',
                fileName: 'Nivilement de Stock',
                expectedDate: '21/11/2019',
                criticality: 'Routine'
            }
        ];
    };
    TechnicalReceiptSearchService.prototype.findAllStockStatusSites = function () {
        return _super.prototype.post.call(this, this.bidtSiteApi.findSiteByUsecaseCodeStockStatus);
    };
    TechnicalReceiptSearchService.prototype.getWarehousesBySiteId = function (siteId) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, siteId);
    };
    TechnicalReceiptSearchService.prototype.loadWarehousesSelectItem = function () {
        return this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__["GenericPropertyConstants"].WAREHOUSE_CATEGORY_MAP);
    };
    TechnicalReceiptSearchService.prototype.loadCriticalityList = function () {
        return this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__["GenericPropertyConstants"].LOGISTICAL_CRITICALITY_MAP);
    };
    TechnicalReceiptSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_2__["BidtSiteApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_3__["BidtWarehouseApi"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__["PropertiesService"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"]])
    ], TechnicalReceiptSearchService);
    return TechnicalReceiptSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/technical-receipt/technical-receipt.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/logistics/technical-receipt/technical-receipt.module.ts ***!
  \******************************************************************************/
/*! exports provided: TechnicalReceiptModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalReceiptModule", function() { return TechnicalReceiptModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts");
/* harmony import */ var _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/dialog-search-material/dialog-search-material.module */ "./src/app/shared/components/dialog-search-material/dialog-search-material.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_dialog_validate_technical_condition_dialog_validate_technical_condition_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form/dialog-validate-technical-condition/dialog-validate-technical-condition.component */ "./src/app/main/logistics/technical-receipt/form/dialog-validate-technical-condition/dialog-validate-technical-condition.component.ts");
/* harmony import */ var _form_technical_receipt_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form/technical-receipt-form.component */ "./src/app/main/logistics/technical-receipt/form/technical-receipt-form.component.ts");
/* harmony import */ var _form_technical_receipt_form_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./form/technical-receipt-form.service */ "./src/app/main/logistics/technical-receipt/form/technical-receipt-form.service.ts");
/* harmony import */ var _search_technical_receipt_search_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./search/technical-receipt-search.component */ "./src/app/main/logistics/technical-receipt/search/technical-receipt-search.component.ts");
/* harmony import */ var _search_technical_receipt_search_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search/technical-receipt-search.service */ "./src/app/main/logistics/technical-receipt/search/technical-receipt-search.service.ts");
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
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__["SelectButtonModule"],
    primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_15__["ManageSearchCriteriaModule"],
    primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__["InputSwitchModule"],
    _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_13__["ComponentSidebarModule"],
    primeng_chart__WEBPACK_IMPORTED_MODULE_2__["ChartModule"],
    primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressBarModule"],
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__["ModalModule"]
];
var INTERNAL_MODULES = [_shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_14__["DialogSearchMaterialModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [
    _form_technical_receipt_form_component__WEBPACK_IMPORTED_MODULE_19__["TechnicalReceiptFormComponent"],
    _search_technical_receipt_search_component__WEBPACK_IMPORTED_MODULE_21__["TechnicalReceiptSearchComponent"],
    _form_dialog_validate_technical_condition_dialog_validate_technical_condition_component__WEBPACK_IMPORTED_MODULE_18__["DialogValidateTechnicalConditionComponent"]
];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_technical_receipt_form_service__WEBPACK_IMPORTED_MODULE_20__["TechnicalReceiptFormService"], _search_technical_receipt_search_service__WEBPACK_IMPORTED_MODULE_22__["TechnicalReceiptSearchService"]];
var TechnicalReceiptModule = /** @class */ (function () {
    function TechnicalReceiptModule() {
    }
    TechnicalReceiptModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_10__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_11__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_12__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_17__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], TechnicalReceiptModule);
    return TechnicalReceiptModule;
}());



/***/ }),

/***/ "./src/app/shared/utils/array-utils.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/utils/array-utils.ts ***!
  \*********************************************/
/*! exports provided: ArrayUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayUtils", function() { return ArrayUtils; });
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    ArrayUtils.compareValues = function (key, order) {
        if (order === void 0) { order = 'asc'; }
        return function (a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }
            var varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
            var varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
            var comparison = 0;
            if (varA > varB) {
                comparison = 1;
            }
            else if (varA < varB) {
                comparison = -1;
            }
            return ((order === 'desc') ? (comparison * -1) : comparison);
        };
    };
    return ArrayUtils;
}());



/***/ })

}]);
//# sourceMappingURL=logistics-technical-receipt-technical-receipt-module.js.map