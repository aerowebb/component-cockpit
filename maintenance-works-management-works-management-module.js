(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintenance-works-management-works-management-module"],{

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

/***/ "./node_modules/primeng/components/radiobutton/radiobutton.js":
/*!********************************************************************!*\
  !*** ./node_modules/primeng/components/radiobutton/radiobutton.js ***!
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
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
exports.RADIO_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return RadioButton; }),
    multi: true
};
var RadioButton = /** @class */ (function () {
    function RadioButton(cd) {
        this.cd = cd;
        this.onClick = new core_1.EventEmitter();
        this.onFocus = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    RadioButton.prototype.handleClick = function (event, radioButton, focus) {
        event.preventDefault();
        if (this.disabled) {
            return;
        }
        this.select(event);
        if (focus) {
            radioButton.focus();
        }
    };
    RadioButton.prototype.select = function (event) {
        if (!this.disabled) {
            this.inputViewChild.nativeElement.checked = true;
            this.checked = true;
            this.onModelChange(this.value);
            this.onClick.emit(event);
        }
    };
    RadioButton.prototype.writeValue = function (value) {
        this.checked = (value == this.value);
        if (this.inputViewChild.nativeElement) {
            this.inputViewChild.nativeElement.checked = this.checked;
        }
        this.cd.markForCheck();
    };
    RadioButton.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    RadioButton.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    RadioButton.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    RadioButton.prototype.onInputFocus = function (event) {
        this.focused = true;
        this.onFocus.emit(event);
    };
    RadioButton.prototype.onInputBlur = function (event) {
        this.focused = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    };
    RadioButton.prototype.onChange = function (event) {
        this.select(event);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RadioButton.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioButton.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RadioButton.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioButton.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RadioButton.prototype, "tabindex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioButton.prototype, "inputId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RadioButton.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioButton.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioButton.prototype, "labelStyleClass", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], RadioButton.prototype, "onClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], RadioButton.prototype, "onFocus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], RadioButton.prototype, "onBlur", void 0);
    __decorate([
        core_1.ViewChild('rb'),
        __metadata("design:type", core_1.ElementRef)
    ], RadioButton.prototype, "inputViewChild", void 0);
    RadioButton = __decorate([
        core_1.Component({
            selector: 'p-radioButton',
            template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"'ui-radiobutton ui-widget'\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #rb type=\"radio\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.value]=\"value\" [attr.tabindex]=\"tabindex\" \n                    [checked]=\"checked\" (change)=\"onChange($event)\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" [disabled]=\"disabled\">\n            </div>\n            <div (click)=\"handleClick($event, rb, true)\"\n                [ngClass]=\"{'ui-radiobutton-box ui-widget ui-state-default':true,\n                'ui-state-active':rb.checked,'ui-state-disabled':disabled,'ui-state-focus':focused}\">\n                <span class=\"ui-radiobutton-icon ui-clickable\" [ngClass]=\"{'pi pi-circle-on':rb.checked}\"></span>\n            </div>\n        </div>\n        <label (click)=\"select($event)\" [class]=\"labelStyleClass\"\n            [ngClass]=\"{'ui-radiobutton-label':true, 'ui-label-active':rb.checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}\"\n            *ngIf=\"label\" [attr.for]=\"inputId\">{{label}}</label>\n    ",
            providers: [exports.RADIO_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], RadioButton);
    return RadioButton;
}());
exports.RadioButton = RadioButton;
var RadioButtonModule = /** @class */ (function () {
    function RadioButtonModule() {
    }
    RadioButtonModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [RadioButton],
            declarations: [RadioButton]
        })
    ], RadioButtonModule);
    return RadioButtonModule;
}());
exports.RadioButtonModule = RadioButtonModule;
//# sourceMappingURL=radiobutton.js.map

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

/***/ "./node_modules/primeng/radiobutton.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/radiobutton.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/radiobutton/radiobutton */ "./node_modules/primeng/components/radiobutton/radiobutton.js"));

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

/***/ "./src/app/main/maintenance/works-management/form/works-management-form.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/maintenance/works-management/form/works-management-form.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" class=\"btn-with-spinner\" mat-raised-button *ngIf=\"showControlWoBtn\">\r\n      {{ getComponentName() + \".controlWorkOrder\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn-with-spinner\" mat-raised-button *ngIf=\"showCloseWoBtn\">\r\n      {{ getComponentName() + \".closeWorkOrder\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn-with-spinner\" mat-raised-button *ngIf=\"showCloseWpBtn\">\r\n      {{ getComponentName() + \".closeWorkPackage\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      type=\"button\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1 fa aw-icon aw-icon-with-overlay\"\r\n      aria-hidden=\"true\"\r\n      pTooltip=\"{{ getComponentName() + (filtersVisible ? '.hideFilters' : '.showFilters') | translate }}\"\r\n      tooltipPosition=\"top\"\r\n      [ngClass]=\"{ active: filtersVisible }\"\r\n      (click)=\"opFilters.toggle($event)\"\r\n    >\r\n      <mat-icon fontSet=\"fa\" fontIcon=\"fa-filter\" style=\"height: 15px;\"></mat-icon>\r\n    </button>\r\n    <button\r\n      id=\"actions\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"onReload()\">{{ \"global.refresh\" | translate }}</button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\" style=\"max-width: 100%\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div id=\"worksManagementTable\" class=\"grid-cell--12\">\r\n          <div class=\"grid-cell-content\">\r\n            <p-table\r\n              id=\"worksManagementTable\"\r\n              #ptableWorksMangement\r\n              class=\"aw-table2\"\r\n              [columns]=\"worksManagementTableCols\"\r\n              [value]=\"worksManagementTable\"\r\n              [scrollable]=\"false\"\r\n              selectionMode=\"checkbox\"\r\n              [(selection)]=\"selectedWorkOrders\"\r\n              (onRowSelect)=\"manageButtonDisplay()\"\r\n              (onRowUnselect)=\"manageButtonDisplay()\"\r\n            >\r\n              <ng-template pTemplate=\"emptymessage\">\r\n                <span *ngIf=\"!isLoadingWorksManagementTable\"> &nbsp;</span>\r\n\r\n                <div *ngIf=\"isLoadingWorksManagementTable\" class=\"aw-table-loading-indicator\">\r\n                  <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                  <div class=\"lds-hourglass\"></div>\r\n                </div>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"loadingbody\" let-columns=\"columns\">\r\n                <tr style=\"height:34px\">\r\n                  <td *ngFor=\"let col of columns\">\r\n                    <div class=\"loading-text\"></div>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"caption\">\r\n                <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedWorkOrders.length > 0 }\">\r\n                  <div class=\"aw-table-actions\"></div>\r\n                </div>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"colgroup\" let-columns>\r\n                <colgroup>\r\n                  <col class=\"aw-table-checkbox-wrapper\" />\r\n                  <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                </colgroup>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                  <th class=\"aw-table-checkbox-wrapper\">\r\n                    <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                  </th>\r\n                  <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                    {{ componentData.componentId + \".\" + col.field | translate }}\r\n                  </th>\r\n                </tr>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"body\" let-jobCardRow let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                <tr [pSelectableRow]=\"jobCardRow\" [pSelectableRowIndex]=\"rowIndex\">\r\n                  <td class=\"aw-table-checkbox-wrapper\">\r\n                    <p-tableCheckbox\r\n                      *ngIf=\"!jobCardRow.isLoading\"\r\n                      class=\"aw-table-checkbox\"\r\n                      [value]=\"jobCardRow\"\r\n                    ></p-tableCheckbox>\r\n                  </td>\r\n\r\n                  <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ width: col.width }\">\r\n                    <span *ngSwitchCase=\"'workPackage'\" class=\"tree-table-cell\">\r\n                      <div>\r\n                        <a class=\"value\" (click)=\"openWorkPackageLink(jobCardRow.projectDTO.projectId)\">\r\n                          {{ jobCardRow.projectDTO.projectNumber }}</a\r\n                        >\r\n                      </div>\r\n\r\n                      <div class=\"additional-data compact\">\r\n                        <div class=\"grid-cell--9 grid-cell--no-padding\">\r\n                          <p-progressBar\r\n                            [ngClass]=\"jobCardRow.wpProgressStatus\"\r\n                            [showValue]=\"false\"\r\n                            [value]=\"jobCardRow.wpProgressPercent\"\r\n                          >\r\n                          </p-progressBar>\r\n                        </div>\r\n                        <div\r\n                          class=\"grid-cell--3 grid-cell--no-padding\"\r\n                          style=\"position: absolute; padding-top: 4px; padding-left: 1%;\"\r\n                        >\r\n                          <span class=\"horizontal-separator\"></span>\r\n                          <span class=\"value\">\r\n                            {{ jobCardRow.worksManagementDTO.nbCloseWorkOrders }} /\r\n                            {{ jobCardRow.worksManagementDTO.nbTotalWorkOrders }}</span\r\n                          >\r\n                        </div>\r\n                      </div>\r\n                    </span>\r\n\r\n                    <span *ngSwitchCase=\"'workOrder'\" class=\"tree-table-cell\">\r\n                      <div>\r\n                        <a class=\"value\" (click)=\"openWorkOrderLink(jobCardRow.workOrderDTO)\">\r\n                          {{ jobCardRow.workOrderDTO.woCode }}\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"additional-data\">\r\n                        <span>\r\n                          <p-progressBar\r\n                            [ngClass]=\"jobCardRow.progressStatus\"\r\n                            [value]=\"jobCardRow.bidmWorkOrderDataDTO.statusPercent\"\r\n                            *ngIf=\"jobCardRow.bidmWorkOrderDataDTO\"\r\n                          >\r\n                          </p-progressBar>\r\n                        </span>\r\n                      </div>\r\n                    </span>\r\n\r\n                    <span *ngSwitchCase=\"'origin'\" class=\"tree-table-cell\">\r\n                      <div>\r\n                        <span\r\n                          *ngIf=\"jobCardRow.workOrderDTO.woType === awPropertiesConstants.AIRM_WORK_ORDER_TYPE_TASK\"\r\n                          class=\"value\"\r\n                        >\r\n                          {{ getComponentName() + \".task\" | translate }}\r\n                        </span>\r\n                        <span\r\n                          *ngIf=\"jobCardRow.workOrderDTO.woType === awPropertiesConstants.AIRM_WORK_ORDER_TYPE_DEFECT\"\r\n                          class=\"value\"\r\n                        >\r\n                          {{ getComponentName() + \".defect\" | translate }}\r\n                        </span>\r\n                        <span\r\n                          *ngIf=\"\r\n                            jobCardRow.workOrderDTO.woType === awPropertiesConstants.AIRM_WORK_ORDER_TYPE_EVOLUTION\r\n                          \"\r\n                          class=\"value\"\r\n                        >\r\n                          {{ getComponentName() + \".evolution\" | translate }}\r\n                        </span>\r\n                        <span\r\n                          *ngIf=\"jobCardRow.workOrderDTO.woType === awPropertiesConstants.AIRM_WORK_ORDER_TYPE_MANUAL\"\r\n                          class=\"value\"\r\n                        >\r\n                          {{ getComponentName() + \".manual\" | translate }}\r\n                        </span>\r\n                        <span\r\n                          *ngIf=\"\r\n                            jobCardRow.workOrderDTO.woType === awPropertiesConstants.AIRM_WORK_ORDER_TYPE_SN_CHANGE\r\n                          \"\r\n                          class=\"value\"\r\n                        >\r\n                          {{ getComponentName() + \".snChange\" | translate }}\r\n                        </span>\r\n                        <span\r\n                          *ngIf=\"\r\n                            jobCardRow.workOrderDTO.woType === awPropertiesConstants.AIRM_WORK_ORDER_TYPE_SUBCONTRACTING\r\n                          \"\r\n                          class=\"value\"\r\n                        >\r\n                          {{ getComponentName() + \".subcontracting\" | translate }}\r\n                        </span>\r\n                        <a class=\"value\" (click)=\"consultWorkOrderOrigin(jobCardRow)\"> {{ jobCardRow.originText }}</a>\r\n                      </div>\r\n                      <div style=\"white-space: normal; min-height: 2rem;\">\r\n                        {{ jobCardRow.workOrderDTO.woDescription }}\r\n                      </div>\r\n                    </span>\r\n\r\n                    <span *ngSwitchCase=\"'scheduling'\" class=\"tree-table-cell\">\r\n                      <div>\r\n                        <span class=\"label\"> {{ getComponentName() + \".assignedTo\" | translate }}</span>\r\n                        <span class=\"value\"> {{ jobCardRow.assignedTo }}</span>\r\n                      </div>\r\n                      <div class=\"additional-data\">\r\n                        <span class=\"grid-cell--6 grid-cell--no-padding\">\r\n                          <span class=\"label\"> {{ getComponentName() + \".startDate\" | translate }}</span>\r\n                          <span class=\"value\">\r\n                            {{ jobCardRow.workOrderDTO.woScheduledStartDate | date: \"dd/MM/yyyy\" }}</span\r\n                          >\r\n                        </span>\r\n                        <span class=\"grid-cell--6 grid-cell--no-padding\">\r\n                          <span class=\"label\"> {{ getComponentName() + \".endDate\" | translate }}</span>\r\n                          <span class=\"value\">\r\n                            {{ jobCardRow.workOrderDTO.woScheduledEndDate | date: \"dd/MM/yyyy\" }}\r\n                          </span>\r\n                        </span>\r\n                      </div>\r\n                    </span>\r\n\r\n                    <span *ngSwitchCase=\"'execution'\" class=\"tree-table-cell\">\r\n                      <div class=\"exec\" *ngIf=\"jobCardRow.workOrderStatusDetailDTO\">\r\n                        <div>\r\n                          <span class=\"label\"> {{ getComponentName() + \".status\" | translate }} </span>\r\n                          <span\r\n                            class=\"value\"\r\n                            *ngIf=\"\r\n                              jobCardRow.workOrderStatusDetailDTO.status ===\r\n                              awPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED\r\n                            \"\r\n                          >\r\n                            {{ getComponentName() + \".released\" | translate }}</span\r\n                          >\r\n                          <span\r\n                            class=\"value\"\r\n                            *ngIf=\"\r\n                              jobCardRow.workOrderStatusDetailDTO.status ===\r\n                              awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED\r\n                            \"\r\n                          >\r\n                            {{ getComponentName() + \".planned\" | translate }}</span\r\n                          >\r\n\r\n                          <span\r\n                            class=\"value\"\r\n                            *ngIf=\"\r\n                              jobCardRow.workOrderStatusDetailDTO.status ===\r\n                              awPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING\r\n                            \"\r\n                          >\r\n                            {{ getComponentName() + \".onGoing\" | translate }}</span\r\n                          >\r\n                          <span\r\n                            class=\"value\"\r\n                            *ngIf=\"\r\n                              jobCardRow.workOrderStatusDetailDTO.status ===\r\n                              awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED\r\n                            \"\r\n                          >\r\n                            {{ getComponentName() + \".performed\" | translate }}</span\r\n                          >\r\n                          <span\r\n                            class=\"value\"\r\n                            *ngIf=\"\r\n                              jobCardRow.workOrderStatusDetailDTO.status ===\r\n                              awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED\r\n                            \"\r\n                          >\r\n                            {{ getComponentName() + \".toBeConfirm\" | translate }}</span\r\n                          >\r\n                          <span\r\n                            class=\"value\"\r\n                            *ngIf=\"\r\n                              jobCardRow.workOrderStatusDetailDTO.status ===\r\n                              awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE\r\n                            \"\r\n                          >\r\n                            {{ getComponentName() + \".close\" | translate }}</span\r\n                          >\r\n                          <span\r\n                            class=\"value\"\r\n                            *ngIf=\"\r\n                              jobCardRow.workOrderStatusDetailDTO.status ===\r\n                              awPropertiesConstants.AIRM_OPERATION_STATUS_POSTPONEMENT_REQUESTED\r\n                            \"\r\n                          >\r\n                            {{ getComponentName() + \".postPonementRequest\" | translate }}</span\r\n                          >\r\n                          <span\r\n                            class=\"value\"\r\n                            *ngIf=\"\r\n                              jobCardRow.workOrderStatusDetailDTO.status ===\r\n                              awPropertiesConstants.AIRM_OPERATION_STATUS_POSTPONED\r\n                            \"\r\n                          >\r\n                            {{ getComponentName() + \".postponed\" | translate }}</span\r\n                          >\r\n                        </div>\r\n                        <div class=\"additional-data\" *ngIf=\"jobCardRow.workOrderStatusDetailDTO\">\r\n                          <span class=\"grid-cell--6 grid-cell--no-padding\">\r\n                            <span class=\"label\"> {{ getComponentName() + \".startDate\" | translate }}</span>\r\n                            <span class=\"value\">\r\n                              {{ jobCardRow.workOrderStatusDetailDTO.startDate | date: \"dd/MM/yyyy\" }}</span\r\n                            >\r\n                          </span>\r\n                          <span class=\"grid-cell--6 grid-cell--no-padding\">\r\n                            <span class=\"label\"> {{ getComponentName() + \".endDate\" | translate }}</span>\r\n                            <span class=\"value\">\r\n                              {{ jobCardRow.workOrderStatusDetailDTO.endDate | date: \"dd/MM/yyyy\" }}</span\r\n                            >\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </span>\r\n\r\n                    <span *ngSwitchCase=\"'asset'\" class=\"tree-table-cell\">\r\n                      <a *ngIf=\"jobCardRow.asset\" (click)=\"openSnLink(jobCardRow.asset)\" class=\"value\">\r\n                        {{ jobCardRow.assetRepresentation }}\r\n                      </a>\r\n                    </span>\r\n\r\n                    <span *ngSwitchDefault class=\"tree-table-cell\"> {{ jobCardRow[col.field] }} </span>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </p-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p-overlayPanel #opFilters class=\"aw-overlay\" (onShow)=\"filtersVisible = true\" (onHide)=\"filtersVisible = false\">\r\n  <aw-works-management-table-filters\r\n    [searchCriteria]=\"searchCriteria\"\r\n    [searchStatusList]=\"searchStatusList\"\r\n    [searchTypeList]=\"searchTypeList\"\r\n    [searchWPAssetList]=\"searchWPAssetList\"\r\n    [searchWOAssetList]=\"searchWOAssetList\"\r\n    [searchWOCodeList]=\"searchWOCodeList\"\r\n    [searchUserList]=\"searchUserList\"\r\n    (onFilter)=\"opFilters.hide(); filtersVisible = false; filterWithCriteria()\"\r\n    (onReset)=\"resetTableFilters(); opFilters.hide()\"\r\n  >\r\n  </aw-works-management-table-filters>\r\n</p-overlayPanel>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/works-management/form/works-management-form.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/maintenance/works-management/form/works-management-form.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .grid-cell-search .search-actions button {\n  margin-left: 8px; }\n  :host .grid-cell-search .search-actions button:first-of-type {\n    margin-left: 0; }\n  :host ::ng-deep p-progressbar.pla .ui-progressbar-value {\n  background: #c8d4d6; }\n  :host ::ng-deep p-progressbar.ong .ui-progressbar-value {\n  background: #b8d0e8; }\n  :host ::ng-deep p-progressbar.tbc .ui-progressbar-value {\n  background: #b8d0e8; }\n  :host ::ng-deep p-progressbar.per .ui-progressbar-value {\n  background: #006ea9; }\n  :host ::ng-deep p-progressbar.clo .ui-progressbar-value {\n  background: #4caf50; }\n  :host ::ng-deep p-progressbar.pos .ui-progressbar-value {\n  background: #4caf50; }\n  :host ::ng-deep p-progressbar.por .ui-progressbar-value {\n  background: #dddf00; }\n  :host .grid-cell-work-order-list .table {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%; }\n  :host .grid-cell-work-order-list .table .workOrder {\n    width: 20%; }\n  :host .grid-cell-work-order-list .table .engineeringData {\n    width: 22.5%; }\n  :host .grid-cell-work-order-list .table .fleetData {\n    width: 10%; }\n  :host .grid-cell-work-order-list .table .schedulingData {\n    width: 17.5%; }\n  :host .grid-cell-work-order-list .table .executionData {\n    width: 17.5%; }\n  :host .grid-cell-work-order-list .table .illustration {\n    width: 12.5%;\n    text-align: center; }\n  :host .grid-cell-work-order-list .table .table-body .table-cell,\n  :host .grid-cell-work-order-list .table .table-header .table-cell {\n    padding: 0 calc(8px / 2); }\n  :host .grid-cell-work-order-list .table .table-header {\n    background-color: #fff;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 40px; }\n  :host .grid-cell-work-order-list .table .table-header .table-row {\n      display: flex;\n      flex-direction: row;\n      border-bottom: 1px solid #595959;\n      max-height: 24px;\n      min-height: 24px; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions {\n      display: flex;\n      flex-direction: row;\n      padding-bottom: 8px; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .row-actions {\n        display: flex;\n        flex-direction: row;\n        align-items: flex-end;\n        justify-content: flex-end; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .row-actions > .aw-btn {\n          margin-left: 8px; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .row-actions > .aw-btn:first-of-type {\n            margin-left: 0; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-filters {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        margin-right: 8px; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-filters > .aw-icon {\n          font-size: 1.125rem;\n          line-height: 2rem;\n          width: 2rem; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter {\n        display: flex;\n        flex-direction: row;\n        align-items: baseline;\n        flex-grow: 1;\n        padding-right: 5%; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input {\n          background-color: transparent;\n          border-bottom-color: #595959;\n          border-left-color: transparent;\n          border-radius: 0;\n          border-right-color: transparent;\n          border-style: solid;\n          border-top-color: transparent;\n          border-width: 1px;\n          color: inherit;\n          font-family: inherit;\n          font-size: inherit;\n          font-weight: inherit;\n          line-height: 1.42857143;\n          outline: none;\n          padding: 2px 0 4px 0;\n          transition: border-bottom-color 0.25s ease-in-out;\n          min-width: 12rem;\n          width: 12rem;\n          transition: border-bottom-color 0.25s ease-in-out, width 0.5s ease; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input::-webkit-input-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input:-moz-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input::-moz-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input:-ms-input-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input:focus {\n            border-bottom-color: #01579b;\n            outline: none;\n            width: 100%; }\n  :host .grid-cell-work-order-list .table .table-body {\n    min-height: calc(8px * 5); }\n  :host .grid-cell-work-order-list .table .table-body .table-row {\n      display: flex;\n      flex-direction: row;\n      border-bottom: 1px solid #f0f0f0;\n      cursor: pointer;\n      padding: 8px 0; }\n  :host .grid-cell-work-order-list .table .table-body .table-row:hover {\n        background-color: #f0f0f0; }\n  :host .grid-cell-work-order-list .table .table-body .table-row.selected {\n        background-color: #e9f5ff;\n        border-bottom-color: #e9f5ff;\n        border-left: calc(2 * 1px) solid #595959;\n        border-right: calc(2 * 1px) solid #595959;\n        border-top: calc(2 * 1px) solid #595959; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell {\n        display: flex;\n        flex-direction: column; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell.illustration img {\n          max-height: 6rem; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .horizontal-separator {\n          margin-left: 2%; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .additional-data {\n          margin-top: 8px; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .label {\n          min-width: 2.5rem;\n          display: inline-block; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .label + .value {\n          margin-left: 5%; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .value {\n          font-weight: bold; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .designation {\n          font-style: italic; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell a {\n          color: #01579b; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell a:hover {\n            text-decoration: underline; }\n  :host .grid-cell-work-order-list .table .table-body .table-row-details {\n      display: flex;\n      flex-direction: column;\n      border-bottom: calc(2 * 1px) solid #595959;\n      border-left: calc(2 * 1px) solid #595959;\n      border-right: calc(2 * 1px) solid #595959;\n      border-top: 1px dashed #595959;\n      padding: 8px; }\n  :host .grid-cell-work-order-list .table .table-body .table-row-details .table-row-details-header {\n        margin-bottom: 8px; }\n  :host .row.nowrap {\n  flex-wrap: nowrap !important; }\n  :host ::ng-deep .tree-table-cell.illustration img {\n  max-height: 6rem; }\n  :host ::ng-deep .tree-table-cell .horizontal-separator {\n  margin-left: 2%; }\n  :host ::ng-deep .tree-table-cell .additional-data {\n  margin-top: 8px; }\n  :host ::ng-deep .tree-table-cell .label {\n  min-width: 2.5rem;\n  display: inline-block; }\n  :host ::ng-deep .tree-table-cell .label + .value {\n  margin-left: 5%; }\n  :host ::ng-deep .tree-table-cell .value {\n  font-weight: bold; }\n  :host ::ng-deep .tree-table-cell .designation {\n  font-style: italic;\n  white-space: normal; }\n  :host ::ng-deep .tree-table-cell a {\n  color: #01579b;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  /*       &:hover {\r\n        text-decoration: underline;\r\n      } */ }\n  :host ::ng-deep .small-calendar .ui-calendar {\n  width: 100px !important; }\n  :host ::ng-deep .small-calendar .ui-calendar .ui-inputtext {\n  padding: 0 !important; }\n  :host .table-filters-overlay {\n  display: flex;\n  flex-direction: column; }\n  :host .table-filters-overlay .filters {\n    display: flex;\n    flex-direction: column; }\n  :host .table-filters-overlay .filters > * {\n      margin-top: 8px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3Jrcy1tYW5hZ2VtZW50L2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbWFpbnRlbmFuY2VcXHdvcmtzLW1hbmFnZW1lbnRcXGZvcm1cXHdvcmtzLW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3Jrcy1tYW5hZ2VtZW50L2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3dvcmtzLW1hbmFnZW1lbnQvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2Uvd29ya3MtbWFuYWdlbWVudC9mb3JtL3dvcmtzLW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUlRLGdCQ21DVSxFQUFBO0VEdkNsQjtJQU9VLGNBQWMsRUFBQTtFQVB4QjtFQWNJLG1CQ1FXLEVBQUE7RUR0QmY7RUFpQkksbUJDR2lCLEVBQUE7RURwQnJCO0VBb0JJLG1CQ0FpQixFQUFBO0VEcEJyQjtFQXVCSSxtQkNGZ0IsRUFBQTtFRHJCcEI7RUEwQkksbUJDVmtCLEVBQUE7RURoQnRCO0VBNkJJLG1CQ2JrQixFQUFBO0VEaEJ0QjtFQWdDSSxtQkNUYSxFQUFBO0VEdkJqQjtFRWFFLGFBQWE7RUFDYixzQkFBc0I7RUZ5QmxCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUF4Q2pCO0lBMkNRLFVBQVUsRUFBQTtFQTNDbEI7SUErQ1EsWUFBWSxFQUFBO0VBL0NwQjtJQW1EUSxVQUFVLEVBQUE7RUFuRGxCO0lBdURRLFlBQVksRUFBQTtFQXZEcEI7SUEyRFEsWUFBWSxFQUFBO0VBM0RwQjtJQStEUSxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7RUFoRTFCOztJQXNFVSx3QkFBcUMsRUFBQTtFQXRFL0M7SUEyRVEsc0JDaEZ1QjtJRGlGdkIsd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixTQzFCWSxFQUFBO0VEbkRwQjtNRWtCRSxhQUFhO01BQ2IsbUJBQW1CO01GK0RYLGdDQ3BGb0I7TURxRnBCLGdCQXJGZ0I7TUFzRmhCLGdCQXRGZ0IsRUFBQTtFQUUxQjtNRWtCRSxhQUFhO01BQ2IsbUJBQW1CO01GdUVYLG1CQ25EUSxFQUFBO0VEdkNsQjtRRWtCRSxhQUFhO1FBQ2IsbUJBQW1CO1FGNEVULHFCQUFxQjtRQUNyQix5QkFBeUIsRUFBQTtFQWhHckM7VUFtR2MsZ0JDNURJLEVBQUE7RUR2Q2xCO1lBc0dnQixjQUFjLEVBQUE7RUF0RzlCO1FFa0JFLGFBQWE7UUFDYixtQkFBbUI7UUYyRlQsbUJBQW1CO1FBQ25CLGlCQ3hFTSxFQUFBO0VEdkNsQjtVQWtIYyxtQkFBbUI7VUFDbkIsaUJBQWlCO1VBQ2pCLFdBQVcsRUFBQTtFQXBIekI7UUVrQkUsYUFBYTtRQUNiLG1CQUFtQjtRRndHVCxxQkFBcUI7UUFDckIsWUFBWTtRQUNaLGlCQUFpQixFQUFBO0VBN0g3QjtVRXVCRSw2QkFBNkI7VUFDN0IsNEJEMUI0QjtVQzJCNUIsOEJBQThCO1VBQzlCLGdCQUFnQjtVQUNoQiwrQkFBK0I7VUFDL0IsbUJES2tCO1VDSmxCLDZCQUE2QjtVQUM3QixpQkRJZ0I7VUNIaEIsY0FBYztVQUNkLG9CQUFvQjtVQUNwQixrQkFBa0I7VUFDbEIsb0JBQW9CO1VBQ3BCLHVCREd1QjtVQ0Z2QixhQUFhO1VBQ2Isb0JBQW9CO1VBRXBCLGlEQUFpRDtVRitGckMsZ0JBQWdCO1VBQ2hCLFlBQVk7VUFFWixrRUFBa0UsRUFBQTtFQXpJaEY7WUFrSWdCLGNDcEljO1lEcUlkLGdCQUFnQixFQUFBO0VBbkloQztZQWtJZ0IsY0NwSWM7WURxSWQsZ0JBQWdCLEVBQUE7RUFuSWhDO1lBa0lnQixjQ3BJYztZRHFJZCxnQkFBZ0IsRUFBQTtFQW5JaEM7WUFrSWdCLGNDcEljO1lEcUlkLGdCQUFnQixFQUFBO0VBbkloQztZQTRJZ0IsNEJDN0lNO1lEOElOLGFBQWE7WUFDYixXQUFXLEVBQUE7RUE5STNCO0lBc0pRLHlCQUFzQyxFQUFBO0VBdEo5QztNRWtCRSxhQUFhO01BQ2IsbUJBQW1CO01Gd0lYLGdDQy9KMEI7TURnSzFCLGVBQWU7TUFDZixjQUF3QixFQUFBO0VBN0psQztRQWdLWSx5QkNwS3dCLEVBQUE7RURJcEM7UUFvS1kseUJBQTZDO1FBQzdDLDRCQUFnRDtRQUNoRCx3Q0N4S2tCO1FEeUtsQix5Q0N6S2tCO1FEMEtsQix1Q0MxS2tCLEVBQUE7RURFOUI7UUVhRSxhQUFhO1FBQ2Isc0JBQXNCLEVBQUE7RUZkeEI7VUErS2MsZ0JBQWdCLEVBQUE7RUEvSzlCO1VBbUxjLGVBQWUsRUFBQTtFQW5MN0I7VUF1TGMsZUNoSkksRUFBQTtFRHZDbEI7VUEyTGMsaUJBQWlCO1VBQ2pCLHFCQUFxQixFQUFBO0VBNUxuQztVQWdNYyxlQUFlLEVBQUE7RUFoTTdCO1VBb01jLGlCQUFpQixFQUFBO0VBcE0vQjtVQXdNYyxrQkFBa0IsRUFBQTtFQXhNaEM7VUE0TWMsY0M3TVEsRUFBQTtFREN0QjtZQStNZ0IsMEJBQTBCLEVBQUE7RUEvTTFDO01FYUUsYUFBYTtNQUNiLHNCQUFzQjtNRjBNZCwwQ0MxTm9CO01EMk5wQix3Q0MzTm9CO01ENE5wQix5Q0M1Tm9CO01ENk5wQiw4QkM3Tm9CO01EOE5wQixZQ3JMUSxFQUFBO0VEdkNsQjtRQStOWSxrQkN4TE0sRUFBQTtFRHZDbEI7RUF1T0ksNEJBQTRCLEVBQUE7RUF2T2hDO0VBOE9NLGdCQUFnQixFQUFBO0VBOU90QjtFQWtQTSxlQUFlLEVBQUE7RUFsUHJCO0VBc1BNLGVDL01ZLEVBQUE7RUR2Q2xCO0VBMFBNLGlCQUFpQjtFQUNqQixxQkFBcUIsRUFBQTtFQTNQM0I7RUErUE0sZUFBZSxFQUFBO0VBL1ByQjtFQW1RTSxpQkFBaUIsRUFBQTtFQW5RdkI7RUF1UU0sa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBeFF6QjtFQTRRTSxjQzdRZ0I7RUQ4UWhCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCOztTRzFFRyxFSDRFQztFQWhSVjtFQXFSSSx1QkFBdUIsRUFBQTtFQXJSM0I7RUF5UkkscUJBQXFCLEVBQUE7RUF6UnpCO0VFYUUsYUFBYTtFQUNiLHNCQUFzQixFQUFBO0VGZHhCO0lFYUUsYUFBYTtJQUNiLHNCQUFzQixFQUFBO0VGZHhCO01BbVNRLGVDNVBVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3dvcmtzLW1hbmFnZW1lbnQvZm9ybS93b3Jrcy1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbiR0YWJsZS1oZWFkZXItaGVpZ2h0OiAyNHB4O1xyXG5cclxuOmhvc3Qge1xyXG4gIC5ncmlkLWNlbGwtc2VhcmNoIHtcclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLnBsYSAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZDogJGdyZXkxO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgcC1wcm9ncmVzc2Jhci5vbmcgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICRibHVlLWxpZ2h0MTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIHAtcHJvZ3Jlc3NiYXIudGJjIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZS1saWdodDE7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLnBlciAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZDogJGJsdWUtZGFyazE7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLmNsbyAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZDogJGdyZWVuLWxpZ2h0MTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIHAtcHJvZ3Jlc3NiYXIucG9zIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ3JlZW4tbGlnaHQxO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgcC1wcm9ncmVzc2Jhci5wb3IgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICR5ZWxsb3cxO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3Qge1xyXG4gICAgLnRhYmxlIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAud29ya09yZGVyIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZW5naW5lZXJpbmdEYXRhIHtcclxuICAgICAgICB3aWR0aDogMjIuNSU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mbGVldERhdGEge1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zY2hlZHVsaW5nRGF0YSB7XHJcbiAgICAgICAgd2lkdGg6IDE3LjUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXhlY3V0aW9uRGF0YSB7XHJcbiAgICAgICAgd2lkdGg6IDE3LjUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaWxsdXN0cmF0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTIuNSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFibGUtYm9keSxcclxuICAgICAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgLnRhYmxlLWNlbGwge1xyXG4gICAgICAgICAgcGFkZGluZzogMCBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB0b3A6ICR0b3BiYXItaGVpZ2h0O1xyXG5cclxuICAgICAgICAudGFibGUtcm93IHtcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAkdGFibGUtaGVhZGVyLWhlaWdodDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6ICR0YWJsZS1oZWFkZXItaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYmxlLWFjdGlvbnMge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgICAucm93LWFjdGlvbnMge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgICAgJiA+IC5hdy1idG4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhYmxlLWZpbHRlcnMge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhYmxlLWdsb2JhbC1maWx0ZXIge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG5cclxuICAgICAgICAgICAgLmdsb2JhbC1maWx0ZXItaW5wdXQge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEycmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMnJlbTtcclxuXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dCwgd2lkdGggMC41cyBlYXNlO1xyXG5cclxuICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFibGUtYm9keSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNSk7XHJcblxyXG4gICAgICAgIC50YWJsZS1yb3cge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZSAwO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGFjY2VudC1jb2xvciwgNjUlKTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbGlnaHRlbigkYWNjZW50LWNvbG9yLCA2NSUpO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogY2FsYygyICogI3skYm9yZGVyLXdpZHRofSkgJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IGNhbGMoMiAqICN7JGJvcmRlci13aWR0aH0pICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogY2FsYygyICogI3skYm9yZGVyLXdpZHRofSkgJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50YWJsZS1jZWxsIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgICAgICAgICYuaWxsdXN0cmF0aW9uIGltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogNnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhvcml6b250YWwtc2VwYXJhdG9yIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hZGRpdGlvbmFsLWRhdGEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGFiZWwgKyAudmFsdWUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRlc2lnbmF0aW9uIHtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYmxlLXJvdy1kZXRhaWxzIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcblxyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogY2FsYygyICogI3skYm9yZGVyLXdpZHRofSkgJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IGNhbGMoMiAqICN7JGJvcmRlci13aWR0aH0pICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogY2FsYygyICogI3skYm9yZGVyLXdpZHRofSkgJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlci13aWR0aCBkYXNoZWQgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICAgLnRhYmxlLXJvdy1kZXRhaWxzLWhlYWRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucm93Lm5vd3JhcCB7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC50cmVlLXRhYmxlLWNlbGwge1xyXG4gICAgLy9AaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICYuaWxsdXN0cmF0aW9uIGltZyB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDZyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmhvcml6b250YWwtc2VwYXJhdG9yIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGRpdGlvbmFsLWRhdGEge1xyXG4gICAgICBtYXJnaW4tdG9wOiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYWJlbCB7XHJcbiAgICAgIG1pbi13aWR0aDogMi41cmVtO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhYmVsICsgLnZhbHVlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC52YWx1ZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNpZ25hdGlvbiB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgLyogICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH0gKi9cclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuc21hbGwtY2FsZW5kYXIgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5zbWFsbC1jYWxlbmRhciAudWktY2FsZW5kYXIgLnVpLWlucHV0dGV4dCB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGFibGUtZmlsdGVycy1vdmVybGF5IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcblxyXG4gICAgLmZpbHRlcnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAgJiA+ICoge1xyXG4gICAgICAgIG1hcmdpbi10b3A6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QgLmdyaWQtY2VsbC1zZWFyY2ggLnNlYXJjaC1hY3Rpb25zIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7IH1cbiAgOmhvc3QgLmdyaWQtY2VsbC1zZWFyY2ggLnNlYXJjaC1hY3Rpb25zIGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuXG46aG9zdCA6Om5nLWRlZXAgcC1wcm9ncmVzc2Jhci5wbGEgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgYmFja2dyb3VuZDogI2M4ZDRkNjsgfVxuXG46aG9zdCA6Om5nLWRlZXAgcC1wcm9ncmVzc2Jhci5vbmcgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgYmFja2dyb3VuZDogI2I4ZDBlODsgfVxuXG46aG9zdCA6Om5nLWRlZXAgcC1wcm9ncmVzc2Jhci50YmMgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgYmFja2dyb3VuZDogI2I4ZDBlODsgfVxuXG46aG9zdCA6Om5nLWRlZXAgcC1wcm9ncmVzc2Jhci5wZXIgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgYmFja2dyb3VuZDogIzAwNmVhOTsgfVxuXG46aG9zdCA6Om5nLWRlZXAgcC1wcm9ncmVzc2Jhci5jbG8gLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgYmFja2dyb3VuZDogIzRjYWY1MDsgfVxuXG46aG9zdCA6Om5nLWRlZXAgcC1wcm9ncmVzc2Jhci5wb3MgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgYmFja2dyb3VuZDogIzRjYWY1MDsgfVxuXG46aG9zdCA6Om5nLWRlZXAgcC1wcm9ncmVzc2Jhci5wb3IgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgYmFja2dyb3VuZDogI2RkZGYwMDsgfVxuXG46aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlOyB9XG4gIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAud29ya09yZGVyIHtcbiAgICB3aWR0aDogMjAlOyB9XG4gIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAuZW5naW5lZXJpbmdEYXRhIHtcbiAgICB3aWR0aDogMjIuNSU7IH1cbiAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC5mbGVldERhdGEge1xuICAgIHdpZHRoOiAxMCU7IH1cbiAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC5zY2hlZHVsaW5nRGF0YSB7XG4gICAgd2lkdGg6IDE3LjUlOyB9XG4gIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAuZXhlY3V0aW9uRGF0YSB7XG4gICAgd2lkdGg6IDE3LjUlOyB9XG4gIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAuaWxsdXN0cmF0aW9uIHtcbiAgICB3aWR0aDogMTIuNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtY2VsbCxcbiAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLWNlbGwge1xuICAgIHBhZGRpbmc6IDAgY2FsYyg4cHggLyAyKTsgfVxuICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogNDBweDsgfVxuICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzU5NTk1OTtcbiAgICAgIG1heC1oZWlnaHQ6IDI0cHg7XG4gICAgICBtaW4taGVpZ2h0OiAyNHB4OyB9XG4gICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4OyB9XG4gICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtYWN0aW9ucyAucm93LWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cbiAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLWFjdGlvbnMgLnJvdy1hY3Rpb25zID4gLmF3LWJ0biB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDsgfVxuICAgICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1hY3Rpb25zIC5yb3ctYWN0aW9ucyA+IC5hdy1idG46Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLWFjdGlvbnMgLnRhYmxlLWZpbHRlcnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxuICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtYWN0aW9ucyAudGFibGUtZmlsdGVycyA+IC5hdy1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgICAgIHdpZHRoOiAycmVtOyB9XG4gICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtYWN0aW9ucyAudGFibGUtZ2xvYmFsLWZpbHRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTsgfVxuICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtYWN0aW9ucyAudGFibGUtZ2xvYmFsLWZpbHRlciAuZ2xvYmFsLWZpbHRlci1pbnB1dCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzU5NTk1OTtcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICBtaW4td2lkdGg6IDEycmVtO1xuICAgICAgICAgIHdpZHRoOiAxMnJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0LCB3aWR0aCAwLjVzIGVhc2U7IH1cbiAgICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtYWN0aW9ucyAudGFibGUtZ2xvYmFsLWZpbHRlciAuZ2xvYmFsLWZpbHRlci1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtYWN0aW9ucyAudGFibGUtZ2xvYmFsLWZpbHRlciAuZ2xvYmFsLWZpbHRlci1pbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1hY3Rpb25zIC50YWJsZS1nbG9iYWwtZmlsdGVyIC5nbG9iYWwtZmlsdGVyLWlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1hY3Rpb25zIC50YWJsZS1nbG9iYWwtZmlsdGVyIC5nbG9iYWwtZmlsdGVyLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtYWN0aW9ucyAudGFibGUtZ2xvYmFsLWZpbHRlciAuZ2xvYmFsLWZpbHRlci1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDE1NzliO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyB9XG4gIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSB7XG4gICAgbWluLWhlaWdodDogY2FsYyg4cHggKiA1KTsgfVxuICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHggMDsgfVxuICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3c6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyB9XG4gICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdy5zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWY1ZmY7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlOWY1ZmY7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBjYWxjKDIgKiAxcHgpIHNvbGlkICM1OTU5NTk7XG4gICAgICAgIGJvcmRlci1yaWdodDogY2FsYygyICogMXB4KSBzb2xpZCAjNTk1OTU5O1xuICAgICAgICBib3JkZXItdG9wOiBjYWxjKDIgKiAxcHgpIHNvbGlkICM1OTU5NTk7IH1cbiAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93IC50YWJsZS1jZWxsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdyAudGFibGUtY2VsbC5pbGx1c3RyYXRpb24gaW1nIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA2cmVtOyB9XG4gICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93IC50YWJsZS1jZWxsIC5ob3Jpem9udGFsLXNlcGFyYXRvciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlOyB9XG4gICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93IC50YWJsZS1jZWxsIC5hZGRpdGlvbmFsLWRhdGEge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDsgfVxuICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdyAudGFibGUtY2VsbCAubGFiZWwge1xuICAgICAgICAgIG1pbi13aWR0aDogMi41cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdyAudGFibGUtY2VsbCAubGFiZWwgKyAudmFsdWUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTsgfVxuICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdyAudGFibGUtY2VsbCAudmFsdWUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG4gICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93IC50YWJsZS1jZWxsIC5kZXNpZ25hdGlvbiB7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljOyB9XG4gICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93IC50YWJsZS1jZWxsIGEge1xuICAgICAgICAgIGNvbG9yOiAjMDE1NzliOyB9XG4gICAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3cgLnRhYmxlLWNlbGwgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93LWRldGFpbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBib3JkZXItYm90dG9tOiBjYWxjKDIgKiAxcHgpIHNvbGlkICM1OTU5NTk7XG4gICAgICBib3JkZXItbGVmdDogY2FsYygyICogMXB4KSBzb2xpZCAjNTk1OTU5O1xuICAgICAgYm9yZGVyLXJpZ2h0OiBjYWxjKDIgKiAxcHgpIHNvbGlkICM1OTU5NTk7XG4gICAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICM1OTU5NTk7XG4gICAgICBwYWRkaW5nOiA4cHg7IH1cbiAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93LWRldGFpbHMgLnRhYmxlLXJvdy1kZXRhaWxzLWhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxuXG46aG9zdCAucm93Lm5vd3JhcCB7XG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QgOjpuZy1kZWVwIC50cmVlLXRhYmxlLWNlbGwuaWxsdXN0cmF0aW9uIGltZyB7XG4gIG1heC1oZWlnaHQ6IDZyZW07IH1cblxuOmhvc3QgOjpuZy1kZWVwIC50cmVlLXRhYmxlLWNlbGwgLmhvcml6b250YWwtc2VwYXJhdG9yIHtcbiAgbWFyZ2luLWxlZnQ6IDIlOyB9XG5cbjpob3N0IDo6bmctZGVlcCAudHJlZS10YWJsZS1jZWxsIC5hZGRpdGlvbmFsLWRhdGEge1xuICBtYXJnaW4tdG9wOiA4cHg7IH1cblxuOmhvc3QgOjpuZy1kZWVwIC50cmVlLXRhYmxlLWNlbGwgLmxhYmVsIHtcbiAgbWluLXdpZHRoOiAyLjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG46aG9zdCA6Om5nLWRlZXAgLnRyZWUtdGFibGUtY2VsbCAubGFiZWwgKyAudmFsdWUge1xuICBtYXJnaW4tbGVmdDogNSU7IH1cblxuOmhvc3QgOjpuZy1kZWVwIC50cmVlLXRhYmxlLWNlbGwgLnZhbHVlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuOmhvc3QgOjpuZy1kZWVwIC50cmVlLXRhYmxlLWNlbGwgLmRlc2lnbmF0aW9uIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9XG5cbjpob3N0IDo6bmctZGVlcCAudHJlZS10YWJsZS1jZWxsIGEge1xuICBjb2xvcjogIzAxNTc5YjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAvKiAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgfSAqLyB9XG5cbjpob3N0IDo6bmctZGVlcCAuc21hbGwtY2FsZW5kYXIgLnVpLWNhbGVuZGFyIHtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QgOjpuZy1kZWVwIC5zbWFsbC1jYWxlbmRhciAudWktY2FsZW5kYXIgLnVpLWlucHV0dGV4dCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxuXG46aG9zdCAudGFibGUtZmlsdGVycy1vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICA6aG9zdCAudGFibGUtZmlsdGVycy1vdmVybGF5IC5maWx0ZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICA6aG9zdCAudGFibGUtZmlsdGVycy1vdmVybGF5IC5maWx0ZXJzID4gKiB7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/maintenance/works-management/form/works-management-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/maintenance/works-management/form/works-management-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: WorksManagementFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksManagementFormComponent", function() { return WorksManagementFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/bido-evolution-constants */ "./src/app/shared/constants/bido-evolution-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_page_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/page.service */ "./src/app/shared/services/page.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/utils/bido-equipment-utils */ "./src/app/shared/utils/bido-equipment-utils.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _works_management_form_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./works-management-form.service */ "./src/app/main/maintenance/works-management/form/works-management-form.service.ts");
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



















var WorksManagementFormComponent = /** @class */ (function (_super) {
    __extends(WorksManagementFormComponent, _super);
    function WorksManagementFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, worksManagementFormService, sessionService, pageService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.worksManagementFormService = worksManagementFormService;
        _this.sessionService = sessionService;
        _this.pageService = pageService;
        _this.awPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"];
        _this.init();
        _this.initTablesHeader();
        return _this;
    }
    WorksManagementFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].MAI_COMPONENT_WORKS_MANAGEMENT;
    };
    WorksManagementFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.getWorkOrders();
    };
    WorksManagementFormComponent.prototype.init = function () {
        var _this = this;
        this.worksManagementTable = [];
        this.worksManagementTableResult = [];
        this.selectedWorkOrders = [];
        this.searchStatusList = [];
        this.searchTypeList = [];
        this.searchWOAssetList = [];
        this.searchWPAssetList = [];
        this.searchWOCodeList = [];
        this.searchUserList = [];
        this.criteriaStatusList = [];
        this.criteriaTypeList = [];
        this.worksManagementFormService
            .loadGenProps(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__["GenericPropertyConstants"].AIRM_WORK_ORDER_TYPES_MAP)
            .subscribe(function (result) { return (_this.searchTypeList = result); });
        this.worksManagementFormService
            .loadGenProps(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__["GenericPropertyConstants"].AIRM_OPERATION_STATUS_MAP)
            .subscribe(function (result) { return (_this.searchStatusList = result); });
        this.initializeFilters();
    };
    WorksManagementFormComponent.prototype.getWorkOrders = function () {
        var _this = this;
        if (this.sessionService.loggedUser) {
            this.isLoadingWorksManagementTable = true;
            this.worksManagementFormService.findBidoUserByLogin(this.sessionService.loggedUser.login).subscribe(function (user) {
                if (user.userId) {
                    _this.context = user.firstname + " " + user.lastname;
                    _this.displayComponentContext(_this.context, true);
                    _this.userConnectedId = {
                        userId: user.userId
                    };
                    _this.worksManagementFormService.loadUserList().subscribe(function (result) {
                        _this.userList = result;
                        _this.worksManagementFormService.initializeWorksManagement().subscribe(function (workOrderList) {
                            _this.isLoadingWorksManagementTable = false;
                            _this.setWorkOrdersRows(workOrderList);
                        });
                    });
                }
            });
        }
    };
    WorksManagementFormComponent.prototype.initTablesHeader = function () {
        this.worksManagementTableCols = [
            { field: 'workPackage', alignment: 'left', width: '8%' },
            { field: 'workOrder', alignment: 'left', width: '8%' },
            { field: 'origin', alignment: 'left', width: '21.5%' },
            { field: 'scheduling', alignment: 'left', width: '23%' },
            { field: 'execution', alignment: 'left', width: '23%' },
            { field: 'asset', alignment: 'left', width: '16.5%' }
        ];
    };
    WorksManagementFormComponent.prototype.setWorkOrdersRows = function (workOrderList) {
        var _this = this;
        var cent = 100;
        this.worksManagementTable = [];
        workOrderList.forEach(function (worksManagement) {
            worksManagement.worksManagementInformationDTOs.forEach(function (worksManagementInformation) {
                var workOrder = worksManagementInformation.bidmWorkOrderDTO;
                if (workOrder.woCode) {
                    var jobCardRow = {
                        workOrderDTO: workOrder,
                        projectDTO: worksManagement.bidmProjectDTO,
                        workOrderStatusDetailDTO: worksManagementInformation.workOrderStatusDetailDTO,
                        worksManagementDTO: worksManagement,
                        worksManagementInformationDTO: worksManagementInformation,
                        bidmWorkOrderDataDTO: worksManagementInformation.bidmWorkOrderDataDTO,
                        woCodeNumber: Number(workOrder.woCode.slice(2))
                    };
                    jobCardRow.wpEquipementDTO = worksManagementInformation.wpEquipmentDTO;
                    jobCardRow.woEquipementDTO = worksManagementInformation.woEquipmentDTO;
                    jobCardRow.wpProgressPercent = (worksManagement.nbCloseWorkOrders / worksManagement.nbTotalWorkOrders) * cent;
                    jobCardRow.wpProgressStatus = worksManagement.bidmProjectDTO.statusState
                        ? worksManagement.bidmProjectDTO.statusState.slice(2)
                        : undefined;
                    jobCardRow.assetRepresentation = worksManagementInformation.woEquipmentDTO
                        ? _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_15__["BidoEquipmentUtils"].toString(worksManagementInformation.woEquipmentDTO, false)
                        : _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_15__["BidoEquipmentUtils"].toString(worksManagementInformation.wpEquipmentDTO, false);
                    jobCardRow.asset = worksManagementInformation.woEquipmentDTO
                        ? worksManagementInformation.woEquipmentDTO
                        : worksManagementInformation.wpEquipmentDTO;
                    jobCardRow.progressStatus = workOrder.calculatedStatus ? workOrder.calculatedStatus.slice(2) : undefined;
                    jobCardRow.assignedTo = _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_17__["SelectItemUtils"].formatSelectItem(jobCardRow.workOrderDTO.woAssignedTo, _this.userList);
                    jobCardRow.originText = worksManagementInformation.originText;
                    jobCardRow.evolutionType = worksManagementInformation.evolutionType;
                    _this.worksManagementTableResult.push(jobCardRow);
                    _this.initializeSearchCriteria(jobCardRow);
                    if (_this.jobCardRowMatchFilters(jobCardRow)) {
                        _this.worksManagementTable.push(jobCardRow);
                    }
                    if (_this.worksManagementTable.length > 1) {
                        _this.worksManagementTable.sort(function (a, b) { return a.woCodeNumber - b.woCodeNumber; });
                    }
                }
            });
        });
    };
    WorksManagementFormComponent.prototype.openSnLink = function (equipment) {
        if (equipment && equipment.equipmentCode) {
            this.pageService.openAsset(equipment.equipmentCode, equipment.equipmentFunction);
        }
    };
    WorksManagementFormComponent.prototype.openWorkPackageLink = function (wpId) {
        this.openWorkPackage(wpId, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read);
    };
    WorksManagementFormComponent.prototype.openWorkPackage = function (id, openModeWanted) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].MAI_WORK_PACKAGE_FORM,
            openMode: openModeWanted,
            objectId: this.serializationService.serialize({ wpId: id })
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorksManagementFormComponent.prototype.openWorkOrderLink = function (workOrder) {
        if (workOrder.woId && workOrder.projectId) {
            var workOrderId = {
                woId: workOrder.woId,
                projectId: workOrder.projectId
            };
            this.openWorkOrder(workOrderId, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read);
        }
    };
    WorksManagementFormComponent.prototype.openWorkOrder = function (wo, openModeWanted) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].MAI_WORK_ORDER_FORM,
            openMode: openModeWanted,
            objectId: this.serializationService.serialize(wo)
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorksManagementFormComponent.prototype.onReload = function () {
        this.init();
        this.getWorkOrders();
    };
    WorksManagementFormComponent.prototype.consultWorkOrderOrigin = function (row) {
        var _this = this;
        if (!!row.originText && row.wpEquipementDTO) {
            var bidmWorkOrderDTO_1 = row.workOrderDTO;
            var assetWorkOrderOriginInput = {
                woType: bidmWorkOrderDTO_1.woType,
                woSource: bidmWorkOrderDTO_1.woSource,
                evolutionType: row.evolutionType,
                familyVariantCode: row.woEquipementDTO
                    ? row.woEquipementDTO.familyVariantCode
                    : row.wpEquipementDTO.familyVariantCode
            };
            this.worksManagementFormService.findWorkOrderOriginDetails(assetWorkOrderOriginInput).subscribe(function (result) {
                if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].AIRM_WORK_ORDER_TYPE_TASK === bidmWorkOrderDTO_1.woType) {
                    if (!!result.bireTaskDTOId) {
                        // open task form
                        var bireTaskDTO = result.bireTaskDTOId;
                        _this.pageService.openTask(bireTaskDTO);
                    }
                }
                else if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].AIRM_WORK_ORDER_TYPE_EVOLUTION === bidmWorkOrderDTO_1.woType) {
                    if (_shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_3__["BidoEvolutionConstants"].CODE_EVOLUTION === row.evolutionType) {
                        if (!!result.bireEvolutionDTOId) {
                            // open evolution form
                            var bireEvolutionDTOId = {
                                adSbModDTOId: result.bireEvolutionDTOId
                            };
                            _this.pageService.openEvolution(bireEvolutionDTOId);
                        }
                    }
                    else if (_shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_3__["BidoEvolutionConstants"].CODE_AD === row.evolutionType) {
                        if (!!result.bireSbDTOId) {
                            // open Airworthiness Directive form
                            var bireSBDTOId = {
                                adSbModDTOId: result.bireSbDTOId
                            };
                            _this.pageService.openAD(bireSBDTOId);
                        }
                    }
                    else if (_shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_3__["BidoEvolutionConstants"].CODE_SB === row.evolutionType) {
                        if (!!result.bireSbDTOId) {
                            // open Service Bulletin form
                            var bireSbDTOId = {
                                adSbModDTOId: result.bireSbDTOId
                            };
                            _this.pageService.openSB(bireSbDTOId);
                        }
                    }
                    else if (_shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_3__["BidoEvolutionConstants"].CODE_MODIFICATION === row.evolutionType) {
                        if (!!result.bireModificationDTOId) {
                            // open modification form
                            var bireModificationDTOId = {
                                adSbModDTOId: result.bireModificationDTOId
                            };
                            _this.pageService.openModification(bireModificationDTOId);
                        }
                    }
                }
                else if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].AIRM_WORK_ORDER_TYPE_DEFECT === bidmWorkOrderDTO_1.woType) {
                    if (!!result.bidoNotificationDTOId) {
                        // open event form
                        _this.pageService.openEvent(result.bidoNotificationDTOId);
                    }
                }
                else if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].AIRM_WORK_ORDER_TYPE_SN_CHANGE === bidmWorkOrderDTO_1.woType) {
                    if (!!result.bidoEquipmentDTO) {
                        _this.pageService.openAsset(result.bidoEquipmentDTO.equipmentCode, result.bidoEquipmentDTO.equipmentFunction);
                    }
                }
            });
        }
    };
    WorksManagementFormComponent.prototype.filterWithCriteria = function () {
        var _this = this;
        this.worksManagementTable = [];
        this.worksManagementTableResult.forEach(function (jobCardRow) {
            if (_this.jobCardRowMatchFilters(jobCardRow)) {
                _this.worksManagementTable.push(jobCardRow);
            }
        });
    };
    WorksManagementFormComponent.prototype.initializeSearchCriteria = function (jobCardRow) {
        if (jobCardRow.workOrderStatusDetailDTO &&
            jobCardRow.workOrderStatusDetailDTO.status &&
            !this.criteriaStatusList.includes(jobCardRow.workOrderStatusDetailDTO.status)) {
            this.criteriaStatusList.push(jobCardRow.workOrderStatusDetailDTO.status);
        }
        if (jobCardRow.workOrderDTO.woType && !this.criteriaTypeList.includes(jobCardRow.workOrderDTO.woType)) {
            this.criteriaTypeList.push(jobCardRow.workOrderDTO.woType);
        }
        if (jobCardRow.wpEquipementDTO) {
            if (this.searchWPAssetList.filter(function (item) { return jobCardRow.wpEquipementDTO && item.value === jobCardRow.wpEquipementDTO.equipmentCode; }).length === 0) {
                this.searchWPAssetList.push({
                    label: _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_15__["BidoEquipmentUtils"].toString(jobCardRow.wpEquipementDTO),
                    value: jobCardRow.wpEquipementDTO.equipmentCode
                });
            }
            this.searchWPAssetList.sort(_shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_17__["SelectItemUtils"].labelSorter);
        }
        if (jobCardRow.woEquipementDTO) {
            if (this.searchWOAssetList.filter(function (item) { return jobCardRow.woEquipementDTO && item.value === jobCardRow.woEquipementDTO.equipmentCode; }).length === 0) {
                this.searchWOAssetList.push({
                    label: _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_15__["BidoEquipmentUtils"].toString(jobCardRow.woEquipementDTO),
                    value: jobCardRow.woEquipementDTO.equipmentCode
                });
                this.searchWOAssetList.sort(_shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_17__["SelectItemUtils"].labelSorter);
            }
        }
        if (this.searchWOCodeList.filter(function (item) { return jobCardRow.woEquipementDTO && item.value === jobCardRow.workOrderDTO.woCode; }).length === 0) {
            this.searchWOCodeList.push({
                label: jobCardRow.workOrderDTO.woCode,
                value: jobCardRow.workOrderDTO.woCode
            });
            this.searchWOCodeList.sort(_shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_17__["SelectItemUtils"].labelSorter);
        }
        if (jobCardRow.workOrderDTO.woAssignedTo &&
            this.searchUserList.filter(function (item) { return !!jobCardRow.workOrderDTO.woAssignedTo && item.value === jobCardRow.workOrderDTO.woAssignedTo; }).length === 0) {
            this.searchUserList.push({
                label: _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_17__["SelectItemUtils"].formatSelectItem(jobCardRow.workOrderDTO.woAssignedTo, this.userList),
                value: jobCardRow.workOrderDTO.woAssignedTo
            });
            this.searchUserList.sort(_shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_17__["SelectItemUtils"].labelSorter);
        }
    };
    WorksManagementFormComponent.prototype.jobCardRowMatchFilters = function (jobCardRow) {
        var statusMatch = true;
        var typeMatch = true;
        var wpAssetMatch = true;
        var woAssetMatch = true;
        var nextDayMatch = true;
        var assignedToMatch = true;
        var woCodeMatch = true;
        var scheduledStartDateMatch = true;
        var scheduledEndDateMatch = true;
        var executionStartDateMatch = true;
        var executionEndDateMatch = true;
        if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__["ListUtils"].isNullOrEmpty(this.searchCriteria.statusList) &&
            jobCardRow.workOrderStatusDetailDTO &&
            jobCardRow.workOrderStatusDetailDTO.status) {
            statusMatch = this.searchCriteria.statusList.includes(jobCardRow.workOrderStatusDetailDTO.status);
        }
        if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__["ListUtils"].isNullOrEmpty(this.searchCriteria.typeList) && jobCardRow.workOrderDTO.woType) {
            typeMatch = this.searchCriteria.typeList.includes(jobCardRow.workOrderDTO.woType);
        }
        if (this.searchCriteria.woAsset) {
            if (jobCardRow.woEquipementDTO && jobCardRow.woEquipementDTO.equipmentCode === this.searchCriteria.woAsset) {
                woAssetMatch = true;
            }
            else {
                woAssetMatch = false;
            }
        }
        if (this.searchCriteria.wpAsset) {
            if (jobCardRow.wpEquipementDTO && jobCardRow.wpEquipementDTO.equipmentCode === this.searchCriteria.wpAsset) {
                wpAssetMatch = true;
            }
            else {
                wpAssetMatch = false;
            }
        }
        if (this.searchCriteria.nextDays) {
            if (jobCardRow.projectDTO &&
                jobCardRow.workOrderDTO.woScheduledStartDate &&
                moment__WEBPACK_IMPORTED_MODULE_1__(jobCardRow.workOrderDTO.woScheduledStartDate).isAfter(new Date()) &&
                moment__WEBPACK_IMPORTED_MODULE_1__(jobCardRow.workOrderDTO.woScheduledStartDate).isBefore(moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).add(this.searchCriteria.nextDays, 'days'))) {
                nextDayMatch = true;
            }
            else {
                nextDayMatch = false;
            }
        }
        if (this.searchCriteria.assignedTo && this.searchCriteria.assignedTo !== jobCardRow.workOrderDTO.woAssignedTo) {
            assignedToMatch = false;
        }
        if (this.searchCriteria.woCode && this.searchCriteria.woCode !== jobCardRow.workOrderDTO.woCode) {
            woCodeMatch = false;
        }
        if (this.searchCriteria.scheduledStartDate &&
            !moment__WEBPACK_IMPORTED_MODULE_1__(this.searchCriteria.scheduledStartDate).isSame(jobCardRow.workOrderDTO.woScheduledStartDate, 'day')) {
            scheduledStartDateMatch = false;
        }
        if (this.searchCriteria.scheduledEndDate &&
            !moment__WEBPACK_IMPORTED_MODULE_1__(this.searchCriteria.scheduledEndDate).isSame(jobCardRow.workOrderDTO.woScheduledEndDate, 'day')) {
            scheduledEndDateMatch = false;
        }
        if (this.searchCriteria.executionStartDate &&
            jobCardRow.workOrderStatusDetailDTO &&
            !moment__WEBPACK_IMPORTED_MODULE_1__(this.searchCriteria.executionStartDate).isSame(jobCardRow.workOrderStatusDetailDTO.startDate, 'day')) {
            executionStartDateMatch = false;
        }
        if (this.searchCriteria.executionEndDate &&
            jobCardRow.workOrderStatusDetailDTO &&
            !moment__WEBPACK_IMPORTED_MODULE_1__(this.searchCriteria.executionEndDate).isSame(jobCardRow.workOrderStatusDetailDTO.endDate, 'day')) {
            executionEndDateMatch = false;
        }
        return (statusMatch &&
            typeMatch &&
            wpAssetMatch &&
            woAssetMatch &&
            nextDayMatch &&
            assignedToMatch &&
            woCodeMatch &&
            executionEndDateMatch &&
            executionStartDateMatch &&
            scheduledStartDateMatch &&
            scheduledEndDateMatch);
    };
    WorksManagementFormComponent.prototype.initializeFilters = function () {
        this.searchCriteria = {
            statusList: this.criteriaStatusList,
            typeList: this.criteriaTypeList,
            assignedTo: '',
            woAsset: '',
            wpAsset: '',
            woCode: ''
        };
    };
    WorksManagementFormComponent.prototype.resetTableFilters = function () {
        this.initializeFilters();
        this.filterWithCriteria();
    };
    WorksManagementFormComponent.prototype.manageButtonDisplay = function () {
        var _this = this;
        this.showCloseWoBtn = false;
        this.showCloseWpBtn = false;
        this.showControlWoBtn = false;
        if (this.selectedWorkOrders.length > 0) {
            this.showCloseWoBtn = true;
            this.showCloseWpBtn = true;
            this.showControlWoBtn = true;
            this.selectedWorkOrders.forEach(function (row) {
                if (row.workOrderDTO.calculatedStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_PERFORMED) {
                    if (row.workOrderStatusDetailDTO.isCritical && row.workOrderStatusDetailDTO.bidmOperationDataList) {
                        if (row.workOrderStatusDetailDTO.bidmOperationDataList.filter(function (ope) { return ope.opeStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_PERFORMED; }).length > 0) {
                            _this.showControlWoBtn = false;
                        }
                        if (row.workOrderStatusDetailDTO.bidmOperationDataList.filter(function (ope) { return ope.opeStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_CLOSE; }).length > 0) {
                            _this.showCloseWoBtn = false;
                        }
                    }
                    else {
                        _this.showControlWoBtn = false;
                    }
                }
                else {
                    _this.showCloseWoBtn = false;
                    _this.showControlWoBtn = false;
                }
                if (row.projectDTO.statusState !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_PERFORMED) {
                    _this.showCloseWpBtn = false;
                }
            });
        }
    };
    WorksManagementFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-works-management-form',
            template: __webpack_require__(/*! ./works-management-form.component.html */ "./src/app/main/maintenance/works-management/form/works-management-form.component.html"),
            styles: [__webpack_require__(/*! ./works-management-form.component.scss */ "./src/app/main/maintenance/works-management/form/works-management-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__["TabService"],
            _works_management_form_service__WEBPACK_IMPORTED_MODULE_18__["WorksManagementFormService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"],
            _shared_services_page_service__WEBPACK_IMPORTED_MODULE_10__["PageService"]])
    ], WorksManagementFormComponent);
    return WorksManagementFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_14__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/works-management/form/works-management-form.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/maintenance/works-management/form/works-management-form.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: WorksManagementFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksManagementFormService", function() { return WorksManagementFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/aircraft-maintenance.api */ "./src/app/shared/api/aircraft-maintenance.api.ts");
/* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/airworthiness-management.api */ "./src/app/shared/api/airworthiness-management.api.ts");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/utils/array-utils */ "./src/app/shared/utils/array-utils.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
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












var WorksManagementFormService = /** @class */ (function (_super) {
    __extends(WorksManagementFormService, _super);
    function WorksManagementFormService(http, appConfigService, propertiesService, airworthinessManagementApi, aircraftMaintenanceApi, userProfileManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.propertiesService = propertiesService;
        _this.airworthinessManagementApi = airworthinessManagementApi;
        _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
        _this.userProfileManagementApi = userProfileManagementApi;
        return _this;
    }
    /**************************************************************************
     * Aircraft management api
     *************************************************************************/
    WorksManagementFormService.prototype.initializeWorksManagement = function () {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.initializeWorksManagement);
    };
    /**************************************************************************
     * User profile management api
     *************************************************************************/
    WorksManagementFormService.prototype.findBidoUserByLogin = function (login) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findUserByLogin, login);
    };
    WorksManagementFormService.prototype.findUsersWithUseCase = function () {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findBidoUsersWithUseCase, _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__["BidoFunctionTypeConstants"].UC_AIRM_RECEPTION);
    };
    WorksManagementFormService.prototype.loadUserList = function () {
        return this.findUsersWithUseCase().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
            return !!results
                ? results
                    .map(function (user) {
                    return {
                        label: user.lastname + " " + user.firstname,
                        value: user.userId
                    };
                })
                    .sort(_shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_10__["ArrayUtils"].compareValues('label'))
                : [];
        }));
    };
    /**************************************************************************
     * Airworthiness management api
     *************************************************************************/
    WorksManagementFormService.prototype.findWorkOrderOriginDetails = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.findWorkOrderOriginDetails, input);
    };
    WorksManagementFormService.prototype.loadGenProps = function (key) {
        return this.propertiesService.getValue(key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
            return !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_11__["SelectItemUtils"].fromLabelValues(results) : [];
        }));
    };
    WorksManagementFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__["AppConfigService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__["PropertiesService"],
            _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_4__["AirworthinessManagementApi"],
            _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__["AircraftMaintenanceApi"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_5__["UserProfileManagementApi"]])
    ], WorksManagementFormService);
    return WorksManagementFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/maintenance/works-management/works-management-table-filter/works-management-table-filters.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/works-management/works-management-table-filter/works-management-table-filters.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\r\n  <div class=\"grid-row\">\r\n    <div class=\"grid-cell grid-cell--container\">\r\n      <div class=\"grid-cell-content\">\r\n        <div class=\"column\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group flex--auto\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".statusList\" | translate }}</label>\r\n\r\n              <div class=\"form-control aw-selectbutton-wrapper\">\r\n                <p-selectButton\r\n                  [(ngModel)]=\"searchCriteria.statusList\"\r\n                  [options]=\"searchStatusList\"\r\n                  multiple=\"multiple\"\r\n                ></p-selectButton>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"form-group flex--auto\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".typeList\" | translate }}</label>\r\n\r\n              <div class=\"form-control aw-selectbutton-wrapper\">\r\n                <p-selectButton\r\n                  [(ngModel)]=\"searchCriteria.typeList\"\r\n                  [options]=\"searchTypeList\"\r\n                  multiple=\"multiple\"\r\n                ></p-selectButton>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".workOrder\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  [options]=\"searchWOCodeList\"\r\n                  [(ngModel)]=\"searchCriteria.woCode\"\r\n                  [showClear]=\"true\"\r\n                  [filter]=\"true\"\r\n                  placeholder=\"&nbsp;\"\r\n                >\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".userList\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  [options]=\"searchUserList\"\r\n                  [(ngModel)]=\"searchCriteria.assignedTo\"\r\n                  [showClear]=\"true\"\r\n                  [filter]=\"true\"\r\n                  placeholder=\"&nbsp;\"\r\n                >\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".wpAssetList\" | translate }}</label>\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  [options]=\"searchWPAssetList\"\r\n                  [(ngModel)]=\"searchCriteria.wpAsset\"\r\n                  [showClear]=\"true\"\r\n                  [filter]=\"true\"\r\n                  placeholder=\"&nbsp;\"\r\n                >\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".woAssetList\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  [options]=\"searchWOAssetList\"\r\n                  [(ngModel)]=\"searchCriteria.woAsset\"\r\n                  [showClear]=\"true\"\r\n                  [filter]=\"true\"\r\n                  placeholder=\"&nbsp;\"\r\n                >\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\"> {{ getComponentName() + \".scheduledStartDate\" | translate }} </label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-calendar\r\n                  showButtonBar=\"true\"\r\n                  [monthNavigator]=\"true\"\r\n                  [yearNavigator]=\"true\"\r\n                  [yearRange]=\"sessionService.calendarYearRange\"\r\n                  class=\"aw-calendar\"\r\n                  [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                  [locale]=\"sessionService.calendarFormat\"\r\n                  [(ngModel)]=\"searchCriteria.scheduledStartDate\"\r\n                ></p-calendar>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\"> {{ getComponentName() + \".scheduledEndDate\" | translate }} </label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-calendar\r\n                  showButtonBar=\"true\"\r\n                  [monthNavigator]=\"true\"\r\n                  [yearNavigator]=\"true\"\r\n                  [yearRange]=\"sessionService.calendarYearRange\"\r\n                  class=\"aw-calendar\"\r\n                  [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                  [locale]=\"sessionService.calendarFormat\"\r\n                  [(ngModel)]=\"searchCriteria.scheduledEndDate\"\r\n                ></p-calendar>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\"> {{ getComponentName() + \".executionStartDate\" | translate }} </label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-calendar\r\n                  showButtonBar=\"true\"\r\n                  [monthNavigator]=\"true\"\r\n                  [yearNavigator]=\"true\"\r\n                  [yearRange]=\"sessionService.calendarYearRange\"\r\n                  class=\"aw-calendar\"\r\n                  [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                  [locale]=\"sessionService.calendarFormat\"\r\n                  [(ngModel)]=\"searchCriteria.executionStartDate\"\r\n                ></p-calendar>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\"> {{ getComponentName() + \".executionEndDate\" | translate }} </label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-calendar\r\n                  showButtonBar=\"true\"\r\n                  [monthNavigator]=\"true\"\r\n                  [yearNavigator]=\"true\"\r\n                  [yearRange]=\"sessionService.calendarYearRange\"\r\n                  class=\"aw-calendar\"\r\n                  [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                  [locale]=\"sessionService.calendarFormat\"\r\n                  [(ngModel)]=\"searchCriteria.executionEndDate\"\r\n                ></p-calendar>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\"> {{ getComponentName() + \".next\" | translate }} </label>\r\n              <div class=\"form-control\">\r\n                <p-selectButton\r\n                  [(ngModel)]=\"searchCriteria.nextDays\"\r\n                  [options]=\"nextDaysList\"\r\n                  (onChange)=\"onNextDayChange()\"\r\n                ></p-selectButton>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row action-list\" style=\"margin-top: 15px;\">\r\n  <button type=\"button\" mat-raised-button (click)=\"reset()\">\r\n    {{ getComponentName() + \".reset\" | translate }}\r\n  </button>\r\n\r\n  <button type=\"button\" mat-raised-button (click)=\"filter()\">\r\n    {{ getComponentName() + \".filter\" | translate }}\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/works-management/works-management-table-filter/works-management-table-filters.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/works-management/works-management-table-filter/works-management-table-filters.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .action-list {\n  justify-content: flex-end; }\n  :host .action-list .aw-btn {\n    margin-left: 8px; }\n  :host .action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3Jrcy1tYW5hZ2VtZW50L3dvcmtzLW1hbmFnZW1lbnQtdGFibGUtZmlsdGVyL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFx3b3Jrcy1tYW5hZ2VtZW50XFx3b3Jrcy1tYW5hZ2VtZW50LXRhYmxlLWZpbHRlclxcd29ya3MtbWFuYWdlbWVudC10YWJsZS1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3dvcmtzLW1hbmFnZW1lbnQvd29ya3MtbWFuYWdlbWVudC10YWJsZS1maWx0ZXIvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUkseUJBQXlCLEVBQUE7RUFGN0I7SUFLTSxnQkNxQ1ksRUFBQTtFRDFDbEI7TUFRUSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3dvcmtzLW1hbmFnZW1lbnQvd29ya3MtbWFuYWdlbWVudC10YWJsZS1maWx0ZXIvd29ya3MtbWFuYWdlbWVudC10YWJsZS1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5hY3Rpb24tbGlzdCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgIC5hdy1idG4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/maintenance/works-management/works-management-table-filter/works-management-table-filters.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/works-management/works-management-table-filter/works-management-table-filters.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: WorksManagementTableFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksManagementTableFiltersComponent", function() { return WorksManagementTableFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/types/generic-component */ "./src/app/shared/types/generic-component.ts");
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





var WorksManagementTableFiltersComponent = /** @class */ (function (_super) {
    __extends(WorksManagementTableFiltersComponent, _super);
    function WorksManagementTableFiltersComponent(sessionService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write) || this;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.init();
        return _this;
    }
    WorksManagementTableFiltersComponent.prototype.getComponentName = function () {
        return 'MyJobsCardsTableFiltersComponent';
    };
    WorksManagementTableFiltersComponent.prototype.filter = function () {
        this.onFilter.emit();
    };
    WorksManagementTableFiltersComponent.prototype.reset = function () {
        this.onReset.emit();
    };
    WorksManagementTableFiltersComponent.prototype.init = function () {
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nextDaysList = [];
        this.nextDaysList.push({
            label: this.translateService.instant(this.getTranslateKey('nextDay')),
            value: 1
        });
        this.nextDaysList.push({
            label: this.translateService.instant(this.getTranslateKey('nextWeek')),
            value: 7
        });
    };
    WorksManagementTableFiltersComponent.prototype.onNextDayChange = function () {
        if (this.searchCriteria.nextDays && this.searchCriteria.nextDays === this.previousNexDaysValue) {
            this.searchCriteria.nextDays = undefined;
        }
        this.previousNexDaysValue = this.searchCriteria.nextDays;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WorksManagementTableFiltersComponent.prototype, "searchStatusList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WorksManagementTableFiltersComponent.prototype, "searchTypeList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WorksManagementTableFiltersComponent.prototype, "searchWOAssetList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WorksManagementTableFiltersComponent.prototype, "searchWPAssetList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WorksManagementTableFiltersComponent.prototype, "searchWOCodeList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WorksManagementTableFiltersComponent.prototype, "searchUserList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WorksManagementTableFiltersComponent.prototype, "nextDaysList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorksManagementTableFiltersComponent.prototype, "searchCriteria", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorksManagementTableFiltersComponent.prototype, "onFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorksManagementTableFiltersComponent.prototype, "onReset", void 0);
    WorksManagementTableFiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-works-management-table-filters',
            template: __webpack_require__(/*! ./works-management-table-filters.component.html */ "./src/app/main/maintenance/works-management/works-management-table-filter/works-management-table-filters.component.html"),
            styles: [__webpack_require__(/*! ./works-management-table-filters.component.scss */ "./src/app/main/maintenance/works-management/works-management-table-filter/works-management-table-filters.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], WorksManagementTableFiltersComponent);
    return WorksManagementTableFiltersComponent;
}(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_4__["GenericComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/works-management/works-management.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/maintenance/works-management/works-management.module.ts ***!
  \******************************************************************************/
/*! exports provided: WorksManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksManagementModule", function() { return WorksManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/file.service */ "./src/app/shared/services/file.service.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_works_management_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form/works-management-form.component */ "./src/app/main/maintenance/works-management/form/works-management-form.component.ts");
/* harmony import */ var _form_works_management_form_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form/works-management-form.service */ "./src/app/main/maintenance/works-management/form/works-management-form.service.ts");
/* harmony import */ var _works_management_table_filter_works_management_table_filters_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./works-management-table-filter/works-management-table-filters.component */ "./src/app/main/maintenance/works-management/works-management-table-filter/works-management-table-filters.component.ts");
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
    primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
    primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__["ProgressBarModule"],
    primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_4__["OverlayPanelModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__["SelectButtonModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
    primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
    primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__["RadioButtonModule"]
];
var INTERNAL_MODULES = [];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_works_management_table_filter_works_management_table_filters_component__WEBPACK_IMPORTED_MODULE_17__["WorksManagementTableFiltersComponent"]];
var DYNAMIC_COMPONENTS = [_form_works_management_form_component__WEBPACK_IMPORTED_MODULE_15__["WorksManagementFormComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_works_management_form_service__WEBPACK_IMPORTED_MODULE_16__["WorksManagementFormService"], _shared_services_file_service__WEBPACK_IMPORTED_MODULE_13__["FileService"]];
var WorksManagementModule = /** @class */ (function () {
    function WorksManagementModule() {
    }
    WorksManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_10__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_11__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_12__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_14__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], WorksManagementModule);
    return WorksManagementModule;
}());



/***/ }),

/***/ "./src/app/shared/constants/bido-evolution-constants.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/constants/bido-evolution-constants.ts ***!
  \**************************************************************/
/*! exports provided: BidoEvolutionConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidoEvolutionConstants", function() { return BidoEvolutionConstants; });
var BidoEvolutionConstants = /** @class */ (function () {
    function BidoEvolutionConstants() {
    }
    BidoEvolutionConstants.CODE_MODIFICATION = 'MOD';
    BidoEvolutionConstants.CODE_EVOLUTION = 'EVOL';
    BidoEvolutionConstants.CODE_SB = 'SB';
    BidoEvolutionConstants.MODULE_HR = 'AD';
    BidoEvolutionConstants.CODE_AD = 'AD';
    return BidoEvolutionConstants;
}());



/***/ }),

/***/ "./src/app/shared/services/file.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/file.service.ts ***!
  \*************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _api_document_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/document.api */ "./src/app/shared/api/document.api.ts");
/* harmony import */ var _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _utils_image_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/image-utils */ "./src/app/shared/utils/image-utils.ts");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-config.service */ "./src/app/shared/services/app-config.service.ts");
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








var FileService = /** @class */ (function (_super) {
    __extends(FileService, _super);
    function FileService(http, appConfigService, domSanitizer, productStructureManagementApi, documentApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.domSanitizer = domSanitizer;
        _this.productStructureManagementApi = productStructureManagementApi;
        _this.documentApi = documentApi;
        return _this;
    }
    FileService.prototype.findIllustration = function (bireItemDtoId, bidoEquipementDTO) {
        var bidoBireId = {
            bidoEquipmentDTOId: { equipmentCode: bidoEquipementDTO.equipmentCode },
            bireItemDTOId: bireItemDtoId,
            sn: bidoEquipementDTO.sn
        };
        return _super.prototype.post.call(this, this.documentApi.findBidoBireDoc, bidoBireId);
    };
    FileService.prototype.findBireDocItemByPnCode = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireDocItemByPnCode, input);
    };
    FileService.prototype.sanitizeAndGetBase64Prefix = function (illustrationDocument) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl("" + _utils_image_utils__WEBPACK_IMPORTED_MODULE_6__["ImageUtils"].getBase64Prefix(illustrationDocument.docType) + illustrationDocument.docFile);
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _app_config_service__WEBPACK_IMPORTED_MODULE_7__["AppConfigService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__["ProductStructureManagementApi"],
            _api_document_api__WEBPACK_IMPORTED_MODULE_3__["DocumentApi"]])
    ], FileService);
    return FileService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__["AbstractAwHttpService"]));



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



/***/ }),

/***/ "./src/app/shared/utils/image-utils.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/utils/image-utils.ts ***!
  \*********************************************/
/*! exports provided: ImageUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUtils", function() { return ImageUtils; });
/* harmony import */ var _string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string-utils */ "./src/app/shared/utils/string-utils.ts");

var ImageUtils = /** @class */ (function () {
    function ImageUtils() {
    }
    ImageUtils.getBase64Prefix = function (extension) {
        var formattedExtension = '';
        if (this.isJpg(extension)) {
            formattedExtension = ImageUtils.JPG_BASE64_ID;
        }
        else if (this.isPng(extension)) {
            formattedExtension = ImageUtils.PNG_BASE64_ID;
        }
        return _string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isEmpty(formattedExtension) ? '' : "data:image/" + formattedExtension + ";base64,";
    };
    ImageUtils.isJpg = function (extension) {
        return this.isFormatMatching(extension, ImageUtils.JPG_EXTENSION_LIST);
    };
    ImageUtils.isPng = function (extension) {
        return this.isFormatMatching(extension, ImageUtils.PNG_EXTENSION_LIST);
    };
    ImageUtils.isFormatMatching = function (extension, validExtensionList) {
        if (_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(extension)) {
            return false;
        }
        else {
            var extensionToCheck_1 = extension.toLowerCase();
            return validExtensionList.some(function (elt) { return elt === extensionToCheck_1; });
        }
    };
    ImageUtils.JPG_BASE64_ID = 'jpg';
    ImageUtils.PNG_BASE64_ID = 'png';
    ImageUtils.JPG_EXTENSION_LIST = ['jpeg', 'jpg'];
    ImageUtils.PNG_EXTENSION_LIST = ['png'];
    return ImageUtils;
}());



/***/ })

}]);
//# sourceMappingURL=maintenance-works-management-works-management-module.js.map