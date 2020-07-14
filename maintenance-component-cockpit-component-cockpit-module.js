(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintenance-component-cockpit-component-cockpit-module"],{

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

/***/ "./node_modules/primeng/components/keyfilter/keyfilter.js":
/*!****************************************************************!*\
  !*** ./node_modules/primeng/components/keyfilter/keyfilter.js ***!
  \****************************************************************/
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
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
exports.KEYFILTER_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return KeyFilter; }),
    multi: true
};
var KeyFilter = /** @class */ (function () {
    function KeyFilter(el) {
        this.el = el;
    }
    KeyFilter_1 = KeyFilter;
    Object.defineProperty(KeyFilter.prototype, "pattern", {
        get: function () {
            return this._pattern;
        },
        set: function (_pattern) {
            this._pattern = _pattern;
            this.regex = KeyFilter_1.DEFAULT_MASKS[this._pattern] || this._pattern;
        },
        enumerable: true,
        configurable: true
    });
    KeyFilter.prototype.isNavKeyPress = function (e) {
        var k = e.keyCode;
        k = domhandler_1.DomHandler.getBrowser().safari ? (KeyFilter_1.SAFARI_KEYS[k] || k) : k;
        return (k >= 33 && k <= 40) || k == KeyFilter_1.KEYS.RETURN || k == KeyFilter_1.KEYS.TAB || k == KeyFilter_1.KEYS.ESC;
    };
    ;
    KeyFilter.prototype.isSpecialKey = function (e) {
        var k = e.keyCode;
        var c = e.charCode;
        return k == 9 || k == 13 || k == 27 || k == 16 || k == 17 || (k >= 18 && k <= 20) ||
            (domhandler_1.DomHandler.getBrowser().opera && !e.shiftKey && (k == 8 || (k >= 33 && k <= 35) || (k >= 36 && k <= 39) || (k >= 44 && k <= 45)));
    };
    KeyFilter.prototype.getKey = function (e) {
        var k = e.keyCode || e.charCode;
        return domhandler_1.DomHandler.getBrowser().safari ? (KeyFilter_1.SAFARI_KEYS[k] || k) : k;
    };
    KeyFilter.prototype.getCharCode = function (e) {
        return e.charCode || e.keyCode || e.which;
    };
    ;
    KeyFilter.prototype.onKeyPress = function (e) {
        if (this.pValidateOnly) {
            return;
        }
        var browser = domhandler_1.DomHandler.getBrowser();
        if (e.ctrlKey || e.altKey) {
            return;
        }
        var k = this.getKey(e);
        if (k == 13) {
            return;
        }
        if (browser.mozilla && (this.isNavKeyPress(e) || k == KeyFilter_1.KEYS.BACKSPACE || (k == KeyFilter_1.KEYS.DELETE && e.charCode == 0))) {
            return;
        }
        var c = this.getCharCode(e);
        var cc = String.fromCharCode(c);
        var ok = true;
        if (browser.mozilla && (this.isSpecialKey(e) || !cc)) {
            return;
        }
        ok = this.regex.test(cc);
        if (!ok) {
            e.preventDefault();
        }
    };
    KeyFilter.prototype.onPaste = function (e) {
        var clipboardData = e.clipboardData || window.clipboardData.getData('text');
        if (clipboardData) {
            var pastedText = clipboardData;
            if (!this.regex.test(pastedText)) {
                e.preventDefault();
            }
        }
    };
    KeyFilter.prototype.validate = function (c) {
        if (this.pValidateOnly) {
            var value = this.el.nativeElement.value;
            if (value && !this.regex.test(value)) {
                return {
                    validatePattern: false
                };
            }
        }
    };
    var KeyFilter_1;
    KeyFilter.DEFAULT_MASKS = {
        pint: /[\d]/,
        'int': /[\d\-]/,
        pnum: /[\d\.]/,
        money: /[\d\.\s,]/,
        num: /[\d\-\.]/,
        hex: /[0-9a-f]/i,
        email: /[a-z0-9_\.\-@]/i,
        alpha: /[a-z_]/i,
        alphanum: /[a-z0-9_]/i
    };
    KeyFilter.KEYS = {
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        BACKSPACE: 8,
        DELETE: 46
    };
    KeyFilter.SAFARI_KEYS = {
        63234: 37,
        63235: 39,
        63232: 38,
        63233: 40,
        63276: 33,
        63277: 34,
        63272: 46,
        63273: 36,
        63275: 35 // end
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], KeyFilter.prototype, "pValidateOnly", void 0);
    __decorate([
        core_1.Input('pKeyFilter'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], KeyFilter.prototype, "pattern", null);
    __decorate([
        core_1.HostListener('keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], KeyFilter.prototype, "onKeyPress", null);
    __decorate([
        core_1.HostListener('paste', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], KeyFilter.prototype, "onPaste", null);
    KeyFilter = KeyFilter_1 = __decorate([
        core_1.Directive({
            selector: '[pKeyFilter]',
            providers: [exports.KEYFILTER_VALIDATOR]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], KeyFilter);
    return KeyFilter;
}());
exports.KeyFilter = KeyFilter;
var KeyFilterModule = /** @class */ (function () {
    function KeyFilterModule() {
    }
    KeyFilterModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [KeyFilter],
            declarations: [KeyFilter]
        })
    ], KeyFilterModule);
    return KeyFilterModule;
}());
exports.KeyFilterModule = KeyFilterModule;
//# sourceMappingURL=keyfilter.js.map

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

/***/ "./node_modules/primeng/fileupload.js":
/*!********************************************!*\
  !*** ./node_modules/primeng/fileupload.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/fileupload/fileupload */ "./node_modules/primeng/components/fileupload/fileupload.js"));

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

/***/ "./node_modules/primeng/keyfilter.js":
/*!*******************************************!*\
  !*** ./node_modules/primeng/keyfilter.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/keyfilter/keyfilter */ "./node_modules/primeng/components/keyfilter/keyfilter.js"));

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

/***/ "./src/app/main/maintenance/component-cockpit/component-cockpit.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit/component-cockpit.module.ts ***!
  \********************************************************************************/
/*! exports provided: ComponentCockpitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentCockpitModule", function() { return ComponentCockpitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/keyfilter */ "./node_modules/primeng/keyfilter.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts");
/* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/dialog-table/dialog-table.module */ "./src/app/shared/components/dialog-table/dialog-table.module.ts");
/* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ "./src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_component_cockpit_form_component_cockpit_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form/component-cockpit-form/component-cockpit-form.component */ "./src/app/main/maintenance/component-cockpit/form/component-cockpit-form/component-cockpit-form.component.ts");
/* harmony import */ var _form_component_cockpit_form_component_cockpit_form_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./form/component-cockpit-form/component-cockpit-form.service */ "./src/app/main/maintenance/component-cockpit/form/component-cockpit-form/component-cockpit-form.service.ts");
/* harmony import */ var _form_popups_dialog_component_cockpit_dialog_component_cockpit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form/popups/dialog-component-cockpit/dialog-component-cockpit.component */ "./src/app/main/maintenance/component-cockpit/form/popups/dialog-component-cockpit/dialog-component-cockpit.component.ts");
/* harmony import */ var _form_popups_dialog_component_cockpit_dialog_component_cockpit_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./form/popups/dialog-component-cockpit/dialog-component-cockpit.service */ "./src/app/main/maintenance/component-cockpit/form/popups/dialog-component-cockpit/dialog-component-cockpit.service.ts");
/* harmony import */ var _search_component_cockpit_search_component_cockpit_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./search/component-cockpit-search/component-cockpit-search.component */ "./src/app/main/maintenance/component-cockpit/search/component-cockpit-search/component-cockpit-search.component.ts");
/* harmony import */ var _search_component_cockpit_search_component_cockpit_search_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./search/component-cockpit-search/component-cockpit-search.service */ "./src/app/main/maintenance/component-cockpit/search/component-cockpit-search/component-cockpit-search.service.ts");
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
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
    primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__["InputTextareaModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__["SelectButtonModule"],
    primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__["RadioButtonModule"],
    primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__["KeyFilterModule"]
];
var INTERNAL_MODULES = [_shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_15__["DialogTableModule"], _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_16__["DynamicAttributesModule"], _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__["ModalModule"], _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_14__["ComponentSidebarModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_form_popups_dialog_component_cockpit_dialog_component_cockpit_component__WEBPACK_IMPORTED_MODULE_21__["DialogComponentCockpitComponent"]];
var DYNAMIC_COMPONENTS = [_search_component_cockpit_search_component_cockpit_search_component__WEBPACK_IMPORTED_MODULE_23__["ComponentCockpitSearchComponent"], _form_component_cockpit_form_component_cockpit_form_component__WEBPACK_IMPORTED_MODULE_19__["ComponentCockpitFormComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [
    _search_component_cockpit_search_component_cockpit_search_service__WEBPACK_IMPORTED_MODULE_24__["ComponentCockpitSearchService"],
    _form_component_cockpit_form_component_cockpit_form_service__WEBPACK_IMPORTED_MODULE_20__["ComponentCockpitFormService"],
    _form_popups_dialog_component_cockpit_dialog_component_cockpit_service__WEBPACK_IMPORTED_MODULE_22__["DialogComponentCockptService"]
];
var ComponentCockpitModule = /** @class */ (function () {
    function ComponentCockpitModule() {
    }
    ComponentCockpitModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], ComponentCockpitModule);
    return ComponentCockpitModule;
}());



/***/ }),

/***/ "./src/app/main/maintenance/component-cockpit/form/component-cockpit-form/component-cockpit-form.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit/form/component-cockpit-form/component-cockpit-form.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ componentData.componentId + \".title\" | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div *ngIf=\"!isCreateOpenMode && componentData && componentData.objectId\" class=\"page-subtitle\">\r\n          - {{ context }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button *ngIf=\"isReadOpenMode && hasUpdateAccessRight\" type=\"button\" mat-raised-button (click)=\"edit()\">\r\n      {{ \"global.edit\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode && !isCreateOpenMode\"\r\n      type=\"button\"\r\n      color=\"warn\"\r\n      mat-raised-button\r\n      (click)=\"cancel()\"\r\n    >\r\n      {{ \"global.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      class=\"btn-with-spinner\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"validate()\"\r\n    >\r\n      <span class=\"lds-hourglass\" *ngIf=\"showSaveSpinner\"></span>\r\n      {{ \"global.save\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      id=\"actions\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button *ngIf=\"isReadOpenMode && !isCreateOpenMode\" type=\"button\" mat-menu-item (click)=\"refresh()\">\r\n        {{ \"global.refresh\" | translate }}\r\n      </button>\r\n\r\n      <button id=\"favorites\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <mat-tab-group animationDuration=\"0ms\" dynamicHeight>\r\n        <!-- Home -->\r\n        <mat-tab id=\"homeTab\">\r\n          <ng-template mat-tab-label>\r\n            {{ \"home\" | translate }}\r\n          </ng-template>\r\n          <div class=\"grid-row\">\r\n            <div class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ \"page.mainData\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"column\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group \">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".id\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input\"\r\n                            [(ngModel)]=\"filterData.filterListOutput.bidoPreferenceUserDTO.preferenceUserId\"\r\n                            [disabled]=\"true\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group \">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".author\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input\"\r\n                            [(ngModel)]=\"filterData.filterListOutput.author\"\r\n                            [disabled]=\"true\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".name\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input\"\r\n                            [(ngModel)]=\"filterData.filterListOutput.bidoPreferenceUserDTO.description\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            maxlength=\"100\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".isPublic\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-checkbox\r\n                            binary=\"true\"\r\n                            class=\"aw-checkbox\"\r\n                            [(ngModel)]=\"filterData.filterListOutput.bidoPreferenceUserDTO.shared\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          ></p-checkbox>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".isPersistent\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-checkbox\r\n                            binary=\"true\"\r\n                            class=\"aw-checkbox\"\r\n                            [(ngModel)]=\"filterData.filterListOutput.isPersistent\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          ></p-checkbox>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\"> {{ componentData.componentId + \".logicLink\" | translate }}</label>\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [showClear]=\"true\"\r\n                            [options]=\"logicalLinkList\"\r\n                            [(ngModel)]=\"filterData.filterListOutput.logicalLink\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\"> {{ componentData.componentId + \".icons\" | translate }}</label>\r\n                        <div class=\"form-control\"></div>\r\n                      </div>\r\n                      <div class=\"form-group\"></div>\r\n                      <div class=\"form-group\"></div>\r\n                      <div class=\"form-group\"></div>\r\n                      <div class=\"form-group\"></div>\r\n                    </div>\r\n                    <!-- Circle-->\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".none\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton class=\"aw-radiobutton\" value=\"None\" [(ngModel)]=\"graphValue\"></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-circle aw-icon \"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color: red;font-size: 18px;\"\r\n                          ></i>\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"RedCircle\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-circle aw-icon \"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color:#FFBF00;font-size: 18px;\"\r\n                          ></i>\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"YellowCircle\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-circle aw-icon \"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color: blue;font-size: 18px;\"\r\n                          ></i>\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"BlueCircle\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-circle aw-icon \"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color: lightgreen;font-size: 18px;\"\r\n                          ></i>\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"GreenCircle\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-circle aw-icon \"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color: grey;font-size: 18px;\"\r\n                          ></i>\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"GreyCircle\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\"></div>\r\n                      <div class=\"form-group\"></div>\r\n                      <div class=\"form-group\"></div>\r\n                    </div>\r\n                    <!-- triangle -->\r\n                    <div class=\"row\" style=\"margin-top: -5px;\">\r\n                      <div class=\"form-group\"></div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-caret-up aw-icon\"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color: red;font-size: 40px;\r\n                                  margin-left: -13px;\"\r\n                          ></i>\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"RedTriangle\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-caret-up aw-icon\"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color: #FFBF00;font-size: 40px;\r\n                                    margin-left: -13px;\"\r\n                          ></i>\r\n                        </label>\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"YellowTriangle\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-caret-up aw-icon\"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color: blue;font-size: 40px;\r\n                            margin-left: -13px;\"\r\n                          ></i>\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"BlueTriangle\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-caret-up aw-icon\"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color: lightgreen;font-size: 40px;\r\n                              margin-left: -13px;\"\r\n                          ></i>\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"GreenTriangle\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-caret-up aw-icon\"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color: grey;font-size: 40px;\r\n                                margin-left: -13px;\"\r\n                          ></i>\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"GreyTriangle\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\"></div>\r\n                      <div class=\"form-group\"></div>\r\n                      <div class=\"form-group\"></div>\r\n                    </div>\r\n                    <!-- square -->\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\"></div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-square aw-icon \"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color: red;font-size: 18px;\"\r\n                          ></i>\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"RedSquare\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-square aw-icon \"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color: #FFBF00;font-size: 18px;\"\r\n                          ></i>\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"YellowSquare\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-square aw-icon \"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color: blue;font-size: 18px;\"\r\n                          ></i>\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"BlueSquare\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-square aw-icon \"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color: lightgreen;font-size: 18px;\"\r\n                          ></i>\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"GreenSquare\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-square aw-icon \"\r\n                            aria-hidden=\"true\"\r\n                            tooltipPosition=\"top\"\r\n                            style=\"color: grey;font-size: 18px;\"\r\n                          ></i>\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-radioButton\r\n                            class=\"aw-radiobutton\"\r\n                            value=\"GreySquare\"\r\n                            [(ngModel)]=\"graphValue\"\r\n                          ></p-radioButton>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\"></div>\r\n                      <div class=\"form-group\"></div>\r\n                      <div class=\"form-group\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab id=\"applicabilitiesTab\">\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".createApp\" | translate }}\r\n          </ng-template>\r\n          <div class=\"grid-row\">\r\n            <div class=\"grid-cell--6\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".filterTitle\" | translate }}\r\n                      ({{ filterTable ? filterTable.length : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #ptableFilterElement\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"filterTableCols\"\r\n                          [value]=\"filterTable\"\r\n                          [(selection)]=\"selectedFilter\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isfilterTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isfilterTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedFilter.length > 0 }\">\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"ptableFilterElement.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n\r\n                              <div class=\"aw-table-actions\">\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedFilter.length > 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  color=\"warn\"\r\n                                  (click)=\"deleteFilterElement()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedFilter.length === 1\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"EditFilterElement()\"\r\n                                >\r\n                                  {{ \"global.edit\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"selectedFilter.length === 1\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"openFilterElement()\"\r\n                                >\r\n                                  {{ \"global.open\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedFilter.length === 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"addFilterElement()\"\r\n                                >\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col class=\"aw-table-checkbox-wrapper\" />\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                              </th>\r\n\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                              </td>\r\n\r\n                              <td\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngSwitch]=\"col.field\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell--6\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".profileTitle\" | translate }}\r\n                      ({{ profileTable ? profileTable.length : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #ptableProfile\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"profileTableCols\"\r\n                          [value]=\"profileTable\"\r\n                          [(selection)]=\"selectedProfile\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isprofileTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isprofileTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedProfile.length > 0 }\">\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"ptableProfile.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n\r\n                              <div class=\"aw-table-actions\">\r\n                                <button\r\n                                  *ngIf=\"\r\n                                    !isReadOpenMode &&\r\n                                    selectedProfile.length > 0 &&\r\n                                    filterData.filterListOutput.bidoPreferenceUserDTO.shared\r\n                                  \"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  color=\"warn\"\r\n                                  (click)=\"deleteProfileList()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n                                <button\r\n                                  *ngIf=\"\r\n                                    !isReadOpenMode &&\r\n                                    selectedProfile.length === 0 &&\r\n                                    filterData.filterListOutput.bidoPreferenceUserDTO.shared\r\n                                  \"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"addProfileList()\"\r\n                                >\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col class=\"aw-table-checkbox-wrapper\" />\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                              </th>\r\n\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                              </td>\r\n                              <td\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngSwitch]=\"col.field\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"grid-row\">\r\n            <div class=\"grid-cell--6\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".variantTitle\" | translate }}\r\n                      ({{ variantTable ? variantTable.length : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #ptableVariant\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"variantTableCols\"\r\n                          [value]=\"variantTable\"\r\n                          [(selection)]=\"selectedVariant\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isVariantTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isVariantTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedVariant.length > 0 }\">\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"ptableVariant.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n\r\n                              <div class=\"aw-table-actions\">\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedVariant.length > 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  color=\"warn\"\r\n                                  (click)=\"deleteVariantList()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedVariant.length === 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"addVariantList()\"\r\n                                >\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col class=\"aw-table-checkbox-wrapper\" />\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                              </th>\r\n\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                              </td>\r\n                              <td\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngSwitch]=\"col.field\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell--6\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".siteTitle\" | translate }}\r\n                      ({{ siteTable ? siteTable.length : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #ptableSite\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"siteTableCols\"\r\n                          [value]=\"siteTable\"\r\n                          [(selection)]=\"selectedSite\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isSiteTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isSiteTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedSite.length > 0 }\">\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"ptableSite.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n\r\n                              <div class=\"aw-table-actions\">\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedSite.length > 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  color=\"warn\"\r\n                                  (click)=\"deleteSiteList()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedSite.length === 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"addSiteList()\"\r\n                                >\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col class=\"aw-table-checkbox-wrapper\" />\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                              </th>\r\n\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                              </td>\r\n                              <td\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngSwitch]=\"col.field\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-component-cockpit\r\n  *ngIf=\"showPopup\"\r\n  [(display)]=\"showPopup\"\r\n  [elementFlag]=\"elementFlag\"\r\n  [profileFlag]=\"profileFlag\"\r\n  [siteFlag]=\"siteFlag\"\r\n  [variantFlag]=\"variantFlag\"\r\n  [dialogData]=\"currentData\"\r\n  [openMode]=\"dialogOpenMode\"\r\n  [propertyProfile]=\"propertyProfile\"\r\n  [propertySite]=\"propertySite\"\r\n  [propertyVariant]=\"propertyVariant\"\r\n  (onValidated)=\"onAddData($event)\"\r\n  (onValidatedOtherData)=\"onAddOtherData($event)\"\r\n>\r\n</aw-dialog-component-cockpit>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/component-cockpit/form/component-cockpit-form/component-cockpit-form.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit/form/component-cockpit-form/component-cockpit-form.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29tcG9uZW50LWNvY2twaXQvZm9ybS9jb21wb25lbnQtY29ja3BpdC1mb3JtL2NvbXBvbmVudC1jb2NrcGl0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/maintenance/component-cockpit/form/component-cockpit-form/component-cockpit-form.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit/form/component-cockpit-form/component-cockpit-form.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ComponentCockpitFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentCockpitFormComponent", function() { return ComponentCockpitFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/utils/label-value-utils */ "./src/app/shared/utils/label-value-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _component_cockpit_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component-cockpit-form.service */ "./src/app/main/maintenance/component-cockpit/form/component-cockpit-form/component-cockpit-form.service.ts");
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















var GraphType;
(function (GraphType) {
    GraphType["None"] = "None";
    GraphType["RedTriangle"] = "RedTriangle";
    GraphType["RedSquare"] = "RedSquare";
    GraphType["RedCircle"] = "RedCircle";
    GraphType["YellowTriangle"] = "YellowTriangle";
    GraphType["YellowSquare"] = "YellowSquare";
    GraphType["YellowCircle"] = "YellowCircle";
    GraphType["GreenTriangle"] = "GreenTriangle";
    GraphType["GreenSquare"] = "GreenSquare";
    GraphType["GreenCircle"] = "GreenCircle";
    GraphType["BlueTriangle"] = "BlueTriangle";
    GraphType["BlueSquare"] = "BlueSquare";
    GraphType["BlueCircle"] = "BlueCircle";
    GraphType["GreyTriangle"] = "GreyTriangle";
    GraphType["GreySquare"] = "GreySquare";
    GraphType["GreyCircle"] = "GreyCircle";
})(GraphType || (GraphType = {}));
var ComponentCockpitFormComponent = /** @class */ (function (_super) {
    __extends(ComponentCockpitFormComponent, _super);
    function ComponentCockpitFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, pageTocService, confirmationService, componentCockpitFormService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.confirmationService = confirmationService;
        _this.componentCockpitFormService = componentCockpitFormService;
        _this.translateService = translateService;
        _this.selectedAnchor = undefined;
        _this.registerPageTocEntrySelectedObservable();
        _this.profileTable = [];
        _this.filterTable = [];
        _this.customFilterTable = [];
        _this.customProfileTable = [];
        _this.variantTable = [];
        _this.siteTable = [];
        _this.selectedProfile = [];
        _this.selectedVariant = [];
        _this.selectedSite = [];
        _this.selectedFilter = [];
        _this.logicalLinkList = [];
        _this.propertyProfile = [];
        _this.propertySite = [];
        _this.propertyVariant = [];
        _this.propertyFilterList = [];
        _this.showPopup = false;
        _this.elementFlag = false;
        _this.profileFlag = false;
        _this.siteFlag = false;
        _this.variantFlag = false;
        _this.currentIndex = -1;
        _this.isfilterTable = false;
        _this.isprofileTable = false;
        _this.isVariantTable = false;
        _this.isSiteTable = false;
        _this.dialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read;
        _this.profileTableCols = [{ field: 'name', alignment: 'left' }];
        _this.variantTableCols = [{ field: 'name', alignment: 'left' }];
        _this.siteTableCols = [{ field: 'name', alignment: 'left' }];
        _this.filterTableCols = [
            { field: 'objectKey', alignment: 'left' },
            { field: 'dataKey', alignment: 'left' },
            { field: 'typeKey', alignment: 'left' },
            { field: 'valueKey', alignment: 'left' }
        ];
        _this.loadFilters();
        return _this;
    }
    ComponentCockpitFormComponent.prototype.ngOnInit = function () {
        this.init();
        this.fillDropdowns();
        this.toc = [
            {
                id: 'mainInformationAnchor',
                anchor: this.mainInformationAnchor,
                label: "" + this.translateService.instant('page.mainData')
            },
            {
                id: 'fliterElement',
                anchor: this.fliterElement,
                label: "" + this.translateService.instant(this.getTranslateKey('filterTitle'))
            },
            {
                id: 'profileAnchor',
                anchor: this.profileAnchor,
                label: "" + this.translateService.instant(this.getTranslateKey('profileTitle'))
            },
            {
                id: 'variantAnchor',
                anchor: this.variantAnchor,
                label: "" + this.translateService.instant(this.getTranslateKey('variantTitle'))
            },
            {
                id: 'siteAnchor',
                anchor: this.siteAnchor,
                label: "" + this.translateService.instant(this.getTranslateKey('siteTitle'))
            }
        ];
        _super.prototype.ngOnInit.call(this);
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            if (!!this.componentData.objectId) {
                this.loadData();
            }
            else {
                this.context = 'tab.createMode';
                this.displayComponentContext(this.context, this.isCreateOpenMode);
                this.filterData.filterListOutput.isPersistent = true;
                this.graphValue = GraphType.None;
            }
        }
        this.setSelectedAnchor('mainInformationAnchor');
    };
    ComponentCockpitFormComponent.prototype.init = function () {
        this.filterData = {
            filterListOutput: {
                bidoPreferenceUserDTO: {}
            }
        };
    };
    ComponentCockpitFormComponent.prototype.isSelectedAnchor = function (anchorId) {
        return anchorId === this.selectedAnchor;
    };
    ComponentCockpitFormComponent.prototype.setSelectedAnchor = function (anchorId) {
        this.pageTocService.setAnchorSelected(anchorId);
        this.selectedAnchor = anchorId;
    };
    ComponentCockpitFormComponent.prototype.registerPageTocEntrySelectedObservable = function () {
        var _this = this;
        this.pageTocService.pageTocEntrySelected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(function (pageTocEntrySelected) {
            _this.selectedAnchor = pageTocEntrySelected;
        });
    };
    ComponentCockpitFormComponent.prototype.getComponentName = function () {
        return 'ComponentCockpitFormComponent';
    };
    ComponentCockpitFormComponent.prototype.loadFilters = function () {
        var _this = this;
        this.componentCockpitFormService.getFilterList().subscribe(function (results) {
            var data;
            if (!!results) {
                results.forEach(function (obj) {
                    if (!!obj.bidoPreferenceUserDTO.preferenceUserId && !!obj.bidoPreferenceUserDTO.description) {
                        data = {
                            label: obj.bidoPreferenceUserDTO.description,
                            value: obj.bidoPreferenceUserDTO.preferenceUserId
                        };
                    }
                    _this.propertyFilterList.push(data);
                });
            }
            else {
                _this.propertyFilterList = [];
            }
        }, function (err) {
            _this.messageService.showErrorMessage(err.error.errorDetail);
        });
    };
    ComponentCockpitFormComponent.prototype.edit = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write);
    };
    ComponentCockpitFormComponent.prototype.refresh = function () {
        this.reloadData();
    };
    ComponentCockpitFormComponent.prototype.cancel = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read);
        this.reloadData();
    };
    ComponentCockpitFormComponent.prototype.reloadData = function () {
        this.customFilterTable = [];
        this.customProfileTable = [];
        this.loadData();
    };
    ComponentCockpitFormComponent.prototype.loadData = function () {
        var _this = this;
        this.isfilterTable = true;
        this.isprofileTable = true;
        this.isVariantTable = true;
        this.isSiteTable = true;
        if (!!this.componentData.objectId) {
            var prefId = this.serializationService.deserialize(this.componentData.objectId).preferenceUserId;
            this.componentCockpitFormService.getData(prefId).subscribe(function (results) {
                _this.filterData = results;
                _this.loadProfile();
                _this.loadVariant();
                _this.loadSite();
                _this.loadFilterList();
                if (!!_this.filterData.filterListOutput && !!_this.filterData.filterListOutput.filterName) {
                    _this.graphValue =
                        !!_this.filterData.filterListOutput.bidoPreferenceUserDTO &&
                            !!_this.filterData.filterListOutput.bidoPreferenceUserDTO.graphicalReference
                            ? _this.filterData.filterListOutput.bidoPreferenceUserDTO.graphicalReference
                            : GraphType.None;
                    _this.context = _this.filterData.filterListOutput.filterName;
                    _this.displayComponentContext(_this.context, _this.isCreateOpenMode);
                }
            });
        }
    };
    ComponentCockpitFormComponent.prototype.loadProfile = function () {
        var _this = this;
        this.isprofileTable = false;
        this.profileTable = !!this.filterData.profileListFilterOutputList
            ? this.filterData.profileListFilterOutputList
            : [];
        this.profileTable.forEach(function (row) {
            if (!!row.bidoProfileDTO && !!_this.filterData.filterListOutput.bidoPreferenceUserDTO) {
                _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_12__["LabelValueUtils"].stringValueToLabel(row.bidoProfileDTO, 'profileId', _this.propertyProfile);
                var dto = {
                    profileId: row.bidoProfileDTO.profileId,
                    preferenceUserId: _this.filterData.filterListOutput.bidoPreferenceUserDTO.preferenceUserId
                };
                _this.customProfileTable.push(dto);
            }
        });
    };
    ComponentCockpitFormComponent.prototype.loadVariant = function () {
        this.isVariantTable = false;
        this.variantTable = !!this.filterData.variantListFilterOutputList
            ? this.filterData.variantListFilterOutputList
            : [];
        this.variantTable.forEach(function (obj) {
            obj.filterPreferenceFormated = obj.name;
        });
    };
    ComponentCockpitFormComponent.prototype.loadSite = function () {
        this.isSiteTable = false;
        this.siteTable = !!this.filterData.siteListFilterOutputList ? this.filterData.siteListFilterOutputList : [];
        this.siteTable.forEach(function (obj) {
            obj.filterPreferenceFormated = obj.name;
        });
    };
    ComponentCockpitFormComponent.prototype.loadFilterList = function () {
        var _this = this;
        this.isfilterTable = false;
        this.customFilterTable = !!this.filterData.elementFilterList ? this.filterData.elementFilterList : [];
        this.customFilterTable.forEach(function (obj) {
            if (obj.objectKey === 'Filter') {
                obj.dataKey = obj.data;
                _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_12__["LabelValueUtils"].stringValueToLabel(obj, 'dataKey', _this.propertyFilterList);
            }
            obj.filterPreferenceFormated = obj.object + ";;" + obj.data + ";;" + obj.type + ";;" + obj.value;
        });
        var tableList = [];
        if (!!this.filterData.elementFilterList) {
            this.filterData.elementFilterList.forEach(function (obj) {
                var row = {
                    objectKey: obj.objectKey,
                    dataKey: obj.objectKey === 'Filter' ? (!!obj.data ? obj.data.toString() : '') : obj.dataKey,
                    typeKey: obj.typeKey,
                    valueKey: obj.valueKey,
                    filterPreferenceFormated: obj.object + ";;" + obj.data + ";;" + obj.type + ";;" + obj.value,
                    _obj: obj
                };
                tableList.push(row);
            });
            this.filterTable = tableList;
            this.filterTable.forEach(function (row) {
                if (row.objectKey === 'Filter') {
                    _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_12__["LabelValueUtils"].stringValueToLabel(row, 'dataKey', _this.propertyFilterList);
                }
            });
        }
    };
    ComponentCockpitFormComponent.prototype.fillDropdowns = function () {
        var _this = this;
        this.componentCockpitFormService.getLogicData().subscribe(function (results) {
            _this.logicalLinkList = results;
        });
        this.componentCockpitFormService.getProfileDropdown().subscribe(function (results) {
            _this.propertyProfile = results;
        });
        this.componentCockpitFormService.getSiteDropdown().subscribe(function (results) {
            _this.propertySite = results;
        });
        this.componentCockpitFormService.getVariantDropdown().subscribe(function (results) {
            _this.propertyVariant = results;
        });
    };
    ComponentCockpitFormComponent.prototype.addFilterElement = function () {
        this.elementFlag = true;
        this.profileFlag = false;
        this.siteFlag = false;
        this.variantFlag = false;
        this.currentIndex = -1;
        this.currentData = undefined;
        this.dialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Create;
        this.showPopup = true;
    };
    ComponentCockpitFormComponent.prototype.addProfileList = function () {
        this.elementFlag = false;
        this.profileFlag = true;
        this.siteFlag = false;
        this.variantFlag = false;
        this.currentIndex = -1;
        this.currentData = undefined;
        this.dialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Create;
        this.showPopup = true;
    };
    ComponentCockpitFormComponent.prototype.addSiteList = function () {
        this.elementFlag = false;
        this.profileFlag = false;
        this.siteFlag = true;
        this.variantFlag = false;
        this.currentIndex = -1;
        this.currentData = undefined;
        this.dialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Create;
        this.showPopup = true;
    };
    ComponentCockpitFormComponent.prototype.addVariantList = function () {
        this.elementFlag = false;
        this.profileFlag = false;
        this.siteFlag = false;
        this.variantFlag = true;
        this.currentIndex = -1;
        this.currentData = undefined;
        this.dialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Create;
        this.showPopup = true;
    };
    ComponentCockpitFormComponent.prototype.openFilterElement = function () {
        if (this.selectedFilter.length === 1) {
            this.currentData = this.selectedFilter[0]._obj;
            this.currentIndex = -1;
            this.dialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read;
            this.elementFlag = true;
            this.profileFlag = false;
            this.siteFlag = false;
            this.variantFlag = false;
            this.showPopup = true;
        }
    };
    ComponentCockpitFormComponent.prototype.EditFilterElement = function () {
        var _this = this;
        if (this.selectedFilter.length === 1) {
            this.currentIndex = this.filterTable.findIndex(function (row) {
                return (!!row.filterPreferenceFormated &&
                    !!_this.selectedFilter[0]._obj &&
                    !!_this.selectedFilter[0]._obj.filterPreferenceFormated &&
                    row.filterPreferenceFormated === _this.selectedFilter[0]._obj.filterPreferenceFormated);
            });
            this.currentData = __assign({}, this.selectedFilter[0]._obj);
            this.dialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write;
            this.elementFlag = true;
            this.profileFlag = false;
            this.siteFlag = false;
            this.variantFlag = false;
            this.showPopup = true;
        }
    };
    ComponentCockpitFormComponent.prototype.onAddData = function (data) {
        var _this = this;
        var fileExists = true;
        if (!!data) {
            this.filterTable.forEach(function (doc, i) {
                if (doc.filterPreferenceFormated === data.filterPreferenceFormated) {
                    if (_this.currentIndex === i) {
                        fileExists = true;
                    }
                    else {
                        fileExists = false;
                        _this.messageService.showWarningMessage(_this.getTranslateKey('warningDataExists'));
                    }
                }
            });
            if (fileExists) {
                if (this.currentIndex !== -1) {
                    this.customFilterTable[this.currentIndex] = data;
                    this.filterTable[this.currentIndex] = this.createFilterRow(data);
                }
                else {
                    this.customFilterTable = __spread(this.customFilterTable, [data]);
                    this.filterTable = __spread(this.filterTable, [this.createFilterRow(data)]);
                }
            }
        }
        this.selectedFilter = [];
    };
    ComponentCockpitFormComponent.prototype.onAddOtherData = function (data) {
        if (this.variantFlag) {
            var isExistingEvent_1 = false;
            if (!!this.variantTable) {
                this.variantTable.forEach(function (obj) {
                    if (!!obj.name && !!data && obj.name === data.name) {
                        isExistingEvent_1 = true;
                    }
                });
            }
            if (isExistingEvent_1) {
                this.messageService.showWarningMessage(this.getTranslateKey('warningDataExists'));
            }
            else {
                this.variantTable = __spread(this.variantTable, [data]);
            }
            this.selectedVariant = [];
        }
        if (this.siteFlag) {
            var isExistingEvent_2 = false;
            if (!!this.siteTable) {
                this.siteTable.forEach(function (obj) {
                    if (!!obj.name && !!data && obj.name === data.name) {
                        isExistingEvent_2 = true;
                    }
                });
            }
            if (isExistingEvent_2) {
                this.messageService.showWarningMessage(this.getTranslateKey('warningDataExists'));
            }
            else {
                this.siteTable = __spread(this.siteTable, [data]);
            }
            this.selectedSite = [];
        }
        if (this.profileFlag) {
            _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_12__["LabelValueUtils"].stringValueToLabel(data, 'profileId', this.propertyProfile);
            var isExistingEvent_3 = false;
            if (!!this.profileTable) {
                this.profileTable.forEach(function (obj) {
                    if (!!obj.name && !!data && obj.name === data.profileId) {
                        isExistingEvent_3 = true;
                    }
                });
            }
            if (isExistingEvent_3) {
                this.messageService.showWarningMessage(this.getTranslateKey('warningDataExists'));
            }
            else {
                if (!!this.filterData.filterListOutput.bidoPreferenceUserDTO) {
                    data.preferenceUserId = this.filterData.filterListOutput.bidoPreferenceUserDTO.preferenceUserId;
                }
                var obj = {
                    name: data.profileId,
                    bidoProfileDTO: data
                };
                this.profileTable = __spread(this.profileTable, [obj]);
                // tslint:disable-next-line: no-unsafe-any
                this.customProfileTable = __spread(this.customProfileTable, [data]);
            }
            this.selectedProfile = [];
        }
    };
    ComponentCockpitFormComponent.prototype.createFilterRow = function (data) {
        var row = {
            objectKey: data.objectKey,
            typeKey: data.typeKey,
            valueKey: !!data.valueKey ? data.valueKey : '',
            dataKey: data.dataKey,
            filterPreferenceFormated: data.filterPreferenceFormated,
            _obj: data
        };
        return row;
    };
    ComponentCockpitFormComponent.prototype.deleteFilterElement = function () {
        var _this = this;
        var confirmMessageKey = this.selectedFilter.length > 1 ? 'confirmDeleteSelectedLists' : 'confirmDeleteSelectedList';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(confirmMessageKey),
            accept: function () {
                _this.filterTable = _this.filterTable.filter(function (filterDisplayed) {
                    return !_this.selectedFilter.some(function (row) {
                        return (!!filterDisplayed &&
                            !!row &&
                            filterDisplayed.typeKey === row.typeKey &&
                            filterDisplayed.objectKey === row.objectKey &&
                            filterDisplayed.valueKey === row.valueKey &&
                            filterDisplayed.dataKey === row.dataKey);
                    });
                });
                _this.customFilterTable = _this.customFilterTable.filter(function (filterDisplayed) {
                    return !_this.selectedFilter.some(function (row) {
                        return (!!filterDisplayed &&
                            !!row &&
                            filterDisplayed.typeKey === row.typeKey &&
                            filterDisplayed.objectKey === row.objectKey &&
                            filterDisplayed.valueKey === row.valueKey &&
                            filterDisplayed.dataKey === row.dataKey);
                    });
                });
                _this.selectedFilter = [];
            }
        });
    };
    ComponentCockpitFormComponent.prototype.deleteVariantList = function () {
        var _this = this;
        var confirmMessageKey = this.selectedFilter.length > 1 ? 'confirmDeleteSelectedLists' : 'confirmDeleteSelectedList';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(confirmMessageKey),
            accept: function () {
                _this.variantTable = _this.variantTable.filter(function (obj) {
                    return !_this.selectedVariant.some(function (row) {
                        return !!obj && !!row && obj.name === row.name;
                    });
                });
                _this.selectedVariant = [];
            }
        });
    };
    ComponentCockpitFormComponent.prototype.deleteProfileList = function () {
        var _this = this;
        var confirmMessageKey = this.selectedFilter.length > 1 ? 'confirmDeleteSelectedLists' : 'confirmDeleteSelectedList';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(confirmMessageKey),
            accept: function () {
                _this.profileTable = _this.profileTable.filter(function (obj) {
                    return !_this.selectedProfile.some(function (row) {
                        return !!obj && !!row && obj.name === row.name;
                    });
                });
                _this.customProfileTable = _this.customProfileTable.filter(function (obj) {
                    return !_this.selectedProfile.some(function (row) {
                        return !!obj && !!row && obj.profileId === row.name;
                    });
                });
                _this.selectedProfile = [];
            }
        });
    };
    ComponentCockpitFormComponent.prototype.deleteSiteList = function () {
        var _this = this;
        var confirmMessageKey = this.selectedFilter.length > 1 ? 'confirmDeleteSelectedLists' : 'confirmDeleteSelectedList';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(confirmMessageKey),
            accept: function () {
                _this.siteTable = _this.siteTable.filter(function (obj) {
                    return !_this.selectedSite.some(function (row) {
                        return !!obj && !!row && obj.name === row.name;
                    });
                });
                _this.selectedSite = [];
            }
        });
    };
    ComponentCockpitFormComponent.prototype.validate = function () {
        var _this = this;
        if (!!this.filterData.filterListOutput.bidoPreferenceUserDTO &&
            _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.filterData.filterListOutput.bidoPreferenceUserDTO.description)) {
            this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
        }
        else {
            var filterList_1 = [];
            this.customFilterTable.forEach(function (row) {
                var data = {};
                data.filterPreferenceFormated = row.filterPreferenceFormated;
                filterList_1.push(data);
            });
            var variantList_1 = [];
            this.variantTable.forEach(function (row) {
                var data = {};
                data.filterPreferenceFormated = row.filterPreferenceFormated;
                variantList_1.push(data);
            });
            var siteList_1 = [];
            this.siteTable.forEach(function (row) {
                var data = {};
                data.filterPreferenceFormated = row.filterPreferenceFormated;
                siteList_1.push(data);
            });
            this.customProfileTable.forEach(function (row) {
                _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_12__["LabelValueUtils"].labelToStringValue(row, 'profileId', _this.propertyProfile);
            });
            if (!!this.filterData.filterListOutput.bidoPreferenceUserDTO) {
                this.filterData.filterListOutput.bidoPreferenceUserDTO.graphicalReference = this.graphValue;
            }
            if (this.isCreateOpenMode) {
                var data = {
                    bidoPreferenceUserDTO: this.filterData.filterListOutput.bidoPreferenceUserDTO,
                    isPersistent: this.filterData.filterListOutput.isPersistent,
                    logicalLink: this.filterData.filterListOutput.logicalLink
                };
                this.showSaveSpinner = true;
                this.componentCockpitFormService.saveFilter(data).subscribe(function (results) {
                    if (!!_this.filterData.filterListOutput.bidoPreferenceUserDTO) {
                        _this.filterData.filterListOutput.bidoPreferenceUserDTO = results;
                        _this.customProfileTable.forEach(function (row) {
                            row.preferenceUserId = results.preferenceUserId;
                        });
                        var input = {
                            bidoPreferenceUserDTO: _this.filterData.filterListOutput.bidoPreferenceUserDTO,
                            isPersistent: _this.filterData.filterListOutput.isPersistent,
                            logicalLink: _this.filterData.filterListOutput.logicalLink,
                            elementFilterList: filterList_1,
                            variantFilterList: variantList_1,
                            siteFilterList: siteList_1,
                            bidoPuProfileList: _this.customProfileTable
                        };
                        _this.componentCockpitFormService.saveFilter(input).subscribe(function (response) {
                            if (!!response.preferenceUserId) {
                                var prefId = {
                                    preferenceUserId: response.preferenceUserId
                                };
                                _this.componentData.objectId = _this.serializationService.serialize(prefId);
                            }
                            _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read);
                            _this.reloadData();
                            _this.messageService.showSuccessMessage(_this.getTranslateKey('createdSuccesfuly'));
                        }, function (err) {
                            // FAILED
                            _this.messageService.showErrorMessage(err.error.errorDetail);
                        });
                    }
                    _this.showSaveSpinner = false;
                }, function (err) {
                    // FAILED
                    _this.messageService.showErrorMessage(err.error.errorDetail);
                    _this.showSaveSpinner = false;
                });
            }
            else {
                var inputData = {
                    bidoPreferenceUserDTO: this.filterData.filterListOutput.bidoPreferenceUserDTO,
                    isPersistent: this.filterData.filterListOutput.isPersistent,
                    logicalLink: this.filterData.filterListOutput.logicalLink,
                    elementFilterList: filterList_1,
                    variantFilterList: variantList_1,
                    siteFilterList: siteList_1,
                    bidoPuProfileList: this.customProfileTable
                };
                this.showSaveSpinner = true;
                this.componentCockpitFormService.saveFilter(inputData).subscribe(function (results) {
                    if (!!_this.filterData.filterListOutput.bidoPreferenceUserDTO) {
                        _this.filterData.filterListOutput.bidoPreferenceUserDTO.preferenceUserId = results.preferenceUserId;
                    }
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('savedSuccesfuly'));
                    _this.reloadData();
                    _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read);
                    _this.showSaveSpinner = false;
                }, function (err) {
                    // FAILED
                    _this.messageService.showErrorMessage(err.error.errorDetail);
                    _this.showSaveSpinner = false;
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fliterElement'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ComponentCockpitFormComponent.prototype, "fliterElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('profileAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ComponentCockpitFormComponent.prototype, "profileAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('variantAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ComponentCockpitFormComponent.prototype, "variantAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('siteAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ComponentCockpitFormComponent.prototype, "siteAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainInformationAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ComponentCockpitFormComponent.prototype, "mainInformationAnchor", void 0);
    ComponentCockpitFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-component-cockpit-form',
            template: __webpack_require__(/*! ./component-cockpit-form.component.html */ "./src/app/main/maintenance/component-cockpit/form/component-cockpit-form/component-cockpit-form.component.html"),
            styles: [__webpack_require__(/*! ./component-cockpit-form.component.scss */ "./src/app/main/maintenance/component-cockpit/form/component-cockpit-form/component-cockpit-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__["TabService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_3__["PageTocService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            _component_cockpit_form_service__WEBPACK_IMPORTED_MODULE_14__["ComponentCockpitFormService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ComponentCockpitFormComponent);
    return ComponentCockpitFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/component-cockpit/form/component-cockpit-form/component-cockpit-form.service.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit/form/component-cockpit-form/component-cockpit-form.service.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ComponentCockpitFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentCockpitFormService", function() { return ComponentCockpitFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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





var ComponentCockpitFormService = /** @class */ (function (_super) {
    __extends(ComponentCockpitFormService, _super);
    function ComponentCockpitFormService(http, appConfigService, userProfileManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.userProfileManagementApi = userProfileManagementApi;
        return _this;
    }
    ComponentCockpitFormService.prototype.getLogicData = function () {
        return _super.prototype.post.call(this, this.userProfileManagementApi.fillLogicLink);
    };
    ComponentCockpitFormService.prototype.getData = function (criteria) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.getBidoPreferenceById, criteria);
    };
    ComponentCockpitFormService.prototype.saveFilter = function (criteria) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.saveBidoFilter, criteria);
    };
    ComponentCockpitFormService.prototype.getProfileDropdown = function () {
        return _super.prototype.post.call(this, this.userProfileManagementApi.fillProfile);
    };
    ComponentCockpitFormService.prototype.getSiteDropdown = function () {
        return _super.prototype.post.call(this, this.userProfileManagementApi.fillSite);
    };
    ComponentCockpitFormService.prototype.getVariantDropdown = function () {
        return _super.prototype.post.call(this, this.userProfileManagementApi.fillVariant);
    };
    ComponentCockpitFormService.prototype.getFilterList = function () {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findFilterList);
    };
    ComponentCockpitFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_2__["UserProfileManagementApi"]])
    ], ComponentCockpitFormService);
    return ComponentCockpitFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/maintenance/component-cockpit/form/popups/dialog-component-cockpit/dialog-component-cockpit.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit/form/popups/dialog-component-cockpit/dialog-component-cockpit.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div *ngIf=\"elementFlag\" class=\"modal-title\">{{ getComponentName() + \".elementPopup\" | translate }}</div>\r\n    <div *ngIf=\"profileFlag\" class=\"modal-title\">{{ getComponentName() + \".profilePopup\" | translate }}</div>\r\n    <div *ngIf=\"variantFlag\" class=\"modal-title\">{{ getComponentName() + \".variantPopup\" | translate }}</div>\r\n    <div *ngIf=\"siteFlag\" class=\"modal-title\">{{ getComponentName() + \".sitePopup\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div *ngIf=\"elementFlag\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n            <label class=\"form-label\"> {{ getComponentName() + \".object\" | translate }} </label>\r\n\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                class=\"aw-dropdown fixed-width\"\r\n                [options]=\"propertyObject\"\r\n                appendTo=\"body\"\r\n                [(ngModel)]=\"dialogData.object\"\r\n                (onChange)=\"loadData()\"\r\n                [showClear]=\"true\"\r\n                placeholder=\"&nbsp;\"\r\n                [disabled]=\"isReadOpenMode\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n            <label class=\"form-label\"> {{ getComponentName() + \".data\" | translate }} </label>\r\n\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                class=\"aw-dropdown fixed-width\"\r\n                [options]=\"propertyData\"\r\n                appendTo=\"body\"\r\n                [(ngModel)]=\"selectedData\"\r\n                (onChange)=\"loadType()\"\r\n                [showClear]=\"true\"\r\n                [disabled]=\"isReadOpenMode\"\r\n                placeholder=\"&nbsp;\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n            <label class=\"form-label\"> {{ getComponentName() + \".type\" | translate }} </label>\r\n\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                class=\"aw-dropdown fixed-width\"\r\n                [options]=\"propertyType\"\r\n                appendTo=\"body\"\r\n                [(ngModel)]=\"dialogData.type\"\r\n                (onChange)=\"loadValue()\"\r\n                [showClear]=\"true\"\r\n                [disabled]=\"isReadOpenMode\"\r\n                placeholder=\"&nbsp;\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\"> {{ getComponentName() + \".value\" | translate }} </label>\r\n\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                class=\"aw-dropdown fixed-width\"\r\n                [options]=\"propertyValue\"\r\n                appendTo=\"body\"\r\n                [(ngModel)]=\"dialogData.value\"\r\n                [showClear]=\"true\"\r\n                [disabled]=\"isReadOpenMode\"\r\n                placeholder=\"&nbsp;\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"profileFlag\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n            <label class=\"form-label\"> {{ getComponentName() + \".profile\" | translate }} </label>\r\n\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                class=\"aw-dropdown fixed-width\"\r\n                [options]=\"propertyProfile\"\r\n                appendTo=\"body\"\r\n                [(ngModel)]=\"profileValue.profileId\"\r\n                [showClear]=\"true\"\r\n                placeholder=\"&nbsp;\"\r\n                [disabled]=\"isReadOpenMode\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"variantFlag\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n            <label class=\"form-label\"> {{ getComponentName() + \".variant\" | translate }} </label>\r\n\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                class=\"aw-dropdown fixed-width\"\r\n                [options]=\"propertyVariant\"\r\n                appendTo=\"body\"\r\n                [(ngModel)]=\"variantValue.name\"\r\n                [showClear]=\"true\"\r\n                placeholder=\"&nbsp;\"\r\n                [disabled]=\"isReadOpenMode\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"siteFlag\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n            <label class=\"form-label\"> {{ getComponentName() + \".site\" | translate }} </label>\r\n\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                class=\"aw-dropdown fixed-width\"\r\n                [options]=\"propertySite\"\r\n                appendTo=\"body\"\r\n                [(ngModel)]=\"siteValue.name\"\r\n                [showClear]=\"true\"\r\n                placeholder=\"&nbsp;\"\r\n                [disabled]=\"isReadOpenMode\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"onValidate()\"\r\n      [disabled]=\"isChecked()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/component-cockpit/form/popups/dialog-component-cockpit/dialog-component-cockpit.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit/form/popups/dialog-component-cockpit/dialog-component-cockpit.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29tcG9uZW50LWNvY2twaXQvZm9ybS9wb3B1cHMvZGlhbG9nLWNvbXBvbmVudC1jb2NrcGl0L2RpYWxvZy1jb21wb25lbnQtY29ja3BpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/maintenance/component-cockpit/form/popups/dialog-component-cockpit/dialog-component-cockpit.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit/form/popups/dialog-component-cockpit/dialog-component-cockpit.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: DialogComponentCockpitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponentCockpitComponent", function() { return DialogComponentCockpitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/utils/label-value-utils */ "./src/app/shared/utils/label-value-utils.ts");
/* harmony import */ var _dialog_component_cockpit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-component-cockpit.service */ "./src/app/main/maintenance/component-cockpit/form/popups/dialog-component-cockpit/dialog-component-cockpit.service.ts");
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







var DialogComponentCockpitComponent = /** @class */ (function (_super) {
    __extends(DialogComponentCockpitComponent, _super);
    function DialogComponentCockpitComponent(sessionService, dialogComponentCockptService, messageService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'DialogComponentCockpitComponent') || this;
        _this.sessionService = sessionService;
        _this.dialogComponentCockptService = dialogComponentCockptService;
        _this.messageService = messageService;
        _this.propertyObject = [];
        _this.propertyData = [];
        _this.propertyType = [];
        _this.propertyValue = [];
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onValidatedOtherData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.variantValue = {};
        _this.siteValue = {};
        _this.profileValue = {};
        _this.selectedData = undefined;
        return _this;
    }
    DialogComponentCockpitComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.dialogData) {
            this.dialogData = {};
        }
        if (this.elementFlag) {
            this.fillDropDown();
        }
    };
    DialogComponentCockpitComponent.prototype.fillDropDown = function () {
        var _this = this;
        this.dialogComponentCockptService.getObjectDropdown().subscribe(function (results) {
            _this.propertyObject = results || [];
        }, function (err) {
            _this.messageService.showErrorMessage(err.error.errorDetail);
        });
        if (!!this.dialogData.object) {
            if (this.dialogData.object === 'e.3') {
                this.propertyData = [];
                this.dialogComponentCockptService.getFilterList().subscribe(function (results) {
                    var data;
                    if (!!results) {
                        results.forEach(function (obj) {
                            if (!!obj.bidoPreferenceUserDTO.preferenceUserId && !!obj.bidoPreferenceUserDTO.description) {
                                data = {
                                    label: obj.bidoPreferenceUserDTO.description,
                                    value: obj.bidoPreferenceUserDTO.preferenceUserId.toString()
                                };
                            }
                            _this.propertyData.push(data);
                        });
                    }
                    else {
                        _this.propertyData = [];
                    }
                    _this.selectedData = _this.dialogData.data;
                }, function (err) {
                    _this.messageService.showErrorMessage(err.error.errorDetail);
                });
            }
            else {
                var data1 = this.dialogData.object;
                this.dialogComponentCockptService.getDataDropdown(data1).subscribe(function (results) {
                    _this.propertyData = results || [];
                    _this.selectedData = _this.dialogData.data;
                }, function (err) {
                    _this.messageService.showErrorMessage(err.error.errorDetail);
                });
            }
        }
        var data2 = {
            objectKey: this.dialogData.object,
            dataKey: this.dialogData.data
        };
        this.dialogComponentCockptService.getTypeDropDown(data2).subscribe(function (results) {
            _this.propertyType = results || [];
        }, function (err) {
            _this.messageService.showErrorMessage(err.error.errorDetail);
        });
        var data3 = {
            objectKey: this.dialogData.object,
            dataKey: this.dialogData.data,
            typeKey: this.dialogData.type
        };
        this.dialogComponentCockptService.getValueDropdown(data3).subscribe(function (results) {
            _this.propertyValue = results || [];
        }, function (err) {
            _this.messageService.showErrorMessage(err.error.errorDetail);
        });
    };
    DialogComponentCockpitComponent.prototype.loadObjectDropdown = function () {
        var _this = this;
        this.dialogComponentCockptService.getObjectDropdown().subscribe(function (results) {
            _this.propertyObject = results || [];
        }, function (err) {
            _this.messageService.showErrorMessage(err.error.errorDetail);
        });
    };
    DialogComponentCockpitComponent.prototype.loadData = function () {
        var _this = this;
        this.selectedData = undefined;
        this.dialogData.data = undefined;
        this.dialogData.type = undefined;
        this.dialogData.value = undefined;
        this.propertyData = [];
        if (!!this.dialogData.object) {
            if (this.dialogData.object === 'e.3') {
                this.dialogComponentCockptService.getFilterList().subscribe(function (results) {
                    var data;
                    if (!!results) {
                        results.forEach(function (obj) {
                            if (!!obj.bidoPreferenceUserDTO.preferenceUserId && !!obj.bidoPreferenceUserDTO.description) {
                                data = {
                                    label: obj.bidoPreferenceUserDTO.description,
                                    value: obj.bidoPreferenceUserDTO.preferenceUserId
                                };
                            }
                            _this.propertyData.push(data);
                        });
                    }
                    else {
                        _this.propertyData = [];
                    }
                }, function (err) {
                    _this.messageService.showErrorMessage(err.error.errorDetail);
                });
            }
            else {
                var data = this.dialogData.object;
                this.dialogComponentCockptService.getDataDropdown(data).subscribe(function (results) {
                    _this.propertyData = results || [];
                }, function (err) {
                    _this.messageService.showErrorMessage(err.error.errorDetail);
                });
            }
        }
    };
    DialogComponentCockpitComponent.prototype.loadType = function () {
        var _this = this;
        this.dialogData.type = undefined;
        this.dialogData.value = undefined;
        this.dialogData.data = this.selectedData;
        var data = {
            objectKey: this.dialogData.object,
            dataKey: this.dialogData.data
        };
        this.dialogComponentCockptService.getTypeDropDown(data).subscribe(function (results) {
            _this.propertyType = results || [];
        }, function (err) {
            _this.messageService.showErrorMessage(err.error.errorDetail);
        });
    };
    DialogComponentCockpitComponent.prototype.loadValue = function () {
        var _this = this;
        this.dialogData.value = undefined;
        this.dialogData.data = this.selectedData;
        var data = {
            objectKey: this.dialogData.object,
            dataKey: this.dialogData.data,
            typeKey: this.dialogData.type
        };
        this.dialogComponentCockptService.getValueDropdown(data).subscribe(function (results) {
            _this.propertyValue = results || [];
        }, function (err) {
            _this.messageService.showErrorMessage(err.error.errorDetail);
        });
    };
    DialogComponentCockpitComponent.prototype.isChecked = function () {
        if ((!this.dialogData.data ||
            !this.dialogData.object ||
            !this.dialogData.type) &&
            !this.variantValue.name &&
            !this.profileValue.profileId &&
            !this.siteValue.name) {
            return true;
        }
        else {
            return false;
        }
    };
    DialogComponentCockpitComponent.prototype.onValidate = function () {
        if (this.elementFlag) {
            this.dialogData.objectKey = this.dialogData.object;
            this.dialogData.typeKey = this.dialogData.type;
            this.dialogData.dataKey = this.dialogData.data;
            this.dialogData.valueKey = !!this.dialogData.value ? this.dialogData.value : '';
            _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_5__["LabelValueUtils"].stringValueToLabel(this.dialogData, 'objectKey', this.propertyObject);
            _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_5__["LabelValueUtils"].stringValueToLabel(this.dialogData, 'dataKey', this.propertyData);
            _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_5__["LabelValueUtils"].stringValueToLabel(this.dialogData, 'typeKey', this.propertyType);
            _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_5__["LabelValueUtils"].stringValueToLabel(this.dialogData, 'valueKey', this.propertyValue);
            this.dialogData.value = !!this.dialogData.value ? this.dialogData.value : '';
            this.dialogData.filterPreferenceFormated =
                this.dialogData.object + ";;" + this.dialogData.data + ";;" + this.dialogData.type + ";;" + this.dialogData.value;
            this.onValidated.emit(this.dialogData);
            this.closeDialog();
        }
        if (this.variantFlag) {
            this.variantValue.filterPreferenceFormated = this.variantValue.name;
            this.onValidatedOtherData.emit(this.variantValue);
            this.closeDialog();
        }
        if (this.siteFlag) {
            this.siteValue.filterPreferenceFormated = this.variantValue.name;
            this.onValidatedOtherData.emit(this.siteValue);
            this.closeDialog();
        }
        if (this.profileFlag) {
            this.onValidatedOtherData.emit(this.profileValue);
            this.closeDialog();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogComponentCockpitComponent.prototype, "elementFlag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogComponentCockpitComponent.prototype, "profileFlag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogComponentCockpitComponent.prototype, "siteFlag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogComponentCockpitComponent.prototype, "variantFlag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogComponentCockpitComponent.prototype, "dialogData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogComponentCockpitComponent.prototype, "propertyProfile", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogComponentCockpitComponent.prototype, "propertySite", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogComponentCockpitComponent.prototype, "propertyVariant", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DialogComponentCockpitComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogComponentCockpitComponent.prototype, "onValidated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogComponentCockpitComponent.prototype, "onValidatedOtherData", void 0);
    DialogComponentCockpitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-component-cockpit',
            template: __webpack_require__(/*! ./dialog-component-cockpit.component.html */ "./src/app/main/maintenance/component-cockpit/form/popups/dialog-component-cockpit/dialog-component-cockpit.component.html"),
            styles: [__webpack_require__(/*! ./dialog-component-cockpit.component.scss */ "./src/app/main/maintenance/component-cockpit/form/popups/dialog-component-cockpit/dialog-component-cockpit.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _dialog_component_cockpit_service__WEBPACK_IMPORTED_MODULE_6__["DialogComponentCockptService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], DialogComponentCockpitComponent);
    return DialogComponentCockpitComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/component-cockpit/form/popups/dialog-component-cockpit/dialog-component-cockpit.service.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit/form/popups/dialog-component-cockpit/dialog-component-cockpit.service.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DialogComponentCockptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponentCockptService", function() { return DialogComponentCockptService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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





var DialogComponentCockptService = /** @class */ (function (_super) {
    __extends(DialogComponentCockptService, _super);
    function DialogComponentCockptService(http, appConfigService, userProfileManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.userProfileManagementApi = userProfileManagementApi;
        return _this;
    }
    DialogComponentCockptService.prototype.getObjectDropdown = function () {
        return _super.prototype.post.call(this, this.userProfileManagementApi.fillObject);
    };
    DialogComponentCockptService.prototype.getDataDropdown = function (input) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.fillData, input);
    };
    DialogComponentCockptService.prototype.getTypeDropDown = function (input) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.fillType, input);
    };
    DialogComponentCockptService.prototype.getValueDropdown = function (input) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.fillValue, input);
    };
    DialogComponentCockptService.prototype.getFilterList = function () {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findFilterList);
    };
    DialogComponentCockptService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_2__["UserProfileManagementApi"]])
    ], DialogComponentCockptService);
    return DialogComponentCockptService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/maintenance/component-cockpit/search/component-cockpit-search/component-cockpit-search.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit/search/component-cockpit-search/component-cockpit-search.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ componentData.componentId + \".title\" | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ \"page.searchPage\" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"refresh()\">\r\n      {{ \"global.refresh\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" mat-raised-button (click)=\"openNewFilter()\" *ngIf=\"hasUpdateAccessRight\">\r\n      {{ \"global.create\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }}\r\n                  ({{ resultsTable ? resultsTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #table\r\n                class=\"aw-table2\"\r\n                [columns]=\"resultsTableCols\"\r\n                [value]=\"resultsTable\"\r\n                [style]=\"{ margin: '0 auto', width: '100%' }\"\r\n                [(selection)]=\"selectedFilterList\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedFilterList.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"table.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"resultsTable && resultsTable.length > 0 && selectedFilterList.length === 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"exportTable()\"\r\n                      >\r\n                        {{ \"global.export\" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf=\"hasManageAccessRight && selectedFilterList.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteSelectedFilterList()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf=\"selectedFilterList.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openSelectedFilterList()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <span *ngSwitchCase=\"'isPersistent'\">\r\n                        <i\r\n                          *ngIf=\"rowData[col.field] !== null && rowData[col.field]\"\r\n                          class=\"fa fa-fw fa-check\"\r\n                          aria-hidden=\"true\"\r\n                        ></i>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'isPublic'\">\r\n                        <i\r\n                          *ngIf=\"rowData[col.field] !== null && rowData[col.field]\"\r\n                          class=\"fa fa-fw fa-check\"\r\n                          aria-hidden=\"true\"\r\n                        ></i>\r\n                      </span>\r\n                      <span *ngSwitchCase=\"'graphicalReference'\">\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'RedTriangle'\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-caret-up\"\r\n                            style=\"color: red;font-size: 30px;margin-left: -7px;\"\r\n                            aria-hidden=\"true\"\r\n                          ></i>\r\n                        </span>\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'RedSquare'\">\r\n                          <i class=\"fa fa-fw fa-square\" style=\"color: red;font-size: 18px;\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'RedCircle'\">\r\n                          <i class=\"fa fa-fw fa-circle\" style=\"color: red;font-size: 18px;\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'YellowTriangle'\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-caret-up\"\r\n                            style=\"color: #FFBF00;font-size: 30px;margin-left: -7px;\"\r\n                            aria-hidden=\"true\"\r\n                          ></i>\r\n                        </span>\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'YellowSquare'\">\r\n                          <i class=\"fa fa-fw fa-square\" style=\"color: #FFBF00;font-size: 18px;\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'YellowCircle'\">\r\n                          <i class=\"fa fa-fw fa-circle\" style=\"color: #FFBF00;font-size: 18px;\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'GreenTriangle'\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-caret-up\"\r\n                            style=\"color: lightgreen;font-size: 30px;margin-left: -7px;\"\r\n                            aria-hidden=\"true\"\r\n                          ></i>\r\n                        </span>\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'GreenSquare'\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-square\"\r\n                            style=\"color: lightgreen;font-size: 18px;\"\r\n                            aria-hidden=\"true\"\r\n                          ></i>\r\n                        </span>\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'GreenCircle'\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-circle\"\r\n                            style=\"color: lightgreen;font-size: 18px;\"\r\n                            aria-hidden=\"true\"\r\n                          ></i>\r\n                        </span>\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'GreyTriangle'\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-caret-up\"\r\n                            style=\"color: grey;font-size: 30px;margin-left: -7px;\"\r\n                            aria-hidden=\"true\"\r\n                          ></i>\r\n                        </span>\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'GreySquare'\">\r\n                          <i class=\"fa fa-fw fa-square\" style=\"color: grey;font-size: 18px;\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'GreyCircle'\">\r\n                          <i class=\"fa fa-fw fa-circle\" style=\"color: grey;font-size: 18px;\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'BlueTriangle'\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-caret-up\"\r\n                            style=\"color: blue;font-size: 30px;margin-left: -7px;\"\r\n                            aria-hidden=\"true\"\r\n                          ></i>\r\n                        </span>\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'BlueSquare'\">\r\n                          <i class=\"fa fa-fw fa-square\" style=\"color: blue;font-size: 18px;\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field] === 'BlueCircle'\">\r\n                          <i class=\"fa fa-fw fa-circle\" style=\"color: blue;font-size: 18px;\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                      </span>\r\n\r\n                      <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/component-cockpit/search/component-cockpit-search/component-cockpit-search.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit/search/component-cockpit-search/component-cockpit-search.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29tcG9uZW50LWNvY2twaXQvc2VhcmNoL2NvbXBvbmVudC1jb2NrcGl0LXNlYXJjaC9jb21wb25lbnQtY29ja3BpdC1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/maintenance/component-cockpit/search/component-cockpit-search/component-cockpit-search.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit/search/component-cockpit-search/component-cockpit-search.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: ComponentCockpitSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentCockpitSearchComponent", function() { return ComponentCockpitSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/export.service */ "./src/app/shared/services/export.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _component_cockpit_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component-cockpit-search.service */ "./src/app/main/maintenance/component-cockpit/search/component-cockpit-search/component-cockpit-search.service.ts");
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













var ComponentCockpitSearchComponent = /** @class */ (function (_super) {
    __extends(ComponentCockpitSearchComponent, _super);
    function ComponentCockpitSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, confirmationService, exportService, componentCockpitSearchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.confirmationService = confirmationService;
        _this.exportService = exportService;
        _this.componentCockpitSearchService = componentCockpitSearchService;
        _this.resultsTableCols = [
            { field: 'filterName', alignment: 'left' },
            { field: 'graphicalReference', alignment: 'left' },
            { field: 'isPublic', alignment: 'left' },
            { field: 'author', alignment: 'left' },
            { field: 'isPersistent', alignment: 'left' },
        ];
        _this.resultsTable = [];
        _this.selectedFilterList = [];
        _this.isLoading = false;
        return _this;
    }
    ComponentCockpitSearchComponent_1 = ComponentCockpitSearchComponent;
    ComponentCockpitSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
        this.LoadFilterList();
    };
    ComponentCockpitSearchComponent.prototype.getComponentName = function () {
        return 'ComponentCockpitSearchComponent';
    };
    ComponentCockpitSearchComponent.prototype.LoadFilterList = function () {
        var _this = this;
        this.componentCockpitSearchService.getFilterList().subscribe(function (results) {
            _this.resultsTable = results;
        });
    };
    ComponentCockpitSearchComponent.prototype.refresh = function () {
        this.LoadFilterList();
        this.selectedFilterList = [];
    };
    ComponentCockpitSearchComponent.prototype.exportTable = function () {
        var temp = [];
        this.resultsTable.forEach(function (obj) {
            var row = {
                filterName: obj.filterName,
                isPublic: obj.isPublic,
                author: obj.author,
                isPersistent: obj.isPersistent,
            };
            temp.push(row);
        });
        this.exportService.toExcel(temp, ComponentCockpitSearchComponent_1.FILTER_TABLE_EXPORT_NAME, this.componentData.componentId);
    };
    ComponentCockpitSearchComponent.prototype.deleteSelectedFilterList = function () {
        var _this = this;
        var confirmMessageKey = this.selectedFilterList.length > 1
            ? 'confirmDeleteSelectedLists'
            : 'confirmDeleteSelectedList';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(confirmMessageKey),
            accept: function () {
                // tslint:disable-next-line:no-any
                var removeList = [];
                _this.selectedFilterList.forEach(function (obj) {
                    if (!!obj.bidoPreferenceUserDTO && !!obj.bidoPreferenceUserDTO.preferenceUserId) {
                        removeList.push(obj.bidoPreferenceUserDTO);
                    }
                });
                _this.componentCockpitSearchService.removeFilterList(removeList).subscribe(function () {
                    _this.LoadFilterList();
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('onSuccessDeleteList'));
                }, function (err) {
                    _this.messageService.showErrorMessage(err.error.errorDetail);
                });
                _this.selectedFilterList = [];
            }
        });
    };
    ComponentCockpitSearchComponent.prototype.openNewFilter = function () {
        this.openCockpitFilter(undefined, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Create);
    };
    ComponentCockpitSearchComponent.prototype.openSelectedFilterList = function () {
        var _this = this;
        this.selectedFilterList.forEach(function (obj) {
            if (!!obj.bidoPreferenceUserDTO) {
                if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__["StringUtils"].isNullOrEmpty(obj.bidoPreferenceUserDTO.preferenceUserId)) {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('errorOnMissingstoreID'));
                }
                else {
                    _this.openCockpitFilter(obj.bidoPreferenceUserDTO.preferenceUserId, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Read);
                }
            }
        });
    };
    ComponentCockpitSearchComponent.prototype.openCockpitFilter = function (objectId, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__["ComponentConstants"].MAI_COMPONENT_COCKPIT_FORM,
            openMode: openMode
        };
        if (!!objectId) {
            var prefId = {
                preferenceUserId: objectId
            };
            data.objectId = this.serializationService.serialize(prefId);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    var ComponentCockpitSearchComponent_1;
    ComponentCockpitSearchComponent.FILTER_TABLE_EXPORT_NAME = 'Cockpit-filter-list';
    ComponentCockpitSearchComponent = ComponentCockpitSearchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-component-cockpit-search',
            template: __webpack_require__(/*! ./component-cockpit-search.component.html */ "./src/app/main/maintenance/component-cockpit/search/component-cockpit-search/component-cockpit-search.component.html"),
            styles: [__webpack_require__(/*! ./component-cockpit-search.component.scss */ "./src/app/main/maintenance/component-cockpit/search/component-cockpit-search/component-cockpit-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__["TabService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _shared_services_export_service__WEBPACK_IMPORTED_MODULE_4__["ExportService"],
            _component_cockpit_search_service__WEBPACK_IMPORTED_MODULE_12__["ComponentCockpitSearchService"]])
    ], ComponentCockpitSearchComponent);
    return ComponentCockpitSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/component-cockpit/search/component-cockpit-search/component-cockpit-search.service.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit/search/component-cockpit-search/component-cockpit-search.service.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ComponentCockpitSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentCockpitSearchService", function() { return ComponentCockpitSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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





var ComponentCockpitSearchService = /** @class */ (function (_super) {
    __extends(ComponentCockpitSearchService, _super);
    function ComponentCockpitSearchService(http, appConfigService, userProfileManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.userProfileManagementApi = userProfileManagementApi;
        return _this;
    }
    ComponentCockpitSearchService.prototype.getFilterList = function () {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findFilterList);
    };
    ComponentCockpitSearchService.prototype.removeFilterList = function (criteria) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.removeBidoUserFilter, criteria);
    };
    ComponentCockpitSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_2__["UserProfileManagementApi"]])
    ], ComponentCockpitSearchService);
    return ComponentCockpitSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/utils/label-value-utils.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/utils/label-value-utils.ts ***!
  \***************************************************/
/*! exports provided: LabelValueUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelValueUtils", function() { return LabelValueUtils; });
var LabelValueUtils = /** @class */ (function () {
    function LabelValueUtils() {
    }
    /*
     * DEPRECATED: do not use; create an interface instead
     */
    LabelValueUtils.stringValueToLabel = function (object, propertyName, propertyList) {
        if (!!object[propertyName]) {
            var labelValue = propertyList.find(function (property) { return property.value === object[propertyName]; });
            if (!!labelValue) {
                object[propertyName] = labelValue.label;
                return true;
            }
        }
        return false;
    };
    /*
     * DEPRECATED: do not use; create an interface instead
     */
    LabelValueUtils.labelToStringValue = function (object, propertyName, propertyList) {
        if (!!object[propertyName]) {
            var labelValue = propertyList.find(function (property) { return property.label === object[propertyName]; });
            if (!!labelValue) {
                object[propertyName] = labelValue.value;
                return true;
            }
        }
        return false;
    };
    return LabelValueUtils;
}());



/***/ })

}]);
//# sourceMappingURL=maintenance-component-cockpit-component-cockpit-module.js.map